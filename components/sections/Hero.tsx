export default function Hero() {
  return (
    <div className="bg-white px-2 pt-3 sm:pt-4 lg:pt-[22px] pb-6 sm:pb-8 lg:pb-[40px]">
      <div className="relative w-full overflow-hidden rounded-[20px] sm:rounded-[28px] lg:rounded-[40px] bg-white">
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
            <div className="flex items-center gap-[6px] rounded-[12px] border border-[#c6c6cd] bg-[#B4E9B7] px-[13px] py-[5px] self-start">
              <svg width="15" height="14" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
                <circle cx="12" cy="12" r="10" fill="#2B412A" />
                <path d="M8 12.5l2.6 2.6L16 9.6" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="font-inter font-medium text-[11px] sm:text-[12px] leading-[16px] text-[#0B1C30] whitespace-nowrap">
                Clinical Intelligence, Personalized.
              </p>
            </div>

            <h1 className="font-satoshi font-light not-italic text-[#2B412A] text-[30px] sm:text-[40px] md:text-[44px] lg:text-[54px] leading-[1.15] tracking-[-0.5px]">
              Personalized <span className="font-satoshi font-bold">AI Agents</span>{" "}
              for Smarter Clinical Care
            </h1>

            <p className="font-satoshi font-normal not-italic text-[13px] sm:text-[15px] md:text-[16px] leading-[1.6] text-[rgba(7,0,59,0.75)] max-w-[560px]">
              Weisscoat helps doctors build AI-powered clinical assistants
              trained around their unique consultation style, transforming every
              consultation into a structured clinical intelligence system.
            </p>

            <button
              type="button"
              className="self-start inline-flex items-center justify-center rounded-[10px] bg-[#5B6A5A] hover:bg-[#4A5849] transition-colors px-[24px] sm:px-[32px] py-[12px] sm:py-[16px] font-poppins font-medium text-[14px] sm:text-[16px] leading-[1.1] text-white"
            >
              Book a Demo
            </button>
          </div>

          {/* RIGHT: doctor + ring + floating badges */}
          <div className="relative md:flex-1 w-full h-[340px] sm:h-[420px] md:h-auto md:min-h-[520px] md:self-stretch">
            <img
              src="/figma/hero-doctor-ring.svg"
              alt=""
              aria-hidden
              width={539}
              height={539}
              className="absolute right-[-14%] md:right-[-16%] top-[4%] h-[88%] aspect-square w-auto select-none pointer-events-none"
            />
            <img
              src="/figma/hero-doctor-figma.png"
              alt="Doctor in white coat"
              className="absolute right-[4%] md:right-[2%] top-0 h-full w-auto object-cover object-top pointer-events-none select-none"
            />

            {/* Regular Checkup badge — overlapping image left, higher */}
            <div className="absolute left-0 sm:left-[4%] bottom-[34%] sm:bottom-[38%] flex items-center gap-[10px] sm:gap-[12px] h-[60px] sm:h-[72px] md:h-[78px] px-[12px] sm:px-[16px] rounded-[18px] sm:rounded-[24px] bg-[rgba(246,249,255,0.92)] shadow-[0px_0px_29px_0px_rgba(42,167,255,0.16)] backdrop-blur-[12px] z-10">
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
            </div>

            {/* 84k+ Happy Patients badge — bottom-right */}
            <div className="absolute right-0 sm:right-[2%] bottom-[10%] sm:bottom-[14%] flex items-center gap-[8px] sm:gap-[10px] h-[54px] sm:h-[64px] md:h-[70px] px-[12px] sm:px-[14px] rounded-[18px] sm:rounded-[24px] bg-[rgba(246,249,255,0.92)] shadow-[0px_0px_29px_0px_rgba(42,167,255,0.16)] backdrop-blur-[12px] z-10">
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
            </div>
          </div>
        </div>

        {/* Desktop layout — pinned absolute (per Figma), only at xl (1280+) where it fits */}
        <div className="hidden xl:block relative h-[678px]">
          <img
            src="/figma/hero-doctor-ring.svg"
            alt=""
            aria-hidden
            className="absolute left-[794px] top-[59px] h-[539px] w-[539px] select-none pointer-events-none"
          />
          <img
            src="/figma/hero-doctor-figma.png"
            alt="Doctor in white coat"
            className="absolute left-[804px] top-[46px] h-[706px] w-[413px] object-cover object-top pointer-events-none select-none"
          />

          <div className="absolute left-[40px] top-[122px] flex items-center gap-[6px] rounded-[12px] border border-[#c6c6cd] bg-[#B4E9B7] px-[13px] py-[5px]">
            <svg width="15" height="14" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
              <circle cx="12" cy="12" r="10" fill="#2B412A" />
              <path d="M8 12.5l2.6 2.6L16 9.6" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="font-inter font-medium text-[12px] leading-[16px] text-[#0B1C30] whitespace-nowrap">
              Clinical Intelligence, Personalized.
            </p>
          </div>

          <h1 className="absolute left-[40px] top-[191px] w-[645px] font-satoshi font-light not-italic text-[#2B412A] text-[60px] leading-[1.25] tracking-[-0.5px]">
            Personalized <span className="font-satoshi font-bold">AI Agents</span>
            <br />
            for Smarter Clinical Care
          </h1>

          <p className="absolute left-[40px] top-[355px] w-[623px] font-satoshi font-normal not-italic text-[18px] leading-[1.7] text-[rgba(7,0,59,0.75)]">
            Weisscoat helps doctors build AI-powered clinical assistants trained
            around their unique consultation style, transforming every
            consultation into a structured clinical intelligence system.
          </p>

          <button
            type="button"
            className="absolute left-[40px] top-[476px] inline-flex items-center justify-center rounded-[10px] bg-[#5B6A5A] hover:bg-[#4A5849] transition-colors px-[32px] py-[20px] font-poppins font-medium text-[17px] leading-[1.1] text-white shadow-[0px_18px_28px_0px_rgba(42,167,255,0.10)]"
          >
            Book a Demo
          </button>

          <div className="absolute left-[618px] top-[431px] h-[115px] w-[265px] rounded-[30px] bg-[rgba(246,249,255,0.81)] shadow-[0px_0px_29px_0px_rgba(42,167,255,0.16)] backdrop-blur-[12px]">
            <img src="/figma/hero-checkup-shield.svg" alt="" aria-hidden className="absolute left-[27px] top-[15px] h-[80px] w-[70px]" />
            <p className="absolute left-[118px] top-[33px] w-[118px] font-poppins font-medium text-[18px] leading-[1.2] text-[rgba(7,0,59,0.8)]">
              Regular<br />Checkup
            </p>
          </div>

          <div className="absolute left-[1173px] top-[492px] h-[85px] w-[224px] rounded-[30px] bg-[rgba(246,249,255,0.81)] shadow-[0px_0px_29px_0px_rgba(42,167,255,0.16)] backdrop-blur-[12px]">
            <img src="/figma/hero-smile.svg" alt="" aria-hidden className="absolute left-[22px] top-[20px] h-[44px] w-[44px]" />
            <p className="absolute left-[74px] top-[16px] font-poppins font-semibold text-[24px] leading-[33.6px] text-[#1B3C74]">84k+</p>
            <p className="absolute left-[74px] top-[44px] font-poppins font-normal text-[17px] leading-[28px] text-[#77829D] whitespace-nowrap">Happy Patients</p>
          </div>
        </div>
      </div>
    </div>
  );
}
