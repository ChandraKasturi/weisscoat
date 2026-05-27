"use client";

import { motion } from "framer-motion";
import { Layers, BrainCircuit, ShieldCheck, ArrowUpRightFromSquare, type LucideIcon } from "lucide-react";

const ease = "easeOut" as const;

type Layer = {
  Icon: LucideIcon;
  tag: string;
  title: string;
  body: string;
};

const layers: Layer[] = [
  {
    Icon: Layers,
    tag: "Layer 1",
    title: "Persona Foundation",
    body: "Each doctor's questioning style, diagnostic logic, and clinical vocabulary is captured as a structured persona.",
  },
  {
    Icon: BrainCircuit,
    tag: "Layer 2",
    title: "Reasoning Engine",
    body: "AI agents combine the persona with current patient context to generate doctor-style clinical notes and care plans.",
  },
  {
    Icon: ArrowUpRightFromSquare,
    tag: "Layer 3",
    title: "Continuous Care Tether",
    body: "Automated post-care monitoring keeps patients connected via WhatsApp, SMS, and app notifications.",
  },
  {
    Icon: ShieldCheck,
    tag: "Layer 4",
    title: "Clinical Intelligence Asset",
    body: "Every case enriches a searchable, auditable knowledge layer that doctors can query for similar past patients.",
  },
];

export default function FourLayers() {
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
            The Architecture
          </p>
          <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.2] tracking-[-0.01em] text-brand-headline md:text-[44px]">
            Four Layers of Intelligence
          </h2>
          <p className="mx-auto mt-5 max-w-[820px] font-display text-[16px] leading-[1.7] text-brand-body">
            Weisscoat is built as four composable intelligence layers — together they transform every consultation
            into a structured, durable, doctor-specific clinical asset.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {layers.map(({ Icon, tag, title, body }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease }}
              className="rounded-[20px] bg-white p-7 shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-12px_rgba(43,65,42,0.18)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-brand-mint-pill/40 text-brand-headline">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <span className="rounded-full bg-brand-cream-2 px-3 py-1 font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-headline">
                  {tag}
                </span>
              </div>
              <h3 className="mt-5 font-display text-[20px] font-semibold leading-[1.3] text-brand-headline">
                {title}
              </h3>
              <p className="mt-3 font-display text-[14.5px] leading-[1.7] text-brand-body">{body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
