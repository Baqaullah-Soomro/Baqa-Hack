"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaFilter } from "react-icons/fa";
import Link from "next/link";


// Product Data (Dummy)
const productsData = [
  { id: 1, name: "Gradient Graphic T-shirt", price: 145, rating: 3.5, image: "/images/pic13.png" },
  { id: 2, name: "Polo with Tipping Details", price: 180, rating: 4.5, image: "/images/pic14.png" },
  { id: 3, name: "Black Striped T-shirt", price: 120, rating: 5, image: "/images/pic15.png" },
  { id: 4, name: "Skinny Fit Jeans", price: 240, rating: 3.5, image: "/images/pic2.png" },
  { id: 5, name: "Checkered Shirt", price: 180, rating: 4.5, image: "/images/pic3.png" },
  { id: 6, name: "Sleeve Striped T-shirt", price: 130, rating: 4.5, image: "/images/pic4.png" },
  { id: 7, name: "Vertical Striped Shirt", price: 212, rating: 5, image: "/images/pic5.png" },
  { id: 8, name: "Courage Graphic T-shirt", price: 145, rating: 4, image: "/images/pic6.png" },
  { id: 9, name: "Loose Fit Bermuda Shorts", price: 80, rating: 3, image: "/images/pic7.png" },
];

// Type for Filter Section Keys
type FilterSection = "categories" | "price" | "colors" | "size" | "style";

const ProductsDetail = () => {
  const [filters, setFilters] = useState({
    category: "T-shirts",
    price: [50, 200],
    colors: [],
    size: "Large",
  });

  const [showFilters, setShowFilters] = useState(false);

  // Toggle individual filter sections
  const [openSections, setOpenSections] = useState<{
    categories: boolean;
    price: boolean;
    colors: boolean;
    size: boolean;
    style: boolean;
  }>({
    categories: true,
    price: true,
    colors: true,
    size: true,
    style: true,
  });

  const toggleSection = (section: FilterSection) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Handle price change
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, price: [+e.target.value, filters.price[1]] });
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      {/* Filter Sidebar */}
      <aside
        className={`text-black w-full md:w-1/4 bg-black-100 p-4 rounded-lg ${
          showFilters ? "block" : "hidden"
        } md:block`}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg text-black font-bold">Filters</h3>
          <FaFilter
            className="md:hidden cursor-pointer"
            onClick={() => setShowFilters(!showFilters)}
          />
        </div>

        {/* Filter Section: Categories */}
        <div>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("categories")}
          >
            <h4 className="font-medium">Categories</h4>
            {openSections.categories ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSections.categories && (
            <ul className="mt-2 space-y-1">
              {["T-shirts", "Shorts", "Shirts", "Hoodies", "Jeans"].map((category) => (
                <li key={category} className="flex items-center">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    checked={filters.category === category}
                    onChange={() => setFilters({ ...filters, category })}
                    className="mr-2"
                  />
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Filter Section: Price */}
        <div className="mt-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("price")}
          >
            <h4 className="font-medium">Price</h4>
            {openSections.price ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSections.price && (
            <div className="mt-2">
              <input
                type="range"
                min="50"
                max="200"
                value={filters.price[0]}
                onChange={handlePriceChange}
                className="w-full"
              />
              <p className="text-sm text-gray-600">
                ${filters.price[0]} - ${filters.price[1]}
              </p>
            </div>
          )}
        </div>

        {/* Filter Section: Colors */}
        <div className="mt-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection("colors")}
          >
            <h4 className="font-medium">Colors</h4>
            {openSections.colors ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSections.colors && (
            <div className="flex gap-2 mt-2">
              {["green", "blue", "red", "yellow", "black", "purple"].map((color) => (
                <div
                  key={color}
                  className={`w-6 h-6 rounded-full cursor-pointer`}
                  style={{ backgroundColor: color }}
                  onClick={() => console.log(`Selected: ${color}`)}
                ></div>
              ))}
            </div>
          )}
        </div>
      </aside>

      {/* Product Grid */}
      <main className="text-black h-auto w-full md:w-3/4">
        <h2 className="text-2xl text-black font-bold mb-4">Casual</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="bg-white p-4 rounded-lg shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-70 object-cover mb-4 rounded-lg"
                />
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
                <p className="text-yellow-500">
                  {"★".repeat(Math.floor(product.rating))}{" "}
                  <span className="text-gray-400">
                    {product.rating.toFixed(1)}/5
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <button className="px-4 py-2 bg-gray-200 rounded-l-lg">Previous</button>
          <button className="px-4 py-2 bg-gray-900 text-white">1</button>
          <button className="px-4 py-2 bg-gray-200">2</button>
          <button className="px-4 py-2 bg-gray-200 rounded-r-lg">Next</button>
        </div>
      </main>
    </div>
  );
};

export default ProductsDetail;

