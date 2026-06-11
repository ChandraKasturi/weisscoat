"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import type { PointerEvent as ReactPointerEvent, ReactNode } from "react";

const SPRING = { stiffness: 320, damping: 22, mass: 0.55 };

function clamp(v: number, max: number) {
  return Math.min(max, Math.max(-max, v));
}

type MagneticOptions = {
  /** How strongly the element follows the cursor (0..1 of cursor offset). */
  strength?: number;
  /** Maximum translation in px. */
  max?: number;
  /** Constant lift in px applied while hovered (negative lifts up). */
  lift?: number;
};

/**
 * Magnetic-hover springs + pointer handlers for applying the effect directly
 * to an existing motion element (e.g. an absolutely-positioned button where a
 * wrapper would disturb layout). Attach `x`/`y` to the element's style and
 * spread the handlers. Rests at exactly 0,0; inert for reduced-motion/touch.
 */
export function useMagnetic({ strength = 0.25, max = 14, lift = 0 }: MagneticOptions = {}) {
  const reduce = useReducedMotion();
  const x = useSpring(0, SPRING);
  const y = useSpring(0, SPRING);

  const onPointerMove = (e: ReactPointerEvent<HTMLElement>) => {
    if (reduce || e.pointerType === "touch") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(clamp(dx * strength, max));
    y.set(clamp(dy * strength, max) + lift);
  };

  const onPointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { x, y, onPointerMove, onPointerLeave, onPointerCancel: onPointerLeave };
}

type MagneticProps = MagneticOptions & {
  children: ReactNode;
  className?: string;
  /** Optional slight scale while hovered. */
  scale?: number;
};

/**
 * Magnetic hover wrapper for buttons/CTAs: the child translates a few px
 * toward the cursor while hovered and springs back to identity on leave.
 * The wrapper is a fit-content block so flow layout is unchanged at rest,
 * and only transforms are animated. Disabled for reduced-motion and touch.
 */
export function Magnetic({
  children,
  className,
  strength,
  max,
  lift,
  scale = 1,
}: MagneticProps) {
  const reduce = useReducedMotion();
  const { x, y, onPointerMove, onPointerLeave } = useMagnetic({ strength, max, lift });
  const s = useSpring(1, SPRING);

  return (
    <motion.div
      className={className}
      onPointerMove={(e) => {
        onPointerMove(e);
        if (!reduce && e.pointerType !== "touch") s.set(scale);
      }}
      onPointerLeave={() => {
        onPointerLeave();
        s.set(1);
      }}
      onPointerCancel={() => {
        onPointerLeave();
        s.set(1);
      }}
      style={{ x, y, scale: s, width: "fit-content", willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}

export default Magnetic;
