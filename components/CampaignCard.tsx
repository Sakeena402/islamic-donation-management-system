// import React from 'react';
// import { motion } from 'framer-motion';

// interface DonationCardProps {
//   campaign: {
//     title: string;
//     image: string;
//     organizer: string;
//     raised: number;
//     target: number;
//     contributors: number;
//   };
// }

// const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
//   return (
//     <motion.div
//       className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 mb-6"
//       initial={{ opacity: 0, y: 40 }} // Start with opacity 0 and slight translation
//       whileInView={{ opacity: 1, y: 0 }} // Fade in and translate to original position when in view
//       transition={{ duration: 0.8 }} // Smooth transition for the animation
//       viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the element is visible
//     >
//       {/* Image */}
//       <img
//         src={campaign.image}
//         alt={campaign.title}
//         className="w-full h-52 object-cover"
//       />
//       {/* Content */}
//       <div className="p-4">
//         {/* Title */}
//         <h3 className="text-xl font-semibold text-gray-900 mb-2">{campaign.title}</h3>
//         <p className="text-sm text-gray-500 mb-2">by {campaign.organizer}</p>
//         {/* Raised Amount */}
//         <p className="text-sm text-green-600 font-bold mb-3">
//           ₹{campaign.raised} raised out of ₹{campaign.target}
//         </p>
//         {/* Progress Bar */}
//         <div className="relative w-full bg-gray-200 rounded-full h-2 mb-3">
//           <div
//             className="absolute top-0 left-0 h-2 rounded-full bg-yellow-500"
//             style={{ width: `${(campaign.raised / campaign.target) * 100}%` }}
//           ></div>
//         </div>
//         {/* Contributors */}
//         <p className="text-xs text-gray-500 mb-3">
//           ❤️ {campaign.contributors} Contributors
//         </p>
//         {/* Actions */}
//         <div className="flex justify-between items-center">
//           <button className="bg-green-900 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition-all duration-300">
//             Contribute »
//           </button>
//           <button className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
//             Share
//           </button>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default CampaignCard;




















'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface CampaignCardProps {
  campaign: {
    id: string; // Adjust this based on your backend response (e.g., _id or id)
    title: string;
    image: string;
    organizer: string;
    raised: number;
    target: number;
    contributors: number;
    description: string; // Description field
    category: string; // Category field
  };
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 mb-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Image */}
      <img
        src={campaign.image}
        alt={campaign.title}
        className="w-full h-52 object-cover"
      />
      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{campaign.title}</h3>
        <p className="text-sm text-gray-500 mb-2">by {campaign.organizer}</p>
        
        {/* Raised Amount */}
        <p className="text-sm text-green-600 font-bold mb-3">
          ₹{campaign.raised} raised out of ₹{campaign.target}
        </p>

        {/* Progress Bar */}
        <div className="relative w-full bg-gray-200 rounded-full h-2 mb-3">
          <div
            className="absolute top-0 left-0 h-2 rounded-full bg-yellow-500"
            style={{ width: `${(campaign.raised / campaign.target) * 100}%` }}
          ></div>
        </div>

        {/* Contributors */}
        <p className="text-xs text-gray-500 mb-3">
          ❤️ {campaign.contributors} Contributors
        </p>

        {/* Description */}
        <p className="text-sm text-gray-700 mb-3">{campaign.description}</p>

        {/* Category */}
        <p className="text-xs text-gray-500 mb-3">Category: {campaign.category}</p>

        {/* Actions */}
        <div className="flex justify-between items-center">
          <button className="bg-green-900 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition-all duration-300">
            Contribute »
          </button>
          <button className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
            Share
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CampaignCard;
