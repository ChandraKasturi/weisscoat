"use client";

import { motion } from "framer-motion";
import { Users, Mic, BellRing, TrendingUp, Gem, type LucideIcon } from "lucide-react";

const ease = "easeOut" as const;

type Card = {
  Icon: LucideIcon;
  title: string;
  body: string;
  accent: string;
};

const stages: Card[] = [
  {
    Icon: Users,
    accent: "bg-[#E0EBFF] text-[#1B3C74]",
    title: "Pre-Screening & Data Gathering",
    body: "AI agents use the doctor's unique questioning style to generate structured patient summaries.",
  },
  {
    Icon: Mic,
    accent: "bg-[#FFEEDC] text-[#B85B14]",
    title: "Voice-Captured Consultation",
    body: "Doctors record voice summaries to operationalize their diagnostic rationale and treatment philosophy.",
  },
  {
    Icon: BellRing,
    accent: "bg-[#FFF6CC] text-[#8B6A00]",
    title: "Automated Post-Care Tether",
    body: "The system monitors patient tracking data and triggers emergency alerts if thresholds are breached.",
  },
];

const support: { Icon: LucideIcon; title: string; body: string; light: boolean }[] = [
  {
    Icon: TrendingUp,
    title: "Scalable Medical Personas",
    body: "Individual AI agents learn a doctor's specific philosophy rather than relying on generalized models.",
    light: true,
  },
  {
    Icon: Gem,
    title: "Permanent Intelligence Asset",
    body: "Every interaction becomes a searchable data point, referencing past successful treatments for similar conditions.",
    light: false,
  },
];

export default function PatientCareJourney() {
  return (
    <section className="w-full bg-white px-6 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-[920px] text-center"
        >
          <p className="font-display text-[14px] font-medium uppercase tracking-[0.18em] text-brand-sage">
            The Patient Care Journey
          </p>
          <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.2] tracking-[-0.01em] text-brand-headline md:text-[42px]">
            Weisscoat: Scaling Medical Expertise via Individualized AI Agents
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {stages.map(({ Icon, title, body, accent }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease }}
              className="rounded-[20px] border border-[#E5E7EB] bg-white p-7 shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-12px_rgba(43,65,42,0.18)]"
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-[14px] ${accent}`}>
                <Icon size={22} strokeWidth={1.8} />
              </span>
              <h3 className="mt-6 font-display text-[18px] font-semibold leading-[1.3] text-brand-headline">
                {title}
              </h3>
              <p className="mt-3 font-display text-[14.5px] leading-[1.65] text-brand-body">{body}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {support.map(({ Icon, title, body, light }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.08, ease }}
              className={`flex items-start gap-5 rounded-[20px] p-7 ${
                light
                  ? "bg-brand-cream"
                  : "bg-brand-headline text-white"
              }`}
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] ${
                  light ? "bg-white text-brand-headline" : "bg-white/10 text-white"
                }`}
              >
                <Icon size={22} strokeWidth={1.8} />
              </span>
              <div>
                <h4
                  className={`font-display text-[18px] font-semibold ${
                    light ? "text-brand-headline" : "text-white"
                  }`}
                >
                  {title}
                </h4>
                <p
                  className={`mt-2 font-display text-[14.5px] leading-[1.65] ${
                    light ? "text-brand-body" : "text-white/80"
                  }`}
                >
                  {body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
