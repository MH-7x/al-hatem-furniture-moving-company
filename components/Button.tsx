import Link from "next/link";
import type { ReactNode } from "react";

type Variant =
  | "primary"
  | "secondary"
  | "neutral"
  | "whatsapp"
  | "dark"
  | "outline-light";

type Props = {
  href: string;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  ariaLabel,
}: Props) {
  const cls = `btn btn-${variant} ${size === "md" ? "" : `btn-${size}`} ${className}`.trim();

  if (/^https?:/.test(href)) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener" aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  if (/^(tel:|mailto:)/.test(href)) {
    return (
      <a href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
