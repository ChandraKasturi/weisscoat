export default function Testimonials() {
  return (
    <div className="bg-[var(--neutral\/bg-light,#f5f7f3)] content-stretch flex flex-col gap-[48px] items-center p-[80px] relative size-full" data-node-id="14:50" data-name="Testimonials Section">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-center not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="14:53">
        <p className="font-['Inter:Semi_Bold'] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[color:var(--brand\/primary,#5b8c5a)] tracking-[1.5px]" data-node-id="14:51">{`SOCIAL PROOF & TESTIMONIALS`}</p>
        <p className="font-['Inter:Bold'] font-bold leading-[44px] relative shrink-0 text-[36px] text-[color:var(--text\/primary,#1a201c)] tracking-[-0.8px]" data-node-id="14:52">
          Trusted by physicians
        </p>
      </div>
      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold h-[108px] leading-[36px] not-italic relative shrink-0 text-[24px] text-[color:var(--text\/primary,#1a201c)] text-center tracking-[-0.3px] w-[1100px]" data-node-id="14:54">{`"Before Weisscoat, I spent too much time gathering basic history and typing notes. Now I start every consultation with structured context and can focus more on the patient."`}</p>
      <div className="bg-[var(--neutral\/white,white)] content-stretch flex gap-[32px] h-[200px] items-center overflow-clip px-[40px] py-[32px] relative rounded-[var(--radius\/xl,24px)] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.06)] shrink-0" data-node-id="14:55">
        <img
          alt=""
          src="/figma/icons/testimonial-rao.png"
          className="object-cover overflow-clip relative rounded-[var(--radius\/lg,16px)] shrink-0 h-[160px] w-[200px]"
          data-node-id="14:58"
        />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic overflow-clip relative shrink-0 w-[900px]" data-node-id="14:59">
          <p className="font-['Inter:Bold'] font-bold leading-[40px] relative shrink-0 text-[48px] text-[color:var(--brand\/primary,#5b8c5a)] whitespace-nowrap" data-node-id="14:60">{`"`}</p>
          <p className="font-['Inter:Regular'] font-normal h-[56px] leading-[28px] relative shrink-0 text-[18px] text-[color:var(--text\/primary,#1a201c)] w-[900px]" data-node-id="14:61">
            The most powerful part is the voice summary. I can record my reasoning quickly, and the system converts it into usable instructions and follow-up care.
          </p>
          <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="14:62">
            <p className="font-['Inter:Semi_Bold'] font-semibold leading-[22px] relative shrink-0 text-[16px] text-[color:var(--text\/primary,#1a201c)]" data-node-id="14:63">
              Dr. Ananya Rao
            </p>
            <p className="font-['Inter:Regular'] font-normal leading-[20px] relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#555f58)]" data-node-id="14:64">
              General Physician
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
