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

const PATH = "/movers-and-packers-in-ras-al-khaimah/";
const TITLE = "Best Movers in Ras Al Khaimah | Movers and Packers";
const DESCRIPTION =
  "Need Movers in Ras Al Khaimah? Al Hatem Movers and Packers Ras Al Khaimah handles home, villa and office moves with safe packing. Free quote.";
const IMG = "/images/movers-and-packers-in-ras-al-khaimah";
const IMAGE = `${IMG}/movers-packers-ras-al-khaimah.webp`;
const IMAGE_ALT = "Movers and packers in Ras Al Khaimah with a moving truck and crew";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: IMAGE,
  imageAlt: IMAGE_ALT,
});

const faqs = [
  [
    "How much do movers cost in Ras Al Khaimah?",
    "A move in Ras Al Khaimah typically costs AED 150–15,000 or more. Local apartments typically cost AED 700–4,500 transport-only depending on size, a single item AED 150–250, and a 3-bedroom villa AED 3,500–6,000 before packing. A move between Ras Al Khaimah and Dubai or Sharjah is quoted as one flat figure for the whole route, confirmed in writing before work begins. The exact price is confirmed in a written, itemised estimate before you commit.",
  ],
  [
    "Do You Move From Dubai To Ras Al Khaimah?",
    "Yes. We handle Dubai to RAK and RAK to Dubai moves with one crew and one quote.",
  ],
  [
    "Can You Move A Full Villa In One Day?",
    "Many villa moves can be completed in a day with a large enough crew and an early start. For larger homes, we may recommend packing the day before.",
  ],
  ["Do You Provide Packing Materials?", "Yes. Cartons, wrap, blankets, tape and covers are available."],
  ["Do You Dismantle And Reassemble Furniture?", "Yes, including beds, wardrobes, dining sets and office desks."],
  [
    "Are My Items Insured?",
    "Ask us for the terms that apply to your move and we will confirm them in writing. Al Hatem Movers is licensed and insured.",
  ],
  [
    "Can You Handle A Move In Summer?",
    "Yes. We schedule early or late loading where possible and protect heat-sensitive items.",
  ],
  [
    "Which Areas Of RAK Do You Serve?",
    "Al Hamra Village, Mina Al Arab, Al Marjan Island, Al Nakheel, Khuzam, Al Dhait, the Corniche, Julfar, Al Rams, Digdaga and RAKEZ.",
  ],
  ["Do You Store Furniture?", "Yes. Short and long term storage is available on request."],
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
    ["Movers and Packers in Ras Al Khaimah", PATH],
  ],
  service: {
    name: "Movers and Packers in Ras Al Khaimah",
    serviceType: "Moving and packing services",
    description:
      "Need movers and packers in Ras Al Khaimah? Get professional packing, villa, apartment, furniture and long-distance moving services. Request a free quote.",
    areaServed: { "@type": "City", name: "Ras Al Khaimah" },
  },
  faqs,
});

export default function RasAlKhaimahPage() {
  return (
    <LocationLayout
      schema={schema}
      crumbLabel="Movers and Packers in Ras Al Khaimah"
      title="Expert & Licensed Movers in Ras Al Khaimah – Safe & Stress-Free Relocation"
      heroImage={{ src: IMAGE, alt: IMAGE_ALT, ratio: "16:9" }}
      intro={
        <p>
          As trusted movers in Ras Al Khaimah, Al Hatem Furniture Moving Company provides professional
          packing, transport, furniture assembly and storage — from beachfront villas in Al Hamra Village
          to apartments in Mina Al Arab and offices in RAKEZ — plus long-distance moves from Dubai and
          Sharjah. Call <a href={BUSINESS.phoneHref}>+971 56 626 4074</a> for a free written quote.
        </p>
      }
      faqId="rak-faq-title"
      faqTitle="Frequently Asked Questions About Movers in Ras Al Khaimah"
      faqs={faqs}
      nearby={
        <>
          <ChipLink href="/movers-and-packers-in-sharjah/">Movers in Sharjah</ChipLink>
          <ChipLink href="/movers-and-packers-in-ajman/">Movers in Ajman</ChipLink>
          <ChipLink href="/movers-and-packers-in-fujairah/">Movers in Fujairah</ChipLink>
          <ChipLink href="/areas-we-serve/">All Areas We Serve</ChipLink>
        </>
      }
      after={
        <>
          <ArticleSection id="rak-explore" title="Explore Our Other Moving Locations">
            <p>
              We also serve <Link href="/movers-and-packers-in-sharjah/">Sharjah</Link>,{" "}
              <Link href="/movers-and-packers-in-fujairah/">Fujairah</Link>,{" "}
              <Link href="/movers-and-packers-in-ajman/">Ajman</Link>,{" "}
              <Link href="/movers-and-packers-in-abu-dhabi/">Abu Dhabi</Link> and{" "}
              <Link href="/movers-and-packers-in-al-ain/">Al Ain</Link>. For Dubai, see our{" "}
              <Link href="/home-movers-and-packers-in-dubai/">home movers</Link>,{" "}
              <Link href="/office-movers-in-dubai/">office movers</Link> and{" "}
              <Link href="/services/">all services</Link>.
            </p>
          </ArticleSection>
          <FinalCta id="rak-final-title" title="Book Your Ras Al Khaimah Move Today">
            <p>
              Call our Movers in Ras Al Khaimah team on +971 56 626 4074 or message us on WhatsApp for a
              free quote.
            </p>
          </FinalCta>
        </>
      }
    >
      <ArticleSection id="rak-quick" title="Quick Answer: Who Can Move My Home or Office in Ras Al Khaimah?">
        <p>
          <strong>Al Hatem Movers</strong> provides home, villa and office moving in Ras Al Khaimah (RAK)
          and between RAK and Dubai, Sharjah, Ajman and Abu Dhabi. Services include packing, loading,
          transport, dismantling and reassembly of furniture, unpacking and storage. Quotes are written and
          itemised, and depend on inventory, access, distance and date. Call{" "}
          <a href={BUSINESS.phoneHref}>+971 56 626 4074</a> to get a free estimate.
        </p>
        <p>
          Below you will find how moving in RAK differs from moving in Dubai, which communities we serve,
          how long-distance moves are planned, what affects pricing and how to prepare, written
          specifically for RAK residents, second-home owners and businesses.
        </p>
      </ArticleSection>

      <ContactStrip lead="Speak With Our Packing Specialists" />

      <ArticleSection
        id="rak-local"
        tone="neutral"
        title="Local Movers in Ras Al Khaimah Who Understand Villas, Beachfront Homes and Long Distances"
      >
        <p>
          Ras Al Khaimah has a different moving profile from Dubai or Sharjah. Housing leans toward villas,
          townhouses and low to mid rise apartments. There are large family homes in Al Nakheel, Khuzam and
          Al Dhait, beachfront apartments in Mina Al Arab and Al Marjan Island, resort-style living in Al
          Hamra Village, and a growing base of professionals working in hospitality, education,
          manufacturing and the Ras Al Khaimah Economic Zone (RAKEZ).
        </p>
        <p>
          That means moves in RAK typically involve more furniture per home, more outdoor items, more
          fragile decor and longer distances from other emirates. Our approach is to plan those factors
          first: the size of the truck, the number of movers, the packing scope, the route from your origin
          and the time of day that avoids heat and traffic.
        </p>
        <p>
          Because many RAK moves start in Dubai or Sharjah, we treat the intercity leg as part of the job,
          not an extra. One crew, one plan and one quote cover packing, the drive and unloading. If your
          move begins in the north of Dubai, our{" "}
          <Link href="/villa-movers-in-dubai/">villa movers in Dubai</Link> team can coordinate the
          collection.
        </p>
        <ul className="check-list grid gap-2">
          <li>Written estimate covering the full route</li>
          <li>Strong experience with villa and townhouse relocations</li>
          <li>Heat-aware scheduling for summer moves</li>
          <li>Packing, assembly and unpacking included on request</li>
          <li>Same-day and short-notice slots, subject to availability</li>
        </ul>
      </ArticleSection>

      <ArticleSection
        id="rak-who"
        title="Who We Move in Ras Al Khaimah"
        banner={
          <Banner
            src={`${IMG}/ras-al-khaimah-beachfront-villa-move.webp`}
            alt="Movers loading wrapped furniture near a beachfront villa in Ras Al Khaimah"
            ratio="3:2"
          />
        }
      >
        <p>RAK’s customer mix is broader than most people expect. These are the five groups we hear from most often.</p>
        <h3>Families Upgrading to Villas</h3>
        <p>Households moving from Dubai or Sharjah apartments into larger villas with gardens, driveways and more storage.</p>
        <h3>Professionals Relocating for Work</h3>
        <p>Staff joining hotels, resorts, schools, hospitals, manufacturing plants and companies in RAKEZ.</p>
        <h3>Second-Home and Seasonal Owners</h3>
        <p>Owners furnishing beach or mountain-area homes, or clearing them at the end of the season.</p>
        <h3>Retirees and Remote Workers</h3>
        <p>People choosing a calmer lifestyle by the coast and moving their full household in one trip.</p>
        <h3>Small Businesses and Startups</h3>
        <p>Offices, clinics, retail units and workshops moving into RAKEZ or city-centre premises.</p>
        <h3>Landlords and Property Managers</h3>
        <p>Move-out and move-in cycles between tenants, including furniture and appliance handling.</p>
      </ArticleSection>

      <ArticleSection id="rak-services" tone="neutral" title="Moving Services We Provide in Ras Al Khaimah">
        <p>
          Choose a single step or the complete service. As a moving company Ras Al Khaimah families rely
          on, every quote lists what is included and what is optional.
        </p>
        <h3>Villa and House Moving</h3>
        <p>
          Room by room inventory, larger crew, protected doorways and garden furniture handling. See our{" "}
          <Link href="/villa-movers-in-dubai/">villa moving service</Link>.
        </p>
        <h3>Apartment Moving</h3>
        <p>
          Lift booking, corridor protection and efficient loading for towers in Mina Al Arab, Al Marjan and
          the city. Compare our <Link href="/apartment-movers-in-dubai/">apartment movers</Link> service.
        </p>
        <h3>Office and Commercial Moves</h3>
        <p>
          Desks, cabinets, IT equipment and retail fixtures moved with minimal downtime. See{" "}
          <Link href="/office-movers-in-dubai/">office movers</Link>.
        </p>
        <h3>Packing and Unpacking</h3>
        <p>
          Professional materials and labelling. More on{" "}
          <Link href="/packing-and-unpacking-services-in-dubai/">packing services</Link>.
        </p>
        <h3>Furniture Dismantling and Assembly</h3>
        <p>
          Beds, wardrobes, dining sets and TV units reassembled on arrival. Read about our{" "}
          <Link href="/furniture-movers-in-dubai/">furniture movers</Link>.
        </p>
        <h3>Storage Between Homes</h3>
        <p>
          Short and long term storage when dates do not align. See{" "}
          <Link href="/storage-solutions-in-dubai/">storage solutions</Link>.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="rak-where" title="Where in Ras Al Khaimah Do We Work?">
        <p>
          We cover the emirate from the northern coast to the southern communities. These are the areas
          customers ask about most.
        </p>
        <h3>Al Hamra Village and Al Hamra Marina</h3>
        <p>Resort-style community with villas, townhouses and apartments. Expect gated access and community rules for trucks.</p>
        <h3>Mina Al Arab and Al Marjan Island</h3>
        <p>Waterfront apartments and hospitality-led areas. Lift booking and parking for trucks are the main planning points.</p>
        <h3>Al Nakheel, Khuzam and Al Dhait</h3>
        <p>Established residential districts with family villas, larger plots and good truck access in most streets.</p>
        <h3>Al Qawasim Corniche and the City Centre</h3>
        <p>Apartments, shops and offices near the water. Busy at peak hours, so timing matters.</p>
        <h3>Julfar, Al Rams and Digdaga</h3>
        <p>Northern and coastal communities. Longer drives from other emirates, so route and timing are planned in advance.</p>
        <h3>RAKEZ and Industrial Zones</h3>
        <p>Offices, warehouses and workshops. Moves are planned around business hours and site access.</p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection
        id="rak-long"
        tone="neutral"
        title="How Does a Long-Distance Move to or From Ras Al Khaimah Work?"
      >
        <p>
          Most moves into RAK begin in another emirate, so the journey is a central part of the plan. The
          key differences are time, route and fuel-and-crew planning, which we cover in your quote.
        </p>
        <h3>Which roads are used for Dubai to RAK moves?</h3>
        <p>
          Trucks generally travel via Emirates Road (E611) or Sheikh Mohammed bin Zayed Road (E311),
          depending on the pickup point and traffic. We choose the route on the morning of the move based
          on live conditions, and we start early to avoid the peak commuter windows out of Dubai and
          Sharjah.
        </p>
        <h3>How long does the drive take?</h3>
        <p>
          The trip from Dubai to RAK is typically around an hour or a little longer without traffic, and
          the full move takes longer once packing, loading and unloading are added. We give you a time
          window in the quote and confirm it the day before.
        </p>
        <h3>Should the crew pack in Dubai and unload in RAK on the same day?</h3>
        <p>
          For apartments and small villas, yes, with an early start. For large villas or offices, we may
          recommend packing the day before and loading and moving the next morning. The best option depends
          on your inventory, so we decide it during the assessment.
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
                <td>
                  <Link href="/movers-and-packers-in-dubai-marina/">Dubai Marina</Link>,{" "}
                  <Link href="/movers-and-packers-in-jvc/">JVC</Link> or{" "}
                  <Link href="/movers-and-packers-in-business-bay/">Business Bay</Link> to Al Hamra Village
                </td>
                <td>Tower to villa, larger inventory</td>
                <td>Early start and villa crew</td>
              </tr>
              <tr>
                <td>Sharjah to Mina Al Arab</td>
                <td>Apartment to apartment, lift booking</td>
                <td>Off-peak loading</td>
              </tr>
              <tr>
                <td>Abu Dhabi to Al Nakheel or Khuzam</td>
                <td>Long route, family villa</td>
                <td>Full-day plan</td>
              </tr>
              <tr>
                <td>Ajman or UAQ to RAK City</td>
                <td>Shorter route, flexible timing</td>
                <td>Same-day options</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ArticleSection>

      <ArticleSection id="rak-planning" title="Planning a Move to or Within Ras Al Khaimah?">
        <p>
          Send us your addresses, moving date and a few photos. We reply with a written quote. Call +971 56
          626 4074 or chat on WhatsApp.
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

      <ArticleSection id="rak-cost" tone="neutral" title="What Affects Moving Costs in Ras Al Khaimah?">
        <p>
          A fair price depends on the job, not on a fixed rate card. These are the elements that determine
          the cost of a RAK move, and the ones we discuss with you before quoting.
        </p>
        <p>
          A movers and packers ras al khaimah typically costs AED 150–15,000 or more, depending on move
          type, distance, packing scope, and access. A local apartment typically costs AED 700–1,200 for a
          studio, AED 1,000–1,800 for a 1-bedroom, AED 1,800–3,000 for a 2-bedroom, and AED 2,800–4,500
          for a 3-bedroom, transport-only, or AED 1,000–1,600, AED 1,500–2,400, AED 2,500–3,800, and AED
          3,800–5,500 with full packing. A 2-bedroom villa typically costs AED 1,500–2,500, and a
          3-bedroom villa AED 3,500–6,000 before packing. A single item typically costs AED 150–250, and a
          small office typically costs AED 1,000–2,500. A move between Ras Al Khaimah and Dubai or Sharjah
          is quoted as one flat figure for the whole route, confirmed in writing before work begins — one
          crew loads and delivers the same day, about an hour each way on E311, with distance and return
          travel included, not added later. No fixed RAK-to-Dubai or RAK-to-Sharjah total is published
          here, because the route price depends on volume, access at both ends, and time. The exact price
          is confirmed in a written, itemised estimate before you commit.
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
                <td>1 bedroom apartment</td>
                <td>Lift access, distance, packing scope</td>
                <td>AED 1,000–1,800</td>
              </tr>
              <tr>
                <td>2 to 3 bedroom apartment</td>
                <td>Furniture volume, floor level</td>
                <td>AED 1,800–4,500</td>
              </tr>
              <tr>
                <td>Villa or townhouse</td>
                <td>Number of rooms, outdoor items, crew size</td>
                <td>AED 1,500–6,000</td>
              </tr>
              <tr>
                <td>Office or clinic</td>
                <td>Workstations, equipment, after-hours needs</td>
                <td>AED 1,000–2,500</td>
              </tr>
              <tr>
                <td>Long distance (from Dubai or Sharjah)</td>
                <td>Distance, time on road, return trip</td>
                <td>Quoted as one flat figure for the whole route</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>Why do long-distance and villa moves cost more?</h3>
        <p>
          They require more crew hours, more truck space and longer travel. A villa can contain two or
          three times the volume of an apartment, and a long route adds driving time and return travel. We
          include those in the written estimate so you can plan.
        </p>
        <p>
          Because a villa can contain two or three times the volume of an apartment, and a long route adds
          driving time and return travel. In Ras Al Khaimah, beachfront villas in Al Hamra Village, Mina Al
          Arab, and Al Marjan Island add garden furniture, BBQ sets, and outdoor items, and coastal heat
          and humidity need protection for furniture and electronics. Second homes and seasonal owners add
          storage between homes and overlapping leases. Offices and shops in RAKEZ and industrial zones add
          equipment and downtime. All of those are included in the written estimate, so you can plan — a
          quote that does not list distance, return travel, and protection separately is not comparable.
        </p>
        <h3>How can I reduce the cost of my move?</h3>
        <ul className="check-list grid gap-2">
          <li>Declutter before packing so you move less.</li>
          <li>Pack non-fragile items yourself and ask us to handle fragile ones.</li>
          <li>Choose a mid-week date.</li>
          <li>Confirm access at both buildings in advance.</li>
          <li>Send photos so the estimate is accurate.</li>
        </ul>
        <p>
          Declutter before packing so you move less, and pack non-fragile items yourself while asking the
          crew to handle fragile ones, artwork, antiques, and high-value items. Choose a mid-week date,
          which is usually cheapest and easiest, and confirm access at both buildings in advance — lift
          reservations, resort gate passes, and community gate passes filed early, especially in Al
          Nakheel, Dafan Al Khor, and the Corniche towers. Send photos so the estimate is accurate. Winter
          is the easiest season for a RAK move, and summer moves are still possible with heat-aware
          scheduling, but winter and mid-week dates are the ones most likely to hold a lower price.
        </p>
        <p>
          Move type matters first: a family upgrading to a villa, a professional relocating for work, a
          second-home or seasonal owner, a retiree or remote worker, a small business or startup, and a
          landlord or property manager each need a different crew and truck. Volume matters next: a villa
          needs more crew hours, more truck space, and longer travel than an apartment. Distance matters: a
          move within Ras Al Khaimah, and a move from Dubai or Sharjah, are different prices, and the drive
          from another emirate must be included in the quote, not added later. Access matters: lift
          reservations, gate passes, and parking in Al Hamra Village, Mina Al Arab, Al Nakheel, Khuzam, Al
          Dhait, Julfar, Al Rams, and Digdaga differ building by building. Special items matter separately:
          pianos, safes, gym equipment, large TVs, aquariums, delicate appliances, plants, and garden pots
          are quoted by item. Storage between homes, for second homes and overlapping leases, is quoted by
          time, not by the move.
        </p>
      </ArticleSection>

      <ArticleSection id="rak-process" title="Our movers packers ras al khaimah Process">
        <h3>1. Free Quote</h3>
        <p>Call or WhatsApp with your addresses, date and inventory.</p>
        <h3>2. Survey and Plan</h3>
        <p>We confirm the crew, truck size, route and time window.</p>
        <h3>3. Pack and Protect</h3>
        <p>Furniture blankets, cartons and wrap protect every item.</p>
        <h3>4. Load and Travel</h3>
        <p>Secure loading, then a planned route with regular updates.</p>
        <h3>5. Deliver and Set Up</h3>
        <p>Unloading, furniture assembly and box placement room by room.</p>
        <h3>6. Final Check</h3>
        <p>A walkthrough with you before the crew leaves.</p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="rak-coastal" tone="neutral" title="Protecting Coastal Homes and Sensitive Belongings">
        <p>Humidity, sea air and summer heat are real factors on the RAK coast. We plan for them rather than react to them.</p>
        <h3>How do you protect furniture and electronics from heat and humidity?</h3>
        <p>
          We wrap wood, leather and upholstery in breathable covers, keep electronics padded and upright,
          and avoid leaving loaded trucks in direct midday sun. Early starts and shaded parking are used
          wherever we can.
        </p>
        <h3>What about garden furniture, BBQ sets and outdoor items?</h3>
        <p>
          Outdoor furniture is cleaned, dismantled where needed and wrapped so it does not scratch indoor
          items or the truck. Umbrellas, loungers and planters are loaded last or in a separate zone.
        </p>
        <h3>Can you move artwork, antiques and other high-value items?</h3>
        <p>
          Yes. Framed art, mirrors and antiques are wrapped and boxed with rigid protection and transported
          upright and secure. Tell us in advance so we allocate the right materials.
        </p>
      </ArticleSection>

      <ArticleSection
        id="rak-storage"
        title="Storage for Second Homes, Seasonal Owners and Overlapping Leases"
        banner={
          <Banner
            src={`${IMG}/ras-al-khaimah-artwork-antiques-moving.webp`}
            alt="Movers protecting furniture and artwork during a Ras Al Khaimah relocation"
            ratio="3:2"
          />
        }
      >
        <p>
          Many RAK owners use their home for part of the year. Others need storage between a move out and a
          move in. We can collect, wrap, inventory and store your furniture and boxes, then deliver them
          when you are ready.
        </p>
        <ul className="check-list grid gap-2">
          <li>Seasonal furniture and outdoor sets</li>
          <li>Furniture for a home still under renovation</li>
          <li>Office equipment during a fit-out</li>
          <li>Household goods before an international move</li>
        </ul>
        <p>
          To check storage space and options, call <a href={BUSINESS.phoneHref}>+971 56 626 4074</a>. You
          can also read about our <Link href="/storage-solutions-in-dubai/">storage solutions</Link>.
        </p>
      </ArticleSection>

      <ArticleSection id="rak-ask" tone="neutral" title="What to Ask Before Hiring movers and packers ras al khaimah">
        <h3>Is the quote written and itemised?</h3>
        <p>
          A verbal price is easy to change. Ask for a written quote that lists crew size, truck, packing,
          dismantling and any extra charges.
        </p>
        <h3>Does the price include the drive from another emirate?</h3>
        <p>For Dubai or Sharjah to RAK moves, confirm that distance and return travel are included, not added later.</p>
        <h3>How will the crew protect the house or building?</h3>
        <p>
          Look for floor protection, door frame guards and lift padding. These prevent the small damages
          that lead to deposit disputes.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="rak-business" title="Business and Commercial Moves in Ras Al Khaimah">
        <p>
          RAKEZ has drawn many businesses to the emirate, from small consultancies to manufacturers.
          Commercial moves need careful sequencing to protect uptime.
        </p>
        <h3>How do you move an office with minimal downtime?</h3>
        <p>
          We prepare a floor plan, label each workstation, and move in phases. IT equipment is
          disconnected, packed, moved and reconnected by your IT team or ours, and furniture is reassembled
          in the new layout. Moves can be done after hours or over the weekend.
        </p>
        <h3>Do you relocate shops, clinics and workshops?</h3>
        <p>
          Yes. We handle retail fixtures, shelving, stock, medical furniture and light workshop equipment,
          subject to a site visit and an inventory.
        </p>
      </ArticleSection>

      <ArticleSection id="rak-timing" tone="neutral" title="When Is the Best Time to Move in Ras Al Khaimah?">
        <p>
          Timing affects comfort, price and availability. RAK follows the same seasonal rhythm as the rest
          of the UAE, with a few coastal twists.
        </p>
        <h3>Is winter the easiest season for a RAK move?</h3>
        <p>
          Generally, yes. From roughly November to March the weather is mild, crews work faster and outdoor
          loading is comfortable. It is also when many seasonal owners arrive, so popular dates fill up.
          Book early if you need a weekend.
        </p>
        <h3>Can I still move in the summer months?</h3>
        <p>
          Yes. Summer moves are common because leases end and school years change. We start early, keep
          crews hydrated, load heat-sensitive items last and avoid leaving a loaded truck in the sun. Air
          conditioned access for the crew at both properties helps.
        </p>
        <h3>Which days are usually cheapest and easiest?</h3>
        <p>
          Mid-month weekdays outside public holidays usually have the widest slot choice, and building
          management is easier to reach. Month-end and weekend dates are the busiest.
        </p>
      </ArticleSection>

      <ArticleSection id="rak-settling" title="Settling In: What to Do After You Arrive in Ras Al Khaimah">
        <p>
          A good move does not end when the truck leaves. These are the practical steps new RAK residents
          usually complete in the first two weeks.
        </p>
        <ul className="check-list grid gap-2">
          <li>
            <strong>Utilities and internet:</strong> confirm electricity, water and internet accounts at the
            new address before you arrive.
          </li>
          <li>
            <strong>Furniture placement:</strong> we place large items where you want them, so you only
            adjust small pieces.
          </li>
          <li>
            <strong>Address updates:</strong> update your bank, employer, insurer and vehicle records.
          </li>
          <li>
            <strong>Community access:</strong> collect building or community access cards and parking
            permits.
          </li>
          <li>
            <strong>Unpacking:</strong> start with bedrooms and the kitchen, and keep labelled boxes for
            later rooms.
          </li>
        </ul>
        <p>
          If you would like us to unpack boxes, arrange furniture and remove packing waste, request our
          unpacking service when booking.
        </p>
      </ArticleSection>

      <ArticleSection id="rak-special" tone="neutral" title="Special Items We Are Often Asked to Move in Ras Al Khaimah">
        <h3>Can you move pianos, safes and gym equipment?</h3>
        <p>
          Yes, with the right crew and equipment. Tell us the item, its weight if known, and whether stairs,
          narrow doors or lifts are involved so we can plan the route.
        </p>
        <h3>What about large TVs, aquariums and delicate appliances?</h3>
        <p>
          Large TVs are wrapped and moved upright. Aquariums are drained and packed separately, and
          delicate appliances are secured to prevent movement.
        </p>
        <h3>Can you move plants and garden pots?</h3>
        <p>
          Yes. Plants are best moved the same day and kept upright and out of direct heat. We advise on
          which plants travel well over long distances.
        </p>
      </ArticleSection>

      <ArticleSection id="rak-checklist" title="Moving Checklist for Ras Al Khaimah Residents">
        <ol className="step-list">
          <li>Confirm your move date with landlord or community management.</li>
          <li>Ask about truck access, gate passes and working-hour limits.</li>
          <li>Arrange utilities and internet at the new address.</li>
          <li>Declutter, donate and label boxes by room.</li>
          <li>Photograph valuables and note existing damage.</li>
          <li>Keep essentials, documents and chargers in a personal bag.</li>
          <li>Empty and defrost fridges and freezers a day before.</li>
          <li>Send photos of large items to your mover.</li>
          <li>Confirm parking and route for the truck.</li>
          <li>Walk through every room with the crew leader on the day.</li>
        </ol>
      </ArticleSection>

      <ArticleSection id="rak-why" tone="neutral" title="Why Choose Al Hatem Movers in Ras Al Khaimah">
        <h3>One Plan From Door to Door</h3>
        <p>Packing, transport and unloading are handled by one team.</p>
        <h3>Villa and Long-Distance Experience</h3>
        <p>Crews and trucks matched to larger homes and longer routes.</p>
        <h3>Clear, Written Pricing</h3>
        <p>An itemised estimate before you commit.</p>
        <h3>Heat-Aware Scheduling</h3>
        <p>Early starts and protective wrapping for summer moves.</p>
        <h3>Quality Materials</h3>
        <p>Cartons, blankets, wrap and covers selected for each item.</p>
        <h3>Licence and Insurance</h3>
        <p>
          Trade licence details available on request. Insurance: Al Hatem Movers is licensed and insured,
          and insurance options are discussed during your quotation.
        </p>
      </ArticleSection>

      <ReviewsSection
        id="rak-reviews-title"
        title="What Ras Al Khaimah Customers Say"
        names={["Zo Barazanji", "Nazeera Banu Nazar"]}
      />
    </LocationLayout>
  );
}
