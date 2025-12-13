import type { Stat } from "../../data/homepage";

interface AboutUsSectionProps {
  stats: Stat[];
}

export function AboutUsSection({ stats }: AboutUsSectionProps) {
  return (
    <section className="w-full px-8 sm:px-12 md:px-20 lg:px-32 py-20 bg-white">
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center mb-8">
        Traveling Is A Wonderful Way To Explore New Places. Learn
        <br className="hidden sm:block" />
        About Different Culture. And Gain Unique Experiences
      </h3>

      <div className="flex flex-col lg:flex-row gap-8 items-start mb-16">
        {/* About Us Badge */}
        <div className="lg:w-1/4">
          <div className="inline-block px-8 py-3 border-2 border-primary rounded-full">
            <span className="text-primary font-semibold tracking-wide">ABOUT US</span>
          </div>
        </div>

        {/* Description Columns */}
        <div className="lg:w-3/4 grid md:grid-cols-2 gap-8">
          <div className="border-l-4 border-primary pl-4">
            <p className="text-gray-600 text-sm leading-relaxed">
              At Triplone, We Believe Every Traveler Deserves Clarity, Confidence, And
              Control. Our Platform Connects Verified Tour Agencies Across Bangladesh,
              Helping You Explore, Compare, And Book Trips That Fit Your Preferences With
              Absolute Trust And Convenience.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-4">
            <p className="text-gray-600 text-sm leading-relaxed">
              We&apos;re Redefining How Bangladesh Travels By Blending Innovation, Transparency,
              And Technology. Triplone Simplifies Discovery, Enhances Trust, And Creates
              A Seamless Digital Experience Where Every Journey Begins With Confidence
              And Ends With Lasting Satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center aspect-square p-4 bg-gray-50 rounded-2xl border border-gray-100"
          >
            <span className="text-4xl sm:text-7xl font-medium text-primary-2 mb-2">
              {stat.value}
            </span>
            <span className="text-gray-500 text-2xl">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
