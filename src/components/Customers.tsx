"use client";

import React, { useEffect, useState } from 'react';
import { FaStar, FaCheckCircle } from 'react-icons/fa';

type Testimonial = {
  id: number;
  name: string;
  review: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah M.',
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    rating: 5.0,
  },
  {
    id: 2,
    name: 'Alex K.',
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    rating: 5.0,
  },
  {
    id: 3,
    name: 'James L.',
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    rating: 5.0,
  },
  {
    id: 4,
    name: 'Monica R.',
    review:
      "Shop.co's customer service is exceptional. They helped me find the perfect outfit for a friend's wedding, and I received endless compliments. I'm so happy I found this store!",
    rating: 5.0,
  },
  {
    id: 5,
    name: 'Daniel S.',
    review:
      "I've never felt more confident in the clothes I wear since I started shopping at Shop.co. The quality, fit, and style are consistently top-notch, making it my go-to fashion destination.",
    rating: 5.0,
  },
];

export default function Customers() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const getStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<FaStar key={i} className="text-yellow-500 inline-block mr-1" />);
    }
    return stars;
  };

  const displayedTestimonials = testimonials.slice(0, 3);

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
          OUR HAPPY CUSTOMERS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`
                bg-white border border-gray-200 rounded-lg p-6
                transition-all duration-700 ease-out
                ${hasMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              <div className="mb-2">
                {getStars(testimonial.rating)}
              </div>

              <div className="flex items-center mb-4 text-gray-800 font-semibold">
                {testimonial.name} <FaCheckCircle className="text-green-500 ml-1" />
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

