import {
  HeroSection,
  PopularDestinations,
  DiscoverSection,
  DiscoverPromoSection,
  AboutUsSection,
  FeaturesSection,
  TestimonialsSection,
  HighlightsSection,
} from "./components/homepage";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <PopularDestinations />
      <DiscoverSection />
      <DiscoverPromoSection />
      <AboutUsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <HighlightsSection />
    </main>
  );
}
