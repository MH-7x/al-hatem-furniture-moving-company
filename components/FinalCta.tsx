import type { ReactNode } from "react";
import { Mail, Phone } from "lucide-react";
import { Button } from "./Button";
import { Section } from "./Section";
import { WhatsAppIcon } from "./icons";
import { BUSINESS } from "@/lib/constants";

export function FinalCta({
  id,
  title,
  extraLine,
  children,
}: {
  id: string;
  title: string;
  extraLine?: string;
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
          <h3 className="text-2xl">Contact Us Today</h3>
          <ul className="mt-6 grid gap-3">
            <li>
              <Button
                href={BUSINESS.whatsappQuoteHref}
                size="lg"
                className="w-full"
              >
                Request a Free Quote
              </Button>
            </li>
            <li>
              <Button
                href={BUSINESS.phoneHref}
                variant="outline-light"
                size="lg"
                className="w-full"
              >
                <Phone
                  className="size-5"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                Call for Immediate Assistance
              </Button>
            </li>
            <li>
              <Button
                href={BUSINESS.whatsappQuoteHref}
                variant="whatsapp"
                size="lg"
                className="w-full"
              >
                <WhatsAppIcon className="size-5" />
                Contact Us via WhatsApp
              </Button>
            </li>
          </ul>
          <p className="mt-6 text-white/75">
            Serving Customers Across Dubai and the UAE
          </p>
          {extraLine && <p className="mt-2 text-white/75">{extraLine}</p>}
        </div>
      </div>
    </Section>
  );
}
