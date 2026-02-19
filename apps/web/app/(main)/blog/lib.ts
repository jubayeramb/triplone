export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
  slug: string;
}

export const categories = [
  "All",
  "Travel Tips",
  "Destinations",
  "Culture",
  "Adventure",
  "Food and Cuisine",
  "Tour Guides",
  "Photography",
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Discover the Hidden Gems of Cox's Bazar: A Complete Travel Guide",
    excerpt:
      "Explore beyond the beaches and discover the untold stories of Cox's Bazar . from local market to secret viewpoints that will take your breath away",
    image: "/blog/latest-blog-image.webp",
    date: "January 15, 2025",
    author: "Rafiq Ahmed",
    category: "Destinations",
    slug: "discover-hidden-gems-coxs-bazar",
  },
  {
    id: "2",
    title: "10 Essential Tips for First-Time Travelers to Bangladesh",
    excerpt:
      "Planning your first trip to Bangladesh ? Here are the essential tips to know for a safe and memorable journey.",
    image: "/blog/blog-card-image.webp",
    date: "January 15, 2025",
    author: "Naz Ahmed",
    category: "Travel Tips",
    slug: "10-essential-tips-first-time-travelers",
  },
  {
    id: "3",
    title: "10 Essential Tips for First-Time Travelers to Bangladesh",
    excerpt:
      "Planning your first trip to Bangladesh ? Here are the essential tips to know for a safe and memorable journey.",
    image: "/blog/blog-card-image.webp",
    date: "January 15, 2025",
    author: "Naz Ahmed",
    category: "Travel Tips",
    slug: "10-essential-tips-first-time-travelers-2",
  },
  {
    id: "4",
    title: "10 Essential Tips for First-Time Travelers to Bangladesh",
    excerpt:
      "Planning your first trip to Bangladesh ? Here are the essential tips to know for a safe and memorable journey.",
    image: "/blog/blog-card-image.webp",
    date: "January 15, 2025",
    author: "Naz Ahmed",
    category: "Travel Tips",
    slug: "10-essential-tips-first-time-travelers-3",
  },
  {
    id: "5",
    title: "10 Essential Tips for First-Time Travelers to Bangladesh",
    excerpt:
      "Planning your first trip to Bangladesh ? Here are the essential tips to know for a safe and memorable journey.",
    image: "/blog/blog-card-image.webp",
    date: "January 15, 2025",
    author: "Naz Ahmed",
    category: "Travel Tips",
    slug: "10-essential-tips-first-time-travelers-4",
  },
  {
    id: "6",
    title: "10 Essential Tips for First-Time Travelers to Bangladesh",
    excerpt:
      "Planning your first trip to Bangladesh ? Here are the essential tips to know for a safe and memorable journey.",
    image: "/blog/blog-card-image.webp",
    date: "January 15, 2025",
    author: "Naz Ahmed",
    category: "Travel Tips",
    slug: "10-essential-tips-first-time-travelers-5",
  },
];

export const topReads: BlogPost[] = [
  {
    id: "1",
    title: "10 Essential Tips for First-Time Travelers to Bangladesh",
    excerpt: "",
    image: "/blog/top-reads-1.webp",
    date: "January 15, 2025",
    author: "Naz Ahmed",
    category: "Travel Tips",
    slug: "10-essential-tips-first-time-travelers",
  },
  {
    id: "2",
    title: "10 Essential Tips for First-Time Travelers to Bangladesh",
    excerpt: "",
    image: "/blog/top-reads-2.webp",
    date: "January 14, 2025",
    author: "Naz Ahmed",
    category: "Travel Tips",
    slug: "10-essential-tips-first-time-travelers-tea",
  },
  {
    id: "3",
    title: "10 Essential Tips for First-Time Travelers to Bangladesh",
    excerpt: "",
    image: "/blog/top-reads-3.webp",
    date: "January 10, 2025",
    author: "Naz Ahmed",
    category: "Travel Tips",
    slug: "10-essential-tips-first-time-travelers-mountain",
  },
];
