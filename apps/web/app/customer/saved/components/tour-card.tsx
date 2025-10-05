"use client";

import { Button } from "@triplone/ui/components/button";
import { Card } from "@triplone/ui/components/card";
import { Badge } from "@triplone/ui/components/badge";
import { MapPin, Clock, Star, Bookmark } from "lucide-react";
import Image from "next/image";
import type { SavedTour } from "../lib";

interface TourCardProps {
  tour: SavedTour;
  onBookNow?: (tourId: string) => void;
  onToggleSave?: (tourId: string) => void;
}

export function TourCard({ tour, onBookNow, onToggleSave }: TourCardProps) {
  return (
    <Card className="overflow-hidden group">
      {/* Image Section */}
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Bookmark Button */}
        <button
          onClick={() => onToggleSave?.(tour.id)}
          className="absolute top-3 right-3 h-8 w-8 rounded bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
        >
          <Bookmark className="h-4 w-4 text-red-500 fill-red-500" />
        </button>

        {/* Badge */}
        {tour.featured && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-teal-500 text-white border-0">FEATURED</Badge>
          </div>
        )}
        {tour.popular && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-orange-500 text-white border-0">POPULAR</Badge>
          </div>
        )}
        {tour.trending && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-blue-500 text-white border-0">TRENDING</Badge>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-3 line-clamp-1">{tour.title}</h3>

        <div className="flex items-center gap-1 text-sm text-gray-600 mb-2">
          <MapPin className="h-4 w-4" />
          <span>{tour.location}</span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-gray-900">{tour.reviews}</span>
            <span className="text-gray-500">({tour.totalReviews} reviews)</span>
          </div>
        </div>

        {/* Price Section */}
        <div className="mb-3">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">৳{tour.price.toLocaleString()}</span>
            <span className="text-sm text-gray-500 line-through">
              ৳{tour.originalPrice.toLocaleString()}
            </span>
          </div>
          {tour.perPerson && <span className="text-xs text-gray-500">per person</span>}
        </div>

        {/* Book Now Button */}
        <Button
          className="w-full bg-teal-600 hover:bg-teal-700 text-white"
          onClick={() => onBookNow?.(tour.id)}
        >
          Book Now
        </Button>
      </div>
    </Card>
  );
}
