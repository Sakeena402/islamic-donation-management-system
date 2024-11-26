import React from 'react';
import { motion } from 'framer-motion';
import { FaChild, FaHeartbeat, FaHandsHelping, FaHandHoldingHeart } from 'react-icons/fa'; // Importing icons

interface CategoryButtonProps {
  categories: string[];
  onCategoryClick: (category: string) => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ categories, onCategoryClick }) => {
  // Function to select an icon based on the category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Child':
        return <FaChild />;
      case 'Heart transplant':
        return <FaHeartbeat />;
      case 'Labour patients':
        return <FaHandsHelping />;
      case 'Cancer':
        return <FaHandHoldingHeart />;
      default:
        return <FaHandsHelping />;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center mb-8">
      {categories.map((category, index) => (
        <motion.button
        key={index}
        onClick={() => onCategoryClick(category)}
        className="px-4 pb-5 py-3 bg-[#11342b] hover:bg-yellow-500 hover:text-white transition-all duration-100 rounded-lg text-white shadow-lg hover:shadow-xl font-medium text-lg w-full max-w-xs"
        // className="px-4 py-3 bg-gray-100 hover:bg-yellow-500 hover:text-white transition-all duration-100 rounded-lg text-gray-700 shadow-md font-medium text-lg w-full max-w-xs"
        initial={{ opacity: 0, scale: 0.9 }} // Initial state: slightly smaller and hidden
        animate={{ opacity: 1, scale: 1 }} // Animate to normal size and visible
        whileHover={{ scale: 1.1 }} // Scale up slightly on hover
        transition={{ duration: 0.3 }} // Duration of transition
        viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the element is visible
      >
          <div className="flex items-center justify-center space-x-2">
            {/* Add the icon */}
            <span>{getCategoryIcon(category)}</span>
            <span>{category}</span>
          </div>
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryButton;
