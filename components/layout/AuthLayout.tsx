// AuthLayout.tsx
import React from 'react';

const AuthLayout: React.FC<{ children: React.ReactNode; backgroundImage: string }> = ({ children, backgroundImage }) => {
  return (
    <div className="flex min-h-screen">
      <div
        className="w-2/3 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="w-1/2 flex items-center justify-center bg-gray-50">
      
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
