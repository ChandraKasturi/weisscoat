function Card({ src, title, body }: { src: string; title: string; body: string }) {
  return (
    <div className="bg-[var(--neutral\/white,white)] border border-[var(--neutral\/border-light,#f0f2eb)] border-solid content-stretch flex flex-col gap-[20px] items-center overflow-clip px-[28px] py-[32px] relative rounded-[var(--radius\/xl,24px)] shrink-0 w-[290px] text-center">
      <img alt="" src={src} className="object-contain shrink-0 size-[120px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[26px] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/primary,#1a201c)]">
        {title}
      </p>
      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#555f58)]">
        {body}
      </p>
    </div>
  );
}

export default function ProblemGrid() {
  return (
    <div className="bg-[var(--neutral\/white,white)] content-stretch flex flex-col gap-[48px] items-center p-[80px] relative size-full" data-node-id="6:2" data-name="Modern Clinics Overloaded Section">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center not-italic overflow-clip relative shrink-0 text-center">
        <p className="font-['Inter:Bold'] font-bold leading-[48px] relative shrink-0 text-[40px] text-[color:var(--text\/primary,#1a201c)] tracking-[-0.8px] whitespace-nowrap">
          Modern clinics are overloaded.
        </p>
        <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[17px] text-[color:var(--text\/secondary,#555f58)] w-[720px]">
          <p className="leading-[28px] mb-0">Doctors are losing time to data, forms, and follow-ups. Most clinical visits begin with</p>
          <p className="leading-[28px]">repeated questions, scattered records, manual typing, and rushed conversations.</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0">
        <Card
          src="/figma/icons/problem-intake.png"
          title="Repetitive Patient Intake"
          body="Patients repeatedly share the same history, symptoms, and previous reports, wasting valuable consultation time."
        />
        <Card
          src="/figma/icons/problem-docs.png"
          title="Documentation Burden"
          body="Doctors spend too much time typing clinical notes instead of actively engaging with patients."
        />
        <Card
          src="/figma/icons/problem-postcare.png"
          title="Weak Post-Care"
          body="Patients often miss medications, ignore warning signs, or delay follow-up visits after leaving the clinic."
        />
        <Card
          src="/figma/icons/problem-wisdom.png"
          title="Lost Clinical Wisdom"
          body="Years of clinical reasoning and successful treatment patterns remain buried in unstructured records."
        />
      </div>
    </div>
  );
}
