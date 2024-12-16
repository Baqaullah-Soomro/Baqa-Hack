"use client"; // If using Next.js 13 App Router

import React from 'react';

export default function Brands() {
  return (
    <section className="bg-black py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Container for brands */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-4 lg:gap-5 text-white font-bold text-xl md:text-2xl tracking-wider">
          <img src="/icons/versace-logo.svg" alt="Versace" className="h-auto w-auto" />
          <img src="/icons/zara-logo.svg" alt="Zara" className="h-auto w-auto" />
          <img src="/icons/gucci-logo.svg" alt="Gucci" className="h-auto w-auto" />
          <img src="/icons/prada-logo.svg" alt="Prada" className="h-auto w-auto" />
          <img src="/icons/calvin-klein-logo.svg" alt="Calvin Klein" className="h-auto w-auto" />
        </div>
      </div>
    </section>
  );
}
