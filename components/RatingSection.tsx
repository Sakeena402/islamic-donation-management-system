'use client';
import React from "react";
import { motion } from "framer-motion";

const stats = [
  { number: 326, label: "Emergency Projects", description: "Reached 8.7M people in 29 countries." },
  { number: 10.2, label: "Million Individuals", description: "Received life-saving food aid." },
  { number: 6, label: "Major Appeals", description: "Launched and maintained emergency responses." },
  { number: 132.6, label: "Million £", description: "Spent supporting disaster recovery." },
];

export const RatingSection: React.FC = () => {
  return (
    <>
      <motion.h2
         className="text-2xl pt-5 text-center font-bold font-serif mb-6 md:text-5xl"
         style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }} 
        initial={{ opacity: 0, y: 40 }} // Start with opacity 0 and slight translation
        whileInView={{ opacity: 1, y: 0 }} // Fade in and translate to original position when in view
        transition={{ duration: 0.8 }} // Smooth transition for the animation
        viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the element is visible
      >
        Our Impact In 2023
      </motion.h2>
      
      <div className="w-full py-10 text-center">
        <div className="w-full mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-[#0b221d] rounded-lg shadow-lg p-8 text-center transform transition-all duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of the card is visible
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.15, // Smaller scale value for a smoother pop
                  transition: { type: "spring", stiffness: 300, damping: 20, duration: 0.2 } // Reduced duration for smoothness
                }}
              >
                <motion.div
                  className="text-5xl font-extrabold text-white mb-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, delay: index * 0.3 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-lg font-semibold text-white">{stat.label}</p>
                <p className="text-white mt-2">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.h2
          className="text-2xl pt-5 text-center font-bold font-serif mb-6 md:text-5xl"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }} 
        initial={{ opacity: 0, y: 40 }} // Start with opacity 0 and slight translation
        whileInView={{ opacity: 1, y: 0 }} // Fade in and translate to original position when in view
        transition={{ duration: 0.8 }} // Smooth transition for the animation
        viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the element is visible
      >
        Our Successful Campaigns
      </motion.h2>
    </>
  );
};
