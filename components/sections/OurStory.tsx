const BULLETS = [
  "AI-powered doctor consultation and voice-enabled workflows",
  "Smart patient registration, booking, and waiting management",
  "Integrated lab testing and automated clinical routing",
  "Automated medication reminders and follow-up care systems",
  "Doctor onboarding with licensing verification and clinic mapping",
  "Clinical intelligence engine with historical case insights and outcome tracking",
];

export default function OurStory() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-[82px] px-4 sm:px-6 lg:px-8" data-name="Our Story">
      <div className="mx-auto max-w-[1440px]">
        <p className="font-satoshi font-medium text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.25] text-black text-center">
          Our story
        </p>

        <div className="mt-8 sm:mt-12 lg:mt-[60px] flex flex-col xl:flex-row gap-8 xl:gap-[60px]">
          <img
            src="/figma/our-story-doctor-figma.png"
            alt="Doctor interacting with floating AI-powered clinical interfaces"
            className="w-full h-[300px] sm:h-[380px] md:h-[440px] lg:h-[500px] xl:h-[669px] xl:w-[620px] xl:flex-shrink-0 object-cover object-center rounded-[10px] select-none"
          />

          <div className="flex-1 flex flex-col gap-4 sm:gap-5 lg:gap-[24px] xl:pt-[30px]">
            <h2 className="font-satoshi font-light text-[28px] sm:text-[34px] lg:text-[44px] leading-[1.2] lg:leading-[1.23] text-black">
              Transforming Healthcare Through{" "}
              <span className="font-satoshi font-medium italic">
                Intelligent Clinical Infrastructure
              </span>
            </h2>

            <p className="font-satoshi font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.6] lg:leading-[1.73] text-[#414150]">
              We are building a connected healthcare ecosystem that simplifies
              patient care, empowers doctors with AI-assisted workflows, and
              enables clinics to operate through one unified digital platform.
              From consultations and lab management to post-care engagement and
              clinical intelligence, every module is designed to improve
              efficiency, accuracy, and patient outcomes.
            </p>

            <p className="mt-1 font-satoshi font-medium text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.51] text-[#414150]">
              As a partner, you&rsquo;ll be part of a system that supports:
            </p>

            <ul className="ml-6 list-disc font-satoshi italic font-normal text-[14px] sm:text-[16px] lg:text-[20px] leading-[1.5] lg:leading-[1.51] text-[#414150] space-y-1">
              {BULLETS.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
