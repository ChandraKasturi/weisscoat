"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, CalendarClock, ChevronDown } from "lucide-react";

type SubmitStatus =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    clinic: "",
    role: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>({ kind: "idle" });

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.kind === "submitting") return;

    setStatus({ kind: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          clinic: form.clinic,
          role: form.role,
          phoneCountry: "+91",
          phone: form.phone,
          message: form.message,
        }),
      });
      if (!res.ok) {
        let detail = "Something went wrong. Please try again.";
        try {
          const data = (await res.json()) as { error?: string };
          if (data?.error) detail = data.error;
        } catch {
          /* ignore */
        }
        setStatus({ kind: "error", message: detail });
        return;
      }
      setStatus({ kind: "success" });
      setForm({ name: "", clinic: "", role: "", phone: "", message: "" });
    } catch (err) {
      setStatus({
        kind: "error",
        message: err instanceof Error ? err.message : "Network error",
      });
    }
  }

  const submitting = status.kind === "submitting";

  return (
    <section
      className="relative w-full overflow-hidden"
      data-name="Let's Keep in Touch"
    >
      <img
        src="/figma/contact-bg-doctor.png"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-center pointer-events-none select-none"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[#5B6A5A] opacity-70 pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-[60px] flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8 lg:gap-[40px]">
        <div className="w-full lg:w-[600px] flex flex-col gap-4 sm:gap-5 lg:gap-[24px]">
          <h2 className="font-satoshi font-medium text-[28px] sm:text-[38px] lg:text-[50px] leading-[1.1] text-white">
            Let&rsquo;s Keep in Touch
          </h2>
          <p className="font-satoshi font-normal text-[15px] sm:text-[18px] lg:text-[23px] leading-[1.5] lg:leading-[36px] tracking-[0.23px] text-[#F9F9F9] max-w-[520px]">
            Weisscoat &mdash; Personalized Clinical Intelligence for the Future
            of Healthcare.
          </p>
          <ul className="mt-4 lg:mt-[20px] flex flex-col gap-3 lg:gap-[18px] font-satoshi font-normal text-[15px] sm:text-[18px] lg:text-[23px] leading-[1.5] lg:leading-[29px] text-[#F9F9F9]">
            <li className="flex items-center gap-3 lg:gap-[16px]">
              <Phone size={20} className="shrink-0" /> +91 8106657691
            </li>
            <li className="flex items-center gap-3 lg:gap-[16px]">
              <Mail size={20} className="shrink-0" /> guna@weisscoat.com
            </li>
            <li className="flex items-center gap-3 lg:gap-[16px]">
              <CalendarClock size={20} className="shrink-0" /> Mon - Sat, 9:00
              AM &ndash; 6:00 PM IST
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-[514px] rounded-[10px] bg-white p-5 sm:p-7 lg:p-[36px]">
          <p className="text-center font-satoshi font-bold text-[18px] sm:text-[20px] leading-[24px] text-[#263640]">
            Contact Us
          </p>

          <form
            onSubmit={onSubmit}
            noValidate
            className="mt-5 sm:mt-7 lg:mt-[28px] flex flex-col gap-4 lg:gap-[20px]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-[14px]">
              <Field
                label="Name"
                required
                placeholder="Enter here"
                value={form.name}
                onChange={update("name")}
                autoComplete="name"
                disabled={submitting}
              />
              <Field
                label="Clinic Name"
                required
                placeholder="Enter here"
                value={form.clinic}
                onChange={update("clinic")}
                autoComplete="organization"
                disabled={submitting}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-[14px]">
              <Field
                label="Role"
                required
                placeholder="Enter here"
                value={form.role}
                onChange={update("role")}
                autoComplete="organization-title"
                disabled={submitting}
              />
              <PhoneField
                value={form.phone}
                onChange={update("phone")}
                disabled={submitting}
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label className="font-inter text-[14px] lg:text-[16px] leading-[1.15] text-black">
                Tell us more&hellip;{" "}
                <span className="text-black/60">(Optional)</span>
              </label>
              <textarea
                rows={4}
                value={form.message}
                onChange={update("message")}
                disabled={submitting}
                className="h-[80px] sm:h-[100px] resize-none rounded-[3px] border border-[#D3D3D3] bg-white px-3 sm:px-[14px] py-2 sm:py-[10px] font-inter text-[14px] lg:text-[16px] text-black placeholder:opacity-60 focus:outline-none focus:border-[#5B6A5A] disabled:opacity-60"
              />
            </div>

            {/* Inline status feedback */}
            {status.kind === "success" && (
              <p
                role="status"
                className="rounded-[6px] bg-[#F6FBE9] border border-[#5B6A5A]/30 px-3 py-2 font-inter text-[14px] leading-[1.4] text-[#2B412A]"
              >
                Thanks &mdash; your message has been sent. We&rsquo;ll get back
                to you shortly.
              </p>
            )}
            {status.kind === "error" && (
              <p
                role="alert"
                className="rounded-[6px] bg-[#FEE4E4] border border-[#DD1D50]/30 px-3 py-2 font-inter text-[14px] leading-[1.4] text-[#7a1232]"
              >
                {status.message}
              </p>
            )}

            <div className="mt-1 sm:mt-2 flex justify-end">
              <button
                type="submit"
                disabled={submitting}
                className="h-[42px] sm:h-[45px] w-full sm:w-[158px] rounded-[5px] border-2 border-[#5B6A5A] bg-white font-satoshi font-semibold text-[14px] lg:text-[16px] leading-[23px] text-[#5B6A5A] hover:bg-[#5B6A5A]/5 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {submitting ? "Sending…" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  disabled?: boolean;
};

function Field({
  label,
  placeholder,
  required,
  value,
  onChange,
  autoComplete,
  disabled,
}: FieldProps) {
  return (
    <div className="flex flex-col gap-[6px]">
      <label className="font-inter text-[14px] lg:text-[16px] leading-[1.15] text-black">
        {label}
        {required && <span className="text-[#DD1D50]"> *</span>}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        disabled={disabled}
        required={required}
        className="h-[42px] sm:h-[45px] rounded-[3px] border border-[#D3D3D3] bg-white px-3 sm:px-[14px] font-inter text-[14px] lg:text-[16px] text-black placeholder:opacity-60 focus:outline-none focus:border-[#5B6A5A] disabled:opacity-60"
      />
    </div>
  );
}

function PhoneField({
  value,
  onChange,
  disabled,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-col gap-[6px]">
      <label className="font-inter text-[14px] lg:text-[16px] leading-[1.15] text-black">
        Phone No<span className="text-[#DD1D50]"> *</span>
      </label>
      <div className="flex h-[42px] sm:h-[45px] items-stretch rounded-[3px] border border-[#D3D3D3] bg-white">
        <div className="flex items-center gap-[4px] border-r border-[#D3D3D3] px-2 sm:px-[12px] font-inter text-[14px] lg:text-[16px] text-black">
          +91{" "}
          <ChevronDown size={14} className="text-black/60" strokeWidth={2} />
        </div>
        <input
          type="tel"
          placeholder="Enter here"
          value={value}
          onChange={onChange}
          autoComplete="tel-national"
          disabled={disabled}
          required
          className="flex-1 min-w-0 bg-transparent px-3 sm:px-[14px] font-inter text-[14px] lg:text-[16px] text-black placeholder:opacity-60 focus:outline-none disabled:opacity-60"
        />
      </div>
    </div>
  );
}
