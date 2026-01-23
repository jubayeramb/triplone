import Image from "next/image";
import type { Highlight } from "../../data/homepage";

interface HighlightsSectionProps {
  highlights: Highlight[];
}

export function HighlightsSection({ highlights }: HighlightsSectionProps) {
  return (
    <section className="w-full bg-white px-8 py-20 sm:px-12 md:px-20 lg:px-32">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-12 md:flex-row md:gap-24">
        {highlights.map((highlight) => (
          <div key={highlight.title} className="flex items-center gap-6">
            {/* Circular Image */}
            <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-full sm:h-40 sm:w-40">
              <Image
                src={highlight.image}
                alt={highlight.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                {highlight.title}
                <br />
                {highlight.subtitle}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
