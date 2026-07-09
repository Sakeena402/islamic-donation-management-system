'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@/context/userContext';
import axios from 'axios';

export default function AdminOrganizationsPage() {
  const { user, isAuthenticated } = useUser();
  const [organizations, setOrganizations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [rejectingId, setRejectingId] = useState<string | null>(null);
  const [rejectReason, setRejectReason] = useState('');

  useEffect(() => {
    if (isAuthenticated && user?.role === 'Admin') {
      fetchPendingOrganizations();
    }
  }, [isAuthenticated, user]);

  const fetchPendingOrganizations = async () => {
    try {
      const response = await axios.get('/api/organization/approve');
      setOrganizations(response.data.data);
    } catch (error) {
      console.error('Failed to fetch organizations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleApprove = async (orgId: string) => {
    try {
      await axios.post('/api/organization/approve', { organizationId: orgId, action: 'approve' });
      setOrganizations(organizations.filter(o => o._id !== orgId));
    } catch (error) {
      alert('Failed to approve organization');
    }
  };

  const handleReject = async (orgId: string) => {
    if (!rejectReason.trim()) {
      alert('Please provide a rejection reason');
      return;
    }

    try {
      await axios.post('/api/organization/approve', {
        organizationId: orgId,
        action: 'reject',
        reason: rejectReason,
      });
      setOrganizations(organizations.filter(o => o._id !== orgId));
      setRejectingId(null);
      setRejectReason('');
    } catch (error) {
      alert('Failed to reject organization');
    }
  };

  if (!isAuthenticated || user?.role !== 'Admin') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Access denied. Admin only.</p>
      </div>
    );
  }

  if (isLoading) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Pending Organization Requests</h1>

        {organizations.length === 0 ? (
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <p className="text-gray-600">No pending organizations</p>
          </div>
        ) : (
          <div className="space-y-4">
            {organizations.map(org => (
              <div key={org._id} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{org.name}</h3>
                <p className="text-gray-600 mb-4">{org.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      Requested by: <span className="font-medium text-gray-900">{org.requestedBy?.username || 'Unknown'}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                      Category: <span className="font-medium text-gray-900">{org.category}</span>
                    </p>
                  </div>
                </div>

                {rejectingId === org._id ? (
                  <div className="space-y-2">
                    <textarea
                      value={rejectReason}
                      onChange={e => setRejectReason(e.target.value)}
                      placeholder="Provide rejection reason..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      rows={3}
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleReject(org._id)}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                      >
                        Confirm Rejection
                      </button>
                      <button
                        onClick={() => {
                          setRejectingId(null);
                          setRejectReason('');
                        }}
                        className="px-4 py-2 bg-gray-300 text-gray-900 rounded-lg hover:bg-gray-400"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleApprove(org._id)}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => setRejectingId(org._id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      Reject
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
