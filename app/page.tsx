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
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div id="top" className="w-full bg-white overflow-x-hidden">
      <TopBar />
      <NavigationBar />
      <Hero />
      <ProblemGrid />
      <div id="digital-persona">
        <DigitalPersona />
      </div>
      <div className="h-[40px] sm:h-[80px] xl:h-[120px] bg-white" aria-hidden />
      <PatientCareJourney />
      <FourLayers />
      <HowItWorks />
      <StakeholderMatrix />
      <div id="platform">
        <UnifiedPlatform />
      </div>
      <div id="our-story">
        <OurStory />
      </div>
      <div id="why-different">
        <WhyDifferent />
      </div>
      <Security />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
