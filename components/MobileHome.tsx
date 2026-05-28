"use client";

import { useState } from "react";

const COLORS = {
  primary: "#5b8c5a",
  primaryDark: "#3a5f3a",
  primaryLight: "#a6c8a5",
  sage: "#d4e6d0",
  bgLight: "#f5f7f3",
  borderLight: "#f0f2eb",
  textPrimary: "#1a201c",
  textSecondary: "#555f58",
  textInverse: "#ffffff",
  orange: "#f5a050",
  blue: "#4682dc",
  red: "#dc5a5a",
  yellow: "#f5c850",
};

function TopBar() {
  return (
    <div className="bg-[#f5f7f3] px-5 py-2 flex flex-col gap-1 text-[11px] text-[#555f58]">
      <p>Contact: +91 9955446890</p>
      <p>Email: weisscoat@gmail.com · 📍 Hyderabad</p>
    </div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "Digital Persona", "Value Proposition", "Platform", "About Us"];
  return (
    <div className="bg-white border-b border-[#f0f2eb] sticky top-0 z-50">
      <div className="flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-2">
          <div className="size-9 rounded-md bg-[#5b8c5a] flex items-center justify-center text-white font-bold text-lg">W</div>
          <p className="font-bold text-xl text-[#1a201c]">Weisscoat</p>
        </div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="size-10 flex items-center justify-center rounded-md hover:bg-[#f5f7f3]"
        >
          <div className="flex flex-col gap-[5px]">
            <span className="block w-6 h-[2px] bg-[#1a201c]" />
            <span className="block w-6 h-[2px] bg-[#1a201c]" />
            <span className="block w-6 h-[2px] bg-[#1a201c]" />
          </div>
        </button>
      </div>
      {open && (
        <div className="border-t border-[#f0f2eb] px-5 py-4 flex flex-col gap-3">
          {links.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`text-[15px] ${i === 0 ? "font-semibold text-[#5b8c5a]" : "font-medium text-[#1a201c]"}`}
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <button
            type="button"
            className="mt-2 bg-[#5b8c5a] text-white font-semibold text-sm rounded-full px-6 py-3"
          >
            Book a Demo
          </button>
        </div>
      )}
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-white px-5 py-8">
      <div className="bg-[#d4e6d0] rounded-3xl p-7 flex flex-col gap-5">
        <div className="bg-white rounded-full px-4 py-1.5 self-start flex items-center gap-2">
          <span className="block size-2 rounded-full bg-[#5b8c5a]" />
          <p className="text-xs font-semibold text-[#5b8c5a]">Clinical Intelligence, Personalized.</p>
        </div>
        <h1 className="font-bold text-[32px] leading-[40px] tracking-[-1px] text-[#1a201c]">
          Personalized AI Agents for Smarter Clinical Care
        </h1>
        <p className="text-[15px] leading-[24px] text-[#555f58]">
          Weisscoat helps doctors build AI-powered clinical assistants trained around their unique consultation style, transforming every consultation into a structured clinical intelligence system.
        </p>
        <button
          type="button"
          className="self-start bg-[#5b8c5a] text-white font-semibold text-[15px] rounded-full px-7 py-3.5 flex items-center gap-2"
        >
          Book a Demo <span className="font-bold">→</span>
        </button>
        <div className="relative mt-2 h-56 rounded-2xl bg-gradient-to-b from-[rgba(92,140,89,0.4)] to-[rgba(166,199,166,0.9)] flex items-center justify-center">
          <span className="text-7xl">👨‍⚕️</span>
          <div className="absolute top-3 left-3 bg-white rounded-full pl-2 pr-3 py-1.5 flex items-center gap-2 shadow-md">
            <div className="size-7 bg-[#f5a050] rounded-full flex items-center justify-center text-white text-sm">⏱</div>
            <p className="text-xs font-semibold leading-[14px]">Regular<br />Checkup</p>
          </div>
          <div className="absolute bottom-3 right-3 bg-white rounded-xl px-3 py-2 flex flex-col items-center shadow-md">
            <p className="text-lg font-bold leading-tight">84k+</p>
            <p className="text-[10px] font-medium text-[#555f58]">Happy Patients</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ src, title, body }: { src: string; title: string; body: string }) {
  return (
    <div className="bg-white border border-[#f0f2eb] rounded-2xl p-5 flex flex-col gap-3 items-center text-center">
      <img alt="" src={src} className="size-24 object-contain" />
      <p className="font-semibold text-[17px] leading-[22px] text-[#1a201c]">{title}</p>
      <p className="text-[13px] leading-[20px] text-[#555f58]">{body}</p>
    </div>
  );
}

function Problems() {
  return (
    <section className="bg-white px-5 py-12 flex flex-col gap-8">
      <div className="text-center flex flex-col gap-3">
        <h2 className="font-bold text-[28px] leading-[34px] tracking-[-0.6px] text-[#1a201c]">
          Modern clinics are overloaded.
        </h2>
        <p className="text-[15px] leading-[24px] text-[#555f58]">
          Doctors are losing time to data, forms, and follow-ups. Most clinical visits begin with repeated questions, scattered records, manual typing, and rushed conversations.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <ProblemCard src="/figma/icons/problem-intake.png" title="Repetitive Patient Intake" body="Patients repeatedly share the same history, symptoms, and previous reports, wasting valuable consultation time." />
        <ProblemCard src="/figma/icons/problem-docs.png" title="Documentation Burden" body="Doctors spend too much time typing clinical notes instead of actively engaging with patients." />
        <ProblemCard src="/figma/icons/problem-postcare.png" title="Weak Post-Care" body="Patients often miss medications, ignore warning signs, or delay follow-up visits after leaving the clinic." />
        <ProblemCard src="/figma/icons/problem-wisdom.png" title="Lost Clinical Wisdom" body="Years of clinical reasoning and successful treatment patterns remain buried in unstructured records." />
      </div>
    </section>
  );
}

function Persona() {
  return (
    <section className="bg-white px-5 py-12 flex flex-col gap-8">
      <div className="text-center flex flex-col gap-3">
        <p className="text-[11px] uppercase tracking-[1.5px] font-semibold text-[#5b8c5a]">THE DIGITAL PERSONA</p>
        <h2 className="font-bold text-[28px] leading-[34px] tracking-[-0.6px]">The Digital Persona.</h2>
        <p className="text-[15px] leading-[24px] text-[#555f58]">
          Weisscoat creates a digital assistant modeled around each doctor&apos;s specific clinical persona. It doesn&apos;t just record; it understands how you practice medicine.
        </p>
      </div>
      <img alt="" src="/figma/icons/persona-robot.png" className="h-72 w-full rounded-3xl object-cover" />
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-[22px] leading-[28px] tracking-[-0.4px]">
          Weisscoat creates a digital clone for every doctor.
        </h3>
        <p className="text-[14px] leading-[22px] text-[#555f58]">
          Instead of relying on a generic, one-size-fits-all medical AI model, Weisscoat architectically builds personalized AI agents modeled around each individual doctor&apos;s unique clinical persona. The platform learns how a specific doctor asks questions, reviews symptoms, interprets patient context, records reasoning, and guides post-care.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <img alt="" src="/figma/icons/persona-clinic.png" className="size-14 object-contain" />
          <p className="font-semibold text-[16px]">Persona Matching</p>
          <p className="text-[13px] leading-[20px] text-[#555f58]">Learns your specific diagnostic vocabulary and note-taking style.</p>
        </div>
        <div className="flex flex-col gap-2">
          <img alt="" src="/figma/icons/persona-stethoscope.png" className="size-14 object-contain" />
          <p className="font-semibold text-[16px]">Contextual Intelligence</p>
          <p className="text-[13px] leading-[20px] text-[#555f58]">Understands medical nuances beyond simple speech-to-text conversion.</p>
        </div>
      </div>
    </section>
  );
}

function JourneyCard({ num, color, emoji, title, body }: { num: string; color: string; emoji: string; title: string; body: string }) {
  return (
    <div className="bg-white border border-[#f0f2eb] rounded-2xl p-5 flex flex-col gap-3 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="size-12 rounded-xl flex items-center justify-center text-xl" style={{ backgroundColor: color }}>{emoji}</div>
        <p className="font-bold text-2xl text-[#a6c8a5]">{num}</p>
      </div>
      <p className="font-semibold text-[17px] leading-[22px]">{title}</p>
      <p className="text-[13px] leading-[20px] text-[#555f58]">{body}</p>
    </div>
  );
}

function Journey() {
  return (
    <section className="bg-[#f5f7f3] px-5 py-12 flex flex-col gap-8">
      <div className="text-center flex flex-col gap-3">
        <p className="text-[11px] uppercase tracking-[1.5px] font-semibold text-[#5b8c5a]">THE PATIENT CARE JOURNEY</p>
        <h2 className="font-bold text-[28px] leading-[34px] tracking-[-0.6px]">The Patient Care Journey</h2>
        <p className="text-[15px] leading-[24px] text-[#555f58]">Weisscoat: Scaling Medical Expertise via Individualized AI Agents</p>
      </div>
      <div className="flex flex-col gap-4">
        <JourneyCard num="01" color={COLORS.blue} emoji="👥" title="Pre Screening & Data Gathering" body="AI agents use the doctor's unique questioning style to generate structured patient summaries." />
        <JourneyCard num="02" color={COLORS.orange} emoji="🎤" title="Voice-Captured Consultation" body="Doctors record voice summaries to operationalize their diagnostic rationale and treatment philosophy." />
        <JourneyCard num="03" color={COLORS.yellow} emoji="📊" title="Automated Post-Care Tether" body="The system monitors patient tracking data and triggers emergency alerts if thresholds are breached." />
      </div>
      <div className="bg-[#d4e6d0] rounded-2xl p-5 flex gap-4 items-center">
        <div className="size-14 rounded-xl bg-white flex items-center justify-center text-2xl shrink-0">📈</div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-[17px]">Scalable Medical Personas</p>
          <p className="text-[13px] leading-[20px] text-[#555f58]">Individual AI agents learn a doctor&apos;s specific philosophy rather than relying on generalized models.</p>
        </div>
      </div>
      <div className="bg-[#5b8c5a] rounded-2xl p-5 flex gap-4 items-center text-white">
        <div className="size-14 rounded-xl bg-white/20 flex items-center justify-center text-2xl shrink-0">💎</div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-[17px]">Permanent Intelligence Asset</p>
          <p className="text-[13px] leading-[20px] text-white/90">Every interaction becomes a searchable data point, referencing past successful treatments for similar conditions.</p>
        </div>
      </div>
    </section>
  );
}

function LayerCard({ color, emoji, title, body, tag }: { color: string; emoji: string; title: string; body: string; tag: string }) {
  return (
    <div className="bg-[#f5f7f3] border border-[#f0f2eb] rounded-2xl p-5 flex flex-col gap-3">
      <div className="size-12 rounded-xl flex items-center justify-center text-xl" style={{ backgroundColor: color }}>{emoji}</div>
      <p className="font-semibold text-[19px] leading-[24px]">{title}</p>
      <p className="text-[14px] leading-[22px] text-[#555f58]">{body}</p>
      <p className="font-semibold text-[13px] text-[#5b8c5a] leading-[20px]">{tag}</p>
    </div>
  );
}

function FourLayers() {
  return (
    <section className="bg-white px-5 py-12 flex flex-col gap-8">
      <div className="text-center flex flex-col gap-3">
        <p className="text-[11px] uppercase tracking-[1.5px] font-semibold text-[#5b8c5a]">FOUR LAYERS OF INTELLIGENCE</p>
        <h2 className="font-bold text-[28px] leading-[34px] tracking-[-0.6px]">Four Layers of Intelligence</h2>
        <p className="text-[14px] leading-[22px] text-[#555f58]">
          Doctors are losing time to data, forms, and follow-ups. Most clinical visits begin with repeated questions, scattered records, manual typing, and rushed conversations.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <LayerCard color={COLORS.blue} emoji="🔍" title="AI Pre-Screening" body="Before the appointment, the patient interacts with an AI assistant that collects condition specific symptoms, history, vitals, and previous lab information." tag="The doctor receives a clear summary before the consultation." />
        <LayerCard color={COLORS.orange} emoji="🎓" title="Flexible Online Learning" body="During the consultation, the doctor reviews the AI-prepared summary, validates data, conducts the physical exam, and focuses entirely on diagnosis." tag="More focused consultation, zero repetitive questioning." />
        <LayerCard color={COLORS.primary} emoji="💼" title="Practical & Career-Focused" body="After the visit, the doctor records a quick voice summary clearly explaining the diagnosis, treatment rationale, prescription instructions, and care advice." tag="Weisscoat turns spoken reasoning into structured clinical notes and workflows." />
        <LayerCard color={COLORS.yellow} emoji="✅" title="Trusted Medical Content" body="The platform coordinates automated medication reminders, care instructions, follow-up nudges, and risk alerts through standard patient messaging apps." tag="Patients stay connected after visits, while doctors build a searchable case repository." />
      </div>
    </section>
  );
}

function Step({ num, title, body, isLast, children }: { num: string; title: string; body: string; isLast?: boolean; children?: React.ReactNode }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="flex flex-col items-center self-stretch shrink-0">
        <div className="size-8 rounded-full bg-[#3a5f3a] flex items-center justify-center text-white font-bold text-[11px] shrink-0">
          {num}
        </div>
        {!isLast && <div className="border-l-2 border-dashed border-[#a6c8a5] flex-1 min-h-[28px] mt-1" />}
      </div>
      <div className="flex flex-col gap-1.5 pb-6 pt-0.5 flex-1">
        <p className="font-semibold text-[16px] leading-[22px]">{title}</p>
        <p className="text-[13px] leading-[20px] text-[#555f58]">{body}</p>
        {children}
      </div>
    </div>
  );
}

function MobileConditionPill({ icon, label, color, body }: { icon: string; label: string; color: string; body: string }) {
  return (
    <div className="bg-[#d4e6d0] rounded-xl px-3 py-2.5 flex-1 min-w-[140px]">
      <div className="flex items-center gap-1.5 mb-1">
        <span className="text-[13px]">{icon}</span>
        <p className="font-semibold text-[12px]" style={{ color }}>{label}</p>
      </div>
      <p className="text-[11px] leading-[14px] text-[#555f58]">{body}</p>
    </div>
  );
}

function HowItWorks() {
  return (
    <section className="bg-[#f5f7f3] px-5 py-12 flex flex-col gap-8">
      <div className="text-center flex flex-col gap-3">
        <p className="text-[11px] uppercase tracking-[1.5px] font-semibold text-[#5b8c5a]">HOW IT WORKS</p>
        <h2 className="font-bold text-[26px] leading-[32px] tracking-[-0.5px]">
          How It Works: The Complete Care Journey
        </h2>
        <p className="text-[14px] leading-[22px] text-[#555f58]">
          From initial patient registration to long-term recovery monitoring, Weisscoat structures every phase of the clinical experience.
        </p>
      </div>
      <div className="flex flex-col">
        <Step num="01" title="Patient Registration" body="Secure registration using mobile numbers and OTP. Supports linking multiple family profiles to a single mobile account." />
        <Step num="02" title="Clinic & Doctor Selection" body="Patients easily search or select their clinic, view live doctor availability, and book appointments." />
        <Step num="03" title="AI Pre-Screening" body="A sophisticated triage engine collects essential data through condition-specific questioning:">
          <div className="flex flex-wrap gap-2 mt-1">
            <MobileConditionPill icon="🌡" label="Fever" color={COLORS.red} body="duration, temperature pattern, chills, cough, throat pain." />
            <MobileConditionPill icon="💊" label="Diabetes" color={COLORS.orange} body="sugar readings, medication adherence, fatigue, dietary habits." />
            <MobileConditionPill icon="💗" label="Blood Pressure" color={COLORS.blue} body="recent BP readings, dizziness, headache, chest discomfort." />
            <MobileConditionPill icon="🦵" label="Knee Pain" color={COLORS.yellow} body="precise location, swelling, past injury history, mobility limits." />
            <MobileConditionPill icon="🫃" label="Stomach Pain" color={COLORS.primary} body="location, food relationship, vomiting, acidity, bowel changes." />
          </div>
        </Step>
        <Step num="04" title="Doctor Review" body="The physician accesses the dashboard to view the structured pre-screening notes, vitals, and chronological medical history." />
        <Step num="05" title="Consultation & Voice Summary" body="The clinical visit takes place, concluded by a rapid 30-second doctor voice summary." />
        <Step num="06" title="AI-Generated Care Plan" body="LLM engines convert raw voice audio into structured prescriptions, lifestyle precautions, test advice, and follow-up milestones." />
        <Step num="07" title="Post-Care Monitoring" body="Automated patient check-ins are deployed over WhatsApp, SMS, or app notifications, functioning as a digital safety tether." />
        <Step num="08" title="Clinical Intelligence Layer" body="Past clinical decisions are aggregated, allowing doctors to search their historical treatment patterns and find similar past cases." isLast />
      </div>
    </section>
  );
}

function StakeholderColumn({ color, emoji, title, items }: { color: string; emoji: string; title: string; items: string[] }) {
  return (
    <div className="bg-[#f5f7f3] rounded-2xl p-5 flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <div className="size-11 rounded-xl flex items-center justify-center text-xl" style={{ backgroundColor: color }}>{emoji}</div>
        <p className="font-bold text-[20px]">{title}</p>
      </div>
      <div className="bg-[#f0f2eb] h-px" />
      <div className="flex flex-col gap-3">
        {items.map((it) => (
          <div key={it} className="flex gap-2 items-start">
            <p className="font-bold text-base shrink-0" style={{ color }}>✓</p>
            <p className="text-[13px] leading-[20px] text-[#555f58]">{it}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Stakeholders() {
  return (
    <section className="bg-white px-5 py-12 flex flex-col gap-8">
      <h2 className="font-bold text-[28px] leading-[34px] tracking-[-0.6px] text-center">
        Stakeholder Value Matrix
      </h2>
      <div className="flex flex-col gap-4">
        <StakeholderColumn
          color={COLORS.primary}
          emoji="👨‍⚕️"
          title="For Doctors"
          items={[
            "Focused consultations starting from structured context rather than zero",
            "Less typing, more listening through voice-based note capture.",
            "Automated continuity ensuring patients adhere to chronic care plans.",
            "Personalized clinical memory that strengthens with every case.",
          ]}
        />
        <StakeholderColumn
          color={COLORS.blue}
          emoji="🏥"
          title="For Clinics"
          items={[
            "Reduced front desk workload via automated intake and digital registration.",
            "Improved patient retention and operational experience.",
            "Standardized workflows for lab testing, consultations, and scheduling.",
            "Long term institutional intelligence capturing unique care patterns.",
          ]}
        />
        <StakeholderColumn
          color={COLORS.orange}
          emoji="🧑"
          title="For Patients"
          items={[
            "Less repetition; no need to explain the medical issue multiple times.",
            "Crystal clear instructions delivered directly to their phone in simple language.",
            "Timely reminders for medicine and follow-ups over familiar channels.",
            "Family-friendly profiles easily managed from a single mobile dashboard.",
          ]}
        />
      </div>
    </section>
  );
}

function PlatformCard({ color, emoji, title, body }: { color: string; emoji: string; title: string; body: string }) {
  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-3 shadow-sm">
      <div className="size-12 rounded-xl flex items-center justify-center text-xl" style={{ backgroundColor: color }}>{emoji}</div>
      <p className="font-semibold text-[18px] leading-[24px]">{title}</p>
      <p className="text-[13px] leading-[20px] text-[#555f58]">{body}</p>
    </div>
  );
}

function Platform() {
  return (
    <section className="bg-[#d4e6d0] px-5 py-12 flex flex-col gap-8">
      <div className="text-center flex flex-col gap-3">
        <h2 className="font-bold text-[26px] leading-[32px] tracking-[-0.5px]">
          Unified Clinical Operations Platform
        </h2>
        <p className="text-[14px] leading-[22px] text-[#555f58]">
          An AI-powered healthcare ecosystem that streamlines patient visits, doctor consultations, lab workflows, post-care engagement, clinic onboarding, and clinical intelligence through connected digital infrastructure.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <PlatformCard color={COLORS.blue} emoji="📅" title="Patient Visit Management" body="Registration, profile linking, doctor schedules, booking engines, and waiting-time flows." />
        <PlatformCard color={COLORS.primary} emoji="🩺" title="Doctor Consultation Panel" body="Waiting lists, screening insights, pre-consultation AI notes, diagnosis capture, and voice interfaces." />
        <PlatformCard color={COLORS.orange} emoji="🧪" title="Lab Test Infrastructure" body="Test recommendation slips, unique test codes, lab-side uploads, and automated clinical dashboard routing." />
        <PlatformCard color={COLORS.yellow} emoji="💊" title="Post Consultation Care" body="Automated medication reminders, lifestyle rules, follow-up scheduling, and patient feedback collection." />
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="bg-white px-5 py-12 flex flex-col gap-6">
      <div
        className="h-56 rounded-3xl flex items-center justify-center"
        style={{ background: "linear-gradient(to right, #2e472e, #5c8c59)" }}
      >
        <span className="text-[80px]">👨‍⚕️</span>
      </div>
      <p className="text-[11px] uppercase tracking-[1.5px] font-semibold text-[#5b8c5a]">OUR STORY</p>
      <h2 className="font-bold text-[26px] leading-[32px] tracking-[-0.5px]">
        Transforming Healthcare Through Intelligent Clinical Infrastructure
      </h2>
      <p className="text-[14px] leading-[22px] text-[#555f58]">
        We are building a connected healthcare ecosystem that simplifies patient care, empowers doctors with AI-assisted workflows, and enables clinics to operate through one unified digital platform. From consultations and lab management to post-care engagement and clinical intelligence, every module is designed to improve efficiency, accuracy, and patient outcomes.
      </p>
      <p className="font-semibold text-[14px] leading-[22px]">As a partner, you&apos;ll be part of a system that supports:</p>
      <div className="flex flex-col gap-2.5">
        {[
          "AI-powered doctor consultation and voice-enabled workflows",
          "Smart patient registration, booking, and waiting management",
          "Integrated lab testing and automated clinical routing",
          "Automated medication reminders and follow-up care systems",
          "Doctor onboarding with licensing verification and clinic mapping",
          "Clinical intelligence engine with historical case insights and outcome tracking",
        ].map((b) => (
          <div key={b} className="flex gap-3 items-start">
            <span className="block w-1 h-5 bg-[#5b8c5a] rounded-full shrink-0 mt-0.5" />
            <p className="text-[13px] leading-[20px] text-[#555f58]">{b}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function DiffRow({ leftTitle, leftBody, rightTitle, rightBody }: { leftTitle: string; leftBody: string; rightTitle: string; rightBody: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="bg-white border border-[#f0f2eb] rounded-2xl p-5 flex flex-col gap-2">
        <p className="text-[10px] uppercase tracking-[1.5px] font-semibold text-[#555f58]">STANDARD APPROACH</p>
        <p className="font-semibold text-[18px] leading-[24px]">{leftTitle}</p>
        <p className="text-[13px] leading-[20px] text-[#555f58]">{leftBody}</p>
      </div>
      <div className="bg-[#d4e6d0] border-2 border-[#5b8c5a] rounded-2xl p-5 flex flex-col gap-2">
        <div className="flex gap-2 items-center text-[#5b8c5a]">
          <p className="font-bold text-xs">✓</p>
          <p className="text-[10px] uppercase tracking-[1.5px] font-semibold">WEISSCOAT INTELLIGENCE</p>
        </div>
        <p className="font-semibold text-[18px] leading-[24px]">{rightTitle}</p>
        <p className="text-[13px] leading-[20px] text-[#555f58]">{rightBody}</p>
      </div>
    </div>
  );
}

function WhyDifferent() {
  return (
    <section className="bg-[#f5f7f3] px-5 py-12 flex flex-col gap-8">
      <div className="text-center flex flex-col gap-3">
        <h2 className="font-bold text-[26px] leading-[32px] tracking-[-0.5px]">
          Why Weisscoat is Radically Different
        </h2>
        <p className="text-[14px] leading-[22px] text-[#555f58]">
          Beyond simple automation, we&apos;ve built a clinical intelligence layer that adapts to you, not the other way around.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <DiffRow leftTitle="Generalized Models" leftBody="Provide broad, generalized answers from public medical data sets that lack clinical nuance." rightTitle="Personalized Persona" rightBody="Learns your specific style, prescription logic, and clinical vocabulary for notes that sound like you." />
        <DiffRow leftTitle="Manual Workflows" leftBody="One-size-fits-all workflows that disrupt clinic operations and require heavy manual prompt engineering." rightTitle="Ambient Integration" rightBody="Aligns seamlessly to your established routine via voice capture; simply speak naturally to input data." />
        <DiffRow leftTitle="Isolated Consults" leftBody="Intelligence disconnects the moment the patient leaves the clinic door, leading to documentation gaps." rightTitle="Continuous Care Tether" rightBody="Acts as a continuous safety tether monitoring post-care outcomes and generating patient-friendly summaries." />
      </div>
    </section>
  );
}

function SecurityItem({ n, bold, body }: { n: number; bold: string; body: string }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="size-8 rounded-full bg-[#d4e6d0] flex items-center justify-center shrink-0">
        <p className="font-bold text-xs text-[#5b8c5a]">{n}</p>
      </div>
      <p className="text-[13px] leading-[20px] text-[#555f58]">
        <span className="font-semibold text-[#1a201c]">{bold}</span> {body}
      </p>
    </div>
  );
}

function Security() {
  return (
    <section className="bg-white px-5 py-12 flex flex-col gap-6">
      <div
        className="h-56 rounded-3xl flex items-center justify-center"
        style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(115,166,115,1) 0%, rgba(80,121,80,1) 50%, rgba(63,99,63,1) 75%, rgba(46,77,46,1) 100%)" }}
      >
        <span className="text-[100px]">🛡️</span>
      </div>
      <p className="text-[11px] uppercase tracking-[1.5px] font-semibold text-[#5b8c5a]">SECURITY, PRIVACY &amp; COMPLIANCE</p>
      <h2 className="font-bold text-[26px] leading-[32px] tracking-[-0.5px]">
        Designed for responsible healthcare AI.
      </h2>
      <p className="text-[14px] leading-[22px] text-[#555f58]">
        Weisscoat is built with privacy-first principles and doctor-supervised workflows. Patient information, medical histories, lab reports, and care instructions are protected through rigid access layers:
      </p>
      <div className="flex flex-col gap-4">
        <SecurityItem n={1} bold="Role-Based Access Control (RBAC):" body="Segmented permissions for doctors, clinic admins, lab technicians, and patients." />
        <SecurityItem n={2} bold="Consent-Driven Workflows:" body="Strict patient authorization before data gathering, report uploading, or message dispatching." />
        <SecurityItem n={3} bold="Doctor Approval Layer:" body="Every AI-structured note, prescription plan, or patient precaution map requires doctor verification." />
        <SecurityItem n={4} bold="Secure Medical Records:" body="Encrypted at rest and in transit with field-level access controls and audit logging." />
        <SecurityItem n={5} bold="Audit Trails:" body="Detailed logging of data uploads, record modifications, doctor approvals, and safety alerts." />
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="bg-[#f5f7f3] px-5 py-12 flex flex-col gap-8">
      <div className="text-center flex flex-col gap-2">
        <p className="text-[11px] uppercase tracking-[1.5px] font-semibold text-[#5b8c5a]">SOCIAL PROOF &amp; TESTIMONIALS</p>
        <h2 className="font-bold text-[26px] leading-[32px] tracking-[-0.5px]">Trusted by physicians</h2>
      </div>
      <p className="font-semibold text-[18px] leading-[28px] text-center">
        &ldquo;Before Weisscoat, I spent too much time gathering basic history and typing notes. Now I start every consultation with structured context and can focus more on the patient.&rdquo;
      </p>
      <div className="bg-white rounded-2xl p-5 flex flex-col gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="size-16 rounded-full bg-[#d4e6d0] flex items-center justify-center text-3xl shrink-0">👩‍⚕️</div>
          <div className="flex flex-col">
            <p className="font-semibold text-[16px]">Dr. Ananya Rao</p>
            <p className="text-[13px] text-[#555f58]">General Physician</p>
          </div>
        </div>
        <p className="font-bold text-3xl text-[#5b8c5a] leading-none">&ldquo;</p>
        <p className="text-[14px] leading-[22px]">
          The most powerful part is the voice summary. I can record my reasoning quickly, and the system converts it into usable instructions and follow-up care.
        </p>
      </div>
    </section>
  );
}

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is Weisscoat?",
    a: "Weisscoat is an AI-powered clinical workflow platform that helps doctors manage patient pre-screening, consultation summaries, lab reports, post-care reminders, and clinical intelligence.",
  },
  { q: "Does Weisscoat replace doctors?", a: "" },
  { q: "How is Weisscoat different from a normal chatbot?", a: "" },
  { q: "How does voice based clinical reasoning capture function?", a: "" },
  { q: "Is patient data secure?", a: "" },
];

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-white px-5 py-12 flex flex-col gap-8">
      <h2 className="font-bold text-[28px] leading-[34px] tracking-[-0.6px] text-center">FAQ&apos;s</h2>
      <div className="flex flex-col gap-3">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={item.q}
              className={`${isOpen ? "bg-[#d4e6d0]" : "bg-[#f5f7f3]"} border border-[#f0f2eb] rounded-2xl px-5 py-4 flex flex-col gap-3`}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex items-center justify-between gap-3 text-left"
              >
                <p className="font-semibold text-[15px] leading-[22px] flex-1">{item.q}</p>
                <div className={`size-7 rounded-full flex items-center justify-center shrink-0 ${isOpen ? "bg-[#5b8c5a] text-white" : "bg-white text-[#1a201c]"}`}>
                  <p className="font-bold text-base leading-none">{isOpen ? "−" : "+"}</p>
                </div>
              </button>
              {isOpen && item.a && <p className="text-[13px] leading-[20px] text-[#555f58]">{item.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-white px-5 py-12">
      <div
        className="rounded-3xl p-7 flex flex-col gap-4 items-center text-center"
        style={{ background: "linear-gradient(to right, #d9e5d4, #e8f0e5)" }}
      >
        <h2 className="font-bold text-[26px] leading-[32px] tracking-[-0.5px]">
          Ready to build an intelligent clinic?
        </h2>
        <p className="text-[14px] leading-[22px] text-[#555f58]">
          Talk to the Weisscoat team and discover how personalized AI agents can transform your clinic workflow.
        </p>
        <button
          type="button"
          className="bg-[#5b8c5a] text-white rounded-full px-7 py-3.5 flex items-center gap-2 font-semibold text-[15px]"
        >
          Take My Health Assessment <span className="font-bold">→</span>
        </button>
      </div>
    </section>
  );
}

function Field({ label }: { label: string }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-semibold text-[12px] leading-[18px] text-[#1a201c]">{label}</span>
      <input
        type="text"
        placeholder="Enter here"
        className="bg-[#f5f7f3] border border-[#f0f2eb] rounded-md px-3.5 py-3 text-[14px] text-[#1a201c] placeholder:text-[#555f58] focus:outline-none focus:border-[#5b8c5a]"
      />
    </label>
  );
}

function Footer() {
  return (
    <footer className="bg-[#3a5f3a] text-white px-5 py-10 flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        <p className="text-[11px] uppercase tracking-[1.5px] font-semibold text-[#a6c8a5]">LET&apos;S KEEP IN TOUCH</p>
        <p className="font-bold text-[22px] leading-[28px] tracking-[-0.4px]">
          Weisscoat Personalized Clinical Intelligence for the Future of Healthcare.
        </p>
        <div className="flex flex-col gap-2.5 text-[14px]">
          <p>📞 +1 555 505 5050</p>
          <p>✉️ hello@weisscoat.ai</p>
          <p>🕐 Mon - Sat, 9:00 AM - 6:00 PM</p>
        </div>
      </div>
      <div className="bg-white rounded-3xl p-6 flex flex-col gap-4 text-[#1a201c]">
        <p className="font-bold text-[20px]">Contact Us</p>
        <Field label="Name *" />
        <Field label="Role *" />
        <Field label="Clinic Name *" />
        <Field label="Phone No *" />
        <label className="flex flex-col gap-1.5">
          <span className="font-semibold text-[12px] leading-[18px]">Tell us more... (Optional)</span>
          <textarea
            rows={3}
            placeholder="Enter here"
            className="bg-[#f5f7f3] border border-[#f0f2eb] rounded-md px-3.5 py-3 text-[14px] placeholder:text-[#555f58] focus:outline-none focus:border-[#5b8c5a] resize-none"
          />
        </label>
        <button
          type="submit"
          className="bg-[#5b8c5a] text-white rounded-full px-7 py-3.5 font-semibold text-[15px]"
        >
          Submit
        </button>
      </div>
      <div className="border-t border-white/10 pt-5 flex flex-col gap-4">
        <div className="flex items-center gap-2.5">
          <div className="size-8 rounded-md bg-white flex items-center justify-center font-bold text-[#5b8c5a]">W</div>
          <p className="font-bold text-[18px]">Weisscoat</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] font-medium text-white/85">
          {["Home", "Platform", "How It Works", "For Clinics", "About", "Testimonials", "FAQ's"].map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
        <p className="text-[11px] text-white/60">
          Weisscoat Personalized Clinical Intelligence for the Future of Healthcare. © 2026 All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function MobileHome() {
  return (
    <div className="bg-white text-[#1a201c]">
      <TopBar />
      <Nav />
      <Hero />
      <Problems />
      <Persona />
      <Journey />
      <FourLayers />
      <HowItWorks />
      <Stakeholders />
      <Platform />
      <Story />
      <WhyDifferent />
      <Security />
      <Testimonial />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
