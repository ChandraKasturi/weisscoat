type PlatformCard = {
  icon: string;
  iconSize: number;
  iconBg: string;
  title: string;
  body: string;
};

const CARDS: PlatformCard[] = [
  { icon: "/figma/ucop-icon-1-visit.svg", iconSize: 30, iconBg: "#FFDED4", title: "Patient Visit Management", body: "Registration, profile linking, doctor schedules, booking engines, and waiting-time flows." },
  { icon: "/figma/ucop-icon-2-consult.svg", iconSize: 35, iconBg: "#FFEED4", title: "Doctor Consultation Panel", body: "Waiting lists, screening insights, pre-consultation AI notes, diagnosis capture, and voice interfaces." },
  { icon: "/figma/ucop-icon-3-lab.svg", iconSize: 35, iconBg: "#D4F0FF", title: "Lab Test Infrastructure", body: "Test recommendation slips, unique test codes, lab-side uploads, and automated clinical dashboard routing." },
  { icon: "/figma/ucop-icon-4-postcare.svg", iconSize: 35, iconBg: "#FFD4D4", title: "Post-Consultation Care", body: "Automated medication reminders, lifestyle rules, follow-up scheduling, and patient feedback collection." },
  { icon: "/figma/ucop-icon-5-onboarding.svg", iconSize: 35, iconBg: "#FFD4D4", title: "Doctor & Clinic Onboarding", body: "Profiles, clinic geo-tagging, medical licensing verification, voice calibration, and clinical persona training data." },
];

function CardView({ icon, iconSize, iconBg, title, body }: PlatformCard) {
  return (
    <div className="relative h-[201px] w-[260px] sm:w-[290px] lg:w-[308px] shrink-0 rounded-[10px] bg-white shadow-[0px_0px_9px_2px_rgba(0,0,0,0.05)]">
      <div
        className="absolute left-[20px] sm:left-[24px] top-[18px] flex h-[48px] w-[52px] items-center justify-center rounded-[10px]"
        style={{ backgroundColor: iconBg }}
      >
        <img src={icon} alt="" aria-hidden style={{ width: iconSize, height: iconSize }} />
      </div>
      <p className="absolute left-[20px] sm:left-[24px] right-[20px] sm:right-[24px] top-[80px] font-satoshi font-bold text-[16px] sm:text-[18px] leading-[1.373] text-[#331B3B]">
        {title}
      </p>
      <p className="absolute left-[20px] sm:left-[24px] right-[20px] sm:right-[24px] top-[108px] font-satoshi font-normal text-[13px] sm:text-[14px] leading-[1.45] tracking-[0.28px] text-[#414942]">
        {body}
      </p>
    </div>
  );
}

export default function UnifiedPlatform() {
  return (
    <section className="relative overflow-x-clip py-12 sm:py-16 lg:pt-[82px] lg:pb-[120px] px-4 sm:px-6 lg:px-0" data-name="Unified Clinical Operations Platform">
      <div aria-hidden className="absolute left-[-7px] top-0 h-[400px] sm:h-[480px] lg:h-[543px] w-[1293px] max-w-[120%] bg-[#F9FFEF] rounded-tr-[160px] sm:rounded-tr-[240px] lg:rounded-tr-[400px] pointer-events-none" />
      <img
        src="/figma/ucop-ellipse13.png"
        alt=""
        aria-hidden
        className="hidden md:block absolute right-[-200px] lg:right-auto lg:left-[915px] top-[80px] lg:top-[119px] h-[380px] lg:h-[498px] w-[400px] lg:w-[532px] select-none pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] flex flex-col items-center gap-3 sm:gap-4 lg:gap-[36px]">
        <p className="font-satoshi font-medium text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.25] text-black text-center">
          Unified Clinical Operations Platform
        </p>
        <p className="font-satoshi font-normal text-[13px] sm:text-[14px] lg:text-[16px] leading-[1.5] text-[#1D1D1D] text-center max-w-[900px] px-2">
          An AI-powered healthcare ecosystem that streamlines patient visits,
          doctor consultations, lab workflows, post-care engagement, clinic
          onboarding, and clinical intelligence through connected digital
          infrastructure.
        </p>
      </div>

      <div className="relative z-10 mt-8 sm:mt-12 lg:mt-[60px] overflow-x-auto px-4 sm:px-6 lg:px-[40px]">
        <div className="flex w-max gap-4 lg:gap-[20px] pb-3">
          {CARDS.map((c) => (
            <CardView key={c.title} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
