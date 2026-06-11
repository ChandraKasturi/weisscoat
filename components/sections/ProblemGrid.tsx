type CardData = {
  iconSrc: string;
  emoji: string;
  title: string;
  body: string;
};

const CARDS: CardData[] = [
  {
    iconSrc: "/figma/problem-icon-1.png",
    emoji: "🛠️",
    title: "Repetitive Patient Intake",
    body: "Patients repeatedly share the same history, symptoms, and previous reports, wasting valuable consultation time.",
  },
  {
    iconSrc: "/figma/problem-icon-2.png",
    emoji: "📢",
    title: "Documentation Burden",
    body: "Doctors spend too much time typing clinical notes instead of actively engaging with patients.",
  },
  {
    iconSrc: "/figma/problem-icon-3.png",
    emoji: "🚀",
    title: "Weak Post-Care",
    body: "Patients often miss medications, ignore warning signs, or delay follow-up visits after leaving the clinic.",
  },
  {
    iconSrc: "/figma/problem-icon-4.png",
    emoji: "✍",
    title: "Lost Clinical Wisdom",
    body: "Years of clinical reasoning and successful treatment patterns remain buried in unstructured records.",
  },
];

function ProblemCard({ iconSrc, emoji, title, body }: CardData) {
  return (
    <div className="flex h-[270px] sm:h-[290px] w-full max-w-[320px] mx-auto flex-col items-center gap-[24px] sm:gap-[32px] rounded-[8px] bg-white px-[15px] py-[24px] sm:py-[32px] drop-shadow-[0px_0px_16.4px_rgba(113,130,85,0.10)]">
      <div className="relative grid h-[80px] sm:h-[88px] w-[80px] sm:w-[88px] place-items-center rounded-full bg-white shadow-[0px_32px_32px_-12px_rgba(18,19,20,0.05)]">
        <span
          aria-hidden
          className="pointer-events-none absolute select-none text-[36px] sm:text-[40px] leading-[40px] opacity-50 blur-[12px]"
        >
          {emoji}
        </span>
        <img
          src={iconSrc}
          alt=""
          aria-hidden
          className="relative h-[36px] sm:h-[40px] w-[36px] sm:w-[40px] object-contain"
        />
      </div>
      <div className="flex w-full flex-col items-center gap-[8px] sm:gap-[12px] text-center">
        <p className="font-inter font-semibold text-[17px] sm:text-[20px] leading-[24px] sm:leading-[28px] text-[#121314]">
          {title}
        </p>
        <p className="font-inter font-normal text-[13px] sm:text-[14px] leading-[20px] sm:leading-[22px] text-[#7B848B]">
          {body}
        </p>
      </div>
    </div>
  );
}

export default function ProblemGrid() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-[120px] px-4 sm:px-6 lg:px-8" data-name="Modern Clinics Overloaded">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-[36px]">
          <p className="font-satoshi font-medium text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.25] text-black text-center">
            Modern clinics are overloaded.
          </p>
          <p className="font-satoshi font-normal text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.5] text-[#1D1D1D] text-center max-w-[850px]">
            Doctors are losing time to data, forms, and follow-ups. Most
            clinical visits begin with repeated questions, scattered records,
            manual typing, and rushed conversations.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 lg:mt-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 lg:gap-[18px]">
          {CARDS.map((card) => (
            <ProblemCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
