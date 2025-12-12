import { HeroSection } from "./components/homepage/hero-section";
import { PopularDestinations } from "./components/homepage/popular-destinations";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <PopularDestinations />
    </main>
  );
}

