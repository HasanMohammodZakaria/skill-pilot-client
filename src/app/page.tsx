import AIHighlightSection from "./components/home/AIHighlightSection";
import CTASection from "./components/home/CTASection";
import FeatureBlueprints from "./components/home/FeatureBlueprints";
import HeroSection from "./components/home/HeroSection";
import HowItWorks from "./components/home/HowItWorks";
import StatsSection from "./components/home/StatsSection";
import TestimonialsWrapper from "./components/home/TestimonialsWrapper";



export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureBlueprints/>
      <StatsSection/>
      <TestimonialsWrapper />
      <AIHighlightSection />
      <HowItWorks />
      <CTASection />
    </div>
  );
}
