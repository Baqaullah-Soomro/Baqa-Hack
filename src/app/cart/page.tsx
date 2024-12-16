"use client";

import React, { useState } from "react";
import { FaTrash, FaMinus, FaPlus, FaArrowRight } from "react-icons/fa";



interface CartItem {
  id: number;
  name: string;
  size: string;
  color: string;
  price: number;
  quantity: number;
  Image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      quantity: 1,
      Image: "/images/pic13.png",
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      quantity: 1,
      Image: "/images/pic3.png",
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      quantity: 1,
      Image: "/images/pic2.png",
    },
  ]);

  const deliveryFee = 15;
  const discountRate = 0.2; // 20% Discount
  const [promoCode, setPromoCode] = useState("");

  // Update Quantity
  const updateQuantity = (id: number, amount: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  // Remove Item
  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate Subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Apply Discount
  const discount = subtotal * discountRate;

  // Calculate Total
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-black font-bold mb-6">YOUR CART</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 bg-gray-50 rounded-lg shadow-sm">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b p-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.Image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-bold text-black text-lg">{item.name}</h3>
                  <p className="text-black text-sm">Size: {item.size}</p>
                  <p className="text-black text-sm">Color: {item.color}</p>
                  <p className="font-semibold mt-1 text-black">${item.price}</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center h-10 space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="px-3 py-1 text-black rounded hover:bg-black hover:text-white"
                >
                  <FaMinus />
                </button>
                <span className="text-lg text-black">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="px-3 py-1 bg-black rounded hover:bg-black hover:text-white"
                >
                  <FaPlus />
                </button>
              </div>

              {/* Remove Item */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash size={20} />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl text-black font-bold mb-4">Order Summary</h2>
          <div className="text-black flex justify-between mb-2">
            <span>Subtotal</span>
            <span className="text-black font-semibold">${subtotal}</span>
          </div>
          <div className="text-black flex justify-between mb-2">
            <span>Discount (-20%)</span>
            <span className="text-red-500">-${discount.toFixed(0)}</span>
          </div>
          <div className="text-black flex justify-between mb-2">
            <span>Delivery Fee</span>
            <span>${deliveryFee}</span>
          </div>
          <div className="text-black flex justify-between mt-4 border-t pt-4">
            <span className="text-black font-bold text-lg">Total</span>
            <span className="font-bold text-lg">${total.toFixed(0)}</span>
          </div>

          {/* Promo Code */}
          <div className="mt-4 flex items-center">
            <input
              type="text"
              placeholder="Add promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="w-full px-4 py-2 border rounded-l focus:outline-none"
            />
            <button className="px-4 py-2 bg-black text-white rounded-r hover:bg-black">
              Apply
            </button>
          </div>

          {/* Checkout Button */}
          <button className="w-full mt-6 bg-black text-white py-3 rounded-lg flex items-center justify-center hover:bg-gray-800">
            Go to Checkout <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
