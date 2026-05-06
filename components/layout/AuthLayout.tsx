'use client';

import React, { useEffect, useState } from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
  backgroundImage?: string;
}

const DEFAULT_BG =
  'https://images.unsplash.com/photo-1585036156171-384164a8c039?w=1200&q=80';

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  backgroundImage,
}) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div
      className={`flex flex-col md:flex-row h-screen w-screen overflow-hidden ${fadeIn ? 'fade-in' : ''} font-light`}
    >
      {/* Background Image Section */}
      <div
        className={`hidden md:flex w-1/2 h-full items-center justify-center bg-cover bg-center transition-opacity duration-1000 ease-in-out ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: `url(${backgroundImage || DEFAULT_BG})`,
        }}
      />

      {/* Form Section */}
      <div className="flex w-full md:w-1/2 h-full items-center justify-center">
        <div className="w-full max-w-md p-6 md:p-8 space-y-4">
          <h1 className="text-2xl font-light text-gray-800 mb-4 text-center">
            Welcome to Our Donation Platform
          </h1>
          <p className="text-sm text-gray-600 mb-6 text-center">
            Your generosity helps us make the world a better place.
          </p>
          <div className="flex flex-col items-center w-full px-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
