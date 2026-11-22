import Link from "next/link";
import { Shell } from "@/components/Shell";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/Section";
import { SiteImage } from "@/components/SiteImage";
import { ArticleSection, ContactStrip } from "@/components/Article";
import { ReviewsSection } from "@/components/Blocks";
import { Callout, ChipLink, ChipList } from "@/components/Cards";
import { Faqs } from "@/components/Faq";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const PATH = "/movers-and-packers-in-dubai-marina/";
const TITLE = "Trusted Movers in Dubai Marina | Movers and Packers";
const DESCRIPTION =
  "Need Movers in Dubai Marina? Al Hatem Movers and Packers in Dubai Marina handles high-rise apartment and office moves. Get a free quote.";
const IMG = "/images/movers-and-packers-in-dubai-marina";
const IMAGE = `${IMG}/movers-packers-dubai-marina.webp`;
const IMAGE_ALT = "Movers and packers in Dubai Marina at a high-rise tower";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: IMAGE,
  imageAlt: IMAGE_ALT,
});

const faqs = [
  [
    "How much does a move in Dubai Marina cost?",
    "A move in Dubai Marina typically costs AED 700–5,500 or more for a standard apartment. A studio typically costs AED 700–1,200 transport-only, a 1-bedroom AED 1,000–1,800, a 2-bedroom AED 1,800–3,000, and a 3-bedroom AED 2,800–4,500. With full packing, those ranges rise to AED 1,000–1,600, AED 1,500–2,400, AED 2,500–3,800, and AED 3,800–5,500. Five-bedroom and penthouse apartments are quoted after a survey. The exact price is confirmed in writing after a survey and after the lift and permit are confirmed.",
  ],
  [
    "How much notice do you need for a Marina move?",
    "For a standard move, three to seven days gives us time to plan the crew and lift booking. Same-day moves are possible when the building can issue the permit quickly. Call +971 56 626 4074 to check availability.",
  ],
  [
    "Do you handle the move-in permit for me?",
    "The permit comes from the building or developer. We tell you what to request and when, and we give the crew details if the building asks for them.",
  ],
  [
    "Can you move me at night or on weekends?",
    "Depends on the building. Many towers limit moves to daytime hours or specific days. We fit your slot to what the management allows.",
  ],
  [
    "Do you provide packing boxes?",
    "Yes. Cartons, tape, bubble wrap and wardrobe boxes are available with packing services.",
  ],
  [
    "Will you dismantle and reassemble furniture?",
    "Yes. We dismantle beds, wardrobes and desks that will not fit the lift and reassemble them in the new unit.",
  ],
  [
    "What happens if the lift is delayed?",
    "Waiting time is a real factor in the Marina. Ask us how waiting is treated in the quote. A written quote should say it.",
  ],
  [
    "Can you move a piano, safe or heavy appliance?",
    "Heavy items need a survey first. Tell us about them on the first call so we bring the right crew and equipment.",
  ],
  [
    "How do you protect the building during the move?",
    "Lift pads, floor runners and door-frame protection, where the building requires it or where the item warrants it.",
  ],
  [
    "Do you offer storage for Marina residents?",
    "Yes. Short-term and longer-term storage with delivery to your new home when you are ready.",
  ],
  [
    "Is my move insured?",
    "Al Hatem Movers is licensed and insured, and insurance options are discussed during your quotation. Ask for the policy terms in writing before your move.",
  ],
  [
    "Can you move only part of my apartment?",
    "Yes. Partial moves, single-item moves and small loads are available.",
  ],
  [
    "How do I get a quote for a Dubai Marina move?",
    "Call or WhatsApp +971 56 626 4074 with your tower, floor, move date and a list of large items. We send a written quote.",
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
    ["Movers and Packers in Dubai Marina", PATH],
  ],
  service: {
    name: "Movers and Packers in Dubai Marina",
    serviceType: "Moving and packing services",
    description:
      "Need movers and packers in Dubai Marina? Al Hatem Movers handles apartment moves, packing, furniture, lift bookings and building access. Get a free quote now.",
    areaServed: {
      "@type": "Place",
      name: "Dubai Marina, Dubai",
      containedInPlace: { "@type": "City", name: "Dubai" },
    },
  },
  faqs,
});

export default function DubaiMarinaPage() {
  return (
    <Shell>
      <JsonLd data={schema} />

      <PageHeader
        variant="immersive"
        breadcrumb={[
          ["Home", "/"],
          ["Areas We Serve", "/areas-we-serve/"],
          ["Movers and Packers in Dubai Marina"],
        ]}
        title="Movers in Dubai Marina – Best High-Rise Moves Without Damage or Lift Delays"
        image={<SiteImage src={IMAGE} alt={IMAGE_ALT} ratio="3:2" priority />}
        actions={
          <>
            <Button href={BUSINESS.whatsappQuoteHref} size="lg">
              Get a Free Moving Quote
            </Button>
            <Button href={BUSINESS.phoneHref} variant="secondary" size="lg">
              Call Now
            </Button>
          </>
        }
      >
        <p>
          <em>As trusted Movers in Dubai Marina,</em> Al Hatem Furniture Moving
          Company moves apartments, offices and storage loads in Dubai Marina,
          JBR, Marina Promenade, Marina Gate and the streets around them. We
          book the lift, protect the corridors, pack in your unit and load in
          the time your building allows. Call +971 56 626 4074 for a quote based
          on your tower, floor and move date.
        </p>
        <Callout>
          <p>
            Moving in Dubai Marina? Call or WhatsApp +971 56 626 4074 with your
            tower name, floor and date. We reply with a written quote.
          </p>
        </Callout>
      </PageHeader>

      <ArticleSection
        id="marina-fastest"
        title="What is the fastest way to move in Dubai Marina?"
      >
        <p>
          The fastest way is to book the service lift and the loading bay before
          you book anything else. In most Marina towers the lift is the slowest
          part of the day, not the truck. Send us your tower name, floor number,
          move date and whether you have a permit request open, and we plan the
          crew size and the loading order around that window.
        </p>
        <p>
          A one-bedroom in a tower with a dedicated service lift can be packed,
          loaded and cleared in a single morning. A three-bedroom on a high
          floor in a tower with one shared lift can take most of the day,
          because every trip up and down is timed by the building. We tell you
          which of those two situations you are in before you pay a deposit.
        </p>
        <h3>What does a Dubai Marina move actually involve?</h3>
        <p>
          A tower move has five parts that a villa move does not have: a
          building permit, a lift slot, protection of common areas, a loading
          point that may be shared with delivery vehicles, and a strict finish
          time. Each one can stop a move if it is missed. A good mover asks
          about all five on the first call.
        </p>
      </ArticleSection>

      <ContactStrip lead="Speak With Our Packing Specialists" />

      <ArticleSection
        id="marina-different"
        tone="neutral"
        title="Why is moving in Dubai Marina different from moving anywhere else in Dubai?"
        banner={
          <SiteImage
            src={`${IMG}/dubai-marina-moving-truck-skyline.webp`}
            alt="Moving truck and crew with the Dubai Marina skyline"
            ratio="8:3"
            sizes="(min-width: 1248px) 1200px, 100vw"
          />
        }
      >
        <p>
          Marina is dense and vertical. Thousands of apartments share a small
          grid of streets, a promenade that pedestrians own, and towers that
          were built at different times by different developers. That mix
          creates problems that a generic Dubai mover does not plan for.
        </p>
        <h3>How does the building affect the move?</h3>
        <p>
          Every tower has its own rules. Some have a padded service lift and a
          basement loading dock. Some have one passenger lift with a pad you
          must request from the concierge. Some limit moves to weekday daytime,
          some allow evenings, and some close the lift for the full day only if
          you paid a refundable deposit. The rule set changes tower to tower,
          and sometimes floor to floor inside the same complex.
        </p>
        <p>
          We ask for the building’s move-in and move-out guidelines before the
          day. If your management office does not send them, we tell you which
          questions to ask: lift booking window, deposit amount and how it is
          refunded, permitted hours, whether the loading bay can be reserved,
          and whether the corridors need floor protection.
        </p>
        <h3>What is the traffic like around the Marina on moving day?</h3>
        <p>
          Marina Road, Al Marsa Street and the roads behind the towers fill up
          at school run times and on Friday and weekend evenings. The Dubai Tram
          runs along the waterfront side, and Marina Walk is a walking zone, so
          trucks cannot cut through. Roads near JBR Walk and Marina Mall are
          busy on weekends. We aim to load in the quiet part of the morning and
          leave before the afternoon build-up.
        </p>
        <h3>Why are so many Marina moves short-notice?</h3>
        <p>
          Dubai Marina has a large rental and holiday-let population. Tenants
          move when a lease ends, a landlord sells, or a job changes. Owners who
          rent to short-stay guests need apartments cleared and refilled fast.
          That is why we keep same-day and next-day slots for Marina where a
          permit and lift can be arranged in time.
        </p>
      </ArticleSection>

      <ArticleSection
        id="marina-areas"
        title="Which areas around Dubai Marina do we cover?"
      >
        <p>
          We work across the Marina district and its neighbours, and we plan
          differently for each.
        </p>
        <ul>
          <li>
            <strong>Marina Promenade and Marina Walk.</strong> Waterfront towers
            with concierge desks and strict lift booking. Access is controlled,
            so we send crew names in advance when the building asks.
          </li>
          <li>
            <strong>Marina Gate and Marina Quays.</strong> Newer towers with
            modern service lifts and managed loading. Moves here are usually the
            smoothest when the permit is done early.
          </li>
          <li>
            <strong>
              Marina Plaza, Princess Tower and the taller landmark towers.
            </strong>{" "}
            Very high floors mean longer lift cycles. We add crew for carrying
            at the top and staging at the bottom rather than sending one team up
            for the whole job.
          </li>
          <li>
            <strong>JBR (Jumeirah Beach Residence).</strong> Older clusters of
            low- and mid-rise blocks with shared parking and tight service
            roads. Truck size matters here.
          </li>
          <li>
            <strong>Bluewaters and Ain Dubai side.</strong> Island access rules
            apply, and we confirm entry details before dispatch.
          </li>
          <li>
            <strong>JLT (Jumeirah Lakes Towers) and Al Sufouh.</strong> Close
            neighbours with the same lift-and-permit pattern. We treat them as
            part of one Marina-side service area.
          </li>
          <li>
            <strong>Emirates Hills, Greens and Springs.</strong> Villa and
            townhouse moves that need a different crew mix, with gate access and
            larger loads.
          </li>
        </ul>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection
        id="marina-services"
        tone="neutral"
        title="What services do we provide in Dubai Marina?"
      >
        <h3>Apartment moving</h3>
        <p>
          Studio to four-bedroom apartments. We count the rooms, ask about the
          heaviest pieces, and quote by crew, truck size and the time the
          building gives us. Our{" "}
          <Link href="/apartment-movers-in-dubai/">
            apartment moving services in Dubai
          </Link>{" "}
          include furniture wrapping, corner protection and room-by-room
          placement, so you are not walking through boxes to find a bed.
        </p>
        <h3>Packing and unpacking</h3>
        <p>
          Our{" "}
          <Link href="/packing-and-unpacking-services-in-dubai/">
            packing and unpacking services
          </Link>{" "}
          in Dubai Marina cover full packing, partial packing and fragile items.
          We supply cartons, tape, protective wrap and wardrobe boxes. Kitchens
          usually take the longest, so we can pack them the day before and leave
          beds for moving day.
        </p>
        <h3>Furniture dismantling and reassembly</h3>
        <p>
          Beds, wardrobes, desks and wall units come apart so they fit into
          Marina lifts, which are often narrower than living-room furniture. We
          label and bag the hardware, and reassemble in the new unit.
        </p>
        <h3>Office and studio moves</h3>
        <p>
          Marina has small offices, clinics and salons on the podium and ground
          levels of several towers. We move desks, files, IT and stock outside
          business hours when the building requires it.
        </p>
        <h3>Storage</h3>
        <p>
          If your new home is not ready, or you are moving into a smaller unit,
          we hold your items in storage and deliver when you call. Storage in
          Dubai costs between AED 150 and AED 3,800 per month, depending on unit
          size, location, and climate control. Ask us for your exact storage
          rate and the terms.
        </p>
        <h3>Same-day and short-notice moves</h3>
        <p>
          Available when the building can issue the permit and release the lift
          the same day. Call before 10 am if you want to be considered for a
          same-day slot.
        </p>
        <Callout>
          <p>
            <strong>Note:</strong> Need a same-day or next-day Marina move? Call
            +971 56 626 4074 and tell us the tower. We check lift and access
            availability before we confirm.
          </p>
        </Callout>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection
        id="marina-permit"
        title="How do you book a lift and get a move-in permit in Dubai Marina?"
        banner={
          <SiteImage
            src={`${IMG}/dubai-marina-lift-booking-permit.webp`}
            alt="Movers handling a lift booking and move-in permit in Dubai Marina"
            ratio="8:3"
            sizes="(min-width: 1248px) 1200px, 100vw"
          />
        }
      >
        <p>
          The permit and lift booking come from the building or its community
          management, not from us. That said, we tell you what to ask for and
          when, because late requests are the most common reason moves get
          pushed back.
        </p>
        <h3>What paperwork does a move usually need?</h3>
        <p>Requirements differ by building, but the common ones are:</p>
        <ul>
          <li>Tenancy contract and Ejari registration for tenants</li>
          <li>Emirates ID and passport copies</li>
          <li>
            A move-in or move-out permit request through the building manager or
            the developer’s system
          </li>
          <li>
            Proof that service charges are paid, which the landlord may need to
            clear first
          </li>
          <li>Company details and, sometimes, crew names for the mover</li>
        </ul>
        <p>
          For properties under a developer’s community system, permit
          applications are handled through that developer’s portal. Processing
          times vary by developer, so apply as early as you can.
        </p>
        <h3>When should you request the lift?</h3>
        <p>
          As soon as you know your move date. If you wait until the week of the
          move, the slot you need may be gone. Ask for a morning window because
          it leaves you the afternoon if something runs over.
        </p>
        <h3>What deposits or charges might the building ask for?</h3>
        <p>
          Some towers ask for a refundable deposit or a small admin fee. Amounts
          vary, so do not accept a number from a mover. Ask the management
          office. We can quote the moving service; the building charges are
          separate.
        </p>
      </ArticleSection>

      <ArticleSection
        id="marina-cost"
        tone="neutral"
        title="How much do movers cost in Dubai Marina?"
      >
        <p>
          movers and packers in dubai marina Price depends on floor, lift
          access, volume, packing needed and distance. A move in Dubai Marina
          typically costs AED 700–5,500 or more for a standard apartment,
          depending on floor, lift access, volume, packing needed, and distance.
          A studio typically costs AED 700–1,200 transport-only, or AED
          1,000–1,600 with full packing. A 1-bedroom typically costs AED
          1,000–1,800 transport-only, or AED 1,500–2,400 with full packing. A
          2-bedroom typically costs AED 1,800–3,000 transport-only, or AED
          2,500–3,800 with full packing. A 3-bedroom typically costs AED
          2,800–4,500 transport-only, or AED 3,800–5,500 with full packing. A
          single item typically costs AED 150–250, and a partial apartment move
          is quoted by volume, not by a whole-home rate. Five-bedroom and
          penthouse apartments are quoted after a survey, because the range
          between a studio and a five-bedroom high-floor apartment is too wide
          for one honest number. The exact price is confirmed in writing after a
          survey and after the lift and permit are confirmed, because in the
          Marina the building, not just the furniture, decides the time. We do
          not publish a flat rate because the range between a studio and a
          five-bedroom high-floor apartment is too wide for one number to be
          honest.
        </p>
        <h3>What should a Marina moving quote include?</h3>
        <p>
          Ask any company for a written quote that lists the crew size, the
          truck size, the time window, packing materials, dismantling and
          reassembly, and any waiting charge if the lift is delayed. If the
          quote is one number on WhatsApp with no breakdown, you are exposed to
          add-ons on the day. Also ask whether Salik and parking charges are
          included. The quote should list crew size, truck size, time window,
          packing materials, dismantling, and waiting time. In Dubai Marina it
          must also list the lift booking and move-in permit status, the loading
          bay or entrance, the paperwork the building needs, and any deposit or
          charge the building asks for — those must be known before the day, not
          discovered at the lobby. It must state whether the move is at night or
          on a weekend, whether packing boxes are included, and whether
          furniture that does not fit the lift is dismantled first. For a piano,
          safe, or heavy appliance, that item must be listed separately, with
          its handling quoted.
        </p>
        <h3>Why do very cheap quotes fail in the Marina?</h3>
        <p>
          Because the cost is in the waiting. A crew that turns up without a
          lift booking waits on the pavement, and a company that priced the job
          as a two-hour move ends up charging more or rushing. Rushed moves mean
          scratched lifts and damaged furniture. A slightly higher quote that
          includes the lift plan is usually cheaper by the end of the day.
          Because the cheapest quote usually omits what Marina towers require.
          Five omissions to check: the lift booking is missing, so the truck
          waits; the permit was never applied for; the truck cannot reach the
          entrance, or the loading bay is shared with deliveries and other
          moves; furniture does not fit the lift, so it must be dismantled or
          carried; and corridor and lift protection was never priced, so damage
          to the lift or corridors becomes a dispute. A quote that lists lift,
          permit, bay, protection, and furniture fit item by item is comparable;
          a quote that lists only a total is not. Short-notice moves are common
          in the Marina, but short notice does not remove the lift and permit —
          a same-day move is only possible when the building can issue the
          permit quickly.
        </p>
        <p>
          Floor and lift access matter most in the Marina, after volume. High
          floors add service-lift time, and a single service lift shared between
          movers, residents, and deliveries adds waiting time. Building rules
          matter: permits, deposits, charges, allowed hours, and loading-bay
          access differ between towers, and Marina Gate and Marina Promenade
          differ from older towers in how they load. Traffic matters: the Marina
          Walk crowds, the Tram, limited street parking, and the exit onto
          Sheikh Zayed Road set the arrival time and the route. Packing level
          matters: transport-only and with-full-packing ranges above are kept
          separate. Partial moves, office and studio moves, and storage loads
          are quoted by volume and time, not by a whole-home rate, and a move to
          Abu Dhabi, Sharjah, or Ajman is priced as an inter-emirate move,
          quoted after the survey.
        </p>
      </ArticleSection>

      <ArticleSection
        id="marina-process"
        title="What is our movers and packers dubai marina process ?"
      >
        <ol className="step-list">
          <li>
            <strong>
              Call or message with the tower name, floor, move date and a rough
              list of large items.
            </strong>{" "}
            We give you a first estimate.
          </li>
          <li>
            <strong>Survey.</strong> For larger moves we do a video call or
            visit to count items and check the lift and loading area.
          </li>
          <li>
            <strong>Written quote.</strong> It lists crew, truck, time window
            and services.
          </li>
          <li>
            <strong>Permit and lift booking.</strong> You request the permit; we
            tell you what the building will ask for and give crew details when
            needed.
          </li>
          <li>
            <strong>Packing.</strong> Full or partial, before or on the day.
          </li>
          <li>
            <strong>Protection.</strong> Lift pads, corridor runners and
            door-frame guards where the building requires them.
          </li>
          <li>
            <strong>Loading and transport.</strong> Furniture goes on first in
            an order that lets us unload the bedrooms first.
          </li>
          <li>
            <strong>Unloading and placement.</strong> Boxes into the right room,
            furniture assembled, packing waste removed.
          </li>
          <li>
            <strong>Handover.</strong> You walk through the unit and confirm
            nothing is missing or damaged.
          </li>
        </ol>
      </ArticleSection>

      <ArticleSection
        id="marina-before"
        tone="neutral"
        title="What should you do before your Marina move day?"
        banner={
          <SiteImage
            src={`${IMG}/dubai-marina-move-day-preparation.webp`}
            alt="Movers preparing boxes and furniture for a Dubai Marina move"
            ratio="8:3"
            sizes="(min-width: 1248px) 1200px, 100vw"
          />
        }
      >
        <h3>Two to three weeks before</h3>
        <p>
          Check your lease end date and the notice period. Ask your building for
          its move-out rules and deposit process. Book the lift and permit. Ask
          us for a quote and confirm the date.
        </p>
        <h3>One week before</h3>
        <p>
          Cancel or transfer DEWA, internet and other utilities in line with
          your move dates. Register a new address where needed. Start using up
          food and cleaning supplies. Decide what is going to storage.
        </p>
        <h3>The day before</h3>
        <p>
          Empty and defrost the fridge and freezer. Disconnect washing machines
          and dishwashers or tell us if you want them done. Keep valuables,
          passports, cash and jewellery with you. Charge your phone so you can
          approve any changes with the crew.
        </p>
        <h3>On the day</h3>
        <p>
          Meet the crew at the loading point, share the lift booking details,
          and walk them through the unit. Point out fragile items and anything
          that should not be moved.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection
        id="marina-problems"
        title="Movers & Packers Dubai Marina: what are the most common problems and how do you avoid them?"
      >
        <h3>The lift booking is missing</h3>
        <p>
          Confirm it in writing the day before. Screenshot the confirmation.
        </p>
        <h3>The truck cannot reach the entrance</h3>
        <p>
          Some towers have narrow drop-off zones. Tell us the entrance you plan
          to use and whether there is a basement dock. We choose the truck size
          to fit.
        </p>
        <h3>Furniture does not fit the lift</h3>
        <p>
          Marina lifts are smaller than many people expect. We measure long
          pieces and plan dismantling ahead of time.
        </p>
        <h3>The unit is not ready for move-in</h3>
        <p>
          If the landlord or developer is still finishing the unit, the crew
          loses time. Confirm handover and utility connection before the day.
        </p>
        <h3>The building asks for extra charges</h3>
        <p>
          Ask before the day. If you tell us the building’s requirements, we
          plan around them.
        </p>
        <h3>Damage to the lift or corridors</h3>
        <p>
          Use lift and corridor protection. If the building asks for it, it is
          not optional. If damage happens, report it at the time so the crew,
          building and you agree on the details.
        </p>
      </ArticleSection>

      <ArticleSection
        id="marina-why"
        tone="neutral"
        title="Why choose Al Hatem Movers for a Marina move?"
      >
        <ul>
          <li>
            <strong>A plan before the truck arrives.</strong> We ask about the
            tower, lift, permit and time window on the first call.
          </li>
          <li>
            <strong>Crew sized to the building.</strong> More people at the lift
            or loading area for tall towers, fewer for a low-rise.
          </li>
          <li>
            <strong>Clear quotes.</strong> Crew, truck, hours, materials and
            extras written down.
          </li>
          <li>
            <strong>Packing and dismantling in one service.</strong> No separate
            companies for each step.
          </li>
        </ul>
        <Callout>
          <p>
            Ready to book your Marina move? Call +971 56 626 4074 or send a
            WhatsApp message with your tower name, floor and move date.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="marina-other"
        title="Moving from Dubai Marina to other areas"
      >
        <p>
          Marina residents also move to JLT, Dubai Hills, Al Barsha, Business
          Bay, Jumeirah and the emirates outside Dubai. For each route we plan
          the roads, the toll gates and the timing.
        </p>
        <h3>
          Can we move you from Dubai Marina to Abu Dhabi, Sharjah or Ajman?
        </h3>
        <p>
          Yes. Intercity moves use the same crew and plan, with extra allowance
          for road conditions. If you are moving north, note that heavy vehicles
          have restricted hours on some Dubai roads, including Emirates Road
          toward Sharjah in the evening peak, so we plan trips around that
          window.
        </p>
        <h3>Can we store items if you are moving countries?</h3>
        <p>
          Yes. Many Marina residents relocate abroad. We can pack and store your
          furniture while you find a home, or prepare an export shipment with an
          international partner. Ask us for the current details.
        </p>
      </ArticleSection>

      <ContactStrip />

      <Section tone="neutral" labelledBy="marina-faq-title">
        <SectionHeading
          id="marina-faq-title"
          title="Frequently asked questions about movers and packers in Dubai Marina"
          align="center"
        />
        <Faqs items={faqs} />
        <div className="mx-auto mt-14 max-w-4xl">
          <h3 className="mb-5">Nearby Areas We Serve</h3>
          <ChipList>
            <ChipLink href="/movers-and-packers-in-jvc/">
              Movers in JVC
            </ChipLink>
            <ChipLink href="/movers-and-packers-in-al-barsha/">
              Movers in Al Barsha
            </ChipLink>
            <ChipLink href="/movers-and-packers-in-jumeirah/">
              Movers in Jumeirah
            </ChipLink>
            <ChipLink href="/areas-we-serve/">All Areas We Serve</ChipLink>
          </ChipList>
        </div>
        <div className="mx-auto mt-10 max-w-4xl">
          <Callout>
            <p>
              Get a written quote <em>from our Mover in Dubai Marina team</em>.
              Call or WhatsApp +971 56 626 4074 now.
            </p>
          </Callout>
        </div>
      </Section>

      <ReviewsSection id="marina-reviews-title" title="What Our Customers Say" />

      <ContactStrip />
      <div className="pb-8" />
    </Shell>
  );
}
