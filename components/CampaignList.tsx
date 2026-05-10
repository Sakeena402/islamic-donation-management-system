'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CategoryButton from '@/components/CategoryButton';
import CampaignCard from '@/components/CampaignCard';

interface Campaign {
  _id: string;
  title: string;
  description: string;
  image?: string;
  category: string;
  purpose: string;
  targetAmount: number;
  collectedAmount?: number;
  createdBy?: { username?: string; email?: string } | string;
}

const CampaignList: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const categories = [
    { label: 'All', value: '' },
    { label: 'Healthcare', value: 'healthcare' },
    { label: 'Education', value: 'education' },
    { label: 'Environment', value: 'environment' },
    { label: 'Others', value: 'others' },
  ];

  // Fetch campaigns from API
  useEffect(() => {
    const fetchCampaigns = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = selectedCategory 
          ? `/api/campaign?category=${selectedCategory}` 
          : '/api/campaign';
        
        const response = await fetch(url);
        const data = await response.json();

        if (data.success) {
          setCampaigns(data.data || []);
        } else {
          setError(data.error || 'Failed to load campaigns');
        }
      } catch (err) {
        console.error('[v0] Error fetching campaigns:', err);
        setError('Failed to load campaigns. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, [selectedCategory]);

  return (
    <div className="mx-auto px-7 m-12 py-15">
      {/* Section for Heading */}
      <motion.section
        className="text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 
          className="text-2xl pt-5 text-center font-bold font-serif mb-6 md:text-5xl" 
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
        >
          Hope in Healing: Donate to Save Them!
        </h2>
      </motion.section>

      {/* Section for Categories */}
      <motion.section
        className="mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === cat.value
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </motion.section>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading campaigns...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center py-12">
          <p className="text-red-600 font-semibold">{error}</p>
        </div>
      )}

      {/* Campaigns Grid */}
      {!loading && !error && (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {campaigns.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 gap-y-12">
              {campaigns.map((campaign, index) => (
                <motion.div
                  key={campaign._id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <CampaignCard campaign={campaign} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No campaigns available in this category.</p>
            </div>
          )}
        </motion.section>
      )}
    </div>
  );
};

export default CampaignList;
