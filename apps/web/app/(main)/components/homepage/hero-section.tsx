"use client";

import { Button } from "@triplone/ui/components/button";
import { Input } from "@triplone/ui/components/input";
import { Search, Palmtree, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

// Facebook Icon Component (lucide doesn't have Facebook)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export function HeroSection() {
  return (
    <div className="relative min-h-screen w-full bg-white py-4">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full px-4 pt-4 sm:px-8 md:px-12 lg:px-16">
        {/* Background Image Container with rounded corners */}
        <div className="relative h-full min-h-[85vh] w-full overflow-hidden rounded-3xl">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/homepage/hero.png"
              alt="Beautiful beach in Bangladesh"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            {/* Subtle overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 flex flex-col items-center justify-center px-4 pb-48 pt-32 sm:px-6 lg:px-8">
            {/* Main Heading */}
            <h1 className="max-w-4xl text-center text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Discover the hidden
              <br />
              <span className="text-white">beauty of Bangladesh</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-center text-base text-white sm:text-lg">
              Plan your getaway with ease — we make every
              <br className="hidden sm:block" />
              step smooth and memorable.
            </p>

            {/* CTA Button */}
            <Button className="mt-8 rounded-full bg-amber-400 px-8 py-6 text-base font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-amber-500 hover:shadow-xl">
              Explore Packages
            </Button>
          </div>

          {/* Search Box - positioned at bottom of the rounded container */}
          <div className="absolute bottom-8 left-1/2 z-20 w-full max-w-2xl -translate-x-1/2 px-4">
            {/* Tour Tab - floating above the search box */}
            <div className="relative z-10 -mb-5 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-8 py-3 shadow-sm">
                <Palmtree className="h-5 w-5 text-gray-700" />
                <span className="text-sm font-medium text-gray-800">Tour</span>
              </div>
            </div>

            {/* Main Search Container */}
            <div className="rounded-2xl bg-white px-5 pb-5 pt-8 shadow-2xl sm:px-6">
              {/* Search Input Row */}
              <div className="flex items-center gap-4">
                <div className="min-w-0 flex-1 rounded-2xl border border-gray-200 px-4 py-2">
                  <label className="block text-[11px] font-normal uppercase tracking-wider text-gray-400">
                    Location/Tour
                  </label>
                  <Input
                    type="text"
                    placeholder="Cox's Bazar"
                    className="h-auto w-full border-0 bg-transparent p-0 text-lg font-medium text-blue-500 shadow-none placeholder:text-blue-500 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <Button
                  size="icon"
                  className="h-14 w-14 flex-shrink-0 rounded-xl bg-blue-500 text-white shadow-md transition-all duration-300 hover:bg-blue-600 hover:shadow-lg"
                  aria-label="Search for tours"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <div className="w-full px-4 py-6 sm:px-8 md:px-12 lg:px-16">
        <div className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-gray-50 px-6 py-3">
          <span className="text-sm font-medium text-gray-600">Follow</span>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center text-gray-700 transition-colors hover:text-blue-500"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 transition-colors hover:bg-blue-700"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center text-gray-700 transition-colors hover:text-blue-600"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center text-gray-700 transition-colors hover:text-pink-500"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
