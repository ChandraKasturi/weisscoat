"use client";

import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";

const FIGMA_WIDTH = 1440;

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function ScaledFrame({ children }: { children: ReactNode }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [outerHeight, setOuterHeight] = useState<number | undefined>(undefined);

  useIsoLayoutEffect(() => {
    const node = innerRef.current;
    if (!node) return;

    const update = () => {
      const vw = window.innerWidth;
      const s = Math.min(vw / FIGMA_WIDTH, 1);
      setScale(s);
      setOuterHeight(node.offsetHeight * s);
    };

    update();
    window.addEventListener("resize", update);
    const ro = new ResizeObserver(update);
    ro.observe(node);

    return () => {
      window.removeEventListener("resize", update);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      className="w-full bg-white overflow-x-hidden"
      style={{ height: outerHeight }}
    >
      <div
        ref={innerRef}
        className="w-[1440px] origin-top-left"
        style={{ transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
}
