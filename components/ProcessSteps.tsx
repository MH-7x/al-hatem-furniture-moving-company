import type { ReactNode } from "react";

export function ProcessList({ children }: { children: ReactNode }) {
  return <ol className="grid">{children}</ol>;
}

export function Step({
  step,
  title,
  children,
}: {
  step: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <li className="grid grid-cols-[4.5rem_1fr] gap-4 border-t border-white/15 py-6 first:border-t-0 first:pt-0">
      <span className="text-sm font-bold uppercase tracking-widest text-primary">
        {step}
      </span>
      <div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="mt-1 text-white/75">{children}</p>
      </div>
    </li>
  );
}

export function ProcessStrip({ children }: { children: ReactNode }) {
  return (
    <ol className="grid gap-0 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
      {children}
    </ol>
  );
}

export function StripStep({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <li className="relative border-t border-white/15 py-8 sm:pr-6 lg:border-l lg:border-t-0 lg:px-6 lg:py-2 lg:first:border-l-0 lg:first:pl-0">
      <span
        aria-hidden="true"
        className="text-5xl font-extrabold leading-none tracking-tight text-primary"
      >
        {number}
      </span>
      <h3 className="mt-4 text-lg lg:text-xl">{title}</h3>
      <p className="mt-2 text-white/75">{children}</p>
    </li>
  );
}
