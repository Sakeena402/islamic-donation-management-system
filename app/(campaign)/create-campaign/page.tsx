'use client';
import React from 'react';
import CampaignForm from '@/components/forms/CampaignForm';
import { motion } from 'framer-motion';

const CreateCampaignPage = () => {
  const handleFormSubmit = (data: {
    // name: string;
    // description: string;
    // startDate: string;
    // endDate: string;
    // goalAmount: number;
    // image: File | null;
    // category: string;

    title: string;
    description: string;
    startDate: string;
    endDate: string;
    targetAmount: number;
    image: File | null;
    category: string;
    purpose: string;
    createdBy: string;
  requestedBy: string,  // Add this field to store user ID
    userRole: string; 
  }) => {
    // Handle the form submission logic (API call or state update)
    console.log('Campaign Created:', data);
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-[#f7f7f7] relative"
      style={{
        backgroundImage: "url('/image333.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <CampaignForm onSubmit={handleFormSubmit} />
    </motion.div>
  );
};

export default CreateCampaignPage;
