'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Sidebar from '@/components/Sidebar';
import LogoutButton from '@/components/forms/LogoutButton';
import { useUser } from '@/context/userContext';

const UserProfilePage = () => {
  const router = useRouter();
  const { userId, username, role, isLoading, isAuthenticated } = useUser();
  const [redirecting, setRedirecting] = useState(false);

  // Redirect unauthenticated users
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      setRedirecting(true);
      router.push('/login');
    }
  }, [isLoading, isAuthenticated, router]);

  const handleLogout = async () => {
    try {
      await axios.post('/api/auth/logout');
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      // Force redirect even if API call fails
      router.push('/login');
    }
  };

  if (isLoading || redirecting) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-xl text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex">
      <Sidebar role={role || 'donor'} onLogout={handleLogout} />

      <div className="flex-1 p-8">
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-16">
          <h1 className="text-4xl font-semibold text-gray-900">User Profile</h1>
          <p className="mt-4 text-xl text-gray-700">
            ID: <span className="font-medium text-gray-900">{userId}</span>
          </p>
          <p className="mt-2 text-xl text-gray-700">
            Username: <span className="font-medium text-gray-900">{username}</span>
          </p>
          <p className="mt-2 text-xl text-gray-700">
            Role: <span className="font-medium text-gray-900">{role}</span>
          </p>

          <div className="mt-6">
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
