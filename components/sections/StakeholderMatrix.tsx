"use client";

import { motion, useReducedMotion } from "framer-motion";
import { AnimatedText } from "@/components/motion/AnimatedText";

// Bouncy spring for the inner-content hover pops — low damping so it visibly
// overshoots ("bouncy") before settling back to identity.
const BOUNCE_SPRING = { type: "spring" as const, stiffness: 520, damping: 11, mass: 0.6 };

// Hover amplitudes are deliberately tiny: the matrix grid lives inside an
// `overflow-hidden rounded-[10px]` container, so inner content must never
// escape the cell padding (no clipping, no overlap with adjacent rows).
const headerIconPop = { rest: { y: 0, scale: 1 }, hover: { y: -3, scale: 1.12 } };
const headerTitlePop = { rest: { y: 0, scale: 1 }, hover: { y: -3, scale: 1.04 } };
const bulletPop = { rest: { y: 0, scale: 1 }, hover: { y: -2.5, scale: 1.015 } };

type Bullet = { bold: string; tail: string };

type StakeholderColumn = {
  icon: string;
  iconSize: number;
  title: string;
  bullets: Bullet[];
};

const COLUMNS: StakeholderColumn[] = [
  {
    icon: "/figma/svm-icon-doctors.svg",
    iconSize: 35,
    title: "For Doctors",
    bullets: [
      { bold: "Focused consultations", tail: " starting from structured context rather than zero" },
      { bold: "Less typing, more", tail: " listening through voice-based note capture." },
      { bold: "Automated continuity", tail: " ensuring patients adhere to chronic care plans." },
      { bold: "Personalized clinical memory", tail: " that strengthens with every case." },
    ],
  },
  {
    icon: "/figma/svm-icon-clinics.svg",
    iconSize: 47,
    title: "For Clinics",
    bullets: [
      { bold: "Reduced front-desk workload", tail: " via automated intake and digital registration." },
      { bold: "Improved patient retention", tail: " and operational experience." },
      { bold: "Standardized workflows", tail: " for lab testing, consultations, and scheduling." },
      { bold: "Long-term institutional intelligence", tail: " capturing unique care patterns." },
    ],
  },
  {
    icon: "/figma/svm-icon-patients.svg",
    iconSize: 38,
    title: "For Patients",
    bullets: [
      { bold: "Less repetition;", tail: " no need to explain the medical issue multiple times." },
      { bold: "Crystal clear instructions", tail: " delivered directly to their phone in simple language." },
      { bold: "Timely reminders", tail: " for medicine and follow-ups over familiar channels." },
      { bold: "Family-friendly profiles", tail: " easily managed from a single mobile dashboard." },
    ],
  },
];

function ColumnView({ col, isMiddle, index }: { col: StakeholderColumn; isMiddle: boolean; index: number }) {
  const reduce = useReducedMotion();
  return (
    // Each column flows in with the section heading — staggered rise + fade,
    // sliding up into the overflow-hidden frame. Settles to identity.
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 56 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={
        reduce
          ? undefined
          : { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 + index * 0.16 }
      }
      className={
        "relative flex flex-col bg-white" +
        (isMiddle ? " md:z-10 md:shadow-[0px_5px_32.8px_11px_rgba(66,66,66,0.10)]" : "")
      }
    >
      {/* Header row: hovering it springily pops the icon + title (inner
          content only — the cell box itself never moves, so nothing clips at
          the container's rounded overflow-hidden border). */}
      <motion.div
        initial="rest"
        animate="rest"
        whileHover={reduce ? undefined : "hover"}
        className="flex h-[64px] sm:h-[72px] lg:h-[80px] items-center gap-[12px] bg-[#E8FFAE] px-4 sm:px-5 lg:px-[24px]"
      >
        {/* Hover pop lives on this wrapper; the perpetual float lives on the
            img itself, so the two transforms compose instead of fighting. */}
        <motion.span style={{ display: "flex" }} variants={headerIconPop} transition={BOUNCE_SPRING}>
          <motion.img
            src={col.icon}
            alt=""
            aria-hidden
            style={{ width: col.iconSize, height: col.iconSize }}
            className="max-w-[36px] sm:max-w-none max-h-[36px] sm:max-h-none"
            // Continuous gentle float, out of phase per column index; stays
            // well within the header's padding. Inert under reduced motion.
            animate={reduce ? undefined : { y: [0, -3, 0, 3, 0], rotate: [0, 3, 0, -3, 0] }}
            transition={
              reduce
                ? undefined
                : { duration: 4.2 + index * 0.4, ease: "easeInOut", repeat: Infinity, delay: index * 0.9 }
            }
          />
        </motion.span>
        <motion.p
          variants={headerTitlePop}
          transition={BOUNCE_SPRING}
          className="font-satoshi font-bold text-[16px] sm:text-[18px] lg:text-[22px] leading-[24px] text-[#003400] whitespace-nowrap"
        >
          {col.title}
        </motion.p>
      </motion.div>
      {col.bullets.map((b, i) => {
        const tinted = i % 2 === 1;
        return (
          <motion.div
            key={b.bold}
            initial="rest"
            animate="rest"
            whileHover={reduce ? undefined : "hover"}
            className={
              "flex min-h-[76px] sm:min-h-[80px] lg:h-[88px] items-center px-4 sm:px-5 lg:px-[24px] py-3 sm:py-4" +
              (tinted ? " bg-[#F6FBE9] border-y-2 border-[#F9FFEB]" : "")
            }
          >
            {/* Bouncy pop on the inner <p> only — amplitude small enough to
                stay inside the row's padding (no clip / overlap). */}
            <motion.p
              variants={bulletPop}
              transition={BOUNCE_SPRING}
              style={{ transformOrigin: "left center" }}
              className="font-satoshi font-medium text-[13px] sm:text-[14px] lg:text-[16px] leading-[20px] sm:leading-[22px] lg:leading-[24px] text-[#2E3760]"
            >
              <span className="font-satoshi font-bold">{b.bold}</span>
              {b.tail}
            </motion.p>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default function StakeholderMatrix() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-[82px] px-4 sm:px-6 lg:px-8" data-name="Stakeholder Value Matrix">
      <div className="mx-auto max-w-[1440px]">
        <AnimatedText
          as="p"
          variant="letters-float"
          className="font-satoshi font-medium text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.25] text-black text-center"
        >
          Stakeholder Value Matrix
        </AnimatedText>

        <div className="mt-8 sm:mt-12 lg:mt-[60px] mx-auto max-w-[1240px]">
          {/* Mobile: stack | tablet+: grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 overflow-hidden rounded-[10px] border border-[#E9E9E9] bg-white shadow-[0px_-13px_50px_0px_rgba(66,66,66,0.10)]">
            {COLUMNS.map((col, i) => (
              <ColumnView key={col.title} col={col} isMiddle={i === 1} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
