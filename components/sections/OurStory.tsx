const imgEllipse = "https://www.figma.com/api/mcp/asset/ef9e2f04-a41f-42c2-98bc-ccbc960a8c07";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/008e1dff-85c5-4c4c-99d1-7a079c4e8ba1";
const imgEllipse2 = "https://www.figma.com/api/mcp/asset/2930ab3b-c4e2-4a0f-ae0f-bae3061ec0b7";
const imgEllipse3 = "https://www.figma.com/api/mcp/asset/1dac9409-9655-4a1a-8ac8-ae75b40e2991";
const imgEllipse4 = "https://www.figma.com/api/mcp/asset/a52814e9-4448-4c0b-be12-23afa82706ca";
const imgEllipse5 = "https://www.figma.com/api/mcp/asset/c3f0e47c-66c5-426e-8310-0a36fca97ddd";
const imgEllipse6 = "https://www.figma.com/api/mcp/asset/b2d944e0-97de-4738-9675-71c684281288";
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
      <div className="bg-gradient-to-r from-[#2e472e] h-[480px] overflow-clip relative rounded-[var(--radius\/2xl,32px)] shrink-0 to-[#5c8c59] w-[560px]" data-node-id="13:3">
        <div className="absolute left-[80px] size-[12px] top-[80px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} /></div>
        <div className="absolute left-[180px] size-[16px] top-[60px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} /></div>
        <div className="absolute left-[320px] size-[8px] top-[100px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse2} /></div>
        <div className="absolute left-[420px] size-[20px] top-[140px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse3} /></div>
        <div className="absolute left-[100px] size-[14px] top-[200px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse4} /></div>
        <div className="absolute left-[250px] size-[10px] top-[180px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse5} /></div>
        <div className="absolute left-[380px] size-[18px] top-[220px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse6} /></div>
        <div className="absolute left-[450px] size-[12px] top-[280px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} /></div>
        <div className="absolute left-[60px] size-[16px] top-[320px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} /></div>
        <div className="absolute left-[200px] size-[8px] top-[360px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse2} /></div>
        <div className="absolute left-[340px] size-[14px] top-[380px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse4} /></div>
        <div className="absolute left-[470px] size-[10px] top-[400px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse5} /></div>
        <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[200px] left-[190px] not-italic text-[180px] text-black top-[140px] whitespace-nowrap">
          👨‍⚕️
        </p>
      </div>
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
