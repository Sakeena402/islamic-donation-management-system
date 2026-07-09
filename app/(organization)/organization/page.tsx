'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

interface Organization {
  _id: string;
  name: string;
  description: string;
  category: string;
  head: { _id: string; username: string };
  organizers: Array<{ _id: string; username: string }>;
  campaigns: any[];
  donations: any[];
  isApproved: boolean;
}

export default function OrganizationDetailPage() {
  const searchParams = useSearchParams();
  const orgId = searchParams.get('id');
  const [organization, setOrganization] = useState<Organization | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (orgId) {
      fetchOrganization();
    }
  }, [orgId]);

  const fetchOrganization = async () => {
    try {
      const response = await axios.get(`/api/organization?id=${orgId}`);
      setOrganization(response.data.data);
    } catch (error) {
      console.error('Failed to fetch organization:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>;
  }

  if (!organization) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Organization not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/organization/organizations" className="text-blue-600 hover:text-blue-800 mb-6 block">
          ← Back to Organizations
        </Link>

        <div className="bg-white rounded-lg shadow p-8">
          <div className="mb-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{organization.name}</h1>
                <p className="text-gray-600">{organization.description}</p>
              </div>
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${organization.isApproved ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                {organization.isApproved ? 'Approved' : 'Pending'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Category</p>
                <p className="text-lg font-medium text-gray-900 capitalize">{organization.category}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Head</p>
                <p className="text-lg font-medium text-gray-900">{organization.head?.username}</p>
              </div>
            </div>
          </div>

          <div className="border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Team Members</h2>
            <div className="space-y-2">
              {organization.organizers.map(organizer => (
                <p key={organizer._id} className="text-gray-700">
                  • {organizer.username}
                </p>
              ))}
            </div>
          </div>

          <div className="border-t pt-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Campaigns ({organization.campaigns?.length || 0})</h2>
            {organization.campaigns && organization.campaigns.length > 0 ? (
              <div className="space-y-2">
                {organization.campaigns.map((campaign: any) => (
                  <Link
                    key={campaign._id}
                    href={`/campaign?id=${campaign._id}`}
                    className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
                  >
                    <p className="font-medium text-blue-600">{campaign.title}</p>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No campaigns yet</p>
            )}
          </div>

          <div className="border-t pt-8 mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Total Donations ({organization.donations?.length || 0})</h2>
            <p className="text-gray-600">View detailed donation reports on your dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}
