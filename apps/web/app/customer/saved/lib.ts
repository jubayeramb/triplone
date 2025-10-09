// Mock data - replace with actual data fetching
export type TourBadgeType = "featured" | "popular" | "trending";

export interface SavedTour {
  id: string;
  image: string;
  title: string;
  location: string;
  duration: string;
  reviews: number;
  totalReviews: number;
  price: number;
  originalPrice: number;
  perPerson: boolean;
  featured?: boolean;
  popular?: boolean;
  trending?: boolean;
}

export const savedTours: SavedTour[] = [
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
