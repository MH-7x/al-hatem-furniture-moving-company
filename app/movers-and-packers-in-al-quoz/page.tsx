import Link from "next/link";
import { ArticleSection, ContactStrip } from "@/components/Article";
import { Callout, ChipLink } from "@/components/Cards";
import { Banner, LocationLayout } from "@/components/LocationLayout";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const PATH = "/movers-and-packers-in-al-quoz/";
const TITLE = "Movers and Packers Al Quoz | 0566264074";
const DESCRIPTION =
  "Need Movers and Packers Al Quoz? Al Hatem Movers and Packers Al Quoz handles home, office and warehouse moves with safe packing. Free quote.";
const IMG = "/images/movers-and-packers-in-al-quoz";
const IMAGE = `${IMG}/movers-packers-al-quoz.webp`;
const IMAGE_ALT = "Movers and packers in Al Quoz handling a warehouse relocation";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: IMAGE,
  imageAlt: IMAGE_ALT,
});

const faqs = [
  [
    "How much does a move in Al Quoz cost?",
    "A move in Al Quoz typically costs AED 150–12,000 or more. Home moves typically cost AED 700–4,500 transport-only depending on size, a single item AED 150–250, and a 3-bedroom villa AED 3,500–6,000 before packing. Warehouse, showroom, and office moves are quoted after a site survey, with no fixed rate published. The exact price is confirmed in writing after a survey, or after a site visit for commercial moves.",
  ],
  [
    "How much notice do you need for a warehouse move?",
    "Two to four weeks, depending on size. Call +971 56 626 4074 to check availability.",
  ],
  [
    "Can you dismantle and reassemble racking?",
    "Yes, and we label each section. Ask us about certification needs.",
  ],
  ["Can you move stock without losing count?", "Yes, with counts signed at both ends."],
  ["Can you move artwork?", "Yes. Wrapping and crating are available."],
  ["Can you move overnight?", "Yes, where access allows."],
  ["Do you offer storage?", "Yes."],
  ["Can you move a home in Al Quoz?", "Yes."],
  ["Can you collect furniture from Al Quoz showrooms?", "Yes, and deliver to your home."],
  [
    "How do I request a quote?",
    "Call or WhatsApp +971 56 626 4074 with the unit, contents and date.",
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
    ["Movers and Packers in Al Quoz", PATH],
  ],
  service: {
    name: "Movers and Packers in Al Quoz",
    serviceType: "Moving and packing services",
    description:
      "Need movers and packers in Al Quoz? Get home, office, warehouse and furniture moving with careful packing, safe transport and clear quotes.",
    areaServed: {
      "@type": "Place",
      name: "Al Quoz, Dubai",
      containedInPlace: { "@type": "City", name: "Dubai" },
    },
  },
  faqs,
});

export default function AlQuozPage() {
  return (
    <LocationLayout
      schema={schema}
      crumbLabel="Movers and Packers in Al Quoz"
      title="Movers and Packers Al Quoz – Warehouse & Workshop Moves Without Damage or Delays"
      heroImage={{ src: IMAGE, alt: IMAGE_ALT }}
      intro={
        <>
          <p>
            Finding reliable <strong>movers in Al Quoz</strong> can be difficult when the move
            involves warehouses, offices, homes and industrial units. Each property needs a different
            moving plan based on access, furniture, stock and loading requirements. Moves here are as
            often commercial as domestic. Al Hatem Furniture Moving Company handles both: warehouse and
            showroom relocations, art and studio moves, small workshops, staff moves and family homes.
            Call <a href={BUSINESS.phoneHref}>+971 56 626 4074</a> for a written quote.
          </p>
          <Callout>
            <p>
              <strong>Note:</strong> Moving a warehouse, showroom or home in Al Quoz? Call or WhatsApp
              +971 56 626 4074 with the location, what you are moving and your date.
            </p>
          </Callout>
        </>
      }
      faqId="quoz-faq-title"
      faqTitle="Frequently asked questions about movers and packers in Al Quoz"
      faqs={faqs}
      nearby={
        <>
          <ChipLink href="/movers-and-packers-in-business-bay/">Movers in Business Bay</ChipLink>
          <ChipLink href="/movers-and-packers-in-downtown-dubai/">Movers in Downtown Dubai</ChipLink>
          <ChipLink href="/movers-and-packers-in-jumeirah/">Movers in Jumeirah</ChipLink>
          <ChipLink href="/movers-and-packers-in-al-barsha/">Movers in Al Barsha</ChipLink>
          <ChipLink href="/areas-we-serve/">All Areas We Serve</ChipLink>
        </>
      }
      closing={
        <p>
          <strong>Note:</strong> Get your Al Quoz quote. Call or WhatsApp +971 56 626 4074.
        </p>
      }
    >
      <ArticleSection id="quoz-kinds" title="What kinds of moves happen in Al Quoz?">
        <p>
          The area covers Al Quoz 1 to 4 and the industrial zones, with Alserkal Avenue and other
          creative spaces alongside light-industrial units. Five types of move dominate.
        </p>
        <ul>
          <li>
            <strong>Warehouse and storage relocations.</strong> Racking, pallets, stock and office
            space inside a unit.
          </li>
          <li>
            <strong>Showroom and retail moves.</strong> Furniture, lighting, fashion and
            building-materials showrooms shifting to a new space.
          </li>
          <li>
            <strong>Workshop and light-industrial moves.</strong> Benches, tools, small machinery and
            materials.
          </li>
          <li>
            <strong>Galleries, studios and creative spaces.</strong> Art, exhibition fittings and
            fragile pieces.
          </li>
          <li>
            <strong>Homes and staff accommodation.</strong> Villas, apartments, labour and staff
            housing.
          </li>
        </ul>
        <p>Each needs a different crew, tools and schedule. Most competitors describe only the last one.</p>
      </ArticleSection>

      <ContactStrip lead="Speak With Our Packing Specialists" />

      <ArticleSection
        id="quoz-warehouse"
        tone="neutral"
        title="How do you relocate a warehouse in Al Quoz?"
        banner={
          <Banner
            src={`${IMG}/warehouse-relocation-al-quoz.webp`}
            alt="Warehouse relocation team moving pallets and boxes in Al Quoz"
            ratio="5:2"
          />
        }
      >
        <p>
          A warehouse move is a project, not a truck job. The aim is to keep stock traceable and
          downtime short.
        </p>
        <h3>What is the right order?</h3>
        <p>
          Plan the new layout first, then move in the order that you will need things. Fast-moving stock
          goes early or is kept last so that orders can still ship. Slow-moving stock and archives go in
          the middle. Racking is dismantled after the stock is out and reassembled before the stock
          arrives, which means the new unit must be ready for racking first.
        </p>
        <h3>How do we move racking and shelving?</h3>
        <p>
          We label each rack, beam and upright with a position code. Bolts and clips are bagged and
          tagged to each section. If your racking supplier needs to inspect or certify the new install,
          book them first, since some warranties and safety rules depend on it.
        </p>
        <h3>How do we move pallets and stock?</h3>
        <p>
          Palletised stock is moved with pallet trucks and, where the site and our equipment allow,
          forklifts. Cartons are moved in labelled crates or on pallets, and each pallet gets a tag with
          its contents and destination bay. For anything that needs a forklift or hydraulic lift, ask us
          about equipment availability and confirm it on the survey. We do not promise equipment we
          have not confirmed.
        </p>
        <h3>How do we keep stock counts accurate?</h3>
        <p>
          We agree a count at the old unit and at the new one. You or your team sign both. Barcodes or
          labels are scanned where you have a system. If you do not, a simple list by pallet number
          works and takes little time.
        </p>
        <h3>Can you move office space inside the warehouse?</h3>
        <p>
          Yes. Desks, files, IT and pantry items move as they would in any office. We schedule the{" "}
          <Link href="/office-movers-in-dubai/">office move</Link> to keep your team working.
        </p>
        <Callout>
          <p>
            <strong>Note:</strong> Planning a warehouse or showroom relocation? Call +971 56 626 4074 to
            arrange a site survey and quote.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="quoz-showroom" title="How do you move a showroom or retail space in Al Quoz?">
        <p>
          Al Quoz has a high concentration of furniture, lighting, kitchen, tile and fashion showrooms.
          Moves there are about display items, not only cartons.
        </p>
        <h3>What do we handle?</h3>
        <p>
          Display units, sample stands, glass and mirror displays, mannequins, lighting rigs, counters,
          signage and stock. We photograph the layout before dismantling so it can be rebuilt at the new
          place.
        </p>
        <h3>How do we protect display items?</h3>
        <p>
          Wrapping and edge guards for finishes, glass and lacquer. Sample boards and tile displays are
          boxed upright. Lighting fittings are wrapped with the bulbs removed where required.
        </p>
        <h3>Can you move overnight?</h3>
        <p>
          Yes, where access allows. Many showrooms move after closing to avoid losing sales days.
        </p>
        <h3>What about signage and installations?</h3>
        <p>
          Signage that is wired or fixed needs an installer. Ask your signage supplier to schedule the
          removal and reinstall, and we plan around it.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection
        id="quoz-homes"
        tone="neutral"
        title="How do homes and staff accommodation moves work in Al Quoz?"
        banner={
          <Banner
            src={`${IMG}/moving-homes-staff-accommodation-al-quoz.webp`}
            alt="Movers loading household furniture for an Al Quoz relocation"
          />
        }
      >
        <p>
          For residential moves, movers in Al Quoz also need to consider building access, parking, lifts
          and the type of furniture being moved.
        </p>
        <h3>What is a staff move?</h3>
        <p>
          An employer relocates a group of staff between accommodation sites. We schedule pickups with a
          driver and crew, list each address and contact and confirm each stop’s time. One vehicle,
          several stops, one quote.
        </p>
        <h3>What is a villa move?</h3>
        <p>
          Similar to other villa moves, with crew sized to the number of rooms. Older Al Quoz villas can
          have narrow gates and older layouts, so we survey before quoting.
        </p>
        <h3>What is an apartment move?</h3>
        <p>Building rules and lifts apply. Ask your manager for the current requirements.</p>
      </ArticleSection>

      <ArticleSection id="quoz-services" title="What services do we provide in Al Quoz?">
        <h3>Warehouse and commercial relocation</h3>
        <p>Racking, pallets, stock, office space.</p>
        <h3>Showroom and retail moving</h3>
        <p>Displays, fittings and stock.</p>
        <h3>Art and studio moving</h3>
        <p>Wrapping, crating and careful transport.</p>
        <h3>Packing and unpacking</h3>
        <p>Full or partial, for homes and businesses.</p>
        <h3>Furniture dismantling and assembly</h3>
        <p>Beds, wardrobes, desks, shelving and display units.</p>
        <h3>Storage</h3>
        <p>
          Short and long term, for business stock and household goods. Storage in Dubai costs between AED
          150 and AED 3,800 per month, depending on unit size, location, and climate control. Ask us for
          your exact storage rate and the terms.
        </p>
        <h3>Furniture collection and delivery</h3>
        <p>
          Collection from Al Quoz showrooms and warehouses and{" "}
          <Link href="/home-movers-and-packers-in-dubai/">delivery to homes across Dubai</Link>.
        </p>
        <h3>Small moves and single items</h3>
        <p>Fridges, sofas, machines and a few boxes.</p>
      </ArticleSection>

      <ArticleSection id="quoz-cost" tone="neutral" title="How much do movers cost in Al Quoz?">
        <p>
          Commercial and residential jobs price differently. Volume, access, equipment and time are the
          main factors.
        </p>
        <p>
          A move in Al Quoz typically costs AED 150–12,000 or more, depending on whether it is
          commercial or residential, and on volume, access, equipment, and time. A home move typically
          costs AED 700–1,200 for a studio, AED 1,000–1,800 for a 1-bedroom, AED 1,800–3,000 for a
          2-bedroom, and AED 2,800–4,500 for a 3-bedroom, transport-only, or AED 1,000–1,600, AED
          1,500–2,400, AED 2,500–3,800, and AED 3,800–5,500 with full packing. A 2-bedroom villa
          typically costs AED 1,500–2,500, and a 3-bedroom villa AED 3,500–6,000 before packing. A single
          item typically costs AED 150–250, and a small set of 3–5 items AED 300–600. Warehouse,
          showroom, and office moves are quoted after a site survey — no fixed warehouse rate is
          published here, because warehouse pricing depends on racking, stock, equipment, and downtime.
          The exact price is confirmed in writing after a survey, or after a site visit for commercial
          moves.
        </p>
        <h3>What should a commercial quote say?</h3>
        <p>
          Crew, truck count, equipment, time window, packing materials, racking and dismantling, stock
          handling, insurance and waiting time. It should also say what is excluded, such as specialist
          rigging or electrical work. The quote should list crew size, truck size, time window, packing
          materials, dismantling, and waiting time. In Al Quoz a commercial quote must also list the
          order of the move, racking and shelving dismantling and reassembly, pallets and stock
          handling, stock-count accuracy, office space inside the warehouse if any, loading conditions,
          and heavy-vehicle restrictions. For a showroom or retail move it must also list display-item
          protection, signage and installations, and whether the move is overnight. For a home, staff
          accommodation, villa, or apartment move it must list home type, floor, lift, and parking, as
          for other Dubai home moves. Equipment availability must be stated in the quote — equipment that
          is not available on the day is a delay, not a detail.
        </p>
        <h3>Why is a survey needed for commercial moves?</h3>
        <p>
          Because the quote depends on what is in the unit, the loading bay, the racking type and the
          time you can afford to be closed. An estimate by phone is a guess. Because a commercial quote
          given without a survey changes on the day, and the change is usually stock, equipment, or
          readiness. Three reasons, in order. First, the new unit is not ready, so stock has nowhere to
          go. Second, racking, shelving, and equipment were never counted, so the crew and truck are
          wrong for the job. Third, stock was never counted at both ends, so stock goes missing or is
          mixed, and landlord disputes over damage follow. A survey that walks the warehouse, showroom,
          and office, counts racking and stock, checks loading conditions and heavy-vehicle
          restrictions, and confirms the new unit is ready, gives a fixed written price. A quote without
          it is an estimate.
        </p>
        <p>
          Volume matters first, whether it is furniture, stock, or both. Access matters next: loading
          conditions, roller-shutter or long-carry loading, gate requirements, and heavy-vehicle
          restrictions set the truck and the time. Equipment matters: racking tools, pallets, and
          handling equipment must be available on the day. Time matters: the quietest times, overnight
          windows for showrooms, and trading downtime for warehouses change the crew and the price.
          Readiness matters most for commercial moves: a new unit that is not ready, or a survey never
          done, is how quotes change and stock is lost. For homes and staff accommodation in Al Quoz,
          floor, lift, and parking matter as for other Dubai home moves, and art and studio moves need
          face protection, crating, and photographs before disassembly, quoted per item.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="quoz-trucks" title="How do trucks get in and out of Al Quoz?">
        <p>
          Al Quoz has direct links to Sheikh Zayed Road, Al Khail Road, Umm Suqeim Road and Al Asayel
          Street. It is heavy with commercial vehicles all day, and streets can be busy with delivery
          trucks and forklifts.
        </p>
        <h3>What are the loading conditions?</h3>
        <p>
          Some units have a dock, some have a roller shutter at street level, and some share a yard. We
          ask about height clearance, the width of the gate and whether the truck can back in. If a unit
          has no dock, we use a tail-lift truck or a ramp where suitable and confirm it in the quote.
        </p>
        <h3>When is it quietest?</h3>
        <p>Early mornings, evenings and Fridays. Midday brings the most commercial traffic.</p>
        <h3>What about heavy vehicle restrictions?</h3>
        <p>
          Heavy vehicles have timed restrictions on some major roads. The rules depend on vehicle class
          and change from time to time. We check the current schedule when we plan the route.
        </p>
      </ArticleSection>

      <ArticleSection id="quoz-process" tone="neutral" title="What is our step-by-step process in Al Quoz?">
        <ol className="step-list">
          <li>
            <strong>You call with the details.</strong> Unit type, size, stock or contents, date.
          </li>
          <li>
            <strong>Site survey.</strong> Visit or video for commercial units.
          </li>
          <li>
            <strong>Written quote.</strong> With crew, trucks, equipment and time.
          </li>
          <li>
            <strong>Access and paperwork.</strong> You confirm landlord and building rules and any
            licence changes.
          </li>
          <li>
            <strong>Packing and labelling.</strong> By category, rack or room.
          </li>
          <li>
            <strong>Dismantling.</strong> Racking, shelving and displays.
          </li>
          <li>
            <strong>Loading and transport.</strong> Heavy items first, fragile items secured.
          </li>
          <li>
            <strong>Unloading and reassembly.</strong> Placed to your new layout.
          </li>
          <li>
            <strong>Count and handover.</strong> Signed stock or item count.
          </li>
        </ol>
      </ArticleSection>

      <ArticleSection
        id="quoz-prepare"
        title="How do you prepare for a commercial move in Al Quoz?"
        banner={
          <Banner
            src={`${IMG}/commercial-moving-al-quoz.webp`}
            alt="Commercial movers preparing office and workshop items for relocation in Al Quoz"
          />
        }
      >
        <h3>Six weeks out</h3>
        <p>
          Confirm the new unit’s readiness, including power, racking space and internet. Give notice to
          your landlord. Ask for a survey and quote.
        </p>
        <h3>Four weeks out</h3>
        <p>
          Update your licence and address with the authorities as required. Tell customers and suppliers
          about the new address. Plan the layout.
        </p>
        <h3>Two weeks out</h3>
        <p>
          Book any installers, riggers or IT technicians. Start packing low-use stock. Label everything.
        </p>
        <h3>The week of the move</h3>
        <p>Agree the order of moving. Back up data. Assign one person from your team at each end.</p>
        <h3>On the day</h3>
        <p>
          Approve placement, sign the counts and check that critical items are working before the crew
          leaves.
        </p>
      </ArticleSection>

      <ArticleSection id="quoz-problems" tone="neutral" title="What are the most common Al Quoz moving problems?">
        <h3>The new unit is not ready</h3>
        <p>Confirm power, access and racking space before the move.</p>
        <h3>No survey and the quote changes</h3>
        <p>Ask for a site survey.</p>
        <h3>Stock goes missing</h3>
        <p>Count and sign at both ends.</p>
        <h3>Equipment is not available</h3>
        <p>Confirm forklift or lift availability in writing.</p>
        <h3>Landlord disputes over damage</h3>
        <p>Photograph both units before and after.</p>
      </ArticleSection>

      <ArticleSection id="quoz-why" title="Why choose Al Hatem Movers in Al Quoz?">
        <ul>
          <li>
            <strong>We treat commercial moves as projects.</strong> Survey, plan, count and sign-off.
          </li>
          <li>
            <strong>Experience across home, office, showroom and warehouse moves.</strong>
          </li>
          <li>
            <strong>Packing, dismantling and moving in one service.</strong>
          </li>
          <li>
            <strong>Written quotes with a breakdown.</strong>
          </li>
        </ul>
        <Callout>
          <p>
            <strong>Note:</strong> Book your Al Quoz move. Call or WhatsApp +971 56 626 4074.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="quoz-out" tone="neutral" title="Moving out of Al Quoz to another area">
        <p>
          Businesses move to Dubai Investments Park, Jebel Ali, Dubai South,{" "}
          <Link href="/movers-and-packers-in-sharjah/">Sharjah</Link> and{" "}
          <Link href="/movers-and-packers-in-ajman/">Ajman</Link> for larger space and lower cost.
          Residents move to Al Barsha, Dubai Hills, Jumeirah and the northern emirates. We plan the route
          and the requirements at both ends, and handle the truck timing around restrictions.
        </p>
      </ArticleSection>
    </LocationLayout>
  );
}
