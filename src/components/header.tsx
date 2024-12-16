"use client"; 

import React from 'react';
import Link from 'next/link'; 

const Header = () => {
  return (
    <section className=" w-full bg-[#F2F0F1] overflow-hidden py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* LEFT COLUMN: TEXT CONTENT */}
        <div className="fade-in-up space-y-6 order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            FIND CLOTHES <br className="hidden md:block" /> THAT MATCHES <br className="hidden md:block" /> YOUR STYLE
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>

          <Link href="/products"
             className="inline-block bg-black text-white text-base font-medium rounded-full px-6 py-3 mt-4 hover:bg-gray-800 transition-colors duration-300">
              Shop Now
           
          </Link>

          {/* STATS */}
          <div className="mt-8 flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">200+</h3>
              <p className="text-gray-600 text-sm">International Brands</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">2,000+</h3>
              <p className="text-gray-600 text-sm">High-Quality Products</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">30,000+</h3>
              <p className="text-gray-600 text-sm">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: IMAGE */}
        <div className="relative order-1 md:order-2 flex justify-center fade-in-up">
          {/* Main Hero Image */}
          <img 
            src="/images/header-res-homepage.png" 
            alt="Models wearing fashionable clothes" 
            className="w-full h-auto md:w-4/5 object-cover"
          />

          {/* DECORATIVE ELEMENTS (Stars) */}
          <img 
            src="/icons/big-star.svg" 
            alt="Decorative star"
            className="hidden md:block absolute top-1/4 left-0 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 animate-pulse"
          />
          <img 
            src="/icons/big-star.svg" 
            alt="Decorative star"
            className="hidden md:block absolute bottom-1/4 right-0 transform translate-x-1/2 translate-y-1/2 w-8 h-8 animate-pulse"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
