function Column({
  iconBg,
  emoji,
  title,
  tickColor,
  items,
}: {
  iconBg: string;
  emoji: string;
  title: string;
  tickColor: string;
  items: string[];
}) {
  return (
    <div className="bg-[var(--neutral\/bg-light,#f5f7f3)] content-stretch flex flex-col gap-[20px] items-start overflow-clip px-[32px] py-[36px] relative rounded-[var(--radius\/xl,24px)] shrink-0 w-[412px]">
      <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0">
        <div className={`${iconBg} overflow-clip relative rounded-[var(--radius\\/md,12px)] shrink-0 size-[48px]`}>
          <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[28px] left-[12px] not-italic text-[22px] text-black top-[10px] whitespace-nowrap">
            {emoji}
          </p>
        </div>
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[30px] not-italic relative shrink-0 text-[24px] text-[color:var(--text\/primary,#1a201c)] whitespace-nowrap">
          {title}
        </p>
      </div>
      <div className="bg-[var(--neutral\/border-light,#f0f2eb)] h-px relative shrink-0 w-[348px]" />
      {items.map((it) => (
        <div key={it} className="[word-break:break-word] content-stretch flex gap-[12px] items-start leading-[22px] not-italic overflow-clip relative shrink-0 w-[348px]">
          <p className={`font-['Inter:Bold'] font-bold relative shrink-0 text-[16px] ${tickColor} whitespace-nowrap`}>
            ✓
          </p>
          <p className="font-['Inter:Regular'] font-normal h-[100px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#555f58)] w-[312px]">
            {it}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function StakeholderMatrix() {
  return (
    <div className="bg-[var(--neutral\/white,white)] content-stretch flex flex-col gap-[48px] items-center p-[80px] relative size-full" data-node-id="11:2" data-name="Stakeholder Value Matrix">
      <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[48px] not-italic relative shrink-0 text-[40px] text-[color:var(--text\/primary,#1a201c)] text-center tracking-[-0.8px] whitespace-nowrap" data-node-id="11:3">
        Stakeholder Value Matrix
      </p>
      <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0" data-node-id="11:4">
        <Column
          iconBg="bg-[var(--brand\/primary,#5b8c5a)]"
          emoji="👨‍⚕️"
          title="For Doctors"
          tickColor="text-[color:var(--brand\/primary,#5b8c5a)]"
          items={[
            "Focused consultations starting from structured context rather than zero",
            "Less typing, more listening through voice-based note capture.",
            "Automated continuity ensuring patients adhere to chronic care plans.",
            "Personalized clinical memory that strengthens with every case.",
          ]}
        />
        <Column
          iconBg="bg-[var(--accent\/blue,#4682dc)]"
          emoji="🏥"
          title="For Clinics"
          tickColor="text-[color:var(--accent\/blue,#4682dc)]"
          items={[
            "Reduced front desk workload via automated intake and digital registration.",
            "Improved patient retention and operational experience.",
            "Standardized workflows for lab testing, consultations, and scheduling.",
            "Long term institutional intelligence capturing unique care patterns.",
          ]}
        />
        <Column
          iconBg="bg-[var(--accent\/orange,#f5a050)]"
          emoji="🧑"
          title="For Patients"
          tickColor="text-[color:var(--accent\/orange,#f5a050)]"
          items={[
            "Less repetition; no need to explain the medical issue multiple times.",
            "Crystal clear instructions delivered directly to their phone in simple language.",
            "Timely reminders for medicine and follow-ups over familiar channels.",
            "Family-friendly profiles easily managed from a single mobile dashboard.",
          ]}
        />
      </div>
    </div>
  );
}
