'use client';
import { useState } from "react";
import { motion } from "framer-motion";

const stories = [
  {
    id: 1,
    name: "Helen",
    image: "./image1.jpeg",
    message: "Heroes like you helped my daughter win her battle.",
    details:
      "May Allah bless you all! Thanks to your generous donations, Helen underwent a successful BMT to treat thalassemia major.",
    raised: "₹12,10,210",
    donor: "- Reshma (Mother)",
  },
  {
    id: 2,
    name: "Ali",
    image: "./image2.jpg",
    message: "Your kindness gave my son a new hope.",
    details:
      "We cannot thank you enough! With your donations, Ali received life-saving treatment for his heart condition.",
    raised: "₹9,80,500",
    donor: "- Ayesha (Mother)",
  },
  {
    id: 3,
    name: "Helena Akir",
    image: "./image3.jpg",
    message: "Heroes like you helped my daughter win her battle.",
    details:
      "May Allah bless you all! Thanks to your generous donations, Helen underwent a successful BMT to treat thalassemia major.",
    raised: "₹12,10,210",
    donor: "- Reshma (Mother)",
  },
];

export default function SuccessStoryCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const currentStory = stories[currentIndex];

  return (
    <div className="relative  max-w-6xl mx-auto p-5 tracking-wide ">
      <h2 className="text-2xl pt-5 text-center font-bold font-serif mb-6 md:text-5xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>
  Our Success Stories
</h2>
 <motion.div
        key={currentStory.id}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="relative bg-white shadow-lg  rounded-lg p-6 overflow-hidden"
        style={{ height: "300px" }}
      >
        {/* Content Section */}
        <div className="flex items-center gap-6">
          <motion.img
            src={currentStory.image}
            alt={currentStory.name}
            className="w-56 h-56 rounded-full object-cover border-4 border-yellow-500"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <div>
            <motion.h3
              className="text-xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Meet {currentStory.name},
            </motion.h3>
            <motion.p
              className="text-gray-700 italic"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {currentStory.message}
            </motion.p>
            <motion.p
              className="text-gray-500 mt-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {currentStory.details}
            </motion.p>
            <p className="text-sm font-medium text-gray-600 mt-1">
              {currentStory.donor}
            </p>
          </div>
        </div>
        <motion.div
          className="text-green-600 mt-6 text-right font-bold"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {currentStory.raised} successfully raised
        </motion.div>
      </motion.div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
        <motion.button
          onClick={prevStory}
          className="bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition-transform transform hover:scale-110"
          style={{ marginLeft: "-45px" }} // Align button on left edge
          whileTap={{ scale: 0.9 }}
        >
          &#8592;
        </motion.button>
        <motion.button
          onClick={nextStory}
          className="bg-yellow-500 text-white p-3 rounded-full shadow-lg hover:bg-yellow-600 transition-transform transform hover:scale-110"
          style={{ marginRight: "-10px" }} // Align button on right edge
          whileTap={{ scale: 0.9 }}
        >
          &#8594;
        </motion.button>
      </div>
    </div>
  );
}
