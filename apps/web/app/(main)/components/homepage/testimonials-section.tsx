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
            "h-5 w-5",
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
}

function QuoteCard({ rating, content }: QuoteCardProps) {
  return (
    <div className={"min-h-[200px] rounded-xl bg-[#F9F9FB] px-8 py-16"}>
      {/* Rating */}
      <div className="mb-6">
        <StarRating rating={rating} />
      </div>

      {/* Content */}
      <p className="text-sm leading-relaxed text-gray-600">{content}</p>
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
    <div className="space-y-2 p-8">
      <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full bg-gray-200">
        <Image src={avatar} alt={name} fill className="object-cover" />
      </div>
      <div>
        <h4
          className={cn(
            "text-sm font-semibold",
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

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="w-full bg-white px-8 py-20 sm:px-12 md:px-20 lg:px-32">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl">
          Loved By Thousands Of Travelers
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div
            className={cn(
              "flex items-center gap-3 rounded-xl",
              testimonial.featured ? "bg-primary-2" : "bg-[#F9F9FB]"
            )}
            key={testimonial.id}
          >
            <div className="flex flex-col">
              {/* Quote Card */}
              <QuoteCard
                rating={testimonial.rating}
                content={testimonial.content}
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
