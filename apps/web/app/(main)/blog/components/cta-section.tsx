import Image from "next/image";
import Link from "next/link";
import { Button } from "@triplone/ui/components/button";

export function CTASection() {
  return (
    <div className="relative pt-24">
      {/* Left Side - Overflowing Image */}
      <div className="absolute bottom-0 left-4 h-[500px] w-[482px] z-10">
        <Image
          src="/blog/cta-image.webp"
          alt="Happy traveler with backpack"
          fill
          className="object-cover rounded-l-3xl"
        />
      </div>

      {/* Main CTA Container */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#5B9FB8] to-[#67A8C0]">
        <div className="flex gap-0 items-end lg:items-center min-h-[300px]">

          {/* Right Side - White Card */}
          <div className="p-5 lg:p-7 flex items-center ml-auto">
            <div className="bg-white rounded-2xl p-4 lg:p-6 space-y-6 max-w-md w-full shadow-lg">
              {/* Logo/Brand */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-primary">Triplone</h3>
              </div>

              {/* Main Heading */}
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center">
                Ready to Explore Bangladesh?
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Turn your travel dreams into reality. Discover our curated tour
                packages and start your adventure today with Triplone.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  asChild
                  className="bg-[#4ECDC4] hover:bg-[#3DBDB4] text-white rounded-lg flex-1"
                >
                  <Link href="/tour">Browse Tour</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-[#4ECDC4] text-[#4ECDC4] hover:bg-[#4ECDC4]/10 rounded-lg flex-1"
                >
                  <Link href="/destinations">View Destinations</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
