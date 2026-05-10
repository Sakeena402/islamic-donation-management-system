'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/userContext';
import axios from 'axios';
import { motion } from 'framer-motion';

interface Campaign {
  _id: string;
  title: string;
  description: string;
  category: string;
  purpose: string;
  targetAmount: number;
  createdBy?: { username?: string; email?: string };
  requestedBy?: { username?: string; email?: string };
  reasonForRejection?: string;
  createdAt?: string;
}

const AdminCampaignDashboard = () => {
  const router = useRouter();
  const { role, isAuthenticated } = useUser();
  const [pendingCampaigns, setPendingCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actionInProgress, setActionInProgress] = useState<string | null>(null);
  const [rejectionReason, setRejectionReason] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (!isAuthenticated || role?.toLowerCase() !== 'admin') {
      router.push('/');
      return;
    }

    fetchPendingCampaigns();
  }, [isAuthenticated, role, router]);

  const fetchPendingCampaigns = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/campaign/approve');
      if (response.data.success) {
        setPendingCampaigns(response.data.data || []);
      } else {
        setError(response.data.error || 'Failed to fetch pending campaigns');
      }
    } catch (err) {
      console.error('[v0] Error fetching pending campaigns:', err);
      setError('Failed to load pending campaigns');
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (campaignId: string) => {
    setActionInProgress(campaignId);
    try {
      const response = await axios.post('/api/campaign/approve', {
        campaignId,
      });

      if (response.data.success) {
        setPendingCampaigns(prev => prev.filter(c => c._id !== campaignId));
        setActionInProgress(null);
      }
    } catch (err) {
      console.error('[v0] Error approving campaign:', err);
      alert('Failed to approve campaign');
      setActionInProgress(null);
    }
  };

  const handleReject = async (campaignId: string) => {
    const reason = rejectionReason[campaignId]?.trim();
    if (!reason) {
      alert('Please provide a rejection reason');
      return;
    }

    setActionInProgress(campaignId);
    try {
      const response = await axios.put('/api/campaign/approve', {
        campaignId,
        reason,
      });

      if (response.data.success) {
        setPendingCampaigns(prev => prev.filter(c => c._id !== campaignId));
        setRejectionReason(prev => ({ ...prev, [campaignId]: '' }));
        setActionInProgress(null);
      }
    } catch (err) {
      console.error('[v0] Error rejecting campaign:', err);
      alert('Failed to reject campaign');
      setActionInProgress(null);
    }
  };

  if (!isAuthenticated || role?.toLowerCase() !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Redirecting...</p>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Campaign Management</h1>
          <p className="text-gray-600">Review and approve pending campaigns</p>
        </motion.div>

        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading pending campaigns...</p>
          </div>
        ) : pendingCampaigns.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-500 text-lg">No pending campaigns to review</p>
          </div>
        ) : (
          <div className="space-y-6">
            {pendingCampaigns.map((campaign, index) => (
              <motion.div
                key={campaign._id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-6">
                  {/* Campaign Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{campaign.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Requested by: {campaign.requestedBy?.username || 'Unknown'}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                        {campaign.category}
                      </span>
                      <span className="ml-2 inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                        {campaign.purpose}
                      </span>
                    </div>
                  </div>

                  {/* Campaign Details */}
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <p className="text-gray-700 mb-3">{campaign.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-gray-600">Target Amount:</span>
                        <p className="text-gray-900">₹{campaign.targetAmount.toLocaleString('en-IN')}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-600">Created By:</span>
                        <p className="text-gray-900">{campaign.createdBy?.username || 'Unknown'}</p>
                      </div>
                    </div>
                  </div>

                  {/* Rejection Reason Input */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Rejection Reason (if rejecting):
                    </label>
                    <textarea
                      value={rejectionReason[campaign._id] || ''}
                      onChange={(e) =>
                        setRejectionReason(prev => ({
                          ...prev,
                          [campaign._id]: e.target.value,
                        }))
                      }
                      placeholder="Provide a reason for rejection..."
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      disabled={actionInProgress === campaign._id}
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      onClick={() => handleApprove(campaign._id)}
                      disabled={actionInProgress === campaign._id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                    >
                      {actionInProgress === campaign._id ? 'Processing...' : 'Approve'}
                    </motion.button>
                    <motion.button
                      onClick={() => handleReject(campaign._id)}
                      disabled={actionInProgress === campaign._id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                    >
                      {actionInProgress === campaign._id ? 'Processing...' : 'Reject'}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default AdminCampaignDashboard;
