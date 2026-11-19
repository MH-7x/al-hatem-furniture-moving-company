import { Children, Fragment, cloneElement, isValidElement } from "react";
import type { ReactNode } from "react";
import { Mail, Phone } from "lucide-react";
import { Section } from "./Section";
import { WhatsAppIcon } from "./icons";
import { Callout } from "./Cards";
import { BUSINESS } from "@/lib/constants";

type Props = {
  id: string;
  title: ReactNode;
  tone?: "white" | "neutral";
  banner?: ReactNode;
  children: ReactNode;
};

/** Flatten fragments/arrays and drop whitespace-only text so we can inspect real nodes. */
function flatten(children: ReactNode): ReactNode[] {
  const out: ReactNode[] = [];
  Children.toArray(children).forEach((n) => {
    if (isValidElement(n) && n.type === Fragment) {
      out.push(...flatten((n.props as { children?: ReactNode }).children));
    } else if (typeof n === "string" && !n.trim()) {
      // skip
    } else {
      out.push(n);
    }
  });
  return out;
}

const isH3 = (n: ReactNode) => isValidElement(n) && n.type === "h3";
const isCallout = (n: ReactNode) => isValidElement(n) && n.type === Callout;

/** Plain bullet lists become the same check-lists used on the home page. */
function decorate(n: ReactNode, key: number): ReactNode {
  if (isValidElement<{ className?: string }>(n) && n.type === "ul" && !n.props.className) {
    return cloneElement(n, { key, className: "check-list grid gap-3" });
  }
  return isValidElement(n) ? cloneElement(n, { key }) : n;
}

export function ArticleSection({ id, title, tone = "white", banner, children }: Props) {
  const nodes = flatten(children);
  const firstH3 = nodes.findIndex(isH3);
  const h3Count = nodes.filter(isH3).length;

  // Sections with a single block of prose keep the classic heading + text layout.
  if (h3Count < 2) {
    return (
      <Section tone={tone} labelledBy={id}>
        {banner && <div className="mb-10 lg:mb-14">{banner}</div>}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <h2
            id={id}
            className="text-[1.5rem] leading-tight lg:sticky lg:top-28 lg:self-start lg:text-[1.875rem]"
          >
            {title}
          </h2>
          <div className="rich min-w-0 max-w-[46rem]">{nodes.map(decorate)}</div>
        </div>
      </Section>
    );
  }

  const lead = nodes.slice(0, firstH3);
  const rest = nodes.slice(firstH3);

  // Split the remainder into cards, one per h3.
  const groups: ReactNode[][] = [];
  rest.forEach((n) => {
    if (isH3(n)) groups.push([n]);
    else groups[groups.length - 1].push(n);
  });

  // Trailing callouts span the full width under the cards.
  const trailing: ReactNode[] = [];
  const lastGroup = groups[groups.length - 1];
  while (lastGroup.length > 1 && isCallout(lastGroup[lastGroup.length - 1])) {
    trailing.unshift(lastGroup.pop());
  }

  const lg = groups.length === 3 || groups.length >= 5 ? "lg:grid-cols-3" : "";
  const heading = (
    <div className="min-w-0">
      <h2 id={id} className="max-w-3xl">
        {title}
      </h2>
      {lead.length > 0 && (
        <div className="rich mt-5 max-w-3xl text-[1.0625rem] lg:text-lg">
          {lead.map(decorate)}
        </div>
      )}
    </div>
  );

  return (
    <Section tone={tone} labelledBy={id}>
      {banner ? (
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          {heading}
          {banner}
        </div>
      ) : (
        heading
      )}

      <div className={`mt-10 grid items-start gap-5 md:grid-cols-2 lg:mt-12 lg:gap-6 ${lg}`.trim()}>
        {groups.map((g, i) => {
          const [head, ...body] = g;
          return (
            <article key={i} className="fcard min-w-0 rounded-card border border-line p-6 lg:p-8">
              <span
                aria-hidden="true"
                className="mb-4 block h-1 w-10 rounded-full bg-primary"
              />
              {head}
              <div className="rich mt-3">{body.map(decorate)}</div>
            </article>
          );
        })}
      </div>

      {trailing.length > 0 && (
        <div className="mt-6 grid gap-5">{trailing.map(decorate)}</div>
      )}
    </Section>
  );
}

export function ContactStrip({ lead }: { lead?: string }) {
  const cell = "flex flex-col gap-1 p-6 lg:p-7";
  const label = "text-sm font-semibold text-white/70";
  const link = "text-lg font-bold text-primary hover:underline";
  return (
    <div className="wrap py-6">
      <div className="on-dark overflow-hidden rounded-card bg-dark text-white">
        {lead && (
          <p className="border-b border-white/15 px-6 py-4 text-lg font-bold text-white lg:px-7">
            {lead}
          </p>
        )}
        <div className="grid divide-white/15 md:grid-cols-3 md:divide-x">
          <div className={cell}>
            <span className={label}>
              <Phone className="mr-2 inline size-4 text-primary" strokeWidth={1.75} aria-hidden="true" />
              Call Us Now
            </span>
            <a href={BUSINESS.phoneHref} className={link}>
              {BUSINESS.phoneDisplay}
            </a>
          </div>
          <div className={`${cell} border-t border-white/15 md:border-t-0`}>
            <span className={label}>
              <WhatsAppIcon className="mr-2 inline size-4 text-primary" />
              Whatsapp Here
            </span>
            <a href={BUSINESS.whatsappQuoteHref} target="_blank" rel="noopener" className={link}>
              {BUSINESS.phoneDisplay}
            </a>
          </div>
          <div className={`${cell} border-t border-white/15 md:border-t-0`}>
            <span className={label}>
              <Mail className="mr-2 inline size-4 text-primary" strokeWidth={1.75} aria-hidden="true" />
              Send Your Email At
            </span>
            <a href={BUSINESS.emailHref} className={`${link} text-[0.9375rem] [overflow-wrap:anywhere]`}>
              {BUSINESS.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
