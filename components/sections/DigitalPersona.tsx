export default function DigitalPersona() {
  return (
    <div className="bg-[var(--neutral\/white,white)] content-stretch flex flex-col gap-[48px] items-center p-[80px] relative size-full" data-node-id="7:2" data-name="Digital Persona Section">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center not-italic overflow-clip relative shrink-0 text-center" data-node-id="7:3" data-name="Frame">
        <p className="font-['Inter:Semi_Bold'] font-semibold leading-[16px] relative shrink-0 text-[12px] text-[color:var(--brand\/primary,#5b8c5a)] tracking-[1.5px] whitespace-nowrap" data-node-id="7:4">
          THE DIGITAL PERSONA
        </p>
        <p className="font-['Inter:Bold'] font-bold leading-[48px] relative shrink-0 text-[40px] text-[color:var(--text\/primary,#1a201c)] tracking-[-0.8px] whitespace-nowrap" data-node-id="7:5">
          The Digital Persona.
        </p>
        <div className="font-['Inter:Regular'] font-normal leading-[0] relative shrink-0 text-[17px] text-[color:var(--text\/secondary,#555f58)] w-[780px]" data-node-id="7:6">
          <p className="leading-[28px] mb-0">{`Weisscoat creates a digital assistant modeled around each doctor's specific clinical persona.`}</p>
          <p className="leading-[28px]">{`It doesn't just record; it understands how you practice medicine.`}</p>
        </div>
      </div>
      <div className="content-stretch flex gap-[48px] items-center overflow-clip relative shrink-0" data-node-id="7:7" data-name="Frame">
        <div className="h-[480px] overflow-clip relative rounded-[var(--radius\/2xl,32px)] shrink-0 w-[560px]" data-node-id="7:8" data-name="Digital Clone Visual">
          <img alt="" src="/figma/icons/persona-robot.png" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-[540px]" data-node-id="7:13" data-name="Frame">
          <div className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[0] not-italic relative shrink-0 text-[32px] text-[color:var(--text\/primary,#1a201c)] tracking-[-0.5px] w-[540px]" data-node-id="7:14">
            <p className="leading-[40px] mb-0">Weisscoat creates a digital</p>
            <p className="leading-[40px]">clone for every doctor.</p>
          </div>
          <p className="[word-break:break-word] font-['Inter:Regular'] font-normal h-[144px] leading-[24px] not-italic relative shrink-0 text-[15px] text-[color:var(--text\/secondary,#555f58)] w-[540px]" data-node-id="7:15">{`Instead of relying on a generic, one-size-fits-all medical AI model, Weisscoat architectically builds personalized AI agents modeled around each individual doctor's unique clinical persona. The platform learns how a specific doctor asks questions, reviews symptoms, interprets patient context, records reasoning, and guides post-care.`}</p>
          <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0" data-node-id="7:16" data-name="Frame">
            <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-[258px]" data-node-id="7:17" data-name="Frame">
              <img alt="" src="/figma/icons/persona-clinic.png" className="object-contain shrink-0 size-[56px]" data-node-id="7:18" />
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[24px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1a201c)] whitespace-nowrap" data-node-id="7:20">
                Persona Matching
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal h-[60px] leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#555f58)] w-[258px]" data-node-id="7:21">
                Learns your specific diagnostic vocabulary and note-taking style.
              </p>
            </div>
            <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-[258px]" data-node-id="7:22" data-name="Frame">
              <img alt="" src="/figma/icons/persona-stethoscope.png" className="object-contain shrink-0 size-[56px]" data-node-id="7:23" />
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[24px] not-italic relative shrink-0 text-[17px] text-[color:var(--text\/primary,#1a201c)] whitespace-nowrap" data-node-id="7:25">
                Contextual Intelligence
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal h-[60px] leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#555f58)] w-[258px]" data-node-id="7:26">
                Understands medical nuances beyond simple speech-to-text conversion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
