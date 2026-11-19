import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumbs = readonly (readonly [label: string, href?: string])[];

export function Breadcrumb({
  items,
  dark = false,
}: {
  items: Crumbs;
  dark?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol
        className={`flex flex-wrap items-center gap-x-1 gap-y-1 text-sm ${
          dark ? "text-white/70" : "text-muted"
        }`}
      >
        {items.map(([label, href], i) => {
          const last = i === items.length - 1;
          return (
            <li key={label} className="flex items-center gap-1">
              {href && !last ? (
                <Link
                  href={href}
                  className={`inline-flex min-h-8 items-center underline-offset-4 hover:underline ${
                    dark ? "hover:text-white" : "hover:text-black"
                  }`}
                >
                  {label}
                </Link>
              ) : (
                <span
                  aria-current={last ? "page" : undefined}
                  className={dark ? "text-white" : "font-semibold text-black"}
                >
                  {label}
                </span>
              )}
              {!last && <ChevronRight className="size-4 opacity-60" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
