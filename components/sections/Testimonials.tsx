"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const ease = "easeOut" as const;

const testimonial = {
  quote:
    "Weisscoat changed the way our clinic captures clinical reasoning. The 30-second voice summary alone gave us back the equivalent of two consult hours per doctor per day — and the post-care monitoring has been a game-changer for patient adherence.",
  name: "Dr. Aarav Rao",
  role: "Consultant Physician, Apollo Hyderabad",
  image: "/figma/testimonial-doctor.png",
};

export default function Testimonials() {
  return (
    <section className="w-full bg-brand-cream px-6 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-[920px] text-center"
        >
          <p className="font-display text-[14px] font-medium uppercase tracking-[0.18em] text-brand-sage">
            What our doctors say
          </p>
          <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.2] tracking-[-0.01em] text-brand-headline md:text-[44px]">
            Social Proof & Testimonials
          </h2>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="mt-14 grid grid-cols-1 overflow-hidden rounded-[24px] bg-white shadow-card-soft md:grid-cols-[280px_1fr]"
        >
          <div className="relative h-[280px] w-full overflow-hidden bg-brand-headline md:h-full">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              sizes="(max-width: 768px) 100vw, 280px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <Quote size={32} className="text-brand-sage/60" />
            <p className="mt-4 font-display text-[18px] leading-[1.65] text-brand-headline md:text-[20px]">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="mt-6">
              <p className="font-display text-[16px] font-semibold text-brand-headline">{testimonial.name}</p>
              <p className="font-display text-[13.5px] text-brand-body">{testimonial.role}</p>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
