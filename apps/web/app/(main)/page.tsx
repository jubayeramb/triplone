import { HeroSection } from "./components/homepage/hero-section";
import { PopularDestinations } from "./components/homepage/popular-destinations";
import { DiscoverSection } from "./components/homepage/discover-section";
import { DiscoverPromoSection } from "./components/homepage/discover-promo-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <PopularDestinations />
      <DiscoverSection />
      <DiscoverPromoSection />
    </main>
  );
}
