import type { ReactNode } from "react";
import { Shell } from "./Shell";
import { JsonLd } from "./JsonLd";
import { Button } from "./Button";
import { PageHeader } from "./PageHeader";
import { Section, SectionHeading } from "./Section";
import { SiteImage } from "./SiteImage";
import { ContactStrip } from "./Article";
import { Callout, ChipList } from "./Cards";
import { Faqs } from "./Faq";
import { ReviewsSection } from "./Blocks";
import { BUSINESS } from "@/lib/constants";

type Props = {
  schema: unknown;
  crumbLabel: string;
  title: string;
  heroImage: { src: string; alt: string; ratio?: string };
  intro: ReactNode;
  faqId: string;
  faqTitle: string;
  faqs: readonly (readonly [string, string])[];
  nearby: ReactNode;
  closing?: ReactNode;
  faqNote?: ReactNode;
  after?: ReactNode;
  reviews?: boolean;
  children: ReactNode;
};

export function LocationLayout({
  schema,
  crumbLabel,
  title,
  heroImage,
  intro,
  faqId,
  faqTitle,
  faqs,
  nearby,
  closing,
  faqNote,
  after,
  reviews,
  children,
}: Props) {
  const wide = heroImage.ratio === "8:3";

  return (
    <Shell>
      <JsonLd data={schema} />

      <PageHeader
        variant="immersive"
        breadcrumb={[["Home", "/"], ["Areas We Serve", "/areas-we-serve/"], [crumbLabel]]}
        title={title}
        image={
          wide ? undefined : (
            <SiteImage
              src={heroImage.src}
              alt={heroImage.alt}
              ratio={heroImage.ratio ?? "3:2"}
              priority
              className="mx-auto w-full max-w-xl lg:max-w-none"
            />
          )
        }
        banner={
          wide ? (
            <SiteImage
              src={heroImage.src}
              alt={heroImage.alt}
              ratio={heroImage.ratio!}
              priority
              sizes="(min-width: 1248px) 1200px, 100vw"
              className="shadow-[0_20px_50px_-24px_rgb(0_0_0/0.35)]"
            />
          ) : undefined
        }
        actions={
          <>
            <Button href={BUSINESS.whatsappQuoteHref} size="lg">
              Get a Free Moving Quote
            </Button>
            <Button href={BUSINESS.phoneHref} variant="secondary" size="lg">
              Call Now
            </Button>
          </>
        }
      >
        {intro}
      </PageHeader>

      {children}

      <Section tone="neutral" labelledBy={faqId}>
        <SectionHeading id={faqId} title={faqTitle} align="center" />
        <Faqs items={faqs} />
        {faqNote && <div className="rich mx-auto mt-8 max-w-4xl">{faqNote}</div>}
        <div className="mx-auto mt-14 max-w-4xl">
          <h3 className="mb-5">Nearby Areas We Serve</h3>
          <ChipList>{nearby}</ChipList>
        </div>
        {closing && (
          <div className="mx-auto mt-10 max-w-4xl">
            <Callout>{closing}</Callout>
          </div>
        )}
      </Section>

      {after}

      {reviews && (
        <ReviewsSection id={`${faqId}-reviews`} title="What Our Customers Say" />
      )}

      <ContactStrip />
      <div className="pb-8" />
    </Shell>
  );
}

export function Banner({ src, alt, ratio = "8:3" }: { src: string; alt: string; ratio?: string }) {
  return <SiteImage src={src} alt={alt} ratio={ratio} sizes="(min-width: 1248px) 1200px, 100vw" />;
}
