import TopBar from "@/components/sections/TopBar";
import NavigationBar from "@/components/sections/NavigationBar";
import Hero from "@/components/sections/Hero";
import ProblemGrid from "@/components/sections/ProblemGrid";
import DigitalPersona from "@/components/sections/DigitalPersona";
import PatientCareJourney from "@/components/sections/PatientCareJourney";
import FourLayers from "@/components/sections/FourLayers";
import HowItWorks from "@/components/sections/HowItWorks";
import StakeholderMatrix from "@/components/sections/StakeholderMatrix";
import UnifiedPlatform from "@/components/sections/UnifiedPlatform";
import OurStory from "@/components/sections/OurStory";
import WhyDifferent from "@/components/sections/WhyDifferent";
import Security from "@/components/sections/Security";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="w-full overflow-x-auto bg-white">
      <div className="mx-auto w-[1440px]">
        <TopBar />
        <NavigationBar />
        <Hero />
        <ProblemGrid />
        <DigitalPersona />
        <PatientCareJourney />
        <FourLayers />
        <HowItWorks />
        <StakeholderMatrix />
        <UnifiedPlatform />
        <OurStory />
        <WhyDifferent />
        <Security />
        <Testimonials />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
