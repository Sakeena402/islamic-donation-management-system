'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useUser } from '@/context/userContext';
import { SubmitButton } from '@/components/forms/SubmitButton';

export function OrganizationForm() {
  const router = useRouter();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'education',
    accountHolder: '',
    accountNumber: '',
    routingNumber: '',
    accountType: 'checking',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (!formData.name.trim() || !formData.description.trim()) {
      setError('Organization name and description are required');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post('/api/organization', {
        name: formData.name,
        description: formData.description,
        category: formData.category,
        accountHolder: formData.accountHolder,
        accountNumber: formData.accountNumber,
        routingNumber: formData.routingNumber,
        accountType: formData.accountType,
      });

      if (response.status === 201) {
        setSuccess(true);
        setFormData({
          name: '',
          description: '',
          category: 'education',
          accountHolder: '',
          accountNumber: '',
          routingNumber: '',
          accountType: 'checking',
        });
        setTimeout(() => {
          router.push(`/organization?id=${response.data.data._id}`);
        }, 1500);
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error || 'Failed to create organization');
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-6">
      {error && <div className="p-4 bg-red-50 text-red-700 rounded-lg">{error}</div>}
      {success && <div className="p-4 bg-green-50 text-green-700 rounded-lg">Organization created successfully! Redirecting...</div>}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter organization name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Tell us about your organization"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="education">Education</option>
          <option value="healthcare">Healthcare</option>
          <option value="environment">Environment</option>
          <option value="others">Others</option>
        </select>
      </div>

      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Bank Account Details</h3>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Account Holder Name</label>
          <input
            type="text"
            name="accountHolder"
            value={formData.accountHolder}
            onChange={handleChange}
            placeholder="Account holder name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Account Number</label>
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              placeholder="Account number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Routing Number</label>
            <input
              type="text"
              name="routingNumber"
              value={formData.routingNumber}
              onChange={handleChange}
              placeholder="Routing number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Account Type</label>
          <select
            name="accountType"
            value={formData.accountType}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="checking">Checking</option>
            <option value="savings">Savings</option>
          </select>
        </div>
      </div>

      <SubmitButton isLoading={isLoading} text="Create Organization" />
    </form>
  );
}
