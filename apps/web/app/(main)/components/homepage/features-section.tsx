import type { Feature } from "../../data/homepage";

interface FeaturesSectionProps {
  features: Feature[];
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className="w-full px-8 sm:px-12 md:px-20 lg:px-32 py-20 bg-white">
      {/* Header */}
      <div className="text-center mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
          Discover The Bangladesh From Above
        </h2>
        <p className="text-gray-500 text-sm sm:text-base max-w-[700px] mx-auto">
          Traveling Is A Wonderful Way To Explore New Places. Learn About Different
          Culture. And Gain Unique Experiences
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-16 h-16 rounded-full border-2 bg-[#F9F9FB] border-cyan-400 flex items-center justify-center mb-6">
                <IconComponent className="w-7 h-7 text-cyan-500" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title.split(" ")[0]}
                <br />
                {feature.title.split(" ").slice(1).join(" ")}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
