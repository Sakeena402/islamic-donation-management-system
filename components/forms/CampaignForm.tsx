'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from '@/context/userContext';

interface CampaignFormProps {
  onSuccess?: (data: any) => void;
}

interface CampaignData {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  targetAmount: number;
  image: File | null;
  category: string;
  purpose: string;
}

const CampaignForm: React.FC<CampaignFormProps> = ({ onSuccess }) => {
  const { userId, role, isAuthenticated } = useUser();
  const [formData, setFormData] = useState<CampaignData>({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    targetAmount: 0,
    image: null,
    category: '',
    purpose: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'targetAmount' ? parseFloat(value) : value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isAuthenticated) {
      setError('You must be logged in to create a campaign.');
      return;
    }

    // Validate required fields
    if (!formData.title || !formData.description || !formData.category || !formData.purpose) {
      setError('Please fill in all required fields.');
      return;
    }

    if (formData.targetAmount <= 0) {
      setError('Target amount must be greater than 0.');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('title', formData.title);
      formDataToSubmit.append('description', formData.description);
      formDataToSubmit.append('startDate', formData.startDate);
      formDataToSubmit.append('endDate', formData.endDate);
      formDataToSubmit.append('targetAmount', formData.targetAmount.toString());
      formDataToSubmit.append('category', formData.category);
      formDataToSubmit.append('purpose', formData.purpose);
      if (formData.image) {
        formDataToSubmit.append('image', formData.image);
      }

      const response = await axios.post('/api/campaign', formDataToSubmit, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setSuccessMessage('Campaign created successfully!');

      // Reset form
      setFormData({
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        targetAmount: 0,
        image: null,
        category: '',
        purpose: '',
      });

      if (onSuccess) {
        onSuccess(response.data);
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error || 'An error occurred while creating the campaign.');
      } else {
        setError('An unexpected error occurred.');
      }
      console.error('Error submitting form:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Create Campaign</h2>

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      {successMessage && (
        <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Campaign Title *
          </label>
          <input
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter campaign title"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description *
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your campaign"
            rows={4}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          ></textarea>
        </div>

        {/* Category and Purpose */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">
              Category *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select category</option>
              <option value="education">Education</option>
              <option value="healthcare">Healthcare</option>
              <option value="environment">Environment</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div>
            <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">
              Purpose *
            </label>
            <select
              id="purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select purpose</option>
              <option value="zakat">Zakat</option>
              <option value="fitra">Fitra</option>
              <option value="sadqa">Sadqa</option>
              <option value="general">General</option>
            </select>
          </div>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
              Start Date
            </label>
            <input
              id="startDate"
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
              End Date
            </label>
            <input
              id="endDate"
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Target Amount */}
        <div>
          <label htmlFor="targetAmount" className="block text-sm font-medium text-gray-700">
            Target Amount (PKR) *
          </label>
          <input
            id="targetAmount"
            type="number"
            name="targetAmount"
            value={formData.targetAmount}
            onChange={handleChange}
            placeholder="0"
            min="1"
            step="0.01"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Image */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Campaign Image
          </label>
          <input
            id="image"
            type="file"
            name="image"
            onChange={handleFileChange}
            accept="image/*"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          {loading ? 'Creating Campaign...' : 'Create Campaign'}
        </button>
      </form>
    </div>
  );
};

export default CampaignForm;
