import Link from "next/link";
import { Shell } from "@/components/Shell";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/Section";
import { SiteImage } from "@/components/SiteImage";
import {
  Callout,
  CardGrid,
  ChipLink,
  ChipList,
  FeatureCard,
  ImageCard,
  NumberedItem,
} from "@/components/Cards";
import { RatingLine, ReviewCard } from "@/components/ReviewCard";
import { Faqs } from "@/components/Faq";
import { OpenCallBox } from "@/components/CallBox";
import { ProcessStrip, StripStep } from "@/components/ProcessSteps";
import { FinalCta } from "@/components/FinalCta";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const PATH = "/home-movers-and-packers-in-dubai/";
const TITLE = "Best House Movers in Dubai | Home Movers in Dubai";
const DESCRIPTION =
  "Looking for reliable house movers in Dubai? Our home movers in Dubai ensure safe packing, careful handling and stress-free home relocation.";
const IMAGE = "/images/home-movers-and-packers-in-dubai/home-movers-dubai-family-house-move.webp";
const IMAGE_ALT = "House movers in Dubai carrying wrapped furniture out of a family home";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: IMAGE,
  imageAlt: IMAGE_ALT,
});

const faqs = [
  [
    "How Much Does It Cost To Move A House In Dubai?",
    "A house move in Dubai typically costs AED 700–7,000+, depending on home size and packing level. A studio is typically AED 700–1,200, a 1-bedroom AED 900–1,800, a 2-bedroom AED 1,500–2,800, and a large villa AED 3,500–7,000+. Send your pickup location, destination, home size, and a list or photos of large items for an exact written quote.",
  ],
  [
    "How far in advance should I book home movers in Dubai?",
    "Book your move at least 1–2 weeks in advance. During weekends and busy periods, earlier booking is recommended.",
  ],
  [
    "Can movers pack my entire house?",
    "Yes. Professional movers can pack furniture, electronics, kitchen items, clothing, and other household belongings using suitable packing materials.",
  ],
  [
    "How long does a home move usually take?",
    "Most apartment moves take a few hours, while larger family homes may require a full day depending on the number of items and access conditions.",
  ],
  [
    "Do I need to empty wardrobes and drawers before moving?",
    "Light clothing can usually remain in drawers, but fragile, valuable, and heavy items should be packed separately.",
  ],
  [
    "What should I do before moving day?",
    "Keep important documents and essentials separate, label boxes clearly, and ensure movers have easy access to the property.",
  ],
  [
    "Can you dismantle and reassemble furniture?",
    "Yes. We can dismantle and reassemble beds, wardrobes, dining tables, and other large furniture items during the move.",
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
    ["Home Movers and Packers in Dubai", PATH],
  ],
  service: {
    name: "Home Movers and Packers in Dubai",
    serviceType: "Home moving and packing",
    description:
      "Need reliable home movers and packers in Dubai? Al Hatem Movers helps families move with professional packing, safe transportation and smooth home relocation.",
    areaServed: { "@type": "City", name: "Dubai" },
  },
  faqs,
});

const quote = BUSINESS.whatsappQuoteHref;

export default function HomeMoversPage() {
  return (
    <Shell>
      <JsonLd data={schema} />

      <PageHeader
        breadcrumb={[
          ["Home", "/"],
          ["Services", "/services/"],
          ["Home Movers and Packers in Dubai"],
        ]}
        title="Trusted House Movers in Dubai – Safe & Stress-Free Home Relocation"
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
          Moving to a new home requires careful planning, proper packing, and reliable
          transportation. Our professional house mover in Dubai help homeowners, tenants, and
          families relocate safely and efficiently across the city.
        </p>
        <p>
          Whether you’re moving from an apartment, townhouse, or family home, our team handles
          packing, furniture dismantling, transportation, unloading, and setup. We focus on
          protecting your belongings and making the moving process as smooth as possible.
        </p>
      </PageHeader>

      <Section labelledBy="home-trust-title" tight>
        <SectionHeading id="home-trust-title" title="Trusted by Families Across Dubai" />
        <ul className="check-list grid gap-x-8 gap-y-4 font-semibold text-black sm:grid-cols-2 lg:grid-cols-4">
          <li>12+ Years of Moving Experience (Since 2014)</li>
          <li>12,000+ Successful Home Relocations</li>
          <li>Licensed & Insured Moving Company</li>
          <li>Same-Day Home Moving Available</li>
        </ul>
      </Section>

      <Section tone="neutral" labelledBy="home-best-title">
        <SectionHeading
          id="home-best-title"
          eyebrow="One of the best"
          title="Home Movers in Dubai"
          intro={
            <>
              <p>
                Every home move is different. Some families are relocating within the same
                neighborhood, while others are moving across Dubai. The amount of furniture, access
                requirements, packing needs, and moving schedules can vary from one property to
                another.
              </p>
              <p>
                Our home moving team provides complete relocation support tailored to your specific
                requirements. From small household moves to larger family relocations, we help
                ensure your belongings reach their destination safely and on time.
              </p>
            </>
          }
        />
        <CardGrid cols={3}>
          <FeatureCard title="Complete Home Relocation Services">
            <p>
              A successful home move requires more than transportation. It involves planning,
              packing, coordination, and careful handling throughout the relocation process.
            </p>
            <p>
              Our team manages every stage of the move so you can focus on your family, work, and
              settling into your new home.
            </p>
          </FeatureCard>
          <FeatureCard title="Safe Household Goods Transportation">
            <p>
              Household items often include furniture, electronics, kitchen appliances, decorative
              pieces, and personal belongings collected over many years.
            </p>
            <p>
              We use organized loading methods and secure transportation practices to help protect
              your possessions during transit across Dubai.
            </p>
          </FeatureCard>
          <FeatureCard title="Home Packing and Unpacking Support">
            <p>
              Packing an entire home can take days without proper planning. Our team carefully
              packs, labels, and organizes household belongings so you can save time and settle
              into your new home faster.
            </p>
            <p>
              After delivery, we can also assist with unpacking and room placement to help make the
              transition easier for your family.
            </p>
          </FeatureCard>
          <FeatureCard title="Furniture Moving and Setup">
            <p>
              Large furniture can be difficult to move safely through elevators, stairways, and
              narrow entrances. We dismantle, transport, and reassemble furniture carefully so
              everything is ready to use in your new home.
            </p>
          </FeatureCard>
          <FeatureCard title="Same-Day Home Moving Services">
            <p>
              Need to move on short notice? Our same-day home moving service helps families handle
              urgent relocations quickly while keeping belongings protected throughout the move.
            </p>
          </FeatureCard>
          <div className="flex items-center justify-center rounded-card bg-primary p-8 text-center">
            <Button href={quote} variant="secondary" size="lg">
              Schedule Your Home Move Today
            </Button>
          </div>
        </CardGrid>
      </Section>

      <Section labelledBy="home-included-title">
        <SectionHeading
          id="home-included-title"
          title="What’s Included in Our Home Moving and packing Service?"
          intro={
            <>
              <p>
                A well-organized move involves many steps before the moving truck even arrives. Our
                house moving service covers the essential parts of the relocation process to help
                homeowners and tenants move with confidence.
              </p>
              <p>
                From the initial assessment to the final furniture placement, every stage is handled
                by experienced moving professionals.
              </p>
            </>
          }
        />
        <CardGrid cols={3}>
          <FeatureCard title="Pre-Move Assessment" className="bg-neutral">
            <p>
              Every successful move begins with proper planning. We evaluate the size of the
              property, the volume of belongings, building access requirements, and any special
              items that require additional care.
            </p>
            <p>
              This helps us recommend the right moving solution and provide a more accurate
              quotation.
            </p>
          </FeatureCard>
          <FeatureCard title="Packing Household Belongings" className="bg-neutral">
            <p>
              Household items come in different shapes, sizes, and levels of fragility. Kitchenware,
              electronics, artwork, decorations, and personal belongings all require different
              packing approaches.
            </p>
            <p>
              Our team organizes and packs items carefully to reduce the risk of damage during
              transportation.
            </p>
          </FeatureCard>
          <FeatureCard title="Furniture Dismantling and Assembly" className="bg-neutral">
            <p>
              Large furniture often needs to be dismantled before moving. Our team handles beds,
              wardrobes, office desks, shelving units, and other furniture that cannot be
              transported safely in one piece.
            </p>
            <p>
              After delivery, furniture is reassembled and positioned according to your
              instructions.
            </p>
          </FeatureCard>
          <FeatureCard title="Loading and Transportation" className="bg-neutral">
            <p>
              Proper loading plays a major role in preventing damage during transit. Heavy items are
              positioned carefully, while fragile belongings receive additional protection.
            </p>
            <p>
              Once loaded, your belongings are transported securely to the new location using
              suitable moving vehicles.
            </p>
          </FeatureCard>
          <FeatureCard title="Unloading and Room Placement" className="bg-neutral">
            <p>
              Upon arrival, boxes and furniture are unloaded carefully and placed in the designated
              rooms.
            </p>
            <p>
              This organized approach helps homeowners begin unpacking without the confusion that
              often follows a move.
            </p>
          </FeatureCard>
          <FeatureCard title="Post-Move Support" className="bg-neutral">
            <p>
              Relocation does not always end when the truck leaves. Some customers require
              assistance with furniture placement, unpacking, or final adjustments after delivery.
            </p>
            <p>
              Our team remains available to help complete the moving process as smoothly as
              possible.
            </p>
          </FeatureCard>
        </CardGrid>
      </Section>

      <Section tone="neutral" labelledBy="home-why-title">
        <SectionHeading
          id="home-why-title"
          title="Why Families Choose Our dubai home movers"
          intro={
            <>
              <p>
                Choosing a moving company is an important decision. Families want movers who arrive
                on time, handle belongings carefully, and communicate clearly throughout the
                relocation.
              </p>
              <p>
                Our focus on preparation, professionalism, and customer support has helped us become
                a trusted choice for home moving services across Dubai.
              </p>
            </>
          }
        />
        <CardGrid cols={3}>
          <ImageCard
            number="01"
            image="/images/global/al-hatem-movers-crew-uniform.webp"
            alt="Trained movers in uniform preparing for a residential move in Dubai"
            title="Experienced Residential Moving Team"
          >
            <p>
              Home moving requires practical experience. Our movers understand how to handle
              household furniture, appliances, fragile items, and personal belongings safely.
            </p>
            <p>
              This experience helps improve efficiency while reducing common moving-day problems.
            </p>
          </ImageCard>
          <ImageCard
            number="02"
            image="/images/global/fragile-items-bubble-wrap-packing.webp"
            alt="Packer wrapping fragile glassware in bubble wrap and paper"
            title="Careful Handling of Household Items"
          >
            <p>
              Many household items have both financial and sentimental value. We treat every item
              with care, from everyday furniture to valuable personal belongings.
            </p>
            <p>
              Protective materials and safe handling methods help reduce the risk of scratches,
              dents, and damage.
            </p>
          </ImageCard>
          <ImageCard
            number="03"
            image="/images/global/packing-household-items-dubai.webp"
            alt="Packers wrapping household items into cartons during a Dubai move"
            title="Premium Packing Materials"
          >
            <p>
              The quality of packing materials plays a major role in protecting belongings during
              relocation.
            </p>
            <p>
              We use strong cartons, protective wraps, furniture covers, and cushioning materials
              designed to improve safety during transportation.
            </p>
          </ImageCard>
          <ImageCard
            number="04"
            image="/images/global/moving-consultation-palm-jumeirah-office.webp"
            alt="Moving consultation with a customer at the Al Hatem office in Palm Jumeirah"
            title="Transparent Pricing"
          >
            <p>
              Nobody likes unexpected charges after a move. We provide clear quotations based on the
              requirements of the relocation so customers understand what is included before moving
              day arrives.
            </p>
          </ImageCard>
          <ImageCard
            number="05"
            image="/images/global/movers-loading-wrapped-furniture-truck.webp"
            alt="Movers loading wrapped furniture into a moving truck"
            title="On-Time Moving Service"
          >
            <p>
              Moving schedules often depend on tenancy agreements, property handovers, and building
              management requirements.
            </p>
            <p>Our team works according to agreed timelines to help keep your move on track.</p>
          </ImageCard>
          <ImageCard
            number="06"
            image="/images/global/customer-support-whatsapp-moving-quote.webp"
            alt="Support team answering a moving enquiry on WhatsApp and phone"
            title="Dedicated Move Coordinator"
          >
            <p>
              Good communication can make a significant difference during a relocation. A dedicated
              point of contact helps answer questions, provide updates, and coordinate moving
              activities from start to finish.
            </p>
          </ImageCard>
        </CardGrid>
      </Section>

      <Section labelledBy="home-reviews-title">
        <SectionHeading
          id="home-reviews-title"
          eyebrow="Testimonials"
          title="Customer Reviews & Testimonials"
          intro={
            <p>
              See what homeowners and families across Dubai say about their experience with our home
              moving services. We take pride in providing reliable moving support, clear
              communication, and careful handling of every relocation.
            </p>
          }
        />
        <CardGrid cols={3}>
          <ReviewCard name="Sulthan Abdul Kader" />
          <ReviewCard name="Zo Barazanji" />
          <ReviewCard name="Youssef Shalaby" />
        </CardGrid>
        <div className="mt-10 rounded-card bg-neutral p-6 lg:p-8">
          <RatingLine>
            Rated 5.0 out of 5 on Google from 25 reviews.{" "}
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

      <Section tone="neutral" labelledBy="home-projects-title">
        <SectionHeading
          id="home-projects-title"
          title="Recent Home Moving Projects in Dubai"
          intro={
            <>
              <p>
                Every home move is different. Over the years, we have completed relocations for
                families, homeowners, and tenants across some of Dubai’s most popular residential
                communities.
              </p>
              <p>
                Our experience includes apartments, townhouses, villas, and large family homes with
                different moving requirements.
              </p>
            </>
          }
        />
        <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <SiteImage
            src="/images/global/project-apartment-move-dubai.webp"
            alt="Completed apartment move with wrapped furniture ready for delivery"
            ratio="4:3"
            sizes="(min-width: 1024px) 25vw, 50vw"
          />
          <SiteImage
            src="/images/global/family-moving-into-new-home-dubai.webp"
            alt="Movers helping a family move into their new home in Dubai"
            ratio="4:3"
            sizes="(min-width: 1024px) 25vw, 50vw"
          />
          <SiteImage
            src="/images/global/project-villa-relocation-dubai.webp"
            alt="Villa relocation with movers loading furniture into the truck"
            ratio="4:3"
            sizes="(min-width: 1024px) 25vw, 50vw"
          />
          <SiteImage
            src="/images/global/project-truck-loaded-dubai.webp"
            alt="Moving truck loaded and secured after a completed move"
            ratio="4:3"
            sizes="(min-width: 1024px) 25vw, 50vw"
          />
        </div>
        <CardGrid cols={3}>
          <FeatureCard title="Apartment Relocations">
            <p>
              We regularly assist residents moving between communities such as Dubai Marina, JVC,
              JVT, Business Bay, and Dubai Silicon Oasis.
            </p>
            <p>
              These projects often require elevator coordination, building approvals, and careful
              planning to avoid delays.
            </p>
          </FeatureCard>
          <FeatureCard title="Family Home Moves">
            <p>
              Family relocations usually involve larger volumes of household goods, furniture,
              appliances, and personal belongings.
            </p>
            <p>
              Our team helps families organize the move efficiently while protecting important
              household items throughout the process.
            </p>
          </FeatureCard>
          <FeatureCard title="Villa Relocation Projects">
            <p>
              Villa moves often involve outdoor furniture, larger living spaces, and more complex
              logistics.
            </p>
            <p>
              We have experience handling villa relocations in communities such as Arabian Ranches,
              Dubai Hills Estate, Palm Jumeirah, and Emirates Hills.
            </p>
          </FeatureCard>
        </CardGrid>
        <div className="mt-10">
          <OpenCallBox tone="light" />
        </div>
      </Section>

      <Section labelledBy="home-challenges-title">
        <SectionHeading
          id="home-challenges-title"
          title="Home Moving Challenges in Dubai and How We Solve Them"
          intro={
            <>
              <p>
                Moving homes in Dubai comes with challenges that many people don’t expect until
                moving day arrives. Building regulations, community access rules, traffic
                conditions, and furniture handling can all affect the relocation process.
              </p>
              <p>
                Our experience across Dubai helps us identify potential issues early and prepare
                effective solutions before the move begins.
              </p>
            </>
          }
        />
        <CardGrid cols={3}>
          <FeatureCard title="Apartment Building Restrictions" className="bg-neutral">
            <p>
              Many apartment buildings require advance booking of service elevators and loading
              areas. Some properties also have specific moving hours that residents must follow.
            </p>
            <p>
              Our team coordinates these requirements beforehand to help avoid delays and scheduling
              conflicts.
            </p>
          </FeatureCard>
          <FeatureCard title="Community Access Requirements" className="bg-neutral">
            <p>
              Many gated communities and residential developments require visitor approvals and
              moving permits.
            </p>
            <p>
              We help customers prepare the necessary information before moving day to ensure
              smooth access to the property.
            </p>
          </FeatureCard>
          <FeatureCard title="Large Household Furniture" className="bg-neutral">
            <p>
              Large wardrobes, sectional sofas, dining tables, and custom furniture can be
              difficult to move through stairways, elevators, and narrow hallways.
            </p>
            <p>
              Our movers use proper dismantling and handling techniques to transport large items
              safely.
            </p>
          </FeatureCard>
          <FeatureCard title="Fragile and Valuable Belongings" className="bg-neutral">
            <p>
              Glass furniture, artwork, mirrors, electronics, decorative pieces, and collectibles
              require additional protection during relocation.
            </p>
            <p>
              We use suitable packing materials and handling procedures to improve protection
              throughout transportation.
            </p>
          </FeatureCard>
          <FeatureCard title="Last-Minute Home Relocations" className="bg-neutral">
            <p>
              Unexpected tenancy deadlines, property handovers, and schedule changes can create
              urgent moving situations.
            </p>
            <p>Our team can assist with short-notice relocations whenever availability allows</p>
          </FeatureCard>
          <FeatureCard title="Peak Season Moving Challenges" className="bg-neutral">
            <p>
              Moving demand often increases during weekends, holidays, and busy relocation periods
              across Dubai.
            </p>
            <p>
              Planning ahead and booking early can help secure preferred moving dates and avoid
              scheduling issues.
            </p>
          </FeatureCard>
        </CardGrid>
        <div className="mt-10">
          <OpenCallBox tone="light" />
        </div>
      </Section>

      <Section tone="neutral" labelledBy="home-types-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SiteImage
              src="/images/global/villa-community-move-dubai.webp"
              alt="Moving truck and crew outside a gated villa in a Dubai community"
              ratio="3:2"
              className="mb-8"
            />
            <h2 id="home-types-title">Home Moving Services for Different Property Types</h2>
            <div className="rich mt-5">
              <p>
                Not every Dubai home movers is the same. Property size, access conditions,
                furniture volume, and family requirements all influence the relocation process.
              </p>
              <p>
                We provide moving solutions designed for different residential property types
                across Dubai.
              </p>
            </div>
          </div>
          <ol className="grid gap-5">
            <NumberedItem number="01" title="Apartment Relocations">
              <p>
                Apartment moves often involve elevators, parking restrictions, building
                regulations, and shared access areas.
              </p>
              <p>
                Our team handles these requirements while ensuring belongings are packed,
                transported, and delivered safely.
              </p>
            </NumberedItem>
            <NumberedItem number="02" title="Villa Relocations">
              <p>Villa moves typically involve more furniture, outdoor items, and larger living spaces.</p>
              <p>
                For customers moving to or from villas, we provide additional planning and support
                to manage the relocation efficiently.
              </p>
            </NumberedItem>
            <NumberedItem number="03" title="Townhouse Moving Services">
              <p>
                Townhouse relocations often require a balance between apartment and villa moving
                strategies.
              </p>
              <p>
                Our team helps homeowners move furniture, appliances, and personal belongings while
                protecting both properties during the process.
              </p>
            </NumberedItem>
            <NumberedItem number="04" title="Family Home Relocations">
              <p>
                Family homes often contain a wide range of household items, including furniture,
                electronics, appliances, toys, personal belongings, and decorative items.
              </p>
              <p>
                We help families stay organized by providing structured packing, transportation, and
                setup services throughout the move.
              </p>
            </NumberedItem>
          </ol>
        </div>
      </Section>

      <Section labelledBy="home-areas-title">
        <SectionHeading
          id="home-areas-title"
          title="Areas We Serve Across Dubai"
          intro={
            <p className="italic">
              Our house movers and packers in Dubai serve homes across Dubai Marina, Downtown Dubai,
              JVC, JVT, Business Bay, Palm Jumeirah, and other residential communities.
            </p>
          }
        />
        <CardGrid cols={3}>
          <ImageCard
            image="/images/areas/movers-dubai-marina.webp"
            alt="Movers handling a high-rise apartment move in Dubai Marina"
            title="Dubai Marina"
            href="/movers-and-packers-in-dubai-marina/"
            linkText="Home Movers in Dubai Marina"
          >
            <p>
              We assist residents moving into and out of apartments, waterfront towers, and
              residential communities throughout Dubai Marina.
            </p>
          </ImageCard>
          <ImageCard
            image="/images/areas/movers-downtown-dubai.webp"
            alt="Moving truck and crew at a Downtown Dubai apartment tower near Burj Khalifa"
            title="Downtown Dubai"
            href="/movers-and-packers-in-downtown-dubai/"
            linkText="Home Movers in Downtown Dubai"
          >
            <p>
              From luxury apartments to family residences, we provide home moving services across
              Downtown Dubai and surrounding areas.
            </p>
          </ImageCard>
          <ImageCard
            image="/images/areas/movers-business-bay.webp"
            alt="Movers loading office and apartment furniture in Business Bay"
            title="Business Bay"
            href="/movers-and-packers-in-business-bay/"
            linkText="Home Movers in Business Bay"
          >
            <p>
              Our team regularly handles residential relocations for homeowners and tenants
              throughout Business Bay.
            </p>
          </ImageCard>
          <ImageCard
            image="/images/areas/movers-palm-jumeirah.webp"
            alt="Movers carrying wrapped furniture at a Palm Jumeirah residence"
            title="Palm Jumeirah"
            href="/movers-and-packers-in-jumeirah/"
            linkText="Home Movers in Jumeirah"
          >
            <p>
              Moving in Palm Jumeirah often requires careful planning due to high-value properties
              and larger furniture collections.
            </p>
          </ImageCard>
          <ImageCard
            image="/images/areas/movers-jvc.webp"
            alt="Movers moving furniture from a mid-rise building in JVC"
            title="Jumeirah Village Circle (JVC)"
            href="/movers-and-packers-in-jvc/"
            linkText="Home Movers in JVC"
          >
            <p>
              JVC remains one of Dubai’s most active residential communities, and we frequently
              assist families relocating within the area.
            </p>
          </ImageCard>
          <ImageCard
            image="/images/areas/movers-jvt.webp"
            alt="Movers loading furniture for a villa move in JVT"
            title="Jumeirah Village Triangle (JVT)"
          >
            <p>
              Our movers provide professional relocation services for villas, townhouses, and
              residential properties throughout JVT.
            </p>
          </ImageCard>
          <ImageCard
            image="/images/areas/movers-dubai-hills-estate.webp"
            alt="Movers handling furniture at a Dubai Hills Estate home"
            title="Dubai Hills Estate"
            href="/movers-and-packers-in-dubai-hills-estate/"
            linkText="Home Movers in Dubai Hills"
          >
            <p>
              We help families relocate within Dubai Hills Estate while protecting valuable
              household items and furniture.
            </p>
          </ImageCard>
          <ImageCard
            image="/images/areas/movers-arabian-ranches.webp"
            alt="Movers loading a villa move in Arabian Ranches"
            title="Arabian Ranches"
            href="/movers-and-packers-in-arabian-ranches/"
            linkText="Home Movers in Arabian Ranches"
          >
            <p>
              Villa and family home relocations are common throughout Arabian Ranches, where larger
              properties often require detailed planning.
            </p>
          </ImageCard>
          <ImageCard
            image="/images/areas/movers-al-barsha.webp"
            alt="Movers transporting household furniture in Al Barsha"
            title="Al Barsha"
            href="/movers-and-packers-in-al-barsha/"
            linkText="Home Movers in Al Barsha"
          >
            <p>
              We provide home moving services for apartments, villas, and family residences
              throughout Al Barsha.
            </p>
          </ImageCard>
          <ImageCard
            image="/images/areas/movers-mirdif.webp"
            alt="Movers handling furniture outside a Mirdif villa"
            title="Mirdif"
            href="/movers-and-packers-in-mirdif/"
            linkText="Home Movers in Mirdif"
          >
            <p>
              Our team supports homeowners and tenants relocating within Mirdif’s residential
              communities.
            </p>
          </ImageCard>
          <ImageCard
            image="/images/areas/movers-dubai-silicon-oasis.webp"
            alt="Movers loading furniture in Dubai Silicon Oasis"
            title="Dubai Silicon Oasis"
          >
            <p>
              From apartments to family homes, we provide reliable moving solutions throughout
              Dubai Silicon Oasis
            </p>
          </ImageCard>
          <ImageCard
            image="/images/areas/movers-emirates-hills.webp"
            alt="Movers carrying wrapped furniture at an Emirates Hills villa"
            title="Emirates Hills"
          >
            <p>
              High-value residential properties require additional care and planning. Our movers
              handle these relocations with attention to detail and professionalism.
            </p>
          </ImageCard>
        </CardGrid>
      </Section>

      <Section tone="dark" labelledBy="home-process-title">
        <SectionHeading
          id="home-process-title"
          title="Our House moving Dubai Process"
          intro={
            <p className="text-white/80">
              A well-planned move helps reduce stress, delays, and unexpected problems. Our process
              is designed to keep everything organized from the first inquiry to the final furniture
              placement.
            </p>
          }
        />
        <ProcessStrip>
          <StripStep number="01" title="Request a Free Quote">
            Start by sharing your moving details with our team. We’ll ask about your current
            property, destination, moving date, and any special requirements to provide an initial
            estimate.
          </StripStep>
          <StripStep number="02" title="Schedule a Home Survey">
            For larger moves, we may arrange a survey to assess furniture volume, packing needs,
            access conditions, and special items. This helps us plan the move properly and provide
            an accurate quotation.
          </StripStep>
          <StripStep number="03" title="Packing and Preparation">
            Our movers carefully pack household belongings using suitable packing materials.
            Furniture is protected, fragile items are secured, and boxes are labeled to simplify
            unpacking later.
          </StripStep>
          <StripStep number="04" title="Safe Transportation">
            Once everything is packed and loaded, your belongings are transported safely to the new
            location using suitable moving vehicles and organized loading methods.
          </StripStep>
          <StripStep number="05" title="Unloading and Setup">
            At the destination, furniture and boxes are unloaded carefully and placed in the
            appropriate rooms. Furniture assembly can also be completed if required.
          </StripStep>
        </ProcessStrip>
      </Section>

      <Section labelledBy="home-cost-title">
        <SectionHeading
          id="home-cost-title"
          eyebrow="Packages"
          title="How Much Do Home Movers Cost in Dubai?"
          intro={
            <>
              <p>
                The cost of hiring <em>house movers and packers in Dubai</em> depends on the size of
                your property, the number of items being moved, packing requirements, and the
                distance between locations. Every move is different, which is why we provide
                customized quotes based on your specific requirements.
              </p>
              <p>
                Home moving in Dubai typically cost AED 700 for a studio to AED 7,000 or more for a
                large villa. A 1-bedroom home typically costs AED 900–1,800, a 2-bedroom AED
                1,500–2,800, and a 3-bedroom apartment AED 2,200–4,000. The final price depends on
                volume, packing level, building access, and distance, and is confirmed after a free
                survey.
              </p>
            </>
          }
        />
        <CardGrid cols={3}>
          <FeatureCard title="Studio Apartment Moving Costs">
            <p>
              Studio moves are usually the most affordable option due to the smaller volume of
              furniture and household items. A typical studio home move costs AED 700–1,200. A
              studio home move typically includes 2 movers, a truck, standard packing materials,
              loading, transport, unloading, and placement. Low ‘starting from’ offers in the market
              go down to AED 299–450, but those are floors for minimal service, not a typical full
              studio move.
            </p>
          </FeatureCard>
          <FeatureCard title="1–2 Bedroom Home Moving Costs">
            <p>
              The cost of moving a one or two-bedroom home depends on the amount of furniture,
              packing services required, building access, and travel distance. There is no single
              published combined 1–2 bedroom rate, so the two sizes are priced separately. A
              1-bedroom home typically costs AED 900–1,800 and a 2-bedroom home AED 1,500–2,800. A
              1-bedroom move depends on furniture volume, packing level, and building access. A
              2-bedroom move costs more because of higher volume, more packing, and longer loading
              time. Full packing, where it is not included, adds roughly 30–50% to a move price.
            </p>
          </FeatureCard>
          <FeatureCard title="Large Family Home Moving Costs">
            <p>
              Larger homes often require additional movers, packing materials, and transportation
              resources, which can affect the overall cost. A large family home is priced by total
              volume, not by room count alone. A full 1-bedroom home with a lot of furniture can
              cost more than a sparse 2-bedroom home. A 3-bedroom apartment typically costs AED
              2,200–4,000 and a 3–5 bedroom villa AED 3,500–7,000+. Villa moves cost more than
              apartments of the same bedroom count because of larger furniture, outdoor items,
              stairs, and longer loading time. A 5-bedroom villa can exceed AED 7,000, and
              6-bedroom villas are quoted individually.
            </p>
          </FeatureCard>
        </CardGrid>
        <div className="mt-6 rounded-card border-2 border-black bg-white p-6 lg:p-10">
          <h3>Factors That Affect Home Moving Costs</h3>
          <div className="rich mt-4">
            <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
              <li>Property size</li>
              <li>Moving distance</li>
              <li>Number of household items</li>
              <li>Packing requirements</li>
              <li>Floor level and elevator access</li>
              <li>Furniture dismantling and assembly</li>
              <li>Fragile or specialty items</li>
              <li>Storage requirements</li>
              <li>Same-day or urgent moving requests</li>
            </ul>
            <p>
              Choosing experienced house movers and packers in Dubai helps you avoid damage, delays,
              and hidden costs, because the team plans packing, transport, and building access in
              advance
            </p>
            <p>
              Total volume and number of items affects price more than room count. Packing level
              matters: full packing, partial packing, or self-packed. Furniture dismantling and
              reassembly: beds and simple wardrobes are often included; large or modular wardrobes
              are often charged separately, around AED 100–400 per item. Appliances, fragile items,
              and specialist items — glass, marble, mirrors, art, pianos, and safes — need separate
              handling and sometimes crating. Building access matters: service-lift booking,
              permitted moving hours, loading-bay distance, and floor level. Distance within Dubai
              is a secondary factor; a move to another emirate is priced as a separate fixed
              door-to-door move, typically 30–40% higher. Timing matters: month-end and weekends
              cost more; mid-month and Tuesday to Thursday are usually cheaper. Same-day moves have
              no fixed surcharge published in the market; availability depends on crew, lift hours,
              and booking time. Included in a typical full home move: crew and truck, standard
              packing materials (cartons, bubble wrap, stretch film, tape, mattress covers,
              blankets), loading, transport, unloading, placement, dismantling and reassembly of
              standard beds and wardrobes, and debris removal. Separate, and confirmed in writing
              before the move: unpacking and arranging, large modular wardrobe dismantling, storage,
              specialist item crating, and building NOC or lift deposits (typically AED 1,000–2,000,
              refundable, paid to the building, not to the mover). Check whether 5% VAT is included
              in any quote, because market quotes differ on this.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <OpenCallBox tone="light" />
          <SiteImage
            src="/images/global/moving-cost-factors-dubai.webp"
            alt="Factors that affect moving costs in Dubai: home size, floor, distance and packing"
            ratio="3:2"
          />
        </div>
        <div className="mt-10">
          <Callout>
            <p>
              <strong>Note:</strong> Every move is unique. <Link href="/contacts/">Contact us</Link>{" "}
              for a free quote and accurate pricing based on your home moving requirements.
            </p>
          </Callout>
        </div>
      </Section>

      <Section tone="neutral" labelledBy="home-prepare-title">
        <div className="grid gap-10 lg:grid-cols-[18rem_1fr] lg:gap-16">
          <SiteImage
            src="/images/global/moving-day-checklist.webp"
            alt="Moving day checklist with documents, essentials and labelled boxes"
            ratio="1:2"
            sizes="(min-width: 1024px) 18rem, 100vw"
            className="mx-auto w-full max-w-[18rem] lg:sticky lg:top-28 lg:self-start"
          />
          <div>
            <h2 id="home-prepare-title">How to Prepare Your Home Before Moving Day</h2>
            <p className="mb-8 mt-5">
              Good preparation can make moving day much easier. Taking a few simple steps
              beforehand helps save time and reduces confusion during the relocation process.
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              <FeatureCard title="Create a Moving Checklist">
                <p>
                  A checklist helps you stay organized and track important tasks leading up to the
                  move. It can include packing schedules, address updates, utility transfers, and
                  moving appointments.
                </p>
              </FeatureCard>
              <FeatureCard title="Organize Important Documents">
                <p>
                  Keep passports, identification documents, tenancy agreements, financial records,
                  and other important paperwork in a separate folder that remains easily
                  accessible.
                </p>
              </FeatureCard>
              <FeatureCard title="Pack Essential Items Separately">
                <p>
                  Prepare a small bag containing items you may need immediately after the move, such
                  as chargers, medications, toiletries, clothing, and important documents.
                </p>
              </FeatureCard>
              <FeatureCard title="Label Boxes Clearly">
                <p>
                  Labeling boxes by room and contents makes unpacking much easier after arriving at
                  the new property.
                </p>
              </FeatureCard>
              <FeatureCard title="Prepare Children and Family Members for Moving Day">
                <p>
                  Moving can be stressful for families, especially children. Discuss the moving plan
                  in advance and keep essential personal items easily accessible during the
                  transition.
                </p>
              </FeatureCard>
            </div>
          </div>
        </div>
      </Section>

      <Section labelledBy="home-items-title">
        <SectionHeading
          id="home-items-title"
          title="Household Items We Move"
          intro={
            <p>
              Every home contains a mix of furniture, electronics, appliances, decorative items, and
              personal belongings. Our movers use suitable packing and handling methods to transport
              these items safely throughout Dubai.
            </p>
          }
        />
        <CardGrid cols={3}>
          <FeatureCard title="Household Furniture" className="bg-neutral">
            <p>
              We move beds, wardrobes, sofas, dining tables, chairs, cabinets, shelving units, and
              other household furniture with care.
            </p>
          </FeatureCard>
          <FeatureCard title="Kitchen Appliances" className="bg-neutral">
            <p>
              Kitchen appliances such as refrigerators, washing machines, ovens, microwaves, and
              dishwashers are prepared and transported using appropriate handling procedures.
            </p>
          </FeatureCard>
          <FeatureCard title="Home Décor and Artwork" className="bg-neutral">
            <p>
              Mirrors, wall art, decorative items, and interior accessories receive additional
              protection during packing and transportation.
            </p>
          </FeatureCard>
          <FeatureCard title="Home Electronics" className="bg-neutral">
            <p>
              Televisions, computers, gaming systems, audio equipment, and other electronic devices
              are packed and transported carefully to reduce the risk of damage.
            </p>
          </FeatureCard>
          <FeatureCard title="Fragile and Valuable Items" className="bg-neutral">
            <p>
              Glassware, collectibles, antiques, and sentimental possessions often require special
              packing methods to improve protection throughout the move.
            </p>
          </FeatureCard>
        </CardGrid>
      </Section>

      <Section tone="neutral" labelledBy="home-storage-title">
        <SectionHeading
          id="home-storage-title"
          title="Temporary Storage Solutions During Home Mover in dubai"
          intro={
            <>
              <p>
                Sometimes moving dates don’t align perfectly. A new property may not be ready,
                renovation work may be ongoing, or additional time may be needed before delivery.
              </p>
              <p>Temporary storage solutions can help bridge this gap safely and conveniently.</p>
            </>
          }
        />
        <ol className="grid gap-6 lg:grid-cols-3">
          <NumberedItem number="01" title="Short-Term Storage">
            <p>
              Short-term storage is useful when there is a brief delay between moving out and moving
              into a new property.
            </p>
          </NumberedItem>
          <NumberedItem number="02" title="Long-Term Storage">
            <p>
              For customers requiring extended storage, long-term solutions provide a secure option
              for household goods and furniture.
            </p>
          </NumberedItem>
          <NumberedItem number="03" title="Safe Storage for Furniture and Household Goods">
            <p>
              Furniture, appliances, boxes, and personal belongings can be stored securely until you
              are ready to receive them.
            </p>
          </NumberedItem>
        </ol>
      </Section>

      <Section labelledBy="home-faq-title">
        <SectionHeading id="home-faq-title" title="FAQs" align="center" />
        <Faqs items={faqs} />
      </Section>

      <Section tone="neutral" labelledBy="home-promise-title">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SiteImage
            src="/images/global/uae-moving-service-coverage.webp"
            alt="Moving truck on a UAE highway serving Dubai and the other emirates"
            ratio="2:1"
          />
          <div>
            <h2 id="home-promise-title">Our Promise to Every Customer</h2>
            <ul className="check-list mt-6 grid gap-3 font-semibold text-black sm:grid-cols-2">
              <li>Clear and Transparent Pricing</li>
              <li>Careful Handling of Household Belongings</li>
              <li>Professional and Experienced Movers</li>
              <li>On-Time Arrival and Delivery</li>
              <li>Friendly Customer Support</li>
              <li>Clean and Organized Moving Process</li>
            </ul>
          </div>
        </div>
        <h3 className="mb-5 mt-14">Explore More</h3>
        <ChipList>
          <ChipLink href="/apartment-movers-in-dubai/">Apartment Moving</ChipLink>
          <ChipLink href="/villa-movers-in-dubai/">Villa Moving</ChipLink>
          <ChipLink href="/packing-and-unpacking-services-in-dubai/">Packing Services</ChipLink>
          <ChipLink href="/areas-we-serve/">All Areas We Serve</ChipLink>
        </ChipList>
      </Section>

      <FinalCta id="home-final-title" title="Get a Free Home Moving Quote Today">
        <p>
          Planning a home move in Dubai? Contact{" "}
          <Link href="/">Al Hatem Furniture Moving Company</Link> team today for a free quote and
          personalized moving plan. Whether you’re moving an apartment, townhouse, villa, or family
          home, we’re here to help make the process simple and organized.
        </p>
      </FinalCta>
    </Shell>
  );
}
