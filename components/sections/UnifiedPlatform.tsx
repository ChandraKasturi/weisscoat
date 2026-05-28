function PlatformCard({
  iconBg,
  emoji,
  title,
  body,
}: {
  iconBg: string;
  emoji: string;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-[var(--neutral\/white,white)] content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[32px] relative rounded-[var(--radius\/xl,24px)] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.04)] shrink-0 w-[620px]">
      <div className={`${iconBg} overflow-clip relative rounded-[var(--radius\\/md,12px)] shrink-0 size-[56px]`}>
        <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[30px] left-[16px] not-italic text-[24px] text-black top-[13px] whitespace-nowrap">
          {emoji}
        </p>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[28px] not-italic relative shrink-0 text-[22px] text-[color:var(--text\/primary,#1a201c)] whitespace-nowrap">
        {title}
      </p>
      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal h-[72px] leading-[24px] not-italic relative shrink-0 text-[15px] text-[color:var(--text\/secondary,#555f58)] w-[556px]">
        {body}
      </p>
    </div>
  );
}

export default function UnifiedPlatform() {
  return (
    <div className="bg-[var(--brand\/sage,#d4e6d0)] content-stretch flex flex-col gap-[48px] items-center p-[80px] relative size-full" data-node-id="12:2" data-name="Unified Clinical Operations Platform">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center not-italic overflow-clip relative shrink-0 text-center" data-node-id="12:3">
        <p className="font-['Inter:Bold'] font-bold leading-[44px] relative shrink-0 text-[36px] text-[color:var(--text\/primary,#1a201c)] tracking-[-0.8px] w-[900px]" data-node-id="12:4">
          Unified Clinical Operations Platform
        </p>
        <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[15px] text-[color:var(--text\/secondary,#555f58)] w-[820px]" data-node-id="12:5">
          <p className="leading-[24px] mb-0">An AI-powered healthcare ecosystem that streamlines patient visits, doctor consultations, lab workflows, post-care</p>
          <p className="leading-[24px]">engagement, clinic onboarding, and clinical intelligence through connected digital infrastructure.</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0" data-node-id="12:6">
        <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0">
          <PlatformCard iconBg="bg-[var(--accent\/blue,#4682dc)]" emoji="📅" title="Patient Visit Management" body="Registration, profile linking, doctor schedules, booking engines, and waiting-time flows." />
          <PlatformCard iconBg="bg-[var(--brand\/primary,#5b8c5a)]" emoji="🩺" title="Doctor Consultation Panel" body="Waiting lists, screening insights, pre-consultation AI notes, diagnosis capture, and voice interfaces." />
        </div>
        <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0">
          <PlatformCard iconBg="bg-[var(--accent\/orange,#f5a050)]" emoji="🧪" title="Lab Test Infrastructure" body="Test recommendation slips, unique test codes, lab-side uploads, and automated clinical dashboard routing." />
          <PlatformCard iconBg="bg-[var(--accent\/yellow,#f5c850)]" emoji="💊" title="Post Consultation Care" body="Automated medication reminders, lifestyle rules, follow-up scheduling, and patient feedback collection." />
        </div>
      </div>
    </div>
  );
}
