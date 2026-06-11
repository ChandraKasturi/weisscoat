"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedText } from "@/components/motion/AnimatedText";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function DigitalPersona() {
  const reduce = useReducedMotion();
  // Continuous gentle float for the two feature icons, out of phase.
  // Translate/rotate only — no layout impact; inert under reduced motion.
  const iconFloat = (phase: number) =>
    reduce
      ? {}
      : {
          animate: { y: [0, -4, 0, 3, 0], rotate: [0, 4, 0, -4, 0] },
          transition: {
            duration: 4.4 + phase * 0.5,
            ease: "easeInOut" as const,
            repeat: Infinity,
            delay: phase * 0.8,
          },
        };
  // Ken-burns reveal for the dashboard image — the parent wrapper is
  // overflow-hidden, so the oversized start state is clipped, never spills.
  const kenBurns = reduce
    ? {}
    : {
        initial: { scale: 1.14, opacity: 0, filter: "blur(10px)" },
        whileInView: { scale: 1, opacity: 1, filter: "blur(0px)" },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 1.2, ease: EASE },
      };
  return (
    <section className="bg-[#F9FFEF] py-12 sm:py-16 lg:py-[80px] px-4 sm:px-6 lg:px-12 xl:px-[48px]" data-name="Digital Persona">
      <div className="mx-auto max-w-[1440px]">
        {/* Section heading */}
        <div className="flex flex-col items-center gap-4 lg:gap-6 mb-8 sm:mb-12 lg:mb-[60px]">
          <AnimatedText
            as="p"
            variant="letters-float"
            className="font-satoshi font-medium text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.5] text-[#414141] text-center whitespace-nowrap"
          >
            The Digital Persona.
          </AnimatedText>
          <p className="max-w-[887px] font-satoshi font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.5] text-[#444] text-center">
            Weisscoat creates a digital assistant modeled around each
            doctor&rsquo;s specific clinical persona. It doesn&rsquo;t just
            record; it understands how you practice medicine.
          </p>
        </div>

        {/* Two-column — stacks until xl so iPad gets the stacked layout (no cutoff) */}
        <div className="flex flex-col xl:flex-row items-stretch gap-8 xl:gap-10">
          {/* Image (left on xl, top on smaller) */}
          <div className="xl:flex-shrink-0 w-full xl:w-[640px] overflow-hidden rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
            <motion.img
              {...kenBurns}
              src="/figma/clinical-ai-dashboard-figma.png"
              alt="Clinical AI dashboard with humanoid robot and doctor reviewing health metrics on phone"
              className="block w-full h-auto object-cover object-center pointer-events-none select-none"
            />
          </div>

          {/* Right content */}
          <div className="flex-1 flex flex-col gap-4 sm:gap-6 lg:gap-8">
            <h2 className="font-satoshi font-light text-[28px] sm:text-[36px] lg:text-[44px] xl:text-[50px] leading-[1.1] tracking-[-1px] xl:tracking-[-2px] text-[#5B6A5A]">
              Weisscoat creates a{" "}
              <span className="italic font-satoshi font-bold">
                digital clone
              </span>{" "}
              for every doctor.
            </h2>

            <p className="font-satoshi font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.6] lg:leading-[28px] xl:leading-[30px] text-[#454D59]">
              Instead of relying on a generic, one-size-fits-all medical AI
              model, Weisscoat architectically builds personalized AI agents
              modeled around each individual doctor&rsquo;s unique clinical
              persona. The platform learns how a specific doctor asks
              questions, reviews symptoms, interprets patient context, records
              reasoning, and guides post-care. This allows clinics to deliver
              more structured, continuous, and personalized care&mdash;while
              keeping the human physician at the absolute center of every
              medical decision.
            </p>

            {/* Feature row — icon on top, title below, description below — left aligned */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 mt-2 lg:mt-4">
              <div className="flex flex-col items-start gap-2">
                <motion.img {...iconFloat(0)} src="/figma/dp-icon-persona.png" alt="" aria-hidden className="h-[44px] w-[44px] block" />
                <p className="mt-2 font-satoshi font-semibold text-[17px] sm:text-[19px] lg:text-[20px] leading-[1.25] text-[#031E2D]">
                  Persona Matching
                </p>
                <p className="font-satoshi font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.5] lg:leading-[24px] tracking-[0.16px] text-[#131313] opacity-80">
                  Learns your specific diagnostic vocabulary and note-taking style.
                </p>
              </div>
              <div className="flex flex-col items-start gap-2 sm:border-l sm:border-[#5B6A5A]/20 sm:pl-6 lg:pl-8">
                <motion.img {...iconFloat(1)} src="/figma/dp-icon-context.png" alt="" aria-hidden className="h-[44px] w-[44px] block" />
                <p className="mt-2 font-satoshi font-semibold text-[17px] sm:text-[19px] lg:text-[20px] leading-[1.25] text-[#031E2D]">
                  Contextual Intelligence
                </p>
                <p className="font-satoshi font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.5] lg:leading-[24px] tracking-[0.16px] text-[#131313] opacity-80">
                  Understands medical nuances beyond simple speech-to-text conversion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
