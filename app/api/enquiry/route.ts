import { isIndianMobile } from "@/lib/phone";

// Receives enquiry and popup leads and forwards them to the Google Apps Script
// web app bound to the leads sheet (see scripts/sheets-webhook.gs).
const FIELDS = {
  "Source": "source",
  "Reference": "ref",
  "Name": "name",
  "Email": "email",
  "Phone": "phone",
  "Trip": "trip",
  "Collection": "coll",
  "For whom": "forWhom",
  "Adults": "adults",
  "Children": "children",
  "Traveller type": "traveller",
  "When": "when",
  "Length": "length",
  "Budget": "budget",
  "Notes": "notes",
  "Page": "page",
} as const;

// Sheets treats cells starting with = + - @ as formulas; store them as text.
const cell = (x: unknown) => {
  const s = String(x ?? "").trim().slice(0, 2000);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
};

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: "bad json" }, { status: 400 });
  }
  const name = cell(body.name), email = cell(body.email), phone = cell(body.phone);
  if (!name || !isIndianMobile(phone)) {
    return Response.json({ ok: false, error: "name and a 10-digit mobile number required" }, { status: 400 });
  }
  // The Plan My Trip form also requires an email; on the popup it is optional.
  if (body.source === "Enquiry form" && !/@/.test(email)) {
    return Response.json({ ok: false, error: "name, email and phone required" }, { status: 400 });
  }

  const url = process.env.SHEETS_WEBHOOK_URL, secret = process.env.SHEETS_WEBHOOK_SECRET;
  if (!url || !secret) {
    console.error("enquiry: SHEETS_WEBHOOK_URL / SHEETS_WEBHOOK_SECRET not set");
    return Response.json({ ok: false, error: "not configured" }, { status: 503 });
  }

  const row: Record<string, string> = {
    "Submitted at": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
  };
  for (const [header, key] of Object.entries(FIELDS)) row[header] = cell(body[key]);

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ secret, row }),
  }).catch((e) => (console.error("enquiry: webhook unreachable", e), null));
  const out = res && (await res.json().catch(() => null));
  if (!out?.ok) {
    console.error("enquiry: webhook rejected", res?.status, out);
    return Response.json({ ok: false }, { status: 502 });
  }
  return Response.json({ ok: true });
}
