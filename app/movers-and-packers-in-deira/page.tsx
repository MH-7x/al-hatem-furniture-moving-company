import Link from "next/link";
import { ArticleSection, ContactStrip } from "@/components/Article";
import { Callout, ChipLink } from "@/components/Cards";
import { Banner, LocationLayout } from "@/components/LocationLayout";
import { buildMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const PATH = "/movers-and-packers-in-deira/";
const TITLE = "Reliable Movers and Packers in Deira | Home & Office Moving";
const DESCRIPTION =
  "Need movers and packers in Deira? Get home, apartment, shop and office relocation with careful packing, furniture protection and planned transport.";
const IMG = "/images/movers-and-packers-in-deira";
const IMAGE = `${IMG}/movers-packers-deira.webp`;
const IMAGE_ALT = "Movers and packers in Deira loading wrapped furniture into a moving truck";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: IMAGE,
  imageAlt: IMAGE_ALT,
});

const faqs = [
  [
    "How much does a move in Deira cost?",
    "A move in Deira typically costs AED 150–5,500 or more. A single item typically costs AED 150–250, a small set AED 300–600, a studio AED 700–1,200 transport-only, a 1-bedroom AED 1,000–1,800, a 2-bedroom AED 1,800–3,000, and a 3-bedroom AED 2,800–4,500. With full packing, apartment ranges rise to AED 1,000–1,600, AED 1,500–2,400, AED 2,500–3,800, and AED 3,800–5,500. Shop relocations are quoted after a survey and stock count. The exact price is confirmed in writing after a survey, with floor and stairs stated.",
  ],
  [
    "How Much Notice Do You Need?",
    "For small moves, one to three days. For shops and offices, one to two weeks. Call +971 56 626 4074 to check availability.",
  ],
  ["Can You Move On Weekends And At Night?", "Yes, subject to building or street rules."],
  ["Do You Move Furniture Up And Down Stairs?", "Yes. Tell us the number of floors."],
  ["Can You Move A Single Item?", "Yes."],
  ["Do You Dismantle Furniture?", "Yes."],
  ["Can You Move A Shop Overnight?", "Yes, where access allows."],
  ["Do You Provide Packing Materials?", "Yes."],
  ["Do You Offer Storage?", "Yes."],
  [
    "Is My Move Insured?",
    "Al Hatem Movers is licensed and insured, and insurance options are discussed during your quotation. Ask for the policy in writing.",
  ],
  ["Can You Move Me From Deira To Sharjah Or Ajman?", "Yes."],
  [
    "How Do I Request A Quote?",
    "Call or WhatsApp +971 56 626 4074 with your building, floor and date.",
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
    ["Movers and Packers in Deira", PATH],
  ],
  service: {
    name: "Movers and Packers in Deira",
    serviceType: "Moving and packing services",
    description:
      "Need movers and packers in Deira? Get home, apartment, shop and office relocation with careful packing, furniture protection and planned transport.",
    areaServed: {
      "@type": "Place",
      name: "Deira, Dubai",
      containedInPlace: { "@type": "City", name: "Dubai" },
    },
  },
  faqs,
});

export default function DeiraPage() {
  return (
    <LocationLayout
      schema={schema}
      crumbLabel="Movers and Packers in Deira"
      title="Movers and Packers in Deira"
      heroImage={{ src: IMAGE, alt: IMAGE_ALT, ratio: "1:1" }}
      intro={
        <>
          <p>
            Deira is the oldest commercial and residential district on the Dubai side of the Creek.
            Buildings are older, streets are narrow, parking is scarce, and a large share of the moves
            are shop, trading-office and shared-apartment moves rather than villa relocations. Al Hatem
            Furniture Moving Company plans for that. Call +971 56 626 4074 with your street, building
            and floor, and we give you a written quote based on how your building really works.
          </p>
          <Callout>
            <p>
              <strong>Note:</strong> Moving in Deira? Call or WhatsApp +971 56 626 4074 with your area,
              building, floor and date. We reply with a quote.
            </p>
          </Callout>
        </>
      }
      faqId="deira-faq-title"
      faqTitle="Frequently asked questions about movers and packers in Deira"
      faqs={faqs}
      nearby={
        <>
          <ChipLink href="/movers-and-packers-in-business-bay/">Movers in Business Bay</ChipLink>
          <ChipLink href="/movers-and-packers-in-downtown-dubai/">Movers in Downtown Dubai</ChipLink>
          <ChipLink href="/movers-and-packers-in-mirdif/">Movers in Mirdif</ChipLink>
          <ChipLink href="/movers-and-packers-in-sharjah/">Movers in Sharjah</ChipLink>
          <ChipLink href="/areas-we-serve/">All Areas We Serve</ChipLink>
        </>
      }
      closing={
        <p>
          <strong>Note:</strong> Get your Deira quote now. Call or WhatsApp +971 56 626 4074.
        </p>
      }
    >
      <ArticleSection id="deira-different" title="Why is moving in Deira different from moving in newer parts of Dubai?">
        <p>
          Because the buildings and streets were not designed for moving trucks. In a new tower the
          questions are about lift booking and permits. In Deira the questions are about stairs, street
          width, parking and whether the truck can get within carrying distance of the door.
        </p>
        <h3>What are the main challenges?</h3>
        <ul>
          <li>
            <strong>Buildings without a service lift.</strong> Many older blocks have one small
            passenger lift, or none. Furniture may need to be carried up stairs.
          </li>
          <li>
            <strong>Narrow streets and one-way loops.</strong> A full-size truck may not turn where you
            need it to.
          </li>
          <li>
            <strong>Limited parking.</strong> Trucks often load on the street for a short period.
          </li>
          <li>
            <strong>Busy market and commercial zones.</strong> Loading is restricted at certain hours
            in some streets.
          </li>
          <li>
            <strong>Creek crossings.</strong> Getting to or from Bur Dubai and the airport side
            involves bridges and tunnels that back up at peak times.
          </li>
          <li>
            <strong>Mixed use.</strong> A residential floor may sit above a shop or a trading office,
            which changes noise, access and hours.
          </li>
        </ul>
        <p>
          A mover who treats Deira like Dubai Marina will misjudge the job. We plan crew size for
          stairs, choose a truck that fits the street and give you a realistic time.
        </p>
      </ArticleSection>

      <ContactStrip lead="Speak With Our Packing Specialists" />

      <ArticleSection
        id="deira-parts"
        tone="neutral"
        title="Which parts of Deira do we cover?"
        banner={
          <Banner
            src={`${IMG}/deira-creek-moving-services.webp`}
            alt="Deira Creek waterfront with abra boats and nearby buildings"
          />
        }
      >
        <ul>
          <li>
            <strong>Al Rigga and Salah Al Din.</strong> Dense residential and hotel-apartment zone with
            metro access and heavy pedestrian traffic.
          </li>
          <li>
            <strong>Naif and Al Sabkha.</strong> Traditional trading streets. Access is tight and
            loading hours are limited.
          </li>
          <li>
            <strong>Al Muraqqabat and Port Saeed.</strong> Residential and commercial buildings, many
            of them older.
          </li>
          <li>
            <strong>Hor Al Anz and Abu Hail.</strong> Established residential areas with mid-rise
            blocks and some villas.
          </li>
          <li>
            <strong>Al Qusais and Al Nahda border.</strong> Larger family apartment blocks on the edge
            of Deira.
          </li>
          <li>
            <strong>Dubai Creek side and Baniyas Road.</strong> Offices, hotels and commercial
            buildings.
          </li>
        </ul>
        <p>
          Give us the street or building name and the nearest landmark. Deira addresses are often
          described by landmark rather than number.
        </p>
      </ArticleSection>

      <ArticleSection id="deira-stairs" title="How do you move furniture up stairs in an older Deira building?">
        <h3>How do we plan a stair move?</h3>
        <p>
          We count the flights of stairs, check the width of the stairwell and measure large furniture
          before deciding what to dismantle. Moves with stairs need more people and more time, because
          each trip is slower and heavier. We say so in the quote so that the day does not begin with
          an argument about extra charges.
        </p>
        <h3>What gets dismantled?</h3>
        <p>
          Beds, wardrobes, large tables and wall units. Sofas are turned and carried where possible. If
          a piece will not turn on the landing, we tell you whether dismantling or an alternative route
          is possible.
        </p>
        <h3>How do we protect the building?</h3>
        <p>
          Stairwell walls, handrails and door frames are protected where we are carrying heavy items.
          That matters because older buildings show damage easily, and building managers and landlords
          notice.
        </p>
        <h3>Can appliances be moved by stairs?</h3>
        <p>
          Yes, with the right team. Fridges, washing machines and freezers are heavy and awkward on
          stairs. We use straps and enough carriers to keep them upright and safe. Tell us about large
          appliances on the first call.
        </p>
      </ArticleSection>

      <ArticleSection
        id="deira-shared"
        tone="neutral"
        title="How do you move a shared apartment or a single room in Deira?"
      >
        <p>
          A large share of Deira homes are shared by several people, and many moves are small: a few
          beds, some suitcases, a fridge, a television. These moves need a small crew, a small truck and
          clear timing, not a full villa-scale service.
        </p>
        <h3>What is a good way to price a small move?</h3>
        <p>
          Price by item and floor. List each large item, say which floor it is on and whether there is a
          lift, and we quote a fixed price. This works better than an hourly rate, which can run long if
          the lift or stairs are slow.
        </p>
        <h3>Can you move only part of the household?</h3>
        <p>
          Yes. One roommate can move out alone without disturbing the others. We move only what you
          point to, and we do not touch shared furniture.
        </p>
        <h3>What documents do small movers need?</h3>
        <p>
          Often nothing beyond the building’s rules. Some buildings ask for a note from the landlord or
          a notice to the security desk. Ask the building what they require before the date.
        </p>
        <Callout>
          <p>
            <strong>Note:</strong> Small move in Deira? Call +971 56 626 4074 and tell us what you are
            moving and which floor.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="deira-shop" title="How do you move a shop, office or trading unit in Deira?">
        <p>
          Deira has thousands of small businesses: electronics traders, garment sellers, general trading
          offices, restaurants, clinics and service centres. Moving a shop or office here is about
          speed, stock and access.
        </p>
        <h3>What do we move?</h3>
        <p>
          Shelving, counters, display units, stock cartons, computers, files, safes, fridges and
          signage. We label cartons by shelf or category so you can re-open in the same layout.
        </p>
        <h3>How do we handle stock?</h3>
        <p>
          Stock is packed in labelled cartons and counted where you ask. We recommend a stock list at
          both ends, signed by you or your manager. Fragile electronics and glass items are wrapped
          separately.
        </p>
        <h3>When do we move commercial units?</h3>
        <p>
          Usually at night or on a day when the shop is closed. Many Deira streets have busy trading
          hours, so an early-morning or late-night slot avoids blocking the road and lets you reopen
          fast.
        </p>
        <h3>What paperwork applies?</h3>
        <p>
          If your business address changes, the trade licence, tenancy registration and any related
          permits must be updated with the relevant authorities. Requirements depend on your licence
          type, so check with your PRO or licensing office. We can give you the move date and
          confirmation you may need.
        </p>
        <h3>Can you handle a full relocation from Deira to another area?</h3>
        <p>
          Yes. Many Deira businesses move to Al Quoz, Dubai Investments Park, Sharjah or Ajman for
          larger space and lower rent. We plan the trip, the loading order and the delivery timing.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="deira-services" tone="neutral" title="What services do we provide in Deira?">
        <h3>House and Apartment Moving</h3>
        <p>
          We handle moves from studios and family apartments to villas around Hor Al Anz and Al Qusais.
          Our{" "}
          <Link href="/home-movers-and-packers-in-dubai/">
            <strong>home moving services in Dubai</strong>
          </Link>{" "}
          include furniture protection, loading and transportation.
        </p>
        <h3>Packing and Unpacking</h3>
        <p>
          Choose full packing, partial packing or help with fragile belongings. Our{" "}
          <Link href="/packing-and-unpacking-services-in-dubai/">
            <strong>packing and unpacking services in Dubai</strong>
          </Link>{" "}
          help prepare household items for transport.
        </p>
        <h3>Furniture Dismantling and Assembly</h3>
        <p>
          We help dismantle and reassemble beds, wardrobes, wall units and shop shelving when needed.
          Explore our{" "}
          <Link href="/furniture-movers-in-dubai/">
            <strong>furniture moving services in Dubai</strong>
          </Link>{" "}
          for related moving support.
        </p>
        <h3>Shop and Office Relocation</h3>
        <p>
          We move shop stock, shelving, office furniture, IT equipment and files. Our{" "}
          <Link href="/office-movers-in-dubai/">
            <strong>office moving services in Dubai</strong>
          </Link>{" "}
          support small business and workplace relocations.
        </p>
        <h3>Storage</h3>
        <p>
          Storage can help during a move, renovation or temporary gap between properties. Explore our{" "}
          <Link href="/storage-solutions-in-dubai/">
            <strong>storage solutions in Dubai</strong>
          </Link>{" "}
          for available options and rates.
        </p>
        <h3>Small moves and single items</h3>
        <p>Fridge, bed, sofa or a few boxes.</p>
        <h3>Same-day and night moves</h3>
        <p>Where access allows.</p>
      </ArticleSection>

      <ArticleSection id="deira-cost" title="How much do movers cost in Deira?">
        <p>
          Price depends on floor, stairs, volume, truck size and time. A small move can be very
          affordable, while a full shop relocation with stock takes more crew and time.
        </p>
        <p>
          A move in Deira typically costs AED 150–5,500 or more, depending on floor, stairs, volume,
          truck size, and time. A single item typically costs AED 150–250. A small set of 3–5 items
          typically costs AED 300–600. A studio apartment typically costs AED 700–1,200 transport-only,
          or AED 1,000–1,600 with full packing. A 1-bedroom typically costs AED 1,000–1,800
          transport-only, or AED 1,500–2,400 with full packing. A 2-bedroom typically costs AED
          1,800–3,000 transport-only, or AED 2,500–3,800 with full packing. A 3-bedroom typically costs
          AED 2,800–4,500 transport-only, or AED 3,800–5,500 with full packing. A full shop or
          trading-unit relocation with stock takes more crew and time, and is quoted after a stock count
          and survey — no fixed shop rate is published here, because no sourced shop-relocation rate
          exists. The exact price is confirmed in writing after a survey, with the floor and stairs
          stated.
        </p>
        <h3>What should a Deira quote include?</h3>
        <p>
          Crew size, truck size, floors and stairs, time window, packing and dismantling, and any
          parking or waiting cost. If the building has no lift, the quote should say how that is
          handled.
        </p>
        <p>
          The quote should list crew size, truck size, time window, packing materials, dismantling, and
          waiting time. In Deira it must also state the floor, whether there is a lift, and how many
          flights of stairs the crew will carry up or down — that is what changes the price most in
          older buildings. It must also state where the truck will park and load, because narrow streets
          and scarce parking mean the truck often cannot get near the door, and carrying distance adds
          time. For a shared apartment or single room, the quote should price by item and floor, as the
          page already states — list each large item, its floor, and whether there is a lift, for a
          fixed price, rather than an hourly rate that runs long when stairs are slow.
        </p>
        <h3>Why do stairs change the price?</h3>
        <p>
          Because carrying is slower and needs more people. A crew that estimated a lift move but finds
          three flights of stairs will either slow down or add charges. Tell us the floor when you call.
        </p>
        <p>
          Because carrying is slower and needs more people, and because furniture that fits a lift does
          not always fit a stairwell. A crew that estimated a lift move but finds three flights of
          stairs will either slow down or add charges — that is why the floor must be told when you
          call. Appliances, glass, mirrors, and electronics carried by stairs also need different
          packing and more crew, and a piece that does not fit the stairwell must be dismantled first,
          which adds time that should be in the quote, not found on the day.
        </p>
        <p>
          Stairs matter most in Deira, after volume. Truck access matters next: narrow streets, parking
          limits, and truck restrictions set where the truck stops and how far items are carried. Time
          matters differently here: shops and markets work on trading hours, homes on different hours,
          and Ramadan and trading seasons change both — a shop move is often done overnight, which is
          priced differently from a daytime home move. Stock matters for commercial moves: the volume,
          type, and handling of stock, and whether it must be kept separate and counted, set the crew
          and time. A small move can be very affordable; a full shop relocation cannot be priced from a
          bedroom count.
        </p>
      </ArticleSection>

      <ArticleSection
        id="deira-truck"
        tone="neutral"
        title="How do you get a truck in and out of Deira?"
        banner={
          <Banner
            src={`${IMG}/deira-busy-street-moving.webp`}
            alt="Movers loading furniture on a busy Deira street"
          />
        }
      >
        <p>
          Deira sits on the east side of the Creek. Trucks reach it from Al Maktoum Bridge, Al Garhoud
          Bridge, Business Bay Crossing, and from Sharjah via Al Ittihad Road. Traffic near the Creek
          crossings backs up in the morning and evening, and weekends around Naif and Al Rigga are
          crowded.
        </p>
        <h3>When is the best time to move?</h3>
        <p>
          Early morning on a weekday is usually easiest. Late night works for commercial moves. Midday
          in market streets and Friday afternoons are the hardest times.
        </p>
        <h3>Where does the truck park?</h3>
        <p>
          Often on the street, in a loading zone, or in a small yard. We confirm the spot before
          dispatch and choose a truck that fits. If the truck must park a distance away, we plan extra
          carriers.
        </p>
        <h3>Are there truck restrictions?</h3>
        <p>
          Heavy vehicles have timed restrictions on some Dubai roads, and some Deira streets limit
          loading times. The rules can change, so we check them when we plan the route.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection
        id="deira-hotel"
        title="What should you know about hotel apartments and staff accommodation moves in Deira?"
      >
        <p>
          Deira has many hotel apartments, serviced flats and company-provided staff housing. Moves in
          these places follow rules that a normal tenancy does not.
        </p>
        <h3>Who owns the furniture?</h3>
        <p>
          In a furnished or serviced unit, the landlord or operator owns the beds, sofas and appliances.
          Only your personal belongings leave with you. Before packing, agree a list with the operator
          or your employer of what is yours, so the crew does not remove a lamp that belongs to the flat
          and you are not charged for it later.
        </p>
        <h3>What do operators usually ask for?</h3>
        <p>
          A check-out time, a condition inspection, and sometimes advance notice to the front desk or a
          staff manager. Some will only allow moves in a fixed window and want the mover’s name at
          reception. We give you crew and vehicle details in advance when needed.
        </p>
        <h3>How do company moves work?</h3>
        <p>
          When an employer relocates staff, one person often coordinates ten or twenty small moves. We
          can group them into a schedule: one vehicle, several stops, each with a named contact and a
          fixed time. A single quote for the batch is usually simpler than ten separate ones. Send us
          the list of addresses, floors and item counts.
        </p>
        <h3>Can you collect luggage and boxes for shipping abroad?</h3>
        <p>
          We can collect and deliver boxes to a freight forwarder or cargo office in Deira. The
          forwarder handles customs and shipping, and we handle the collection and packing. Ask the
          forwarder what packaging and labelling they need before we pack.
        </p>
      </ArticleSection>

      <ArticleSection
        id="deira-fragile"
        tone="neutral"
        title="How do you protect fragile and electronic goods in Deira moves?"
      >
        <p>
          Trading businesses in Deira handle a lot of electronics, glassware, perfumes and small
          appliances, and households move televisions, laptops and kitchen items. Breakage in a
          stair-and-street move is a real risk because items are handled more often than in a
          lift-and-dock move.
        </p>
        <h3>How do we pack electronics?</h3>
        <p>
          Original boxes where you have them, otherwise padded cartons with dividers. Screens are stood
          upright and never stacked flat. Cables are bagged and labelled to each device.
        </p>
        <h3>How do we pack perfume, liquids and cosmetics?</h3>
        <p>
          Upright, sealed and padded, in cartons marked for liquids. Heat matters in summer, so these
          are loaded last and unloaded first, and never left in a parked truck.
        </p>
        <h3>How do we pack glass and mirrors?</h3>
        <p>
          Wrapped in layers with edge guards and moved upright. Mirrors and glass shelves are labelled
          and travel apart from heavy items.
        </p>
      </ArticleSection>

      <ArticleSection id="deira-times" title="When are the busiest and quietest times to move in Deira?">
        <p>
          Deira runs on trading rhythms. Streets that are calm at 7 am are jammed by 10 am, and some
          areas empty out on Friday and fill again on Saturday. If you can choose, use that pattern.
        </p>
        <h3>Which hours work for shops and markets?</h3>
        <p>
          Before shops open, or after they close. Naif, Al Sabkha and the older trading streets need
          early loading, because carts and delivery vehicles arrive as the day starts.
        </p>
        <h3>Which times work for homes?</h3>
        <p>
          Weekday mornings for buildings with lifts and stairs alike. Weekends are popular for moves, so
          slots fill early, and building managers may limit weekend moves.
        </p>
        <h3>What about Ramadan and the trading seasons?</h3>
        <p>
          During Ramadan, business hours shift and streets are busiest in the evening. Sale periods and
          shopping festivals bring more deliveries and foot traffic to the markets. If you run a shop,
          avoid moving in those weeks. We can advise on dates when you tell us the area and your opening
          hours.
        </p>
      </ArticleSection>

      <ArticleSection id="deira-process" tone="neutral" title="What is our step-by-step process in Deira?">
        <ol className="step-list">
          <li>
            <strong>You call with the details.</strong> Building, floor, stairs or lift, items, date.
          </li>
          <li>
            <strong>We ask follow-up questions.</strong> Parking, street width and any shop hours.
          </li>
          <li>
            <strong>Written quote.</strong> With crew, truck and time window.
          </li>
          <li>
            <strong>Access.</strong> You confirm building rules; we plan around them.
          </li>
          <li>
            <strong>Packing.</strong> Home or stock, labelled.
          </li>
          <li>
            <strong>Loading.</strong> Heavy items first, protected walls and rails.
          </li>
          <li>
            <strong>Transport.</strong> Route and timing planned.
          </li>
          <li>
            <strong>Unloading and assembly.</strong> Furniture set up, boxes placed.
          </li>
          <li>
            <strong>Handover.</strong> Sign-off and count for commercial moves.
          </li>
        </ol>
      </ArticleSection>

      <ArticleSection
        id="deira-prepare"
        title="How do you prepare for a Deira move?"
        banner={
          <Banner
            src={`${IMG}/preparing-for-deira-move.webp`}
            alt="Movers wrapping furniture and sealing boxes before a Deira relocation"
          />
        }
      >
        <h3>Two weeks before</h3>
        <p>
          Confirm the date and give notice to your landlord or building. Ask about move-out rules. Book
          your mover. Decide what to keep.
        </p>
        <h3>One week before</h3>
        <p>
          Pack non-essential items. Label boxes. Arrange utilities and internet at the new place. For
          businesses, inform customers and suppliers of the new address.
        </p>
        <h3>The day before</h3>
        <p>
          Empty and defrost the fridge. Disconnect appliances. Back up computers. Pack a first-night bag
          or an opening-day kit for the shop.
        </p>
        <h3>On the day</h3>
        <p>
          Be present at both ends. Show the crew what stays and what goes. Check the count at handover.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="deira-problems" tone="neutral" title="What are the most common Deira moving problems?">
        <h3>Stairs not mentioned in the quote</h3>
        <p>Tell the mover the floor and whether there is a lift.</p>
        <h3>The truck cannot get near the door</h3>
        <p>Send a pin, describe the street and choose a smaller truck if needed.</p>
        <h3>Furniture does not fit the stairwell</h3>
        <p>Measure and dismantle in advance.</p>
        <h3>Parking and loading limits</h3>
        <p>Confirm hours and avoid peak times.</p>
        <h3>Commercial stock lost or mixed</h3>
        <p>Label cartons and sign a stock count.</p>
      </ArticleSection>

      <ArticleSection id="deira-why" title="Why choose Al Hatem Movers in Deira?">
        <ul>
          <li>
            <strong>We plan for stairs, streets and parking.</strong> Not only lifts and permits.
          </li>
          <li>
            <strong>Small and large moves.</strong> From one bed to a full shop.
          </li>
          <li>
            <strong>Night and early-morning options</strong> for commercial moves.
          </li>
          <li>
            <strong>Written quotes with a breakdown.</strong>
          </li>
          <li>
            <strong>Licence and insurance:</strong> trade licence details available on request;
            licensed and insured, with insurance options discussed during your quotation.
          </li>
        </ul>
        <Callout>
          <p>
            <strong>Note:</strong> Book your Deira move today. Call or WhatsApp +971 56 626 4074.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="deira-out" tone="neutral" title="Moving out of Deira to another area">
        <p>
          Residents and businesses in Deira move to Al Nahda, Al Qusais, Dubai Silicon Oasis,{" "}
          <Link href="/movers-and-packers-in-sharjah/">Sharjah</Link> and{" "}
          <Link href="/movers-and-packers-in-ajman/">Ajman</Link>, and to newer areas such as JVC and
          Dubai Hills. We plan the route, timing and building rules at both ends. If you move to
          Sharjah or Ajman, we schedule around evening restrictions for heavy vehicles.
        </p>
      </ArticleSection>
    </LocationLayout>
  );
}
