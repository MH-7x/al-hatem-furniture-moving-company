import Link from "next/link";
import { ArticleSection, ContactStrip } from "@/components/Article";
import { ReviewsSection } from "@/components/Blocks";
import { Button } from "@/components/Button";
import { ChipLink } from "@/components/Cards";
import { FinalCta } from "@/components/FinalCta";
import { Banner, LocationLayout } from "@/components/LocationLayout";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const PATH = "/movers-and-packers-in-fujairah/";
const TITLE = "Trusted Movers in Fujairah | Movers and Packers Fujairah";
const DESCRIPTION =
  "Need reliable Movers in Fujairah? Al Hatem Movers and Packers Fujairah handles home, villa, apartment and office moves with safe packing.";
const IMG = "/images/movers-and-packers-in-fujairah";
const IMAGE = `${IMG}/movers-packers-fujairah.webp`;
const IMAGE_ALT = "Movers and packers in Fujairah with a moving truck near the coast and mountains";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: IMAGE,
  imageAlt: IMAGE_ALT,
});

const faqs = [
  [
    "How Much Do Movers Cost In Fujairah?",
    "A move in Fujairah typically costs AED 150–15,000 or more. Local apartments typically cost AED 700–4,500 transport-only depending on size, a single item AED 150–250, and a 3-bedroom villa AED 3,500–6,000 before packing. A move between Fujairah and another emirate is quoted as one fixed price for the full route, confirmed in writing before work begins. The exact price is confirmed in a written estimate before you commit.",
  ],
  [
    "Do You Move From Dubai To Fujairah?",
    "Yes. We handle Dubai to Fujairah and Fujairah to Dubai moves with one crew and one quote.",
  ],
  [
    "Is A Fujairah Move A One-Day Or Two-Day Job?",
    "Many apartment moves can be done in a day with an early start. Larger homes may need a two-day plan for safety and comfort.",
  ],
  ["Do You Provide Packing Materials?", "Yes, including cartons, wrap, blankets, tape and covers."],
  [
    "Can You Move Furniture Safely Over Mountain Roads?",
    "Yes. We secure loads with straps, blankets and correct stacking for the drive.",
  ],
  ["Do You Serve Dibba, Khor Fakkan And Kalba?", "Yes, with advance notice so we can plan crew and route."],
  ["Can You Move Offices In The Fujairah Free Zone?", "Yes, after confirming site rules and access."],
  [
    "Are My Belongings Insured?",
    "Ask us for the terms that apply to your move. Al Hatem Movers is licensed and insured.",
  ],
  ["Do You Store Furniture?", "Yes. Short and long term storage is available on request."],
  [
    "Can You Move Me The Same Day I Call?",
    "Sometimes. Same-day moves depend on crew and truck availability, so call early in the day with your addresses and a rough inventory, and we will tell you straight away whether it is possible.",
  ],
  [
    "Do You Help With Unpacking And Furniture Placement?",
    "Yes. Tell us when booking and the crew will unpack boxes, place furniture in each room and remove packing waste.",
  ],
  [
    "How Do I Get A Quote?",
    "Call or WhatsApp +971 56 626 4074 with your addresses, date and a few photos.",
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
    ["Movers and Packers in Fujairah", PATH],
  ],
  service: {
    name: "Movers and Packers in Fujairah",
    serviceType: "Moving and packing services",
    description:
      "Need movers and packers in Fujairah? Get home, villa, office and long-distance moving with professional packing, safe transport and a free quote.",
    areaServed: { "@type": "City", name: "Fujairah" },
  },
  faqs,
});

export default function FujairahPage() {
  return (
    <LocationLayout
      schema={schema}
      crumbLabel="Movers and Packers in Fujairah"
      title="Professional & Licensed Movers in Fujairah – Safe & Stress-Free Relocation"
      heroImage={{ src: IMAGE, alt: IMAGE_ALT, ratio: "16:9" }}
      intro={
        <p>
          Moving to, from or within Fujairah? As trusted Movers in Fujairah, Al Hatem Furniture Moving
          Company provides professional packing, mountain-road transport, furniture assembly, unloading and
          storage for homes, offices and industrial sites across Fujairah City, Dibba, Khor Fakkan and
          Kalba. Call <a href={BUSINESS.phoneHref}>+971 56 626 4074</a> for a free written estimate.
        </p>
      }
      faqId="fuj-faq-title"
      faqTitle="Frequently Asked Questions About Movers in Fujairah"
      faqs={faqs}
      nearby={
        <>
          <ChipLink href="/movers-and-packers-in-sharjah/">Movers in Sharjah</ChipLink>
          <ChipLink href="/movers-and-packers-in-ras-al-khaimah/">Movers in Ras Al Khaimah</ChipLink>
          <ChipLink href="/movers-and-packers-in-ajman/">Movers in Ajman</ChipLink>
          <ChipLink href="/areas-we-serve/">All Areas We Serve</ChipLink>
        </>
      }
      after={
        <>
          <ArticleSection id="fuj-explore" title="Explore Our Other Moving Locations">
            <p>
              We also serve <Link href="/movers-and-packers-in-sharjah/">Sharjah</Link>,{" "}
              <Link href="/movers-and-packers-in-ras-al-khaimah/">Ras Al Khaimah</Link>,{" "}
              <Link href="/movers-and-packers-in-ajman/">Ajman</Link>,{" "}
              <Link href="/movers-and-packers-in-abu-dhabi/">Abu Dhabi</Link> and{" "}
              <Link href="/movers-and-packers-in-al-ain/">Al Ain</Link>. For Dubai, see{" "}
              <Link href="/home-movers-and-packers-in-dubai/">home movers</Link>,{" "}
              <Link href="/office-movers-in-dubai/">office movers</Link> and{" "}
              <Link href="/services/">all services</Link>.
            </p>
          </ArticleSection>
          <FinalCta id="fuj-final-title" title="Book Your Fujairah Move Today">
            <p>
              Call our Movers in Fujairah team on +971 56 626 4074 or message us on WhatsApp for a free
              quote.
            </p>
          </FinalCta>
        </>
      }
    >
      <ArticleSection id="fuj-quick" title="Quick Answer: Who Provides Moving Services in Fujairah?">
        <p>
          <strong>Al Hatem Movers</strong> provides packing, loading, transport, furniture dismantling and
          reassembly, unpacking and storage for homes, offices and industrial sites in Fujairah and for
          moves between Fujairah and Dubai, Sharjah, Abu Dhabi and the other emirates. Each quote is
          written and depends on inventory, access, distance and date. Call{" "}
          <a href={BUSINESS.phoneHref}>+971 56 626 4074</a> or message us on WhatsApp.
        </p>
        <p>
          This page explains how a move to Fujairah differs from a move on the west coast: the road through
          the Hajar Mountains, the mix of city, coastal and port-based customers, and the planning that
          keeps a longer-distance move safe and on schedule.
        </p>
      </ArticleSection>

      <ContactStrip lead="Speak With Our Packing Specialists" />

      <ArticleSection
        id="fuj-plan"
        tone="neutral"
        title="movers and packers fujairah Who Plan for Distance, Mountain Roads and East Coast Access"
        banner={
          <Banner
            src={`${IMG}/fujairah-long-distance-moving-road.webp`}
            alt="Moving truck on a mountain road for a long-distance Fujairah relocation"
            ratio="16:9"
          />
        }
      >
        <p>
          Fujairah is the UAE’s gateway on the Gulf of Oman. Life here centres on Fujairah City, the
          Corniche, the Port of Fujairah, the Fujairah Free Zone and nearby towns such as Dibba Al Fujairah,
          Khor Fakkan and Kalba. Residents include port and marine professionals, oil and energy sector
          workers, teachers, healthcare staff, small business owners and families who prefer a quieter
          setting with easy access to the sea and mountains.
        </p>
        <p>
          For a mover, Fujairah’s defining feature is geography. Most moves from Dubai, Sharjah or Abu Dhabi
          cross the Hajar Mountains, which affects route selection, driving time, fuel planning, crew rest
          and loading stability. A truck that is loaded quickly for a city drive is not necessarily loaded
          correctly for a mountain crossing, so we treat the route as part of the job.
        </p>
        <p>
          We use the same crew from packing to unpacking, and we brief drivers on the route before
          departure. If your move starts in the west, our{" "}
          <Link href="/home-movers-and-packers-in-dubai/">Dubai home movers</Link> team can handle
          collection and coordinate the journey east.
        </p>
        <ul className="check-list grid gap-2">
          <li>Written estimate that includes the full route</li>
          <li>Secure loading for mountain-road travel</li>
          <li>Packing, assembly and unpacking on request</li>
          <li>Home, office, warehouse and port-related moves</li>
          <li>Same-day and short-notice slots, subject to availability</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="fuj-services" title="Moving Services We Provide in Fujairah">
        <p>
          Choose one service or combine several. Your quote lists each item so you can compare it against
          any other estimate.
        </p>
        <h3>Home and Apartment Moving</h3>
        <p>
          Apartments and family homes in Fujairah City, Al Faseel, Sakamkam and Mirbah, with packing,
          transport and setup. See our <Link href="/apartment-movers-in-dubai/">apartment movers</Link>{" "}
          service.
        </p>
        <h3>Villa and Family Home Relocation</h3>
        <p>
          Larger inventory, gardens and garages handled by a bigger crew. See{" "}
          <Link href="/villa-movers-in-dubai/">villa moving</Link>.
        </p>
        <h3>Office and Business Relocation</h3>
        <p>
          Desks, cabinets, IT equipment and stock moved with minimal downtime. See{" "}
          <Link href="/office-movers-in-dubai/">office movers</Link>.
        </p>
        <h3>Packing and Unpacking</h3>
        <p>
          Materials chosen for the item and the route. See{" "}
          <Link href="/packing-and-unpacking-services-in-dubai/">packing services</Link>.
        </p>
        <h3>Furniture Assembly</h3>
        <p>
          Dismantling and reassembly for beds, wardrobes, tables and workstations. See{" "}
          <Link href="/furniture-movers-in-dubai/">furniture movers</Link>.
        </p>
        <h3>Storage and Cargo</h3>
        <p>
          Short and long term storage, and cargo support for business needs. See{" "}
          <Link href="/storage-solutions-in-dubai/">storage</Link> and{" "}
          <Link href="/cargo-services-in-dubai/">cargo services</Link>.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="fuj-where" tone="neutral" title="Where We Work in Fujairah and the East Coast">
        <p>
          We cover Fujairah and nearby east coast towns. These are the areas where customers request us
          most, and what matters for planning each.
        </p>
        <h3>Fujairah City and the Corniche</h3>
        <p>Apartments, shops and offices near the waterfront. Central access makes truck parking easier than in most Dubai towers.</p>
        <h3>Al Faseel, Sakamkam and Mirbah</h3>
        <p>Residential districts with villas and low rise buildings. Good access for larger trucks.</p>
        <h3>Fujairah Free Zone and Port Area</h3>
        <p>Offices, warehouses and industrial premises. Moves planned around site access, security and business hours.</p>
        <h3>Dibba Al Fujairah</h3>
        <p>A northern coastal town with a quieter pace. Longer drive from the city, so route and timing are planned early.</p>
        <h3>Khor Fakkan and Kalba</h3>
        <p>East coast towns close to Fujairah. We coordinate crews and trucks to reach them within one plan.</p>
        <h3>Masafi, Al Hayl and Qidfa</h3>
        <p>Smaller communities and mountain-adjacent homes. Narrower roads may need smaller vehicles.</p>
      </ArticleSection>

      <ArticleSection id="fuj-hajar" title="How Does a Move Across the Hajar Mountains Work?">
        <p>
          Moves from Dubai, Sharjah or Abu Dhabi to Fujairah are the core of our east coast work. Here is
          how we plan them.
        </p>
        <h3>Which route does the truck take?</h3>
        <p>
          Most trucks head east on Emirates Road (E611) or via Sharjah, then cross the mountains by one of
          the main roads to the east coast. The exact route depends on the pickup point and current road
          conditions, and our drivers confirm it on the morning of the move.
        </p>
        <h3>How is a load secured for mountain roads?</h3>
        <p>
          Heavy items go low and forward, tall items are strapped upright and padded, and boxes are stacked
          in a tight, tiered pattern. Straps and blankets stop shifting on curves and gradients. We never
          load a truck simply to fit more in.
        </p>
        <h3>How long does the trip take?</h3>
        <p>
          Longer than a city move, and typically more than an hour and a half from Dubai, depending on the
          pickup area and traffic. We give you a time window in the quote and confirm it the day before.
        </p>
        <h3>Will my move take one day or two?</h3>
        <p>
          Many apartment moves can be completed in one day with an early start. For larger homes, we may
          recommend packing on day one and moving on day two, which reduces the risk of a rushed, unsafe
          mountain drive.
        </p>
        <div className="table-wrap not-prose">
          <table>
            <thead>
              <tr>
                <th scope="col">Route</th>
                <th scope="col">Planning notes</th>
                <th scope="col">Ask us about</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dubai to Fujairah City</td>
                <td>Mountain crossing, early start</td>
                <td>Full-day scheduling</td>
              </tr>
              <tr>
                <td>Sharjah to Khor Fakkan or Kalba</td>
                <td>Shorter east coast route</td>
                <td>Same-day option</td>
              </tr>
              <tr>
                <td>Abu Dhabi to Fujairah</td>
                <td>Long route, larger inventory</td>
                <td>Two-day plan</td>
              </tr>
              <tr>
                <td>Fujairah to Dubai</td>
                <td>Return trip with a full load</td>
                <td>Timing to avoid traffic</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ArticleSection>

      <ArticleSection id="fuj-moving" tone="neutral" title="Moving to or From Fujairah?">
        <p>
          Tell us your pickup and drop-off addresses, moving date and a few photos. We reply with a clear
          written quote. Call +971 56 626 4074 or message us on WhatsApp.
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

      <ArticleSection id="fuj-cost" title="Moving Costs in Fujairah: What You Pay For">
        <p>
          Fujairah quotes depend on the route as much as the property. These are the elements that shape
          your price. A packers and movers fujairah typically costs AED 150–15,000 or more, depending on the
          route as much as the property. A local apartment within Fujairah typically costs AED 700–1,200
          for a studio, AED 1,000–1,800 for a 1-bedroom, AED 1,800–3,000 for a 2-bedroom, and AED
          2,800–4,500 for a 3-bedroom, transport-only, or AED 1,000–1,600, AED 1,500–2,400, AED
          2,500–3,800, and AED 3,800–5,500 with full packing. A 2-bedroom villa typically costs AED
          1,500–2,500, and a 3-bedroom villa AED 3,500–6,000 before packing. A single item typically costs
          AED 150–250, and a small office typically costs AED 1,000–2,500. A move between Fujairah and
          Dubai, Sharjah, Abu Dhabi, or another emirate is quoted as one fixed price for the full route,
          confirmed in writing before work begins — the crossing, the return trip, and the possible two-day
          plan are inside that price, not added later. No fixed Fujairah-to-another-emirate total is
          published here, because the route price depends on volume, access at both ends, and time. The
          exact price is confirmed in a written estimate before you commit.
        </p>
        <div className="table-wrap not-prose">
          <table>
            <thead>
              <tr>
                <th scope="col">Move type</th>
                <th scope="col">What usually drives the price</th>
                <th scope="col">Starting price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Apartment within Fujairah</td>
                <td>Lift access, inventory, packing</td>
                <td>AED 700–4,500</td>
              </tr>
              <tr>
                <td>Villa within Fujairah</td>
                <td>Rooms, outdoor items, crew size</td>
                <td>AED 1,500–6,000</td>
              </tr>
              <tr>
                <td>Dubai or Sharjah to Fujairah</td>
                <td>Distance, mountain route, return trip</td>
                <td>Quoted as one flat figure for the whole route</td>
              </tr>
              <tr>
                <td>Office or shop</td>
                <td>Workstations, stock, after-hours needs</td>
                <td>AED 1,000–2,500</td>
              </tr>
              <tr>
                <td>Industrial or free zone relocation</td>
                <td>Equipment, racking, site access</td>
                <td>Custom quote based on equipment and site access</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>Why is a move to Fujairah priced differently from a city move?</h3>
        <p>
          The distance, crossing time, return trip and possible two-day plan all add to the cost. In
          exchange, you get a crew that plans the load and route for the journey, not just the loading.
          Because the route is the price. The distance, the crossing time across the Hajar mountains, the
          return trip, and the possible two-day plan all add to the cost, and a crew that plans the load and
          route for the journey, not just the loading, is what you are paying for. Humid sea air, hairpin
          climbs, and fierce summer sun test every load, so the truck travels covered, sealed, and
          double-strapped from start to finish, and fragile items need extra protection over a long journey.
          A move inside Fujairah City, the Corniche, Al Faseel, Sakamkam, or Mirbah is one price; a move to
          Dibba Al Fujairah, Khor Fakkan, Kalba, Masafi, Al Hayl, or Qidfa, or across the mountains to
          Dubai, Sharjah, or Abu Dhabi, is another, and the two must not be compared as if they were the
          same job.
        </p>
        <h3>How can I keep the cost down?</h3>
        <ul className="check-list grid gap-2">
          <li>Declutter before packing to reduce volume.</li>
          <li>Book early to secure a mid-week date.</li>
          <li>Confirm access at both ends.</li>
          <li>Send photos so we quote accurately.</li>
          <li>Combine packing and moving with one company.</li>
        </ul>
        <p>
          Declutter before packing to reduce volume, and book early to secure a mid-week date. Confirm
          access at both ends, and send photos so the quote is accurate. Combine packing and moving with
          one company, so one crew and one quote cover the whole job. For a long-distance move, book
          further ahead than for a local move, and ask whether the quote includes the full route and the
          return trip, how furniture will be secured for mountain roads, whether the same team will unload,
          and what happens if the schedule changes — a quote that answers those four questions in writing
          is comparable; a total alone is not. Route matters first in Fujairah: which route the truck
          takes, how the load is secured for mountain roads, how long the trip takes, and whether the move
          takes one day or two. Volume matters next: inventory, rooms, and outdoor items set crew and
          truck. Access matters at both ends: a villa drive, a Corniche lift, a Free Zone or port-area
          loading point, and building move-hour rules — often 09:00–18:00 or after Friday prayers — all
          change the time. Packing matters: pack yourself or let the crew do it, and fragile items, pianos,
          safes, heavy appliances, diving gear, sports equipment, and outdoor furniture are quoted
          separately. Timing matters: demand is higher in June–September lease renewals and on weekends,
          and road conditions are worse on some days, so a long-distance move needs earlier booking.
          Storage for moves to and from Fujairah is quoted by time, not by the move, and office, Free Zone,
          port, and industrial moves are quoted after a survey, by scope, headcount, and equipment volume.
        </p>
      </ArticleSection>

      <ArticleSection id="fuj-process" tone="neutral" title="Our Fujairah Moving Process">
        <h3>1. Free Quote</h3>
        <p>Share your addresses, date and inventory by phone, WhatsApp or the contact form.</p>
        <h3>2. Route and Access Plan</h3>
        <p>We confirm the route, crew size, truck type and time window.</p>
        <h3>3. Packing and Protection</h3>
        <p>Furniture is wrapped, boxes are labelled and fragile items are packed separately.</p>
        <h3>4. Secure Loading and Transit</h3>
        <p>Loads are strapped and stacked for mountain roads, with driver updates.</p>
        <h3>5. Unloading and Setup</h3>
        <p>Furniture is reassembled and boxes are placed in the correct rooms.</p>
        <h3>6. Final Walkthrough</h3>
        <p>We check every room with you before we leave.</p>
      </ArticleSection>

      <ArticleSection
        id="fuj-business"
        title="Business, Port and Industrial Relocation in Fujairah"
        banner={
          <Banner
            src={`${IMG}/fujairah-commercial-relocation.webp`}
            alt="Commercial relocation near Fujairah Port"
            ratio="3:2"
          />
        }
      >
        <p>
          Fujairah’s economy is tied to the Port of Fujairah, the Fujairah Free Zone, oil storage,
          bunkering, logistics and marine services. Commercial moves here are different from office moves
          in a Dubai tower, so we plan them separately.
        </p>
        <h3>Can you relocate an office inside the Free Zone?</h3>
        <p>
          Yes. We confirm site access rules, security passes and working hours, then plan packing, transport
          and setup around your operations.
        </p>
        <h3>Do you move equipment, racking and stock?</h3>
        <p>
          We handle light and medium equipment, shelving, racking and stock after a site visit and
          inventory. For specialist machinery, we review the requirements first and advise honestly whether
          we are the right fit.
        </p>
        <h3>How do you minimise downtime?</h3>
        <p>
          By preparing a floor plan, labelling every workstation and moving in phases, often after hours or
          on weekends.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="fuj-tips" tone="neutral" title="Living on the East Coast: Moving Tips for Fujairah">
        <p>The east coast has its own pace, climate and services. These tips help you settle in faster.</p>
        <h3>What should I know about Fujairah’s climate when moving?</h3>
        <p>
          Fujairah is warm and humid for much of the year, with breezier coastal conditions than the west.
          Summer moves need early starts and protective wrapping for wood, leather and electronics. Winter
          is comfortable for loading.
        </p>
        <h3>Are shops and services easy to reach after moving?</h3>
        <p>
          Fujairah City has supermarkets, hospitals and schools, while smaller towns have fewer options, so
          it is worth stocking essentials before you arrive. Dibba and Khor Fakkan have more limited retail,
          so plan your first week’s supplies.
        </p>
        <h3>What should I arrange before the truck arrives?</h3>
        <ul className="check-list grid gap-2">
          <li>Utilities and internet at the new address</li>
          <li>Building or landlord permission for the move</li>
          <li>Parking for a large truck</li>
          <li>A personal bag with documents and essentials</li>
          <li>A clear route from the truck to the door</li>
        </ul>
      </ArticleSection>

      <ArticleSection id="fuj-book" title="When Should You Book a Fujairah Move?">
        <h3>How far in advance should I book a long-distance move?</h3>
        <p>
          For packers and movers fujairah, book one to two weeks ahead where possible. Long-distance jobs
          need a crew and truck committed for most of the day, and popular weekend dates fill first.
          Same-day and next-day moves are possible when the schedule allows.
        </p>
        <h3>What is the best time of year to move to Fujairah?</h3>
        <p>
          From roughly November to March the weather is milder, which makes loading easier and safer on
          mountain roads. Summer moves are common and well within our routine, but we start earlier, keep
          crews hydrated and protect heat-sensitive items.
        </p>
        <h3>Are there days when road conditions are worse?</h3>
        <p>
          Weekend afternoons and holiday periods can bring heavier traffic on the routes to the east coast.
          If your date is flexible, a weekday morning departure usually gives the smoothest journey. In case
          of unusual weather, we contact you early to agree on a safe alternative.
        </p>
      </ArticleSection>

      <ArticleSection id="fuj-ask" tone="neutral" title="What to Ask Any Moving Company Before Moving to Fujairah">
        <p>
          Use these questions to compare movers fairly. They are the ones that separate a smooth
          long-distance move from a stressful one.
        </p>
        <h3>Does the quote include the full route and the return trip?</h3>
        <p>
          Some estimates cover only loading and unloading time. Ask whether distance, tolls, fuel and return
          travel are included, so you are not surprised on the day.
        </p>
        <h3>How will my furniture be secured for mountain roads?</h3>
        <p>
          Look for specific answers: straps, blankets, correct stacking order, heavy items low and forward.
          A vague answer is a warning sign.
        </p>
        <h3>Who will be on the crew, and will the same team unload?</h3>
        <p>
          A single crew from packing to unpacking is safer than handing your belongings from one team to
          another. Ask who is responsible for damage claims.
        </p>
        <h3>What happens if the schedule changes?</h3>
        <p>
          Good companies confirm the plan the day before, update you on the road and explain what happens if
          timing shifts. We do exactly that.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="fuj-special" title="Special Items and Delicate Belongings for East Coast Moves">
        <h3>Can you move pianos, safes and heavy appliances to Fujairah?</h3>
        <p>
          Yes, with the right crew and equipment. Tell us the item, its approximate weight and any stairs or
          narrow doors so we plan the route and staffing.
        </p>
        <h3>How do you protect fragile items over a long journey?</h3>
        <p>
          Glass, mirrors and artwork are wrapped and boxed on edge with corner protection. Electronics are
          padded and packed upright. Fragile boxes travel in a protected zone and are marked clearly.
        </p>
        <h3>Can you move diving gear, sports equipment and outdoor furniture?</h3>
        <p>
          Yes. Fujairah’s coast draws many divers and outdoor enthusiasts. Cylinders, wetsuits, kayaks and
          boards are cleaned, secured and loaded separately from indoor furniture.
        </p>
      </ArticleSection>

      <ArticleSection id="fuj-packing" tone="neutral" title="Packing Materials and Methods We Use for Fujairah Moves">
        <p>
          Longer journeys demand stronger protection. Our packing kit is chosen for road vibration, gradient
          changes and heat, not only for a short city drive.
        </p>
        <ul className="check-list grid gap-2">
          <li>
            <strong>Double wall cartons</strong> for books, kitchenware and household goods, so boxes do not
            collapse when stacked.
          </li>
          <li>
            <strong>Bubble wrap and foam sheets</strong> for glassware, ceramics, electronics and framed
            items.
          </li>
          <li>
            <strong>Furniture blankets and stretch film</strong> to prevent scratches, dust and moisture on
            sofas, tables and wardrobes.
          </li>
          <li>
            <strong>Wardrobe boxes and mattress covers</strong> so clothing and bedding arrive clean and
            crease-free.
          </li>
          <li>
            <strong>Labels by room and fragility</strong> so unpacking in Fujairah is quick and organised.
          </li>
        </ul>
        <h3>Should I pack myself or let the crew do it?</h3>
        <p>
          Self-packing non-fragile items such as clothes and linen can lower cost. We recommend leaving
          kitchenware, electronics, glass and artwork to the crew, since correct packing protects against
          damage on the road and simplifies any claim.
        </p>
      </ArticleSection>

      <ArticleSection id="fuj-storage" title="Storage for Moves to and From Fujairah">
        <p>
          Storage helps when your move out and move in dates do not match, or when a home is still being
          prepared. We collect, wrap and store your belongings, then deliver them when you are ready.
        </p>
        <ul className="check-list grid gap-2">
          <li>Furniture during renovation or handover delays</li>
          <li>Seasonal items and outdoor furniture</li>
          <li>Office equipment during a fit-out</li>
          <li>Household goods before an international move</li>
        </ul>
        <p>
          For current storage availability, call <a href={BUSINESS.phoneHref}>+971 56 626 4074</a> or read
          about our <Link href="/storage-solutions-in-dubai/">storage solutions</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="fuj-checklist" tone="neutral" title="Fujairah Moving Checklist">
        <ol className="step-list">
          <li>Confirm your move date with landlords or building managers.</li>
          <li>Ask about truck access, parking and working hours.</li>
          <li>Book utilities and internet at the new address.</li>
          <li>Declutter, donate and label boxes by room.</li>
          <li>Photograph valuables and note existing damage.</li>
          <li>Pack an essentials bag with documents, chargers and medicines.</li>
          <li>Empty and defrost fridges the day before.</li>
          <li>Send photos of large items and access points.</li>
          <li>Confirm the route and arrival time with your crew leader.</li>
          <li>Walk through every room with the crew before they leave.</li>
        </ol>
      </ArticleSection>

      <ArticleSection id="fuj-why" title="Why Choose Al Hatem Movers in Fujairah">
        <h3>Route-Aware Planning</h3>
        <p>We plan for the mountain crossing, not just the loading.</p>
        <h3>Secure Loading</h3>
        <p>Strapped, padded and stacked for stable transit.</p>
        <h3>Written Estimates</h3>
        <p>An itemised quote before you commit.</p>
        <h3>Commercial Experience</h3>
        <p>Offices, warehouses and free zone sites handled around your hours.</p>
        <h3>Quality Materials</h3>
        <p>Cartons, blankets, wrap and covers chosen for each item.</p>
        <h3>Licence and Insurance</h3>
        <p>
          Trade licence details available on request. Insurance: Al Hatem Movers is licensed and insured,
          and insurance options are discussed during your quotation.
        </p>
      </ArticleSection>

      <ReviewsSection
        id="fuj-reviews-title"
        tone="neutral"
        title="What Fujairah Customers Say"
      />
    </LocationLayout>
  );
}
