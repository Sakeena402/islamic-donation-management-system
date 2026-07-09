'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface Organization {
  _id: string;
  name: string;
  description: string;
  category: string;
  head: { _id: string; username: string };
  organizers: Array<{ _id: string; username: string }>;
  isApproved: boolean;
}

export default function OrganizationsListPage() {
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetchOrganizations();
  }, [selectedCategory]);

  const fetchOrganizations = async () => {
    try {
      const params = new URLSearchParams({ approved: 'true' });
      if (selectedCategory) params.append('category', selectedCategory);

      const response = await axios.get(`/api/organization?${params}`);
      setOrganizations(response.data.data);
    } catch (error) {
      console.error('Failed to fetch organizations:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Organizations</h1>

          <div className="flex gap-4">
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Categories</option>
              <option value="education">Education</option>
              <option value="healthcare">Healthcare</option>
              <option value="environment">Environment</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center">Loading...</div>
        ) : organizations.length === 0 ? (
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <p className="text-gray-600">No organizations found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizations.map(org => (
              <Link
                key={org._id}
                href={`/organization?id=${org._id}`}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{org.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{org.description}</p>

                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-500">
                    Head: <span className="font-medium text-gray-900">{org.head?.username}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Category: <span className="font-medium capitalize text-gray-900">{org.category}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Members: <span className="font-medium text-gray-900">{org.organizers?.length || 0}</span>
                  </p>
                </div>

                <div className="text-blue-600 font-medium hover:text-blue-800">View Details →</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
