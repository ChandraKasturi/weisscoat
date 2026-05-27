"use client";

import { motion } from "framer-motion";
import { Stethoscope, Heart, UserPlus, type LucideIcon } from "lucide-react";

const ease = "easeOut" as const;

type Panel = {
  Icon: LucideIcon;
  title: string;
  body: string;
  bullets: string[];
};

const panels: Panel[] = [
  {
    Icon: Stethoscope,
    title: "Doctor Consultation Panel",
    body: "Everything the doctor needs in one frame — pre-screened notes, vitals, and chronological medical history.",
    bullets: [
      "AI-powered consultation workspace",
      "Voice-enabled clinical summaries",
      "Live triage & vitals dashboard",
    ],
  },
  {
    Icon: Heart,
    title: "Post-Consultation Care",
    body: "Automated follow-ups, lab routing, medication reminders, and outcome tracking after every visit.",
    bullets: [
      "WhatsApp / SMS / app check-ins",
      "Integrated lab testing & routing",
      "Medication reminders & adherence",
    ],
  },
  {
    Icon: UserPlus,
    title: "Doctor & Clinic Onboarding",
    body: "From licensing verification to clinic mapping, onboarding new providers is a guided, compliant flow.",
    bullets: [
      "Licensing & credential verification",
      "Clinic mapping & multi-location setup",
      "Per-doctor persona configuration",
    ],
  },
];

const capabilities = [
  "AI-powered doctor consultation and voice-enabled workflows",
  "Smart patient registration, booking, and waiting management",
  "Integrated lab testing and automated clinical routing",
  "Automated medication reminders and follow-up care systems",
  "Doctor onboarding with licensing verification and clinic mapping",
  "Clinical intelligence engine with historical case insights and outcome tracking",
];

export default function UnifiedPlatform() {
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
            One platform, every workflow
          </p>
          <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.2] tracking-[-0.01em] text-brand-headline md:text-[44px]">
            Unified Clinical Operations Platform
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {panels.map(({ Icon, title, body, bullets }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease }}
              className="rounded-[20px] border border-[#E5E7EB] bg-white p-7 shadow-card-soft"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-brand-mint-pill/40 text-brand-headline">
                <Icon size={22} strokeWidth={1.8} />
              </span>
              <h3 className="mt-6 font-display text-[19px] font-semibold leading-[1.3] text-brand-headline">
                {title}
              </h3>
              <p className="mt-3 font-display text-[14.5px] leading-[1.65] text-brand-body">{body}</p>
              <ul className="mt-5 space-y-2 border-t border-dashed border-[#E5E7EB] pt-5">
                {bullets.map((b) => (
                  <li key={b} className="font-display text-[13.5px] leading-[1.5] text-brand-body">
                    • {b}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="mt-12 rounded-[24px] bg-brand-cream p-8 md:p-10"
        >
          <h3 className="font-display text-[20px] font-semibold text-brand-headline md:text-[22px]">
            Six core platform capabilities
          </h3>
          <div className="mt-5 grid grid-cols-1 gap-x-10 gap-y-3 md:grid-cols-2">
            {capabilities.map((c) => (
              <p
                key={c}
                className="flex gap-3 font-display text-[14.5px] leading-[1.6] text-brand-body"
              >
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-sage" />
                {c}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
