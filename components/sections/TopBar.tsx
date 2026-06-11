export default function TopBar() {
  return (
    <div className="bg-[#EAF6C9] w-full" data-name="Top Bar">
      <div className="mx-auto max-w-[1440px] flex items-center justify-between gap-2 px-2 sm:px-6 lg:px-12 xl:px-[80px] h-[28px] sm:h-[40px]">
        <div className="flex items-center gap-1.5 sm:gap-3 lg:gap-[18px] min-w-0 whitespace-nowrap font-satoshi font-bold text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] leading-none text-[#444446]">
          <p className="truncate">Contact Us: +91 9955446890</p>
          <span aria-hidden className="h-[10px] sm:h-[16px] lg:h-[18px] w-px bg-[#444446]/40 shrink-0" />
          <p className="truncate">Email: weisscoat@gmail.com</p>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 whitespace-nowrap font-satoshi font-normal text-[9px] sm:text-[12px] md:text-[14px] lg:text-[16px] leading-none text-black shrink-0">
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-[10px] w-[10px] sm:h-[14px] sm:w-[14px] lg:h-[18px] lg:w-[18px] shrink-0"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <p>Hyderabad</p>
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-[8px] w-[8px] sm:h-[12px] sm:w-[12px] lg:h-[14px] lg:w-[14px] shrink-0"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
