"use client";

import { motion } from "framer-motion";
import {
  Fingerprint,
  HeartHandshake,
  Boxes,
  ShieldCheck,
  Workflow,
  Search,
  type LucideIcon,
} from "lucide-react";

const ease = "easeOut" as const;

type Diff = {
  Icon: LucideIcon;
  title: string;
  body: string;
};

const items: Diff[] = [
  {
    Icon: Fingerprint,
    title: "Personalized Persona",
    body: "Not a generic medical model — each doctor's diagnostic logic, vocabulary, and style is captured into a unique AI persona.",
  },
  {
    Icon: HeartHandshake,
    title: "Continuous Care Tether",
    body: "Care doesn't end at the consult. Automated, doctor-style check-ins follow every patient post-visit.",
  },
  {
    Icon: Boxes,
    title: "Composable Architecture",
    body: "Four intelligence layers, each useful on its own — adopt at the pace your clinic can absorb.",
  },
  {
    Icon: ShieldCheck,
    title: "Doctor-In-The-Loop",
    body: "The doctor stays the decision maker. AI surfaces structure; humans retain authority over every clinical call.",
  },
  {
    Icon: Workflow,
    title: "Built For Clinical Workflow",
    body: "Voice-first, low-friction, sub-30-second summaries — designed for real OPD throughput, not lab demos.",
  },
  {
    Icon: Search,
    title: "Queryable Wisdom",
    body: "Every decision becomes a searchable case. Doctors can pull similar past patients in seconds.",
  },
];

export default function WhyDifferent() {
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
            What sets us apart
          </p>
          <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.2] tracking-[-0.01em] text-brand-headline md:text-[44px]">
            Why Weisscoat is Radically Different
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ Icon, title, body }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: index * 0.06, ease }}
              className="rounded-[20px] border border-[#E5E7EB] bg-white p-6 shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-12px_rgba(43,65,42,0.18)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-brand-mint-pill/40 text-brand-headline">
                <Icon size={22} strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 font-display text-[18px] font-semibold leading-[1.3] text-brand-headline">
                {title}
              </h3>
              <p className="mt-3 font-display text-[14.5px] leading-[1.65] text-brand-body">{body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
