import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
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
import KeepInTouch from "@/components/sections/KeepInTouch";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
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
        <KeepInTouch />
      </main>
      <Footer />
    </>
  );
}
