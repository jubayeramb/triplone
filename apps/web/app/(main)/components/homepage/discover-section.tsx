import { MapPin, Ticket, ChevronRight } from "lucide-react";
import Image from "next/image";

export function DiscoverSection() {
  return (
    <section className="w-full px-8 sm:px-12 md:px-20 lg:px-32 py-16 bg-white">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Discover Bangladesh&apos;s Hidden Treasures
        </h2>
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
          From The World&apos;s Longest Natural Sea Beach At Cox&apos;s Bazar To The Mystical Mangrove Forests Of Sundarbans,
          Bangladesh Offers Incredible Diversity In A Compact Region. Experience Rolling Tea Gardens, Ancient Archaeological
          Sites, And Vibrant Cultural Heritage.
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row items-end justify-center max-w-6xl mx-auto relative">
        {/* Left Card - Find Your Destination */}
        <div className="relative w-full lg:w-[420px] h-64 lg:h-[332px] rounded-2xl overflow-hidden group lg:-mr-8 z-0">
          <Image
            src="/homepage/discover/bangladesh-map.png"
            alt="Map background"
            fill
            className="object-cover"
          />
          {/* White overlay for defocus effect */}
          <div className="absolute inset-0 bg-white/60" />
          <div className="absolute inset-0 flex flex-col items-start justify-between p-16">
            <div className="w-14 h-14 rounded-full border-2 border-blue-500 flex items-center justify-center bg-white/80">
              <MapPin className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-left leading-tight">
              Find Your
              <br />
              Destination
            </h3>
          </div>
        </div>

        {/* Center Card - Book A Ticket */}
        <div className="relative w-full lg:w-[420px] lg:h-[482px] z-20">
          <div className="bg-primary-2 rounded-t-2xl p-8 pt-16 relative shadow-2xl h-full flex flex-col">
            {/* Ticket Icon */}
            <div className="w-16 h-16 rounded-full border-2 border-white/40 flex items-center justify-center mb-6 bg-blue-500/50">
              <Ticket className="w-7 h-7 text-white" />
            </div>

            {/* Circular Image - positioned in top right corner */}
            <div className="absolute -top-7 -right-7 w-[215px] h-[215px] rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/homepage/discover/sunset.jpg"
                alt="Sunset view"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white mb-5 leading-tight">
                Book
                <br />
                A Ticket
              </h3>
              <p className="text-white/80 text-base leading-relaxed mb-6 max-w-[32  0px]">
                Traveling Is A Wonderful Way To
                Explore New Places. Learn
                About Differrent Culture. And
                Gain Unique Experiences
              </p>

              {/* Spacer to push LEARN MORE to bottom */}
              <div className="flex-grow" />

              <a
                href="#"
                className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-3 transition-all tracking-wide"
              >
                LEARN MORE
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Card - Find Any Agency */}
        <div className="relative w-full lg:w-[420px] h-64 lg:h-[332px] rounded-2xl overflow-hidden group lg:-ml-8 z-0">
          <Image
            src="/homepage/discover/city-bg.jpg"
            alt="City background"
            fill
            className="object-cover"
          />
          {/* White overlay for defocus effect */}
          <div className="absolute inset-0 bg-white/60" />
          <div className="absolute inset-0 flex flex-col items-start justify-between px-24 py-16">
            <div className="w-14 h-14 rounded-full border-2 border-blue-500 flex items-center justify-center bg-white/60">
              <MapPin className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-left leading-tight">
              Find Any
              <br />
              Agency
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
