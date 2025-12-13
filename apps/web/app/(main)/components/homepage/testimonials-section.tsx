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

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-5 h-5 ${
            star <= rating
              ? "fill-primary text-primary"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

interface QuoteCardProps {
  rating: number;
  content: string;
  featured?: boolean;
}

function QuoteCard({ rating, content }: QuoteCardProps) {
  return (
    <div
      className={"px-8 py-16 min-h-[200px] bg-[#F9F9FB] rounded-xl"}
    >
      {/* Rating */}
      <div className="mb-6">
        <StarRating rating={rating} />
      </div>

      {/* Content */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {content}
      </p>
    </div>
  );
}

interface AuthorCardProps {
  name: string;
  title: string;
  avatar: string;
  featured?: boolean;
}

function AuthorCard({ name, title, avatar, featured }: AuthorCardProps) {
  return (
    <div
    className="p-8 space-y-2"
    >
      <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
        <Image
          src={avatar}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h4
          className={`font-semibold text-sm ${
            featured ? "text-white" : "text-gray-900"
          }`}
        >
          {name}
        </h4>
        <p
          className={`text-xs ${
            featured ? "text-white/80" : "text-gray-500"
          }`}
        >
          {title}
        </p>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="w-full px-8 sm:px-12 md:px-20 lg:px-32 py-20 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
          Loved By Thousands Travelers
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <div className={`flex items-center gap-3 rounded-xl ${
        testimonial.featured ? "bg-primary-2" : "bg-[#F9F9FB]"
      }`}>
          <div key={testimonial.id} className="flex flex-col">
            {/* Quote Card */}
            <QuoteCard
              rating={testimonial.rating}
              content={testimonial.content}
              featured={testimonial.featured}
            />

            {/* Author Card */}
            <AuthorCard
              name={testimonial.author.name}
              title={testimonial.author.title}
              avatar={testimonial.author.avatar}
              featured={testimonial.featured}
            />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
