import Link from "next/link";
import { ArticleSection, ContactStrip } from "@/components/Article";
import { ReviewsSection } from "@/components/Blocks";
import { Button } from "@/components/Button";
import { Callout, ChipLink } from "@/components/Cards";
import { FinalCta } from "@/components/FinalCta";
import { Banner, LocationLayout } from "@/components/LocationLayout";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const PATH = "/movers-and-packers-in-sharjah/";
const TITLE = "Trusted Movers in Sharjah | Movers and Packers Sharjah";
const DESCRIPTION =
  "Need Movers in Sharjah? Al Hatem Movers and Packers Sharjah handles home, villa and office moves with safe packing. Get a free quote.";
const IMG = "/images/movers-and-packers-in-sharjah";
const IMAGE = `${IMG}/movers-packers-sharjah.webp`;
const IMAGE_ALT = "Movers and packers in Sharjah";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: IMAGE,
  imageAlt: IMAGE_ALT,
});

const faqs = [
  [
    "How much do movers charge in Sharjah?",
    "A move in Sharjah typically costs AED 150–15,000 or more. Local apartments typically cost AED 700–4,500 transport-only depending on size, a single item AED 150–250, a 3-bedroom villa AED 3,500–6,000 before packing, and a Dubai-to-Sharjah move AED 1,200–1,800 for a 1-bedroom and AED 2,000–3,000 for a 2-bedroom. The exact price is confirmed in a written quote after a short assessment.",
  ],
  [
    "Do you provide packing materials?",
    "Yes. Cartons, bubble wrap, foam, furniture blankets, tape and covers are available with our packing service.",
  ],
  [
    "Can you move me from Dubai to Sharjah in one day?",
    "Most apartment moves can be completed in a single day, depending on inventory and access. Larger villas and offices may need extra time or a second crew.",
  ],
  [
    "Are my belongings insured during the move?",
    "Ask us for details of the cover that applies to your move. We can confirm the terms in writing before booking. Al Hatem Movers is licensed and insured.",
  ],
  [
    "Do you dismantle and reassemble furniture?",
    "Yes. Beds, wardrobes, tables and office furniture are dismantled, protected and reassembled at the new property.",
  ],
  [
    "Do you offer same-day movers in Sharjah?",
    "Yes, subject to availability. Call or WhatsApp us early in the day with your addresses and inventory.",
  ],
  [
    "Which areas of Sharjah do you cover?",
    "We cover Al Majaz, Al Khan, Al Nahda, Al Taawun, Muwaileh, University City, Aljada, Tilal City, Al Zahia, Al Qasimia, Rolla and the industrial and free zone areas.",
  ],
  [
    "Can you move my office in Sharjah?",
    "Yes. We relocate workstations, storage, IT equipment and retail fixtures, and we can work outside business hours.",
  ],
  ["Do you store furniture?", "Yes. Short term and long term storage is available on request."],
  [
    "Can I get a quote using photos?",
    "Yes. Send photos of each room and the access route on WhatsApp at +971 56 626 4074, and we will estimate the move.",
  ],
  [
    "How do I book?",
    "Call, message on WhatsApp, or use the contact form with your addresses, date and property type.",
  ],
] as const;

const schema = pageSchema({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  image: IMAGE,
  imageAlt: IMAGE_ALT,
  crumbs: [
    ["Areas We Serve", "/areas-we-serve/"],
    ["Movers and Packers in Sharjah", PATH],
  ],
  service: {
    name: "Movers and Packers in Sharjah",
    serviceType: "Moving and packing services",
    description:
      "Need movers and packers in Sharjah? Al Hatem Movers offers home, villa, apartment, office and furniture moving with careful packing and safe transport.",
    areaServed: { "@type": "City", name: "Sharjah" },
  },
  faqs,
});

export default function SharjahPage() {
  return (
    <LocationLayout
      schema={schema}
      crumbLabel="Movers and Packers in Sharjah"
      title="Trusted Movers in Sharjah – Safe & Affordable Home, Villa and Office Relocation"
      heroImage={{ src: IMAGE, alt: IMAGE_ALT, ratio: "16:9" }}
      intro={
        <p>
          movers sharjah, or between Sharjah and Dubai? Al Hatem Furniture Moving Company handles
          packing, loading, transport, furniture assembly and unloading for apartments, villas, offices
          and shops across every Sharjah district, with one clear quote and a crew that already
          understands building rules, traffic windows and access limits. Call{" "}
          <a href={BUSINESS.phoneHref}>+971 56 626 4074</a> for a free estimate.
        </p>
      }
      faqId="sh-faq-title"
      faqTitle="Frequently Asked Questions About Movers in Sharjah"
      faqs={faqs}
      nearby={
        <>
          <ChipLink href="/movers-and-packers-in-ajman/">Movers in Ajman</ChipLink>
          <ChipLink href="/movers-and-packers-in-abu-dhabi/">Movers in Abu Dhabi</ChipLink>
          <ChipLink href="/movers-and-packers-in-ras-al-khaimah/">Movers in Ras Al Khaimah</ChipLink>
          <ChipLink href="/areas-we-serve/">All Areas We Serve</ChipLink>
        </>
      }
      after={
        <>
          <ArticleSection id="sh-explore" title="Explore Our Other Moving Locations and Services">
            <p>
              Moving elsewhere? See our services in{" "}
              <Link href="/movers-and-packers-in-abu-dhabi/">Abu Dhabi</Link>,{" "}
              <Link href="/movers-and-packers-in-ajman/">Ajman</Link> and{" "}
              <Link href="/movers-and-packers-in-al-ain/">Al Ain</Link>, or our{" "}
              <Link href="/movers-and-packers-in-ras-al-khaimah/">Ras Al Khaimah</Link> and{" "}
              <Link href="/movers-and-packers-in-fujairah/">Fujairah</Link> pages. For Dubai, visit{" "}
              <Link href="/home-movers-and-packers-in-dubai/">home movers</Link>,{" "}
              <Link href="/villa-movers-in-dubai/">villa movers</Link>,{" "}
              <Link href="/furniture-movers-in-dubai/">furniture movers</Link> or our full{" "}
              <Link href="/services/">services page</Link>.
            </p>
          </ArticleSection>
          <FinalCta id="sh-final-title" title="Book Your Sharjah Move Today">
            <p>
              Call +971 56 626 4074 or message us on WhatsApp for a free quote. Share your addresses,
              date and property type with our movers in Sharjah UAE team and we will reply with a clear
              written estimate.
            </p>
          </FinalCta>
        </>
      }
    >
      <ArticleSection id="sh-quick" title="Who Are the Best Movers and Packers in Sharjah? A Quick Answer">
        <p>
          <strong>Al Hatem Movers</strong> is a licensed moving company that provides packing, loading,
          transportation, furniture dismantling and reassembly, unpacking and storage for homes and
          offices in Sharjah and for Sharjah to Dubai relocations. A move is priced by property size,
          floor and lift access, distance, packing scope and date, and every quote is shared in writing
          before work starts. Call <a href={BUSINESS.phoneHref}>+971 56 626 4074</a> or message us on
          WhatsApp for a free quote.
        </p>
        <p>
          The rest of this page explains how moving in Sharjah actually works: which districts we cover,
          what changes from one building or community to the next, what moves the price, how a Dubai to
          Sharjah move differs from a local one, and what to prepare before the truck arrives. If you only
          need a number, scroll to the cost section or contact us directly.
        </p>
      </ArticleSection>

      <ContactStrip lead="Speak With Our Packing Specialists" />

      <ArticleSection
        id="sh-reliable"
        tone="neutral"
        title="Reliable Home and Office Movers in Sharjah, Built Around Local Access Rules"
      >
        <p>
          Sharjah is not just another address on the map. It is a dense mix of high-rise towers in Al
          Majaz, Al Khan and Al Nahda, family villas in Muwaileh and Al Suyoh, student housing around
          University City, master-planned communities such as Aljada and Tilal City, and busy commercial
          streets in Al Qasimia, Rolla and the industrial areas. Each one has its own parking situation,
          lift booking rules, security desk, working hours and street width, and those details decide
          whether a move takes four hours or ten.
        </p>
        <p>
          Our Sharjah moving team plans around those details before the truck leaves the yard. We ask
          which floor you are on, whether the building has a service lift, how far the truck must park
          from the entrance, and whether management needs a move permit or refundable deposit. That short
          conversation prevents the two most common moving day failures: a truck that cannot get close
          enough, and a crew that loses hours waiting for a lift slot.
        </p>
        <p>
          We also work as a single team from start to finish. The crew that packs your kitchen is the crew
          that loads it, transports it and sets it up again, so nothing is lost between handoffs. If you
          also need a service in Dubai, see our{" "}
          <Link href="/home-movers-and-packers-in-dubai/">home movers in Dubai</Link> page, and for a
          wider move within the northern emirates, our team can coordinate that in one booking.
        </p>
        <ul className="check-list grid gap-2">
          <li>Free written estimate with no hidden charges</li>
          <li>Packing, loading, transport, unloading and setup in one visit</li>
          <li>Dubai to Sharjah and Sharjah to Dubai moves handled door to door</li>
          <li>Same-day and short-notice slots, subject to availability</li>
          <li>Trained crew, protective materials and secured loading</li>
        </ul>
      </ArticleSection>

      <ArticleSection
        id="sh-services"
        title="Moving Services We Provide in Sharjah"
        banner={
          <Banner
            src={`${IMG}/sharjah-packing-fragile-furniture.webp`}
            alt="Movers packing fragile furniture and artwork in a Sharjah home"
            ratio="3:2"
          />
        }
      >
        <p>
          Every movers packers sharjah is different, so services are modular. You can book one step, such
          as packing only, or the full service from first box to final furniture placement.
        </p>
        <h3>Apartment Movers in Sharjah</h3>
        <p>
          From studio flats in Al Nahda to three bedroom units in Al Khan, we plan lift bookings,
          corridor protection and staged loading so tower moves stay orderly. See also our{" "}
          <Link href="/apartment-movers-in-dubai/">apartment moving service</Link> for the Dubai side of a
          cross-emirate move.
        </p>
        <h3>Villa Relocation in Sharjah</h3>
        <p>
          Villa moves in Muwaileh, Al Suyoh, Tilal City and Al Zahia involve more rooms, outdoor furniture
          and garages. We assign a larger crew, a room by room inventory and a fixed loading order.
          Details are on our <Link href="/villa-movers-in-dubai/">villa moving page</Link>.
        </p>
        <h3>Office and Shop Relocation</h3>
        <p>
          We move desks, workstations, filing cabinets, servers, retail fixtures and stock with minimal
          downtime, including after hours if your landlord requires it. Related service:{" "}
          <Link href="/office-movers-in-dubai/">office movers</Link>.
        </p>
        <h3>Packing and Unpacking</h3>
        <p>
          Export grade cartons, bubble wrap, foam sheets, wardrobe boxes and furniture blankets are used
          on every job, and boxes are labelled by room. More detail on our{" "}
          <Link href="/packing-and-unpacking-services-in-dubai/">packing and unpacking service</Link>.
        </p>
        <h3>Furniture Dismantling and Assembly</h3>
        <p>
          Beds, wardrobes, dining tables, TV units and office desks are dismantled, protected and
          reassembled in the new room. See our{" "}
          <Link href="/furniture-movers-in-dubai/">furniture movers</Link> service.
        </p>
        <h3>Storage Solutions</h3>
        <p>
          When your move out date and move in date do not match, we store furniture and boxes short term
          or long term. Learn more about our{" "}
          <Link href="/storage-solutions-in-dubai/">storage solutions</Link>.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection
        id="sh-different"
        tone="neutral"
        title="What Makes movers packers sharjah Different From Moving in Other Emirates?"
      >
        <p>
          A mover that treats Sharjah like a copy of Dubai will lose time on moving day. These are the
          local factors we plan for on every job.
        </p>
        <h3>How does building management affect a move in Sharjah?</h3>
        <p>
          Most towers and managed communities require advance notice for moves. Depending on the
          building, that can mean a booked lift slot, a move in or move out form, a refundable deposit, a
          security pass for each crew member, or restricted hours. Booking the movers first and the lift
          second is the mistake we see most often. We recommend confirming your building’s rules with
          management as soon as you have a moving date, and we can tell you exactly what to ask for.
        </p>
        <h3>How do traffic and road rules shape the schedule?</h3>
        <p>
          Al Ittihad Road, Sheikh Mohammed bin Zayed Road (E311) and Emirates Road (E611) carry heavy
          commuter traffic in the morning and evening, and some roads restrict heavy vehicles at certain
          hours. For Sharjah to Dubai moves we schedule loading so the truck avoids the worst of the peak
          windows, which protects both your time and the crew’s hourly cost.
        </p>
        <h3>Why does parking matter so much in older districts?</h3>
        <p>
          Older areas such as Al Qasimia, Rolla and parts of Al Taawun have narrow streets and limited
          kerb space. If the truck has to park far away, every item travels farther and the job takes
          longer. We check truck access during the assessment call, and we bring smaller vehicles when a
          full size truck cannot get close.
        </p>
        <h3>How does summer heat change how we work?</h3>
        <p>
          From roughly June to September, outdoor loading in the middle of the day is tough on crews and
          on heat sensitive items. We schedule early morning or evening starts where we can, keep water
          and rest breaks built into the plan, and wrap sensitive items such as leather, wood and
          electronics for heat exposure.
        </p>
        <h3>Can I move between Dubai and Sharjah without doubling the cost?</h3>
        <p>
          Yes. A single quote covers loading at one address and unloading at the other, so you do not pay
          two separate companies. The main variables are distance, access at both ends and the time of
          day, which is why we ask for both addresses when you request a price.
        </p>
      </ArticleSection>

      <ArticleSection id="sh-areas" title="Areas We Serve Across Sharjah">
        <p>
          We cover the whole emirate. Below are the districts where we receive the most requests, with the
          local details that matter for planning.
        </p>
        <h3>Al Majaz and Al Khan</h3>
        <p>
          Waterfront towers near Al Majaz Waterfront and Khalid Lagoon. Expect lift bookings, limited
          loading bays and busy weekend traffic. Best moved on weekday mornings.
        </p>
        <h3>Al Nahda and Al Taawun</h3>
        <p>
          Dense apartment districts on the Dubai border. Popular with commuters, so weekday peak hours are
          heavy. We often handle same-day Dubai to Al Nahda moves.
        </p>
        <h3>Muwaileh and University City</h3>
        <p>
          Student flats, shared housing and mid-size apartments near the American University of Sharjah
          and University of Sharjah. Move dates cluster around academic terms.
        </p>
        <h3>Aljada, Tilal City and Al Zahia</h3>
        <p>
          Newer master-planned communities with modern buildings, gated access and community rules.
          Advance notice for truck entry is common.
        </p>
        <h3>Al Qasimia, Rolla and the Heritage Area</h3>
        <p>
          Older mixed use districts with narrow streets and shop houses. We use smaller vehicles where
          necessary and plan parking in advance.
        </p>
        <h3>Industrial Areas, Hamriyah and SAIF Zone</h3>
        <p>
          Warehouse, workshop and free zone relocations, including office furniture, racking, stock and
          equipment, planned around business hours.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection
        id="sh-dubai"
        tone="neutral"
        title="Moving From Dubai to Sharjah, or From Sharjah to Dubai: What to Expect"
      >
        <p>
          Cross-emirate moves are the most common request we receive for Sharjah. People move for larger
          homes, different rent levels, school locations or new offices, and the logistics follow a
          predictable pattern.
        </p>
        <h3>How long does a Dubai to Sharjah move take?</h3>
        <p>
          The driving distance is short, but the total move time depends mainly on packing, loading and
          access at both ends. A one bedroom flat with good access is a very different job from a villa
          with a long carry. We give you a time window in the quote and confirm it when we assess your
          property.
        </p>
        <h3>What paperwork or permissions should I prepare?</h3>
        <p>
          Prepare your move out permission or lift booking at the old building, your move in permission at
          the new one, your tenancy contract, and any deposit cheques management asks for. Utility
          connection, internet transfer and address updates are worth doing a week before the move, not
          after it. Sharjah’s electricity and water utility (SEWA) has its own account process, so allow
          time for that.
        </p>
        <div className="table-wrap not-prose">
          <table>
            <thead>
              <tr>
                <th scope="col">Route</th>
                <th scope="col">Typical planning notes</th>
                <th scope="col">Ask us about</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link href="/movers-and-packers-in-dubai-marina/">Dubai Marina</Link> or JLT to Sharjah
                </td>
                <td>Tower to tower, lift booking on both sides</td>
                <td>Off-peak loading time</td>
              </tr>
              <tr>
                <td>
                  <Link href="/movers-and-packers-in-deira/">Deira</Link> or Bur Dubai to Al Nahda or Al
                  Taawun
                </td>
                <td>Short distance, heavy peak traffic</td>
                <td>Early morning start</td>
              </tr>
              <tr>
                <td>
                  <Link href="/movers-and-packers-in-business-bay/">Business Bay</Link> or Downtown to
                  Aljada or Tilal City
                </td>
                <td>Larger units, gated community access</td>
                <td>Truck entry permission</td>
              </tr>
              <tr>
                <td>
                  Sharjah to Dubai Silicon Oasis or{" "}
                  <Link href="/movers-and-packers-in-mirdif/">Mirdif</Link>
                </td>
                <td>Villa or townhouse moves, more furniture</td>
                <td>Larger crew and packing scope</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Callout>
          <p>
            <strong>Need a Dubai and Sharjah move quoted together?</strong> Call{" "}
            <a href={BUSINESS.phoneHref}>+971 56 626 4074</a> and share both addresses. We will confirm
            the plan in one message.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="sh-ready" title="Ready to Move in Sharjah?">
        <p>
          Tell us your pickup address, destination and moving date. Our team replies with a clear written
          quote. Call +971 56 626 4074 or send photos on WhatsApp for the fastest estimate.
        </p>
        <div className="not-prose flex flex-wrap gap-3">
          <Button href={BUSINESS.phoneHref} variant="secondary">
            Call +971 56 626 4074
          </Button>
          <Button href={BUSINESS.whatsappHref} variant="whatsapp">
            Chat on WhatsApp
          </Button>
          <Button href="/contacts/">Request a Free Quote</Button>
        </div>
      </ArticleSection>

      <ArticleSection id="sh-cost" tone="neutral" title="How Much Do Movers and Packers in Sharjah Cost?">
        <p>
          Moving prices in Sharjah depend on the size of the property, how much you own, how far the truck
          travels, whether the building has a lift, how much packing you want us to do and which day you
          choose. A move in Sharjah typically costs AED 150–15,000 or more, depending on property size,
          distance, lift access, packing scope, and day. A local apartment typically costs AED 700–1,200
          for a studio, AED 1,000–1,800 for a 1-bedroom, AED 1,800–3,000 for a 2-bedroom, and AED
          2,800–4,500 for a 3-bedroom, transport-only, or AED 1,000–1,600, AED 1,500–2,400, AED
          2,500–3,800, and AED 3,800–5,500 with full packing. A 2-bedroom villa typically costs AED
          1,500–2,500, and a 3-bedroom villa AED 3,500–6,000 before packing. A single item typically
          costs AED 150–250, and a small office typically costs AED 1,000–2,500. For a move between Dubai
          and Sharjah, a 1-bedroom typically costs AED 1,200–1,800 and a 2-bedroom AED 2,000–3,000, as
          one single quote covering loading at one address and unloading at the other — you do not pay two
          separate companies. The exact price is confirmed in a written quote after a short assessment,
          with no charges added that were not in the quote.
        </p>
        <p>We give a written quote after a short assessment, and we never add charges that were not listed.</p>
        <div className="table-wrap not-prose">
          <table>
            <thead>
              <tr>
                <th scope="col">Move type</th>
                <th scope="col">Typical inclusions</th>
                <th scope="col">Starting price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Studio or 1 bedroom apartment</td>
                <td>Crew, truck, loading and unloading</td>
                <td>AED 700–1,800</td>
              </tr>
              <tr>
                <td>2 to 3 bedroom apartment</td>
                <td>Crew, truck, dismantling, wrapping</td>
                <td>AED 1,800–4,500</td>
              </tr>
              <tr>
                <td>Villa or townhouse</td>
                <td>Larger crew, packing materials, assembly</td>
                <td>AED 1,500–6,000</td>
              </tr>
              <tr>
                <td>Office or shop</td>
                <td>Workstations, cabinets, IT disconnect handling</td>
                <td>AED 1,000–2,500</td>
              </tr>
              <tr>
                <td>Packing only</td>
                <td>Cartons, wrapping, labelling</td>
                <td>AED 1,000–5,500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>What factors change the price of a Sharjah move?</h3>
        <ul className="check-list grid gap-2">
          <li>
            <strong>Property size and inventory:</strong> more furniture means more crew hours and truck
            space.
          </li>
          <li>
            <strong>Floor level and lift access:</strong> a fourth floor walk-up costs more than a ground
            floor unit.
          </li>
          <li>
            <strong>Distance and route:</strong> a same-building move is cheaper than Sharjah to Dubai.
          </li>
          <li>
            <strong>Packing scope:</strong> full packing takes longer than self-packed boxes.
          </li>
          <li>
            <strong>Special items:</strong> pianos, safes, glass tables and artwork need extra handling.
          </li>
          <li>
            <strong>Date and time:</strong> month-end weekends and school holiday periods are the
            busiest.
          </li>
          <li>
            <strong>Storage or same-day requests:</strong> both need extra coordination.
          </li>
        </ul>
        <p>
          In Sharjah, building management, traffic, and parking change the price as much as size does.
          Building management: some buildings require permission, a lift booking, or a set moving time,
          and a move that starts without them waits. Traffic and road rules: the Dubai–Sharjah route is
          congested at peak times and at borders, so the time of day and the route change the crew hours —
          a same-building move is cheaper than Sharjah to Dubai for this reason alone. Parking: in older
          districts such as Al Qasimia, Rolla, and the Heritage Area, truck parking and carrying distance
          set the time. Summer heat changes how the crew works, with earlier starts and more breaks. Day
          matters: the busiest days and times, and Ramadan or Eid, must be booked ahead. For offices and
          shops, and for industrial areas, Hamriyah, and SAIF Zone, volume, access, and downtime change
          the price, and those moves are quoted after a survey.
        </p>
        <h3>Is a cheaper quote always better?</h3>
        <p>
          Not necessarily. A very low quote often leaves out packing materials, dismantling, insurance or
          lift waiting time. Ask any moving company to list what is included, how damage is handled and
          whether the estimate is fixed or hourly. We list every item so you can compare like with like.
          No, when the cheaper quote omits what Sharjah moves require. Four omissions to check: building
          permission or lift booking was never arranged; traffic and parking time was never priced, so the
          crew runs over; packing scope was never stated, so fragile items, electronics, and artwork are
          not protected as expected; and the quote is not written and itemised, so charges appear on the
          day that were not in it. A written, itemised quote that lists size, access, distance, packing,
          and day is comparable; a total alone is not. A quote by photos can be accurate for a home move,
          but an office, shop, or industrial move needs a survey.
        </p>
        <p>
          Property size and inventory matter first: more furniture means more crew hours and truck space.
          Floor level and lift access matter next: a fourth-floor walk-up costs more than a ground-floor
          unit. Distance and route matter: a same-building move, a move within Sharjah, and a
          Dubai-to-Sharjah move are three different prices. Packing scope matters: full packing takes
          longer and costs more than transport-only, and special items such as pianos, safes, and heavy
          appliances are quoted separately. Storage matters separately: short-term and long-term storage
          for a Sharjah move is quoted by time, not by the move. Booking ahead matters: the busiest days
          and times, and Ramadan or Eid, need earlier booking, and a move between Dubai and Sharjah is
          planned in one day, with both addresses asked for when you request a price.
        </p>
      </ArticleSection>

      <ArticleSection id="sh-process" title="Our Moving Process in Sharjah: Five Clear Steps">
        <h3>1. Request a Free Quote</h3>
        <p>Call, WhatsApp or use the contact form. Share both addresses, date, property type and any special items.</p>
        <h3>2. Assessment</h3>
        <p>We review photos or visit in person to confirm inventory, access and special handling.</p>
        <h3>3. Packing and Preparation</h3>
        <p>Furniture is protected, boxes are labelled by room and fragile items are packed separately.</p>
        <h3>4. Loading and Transport</h3>
        <p>Items are secured in the truck in a planned order and driven by the agreed route.</p>
        <h3>5. Unloading and Setup</h3>
        <p>We unload, reassemble furniture, place boxes in the correct rooms and remove packing waste.</p>
        <h3>6. Final Walk-through</h3>
        <p>We check every room with you so nothing is left behind and any concern is handled on the day.</p>
      </ArticleSection>

      <ArticleSection
        id="sh-packing"
        tone="neutral"
        title="Packing Materials and Special Item Handling"
        banner={
          <Banner
            src={`${IMG}/sharjah-waterfront-moving-truck.webp`}
            alt="Moving truck and crew in the Sharjah waterfront area"
            ratio="3:2"
          />
        }
      >
        <p>
          Good packing prevents most moving damage. We use double wall cartons, bubble wrap, foam corners,
          stretch film, furniture blankets, wardrobe boxes and mattress covers, and we choose the material
          for the item rather than using one method for everything.
        </p>
        <h3>How are fragile items, electronics and artwork protected?</h3>
        <p>
          Glass, mirrors and framed art are wrapped and boxed on edge with corner protection. Televisions
          and computers are packed with padding and moved upright. Kitchenware is wrapped item by item,
          and boxes are marked fragile and this way up.
        </p>
        <h3>Can you move pianos, safes and heavy appliances?</h3>
        <p>
          Yes, with the right equipment and enough crew. Tell us in advance so we assign the correct team
          and check the route, doors and stairwells before moving day.
        </p>
        <ul className="check-list grid gap-2">
          <li>Bedroom and living room furniture</li>
          <li>Kitchen appliances and dining sets</li>
          <li>Office desks, chairs and filing systems</li>
          <li>Plants, artwork, mirrors and decorative items</li>
          <li>Gym equipment and outdoor furniture</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="sh-storage" title="Short Term and Long Term Storage for Sharjah Moves">
        <p>
          Lease dates rarely line up perfectly. If your old home is handed over before your new one is
          ready, storage bridges the gap. We collect, wrap, inventory and store furniture and boxes, then
          deliver them when you are ready.
        </p>
        <h3>When does storage make sense?</h3>
        <ul className="check-list grid gap-2">
          <li>Your new property is still being renovated or has not been handed over.</li>
          <li>You are downsizing and want to keep some furniture.</li>
          <li>You are relocating abroad and shipping later.</li>
          <li>Your office is being fitted out and equipment needs temporary space.</li>
        </ul>
        <p>
          Storage options and current availability are shared on request, so please confirm details by
          phone at <a href={BUSINESS.phoneHref}>+971 56 626 4074</a>. You can also read about our{" "}
          <Link href="/storage-solutions-in-dubai/">storage solutions</Link>.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="sh-book" tone="neutral" title="When Should You Book Movers & Packers in Sharjah?">
        <h3>How far ahead should I book?</h3>
        <p>
          For most apartment moves, one to two weeks is comfortable. For villas, offices and month-end
          dates, book earlier. Same-day and next-day moves are possible when the schedule allows, but the
          earlier we know your date, the easier it is to hold the crew size you need.
        </p>
        <h3>Which days and times are busiest?</h3>
        <p>
          The last and first days of the month, weekends and the summer school break are the busiest. If
          your date is flexible, a mid-month weekday morning gives the widest choice of time slots and
          often the smoothest building access.
        </p>
        <h3>Can I move during Ramadan or Eid?</h3>
        <p>
          Yes. We adapt working hours around fasting times and public holidays. Book early for the days
          around Eid, when demand rises.
        </p>
      </ArticleSection>

      <ArticleSection id="sh-why" title="Why Sharjah Customers Choose Al Hatem Movers">
        <h3>Written, Itemised Quotes</h3>
        <p>You see what is included before you commit, with no hidden add-ons.</p>
        <h3>Trained Crews</h3>
        <p>Movers trained in lifting, wrapping and safe loading for homes and offices.</p>
        <h3>Proper Materials</h3>
        <p>Cartons, blankets, wrap and covers chosen for each item.</p>
        <h3>Local Access Knowledge</h3>
        <p>We plan around building rules, parking and traffic in Sharjah.</p>
        <h3>Clear Communication</h3>
        <p>One point of contact from quote to final walkthrough.</p>
        <h3>Licence and Insurance Details</h3>
        <p>
          Trade licence details available on request. Insurance: Al Hatem Movers is licensed and insured,
          and insurance options are discussed during your quotation.
        </p>
      </ArticleSection>

      <ReviewsSection
        id="sh-reviews-title"
        tone="neutral"
        title="What Sharjah Customers Say"
        names={["Sulthan Abdul Kader", "Subha George"]}
      />

      <ArticleSection id="sh-checklist" title="Sharjah Moving Checklist: What to Do Before the Truck Arrives">
        <p>Use this checklist to prepare. It works for apartments, villas and offices.</p>
        <ol className="step-list">
          <li>Confirm your moving date with both landlords or building managers.</li>
          <li>Book lift slots and request move permits, deposit and security passes.</li>
          <li>Notify SEWA, your internet provider and your bank of the new address.</li>
          <li>Declutter and donate what you no longer need.</li>
          <li>Pack a personal essentials bag with documents, chargers and medicines.</li>
          <li>Photograph valuable items and note existing damage.</li>
          <li>Defrost the fridge and drain washing machines a day before.</li>
          <li>Keep passports, cash and jewellery with you.</li>
          <li>Send your movers photos of large items and access points.</li>
          <li>Do a final walk-through with the crew leader.</li>
        </ol>
      </ArticleSection>
    </LocationLayout>
  );
}
