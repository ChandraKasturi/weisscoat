function Step({
  num,
  bg,
  title,
  body,
  children,
}: {
  num: string;
  bg: string;
  title: string;
  body: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0">
      <div className={`${bg} overflow-clip relative rounded-[var(--radius\\/full,999px)] shrink-0 size-[64px]`}>
        <p className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[26px] left-[18px] not-italic text-[20px] text-[color:var(--text\/inverse,white)] top-[19px] whitespace-nowrap">
          {num}
        </p>
      </div>
      <div className="[word-break:break-word] bg-[var(--neutral\/white,white)] content-stretch flex flex-col gap-[12px] items-start not-italic overflow-clip px-[28px] py-[24px] relative rounded-[var(--radius\/xl,24px)] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)] shrink-0 w-[912px]">
        <p className="font-['Inter:Semi_Bold'] font-semibold leading-[26px] relative shrink-0 text-[19px] text-[color:var(--text\/primary,#1a201c)] whitespace-nowrap">
          {title}
        </p>
        <p className="font-['Inter:Regular'] font-normal h-[44px] leading-[22px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#555f58)] w-[856px]">
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
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[1000px]">
        <Step num="01" bg="bg-[var(--accent\/blue,#4682dc)]" title="Patient Registration" body="Secure registration using mobile numbers and OTP. Supports linking multiple family profiles to a single mobile account." />
        <Step num="02" bg="bg-[var(--accent\/orange,#f5a050)]" title="Clinic & Doctor Selection" body="Patients easily search or select their clinic, view live doctor availability, and book appointments." />
        <Step
          num="03"
          bg="bg-[var(--brand\/primary,#5b8c5a)]"
          title="AI Pre Screening"
          body="A sophisticated triage engine collects essential data through condition-specific questioning across multiple parameters."
        >
          <div className="content-stretch flex gap-[8px] items-start overflow-clip relative shrink-0">
            <div className="bg-[var(--brand\/sage,#d4e6d0)] content-stretch flex items-start overflow-clip px-[14px] py-[6px] relative rounded-[var(--radius\/full,999px)] shrink-0">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[18px] not-italic relative shrink-0 text-[12px] text-[color:var(--accent\/red,#dc5a5a)] whitespace-nowrap">
                Fever
              </p>
            </div>
            <div className="bg-[var(--brand\/sage,#d4e6d0)] content-stretch flex items-start overflow-clip px-[14px] py-[6px] relative rounded-[var(--radius\/full,999px)] shrink-0">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[18px] not-italic relative shrink-0 text-[12px] text-[color:var(--accent\/orange,#f5a050)] whitespace-nowrap">
                Diabetes
              </p>
            </div>
            <div className="bg-[var(--brand\/sage,#d4e6d0)] content-stretch flex items-start overflow-clip px-[14px] py-[6px] relative rounded-[var(--radius\/full,999px)] shrink-0">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[18px] not-italic relative shrink-0 text-[12px] text-[color:var(--accent\/blue,#4682dc)] whitespace-nowrap">
                Blood Pressure
              </p>
            </div>
            <div className="bg-[var(--brand\/sage,#d4e6d0)] content-stretch flex items-start overflow-clip px-[14px] py-[6px] relative rounded-[var(--radius\/full,999px)] shrink-0">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[18px] not-italic relative shrink-0 text-[12px] text-[color:var(--accent\/yellow,#f5c850)] whitespace-nowrap">
                Knee Pain
              </p>
            </div>
            <div className="bg-[var(--brand\/sage,#d4e6d0)] content-stretch flex items-start overflow-clip px-[14px] py-[6px] relative rounded-[var(--radius\/full,999px)] shrink-0">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[18px] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/primary,#5b8c5a)] whitespace-nowrap">
                Stomach Pain
              </p>
            </div>
          </div>
        </Step>
        <Step num="04" bg="bg-[var(--accent\/yellow,#f5c850)]" title="Doctor Review" body="The physician accesses the dashboard to view the structured pre-screening notes, vitals, and chronological medical history." />
        <Step num="05" bg="bg-[var(--accent\/red,#dc5a5a)]" title="Consultation & Voice Summary" body="The clinical visit takes place, concluded by a rapid 30-second doctor voice summary." />
        <Step num="06" bg="bg-[var(--brand\/primary,#5b8c5a)]" title="AI-Generated Care Plan" body="LLM engines convert raw voice audio into structured prescriptions, lifestyle precautions, test advice, and follow-up milestones." />
        <Step num="07" bg="bg-[var(--accent\/blue,#4682dc)]" title="Post-Care Monitoring" body="Automated patient check-ins are deployed over WhatsApp, SMS, or app notifications, functioning as a digital safety tether." />
        <Step num="08" bg="bg-[var(--accent\/orange,#f5a050)]" title="Clinical Intelligence Layer" body="Past clinical decisions are aggregated, allowing doctors to search their historical treatment patterns and find similar past cases." />
      </div>
    </div>
  );
}
