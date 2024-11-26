"use client"
import React, { useState } from "react";

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // For demonstration; replace with actual authentication state
  const userName = "John Doe"; // Replace with dynamic user name from state or context

  const handleLogout = () => {
    // Logic for logging out (e.g., clearing tokens, redirecting, etc.)
    setIsLoggedIn(false);
    console.log("User logged out!");
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 border-b border-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-white text-xl font-semibold">
            MyBrand
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              About
            </a>
            <a
              href="#services"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* Profile and Logout Buttons (conditional rendering based on login status) */}
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <button
                className="text-white hover:text-gray-300 transition duration-300"
                onClick={() => console.log("Navigate to profile")}
              >
                Profile ({userName})
              </button>

              <button
                className="text-white hover:text-gray-300 transition duration-300"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <a
                href="#login"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Login
              </a>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
