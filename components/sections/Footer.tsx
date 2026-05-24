type IconProps = { size?: number };

function svgProps(size: number) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
}

function Twitter({ size = 24 }: IconProps) {
  return (
    <svg {...svgProps(size)} aria-hidden="true">
      <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z" />
    </svg>
  );
}

function Linkedin({ size = 24 }: IconProps) {
  return (
    <svg {...svgProps(size)} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function Instagram({ size = 24 }: IconProps) {
  return (
    <svg {...svgProps(size)} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function Facebook({ size = 24 }: IconProps) {
  return (
    <svg {...svgProps(size)} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const socialIcons = [
  { Icon: Twitter, label: "Twitter", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Facebook, label: "Facebook", href: "#" },
];

const navigateLinks = [
  "Home",
  "Platform",
  "How It Works",
  "For Clinics",
  "About",
  "Testimonials",
  "FAQ",
];

const contactLines = [
  "+1 555 505 5050",
  "hello@weisscoat.ai",
  "Mon–Sat, 9:00 AM – 6:00 PM",
];

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-brand-cream">
      {children}
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-olive px-6 py-16 text-brand-cream md:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div className="font-display text-2xl font-semibold text-brand-cream">
              Weisscoat
            </div>
            <p className="mt-4 text-sm text-brand-cream/80">
              Personalized Clinical Intelligence for the Future of Healthcare.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialIcons.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-cream/10 text-brand-cream transition-colors duration-200 hover:bg-brand-cream/20"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <ColumnHeading>Navigate</ColumnHeading>
            <ul className="mt-4 space-y-2">
              {navigateLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="text-sm text-brand-cream/70 transition-colors duration-200 hover:text-brand-cream"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnHeading>Contact</ColumnHeading>
            <ul className="mt-4 space-y-2">
              {contactLines.map((line) => (
                <li
                  key={line}
                  className="text-sm text-brand-cream/70"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnHeading>Get Started</ColumnHeading>
            <form className="mt-4 space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-md border-0 bg-brand-cream/10 px-4 py-2.5 text-sm text-brand-cream placeholder:text-brand-cream/50 focus:outline-none focus:ring-2 focus:ring-brand-cream/30"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-brand-gold px-4 py-2.5 text-sm font-medium text-brand-charcoal transition-colors duration-200 hover:bg-brand-gold/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-brand-cream/15 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-brand-cream/60">
            © 2026 Weisscoat. All rights reserved.
          </p>
          <p className="text-xs text-brand-cream/60">
            Privacy · Terms · Cookies
          </p>
        </div>
      </div>
    </footer>
  );
}
