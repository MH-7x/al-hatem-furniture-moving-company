import Link from "next/link";
import { ArticleSection, ContactStrip } from "@/components/Article";
import { Callout, ChipLink } from "@/components/Cards";
import { Banner, LocationLayout } from "@/components/LocationLayout";
import { buildMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const PATH = "/movers-and-packers-in-business-bay/";
const TITLE = "Movers and Packers in Business Bay | Movers in Business Bay";
const DESCRIPTION =
  "Need Movers and Packers in Business Bay? Al Hatem Movers handles apartment and office moves with safe packing. Free quote: 0566264074";
const IMG = "/images/movers-and-packers-in-business-bay";
const IMAGE = `${IMG}/movers-packers-business-bay.webp`;
const IMAGE_ALT = "Movers and packers in Business Bay with crew and truck";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: IMAGE,
  imageAlt: IMAGE_ALT,
});

const faqs = [
  [
    "How much does a move in Business Bay cost?",
    "A move in Business Bay typically costs AED 150–15,000 or more. Apartments typically cost AED 700–4,500 transport-only depending on size, a single item AED 150–250, a small office AED 1,000–2,500, a medium office AED 4,500–9,000 standard, and a large office AED 6,000–15,000. A full office floor, and a shop, clinic, or showroom unit, are quoted after a survey. The exact price is confirmed in writing after a survey, and after the lift, loading bay, and permit are confirmed.",
  ],
  [
    "How Much Notice Do You Need For An Office Move?",
    "For a small office, one to two weeks. For a larger office, three to four weeks so we can survey and plan. Call +971 56 626 4074 to check availability.",
  ],
  [
    "Can You Move Us After Office Hours?",
    "Yes, where the building allows it. We schedule crews to your permitted window.",
  ],
  [
    "Do You Pack Confidential Files?",
    "Yes. Boxes are sealed and counted, and we deliver them to your named contact. Tell us if you need extra handling for sensitive material.",
  ],
  [
    "Can You Handle IT Equipment?",
    "We move it carefully, and your IT provider disconnects and reconnects. We label cables and equipment.",
  ],
  [
    "Do You Move Furniture From Serviced Apartments?",
    "Only what belongs to you. Furnished units have landlord-owned furniture that stays. We move your personal items.",
  ],
  [
    "What If My Building Does Not Allow Evening Moves?",
    "We plan a daytime slot with extra crew to shorten the lift phase.",
  ],
  [
    "Will You Dismantle Office Partitions And Workstations?",
    "Yes. We dismantle and reassemble desks, tables and modular workstations.",
  ],
  [
    "Is Salik Or Parking Included In The Quote?",
    "Ask for it in writing. A good quote states what is included.",
  ],
  [
    "Do You Offer Storage For Office Items?",
    "Yes. Short and long-term storage with delivery on request.",
  ],
  [
    "Can You Move A Single Item Or A Small Load?",
    "Yes. Small moves and single items can be booked.",
  ],
  [
    "What Areas Near Business Bay Do You Also Serve?",
    "Downtown Dubai, DIFC, Al Quoz, Al Barsha, Jumeirah, Dubai Hills and JVC.",
  ],
  [
    "How Do I Request A Quote?",
    "Call or WhatsApp +971 56 626 4074 with the tower, floor, date and a list of large items.",
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
    ["Movers and Packers in Business Bay", PATH],
  ],
  service: {
    name: "Movers and Packers in Business Bay",
    serviceType: "Moving and packing services",
    description:
      "Need Movers in Business Bay? Get apartment, office, furniture and packing services with safe transport, careful handling and clear moving quotes.",
    areaServed: {
      "@type": "Place",
      name: "Business Bay, Dubai",
      containedInPlace: { "@type": "City", name: "Dubai" },
    },
  },
  faqs,
});

export default function BusinessBayPage() {
  return (
    <LocationLayout
      schema={schema}
      crumbLabel="Movers and Packers in Business Bay"
      title="Trusted Movers and Packers in Business Bay – High-Rise Apartment & Office Moves, Done On Time"
      heroImage={{ src: IMAGE, alt: IMAGE_ALT }}
      intro={
        <>
          <p>
            Business Bay is a business district and a residential district on the same streets. On
            one floor you find a law firm, on the next a family renting a two-bedroom.{" "}
            <em>As trusted Movers and Packers in Business Bay</em>, Al Hatem Furniture Moving
            Company moves both: apartments, serviced units, small offices and full office floors,
            with after-hours scheduling and lift booking built into the plan. Call +971 56 626 4074
            to get a quote for your tower.
          </p>
          <Callout>
            <p>
              <strong>Note:</strong> <Link href="/office-movers-in-dubai/">Moving an office</Link> or
              apartment in Business Bay? Call or WhatsApp{" "}
              <a href="tel:+971566264074">+971 56 626 4074</a> with your tower, floor and preferred
              date.
            </p>
          </Callout>
        </>
      }
      faqId="bb-faq-title"
      reviews
      faqTitle="Frequently asked questions about movers and packers in Business Bay"
      faqs={faqs}
      nearby={
        <>
          <ChipLink href="/movers-and-packers-in-downtown-dubai/">Movers in Downtown Dubai</ChipLink>
          <ChipLink href="/movers-and-packers-in-al-quoz/">Movers in Al Quoz</ChipLink>
          <ChipLink href="/movers-and-packers-in-jumeirah/">Movers in Jumeirah</ChipLink>
          <ChipLink href="/movers-and-packers-in-deira/">Movers in Deira</ChipLink>
          <ChipLink href="/areas-we-serve/">All Areas We Serve</ChipLink>
        </>
      }
      closing={<p>Book your Business Bay move now. Call or WhatsApp +971 56 626 4074.</p>}
    >
      <ArticleSection id="bb-who" title="Who moves in Business Bay, and what do they need?">
        <p>Three groups make up most moves here, and each needs a different plan.</p>
        <ul>
          <li>
            <strong>Tenants and owners moving apartments.</strong> Studios, one- and two-bedrooms in
            towers along the canal and off Al Abraj Street. They need lift booking, permits and
            careful furniture handling.
          </li>
          <li>
            <strong>Small and mid-size companies.</strong> Consultancies, trading firms, agencies
            and start-ups moving desks, computers, files and meeting-room furniture, often outside
            working hours.
          </li>
          <li>
            <strong>Owners and landlords turning over units.</strong> Investors with rental units
            want a fast, clean clear-out and refill between tenants.
          </li>
        </ul>
        <p>Most competitors write one paragraph for all three. We treat them as three different jobs.</p>
      </ArticleSection>

      <ContactStrip lead="Speak With Our Packing Specialists" />

      <ArticleSection
        id="bb-apartment"
        tone="neutral"
        title="How does moving an apartment in Business Bay work?"
        banner={
          <Banner
            src={`${IMG}/business-bay-apartment-movers.webp`}
            alt="Business Bay apartment movers handling protected furniture"
          />
        }
      >
        <h3>Which towers and zones do we serve?</h3>
        <p>We work across Business Bay’s towers and complexes, including:</p>
        <ul>
          <li>The canal-facing high-rises where lifts are shared and busy in the mornings and evenings</li>
          <li>Towers off Al Abraj Street and Marasi Drive</li>
          <li>Bay Square and the lower-rise blocks with different loading arrangements</li>
          <li>Executive Towers and other older complexes with their own building rules</li>
          <li>Serviced apartments and hotel apartments where furniture is part of the lease</li>
        </ul>
        <h3>What makes Business Bay tower moves slow?</h3>
        <p>
          The lifts. Business Bay towers house both residents and office workers, so the lifts are
          busy on weekday mornings and at 5 to 7 pm. Moves booked in the middle of the day, or on a
          weekend morning, usually go faster. We recommend a mid-morning slot on a weekday or an
          early weekend slot if your building allows it.
        </p>
        <h3>Do Business Bay towers require a move-in permit?</h3>
        <p>
          Most do. Requirements differ between buildings and property managers. Common items are
          Ejari for tenants, Emirates ID and passport copies, proof that service charges are
          settled, and a booking for the service lift. Ask your building manager for the exact list
          and the lead time.
        </p>
        <h3>What if my building has no service lift?</h3>
        <p>
          Some units rely on passenger lifts with protective padding. That means smaller loads per
          trip and more trips. We add crew to keep the trips shorter and we tell you in advance how
          long the lift phase will take.
        </p>
      </ArticleSection>

      <ArticleSection id="bb-reach" title="What is the best way to reach Business Bay with a moving truck?">
        <p>
          Business Bay sits between Sheikh Zayed Road, Al Khail Road and the Dubai Canal. Trucks
          arrive through the Business Bay Crossing and the internal roads off Al Abraj Street and Bay
          Avenue, and from Downtown side roads. Traffic is heavy in the evening, and the area around
          Downtown is sensitive during big events, when roads close early.
        </p>
        <h3>What time is best for a truck to arrive?</h3>
        <p>
          Between 8 and 10 am on a weekday is usually manageable. From late afternoon, traffic near
          the crossing and Sheikh Zayed Road slows everything. Weekends bring their own crowds along
          the canal and Bay Avenue.
        </p>
        <h3>Are there truck restrictions?</h3>
        <p>
          Heavy vehicles face timed restrictions on parts of Dubai’s road network, including some
          major roads in peak hours. Rules depend on the vehicle class and change from time to time.
          We check the current restrictions when we plan the route and choose the truck accordingly.
        </p>
        <h3>Where does the truck park?</h3>
        <p>
          Some towers have a basement loading area, some have a designated bay, and some have only a
          short drop-off zone at the entrance. Tell us the entrance you plan to use and we choose a
          truck that fits.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection
        id="bb-services"
        tone="neutral"
        title="What are our services in Business Bay?"
        banner={
          <Banner
            src={`${IMG}/business-bay-truck-loading-bay.webp`}
            alt="Moving truck at a Business Bay building loading bay"
          />
        }
      >
        <h3>Office relocation</h3>
        <p>Desks, IT, files, safes, pantry and reception. After-hours crews. Floor plans for placement.</p>
        <h3>Apartment and villa moves</h3>
        <p>Studios to four-bedroom apartments, with packing, dismantling and reassembly.</p>
        <h3>Packing services</h3>
        <p>Full packing for homes, and document and archive packing for offices, with inventory lists.</p>
        <h3>Furniture dismantling and assembly</h3>
        <p>Workstations, wardrobes, beds and meeting tables. Hardware is bagged and labelled.</p>
        <h3>Storage</h3>
        <p>
          Short and long-term storage for businesses that are between offices, and for residents who
          are downsizing or travelling. Storage in Dubai costs between AED 150 and AED 3,800 per
          month, depending on unit size, location, and climate control. Ask us for your exact storage
          rate and the terms.
        </p>
        <h3>Same-day moves</h3>
        <p>
          When the building allows, we handle same-day requests. Tell us the tower and time on the
          first call.
        </p>
      </ArticleSection>

      <ArticleSection id="bb-cost" title="How Much Do Movers and Packers Business Bay Cost?">
        <p>
          We price each job by volume, floor, lift access, crew and time. There is no honest flat
          rate across a single studio and a full office floor. A mover in Business Bay typically
          costs AED 150–15,000 or more, because one district holds both a single studio and a full
          office floor, and there is no honest flat rate across both. An apartment typically costs
          AED 700–1,200 for a studio, AED 1,000–1,800 for a 1-bedroom, AED 1,800–3,000 for a
          2-bedroom, and AED 2,800–4,500 for a 3-bedroom, transport-only, or AED 1,000–1,600, AED
          1,500–2,400, AED 2,500–3,800, and AED 3,800–5,500 with full packing. A single item
          typically costs AED 150–250, and a small load is quoted by volume. A small office
          typically costs AED 1,000–2,500, a medium office AED 4,500–9,000 standard or AED
          6,500–12,500 out-of-hours, and a large office AED 6,000–15,000, with a full office floor
          quoted after a survey. A shop, clinic, or showroom unit is quoted after a survey. The exact
          price is confirmed in writing after a survey, and after the lift, loading bay, and permit
          are confirmed.
        </p>
        <h3>What should an office moving quote include?</h3>
        <p>
          Crew size, truck count, time window, number of workstations, IT handling, packing
          materials, insurance cover and any waiting time. Ask if the quote covers a second trip or an
          extra floor. Ask what happens if the building extends the lift booking or changes the time.
          The quote should list crew size, truck size, time window, packing materials, dismantling,
          and waiting time. In Business Bay an office quote must also list the lift and loading bay
          slot, booked by the hour, the access cards and permits, and whether the move is after
          office hours or over a weekend. It must list confidential-file packing separately, IT
          equipment separately, office partitions and workstations separately, and whether Salik and
          parking are included or charged separately — a quote that does not say is not comparable.
          For an apartment, serviced apartment, or investor unit, it must list floor, lift access,
          parking, and whether the move-out cleaning or clearance for the deposit is included. For a
          shop, clinic, or showroom unit, it must list display and equipment handling separately.
        </p>
        <h3>Why do some movers in business bay quote very low?</h3>
        <p>
          They usually leave out packing materials, dismantling, waiting time or the second crew. The
          gap appears on moving day as an add-on. A written quote prevents that. Because the low
          quote usually omits what Business Bay towers require. Six omissions to check: the lift or
          loading bay was never reserved, so the crew waits; access cards or permits were not ready,
          so the move cannot start; long items do not fit the lift, so they must be dismantled or
          carried; IT was never planned, so it does not come back online on time; traffic delays and
          truck restrictions were never timed; and damage claims and disputes were never priced,
          because corridor and lift protection was never included. A quote that lists lift, bay,
          permits, IT, traffic timing, and protection item by item is comparable; a quote that lists
          only a total is not. A small office needs one to two weeks’ notice, and a larger office
          three to four weeks, so the survey and plan can be done — a low quote that skips the survey
          is the one most likely to change.
        </p>
        <p>
          Volume and time matter first, whether the job is an apartment, a serviced unit, a small
          office, or a full office floor. Tower access matters next: loading bays booked by the hour,
          service lifts, access cards, permits, and buildings with no service lift all change the
          crew and the time. Timing matters: the best arrival time, truck restrictions, and traffic
          delays set the window, and after-hours moves for offices change the rate. IT and
          confidentiality matter for offices: workstations, partitions, files, and equipment must be
          mapped and labelled before anything is dismantled. Readiness matters for deposits: a
          move-out that leaves damage, or a tenancy not closed in order, costs the deposit, so
          clearance and protection must be in the quote. Storage during a lease overlap is quoted by
          time, not by the move, and a move from Business Bay to Sharjah, Ajman, or Abu Dhabi is
          priced as an inter-emirate move, quoted after the survey.
        </p>
      </ArticleSection>

      <ArticleSection id="bb-steps" tone="neutral" title="What steps do we follow for a Business Bay move?">
        <ol className="step-list">
          <li>
            <strong>First call.</strong> You give the tower, floor, move date, type of move and a
            rough list of large items.
          </li>
          <li>
            <strong>Survey.</strong> A visit or video walk-through for offices and larger
            apartments.
          </li>
          <li>
            <strong>Written quote.</strong> Crew, truck, time window, services and exclusions.
          </li>
          <li>
            <strong>Building coordination.</strong> You request the permit and lift booking; we
            supply crew details if required.
          </li>
          <li>
            <strong>Packing and labelling.</strong> Boxes, furniture and IT are labelled by room or
            workstation.
          </li>
          <li>
            <strong>Protection.</strong> Lift pads, floor runners and door guards.
          </li>
          <li>
            <strong>Loading.</strong> Order set so the new space can be set up in sequence.
          </li>
          <li>
            <strong>Delivery and set-up.</strong> Furniture assembled, boxes placed, waste removed.
          </li>
          <li>
            <strong>Walk-through.</strong> Sign-off with you or your office manager.
          </li>
        </ol>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="bb-before" title="What should you do before a Business Bay office move?">
        <h3>Four weeks out</h3>
        <p>
          Tell your landlord or management of your notice. Confirm move-out and move-in windows. Ask
          for our survey and quote. Share the plan with your team.
        </p>
        <h3>Two weeks out</h3>
        <p>
          Book the lift and permits. Ask your IT provider about internet and phone lines for the new
          space. Order new signage or access cards if needed. Start archiving files you do not need.
        </p>
        <h3>One week out</h3>
        <p>
          Label workstations and boxes. Assign each team member to pack their own desk contents.
          Confirm with your bank, suppliers and clients about any change of address.
        </p>
        <h3>The day before</h3>
        <p>
          Back up data. Disconnect and label IT equipment. Empty and clean pantry items. Clear
          personal items from desks.
        </p>
        <h3>On the day</h3>
        <p>Keep one person on-site at each end. They approve placement and sign the handover sheet.</p>
      </ArticleSection>

      <ArticleSection
        id="bb-problems"
        tone="neutral"
        title="Which problems come up most in Business Bay moves and how do we prevent them?"
      >
        <h3>Lift or loading bay not reserved</h3>
        <p>Confirm in writing 24 hours ahead. Ask for the booking reference.</p>
        <h3>Access cards or permits not ready</h3>
        <p>Request them early. If a card is still pending, the crew cannot enter and time is lost.</p>
        <h3>Long items do not fit the lift</h3>
        <p>We measure ahead and plan dismantling for long tables and glass panels.</p>
        <h3>IT does not come back online</h3>
        <p>
          Book your internet installation for the day you arrive, not after. Keep the network gear
          boxed and labelled.
        </p>
        <h3>Traffic delays</h3>
        <p>Choose an early slot. We plan the route to avoid peak times.</p>
        <h3>Damage claims and disputes</h3>
        <p>
          Photograph fragile items before packing. Sign the handover sheet with notes. Ask for the
          insurance terms in writing: Al Hatem Movers is licensed and insured, and insurance options
          are discussed during your quotation.
        </p>
      </ArticleSection>

      <ArticleSection
        id="bb-deposit"
        title="How do you move out of a Business Bay unit and get your deposit back?"
      >
        <p>
          Landlords in Business Bay usually inspect the unit after you leave, and the security
          deposit depends on what they find. The move itself is part of that outcome, because scuffed
          walls and damaged doors are the most common deductions.
        </p>
        <h3>What do landlords check at move-out?</h3>
        <p>
          Walls, paint, floors, kitchen cabinets, bathroom fittings, AC condition, and any damage to
          doors and door frames. Most disputes come from marks made while carrying furniture through
          narrow hallways. That is why we use door-frame guards and corner protection on every
          apartment move, and why we ask you to photograph the empty unit before you hand it back.
        </p>
        <h3>In what order should you close the tenancy?</h3>
        <p>
          Move out first, clean the unit, return keys and access cards, then arrange the inspection.
          Cancel utilities only after the final reading. Keep copies of your Ejari termination, final
          DEWA bill and the handover sheet. We can arrange the move so that the last load leaves
          early in the day, leaving you time to clean and hand over.
        </p>
        <h3>Can you help clear an investor unit between tenants?</h3>
        <p>
          Yes. Owners of investment units use us to remove old furniture, deliver new pieces and
          reset the flat between leases. Send us the schedule and we plan it around your tenant
          handover dates. This is a regular job in Business Bay, where many units are owned by
          investors who do not live in the country.
        </p>
      </ArticleSection>

      <ArticleSection
        id="bb-shop"
        tone="neutral"
        title="Can you move a shop, clinic or showroom unit in Business Bay?"
      >
        <p>
          Yes. Ground-floor and podium units in the area hold cafes, clinics, salons and small
          showrooms. These moves need a different approach from office moves. Stock is moved in
          labelled crates. Display units and counters are dismantled and reassembled. Glass, mirrors
          and medical or electronic equipment are wrapped and moved with care. We schedule around
          your closing hours so you lose as little trading time as possible, and we confirm access
          with the building before the day.
        </p>
      </ArticleSection>

      <ArticleSection
        id="bb-why"
        title="Why do clients in Business Bay choose Al Hatem Movers?"
        banner={
          <Banner
            src={`${IMG}/business-bay-shop-office-move.webp`}
            alt="Movers packing and dismantling furniture for a Business Bay office or shop move"
          />
        }
      >
        <ul>
          <li>
            <strong>We plan for both offices and homes.</strong> The crews, schedules and documents
            are different, and we do not treat them as the same job.
          </li>
          <li>
            <strong>After-hours scheduling.</strong> Evenings and weekends where the building allows.
          </li>
          <li>
            <strong>Written quotes with a breakdown.</strong> You see what each line pays for.
          </li>
          <li>
            <strong>Packing, dismantling and moving in one service.</strong>
          </li>
        </ul>
        <Callout>
          <p>
            Get your Business Bay quote today. Call +971 56 626 4074 or send your tower name, floor
            and preferred date on WhatsApp.
          </p>
        </Callout>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection
        id="bb-out"
        tone="neutral"
        title="Moving out of Business Bay to another area or emirate"
      >
        <p>
          Business Bay is a stepping stone for many residents and companies.{" "}
          <em>As trusted Movers and Packers in Business Bay</em> People move on to Dubai Hills, JVC,
          Al Barsha, Mirdif and Jumeirah. Companies move to DIFC, Dubai Silicon Oasis, Dubai South or
          to the northern emirates.
        </p>
        <h3>Can you move an office from Business Bay to Sharjah, Ajman or Abu Dhabi?</h3>
        <p>
          Yes. We handle{" "}
          <strong>
            office moves from Business Bay to <Link href="/movers-and-packers-in-sharjah/">Sharjah</Link>,{" "}
            <Link href="/movers-and-packers-in-ajman/">Ajman</Link> and{" "}
            <Link href="/movers-and-packers-in-abu-dhabi/">Abu Dhabi</Link>
          </strong>
          , with route planning based on truck restrictions and peak-hour traffic. We coordinate
          pickup, transport and delivery times to keep the intercity move organized.
        </p>
        <h3>Can you store furniture during a lease overlap?</h3>
        <p>
          Yes. If your new premises are not ready, storage is a practical bridge. We collect, hold
          and deliver when you call.
        </p>
      </ArticleSection>
    </LocationLayout>
  );
}
