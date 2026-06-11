const SOCIALS = [
  { src: "/figma/footer-social-fb.svg", label: "Facebook", w: 18, h: 29 },
  { src: "/figma/footer-social-tw.svg", label: "Twitter", w: 29, h: 23 },
  { src: "/figma/footer-social-ig.svg", label: "Instagram", w: 29, h: 29 },
  { src: "/figma/footer-social-li.svg", label: "LinkedIn", w: 29, h: 27 },
  { src: "/figma/footer-social-yt.svg", label: "YouTube", w: 33, h: 23 },
];

const NAV_COL_1 = ["Home", "Platform", "How It Works", "For Clinics"];
const NAV_COL_2 = ["About", "Testimonials", "FAQ’s", "For Clinics"];

export default function Footer() {
  return (
    <footer data-name="Footer">
      <div className="bg-[#EDF6DC] py-8 sm:py-10 lg:py-[44px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1280px] flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-0">
          <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4 sm:gap-6 lg:gap-[20px] flex-wrap">
            <img
              src="/figma/footer-logo-figma.svg"
              alt="Weisscoat"
              width={370}
              height={116}
              className="h-[48px] w-[154px] sm:h-[64px] sm:w-[205px] lg:h-[116px] lg:w-[370px] block shrink-0"
            />
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-[22px] lg:mt-2 lg:pl-[24px]">
              {SOCIALS.map((s) => (
                <a key={s.label} href="#" aria-label={s.label}>
                  <img
                    src={s.src}
                    alt=""
                    aria-hidden
                    width={s.w}
                    height={s.h}
                    style={{ width: s.w, height: s.h }}
                    className="block hover:opacity-80 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-12 sm:gap-20 lg:gap-[200px] lg:pt-[16px]">
            <ul className="flex flex-col gap-3 lg:gap-[18px] font-satoshi font-medium text-[15px] lg:text-[18px] leading-[20px] text-[#281A40]">
              {NAV_COL_1.map((label) => (
                <li key={label}><a href="#" className="hover:text-[#5B6A5A] transition-colors">{label}</a></li>
              ))}
            </ul>
            <ul className="flex flex-col gap-3 lg:gap-[18px] font-satoshi font-medium text-[15px] lg:text-[18px] leading-[20px] text-[#281A40]">
              {NAV_COL_2.map((label) => (
                <li key={label}><a href="#" className="hover:text-[#5B6A5A] transition-colors">{label}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#5B6A5A] py-4 sm:py-5 lg:py-[19px] px-4">
        <p className="text-center font-satoshi font-normal text-[14px] sm:text-[18px] lg:text-[25px] leading-[1.5] lg:leading-[36px] tracking-[0.25px] text-white">
          Weisscoat &mdash; Personalized Clinical Intelligence for the Future of Healthcare.
        </p>
      </div>
    </footer>
  );
}
