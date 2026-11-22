import type { ReactNode } from "react";
import { Section, SectionHeading } from "./Section";
import { CardGrid, ChipList } from "./Cards";
import { Faqs } from "./Faq";
import { ProcessStrip } from "./ProcessSteps";
import { RatingLine } from "./ReviewCard";
import { ReviewsWidget } from "./ReviewsWidget";
import { SiteImage } from "./SiteImage";
import { BUSINESS, REVIEW_COUNT } from "@/lib/constants";

type Tone = "white" | "neutral";

export function TrustBar({
  id,
  title,
  cols = 3,
  action,
  children,
}: {
  id: string;
  title: string;
  cols?: 2 | 3 | 4;
  action?: ReactNode;
  children: ReactNode;
}) {
  const grid = {
    2: "md:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  } as const;
  return (
    <Section labelledBy={id} tight>
      <SectionHeading id={id} title={title} action={action} className="mb-8 lg:mb-10" />
      <ul className={`check-list grid gap-x-8 gap-y-4 font-semibold text-black ${grid[cols]}`}>
        {children}
      </ul>
    </Section>
  );
}

type CardsProps = {
  id: string;
  title: ReactNode;
  eyebrow?: string;
  intro?: ReactNode;
  tone?: Tone;
  cols?: 2 | 3 | 4;
  cta?: ReactNode;
  action?: ReactNode;
  after?: ReactNode;
  children: ReactNode;
};

export function CardsSection({
  id,
  title,
  eyebrow,
  intro,
  tone = "white",
  cols = 3,
  cta,
  action,
  after,
  children,
}: CardsProps) {
  return (
    <Section tone={tone} labelledBy={id}>
      <SectionHeading id={id} eyebrow={eyebrow} title={title} intro={intro} action={action} />
      <CardGrid cols={cols}>{children}</CardGrid>
      {cta && <div className="mt-10 text-center">{cta}</div>}
      {after && <div className="mt-10">{after}</div>}
    </Section>
  );
}

export function ProcessSection({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <Section tone="dark" labelledBy={id}>
      <SectionHeading
        id={id}
        title={title}
        intro={intro ? <div className="text-white/80">{intro}</div> : undefined}
      />
      <ProcessStrip>{children}</ProcessStrip>
    </Section>
  );
}

export function FaqSection({
  id,
  title = "FAQs",
  tone = "neutral",
  items,
}: {
  id: string;
  title?: string;
  tone?: Tone;
  items: readonly (readonly [string, string])[];
}) {
  return (
    <Section tone={tone} labelledBy={id}>
      <SectionHeading id={id} title={title} align="center" />
      <Faqs items={items} />
    </Section>
  );
}

export function ReviewsSection({
  id,
  title,
  eyebrow = "Testimonials",
  intro,
  tone = "white",
  subheads,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  intro?: ReactNode;
  tone?: Tone;
  subheads?: ReactNode;
}) {
  return (
    <Section tone={tone} labelledBy={id}>
      <SectionHeading id={id} eyebrow={eyebrow} title={title} intro={intro} />
      {subheads && <div className="mb-10 grid gap-8 md:grid-cols-2">{subheads}</div>}
      <ReviewsWidget />
      <div className={`mt-10 rounded-card p-6 lg:p-8 ${tone === "white" ? "bg-neutral" : "bg-white"}`}>
        <RatingLine>
          Rated 5.0 out of 5 on Google from {REVIEW_COUNT} reviews.{" "}
          <a
            href={BUSINESS.reviewsHref}
            target="_blank"
            rel="noopener"
            className="underline decoration-primary decoration-[3px] underline-offset-4 hover:bg-primary"
          >
            Read all reviews on Google
          </a>
        </RatingLine>
      </div>
    </Section>
  );
}

export function SubHead({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3>{title}</h3>
      <p className="mt-3">{children}</p>
    </div>
  );
}

export function TipsSection({
  id,
  title,
  intro,
  tone = "white",
  children,
}: {
  id: string;
  title: string;
  intro?: ReactNode;
  tone?: Tone;
  children: ReactNode;
}) {
  return (
    <Section tone={tone} labelledBy={id}>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id={id}>{title}</h2>
          {intro && <div className="rich mt-5">{intro}</div>}
        </div>
        <div className="divide-y divide-line">{children}</div>
      </div>
    </Section>
  );
}

export function Tip({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="py-7 first:pt-0 last:pb-0">
      <h3>{title}</h3>
      <div className="rich mt-3">{children}</div>
    </div>
  );
}

export function ProjectGallery({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{children}</div>;
}

export function ProjectImages() {
  const sizes = "(min-width: 1024px) 25vw, 50vw";
  return (
    <ProjectGallery>
      <SiteImage
        src="/images/global/project-apartment-move-dubai.webp"
        alt="Completed apartment move with wrapped furniture ready for delivery"
        ratio="4:3"
        sizes={sizes}
      />
      <SiteImage
        src="/images/global/project-villa-relocation-dubai.webp"
        alt="Villa relocation with movers loading furniture into the truck"
        ratio="4:3"
        sizes={sizes}
      />
      <SiteImage
        src="/images/global/project-office-move-dubai.webp"
        alt="Office move with desks and equipment packed for transport"
        ratio="4:3"
        sizes={sizes}
      />
      <SiteImage
        src="/images/global/project-truck-loaded-dubai.webp"
        alt="Moving truck loaded and secured after a completed move"
        ratio="4:3"
        sizes={sizes}
      />
    </ProjectGallery>
  );
}

export function ExploreMore({ id, children }: { id: string; children: ReactNode }) {
  return (
    <Section labelledBy={id} tight>
      <h3 id={id} className="mb-5">
        Explore More
      </h3>
      <ChipList>{children}</ChipList>
    </Section>
  );
}

export function CostFactors({
  title,
  intro,
  items,
  children,
}: {
  title: string;
  intro?: ReactNode;
  items: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="mt-6 rounded-card border-2 border-black bg-white p-6 lg:p-10">
      <h3>{title}</h3>
      <div className="rich mt-4">
        {intro}
        <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">{items}</ul>
        {children}
      </div>
    </div>
  );
}
