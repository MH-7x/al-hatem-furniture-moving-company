import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteImage } from "./SiteImage";

export function CardGrid({
  cols = 3,
  children,
  className = "",
}: {
  cols?: 2 | 3 | 4;
  children: ReactNode;
  className?: string;
}) {
  const map = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  } as const;
  return (
    <div className={`grid gap-6 ${map[cols]} ${className}`.trim()}>
      {children}
    </div>
  );
}

export function IconTile({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="mb-5 grid size-12 place-items-center rounded-btn bg-primary text-black">
      <Icon className="size-6" strokeWidth={1.6} aria-hidden="true" />
    </span>
  );
}

type FeatureProps = {
  title: string;
  icon?: LucideIcon;
  children: ReactNode;
  className?: string;
  headingLevel?: "h3" | "h4";
};

export function FeatureCard({
  title,
  icon,
  children,
  className = "",
  headingLevel: H = "h3",
}: FeatureProps) {
  return (
    <div
      className={`fcard h-full rounded-card border border-line p-6 lg:p-8 ${className}`.trim()}
    >
      {icon && <IconTile icon={icon} />}
      <H className="text-xl">{title}</H>
      <div className="rich mt-3">{children}</div>
    </div>
  );
}

const linkCls =
  "inline-flex min-h-11 items-center gap-2 font-bold text-black underline decoration-primary decoration-[3px] underline-offset-[6px] hover:bg-primary hover:no-underline";

type ServiceProps = FeatureProps & { href: string; linkText: string };

export function ServiceCard({
  title,
  icon,
  children,
  href,
  linkText,
}: ServiceProps) {
  return (
    <div className="flex h-full flex-col rounded-card border border-line bg-white p-6 transition-shadow hover:shadow-lg lg:p-8">
      {icon && <IconTile icon={icon} />}
      <h3 className="text-xl">{title}</h3>
      <div className="rich mt-3 flex-1">{children}</div>
      <Link href={href} className={`mt-6 ${linkCls}`}>
        {linkText}
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  );
}

type ImageCardProps = {
  image: string;
  alt: string;
  title: string;
  children?: ReactNode;
  href?: string;
  linkText?: string;
  ratio?: string;
  number?: string;
  headingLevel?: "h3" | "h4";
};

export function ImageCard({
  image,
  alt,
  title,
  children,
  href,
  linkText,
  ratio = "3:2",
  number,
  headingLevel: H = "h3",
}: ImageCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card border border-line bg-white">
      <div className="relative">
        <SiteImage
          src={image}
          alt={alt}
          ratio={ratio}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="rounded-b-none"
        />
        {number && (
          <span
            aria-hidden="true"
            className="absolute left-4 top-4 grid size-11 place-items-center rounded-btn bg-primary text-lg font-extrabold text-black shadow"
          >
            {number}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <H className="text-xl">{title}</H>
        {children && <div className="rich mt-3 flex-1">{children}</div>}
        {href && linkText && (
          <Link href={href} className={`mt-5 ${linkCls}`}>
            {linkText}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        )}
      </div>
    </article>
  );
}

export const AreaCard = ImageCard;

export function NumberedItem({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <li className="flex gap-5 rounded-card border border-line bg-white p-6 lg:p-8">
      <span
        aria-hidden="true"
        className="grid size-14 shrink-0 place-items-center rounded-btn bg-primary text-xl font-extrabold text-black"
      >
        {number}
      </span>
      <div className="min-w-0">
        <h3 className="text-xl">{title}</h3>
        <div className="rich mt-3">{children}</div>
      </div>
    </li>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <aside className="rich rounded-card border-primary bg-white p-6 lg:p-8">
      {children}
    </aside>
  );
}

export function ChipList({ children }: { children: ReactNode }) {
  return <ul className="flex flex-wrap gap-3">{children}</ul>;
}

export function ChipLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="inline-flex min-h-11 items-center rounded-full border border-line bg-white px-5 font-semibold text-black hover:border-primary hover:bg-primary"
      >
        {children}
      </Link>
    </li>
  );
}
