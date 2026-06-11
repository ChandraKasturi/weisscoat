"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * True ONLY on capable desktop devices (fine pointer + wide viewport), and
 * only after mount. Returns false during SSR / first client paint, on
 * touch/mobile devices, and whenever the user prefers reduced motion.
 *
 * Use this to gate motion that is expensive or fragile on phones — perpetual
 * per-letter title waves (many animating nodes + lost kerning that clips
 * glyphs) and scroll-linked parallax (recomputed every scroll frame, which
 * stutters touch scrolling). One-shot entrance reveals are cheap and stay on
 * for everyone; this is only for the continuous / scroll-driven effects.
 *
 * Because it starts false and matches on both server and first client render,
 * there is no hydration mismatch — desktop simply upgrades after mount.
 */
export function useRichMotion(): boolean {
  const reduce = useReducedMotion();
  const [rich, setRich] = useState(false);

  useEffect(() => {
    if (reduce) {
      setRich(false);
      return;
    }
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const update = () => setRich(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduce]);

  return rich;
}

export default useRichMotion;
