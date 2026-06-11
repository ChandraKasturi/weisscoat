type Condition = {
  icon: string;
  name: string;
  details: string;
};

const CONDITIONS: Condition[] = [
  { icon: "/figma/hiw-cond-fever.svg", name: "Fever", details: "duration, temperature pattern, chills, cough, throat pain." },
  { icon: "/figma/hiw-cond-diabetes.svg", name: "Diabetes", details: "sugar readings, medication adherence, fatigue, dietary habits." },
  { icon: "/figma/hiw-cond-bp.svg", name: "Blood Pressure", details: "recent BP readings, dizziness, headache, chest discomfort." },
  { icon: "/figma/hiw-cond-knee.svg", name: "Knee Pain", details: "precise location, swelling, past injury history, mobility limits." },
  { icon: "/figma/hiw-cond-stomach.svg", name: "Stomach Pain", details: "location, food relationship, vomiting, acidity, bowel changes." },
];

const DASHED_CONNECTOR =
  "linear-gradient(180deg, #5B6A5A 0%, #5B6A5A 50%, transparent 50%, transparent 100%)";

type Step = { num: string; title: string; body: string; extra?: "conditions" };

const STEPS: Step[] = [
  { num: "01", title: "Patient Registration", body: "Secure registration using mobile numbers and OTP. Supports linking multiple family profiles to a single mobile account." },
  { num: "02", title: "Clinic & Doctor Selection", body: "Patients easily search or select their clinic, view live doctor availability, and book appointments." },
  { num: "03", title: "AI Pre-Screening", body: "A sophisticated triage engine collects essential data through condition-specific questioning:", extra: "conditions" },
  { num: "04", title: "Doctor Review", body: "The physician accesses the dashboard to view the structured pre-screening notes, vitals, and chronological medical history." },
  { num: "05", title: "Consultation & Voice Summary", body: "The clinical visit takes place, concluded by a rapid 30-second doctor voice summary." },
  { num: "06", title: "AI-Generated Care Plan", body: "LLM engines convert raw voice audio into structured prescriptions, lifestyle precautions, test advice, and follow-up milestones." },
  { num: "07", title: "Post-Care Monitoring", body: "Automated patient check-ins are deployed over WhatsApp, SMS, or app notifications, functioning as a digital safety tether." },
  { num: "08", title: "Clinical Intelligence Layer", body: "Past clinical decisions are aggregated, allowing doctors to search their historical treatment patterns and find similar past cases." },
];

function ConditionCard({ icon, name, details }: Condition) {
  return (
    <div className="flex flex-col gap-[8px] rounded-[16px] border border-[#F9FFEF] bg-[#F5FFE4] p-[16px] sm:p-[21px]">
      <div className="flex items-center gap-[8px]">
        <img src={icon} alt="" aria-hidden className="h-[16px] w-[16px]" />
        <p className="font-inter font-semibold text-[14px] sm:text-[16px] leading-[24px] text-[#5B6A5A]">{name}</p>
      </div>
      <p className="font-inter font-normal text-[12px] sm:text-[14px] leading-[18px] sm:leading-[20px] text-[#414942]">{details}</p>
    </div>
  );
}

function StepRow({ step, isLast }: { step: Step; isLast: boolean }) {
  return (
    <div className="relative flex gap-4 sm:gap-6 lg:gap-[32px] items-start pb-12 sm:pb-16 lg:pb-[64px]">
      {!isLast && (
        <div
          aria-hidden
          className="absolute left-[19px] sm:left-[23px] lg:left-[27px] top-[48px] sm:top-[56px] lg:top-[60px] bottom-[-4px] w-[2px]"
          style={{ backgroundImage: DASHED_CONNECTOR, backgroundSize: "100% 12px", backgroundRepeat: "repeat-y" }}
        />
      )}
      <div className="relative z-10 flex h-[40px] sm:h-[48px] lg:h-[56px] w-[40px] sm:w-[48px] lg:w-[56px] shrink-0 items-center justify-center rounded-full bg-[#5B6A5A] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.10),0px_4px_6px_-4px_rgba(0,0,0,0.10)]">
        <p className="font-inter font-bold text-[13px] sm:text-[14px] lg:text-[16px] leading-[20px] sm:leading-[22px] lg:leading-[24px] text-white text-center">
          {step.num}
        </p>
      </div>
      <div className="flex flex-1 flex-col gap-2 sm:gap-3 lg:gap-[12px] pt-1 sm:pt-[4px] min-w-0">
        <p className="font-satoshi font-medium text-[18px] sm:text-[22px] lg:text-[26px] leading-[1.3] lg:leading-[36px] text-[#1A1C1E]">
          {step.title}
        </p>
        <p className="font-satoshi font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.55] lg:leading-[28px] text-[#414942]">
          {step.body}
        </p>
        {step.extra === "conditions" && (
          <div className="mt-2 sm:mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-[16px]">
            {CONDITIONS.map((c) => (
              <ConditionCard key={c.name} {...c} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-[82px] px-4 sm:px-6 lg:px-8" data-name="How It Works">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-[36px]">
          <p className="font-satoshi font-medium text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.25] text-black text-center">
            How It Works: The Complete Care Journey
          </p>
          <p className="font-satoshi font-normal text-[13px] sm:text-[14px] lg:text-[16px] leading-[1.5] text-[#1D1D1D] text-center max-w-[850px]">
            From initial patient registration to long-term recovery monitoring,
            Weisscoat structures every phase of the clinical experience.
          </p>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-[60px] mx-auto max-w-[1024px]">
          {STEPS.map((step, i) => (
            <StepRow key={step.num} step={step} isLast={i === STEPS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
