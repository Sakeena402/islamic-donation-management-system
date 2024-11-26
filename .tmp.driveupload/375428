'use client'
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#0b221d] text-white">
      {/* Final Words Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-yellow-500 text-black py-4 mt-3 text-center"
      >
        <h2 className="text-3xl p-  font-bold">Empowering Change, One Donation at a Time</h2>
        <p className="text-lg">Connecting lives with hope. Together, we can make a difference.</p>
      </motion.div>

      {/* Main Footer Content */}
      <div className="py-6 px-6 sm:px-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-yellow-500">GoLife Span</h2>
            <p className="text-lg">Follow us on social media for updates:</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="social-icon text-yellow-500 hover:text-white">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="social-icon text-yellow-500 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="social-icon text-yellow-500 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="social-icon text-yellow-500 hover:text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="social-icon text-yellow-500 hover:text-white">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* About Us Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Donate monthly</a></li>
              <li><a href="#" className="hover:underline">Success stories</a></li>
              <li><a href="#" className="hover:underline">Latest news</a></li>
              <li><a href="#" className="hover:underline">Contact us</a></li>
            </ul>
          </div>

          {/* Learn Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Learn</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">How it works</a></li>
              <li><a href="#" className="hover:underline">Start fundraising</a></li>
              <li><a href="#" className="hover:underline">Browse fundraisers</a></li>
              <li><a href="#" className="hover:underline">Privacy policy</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Get urgent fund alerts</h3>
            <form>
              <input
                type="email"
                placeholder="Email address"
                className="w-full p-3 border rounded text-black"
              />
              <button className="w-full bg-yellow-500 text-black py-3 mt-4 rounded hover:bg-yellow-600">
                Submit
              </button>
            </form>
            <p className="text-sm mt-3">
              We’ve earned the highest ratings from Charity Navigator and Guidestar.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Payment and Legal Info */}
      <div className="mt-8 border-t border-gray-700 pt-6">
        
        <p className="text-center text-sm text-gray-400 m-6">
          ©2024 GoLifeSpan.org, All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
