'use client';
import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/userContext';
import axios from 'axios';
import { motion } from 'framer-motion';

interface CampaignFormProps {
  onSuccess?: () => void;
}

const CampaignForm: React.FC<CampaignFormProps> = ({ onSuccess }) => {
  const router = useRouter();
  const { userId, role } = useUser();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'education',
    purpose: 'general',
    targetAmount: '',
    startDate: '',
    endDate: '',
    image: null as File | null,
  });

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleImageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData(prev => ({ ...prev, image: e.target.files![0] }));
    }
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!userId) {
      setErrorMessage('Please log in to create a campaign');
      return;
    }

    if (!['admin', 'organizer'].includes(role?.toLowerCase() || '')) {
      setErrorMessage('Only admins and organizers can create campaigns');
      return;
    }

    // Client-side validation
    if (!formData.title?.trim()) {
      setErrorMessage('Campaign title is required');
      return;
    }
    if (!formData.description?.trim()) {
      setErrorMessage('Campaign description is required');
      return;
    }
    if (!formData.targetAmount) {
      setErrorMessage('Target amount is required');
      return;
    }
    if (Number(formData.targetAmount) <= 0) {
      setErrorMessage('Target amount must be greater than 0');
      return;
    }
    if (!formData.startDate) {
      setErrorMessage('Start date is required');
      return;
    }
    if (!formData.endDate) {
      setErrorMessage('End date is required');
      return;
    }
    if (new Date(formData.startDate) >= new Date(formData.endDate)) {
      setErrorMessage('End date must be after start date');
      return;
    }

    setIsSubmitting(true);

    try {
      let imageData = null;
      if (formData.image) {
        imageData = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve(e.target?.result as string);
          reader.readAsDataURL(formData.image!);
        });
      }

      const payload = {
        title: formData.title.trim(),
        description: formData.description.trim(),
        category: formData.category,
        purpose: formData.purpose,
        targetAmount: Number(formData.targetAmount),
        startDate: formData.startDate,
        endDate: formData.endDate,
        image: imageData,
      };

      const response = await axios.post('/api/campaign', payload);

      if (response.data.success) {
        setSuccessMessage('Campaign created successfully! Redirecting...');
        setFormData({
          title: '',
          description: '',
          category: 'education',
          purpose: 'general',
          targetAmount: '',
          startDate: '',
          endDate: '',
          image: null,
        });

        if (onSuccess) onSuccess();

        setTimeout(() => {
          if (role?.toLowerCase() === 'organizer') {
            router.push('/organizer');
          } else {
            router.push('/campaignCards');
          }
        }, 1500);
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.data?.error) {
        setErrorMessage(error.response.data.error);
      } else if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Failed to create campaign. Please try again.');
      }
      console.error('[v0] Campaign creation error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, userId, role, router, onSuccess]);

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Campaign</h1>
      <p className="text-gray-600 mb-6">Share your cause and inspire others to help</p>

      {successMessage && (
        <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Campaign Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Enter campaign title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSubmitting}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Describe your campaign and its impact"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSubmitting}
          />
        </div>

        {/* Category & Purpose */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            >
              <option value="education">Education</option>
              <option value="healthcare">Healthcare</option>
              <option value="environment">Environment</option>
              <option value="others">Others</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Purpose *</label>
            <select
              name="purpose"
              value={formData.purpose}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            >
              <option value="general">General</option>
              <option value="zakat">Zakat</option>
              <option value="fitra">Fitra</option>
              <option value="sadqa">Sadqa</option>
            </select>
          </div>
        </div>

        {/* Target Amount */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Target Amount (₹) *</label>
          <input
            type="number"
            name="targetAmount"
            value={formData.targetAmount}
            onChange={handleInputChange}
            placeholder="Enter target amount"
            min="1"
            step="100"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSubmitting}
          />
        </div>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Start Date *</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">End Date *</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Campaign Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSubmitting}
          />
          {formData.image && (
            <p className="text-sm text-green-600 mt-2">Image selected: {formData.image.name}</p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-bold rounded-lg hover:shadow-lg transition-shadow duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Creating Campaign...' : 'Create Campaign'}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default CampaignForm;
