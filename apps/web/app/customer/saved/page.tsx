import { Button } from "@triplone/ui/components/button";
import { Card } from "@triplone/ui/components/card";
import { Badge } from "@triplone/ui/components/badge";
import { MapPin, Clock, Star, Bookmark } from "lucide-react";
import Image from "next/image";

// Mock data for saved tours
const savedTours = [
  {
    id: "1",
    image: "/saved-tours/tour-1.png",
    title: "Cox's Bazar Adventure Package",
    location: "Chittagong, Bangladesh",
    duration: "5 Days 4 Nights",
    reviews: 3.1,
    totalReviews: 600,
    price: 6999,
    originalPrice: 10000,
    perPerson: true,
    featured: true,
  },
  {
    id: "2",
    image: "/saved-tours/tour-2.png",
    title: "Rangamati Cultural Experience",
    location: "Chittagong, Bangladesh",
    duration: "3 Days 2 Nights",
    reviews: 3.8,
    totalReviews: 600,
    price: 6999,
    originalPrice: 10000,
    perPerson: true,
    popular: true,
  },
  {
    id: "3",
    image: "/saved-tours/tour-3.png",
    title: "Saint Martin Adventure Package",
    location: "Chittagong, Bangladesh",
    duration: "5 Days 4 Nights",
    reviews: 4.3,
    totalReviews: 600,
    price: 10999,
    originalPrice: 14999,
    perPerson: true,
    trending: true,
  },
  {
    id: "4",
    image: "/saved-tours/tour-4.png",
    title: "Sundarbans Wildlife Adventure",
    location: "Khulna, Bangladesh",
    duration: "5 Days 4 Nights",
    reviews: 3.8,
    totalReviews: 600,
    price: 4099,
    originalPrice: 10000,
    perPerson: true,
    featured: true,
  },
  {
    id: "5",
    image: "/saved-tours/tour-5.png",
    title: "Sylhet Tea Garden Luxury Tour",
    location: "Sylhet, Bangladesh",
    duration: "4 Days 3 Nights",
    reviews: 3.6,
    totalReviews: 600,
    price: 6999,
    originalPrice: 10000,
    perPerson: true,
    popular: true,
  },
];

export default function SavedToursPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex items-center justify-between pt-4">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">Saved Tours</h1>
            <p className="text-gray-500 text-sm font-medium">
              Your wishlist of tours to book later
            </p>
          </div>
        </div>

        {/* Tours Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {savedTours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden group">
              {/* Image Section */}
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Bookmark Button */}
                <button className="absolute top-3 right-3 h-8 w-8 rounded bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors">
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
                    <span className="text-2xl font-bold text-gray-900">
                      ৳{tour.price.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      ৳{tour.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  {tour.perPerson && <span className="text-xs text-gray-500">per person</span>}
                </div>

                {/* Book Now Button */}
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                  Book Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
