export default function NavigationBar() {
  return (
    <div className="bg-[var(--neutral\/white,white)] content-stretch flex items-center justify-between px-[80px] py-[24px] relative size-full" data-node-id="4:10" data-name="Navigation Bar">
      <img alt="Weisscoat" src="/figma/icons/weisscoat-logo.png" className="h-[44px] w-auto object-contain shrink-0" data-node-id="4:11" />
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
