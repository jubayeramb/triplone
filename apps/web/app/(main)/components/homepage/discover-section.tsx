"use client";

import { MapPin, Ticket, ChevronRight } from "lucide-react";
import Image from "next/image";

export function DiscoverSection() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-16 bg-white">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Discover Bangladesh&apos;s Hidden Treasures
        </h2>
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
          From The World&apos;s Longest Natural Sea Beach At Cox&apos;s Bazar To The Mystical Mangrove Forests Of Sundarbans,
          Bangladesh Offers Incredible Diversity In A Compact Region. Experience Rolling Tea Gardens, Ancient Archaeological
          Sites, And Vibrant Cultural Heritage.
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-0 max-w-6xl mx-auto">
        {/* Left Card - Find Your Destination */}
        <div className="relative w-full lg:w-72 h-64 lg:h-80 rounded-2xl overflow-hidden group">
          <Image
            src="/discover/map-bg.jpg"
            alt="Map background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            <div className="w-12 h-12 rounded-full border-2 border-blue-500 flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center">
              Find Your
              <br />
              Destination
            </h3>
          </div>
        </div>

        {/* Center Card - Book A Ticket */}
        <div className="relative w-full lg:w-80 h-auto lg:-mx-6 z-10">
          <div className="bg-blue-600 rounded-2xl p-6 lg:p-8 relative">
            {/* Ticket Icon */}
            <div className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center mb-4">
              <Ticket className="w-6 h-6 text-white" />
            </div>

            {/* Circular Image */}
            <div className="absolute top-4 right-4 w-28 h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-white">
              <Image
                src="/discover/sunset.jpg"
                alt="Sunset view"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Book
                <br />
                A Ticket
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Traveling Is A Wonderful Way To
                Explore New Places. Learn
                About Different Culture. And
                Gain Unique Experiences
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-white font-medium text-sm hover:gap-3 transition-all"
              >
                LEARN MORE
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Card - Find Any Agency */}
        <div className="relative w-full lg:w-72 h-64 lg:h-80 rounded-2xl overflow-hidden group">
          <Image
            src="/discover/city-bg.jpg"
            alt="City background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
            <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white text-center">
              Find Any
              <br />
              Agency
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
