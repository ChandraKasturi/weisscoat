function ConditionPill({
  icon,
  label,
  color,
  body,
}: {
  icon: string;
  label: string;
  color: string;
  body: string;
}) {
  return (
    <div className="bg-[var(--brand\/sage,#d4e6d0)] content-stretch flex flex-col gap-[6px] items-start overflow-clip px-[16px] py-[12px] relative rounded-[var(--radius\/md,12px)] shrink-0 w-[270px]">
      <div className="content-stretch flex gap-[6px] items-center overflow-clip relative shrink-0">
        <p className="font-['Inter:Regular'] font-normal leading-[18px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1a201c)] whitespace-nowrap">
          {icon}
        </p>
        <p
          className="font-['Inter:Semi_Bold'] font-semibold leading-[18px] not-italic relative shrink-0 text-[13px] whitespace-nowrap"
          style={{ color }}
        >
          {label}
        </p>
      </div>
      <p className="font-['Inter:Regular'] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#555f58)] w-[238px]">
        {body}
      </p>
    </div>
  );
}

function Step({
  num,
  title,
  body,
  isLast,
  children,
}: {
  num: string;
  title: string;
  body: string;
  isLast?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[1000px]">
      <div className="flex flex-col items-center self-stretch shrink-0">
        <div className="bg-[var(--brand\/primary-dark,#3a5f3a)] flex items-center justify-center overflow-clip relative rounded-[var(--radius\/full,999px)] shrink-0 size-[36px]">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[16px] not-italic text-[12px] text-[color:var(--text\/inverse,white)] whitespace-nowrap">
            {num}
          </p>
        </div>
        {!isLast && (
          <div className="border-l-2 border-dashed border-[var(--brand\/primary-light,#a6c8a5)] flex-1 min-h-[32px] mt-[6px] mb-0" />
        )}
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[40px] pt-[4px] relative shrink-0 flex-1">
        <p className="font-['Inter:Semi_Bold'] font-semibold leading-[26px] relative shrink-0 text-[19px] text-[color:var(--text\/primary,#1a201c)]">
          {title}
        </p>
        <p className="font-['Inter:Regular'] font-normal leading-[22px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#555f58)]">
          {body}
        </p>
        {children}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <div className="bg-[var(--neutral\/bg-light,#f5f7f3)] content-stretch flex flex-col gap-[56px] items-center p-[80px] relative size-full" data-node-id="10:2" data-name="How It Works Section">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center not-italic overflow-clip relative shrink-0" data-node-id="10:3" data-name="Frame">
        <p className="font-['Inter:Semi_Bold'] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[color:var(--brand\/primary,#5b8c5a)] tracking-[1.5px] whitespace-nowrap">
          HOW IT WORKS
        </p>
        <p className="font-['Inter:Bold'] font-bold leading-[44px] relative shrink-0 text-[36px] text-[color:var(--text\/primary,#1a201c)] text-center tracking-[-0.8px] w-[900px]">
          How It Works: The Complete Care Journey
        </p>
        <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[16px] text-[color:var(--text\/secondary,#555f58)] text-center w-[720px]">
          <p className="leading-[26px] mb-0">From initial patient registration to long-term recovery monitoring, Weisscoat structures</p>
          <p className="leading-[26px]">every phase of the clinical experience.</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1000px]">
        <Step num="01" title="Patient Registration" body="Secure registration using mobile numbers and OTP. Supports linking multiple family profiles to a single mobile account." />
        <Step num="02" title="Clinic & Doctor Selection" body="Patients easily search or select their clinic, view live doctor availability, and book appointments." />
        <Step num="03" title="AI Pre-Screening" body="A sophisticated triage engine collects essential data through condition-specific questioning:">
          <div className="flex flex-wrap gap-[12px] mt-[4px]">
            <ConditionPill icon="🌡" label="Fever" color="#dc5a5a" body="duration, temperature pattern, chills, cough, throat pain." />
            <ConditionPill icon="💊" label="Diabetes" color="#f5a050" body="sugar readings, medication adherence, fatigue, dietary habits." />
            <ConditionPill icon="💗" label="Blood Pressure" color="#4682dc" body="recent BP readings, dizziness, headache, chest discomfort." />
            <ConditionPill icon="🦵" label="Knee Pain" color="#f5c850" body="precise location, swelling, past injury history, mobility limits." />
            <ConditionPill icon="🫃" label="Stomach Pain" color="#5b8c5a" body="location, food relationship, vomiting, acidity, bowel changes." />
          </div>
        </Step>
        <Step num="04" title="Doctor Review" body="The physician accesses the dashboard to view the structured pre-screening notes, vitals, and chronological medical history." />
        <Step num="05" title="Consultation & Voice Summary" body="The clinical visit takes place, concluded by a rapid 30-second doctor voice summary." />
        <Step num="06" title="AI-Generated Care Plan" body="LLM engines convert raw voice audio into structured prescriptions, lifestyle precautions, test advice, and follow-up milestones." />
        <Step num="07" title="Post-Care Monitoring" body="Automated patient check-ins are deployed over WhatsApp, SMS, or app notifications, functioning as a digital safety tether." />
        <Step num="08" title="Clinical Intelligence Layer" body="Past clinical decisions are aggregated, allowing doctors to search their historical treatment patterns and find similar past cases." isLast />
      </div>
    </div>
  );
}
