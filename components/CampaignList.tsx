'use client';
import { useState } from 'react';
import { motion } from 'framer-motion'; // Importing motion from framer-motion
import CategoryButton from '@/components/CategoryButton';
import DonationCard from '@/components/DonationCard';

const CampaignList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Child',
    'Cancer',
    'Labour patients',
    'Heart transplant',
    'NICU care',
    'Bone marrow transplant',
    'Accident treatment',
  ];

  const campaigns = [
    {
      title: 'I Need Your Urgent Support For My Avascular Necrosis',
      image: './image1.jpeg',
      organizer: 'Suhani Ray',
      raised: 700000,
      target: 1012000,
      contributors: 116,
      category: 'Health',
    },
    {
      title: 'A Dancer and Single Mother Asha Sarella Needs Our Help',
      image: './image1.jpeg',
      organizer: 'Mahesh',
      raised: 1000000,
      target: 1250000,
      contributors: 125,
      category: 'Health',
    },
    {
      title: 'Offer Neshvi The Chance To Hear The World!',
      image: './image1.jpeg',
      organizer: 'Rita Suhay',
      raised: 130000,
      target: 800000,
      contributors: 99,
      category: 'Health',
    },
    {
      title: 'Help Mendona Beat Lupus Nephritis',
      image: './image1.jpeg',
      organizer: 'Mukesh Goyal',
      raised: 1500000,
      target: 2000000,
      contributors: 552,
      category: 'Health',
    },
    {
      title: 'Offer Neshvi The Chance To Hear The World!',
      image: './image1.jpeg',
      organizer: 'Rita Suhay',
      raised: 130000,
      target: 800000,
      contributors: 99,
      category: 'Health',
    },
    {
      title: 'Help Mendona Beat Lupus Nephritis',
      image: './image1.jpeg',
      organizer: 'Mukesh Goyal',
      raised: 1500000,
      target: 2000000,
      contributors: 552,
      category: 'Health',
    },
  ];

  const filteredCampaigns =
    selectedCategory === 'All'
      ? campaigns
      : campaigns.filter((c) => c.category === selectedCategory);

  return (
    <div className="mx-auto px-7 m-12 py-15">
      {/* Section for Heading with animation */}
      <motion.section
        className="text-center mb-10"
        initial={{ opacity: 0, y: 40 }} // Start with opacity 0 and slight translation
        whileInView={{ opacity: 1, y: 0 }} // Fade in and translate to original position when in view
        transition={{ duration: 1 }} // Smooth transition for the animation
        viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the element is visible
      >
         <h2 className="text-2xl pt-5 text-center font-bold font-serif mb-6 md:text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
          Hope in Healing: Donate to Save Them!
        </h2>
      </motion.section>

      {/* Section for Categories with animation */}
      <motion.section
        className="mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} // Fade in the category section
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <CategoryButton
          categories={categories}
          onCategoryClick={(category) => setSelectedCategory(category)}
        />
      </motion.section>

      {/* Section for Donation Cards - Grid with 3 cards per row with animation */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} // Fade in the grid section
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 gap-y-12">
          {filteredCampaigns.map((campaign, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }} // Start with opacity 0 and slight translation
              whileInView={{ opacity: 1, y: 0 }} // Fade in and translate to original position when in view
              transition={{ duration: 0.8, delay: index * 0.2 }} // Staggered animation delay for each card
              viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the element is visible
            >
              <DonationCard campaign={campaign} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default CampaignList;











