"use client";

import { motion } from "framer-motion";
import { User, Stethoscope, Building2, Network, Check, type LucideIcon } from "lucide-react";

const ease = "easeOut" as const;

type Stakeholder = {
  Icon: LucideIcon;
  role: string;
  headline: string;
  benefits: string[];
};

const stakeholders: Stakeholder[] = [
  {
    Icon: User,
    role: "Patient",
    headline: "Faster, more personal care",
    benefits: [
      "No repeated history each visit",
      "Doctor-style explanations of the care plan",
      "Automated follow-ups via WhatsApp/SMS",
      "One profile for the entire family",
    ],
  },
  {
    Icon: Stethoscope,
    role: "Doctor",
    headline: "More patients, less paperwork",
    benefits: [
      "Pre-screened, structured notes ready before consult",
      "30-second voice summary becomes a full care plan",
      "Searchable history of your own past decisions",
      "Stay in clinical flow, not documentation flow",
    ],
  },
  {
    Icon: Building2,
    role: "Clinic",
    headline: "Operational visibility & throughput",
    benefits: [
      "Live doctor availability & booking integration",
      "Automated routing of labs and tests",
      "Outcomes tracked across every visit",
      "Reduced patient wait & re-visit cycles",
    ],
  },
  {
    Icon: Network,
    role: "Administration",
    headline: "Auditable, compliant intelligence",
    benefits: [
      "Centralized clinical intelligence asset",
      "Doctor onboarding & licensing verification",
      "Compliance-ready audit logs",
      "Insight across clinics, doctors, and outcomes",
    ],
  },
];

export default function StakeholderMatrix() {
  return (
    <section
      id="value-proposition"
      className="w-full bg-brand-cream-2/40 px-6 py-24 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-[920px] text-center"
        >
          <p className="font-display text-[14px] font-medium uppercase tracking-[0.18em] text-brand-sage">
            Value across the system
          </p>
          <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.2] tracking-[-0.01em] text-brand-headline md:text-[44px]">
            Stakeholder Value Matrix
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stakeholders.map(({ Icon, role, headline, benefits }, index) => (
            <motion.article
              key={role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease }}
              className="flex h-full flex-col rounded-[20px] bg-white p-6 shadow-card-soft"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-brand-mint-pill/40 text-brand-headline">
                <Icon size={22} strokeWidth={1.8} />
              </span>
              <p className="mt-5 font-display text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-sage">
                {role}
              </p>
              <h3 className="mt-1 font-display text-[18px] font-semibold leading-[1.3] text-brand-headline">
                {headline}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 font-display text-[13.5px] leading-[1.55] text-brand-body"
                  >
                    <Check size={16} className="mt-0.5 shrink-0 text-brand-sage" strokeWidth={2.4} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
