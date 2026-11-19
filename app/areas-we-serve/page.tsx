import Link from "next/link";
import { MapPin } from "lucide-react";
import { Shell } from "@/components/Shell";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { SiteImage } from "@/components/SiteImage";
import { Section, SectionHeading } from "@/components/Section";
import { Callout, CardGrid, ChipLink, ChipList, FeatureCard, ServiceCard } from "@/components/Cards";
import { Faqs } from "@/components/Faq";
import { BUSINESS, DUBAI_AREA_LINKS, EMIRATE_LINKS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { abs, pageSchema } from "@/lib/schema";

const PATH = "/areas-we-serve/";
const TITLE = "Areas We Serve in Dubai and UAE | Al Hatem Movers";
const DESCRIPTION =
  "Al Hatem Movers moves homes, villas, apartments and offices across Dubai neighbourhoods and the other emirates. Find your area and get a free quote.";
const IMAGE = "/images/global/uae-moving-service-coverage.webp";
const IMAGE_ALT = "Moving truck on a UAE highway serving Dubai and the other emirates";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: IMAGE,
  imageAlt: IMAGE_ALT,
});

const faqs = [
  [
    "Do you cover my area?",
    "We cover the Dubai neighbourhoods and the emirates listed on this page. If your area is not listed, contact us with your pickup and drop-off locations and we will confirm whether we can help.",
  ],
  [
    "Do you move between emirates?",
    "Yes. We handle moves between Dubai, Abu Dhabi, Sharjah, Ajman, Al Ain, Ras Al Khaimah and Fujairah, including packing, loading, transport and unloading.",
  ],
  [
    "Do I need a permit or lift booking from my building?",
    "Many buildings and communities ask for a move-in or move-out permit, a lift booking or a deposit. Rules differ by building, so check with your building management or community office before moving day. Give us your building name and floor and we will plan around the access rules.",
  ],
  [
    "How do I get a quote?",
    "Call or WhatsApp +971 56 626 4074, or use our contact page. Tell us your pickup and drop-off locations, the type of property, the number of rooms and your preferred moving date.",
  ],
  [
    "What are your working hours?",
    "Our office and support team are available 24 hours a day, 7 days a week.",
  ],
  [
    "Where is your office?",
    "Our office is at Office No. 402, NH Collection Dubai The Palm, Al Naghal, Palm Jumeirah (Nakhlat Jumeira), Dubai, UAE.",
  ],
] as const;

const schema = pageSchema({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  image: IMAGE,
  imageAlt: IMAGE_ALT,
  pageType: "CollectionPage",
  crumbs: [["Areas We Serve", PATH]],
  faqs,
  webPageExtra: {
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [...DUBAI_AREA_LINKS, ...EMIRATE_LINKS].map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: a.label,
        url: abs(a.href),
      })),
    },
  },
});

export default function AreasWeServePage() {
  return (
    <Shell>
      <JsonLd data={schema} />

      <PageHeader
        variant="immersive"
        backdrop={
          <SiteImage
            src="/images/areas/movers-downtown-dubai.webp"
            alt=""
            ratio="16:9"
            priority
            sizes="100vw"
          />
        }
        breadcrumb={[["Home", "/"], ["Areas We Serve"]]}
        title="Areas We Serve in Dubai and the UAE"
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
        <p className="max-w-3xl">
          <Link href="/">Al Hatem Furniture Moving Company</Link> is based on Palm Jumeirah, Dubai,
          and provides home, villa, apartment and office moving, packing and storage across Dubai
          and the other emirates. Choose your area below to see the moving services we offer there,
          or call +971 56 626 4074 for a free quote.
        </p>
        <div className="max-w-3xl">
          <Callout>
            <p>
              <strong>Note:</strong> Cannot see your area? Send your building name, floor and date to
              +971 56 626 4074 on WhatsApp and get a written quote.
            </p>
          </Callout>
        </div>
      </PageHeader>

      <Section labelledBy="areas-dubai-title">
        <SectionHeading
          id="areas-dubai-title"
          title="Moving Services Across Dubai Neighbourhoods"
          intro={
            <p>
              Every neighbourhood has its own building rules, lift bookings and access times. These
              pages explain how we plan moves in each area.
            </p>
          }
        />
        <CardGrid cols={3}>
          <ServiceCard
            icon={MapPin}
            title="Movers and Packers in Dubai Marina"
            href="/movers-and-packers-in-dubai-marina/"
            linkText="View Dubai Marina Movers"
          >
            <p>Apartment moves, packing, furniture handling, lift bookings and building access.</p>
          </ServiceCard>
          <ServiceCard
            icon={MapPin}
            title="Movers and Packers in Business Bay"
            href="/movers-and-packers-in-business-bay/"
            linkText="View Business Bay Movers"
          >
            <p>Apartment, office, furniture and packing services with safe transport and clear quotes.</p>
          </ServiceCard>
          <ServiceCard
            icon={MapPin}
            title="Movers and Packers in Jumeirah Village Circle (JVC)"
            href="/movers-and-packers-in-jvc/"
            linkText="View JVC Movers"
          >
            <p>Apartment, villa and furniture moves with careful packing and planned access.</p>
          </ServiceCard>
          <ServiceCard
            icon={MapPin}
            title="Movers and Packers in Mirdif"
            href="/movers-and-packers-in-mirdif/"
            linkText="View Mirdif Movers"
          >
            <p>Villa, townhouse and apartment moving with careful packing and furniture protection.</p>
          </ServiceCard>
          <ServiceCard
            icon={MapPin}
            title="Movers and Packers in Dubai Hills Estate"
            href="/movers-and-packers-in-dubai-hills-estate/"
            linkText="View Dubai Hills Estate Movers"
          >
            <p>Villa and apartment relocation with furniture protection and professional packing.</p>
          </ServiceCard>
          <ServiceCard
            icon={MapPin}
            title="Movers and Packers in Downtown Dubai"
            href="/movers-and-packers-in-downtown-dubai/"
            linkText="View Downtown Dubai Movers"
          >
            <p>Apartment, office and furniture moving with planned access and safe transport.</p>
          </ServiceCard>
          <ServiceCard
            icon={MapPin}
            title="Movers and Packers in Arabian Ranches"
            href="/movers-and-packers-in-arabian-ranches/"
            linkText="View Arabian Ranches Movers"
          >
            <p>Villa relocation, furniture packing and inter-emirate moving with careful handling.</p>
          </ServiceCard>
          <ServiceCard
            icon={MapPin}
            title="Movers and Packers in Al Barsha"
            href="/movers-and-packers-in-al-barsha/"
            linkText="View Al Barsha Movers"
          >
            <p>Villa, apartment, home and office moving with furniture protection.</p>
          </ServiceCard>
          <ServiceCard
            icon={MapPin}
            title="Movers and Packers in Jumeirah"
            href="/movers-and-packers-in-jumeirah/"
            linkText="View Jumeirah Movers"
          >
            <p>Villa, home, office and commercial moving with careful packing and planned transport.</p>
          </ServiceCard>
          <ServiceCard
            icon={MapPin}
            title="Movers and Packers in Deira"
            href="/movers-and-packers-in-deira/"
            linkText="View Deira Movers"
          >
            <p>Home, apartment, shop and office relocation with careful packing and furniture protection.</p>
          </ServiceCard>
          <ServiceCard
            icon={MapPin}
            title="Movers and Packers in Al Quoz"
            href="/movers-and-packers-in-al-quoz/"
            linkText="View Al Quoz Movers"
          >
            <p>Home, office, warehouse and furniture moving with safe transport and clear quotes.</p>
          </ServiceCard>
        </CardGrid>
      </Section>

      <Section tone="neutral" labelledBy="areas-change-title">
        <SectionHeading
          id="areas-change-title"
          title="What Changes From One Dubai Neighbourhood to Another"
          intro={
            <p>
              Moving rules and access are not the same in every part of Dubai. Knowing what to
              expect before moving day helps avoid delays, so we plan each move around the building
              or community you are moving from and to.
            </p>
          }
        />
        <CardGrid cols={3}>
          <FeatureCard title="High-Rise Areas: Dubai Marina, Business Bay, Downtown Dubai and JVC">
            <p>
              Most towers have shared lifts, loading bays and set move-in and move-out times. Many
              buildings ask residents to book the service lift and the loading area in advance, and
              some ask for a permit or a refundable deposit from the building management. Parking
              for a moving truck can be limited, so we plan the truck position and the size of the
              crew with the building rules in mind.
            </p>
          </FeatureCard>
          <FeatureCard title="Villa Communities: Mirdif, Arabian Ranches, Dubai Hills Estate and Jumeirah">
            <p>
              Villa moves usually involve more rooms, larger furniture, gardens and storerooms.
              Gated communities may need a gate pass or a permit from the community office for the
              truck and the crew. Planning room by room, and packing furniture, fragile items and
              outdoor pieces properly, matters more here than in a small apartment.
            </p>
          </FeatureCard>
          <FeatureCard title="Older and Mixed Areas: Deira, Al Quoz and Al Barsha">
            <p>
              Streets can be narrower and parking tighter in older neighbourhoods, and buildings
              may have older lifts or stairs. Al Quoz also has warehouses and workshops, where
              loading access is different from a residential building. Tell us the building type
              and floor so we can plan the right crew and equipment.
            </p>
          </FeatureCard>
        </CardGrid>
        <p className="mt-8 max-w-3xl font-semibold text-black">
          Before moving day, check with your building management or community office about permits,
          lift booking and any deposit. When you ask for a quote, tell us your building name, floor
          and parking situation.
        </p>
      </Section>

      <Section labelledBy="areas-emirates-title">
        <SectionHeading
          id="areas-emirates-title"
          title="Moving Services Across the Other Emirates"
          intro={
            <p>
              Moving to or from another emirate? We handle packing, loading, transport and
              unloading for moves between emirates.
            </p>
          }
        />
        <CardGrid cols={3}>
          <ServiceCard
            icon={MapPin}
            title="Movers and Packers in Abu Dhabi"
            href="/movers-and-packers-in-abu-dhabi/"
            linkText="View Abu Dhabi Movers"
          >
            <p>Home, villa, apartment and office moving with professional packing and safe transport.</p>
          </ServiceCard>
          <ServiceCard
            icon={MapPin}
            title="Movers and Packers in Sharjah"
            href="/movers-and-packers-in-sharjah/"
            linkText="View Sharjah Movers"
          >
            <p>Home, villa, apartment, office and furniture moving with careful packing and safe transport.</p>
          </ServiceCard>
          <ServiceCard
            icon={MapPin}
            title="Movers and Packers in Ajman"
            href="/movers-and-packers-in-ajman/"
            linkText="View Ajman Movers"
          >
            <p>Home, villa, apartment and office moving with careful packing and free quotes.</p>
          </ServiceCard>
          <ServiceCard
            icon={MapPin}
            title="Movers and Packers in Al Ain"
            href="/movers-and-packers-in-al-ain/"
            linkText="View Al Ain Movers"
          >
            <p>Home, villa, apartment and office moves with safe packing and transport.</p>
          </ServiceCard>
          <ServiceCard
            icon={MapPin}
            title="Movers and Packers in Ras Al Khaimah"
            href="/movers-and-packers-in-ras-al-khaimah/"
            linkText="View Ras Al Khaimah Movers"
          >
            <p>Home, villa, apartment and office moving with professional packing and safe transport.</p>
          </ServiceCard>
          <ServiceCard
            icon={MapPin}
            title="Movers and Packers in Fujairah"
            href="/movers-and-packers-in-fujairah/"
            linkText="View Fujairah Movers"
          >
            <p>Home, villa, apartment and office moving with professional packing and safe transport.</p>
          </ServiceCard>
        </CardGrid>
      </Section>

      <Section tone="neutral" labelledBy="areas-between-title">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 id="areas-between-title">Moving Between Emirates</h2>
            <div className="rich mt-5">
              <p>
                Moves between emirates, for example from Dubai to Sharjah or Abu Dhabi, need
                planning at both ends. We look at access and parking at the pickup address and at
                the new address, and agree a time that suits both buildings. To plan the move,
                please tell us:
              </p>
              <ul className="check-list grid gap-3 font-semibold text-black">
                <li>Where you are moving from and to.</li>
                <li>The type of property and the number of rooms.</li>
                <li>Any large, heavy or fragile items.</li>
                <li>Your preferred moving date.</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 id="areas-plan-title">How We Plan a Move in Your Area</h2>
            <p className="mt-5">
              Every move starts with a conversation about your property, the access at both
              addresses and your moving date. We then give you a quote, pack and protect your
              belongings, load and transport them, and unload and place furniture where you want it
              in the new home.
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="areas-services-title" tight>
        <SectionHeading
          id="areas-services-title"
          title="Services Available in Every Area"
          intro={<p>All of our moving services are available in the areas listed above. Choose the service you need:</p>}
        />
        <ChipList>
          <ChipLink href="/home-movers-and-packers-in-dubai/">Home Movers in Dubai</ChipLink>
          <ChipLink href="/villa-movers-in-dubai/">Villa Movers in Dubai</ChipLink>
          <ChipLink href="/apartment-movers-in-dubai/">Apartment Movers in Dubai</ChipLink>
          <ChipLink href="/office-movers-in-dubai/">Office Movers in Dubai</ChipLink>
          <ChipLink href="/furniture-movers-in-dubai/">Furniture Movers in Dubai</ChipLink>
          <ChipLink href="/packing-and-unpacking-services-in-dubai/">Packing and Unpacking Services</ChipLink>
          <ChipLink href="/storage-solutions-in-dubai/">Storage Solutions in Dubai</ChipLink>
          <ChipLink href="/cargo-services-in-dubai/">Cargo Services in Dubai</ChipLink>
          <ChipLink href="/services/">View All Services</ChipLink>
        </ChipList>
      </Section>

      <Section tone="neutral" labelledBy="areas-faq-title">
        <SectionHeading
          id="areas-faq-title"
          title="Frequently Asked Questions About Our Service Areas"
          align="center"
        />
        <Faqs items={faqs} />
      </Section>

      <Section tone="dark" labelledBy="areas-cannot-title">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 id="areas-cannot-title">Cannot See Your Area?</h2>
            <p className="mt-5 text-white/85">
              If your area is not listed, contact us. Tell us your pickup and drop-off locations and
              we will confirm whether we can help and send you a quote.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href={BUSINESS.phoneHref} size="lg">
              Call +971 56 626 4074
            </Button>
            <Button href={BUSINESS.whatsappHref} variant="whatsapp" size="lg">
              WhatsApp Us
            </Button>
            <Button href="/contacts/" variant="outline-light" size="lg">
              Get a Free Quote
            </Button>
          </div>
        </div>
      </Section>

      <Section labelledBy="areas-office-title">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 id="areas-office-title">Visit Our Office on Palm Jumeirah</h2>
            <address className="mt-5 not-italic">
              <p>
                Al Hatem Furniture Moving Company, Office No. 402, NH Collection Dubai The Palm, Al
                Naghal, Palm Jumeirah (Nakhlat Jumeira), Dubai, UAE. Open 24 hours, 7 days a week.
              </p>
            </address>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={BUSINESS.mapsHref} variant="secondary" size="lg">
              Get Directions
            </Button>
            <Button href="/contacts/" variant="neutral" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </Shell>
  );
}
