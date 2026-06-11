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
import { Reveal } from "@/components/motion/Reveal";

export default function Home() {
  return (
    <div id="top" className="w-full bg-white overflow-x-hidden">
      <TopBar />
      <NavigationBar />
      <Hero />
      <Reveal from="scale">
        <ProblemGrid />
      </Reveal>
      <div id="digital-persona">
        <Reveal from="blur">
          <DigitalPersona />
        </Reveal>
      </div>
      <div className="h-[40px] sm:h-[80px] xl:h-[120px] bg-white" aria-hidden />
      <Reveal from="left">
        <PatientCareJourney />
      </Reveal>
      <Reveal from="flip">
        <FourLayers />
      </Reveal>
      <div id="how-it-works">
        <Reveal from="right">
          <HowItWorks />
        </Reveal>
      </div>
      <div id="stakeholder-matrix">
        <Reveal from="blur">
          <StakeholderMatrix />
        </Reveal>
      </div>
      <div id="platform">
        <Reveal from="left">
          <UnifiedPlatform />
        </Reveal>
      </div>
      <div id="our-story">
        <Reveal from="right">
          <OurStory />
        </Reveal>
      </div>
      <div id="why-different">
        <Reveal from="scale">
          <WhyDifferent />
        </Reveal>
      </div>
      <Reveal from="flip">
        <Security />
      </Reveal>
      <div id="testimonials">
        <Reveal from="left">
          <Testimonials />
        </Reveal>
      </div>
      <div id="faq">
        <Reveal from="blur">
          <FAQ />
        </Reveal>
      </div>
      <Reveal from="scale">
        <CTA />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
      <Reveal y={32}>
        <Footer />
      </Reveal>
    </div>
  );
}
