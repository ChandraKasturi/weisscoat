const imgEllipse = "https://www.figma.com/api/mcp/asset/416d56db-20df-4c03-9959-5e3de64037ff";

export default function Hero() {
  return (
    <div className="bg-[var(--neutral\/white,white)] content-stretch flex flex-col items-start pb-[80px] pt-[32px] px-[80px] relative size-full" data-node-id="5:2" data-name="Hero Section">
      <div
        className="content-stretch flex items-end overflow-clip pl-[64px] pt-[64px] relative rounded-[var(--radius\/2xl,32px)] shrink-0 w-full"
        style={{ background: "linear-gradient(135deg, #eaf5ec 0%, #f5fbf6 55%, #ffffff 100%)" }}
        data-node-id="5:3"
        data-name="Hero Card"
      >
        <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip pb-[64px] relative shrink-0" data-node-id="5:4" data-name="Hero Left Content">
          <div className="bg-[var(--neutral\/white,white)] content-stretch flex gap-[8px] items-center overflow-clip px-[16px] py-[8px] relative rounded-[var(--radius\/full,999px)] shrink-0" data-node-id="5:5" data-name="Frame">
            <div className="relative shrink-0 size-[8px]" data-node-id="5:6" data-name="Ellipse">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--brand\/primary,#5b8c5a)] whitespace-nowrap" data-node-id="5:7">
              Clinical Intelligence, Personalized.
            </p>
          </div>
          <div className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[56px] text-[color:var(--text\/primary,#1a201c)] tracking-[-1.5px] w-[560px]" data-node-id="5:8">
            <p className="leading-[64px] mb-0">
              Personalized <span className="font-['Inter:Bold'] font-bold">AI Agents</span>
            </p>
            <p className="leading-[64px]">for Smarter Clinical Care</p>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal h-[84px] leading-[28px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/secondary,#555f58)] w-[540px]" data-node-id="5:9">
            Weisscoat helps doctors build AI-powered clinical assistants trained around their unique consultation style, transforming every consultation into a structured clinical intelligence system.
          </p>
          <div className="[word-break:break-word] bg-[#5b6a5a] content-stretch flex items-center justify-center leading-[20px] not-italic overflow-clip px-[32px] py-[16px] relative rounded-[10px] shrink-0 text-[16px] text-[color:var(--text\/inverse,white)] whitespace-nowrap" data-node-id="5:10" data-name="Frame">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0" data-node-id="5:11">
              Book a Demo
            </p>
          </div>
        </div>
        <div className="flex flex-row items-end self-stretch">
          <div className="h-full overflow-visible relative shrink-0 w-[560px]" data-node-id="5:13" data-name="Hero Right">
            <div className="absolute left-[10px] top-[180px] size-[140px] rounded-full border-[1.5px] border-[#a6c8a5]/25" />
            <div className="absolute left-[380px] top-[120px] size-[240px] rounded-full border-[1.5px] border-transparent border-r-[#5b6a5a]/35" />
            <img
              alt=""
              src="/figma/icons/hero-ring.png"
              className="absolute block left-[100px] size-[480px] top-[-60px] object-contain opacity-90"
              data-node-id="5:14"
            />
            <img
              alt=""
              src="/figma/icons/hero-doctor.png"
              className="absolute h-[460px] left-[80px] object-contain object-bottom top-[20px] w-[400px] z-10"
              data-node-id="5:15"
            />
            <div className="absolute bg-[var(--neutral\/white,white)] content-stretch flex gap-[16px] items-center left-[-20px] overflow-clip pl-[16px] pr-[28px] py-[18px] rounded-[24px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.08)] top-[400px] z-20" data-node-id="5:17" data-name="Badge - Regular Checkup">
              <div className="bg-[#e7f1e6] flex items-center justify-center relative rounded-[var(--radius\/full,999px)] shrink-0 size-[40px]" data-node-id="5:18" data-name="Frame">
                <svg viewBox="0 0 24 24" fill="none" className="size-[22px]" data-node-id="5:19">
                  <path d="M12 2.25L20.25 5.5V12.5C20.25 17 16.75 21.05 12 22.5C7.25 21.05 3.75 17 3.75 12.5V5.5L12 2.25Z" fill="#5b6a5a" />
                  <path d="M8 12.5L10.75 15.25L16 10" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
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
            <div className="absolute bg-[var(--neutral\/white,white)] content-stretch flex gap-[14px] items-center left-[420px] overflow-clip px-[24px] py-[18px] rounded-[var(--radius\/lg,16px)] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.08)] top-[440px] z-20" data-node-id="5:23" data-name="Badge - 84k Patients">
              <img alt="" src="/figma/icons/smile.png" className="relative shrink-0 size-[36px]" />
              <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic overflow-clip relative shrink-0">
                <p className="font-['Inter:Bold'] font-bold leading-[28px] relative shrink-0 text-[24px] text-[color:var(--text\/primary,#1a201c)] whitespace-nowrap" data-node-id="5:29">
                  84k+
                </p>
                <p className="font-['Inter:Medium'] font-medium leading-[16px] relative shrink-0 text-[12px] text-[color:var(--text\/secondary,#555f58)] whitespace-nowrap" data-node-id="5:30">
                  Happy Patients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
