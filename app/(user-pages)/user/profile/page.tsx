'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import LogoutButton from '@/components/forms/LogoutButton';

const UserProfilePage = () => {
  const [userDetails, setUserDetails] = useState<{ id: string; role: string; username: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get('/api/auth/get-user-details');  // Fetch from API route
        setUserDetails(response.data.data);
      } catch (error) {
        setError("Unable to fetch user details.");
      }
    };
    
    fetchUserDetails();
  }, []);

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-xl text-red-500">{error}</div>
      </div>
    );
  }

  if (!userDetails) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-xl text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl justify-center items-center   mx-auto p-8 bg-white shadow-lg rounded-lg mt-16">
      <h1 className="text-4xl font-semibold text-gray-900">User Profile</h1>
      <p className="mt-4 text-xl text-gray-700">ID: <span className="font-medium text-gray-900">{userDetails.id}</span></p>
      <p className="mt-2 text-xl text-gray-700">Username: <span className="font-medium text-gray-900">{userDetails.username}</span></p>
      <p className="mt-2 text-xl text-gray-700">Role: <span className="font-medium text-gray-900">{userDetails.role}</span></p>

      <div className="mt-6">
        <LogoutButton />
      </div>
    </div>
  );
};

export default UserProfilePage;
