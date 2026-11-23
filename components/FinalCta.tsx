import type { ReactNode } from "react";
import { Mail, Phone } from "lucide-react";
import { Button } from "./Button";
import { Section } from "./Section";
import { WhatsAppIcon } from "./icons";
import { BUSINESS } from "@/lib/constants";

type CtaKind = "quote" | "call" | "whatsapp" | "email";

export type CtaAction = { kind: CtaKind; label: string };

/** The three buttons every page used before per-page wording was supported. */
const DEFAULT_ACTIONS: readonly CtaAction[] = [
  { kind: "quote", label: "Request a Free Quote" },
  { kind: "call", label: "Call for Immediate Assistance" },
  { kind: "whatsapp", label: "Contact Us via WhatsApp" },
];

function ActionButton({ kind, label }: CtaAction) {
  const common = { size: "lg", className: "w-full" } as const;

  if (kind === "quote") {
    return (
      <Button href={BUSINESS.whatsappQuoteHref} {...common}>
        {label}
      </Button>
    );
  }
  if (kind === "call") {
    return (
      <Button href={BUSINESS.phoneHref} variant="outline-light" {...common}>
        <Phone className="size-5" strokeWidth={1.75} aria-hidden="true" />
        {label}
      </Button>
    );
  }
  if (kind === "email") {
    return (
      <Button href={BUSINESS.emailHref} variant="outline-light" {...common}>
        <Mail className="size-5" strokeWidth={1.75} aria-hidden="true" />
        {label}
      </Button>
    );
  }
  return (
    <Button href={BUSINESS.whatsappQuoteHref} variant="whatsapp" {...common}>
      <WhatsAppIcon className="size-5" />
      {label}
    </Button>
  );
}

export function FinalCta({
  id,
  title,
  extraLine,
  boxTitle = "Contact Us Today",
  actions = DEFAULT_ACTIONS,
  footnote = "Serving Customers Across Dubai and the UAE",
  children,
}: {
  id: string;
  title: string;
  extraLine?: string;
  /** Heading of the contact box. Pages can set their own wording. */
  boxTitle?: string;
  /** Buttons in the contact box. Defaults to quote, call and WhatsApp. */
  actions?: readonly CtaAction[];
  /** Line under the buttons. */
  footnote?: string;
  children: ReactNode;
}) {
  return (
    <Section tone="dark" labelledBy={id}>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <h2 id={id}>{title}</h2>
          <div className="rich mt-5 text-white/85">{children}</div>
        </div>
        <div className="rounded-card border border-white/15 p-6 lg:p-8">
          <h3 className="text-2xl">{boxTitle}</h3>
          <ul className="mt-6 grid gap-3">
            {actions.map((a) => (
              <li key={a.kind}>
                <ActionButton {...a} />
              </li>
            ))}
          </ul>
          <p className="mt-6 text-white/75">{footnote}</p>
          {extraLine && <p className="mt-2 text-white/75">{extraLine}</p>}
        </div>
      </div>
    </Section>
  );
}
