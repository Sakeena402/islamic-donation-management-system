'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface Donation {
  _id: string;
  amount: number;
  transactionId: string;
  paymentMethod: string;
  status: string;
  campaignId?: { title: string };
  createdAt: string;
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const transactionId = searchParams.get('transactionId');
  const [donation, setDonation] = useState<Donation | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (transactionId) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [transactionId]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">
      <div className="max-w-md mx-auto">
        {loading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-green-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Processing your donation...</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">Thank You!</h1>
            <p className="text-gray-600 mb-6">
              Your donation has been received successfully. Your generosity will make a real difference.
            </p>

            {/* Donation Details */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
              <h2 className="font-semibold text-gray-900 mb-4">Donation Receipt</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Transaction ID:</span>
                  <span className="font-mono text-gray-900">{transactionId}</span>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <span className="text-gray-600">Status:</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                    Successful
                  </span>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-semibold text-blue-900 mb-3">What&apos;s Next?</h3>
              <ul className="text-sm text-blue-800 space-y-2">
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>A confirmation email will be sent shortly</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>You can track your donation in your profile</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span>Your receipt will be available for download</span>
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3">
              <Link
                href="/profile"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition text-center"
              >
                View My Donations
              </Link>
              <Link
                href="/campaignCards"
                className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition text-center"
              >
                Support Another Campaign
              </Link>
              <Link href="/" className="text-blue-600 hover:underline text-center py-2">
                Back to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function DonationSuccessPage() {
  return (
    <Suspense fallback={<div className="text-center py-12">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
