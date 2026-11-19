import { Clock, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function OpenCallBox({
  tone = "dark",
  prompt = "Call to ask a question",
}: {
  tone?: "dark" | "light";
  prompt?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`grid gap-5 rounded-card p-6 sm:grid-cols-2 sm:gap-0 sm:p-0 ${
        dark ? "bg-secondary text-white" : "border border-line bg-white text-body"
      }`}
    >
      <div className="flex items-center gap-4 sm:p-7">
        <span className="grid size-12 shrink-0 place-items-center rounded-btn bg-primary text-black">
          <Clock className="size-6" strokeWidth={1.6} aria-hidden="true" />
        </span>
        <div className="leading-snug">
          <p className={`text-sm ${dark ? "text-white/70" : "text-muted"}`}>Open every day</p>
          <p className={`text-lg font-bold ${dark ? "text-white" : "text-black"}`}>
            24 Hours, 7 Days a Week
          </p>
        </div>
      </div>
      <div
        className={`flex items-center gap-4 border-t pt-5 sm:border-l sm:border-t-0 sm:p-7 ${
          dark ? "border-white/20" : "border-line"
        }`}
      >
        <span className="grid size-12 shrink-0 place-items-center rounded-btn bg-primary text-black">
          <Phone className="size-6" strokeWidth={1.6} aria-hidden="true" />
        </span>
        <div className="leading-snug">
          <p className={`text-sm ${dark ? "text-white/70" : "text-muted"}`}>{prompt}</p>
          <a
            href={BUSINESS.phoneHref}
            className={`text-lg font-bold hover:underline ${dark ? "text-primary" : "text-black"}`}
          >
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
