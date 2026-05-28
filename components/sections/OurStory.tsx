const imgFrame = "https://www.figma.com/api/mcp/asset/494b7ea4-032c-4030-ac13-d61435122c9e";

function Bullet({ text }: { text: string }) {
  return (
    <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0">
      <div className="h-[24px] relative shrink-0 w-[6px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[22px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#555f58)] w-[580px]">
        {text}
      </p>
    </div>
  );
}

export default function OurStory() {
  return (
    <div className="bg-[var(--neutral\/white,white)] content-stretch flex gap-[64px] items-center p-[80px] relative size-full" data-node-id="13:2" data-name="Our Story Section">
      <img
        alt=""
        src="/figma/icons/story-doctor.png"
        className="h-[480px] object-cover overflow-clip relative rounded-[var(--radius\/2xl,32px)] shrink-0 w-[560px]"
        data-node-id="13:3"
      />
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[620px]" data-node-id="13:17">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/primary,#5b8c5a)] tracking-[1.5px] whitespace-nowrap" data-node-id="13:18">
          OUR STORY
        </p>
        <div className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[0] not-italic relative shrink-0 text-[32px] text-[color:var(--text\/primary,#1a201c)] tracking-[-0.5px] w-[620px]" data-node-id="13:19">
          <p className="leading-[40px] mb-0">Transforming Healthcare Through</p>
          <p className="leading-[40px]">Intelligent Clinical Infrastructure</p>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal h-[144px] leading-[24px] not-italic relative shrink-0 text-[15px] text-[color:var(--text\/secondary,#555f58)] w-[620px]" data-node-id="13:20">
          We are building a connected healthcare ecosystem that simplifies patient care, empowers doctors with AI-assisted workflows, and enables clinics to operate through one unified digital platform. From consultations and lab management to post-care engagement and clinical intelligence, every module is designed to improve efficiency, accuracy, and patient outcomes.
        </p>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[24px] not-italic relative shrink-0 text-[15px] text-[color:var(--text\/primary,#1a201c)] whitespace-nowrap" data-node-id="13:21">{`As a partner, you'll be part of a system that supports:`}</p>
        <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0">
          <Bullet text="AI-powered doctor consultation and voice-enabled workflows" />
          <Bullet text="Smart patient registration, booking, and waiting management" />
          <Bullet text="Integrated lab testing and automated clinical routing" />
          <Bullet text="Automated medication reminders and follow-up care systems" />
          <Bullet text="Doctor onboarding with licensing verification and clinic mapping" />
          <Bullet text="Clinical intelligence engine with historical case insights and outcome tracking" />
        </div>
      </div>
    </div>
  );
}
