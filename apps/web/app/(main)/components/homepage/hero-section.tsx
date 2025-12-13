"use client";

import { Button } from "@triplone/ui/components/button";
import { Input } from "@triplone/ui/components/input";
import { Search, Palmtree, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

// Facebook Icon Component (lucide doesn't have Facebook)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export function HeroSection() {
  return (
    <div className="relative min-h-screen w-full py-4 bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] px-4 sm:px-8 md:px-12 lg:px-16 pt-4">
        {/* Background Image Container with rounded corners */}
        <div className="relative w-full h-full min-h-[85vh] rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/homepage/hero.png"
              alt="Beautiful beach in Bangladesh"
              fill
              className="object-cover"
              priority
            />
            {/* Subtle overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-48">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl font-semibold text-center text-white max-w-4xl leading-tight">
              Discover the hidden
              <br />
              <span className="text-white">beauty of Bangladesh</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-white text-center max-w-xl">
              Plan your getaway with ease — we make every
              <br className="hidden sm:block" />
              step smooth and memorable.
            </p>

            {/* CTA Button */}
            <Button
              className="mt-8 px-8 py-6 bg-amber-400 hover:bg-amber-500 text-white font-medium rounded-full text-base shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Explore Packages
            </Button>
          </div>

          {/* Search Box - positioned at bottom of the rounded container */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-full max-w-2xl px-4">
            {/* Tour Tab - floating above the search box */}
            <div className="flex justify-center -mb-5 relative z-10">
              <div className="inline-flex items-center gap-2 px-8 py-3 bg-gray-100 rounded-full shadow-sm">
                <Palmtree className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-medium text-gray-800">Tour</span>
              </div>
            </div>

            {/* Main Search Container */}
            <div className="bg-white rounded-2xl shadow-2xl pt-8 pb-5 px-5 sm:px-6">
              {/* Search Input Row */}
              <div className="flex items-center gap-4">
                <div className="flex-1 min-w-0 border border-gray-200 rounded-2xl px-4 py-2">
                  <label className="block text-[11px] text-gray-400 uppercase tracking-wider font-normal">
                    Location/Tour
                  </label>
                  <Input
                    type="text"
                    placeholder="Cox's Bazar"
                    className="w-full border-0 shadow-none bg-transparent text-lg font-medium text-blue-500 placeholder:text-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-auto"
                  />
                </div>
                <Button
                  size="icon"
                  className="w-14 h-14 rounded-xl bg-blue-500 hover:bg-blue-600 text-white shadow-md transition-all duration-300 hover:shadow-lg flex-shrink-0"
                >
                  <Search className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-6">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-full border border-gray-200">
          <span className="text-sm font-medium text-gray-600">Follow</span>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-blue-500 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-pink-500 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
