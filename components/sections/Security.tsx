function NumberedItem({ n, boldText, body }: { n: number; boldText: string; body: string }) {
  return (
    <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0">
      <div className="bg-[var(--brand\/sage,#d4e6d0)] overflow-clip relative rounded-[var(--radius\/full,999px)] shrink-0 size-[32px]">
        <p className="[word-break:break-word] absolute font-['Inter:Bold'] font-bold leading-[18px] left-[12px] not-italic text-[13px] text-[color:var(--brand\/primary,#5b8c5a)] top-[7px] whitespace-nowrap">
          {n}
        </p>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular'] font-normal h-[44px] leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/secondary,#555f58)] w-[652px]">
        <span className="font-['Inter:Semi_Bold'] font-semibold leading-[22px] text-[#1a201c]">{boldText}</span>
        <span className="leading-[22px]"> {body}</span>
      </p>
    </div>
  );
}

export default function Security() {
  return (
    <div className="bg-[var(--neutral\/white,white)] content-stretch flex gap-[64px] items-center p-[80px] relative size-full" data-node-id="14:2" data-name="Security Section">
      <img
        alt=""
        src="/figma/icons/security-shield.png"
        className="h-[540px] object-cover overflow-clip relative rounded-[var(--radius\/2xl,32px)] shrink-0 w-[520px]"
      />
      <div className="content-stretch flex flex-col gap-[24px] items-start overflow-clip relative shrink-0 w-[700px]" data-node-id="14:25">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-[color:var(--brand\/primary,#5b8c5a)] tracking-[1.5px] whitespace-nowrap" data-node-id="14:26">{`SECURITY, PRIVACY & COMPLIANCE`}</p>
        <div className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[0] not-italic relative shrink-0 text-[32px] text-[color:var(--text\/primary,#1a201c)] tracking-[-0.5px] w-[700px]" data-node-id="14:27">
          <p className="leading-[40px] mb-0">Designed for responsible</p>
          <p className="leading-[40px]">healthcare AI.</p>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal h-[96px] leading-[24px] not-italic relative shrink-0 text-[15px] text-[color:var(--text\/secondary,#555f58)] w-[700px]" data-node-id="14:28">
          Weisscoat is built with privacy-first principles and doctor-supervised workflows. Patient information, medical histories, lab reports, and care instructions are protected through rigid access layers:
        </p>
        <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0">
          <NumberedItem n={1} boldText="Role-Based Access Control (RBAC):" body="Segmented permissions for doctors, clinic admins, lab technicians, and patients." />
          <NumberedItem n={2} boldText="Consent-Driven Workflows:" body="Strict patient authorization before data gathering, report uploading, or message dispatching." />
          <NumberedItem n={3} boldText="Doctor Approval Layer:" body="Every AI-structured note, prescription plan, or patient precaution map requires doctor verification." />
          <NumberedItem n={4} boldText="Secure Medical Records:" body="Encrypted at rest and in transit with field-level access controls and audit logging." />
          <NumberedItem n={5} boldText="Audit Trails:" body="Detailed logging of data uploads, record modifications, doctor approvals, and safety alerts." />
        </div>
      </div>
    </div>
  );
}
