"use client";

import { motion } from "framer-motion";
import {
  FileQuestion,
  ClipboardList,
  HeartPulse,
  Brain,
  type LucideIcon,
} from "lucide-react";

const ease = "easeOut" as const;

type Problem = {
  Icon: LucideIcon;
  title: string;
  body: string;
};

const problems: Problem[] = [
  {
    Icon: FileQuestion,
    title: "Repetitive Patient Intake",
    body: "Patients repeatedly share the same history, symptoms, and previous reports, wasting valuable consultation time.",
  },
  {
    Icon: ClipboardList,
    title: "Documentation Burden",
    body: "Doctors spend too much time typing clinical notes instead of actively engaging with patients.",
  },
  {
    Icon: HeartPulse,
    title: "Weak Post-Care",
    body: "Patients often miss medications, ignore warning signs, or delay follow-up visits after leaving the clinic.",
  },
  {
    Icon: Brain,
    title: "Lost Clinical Wisdom",
    body: "Years of clinical reasoning and successful treatment patterns remain buried in unstructured records.",
  },
];

export default function ProblemGrid() {
  return (
    <section className="w-full bg-white px-6 pt-24 pb-16 md:px-12 md:pt-32 md:pb-20">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-[920px] text-center"
        >
          <h2 className="font-display text-[40px] font-bold leading-[1.2] tracking-[-0.01em] text-brand-headline md:text-[48px]">
            Modern clinics are overloaded.
          </h2>
          <p className="mx-auto mt-5 max-w-[820px] font-display text-[16px] leading-[1.65] text-brand-body md:text-[17px]">
            Doctors are losing time to data, forms, and follow-ups. Most clinical visits begin with repeated
            questions, scattered records, manual typing, and rushed conversations — while critical clinical wisdom
            stays trapped in unstructured notes.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map(({ Icon, title, body }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease }}
              className="group rounded-[20px] border border-[#E5E7EB] bg-white p-7 shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-12px_rgba(43,65,42,0.18)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#EBFDEA] text-brand-headline ring-1 ring-brand-mint-pill/40">
                <Icon size={22} strokeWidth={1.8} />
              </span>
              <h3 className="mt-6 font-display text-[18px] font-semibold leading-[1.3] text-brand-headline">
                {title}
              </h3>
              <p className="mt-3 font-display text-[14.5px] leading-[1.65] text-brand-body">
                {body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
