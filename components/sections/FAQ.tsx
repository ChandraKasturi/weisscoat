"use client";

import { useState } from "react";

type FaqItem = {
  q: string;
  a: string;
};

const faqs: FaqItem[] = [
  {
    q: "What is Weisscoat?",
    a: "Weisscoat is an AI-powered clinical workflow platform that helps doctors manage patient pre-screening, consultation summaries, lab reports, post-care reminders, and clinical intelligence.",
  },
  {
    q: "Does Weisscoat replace doctors?",
    a: "",
  },
  {
    q: "How is Weisscoat different from a normal chatbot?",
    a: "",
  },
  {
    q: "How does voice based clinical reasoning capture function?",
    a: "",
  },
  {
    q: "Is patient data secure?",
    a: "",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <div className="bg-[var(--neutral\/white,white)] content-stretch flex flex-col gap-[48px] items-center p-[80px] relative size-full" data-node-id="15:2" data-name="FAQ Section">
      <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[48px] not-italic relative shrink-0 text-[40px] text-[color:var(--text\/primary,#1a201c)] text-center tracking-[-0.8px] whitespace-nowrap" data-node-id="15:3">{`FAQ's`}</p>
      <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-[900px]" data-node-id="15:4">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={item.q}
              className={`${
                isOpen ? "bg-[var(--brand\\/sage,#d4e6d0)]" : "bg-[var(--neutral\\/bg-light,#f5f7f3)]"
              } border border-[var(--neutral\/border-light,#f0f2eb)] border-solid content-stretch flex flex-col gap-[16px] items-start overflow-clip px-[28px] py-[24px] relative rounded-[var(--radius\/lg,16px)] shrink-0 w-[900px]`}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="content-stretch flex h-[30px] items-center justify-between overflow-clip relative shrink-0 w-[844px] text-left"
              >
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[26px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1a201c)] w-[800px]">
                  {item.q}
                </p>
                <div
                  className={`${
                    isOpen ? "bg-[var(--brand\\/primary,#5b8c5a)]" : "bg-[var(--neutral\\/white,white)]"
                  } overflow-clip relative rounded-[var(--radius\/full,999px)] shrink-0 size-[32px]`}
                >
                  <p
                    className={`-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[22px] left-[17.5px] not-italic text-[18px] ${
                      isOpen
                        ? "text-[color:var(--text\\/inverse,white)]"
                        : "text-[color:var(--text\\/primary,#1a201c)]"
                    } text-center top-[4px] whitespace-nowrap`}
                  >
                    {isOpen ? "−" : "+"}
                  </p>
                </div>
              </button>
              {isOpen && item.a && (
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal h-[66px] leading-[22px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#555f58)] w-[844px]">
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
