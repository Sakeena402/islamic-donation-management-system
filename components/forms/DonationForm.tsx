'use client';

import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { useUser } from '@/context/userContext';
import { SubmitButton } from './SubmitButton';

interface Campaign {
  _id: string;
  title: string;
  targetAmount: number;
  collectedAmount: number;
}

interface DonationFormProps {
  campaignId?: string;
  onSuccess?: () => void;
}

export const DonationForm: React.FC<DonationFormProps> = ({ campaignId, onSuccess }) => {
  const { userId, isAuthenticated } = useUser();
  const [formData, setFormData] = useState({
    amount: '',
    paymentMethod: 'Stripe',
    recurring: false,
  });
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Fetch campaign details if campaignId is provided
  useEffect(() => {
    if (campaignId) {
      const fetchCampaign = async () => {
        try {
          const response = await axios.get(`/api/campaign?id=${campaignId}`);
          setCampaign(response.data.campaign || response.data.data);
        } catch (err) {
          console.error('Failed to fetch campaign:', err);
        }
      };
      fetchCampaign();
    }
  }, [campaignId]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const validateForm = () => {
    if (!formData.amount) {
      setError('Please enter an amount');
      return false;
    }

    const amount = parseFloat(formData.amount);
    if (isNaN(amount) || amount <= 0) {
      setError('Donation amount must be a positive number');
      return false;
    }

    if (!isAuthenticated) {
      setError('You must be logged in to donate');
      return false;
    }

    if (campaignId && !campaign) {
      setError('Campaign not found');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('/api/donation', {
        amount: parseFloat(formData.amount),
        donorId: userId,
        campaignId: campaignId || null,
        paymentMethod: formData.paymentMethod,
        recurring: formData.recurring,
      });

      if (response.data.success) {
        setSuccess(true);
        setFormData({ amount: '', paymentMethod: 'Stripe', recurring: false });
        
        if (onSuccess) {
          onSuccess();
        }

        // Redirect to success page after 2 seconds
        setTimeout(() => {
          if (response.data.donation?.transactionId) {
            window.location.href = `/donation/success?transactionId=${response.data.donation.transactionId}`;
          }
        }, 1500);
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const errorMessage = err.response?.data?.error || 'Failed to process donation';
        setError(errorMessage);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
        <h3 className="text-xl font-semibold">Please log in to donate</h3>
        <p className="text-gray-600">You need to be signed in to make a donation.</p>
        <a href="/login" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Log in
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-md mx-auto p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-bold">Make a Donation</h2>

      {campaign && (
        <div className="p-4 bg-blue-50 rounded border border-blue-200">
          <p className="font-semibold text-gray-800">{campaign.title}</p>
          <p className="text-sm text-gray-600 mt-2">
            Progress: ${campaign.collectedAmount} / ${campaign.targetAmount}
          </p>
          <div className="mt-2 w-full bg-gray-300 rounded h-2">
            <div
              className="bg-blue-600 h-2 rounded"
              style={{
                width: `${Math.min(
                  (campaign.collectedAmount / campaign.targetAmount) * 100,
                  100
                )}%`,
              }}
            />
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="font-semibold text-gray-800">
          Donation Amount (PKR)
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleInputChange}
          placeholder="Enter amount"
          step="1"
          min="1"
          required
          className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="paymentMethod" className="font-semibold text-gray-800">
          Payment Method
        </label>
        <select
          id="paymentMethod"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={handleInputChange}
          className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Stripe">Stripe Card</option>
          <option value="Easypaisa">Easypaisa</option>
          <option value="JazzCash">JazzCash</option>
          <option value="Bank">Bank Transfer</option>
          <option value="CreditCard">Credit Card</option>
          <option value="others">Other</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="recurring"
          name="recurring"
          checked={formData.recurring}
          onChange={handleInputChange}
          className="w-4 h-4 rounded border-gray-300"
        />
        <label htmlFor="recurring" className="text-gray-700">
          Make this a recurring monthly donation
        </label>
      </div>

      {error && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-700 rounded text-sm">
          {error}
        </div>
      )}

      {success && (
        <div className="p-3 bg-green-50 border border-green-200 text-green-700 rounded text-sm">
          Donation successful! Redirecting to confirmation page...
        </div>
      )}

      <SubmitButton loading={loading} text="Donate Now" loadingText="Processing..." />

      <p className="text-xs text-gray-500 text-center">
        Your donation is secure and encrypted. We never store your payment details.
      </p>
    </form>
  );
};
