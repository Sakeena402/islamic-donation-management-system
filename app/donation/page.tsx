'use client';

import { Suspense, useSearchParams } from 'next/navigation';
import { DonationForm } from '@/components/forms/DonationForm';

function DonationPageContent() {
  const searchParams = useSearchParams();
  const campaignId = searchParams.get('campaignId');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Our Cause</h1>
          <p className="text-xl text-gray-600">
            Your donation makes a real impact in helping those in need. Every contribution counts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Donation Form */}
          <div className="md:col-span-2">
            <DonationForm campaignId={campaignId || undefined} />
          </div>

          {/* Info Sidebar */}
          <div className="flex flex-col gap-6">
            {/* Why Donate */}
            <div className="p-6 bg-white border rounded-lg shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Why Donate?</h3>
              <ul className="flex flex-col gap-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Direct impact on communities in need</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Transparent tracking of funds</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Tax-deductible contributions</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">✓</span>
                  <span>Secure & encrypted payments</span>
                </li>
              </ul>
            </div>

            {/* Donation Types */}
            <div className="p-6 bg-white border rounded-lg shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Donation Types</h3>
              <ul className="flex flex-col gap-2 text-sm text-gray-700">
                <li>• Zakat (Obligatory Charity)</li>
                <li>• Fitra (Charity for Eid)</li>
                <li>• Sadqa (Voluntary Charity)</li>
                <li>• General Donations</li>
              </ul>
            </div>

            {/* Payment Methods */}
            <div className="p-6 bg-white border rounded-lg shadow">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Payment Methods</h3>
              <p className="text-sm text-gray-700 mb-3">We accept:</p>
              <ul className="flex flex-col gap-2 text-sm text-gray-700">
                <li>💳 Stripe Cards</li>
                <li>📱 Easypaisa</li>
                <li>📱 JazzCash</li>
                <li>🏦 Bank Transfers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 p-8 bg-white rounded-lg shadow border">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Is my donation secure?</h4>
              <p className="text-gray-700 text-sm">
                Yes, all donations are processed through secure, encrypted channels. We never store
                your payment details.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Can I make recurring donations?</h4>
              <p className="text-gray-700 text-sm">
                Yes, you can set up monthly recurring donations for continuous support.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Will I receive a receipt?</h4>
              <p className="text-gray-700 text-sm">
                Yes, you&apos;ll receive a donation receipt via email for tax purposes.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Can I donate anonymously?</h4>
              <p className="text-gray-700 text-sm">
                You can use your account to donate, but your name won&apos;t be displayed publicly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DonationPage() {
  return (
    <Suspense fallback={<div className="text-center py-12">Loading donation form...</div>}>
      <DonationPageContent />
    </Suspense>
  );
}
