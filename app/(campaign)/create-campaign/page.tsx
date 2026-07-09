'use client';
import React from 'react';
import CampaignForm from '@/components/forms/CampaignForm';
import { useUser } from '@/context/userContext';
import { motion } from 'framer-motion';
import Link from 'next/link';

const CreateCampaignPage = () => {
  const { isAuthenticated, role } = useUser();

  if (!isAuthenticated) {
    return (
      <motion.div
        className="min-h-screen flex items-center justify-center bg-gray-50 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-8">You must be logged in to create a campaign.</p>
          <Link
            href="/login"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go to Login
          </Link>
        </div>
      </motion.div>
    );
  }

  if (!['admin', 'organizer'].includes(role?.toLowerCase() || '')) {
    return (
      <motion.div
        className="min-h-screen flex items-center justify-center bg-gray-50 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Unauthorized</h1>
          <p className="text-gray-600 mb-8">Only admins and organizers can create campaigns.</p>
          <Link
            href="/"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <CampaignForm />
    </motion.div>
  );
};

export default CreateCampaignPage;
