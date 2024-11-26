'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";

const fundingOptions = [499, 999, 1299, 2499, 7999, 9999]; // Amounts for One Time Funding

export const FundingComponent: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(false); // Toggle between One Time and Monthly funding
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [currency, setCurrency] = useState("PKR");

  const handleAmountSelection = (amount: number) => {
    setSelectedAmount(amount);
  };

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="w-full p-8 bg-white ">
      {/* Heading Animation */}
      <motion.h2
  className="text-2xl pt-5 text-center font-bold font-serif mb-6 md:text-5xl"
  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }} // Adding text shadow
  initial={{ opacity: 0, y: 40 }} // Start with opacity 0 and slight translation
  whileInView={{ opacity: 1, y: 0 }} // Fade in and translate to original position when in view
  transition={{ duration: 0.8 }} // Smooth transition for the animation
  viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the element is visible
>
  Donate Now
</motion.h2>


      <div className="flex justify-center space-x-8 mb-8">
        <button
          className={`px-6 py-2 rounded-lg font-semibold ${!isMonthly ? "bg-green-600 text-white" : "bg-gray-300"}`}
          onClick={() => setIsMonthly(false)}
        >
          One Time Funding
        </button>
        <button
          className={`px-6 py-2 rounded-lg font-semibold ${isMonthly ? "bg-green-600 text-white" : "bg-gray-300"}`}
          onClick={() => setIsMonthly(true)}
        >
          Monthly Funding
        </button>
      </div>

      <div className="flex justify-center space-x-4 mb-8">
        {fundingOptions.map((amount) => (
          <button
            key={amount}
            onClick={() => handleAmountSelection(amount)}
            className={`px-6 py-3 rounded-lg border-2 ${selectedAmount === amount ? "bg-green-600 text-white" : "bg-gray-100"}`}
          >
            ₹ {amount}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center mb-8 space-x-4">
        <select
          value={currency}
          onChange={handleCurrencyChange}
          className="border p-2 rounded-lg"
        >
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          {/* Add more currency options if needed */}
        </select>

        <input
          type="number"
          value={selectedAmount || 0}
          readOnly
          className="border p-2 rounded-lg w-24"
        />
      </div>

      <div className="text-center text-sm text-gray-500 mb-4">
        *Your tip allows us to continue helping more people & communities at a reduced fee!
      </div>

      <div className="text-center">
        <button
          onClick={() => alert("Thank you for sharing some love!")}
          className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold"
        >
          Share Some Love !!
        </button>
      </div>
    </div>
  );
};
