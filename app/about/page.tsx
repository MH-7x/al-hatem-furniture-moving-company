import { ReviewsSection } from "@/components/Blocks";
import Link from "next/link";
import { Shell } from "@/components/Shell";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/Section";
import { SiteImage } from "@/components/SiteImage";
import { CardGrid, FeatureCard, ServiceCard } from "@/components/Cards";
import { QuoteForm } from "@/components/QuoteForm";
import { FinalCta } from "@/components/FinalCta";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const PATH = "/about/";
const TITLE = "About Al Hatem Furniture Moving Company | Packers and Movers";
const DESCRIPTION =
  "Learn about Al Hatem Furniture Moving Company, a trusted Dubai-based moving company providing relocation, packing and moving services across the UAE.";
const IMAGE = "/images/global/al-hatem-movers-team-and-truck-uae.webp";
const IMAGE_ALT =
  "Al Hatem Movers team and moving truck serving customers across the UAE";

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
  pageType: "AboutPage",
  crumbs: [["About", PATH]],
});

const quote = BUSINESS.whatsappQuoteHref;

export default function AboutPage() {
  return (
    <Shell>
      <JsonLd data={schema} />

      <PageHeader
        variant="bold"
        breadcrumb={[["Home", "/"], ["About"]]}
        title="About Al Hatem Furniture Moving Company"
        image={<SiteImage src={IMAGE} alt={IMAGE_ALT} ratio="3:2" priority />}
        actions={
          <Button href={quote} size="lg">
            Get a Free Moving Quote
          </Button>
        }
      >
        <p>
          For over 12 years, Al Hatem Movers has been helping families and
          businesses relocate across Dubai and the UAE. What began as a local
          moving service has grown into a trusted company serving homeowners,
          tenants, and commercial clients throughout the region.
        </p>
        <p>
          With more than 12,000 successful moves completed, we provide
          residential moving, office relocation, packing, storage, and cargo
          services designed to make moving simpler and more organized.
        </p>
      </PageHeader>

      <Section labelledBy="about-trust-title" tight>
        <SectionHeading
          id="about-trust-title"
          title="Trusted by Customers Across the UAE"
        />
        <ul className="check-list grid gap-x-8 gap-y-4 font-semibold text-black md:grid-cols-2 lg:grid-cols-3">
          <li>12+ Years of Industry Experience (Since 2014)</li>
          <li>12,000+ Successful Moves Completed</li>
          <li>Licensed & Insured Moving Services</li>
          <li>Residential & Commercial Relocation Experts</li>
          <li>Serving Dubai and Major UAE Cities</li>
        </ul>
      </Section>

      <Section tone="neutral" labelledBy="about-who-title">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow mb-3">Who We Are</p>
            <h2 id="about-who-title">
              Dubai-Based Moving and Logistics Company
            </h2>
            <div className="rich mt-5">
              <p>
                <Link href="/">Al Hatem Movers</Link> is a Dubai-based moving
                and logistics company serving customers across the UAE. We help
                individuals, families, and businesses relocate safely with
                practical moving solutions tailored to their requirements
              </p>
              <p>
                From small apartment moves to large office relocations, our team
                manages every stage of the process, including packing,
                transportation, furniture assembly, storage, and cargo support.
              </p>
              <p>
                Over the years, our focus on reliability, transparency, and
                customer satisfaction has helped us build long-term
                relationships with clients throughout Dubai and beyond.
              </p>
            </div>
          </div>
          <dl className="flex flex-col-reverse rounded-card bg-black p-8 text-white lg:p-10">
            <dt className="mt-2 text-lg font-semibold text-white/80">
              Commercial Projects
            </dt>
            <dd className="text-5xl font-extrabold tracking-tight text-primary lg:text-6xl">
              1,850+
            </dd>
          </dl>
        </div>
      </Section>

      <Section labelledBy="about-story-title">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="grid gap-5">
            <SiteImage
              src="/images/about/al-hatem-movers-dubai-moving-company.webp"
              alt="Al Hatem Furniture Moving Company crew handling a move in Dubai"
              ratio="3:2"
            />
            <SiteImage
              src="/images/about/al-hatem-movers-12-years-journey.webp"
              alt="Al Hatem Movers growth from local Dubai moves to relocations across the UAE"
              ratio="3:2"
            />
          </div>
          <div>
            <p className="eyebrow mb-3">Our Story</p>
            <h2 id="about-story-title">A Decade of Moving Customers Forward</h2>
            <div className="rich mt-5">
              <p>
                For more than a decade, Al Hatem Movers has been helping
                customers navigate one of life’s biggest transitions, moving to
                a new home or workplace.
              </p>
              <p>
                As demand for reliable relocation services grew, so did our
                team, capabilities, and service areas. Today, we support
                residential and commercial moves across Dubai, Abu Dhabi, Ajman,
                Al Ain, and other UAE cities.
              </p>
              <p>
                While our services have expanded over the years, our approach
                remains the same: provide dependable moving solutions, clear
                communication, and a smooth customer experience from start to
                finish.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="neutral" labelledBy="about-what-title">
        <SectionHeading
          id="about-what-title"
          title="What We Do"
          intro={
            <p>
              Al Hatem Movers provides residential, commercial, packing,
              storage, furniture moving, and cargo services across Dubai and the
              UAE. Whether you’re relocating a home, moving an office, or
              transporting goods between cities, our team offers practical
              solutions tailored to your requirements.
            </p>
          }
        />
        <CardGrid cols={4}>
          <ServiceCard
            title="Home Moving Services"
            href="/home-movers-and-packers-in-dubai/"
            linkText="View Home Moving"
          >
            <p>
              We help families relocate houses, townhouses, and residential
              properties with organized packing, transportation, unloading, and
              furniture setup services.
            </p>
          </ServiceCard>
          <ServiceCard
            title="Apartment Moving Services"
            href="/apartment-movers-in-dubai/"
            linkText="View Apartment Moving"
          >
            <p>
              Our apartment movers assist residents with packing, loading,
              transportation, and building access coordination for smooth
              apartment relocations throughout Dubai.
            </p>
          </ServiceCard>
          <ServiceCard
            title="Villa Relocation Services"
            href="/villa-movers-in-dubai/"
            linkText="View Villa Moving"
          >
            <p>
              Villa moves often involve larger volumes of furniture and
              household belongings. Our team helps plan and manage villa
              relocations efficiently from start to finish.
            </p>
          </ServiceCard>
          <ServiceCard
            title="Office & Commercial Relocation"
            href="/office-movers-in-dubai/"
            linkText="View Office Moving"
          >
            <p>
              We assist businesses with office moves, workspace relocations,
              furniture transportation, and commercial moving projects while
              helping minimize operational disruption.
            </p>
          </ServiceCard>
          <ServiceCard
            title="Furniture Moving Services"
            href="/furniture-movers-in-dubai/"
            linkText="View Furniture Moving"
          >
            <p>
              From beds and wardrobes to office furniture and specialty items,
              we transport furniture carefully and can also provide dismantling
              and reassembly services.
            </p>
          </ServiceCard>
          <ServiceCard
            title="Packing & Storage Solutions"
            href="/packing-and-unpacking-services-in-dubai/"
            linkText="View Packing Services"
          >
            <p>
              We provide professional packing services using quality materials
              to help protect belongings during transportation. Secure storage
              options are also available for short-term and long-term
              requirements.
            </p>
          </ServiceCard>
          <ServiceCard
            title="Cargo & Logistics Services"
            href="/cargo-services-in-dubai/"
            linkText="View Cargo Services"
          >
            <p>
              Our cargo services support the transportation of household goods,
              commercial products, equipment, and other items across Dubai and
              the UAE.
            </p>
          </ServiceCard>
          <ServiceCard
            title="Local & Intercity Moving"
            href="/areas-we-serve/"
            linkText="View Areas We Serve"
          >
            <p>
              Whether you’re moving within Dubai or relocating to Abu Dhabi,
              Ajman, Al Ain, Sharjah, or other UAE cities, our team can help
              manage the process efficiently.
            </p>
          </ServiceCard>
        </CardGrid>
        <div className="mt-10 text-center">
          <Button href={quote} size="lg">
            Schedule Your Move Today
          </Button>
        </div>
      </Section>

      <Section labelledBy="about-why-title">
        <SectionHeading
          id="about-why-title"
          title="Why Customers Choose Al Hatem Movers"
          intro={
            <p>
              Choosing a moving company is about more than transportation.
              Customers want a team they can rely on to manage their move
              efficiently and professionally.
            </p>
          }
        />
        <CardGrid cols={3}>
          <FeatureCard
            title="12+ Years of Industry Experience (Since 2014)"
            className="bg-neutral"
          >
            <p>
              With over a decade of experience, we understand the planning and
              coordination required for successful residential and commercial
              relocations.
            </p>
          </FeatureCard>
          <FeatureCard
            title="Trained Moving Professionals"
            className="bg-neutral"
          >
            <p>
              Our team is trained to handle furniture, appliances, office
              equipment, and fragile items using safe and organized moving
              practices.
            </p>
          </FeatureCard>
          <FeatureCard
            title="Affordable & Transparent Pricing"
            className="bg-neutral"
          >
            <p>
              We provide clear quotations based on the actual requirements of
              the move, helping customers understand exactly what is included.
            </p>
          </FeatureCard>
          <FeatureCard
            title="Safe Handling of Belongings"
            className="bg-neutral"
          >
            <p>
              From packing and loading to transportation and delivery, we follow
              procedures designed to reduce the risk of damage during
              relocation.
            </p>
          </FeatureCard>
          <FeatureCard
            title="On-Time Service Across the UAE"
            className="bg-neutral"
          >
            <p>
              We understand the importance of schedules, property handovers, and
              business operations. That’s why we work hard to complete moves
              according to agreed timelines.
            </p>
          </FeatureCard>
        </CardGrid>
      </Section>

      <Section tone="neutral" labelledBy="about-cities-title">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 id="about-cities-title">Serving Dubai and Major UAE Cities</h2>
            <div className="rich mt-5">
              <p>
                Al Hatem Movers proudly serves customers throughout Dubai and
                other major cities across the UAE.
              </p>
              <p className="text-xl font-bold leading-snug">
                <Link href="/areas-we-serve/">Dubai</Link>.{" "}
                <Link href="/movers-and-packers-in-abu-dhabi/">Abu Dhabi</Link>.{" "}
                <Link href="/movers-and-packers-in-ajman/">Ajman</Link>.{" "}
                <Link href="/movers-and-packers-in-al-ain/">Al Ain</Link>.{" "}
                <Link href="/movers-and-packers-in-sharjah/">Sharjah</Link>.{" "}
                <Link href="/movers-and-packers-in-ras-al-khaimah/">
                  Ras Al Khaimah
                </Link>
                . <Link href="/movers-and-packers-in-fujairah/">Fujairah</Link>.
                Umm Al Quwain.
              </p>
              <p>
                Whether you’re moving locally or relocating between cities, our
                team is ready to help.
              </p>
            </div>
          </div>
          <div className="self-start rounded-card bg-white p-6 shadow-[0_20px_50px_-25px_rgb(0_0_0/0.25)] lg:p-8">
            <p className="mb-5 text-xl font-bold text-black">
              Get a free moving quote
            </p>
            <QuoteForm idPrefix="about" />
          </div>
        </div>
      </Section>

      <Section labelledBy="about-team-title">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-20">
          <div>
            <p className="eyebrow mb-3">Our Dedicated Team</p>
            <h2 id="about-team-title">
              Trained Professionals Who Handle Your Move With Care
            </h2>
            <div className="rich mt-5">
              <p>
                Our team is trained to handle furniture, appliances, office
                equipment, and fragile items using safe and organized moving
                practices.
              </p>
              <p>
                From packing and loading to transportation, unloading, and
                furniture setup, our moving professionals work carefully to keep
                your relocation organized and efficient.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={quote}>meet the team</Button>
              <Button href="/contacts/" variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>
          <figure className="mx-auto w-full max-w-sm">
            <SiteImage
              src="/images/global/Waqar-Ahmad-Owner-Al-Hatem-Furniture-Moving-Company.jpg"
              alt="Waqar Ahmad, owner of Al Hatem Furniture Moving Company"
              ratio="1:1"
              sizes="(min-width: 1024px) 24rem, 100vw"
              fallback={
                <div
                  role="img"
                  aria-label="Waqar Ahmad, owner of Al Hatem Furniture Moving Company"
                  className="grid aspect-square w-full place-items-center rounded-card bg-neutral"
                >
                  <span className="grid size-40 place-items-center rounded-full bg-primary text-5xl font-extrabold text-black">
                    WA
                  </span>
                </div>
              }
            />
            <figcaption className="mt-5">
              <strong className="block text-xl text-black">Waqar Ahmad</strong>
              Owner, Al Hatem Furniture Moving Company
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section tone="neutral" labelledBy="about-values-title">
        <SectionHeading
          id="about-values-title"
          title="Our Values"
          intro={
            <p>
              Our values shape the way we work and the service we provide to
              every customer.
            </p>
          }
        />
        <CardGrid cols={3}>
          <FeatureCard title="Reliability">
            <p>
              We believe customers should be able to depend on their moving
              company from the initial inquiry to the final delivery.
            </p>
          </FeatureCard>
          <FeatureCard title="Safety">
            <p>
              Protecting belongings, properties, and people remains a priority
              throughout every stage of the move.
            </p>
          </FeatureCard>
          <FeatureCard title="Transparency">
            <p>
              Clear communication and honest pricing help customers make
              informed decisions without unexpected surprises.
            </p>
          </FeatureCard>
          <FeatureCard title="Customer Support">
            <p>
              We remain available to answer questions, provide updates, and
              assist customers throughout their relocation journey.
            </p>
          </FeatureCard>
          <FeatureCard title="Professionalism">
            <p>
              Punctuality, organization, and respectful service are standards we
              strive to maintain on every project.
            </p>
          </FeatureCard>
        </CardGrid>
      </Section>

      <Section labelledBy="about-commit-title">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SiteImage
            src="/images/global/uae-moving-service-coverage.webp"
            alt="Moving truck on a UAE highway serving Dubai and the other emirates"
            ratio="2:1"
          />
          <div>
            <h2 id="about-commit-title">Our Commitment to Every Customer</h2>
            <div className="rich mt-5">
              <p>
                Every move deserves proper planning, attention to detail, and
                dependable support.
              </p>
              <p>
                Whether you’re relocating a home, office, or commercial space,
                our goal is to provide a service that is organized, efficient,
                and tailored to your needs.
              </p>
              <p>
                We are committed to delivering a positive moving experience
                while helping customers settle into their new location with
                confidence.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <ReviewsSection id="about-reviews-title" title="What Our Customers Say" />

      <FinalCta id="about-final-title" title="Get in Touch With Our Team">
        <p>
          Planning a move or looking for storage or cargo services? Our team is
          here to help.
        </p>
        <p>
          Let Al Hatem Movers help make your next move simple, organized, and
          stress-free.
        </p>
      </FinalCta>
    </Shell>
  );
}
