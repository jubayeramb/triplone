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
import {
  stats,
  features,
  highlights,
  testimonials,
  destinations,
} from "./data/homepage";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <PopularDestinations destinations={destinations} />
      <DiscoverSection />
      <DiscoverPromoSection />
      <AboutUsSection stats={stats} />
      <FeaturesSection features={features} />
      <TestimonialsSection testimonials={testimonials} />
      <HighlightsSection highlights={highlights} />
    </main>
  );
}
