type JourneyCard = {
  illustration: string;
  title: string;
  body: string;
};

const CARDS: JourneyCard[] = [
  {
    illustration: "/figma/pcj-illus1.png",
    title: "Pre-Screening & Data Gathering",
    body: "AI agents use the doctor’s unique questioning style to generate structured patient summaries.",
  },
  {
    illustration: "/figma/pcj-illus2.png",
    title: "Voice-Captured Consultation",
    body: "Doctors record voice summaries to operationalize their diagnostic rationale and treatment philosophy.",
  },
  {
    illustration: "/figma/pcj-illus3.png",
    title: "Automated Post-Care Tether",
    body: "The system monitors patient tracking data and triggers emergency alerts if thresholds are breached.",
  },
];

function JourneyCardItem({ illustration, title, body }: JourneyCard) {
  return (
    <div className="relative w-full max-w-[440px] mx-auto overflow-hidden rounded-[20px] border border-[#E9E9E9] bg-white shadow-[0px_-13px_50px_0px_rgba(66,66,66,0.10)]">
      <div className="bg-[#EBFDEA] flex items-center justify-center h-[260px] sm:h-[300px] lg:h-[336px] p-4">
        <img src={illustration} alt="" aria-hidden className="max-h-full w-auto select-none" />
      </div>
      <div className="px-5 sm:px-6 py-5 sm:py-6">
        <p className="font-satoshi font-medium text-[18px] sm:text-[22px] leading-[28px] sm:leading-[32px] tracking-[0.33px] text-[#121212]">
          {title}
        </p>
        <p className="mt-2 font-satoshi font-normal text-[14px] sm:text-[16px] leading-[22px] sm:leading-[29px] tracking-[0.32px] text-[#696969]">
          {body}
        </p>
      </div>
    </div>
  );
}

export default function PatientCareJourney() {
  return (
    <section className="bg-[#F9FFEF] py-12 sm:py-16 lg:py-[80px] px-4 sm:px-6 lg:px-8" data-name="Patient Care Journey">
      <div className="mx-auto max-w-[1440px]">
        <p className="font-satoshi font-medium text-[22px] sm:text-[26px] lg:text-[30px] leading-[28px] tracking-[-0.25px] text-[#414141] text-center">
          The Patient Care Journey
        </p>
        <p className="mt-3 sm:mt-4 max-w-[1020px] mx-auto font-satoshi font-normal text-[13px] sm:text-[14px] lg:text-[16px] leading-[1.6] text-[#606060] text-center">
          Weisscoat: Scaling Medical Expertise via Individualized AI Agents
        </p>

        {/* Top row: 3 cards */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[18px]">
          {CARDS.map((c) => (
            <JourneyCardItem key={c.title} {...c} />
          ))}
        </div>

        {/* Bottom row: dashboard + two feature cards */}
        <div className="mt-10 lg:mt-16 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <img
            src="/figma/pcj-dashboard.png"
            alt="Doctor interacting with AI-powered clinical intelligence holographic display"
            className="w-full lg:w-[544px] lg:flex-shrink-0 h-auto rounded-[8px] object-cover select-none"
          />

          <div className="flex-1 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-8 lg:gap-12 pt-2">
            <div className="flex-1">
              <img src="/figma/pcj-icon-records.svg" alt="" aria-hidden className="h-[72px] sm:h-[94px] w-[72px] sm:w-[94px]" />
              <p className="mt-4 font-satoshi font-normal text-[22px] sm:text-[28px] lg:text-[32px] leading-[1.25] tracking-[0.48px] text-[#121212]">
                Scalable Medical Personas
              </p>
              <p className="mt-3 font-satoshi font-normal text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.5] text-[#1A2738]">
                Individual AI agents learn a doctor&rsquo;s specific philosophy
                rather than relying on generalized models.
              </p>
            </div>

            <div className="flex-1">
              <img src="/figma/pcj-icon-ml.svg" alt="" aria-hidden className="h-[56px] sm:h-[66px] w-[56px] sm:w-[66px]" />
              <p className="mt-4 font-satoshi font-normal text-[22px] sm:text-[28px] lg:text-[32px] leading-[1.25] tracking-[0.48px] text-[#121212]">
                Permanent Intelligence Asset
              </p>
              <p className="mt-3 font-satoshi font-normal text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.5] text-[#1A2738]">
                Every interaction becomes a searchable data point, referencing
                past successful treatments for similar conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
