import { REVIEW_COUNT } from "@/lib/constants";
import Link from "next/link";
import { ArticleSection, ContactStrip } from "@/components/Article";
import { Callout, ChipLink } from "@/components/Cards";
import { Banner, LocationLayout } from "@/components/LocationLayout";
import { buildMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const PATH = "/movers-and-packers-in-jumeirah/";
const TITLE = "Movers and Packers in Jumeirah | Best Villa Moving Services";
const DESCRIPTION =
  "Need movers and packers in Jumeirah? Get villa, home, office and commercial moving with careful packing, furniture protection and planned transport.";
const IMG = "/images/movers-and-packers-in-jumeirah";
const IMAGE = `${IMG}/movers-packers-jumeirah.webp`;
const IMAGE_ALT = "Movers and packers in Jumeirah handling wrapped furniture beside a moving truck";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: IMAGE,
  imageAlt: IMAGE_ALT,
});

const faqs = [
  [
    "How much does a move in Jumeirah cost?",
    "A move in Jumeirah typically costs AED 700–12,000 or more. Apartments typically cost AED 700–4,500 transport-only depending on size, a 3-bedroom villa AED 3,500–6,000 before packing, a 4-bedroom villa AED 5,000–7,000 before packing, and a 5-bedroom villa AED 7,000–12,000 before packing. Artwork, antiques, and valuables are quoted per item. The exact price is confirmed in writing after a survey, because home size, access, and special items change it.",
  ],
  [
    "How Much Notice Do You Need For A Villa Move?",
    "One to two weeks for a survey and quote. Call +971 56 626 4074 to check availability.",
  ],
  [
    "Can You Move Me To Or From Palm Jumeirah?",
    "Yes. Apply for the permit early and give us the frond and building details.",
  ],
  ["Can You Move Antiques?", "Yes. Tell us what you have so we plan wrapping and crew."],
  ["Can You Move Artwork?", "Yes, with wrapping and crating options."],
  ["Do You Dismantle Furniture?", "Yes."],
  ["Can You Move A Clinic Or Salon?", "Yes, after hours or on a closed day."],
  ["Do You Offer Storage?", "Yes."],
  [
    "Is My Move Insured?",
    "Al Hatem Movers is licensed and insured, and insurance options are discussed during your quotation. Ask for the policy in writing.",
  ],
  [
    "What If The Street Is Too Narrow For A Large Truck?",
    "We send a smaller truck or carry from the nearest allowed point.",
  ],
  [
    "How Do I Request A Quote?",
    "Call or WhatsApp +971 56 626 4074 with your area, home type, date and special items.",
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
    ["Movers and Packers in Jumeirah", PATH],
  ],
  service: {
    name: "Movers and Packers in Jumeirah",
    serviceType: "Moving and packing services",
    description:
      "Need movers and packers in Jumeirah? Get villa, home, office and commercial moving with careful packing, furniture protection and planned transport.",
    areaServed: {
      "@type": "Place",
      name: "Jumeirah, Dubai",
      containedInPlace: { "@type": "City", name: "Dubai" },
    },
  },
  faqs,
});

export default function JumeirahPage() {
  return (
    <LocationLayout
      schema={schema}
      crumbLabel="Movers and Packers in Jumeirah"
      title="Movers and Packers in Jumeirah"
      heroImage={{ src: IMAGE, alt: IMAGE_ALT }}
      intro={
        <>
          <p>
            Jumeirah is Dubai’s older beachside villa belt. Streets are quiet but narrow, walls are
            high, trees hang over gates, and many homes hold furniture, art and family collections
            built up over years. Al Hatem Furniture Moving Company moves villas, townhouses and
            apartments across Jumeirah 1, 2 and 3, Umm Suqeim, Al Wasl, Al Safa and Palm Jumeirah,
            with crews and trucks matched to the street, not just the house. Call +971 56 626 4074
            for a quote.
          </p>
          <Callout>
            <p>
              <strong>Note:</strong> Moving in Jumeirah? Call or WhatsApp +971 56 626 4074 with your
              area, home type and date. We reply with a written quote.
            </p>
          </Callout>
        </>
      }
      faqId="jum-faq-title"
      reviews
      faqTitle="Frequently asked questions about movers and packers in Jumeirah"
      faqs={faqs}
      nearby={
        <>
          <ChipLink href="/movers-and-packers-in-dubai-marina/">Movers in Dubai Marina</ChipLink>
          <ChipLink href="/movers-and-packers-in-downtown-dubai/">Movers in Downtown Dubai</ChipLink>
          <ChipLink href="/movers-and-packers-in-al-quoz/">Movers in Al Quoz</ChipLink>
          <ChipLink href="/movers-and-packers-in-business-bay/">Movers in Business Bay</ChipLink>
          <ChipLink href="/areas-we-serve/">All Areas We Serve</ChipLink>
        </>
      }
      closing={
        <p>
          <strong>Note:</strong> Get a written Jumeirah quote. Call or WhatsApp +971 56 626 4074.
        </p>
      }
    >
      <ArticleSection id="jum-different" title="What makes a Jumeirah move different from other Dubai moves?">
        <p>
          Most of Jumeirah was built before modern moving logistics were a design consideration. That
          is part of its charm and part of the difficulty. Plan for five things that newer communities
          do not have.
        </p>
        <h3>Narrow lanes and tight gates</h3>
        <p>
          Many Jumeirah streets are one truck wide, with parked cars on both sides. Villa gates can be
          narrower than a standard truck bay. A large truck may have to park on the main road and be
          loaded by hand-cart or carrying team from the gate. We ask for a pin and a photo of the gate
          on the first call so we can choose the right vehicle.
        </p>
        <Banner
          src={`${IMG}/jumeirah-villa-gate-narrow-lane.webp`}
          alt="Movers carrying a wrapped sofa through a gated villa entrance in Jumeirah"
        />
        <h3>Mature trees and low overhead cables</h3>
        <p>
          Old trees, hanging branches and overhead wires can block high-sided trucks. A truck that
          arrives and cannot reach the door loses an hour. We check access before dispatch and send a
          lower-profile truck where needed.
        </p>
        <h3>Original layouts and unusual furniture</h3>
        <p>
          Homes here often contain carved wood, large mirrors, antique pieces, oversized dining tables
          and built-in units. These items need measured planning, not a quick wrap.
        </p>
        <h3>Salt air and humidity</h3>
        <p>
          Homes near the beach pick up moisture, and some furniture carries corrosion or swollen wood.
          This changes how we pack: extra care for metal fittings, wood veneer and electronics, and
          enough time to let items dry before wrapping.
        </p>
        <h3>Beach-road and weekend traffic</h3>
        <p>
          Jumeirah Beach Road and the cross streets fill up on weekends and evenings with visitors.
          Roads near the beach, cafés and popular parks are crowded. We plan an early start.
        </p>
      </ArticleSection>

      <ContactStrip lead="Speak With Our Packing Specialists" />

      <ArticleSection id="jum-parts" tone="neutral" title="Which parts of Jumeirah do we cover?">
        <ul>
          <li>
            <strong>Jumeirah 1, 2 and 3.</strong> Beachside villa streets, converted villas and small
            apartment blocks.
          </li>
          <li>
            <strong>Umm Suqeim 1, 2 and 3.</strong> Villas and townhouses near Burj Al Arab and the
            beach.
          </li>
          <li>
            <strong>Al Wasl.</strong> Larger villas with wide plots and mature gardens.
          </li>
          <li>
            <strong>Al Safa and Al Barsha border.</strong> Mixed apartments and villas near Sheikh
            Zayed Road.
          </li>
          <li>
            <strong>Al Manara and Al Sufouh.</strong> Quieter residential areas near Umm Suqeim Road.
          </li>
          <li>
            <strong>Palm Jumeirah.</strong> Frond villas, townhouses and apartment buildings, with
            their own access and permit rules.
          </li>
        </ul>
        <p>
          Tell us the street name, plot or villa number and a Google Maps pin. Jumeirah’s numbered
          streets are easy to confuse.
        </p>
      </ArticleSection>

      <ArticleSection id="jum-villa" title="How do you move a Jumeirah villa?">
        <h3>How do we plan the survey?</h3>
        <p>
          For villas, we do a video walk-through or a visit. We look at rooms, garage, outdoor areas
          and access. We measure gates and note anything that needs special handling. From this we
          agree crew size, truck type and time.
        </p>
        <h3>How many people does a Jumeirah villa need?</h3>
        <p>
          A four-bedroom villa with a garden usually needs a larger crew and a bigger truck than the
          same number of bedrooms in a JVC townhouse, because rooms are larger and furniture is
          heavier. We give you the numbers after the survey.
        </p>
        <h3>What about gardens and outdoor items?</h3>
        <p>
          Outdoor furniture, planters, sculptures, play sets and garden equipment need attention. Large
          ceramic pots and stone items are heavy and easy to crack. We wrap and carry them with the
          right number of people. Plants should be moved in a separate vehicle where possible.
        </p>
        <h3>What about swimming pool equipment and outdoor kitchens?</h3>
        <p>
          Pumps and filters that belong to the property stay. Movable outdoor furniture goes with you.
          If you have a portable BBQ or outdoor kitchen unit, we plan it as a separate item.
        </p>
        <h3>What if the villa has a basement, roof or mezzanine?</h3>
        <p>Extra levels mean extra carrying. We add crew and time in the quote.</p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="jum-valuables" tone="neutral" title="How do you move valuable furniture and art in Jumeirah?">
        <p>
          Jumeirah households often own furniture and artwork that is old, heavy or irreplaceable. A
          standard pack is not enough.
        </p>
        <h3>How do we wrap and protect antiques?</h3>
        <p>
          Padded covers, corner guards and blankets for wood. Glass and mirror faces are protected
          before wrapping. Carved pieces are moved upright and never stacked. Drawers are removed or
          secured.
        </p>
        <h3>What about artwork and framed pieces?</h3>
        <p>
          We wrap frames, canvases and prints in layers with protection over the face, and move them
          upright in dedicated cartons or crates. For large or valuable works, we can arrange custom
          crating. Tell us the size and value at the survey.
        </p>
        <h3>What about rugs and carpets?</h3>
        <p>
          Hand-made rugs are rolled, wrapped and moved without folding. Damp rugs must be dry before
          rolling. We advise on cleaning before storage.
        </p>
        <h3>Can you take an inventory of valuables?</h3>
        <p>
          Yes. We list and photograph high-value items before loading and check them at delivery.
          Al Hatem Movers is licensed and insured, and insurance options are discussed during your
          quotation. Ask for the policy terms in writing.
        </p>
        <Callout>
          <p>
            <strong>Note:</strong> Moving valuable furniture or art? Call +971 56 626 4074 and tell us
            what you have. We plan wrapping and crating before quoting.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="jum-palm" title="How do you move to or from Palm Jumeirah?">
        <p>
          Palm Jumeirah has its own moving considerations. Access is limited to the main trunk road
          and the fronds, so traffic can back up, and some communities have their own rules and
          permits.
        </p>
        <h3>What permits does the Palm require?</h3>
        <p>
          Most buildings and communities on the Palm require a move-in or move-out permit. It may be
          issued by the developer, the community manager or the building manager, depending on the
          property. You typically need tenancy documents, Ejari, Emirates ID and passport, and
          confirmation that service charges are paid. Ask your manager for the list and the lead time.
        </p>
        <h3>How does access work?</h3>
        <p>
          Trucks enter via the Palm trunk and go to the frond or building. Some frond roads are
          narrow, and some communities have gates and security checks. Give us the frond number and
          villa or building name, so we can plan the vehicle and route.
        </p>
        <h3>When is the Palm busiest?</h3>
        <p>
          Weekends, evenings and holiday periods. Beach visitors, hotel guests and residents fill the
          trunk road. We recommend a weekday morning slot.
        </p>
        <h3>Can you move between the Palm and the mainland?</h3>
        <p>
          Yes. We plan the trip around traffic on the trunk road and the exit onto Sheikh Zayed Road.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="jum-services" tone="neutral" title="What services do we provide in Jumeirah?">
        <h3>Villa and Apartment Moving</h3>
        <p>
          We handle villa and apartment relocations in Jumeirah, including furniture protection,
          packing, loading and transport. Explore our{" "}
          <Link href="/home-movers-and-packers-in-dubai/">
            <strong>home moving services in Dubai</strong>
          </Link>{" "}
          for residential moves.
        </p>
        <h3>Packing and Unpacking</h3>
        <p>
          Our team packs household items room by room, using suitable materials for fragile
          belongings, artwork and valuable items. Learn more about our{" "}
          <Link href="/packing-and-unpacking-services-in-dubai/">
            <strong>packing and unpacking services in Dubai</strong>
          </Link>
          .
        </p>
        <h3>Furniture Dismantling and Assembly</h3>
        <p>
          We dismantle and reassemble beds, wardrobes, large tables and other furniture when needed.
          See our{" "}
          <Link href="/furniture-movers-in-dubai/">
            <strong>furniture moving services in Dubai</strong>
          </Link>{" "}
          for more details.
        </p>
        <h3>Art and Antique Handling</h3>
        <p>
          Artwork, antiques and delicate decorative pieces need careful wrapping and secure placement
          during transport. We use suitable protection based on each item’s size and handling needs.
        </p>
        <h3>Storage</h3>
        <p>
          If your new property is not ready, furniture and other belongings may need temporary or
          longer-term storage. Explore our{" "}
          <Link href="/storage-solutions-in-dubai/">
            <strong>storage solutions in Dubai</strong>
          </Link>{" "}
          for available options and rates.
        </p>
        <h3>Office and Clinic Moves in Converted Villas</h3>
        <p>
          Some Jumeirah villas operate as clinics, salons, studios and offices. We help relocate office
          furniture, equipment and supplies, with planning based on property access and the items being
          moved. See our{" "}
          <Link href="/office-movers-in-dubai/">
            <strong>office relocation services in Dubai</strong>
          </Link>
          .
        </p>
        <h3>Same-day moves</h3>
        <p>If access and crew are available. Call before 10 am.</p>
      </ArticleSection>

      <ArticleSection
        id="jum-clinic"
        title="How do you move a clinic, salon or office in a Jumeirah villa?"
        banner={
          <Banner
            src={`${IMG}/jumeirah-villa-street-moving-truck.webp`}
            alt="Moving truck on a Jumeirah villa street with mature trees"
          />
        }
      >
        <p>
          Many Jumeirah villas are used commercially. That means medical equipment, salon chairs,
          studio kit, filing systems and client records alongside ordinary furniture.
        </p>
        <h3>What do we move?</h3>
        <p>
          Treatment chairs and beds, reception desks, waiting-room furniture, storage cabinets,
          computers, printers, display units and stock.
        </p>
        <h3>How do we handle equipment and records?</h3>
        <p>
          Medical and beauty equipment is disconnected by your technician or supplier. We pack and
          move it. Client records are boxed, sealed, counted and delivered to your named contact. Ask
          us for a checklist.
        </p>
        <h3>When do we move?</h3>
        <p>Usually after hours or on a closed day, so you lose as little trading time as possible.</p>
        <h3>What about permits and licences?</h3>
        <p>
          If your location changes, licences and registrations need updating with the relevant
          authorities. Requirements depend on the type of business, so check with your licensing office
          or PRO.
        </p>
      </ArticleSection>

      <ArticleSection id="jum-cost" tone="neutral" title="How much do movers cost in Jumeirah?">
        <p>
          Price depends on the home size, access, volume, packing level and special items. A move in
          Jumeirah typically costs AED 700–12,000 or more, depending on home size, access, volume,
          packing level, and special items. A studio apartment typically costs AED 700–1,200
          transport-only, or AED 1,000–1,600 with full packing. A 1-bedroom typically costs AED
          1,000–1,800 transport-only, or AED 1,500–2,400 with full packing. A 2-bedroom typically
          costs AED 1,800–3,000 transport-only, or AED 2,500–3,800 with full packing. A 3-bedroom
          villa typically costs AED 3,500–6,000 before packing, or AED 4,000–5,500 with full packing.
          A 4-bedroom villa typically costs AED 5,000–7,000 before packing, or AED 5,500–7,500 with
          packing. A 5-bedroom villa typically costs AED 7,000–12,000 before packing, or AED
          7,500–12,000 with full packing. Artwork, antiques, and other valuables are quoted per item
          after a survey, not by a flat rate. The exact price is confirmed in writing after a survey,
          because Jumeirah homes are original in layout and contents, and access is tight.
        </p>
        <h3>Same-day moves</h3>
        <p>If access and crew are available. Call before 10 am.</p>
      </ArticleSection>

      <ArticleSection id="jum-quote" title="What should a Jumeirah quote say?">
        <p>
          Crew, truck size, gate and access details, time window, packing level, special items and any
          extra charges. Ask if Salik and parking are included. The quote should list crew size, truck
          size or number of trucks, time window, packing materials, dismantling, and waiting time. In
          Jumeirah it must also state the truck plan for narrow lanes and tight gates — whether a large
          truck can reach the gate, or a smaller truck and more trips are needed — and list mature
          trees and low overhead cables as an access check. It must list valuables separately:
          antiques, artwork, framed pieces, rugs and carpets, with an inventory where requested, and
          state whether pool equipment, outdoor kitchens, basement, roof, or mezzanine contents are
          included. For a move to or from Palm Jumeirah, it must also list the Palm permit and access
          plan, and the busiest times to avoid.
        </p>
        <h3>Why do Jumeirah quotes vary so much?</h3>
        <p>
          Because the houses vary so much. A quote without a survey ignores gate width, tree cover,
          heavy items and outdoor space. We survey first. Because Jumeirah homes are not standard, and
          a quote given without a survey is a guess. Three reasons, in order. First, access: a truck
          that cannot reach the gate, or a street too narrow for a large truck, adds trips and time
          that were never in the quote. Second, volume: heavy items are underestimated when the survey
          never walks through the garden, basement, roof, or mezzanine, or never counts pool equipment
          and outdoor kitchens. Third, valuables: antiques, art, and rugs need wrapping, inventory, and
          sometimes crating, and that time is either priced or skipped — and skipping it risks damage
          that costs far more than the packing. Beach-road and weekend traffic, and Palm access delays,
          are a fourth reason a move that starts late loses hours.
        </p>
        <p>
          Home size and volume matter first, including gardens, outdoor items, pool equipment, and any
          basement, roof, or mezzanine contents. Access matters next: narrow lanes, tight gates, high
          walls, mature trees, and low overhead cables set the truck size and the number of trips.
          Valuables matter: antiques, artwork, and rugs take more time and materials, and are quoted
          per item. Weather matters on the beachside: salt air and humidity, heavy rain, sand, and wind
          affect packing and protection, and a renovation move differs from a normal move because
          furniture may need storage and delivery back in stages. Storage in Dubai costs between AED
          150 and AED 3,800 per month, depending on unit size, location, and climate control, with the
          exact rate confirmed on request. Timing matters: beach-road and weekend traffic, and Palm
          Jumeirah’s busiest times, should be planned around, not discovered on the day.
        </p>
      </ArticleSection>

      <ArticleSection id="jum-renovation" tone="neutral" title="Can you store furniture while a Jumeirah villa is renovated?">
        <p>
          Yes, and it is one of the more common jobs in this area. Many Jumeirah villas are old enough
          that owners renovate rather than move, and the family needs somewhere to put furniture for
          two to six months.
        </p>
        <h3>How does a renovation move differ from a normal move?</h3>
        <p>
          Nothing needs unpacking at the far end, but everything has to be protected and recorded,
          because it will come back to a home that looks different. We pack by room, photograph each
          item, list it against a carton number and store it so you can ask for a specific item during
          the works. If your contractor needs the garden cleared or a room emptied first, we work to
          the contractor’s programme.
        </p>
        <h3>What if the works run late?</h3>
        <p>
          Storage is charged by time, so ask about the monthly rate and the terms for extending.
          Storage in Dubai costs between AED 150 and AED 3,800 per month, depending on unit size,
          location, and climate control. Ask us for your exact storage rate and the terms, and the
          notice needed to collect. We keep a record of what is stored so you can retrieve one item
          without emptying the lot.
        </p>
        <h3>Can you deliver back in stages?</h3>
        <p>
          Yes. Rooms finish at different times, so we return items room by room as the builder hands
          them over. That means bedrooms first, then the living areas, and the majlis or dining room
          last.
        </p>
      </ArticleSection>

      <ArticleSection id="jum-weather" title="How does weather affect a Jumeirah move?">
        <p>
          Coastal weather is mostly a summer and winter story. In summer, heat and humidity are the
          problem. In the cooler months, occasional rain and wind can affect loading.
        </p>
        <h3>What do we do in heavy rain?</h3>
        <p>
          Wet roads and standing water slow the whole day, and rain damages upholstery, mattresses and
          cardboard. We carry waterproof covers and stop loading if the weather makes it unsafe. If a
          storm is forecast on your date, tell us early and we may move the start time or the day.
        </p>
        <h3>What about humidity and mould?</h3>
        <p>
          Furniture that has sat in a humid room can hold moisture. Wood should be dry before it is
          wrapped, and mattresses and upholstery should be dry before storage. If they are not, we
          advise on airing them first. Wrapping damp items in plastic invites mould, and we would
          rather delay than store a damp sofa.
        </p>
        <h3>What about sand and wind on the beachside?</h3>
        <p>
          Wind carries fine sand, which gets into open boxes. We keep boxes closed until the moment
          they go on the truck and wrap furniture before it leaves the house.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="jum-process" tone="neutral" title="What is our step-by-step process in Jumeirah?">
        <ol className="step-list">
          <li>
            <strong>You call with the details.</strong> Area, home type, date and special items.
          </li>
          <li>
            <strong>Survey.</strong> Video or visit, with gate and access photos.
          </li>
          <li>
            <strong>Written quote.</strong> Crew, truck, time, services.
          </li>
          <li>
            <strong>Access and permits.</strong> You confirm building or community rules.
          </li>
          <li>
            <strong>Packing.</strong> Room by room, with special wrapping for valuables.
          </li>
          <li>
            <strong>Loading.</strong> Heavy items first, careful handling for fragile ones.
          </li>
          <li>
            <strong>Transport.</strong> Route and timing planned.
          </li>
          <li>
            <strong>Unloading and assembly.</strong> Furniture placed as you direct.
          </li>
          <li>
            <strong>Handover.</strong> Walk-through and sign-off.
          </li>
        </ol>
      </ArticleSection>

      <ArticleSection
        id="jum-prepare"
        title="How should you prepare for a Jumeirah move?"
        banner={
          <Banner
            src={`${IMG}/preparing-for-jumeirah-move.webp`}
            alt="Movers transporting wrapped furniture and equipment in Jumeirah"
          />
        }
      >
        <h3>Four weeks out</h3>
        <p>
          Book the mover and confirm the date. Decide what goes to storage. Ask your landlord about
          move-out rules. Request permits if you are moving to or from the Palm or a managed
          community.
        </p>
        <h3>Two weeks out</h3>
        <p>
          Photograph valuable items. Contact your insurer about transit cover. Start packing rooms you
          rarely use.
        </p>
        <h3>One week out</h3>
        <p>
          Label boxes by room. Arrange utilities and internet at the new home. Confirm access at both
          ends.
        </p>
        <h3>The day before</h3>
        <p>
          Empty and defrost the fridge. Remove wall art or let us do it. Keep valuables and documents
          with you.
        </p>
        <h3>On the day</h3>
        <p>
          Meet the crew, walk them through the house and point out fragile pieces. Check gate access
          and street parking.
        </p>
        <p>
          If you are moving overseas, we can prepare items for shipping with an international partner,
          and store what you are not ready to send.
        </p>
      </ArticleSection>

      <ArticleSection id="jum-problems" tone="neutral" title="What are the most common Jumeirah moving problems?">
        <h3>The truck cannot reach the gate</h3>
        <p>Send photos of the gate and street. Choose a smaller truck if needed.</p>
        <h3>The quote was given without a survey</h3>
        <p>Ask for a survey before the price is agreed.</p>
        <h3>Heavy items are underestimated</h3>
        <p>Tell us about antiques, stone items and large mirrors.</p>
        <h3>Beach-road traffic</h3>
        <p>Start early and avoid weekend afternoons.</p>
        <h3>Palm access delays</h3>
        <p>Apply for the permit early and give us the frond and villa number.</p>
      </ArticleSection>

      <ArticleSection id="jum-why" title="Why choose Al Hatem Movers in Jumeirah?">
        <ul>
          <li>
            <strong>We survey villas before we quote.</strong> Gate, street and heavy items are part of
            the plan.
          </li>
          <li>
            <strong>Careful handling for valuables.</strong> Wrapping, crating and inventory.
          </li>
          <li>
            <strong>Palm Jumeirah experience with permits and access.</strong>
          </li>
          <li>
            <strong>Packing, dismantling and moving in one service.</strong>
          </li>
          <li>
            <strong>Licence and insurance:</strong> trade licence details available on request;
            licensed and insured, with insurance options discussed during your quotation.
          </li>
          <li>
            <strong>Reviews:</strong> rated 5.0 out of 5 on Google from {REVIEW_COUNT} reviews, with customers
            praising careful handling and on-time service.
          </li>
        </ul>
        <Callout>
          <p>
            <strong>Note:</strong> Book your Jumeirah move. Call or WhatsApp +971 56 626 4074.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="jum-out" tone="neutral" title="Moving out of Jumeirah to another area">
        <p>
          Jumeirah residents move to Dubai Hills, Arabian Ranches, Emirates Hills or Abu Dhabi. Some
          relocate abroad. We plan the route, the timing and the requirements at each end.
        </p>
        <p>
          If you are moving overseas, we can prepare items for shipping with an international partner,
          and store what you are not ready to send.
        </p>
      </ArticleSection>
    </LocationLayout>
  );
}
