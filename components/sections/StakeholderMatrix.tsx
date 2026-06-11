type Bullet = { bold: string; tail: string };

type StakeholderColumn = {
  icon: string;
  iconSize: number;
  title: string;
  bullets: Bullet[];
};

const COLUMNS: StakeholderColumn[] = [
  {
    icon: "/figma/svm-icon-doctors.svg",
    iconSize: 35,
    title: "For Doctors",
    bullets: [
      { bold: "Focused consultations", tail: " starting from structured context rather than zero" },
      { bold: "Less typing, more", tail: " listening through voice-based note capture." },
      { bold: "Automated continuity", tail: " ensuring patients adhere to chronic care plans." },
      { bold: "Personalized clinical memory", tail: " that strengthens with every case." },
    ],
  },
  {
    icon: "/figma/svm-icon-clinics.svg",
    iconSize: 47,
    title: "For Clinics",
    bullets: [
      { bold: "Reduced front-desk workload", tail: " via automated intake and digital registration." },
      { bold: "Improved patient retention", tail: " and operational experience." },
      { bold: "Standardized workflows", tail: " for lab testing, consultations, and scheduling." },
      { bold: "Long-term institutional intelligence", tail: " capturing unique care patterns." },
    ],
  },
  {
    icon: "/figma/svm-icon-patients.svg",
    iconSize: 38,
    title: "For Patients",
    bullets: [
      { bold: "Less repetition;", tail: " no need to explain the medical issue multiple times." },
      { bold: "Crystal clear instructions", tail: " delivered directly to their phone in simple language." },
      { bold: "Timely reminders", tail: " for medicine and follow-ups over familiar channels." },
      { bold: "Family-friendly profiles", tail: " easily managed from a single mobile dashboard." },
    ],
  },
];

function ColumnView({ col, isMiddle }: { col: StakeholderColumn; isMiddle: boolean }) {
  return (
    <div
      className={
        "relative flex flex-col bg-white" +
        (isMiddle ? " md:z-10 md:shadow-[0px_5px_32.8px_11px_rgba(66,66,66,0.10)]" : "")
      }
    >
      <div className="flex h-[64px] sm:h-[72px] lg:h-[80px] items-center gap-[12px] bg-[#E8FFAE] px-4 sm:px-5 lg:px-[24px]">
        <img src={col.icon} alt="" aria-hidden style={{ width: col.iconSize, height: col.iconSize }} className="max-w-[36px] sm:max-w-none max-h-[36px] sm:max-h-none" />
        <p className="font-satoshi font-bold text-[16px] sm:text-[18px] lg:text-[22px] leading-[24px] text-[#003400] whitespace-nowrap">{col.title}</p>
      </div>
      {col.bullets.map((b, i) => {
        const tinted = i % 2 === 1;
        return (
          <div
            key={b.bold}
            className={
              "flex min-h-[76px] sm:min-h-[80px] lg:h-[88px] items-center px-4 sm:px-5 lg:px-[24px] py-3 sm:py-4" +
              (tinted ? " bg-[#F6FBE9] border-y-2 border-[#F9FFEB]" : "")
            }
          >
            <p className="font-satoshi font-medium text-[13px] sm:text-[14px] lg:text-[16px] leading-[20px] sm:leading-[22px] lg:leading-[24px] text-[#2E3760]">
              <span className="font-satoshi font-bold">{b.bold}</span>
              {b.tail}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default function StakeholderMatrix() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-[82px] px-4 sm:px-6 lg:px-8" data-name="Stakeholder Value Matrix">
      <div className="mx-auto max-w-[1440px]">
        <p className="font-satoshi font-medium text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.25] text-black text-center">
          Stakeholder Value Matrix
        </p>

        <div className="mt-8 sm:mt-12 lg:mt-[60px] mx-auto max-w-[1240px]">
          {/* Mobile: stack | tablet+: grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 overflow-hidden rounded-[10px] border border-[#E9E9E9] bg-white shadow-[0px_-13px_50px_0px_rgba(66,66,66,0.10)]">
            {COLUMNS.map((col, i) => (
              <ColumnView key={col.title} col={col} isMiddle={i === 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
