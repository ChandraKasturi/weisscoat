"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedText } from "@/components/motion/AnimatedText";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type JourneyCard = {
  illustration: string;
  title: string;
  body: string;
};

const CARDS: JourneyCard[] = [
  {
    illustration: "/figma/pcj-illus1.png",
    title: "Pre-Screening & Data Gathering",
    body: "AI agents use the doctor’s unique questioning style to generate structured patient summaries.",
  },
  {
    illustration: "/figma/pcj-illus2.png",
    title: "Voice-Captured Consultation",
    body: "Doctors record voice summaries to operationalize their diagnostic rationale and treatment philosophy.",
  },
  {
    illustration: "/figma/pcj-illus3.png",
    title: "Automated Post-Care Tether",
    body: "The system monitors patient tracking data and triggers emergency alerts if thresholds are breached.",
  },
];

function JourneyCardItem({ illustration, title, body, index }: JourneyCard & { index: number }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative w-full max-w-[440px] mx-auto overflow-hidden rounded-[20px] border border-[#E9E9E9] bg-white shadow-[0px_-13px_50px_0px_rgba(66,66,66,0.10)]">
      <div className="bg-[#EBFDEA] flex items-center justify-center h-[260px] sm:h-[300px] lg:h-[336px] p-4">
        {/* Entrance (scale/opacity, staggered per card) composes with a
            perpetual gentle float (y only — disjoint keys, no conflict).
            The illustration sits centered in a fixed-height box, so the
            float never affects layout. */}
        <motion.img
          src={illustration}
          alt=""
          aria-hidden
          className="max-h-full w-auto select-none"
          initial={reduce ? undefined : { opacity: 0, scale: 0.82, filter: "blur(6px)" }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          animate={reduce ? undefined : { y: [0, -6, 0, 5, 0] }}
          transition={
            reduce
              ? undefined
              : {
                  opacity: { duration: 0.8, ease: EASE, delay: index * 0.15 },
                  scale: { duration: 0.8, ease: EASE, delay: index * 0.15 },
                  filter: { duration: 0.8, ease: EASE, delay: index * 0.15 },
                  y: { duration: 5 + index * 0.6, ease: "easeInOut", repeat: Infinity, delay: index * 1.1 },
                }
          }
        />
      </div>
      <div className="px-5 sm:px-6 py-5 sm:py-6">
        <p className="font-satoshi font-medium text-[18px] sm:text-[22px] leading-[28px] sm:leading-[32px] tracking-[0.33px] text-[#121212]">
          {title}
        </p>
        <p className="mt-2 font-satoshi font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[29px] tracking-[0.32px] text-[#696969]">
          {body}
        </p>
      </div>
    </div>
  );
}

export default function PatientCareJourney() {
  const reduce = useReducedMotion();
  // Big dashboard: cinematic 3D settle — rises while a slight rotateY flattens
  // out (perspective for true depth), de-blurring into focus. Settles to identity.
  const dashboardEntrance = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 48, rotateY: -12, filter: "blur(8px)", transformPerspective: 900 },
        whileInView: { opacity: 1, y: 0, rotateY: 0, filter: "blur(0px)", transformPerspective: 900 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 1.1, ease: EASE },
      };
  // Feature icons: perpetual gentle float, out of phase.
  const iconFloat = (phase: number) =>
    reduce
      ? {}
      : {
          animate: { y: [0, -5, 0, 4, 0], rotate: [0, 3, 0, -3, 0] },
          transition: {
            duration: 4.6 + phase * 0.7,
            ease: "easeInOut" as const,
            repeat: Infinity,
            delay: phase * 1.2,
          },
        };
  return (
    <section className="bg-[#F9FFEF] py-12 sm:py-16 lg:py-[80px] px-4 sm:px-6 lg:px-8" data-name="Patient Care Journey">
      <div className="mx-auto max-w-[1440px]">
        <AnimatedText
          as="p"
          variant="letters-float"
          className="font-satoshi font-medium text-[22px] sm:text-[26px] lg:text-[30px] leading-[28px] tracking-[-0.25px] text-[#414141] text-center"
        >
          The Patient Care Journey
        </AnimatedText>
        <p className="mt-3 sm:mt-4 max-w-[1020px] mx-auto font-satoshi font-normal text-[13px] sm:text-[14px] lg:text-[16px] leading-[1.6] text-[#606060] text-center">
          Weisscoat: Scaling Medical Expertise via Individualized AI Agents
        </p>

        {/* Top row: 3 cards */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[18px]">
          {CARDS.map((c, i) => (
            <JourneyCardItem key={c.title} {...c} index={i} />
          ))}
        </div>

        {/* Bottom row: dashboard + two feature cards */}
        <div className="mt-10 lg:mt-16 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <motion.img
            {...dashboardEntrance}
            src="/figma/pcj-dashboard.png"
            alt="Doctor interacting with AI-powered clinical intelligence holographic display"
            className="w-full lg:w-[544px] lg:flex-shrink-0 h-auto rounded-[8px] object-cover select-none"
          />

          <div className="flex-1 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-8 lg:gap-12 pt-2">
            <div className="flex-1">
              <motion.img {...iconFloat(0)} src="/figma/pcj-icon-records.svg" alt="" aria-hidden className="h-[72px] sm:h-[94px] w-[72px] sm:w-[94px]" />
              <p className="mt-4 font-satoshi font-normal text-[22px] sm:text-[28px] lg:text-[32px] leading-[1.25] tracking-[0.48px] text-[#121212]">
                Scalable Medical Personas
              </p>
              <p className="mt-3 font-satoshi font-normal text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.5] text-[#1A2738]">
                Individual AI agents learn a doctor&rsquo;s specific philosophy
                rather than relying on generalized models.
              </p>
            </div>

            <div className="flex-1">
              <motion.img {...iconFloat(1)} src="/figma/pcj-icon-ml.svg" alt="" aria-hidden className="h-[56px] sm:h-[66px] w-[56px] sm:w-[66px]" />
              <p className="mt-4 font-satoshi font-normal text-[22px] sm:text-[28px] lg:text-[32px] leading-[1.25] tracking-[0.48px] text-[#121212]">
                Permanent Intelligence Asset
              </p>
              <p className="mt-3 font-satoshi font-normal text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.5] text-[#1A2738]">
                Every interaction becomes a searchable data point, referencing
                past successful treatments for similar conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
