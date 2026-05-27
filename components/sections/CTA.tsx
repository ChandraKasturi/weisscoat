"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = "easeOut" as const;

export default function CTA() {
  return (
    <section className="w-full bg-white px-6 pt-12 pb-20 md:px-12 md:pt-16 md:pb-28">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease }}
          className="relative overflow-hidden rounded-[28px] bg-brand-sage px-8 py-16 text-center md:px-12 md:py-20"
        >
          {/* subtle decorative glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-[300px] w-[300px] rounded-full bg-brand-mint-pill/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-16 h-[260px] w-[260px] rounded-full bg-white/10 blur-3xl"
          />

          <p className="relative font-display text-[14px] font-medium uppercase tracking-[0.18em] text-white/80">
            Designed for Impactful Healthcare AI
          </p>
          <h2 className="relative mt-3 font-display text-[34px] font-bold leading-[1.15] tracking-[-0.01em] text-white md:text-[44px]">
            Ready to build an intelligent clinic?
          </h2>
          <p className="relative mx-auto mt-5 max-w-[640px] font-display text-[16px] leading-[1.7] text-white/85 md:text-[17px]">
            Talk to the Weisscoat team and see how personalized AI agents can transform your clinic&apos;s
            workflow, throughput, and clinical intelligence asset.
          </p>

          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease }}
            className="relative mt-9 inline-flex items-center gap-2 rounded-[12px] bg-white px-8 py-4 font-poppins text-[15.5px] font-semibold text-brand-headline shadow-button-blue transition-colors duration-200 hover:bg-brand-cream"
          >
            Book a Demo
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
