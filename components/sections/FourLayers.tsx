"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Tilt } from "@/components/motion/Tilt";
import { AnimatedText } from "@/components/motion/AnimatedText";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type LayerCard = {
  icon: string;
  iconSize: number;
  title: string;
  body: string;
  tagline: string;
};

const CARDS: LayerCard[] = [
  {
    icon: "/figma/fli-icon-1.svg",
    iconSize: 28,
    title: "AI Pre-Screening",
    body: "Before the appointment, the patient interacts with an AI assistant that collects condition-specific symptoms, history, vitals, and previous lab information.",
    tagline: "The doctor receives a clear summary before the consultation.",
  },
  {
    icon: "/figma/fli-icon-2.svg",
    iconSize: 30,
    title: "Flexible Online Learning",
    body: "During the consultation, the doctor reviews the AI-prepared summary, validates data, conducts the physical exam, and focuses entirely on diagnosis.",
    tagline: "More focused consultation, zero repetitive questioning.",
  },
  {
    icon: "/figma/fli-icon-3.svg",
    iconSize: 30,
    title: "Practical & Career-Focused",
    body: "After the visit, the doctor records a quick voice summary clearly explaining the diagnosis, treatment rationale, prescription instructions, and care advice.",
    tagline:
      "Weisscoat turns spoken reasoning into structured clinical notes and workflows.",
  },
  {
    icon: "/figma/fli-icon-4.svg",
    iconSize: 30,
    title: "Trusted Medical Content",
    body: "The platform coordinates automated medication reminders, care instructions, follow-up nudges, and risk alerts through standard patient messaging apps.",
    tagline:
      "Patients stay connected after visits, while doctors build a searchable case repository.",
  },
];

function LayerCardItem({
  icon,
  iconSize,
  title,
  body,
  tagline,
  index,
}: LayerCard & { index: number }) {
  const reduce = useReducedMotion();
  const fromLeft = index % 2 === 0;
  return (
    // Hover lift/scale folded into the cursor-reactive 3D tilt — one coherent
    // depth transform per card; the wrapper stretches exactly like the card
    // did as a grid item, so row heights are unchanged.
    <Tilt max={8} scale={1.03} lift={-10} pop={26}>
    <motion.div
      initial={
        reduce
          ? undefined
          : { opacity: 0, x: fromLeft ? -72 : 72, y: 32, filter: "blur(6px)" }
      }
      whileInView={
        reduce
          ? undefined
          : {
              opacity: 1,
              x: 0,
              y: 0,
              filter: "blur(0px)",
              transition: {
                duration: 0.9,
                ease: EASE,
                delay: 0.15 + Math.floor(index / 2) * 0.12,
              },
            }
      }
      viewport={{ once: true, margin: "-60px" }}
      className="flex flex-col gap-4 sm:gap-5 rounded-[10px] border border-[#E5F5BD] bg-[#F6FBE9] p-6 sm:p-8 lg:p-[40px]">
      <div className="flex w-full items-center gap-3">
        <div className="flex items-center justify-center rounded-[6px] bg-[#D5EBB1] p-[10px] sm:p-[12px]">
          {/* Perpetual gentle wiggle, phase-offset per card (matches the
              ProblemGrid/UnifiedPlatform icon feel). Inert under reduced motion. */}
          <motion.img
            src={icon}
            alt=""
            aria-hidden
            style={{ width: iconSize, height: iconSize }}
            animate={reduce ? undefined : { rotate: [0, 6, 0, -6, 0] }}
            transition={
              reduce
                ? undefined
                : { duration: 4.2, ease: "easeInOut", repeat: Infinity, delay: index * 0.6 }
            }
          />
        </div>
        <p className="font-satoshi font-bold text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.4] text-[#262626]">
          {title}
        </p>
      </div>
      <p className="font-satoshi font-medium text-[13px] sm:text-[14px] lg:text-[16px] leading-[1.5] text-[#333]">
        {body}{" "}
        <span className="italic font-satoshi font-bold">{tagline}</span>
      </p>
    </motion.div>
    </Tilt>
  );
}

export default function FourLayers() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-[82px] px-4 sm:px-6 lg:px-8" data-name="Four Layers of Intelligence">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-[36px]">
          <AnimatedText
            as="p"
            variant="letters-float"
            className="font-satoshi font-medium text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.25] text-black text-center"
          >
            Four Layers of Intelligence
          </AnimatedText>
          <p className="font-satoshi font-normal text-[13px] sm:text-[14px] lg:text-[16px] leading-[1.5] text-[#1D1D1D] text-center max-w-[850px]">
            Doctors are losing time to data, forms, and follow-ups. Most
            clinical visits begin with repeated questions, scattered records,
            manual typing, and rushed conversations.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-[50px] mx-auto max-w-[1240px] grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-[20px]">
          {CARDS.map((c, i) => (
            <LayerCardItem key={c.title} {...c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
