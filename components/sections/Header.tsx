"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, MapPin, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Digital Persona", href: "#digital-persona" },
  { label: "Value Proposition", href: "#value-proposition" },
  { label: "Platform", href: "#platform" },
  { label: "About Us", href: "#about" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        boxShadow: scrolled
          ? "0 1px 2px 0 rgb(0 0 0 / 0.05)"
          : "0 0 0 0 rgb(0 0 0 / 0)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-white"
    >
      {/* === Top utility bar (#EAF6C9) === */}
      <div className="hidden w-full bg-[#EAF6C9] md:block">
        <div className="mx-auto flex h-10 max-w-[1440px] items-center justify-between px-8 lg:px-12">
          <div className="flex items-center gap-6 font-display text-[14px] text-[#444446]">
            <span className="font-semibold">Contact Us: +91 9955446890</span>
            <span aria-hidden className="h-4 w-px bg-[#444446]/30" />
            <span className="font-semibold">Email: weisscoat@gmail.com</span>
          </div>
          <button
            type="button"
            className="flex items-center gap-2 font-display text-[14px] text-black transition-opacity hover:opacity-70"
          >
            <MapPin size={16} className="text-[#454d59]" />
            Hyderabad
            <ChevronDown size={16} className="text-[#454d59]" />
          </button>
        </div>
      </div>

      {/* === Main nav === */}
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 lg:px-12">
        <a href="#home" aria-label="Weisscoat" className="flex shrink-0 items-center">
          <Image
            src="/figma/weisscoat-logo.png"
            alt="Weisscoat"
            width={175}
            height={54}
            priority
            className="h-[44px] w-auto md:h-[54px]"
          />
        </a>

        <nav className="hidden items-center gap-[30px] lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-display text-[16px] font-medium tracking-[-0.25px] text-[#454d59] transition-colors duration-200 hover:text-brand-headline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden rounded-[10px] bg-brand-sage px-6 py-3 font-poppins text-[15px] font-medium text-white transition-transform duration-200 hover:scale-[1.02] lg:inline-flex"
          >
            Book a Demo
          </button>
          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex items-center justify-center text-brand-headline lg:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
