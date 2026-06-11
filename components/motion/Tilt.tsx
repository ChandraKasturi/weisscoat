"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import type { PointerEvent as ReactPointerEvent, ReactNode } from "react";

const SPRING = { stiffness: 260, damping: 22, mass: 0.6 };

type TiltProps = {
  children: ReactNode;
  className?: string;
  /** Maximum tilt toward the cursor, in degrees. */
  max?: number;
  /** Hover scale folded into the 3D pop (1 = none). */
  scale?: number;
  /** Hover lift in px (negative lifts up), folded into the 3D pop. */
  lift?: number;
  /** translateZ pop in px while hovered (needs the wrapper's perspective). */
  pop?: number;
  /** Perspective distance in px (smaller = more dramatic depth). */
  perspective?: number;
};

/**
 * Cursor-reactive 3D tilt wrapper. The wrapper is a transparent grid block
 * (so the wrapped child stretches exactly as it did when it was the direct
 * grid/flex item) that provides the perspective context; an inner motion
 * element rotates toward the cursor on springs and springs back to perfect
 * identity on leave. All transforms rest at identity, so the at-rest design
 * is pixel-identical. Inert under prefers-reduced-motion and for touch
 * pointers; never blocks clicks (no overlay, transforms only).
 */
export function Tilt({
  children,
  className,
  max = 10,
  scale = 1,
  lift = 0,
  pop = 28,
  perspective = 900,
}: TiltProps) {
  const reduce = useReducedMotion();
  const rotateX = useSpring(0, SPRING);
  const rotateY = useSpring(0, SPRING);
  const z = useSpring(0, SPRING);
  const hoverScale = useSpring(1, SPRING);
  const hoverY = useSpring(0, SPRING);

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
    z.set(0);
    hoverScale.set(1);
    hoverY.set(0);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType === "touch") return;
    const rect = e.currentTarget.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 2 * max);
    rotateX.set(py * -2 * max);
    z.set(pop);
    hoverScale.set(scale);
    hoverY.set(lift);
  };

  return (
    <div
      className={className}
      style={{
        display: "grid",
        width: "100%",
        perspective: `${perspective}px`,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        onPointerMove={onPointerMove}
        onPointerLeave={reset}
        onPointerCancel={reset}
        style={{
          display: "grid",
          rotateX,
          rotateY,
          z,
          scale: hoverScale,
          y: hoverY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Tilt;
