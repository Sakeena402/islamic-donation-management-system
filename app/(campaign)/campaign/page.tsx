'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

interface Campaign {
  _id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  purpose: string;
  targetAmount: number;
  collectedAmount: number;
  startDate: string;
  endDate: string;
  requestedBy?: string;
  createdBy?: string;
  approvedBy?: string;
  managedBy?: string;
  isActive: boolean;
  status: string;
  createdAt: string;
}

function CampaignDetailContent() {
  const searchParams = useSearchParams();
  const campaignId = searchParams.get('id');
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!campaignId) {
      setError('Campaign ID not provided');
      setLoading(false);
      return;
    }

    const fetchCampaign = async () => {
      try {
        const response = await axios.get(`/api/campaign?id=${campaignId}`);
        const campaignData = response.data.campaign || response.data.data;
        if (campaignData) {
          setCampaign(campaignData);
        } else {
          setError('Campaign not found');
        }
      } catch (err) {
        console.error('Error fetching campaign:', err);
        setError('Failed to load campaign details');
      } finally {
        setLoading(false);
      }
    };

    fetchCampaign();
  }, [campaignId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading campaign details...</p>
        </div>
      </div>
    );
  }

  if (error || !campaign) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-lg shadow max-w-md">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="text-gray-600 mb-6">{error || 'Campaign not found'}</p>
          <Link href="/" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 inline-block">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const progressPercentage = Math.min(
    (campaign.collectedAmount / campaign.targetAmount) * 100,
    100
  );
  const remainingAmount = Math.max(campaign.targetAmount - campaign.collectedAmount, 0);
  const daysLeft = campaign.endDate
    ? Math.ceil(
        (new Date(campaign.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
      )
    : 0;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8 flex gap-2 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/campaignCards" className="text-blue-600 hover:underline">
            Campaigns
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">{campaign.title}</span>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            {/* Campaign Image */}
            {campaign.image && (
              <div className="mb-8 rounded-lg overflow-hidden shadow-lg h-96 bg-gray-200 flex items-center justify-center">
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/600x400?text=Campaign+Image';
                  }}
                />
              </div>
            )}

            {/* Campaign Title & Basic Info */}
            <div className="bg-white rounded-lg shadow p-8 mb-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">{campaign.title}</h1>
                  <div className="flex gap-3 flex-wrap">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full capitalize">
                      {campaign.category}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full capitalize">
                      {campaign.purpose}
                    </span>
                    {campaign.status === 'active' && (
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                        Active
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg shadow p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About this Campaign</h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{campaign.description}</p>
            </div>

            {/* Campaign Details */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-gray-900 mb-4">Timeline</h3>
                <div className="flex flex-col gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Start Date</p>
                    <p className="text-gray-900 font-semibold">
                      {new Date(campaign.startDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">End Date</p>
                    <p className="text-gray-900 font-semibold">
                      {new Date(campaign.endDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500">Days Remaining</p>
                    <p className={`font-semibold ${daysLeft > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {daysLeft > 0 ? `${daysLeft} days` : 'Campaign ended'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-bold text-gray-900 mb-4">Impact</h3>
                <div className="flex flex-col gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Target Amount</p>
                    <p className="text-gray-900 font-semibold">PKR {campaign.targetAmount.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Collected So Far</p>
                    <p className="text-green-600 font-semibold">PKR {campaign.collectedAmount.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Remaining</p>
                    <p className="text-gray-900 font-semibold">PKR {remainingAmount.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            {/* Donation Card */}
            <div className="bg-white rounded-lg shadow p-8 sticky top-20">
              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-700">Progress</span>
                  <span className="text-sm font-bold text-gray-900">{Math.round(progressPercentage)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  PKR {campaign.collectedAmount.toLocaleString()} of PKR{' '}
                  {campaign.targetAmount.toLocaleString()}
                </p>
              </div>

              {/* Donate Button */}
              {campaign.isActive && campaign.status === 'active' ? (
                <Link
                  href={`/donation?campaignId=${campaign._id}`}
                  className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition text-center block mb-4"
                >
                  Donate Now
                </Link>
              ) : (
                <button
                  disabled
                  className="w-full px-6 py-3 bg-gray-400 text-white font-semibold rounded-lg cursor-not-allowed text-center mb-4"
                >
                  Campaign Closed
                </button>
              )}

              {/* Quick Stats */}
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-3">Quick Stats</h4>
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-semibold text-gray-900 capitalize">{campaign.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-semibold text-gray-900 capitalize">{campaign.purpose}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="font-semibold text-gray-900 capitalize">{campaign.status}</span>
                  </div>
                </div>
              </div>

              {/* Share */}
              <div className="border-t mt-4 pt-4">
                <h4 className="font-semibold text-gray-900 mb-3">Share</h4>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      navigator.share({
                        title: campaign.title,
                        text: campaign.description,
                        url: window.location.href,
                      }).catch(err => console.log('Error sharing:', err));
                    }}
                    className="flex-1 px-3 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 text-sm font-semibold"
                  >
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CampaignDetailPage() {
  return (
    <Suspense fallback={<div className="text-center py-12">Loading campaign...</div>}>
      <CampaignDetailContent />
    </Suspense>
  );
}
