import { cn } from "@triplone/ui/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";
import type { Testimonial } from "../../data/homepage";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            "w-5 h-5",
            star <= rating
              ? "fill-primary text-primary"
              : "fill-gray-200 text-gray-200"
          )}
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
          className={cn(
            "font-semibold text-sm",
            featured ? "text-white" : "text-gray-900"
          )}
        >
          {name}
        </h4>
        <p
          className={cn(
            "text-xs",
            featured ? "text-white/80" : "text-gray-500"
          )}
        >
          {title}
        </p>
      </div>
    </div>
  );
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
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
          <div className={cn(
            "flex items-center gap-3 rounded-xl",
            testimonial.featured ? "bg-primary-2" : "bg-[#F9F9FB]"
          )} key={testimonial.id}>
          <div className="flex flex-col">
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
