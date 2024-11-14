import React, { useEffect, useState } from 'react';

const AuthLayout: React.FC<{ children: React.ReactNode; backgroundImage: string }> = ({ children, backgroundImage }) => {
  const [fadeIn, setFadeIn] = useState(false);

  // Trigger the fade-in effect after the component mounts
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className={`flex flex-col md:flex-row h-screen w-screen overflow-hidden ${fadeIn ? 'fade-in' : ''} font-light`}>
      {/* Background Image Section */}
      <div
        className={`w-2/3 h-full flex flex-col items-center justify-center bg-white shadow-md md:w-1/2  md:h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${fadeIn ? 'fade-in' : ''}`}
        style={{
          backgroundImage: `url(${backgroundImage || "https://wallpapers.com/images/hd/1920-x-1080-hd-c65hirjqswhsd1z3.jpg"})`,
        }}
      ></div>

      {/* Form Section */}
      <div className="flex w-full md:w-1/2 h-full items-center justify-center ">
        <div className="w-full max-w-md p-6 md:p-8 space-y-4">
          {/* Heading */}
          <h1 className="text-2xl font-light text-gray-800 mb-4 text-center">Welcome to Our Donation Platform</h1>
          {/* Greeting Message */}
          <p className="text-sm text-gray-600 mb-6 text-center">
            Your generosity helps us make the world a better place.
          </p>
          {/* Form Content */}
          <div className="flex flex-col items-center w-full px-8">{children}</div>   
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;




























// import React, { useEffect, useState } from 'react';

// const AuthLayout: React.FC<{ children: React.ReactNode; backgroundImage: string }> = ({ children, backgroundImage }) => {
//   const [fadeIn, setFadeIn] = useState(false);

//   // Trigger the fade-in effect after the component mounts
//   useEffect(() => {
//     setFadeIn(true);
//   }, []);

//   return (
//     <div className={`flex  h-screen w-screen overflow-hidden ${fadeIn ? 'fade-in' : ''}`}>
//       <div
//         className={`w-2/3 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${fadeIn ? 'fade-in' : ''}`}
//         style={{ backgroundImage: `url(${backgroundImage || "https://wallpapers.com/images/hd/1920-x-1080-hd-c65hirjqswhsd1z3.jpg"})` }}
//       ></div>
      
//       <div className={`w-1/2 flex items-center justify-center bg-gray-50 transition-opacity duration-1000 ease-in-out ${fadeIn ? 'fade-in' : ''}`}>
//         <div className="w-full items-center justify-center m-[80] transition-opacity duration-1000 ease-in-out">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default AuthLayout;












