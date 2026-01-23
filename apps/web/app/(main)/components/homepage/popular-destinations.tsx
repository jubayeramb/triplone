"use client";

import { Button } from "@triplone/ui/components/button";
import { ChevronLeft, ChevronRight, MapPin, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { Destination } from "../../data/homepage";

interface PopularDestinationsProps {
  destinations: Destination[];
}

function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <div className="group flex flex-col">
      {/* Image Container */}
      <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-2xl">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="mb-1 text-lg font-semibold text-gray-900">
            {destination.name}
          </h3>
          <p className="mb-1 text-sm text-gray-500">
            {destination.toursAvailable} Tours Available
          </p>
          <div className="flex items-center gap-1 text-gray-500">
            <MapPin className="h-4 w-4 text-blue-500" />
            <span className="text-sm">{destination.location}</span>
          </div>
        </div>

        {/* Rating Badge */}
        <div className="flex items-center gap-1 rounded-lg bg-blue-500 px-3 py-1.5 text-sm font-medium text-white">
          <Star className="h-3.5 w-3.5 fill-current" />
          <span>{destination.rating}</span>
        </div>
      </div>
    </div>
  );
}

export function PopularDestinations({
  destinations,
}: PopularDestinationsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : destinations.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < destinations.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="w-full px-8 py-20 sm:px-12 md:px-20 lg:px-32">
      {/* Header */}
      <div className="mb-10 flex items-start justify-between">
        <div>
          <h2 className="mb-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Popular Destinations
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
            className="h-10 w-10 rounded-full border-gray-300 bg-white hover:bg-gray-100"
            aria-label="Previous destination"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </Button>
          <Button
            size="icon"
            onClick={handleNext}
            className="bg-primary-2 hover:bg-primary-2/80 h-10 w-10 rounded-full text-white"
            aria-label="Next destination"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </section>
  );
}
