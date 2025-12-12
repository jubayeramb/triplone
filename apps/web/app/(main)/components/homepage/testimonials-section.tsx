"use client";

import { Star } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  rating: number;
  content: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    content:
      "Such A Modern, User-Friendly Platform! I Found My Saint Martin Tour In Minutes, Compared Prices, And Booked Confidently. Triplone Feels Like A Global-Quality App Built For Bangladeshi Travelers.",
    author: {
      name: "Apurbo",
      title: "Unemployed Person",
      avatar: "/homepage/testimonials/apurbo.jpg",
    },
  },
  {
    id: 2,
    rating: 4,
    content:
      "Triplone Made My Cox's Bazar Trip So Easy! I Compared Several Agencies In One Place And Booked Within Minutes. Everything Was Clear, Verified, And Perfectly Organized. It Saved Me So Much Time And Effort.",
    author: {
      name: "Tayaba Rahman",
      title: "UI/UX Designer",
      avatar: "/homepage/testimonials/tayaba.jpg",
    },
    featured: true,
  },
  {
    id: 3,
    rating: 5,
    content:
      "I Love How Organized And Trustworthy Triplone Feels. The Comparison Option Helped Me Choose The Best Agency Easily. My Bandarban Trip Went Perfectly — Everything Matched What I Saw Online.",
    author: {
      name: "Jubayer",
      title: "Depressed Patient",
      avatar: "/homepage/testimonials/jubayer.jpg",
    },
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 py-16 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Loved By Thousands Travelers
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
          >
            {/* Rating */}
            <div className="mb-6">
              <StarRating rating={testimonial.rating} />
            </div>

            {/* Content */}
            <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
              {testimonial.content}
            </p>

            {/* Author */}
            <div
              className={`flex items-center gap-3 p-3 rounded-xl ${
                testimonial.featured
                  ? "bg-teal-700 text-white"
                  : "bg-transparent"
              }`}
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                <Image
                  src={testimonial.author.avatar}
                  alt={testimonial.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4
                  className={`font-semibold text-sm ${
                    testimonial.featured ? "text-white" : "text-gray-900"
                  }`}
                >
                  {testimonial.author.name}
                </h4>
                <p
                  className={`text-xs ${
                    testimonial.featured ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  {testimonial.author.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
