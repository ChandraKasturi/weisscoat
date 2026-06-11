"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_ITEMS: { label: string; href: string }[] = [
  { label: "Home", href: "#top" },
  { label: "Digital Persona", href: "#digital-persona" },
  { label: "Value Proposition", href: "#why-different" },
  { label: "Platform", href: "#platform" },
  { label: "About Us", href: "#our-story" },
];

// Login routes by stakeholder. Placeholders (#) until the login flows exist.
const LOGIN_OPTIONS: { label: string; href: string }[] = [
  { label: "Clinic", href: "#" },
  { label: "Doctor", href: "#" },
  { label: "Lab", href: "#" },
];

export default function NavigationBar() {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const loginRef = useRef<HTMLDivElement>(null);

  // Close the desktop login menu on outside click / Escape.
  useEffect(() => {
    if (!loginOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (loginRef.current && !loginRef.current.contains(e.target as Node)) {
        setLoginOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLoginOpen(false);
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [loginOpen]);

  return (
    <div className="bg-white w-full relative" data-name="Navigation Bar">
      <div className="mx-auto max-w-[1440px] flex items-center justify-between px-4 sm:px-6 lg:px-12 xl:px-[80px] py-3 lg:py-[18px]">
        <a href="/" className="shrink-0" aria-label="Weisscoat home">
          <img
            src="/figma/weisscoat-logo-figma.svg"
            alt="Weisscoat"
            width={174}
            height={54}
            className="h-[36px] w-[116px] sm:h-[44px] sm:w-[142px] lg:h-[54px] lg:w-[174px] block"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-[20px] xl:gap-[30px] font-satoshi font-medium text-[14px] xl:text-[18px] leading-[normal] text-[#454D59] tracking-[-0.25px] whitespace-nowrap">
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hover:text-[#2B412A] transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop login + dropdown */}
        <div className="hidden lg:block relative" ref={loginRef}>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={loginOpen}
            onClick={() => setLoginOpen((v) => !v)}
            className="inline-flex h-[40px] xl:h-[46px] w-[100px] xl:w-[124px] items-center justify-center gap-[6px] rounded-[5px] bg-[#5B6A5A] hover:bg-[#4A5849] font-satoshi font-bold text-[16px] xl:text-[20px] leading-none text-white transition-colors"
          >
            Login
            <ChevronDown
              size={18}
              className={"transition-transform duration-200 " + (loginOpen ? "rotate-180" : "")}
            />
          </button>
          {loginOpen && (
            <div
              role="menu"
              className="absolute right-0 top-[calc(100%+8px)] z-50 w-[160px] overflow-hidden rounded-[8px] border border-black/5 bg-white shadow-[0px_12px_30px_rgba(0,0,0,0.12)]"
            >
              {LOGIN_OPTIONS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  role="menuitem"
                  onClick={() => setLoginOpen(false)}
                  className="block px-4 py-[12px] font-satoshi font-medium text-[16px] leading-none text-[#2B412A] hover:bg-[#F5FFE4] transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-[40px] w-[40px] items-center justify-center rounded-md text-[#2B412A]"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden border-t border-black/5 bg-white px-4 sm:px-6 py-4">
          <nav className="flex flex-col gap-2 font-satoshi font-medium text-[16px] text-[#454D59]">
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="py-2 hover:text-[#2B412A] transition-colors"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            {/* Login → tap to reveal Clinic / Doctor / Lab */}
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={loginOpen}
              onClick={() => setLoginOpen((v) => !v)}
              className="mt-2 inline-flex h-[44px] items-center justify-center gap-[6px] rounded-[5px] bg-[#5B6A5A] hover:bg-[#4A5849] font-satoshi font-bold text-[16px] leading-none text-white transition-colors"
            >
              Login
              <ChevronDown
                size={18}
                className={"transition-transform duration-200 " + (loginOpen ? "rotate-180" : "")}
              />
            </button>
            {loginOpen && (
              <div role="menu" className="mt-1 flex flex-col overflow-hidden rounded-[8px] border border-black/5">
                {LOGIN_OPTIONS.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    role="menuitem"
                    onClick={() => {
                      setLoginOpen(false);
                      setOpen(false);
                    }}
                    className="px-4 py-[14px] font-satoshi font-medium text-[16px] leading-none text-[#2B412A] hover:bg-[#F5FFE4] transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
            )}
          </nav>
        </div>
      )}
    </div>
  );
}
