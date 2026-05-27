"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = "easeOut" as const;

const features = [
  "AI-powered doctor consultation and voice-enabled workflows",
  "Smart patient registration, booking, and waiting management",
  "Integrated lab testing and automated clinical routing",
  "Automated medication reminders and follow-up care systems",
  "Doctor onboarding with licensing verification and clinic mapping",
  "Clinical intelligence engine with historical case insights and outcome tracking",
];

export default function OurStory() {
  return (
    <section
      id="about"
      className="w-full bg-brand-cream px-6 py-24 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_1.05fr] md:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-brand-headline shadow-[0_18px_40px_-12px_rgba(43,65,42,0.3)]"
          >
            <Image
              src="/figma/our-story-doctor.png"
              alt="Doctor"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
          >
            <p className="font-display text-[14px] font-medium uppercase tracking-[0.18em] text-brand-sage">
              Our Story
            </p>
            <h2 className="mt-3 font-display text-[34px] font-bold leading-[1.2] tracking-[-0.01em] text-brand-headline md:text-[40px]">
              Transforming Healthcare Through Intelligent Clinical Infrastructure
            </h2>
            <p className="mt-5 font-display text-[15.5px] leading-[1.75] text-brand-body md:text-[16px]">
              Weisscoat was born from a simple observation: the most valuable thing inside a clinic is the
              doctor&apos;s clinical reasoning — yet none of it gets captured in a structured way. We set out to
              build the connective tissue between human medical expertise and modern AI, so every consultation
              compounds into long-term, doctor-specific clinical intelligence.
            </p>

            <ul className="mt-7 space-y-3.5">
              {features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 font-display text-[14.5px] leading-[1.55] text-brand-body"
                >
                  <span
                    aria-hidden
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-mint-pill/60 text-brand-headline"
                  >
                    <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3">
                      <path
                        d="M3 8.5l3 3 7-7"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
