type Bullet = { bold: string; tail: string };

const BULLETS: Bullet[] = [
  { bold: "Role-Based Access Control (RBAC):", tail: " Segmented permissions for doctors, clinic admins, lab technicians, and patients." },
  { bold: "Consent-Driven Workflows:", tail: " Strict patient authorization before data gathering, report uploading, or message dispatching." },
  { bold: "Doctor Approval Layer:", tail: " Every AI-structured note, prescription plan, or patient precaution map requires doctor verification." },
  { bold: "Secure Medical Records:", tail: " Every AI-structured note, prescription plan, or patient precaution map requires doctor verification." },
  { bold: "Audit Trails:", tail: " Detailed logging of data uploads, record modifications, doctor approvals, and safety alerts." },
];

function NumberBadge({ n }: { n: number }) {
  return (
    <div className="relative h-[36px] sm:h-[43px] w-[36px] sm:w-[43px] shrink-0">
      <img src="/figma/security-badge-bg.svg" alt="" aria-hidden className="absolute inset-0 h-full w-full" />
      <span className="absolute inset-0 flex items-center justify-center font-sans text-[14px] sm:text-[17px] leading-[32px] font-normal text-[#84B238] tracking-[-0.094px]">{n}</span>
    </div>
  );
}

export default function Security() {
  return (
    <section className="bg-[#F9FFEF] py-12 sm:py-16 lg:pt-[50px] lg:pb-[80px] px-4 sm:px-6 lg:px-8" data-name="Security, Privacy & Compliance">
      <div className="mx-auto max-w-[1440px]">
        <p className="font-satoshi font-medium text-[22px] sm:text-[26px] lg:text-[30px] leading-[1.25] text-black text-center">
          Security, Privacy &amp; Compliance
        </p>

        <div className="mt-8 sm:mt-12 lg:mt-[60px] flex flex-col xl:flex-row items-start gap-8 xl:gap-[40px]">
          <div className="w-full xl:w-[583px] xl:flex-shrink-0 overflow-hidden rounded-[8px] shadow-[0px_31px_34px_-20px_rgba(0,0,0,0.09)]">
            <img
              src="/figma/security-image-figma.png"
              alt="Hand holding a glowing network of healthcare icons centered around a padlock"
              className="block w-full h-auto object-cover object-center select-none"
            />
          </div>

          <div className="flex-1 flex flex-col gap-4 sm:gap-5 lg:gap-[20px] xl:pt-[8px]">
            <h2 className="font-satoshi font-light text-[28px] sm:text-[38px] lg:text-[56px] leading-[1.1] tracking-[-1px] lg:tracking-[-2.24px] text-[#5B6A5A]">
              Designed for responsible{" "}
              <span className="font-satoshi font-medium italic">healthcare AI.</span>
            </h2>

            <p className="font-satoshi font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.6] lg:leading-[30px] text-[#454D59] max-w-[662px]">
              Weisscoat is built with privacy-first principles and
              doctor-supervised workflows. Patient information, medical
              histories, lab reports, and care instructions are protected
              through rigid access layers:
            </p>

            <ul className="mt-2 flex flex-col gap-5 sm:gap-7 lg:gap-[40px]">
              {BULLETS.map((b, i) => (
                <li key={b.bold} className="flex items-start gap-4 sm:gap-5 lg:gap-[24px]">
                  <NumberBadge n={i + 1} />
                  <p className="flex-1 font-satoshi font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.5] lg:leading-[26px] tracking-[-0.5px] text-[#161C2D]">
                    <span className="font-satoshi font-bold">{b.bold}</span>
                    {b.tail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
