import { MapPin, Ticket, ChevronRight } from "lucide-react";
import Image from "next/image";

export function DiscoverSection() {
  return (
    <section className="w-full bg-white px-8 py-20 sm:px-12 md:px-20 lg:px-32">
      {/* Header */}
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
          Discover Bangladesh&apos;s Hidden Treasures
        </h2>
        <p className="text-sm leading-relaxed text-gray-500 sm:text-base">
          From The World&apos;s Longest Natural Sea Beach At Cox&apos;s Bazar To
          The Mystical Mangrove Forests Of Sundarbans, Bangladesh Offers
          Incredible Diversity In A Compact Region. Experience Rolling Tea
          Gardens, Ancient Archaeological Sites, And Vibrant Cultural Heritage.
        </p>
      </div>

      {/* Cards Container */}
      <div className="relative mx-auto flex max-w-6xl flex-col items-end justify-center lg:flex-row">
        {/* Left Card - Find Your Destination */}
        <div className="group relative z-0 h-64 w-full overflow-hidden rounded-2xl lg:-mr-8 lg:h-[332px] lg:w-[420px]">
          <Image
            src="/homepage/discover/bangladesh-map.png"
            alt="Map background"
            fill
            className="object-cover"
          />
          {/* White overlay for defocus effect */}
          <div className="absolute inset-0 bg-white/60" />
          <div className="absolute inset-0 flex flex-col items-start justify-between p-16">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-blue-500 bg-white/80">
              <MapPin className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-left text-xl font-bold leading-tight text-gray-900">
              Find Your
              <br />
              Destination
            </h3>
          </div>
        </div>

        {/* Center Card - Book A Ticket */}
        <div className="relative z-20 w-full lg:h-[482px] lg:w-[420px]">
          <div className="bg-primary-2 relative flex h-full flex-col rounded-t-2xl p-8 pt-16 shadow-2xl">
            {/* Ticket Icon */}
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/40 bg-blue-500/50">
              <Ticket className="h-7 w-7 text-white" />
            </div>

            {/* Circular Image - positioned in top right corner */}
            <div className="absolute -right-7 -top-7 h-[215px] w-[215px] overflow-hidden rounded-full border-4 border-white shadow-xl">
              <Image
                src="/homepage/discover/sunset.jpg"
                alt="Sunset view"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-grow flex-col">
              <h3 className="mb-5 text-2xl font-bold leading-tight text-white">
                Book
                <br />A Ticket
              </h3>
              <p className="mb-6 max-w-[320px] text-base leading-relaxed text-white/80">
                Traveling Is A Wonderful Way To Explore New Places. Learn About
                Different Culture. And Gain Unique Experiences
              </p>

              {/* Spacer to push LEARN MORE to bottom */}
              <div className="flex-grow" />

              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-white transition-all hover:gap-3"
              >
                LEARN MORE
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Card - Find Any Agency */}
        <div className="group relative z-0 h-64 w-full overflow-hidden rounded-2xl lg:-ml-8 lg:h-[332px] lg:w-[420px]">
          <Image
            src="/homepage/discover/city-bg.jpg"
            alt="City background"
            fill
            className="object-cover"
          />
          {/* White overlay for defocus effect */}
          <div className="absolute inset-0 bg-white/60" />
          <div className="absolute inset-0 flex flex-col items-start justify-between px-24 py-16">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-blue-500 bg-white/60">
              <MapPin className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-left text-xl font-bold leading-tight text-gray-900">
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
