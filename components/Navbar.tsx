"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Check auth state on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("/api/auth/me", {
          withCredentials: true,
        });
        if (response.data?.username) {
          setIsLoggedIn(true);
          setUserName(response.data.username);
        }
      } catch {
        setIsLoggedIn(false);
        setUserName("");
      }
    };
    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.get("/api/auth/logout");
      setIsLoggedIn(false);
      setUserName("");
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50 border-b border-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-white text-xl font-semibold">
            MyBrand
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <Link
                  href="/profile"
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  Profile ({userName})
                </Link>
                <button
                  className="text-white hover:text-gray-300 transition duration-300"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md transition duration-300"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
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
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-2">
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition duration-300 py-1"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-white hover:text-gray-300 transition duration-300 py-1"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-white hover:text-gray-300 transition duration-300 py-1"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-white hover:text-gray-300 transition duration-300 py-1"
            >
              Contact
            </Link>
            {isLoggedIn ? (
              <>
                <Link
                  href="/profile"
                  className="text-white hover:text-gray-300 transition duration-300 py-1"
                >
                  Profile ({userName})
                </Link>
                <button
                  className="text-white hover:text-gray-300 transition duration-300 py-1 text-left"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-white hover:text-gray-300 transition duration-300 py-1"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="text-white hover:text-gray-300 transition duration-300 py-1"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
