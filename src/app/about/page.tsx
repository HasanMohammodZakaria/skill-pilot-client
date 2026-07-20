import AboutHero from "../components/about/AboutHero";
import FeaturesSection from "../components/about/FeaturesSection";
import MissionSection from "../components/about/MissionSection";
import StatsSection from "../components/home/StatsSection";
import TestimonialsWrapper from "../components/home/TestimonialsWrapper";
const AboutPage = () => {
    return (
        <div>
            <AboutHero/>
            <MissionSection />
            <FeaturesSection />
            <StatsSection/>
            <TestimonialsWrapper/>
        </div>
    );
};

export default AboutPage;