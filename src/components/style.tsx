"use client"; // If using Next.js 13 App Router

import React from 'react';

export default function Style() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
          BROWSE BY DRESS STYLE
        </h2>

        {/* Outer Container with Rounded Corners and Light Gray Background */}
        <div className="bg-gray-100 rounded-xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Casual Card */}
            <div className="bg-white rounded-lg overflow-hidden flex flex-col sm:flex-row">
              {/* Left side: Label */}
              <div className="p-4 flex items-center justify-center flex-1">
                <span className="text-lg md:text-xl font-bold text-gray-900">Casual</span>
              </div>
              {/* Right side: Image */}
              <div className="flex-1 relative">
                <img
                  src="/images/dress-style-1.png" 
                  alt="Casual Style"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Formal Card */}
            <div className="bg-white rounded-lg overflow-hidden flex flex-col sm:flex-row">
              {/* Left side: Label */}
              <div className="p-4 flex items-center justify-center flex-1">
                <span className="text-lg md:text-xl font-bold text-gray-900">Formal</span>
              </div>
              {/* Right side: Image */}
              <div className="flex-1 relative">
                <img
                  src="/images/dress-style-2.png" 
                  alt="Formal Style"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Party Card */}
            <div className="bg-white rounded-lg overflow-hidden flex flex-col sm:flex-row">
              {/* Left side: Label */}
              <div className="p-4 flex items-center justify-center flex-1">
                <span className="text-lg md:text-xl font-bold text-gray-900">Party</span>
              </div>
              {/* Right side: Image */}
              <div className="flex-1 relative">
                <img
                  src="/images/dress-style-3.png" 
                  alt="Party Style"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Gym Card */}
            <div className="bg-white rounded-lg overflow-hidden flex flex-col sm:flex-row">
              {/* Left side: Label */}
              <div className="p-4 flex items-center justify-center flex-1">
                <span className="text-lg md:text-xl font-bold text-gray-900">Gym</span>
              </div>
              {/* Right side: Image */}
              <div className="flex-1 relative">
                <img
                  src="/images/dress-style-4.png" 
                  alt="Gym Style"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
