import FeatureBlueprints from "./components/home/FeatureBlueprints";
import HeroSection from "./components/home/HeroSection";
import StatsSection from "./components/home/StatsSection";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureBlueprints/>
      <StatsSection/>
    </div>
  );
}
