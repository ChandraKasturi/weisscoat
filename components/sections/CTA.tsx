"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Magnetic } from "@/components/motion/Magnetic";
import { AnimatedText } from "@/components/motion/AnimatedText";

export default function CTA() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-[40px] px-4 sm:px-6 lg:px-8" data-name="CTA">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col items-center rounded-[16px] lg:rounded-[20px] bg-[#5B6A5A] px-6 sm:px-10 lg:px-[128px] py-12 sm:py-16 lg:py-[96px]">
          <AnimatedText
            as="h2"
            variant="letters-float"
            className="font-satoshi font-bold text-[24px] sm:text-[30px] lg:text-[36px] leading-[1.25] lg:leading-[46.8px] text-white text-center max-w-[854px]"
          >
            Ready to build an intelligent clinic?
          </AnimatedText>

          <p className="mt-6 sm:mt-8 lg:mt-[39.4px] font-satoshi font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.6] lg:leading-[28.8px] text-[#F3FFFE] text-center opacity-90 max-w-[672px]">
            Talk to the Weisscoat team and discover how personalized AI agents
            can transform your clinic workflow.
          </p>

          {/* Magnetic wrapper: the button drifts a few px toward the cursor
              and springs back — composes with (doesn't fight) the existing
              hover scale/lift on the button itself. */}
          <Magnetic strength={0.3} max={12}>
            <motion.button
              type="button"
              whileHover={reduce ? undefined : { scale: 1.07, y: -4 }}
              whileTap={reduce ? undefined : { scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 13 }}
              className="mt-8 sm:mt-10 lg:mt-[56px] inline-flex h-[48px] sm:h-[56px] lg:h-[64px] items-center justify-center rounded-full bg-[#FBF9F4] px-6 sm:px-10 lg:px-[48px] font-satoshi font-bold text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.6] text-[#5B6A5A] hover:bg-white transition-colors"
            >
              Take My Health Assessment
            </motion.button>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
