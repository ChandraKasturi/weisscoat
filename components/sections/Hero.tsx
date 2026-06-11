"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTime,
  useTransform,
} from "framer-motion";
import type { PointerEvent as ReactPointerEvent } from "react";
import { Magnetic, useMagnetic } from "@/components/motion/Magnetic";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduce = useReducedMotion();

  // --- Scroll parallax: doctor + ring drift at different rates as the hero
  // scrolls (translateY only on absolutely-positioned elements — no layout shift).
  const { scrollY } = useScroll();
  const doctorDrift = useTransform(scrollY, [0, 900], [0, 70]);
  const ringDrift = useTransform(scrollY, [0, 900], [0, 150]);

  // --- Ambient loops: badges softly float out of phase; the ring slowly breathes.
  const time = useTime();
  const badgeFloatA = useTransform(time, (t) => Math.sin(t / 1100) * 7);
  const badgeFloatB = useTransform(time, (t) => Math.sin(t / 1350 + 2.1) * 6);
  const ringBreathe = useTransform(time, (t) => 1 + Math.sin(t / 1900) * 0.022);

  // --- Cursor diorama: normalized pointer position (-1..1) across the hero,
  // smoothed with lazy springs, drives layered 3D depth parallax on top of
  // the scroll parallax + ambient float (badges shift most, doctor least).
  // Inert for reduced-motion and touch pointers; everything rests at 0.
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const mx = useSpring(pointerX, { stiffness: 70, damping: 18, mass: 0.8 });
  const my = useSpring(pointerY, { stiffness: 70, damping: 18, mass: 0.8 });

  const onStagePointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType === "touch") return;
    const rect = e.currentTarget.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;
    pointerX.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    pointerY.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };
  const onStagePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  // Per-layer combined transforms (scroll drift + ambient float + cursor depth).
  const doctorX = useTransform(mx, (v) => v * 7);
  const doctorY = useTransform([doctorDrift, my], ([d, m]: number[]) => d + m * 5);
  const ringX = useTransform(mx, (v) => v * 15);
  const ringY = useTransform([ringDrift, my], ([d, m]: number[]) => d + m * 11);
  const badgeAX = useTransform(mx, (v) => v * 24);
  const badgeAY = useTransform([badgeFloatA, my], ([f, m]: number[]) => f + m * 18);
  const badgeARotX = useTransform(my, (v) => v * -5);
  const badgeARotY = useTransform(mx, (v) => v * 6);
  const badgeBX = useTransform(mx, (v) => v * 30);
  const badgeBY = useTransform([badgeFloatB, my], ([f, m]: number[]) => f + m * 24);
  const badgeBRotX = useTransform(my, (v) => v * -6);
  const badgeBRotY = useTransform(mx, (v) => v * 7);

  const doctorStyle = reduce ? undefined : { x: doctorX, y: doctorY };
  const ringStyle = reduce
    ? undefined
    : { x: ringX, y: ringY, scale: ringBreathe };
  const badgeStyleA = reduce
    ? undefined
    : { x: badgeAX, y: badgeAY, rotateX: badgeARotX, rotateY: badgeARotY };
  const badgeStyleB = reduce
    ? undefined
    : { x: badgeBX, y: badgeBY, rotateX: badgeBRotX, rotateY: badgeBRotY };

  // Perspective context for the hero stage so the badge rotations and layer
  // shifts read as true depth. Purely a 3D context — zero effect at rest.
  const stage3d = {
    perspective: "1100px",
    transformStyle: "preserve-3d",
  } as const;

  // Staggered cinematic materialize (+ optional slight scale) for the on-load
  // entrance: rise + de-blur, settling exactly to identity.
  const fadeUp = (delay: number, y = 32, scale?: number) =>
    reduce
      ? {}
      : {
          initial: {
            opacity: 0,
            y,
            filter: "blur(10px)",
            ...(scale !== undefined ? { scale } : {}),
          },
          animate: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            ...(scale !== undefined ? { scale: 1 } : {}),
          },
          transition: { duration: 0.9, ease: EASE, delay },
        };

  // Mint ring: swings in with a slow rotation + heavy de-blur (scale is owned
  // by the ambient breathe motion value, y by the parallax).
  const ringEntrance = reduce
    ? {}
    : {
        initial: { opacity: 0, rotate: -32, filter: "blur(16px)" },
        animate: { opacity: 1, rotate: 0, filter: "blur(0px)" },
        transition: { duration: 1.3, ease: EASE, delay: 0.15 },
      };

  // Doctor: ken-burns settle — slightly oversized + blurred, easing into focus
  // (y is owned by the parallax motion value).
  const doctorEntrance = reduce
    ? {}
    : {
        initial: { opacity: 0, scale: 1.08, filter: "blur(12px)" },
        animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
        transition: { duration: 1.2, ease: EASE, delay: 0.25 },
      };

  // Exuberant spring pop for the floating badges — visible overshoot, lands
  // exactly at identity (y is owned by the ambient float motion values).
  const pop = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, scale: 0.3, rotate: -10 },
          animate: { opacity: 1, scale: 1, rotate: 0 },
          transition: {
            delay,
            type: "spring" as const,
            stiffness: 280,
            damping: 12,
            mass: 0.9,
          },
        };

  // Hover micro-interaction for primary CTA buttons.
  const ctaHover = reduce
    ? {}
    : {
        whileHover: { scale: 1.03 },
        whileTap: { scale: 0.97 },
      };

  const ctaSpring = reduce
    ? {}
    : { scale: { type: "spring" as const, stiffness: 400, damping: 17 } };

  // Desktop "Book a Demo" is absolutely positioned, so the magnetic springs
  // are applied directly to the button (a wrapper would disturb layout). Its
  // entrance therefore avoids `y` — the magnetic spring owns translate — and
  // materializes via scale + de-blur instead, settling exactly to identity.
  const bookMag = useMagnetic({ strength: 0.28, max: 12 });
  const magneticEntrance = reduce
    ? {}
    : {
        initial: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
        animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
        transition: { duration: 0.9, ease: EASE, delay: 0.4, ...ctaSpring },
      };

  return (
    <div className="bg-white px-2 pt-3 sm:pt-4 lg:pt-[22px] pb-6 sm:pb-8 lg:pb-[40px]">
      <div
        className="relative w-full overflow-hidden rounded-[20px] sm:rounded-[28px] lg:rounded-[40px] bg-white"
        onPointerMove={onStagePointerMove}
        onPointerLeave={onStagePointerLeave}
      >
        {/* Mint gradient overlay */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-[20px] sm:rounded-[28px] lg:rounded-[40px] opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(184.7deg, #D1EFCF 7.94%, #EBFDEA 113.26%)",
          }}
        />

        {/* Mobile / Tablet / iPad layout — works from < 1280 (xl breakpoint) */}
        <div className="xl:hidden relative flex flex-col md:flex-row items-stretch gap-6 md:gap-4 lg:gap-6 px-5 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-10 md:py-12">
          {/* LEFT: text content */}
          <div className="md:flex-1 flex flex-col gap-4 sm:gap-6 md:justify-center min-w-0">
            <motion.div
              {...fadeUp(0.05, 24)}
              className="flex items-center gap-[6px] rounded-[12px] border border-[#c6c6cd] bg-[#B4E9B7] px-[13px] py-[5px] self-start"
            >
              <svg width="15" height="14" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
                <circle cx="12" cy="12" r="10" fill="#2B412A" />
                <path d="M8 12.5l2.6 2.6L16 9.6" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="font-inter font-medium text-[11px] sm:text-[12px] leading-[16px] text-[#0B1C30] whitespace-nowrap">
                Clinical Intelligence, Personalized.
              </p>
            </motion.div>

            <motion.h1
              {...fadeUp(0.15, 56, 0.94)}
              className="font-satoshi font-light not-italic text-[#2B412A] text-[30px] sm:text-[40px] md:text-[44px] lg:text-[54px] leading-[1.15] tracking-[-0.5px]"
            >
              Personalized <span className="font-satoshi font-bold">AI Agents</span>{" "}
              for Smarter Clinical Care
            </motion.h1>

            <motion.p
              {...fadeUp(0.28, 32)}
              className="font-satoshi font-normal not-italic text-[13px] sm:text-[15px] md:text-[16px] leading-[1.6] text-[rgba(7,0,59,0.75)] max-w-[560px]"
            >
              Weisscoat helps doctors build AI-powered clinical assistants
              trained around their unique consultation style, transforming every
              consultation into a structured clinical intelligence system.
            </motion.p>

            <Magnetic strength={0.28} max={10}>
              <motion.button
                type="button"
                {...fadeUp(0.4, 24)}
                {...ctaHover}
                {...(reduce
                  ? {}
                  : {
                      transition: {
                        duration: 0.7,
                        ease: EASE,
                        delay: 0.4,
                        ...ctaSpring,
                      },
                    })}
                className="self-start inline-flex items-center justify-center rounded-[10px] bg-[#5B6A5A] hover:bg-[#4A5849] transition-colors px-[24px] sm:px-[32px] py-[12px] sm:py-[16px] font-poppins font-medium text-[14px] sm:text-[16px] leading-[1.1] text-white"
              >
                Book a Demo
              </motion.button>
            </Magnetic>
          </div>

          {/* RIGHT: doctor + ring + floating badges */}
          <div
            className="relative md:flex-1 w-full h-[340px] sm:h-[420px] md:h-auto md:min-h-[520px] md:self-stretch"
            style={stage3d}
          >
            <motion.img
              src="/figma/hero-doctor-ring.svg"
              alt=""
              aria-hidden
              width={539}
              height={539}
              {...ringEntrance}
              style={ringStyle}
              className="absolute right-[0%] md:right-[-4%] top-[4%] h-[88%] aspect-square w-auto select-none pointer-events-none"
            />
            <motion.img
              src="/figma/hero-doctor-figma.png"
              alt="Doctor in white coat"
              {...doctorEntrance}
              style={doctorStyle}
              className="absolute right-[18%] md:right-[14%] top-0 h-full w-auto object-cover object-top pointer-events-none select-none"
            />

            {/* Regular Checkup badge — overlapping image left at chest height */}
            <motion.div
              {...pop(0.8)}
              style={badgeStyleA}
              className="absolute left-0 sm:left-[2%] bottom-[34%] sm:bottom-[36%] flex items-center gap-[10px] sm:gap-[12px] h-[60px] sm:h-[72px] md:h-[78px] px-[12px] sm:px-[16px] rounded-[18px] sm:rounded-[24px] bg-[rgba(246,249,255,0.92)] shadow-[0px_0px_29px_0px_rgba(42,167,255,0.16)] backdrop-blur-[12px] z-10"
            >
              <img
                src="/figma/hero-checkup-shield.svg"
                alt=""
                aria-hidden
                width={40}
                height={46}
                style={{ width: 40, height: 46 }}
                className="block shrink-0"
              />
              <p className="font-poppins font-medium text-[13px] sm:text-[15px] md:text-[16px] leading-[1.2] text-[rgba(7,0,59,0.8)] whitespace-nowrap">
                Regular<br />Checkup
              </p>
            </motion.div>

            {/* 84k+ Happy Patients badge — right at chest height */}
            <motion.div
              {...pop(0.95)}
              style={badgeStyleB}
              className="absolute right-0 sm:right-[0%] bottom-[28%] sm:bottom-[30%] flex items-center gap-[8px] sm:gap-[10px] h-[54px] sm:h-[64px] md:h-[70px] px-[12px] sm:px-[14px] rounded-[18px] sm:rounded-[24px] bg-[rgba(246,249,255,0.92)] shadow-[0px_0px_29px_0px_rgba(42,167,255,0.16)] backdrop-blur-[12px] z-10"
            >
              <img
                src="/figma/hero-smile.svg"
                alt=""
                aria-hidden
                width={36}
                height={36}
                style={{ width: 36, height: 36 }}
                className="block shrink-0"
              />
              <div className="flex flex-col">
                <p className="font-poppins font-semibold text-[16px] sm:text-[19px] md:text-[22px] leading-[1.15] text-[#1B3C74]">
                  84k+
                </p>
                <p className="font-poppins font-normal text-[10px] sm:text-[12px] md:text-[13px] leading-[1.25] text-[#77829D] whitespace-nowrap">
                  Happy Patients
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Desktop layout — pinned absolute (per Figma), only at xl (1280+) where it fits */}
        <div className="hidden xl:block relative h-[678px]" style={stage3d}>
          <motion.img
            src="/figma/hero-doctor-ring.svg"
            alt=""
            aria-hidden
            {...ringEntrance}
            style={ringStyle}
            className="absolute left-[794px] top-[59px] h-[539px] w-[539px] select-none pointer-events-none"
          />
          <motion.img
            src="/figma/hero-doctor-figma.png"
            alt="Doctor in white coat"
            {...doctorEntrance}
            style={doctorStyle}
            className="absolute left-[804px] top-[46px] h-[706px] w-[413px] object-cover object-top pointer-events-none select-none"
          />

          <motion.div
            {...fadeUp(0.05, 24)}
            className="absolute left-[40px] top-[122px] flex items-center gap-[6px] rounded-[12px] border border-[#c6c6cd] bg-[#B4E9B7] px-[13px] py-[5px]"
          >
            <svg width="15" height="14" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
              <circle cx="12" cy="12" r="10" fill="#2B412A" />
              <path d="M8 12.5l2.6 2.6L16 9.6" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="font-inter font-medium text-[12px] leading-[16px] text-[#0B1C30] whitespace-nowrap">
              Clinical Intelligence, Personalized.
            </p>
          </motion.div>

          <motion.h1
            {...fadeUp(0.15, 56, 0.94)}
            className="absolute left-[40px] top-[191px] w-[645px] font-satoshi font-light not-italic text-[#2B412A] text-[60px] leading-[1.25] tracking-[-0.5px]"
          >
            Personalized <span className="font-satoshi font-bold">AI Agents</span>
            <br />
            for Smarter Clinical Care
          </motion.h1>

          <motion.p
            {...fadeUp(0.28, 32)}
            className="absolute left-[40px] top-[355px] w-[623px] font-satoshi font-normal not-italic text-[18px] leading-[1.7] text-[rgba(7,0,59,0.75)]"
          >
            Weisscoat helps doctors build AI-powered clinical assistants trained
            around their unique consultation style, transforming every
            consultation into a structured clinical intelligence system.
          </motion.p>

          <motion.button
            type="button"
            {...magneticEntrance}
            {...ctaHover}
            style={{ x: bookMag.x, y: bookMag.y }}
            onPointerMove={bookMag.onPointerMove}
            onPointerLeave={bookMag.onPointerLeave}
            onPointerCancel={bookMag.onPointerCancel}
            className="absolute left-[40px] top-[476px] inline-flex items-center justify-center rounded-[10px] bg-[#5B6A5A] hover:bg-[#4A5849] transition-colors px-[32px] py-[20px] font-poppins font-medium text-[17px] leading-[1.1] text-white shadow-[0px_18px_28px_0px_rgba(42,167,255,0.10)]"
          >
            Book a Demo
          </motion.button>

          <motion.div
            {...pop(0.8)}
            style={badgeStyleA}
            className="absolute left-[618px] top-[431px] h-[115px] w-[265px] rounded-[30px] bg-[rgba(246,249,255,0.81)] shadow-[0px_0px_29px_0px_rgba(42,167,255,0.16)] backdrop-blur-[12px]"
          >
            <img src="/figma/hero-checkup-shield.svg" alt="" aria-hidden className="absolute left-[27px] top-[15px] h-[80px] w-[70px]" />
            <p className="absolute left-[118px] top-[33px] w-[118px] font-poppins font-medium text-[18px] leading-[1.2] text-[rgba(7,0,59,0.8)]">
              Regular<br />Checkup
            </p>
          </motion.div>

          <motion.div
            {...pop(0.95)}
            style={badgeStyleB}
            className="absolute right-[43px] top-[492px] h-[85px] w-[224px] rounded-[30px] bg-[rgba(246,249,255,0.81)] shadow-[0px_0px_29px_0px_rgba(42,167,255,0.16)] backdrop-blur-[12px]"
          >
            <img src="/figma/hero-smile.svg" alt="" aria-hidden className="absolute left-[22px] top-[20px] h-[44px] w-[44px]" />
            <p className="absolute left-[74px] top-[16px] font-poppins font-semibold text-[24px] leading-[33.6px] text-[#1B3C74]">84k+</p>
            <p className="absolute left-[74px] top-[44px] font-poppins font-normal text-[17px] leading-[28px] text-[#77829D] whitespace-nowrap">Happy Patients</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
