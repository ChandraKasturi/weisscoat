export default function TopBar() {
  return (
    <div className="bg-[var(--neutral\/bg-light,#f5f7f3)] content-stretch flex items-center justify-between px-[80px] py-[14px] relative size-full" data-node-id="4:2" data-name="Top Bar">
      <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular'] font-normal gap-[24px] items-center leading-[18px] not-italic overflow-clip relative shrink-0 text-[13px] text-[color:var(--text\/secondary,#555f58)] whitespace-nowrap" data-node-id="4:3" data-name="Frame">
        <p className="relative shrink-0" data-node-id="4:4">
          Contact Us: +91 9955446890
        </p>
        <p className="relative shrink-0" data-node-id="4:5">
          Email: weisscoat@gmail.com
        </p>
      </div>
      <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="4:6" data-name="Frame">
        <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/primary,#1a201c)] whitespace-nowrap" data-node-id="4:7">
          📍 Hyderabad
        </p>
        <div className="bg-[var(--brand\/primary,#5b8c5a)] content-stretch flex items-center overflow-clip px-[20px] py-[8px] relative rounded-[var(--radius\/full,999px)] shrink-0" data-node-id="4:8" data-name="Login Button">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[18px] not-italic relative shrink-0 text-[13px] text-[color:var(--text\/inverse,white)] whitespace-nowrap" data-node-id="4:9">
            Login
          </p>
        </div>
      </div>
    </div>
  );
}
