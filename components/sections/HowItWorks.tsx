"use client";

import { motion } from "framer-motion";

const ease = "easeOut" as const;

type Step = {
  number: string;
  title: string;
  body: string;
  bullets?: { label: string; body: string }[];
};

const steps: Step[] = [
  {
    number: "01",
    title: "Patient Registration",
    body: "Secure registration using mobile numbers and OTP. Supports linking multiple family profiles to a single mobile account.",
  },
  {
    number: "02",
    title: "Clinic & Doctor Selection",
    body: "Patients easily search or select their clinic, view live doctor availability, and book appointments.",
  },
  {
    number: "03",
    title: "AI Pre-Screening",
    body: "A sophisticated triage engine collects essential data through condition-specific questioning:",
    bullets: [
      { label: "Fever", body: "duration, temperature pattern, chills, cough, throat pain." },
      { label: "Diabetes / Sugar", body: "sugar readings, medication adherence, fatigue, dietary habits." },
      { label: "BP / Hypertension", body: "recent BP readings, dizziness, headache, chest discomfort." },
      { label: "Joint Pain", body: "precise location, swelling, past injury history, mobility limits." },
      { label: "Stomach / Digestion", body: "location, food relationship, vomiting, acidity, bowel changes." },
    ],
  },
  {
    number: "04",
    title: "Doctor Review",
    body: "The physician accesses the dashboard to view the structured pre-screening notes, vitals, and chronological medical history.",
  },
  {
    number: "05",
    title: "Consultation & Voice Summary",
    body: "The clinical visit takes place, concluded by a rapid 30-second doctor voice summary.",
  },
  {
    number: "06",
    title: "AI-Generated Care Plan",
    body: "LLM engines convert raw voice audio into structured prescriptions, lifestyle precautions, test advice, and follow-up milestones.",
  },
  {
    number: "07",
    title: "Post-Care Monitoring",
    body: "Automated patient check-ins are deployed over WhatsApp, SMS, or app notifications, functioning as a digital safety tether.",
  },
  {
    number: "08",
    title: "Clinical Intelligence Layer",
    body: "Past clinical decisions are aggregated, allowing doctors to search their historical treatment patterns and find similar past cases.",
  },
];

export default function HowItWorks() {
  return (
    <section id="platform" className="w-full bg-white px-6 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-[920px] text-center"
        >
          <p className="font-display text-[14px] font-medium uppercase tracking-[0.18em] text-brand-sage">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.2] tracking-[-0.01em] text-brand-headline md:text-[44px]">
            How It Works: The Complete Care Journey
          </h2>
          <p className="mx-auto mt-5 max-w-[820px] font-display text-[16px] leading-[1.7] text-brand-body">
            From patient registration to post-care monitoring — eight tightly-orchestrated steps that move a
            patient through your clinic without losing context, time, or clinical fidelity.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 max-w-[1024px] divide-y divide-[#E5E7EB] overflow-hidden rounded-[24px] border border-[#E5E7EB] bg-white shadow-card-soft">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.45, delay: index * 0.05, ease }}
              className="grid grid-cols-[64px_1fr] gap-5 px-6 py-7 md:grid-cols-[88px_1fr] md:px-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-cream font-display text-[16px] font-bold text-brand-headline ring-1 ring-brand-mint-pill/40 md:h-14 md:w-14 md:text-[18px]">
                {step.number}
              </span>
              <div>
                <h3 className="font-display text-[20px] font-semibold leading-[1.3] text-brand-headline md:text-[22px]">
                  {step.title}
                </h3>
                <p className="mt-2 font-display text-[14.5px] leading-[1.7] text-brand-body md:text-[15.5px]">
                  {step.body}
                </p>
                {step.bullets && (
                  <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {step.bullets.map((b) => (
                      <li
                        key={b.label}
                        className="rounded-[12px] bg-brand-cream px-4 py-3 font-display text-[13.5px] leading-[1.55] text-brand-body"
                      >
                        <span className="block font-semibold text-brand-headline">{b.label}</span>
                        <span>{b.body}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
