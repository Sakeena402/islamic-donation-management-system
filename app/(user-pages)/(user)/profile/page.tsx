'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from '@/components/Sidebar';  // Adjust import according to your folder structure
import LogoutButton from '@/components/forms/LogoutButton';
import { getUserDetails } from '@/helpers/getUserDetails';  // Import the helper function

const UserProfilePage = () => {
  const [userDetails, setUserDetails] = useState<{ id: string; role: string; username: string } | null>(null);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const data = await getUserDetails();
        setUserDetails(data);
  
        if (data.role === 'Donor' && !window.location.pathname.startsWith('/profile')) {
          window.location.href = '/user-pages/user/profile';
        // } else if (data.role === 'Organizer' && !window.location.pathname.startsWith('/organizer')) {
        //   window.location.href = '/organizer';
        // } else if (data.role === 'Admin' && !window.location.pathname.startsWith('/profile')) {
        //   window.location.href = '/profile';
        }
      } catch (error) {
        setError("Unable to fetch user details.");
      }
    };
  
    fetchUserDetails();
  }, []);
  
  const handleLogout = () => {
    // Handle the logout functionality
    localStorage.removeItem('userRole');  // Example of clearing user data, adjust as needed
    window.location.href = '/login';  // Redirect to login page
  };

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
    <div className="flex">
      <Sidebar role={userDetails.role} onLogout={handleLogout} />
      
      <div className="flex-1 p-8">
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-16">
          <h1 className="text-4xl font-semibold text-gray-900">User Profile</h1>
          <p className="mt-4 text-xl text-gray-700">ID: <span className="font-medium text-gray-900">{userDetails.id}</span></p>
          <p className="mt-2 text-xl text-gray-700">Username: <span className="font-medium text-gray-900">{userDetails.username}</span></p>
          <p className="mt-2 text-xl text-gray-700">Role: <span className="font-medium text-gray-900">{userDetails.role}</span></p>

          <div className="mt-6">
       <LogoutButton/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
