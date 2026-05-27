"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const ease = "easeOut" as const;

export default function KeepInTouch() {
  return (
    <section className="w-full bg-brand-cream px-6 pb-24 md:px-12 md:pb-28">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease }}
          className="grid grid-cols-1 overflow-hidden rounded-[24px] bg-white shadow-card-soft md:grid-cols-[1fr_1.1fr]"
        >
          {/* Left: heading + contact */}
          <div className="relative overflow-hidden bg-brand-headline px-8 py-12 text-white md:px-12 md:py-14">
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-10 -right-10 h-[260px] w-[260px] rounded-full bg-brand-mint-pill/15 blur-3xl"
            />
            <p className="relative font-display text-[14px] font-medium uppercase tracking-[0.18em] text-brand-mint-pill">
              Get in touch
            </p>
            <h2 className="relative mt-3 font-display text-[34px] font-bold leading-[1.15] tracking-[-0.01em] text-white md:text-[42px]">
              Let&apos;s Keep in Touch
            </h2>
            <p className="relative mt-5 font-display text-[15.5px] leading-[1.7] text-white/80">
              Whether you&apos;re a doctor, clinic owner, or healthcare innovator — we&apos;d love to hear how
              Weisscoat fits your workflow.
            </p>

            <ul className="relative mt-8 space-y-4 font-display text-[14.5px] text-white/85">
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <Phone size={16} />
                </span>
                +91 9955446890
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <Mail size={16} />
                </span>
                weisscoat@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <MapPin size={16} />
                </span>
                Hyderabad, India
              </li>
            </ul>

            <div className="relative mt-10 hidden md:block">
              <Image
                src="/figma/our-story-doctor.png"
                alt=""
                width={200}
                height={200}
                className="h-[180px] w-auto rounded-[16px] object-cover opacity-70"
              />
            </div>
          </div>

          {/* Right: form */}
          <form
            className="space-y-5 p-8 md:p-12"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Name" id="kit-name" type="text" placeholder="Dr. Aarav Rao" />
              <Field label="Clinic" id="kit-clinic" type="text" placeholder="Your clinic" />
            </div>
            <Field label="Email" id="kit-email" type="email" placeholder="you@clinic.com" />
            <Field label="Phone" id="kit-phone" type="tel" placeholder="+91 ..." />

            <div className="space-y-2">
              <label
                htmlFor="kit-message"
                className="block font-display text-[13px] font-medium text-brand-headline"
              >
                Message
              </label>
              <textarea
                id="kit-message"
                rows={4}
                placeholder="Tell us a bit about your clinic and what you'd like to explore..."
                className="w-full rounded-[12px] border border-[#E5E7EB] bg-white px-4 py-3 font-display text-[14.5px] text-brand-headline placeholder:text-brand-body/60 focus:border-brand-sage focus:outline-none focus:ring-2 focus:ring-brand-sage/30"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease }}
              className="inline-flex w-full items-center justify-center rounded-[12px] bg-brand-sage px-8 py-4 font-poppins text-[15.5px] font-medium text-white shadow-button-blue transition-colors duration-200 hover:bg-brand-headline md:w-auto"
            >
              Send message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type,
  placeholder,
}: {
  label: string;
  id: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block font-display text-[13px] font-medium text-brand-headline">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-[12px] border border-[#E5E7EB] bg-white px-4 py-3 font-display text-[14.5px] text-brand-headline placeholder:text-brand-body/60 focus:border-brand-sage focus:outline-none focus:ring-2 focus:ring-brand-sage/30"
      />
    </div>
  );
}
