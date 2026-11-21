import type { ReactNode } from "react";

type Props = {
  id?: string;
  labelledBy?: string;
  tone?: "white" | "neutral" | "dark";
  children: ReactNode;
  className?: string;
  tight?: boolean;
};

const tones = {
  white: "bg-white tone-white",
  neutral: "bg-neutral",
  dark: "bg-dark text-white on-dark",
};

export function Section({
  id,
  labelledBy,
  tone = "white",
  children,
  className = "",
  tight = false,
}: Props) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`${tones[tone]} ${tight ? "py-12 lg:py-16" : "section-y"} ${className}`.trim()}
    >
      <div className="wrap">{children}</div>
    </section>
  );
}

type HeadingProps = {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = "left",
  action,
  className = "",
}: HeadingProps) {
  const center = align === "center";
  return (
    <div
      className={`mb-10 flex flex-col gap-6 lg:mb-14 ${
        action ? "lg:flex-row lg:items-end lg:justify-between" : ""
      } ${className}`.trim()}
    >
      <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-5xl"}>
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h2 id={id}>{title}</h2>
        {intro && <div className="rich mt-4 text-[1.0625rem]">{intro}</div>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
