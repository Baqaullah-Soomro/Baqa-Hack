"use client";

import React, { useState } from "react";
import { FaStar, FaMinus, FaPlus } from "react-icons/fa";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedColor, setSelectedColor] = useState("green");
  const [activeTab, setActiveTab] = useState("details");

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(Math.max(1, quantity - 1));

  const sizes = ["Small", "Medium", "Large", "X-Large"];
  const colors = ["green", "black"];

  const reviews = [
    { name: "Samantha D.", rating: 5, comment: "Unique and stylish design!", date: "August 14, 2023" },
    { name: "Alex M.", rating: 5, comment: "The colors are vibrant and amazing.", date: "August 15, 2023" },
    { name: "Ethan R.", rating: 4, comment: "A perfect fit and great for casual wear.", date: "August 12, 2023" },
    { name: "Olivia P.", rating: 5, comment: "Great quality and functionality.", date: "August 10, 2023" },
    { name: "Liam K.", rating: 5, comment: "Comfort and creativity in one shirt.", date: "August 11, 2023" },
  ];

  const similarProducts = [
    { id: 1, name: "Polo with Contrast Trims", price: 212, image: "/images/pic6.png" },
    { id: 2, name: "Gradient Graphic T-shirt", price: 145, image: "/images/pic13.png" },
    { id: 3, name: "Polo with Tipping Details", price: 180, image: "/images/pic14.png" },
    { id: 4, name: "Black Striped T-shirt", price: 120, image: "/images/pic15.png" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <img
            src="/images/pic11.png"
            alt="Product"
            className="w-full h-auto rounded-lg"
          />
          <div className="flex space-x-4 mt-4">
            <img
              src="/images/pic9.png"
              alt="Thumbnail"
              className="w-20 h-20 rounded-lg cursor-pointer"
            />
            <img
              src="/images/pic10.png"
              alt="Thumbnail"
              className="w-20 h-20 rounded-lg cursor-pointer"
            />
            <img
              src="/images/pic1.png"
              alt="Thumbnail"
              className="w-20 h-20 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-black text-3xl font-bold">ONE LIFE GRAPHIC T-SHIRT</h1>
          <div className="flex items-center mt-2">
            <div className="text-yellow-400 flex">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <FaStar className="text-black" />
            </div>
            <span className="ml-2 text-black">4.5/5</span>
          </div>

          <div className="flex items-center mt-4 space-x-4">
            <span className="text-2xl font-bold text-black">$260</span>
            <span className="text-lg text-black line-through">$300</span>
          </div>

          {/* Select Color */}
          <div className="mt-4">
            <h3 className="text-black font-semibold mb-2">Select Color:</h3>
            <div className="flex space-x-2">
              {colors.map((color) => (
                <div
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full cursor-pointer ${
                    selectedColor === color ? "ring-2 ring-black" : ""
                  }`}
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          {/* Select Size */}
          <div className="mt-4">
            <h3 className="text-black font-semibold mb-2">Choose Size:</h3>
            <div className="flex space-x-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded ${
                    selectedSize === size
                      ? "border-black text-black font-bold"
                      : "border-black text-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center mt-4 space-x-4">
            <div className="flex items-center space-x-2">
              <button
                onClick={decreaseQuantity}
                className="px-3 py-2 bg-black text-white rounded"
              >
                <FaMinus />
              </button>
              <span className="text-lg">{quantity}</span>
              <button
                onClick={increaseQuantity}
                className="px-3 py-2 bg-black text-white rounded"
              >
                <FaPlus />
              </button>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8 border-t pt-4">
        <div className="flex space-x-4">
          <button
            className={`text-black px-4 py-2 ${
              activeTab === "details" ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setActiveTab("details")}
          >
            Product Details
          </button>
          <button
            className={`text-black px-4 py-2 ${
              activeTab === "reviews" ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Ratings & Reviews
          </button>
          <button
            className={`text-black px-4 py-2 ${
              activeTab === "faq" ? "border-b-2 border-black" : ""
            }`}
            onClick={() => setActiveTab("faq")}
          >
            FAQs
          </button>
        </div>

        {activeTab === "details" && <p className="text-black mt-4">This is a detailed product description.</p>}
        {activeTab === "reviews" && (
          <div className="mt-4">
            {reviews.map((review, index) => (
              <div key={index} className="text-black border p-4 rounded mb-2">
                <h4 className="font-bold">{review.name}</h4>
                <p className="text-yellow-400">{"★".repeat(review.rating)}</p>
                <p className="text-black">{review.comment}</p>
                <span className="text-black text-sm">{review.date}</span>
              </div>
            ))}
          </div>
        )}
        {activeTab === "faq" && <p className="text-black mt-4">FAQs go here.</p> }
      </div>

      {/* Similar Products */}
      <h2 className="text-black text-2xl font-bold mt-8">YOU MIGHT ALSO LIKE</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {similarProducts.map((product) => (
          <div key={product.id} className="text-black bg-white p-4 rounded-lg shadow">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover rounded"
            />
            <h4 className="font-medium mt-2">{product.name}</h4>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
