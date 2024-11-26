'use client';

import { motion } from "framer-motion";
import React from "react";

export const Introduction: React.FC = () => {
  return (
    <div className="w-full  py-16 text-[#0b221d] text-center">
      <div className="max-w-3xl mx-auto">
        
        {/* Heading Animation */}
        <motion.h2
            className="text-2xl pt-5 text-center font-bold font-serif mb-6 md:text-5xl"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }} 
          initial={{ opacity: 0, y: 40 }} // Start with opacity 0 and slight translation
          whileInView={{ opacity: 1, y: 0 }} // Fade in and translate to original position when in view
          transition={{ duration: 0.8 }} // Smooth transition for the animation
          viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the element is visible
        >
          Who We Are
        </motion.h2>

        {/* Paragraph Animation */}
        <motion.p
          className="font-serif pt-3 mx-20 tracking-wide md:text-xl text-[#083d31] leading-relaxed"
          initial={{ opacity: 0, y: 40 }} // Start with opacity 0 and slight translation
          whileInView={{ opacity: 1, y: 0 }} // Fade in and translate to original position when in view
          transition={{ duration: 1, delay: 0.2 }} // Add a delay for a staggered effect
          viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the element is visible
        >
          Our mission is to empower communities, save lives, and advocate for positive change. 
          With countless impactful projects, we have made a significant difference globally, 
          reaching millions and addressing critical challenges.
        </motion.p>
      </div>
    </div>
  );
};
