'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface CampaignCardProps {
  campaign: {
    _id: string;
    title: string;
    description: string;
    image?: string;
    category: string;
    purpose: string;
    targetAmount: number;
    collectedAmount?: number;
    createdBy?: { username?: string; email?: string } | string;
  };
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
  const collectedAmount = campaign.collectedAmount || 0;
  const progressPercentage = (collectedAmount / campaign.targetAmount) * 100;
  const organizer = typeof campaign.createdBy === 'string' 
    ? campaign.createdBy 
    : campaign.createdBy?.username || 'Unknown Organizer';

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Image */}
      <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
        {campaign.image ? (
          <img
            src={campaign.image}
            alt={campaign.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 text-blue-400">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category Badge */}
        <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">
          {campaign.category}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{campaign.title}</h3>

        {/* Organizer */}
        <p className="text-sm text-gray-600 mb-2">by {organizer}</p>

        {/* Purpose */}
        <p className="text-xs text-gray-500 mb-3 capitalize">Type: {campaign.purpose}</p>

        {/* Description */}
        <p className="text-sm text-gray-700 mb-3 line-clamp-2">{campaign.description}</p>

        {/* Amount Progress */}
        <div className="mb-3">
          <div className="flex justify-between items-center mb-1">
            <p className="text-sm font-semibold text-green-600">
              ₹{collectedAmount.toLocaleString('en-IN')} raised
            </p>
            <p className="text-xs text-gray-500">
              of ₹{campaign.targetAmount.toLocaleString('en-IN')}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-500"
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            ></div>
          </div>

          {/* Progress Percentage */}
          <p className="text-xs text-gray-500 mt-1">
            {Math.round(progressPercentage)}% funded
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-4">
          <Link
            href={`/donation?campaignId=${campaign._id}`}
            className="flex-1 bg-gradient-to-r from-green-500 to-green-700 text-white px-4 py-2 rounded-lg shadow hover:shadow-lg transition-all duration-300 text-center text-sm font-semibold"
          >
            Donate Now
          </Link>
          <button className="text-gray-400 hover:text-gray-600 transition-colors duration-300 p-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C9.589 12.534 10 11.682 10 10.5C10 9.119 9.105 8 8 8s-2 1.119-2 2.5S6.895 13 8 13zm6.564 5.365l-7.07-7.07m1.414-1.414l2.828-2.829m1.414-1.414L12 7m7 7v4m0 0H9" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CampaignCard;
