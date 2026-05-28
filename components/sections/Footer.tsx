function Field({ label, full = false }: { label: string; full?: boolean }) {
  return (
    <div className={`content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0 ${full ? "w-[496px]" : "w-[232px]"}`}>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1a201c)] whitespace-nowrap">
        {label}
      </p>
      <div className={`bg-[var(--neutral\\/bg-light,#f5f7f3)] border border-[var(--neutral\\/border-light,#f0f2eb)] border-solid content-stretch flex h-[44px] items-start overflow-clip px-[14px] py-[12px] relative rounded-[var(--radius\\/sm,6px)] shrink-0 ${full ? "w-[496px]" : "w-[232px]"}`}>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#555f58)] whitespace-nowrap">
          Enter here
        </p>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[var(--brand\/primary-dark,#3a5f3a)] content-stretch flex flex-col gap-[48px] items-start pt-[80px] px-[80px] relative size-full" data-node-id="16:9" data-name="Footer Section">
      <div className="content-stretch flex gap-[80px] items-start overflow-clip relative shrink-0" data-node-id="16:10">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start not-italic overflow-clip relative shrink-0 w-[600px]" data-node-id="16:11">
          <p className="font-['Inter:Semi_Bold'] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[color:var(--brand\/primary-light,#a6c8a5)] tracking-[1.5px] whitespace-nowrap" data-node-id="16:12">{`LET'S KEEP IN TOUCH`}</p>
          <p className="font-['Inter:Bold'] font-bold h-[80px] leading-[40px] relative shrink-0 text-[32px] text-[color:var(--text\/inverse,white)] tracking-[-0.5px] w-[600px]" data-node-id="16:13">
            Weisscoat Personalized Clinical Intelligence for the Future of Healthcare.
          </p>
          <div className="content-stretch flex flex-col font-['Inter:Regular'] font-normal gap-[16px] items-start leading-[24px] overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="16:14">
            <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0">
              <p className="relative shrink-0 text-[18px] text-black">📞</p>
              <p className="relative shrink-0 text-[15px] text-[color:var(--text\/inverse,white)]">+1 555 505 5050</p>
            </div>
            <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0">
              <p className="relative shrink-0 text-[18px] text-black">✉️</p>
              <p className="relative shrink-0 text-[15px] text-[color:var(--text\/inverse,white)]">hello@weisscoat.ai</p>
            </div>
            <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0">
              <p className="relative shrink-0 text-[18px] text-black">🕐</p>
              <p className="relative shrink-0 text-[15px] text-[color:var(--text\/inverse,white)]">Mon - Sat, 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
        <div className="bg-[var(--neutral\/white,white)] content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[32px] relative rounded-[var(--radius\/xl,24px)] shrink-0 w-[560px]" data-node-id="16:24">
          <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[32px] not-italic relative shrink-0 text-[24px] text-[color:var(--text\/primary,#1a201c)] whitespace-nowrap" data-node-id="16:25">
            Contact Us
          </p>
          <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0">
            <Field label="Name *" />
            <Field label="Role *" />
          </div>
          <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0">
            <Field label="Clinic Name *" />
            <Field label="Phone No *" />
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start overflow-clip relative shrink-0">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1a201c)] whitespace-nowrap">
              Tell us more... (Optional)
            </p>
            <div className="bg-[var(--neutral\/bg-light,#f5f7f3)] border border-[var(--neutral\/border-light,#f0f2eb)] border-solid content-stretch flex flex-col h-[80px] items-start overflow-clip px-[14px] py-[12px] relative rounded-[var(--radius\/sm,6px)] shrink-0 w-[496px]">
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#555f58)] whitespace-nowrap">
                Enter here
              </p>
            </div>
          </div>
          <div className="bg-[var(--brand\/primary,#5b8c5a)] content-stretch flex h-[50px] items-center justify-center overflow-clip px-[32px] py-[14px] relative rounded-[var(--radius\/full,999px)] shrink-0 w-[496px]">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[22px] not-italic relative shrink-0 text-[16px] text-[color:var(--text\/inverse,white)] whitespace-nowrap">
              Submit
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip py-[32px] relative shrink-0" data-node-id="16:50">
        <div className="bg-[rgba(255,255,255,0.1)] h-px relative shrink-0 w-[1280px]" />
        <div className="content-stretch flex h-[50px] items-center justify-between overflow-clip relative shrink-0 w-[1280px]">
          <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0">
            <div className="bg-[var(--neutral\/white,white)] overflow-clip relative rounded-[var(--radius\/sm,6px)] shrink-0 size-[32px]">
              <p className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[22px] left-[10px] not-italic text-[18px] text-[color:var(--brand\/primary,#5b8c5a)] top-[5px] whitespace-nowrap">
                W
              </p>
            </div>
            <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[26px] not-italic relative shrink-0 text-[20px] text-[color:var(--text\/inverse,white)] whitespace-nowrap">
              Weisscoat
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex font-['Inter:Medium'] font-medium gap-[28px] items-start leading-[20px] not-italic overflow-clip relative shrink-0 text-[14px] text-[color:var(--text\/inverse,white)] whitespace-nowrap">
            <p className="opacity-85 relative shrink-0">Home</p>
            <p className="opacity-85 relative shrink-0">Platform</p>
            <p className="opacity-85 relative shrink-0">How It Works</p>
            <p className="opacity-85 relative shrink-0">For Clinics</p>
            <p className="opacity-85 relative shrink-0">About</p>
            <p className="opacity-85 relative shrink-0">Testimonials</p>
            <p className="opacity-85 relative shrink-0">{`FAQ's`}</p>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[20px] not-italic opacity-60 relative shrink-0 text-[13px] text-[color:var(--text\/inverse,white)] whitespace-nowrap">
          Weisscoat Personalized Clinical Intelligence for the Future of Healthcare. © 2026 All rights reserved.
        </p>
      </div>
    </div>
  );
}
