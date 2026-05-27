"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Stethoscope, Sparkles, Database } from "lucide-react";

const ease = "easeOut" as const;

const personaFeatures = [
  {
    Icon: Brain,
    title: "Persona Matching",
    body: "Learns your specific diagnostic vocabulary and note-taking style.",
  },
  {
    Icon: Sparkles,
    title: "Contextual Intelligence",
    body: "Understands medical nuances beyond simple speech-to-text conversion.",
  },
  {
    Icon: Stethoscope,
    title: "Continuous Learning",
    body: "Improves with every consultation, capturing subtle reasoning patterns.",
  },
  {
    Icon: Database,
    title: "Searchable Wisdom",
    body: "Past decisions become a queryable knowledge base for future cases.",
  },
];

export default function DigitalPersona() {
  return (
    <section
      id="digital-persona"
      className="relative w-full overflow-hidden bg-brand-cream px-6 pt-20 pb-24 md:px-12 md:pt-24 md:pb-32"
    >
      {/* decorative ring backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/3 h-[520px] w-[520px] rounded-full border border-brand-mint-pill/40 opacity-50"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-[280px] w-[280px] rounded-full bg-brand-mint-end/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_1.05fr] md:gap-14">
          {/* Left: Clinical AI Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease }}
            className="relative w-full overflow-hidden rounded-[20px] shadow-[0_18px_40px_-12px_rgba(43,65,42,0.18)]"
          >
            <Image
              src="/figma/clinical-ai-dashboard.png"
              alt="Clinical AI dashboard"
              width={1200}
              height={1050}
              className="h-auto w-full"
            />
          </motion.div>

          {/* Right: text + cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease, delay: 0.05 }}
          >
            <h2 className="font-display text-[36px] font-bold leading-[1.18] tracking-[-0.01em] text-brand-headline md:text-[40px]">
              Weisscoat creates a <span className="italic text-brand-sage">digital</span> clone for every doctor.
            </h2>
            <p className="mt-5 font-display text-[15.5px] leading-[1.75] text-brand-body md:text-[16px]">
              Instead of relying on a generic, one-size-fits-all medical AI model, Weisscoat architecturally
              builds personalized AI agents modeled around each individual doctor&apos;s unique clinical persona.
              The platform learns how a specific doctor asks questions, reviews symptoms, interprets patient
              context, records reasoning, and guides post-care. This allows clinics to deliver more structured,
              continuous, and personalized care — while keeping the human physician at the absolute center of
              every medical decision.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {personaFeatures.map(({ Icon, title, body }) => (
                <div key={title} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-white text-brand-sage ring-1 ring-brand-mint-pill/50">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h4 className="font-display text-[15.5px] font-semibold text-brand-headline">{title}</h4>
                    <p className="mt-1 font-display text-[13.5px] leading-[1.55] text-brand-body">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
