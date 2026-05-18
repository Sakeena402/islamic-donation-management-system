'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@/context/userContext';
import axios from 'axios';
import Link from 'next/link';

interface Organization {
  _id: string;
  name: string;
  description: string;
  category: string;
  isApproved: boolean;
  campaigns: any[];
  donations: any[];
  organizers: Array<{ _id: string; username: string }>;
}

export default function MyOrganizationPage() {
  const { user, isAuthenticated } = useUser();
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated && user?.role === 'Organizer') {
      fetchMyOrganizations();
    }
  }, [isAuthenticated, user]);

  const fetchMyOrganizations = async () => {
    try {
      const response = await axios.get('/api/organization');
      const allOrgs = response.data.data;
      const myOrgs = allOrgs.filter((org: Organization) =>
        org.organizers.some((o: any) => o._id === user?._id)
      );
      setOrganizations(myOrgs);
    } catch (error) {
      console.error('Failed to fetch organizations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated || user?.role !== 'Organizer') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Access denied. Organizers only.</p>
      </div>
    );
  }

  if (isLoading) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Organizations</h1>
          <Link href="/organization/create-organization" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Create Organization
          </Link>
        </div>

        {organizations.length === 0 ? (
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <p className="text-gray-600 mb-4">You don&apos;t have any organizations yet</p>
            <Link href="/organization/create-organization" className="text-blue-600 hover:text-blue-800">
              Create your first organization
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {organizations.map(org => (
              <div key={org._id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{org.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${org.isApproved ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {org.isApproved ? 'Active' : 'Pending'}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">{org.description}</p>

                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-500">
                    Category: <span className="font-medium capitalize">{org.category}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Campaigns: <span className="font-medium">{org.campaigns?.length || 0}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Donations: <span className="font-medium">{org.donations?.length || 0}</span>
                  </p>
                </div>

                <Link href={`/organization?id=${org._id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
