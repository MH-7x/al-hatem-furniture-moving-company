import Link from "next/link";
import { Shell } from "@/components/Shell";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/Section";
import { SiteImage } from "@/components/SiteImage";
import { CardGrid, ImageCard, ServiceCard } from "@/components/Cards";
import { OpenCallBox } from "@/components/CallBox";
import { QuoteForm } from "@/components/QuoteForm";
import { FinalCta } from "@/components/FinalCta";
import { BUSINESS, SERVICE_LINKS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { abs, pageSchema } from "@/lib/schema";

const PATH = "/services/";
const TITLE = "Moving and Packing Services in Dubai | Al Hatem Movers";
const DESCRIPTION =
  "Get moving and packing services in Dubai from Al Hatem Movers: home, apartment, villa, office, storage and cargo moving solutions.";
const IMAGE = "/images/services/moving-and-packing-services-dubai.webp";
const IMAGE_ALT = "Movers and packers in Dubai preparing household furniture for a move";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: IMAGE,
  imageAlt: IMAGE_ALT,
});

const schema = pageSchema({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  image: IMAGE,
  imageAlt: IMAGE_ALT,
  pageType: "CollectionPage",
  crumbs: [["Services", PATH]],
  webPageExtra: {
    mainEntity: {
      "@type": "ItemList",
      itemListElement: SERVICE_LINKS.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.label,
        url: abs(s.href),
      })),
    },
  },
});

export default function ServicesPage() {
  return (
    <Shell>
      <JsonLd data={schema} />

      <PageHeader
        breadcrumb={[["Home", "/"], ["Services"]]}
        title="Professional Moving and Packing Services in Dubai"
        image={
          <SiteImage
            src={IMAGE}
            alt={IMAGE_ALT}
            ratio="1:1"
            priority
            className="mx-auto max-w-lg"
            sizes="(min-width: 1024px) 32rem, 100vw"
          />
        }
        actions={
          <Button href={BUSINESS.whatsappQuoteHref} size="lg">
            Get a Free Moving Quote
          </Button>
        }
      >
        <p>
          Relocating in Dubai doesn’t have to be complicated.{" "}
          <Link href="/">Al Hatem Furniture Moving Company</Link> offers complete professional
          moving services under one roof, from home and apartment relocations to villa moves,
          office shifts, furniture transportation, packing, storage, and cargo solutions across
          Dubai and the UAE.
        </p>
        <p>
          With over 12 years of experience and more than 12,000 successful moves, we help families
          and businesses move safely, efficiently, and with minimal stress.
        </p>
        <div className="pt-2">
          <OpenCallBox tone="light" />
        </div>
      </PageHeader>

      <Section labelledBy="services-trust-title">
        <SectionHeading id="services-trust-title" title="Why Customers Trust Al Hatem Movers" />
        <ul className="check-list grid gap-x-8 gap-y-4 font-semibold text-black md:grid-cols-2">
          <li>12+ Years of Professional Moving Experience (Since 2014)</li>
          <li>12,000+ Successful Relocations Completed</li>
          <li>Fully Licensed & Insured Services</li>
          <li>Expert Teams for Residential & Commercial Moves</li>
          <li>Transparent Pricing with No Hidden Fees</li>
          <li>Flexible Scheduling Including Same-Day Options</li>
          <li>Comprehensive Services Under One Roof</li>
          <li>Dedicated Support Before, During & After Your Move</li>
        </ul>
      </Section>

      <Section tone="neutral" labelledBy="services-residential-title">
        <SectionHeading
          id="services-residential-title"
          eyebrow="Our services"
          title="Residential Moving Services"
          intro={
            <p>
              Moving to a new home requires planning, coordination, and reliable support. We provide
              residential moving services for families, homeowners, and tenants relocating within
              Dubai and other UAE cities.
            </p>
          }
        />
        <CardGrid cols={3}>
          <ImageCard
            image="/images/services/home-movers-dubai-card.webp"
            alt="Home movers in Dubai lifting a wrapped sofa through a front door"
            title="Home Movers in Dubai"
            ratio="1:1"
            href="/home-movers-and-packers-in-dubai/"
            linkText="Read More: Home Movers in Dubai"
          >
            <p>
              Our home moving service is designed for complete household relocations, helping
              families move their belongings to a new property with less stress and fewer
              disruptions
            </p>
          </ImageCard>
          <ImageCard
            image="/images/services/apartment-movers-dubai-card.webp"
            alt="Apartment movers loading furniture from a residential building"
            title="Apartment Movers in Dubai"
            ratio="1:1"
            href="/apartment-movers-in-dubai/"
            linkText="Read More: Apartment Movers in Dubai"
          >
            <p>
              Apartment moves often involve elevators, building regulations, parking access, and
              limited loading areas. Our apartment moving service helps residents relocate smoothly
              within Dubai.
            </p>
          </ImageCard>
          <ImageCard
            image="/images/services/villa-movers-dubai-card.webp"
            alt="Villa movers loading furniture from a Dubai villa"
            title="Villa Movers in Dubai"
            ratio="1:1"
            href="/villa-movers-in-dubai/"
            linkText="Read More: Villa Movers in Dubai"
          >
            <p>
              Villa relocations typically involve larger properties, more furniture, and additional
              planning. Our villa moving service supports families relocating to or from villas
              across Dubai.
            </p>
          </ImageCard>
        </CardGrid>
      </Section>

      <Section labelledBy="services-commercial-title">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="services-commercial-title">Commercial Moving Services</h2>
            <p className="mt-5">
              Businesses need moving solutions that help minimize downtime and keep operations
              running smoothly. Our commercial moving services support office relocations and
              business moves throughout Dubai.
            </p>
          </div>
          <ServiceCard
            title="Office Movers in Dubai"
            href="/office-movers-in-dubai/"
            linkText="Read More: Office Movers in Dubai"
          >
            <p>
              We assist businesses with office relocations, workstation moves, furniture
              transfers, and workplace transitions across Dubai’s major business districts.
            </p>
          </ServiceCard>
        </div>
      </Section>

      <Section tone="neutral" labelledBy="services-furniture-title">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="services-furniture-title">Furniture Moving Services</h2>
            <p className="mt-5">
              Not every customer needs a complete relocation service. Many simply need help
              transporting furniture from one location to another.
            </p>
          </div>
          <ServiceCard
            title="Furniture Movers in Dubai"
            href="/furniture-movers-in-dubai/"
            linkText="Read More: Furniture Movers in Dubai"
          >
            <p>
              We move sofas, beds, wardrobes, dining tables, office furniture, and other large
              items for residential and commercial customers throughout Dubai.
            </p>
          </ServiceCard>
        </div>
      </Section>

      <Section labelledBy="services-additional-title">
        <SectionHeading
          id="services-additional-title"
          eyebrow="Our services"
          title="Additional Moving & Support Services"
          intro={
            <p>
              We also provide supporting services that can make the moving process easier and more
              convenient.
            </p>
          }
        />
        <CardGrid cols={3}>
          <ImageCard
            image="/images/services/packing-unpacking-services-card.webp"
            alt="Packers preparing boxes for packing and unpacking services"
            title="Packing & Unpacking Services"
            ratio="1:1"
            href="/packing-and-unpacking-services-in-dubai/"
            linkText="Read More: Packing & Unpacking Services"
          >
            <p>
              Save time and reduce moving stress with professional packing and unpacking assistance
              for homes, apartments, villas, and offices.
            </p>
          </ImageCard>
          <ImageCard
            image="/images/services/storage-solutions-dubai-card.webp"
            alt="Mover organising furniture and boxes in a storage facility"
            title="Storage Solutions"
            ratio="1:1"
            href="/storage-solutions-in-dubai/"
            linkText="Read More: Storage Solutions"
          >
            <p>
              Need extra space during a relocation? We offer flexible storage options for household
              belongings, furniture, and business assets.
            </p>
          </ImageCard>
          <ImageCard
            image="/images/services/cargo-services-dubai-card.webp"
            alt="Movers loading packed cargo for delivery across the UAE"
            title="Cargo Services"
            ratio="1:1"
            href="/cargo-services-in-dubai/"
            linkText="Read More: Cargo Services"
          >
            <p>
              Our cargo services provide dependable transportation solutions for personal
              belongings, commercial goods, furniture, and other items across the UAE.
            </p>
          </ImageCard>
        </CardGrid>
      </Section>

      <Section tone="neutral" labelledBy="services-areas-title">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="self-start rounded-card bg-white p-6 shadow-[0_20px_50px_-25px_rgb(0_0_0/0.25)] lg:p-8">
            <p className="mb-5 text-xl font-bold text-black">Get a free moving quote</p>
            <QuoteForm idPrefix="services" />
          </div>
          <div>
            <h2 id="services-areas-title">Areas We Serve Across the UAE</h2>
            <div className="rich mt-5">
              <p>Al Hatem Movers proudly serves customers throughout:</p>
              <p className="text-xl font-bold leading-snug text-black">
                Dubai. Abu Dhabi. Sharjah. Ajman. Al Ain. Ras Al Khaimah. Fujairah. Umm Al Quwain.
              </p>
              <p>
                Whether you’re moving locally or relocating to another emirate, our team can help
                with a solution that fits your needs.
              </p>
            </div>
            <div className="mt-8">
              <OpenCallBox tone="light" />
            </div>
          </div>
        </div>
      </Section>

      <FinalCta id="services-final-title" title="Get Your Free Moving Quote Today">
        <p>Looking for reliable movers in Dubai?</p>
        <p>
          Whether you need home movers, apartment movers, villa movers, office movers, furniture
          movers, storage solutions, or cargo services, Al Hatem Movers is ready to assist.
        </p>
        <p>
          <Link href="/contacts/">Contact our team</Link> today to discuss your requirements and
          receive a personalized moving quotation.
        </p>
        <p>
          Let Al Hatem Movers help make your next move simple, organized, and stress-free.
        </p>
      </FinalCta>
    </Shell>
  );
}
