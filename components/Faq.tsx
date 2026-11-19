import type { ReactNode } from "react";
import { Plus } from "lucide-react";

export function Faq({ question, children }: { question: string; children: ReactNode }) {
  return (
    <details className="faq rounded-card border border-line bg-white">
      <summary className="flex items-center justify-between gap-4 p-5 lg:px-7 lg:py-6">
        <h3 className="text-lg lg:text-xl">{question}</h3>
        <span className="faq-icon grid size-9 shrink-0 place-items-center rounded-full bg-primary text-black">
          <Plus className="size-5" aria-hidden="true" />
        </span>
      </summary>
      <div className="rich px-5 pb-6 lg:px-7">{children}</div>
    </details>
  );
}

export function FaqList({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-4xl space-y-3">{children}</div>;
}

export function Faqs({ items }: { items: readonly (readonly [string, string])[] }) {
  return (
    <FaqList>
      {items.map(([q, a]) => (
        <Faq key={q} question={q}>
          <p>{a}</p>
        </Faq>
      ))}
    </FaqList>
  );
}
