import Image from "next/image";

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

function Twitter({ size = 18 }: IconProps) {
  return (
    <svg {...svgProps(size)} aria-hidden="true">
      <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z" />
    </svg>
  );
}

function Linkedin({ size = 18 }: IconProps) {
  return (
    <svg {...svgProps(size)} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function Instagram({ size = 18 }: IconProps) {
  return (
    <svg {...svgProps(size)} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function Facebook({ size = 18 }: IconProps) {
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

const navColumns: { heading: string; links: string[] }[] = [
  {
    heading: "Product",
    links: ["Home", "Platform", "How It Works", "Testimonials"],
  },
  {
    heading: "Audience",
    links: ["For Doctors", "For Clinics", "For Patients"],
  },
  {
    heading: "Company",
    links: ["About", "FAQ's", "Contact", "Careers"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-headline px-6 py-16 text-white md:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/figma/weisscoat-logo.png"
              alt="Weisscoat"
              width={180}
              height={56}
              className="h-[44px] w-auto brightness-0 invert"
            />
            <p className="mt-5 max-w-[340px] font-display text-[14.5px] leading-[1.65] text-white/75">
              Weisscoat — Personalized Clinical Intelligence for the Future of Healthcare.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialIcons.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white/20"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {navColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="font-display text-[13px] font-semibold uppercase tracking-[0.16em] text-white">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="font-display text-[14px] text-white/70 transition-colors duration-200 hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/15 pt-8 sm:flex-row sm:items-center">
          <p className="font-display text-[12.5px] text-white/55">
            © {new Date().getFullYear()} Weisscoat. All rights reserved.
          </p>
          <p className="font-display text-[12.5px] text-white/55">Privacy · Terms · Cookies</p>
        </div>
      </div>
    </footer>
  );
}
