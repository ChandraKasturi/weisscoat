"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone, Mail, CalendarClock, ChevronDown } from "lucide-react";
import { AnimatedText } from "@/components/motion/AnimatedText";

export default function Contact() {
  const reduce = useReducedMotion();
  return (
    <section className="relative w-full overflow-hidden" data-name="Let's Keep in Touch">
      {/* Slow perpetual ken-burns drift on the background photo — scale stays
          ≥1 on an object-cover absolute fill inside overflow-hidden, so edges
          never show and layout never moves. Inert under reduced motion. */}
      <motion.img
        src="/figma/contact-bg-doctor.png"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none select-none"
        animate={reduce ? undefined : { scale: [1, 1.06, 1] }}
        transition={reduce ? undefined : { duration: 24, ease: "easeInOut", repeat: Infinity }}
      />
      <div aria-hidden className="absolute inset-0 bg-[#5B6A5A] opacity-70 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-[60px] flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8 lg:gap-[40px]">
        <div className="w-full lg:w-[600px] flex flex-col gap-4 sm:gap-5 lg:gap-[24px]">
          <AnimatedText
            as="h2"
            variant="letters-float"
            className="font-satoshi font-medium text-[28px] sm:text-[38px] lg:text-[50px] leading-[1.1] text-white"
          >
            Let&rsquo;s Keep in Touch
          </AnimatedText>
          <p className="font-satoshi font-normal text-[15px] sm:text-[18px] lg:text-[23px] leading-[1.5] lg:leading-[36px] tracking-[0.23px] text-[#F9F9F9] max-w-[520px]">
            Weisscoat &mdash; Personalized Clinical Intelligence for the Future of Healthcare.
          </p>
          <ul className="mt-4 lg:mt-[20px] flex flex-col gap-3 lg:gap-[18px] font-satoshi font-normal text-[15px] sm:text-[18px] lg:text-[23px] leading-[1.5] lg:leading-[29px] text-[#F9F9F9]">
            <li className="flex items-center gap-3 lg:gap-[16px]"><Phone size={20} className="shrink-0" /> +1 555 505 5050</li>
            <li className="flex items-center gap-3 lg:gap-[16px]"><Mail size={20} className="shrink-0" /> hello@weisscoat.ai</li>
            <li className="flex items-center gap-3 lg:gap-[16px]"><CalendarClock size={20} className="shrink-0" /> Mon - Sat, 9:00 AM &ndash; 6:00 PM</li>
          </ul>
        </div>

        <div className="w-full lg:w-[514px] rounded-[10px] bg-white p-5 sm:p-7 lg:p-[36px]">
          <p className="text-center font-satoshi font-bold text-[18px] sm:text-[20px] leading-[24px] text-[#263640]">Contact Us</p>

          <form className="mt-5 sm:mt-7 lg:mt-[28px] flex flex-col gap-4 lg:gap-[20px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-[14px]">
              <Field label="Name" required placeholder="Enter here" />
              <Field label="Clinic Name" required placeholder="Enter here" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-[14px]">
              <Field label="Role" required placeholder="Enter here" />
              <PhoneField />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label className="font-inter text-[14px] lg:text-[16px] leading-[1.15] text-black">
                Tell us more&hellip; <span className="text-black/60">(Optional)</span>
              </label>
              <textarea rows={4} className="h-[80px] sm:h-[100px] resize-none rounded-[3px] border border-[#D3D3D3] bg-white px-3 sm:px-[14px] py-2 sm:py-[10px] font-inter text-[14px] lg:text-[16px] text-black placeholder:opacity-60 focus:outline-none focus:border-[#5B6A5A]" />
            </div>
            <div className="mt-1 sm:mt-2 flex justify-end">
              <button type="submit" className="h-[42px] sm:h-[45px] w-full sm:w-[158px] rounded-[5px] border-2 border-[#5B6A5A] bg-white font-satoshi font-semibold text-[14px] lg:text-[16px] leading-[23px] text-[#5B6A5A] hover:bg-[#5B6A5A]/5 transition-colors">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, required }: { label: string; placeholder: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-[6px]">
      <label className="font-inter text-[14px] lg:text-[16px] leading-[1.15] text-black">
        {label}{required && <span className="text-[#DD1D50]"> *</span>}
      </label>
      <input type="text" placeholder={placeholder} className="h-[42px] sm:h-[45px] rounded-[3px] border border-[#D3D3D3] bg-white px-3 sm:px-[14px] font-inter text-[14px] lg:text-[16px] text-black placeholder:opacity-60 focus:outline-none focus:border-[#5B6A5A]" />
    </div>
  );
}

function PhoneField() {
  return (
    <div className="flex flex-col gap-[6px]">
      <label className="font-inter text-[14px] lg:text-[16px] leading-[1.15] text-black">Phone No<span className="text-[#DD1D50]"> *</span></label>
      <div className="flex h-[42px] sm:h-[45px] items-stretch rounded-[3px] border border-[#D3D3D3] bg-white">
        <div className="flex items-center gap-[4px] border-r border-[#D3D3D3] px-2 sm:px-[12px] font-inter text-[14px] lg:text-[16px] text-black">
          +91 <ChevronDown size={14} className="text-black/60" strokeWidth={2} />
        </div>
        <input type="tel" placeholder="Enter here" className="flex-1 min-w-0 bg-transparent px-3 sm:px-[14px] font-inter text-[14px] lg:text-[16px] text-black placeholder:opacity-60 focus:outline-none" />
      </div>
    </div>
  );
}
