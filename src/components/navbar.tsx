"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaShoppingCart,
  FaUser,
  FaSearch,
} from "react-icons/fa";
import router from "next/router";

const Navbar = () => {
  const [isNotificationVisible, setIsNotificationVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

  const handleNotificationClose = () => {
    setIsNotificationVisible(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleShopDropdown = () => {
    setIsShopDropdownOpen(!isShopDropdownOpen);
  };

  return (
    <div>
      {/* Notification Bar */}
      {isNotificationVisible && (
        <div className="bg-black text-white p-2">
          <div className="container mx-auto flex items-center justify-between">
            <span className="text-center w-full">
              Sign up and get 20% off your first order.{" "}
              <Link href="/signup" className="underline">
                Sign Up Now
              </Link>
            </span>
            <FaTimes
              className="text-white cursor-pointer"
              onClick={handleNotificationClose}
            />
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl text-black font-bold">
            <Link href="/">SHOP.CO</Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Shop Dropdown */}
            <div className="relative">
              <button
                onClick={toggleShopDropdown}
                className="flex items-center text-gray-700 font-medium focus:outline-none"
              >
                Shop{" "}
                <FaChevronDown
                  className={`ml-1 transform transition-transform ${
                    isShopDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isShopDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        <Link href="/products">Men's clothes</Link>
                      </h3>
                      <p className="text-gray-500">
                        Attractive and spectacular colors and designs
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        <Link href="/products">Women's clothes</Link>
                      </h3>
                      <p className="text-gray-500">
                        Ladies, your style and tastes are important to us
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        <Link href="/products">Kids clothes</Link>
                      </h3>
                      <p className="text-gray-500">
                        For all ages, with happy and beautiful colors
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        <Link href="/products">Bags and Shoes</Link>
                      </h3>
                      <p className="text-gray-500">
                        Suitable for men, women, and all tastes and styles
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Links */}
            <Link href="/products" className="text-gray-700 font-medium">
              On Sale
            </Link>
            <Link href="/products" className="text-gray-700 font-medium">
              New Arrivals
            </Link>
            <Link href="/products" className="text-gray-700 font-medium">
              Brands
            </Link>
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <form className="relative" onSubmit={(e) => {
              e.preventDefault();
              const query = (e.currentTarget.querySelector('input') as HTMLInputElement).value;
              router.push(`/search?q=${encodeURIComponent(query)}`);
            }}>
              <input
                type="text"
                placeholder="Search for products..."
                className="bg-gray-200 text-black rounded-full px-4 py-2 focus:outline-none"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </form>
            <Link href="/cart" className="text-gray-700">
              <FaShoppingCart size={20} />
            </Link>
            <Link href="/account" className="text-gray-700">
              <FaUser size={20} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <nav className="px-4 py-2">
              <button
                onClick={toggleShopDropdown}
                className="w-full flex items-center justify-between text-gray-700 font-medium"
              >
                Shop{" "}
                <FaChevronDown
                  className={`transform transition-transform ${
                    isShopDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isShopDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  <Link href="/products" className="block text-gray-600">
                    Men's clothes
                  </Link>
                  <Link href="/products" className="block text-gray-600">
                    Women's clothes
                  </Link>
                  <Link href="/products" className="block text-gray-600">
                    Kids clothes
                  </Link>
                  <Link href="/products" className="block text-gray-600">
                    Bags and Shoes
                  </Link>
                </div>
              )}
              <Link href="/products" className="block mt-4 text-gray-700">
                On Sale
              </Link>
              <Link href="/products" className="block text-gray-700">
                New Arrivals
              </Link>
              <Link href="/products" className="block text-gray-700">
                Brands
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
