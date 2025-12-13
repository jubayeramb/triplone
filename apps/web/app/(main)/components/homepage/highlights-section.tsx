import Image from "next/image";

const highlights = [
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

export function HighlightsSection() {
  return (
    <section className="w-full px-8 sm:px-12 md:px-20 lg:px-32 py-20 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 max-w-5xl mx-auto">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex items-center gap-6">
            {/* Circular Image */}
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={highlight.image}
                alt={highlight.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
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
