"use client"; // If using Next.js 13 App Router for client-side interactivity

import React from 'react';
import Link from 'next/link';
import { FaStar, FaRegStarHalf } from 'react-icons/fa';

type Product = {
  id: number;
  name: string;
  image: string; // URL to the image
  rating: number; // e.g. 4.5
  price: number; // discounted or final price
  originalPrice?: number;
  link: string; // only if there is a discount
};

const products: Product[] = [
  {
    id: 1,
    name: 'T-shirt with Tape Details',
    image: '/images/pic1.png',
    rating: 4.5,
    price: 120,
    link: '/product/1',
    
  },
  {
    id: 2,
    name: 'Skinny Fit Jeans',
    image: '/images/pic2.png',
    rating: 3.5,
    price: 208,
    originalPrice: 260,
    link: '/product/1',
  },
  {
    id: 3,
    name: 'Checkered Shirt',
    image: '/images/pic3.png',
    rating: 4.5,
    price: 180,
    link: '/product/1',
  },
  {
    id: 4,
    name: 'Sleeve Striped T-shirt',
    image: '/images/pic4.png',
    rating: 4.5,
    price: 112,
    originalPrice: 160,
    link: '/product/1',
  },
];

function getStars(rating: number) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const starsArray = [];

  for (let i = 0; i < fullStars; i++) {
    starsArray.push(<FaStar key={i} className="text-yellow-500 inline-block" />);
  }

  if (halfStar) {
    starsArray.push(<FaRegStarHalf key="half" className="text-yellow-500 inline-block" />);
  }

  return starsArray;
}

function calculateDiscountPercentage(price: number, originalPrice: number) {
  if (!originalPrice) return null;
  const discount = ((originalPrice - price) / originalPrice) * 100;
  return `${Math.round(discount)}%`;
}

export default function NewArrivals() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">NEW ARRIVALS</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 align-items-center">
          {products.map((product) => {
            const discountPercentage = product.originalPrice
              ? calculateDiscountPercentage(product.price, product.originalPrice)
              : null;

            return (
              <Link key={product.id} href={product.link}>
                <div className="bg-white  rounded-lg p-4 flex flex-col items-center">
                  <div className="w-full h-64 mb-4 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-contain max-h-full"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-md font-semibold text-gray-900 text-center">{product.name}</h3>
                    <div className="flex items-center justify-center mt-2">
                      {getStars(product.rating)}
                      <span className="text-gray-600 text-sm ml-2">
                        {product.rating}/5
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <span className="text-xl font-bold text-gray-900">${product.price}</span>
                    {product.originalPrice && (
                      <>
                        <span className="text-gray-500 line-through ml-2">${product.originalPrice}</span>
                        {discountPercentage && (
                          <span className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                            -{discountPercentage}
                          </span>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        
        <div className="flex justify-center mt-8">
  <Link
   href="/products"
    className="inline-block bg-gray-100 text-gray-700 rounded-full px-6 py-3 hover:bg-gray-200 transition-colors duration-300">
  
    View All
  </Link>
</div>

      </div>
    </section>
  );
}

