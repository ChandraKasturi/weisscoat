export default function NavigationBar() {
  return (
    <div className="bg-[var(--neutral\/white,white)] content-stretch flex items-center justify-between px-[80px] py-[24px] relative size-full" data-node-id="4:10" data-name="Navigation Bar">
      <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="4:11" data-name="Frame">
        <div className="bg-[var(--brand\/primary,#5b8c5a)] overflow-clip relative rounded-[var(--radius\/sm,6px)] shrink-0 size-[36px]" data-node-id="4:12" data-name="Frame">
          <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[28px] left-[22.5px] not-italic text-[20px] text-[color:var(--text\/inverse,white)] text-center top-[4px] whitespace-nowrap" data-node-id="4:13">
            W
          </p>
        </div>
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[28px] not-italic relative shrink-0 text-[22px] text-[color:var(--text\/primary,#1a201c)] whitespace-nowrap" data-node-id="4:14">
          Weisscoat
        </p>
      </div>
      <div className="[word-break:break-word] content-stretch flex gap-[36px] items-center leading-[20px] not-italic overflow-clip relative shrink-0 text-[15px] whitespace-nowrap" data-node-id="4:15" data-name="Frame">
        <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[color:var(--brand\/primary,#5b8c5a)]" data-node-id="4:16">
          Home
        </p>
        <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[color:var(--text\/primary,#1a201c)]" data-node-id="4:17">
          Digital Persona
        </p>
        <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[color:var(--text\/primary,#1a201c)]" data-node-id="4:18">
          Value Proposition
        </p>
        <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[color:var(--text\/primary,#1a201c)]" data-node-id="4:19">
          Platform
        </p>
        <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[color:var(--text\/primary,#1a201c)]" data-node-id="4:20">
          About Us
        </p>
      </div>
      <div className="bg-[var(--brand\/primary,#5b8c5a)] content-stretch flex items-start overflow-clip px-[24px] py-[12px] relative rounded-[var(--radius\/full,999px)] shrink-0" data-node-id="4:21" data-name="Frame">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/inverse,white)] whitespace-nowrap" data-node-id="4:22">
          Book a Demo
        </p>
      </div>
    </div>
  );
}
