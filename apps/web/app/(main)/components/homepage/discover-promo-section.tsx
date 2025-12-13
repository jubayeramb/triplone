import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function DiscoverPromoSection() {
  return (
    <section className="w-full px-8 sm:px-12 md:px-20 lg:px-32 py-16 bg-white">
      {/* Top Section - Promo Banner */}
      <div className="flex flex-col gap-6">
        {/* Top Row - Image and Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left - Image with sunglasses */}
          <div className="lg:w-1/3">
            <div className="relative w-full aspect-[4/4] rounded-2xl overflow-hidden">
              <Image
                src="/homepage/promo/beach-relax.jpg"
                alt="Beach relaxation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className=" px-8 lg:w-2/3 flex flex-col gap-2 justify-center">
            {/* Row 1: DISCOVER + Experience text */}
            <div className="flex flex-col lg:flex-row lg:items-start gap-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-800 leading-none">
                DISCOVER
              </h2>
              <p className="pl-8 text-gray-600 text-sm leading-relaxed max-w-[350px] lg:pt-2">
                Experience Rolling Tea Gardens, Ancient Archaeological Sites, And Vibrant Cultural
                Heritage.
              </p>
            </div>

            {/* Row 2: BANGLADESH'S HIDDEN */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-800 leading-none">
              BANGLADESH&apos;S HIDDEN
            </h2>

            {/* Row 3: Description + TREASURES */}
            <div className="flex flex-col lg:flex-row lg:items-start gap-4">
              <p className="pr-8 text-gray-600 text-sm leading-relaxed max-w-[350px] order-2 lg:order-1">
                From The World&apos;s Longest Natural Sea Beach At Cox&apos;s Bazar To The Mystical
                Mangrove Forests Of Sundarbans, Bangladesh Offers Incredible Diversity
                In A Compact Region.
              </p>
              <h2 className="pt-3 text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-800 leading-none order-1 lg:order-2">
                TREASURES
              </h2>
            </div>
          </div>
        </div>

        {/* Bottom Row - Discount Badge and Wave CTA */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          {/* Left - Discount Badge */}
          <div className="lg:w-1/3">
            <div className="flex items-center gap-4 bg-gray-50 rounded-2xl px-6 py-4 h-full">
              <span className="text-3xl font-semibold text-primary-2">20% Off</span>
              <span className="text-sm text-gray-500">
                Till 28 December
                <br />
                2025
              </span>
            </div>
          </div>

          {/* Right - Beach Wave Image with CTA */}
          <div className="lg:w-2/3">
            <div className="relative w-full h-20 rounded-2xl overflow-hidden">
              <Image
                src="/homepage/promo/wave.jpg"
                alt="Ocean waves"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-start px-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg transition-colors"
                >
                  BOOK TRIP NOW
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

