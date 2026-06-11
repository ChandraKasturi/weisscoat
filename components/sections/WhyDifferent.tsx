type CardData = { icon: string; title: string; body: string };
type Row = { left: CardData; right: CardData };

const ROWS: Row[] = [
  {
    left: { icon: "/figma/wd-icon-1-left.svg", title: "Generalized Models", body: "Provide broad, generalized answers from public medical data sets that lack clinical nuance." },
    right: { icon: "/figma/wd-icon-1-right.svg", title: "Personalized Persona", body: "Learns your specific style, prescription logic, and clinical vocabulary for notes that sound like you." },
  },
  {
    left: { icon: "/figma/wd-icon-2-left.svg", title: "Manual Workflows", body: "One-size-fits-all workflows that disrupt clinic operations and require heavy manual prompt engineering." },
    right: { icon: "/figma/wd-icon-2-right.png", title: "Ambient Integration", body: "Aligns seamlessly to your established routine via voice capture; simply speak naturally to input data." },
  },
  {
    left: { icon: "/figma/wd-icon-3-left.svg", title: "Isolated Consults", body: "Intelligence disconnects the moment the patient leaves the clinic door, leading to documentation gaps." },
    right: { icon: "/figma/wd-icon-3-right.svg", title: "Continuous Care Tether", body: "Acts as a continuous safety tether monitoring post-care outcomes and generating patient-friendly summaries." },
  },
];

function LeftCard({ icon, title, body }: CardData) {
  return (
    <div className="relative flex flex-1 items-start gap-4 sm:gap-6 rounded-[20px] lg:rounded-tl-[100px] lg:rounded-bl-[100px] lg:rounded-tr-none lg:rounded-br-none border border-[rgba(193,201,191,0.3)] bg-[#F5F6F2] opacity-80 p-5 sm:p-6 lg:py-[32px] lg:pl-[52px] lg:pr-[32px]">
      <img src={icon} alt="" aria-hidden className="h-[56px] sm:h-[72px] lg:h-[84px] w-[56px] sm:w-[72px] lg:w-[84px] flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="font-satoshi font-bold text-[13px] sm:text-[15px] lg:text-[18px] leading-[20px] tracking-[1.4px] text-[#171717]">Standard Approach</p>
        <p className="mt-2 font-satoshi font-bold text-[18px] sm:text-[20px] lg:text-[24px] leading-[1.3] lg:leading-[36px] text-[#414942]">{title}</p>
        <p className="mt-2 font-satoshi font-normal text-[13px] sm:text-[14px] lg:text-[16px] leading-[1.45] lg:leading-[24px] text-[#414942]">{body}</p>
      </div>
    </div>
  );
}

function RightCard({ icon, title, body }: CardData) {
  return (
    <div className="relative flex flex-1 items-start gap-4 sm:gap-6 rounded-[20px] lg:rounded-tr-[100px] lg:rounded-br-[100px] lg:rounded-tl-none lg:rounded-bl-none border-2 border-[rgba(193,201,191,0.3)] bg-[#F9FFEF] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] p-5 sm:p-6 lg:py-[32px] lg:pl-[40px] lg:pr-[100px]">
      <img src={icon} alt="" aria-hidden className="h-[56px] sm:h-[72px] lg:h-[84px] w-[56px] sm:w-[72px] lg:w-[84px] flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="font-satoshi font-bold text-[13px] sm:text-[15px] lg:text-[18px] leading-[20px] tracking-[1.4px] text-[#316342]">WEISSCOAT INTELLIGENCE</p>
        <p className="mt-2 font-satoshi font-bold text-[18px] sm:text-[20px] lg:text-[24px] leading-[1.3] lg:leading-[36px] text-[#1A1C1E]">{title}</p>
        <p className="mt-2 font-satoshi font-normal text-[13px] sm:text-[14px] lg:text-[16px] leading-[1.45] lg:leading-[24px] text-[#1A1C1E]">{body}</p>
      </div>
    </div>
  );
}

export default function WhyDifferent() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:pt-[82px] lg:pb-[100px] px-4 sm:px-6 lg:px-8" data-name="Why Weisscoat is Radically Different">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col items-center gap-3 lg:gap-[16px]">
          <p className="font-satoshi font-medium text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.25] text-black text-center">
            Why Weisscoat is Radically Different
          </p>
          <p className="font-satoshi font-normal text-[13px] sm:text-[14px] lg:text-[16px] leading-[1.5] text-[#1D1D1D] text-center max-w-[900px]">
            Beyond simple automation, we&rsquo;ve built a clinical intelligence
            layer that adapts to you, not the other way around.
          </p>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-[60px] mx-auto max-w-[1330px] flex flex-col gap-6 lg:gap-[32px]">
          {ROWS.map((row, i) => (
            <div key={i} className="flex flex-col lg:flex-row gap-4 lg:gap-[22px]">
              <LeftCard {...row.left} />
              <RightCard {...row.right} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
