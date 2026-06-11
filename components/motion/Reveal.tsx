"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";
import type { ReactNode } from "react";
import { useRichMotion } from "@/components/motion/useRichMotion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Lightweight mobile fallback: a plain opacity + translate reveal with NO
// blur filter and NO 3D perspective (both are expensive to animate on phones
// and are the main cause of stuttery touch scrolling). Still a clean one-shot
// entrance; settles to identity.
const LITE_HIDDEN: TargetState = { opacity: 0, y: 24 };
const LITE_SHOWN: TargetState = { opacity: 1, y: 0 };
const LITE_TRANSITION = (delay: number): Transition => ({ duration: 0.5, ease: EASE, delay });

export type RevealVariant = "up" | "left" | "right" | "scale" | "flip" | "blur";

type TargetState = Record<string, string | number>;

/**
 * Entrance styles. All are transform/opacity/filter(blur) only and ALL settle
 * to the exact identity state, so the at-rest design is pixel-identical.
 */
function hiddenFor(from: RevealVariant, y: number): TargetState {
  switch (from) {
    case "left":
      return {
        opacity: 0,
        x: -80,
        rotateY: 10,
        transformPerspective: 1000,
        filter: "blur(6px)",
      };
    case "right":
      return {
        opacity: 0,
        x: 80,
        rotateY: -10,
        transformPerspective: 1000,
        filter: "blur(6px)",
      };
    case "scale":
      return { opacity: 0, scale: 0.8, y: 32 };
    case "flip":
      return {
        opacity: 0,
        rotateX: -75,
        y: 48,
        z: -140,
        transformPerspective: 1000,
      };
    case "blur":
      return { opacity: 0, filter: "blur(16px)", y: 16 };
    case "up":
    default:
      return { opacity: 0, y, scale: 0.92, filter: "blur(10px)" };
  }
}

function shownFor(from: RevealVariant): TargetState {
  switch (from) {
    case "left":
    case "right":
      return {
        opacity: 1,
        x: 0,
        rotateY: 0,
        transformPerspective: 1000,
        filter: "blur(0px)",
      };
    case "scale":
      return { opacity: 1, scale: 1, y: 0 };
    case "flip":
      return {
        opacity: 1,
        rotateX: 0,
        y: 0,
        z: 0,
        transformPerspective: 1000,
      };
    case "blur":
      return { opacity: 1, filter: "blur(0px)", y: 0 };
    case "up":
    default:
      return { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" };
  }
}

function transitionFor(from: RevealVariant, delay: number): Transition {
  switch (from) {
    case "scale":
      // Pop with a visible overshoot, then settle exactly to 1.
      return {
        type: "spring",
        stiffness: 170,
        damping: 15,
        mass: 0.9,
        delay,
      };
    case "flip":
      return { duration: 1.0, ease: EASE, delay };
    case "blur":
      return { duration: 1.0, ease: EASE, delay };
    default:
      return { duration: 0.9, ease: EASE, delay };
  }
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  /** Entrance style — defaults to a dramatic rise + blur + scale ("up"). */
  from?: RevealVariant;
};

/**
 * Scroll-reveal wrapper: materializes children into view with a dramatic,
 * cinematic entrance. Purely additive — renders a plain block div with no
 * visual styling of its own, and every variant settles to identity.
 * Respects prefers-reduced-motion (renders children instantly, no animation).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 72,
  once = true,
  from = "up",
}: RevealProps) {
  const reduce = useReducedMotion();
  const rich = useRichMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={rich ? hiddenFor(from, y) : LITE_HIDDEN}
      whileInView={rich ? shownFor(from) : LITE_SHOWN}
      viewport={{ once, margin: "-80px" }}
      transition={rich ? transitionFor(from, delay) : LITE_TRANSITION(delay)}
    >
      {children}
    </motion.div>
  );
}

type RevealStaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
};

/**
 * Container that staggers its RevealChild descendants into view.
 */
export function RevealStagger({
  children,
  className,
  delay = 0,
  stagger = 0.14,
  once = true,
}: RevealStaggerProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

type RevealChildProps = {
  children: ReactNode;
  className?: string;
  y?: number;
  /** Entrance style for this child — same options as Reveal. */
  from?: RevealVariant;
};

/**
 * Child item for RevealStagger: dramatic materialize-in, driven by the
 * parent's stagger.
 */
export function RevealChild({
  children,
  className,
  y = 56,
  from = "up",
}: RevealChildProps) {
  const reduce = useReducedMotion();
  const rich = useRichMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: rich ? hiddenFor(from, y) : LITE_HIDDEN,
        show: rich
          ? { ...shownFor(from), transition: transitionFor(from, 0) }
          : { ...LITE_SHOWN, transition: LITE_TRANSITION(0) },
      }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
