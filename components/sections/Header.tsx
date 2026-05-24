"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

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
        borderBottomColor: scrolled
          ? "rgba(107, 127, 63, 0.2)"
          : "rgba(107, 127, 63, 0.1)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-brand-cream border-b"
      style={{ borderBottomWidth: 1 }}
    >
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6 md:px-12">
        <a
          href="#home"
          className="font-display text-2xl font-semibold text-brand-olive"
        >
          Weisscoat
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-sm font-medium text-brand-charcoal/75 transition-colors duration-200 hover:text-brand-olive"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center">
          <button
            type="button"
            className="hidden rounded-full border border-brand-olive bg-transparent px-5 py-2 text-sm font-medium text-brand-olive transition-colors duration-200 hover:bg-brand-olive hover:text-brand-cream md:inline-flex"
          >
            Login
          </button>
          <button
            type="button"
            aria-label="Open menu"
            className="inline-flex items-center justify-center text-brand-olive md:hidden"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
