"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const ease = "easeOut" as const;

const faqs = [
  {
    q: "How is Weisscoat different from a generic medical AI?",
    a: "Generic models give the same answers to every doctor. Weisscoat builds a personalized clinical persona for each doctor — capturing their questioning style, diagnostic reasoning, and treatment philosophy — so the AI's outputs sound and behave like that specific doctor.",
  },
  {
    q: "Do doctors lose control over clinical decisions?",
    a: "No. Weisscoat is doctor-in-the-loop by design. The AI structures information, drafts plans, and surfaces past cases — but the physician always reviews and authorizes every clinical decision.",
  },
  {
    q: "How long does it take to onboard a clinic?",
    a: "Most clinics are operational within 7–14 days. Onboarding covers doctor persona capture, licensing verification, clinic mapping, and patient registration flows.",
  },
  {
    q: "What about patient data privacy and compliance?",
    a: "Data is encrypted in transit and at rest, isolated per clinic, hosted in the India region, and designed against DPDP-compliant patterns with HIPAA-aligned controls. Every chart access is logged.",
  },
  {
    q: "Can patients use Weisscoat without an app?",
    a: "Yes. Patients can register via SMS/OTP and receive follow-ups through WhatsApp, SMS, or the optional app — whichever channel fits their context.",
  },
  {
    q: "Does Weisscoat replace our existing EMR?",
    a: "Not necessarily. Weisscoat is built to sit alongside or on top of existing EMRs as a clinical intelligence layer. Custom integrations are part of clinic onboarding.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white px-6 py-24 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1024px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease }}
          className="text-center"
        >
          <p className="font-display text-[14px] font-medium uppercase tracking-[0.18em] text-brand-sage">
            Got questions?
          </p>
          <h2 className="mt-3 font-display text-[36px] font-bold leading-[1.2] tracking-[-0.01em] text-brand-headline md:text-[44px]">
            FAQ&apos;s
          </h2>
        </motion.div>

        <div className="mt-12 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.4, delay: i * 0.04, ease }}
                className="overflow-hidden rounded-[16px] border border-[#E5E7EB] bg-white shadow-card-soft"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-brand-cream/40"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-[16px] font-semibold leading-[1.4] text-brand-headline md:text-[17px]">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen ? "bg-brand-headline text-white" : "bg-brand-cream-2 text-brand-headline"
                    }`}
                  >
                    {isOpen ? <Minus size={18} strokeWidth={2.2} /> : <Plus size={18} strokeWidth={2.2} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease }}
                    >
                      <p className="px-6 pb-6 font-display text-[14.5px] leading-[1.7] text-brand-body">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
