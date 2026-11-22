import Link from "next/link";
import {
  Armchair,
  Building2,
  ClipboardList,
  Clock,
  Headset,
  House,
  MapPin,
  Package,
  PackageCheck,
  ReceiptText,
  Truck,
  TreePalm,
  Users,
  Warehouse,
  Wine,
  Zap,
} from "lucide-react";
import { Shell } from "@/components/Shell";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/Section";
import { SiteImage } from "@/components/SiteImage";
import { SplitRow } from "@/components/SplitRow";
import {
  AreaCard,
  FeatureCard,
  NumberedItem,
  ServiceCard,
} from "@/components/Cards";
import { RatingLine } from "@/components/ReviewCard";
import { ReviewsWidget } from "@/components/ReviewsWidget";
import { Faq, FaqList } from "@/components/Faq";
import { QuoteForm } from "@/components/QuoteForm";
import { OpenCallBox } from "@/components/CallBox";
import { ProcessList, Step } from "@/components/ProcessSteps";
import { MapBlock } from "@/components/MapBlock";
import { BUSINESS, EMIRATE_LINKS, REVIEW_COUNT } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";
import Script from "next/script";

const TITLE = "Trusted Movers in Dubai | Movers and packers in Dubai";
const DESCRIPTION =
  "Looking for trusted movers in Dubai? Our movers and packers in dubai offer expert packing, house moving and office relocation at affordable prices.";
const IMAGE = "/images/home/al-hatem-movers-dubai-villa-move.webp";
const IMAGE_ALT =
  "Movers and packers in Dubai loading a moving truck at a modern villa";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/",
  image: IMAGE,
  imageAlt: IMAGE_ALT,
});

const schema = pageSchema({
  path: "/",
  title: TITLE,
  description: DESCRIPTION,
  image: IMAGE,
  imageAlt: IMAGE_ALT,
  faqs: [
    [
      "How much do movers and packers cost in Dubai?",
      "Most homes cost between AED 700 and AED 7,000+ in Dubai, depending on size and service level. A studio typically starts around AED 700, a 1-bedroom around AED 900, a 2-bedroom around AED 1,500, and a villa from around AED 3,500. The exact price for your move is confirmed after a free survey. Contact us for a personalized estimate.",
    ],
    [
      "Do you provide packing materials?",
      "Yes. We provide packing materials including cartons, protective wraps, furniture covers, and other supplies required for safe transportation.",
    ],
    [
      "Can you move villas and apartments?",
      "Yes. We provide moving services for apartments, villas, townhouses, residential compounds, and other property types throughout Dubai.",
    ],
    [
      "Do you offer same-day moving services?",
      "Yes. Same-day moving services may be available depending on scheduling and project requirements.",
    ],
    [
      "How long does a typical move take?",
      "The duration depends on the size of the move, property access, packing requirements, and travel distance. Smaller moves may take only a few hours, while larger relocations may require a full day.",
    ],
    [
      "Are my belongings insured during the move?",
      "Insurance options can be discussed during the quotation process. Our team follows careful handling procedures designed to protect customer belongings throughout relocation.",
    ],
    [
      "Do you provide furniture dismantling and assembly?",
      "Yes. We dismantle and reassemble beds, wardrobes, office furniture, workstations, and other large items when required.",
    ],
    [
      "Which areas of Dubai do you serve?",
      "We provide moving services across Dubai including Dubai Marina, Downtown Dubai, Business Bay, Palm Jumeirah, JVC, JVT, Dubai Hills Estate, Arabian Ranches, Al Barsha, Mirdif, Dubai Silicon Oasis, Emirates Hills, and surrounding communities.",
    ],
  ],
});

const quote = BUSINESS.whatsappQuoteHref;

export default function HomePage() {
  return (
    <Shell>
      <JsonLd data={schema} />

      <PageHeader
        titleId="home-title"
        backdrop={
          <SiteImage src={IMAGE} alt="" ratio="16:9" priority sizes="100vw" />
        }
        eyebrow="Al Hatem Furniture Moving Company"
        title="Professional Moving Company in Dubai – Safe & Stress-Free Relocation"
        actions={
          <>
            <Button href={quote} size="lg">
              Book your move
            </Button>
            <Button href={BUSINESS.phoneHref} variant="secondary" size="lg">
              Call Now
            </Button>
          </>
        }
        aside={(idPrefix) => (
          <div className="rounded-card bg-white p-5 shadow-[0_20px_50px_-20px_rgb(0_0_0/0.25)] sm:p-6 lg:p-8">
            <p className="mb-5 text-xl font-bold text-black">
              Get a free moving quote
            </p>
            <QuoteForm idPrefix={idPrefix} />
          </div>
        )}
      >
        <p>
          Moving in Dubai doesn’t have to be stressful. As trusted movers in
          Dubai, we make every relocation smooth, safe, and hassle-free —
          whether you’re moving from a high-rise in Dubai Marina, a villa in
          Arabian Ranches, or an office in Business Bay. From careful packing to
          secure transport and on-time delivery, our experienced team handles it
          all, so you can move with complete peace of mind.
        </p>
      </PageHeader>

      <Section labelledBy="home-intro-title">
        <SplitRow
          image={
            <SiteImage
              src={IMAGE}
              alt={IMAGE_ALT}
              ratio="3:2"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          }
        >
          <h2> Moving & Storage Solutions Across Dubai</h2>
          <p>
            We provide professional, reliable, and affordable movers and packers
            services across Dubai, handling everything from careful packing to
            safe transportation and furniture setup with storage solutions if
            required. Our goal is simple: make your move smooth, secure, and
            hassle-free.
          </p>
          <p>
            With years of experience helping families and businesses relocate
            across the city, we’ve perfected the process so you can focus on
            settling into your new home or office.
          </p>
          <ul className="check-list grid gap-3 pt-2 font-semibold text-black sm:grid-cols-2">
            <li>12+ Years Experience (Since 2014)</li>
            <li>12,000+ Successful Moves</li>
            <li>Licensed & Insured | Trade Licence Available on Request</li>
            <li>Same-Day Service Available</li>
          </ul>
        </SplitRow>
      </Section>

      <Section tone="neutral" labelledBy="home-services-title">
        <SectionHeading
          id="home-services-title"
          eyebrow="Our services"
          title="Professional Movers and Packers in Dubai for Every Type of Relocation"
          action={<Button href={quote}>Schedule Your Move Today</Button>}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={House}
            title="Home & Apartment Moving Services"
            href="/home-movers-and-packers-in-dubai/"
            linkText="View Home Moving"
          >
            <p>
              We handle packing, loading, transportation, unloading, and
              furniture placement so you can settle into your new home faster
              and with less disruption.
            </p>
          </ServiceCard>
          <ServiceCard
            icon={TreePalm}
            title="Villa Relocation Services"
            href="/villa-movers-in-dubai/"
            linkText="View Villa Moving"
          >
            <p>
              Our team manages large household moves with careful planning,
              secure packing, and organized transportation for a smooth villa
              relocation.
            </p>
          </ServiceCard>
          <ServiceCard
            icon={Building2}
            title="Office & Commercial Moving Services"
            href="/office-movers-in-dubai/"
            linkText="View Office Moving"
          >
            <p>
              We relocate offices, retail spaces, and commercial properties
              efficiently to help reduce downtime and keep your operations
              moving.
            </p>
          </ServiceCard>
          <ServiceCard
            icon={Armchair}
            title="Furniture Moving Services"
            href="/furniture-movers-in-dubai/"
            linkText="View Furniture Moving"
          >
            <p>
              From sofas and wardrobes to office furniture and specialty items,
              we transport furniture safely using proper protection and handling
              techniques.
            </p>
          </ServiceCard>
          <ServiceCard
            icon={MapPin}
            title="Local Moving Services"
            href="/apartment-movers-in-dubai/"
            linkText="View Apartment Moving"
          >
            <p>
              Whether you’re moving across the street or to another Dubai
              community, we provide reliable local moving services tailored to
              your schedule.
            </p>
          </ServiceCard>
          <ServiceCard
            icon={Zap}
            title="Same-Day Moving Services"
            href="/contacts/"
            linkText="Request Same-Day Move"
          >
            <p>
              Need to move quickly? Our same-day moving service helps customers
              handle urgent relocations without sacrificing safety or
              organization.
            </p>
          </ServiceCard>
          <ServiceCard
            icon={Package}
            title="Packing & Unpacking Services"
            href="/packing-and-unpacking-services-in-dubai/"
            linkText="View Packing Services"
          >
            <p>
              Professional packing, labeling, and unpacking for homes, offices,
              and valuable belongings.
            </p>
          </ServiceCard>
          <ServiceCard
            icon={Warehouse}
            title="Storage Solutions"
            href="/storage-solutions-in-dubai/"
            linkText="View Storage Solutions"
          >
            <p>
              Secure short- and long-term storage for furniture, household
              items, and business belongings.
            </p>
          </ServiceCard>
          <ServiceCard
            icon={Truck}
            title="Cargo Services"
            href="/cargo-services-in-dubai/"
            linkText="View Cargo Services"
          >
            <p>
              Safe cargo transportation for household goods, furniture, business
              items, and commercial shipments.
            </p>
          </ServiceCard>
        </div>
      </Section>

      <Section labelledBy="home-solutions-title">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <h2 id="home-solutions-title">
              Complete Packing and Moving Solutions Under One Roof
            </h2>
            <div className="rich mt-5">
              <p>
                A successful move depends on more than transportation alone.
                Proper packing, safe loading, secure transportation, and
                organized unpacking all play an important role in protecting
                your belongings.
              </p>
              <p>
                Our complete moving solutions cover every stage of the
                relocation process, helping customers save time while reducing
                the risks commonly associated with moving.
              </p>
            </div>
            <div className="mt-8">
              <OpenCallBox />
            </div>
          </div>
          <div className="grid gap-5">
            <SiteImage
              src="/images/home/packing-moving-services-montage.webp"
              alt="Movers packing and transporting household and commercial belongings"
              ratio="2:1"
            />
            <dl className="grid grid-cols-2 gap-5">
              <div className="rounded-card bg-neutral p-5">
                <dt className="text-sm font-semibold text-muted">
                  Commercial Moves
                </dt>
                <dd className="text-3xl font-extrabold tracking-tight text-black lg:text-4xl">
                  1,850+
                </dd>
              </div>
              <div className="rounded-card bg-neutral p-5">
                <dt className="text-sm font-semibold text-muted">
                  Residential Moves
                </dt>
                <dd className="text-3xl font-extrabold tracking-tight text-black lg:text-4xl">
                  10,000+
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-16 grid gap-14 lg:mt-24 lg:gap-24">
          <SplitRow
            image={
              <SiteImage
                src="/images/global/packing-household-items-dubai.webp"
                alt="Packers wrapping household items into cartons during a Dubai move"
                ratio="3:2"
              />
            }
          >
            <h3>Professional Packing Services</h3>
            <p>
              Packing is one of the most important parts of any move. We use
              quality packing materials to protect furniture, electronics,
              kitchenware, decorative items, and personal belongings.
            </p>
            <p>
              Each box is packed carefully and labeled clearly to make unpacking
              easier at the destination.
            </p>
          </SplitRow>
          <SplitRow
            reverse
            image={
              <SiteImage
                src="/images/global/furniture-dismantling-reassembly.webp"
                alt="Mover dismantling a bed frame with power tools before relocation"
                ratio="3:2"
              />
            }
          >
            <h3>Furniture Dismantling & Reassembly</h3>
            <p>
              Large furniture items are often safer to move when dismantled
              properly. Our team disassembles beds, wardrobes, office
              workstations, shelving units, and other bulky furniture before
              transportation.
            </p>
            <p>
              After delivery, we reassemble furniture and place it according to
              your requirements.
            </p>
          </SplitRow>
          <SplitRow
            image={
              <SiteImage
                src="/images/global/movers-loading-wrapped-furniture-truck.webp"
                alt="Movers loading wrapped furniture into a moving truck"
                ratio="3:2"
              />
            }
          >
            <h3>Loading & Unloading Services</h3>
            <p>
              Moving heavy items requires experience and proper lifting
              techniques. Our trained crew handles loading and unloading
              carefully to protect both your belongings and the property itself.
            </p>
            <p>
              We use organized loading methods that help prevent shifting during
              transportation.
            </p>
          </SplitRow>
          <SplitRow
            reverse
            image={
              <SiteImage
                src="/images/global/moving-truck-safe-transport-dubai.webp"
                alt="Moving truck transporting secured furniture safely across Dubai"
                ratio="3:2"
              />
            }
          >
            <h3>Safe Transportation</h3>
            <p>
              Transportation is a critical stage of every move. Our moving
              trucks are equipped to carry household goods, office equipment,
              and furniture safely across Dubai.
            </p>
            <p>
              Careful route planning and secure loading procedures help ensure
              that belongings arrive in good condition.
            </p>
          </SplitRow>
          <SplitRow
            image={
              <SiteImage
                src="/images/global/unpacking-furniture-placement-new-home.webp"
                alt="Movers unpacking boxes and placing furniture in a new home"
                ratio="3:2"
              />
            }
          >
            <h3>Unpacking & Furniture Placement</h3>
            <p>
              Many customers prefer assistance after arriving at their new
              property. Our team can unpack boxes, position furniture, and help
              organize major items to make settling in easier.
            </p>
            <p>
              This service helps reduce the time and effort required after
              moving day.
            </p>
          </SplitRow>
          <SplitRow
            reverse
            image={
              <SiteImage
                src="/images/global/furniture-storage-facility-dubai.webp"
                alt="Wrapped furniture and labelled boxes stored in a Dubai storage unit"
                ratio="3:2"
              />
            }
          >
            <h3>Temporary Storage Solutions</h3>
            <p>
              Sometimes move-in and move-out dates do not align perfectly. Our
              storage solutions provide a secure place to keep furniture,
              household goods, and office equipment until you are ready to
              receive them.
            </p>
            <p>
              Flexible storage options are available for both short-term and
              longer-term requirements.
            </p>
          </SplitRow>
        </div>
        <div className="mt-14 text-center">
          <Button href={quote} size="lg">
            Request Packing & Moving Services
          </Button>
        </div>
      </Section>

      <Section tone="neutral" labelledBy="home-why-title">
        <SectionHeading
          id="home-why-title"
          title="Why Dubai Residents Trust Movers and Packers Dubai"
          intro={
            <>
              <p className="italic">
                Choosing movers is about more than finding the lowest price.
                Customers want a Dubai movers and packers company that
                communicates clearly, arrives on time, and handles belongings
                with care.
              </p>
              <p className="italic">
                Our focus on planning, professionalism, and customer support has
                helped us become one of the Best moving company in dubai for
                residential and commercial relocations
              </p>
            </>
          }
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard icon={Users} title="Experienced & Trained Moving Crew">
            <p>
              Our movers are trained to handle different types of relocations,
              from small apartment moves to large villa and office projects.
              Experience helps reduce mistakes and improve efficiency throughout
              the moving process.
            </p>
          </FeatureCard>
          <FeatureCard icon={Truck} title="Modern Fleet of Moving Trucks">
            <p>
              Reliable transportation is essential for a successful move. Our
              fleet is maintained regularly and equipped to transport furniture,
              appliances, office equipment, and household items safely.
            </p>
          </FeatureCard>
          <FeatureCard icon={PackageCheck} title="Premium Packing Materials">
            <p>
              Strong packing materials provide better protection during
              transportation. We use moving blankets, protective wraps, durable
              cartons, and other packing supplies designed to reduce the risk of
              damage.
            </p>
          </FeatureCard>
          <FeatureCard
            icon={ReceiptText}
            title="Transparent Pricing With No Hidden Charges"
          >
            <p>
              Customers deserve clear and honest pricing. We provide detailed
              moving estimates based on the size and requirements of the
              relocation so there are no unexpected surprises.
            </p>
          </FeatureCard>
          <FeatureCard icon={Clock} title="On-Time Moving & Delivery">
            <p>
              Many moves depend on building schedules, lease agreements, and
              office deadlines. Our team works according to agreed timelines to
              help customers stay on schedule.
            </p>
          </FeatureCard>
          <FeatureCard icon={Headset} title="Dedicated Customer Support">
            <p>
              Good communication makes moving easier. Our support team remains
              available throughout the relocation process to answer questions
              and provide updates when needed.
            </p>
          </FeatureCard>
          <FeatureCard icon={Wine} title="Careful Handling of Fragile Items">
            <p>
              Fragile belongings require extra attention. Glassware,
              electronics, artwork, mirrors, and decorative items are packed and
              handled using methods designed to improve protection during
              transportation.
            </p>
          </FeatureCard>
          <FeatureCard icon={ClipboardList} title="Customized Relocation Plans">
            <p>
              Every relocation is different. We create moving plans based on
              property size, access requirements, moving distance, special
              items, and customer preferences to ensure a more organized
              experience.
            </p>
          </FeatureCard>
        </div>

        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <SiteImage
            src="/images/global/family-moving-into-new-home-dubai.webp"
            alt="Movers helping a family move into their new home in Dubai"
            ratio="3:2"
          />
          <div className="rounded-card bg-neutral p-6 lg:p-8">
            <RatingLine>
              Rated 5.0 out of 5 on Google from {REVIEW_COUNT} reviews, built on consistent
              service, clear communication, and successful relocations across
              Dubai.
            </RatingLine>
          </div>
        </div>
        <div className="mt-10">
          <ReviewsWidget />
        </div>
      </Section>

      <Section labelledBy="home-challenges-title">
        <SectionHeading
          id="home-challenges-title"
          title="Moving Challenges in Dubai — And How We Solve Them"
          intro={
            <p>
              Moving in Dubai comes with unique challenges that many people only
              discover on moving day. Different communities have different
              rules, access requirements, and scheduling restrictions. Our
              experience across Dubai helps us prepare for these situations
              before they become problems.
            </p>
          }
        />
        <div className="grid gap-14 lg:gap-20">
          <SplitRow
            image={
              <SiteImage
                src="/images/global/movers-service-elevator-high-rise.webp"
                alt="Movers loading wrapped furniture into a padded service elevator"
                ratio="3:2"
              />
            }
          >
            <h3>High-Rise Apartment Relocations</h3>
            <p>
              Many apartment buildings in Dubai Marina, Downtown Dubai, and
              Business Bay have strict moving schedules and elevator booking
              requirements.
            </p>
            <p>
              Our team coordinates these requirements in advance to help prevent
              delays and keep the move running smoothly.
            </p>
          </SplitRow>
          <SplitRow
            reverse
            image={
              <SiteImage
                src="/images/global/villa-community-move-dubai.webp"
                alt="Moving truck and crew outside a gated villa in a Dubai community"
                ratio="3:2"
              />
            }
          >
            <h3>Villa Community Moving Restrictions</h3>
            <p>
              Many villa communities require advance notice for moving trucks
              and contractor access. Security procedures can vary between
              communities such as Arabian Ranches, Dubai Hills Estate, and
              Emirates Hills.
            </p>
            <p>
              We help coordinate access requirements to avoid last-minute issues
              on moving day.
            </p>
          </SplitRow>
          <SplitRow
            image={
              <SiteImage
                src="/images/global/movers-building-entrance-loading.webp"
                alt="Movers coordinating furniture loading at a residential building entrance"
                ratio="3:2"
              />
            }
          >
            <h3>Building Access & Elevator Coordination</h3>
            <p>
              Service elevators, loading bays, and building management approvals
              often play a major role in apartment relocations.
            </p>
            <p>
              Our team plans these logistics beforehand so moving activities can
              proceed efficiently and safely.
            </p>
          </SplitRow>
          <SplitRow
            reverse
            image={
              <SiteImage
                src="/images/global/movers-carrying-wrapped-sofa.webp"
                alt="Two movers carrying a large wrapped sofa during a relocation"
                ratio="3:2"
              />
            }
          >
            <h3>Heavy Furniture Transportation</h3>
            <p>
              Large wardrobes, dining tables, sectional sofas, and oversized
              furniture often require special handling.
            </p>
            <p>
              We use proper lifting techniques, protective materials, and
              furniture dismantling methods to move bulky items safely.
            </p>
          </SplitRow>
          <SplitRow
            image={
              <SiteImage
                src="/images/global/same-day-moving-service-dubai.webp"
                alt="Moving crew preparing a truck for a same-day move in Dubai"
                ratio="3:2"
              />
            }
          >
            <h3>Last-Minute Moving Requests</h3>
            <p>
              Unexpected property handovers, tenancy deadlines, and urgent
              business relocations sometimes require quick action.
            </p>
            <p>
              Our same-day and urgent moving services help customers complete
              relocations within tight timeframes whenever possible.
            </p>
          </SplitRow>
          <SplitRow
            reverse
            image={
              <SiteImage
                src="/images/global/truck-loading-zone-dubai.webp"
                alt="Moving truck parked in a designated loading zone beside a residential tower"
                ratio="3:2"
              />
            }
          >
            <h3>Parking & Loading Zone Management</h3>
            <p>
              Limited parking can create challenges in busy areas throughout
              Dubai. Finding suitable truck access is often essential for
              efficient loading and unloading.
            </p>
            <p>
              Our team assesses access conditions before moving day and plans
              accordingly.
            </p>
          </SplitRow>
        </div>
      </Section>

      <Section tone="neutral" labelledBy="home-areas-title">
        <SectionHeading
          id="home-areas-title"
          title="Areas We Serve Across Dubai"
          intro={
            <p>
              Our moving services are available throughout Dubai. Whether you
              are relocating a home, apartment, villa, or office, our team can
              provide professional moving support across major residential and
              commercial communities.
            </p>
          }
          action={
            <Button href="/areas-we-serve/">See All Areas We Serve</Button>
          }
        />
        <ul className="mb-12 flex flex-wrap gap-3">
          {EMIRATE_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="inline-flex min-h-11 items-center rounded-full border border-line bg-white px-5 font-semibold text-black hover:border-primary hover:bg-primary"
              >
                Movers in {l.short}
              </Link>
            </li>
          ))}
        </ul>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AreaCard
            image="/images/areas/movers-dubai-marina.webp"
            alt="Movers handling a high-rise apartment move in Dubai Marina"
            title="Dubai Marina"
            href="/movers-and-packers-in-dubai-marina/"
            linkText="Movers in Dubai Marina"
          >
            <p>
              We assist residents moving into and out of high-rise towers,
              serviced apartments, and waterfront properties throughout Dubai
              Marina.
            </p>
          </AreaCard>
          <AreaCard
            image="/images/areas/movers-downtown-dubai.webp"
            alt="Moving truck and crew at a Downtown Dubai apartment tower near Burj Khalifa"
            title="Downtown Dubai"
            href="/movers-and-packers-in-downtown-dubai/"
            linkText="Movers in Downtown Dubai"
          >
            <p>
              From luxury apartments near Burj Khalifa to residential towers
              along Sheikh Mohammed Bin Rashid Boulevard, we provide complete
              relocation services across Downtown Dubai.
            </p>
          </AreaCard>
          <AreaCard
            image="/images/areas/movers-business-bay.webp"
            alt="Movers loading office and apartment furniture in Business Bay"
            title="Business Bay"
            href="/movers-and-packers-in-business-bay/"
            linkText="Movers in Business Bay"
          >
            <p>
              Our team regularly handles apartment relocations, office moves,
              and commercial projects throughout Business Bay.
            </p>
          </AreaCard>
          <AreaCard
            image="/images/areas/movers-palm-jumeirah.webp"
            alt="Movers carrying wrapped furniture at a Palm Jumeirah residence"
            title="Palm Jumeirah"
            href="/movers-and-packers-in-jumeirah/"
            linkText="Movers in Jumeirah"
          >
            <p>
              Moving within Palm Jumeirah often requires additional planning due
              to access routes and premium residential properties. We provide
              careful handling for high-value furniture and household items.
            </p>
          </AreaCard>
          <AreaCard
            image="/images/areas/movers-jvc.webp"
            alt="Movers moving furniture from a mid-rise building in JVC"
            title="Jumeirah Village Circle (JVC)"
            href="/movers-and-packers-in-jvc/"
            linkText="Movers in JVC"
          >
            <p>
              JVC continues to be one of Dubai’s fastest-growing residential
              communities. We frequently assist families and professionals
              moving within and around the area.
            </p>
          </AreaCard>
          <AreaCard
            image="/images/areas/movers-jvt.webp"
            alt="Movers loading furniture for a villa move in JVT"
            title="Jumeirah Village Triangle (JVT)"
            href="/areas-we-serve/"
            linkText="See All Areas We Serve"
          >
            <p>
              From villas to townhouses and residential buildings, we provide
              moving services tailored to the needs of JVT residents.
            </p>
          </AreaCard>
          <AreaCard
            image="/images/areas/movers-dubai-hills-estate.webp"
            alt="Movers handling furniture at a Dubai Hills Estate home"
            title="Dubai Hills Estate"
            href="/movers-and-packers-in-dubai-hills-estate/"
            linkText="Movers in Dubai Hills"
          >
            <p>
              Dubai Hills Estate features a mix of luxury villas, apartments,
              and family homes. Our team manages relocations of all sizes
              throughout the community.
            </p>
          </AreaCard>
          <AreaCard
            image="/images/areas/movers-arabian-ranches.webp"
            alt="Movers loading a villa move in Arabian Ranches"
            title="Arabian Ranches"
            href="/movers-and-packers-in-arabian-ranches/"
            linkText="Movers in Arabian Ranches"
          >
            <p>
              Villa relocations in Arabian Ranches often involve larger
              households and extensive furniture collections. We provide
              organized moving solutions designed for family homes.
            </p>
          </AreaCard>
          <AreaCard
            image="/images/areas/movers-al-barsha.webp"
            alt="Movers transporting household furniture in Al Barsha"
            title="Al Barsha"
            href="/movers-and-packers-in-al-barsha/"
            linkText="Movers in Al Barsha"
          >
            <p>
              Our moving services cover apartments, villas, and commercial
              properties across Al Barsha and nearby neighborhoods.
            </p>
          </AreaCard>
          <AreaCard
            image="/images/areas/movers-mirdif.webp"
            alt="Movers handling furniture outside a Mirdif villa"
            title="Mirdif"
            href="/movers-and-packers-in-mirdif/"
            linkText="Movers in Mirdif"
          >
            <p>
              We assist homeowners and tenants moving into and out of villas,
              townhouses, and residential compounds throughout Mirdif.
            </p>
          </AreaCard>
          <AreaCard
            image="/images/areas/movers-dubai-silicon-oasis.webp"
            alt="Movers loading furniture in Dubai Silicon Oasis"
            title="Dubai Silicon Oasis"
            href="/areas-we-serve/"
            linkText="See All Areas We Serve"
          >
            <p>
              Whether you are relocating a family home or an office space, our
              team provides dependable moving services across Dubai Silicon
              Oasis.
            </p>
          </AreaCard>
          <AreaCard
            image="/images/areas/movers-emirates-hills.webp"
            alt="Movers carrying wrapped furniture at an Emirates Hills villa"
            title="Emirates Hills"
            href="/areas-we-serve/"
            linkText="See All Areas We Serve"
          >
            <p>
              High-value homes require additional care and planning. We provide
              professional relocation services designed to protect furniture,
              artwork, electronics, and personal belongings.
            </p>
          </AreaCard>
        </div>
      </Section>

      <Section tone="dark" labelledBy="home-process-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className="grid content-start gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <SiteImage
              src="/images/global/moving-consultation-palm-jumeirah-office.webp"
              alt="Moving consultation with a customer at the Al Hatem office in Palm Jumeirah"
              ratio="3:2"
            />
            <SiteImage
              src="/images/global/customer-support-whatsapp-moving-quote.webp"
              alt="Support team answering a moving enquiry on WhatsApp and phone"
              ratio="3:2"
            />
          </div>
          <div>
            <h2 id="home-process-title">Our Simple 5-Step Moving Process</h2>
            <div className="mt-8">
              <ProcessList>
                <Step step="Step 1" title="Request a Free Quote">
                  Share your moving details by phone, WhatsApp, or online form.
                </Step>
                <Step step="Step 2" title="Schedule a Home Survey">
                  We assess the move and identify any special requirements.
                </Step>
                <Step step="Step 3" title="Packing & Preparation">
                  Our team carefully packs and prepares your belongings.
                </Step>
                <Step step="Step 4" title="Safe Transportation">
                  Items are loaded securely and transported to the new location.
                </Step>
                <Step step="Step 5" title="Unloading & Setup">
                  We unload, assemble furniture, and place items where needed.
                </Step>
              </ProcessList>
            </div>
            <div className="mt-8">
              <OpenCallBox />
            </div>
          </div>
        </div>
      </Section>

      <Section labelledBy="home-pricing-title">
        <SectionHeading
          id="home-pricing-title"
          eyebrow="Packages"
          title="Affordable Moving Prices in Dubai"
          intro={
            <p>
              Moving costs can vary depending on the size and complexity of the
              relocation. The goal is not simply to find the cheapest option but
              to receive reliable service that protects your belongings and
              avoids unexpected expenses. As a planning guide, most Dubai moves
              fall between AED 700 and AED 7,000+, with larger villas and
              offices above that. Your final Al Hatem price is confirmed in
              writing after a free survey — the ranges below are not a fixed
              quote.
            </p>
          }
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard title="Studio Apartment Moving Costs">
            <p>
              Studio moves are generally the most affordable option because they
              involve fewer items and shorter moving times. A typical studio
              move in Dubai falls between AED 700–1,200, including a crew,
              truck, and standard packing materials. Very basic ‘starting from’
              offers in the market go as low as AED 299–499, but those are
              floors for minimal service, not a typical full move.
            </p>
          </FeatureCard>
          <FeatureCard title="1 Bedroom Apartment Moving Costs">
            <p>
              The cost of moving a one-bedroom apartment depends on furniture
              volume, packing requirements, building access, and travel
              distance. A typical 1-bedroom move falls between AED 900–1,800.
              Price moves within the range based on furniture volume, floor and
              lift access, and distance.
            </p>
          </FeatureCard>
          <FeatureCard title="2-3 Bedroom Apartment Moving Costs">
            <p>
              Larger apartments require additional labor, packing materials, and
              transportation capacity, which can affect overall pricing. A
              typical 2-bedroom move falls between AED 1,500–3,000 and a
              3-bedroom apartment between AED 2,200–4,500. Larger apartments
              cost more mainly because of volume, crew size, and time on site.
              Dismantling and reassembly of beds and wardrobes can move the
              price toward the top of the range.
            </p>
          </FeatureCard>
          <FeatureCard title="Villa Moving Costs">
            <p>
              Villa relocations typically involve more furniture, outdoor items,
              and longer loading times. The final cost depends on property size
              and relocation requirements. A typical 3-bedroom villa move falls
              between AED 3,500–6,000, with 5-bedroom villas up to AED 12,000+.
              Villa moves are priced by villa size and item count rather than by
              room count alone.
            </p>
          </FeatureCard>
          <FeatureCard title="Office Relocation Costs">
            <p>
              Office moving costs vary based on workstation numbers, equipment,
              furniture volume, moving schedules, and operational requirements.
              A typical small office move falls between AED 1,000–2,500, a
              medium office between AED 3,000–5,500, and a large office between
              AED 6,000–15,000+. Office pricing depends on desks, IT equipment,
              and how much downtime the move must avoid. Multi-floor and large
              corporate moves are priced only after a survey.
            </p>
          </FeatureCard>
          <FeatureCard
            title="Factors That Affect Moving Costs"
            className="border-2! border-black!"
          >
            <p>Several factors can influence the final moving price:</p>
            <ul>
              <li>Distance between locations</li>
              <li>Property size</li>
              <li>Packing requirements</li>
              <li>Floor level and elevator access</li>
              <li>Fragile or specialty items</li>
              <li>Furniture dismantling and assembly</li>
              <li>Storage requirements</li>
              <li>Urgent or same-day moving requests</li>
            </ul>
            <p>
              Timing also matters — weekends and month-end are usually pricier,
              mid-week and mid-month usually cheaper. Building NOC or lift
              deposits, where a building requires them, are normally separate
              and refundable.
            </p>
          </FeatureCard>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
          <OpenCallBox tone="light" />
          <SiteImage
            src="/images/global/moving-cost-factors-dubai.webp"
            alt="Factors that affect moving costs in Dubai: home size, floor, distance and packing"
            ratio="3:2"
          />
        </div>
      </Section>

      <Section tone="neutral" labelledBy="home-furniture-title">
        <SectionHeading
          id="home-furniture-title"
          title="Furniture Movers Dubai – Safe Handling for Valuable Items"
          intro={
            <>
              <p>
                Furniture is often the most valuable and difficult part of any
                move. Large items require proper protection, careful lifting,
                and secure transportation to prevent scratches, dents, or damage
                during relocation.
              </p>
              <p className="italic">
                Our Dubai movers handle everything from single furniture items
                to complete household and office furniture relocations.
              </p>
            </>
          }
        />
        <ol className="grid gap-6 lg:grid-cols-2">
          <NumberedItem number="01" title="Bedroom Furniture Moving">
            <p>
              Bedroom furniture often includes beds, wardrobes, dressers, side
              tables, and storage units. These items are carefully dismantled
              when required and packed for safe transportation.
            </p>
            <p>
              Our team ensures all components, fittings, and accessories remain
              organized throughout the move.
            </p>
          </NumberedItem>
          <NumberedItem number="02" title="Living Room Furniture Relocation">
            <p>
              Sofas, coffee tables, TV units, display cabinets, and
              entertainment systems require special attention during loading and
              transportation.
            </p>
            <p>
              Protective wrapping helps keep furniture clean and protected while
              moving between locations.
            </p>
          </NumberedItem>
          <NumberedItem number="03" title="Office Furniture Moving">
            <p>
              Office furniture often includes desks, workstations, filing
              cabinets, conference tables, and storage systems.
            </p>
            <p>
              Our team helps businesses relocate office furniture efficiently
              while minimizing disruption to daily operations.
            </p>
          </NumberedItem>
          <NumberedItem number="04" title="Dining Room Furniture Moving">
            <p>
              Dining tables, chairs, glass tops, and decorative furniture pieces
              are packed carefully before transport. Extra protection is used
              for fragile surfaces and delicate materials.
            </p>
          </NumberedItem>
          <NumberedItem number="05" title="Fragile & Antique Item Handling">
            <p>
              Certain items require additional care due to their age, value, or
              delicate construction. Antique furniture, artwork, mirrors, and
              decorative pieces are packed using specialized protection methods.
            </p>
          </NumberedItem>
          <NumberedItem
            number="06"
            title="Large Furniture Assembly & Installation"
          >
            <p>
              Some furniture cannot be transported in one piece. We dismantle
              large items before moving and reassemble them after delivery to
              ensure proper installation at the new location.
            </p>
          </NumberedItem>
        </ol>
      </Section>

      <Section labelledBy="home-packing-title">
        <SectionHeading
          id="home-packing-title"
          eyebrow="our services"
          title="Packing Materials & Safety Standards We Follow"
          intro={
            <p>
              Good packing materials play an important role in protecting
              belongings during relocation. We use quality supplies and proven
              packing methods to improve safety throughout the moving process.
            </p>
          }
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard title="Bubble Wrap Protection" className="bg-neutral">
            <p>
              Bubble wrap helps protect glass items, electronics, artwork,
              kitchenware, and fragile belongings from impacts during
              transportation.
            </p>
          </FeatureCard>
          <FeatureCard title="Heavy-Duty Carton Boxes" className="bg-neutral">
            <p>
              Strong moving cartons provide reliable protection for household
              goods, office supplies, documents, and personal belongings.
            </p>
          </FeatureCard>
          <FeatureCard
            title="Furniture Blankets & Covers"
            className="bg-neutral"
          >
            <p>
              Furniture blankets and protective covers help reduce scratches,
              dust, and surface damage while furniture is being moved.
            </p>
          </FeatureCard>
          <FeatureCard title="Fragile Item Labeling" className="bg-neutral">
            <p>
              Proper labeling helps movers identify delicate items and handle
              them with extra care throughout loading, transportation, and
              unloading.
            </p>
          </FeatureCard>
          <FeatureCard title="Secure Loading Techniques" className="bg-neutral">
            <p>
              Our team follows organized loading procedures that help prevent
              items from shifting inside the moving vehicle.
            </p>
          </FeatureCard>
          <FeatureCard
            title="Damage Prevention Procedures"
            className="bg-neutral"
          >
            <p>
              Every move follows practical safety procedures designed to reduce
              common relocation risks. Careful packing, secure loading, and
              proper lifting methods all contribute to protecting customer
              belongings.
            </p>
          </FeatureCard>
        </div>
      </Section>

      <Section tone="neutral" labelledBy="home-projects-title">
        <SectionHeading
          id="home-projects-title"
          title="Our Recent Moving Projects in Dubai"
          intro={
            <p>
              Over the years, we have completed residential and commercial
              relocations across Dubai. Our experience covers everything from
              studio apartments to large villas and office facilities.
            </p>
          }
          action={<Button href="/contacts/">Get a Free Moving Quote</Button>}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard title="Apartment Relocations">
            <p>
              We regularly assist residents moving between communities such as
              Dubai Marina, Downtown Dubai, JVC, JVT, and Dubai Silicon Oasis.
            </p>
          </FeatureCard>
          <FeatureCard title="Villa Relocations">
            <p>
              Our villa moving projects include relocations throughout Arabian
              Ranches, Dubai Hills Estate, Emirates Hills, Palm Jumeirah, and
              other residential communities.
            </p>
          </FeatureCard>
          <FeatureCard title="Office Relocations">
            <p>
              Businesses across Business Bay, Downtown Dubai, and other
              commercial districts trust our team for organized office
              relocation services.
            </p>
          </FeatureCard>
          <FeatureCard title="Furniture Installations">
            <p>
              Many projects involve furniture assembly, room setup, and
              workspace installation after delivery. This helps customers settle
              into their new property more quickly.
            </p>
          </FeatureCard>
        </div>
        <div className="mt-14 grid gap-8 rounded-card bg-white p-6 lg:mt-20 lg:grid-cols-[18rem_1fr] lg:items-center lg:gap-14 lg:p-10">
          <SiteImage
            src="/images/global/mover-wrapping-wardrobe-protection.webp"
            alt="Mover wrapping a wardrobe with stretch film and moving blankets"
            ratio="2:3"
            sizes="(min-width: 1024px) 18rem, 100vw"
            className="mx-auto w-full max-w-xs"
          />
          <div className="rich">
            <h4 className="text-2xl">How Can You Get a Quote in Dubai?</h4>
            <p>
              If you’re looking for a{" "}
              <strong>free moving quote in Dubai</strong>, simply contact Al
              Hatem Furniture Moving Company and share your moving requirements
              with our support team. You can send your pickup location,
              destination, and basic details about the items you need to move.
              Our team is available to assist you with your moving and packing
              requirements and provide a quotation based on your needs.
            </p>
            <p className="pt-2 font-bold text-black">
              Request a Free Moving Quote
            </p>
            <p>
              <a
                href={BUSINESS.phoneHref}
                className="text-2xl font-extrabold !no-underline hover:!bg-primary"
              >
                {BUSINESS.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </Section>

      <Section labelledBy="home-tips-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 id="home-tips-title">Moving Tips & Relocation Guides</h2>
            <p className="mt-5">
              Proper planning can make a significant difference during a move.
              These practical moving tips help homeowners, tenants, and
              businesses prepare for relocation more effectively.
            </p>
          </div>
          <div className="grid gap-0">
            <div className="border-t border-line py-8 first:border-t-0 first:pt-0">
              <h3>Common Mistakes People Make When Moving in Dubai</h3>
              <div className="rich mt-3">
                <p>
                  Many people underestimate the time required for packing and
                  preparation. Waiting until the last minute often leads to
                  unnecessary stress and forgotten items.
                </p>
                <p>
                  Booking movers early and creating a moving plan can help avoid
                  common problems.
                </p>
              </div>
            </div>
            <div className="border-t border-line py-8">
              <h3>Moving Checklist for a Stress-Free Relocation</h3>
              <div className="rich mt-3">
                <p>
                  A simple moving checklist helps keep everything organized.
                  Important tasks include updating utility services, notifying
                  relevant parties, packing essential items, and confirming
                  moving schedules.
                </p>
              </div>
            </div>
            <div className="border-t border-line py-8">
              <h3>How to Prepare Your Home Before Moving Day</h3>
              <div className="rich mt-3">
                <p>
                  Preparing your property before movers arrive can save time.
                  Organizing belongings, separating unwanted items, and
                  identifying fragile objects helps improve efficiency on moving
                  day.
                </p>
              </div>
            </div>
            <div className="border-t border-line py-8">
              <h3>How Early Should You Book best Movers in Dubai?</h3>
              <div className="rich mt-3">
                <p>
                  For most residential relocations, booking at least one to two
                  weeks in advance is recommended. During busy periods, earlier
                  booking may provide more scheduling flexibility.
                </p>
              </div>
            </div>
            <div className="border-t border-line py-8 pb-0">
              <h3>How to Protect Fragile Furniture During a Move?</h3>
              <div className="rich mt-3">
                <p>
                  Fragile furniture should be wrapped, padded, and secured
                  properly before transportation. Removing loose parts and using
                  protective materials can significantly reduce the risk of
                  damage.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 grid gap-6 rounded-card bg-neutral p-6 sm:grid-cols-3 lg:mt-20 lg:p-10">
          <div>
            <h4>Best Movers and Packers Dubai</h4>
            <p className="mt-1">Quality Moving Solutions</p>
          </div>
          <div>
            <h4>24/7 Support</h4>
            <p className="mt-1">Always Here to Help</p>
          </div>
          <div>
            <h4>Well Experienced</h4>
            <p className="mt-1">12+ Years of Experience (Since 2014)</p>
          </div>
        </div>
      </Section>

      <Section tone="neutral" labelledBy="home-faq-title">
        <SectionHeading id="home-faq-title" title="FAQs" align="center" />
        <FaqList>
          <Faq question="How much do movers and packers cost in Dubai?">
            <p>
              Most homes cost between AED 700 and AED 7,000+ in Dubai, depending
              on size and service level. A studio typically starts around AED
              700, a 1-bedroom around AED 900, a 2-bedroom around AED 1,500, and
              a villa from around AED 3,500. The exact price for your move is
              confirmed after a free survey. Contact us for a personalized
              estimate.
            </p>
          </Faq>
          <Faq question="Do you provide packing materials?">
            <p>
              Yes. We provide packing materials including cartons, protective
              wraps, furniture covers, and other supplies required for safe
              transportation.
            </p>
          </Faq>
          <Faq question="Can you move villas and apartments?">
            <p>
              Yes. We provide moving services for apartments, villas,
              townhouses, residential compounds, and other property types
              throughout Dubai.
            </p>
          </Faq>
          <Faq question="Do you offer same-day moving services?">
            <p>
              Yes. Same-day moving services may be available depending on
              scheduling and project requirements.
            </p>
          </Faq>
          <Faq question="How long does a typical move take?">
            <p>
              The duration depends on the size of the move, property access,
              packing requirements, and travel distance. Smaller moves may take
              only a few hours, while larger relocations may require a full day.
            </p>
          </Faq>
          <Faq question="Are my belongings insured during the move?">
            <p>
              Insurance options can be discussed during the quotation process.
              Our team follows careful handling procedures designed to protect
              customer belongings throughout relocation.
            </p>
          </Faq>
          <Faq question="Do you provide furniture dismantling and assembly?">
            <p>
              Yes. We dismantle and reassemble beds, wardrobes, office
              furniture, workstations, and other large items when required.
            </p>
          </Faq>
          <Faq question="Which areas of Dubai do you serve?">
            <p>
              We provide moving services across Dubai including Dubai Marina,
              Downtown Dubai, Business Bay, Palm Jumeirah, JVC, JVT, Dubai Hills
              Estate, Arabian Ranches, Al Barsha, Mirdif, Dubai Silicon Oasis,
              Emirates Hills, and surrounding communities.
            </p>
          </Faq>
        </FaqList>
      </Section>

      <Section tone="dark" labelledBy="home-quote-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <h2 id="home-quote-title">Get Your Free Moving Quote Today</h2>
            <div className="rich mt-5 text-white/85">
              <p className="italic">
                Planning a move in Dubai? As trusted movers in Dubai, our team
                is ready to help with professional packing, transportation,
                furniture moving, office relocation, and storage solutions
              </p>
              <p>
                Whether you are moving a studio apartment, family villa, office
                space, or commercial property, we can create a relocation plan
                that fits your requirements and schedule.
              </p>
              <p>
                Contact us today to discuss your move and receive a free
                quotation.
              </p>
            </div>
            <div className="mt-10 grid gap-4">
              <div className="rounded-card border border-white/15 p-6">
                <h3 className="text-lg">Phone Number</h3>
                <p className="mt-2 text-white/75">
                  Speak directly with our team to discuss your moving
                  requirements and receive immediate assistance.
                </p>
                <a
                  href={BUSINESS.phoneHref}
                  className="mt-3 inline-block text-xl font-bold text-primary hover:underline"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
              <div className="rounded-card border border-white/15 p-6">
                <h3 className="text-lg">WhatsApp Button</h3>
                <p className="mt-2 text-white/75">
                  Send us photos, moving details, and questions through WhatsApp
                  for a faster response.
                </p>
                <a
                  href={quote}
                  target="_blank"
                  rel="noopener"
                  className="mt-3 inline-block text-xl font-bold text-primary hover:underline"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
              <div className="rounded-card border border-white/15 p-6">
                <h3 className="text-lg">Email Address</h3>
                <p className="mt-2 text-white/75">
                  Email us your relocation requirements and our team will get
                  back to you with a detailed quotation.
                </p>
                <a
                  href={BUSINESS.emailHref}
                  className="mt-3 inline-block break-all text-lg font-bold text-primary hover:underline"
                >
                  {BUSINESS.email}
                </a>
              </div>
            </div>
          </div>
          <div className="self-start rounded-card bg-white p-6 text-body lg:p-8">
            <h3 className="text-2xl !text-black">Contact Form</h3>
            <p className="mb-6 mt-2">
              Request a free moving estimate by submitting your details through
              our online contact form
            </p>
            <QuoteForm idPrefix="cta" />
            <div className="mt-8 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
              <div>
                <h3 className="text-lg !text-black">Service Areas</h3>
                <p className="mt-1">
                  We proudly serve customers across Dubai and surrounding
                  communities.
                </p>
              </div>
              <div>
                <h3 className="text-lg !text-black">
                  Emergency Moving Requests
                </h3>
                <p className="mt-1">
                  Need urgent assistance? Contact our team to check availability
                  for same-day and short-notice relocations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section labelledBy="home-office-title">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <div>
            <h2 id="home-office-title">
              Visit Our Office on Palm Jumeirah, Dubai
            </h2>
            <address className="mt-5 not-italic">
              <p>
                Al Hatem Furniture Moving Company, Office No. 402, NH Collection
                Dubai The Palm, Al Naghal, Palm Jumeirah (Nakhlat Jumeira),
                Dubai, UAE
              </p>
              <p className="mt-3">
                Call or WhatsApp:{" "}
                <a
                  href={BUSINESS.phoneHref}
                  className="font-bold text-black underline"
                >
                  {BUSINESS.phoneDisplay}
                </a>{" "}
                ·{" "}
                <a
                  href={BUSINESS.mapsHref}
                  target="_blank"
                  rel="noopener"
                  className="font-bold text-black underline"
                >
                  Get directions on Google Maps
                </a>
              </p>
            </address>
            <div className="mt-6 flex items-center gap-3 text-sm text-muted">
              <Clock className="size-4" aria-hidden="true" />
              {BUSINESS.hours}
            </div>
          </div>
          <MapBlock />
        </div>
      </Section>
    </Shell>
  );
}
