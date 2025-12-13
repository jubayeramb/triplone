import { Compass, Shield, Headphones, LucideIcon } from "lucide-react";

// ============ TYPES ============

export interface Stat {
  value: string;
  label: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Highlight {
  image: string;
  title: string;
  subtitle: string;
}

export interface Testimonial {
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

export interface Destination {
  id: number;
  name: string;
  toursAvailable: number;
  location: string;
  rating: number;
  image: string;
}

// ============ DATA ============

export const stats: Stat[] = [
  { value: "50+", label: "Destinations" },
  { value: "200+", label: "Tour Packages" },
  { value: "25+", label: "Travel Agencies" },
  { value: "10K+", label: "Happy Travelers" },
];

export const features: Feature[] = [
  {
    icon: Compass,
    title: "Local Expertise",
    description:
      "Born And Raised Guides Who Know Every Hidden Waterfall, Secret Viewpoint, And Authentic Local Restaurant",
  },
  {
    icon: Shield,
    title: "Verified Network",
    description:
      "Every Agency Is Personally Vetted, Licensed, And Regularly Audited For Quality And Safety Standards",
  },
  {
    icon: Headphones,
    title: "24/7 Guide",
    description:
      "Real Human Support, Not Chatbots. Emergency Assistance, Travel Updates, And Local Help Whenever You Need It",
  },
];

export const highlights: Highlight[] = [
  {
    image: "/homepage/highlights/ocean-rocks.jpg",
    title: "Explore New Horizons",
    subtitle: "With Confidence.",
  },
  {
    image: "/homepage/highlights/beach-chairs.jpg",
    title: "Experience Bangladesh,",
    subtitle: "One Step At A Time.",
  },
];

export const testimonials: Testimonial[] = [
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
      title: "Ui/Ux Designer",
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

export const destinations: Destination[] = [
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
