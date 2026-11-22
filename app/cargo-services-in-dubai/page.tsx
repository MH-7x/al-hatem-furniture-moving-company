import Link from "next/link";
import { Shell } from "@/components/Shell";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/Section";
import { SiteImage } from "@/components/SiteImage";
import { Callout, CardGrid, ChipLink, FeatureCard, ImageCard, NumberedItem } from "@/components/Cards";
import {
  CardsSection,
  CostFactors,
  ExploreMore,
  FaqSection,
  ProcessSection,
  ReviewsSection,
  SubHead,
  Tip,
  TipsSection,
  TrustBar,
} from "@/components/Blocks";
import { OpenCallBox } from "@/components/CallBox";
import { StripStep } from "@/components/ProcessSteps";
import { FinalCta } from "@/components/FinalCta";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const PATH = "/cargo-services-in-dubai/";
const TITLE = "Cargo Services in Dubai | Trusted Cargo Companies";
const DESCRIPTION =
  "Looking for cargo services in Dubai? Choose reliable cargo companies in Dubai for secure handling, timely delivery and affordable shipping solutions.";
const IMG = "/images/cargo-services-in-dubai";
const IMAGE = `${IMG}/cargo-services-dubai-hero.webp`;
const IMAGE_ALT = "Cargo moving and delivery services for homes and businesses in Dubai";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: IMAGE,
  imageAlt: IMAGE_ALT,
});

const faqs = [
  [
    "What cargo services do you offer?",
    "We provide household cargo, furniture transportation, commercial cargo, office equipment transportation, appliance delivery, and door-to-door cargo services across Dubai and the UAE.",
  ],
  [
    "Do you provide door-to-door cargo delivery?",
    "Yes. Our door-to-door cargo service includes collection, transportation, and delivery according to customer requirements.",
  ],
  [
    "Can you transport furniture?",
    "Yes. We transport sofas, beds, wardrobes, dining sets, office furniture, outdoor furniture, and other large household items.",
  ],
  [
    "Do you provide commercial cargo services?",
    "Yes. We assist businesses with transporting inventory, office equipment, workplace furniture, promotional materials, and commercial goods.",
  ],
  [
    "How much do cargo services cost in Dubai?",
    "Cargo cost from Dubai depends on route, mode, and weight or volume. Examples: Dubai to India by air from AED 12 per kg and by sea LCL from AED 6 per kg, Dubai to Muscat household furniture AED 300 per cubic metre door-to-door, and local Dubai cargo AED 250–500 per 3-ton trip. Send your route, item list, weight or volume, and delivery address for an exact written quote.",
  ],
  [
    "Which UAE locations do you serve?",
    "We provide cargo services throughout Dubai and deliver to Abu Dhabi, Sharjah, Ajman, and other locations across the UAE.",
  ],
  [
    "How quickly can cargo be delivered?",
    "Delivery timelines depend on the type of cargo, delivery location, and scheduling requirements. Specific delivery estimates can be provided during consultation.",
  ],
  [
    "Can I book cargo services for a single item?",
    "Yes. We assist with both single-item deliveries and larger cargo transportation projects.",
  ],
] as const;

const schema = pageSchema({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  image: IMAGE,
  imageAlt: IMAGE_ALT,
  crumbs: [
    ["Services", "/services/"],
    ["Cargo Services in Dubai", PATH],
  ],
  service: {
    name: "Cargo Services in Dubai",
    serviceType: "Cargo and shipping",
    description:
      "Need reliable cargo services in Dubai? Get safe cargo moving, door-to-door delivery, commercial transportation and flexible delivery options.",
    areaServed: { "@type": "City", name: "Dubai" },
  },
  faqs,
});

const quote = BUSINESS.whatsappQuoteHref;

function Challenge({ title, challenge, help }: { title: string; challenge: string; help: string }) {
  return (
    <FeatureCard title={title}>
      <p>
        <strong>Challenge:</strong>
      </p>
      <p>{challenge}</p>
      <p>
        <strong>How We Help:</strong>
      </p>
      <p>{help}</p>
    </FeatureCard>
  );
}

export default function CargoPage() {
  return (
    <Shell>
      <JsonLd data={schema} />

      <PageHeader
        breadcrumb={[["Home", "/"], ["Services", "/services/"], ["Cargo Services in Dubai"]]}
        title="Professional Cargo Services in Dubai for Safe & Reliable Delivery"
        image={<SiteImage src={IMAGE} alt={IMAGE_ALT} ratio="3:2" priority />}
        actions={
          <>
            <Button href={quote} size="lg">
              Get a Free Moving Quote
            </Button>
            <Button href={BUSINESS.phoneHref} variant="secondary" size="lg">
              Call Now
            </Button>
          </>
        }
      >
        <p>
          Transporting cargo requires more than simply moving items from one location to another.
          Whether you’re sending household belongings, furniture, office equipment, or commercial
          goods, you need a reliable cargo service in Dubai that ensures your cargo reaches its
          destination safely and on time.
        </p>
        <p>
          Al Hatem Furniture Moving Company provides professional cargo services UAE for
          homeowners, businesses, retailers, and commercial clients looking for dependable
          transportation solutions across Dubai and the UAE. From single-item deliveries to larger
          cargo requirements, our team helps customers move goods efficiently while reducing the
          stress often associated with transportation logistics.
        </p>
        <p>
          With more than 12 years of industry experience and over 12,000 successful relocations and
          deliveries completed, we provide practical cargo solutions designed around your specific
          requirements.
        </p>
        <div className="pt-2">
          <OpenCallBox tone="light" prompt="Speak With Our Packing Specialists" />
        </div>
      </PageHeader>

      <TrustBar
        id="cargo-trust-title"
        title="Trusted Cargo companies in Dubai"
        action={<Button href={quote}>Get a Free Quote</Button>}
      >
        <li>12+ Years of Moving Experience</li>
        <li>12,000+ Successful Deliveries & Relocations</li>
        <li>Door-to-Door Cargo Solutions</li>
        <li>Residential & Commercial Cargo Services</li>
        <li>Flexible Delivery Scheduling</li>
        <li>Professional Handling & Transportation</li>
      </TrustBar>

      <Section tone="neutral" labelledBy="cargo-reliable-title">
        <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SiteImage
            src={`${IMG}/reliable-cargo-services-dubai.webp`}
            alt="Reliable cargo services in Dubai with secured and labelled shipments"
            ratio="3:2"
          />
          <div>
            <h2 id="cargo-reliable-title">Reliable Cargo Services in Dubai</h2>
            <div className="rich mt-5">
              <p>
                Every cargo requirement is different. Some customers need to transport household
                belongings, while others require commercial cargo transportation, furniture
                delivery, or business equipment movement.
              </p>
              <p>
                Al Hatem Movers offers cargo transportation services that help customers move goods
                safely and efficiently while providing the flexibility needed for different types of
                deliveries.
              </p>
            </div>
          </div>
        </div>
        <CardGrid cols={3}>
          <FeatureCard title="Household Cargo Services">
            <p>
              Moving personal belongings, household goods, and everyday items can be challenging
              without suitable transportation.
            </p>
            <p>
              Our household cargo services help customers transport belongings securely between
              homes, apartments, storage locations, and other destinations across Dubai and the UAE.
            </p>
          </FeatureCard>
          <FeatureCard title="Furniture Cargo Transportation">
            <p>
              Large furniture items often require additional planning and careful handling during
              transportation.
            </p>
            <p>
              We assist with transporting sofas, beds, wardrobes, dining tables, office furniture,
              outdoor furniture, and other bulky items while helping reduce the risk of damage
              during transit.
            </p>
          </FeatureCard>
          <FeatureCard title="Commercial Cargo Solutions">
            <p>
              Businesses frequently need transportation for equipment, inventory, supplies,
              promotional materials, and workplace assets.
            </p>
            <p>
              Our commercial cargo services help companies move goods efficiently so operations can
              continue with minimal disruption.
            </p>
          </FeatureCard>
          <FeatureCard title="Door-to-Door Cargo Services">
            <p>
              Many customers prefer a complete transportation solution rather than managing multiple
              stages of delivery themselves.
            </p>
            <p>
              Our door-to-door cargo service helps simplify the process by handling collection,
              transportation, and delivery according to customer requirements.
            </p>
          </FeatureCard>
          <FeatureCard title="Local & UAE-Wide Cargo Delivery">
            <p>
              Whether cargo needs to be transported within Dubai or delivered to another emirate, we
              provide transportation solutions designed to support both local and UAE-wide delivery
              requirements.
            </p>
          </FeatureCard>
          <div className="flex items-center justify-center rounded-card bg-primary p-8 text-center">
            <Button href={quote} variant="secondary" size="lg">
              Request Your Cargo Quote
            </Button>
          </div>
        </CardGrid>
      </Section>

      <CardsSection
        id="cargo-why-title"
        title="Why Customers Choose Al Hatem Movers Cargo Services"
        intro={
          <p>
            <em>Choosing among Dubai cargo companies involves more than finding transportation</em>,
            Customers want confidence that their goods will be handled professionally and delivered
            according to schedule.
          </p>
        }
      >
        <FeatureCard title="Safe Cargo Handling">
          <p>Proper handling helps protect cargo throughout the transportation process.</p>
          <p>
            Our team follows organized loading and transportation procedures designed to help reduce
            the risk of damage during transit.
          </p>
        </FeatureCard>
        <FeatureCard title="Door-to-Door Convenience">
          <p>Managing transportation independently can be time-consuming.</p>
          <p>
            Door-to-door service helps customers save time by providing a more convenient delivery
            experience from pickup to final destination.
          </p>
        </FeatureCard>
        <FeatureCard title="Flexible Delivery Options">
          <p>Different customers have different schedules and transportation requirements.</p>
          <p>Flexible delivery options help accommodate a variety of cargo needs and timelines.</p>
        </FeatureCard>
        <FeatureCard title="Experienced Cargo Team">
          <p>
            Years of experience transporting household goods, furniture, commercial items, and
            equipment help us provide practical transportation solutions for different situations.
          </p>
        </FeatureCard>
        <FeatureCard title="Transparent Pricing">
          <p>Customers deserve clear information about transportation costs before making a decision.</p>
          <p>
            Our quotations are based on the actual requirements of each project, helping customers
            understand exactly what is included.
          </p>
        </FeatureCard>
        <FeatureCard title="Residential & Commercial Expertise">
          <p>
            From household belongings to commercial goods, our team has experience supporting a wide
            range of cargo transportation requirements.
          </p>
        </FeatureCard>
        <FeatureCard title="Dedicated Customer Support">
          <p>Questions can arise before, during, or after transportation.</p>
          <p>Our support team remains available to assist customers and provide updates when needed.</p>
        </FeatureCard>
      </CardsSection>

      <ReviewsSection
        id="cargo-reviews-title"
        tone="neutral"
        title="What Our Customers Say"
        intro={
          <p>
            Whether customers need to transport household belongings, furniture, office equipment,
            or commercial goods, reliability is often their biggest concern. Many of our clients
            choose Al Hatem Movers because they want a cargo service that is organized, dependable,
            and focused on delivering items safely.
          </p>
        }
        subheads={
          <>
            <SubHead title="Customer Reviews">
              Customers frequently mention the convenience of door-to-door delivery, clear
              communication, and the peace of mind that comes from working with an experienced
              transportation team.
            </SubHead>
            <SubHead title="Google Reviews">
              Our Google reviews reflect the experiences of homeowners, businesses, and commercial
              clients who have trusted Al Hatem Movers with their cargo transportation requirements.
            </SubHead>
          </>
        }
      />

      <CardsSection
        id="cargo-challenges-title"
        title="Common Cargo Challenges — And How We Help"
        intro={
          <p>
            Cargo transportation often comes with challenges that require proper planning, suitable
            vehicles, and organized delivery procedures.
          </p>
        }
        after={<OpenCallBox tone="light" prompt="Request a Free Moving quote" />}
      >
        <Challenge
          title="Transporting Large Furniture"
          challenge="Large furniture items can be difficult to move and transport safely without suitable equipment and handling procedures."
          help="Our team helps coordinate transportation for bulky items such as sofas, wardrobes, dining sets, office furniture, and other oversized belongings."
        />
        <Challenge
          title="Urgent Cargo Deliveries"
          challenge="Some deliveries cannot wait and require transportation within a limited timeframe."
          help="Flexible scheduling options help customers arrange transportation according to their delivery priorities and timelines."
        />
        <Challenge
          title="Moving Commercial Equipment"
          challenge="Businesses often need to transport equipment, inventory, and operational assets while minimizing disruption to daily activities."
          help="Our commercial cargo services help businesses relocate equipment and goods efficiently so operations can continue smoothly."
        />
        <Challenge
          title="Door-to-Door Delivery Requirements"
          challenge="Coordinating pickup, transportation, and final delivery can be time-consuming when managed separately."
          help="Our door-to-door cargo service simplifies the process by providing a single transportation solution from collection to delivery."
        />
        <Challenge
          title="Handling Fragile Cargo"
          challenge="Electronics, glass items, decorative pieces, and delicate goods often require additional care during transportation."
          help="Proper preparation and organized handling procedures help reduce transportation risks and provide additional protection for sensitive items."
        />
        <Challenge
          title="Multiple Pickup & Delivery Locations"
          challenge="Some customers need cargo collected from one location and delivered to several destinations."
          help="Flexible transportation planning helps accommodate more complex delivery requirements while maintaining an organized process."
        />
      </CardsSection>

      <Section tone="neutral" labelledBy="cargo-provide-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SiteImage
              src={`${IMG}/cargo-multiple-pickup-delivery-dubai.webp`}
              alt="Cargo truck handling multiple pickup and delivery locations"
              ratio="3:2"
              className="mb-8"
            />
            <h2 id="cargo-provide-title">Cargo Services in UAE We Provide</h2>
            <p className="mt-5">
              Al Hatem Movers offers cargo transportation solutions for residential and commercial
              customers throughout Dubai and the UAE.
            </p>
          </div>
          <ol className="grid gap-5 md:grid-cols-2">
            <NumberedItem number="01" title="Household Cargo">
              <p>
                Transportation of personal belongings, household goods, boxes, and everyday items
                between homes, apartments, storage facilities, and other locations.
              </p>
            </NumberedItem>
            <NumberedItem number="02" title="Furniture Cargo">
              <p>
                Transportation of sofas, beds, wardrobes, dining furniture, outdoor furniture,
                office furniture, and other large household items.
              </p>
            </NumberedItem>
            <NumberedItem number="03" title="Office Equipment Cargo">
              <p>
                Movement of office furniture, computers, printers, business equipment, and
                workplace assets between locations.
              </p>
            </NumberedItem>
            <NumberedItem number="04" title="Commercial Cargo">
              <p>
                Transportation of inventory, retail products, promotional materials, supplies, and
                commercial goods for businesses.
              </p>
            </NumberedItem>
            <NumberedItem number="05" title="Appliances & Electronics Transport">
              <p>
                Delivery of household appliances, electronic devices, televisions, and equipment
                requiring organized transportation.
              </p>
            </NumberedItem>
            <NumberedItem number="06" title="Bulk Item Transportation">
              <p>
                Solutions for customers who need multiple items or larger quantities of goods
                transported efficiently.
              </p>
            </NumberedItem>
          </ol>
        </div>
      </Section>

      <CardsSection
        id="cargo-areas-title"
        title="Areas We Serve Across Dubai"
        intro={
          <p>
            <em>As a cargo company in Dubai,</em> Al Hatem Movers provides cargo transportation
            services throughout Dubai and across the UAE.
          </p>
        }
      >
        <ImageCard
          image="/images/areas/movers-dubai-marina.webp"
          alt="Movers handling a high-rise apartment move in Dubai Marina"
          title="Dubai Marina"
          href="/movers-and-packers-in-dubai-marina/"
          linkText="Movers in Dubai Marina"
        >
          <p>Cargo collection and delivery services for residential and commercial customers.</p>
        </ImageCard>
        <ImageCard
          image="/images/areas/movers-downtown-dubai.webp"
          alt="Moving truck and crew at a Downtown Dubai apartment tower near Burj Khalifa"
          title="Downtown Dubai"
          href="/movers-and-packers-in-downtown-dubai/"
          linkText="Movers in Downtown Dubai"
        >
          <p>Reliable transportation solutions for households, businesses, and commercial properties.</p>
        </ImageCard>
        <ImageCard
          image="/images/areas/movers-business-bay.webp"
          alt="Movers loading office and apartment furniture in Business Bay"
          title="Business Bay"
          href="/movers-and-packers-in-business-bay/"
          linkText="Movers in Business Bay"
        >
          <p>Cargo services for offices, retailers, and residential communities.</p>
        </ImageCard>
        <ImageCard
          image="/images/areas/movers-jvc.webp"
          alt="Movers moving furniture from a mid-rise building in JVC"
          title="Jumeirah Village Circle (JVC)"
          href="/movers-and-packers-in-jvc/"
          linkText="Movers in JVC"
        >
          <p>Transportation support for apartments, villas, and commercial customers.</p>
        </ImageCard>
        <ImageCard
          image="/images/areas/movers-jlt.webp"
          alt="Movers transporting furniture from a JLT tower"
          title="Jumeirah Lake Towers (JLT)"
        >
          <p>Cargo solutions for businesses and residents throughout JLT.</p>
        </ImageCard>
        <ImageCard
          image="/images/areas/movers-dubai-hills-estate.webp"
          alt="Movers handling furniture at a Dubai Hills Estate home"
          title="Dubai Hills Estate"
          href="/movers-and-packers-in-dubai-hills-estate/"
          linkText="Movers in Dubai Hills"
        >
          <p>Reliable cargo services for homeowners, families, and businesses.</p>
        </ImageCard>
        <ImageCard
          image="/images/areas/movers-palm-jumeirah.webp"
          alt="Movers carrying wrapped furniture at a Palm Jumeirah residence"
          title="Palm Jumeirah"
          href="/movers-and-packers-in-jumeirah/"
          linkText="Movers in Jumeirah"
        >
          <p>Professional cargo transportation for luxury residences, villas, and commercial clients.</p>
        </ImageCard>
        <ImageCard
          image="/images/areas/movers-al-barsha.webp"
          alt="Movers transporting household furniture in Al Barsha"
          title="Al Barsha"
          href="/movers-and-packers-in-al-barsha/"
          linkText="Movers in Al Barsha"
        >
          <p>Transportation support for residential and commercial customers.</p>
        </ImageCard>
        <ImageCard
          image="/images/areas/movers-mirdif.webp"
          alt="Movers handling furniture outside a Mirdif villa"
          title="Mirdif"
          href="/movers-and-packers-in-mirdif/"
          linkText="Movers in Mirdif"
        >
          <p>Cargo collection and delivery solutions for households and businesses.</p>
        </ImageCard>
        <ImageCard
          image="/images/areas/movers-dubai-silicon-oasis.webp"
          alt="Movers loading furniture in Dubai Silicon Oasis"
          title="Dubai Silicon Oasis"
        >
          <p>Flexible cargo transportation for residential communities and growing businesses.</p>
        </ImageCard>
        <ImageCard
          image="/images/areas/movers-abu-dhabi.webp"
          alt="Moving truck on an inter-emirate move between Dubai and Abu Dhabi"
          title="Abu Dhabi"
          href="/movers-and-packers-in-abu-dhabi/"
          linkText="Movers in Abu Dhabi"
        >
          <p>Cargo transportation between Dubai and Abu Dhabi.</p>
        </ImageCard>
        <ImageCard
          image="/images/areas/movers-sharjah.webp"
          alt="Movers transporting belongings between Dubai and Sharjah"
          title="Sharjah"
          href="/movers-and-packers-in-sharjah/"
          linkText="Movers in Sharjah"
        >
          <p>Reliable cargo delivery services connecting Dubai and Sharjah.</p>
        </ImageCard>
        <ImageCard
          image="/images/areas/movers-ajman.webp"
          alt="Movers handling a residential delivery in Ajman"
          title="Ajman"
          href="/movers-and-packers-in-ajman/"
          linkText="Movers in Ajman"
        >
          <p>Cargo transportation solutions for residential and commercial customers.</p>
        </ImageCard>
      </CardsSection>

      <ProcessSection
        id="cargo-process-title"
        title="Our Cargo Delivery Process"
        intro={
          <p>
            A clear transportation process helps customers understand what to expect and creates a
            smoother delivery experience.
          </p>
        }
      >
        <StripStep number="01" title="Cargo Consultation">
          We discuss the type of cargo, delivery requirements, pickup location, destination, and
          scheduling preferences.
        </StripStep>
        <StripStep number="02" title="Collection & Inspection">
          Items are collected and reviewed to help ensure suitable transportation arrangements are
          in place.
        </StripStep>
        <StripStep number="03" title="Secure Loading">
          Cargo is loaded according to its size, type, and transportation requirements.
        </StripStep>
        <StripStep number="04" title="Transportation">
          Items are transported using suitable vehicles and planned delivery routes.
        </StripStep>
        <StripStep number="05" title="Delivery & Confirmation">
          Cargo is delivered to the destination, and final confirmation is provided once delivery
          has been completed.
        </StripStep>
      </ProcessSection>

      <Section labelledBy="cargo-cost-title">
        <SectionHeading
          id="cargo-cost-title"
          eyebrow="Packages"
          title="How Much Do Cargo Services Cost in Dubai?"
          intro={
            <>
              <p>
                One of the most common questions customers ask is how much cargo transportation
                costs. The answer depends on several factors, including the size of the shipment,
                delivery distance, type of cargo, and any special handling requirements.
              </p>
              <p>
                Al Hatem Movers provides customized cargo quotations based on the actual
                transportation requirements of each customer, helping ensure fair and transparent
                pricing. There is no single cargo price in Dubai. Cargo is priced by route, mode,
                weight or volume, and item type. Examples from market listings, door-to-door where
                stated: Dubai to India by air from AED 12 per kg (5–7 days), by sea LCL from AED 6
                per kg (30–45 days), and by sea FCL from AED 4,800 (15–25 days). Dubai to Muscat
                household furniture is listed at AED 300 per cubic metre door-to-door. Local cargo
                in Dubai, a 3-ton pickup, is typically AED 250–500 per trip. The exact price is
                confirmed after a quote based on route, mode, and shipment details.
              </p>
            </>
          }
        />
        <CardGrid cols={3}>
          <FeatureCard title="Household Cargo Pricing">
            <p>
              Household cargo costs are typically influenced by the number of items being
              transported, pickup and delivery locations, and the level of assistance required.
              Household cargo examples: Dubai to India door-to-door includes pickup, packing,
              customs, and delivery in one listing, at the air and sea rates above. Dubai to
              Pakistan by sea is listed by item in one listing: general items AED 2.75 per kg,
              dismantled furniture AED 3.50 per kg, electronics and sofas AED 8 per kg, mattresses
              AED 4.50 per kg, and LCDs AED 12 per inch. Another listing gives generic sea cargo at
              AED 5–8 per kg including customs and door-to-door, with a minimum of 20–30 kg, and air
              cargo at AED 20–23 per kg with a minimum of 31 kg. One claimed air rate of AED 80–150
              per kg is an outlier at 4–7 times the others and is not used here.
            </p>
          </FeatureCard>
          <FeatureCard title="Furniture Cargo Pricing">
            <p>
              Furniture transportation costs may vary depending on the size, quantity, and handling
              requirements of the furniture being delivered. Furniture cargo is priced by volume and
              handling, not by a single flat rate. Dubai to Muscat household furniture is listed at
              AED 300 per cubic metre door-to-door. Dubai to Jordan is listed from AED 700 per cubic
              metre door-to-door and AED 200 per box in a secondary listing. Dubai to Saudi rates
              conflict by 2–3 times across sources — one lists LCL at AED 300–450 per cubic metre and
              road at AED 250–350 per cubic metre, another lists AED 700–1,200 per cubic metre by
              city — so Saudi cargo must be quoted per city and mode, not averaged.
            </p>
          </FeatureCard>
          <FeatureCard title="Commercial Cargo Pricing">
            <p>
              Commercial cargo pricing is usually determined by shipment volume, delivery
              schedules, transportation distance, and the nature of the goods being transported.
              Commercial cargo examples: Dubai to Muscat commercial cargo is listed at AED 200 per
              carton door-to-door. Dubai to the USA by sea LCL is listed from AED 600–700 per cubic
              metre in one index listing. Generic directory listings give air cargo at AED 10–30 per
              kg, sea LCL at AED 150–400 per cubic metre, and FCL varying by route. Export customs
              files are listed at AED 120–350, local pickup at AED 60–250 per trip, and LCL handling
              at AED 90–280 per cubic metre. The total is freight plus origin, destination, and
              customs charges, and can differ significantly from the freight rate alone.
            </p>
          </FeatureCard>
        </CardGrid>
        <CostFactors
          title="Factors That Affect Cargo Costs"
          intro={<p>Several factors influence the final quotation:</p>}
          items={
            <>
              <li>Delivery distance</li>
              <li>Cargo volume</li>
              <li>Cargo weight</li>
              <li>Pickup requirements</li>
              <li>Delivery requirements</li>
              <li>Multiple delivery locations</li>
              <li>Special handling requirements</li>
              <li>Urgent delivery requests</li>
            </>
          }
        >
          <p>
            Chargeable weight matters: it is the higher of actual weight and volumetric weight, with
            air freight calculated by dividing volume by 6,000 in standard listings. Mode matters:
            air costs more than road, and road more than sea. FCL is efficient above about 15 cubic
            metres; below that, LCL is used. Route and destination city matter, as do item type,
            urgency and peak season, customs duties and documents, packing and crating, access and
            loaders, insurance (listed at 0.5–4% of declared value), fuel and seasonality, and
            minimum weights and volumes. Inter-emirate cargo is listed only as a per-truck add-on of
            AED 300–1,500, not as a per-kg tariff.
          </p>
        </CostFactors>
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <OpenCallBox tone="light" prompt="Get a Free Cargo Quote" />
          <SiteImage
            src={`${IMG}/cargo-cost-factors-dubai.webp`}
            alt="Factors that affect cargo costs in Dubai: weight, distance and handling"
            ratio="3:2"
          />
        </div>
        <div className="mt-10">
          <Callout>
            <p>
              <strong>Important Note:</strong> Every cargo project is different. Final pricing
              depends on the type of cargo, transportation distance, shipment volume, and any
              additional services required. A customized quotation is provided after reviewing your
              delivery requirements.
            </p>
          </Callout>
        </div>
      </Section>

      <Section tone="neutral" labelledBy="cargo-projects-title">
        <SectionHeading
          id="cargo-projects-title"
          title="Recent Cargo Projects"
          intro={
            <p>
              Over the years, Al Hatem Movers has completed cargo transportation projects for
              homeowners, businesses, retailers, and commercial clients throughout Dubai and the
              UAE.
            </p>
          }
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-12">
          <SiteImage
            src={`${IMG}/cargo-furniture-transportation-project.webp`}
            alt="Movers transporting furniture and cargo between locations in Dubai"
            ratio="3:2"
          />
          <div className="grid gap-5 md:grid-cols-2">
            <FeatureCard title="Household Cargo Deliveries">
              <p>
                Helping customers transport household goods, personal belongings, and everyday items
                between homes, apartments, and{" "}
                <Link href="/storage-solutions-in-dubai/">storage facilities</Link>.
              </p>
            </FeatureCard>
            <FeatureCard title="Furniture Transportation Projects">
              <p>
                Providing <Link href="/furniture-movers-in-dubai/">transportation for furniture</Link>{" "}
                deliveries, property upgrades, relocations, and renovation-related projects.
              </p>
            </FeatureCard>
            <FeatureCard title="Commercial Cargo Projects">
              <p>
                Supporting <Link href="/office-movers-in-dubai/">businesses with transportation</Link>{" "}
                for inventory, equipment, promotional materials, office furniture, and workplace
                assets.
              </p>
            </FeatureCard>
            <FeatureCard title="UAE-Wide Delivery Projects">
              <p>
                Coordinating cargo transportation between Dubai and other emirates including Abu
                Dhabi, Sharjah, and Ajman.
              </p>
            </FeatureCard>
          </div>
        </div>
        <div className="mt-10">
          <OpenCallBox tone="light" />
        </div>
      </Section>

      <TipsSection
        id="cargo-tips-title"
        title="Cargo Tips & Delivery Guide"
        intro={
          <p>
            Proper planning can help make cargo transportation more efficient and reduce delays
            during collection and delivery.
          </p>
        }
      >
        <Tip title="Preparing Cargo for Transport">
          <p>
            Organizing items before collection helps improve efficiency and makes loading and
            unloading easier.
          </p>
        </Tip>
        <Tip title="Common Cargo Transportation Mistakes">
          <p>
            Waiting until the last minute, inaccurate cargo information, and poor preparation can
            create unnecessary delays and complications.
          </p>
        </Tip>
        <Tip title="Benefits of Door-to-Door Cargo Services">
          <p>
            Door-to-door transportation helps simplify the delivery process by reducing the need for
            customers to coordinate multiple stages of transportation themselves.
          </p>
        </Tip>
        <Tip title="Choosing the Right Cargo Service">
          <p>
            The right cargo solution depends on the type of items being transported, delivery
            location, urgency, and handling requirements.
          </p>
        </Tip>
        <Tip title="Planning Large Cargo Deliveries">
          <p>
            Large deliveries often benefit from early planning, particularly when transporting
            furniture, equipment, commercial goods, or multiple items.
          </p>
        </Tip>
      </TipsSection>

      <FaqSection id="cargo-faq-title" items={faqs} />

      <ExploreMore id="cargo-explore-title">
        <ChipLink href="/packing-and-unpacking-services-in-dubai/">Packing Services</ChipLink>
        <ChipLink href="/areas-we-serve/">All Areas We Serve</ChipLink>
      </ExploreMore>

      <FinalCta
        id="cargo-final-title"
        title="Get Your Free Cargo Quote Today"
        extraLine="Door-to-Door Cargo Services Available Across Dubai & UAE"
      >
        <p>
          Whether you need household cargo transportation, furniture delivery, commercial cargo
          services, office equipment transportation, or door-to-door cargo solutions, Al Hatem
          Movers is ready to help.
        </p>
        <p>
          Our cargo service Dubai are designed to provide customers with a convenient, reliable, and
          efficient way to transport goods across Dubai and the UAE while minimizing transportation
          challenges.
        </p>
        <p>
          <Link href="/contacts/">Contact Al Hatem</Link> Movers today and receive a customized
          cargo quotation based on your transportation requirements.
        </p>
      </FinalCta>
    </Shell>
  );
}
