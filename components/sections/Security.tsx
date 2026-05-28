const imgEllipse = "https://www.figma.com/api/mcp/asset/488935d9-4cf9-4c21-a234-7d25356f8491";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/0573ff13-7f86-4c24-8f26-6d191b805cb1";
const imgEllipse2 = "https://www.figma.com/api/mcp/asset/0703840d-d85a-4ba1-9909-d69ffdbb6504";
const imgEllipse3 = "https://www.figma.com/api/mcp/asset/940c3478-383b-41a7-96ef-115320f6ce3d";
const imgEllipse4 = "https://www.figma.com/api/mcp/asset/1be204b3-c262-493c-9a67-46f5c80924e9";
const imgEllipse5 = "https://www.figma.com/api/mcp/asset/bf16dcf4-38e8-4b8a-97f8-dba3973d08b0";
const imgEllipse6 = "https://www.figma.com/api/mcp/asset/9f02db1e-9b0d-4031-985e-88853db0d77e";
const imgEllipse7 = "https://www.figma.com/api/mcp/asset/4b0abc58-5014-4e0c-9e32-fd5c495443fb";
const imgEllipse8 = "https://www.figma.com/api/mcp/asset/0cfd315b-29e5-402e-bd8f-9e7a8c01ea6e";
const imgEllipse9 = "https://www.figma.com/api/mcp/asset/07ad8d46-89c3-45f8-9943-29c7c00c236a";
const imgEllipse10 = "https://www.figma.com/api/mcp/asset/895d29a6-c5fb-46d7-b41e-c652d2fa60e2";
const imgEllipse11 = "https://www.figma.com/api/mcp/asset/10d97ab2-0b98-410d-90c9-b34962f4882d";
const imgEllipse12 = "https://www.figma.com/api/mcp/asset/8183bddc-3278-4181-ac5f-37e8d60f7c2f";
const imgEllipse13 = "https://www.figma.com/api/mcp/asset/09e1f743-08f7-4b2c-906d-f641e0321882";
const imgEllipse14 = "https://www.figma.com/api/mcp/asset/a84f2932-c816-4f71-8f08-a0ea4a03c3f5";
const imgEllipse15 = "https://www.figma.com/api/mcp/asset/8b93ed4a-c172-4517-ba19-43e3e98e8570";
const imgEllipse16 = "https://www.figma.com/api/mcp/asset/c76cb60f-44d2-4446-873d-15754d5a3bbb";
const imgEllipse17 = "https://www.figma.com/api/mcp/asset/c2db1a2b-eed0-44c3-b130-bfcfc5a8c975";
const imgEllipse18 = "https://www.figma.com/api/mcp/asset/6cee5cfe-1451-4b5a-8b7b-1b2bc70de114";
const imgEllipse19 = "https://www.figma.com/api/mcp/asset/7fb448b9-c8ad-4d12-a663-4f77e6a5fe26";

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
      <div
        className="h-[540px] overflow-clip relative rounded-[var(--radius\/2xl,32px)] shrink-0 w-[520px]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(115,166,115,1) 0%, rgba(80,121,80,1) 50%, rgba(63,99,63,1) 75%, rgba(46,77,46,1) 100%)",
        }}
      >
        <div className="absolute left-[134px] size-[11px] top-[238px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} /></div>
        <div className="absolute left-[286px] size-[11px] top-[215px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse1} /></div>
        <div className="absolute left-[153px] size-[15px] top-[286px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse2} /></div>
        <div className="absolute left-[160px] size-[9px] top-[502px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse3} /></div>
        <div className="absolute left-[224px] size-[7px] top-[97px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse4} /></div>
        <div className="absolute left-[213px] size-[9px] top-[492px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse5} /></div>
        <div className="absolute left-[317px] size-[6px] top-[340px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse6} /></div>
        <div className="absolute left-[394px] size-[7px] top-[507px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse7} /></div>
        <div className="absolute left-[198px] size-[5px] top-[397px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse8} /></div>
        <div className="absolute left-[166px] size-[13px] top-[346px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse9} /></div>
        <div className="absolute left-[140px] size-[12px] top-[205px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse10} /></div>
        <div className="absolute left-[134px] size-[15px] top-[241px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse11} /></div>
        <div className="absolute left-[486px] size-[7px] top-[291px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse12} /></div>
        <div className="absolute left-[440px] size-[15px] top-[372px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse13} /></div>
        <div className="absolute left-[65px] size-[14px] top-[287px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse14} /></div>
        <div className="absolute left-[338px] size-[15px] top-[223px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse15} /></div>
        <div className="absolute left-[434px] size-[13px] top-[411px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse16} /></div>
        <div className="absolute left-[140px] size-[7px] top-[384px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse17} /></div>
        <div className="absolute left-[83px] size-[10px] top-[49px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse18} /></div>
        <div className="absolute left-[85px] size-[10px] top-[293px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse19} /></div>
        <p className="[word-break:break-word] absolute font-['Inter:Regular'] font-normal leading-[180px] left-[180px] not-italic text-[160px] text-black top-[180px] whitespace-nowrap">
          🛡️
        </p>
      </div>
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
