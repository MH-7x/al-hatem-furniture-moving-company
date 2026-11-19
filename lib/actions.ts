"use server";

import { redirect } from "next/navigation";
import { BUSINESS } from "./constants";

const clean = (value: FormDataEntryValue | null, max: number) =>
  typeof value === "string" ? value.replace(/\s+/g, " ").trim().slice(0, max) : "";

export async function submitQuote(formData: FormData) {
  const name = clean(formData.get("name"), 80);
  const phone = clean(formData.get("phone"), 30);
  const movingFrom = clean(formData.get("movingFrom"), 120);
  const movingTo = clean(formData.get("movingTo"), 120);
  const message = clean(formData.get("message"), 600);

  if (!name || !phone || !movingFrom || !movingTo) return;

  const lines = [
    "Hello Al Hatem Movers, I would like a free moving quote.",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Moving from: ${movingFrom}`,
    `Moving to: ${movingTo}`,
    message && `Message: ${message}`,
  ].filter(Boolean);

  redirect(`${BUSINESS.whatsappHref}?text=${encodeURIComponent(lines.join("\n"))}`);
}
