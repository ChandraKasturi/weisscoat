"use client";

import { motion } from "framer-motion";
import { Lock, FileLock2, ServerCog, ScrollText, type LucideIcon } from "lucide-react";

const ease = "easeOut" as const;

type Item = { Icon: LucideIcon; title: string; body: string };

const items: Item[] = [
  {
    Icon: Lock,
    title: "End-to-End Encryption",
    body: "All clinical and patient data is encrypted in transit and at rest, with per-clinic key isolation.",
  },
  {
    Icon: FileLock2,
    title: "Role-Based Access",
    body: "Granular doctor, staff, and admin roles — every chart access is logged and auditable.",
  },
  {
    Icon: ServerCog,
    title: "Sovereign Hosting",
    body: "Data resides in India-region infrastructure with provider-grade availability and backups.",
  },
  {
    Icon: ScrollText,
    title: "Compliance-Ready",
    body: "Designed against DPDP-compliant patterns; HIPAA-aligned data-handling controls.",
  },
];

export default function Security() {
  return (
    <section className="relative w-full overflow-hidden bg-brand-headline px-6 py-24 text-white md:px-12 md:py-28">
      {/* decorative orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-brand-mint-pill/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-[320px] w-[320px] rounded-full bg-brand-sage/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto max-w-[920px] text-center"
        >
          <p className="font-display text-[14px] font-medium uppercase tracking-[0.18em] text-brand-mint-pill">
            Trust by design
          </p>
          <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.2] tracking-[-0.01em] text-white md:text-[44px]">
            Security, Privacy & Compliance
          </h2>
          <p className="mx-auto mt-5 max-w-[820px] font-display text-[16px] leading-[1.7] text-white/75">
            Designed for responsible healthcare AI — clinical-grade safeguards baked in from day one.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ Icon, title, body }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: index * 0.06, ease }}
              className="rounded-[20px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-brand-mint-pill/20 text-brand-mint-pill">
                <Icon size={22} strokeWidth={1.8} />
              </span>
              <h3 className="mt-5 font-display text-[17px] font-semibold leading-[1.3] text-white">{title}</h3>
              <p className="mt-3 font-display text-[14px] leading-[1.65] text-white/75">{body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
