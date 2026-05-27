import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // === Brand palette (raw hex from Figma AzjfFFUaUEgGLHXT32vH2a) ===
        brand: {
          headline: "#2B412A",            // deep olive — headlines
          body: "rgba(7, 0, 59, 0.75)",   // bluish charcoal — body
          "body-strong": "#07003B",
          sage: "#5B6A5A",                // buttons / nav accents
          "mint-start": "#D1EFCF",
          "mint-end": "#EBFDEA",
          "mint-pill": "#B4E9B7",
          cream: "#F6FBE9",
          "cream-2": "#E5F5BD",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          "blue-dark": "#1B3C74",
          "blue-soft": "#77829D",
          "blue-deep": "#0B1C30",
        },
        surface: {
          white: "#FFFFFF",
          card: "rgba(246, 249, 255, 0.81)",
        },
        // shadcn tokens (variable-driven)
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      fontFamily: {
        sans: ["Satoshi", "var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Satoshi", "ui-sans-serif", "system-ui", "sans-serif"],
        poppins: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
        inter: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.875rem",
        "4xl": "2.5rem",
      },
      backgroundImage: {
        "hero-mint":
          "linear-gradient(184.7deg, #D1EFCF 7.9%, #EBFDEA 113.26%)",
      },
      boxShadow: {
        "blue-glow": "0px 0px 29px 0px rgba(42, 167, 255, 0.16)",
        "button-blue":
          "0px 100px 80px 0px rgba(42,167,255,0.07), 0px 41.778px 33.422px 0px rgba(42,167,255,0.05), 0px 22.336px 17.869px 0px rgba(42,167,255,0.04), 0px 12.522px 10.017px 0px rgba(42,167,255,0.04), 0px 6.65px 5.32px 0px rgba(42,167,255,0.03), 0px 2.767px 2.214px 0px rgba(42,167,255,0.02)",
        "card-soft":
          "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.06)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float-y": "float-y 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
