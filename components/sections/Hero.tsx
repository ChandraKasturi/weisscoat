"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = "easeOut" as const;

export default function Hero() {
  return (
    <section id="home" className="w-full bg-white px-4 pt-6 md:px-8 md:pt-8">
      <div className="mx-auto max-w-[1556px]">
        <div className="relative overflow-hidden rounded-[40px] bg-white">
          {/* Mint gradient overlay @ 40% */}
          <div className="absolute inset-0 rounded-[40px] bg-hero-mint opacity-40" />

          <div className="relative grid grid-cols-1 items-center gap-8 px-6 py-10 md:grid-cols-[1.05fr_1fr] md:gap-4 md:px-10 md:py-14 lg:py-16">
            {/* === Left content === */}
            <div className="relative z-10 max-w-[645px]">
              {/* Eyebrow pill */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
                className="inline-flex items-center gap-1.5 rounded-[12px] border border-[#C6C6CD] bg-brand-mint-pill px-[13px] py-[5px]"
              >
                <Image
                  src="/figma/hero-pill-sparkle.png"
                  alt=""
                  width={14}
                  height={14}
                  className="h-[14px] w-[14px]"
                />
                <span className="font-inter text-[12px] font-medium leading-4 text-accent-blue-deep">
                  Clinical Intelligence, Personalized.
                </span>
              </motion.div>

              {/* Headline (mixed weights) */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
                className="mt-7 font-display text-[40px] font-light leading-[1.05] tracking-[-0.01em] text-brand-headline sm:text-[48px] md:text-[56px] lg:text-[60px]"
              >
                Personalized <span className="font-bold">AI Agents</span>{" "}
                <span className="font-light">for Smarter Clinical Care</span>
              </motion.h1>

              {/* Body */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease }}
                className="mt-6 max-w-[623px] font-display text-[16px] leading-[1.7] text-brand-body md:text-[18px]"
              >
                Weisscoat helps doctors build AI-powered clinical assistants
                trained around their unique consultation style, transforming
                every consultation into a structured clinical intelligence
                system.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease }}
                className="mt-9"
              >
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-[10px] bg-brand-sage px-8 py-5 font-poppins text-[17px] font-medium text-white shadow-button-blue transition-transform duration-200 hover:scale-[1.02]"
                >
                  Book a Demo
                </button>
              </motion.div>
            </div>

            {/* === Right visual === */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              className="relative mx-auto h-[420px] w-full max-w-[560px] md:h-[540px] lg:h-[600px]"
            >
              {/* Decorative ellipses */}
              <div
                aria-hidden
                className="absolute -left-4 top-2 h-[180px] w-[180px] rounded-full bg-[#C7E9C5]/60 blur-[2px] md:h-[222px] md:w-[222px]"
              />
              <div
                aria-hidden
                className="absolute bottom-4 right-0 h-[160px] w-[160px] rounded-full bg-[#C7E9C5]/50 blur-[2px] md:h-[222px] md:w-[222px]"
              />
              <div
                aria-hidden
                className="absolute inset-x-4 bottom-0 mx-auto h-[80%] w-[85%] rounded-full bg-gradient-to-b from-[#B7E0B5] to-[#94C892] opacity-90"
              />

              {/* Doctor portrait */}
              <Image
                src="/figma/hero-doctor.png"
                alt="Doctor"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 560px"
                className="relative z-10 object-contain object-bottom"
              />

              {/* Floating: Regular Checkup */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease }}
                className="absolute left-2 top-[55%] z-20 md:left-0"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center gap-3 rounded-[30px] px-5 py-4 shadow-blue-glow backdrop-blur-[12px]"
                  style={{
                    backgroundColor: "rgba(246, 249, 255, 0.81)",
                  }}
                >
                  <Image
                    src="/figma/hero-medal-v2.png"
                    alt=""
                    width={70}
                    height={80}
                    className="h-[70px] w-[62px] shrink-0 object-contain"
                  />
                  <p className="font-poppins text-[15px] font-medium leading-[1.2] text-[rgba(7,0,59,0.8)] md:text-[18px]">
                    Regular
                    <br />
                    Checkup
                  </p>
                </motion.div>
              </motion.div>

              {/* Floating: 84k+ Happy Patients */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.75, ease }}
                className="absolute -right-2 bottom-8 z-20 md:right-0"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="flex items-center gap-3 rounded-[30px] px-5 py-3 shadow-blue-glow backdrop-blur-[12px]"
                  style={{
                    backgroundColor: "rgba(246, 249, 255, 0.81)",
                  }}
                >
                  <Image
                    src="/figma/hero-smile-v2.png"
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 shrink-0"
                  />
                  <div>
                    <p className="font-poppins text-[22px] font-semibold leading-[1.1] text-accent-blue-dark md:text-[24px]">
                      84k+
                    </p>
                    <p className="font-poppins text-[15px] leading-[1.2] text-accent-blue-soft md:text-[17px]">
                      Happy Patients
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
