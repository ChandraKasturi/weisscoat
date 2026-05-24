"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const ease = "easeOut" as const;

export default function Hero() {
  return (
    <section className="w-full bg-brand-cream px-6 pt-16 pb-24 md:px-12 md:pt-24 md:pb-32">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Left: text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0, ease }}
            className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold"
          >
            CLINICAL INTELLIGENCE, PERSONALIZED.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mt-4 max-w-[600px] font-display text-4xl font-bold leading-[1.05] text-brand-olive sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Personalized AI Agents for Smarter Clinical Care
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="mt-6 max-w-[520px] font-sans text-lg leading-relaxed text-brand-charcoal/80"
          >
            Weisscoat helps doctors build AI-powered clinical assistants
            trained around their unique consultation style, transforming
            every consultation into a structured clinical intelligence system.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              type="button"
              className="rounded-full bg-brand-olive px-8 py-3.5 text-sm font-semibold text-brand-cream transition-all duration-200 hover:scale-[1.02] hover:bg-brand-olive/90"
            >
              Book a Demo
            </button>
            <button
              type="button"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-olive"
            >
              Watch how it works
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
          </motion.div>
        </div>

        {/* Right: visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="relative mx-auto aspect-square w-full max-w-[400px] md:aspect-[4/3] md:max-w-none"
        >
          {/* TODO: replace with doctor portrait image */}
          <div className="h-full w-full rounded-3xl bg-gradient-to-br from-brand-olive/20 to-brand-gold/20" />

          {/* Floating card 1 — top-right */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease }}
            className="absolute -top-2 -right-2 w-[200px] md:-top-4 md:-right-4"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-lg shadow-brand-charcoal/5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-olive text-brand-cream">
                <CheckCircle2 size={20} />
              </span>
              <div className="min-w-0">
                <p className="font-sans text-sm font-semibold text-brand-charcoal">
                  Regular Checkup
                </p>
                <p className="text-xs text-brand-charcoal/60">
                  Today, 10:30 AM
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating card 2 — bottom-left */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease }}
            className="absolute -bottom-2 -left-2 w-[180px] md:-bottom-4 md:-left-4"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="rounded-2xl bg-white p-4 shadow-lg shadow-brand-charcoal/5"
            >
              <p className="font-display text-3xl font-bold text-brand-olive">
                84k+
              </p>
              <p className="mt-1 font-sans text-xs text-brand-charcoal/60">
                Happy Patients
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
