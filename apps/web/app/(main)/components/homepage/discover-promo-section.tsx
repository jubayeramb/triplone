"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "50+", label: "Destinations" },
  { value: "200+", label: "Tour Packages" },
  { value: "25+", label: "Travel Agencies" },
  { value: "10K+", label: "Happy Travelers" },
];

export function DiscoverPromoSection() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-16 bg-white">
      {/* Top Section - Promo Banner */}
      <div className="flex flex-col lg:flex-row gap-8 mb-16">
        {/* Left - Image with sunglasses */}
        <div className="lg:w-1/3">
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/homepage/promo/beach-relax.jpg"
              alt="Beach relaxation"
              fill
              className="object-cover"
            />
          </div>
          {/* Discount Badge */}
          <div className="flex items-center gap-4 mt-4">
            <span className="text-3xl font-bold text-teal-700">20% Off</span>
            <span className="text-sm text-gray-500">
              Till 28 December
              <br />
              2025
            </span>
          </div>
        </div>

        {/* Right - Content */}
        <div className="lg:w-2/3 flex flex-col">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main Heading */}
            <div className="lg:w-2/3">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-800 leading-tight mb-6">
                DISCOVER
                <br />
                BANGLADESH&apos;S HIDDEN
                <br />
                TREASURES
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-md">
                From The World&apos;s Longest Natural Sea Beach At Cox&apos;s Bazar To The Mystical
                Mangrove Forests Of Sundarbans, Bangladesh Offers Incredible Diversity
                In A Compact Region.
              </p>
            </div>

            {/* Side Text */}
            <div className="lg:w-1/3">
              <p className="text-gray-600 text-sm leading-relaxed">
                Experience Rolling Tea Gardens, Ancient Archaeological Sites, And Vibrant Cultural
                Heritage.
              </p>
            </div>
          </div>

          {/* Beach Wave Image with CTA */}
          <div className="mt-auto pt-8">
            <div className="relative w-full h-32 sm:h-40 rounded-2xl overflow-hidden">
              <Image
                src="/homepage/promo/wave.jpg"
                alt="Ocean waves"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-lg transition-colors"
                >
                  BOOK TRIP NOW
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="mb-16">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center mb-8">
          Traveling Is A Wonderful Way To Explore New Places. Learn
          <br className="hidden sm:block" />
          About Different Culture. And Gain Unique Experiences
        </h3>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* About Us Badge */}
          <div className="lg:w-1/4">
            <div className="inline-block px-8 py-3 border-2 border-teal-600 rounded-full">
              <span className="text-teal-700 font-semibold tracking-wide">ABOUT US</span>
            </div>
          </div>

          {/* Description Columns */}
          <div className="lg:w-3/4 grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-teal-500 pl-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                At Triplone, We Believe Every Traveler Deserves Clarity, Confidence, And
                Control. Our Platform Connects Verified Tour Agencies Across Bangladesh,
                Helping You Explore, Compare, And Book Trips That Fit Your Preferences With
                Absolute Trust And Convenience.
              </p>
            </div>
            <div className="border-l-4 border-teal-500 pl-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                We&apos;re Redefining How Bangladesh Travels By Blending Innovation, Transparency,
                And Technology. Triplone Simplifies Discovery, Enhances Trust, And Creates
                A Seamless Digital Experience Where Every Journey Begins With Confidence
                And Ends With Lasting Satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center py-8 px-4 bg-gray-50 rounded-2xl border border-gray-100"
          >
            <span className="text-4xl sm:text-5xl font-bold text-teal-800 mb-2">
              {stat.value}
            </span>
            <span className="text-gray-500 text-sm">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
