"use client";

import { useState } from "react";
import { ChevronUp } from "lucide-react";
import { AnimatedText } from "@/components/motion/AnimatedText";

type FaqItem = { iconSrc: string; question: string; answer: string };

const ITEMS: FaqItem[] = [
  { iconSrc: "/figma/faq-icon-1-info.svg", question: "What is Weisscoat?", answer: "Weisscoat is an AI-powered clinical workflow platform that helps doctors manage patient pre-screening, consultation summaries, lab reports, post-care reminders, and clinical intelligence." },
  { iconSrc: "/figma/faq-icon-2-settings.svg", question: "Does Weisscoat replace doctors?", answer: "No. Weisscoat is doctor-supervised — every AI-generated note, prescription, and patient instruction passes through doctor approval before reaching the patient." },
  { iconSrc: "/figma/faq-icon-3-user.svg", question: "How is Weisscoat different from a normal chatbot?", answer: "Unlike generic chatbots, Weisscoat learns each doctor's specific consultation style and clinical vocabulary, producing structured notes that sound like the doctor wrote them." },
  { iconSrc: "/figma/faq-icon-4-badge.svg", question: "How does voice-based clinical reasoning capture function?", answer: "Doctors record a short voice summary after each consultation. The platform transcribes and structures it into prescription instructions, follow-up plans, and patient-friendly summaries." },
  { iconSrc: "/figma/faq-icon-5-test.svg", question: "Is patient data secure?", answer: "Yes. All patient data is protected by role-based access control, consent-driven workflows, doctor approval layers, encrypted records, and full audit trails." },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-[60px] px-4 sm:px-6 lg:px-8" data-name="FAQ's">
      <AnimatedText
        as="p"
        variant="letters-float"
        className="font-satoshi font-medium text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.25] text-black text-center"
      >
        FAQ&rsquo;s
      </AnimatedText>

      <div className="mt-6 sm:mt-8 lg:mt-[40px] mx-auto max-w-[937px] flex flex-col gap-3 sm:gap-4 lg:gap-[16px]">
        {ITEMS.map(({ iconSrc, question, answer }, i) => {
          const isOpen = i === openIdx;
          return (
            <div key={question} className={"rounded-[14px] lg:rounded-[16px] border border-[#5B6A5A] shadow-[0px_1px_4px_0px_rgba(25,33,61,0.08)] transition-colors " + (isOpen ? "bg-[#F9FFEF]" : "bg-white")}>
              <button type="button" onClick={() => setOpenIdx(isOpen ? -1 : i)} className="flex w-full items-center gap-3 lg:gap-[14px] px-4 sm:px-5 lg:px-[25px] py-4 sm:py-5 lg:py-[27px] text-left" aria-expanded={isOpen}>
                <img src={iconSrc} alt="" aria-hidden className="h-[18px] sm:h-[20px] w-[18px] sm:w-[20px] shrink-0" />
                <span className={"flex-1 font-satoshi text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.35] text-[#170F49] " + (isOpen ? "font-bold" : "font-medium")}>
                  {question}
                </span>
                <span className={"flex h-[28px] sm:h-[34px] w-[28px] sm:w-[34px] shrink-0 items-center justify-center rounded-full transition-colors " + (isOpen ? "bg-[#003400] text-white shadow-[0px_2px_3px_rgba(74,58,255,0.10)]" : "bg-[#EDFFCE] text-[#003400] shadow-[0px_0.5px_0.5px_rgba(25,33,61,0.07)]")}>
                  <ChevronUp size={14} strokeWidth={2.4} className={"transition-transform " + (isOpen ? "" : "rotate-180")} />
                </span>
              </button>
              {isOpen && (
                <p className="px-5 sm:px-7 lg:px-[30px] pb-4 sm:pb-5 lg:pb-[24px] -mt-1 font-satoshi font-normal text-[13px] sm:text-[14px] lg:text-[16px] leading-[20px] sm:leading-[22px] lg:leading-[26px] text-[#170F49] max-w-[805px]">
                  {answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
