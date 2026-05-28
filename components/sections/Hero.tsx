const imgEllipse = "https://www.figma.com/api/mcp/asset/416d56db-20df-4c03-9959-5e3de64037ff";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/409f57d1-28e2-49b7-9abc-bd170654e987";
const imgFrame = "https://www.figma.com/api/mcp/asset/95bb8367-c6cd-4eb0-b93f-a8e5686f8cc8";

export default function Hero() {
  return (
    <div className="bg-[var(--neutral\/white,white)] content-stretch flex flex-col items-start pb-[80px] pt-[32px] px-[80px] relative size-full" data-node-id="5:2" data-name="Hero Section">
      <div className="bg-[var(--brand\/sage,#d4e6d0)] content-stretch flex items-end overflow-clip pl-[64px] pt-[64px] relative rounded-[var(--radius\/2xl,32px)] shrink-0 w-full" data-node-id="5:3" data-name="Hero Card">
        <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip pb-[64px] relative shrink-0" data-node-id="5:4" data-name="Hero Left Content">
          <div className="bg-[var(--neutral\/white,white)] content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[var(--radius\/full,999px)] shrink-0" data-node-id="5:5" data-name="Frame">
            <div className="relative shrink-0 size-[8px]" data-node-id="5:6" data-name="Ellipse">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--brand\/primary,#5b8c5a)] whitespace-nowrap" data-node-id="5:7">
              Clinical Intelligence, Personalized.
            </p>
          </div>
          <div className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[0] not-italic relative shrink-0 text-[56px] text-[color:var(--text\/primary,#1a201c)] tracking-[-1.5px] w-[560px]" data-node-id="5:8">
            <p className="leading-[64px] mb-0">Personalized AI Agents</p>
            <p className="leading-[64px]">for Smarter Clinical Care</p>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal h-[84px] leading-[28px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/secondary,#555f58)] w-[540px]" data-node-id="5:9">
            Weisscoat helps doctors build AI-powered clinical assistants trained around their unique consultation style, transforming every consultation into a structured clinical intelligence system.
          </p>
          <div className="[word-break:break-word] bg-[var(--brand\/primary,#5b8c5a)] content-stretch flex gap-[12px] items-center leading-[20px] not-italic overflow-clip px-[32px] py-[18px] relative rounded-[var(--radius\/full,999px)] shrink-0 text-[16px] text-[color:var(--text\/inverse,white)] whitespace-nowrap" data-node-id="5:10" data-name="Frame">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0" data-node-id="5:11">
              Book a Demo
            </p>
            <p className="font-['Inter:Bold'] font-bold relative shrink-0" data-node-id="5:12">
              →
            </p>
          </div>
        </div>
        <div className="flex flex-row items-end self-stretch">
          <div className="h-full overflow-clip relative shrink-0 w-[560px]" data-node-id="5:13" data-name="Hero Right">
            <div className="absolute left-[80px] size-[440px] top-[40px]" data-node-id="5:14" data-name="Ellipse">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} />
            </div>
            <img
              alt=""
              src="/figma/icons/hero-doctor.png"
              className="absolute h-[440px] left-[110px] object-contain object-bottom top-[40px] w-[380px]"
              data-node-id="5:15"
            />
            <div className="absolute bg-[var(--neutral\/white,white)] content-stretch flex gap-[12px] items-center left-[20px] overflow-clip pl-[16px] pr-[20px] py-[12px] rounded-[var(--radius\/full,999px)] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.08)] top-[100px]" data-node-id="5:17" data-name="Badge - Regular Checkup">
              <div className="bg-[var(--accent\/orange,#f5a050)] overflow-clip relative rounded-[var(--radius\/full,999px)] shrink-0 size-[36px]" data-node-id="5:18" data-name="Frame">
                <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[22px] left-[9px] not-italic text-[18px] text-[color:var(--text\/inverse,white)] top-[7px] whitespace-nowrap" data-node-id="5:19">
                  ⏱
                </p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Semi_Bold'] font-semibold items-start leading-[18px] not-italic overflow-clip relative shrink-0 text-[14px] text-[color:var(--text\/primary,#1a201c)] whitespace-nowrap" data-node-id="5:20" data-name="Frame">
                <p className="relative shrink-0" data-node-id="5:21">
                  Regular
                </p>
                <p className="relative shrink-0" data-node-id="5:22">
                  Checkup
                </p>
              </div>
            </div>
            <div className="absolute bg-[var(--neutral\/white,white)] content-stretch flex flex-col gap-[8px] items-center left-[380px] overflow-clip px-[20px] py-[16px] rounded-[var(--radius\/lg,16px)] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.08)] top-[380px]" data-node-id="5:23" data-name="Badge - 84k Patients">
              <div className="h-[28px] relative shrink-0 w-[88px]" data-node-id="5:24" data-name="Frame">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
              </div>
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[28px] not-italic relative shrink-0 text-[24px] text-[color:var(--text\/primary,#1a201c)] whitespace-nowrap" data-node-id="5:29">
                84k+
              </p>
              <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#555f58)] whitespace-nowrap" data-node-id="5:30">
                Happy Patients
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
