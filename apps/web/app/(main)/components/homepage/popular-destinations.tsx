"use client";

import { Button } from "@triplone/ui/components/button";
import { ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Destination {
  id: number;
  name: string;
  toursAvailable: number;
  location: string;
  rating: number;
  image: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Cox's Bazar",
    toursAvailable: 20,
    location: "Chittagong, Bangladesh",
    rating: 4.6,
    image: "/homepage/destinations/coxs-bazar.jpg",
  },
  {
    id: 2,
    name: "Sundarban",
    toursAvailable: 15,
    location: "Khulna, Bangladesh",
    rating: 4.8,
    image: "/homepage/destinations/sundarban.jpg",
  },
  {
    id: 3,
    name: "Bandarban",
    toursAvailable: 25,
    location: "Chittagong, Bangladesh",
    rating: 5.0,
    image: "/homepage/destinations/bandarban.jpg",
  },
];

function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <div className="group flex flex-col">
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {destination.name}
          </h3>
          <p className="text-sm text-gray-500 mb-1">
            {destination.toursAvailable} Tours Available
          </p>
          <div className="flex items-center gap-1 text-gray-500">
            <MapPin className="w-4 h-4 text-blue-500" />
            <span className="text-sm">{destination.location}</span>
          </div>
        </div>

        {/* Rating Badge */}
        <div className="flex items-center gap-1 px-3 py-1.5 bg-blue-500 text-white rounded-lg text-sm font-medium">
          <Star className="w-3.5 h-3.5 fill-current" />
          <span>{destination.rating}</span>
        </div>
      </div>
    </div>
  );
}

export function PopularDestinations() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : destinations.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < destinations.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="w-full px-8 sm:px-12 md:px-20 lg:px-32 py-16">
      {/* Header */}
      <div className="flex items-start justify-between mb-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Popular Destination
          </h2>
          <p className="text-gray-500">
            Most Popular Tourist Destinations In Bangladesh
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevious}
            className="w-10 h-10 bg-white rounded-full border-gray-300 hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </Button>
          <Button
            size="icon"
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-gray-900 hover:bg-gray-800 text-white"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </section>
  );
}
