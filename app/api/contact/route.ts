import { NextResponse } from "next/server";

// Force Node.js runtime (ZeptoMail's API works from edge too, but Node lets
// us read process.env reliably and keeps the response body small).
export const runtime = "nodejs";

// Don't pre-render — every submission is a fresh server call.
export const dynamic = "force-dynamic";

type ContactPayload = {
  name?: string;
  clinic?: string;
  role?: string;
  phoneCountry?: string;
  phone?: string;
  message?: string;
};

const REQUIRED: (keyof ContactPayload)[] = ["name", "clinic", "role", "phone"];

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string): string {
  return `<tr>
    <td style="padding:8px 16px;background:#F6FBE9;border:1px solid #E5F5BD;font-weight:600;color:#2B412A;width:160px;">${escapeHtml(label)}</td>
    <td style="padding:8px 16px;border:1px solid #E5F5BD;color:#171717;">${escapeHtml(value)}</td>
  </tr>`;
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Trim + presence check on required fields.
  for (const key of REQUIRED) {
    const v = (body[key] ?? "").toString().trim();
    if (!v) {
      return NextResponse.json(
        { error: `Missing required field: ${key}` },
        { status: 400 }
      );
    }
    body[key] = v;
  }

  const name = body.name!;
  const clinic = body.clinic!;
  const role = body.role!;
  const phone = `${(body.phoneCountry ?? "+91").trim()} ${body.phone!}`.trim();
  const message = (body.message ?? "").toString().trim();

  // Server-side env config.
  const token = process.env.ZEPTOMAIL_TOKEN;
  const fromAddress =
    process.env.ZEPTOMAIL_FROM_ADDRESS ?? "noreply@notutor.ai";
  const fromName = process.env.ZEPTOMAIL_FROM_NAME ?? "Weisscoat";
  const toAddress =
    process.env.CONTACT_TO_ADDRESS ?? "guna@weisscoat.com";
  const toName = process.env.CONTACT_TO_NAME ?? "Guna";

  // CC list — comma-separated env var, each entry is "email" or "email|Name".
  const ccList = (process.env.CONTACT_CC_ADDRESSES ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((entry) => {
      const [email, ...nameParts] = entry.split("|");
      const cleanEmail = email.trim();
      const name = nameParts.join("|").trim();
      return {
        email_address: name
          ? { address: cleanEmail, name }
          : { address: cleanEmail },
      };
    });

  if (!token) {
    return NextResponse.json(
      { error: "Email not configured (ZEPTOMAIL_TOKEN missing on server)" },
      { status: 500 }
    );
  }

  const subject = `New Weisscoat contact form — ${name} (${clinic})`;
  const htmlbody = `
    <div style="font-family:Inter,system-ui,sans-serif;color:#171717;">
      <h2 style="color:#2B412A;margin:0 0 16px;">New contact form submission</h2>
      <p style="margin:0 0 16px;color:#5B6A5A;">A visitor submitted the &ldquo;Let&rsquo;s Keep in Touch&rdquo; form on weisscoat.com.</p>
      <table style="border-collapse:collapse;border:1px solid #E5F5BD;width:100%;max-width:620px;">
        ${row("Name", name)}
        ${row("Clinic Name", clinic)}
        ${row("Role", role)}
        ${row("Phone", phone)}
        ${row("Message", message || "(not provided)")}
      </table>
      <p style="margin:20px 0 0;font-size:12px;color:#6b6b6b;">Sent automatically from the Weisscoat website.</p>
    </div>
  `.trim();

  // ZeptoMail in-region (India) endpoint — see ZeptoMail console for the
  // correct host based on where the account is provisioned.
  let resp: Response;
  try {
    resp = await fetch("https://api.zeptomail.in/v1.1/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({
        from: { address: fromAddress, name: fromName },
        to: [{ email_address: { address: toAddress, name: toName } }],
        ...(ccList.length > 0 ? { cc: ccList } : {}),
        reply_to: [{ address: fromAddress, name }],
        subject,
        htmlbody,
      }),
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to reach email provider", detail: String(err) },
      { status: 502 }
    );
  }

  if (!resp.ok) {
    // ZeptoMail returns a JSON error body for validation failures, etc.
    let detail: unknown;
    try {
      detail = await resp.json();
    } catch {
      detail = await resp.text();
    }
    return NextResponse.json(
      { error: "Email provider rejected the request", detail },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
