function Row({
  leftTitle,
  leftBody,
  rightTitle,
  rightBody,
}: {
  leftTitle: string;
  leftBody: string;
  rightTitle: string;
  rightBody: string;
}) {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0">
      <div className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/border-light,#f0f2eb)] border-solid content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[32px] py-[28px] relative rounded-[var(--radius\/xl,24px)] shrink-0 w-[620px]">
        <p className="font-['Inter:Semi_Bold'] font-semibold leading-[16px] relative shrink-0 text-[11px] text-[color:var(--text\/secondary,#555f58)] tracking-[1.5px] whitespace-nowrap">
          STANDARD APPROACH
        </p>
        <p className="font-['Inter:Semi_Bold'] font-semibold leading-[28px] relative shrink-0 text-[22px] text-[color:var(--text\/primary,#1a201c)] whitespace-nowrap">
          {leftTitle}
        </p>
        <p className="font-['Inter:Regular'] font-normal h-[66px] leading-[22px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#555f58)] w-[556px]">
          {leftBody}
        </p>
      </div>
      <div className="bg-[var(--brand\/sage,#d4e6d0)] border-2 border-[var(--brand\/primary,#5b8c5a)] border-solid content-stretch flex flex-col gap-[12px] items-start overflow-clip px-[32px] py-[28px] relative rounded-[var(--radius\/xl,24px)] shrink-0 w-[620px]">
        <div className="content-stretch flex gap-[8px] items-center leading-[16px] overflow-clip relative shrink-0 text-[color:var(--brand\/primary,#5b8c5a)] whitespace-nowrap">
          <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[12px]">✓</p>
          <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[11px] tracking-[1.5px]">
            WEISSCOAT INTELLIGENCE
          </p>
        </div>
        <p className="font-['Inter:Semi_Bold'] font-semibold leading-[28px] relative shrink-0 text-[22px] text-[color:var(--text\/primary,#1a201c)] whitespace-nowrap">
          {rightTitle}
        </p>
        <p className="font-['Inter:Regular'] font-normal h-[66px] leading-[22px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#555f58)] w-[556px]">
          {rightBody}
        </p>
      </div>
    </div>
  );
}

export default function WhyDifferent() {
  return (
    <div className="[word-break:break-word] bg-[var(--neutral\/bg-light,#f5f7f3)] content-stretch flex flex-col gap-[48px] items-center not-italic p-[80px] relative size-full" data-node-id="13:47" data-name="Why Weisscoat Different">
      <div className="content-stretch flex flex-col gap-[16px] items-center overflow-clip relative shrink-0 text-center">
        <p className="font-['Inter:Bold'] font-bold leading-[44px] relative shrink-0 text-[36px] text-[color:var(--text\/primary,#1a201c)] tracking-[-0.8px] whitespace-nowrap">
          Why Weisscoat is Radically Different
        </p>
        <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#555f58)] w-[720px]">
          <p className="leading-[26px] mb-0">{`Beyond simple automation, we've built a clinical intelligence layer that adapts`}</p>
          <p className="leading-[26px]">to you, not the other way around.</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0">
        <Row
          leftTitle="Generalized Models"
          leftBody="Provide broad, generalized answers from public medical data sets that lack clinical nuance."
          rightTitle="Personalized Persona"
          rightBody="Learns your specific style, prescription logic, and clinical vocabulary for notes that sound like you."
        />
        <Row
          leftTitle="Manual Workflows"
          leftBody="One-size-fits-all workflows that disrupt clinic operations and require heavy manual prompt engineering."
          rightTitle="Ambient Integration"
          rightBody="Aligns seamlessly to your established routine via voice capture; simply speak naturally to input data."
        />
        <Row
          leftTitle="Isolated Consults"
          leftBody="Intelligence disconnects the moment the patient leaves the clinic door, leading to documentation gaps."
          rightTitle="Continuous Care Tether"
          rightBody="Acts as a continuous safety tether monitoring post-care outcomes and generating patient-friendly summaries."
        />
      </div>
    </div>
  );
}
