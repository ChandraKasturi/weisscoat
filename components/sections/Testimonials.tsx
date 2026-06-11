"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedText } from "@/components/motion/AnimatedText";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Testimonials() {
  const reduce = useReducedMotion();
  // Portrait scales/de-blurs into place; the offset frame fades in just after,
  // reading as the photo "snapping" into its frame. The frame's offset comes
  // from Tailwind translate classes, so we animate ONLY its opacity (a framer
  // transform would override those classes and break the at-rest offset).
  const portraitEntrance = reduce
    ? {}
    : {
        initial: { opacity: 0, scale: 1.08, filter: "blur(10px)" },
        whileInView: { opacity: 1, scale: 1, filter: "blur(0px)" },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 1.0, ease: EASE },
      };
  const frameEntrance = reduce
    ? {}
    : {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.7, ease: EASE, delay: 0.5 },
      };
  return (
    <section className="bg-white py-10 sm:py-14 lg:py-[60px]" data-name="Social Proof & Testimonials">
      <AnimatedText
        as="p"
        variant="letters-float"
        className="font-satoshi font-medium text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.25] text-black text-center px-4"
      >
        Social Proof &amp; Testimonials
      </AnimatedText>

      <p className="mt-3 sm:mt-4 mx-auto max-w-[900px] font-satoshi font-normal text-[13px] sm:text-[14px] lg:text-[16px] leading-[1.5] text-[#1D1D1D] text-center px-4 sm:px-6">
        &ldquo;Before Weisscoat, I spent too much time gathering basic history
        and typing notes. Now I start every consultation with structured
        context and can focus more on the patient.&rdquo;
      </p>

      <div className="mt-8 sm:mt-10 lg:mt-[40px] relative w-full bg-[#F9FFEF] py-10 sm:py-14 lg:py-[80px]">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-[120px] items-center">
          <div className="relative w-full sm:w-[400px] lg:w-[462px] aspect-[462/396] lg:h-[396px] flex-shrink-0">
            <motion.div {...frameEntrance} aria-hidden className="absolute inset-0 translate-x-[10px] translate-y-[10px] lg:translate-x-[14px] lg:translate-y-[14px] border-2 border-[#5B6A5A]" />
            <motion.img
              {...portraitEntrance}
              src="/figma/testimonial-doctor-figma.png"
              alt="Dr. Ananya Rao"
              className="relative h-full w-full object-cover object-center select-none"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <p className="font-satoshi font-light text-[18px] sm:text-[22px] lg:text-[27px] leading-[1.5] lg:leading-[40px] text-[#121212] max-w-[586px]">
              The most powerful part is the voice summary. I can record my
              reasoning quickly, and the system converts it into usable
              instructions and follow-up care
            </p>
            <p className="mt-8 sm:mt-12 lg:mt-[80px] font-satoshi font-bold text-[18px] sm:text-[22px] lg:text-[24px] leading-[20px] tracking-[0.72px] text-[#121212]">
              Dr. Ananya Rao
            </p>
            <p className="mt-3 lg:mt-[18px] font-satoshi font-medium text-[14px] sm:text-[16px] lg:text-[18px] leading-[14px] tracking-[0.54px] text-[#696969]">
              General Physician
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
