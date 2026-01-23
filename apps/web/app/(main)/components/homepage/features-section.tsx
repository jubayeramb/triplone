import type { Feature } from "../../data/homepage";

interface FeaturesSectionProps {
  features: Feature[];
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className="w-full bg-white px-8 py-20 sm:px-12 md:px-20 lg:px-32">
      {/* Header */}
      <div className="mx-auto mb-12 text-center">
        <h2 className="mb-4 text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl">
          Discover Bangladesh From Above
        </h2>
        <p className="mx-auto max-w-[700px] text-sm text-gray-500 sm:text-base">
          Traveling Is A Wonderful Way To Explore New Places. Learn About
          Different Culture. And Gain Unique Experiences
        </p>
      </div>

      {/* Features Grid */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-cyan-400 bg-[#F9F9FB]">
                <IconComponent className="h-7 w-7 text-cyan-500" />
              </div>

              {/* Title */}
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                {feature.title.split(" ")[0]}
                <br />
                {feature.title.split(" ").slice(1).join(" ")}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-500">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
