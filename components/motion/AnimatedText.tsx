"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { ElementType } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: true, margin: "-60px" } as const;

export type AnimatedTextVariant =
  | "words-up" // words float up + fade + de-blur, staggered left→right
  | "words-blur" // words materialize from blur in place, staggered
  | "letters" // per-character cascade (short headings only)
  | "letters-float" // per-character entrance, then perpetual gentle Y wave
  | "rise" // whole text rises + de-blurs as one (safe fallback)
  | "slide" // whole text slides in from the left + fades
  | "mask"; // text rises from behind an overflow-hidden clip

type AnimatedTextProps = {
  /** Tag to render — pass the SAME tag as the original element. */
  as?: ElementType;
  /** Pass the SAME className as the original element. */
  className?: string;
  variant?: AnimatedTextVariant;
  /** Extra delay (seconds) before the entrance starts. */
  delay?: number;
  /** Plain text only, so word/letter splitting stays byte-identical. */
  children: string;
};

/**
 * Scroll-triggered heading text entrance (once). Purely additive:
 * - Only opacity / transform / filter(blur) are animated; everything settles
 *   to identity, so the at-rest heading is pixel-identical to the original.
 * - Word/letter splits keep REAL space text nodes between inline-block word
 *   spans, so line wrapping and spacing match the un-split heading exactly.
 * - Respects prefers-reduced-motion (renders the plain element instantly).
 */
export function AnimatedText({
  as: Tag = "p",
  className,
  variant = "rise",
  delay = 0,
  children,
}: AnimatedTextProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <Tag className={className}>{children}</Tag>;
  }

  if (variant === "rise" || variant === "slide") {
    const hidden =
      variant === "rise"
        ? { opacity: 0, y: 28, filter: "blur(8px)" }
        : { opacity: 0, x: -48, filter: "blur(6px)" };
    const shown =
      variant === "rise"
        ? { opacity: 1, y: 0, filter: "blur(0px)" }
        : { opacity: 1, x: 0, filter: "blur(0px)" };
    return (
      <Tag className={className}>
        {/* Block-level span: occupies the exact same box as the raw text. */}
        <motion.span
          style={{ display: "block" }}
          initial={hidden}
          whileInView={shown}
          viewport={VIEWPORT}
          transition={{ duration: variant === "rise" ? 0.9 : 0.8, ease: EASE, delay }}
        >
          {children}
        </motion.span>
      </Tag>
    );
  }

  if (variant === "mask") {
    return (
      <Tag className={className}>
        {/* Clip wrapper: padding/negative-margin cancel out (zero layout
            change) while extending the clip box so ascenders/descenders are
            never clipped at rest. */}
        <span
          style={{
            display: "block",
            overflow: "hidden",
            padding: "0.25em 0",
            margin: "-0.25em 0",
          }}
        >
          <motion.span
            style={{ display: "block" }}
            initial={{ y: "130%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={VIEWPORT}
            transition={{
              y: { duration: 0.9, ease: EASE, delay },
              opacity: { duration: 0.35, ease: "easeOut", delay },
            }}
          >
            {children}
          </motion.span>
        </span>
      </Tag>
    );
  }

  // Splitting variants. Capture whitespace so spaces are re-emitted as real
  // text nodes — wrapping/spacing stays byte-identical to the raw heading.
  const parts = children.split(/(\s+)/);

  if (variant === "words-up" || variant === "words-blur") {
    const hidden =
      variant === "words-up"
        ? { opacity: 0, y: "0.55em", filter: "blur(6px)" }
        : { opacity: 0, filter: "blur(12px)" };
    const shown =
      variant === "words-up"
        ? { opacity: 1, y: "0em", filter: "blur(0px)" }
        : { opacity: 1, filter: "blur(0px)" };
    const stagger = variant === "words-up" ? 0.07 : 0.055;
    let wordIndex = 0;
    return (
      <Tag className={className}>
        {parts.map((part, i) => {
          if (part === "") return null;
          if (/^\s+$/.test(part)) return <Fragment key={i}>{part}</Fragment>;
          const wi = wordIndex++;
          return (
            <motion.span
              key={i}
              style={{ display: "inline-block" }}
              initial={hidden}
              whileInView={shown}
              viewport={VIEWPORT}
              transition={{
                duration: variant === "words-up" ? 0.6 : 0.7,
                ease: EASE,
                delay: delay + wi * stagger,
              }}
            >
              {part}
            </motion.span>
          );
        })}
      </Tag>
    );
  }

  if (variant === "letters-float") {
    // Per-character entrance that settles into a perpetual travelling wave.
    // Each WORD is an atomic inline-block wrapper so it can never break
    // mid-word (line wrapping stays byte-identical); spaces remain real text
    // nodes. The wave is a nested inner span (Y keyframes, phase-offset by
    // character index) so it never fights the outer entrance transform.
    // Amplitude is tiny (±3px) — this is the one intentionally perpetual
    // effect; it is fully inert under prefers-reduced-motion (early return
    // above renders the static title).
    let floatIndex = 0;
    return (
      <Tag className={className}>
        {parts.map((part, i) => {
          if (part === "") return null;
          if (/^\s+$/.test(part)) return <Fragment key={i}>{part}</Fragment>;
          return (
            <span key={i} style={{ display: "inline-block" }}>
              {Array.from(part).map((ch, j) => {
                const ci = floatIndex++;
                return (
                  <motion.span
                    key={j}
                    style={{ display: "inline-block" }}
                    initial={{ opacity: 0, y: "0.45em", filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, y: "0em", filter: "blur(0px)" }}
                    viewport={VIEWPORT}
                    transition={{
                      duration: 0.5,
                      ease: EASE,
                      delay: delay + ci * 0.03,
                    }}
                  >
                    <motion.span
                      style={{ display: "inline-block" }}
                      animate={{ y: [0, -3, 0, 3, 0] }}
                      transition={{
                        duration: 3.8,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay: delay + 0.7 + ci * 0.12,
                      }}
                    >
                      {ch}
                    </motion.span>
                  </motion.span>
                );
              })}
            </span>
          );
        })}
      </Tag>
    );
  }

  // "letters": per-character cascade. Each word stays an atomic inline-block
  // so it can never break mid-word; spaces remain real text nodes.
  let charIndex = 0;
  return (
    <Tag className={className}>
      {parts.map((part, i) => {
        if (part === "") return null;
        if (/^\s+$/.test(part)) return <Fragment key={i}>{part}</Fragment>;
        return (
          <span key={i} style={{ display: "inline-block" }}>
            {Array.from(part).map((ch, j) => {
              const d = delay + charIndex++ * 0.035;
              return (
                <motion.span
                  key={j}
                  style={{ display: "inline-block" }}
                  initial={{ opacity: 0, y: "0.4em", filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: "0em", filter: "blur(0px)" }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.45, ease: EASE, delay: d }}
                >
                  {ch}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </Tag>
  );
}

export default AnimatedText;
