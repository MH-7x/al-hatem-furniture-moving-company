import { ReviewsSection } from "@/components/Blocks";
import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Shell } from "@/components/Shell";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/Section";
import { SiteImage } from "@/components/SiteImage";
import { Callout, CardGrid, FeatureCard, ServiceCard } from "@/components/Cards";
import { Faqs } from "@/components/Faq";
import { MapBlock } from "@/components/MapBlock";
import { QuoteForm } from "@/components/QuoteForm";
import { FinalCta } from "@/components/FinalCta";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const PATH = "/contacts/";
const TITLE = "Contact Al Hatem Movers | Movers & Packers Dubai";
const DESCRIPTION =
  "Contact Al Hatem Movers for moving, packing, storage and relocation services in Dubai and across the UAE. Open 24 hours. Request a free quote.";
const IMAGE = "/images/global/al-hatem-movers-team-and-truck-uae.webp";
const IMAGE_ALT = "Al Hatem Movers team and moving truck serving customers across the UAE";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: IMAGE,
  imageAlt: IMAGE_ALT,
});

const faqs = [
  [
    "How quickly can I get a moving quote?",
    "Most inquiries receive a response during business hours. Contact us by phone or WhatsApp for the fastest assistance.",
  ],
  [
    "Do you offer same-day moving services?",
    "Yes. Same-day moving may be available depending on location, move size, and scheduling availability.",
  ],
  [
    "Can I request a site survey before moving?",
    "Yes. We can arrange a survey for larger residential and commercial relocations to provide a more accurate quote.",
  ],
  [
    "Do you provide packing materials?",
    "Yes. We provide cartons, protective wrapping, furniture covers, and other packing materials required for safe transportation.",
  ],
  [
    "Which areas do you serve?",
    "We provide moving services across Dubai, Abu Dhabi, Sharjah, Ajman, Al Ain, Ras Al Khaimah, Fujairah, Umm Al Quwain, and surrounding areas.",
  ],
] as const;

const schema = pageSchema({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  image: IMAGE,
  imageAlt: IMAGE_ALT,
  pageType: "ContactPage",
  crumbs: [["Contacts", PATH]],
  faqs,
});

const quote = BUSINESS.whatsappQuoteHref;

export default function ContactsPage() {
  return (
    <Shell>
      <JsonLd data={schema} />

      <PageHeader
        variant="bold"
        breadcrumb={[["Home", "/"], ["Contacts"]]}
        title="Contact Al Hatem Furniture Moving Company"
        image={<SiteImage src={IMAGE} alt={IMAGE_ALT} ratio="3:2" priority />}
        actions={
          <Button href={quote} size="lg">
            Get a Free Moving Quote
          </Button>
        }
      >
        <p>
          Planning a move in Dubai or anywhere in the UAE? Our team is ready to help with home
          moving, apartment relocation, villa shifting, office moves, packing services, storage
          solutions, and cargo transportation.
        </p>
        <p>
          Contact <Link href="/">Al Hatem Movers</Link> today for a free quote, moving
          consultation, or service inquiry. Whether you’re moving a home or relocating a business,
          we’ll help you find the right solution for your requirements.
        </p>
      </PageHeader>

      <Section labelledBy="contacts-trust-title" tight>
        <SectionHeading id="contacts-trust-title" title="Trusted by Customers Across the UAE" />
        <ul className="check-list grid gap-x-8 gap-y-4 font-semibold text-black md:grid-cols-2 lg:grid-cols-3">
          <li>12+ Years of Industry Experience (Since 2014)</li>
          <li>12,000+ Successful Moves Completed</li>
          <li>Licensed & Insured Moving Services | Trade Licence Available on Request</li>
          <li>Residential & Commercial Relocation Experts</li>
          <li>Serving Dubai and Major UAE Cities</li>
          <li>Same-Day Moving Available</li>
        </ul>
      </Section>

      <Section tone="neutral" labelledBy="contacts-quote-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <h2 id="contacts-quote-title">Request a Free Moving Quote</h2>
            <div className="rich mt-5">
              <p>
                Every move is different. Share your requirements with our team and receive a
                customized quote based on your pickup and drop-off locations, property type, and
                service needs.
              </p>
              <Callout>
                <p>
                  <strong>Note:</strong> All quotes are free with no obligation. Our team typically
                  responds to inquiries during business hours.
                </p>
              </Callout>
              <h3>Ready to Plan Your Move?</h3>
              <p>
                Tell us where you’re moving from, where you’re going, and what you need to move.
                Our team will help you plan the right moving solution.
              </p>
            </div>
            <dl className="mt-8 grid gap-6">
              <div>
                <dt className="font-bold text-black">Email us</dt>
                <dd className="mt-1 break-words">
                  <a
                    href={BUSINESS.emailHref}
                    className="font-semibold underline decoration-primary decoration-[3px] underline-offset-4 hover:bg-primary"
                  >
                    {BUSINESS.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-bold text-black">Address</dt>
                <dd className="mt-1">
                  <address className="not-italic">{BUSINESS.addressFull}</address>
                </dd>
              </div>
              <div>
                <dt className="font-bold text-black">Call Us</dt>
                <dd className="mt-1">
                  <a
                    href={BUSINESS.phoneHref}
                    className="font-semibold underline decoration-primary decoration-[3px] underline-offset-4 hover:bg-primary"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="self-start rounded-card bg-white p-6 shadow-[0_20px_50px_-25px_rgb(0_0_0/0.25)] lg:p-8">
            <p className="mb-5 text-xl font-bold text-black">Get a free moving quote</p>
            <QuoteForm idPrefix="contact" />
          </div>
        </div>
      </Section>

      <Section labelledBy="contacts-info-title">
        <SectionHeading
          id="contacts-info-title"
          title="Contact Information"
          intro={
            <p>
              Have a question? Need immediate assistance? Contact our team through your preferred
              method below.
            </p>
          }
        />
        <CardGrid cols={3}>
          <FeatureCard icon={Phone} title="Phone Number" className="bg-neutral">
            <p>Speak directly with our moving specialists.</p>
            <p>
              <strong>Phone:</strong> <a href={BUSINESS.phoneHref}>{BUSINESS.phoneDisplay}</a>
            </p>
          </FeatureCard>
          <FeatureCard icon={MessageCircle} title="WhatsApp Support" className="bg-neutral">
            <p>Send photos, moving details, and inquiries for a quick response.</p>
            <p>
              <strong>WhatsApp:</strong>{" "}
              <a href={quote} target="_blank" rel="noopener">
                {BUSINESS.phoneDisplay}
              </a>
            </p>
          </FeatureCard>
          <FeatureCard icon={MapPin} title="Office Address" className="bg-neutral">
            <p>Visit our office or contact us for more information about our services.</p>
            <p>
              <strong>Address:</strong> {BUSINESS.addressFull}
            </p>
          </FeatureCard>
          <FeatureCard icon={Mail} title="Email Address" className="bg-neutral">
            <p>Email your moving requirements and receive a detailed response.</p>
            <p className="break-words">
              <strong>Email:</strong> <a href={BUSINESS.emailHref}>{BUSINESS.email}</a>
            </p>
          </FeatureCard>
          <FeatureCard icon={Clock} title="Business Hours" className="bg-neutral">
            <p>
              <strong>Monday – Sunday</strong>
              <br />
              Open 24 hours
            </p>
          </FeatureCard>
        </CardGrid>
      </Section>

      <Section tone="neutral" labelledBy="contacts-services-title">
        <SectionHeading
          id="contacts-services-title"
          title="Services We Offer"
          intro={
            <p>
              Al Hatem Movers provides complete moving and logistics solutions for residential and
              commercial customers across the UAE.
            </p>
          }
        />
        <CardGrid cols={4}>
          <ServiceCard
            title="Home Moving"
            href="/home-movers-and-packers-in-dubai/"
            linkText="Read More: Home Moving"
          >
            <p>Professional relocation services for houses, townhouses, and family homes</p>
          </ServiceCard>
          <ServiceCard
            title="Apartment Moving"
            href="/apartment-movers-in-dubai/"
            linkText="Read More: Apartment Moving"
          >
            <p>Safe apartment moving services with packing, transportation, and furniture setup.</p>
          </ServiceCard>
          <ServiceCard
            title="Villa Relocation"
            href="/villa-movers-in-dubai/"
            linkText="Read More: Villa Relocation"
          >
            <p>Complete villa moving solutions for larger residential properties.</p>
          </ServiceCard>
          <ServiceCard
            title="Office Relocation"
            href="/office-movers-in-dubai/"
            linkText="Read More: Office Relocation"
          >
            <p>Efficient office and commercial moving services designed to minimize downtime.</p>
          </ServiceCard>
          <ServiceCard
            title="Furniture Moving"
            href="/furniture-movers-in-dubai/"
            linkText="Read More: Furniture Moving"
          >
            <p>Careful transportation, dismantling, and reassembly of furniture.</p>
          </ServiceCard>
          <ServiceCard
            title="Packing & Unpacking Services"
            href="/packing-and-unpacking-services-in-dubai/"
            linkText="Read More: Packing & Unpacking Services"
          >
            <p>Professional packing solutions using quality materials for added protection.</p>
          </ServiceCard>
          <ServiceCard
            title="Storage Solutions"
            href="/storage-solutions-in-dubai/"
            linkText="Read More: Storage Solutions"
          >
            <p>Secure short-term and long-term storage options for homes and businesses.</p>
          </ServiceCard>
          <ServiceCard
            title="Cargo Services"
            href="/cargo-services-in-dubai/"
            linkText="Read More: Cargo Services"
          >
            <p>Reliable cargo transportation and logistics support across the UAE.</p>
          </ServiceCard>
        </CardGrid>
        <div className="mt-10 text-center">
          <Button href={quote} size="lg">
            Schedule Your Move Today
          </Button>
        </div>
      </Section>

      <Section labelledBy="contacts-areas-title">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 id="contacts-areas-title">Areas We Serve Across the UAE</h2>
            <div className="rich mt-5">
              <p>
                Our team proudly serves customers throughout Dubai and major cities across the UAE.
              </p>
              <p className="text-xl font-bold leading-snug text-black">
                Dubai. Abu Dhabi. Ajman. Al Ain. Sharjah. Ras Al Khaimah. Fujairah. Umm Al Quwain.
              </p>
              <p>
                Whether you’re moving within the same city or relocating to another emirate, our
                team is ready to assist.
              </p>
            </div>
          </div>
          <div className="self-start rounded-card bg-neutral p-6 lg:p-8">
            <p className="mb-5 text-xl font-bold text-black">Get a free moving quote</p>
            <QuoteForm idPrefix="contact-areas" />
          </div>
        </div>
      </Section>

      <Section tone="neutral" labelledBy="contacts-sameday-title">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <SiteImage
            src="/images/global/uae-moving-service-coverage.webp"
            alt="Moving truck on a UAE highway serving Dubai and the other emirates"
            ratio="2:1"
          />
          <div>
            <h2 id="contacts-sameday-title">Need a Same-Day Move?</h2>
            <div className="rich mt-5">
              <p>Unexpected move? Property handover approaching? Need urgent assistance?</p>
              <p>
                Al Hatem Movers offers same-day and short-notice moving services, subject to
                availability. Contact our team to discuss your requirements and check available
                moving slots.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section labelledBy="contacts-faq-title">
        <SectionHeading id="contacts-faq-title" title="FAQs" align="center" />
        <Faqs items={faqs} />
      </Section>

      <Section tone="neutral" labelledBy="contacts-map-title">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <div>
            <h2 id="contacts-map-title">Find Us on the Map</h2>
            <p className="mt-5">
              Al Hatem Furniture Moving Company, Office No. 402, NH Collection Dubai The Palm, Al
              Naghal, Palm Jumeirah (Nakhlat Jumeira), Dubai, United Arab Emirates.
            </p>
            <div className="mt-6">
              <Button href={BUSINESS.mapsHref} variant="secondary">
                Get directions on Google Maps
              </Button>
            </div>
          </div>
          <MapBlock />
        </div>
      </Section>

      <ReviewsSection id="contacts-reviews-title" title="What Our Customers Say" />

      <FinalCta id="contacts-final-title" title="Ready to Plan Your Move?">
        <p>
          Whether you’re moving a home, apartment, villa, office, or commercial property, our team
          is ready to help.
        </p>
        <p>Contact Al Hatem Movers today for a free quote and personalized moving assistance.</p>
        <p>Let Al Hatem Movers help make your next move simple, organized, and stress-free.</p>
      </FinalCta>
    </Shell>
  );
}
