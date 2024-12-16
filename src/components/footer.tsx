"use client"; // If using Next.js 13 App Router

import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-16">
      {/* Newsletter Sign-Up Section */}
      <div className="bg-black rounded-tl-xl rounded-tr-xl px-4 md:px-8 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between space-y-8 md:space-y-0">
          {/* Left: Headline */}
          <h2 className="text-white text-2xl md:text-4xl font-extrabold leading-tight max-w-lg">
            STAY UPTO DATE ABOUT<br className="hidden md:block" /> OUR LATEST OFFERS
          </h2>

          {/* Right: Email Subscription Form */}
          <div className="flex flex-col items-start md:items-end space-y-4 w-full md:w-auto">
            <div className="relative w-full sm:w-64 lg:w-80">
              <FaEnvelope className="absolute text-gray-500 left-4 top-1/2 transform -translate-y-1/2" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full pl-10 pr-4 py-3 rounded-full focus:outline-none bg-white text-black placeholder-gray-500"
              />
            </div>
            <button className="bg-white text-black font-medium rounded-full px-6 py-3 hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="bg-gray-100 py-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Top Row: Logo/Description + Link Columns */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* SHOP.CO Column */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SHOP.CO</h3>
              <p className="text-gray-600 text-sm mb-4 max-w-xs">
                We have clothes that suits your style and which you're proud to wear. 
                From women to men.
              </p>
              <div className="flex space-x-4 text-gray-700">
                <a href="#" className="hover:text-black" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-black" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-black" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="#" className="hover:text-black" aria-label="GitHub">
                  <FaGithub />
                </a>
              </div>
            </div>

            {/* COMPANY */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">COMPANY</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-black">About</a></li>
                <li><a href="#" className="hover:text-black">Features</a></li>
                <li><a href="#" className="hover:text-black">Works</a></li>
                <li><a href="#" className="hover:text-black">Career</a></li>
              </ul>
            </div>

            {/* HELP */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">HELP</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-black">Customer Support</a></li>
                <li><a href="#" className="hover:text-black">Delivery Details</a></li>
                <li><a href="#" className="hover:text-black">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
              </ul>
            </div>

            {/* FAQ */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">FAQ</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-black">Account</a></li>
                <li><a href="#" className="hover:text-black">Manage Deliveries</a></li>
                <li><a href="#" className="hover:text-black">Orders</a></li>
                <li><a href="#" className="hover:text-black">Payments</a></li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div>
              <h4 className="font-bold text-gray-900 mb-4">RESOURCES</h4>
              <ul className="text-sm text-gray-600 space-y-2">
                <li><a href="#" className="hover:text-black">Free eBooks</a></li>
                <li><a href="#" className="hover:text-black">Development Tutorial</a></li>
                <li><a href="#" className="hover:text-black">How to - Blog</a></li>
                <li><a href="#" className="hover:text-black">Youtube Playlist</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="mt-10 border-t border-gray-300 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
            <span>Shop.co © 2000-2023, All Rights Reserved</span>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {/* Replace these with your actual payment icons */}
              <img src="/icons/Visa.svg" alt="Visa" className="h-5 w-auto" />
              <img src="/icons/mastercard.svg" alt="Mastercard" className="h-5 w-auto" />
              <img src="/icons/paypal.svg" alt="PayPal" className="h-5 w-auto" />
              <img src="/icons/applePay.svg" alt="Apple Pay" className="h-5 w-auto" />
              <img src="/icons/googlePay.svg" alt="Google Pay" className="h-5 w-auto md:block md:mx-auto md:mt-4" />
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
