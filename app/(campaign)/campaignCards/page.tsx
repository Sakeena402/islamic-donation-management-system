// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import CampaignCard from '@/components/CampaignCard'; // Make sure to import your CampaignCard component

// const CampaignPage: React.FC = () => {
//   const [campaigns, setCampaigns] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch campaigns from the backend API
//   useEffect(() => {
//     // Make sure to replace '/api/campaigns' with your actual backend endpoint
//     fetch('/api/campaign')
//       .then((response) => response.json())
//       .then((data) => {
//         setCampaigns(data);
//         setIsLoading(false);
//       }) 
//       .catch((err) => {
//         setError('Failed to load campaigns');
//         setIsLoading(false);
//       });
//   }, []);

//   return (
//     <div className="mx-auto px-7 m-12 py-15">
//       {/* Section for Heading */}
//       <motion.section
//         className="text-center mb-10"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: false, amount: 0.2 }}
//       >
//         <h2 className="text-2xl pt-5 text-center font-bold font-serif mb-6 md:text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
//           Hope in Healing: Donate to Save Them!
//         </h2>
//       </motion.section>

//       {/* Loading State */}
//       {isLoading ? (
//         <div className="text-center text-lg text-gray-500">Loading campaigns...</div>
//       ) : error ? (
//         <div className="text-center text-lg text-red-500">{error}</div>
//       ) : (
//         <motion.section
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 gap-y-12"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: false, amount: 0.2 }}
//         >
//           {/* Render each campaign card */}
//           {campaigns.map((campaign, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               viewport={{ once: false, amount: 0.2 }}
//             >
//               <CampaignCard campaign={campaign} />
//             </motion.div>
//           ))}
//         </motion.section>
//       )}
//     </div>
//   );
// };

// export default CampaignPage;






// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import CampaignCard from '@/components/CampaignCard'; // Import CampaignCard component

// const CampaignPage: React.FC = () => {
//   const [campaigns, setCampaigns] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch campaigns from the backend API
//   useEffect(() => {
//     fetch('/api/campaign')
//       .then((response) => response.json())
//       .then((data) => {
//         setCampaigns(data);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         setError('Failed to load campaigns');
//         setIsLoading(false);
//       });
//   }, []);

//   return (
//     <div className="mx-auto px-7 py-15 mt-29">
//       {/* Section for Heading */}
//       <motion.section
//         className="text-center mb-10"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: false, amount: 0.2 }}
//       >
//         <h2
//           className="text-2xl font-bold text-center font-serif mb-6 md:text-5xl"
//           style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
//         >
//           Hope in Healing: Donate to Save Them!
//         </h2>
//       </motion.section>

//       {/* Loading State */}
//       {isLoading ? (
//         <div className="text-center text-lg text-gray-500">Loading campaigns...</div>
//       ) : error ? (
//         <div className="text-center text-lg text-red-500">{error}</div>
//       ) : (
//         <motion.section
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 gap-y-12"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: false, amount: 0.2 }}
//         >
//           {/* Render each campaign card */}
//           {campaigns.map((campaign, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               viewport={{ once: false, amount: 0.2 }}
//             >
//               <CampaignCard campaign={campaign} />
//             </motion.div>
//           ))}
//         </motion.section>
//       )}
//     </div>
//   );
// };

// export default CampaignPage;









'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CampaignCard from '@/components/CampaignCard';

interface Campaign {
  _id: string;
  title: string;
  description: string;
  category: string;
  targetAmount: number;
  startDate: string;
  endDate: string;
  isApproved: boolean;
  isActive: boolean;
  createdBy: { username?: string; email?: string } | null; // Make createdBy optional or null
}

const CampaignPage: React.FC = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [category, setCategory] = useState<string>(''); // For filtering campaigns
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch campaigns with or without category filter
  useEffect(() => {
    setLoading(true);
    const fetchCampaigns = async () => {
      try {
        const response = await fetch(`/api/campaign?category=${category}`);
        const data = await response.json();
        setCampaigns(data.data || []);
      } catch (error) {
        setError('Failed to load campaigns');
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, [category]);

  return (
    <div className="mx-auto px-7 py-15 mt-36">
      {/* Section for Heading */}
      <motion.section
        className="text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2
          className="text-2xl font-bold text-center font-serif mb-6 md:text-5xl"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}
        >
          Hope in Healing: Donate to Save Them!
        </h2>
      </motion.section>

      {/* Filter Dropdown */}
      <div className="mb-6 flex justify-center">
        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="p-3 border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
          <option value="Environment">Environment</option>
       
        </select>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="text-center text-lg text-gray-500">Loading campaigns...</div>
      ) : error ? (
        <div className="text-center text-lg text-red-500">{error}</div>
      ) : (
        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 gap-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Render each campaign card */}
          {campaigns.length > 0 ? (
            campaigns.map((campaign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <CampaignCard
                  campaign={{
                    ...campaign,
                    createdBy: campaign.createdBy?.username || 'Unknown', // Fallback to 'Unknown' if username is missing
                  }}
                />
              </motion.div>
            ))
          ) : (
            <div className="text-center text-lg text-gray-500">No campaigns available.</div>
          )}
        </motion.section>
      )}
    </div>
  );
};

export default CampaignPage;
