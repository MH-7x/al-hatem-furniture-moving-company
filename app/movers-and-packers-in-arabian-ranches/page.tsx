import Link from "next/link";
import { ArticleSection, ContactStrip } from "@/components/Article";
import { Callout, ChipLink } from "@/components/Cards";
import { Banner, LocationLayout } from "@/components/LocationLayout";
import { buildMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const PATH = "/movers-and-packers-in-arabian-ranches/";
const TITLE = "Movers and Packers in Arabian Ranches | near Moving Service";
const DESCRIPTION =
  "Need movers and packers in Arabian Ranches? Get villa relocation, furniture packing and inter-emirate moving with careful handling.";
const IMG = "/images/movers-and-packers-in-arabian-ranches";
const IMAGE = `${IMG}/movers-packers-arabian-ranches.webp`;
const IMAGE_ALT = "Movers and packers in Arabian Ranches loading wrapped furniture into a moving truck";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: IMAGE,
  imageAlt: IMAGE_ALT,
});

const faqs = [
  [
    "How much does a move in Arabian Ranches cost?",
    "A move in Arabian Ranches typically costs AED 1,500–15,000 or more. A 2-bedroom villa or townhouse typically costs AED 1,500–2,500, a 3-bedroom villa AED 3,500–6,000 before packing, a 4-bedroom villa AED 5,000–7,000 before packing, and a 5-bedroom villa AED 7,000–12,000 before packing. Larger villas can cost AED 12,000–15,000 or more. The exact price is confirmed in writing after a survey, because villa size, garden, garage, distance, and access change it.",
  ],
  ["How Much Notice Do You Need?", "One to two weeks. Call +971 56 626 4074 to check availability."],
  [
    "Do I Need A Permit To Move In?",
    "Communities usually require a move permit. Check with community management.",
  ],
  ["Can You Move Me On A Weekend?", "Yes, if the community allows it."],
  ["Can You Dismantle A Trampoline Or Shed?", "Yes."],
  ["Do You Provide Packing Boxes?", "Yes."],
  ["Is Distance Charged?", "Yes, and it should be shown in the quote."],
  ["Do You Offer Storage?", "Yes."],
  [
    "Is My Move Insured?",
    "Al Hatem Movers is licensed and insured, and insurance options are discussed during your quotation. Ask for the policy in writing.",
  ],
  ["Can You Deliver Furniture To A New Home?", "Yes."],
  [
    "How Do I Request A Quote?",
    "Call or WhatsApp +971 56 626 4074 with your community, bedrooms and date.",
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
    ["Movers and Packers in Arabian Ranches", PATH],
  ],
  service: {
    name: "Movers and Packers in Arabian Ranches",
    serviceType: "Moving and packing services",
    description:
      "Need movers and packers in Arabian Ranches? Get villa relocation, furniture packing and inter-emirate moving with careful handling and planned transport.",
    areaServed: {
      "@type": "Place",
      name: "Arabian Ranches, Dubai",
      containedInPlace: { "@type": "City", name: "Dubai" },
    },
  },
  faqs,
});

export default function ArabianRanchesPage() {
  return (
    <LocationLayout
      schema={schema}
      crumbLabel="Movers and Packers in Arabian Ranches"
      title="Movers and Packers in Arabian Ranches"
      heroImage={{ src: IMAGE, alt: IMAGE_ALT, ratio: "1:1" }}
      intro={
        <>
          <p>
            Arabian Ranches is a villa suburb on the outskirts of Dubai, a longer drive from the centre
            than most areas movers work in. Homes are large, gardens are real, communities are gated,
            and a move usually means a full truck or two. Al Hatem Furniture Moving Company plans
            Arabian Ranches moves around distance, access and space. Call +971 56 626 4074 with your
            community and villa type for a written quote.
          </p>
          <Callout>
            <p>
              <strong>Note:</strong> Moving in Arabian Ranches? Call or WhatsApp +971 56 626 4074 with
              your community, bedrooms and date. We reply with a plan and a quote.
            </p>
          </Callout>
        </>
      }
      faqId="ranches-faq-title"
      faqTitle="Frequently asked questions about movers and packers in Arabian Ranches"
      faqs={faqs}
      nearby={
        <>
          <ChipLink href="/movers-and-packers-in-dubai-hills-estate/">Movers in Dubai Hills</ChipLink>
          <ChipLink href="/movers-and-packers-in-jvc/">Movers in JVC</ChipLink>
          <ChipLink href="/movers-and-packers-in-al-barsha/">Movers in Al Barsha</ChipLink>
          <ChipLink href="/areas-we-serve/">All Areas We Serve</ChipLink>
        </>
      }
      closing={
        <p>
          <strong>Note:</strong> Get your Arabian Ranches quote. Call or WhatsApp +971 56 626 4074.
        </p>
      }
    >
      <ArticleSection
        id="ranches-different"
        title="Why is moving in Arabian Ranches different from moving in central Dubai?"
      >
        <p>
          Three reasons: distance, access and size. Each one changes the price and the plan, and rival
          pages seldom mention them.
        </p>
        <h3>How does the distance change the move?</h3>
        <p>
          Arabian Ranches is on the edge of the city, connected by Emirates Road and Dubai-Al Ain Road.
          A truck leaving central Dubai spends time on the road each way, and that time is billed or
          built into the crew’s day. A move from Jumeirah to Arabian Ranches takes a longer road trip
          than one within JVC. We plan the departure so that the truck reaches the community after the
          morning rush and can start loading early.
        </p>
        <h3>How does access work?</h3>
        <p>
          Arabian Ranches communities are gated. Trucks and crews enter through controlled gates, and
          security may ask for permit details. Community management sets the rules, and they can change.
          Check the current requirements with Emaar Community Management or your community office and
          send us the details.
        </p>
        <h3>Why are the homes so large?</h3>
        <p>
          Villas here range from three-bedroom homes to large five- and six-bedroom houses. They come
          with garages, maid’s rooms, gardens, sometimes a pool, and storage. The same family that fits
          into a two-bedroom apartment needs four times the space here, and their belongings often fill
          it.
        </p>
      </ArticleSection>

      <ContactStrip lead="Speak With Our Packing Specialists" />

      <ArticleSection
        id="ranches-communities"
        tone="neutral"
        title="Which Arabian Ranches communities do we cover?"
        banner={
          <Banner
            src={`${IMG}/arabian-ranches-villa-homes.webp`}
            alt="Arabian Ranches villas and landscaped residential streets"
          />
        }
      >
        <p>Arabian Ranches is several communities, each with a different type of home.</p>
        <p>
          Give us your community name, cluster and villa number. That lets us plan the route and check
          gate access.
        </p>
      </ArticleSection>

      <ArticleSection id="ranches-villa" title="What does an Arabian Ranches villa move include?">
        <h3>How many rooms and zones do we count?</h3>
        <p>
          Bedrooms, living and dining rooms, kitchen, maid’s room, garage or storeroom, garden, terrace
          and pool area. Each zone is a separate estimate. Garages and gardens are often the largest
          unknown.
        </p>
        <h3>How do we plan the crew and truck?</h3>
        <p>
          After a video survey we list large items and note how many are dismantled. A four-bedroom
          villa usually needs a larger crew and a large truck or two trucks. For distant moves we prefer
          a bigger crew so the truck spends less time loading and more time on the road.
        </p>
        <h3>What about the garden and outdoor items?</h3>
        <p>
          Garden furniture, planters, BBQs, play sets, trampolines, sheds and gazebos. Many need
          dismantling. Plants are best moved in a separate vehicle and watered before loading. If you
          have a pool, we do not move fixed equipment, but we do move loose pool items.
        </p>
        <h3>What about garage contents?</h3>
        <p>
          Tools, bikes, sports gear, seasonal items and storage boxes. These add volume that is easy to
          forget. List them at the survey.
        </p>
        <h3>What about maid’s room contents?</h3>
        <p>
          Household items, boxes and sometimes personal belongings of the staff. Agree beforehand who
          packs and moves what.
        </p>
      </ArticleSection>

      <ArticleSection id="ranches-ar3" tone="neutral" title="How do you move into a new Arabian Ranches 3 home?">
        <p>
          Arabian Ranches 3 has many recently handed-over homes. The steps are similar to any new-build
          move.
        </p>
        <h3>Should you snag before you move in?</h3>
        <p>
          Yes. Snagging records defects such as paint marks, loose fittings and damaged floors. It is
          much harder to prove a defect once furniture is in place. Ask for snagging first, then book
          the mover.
        </p>
        <h3>What if the home is not ready?</h3>
        <p>
          Dust, works and missing fittings cause problems for furniture. We can store your items for a
          short time and deliver when the home is ready. Storage in Dubai costs between AED 150 and AED
          3,800 per month, depending on unit size, location, and climate control. Ask us for your exact
          storage rate and the terms.
        </p>
        <h3>Who handles curtains and lights?</h3>
        <p>
          You and your contractors, not the movers. We move and assemble furniture. Book installers
          before the furniture arrives.
        </p>
        <h3>What should be protected?</h3>
        <p>New floors and walls. We use runners and door guards and carry rather than drag.</p>
      </ArticleSection>

      <ArticleSection id="ranches-truck" title="How do you get a truck to Arabian Ranches?">
        <p>
          Arabian Ranches is reached from Dubai-Al Ain Road and Emirates Road, with links to Al Qudra
          Road and Sheikh Mohammed Bin Zayed Road. Traffic on these roads is heavy during commute peaks.
        </p>
        <h3>What are the truck restrictions?</h3>
        <p>
          Heavy vehicles have timed restrictions on parts of Dubai’s road network, including on Emirates
          Road in specific directions and time windows. The rules change from time to time, and they
          depend on the vehicle class. We check the current schedule when we plan the route.
        </p>
        <h3>When should the truck arrive?</h3>
        <p>
          Mid-morning on a weekday is usually good, after the rush toward the city. Weekends can be busy
          near community entrances. Aim to be at the gate by the time the permitted moving hours start.
        </p>
        <h3>What if the move goes past the allowed hours?</h3>
        <p>
          We plan the crew size to finish within the window. If a move looks likely to run late, we tell
          you at the quote stage and add crew.
        </p>
        <Callout>
          <p>
            <strong>Note:</strong> Long-distance villa move to Arabian Ranches? Call +971 56 626 4074
            and we plan the route, crew and timing before quoting.
          </p>
        </Callout>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="ranches-services" tone="neutral" title="What services do we provide in Arabian Ranches?">
        <h3>Villa Moving</h3>
        <p>
          We handle villa relocations, from three-bedroom homes to large family properties. Our{" "}
          <Link href="/villa-movers-in-dubai/">
            <strong>villa moving services in Dubai</strong>
          </Link>{" "}
          include furniture protection, loading and transportation.
        </p>
        <h3>Packing and Unpacking</h3>
        <p>
          We pack household belongings room by room or focus on selected areas. Explore our{" "}
          <Link href="/packing-and-unpacking-services-in-dubai/">
            <strong>packing and unpacking services in Dubai</strong>
          </Link>{" "}
          for flexible packing support.
        </p>
        <h3>Furniture Dismantling and Assembly</h3>
        <p>
          Beds, wardrobes, dining tables and outdoor furniture may need dismantling before transport.
          Our{" "}
          <Link href="/furniture-movers-in-dubai/">
            <strong>furniture movers in Dubai</strong>
          </Link>{" "}
          can help with handling and moving larger items.
        </p>
        <h3>New-Home Delivery and Set-Up</h3>
        <p>
          Bought furniture for your new home? We can help coordinate collection, delivery, assembly and
          placement. See our{" "}
          <Link href="/furniture-movers-in-dubai/">
            <strong>furniture moving services in Dubai</strong>
          </Link>{" "}
          for related moving support.
        </p>
        <h3>Storage</h3>
        <p>
          Storage can help when your new villa is not ready, renovations are underway or you are
          downsizing. Visit our{" "}
          <Link href="/storage-solutions-in-dubai/">
            <strong>storage solutions in Dubai</strong>
          </Link>{" "}
          for available options and rates.
        </p>
        <h3>Long-Distance and Inter-Emirate Moves</h3>
        <p>
          We help plan moves between Dubai and other emirates, including Abu Dhabi, Sharjah, Ajman and
          Ras Al Khaimah. Our{" "}
          <Link href="/">
            <strong>inter-emirate moving services</strong>
          </Link>{" "}
          can help coordinate collection, transport and delivery.
        </p>
      </ArticleSection>

      <ArticleSection id="ranches-cost" title="How much do movers cost in Arabian Ranches?">
        <p>Price depends on villa size, volume, distance, packing level and access.</p>
        <p>
          A move in Arabian Ranches typically costs AED 1,500–15,000 or more, depending on villa size,
          volume, distance, packing level, and access. A 2-bedroom villa or townhouse typically costs
          AED 1,500–2,500. A 3-bedroom villa typically costs AED 3,500–6,000 before packing, or AED
          4,000–5,500 with full packing. A 4-bedroom villa typically costs AED 5,000–7,000 before
          packing, or AED 5,500–7,500 with packing. A 5-bedroom villa typically costs AED 7,000–12,000
          before packing, or AED 7,500–12,000 with full packing. Larger villas, 6 bedrooms and above, can
          cost AED 12,000–15,000 or more. The exact price is confirmed in writing after a survey, because
          Arabian Ranches homes are large and the distance of the move changes the time on the road.
        </p>
        <h3>What should the quote say?</h3>
        <p>
          Crew, truck count, time window, packing materials, dismantling and any distance or waiting
          charge. Ask about Salik and fuel too. The quote should list crew size, truck size or number of
          trucks, time window, packing materials, dismantling, and waiting time. In Arabian Ranches it
          must also list the distance — a move within Arabian Ranches costs less than one from Jumeirah,
          which costs less than one from Sharjah, because the truck spends more time on the road — and
          the access plan: gated community entry, truck restrictions, and the allowed hours for the move.
          It must also count the garden, garage, and maid’s room separately, and list heavy items that
          need a separate plan: gym equipment, home cinema and audio, and billiard tables, plus any large
          item that will not go through the door.
        </p>
        <h3>Why does distance affect the price so much?</h3>
        <p>
          Because the truck spends more time on the road. A move within Arabian Ranches costs less than
          one from Jumeirah, which costs less than one from Sharjah. A quote that ignores the distance is
          an estimate that will change. Because most of the total is still crew time, and distance adds
          crew time in both directions. A villa that was estimated as a standard home, without its
          garden, garage, and maid’s room counted, is a second reason the price moves — those zones hold
          as much as another room. A third reason is the gate holding up the truck, or the move running
          past allowed hours, which adds waiting time that was never in the quote. A written quote that
          lists distance, zones, heavy items, access, and allowed hours does not change for those
          reasons.
        </p>
        <p>
          Villa size and volume matter first, and in Arabian Ranches the garden, garage, and maid’s room
          are part of the volume, not extras. Distance matters next: the longer the drive, the more crew
          and truck time it takes. Access matters: gated entry, truck restrictions, and allowed hours set
          the start time and whether the move finishes in one day. Heavy items matter: gym equipment,
          home cinema, and billiard tables need dismantling and extra crew. Timing matters too, and this
          page already states it: weekday moves usually cost less than weekends, mid-month is cheaper
          than month-end, and summer mornings are cheaper in crew fatigue but slower in heat — a
          different date can save money, and that should be told before booking, not after. For a new
          Arabian Ranches 3 home, snagging must be finished before delivery, or furniture has to be moved
          again.
        </p>
      </ArticleSection>

      <ArticleSection
        id="ranches-school"
        tone="neutral"
        title="How do school runs and commuting affect an Arabian Ranches move?"
        banner={
          <Banner
            src={`${IMG}/arabian-ranches-moving-route.webp`}
            alt="Moving truck on the route through Arabian Ranches villa streets"
          />
        }
      >
        <p>
          Many Arabian Ranches families have school-age children and long commutes, and both shape when
          they move.
        </p>
        <h3>When do families usually move?</h3>
        <p>
          Before or after the school year, especially in the summer. Book earlier if your move is in June
          to August.
        </p>
        <h3>How do you protect the school week?</h3>
        <p>
          Move at the end of the week, and have the children’s rooms ready first. If possible, complete
          the move before Monday so that the school routine is not disturbed.
        </p>
        <h3>How does the commute affect a move day?</h3>
        <p>
          Movers arrive after peak traffic, and you avoid loading in the rush hour. If you are moving
          from another emirate, plan for the trip time.
        </p>
      </ArticleSection>

      <ArticleSection id="ranches-heavy" title="How do you move heavy items from a large villa?">
        <p>
          Big villas hold big items. A four-bedroom home can contain a large American-style fridge, a home
          gym, a billiard table, a piano, a home cinema, a safe and several oversized wardrobes. Each of
          these needs a plan before moving day.
        </p>
        <h3>Which items need a separate plan?</h3>
        <p>
          Anything over the weight two people can carry safely, and anything that will not fit through a
          door in one piece. Pianos, safes, billiard tables, gym machines and stone or marble tables all
          fall into this group. Tell us what you have at the survey, with photos and rough weights or
          model numbers.
        </p>
        <h3>How do we handle gym equipment?</h3>
        <p>
          Multi-station gyms and treadmills are dismantled where possible. Weights are packed in small,
          strong boxes so no one carries a loose plate down the stairs. We keep the assembly instructions
          or take photos of the setup before we take it apart.
        </p>
        <h3>How do we handle home cinema and audio?</h3>
        <p>
          Screens stay upright and are never laid flat. Speakers are wrapped separately. We label the
          cables by device and socket. Ceiling speakers and wall-mounted screens need an installer, and
          that should be booked for the new home before the move.
        </p>
        <h3>How do we handle a billiard table?</h3>
        <p>
          Billiard tables are heavy stone-bed items that need proper dismantling and re-levelling. They
          are a specialist job, priced separately, and we recommend booking a fitter for the new home.
        </p>
        <h3>What if a large item will not go through the door?</h3>
        <p>
          Some items were placed in the villa before the walls were finished, or a piece was assembled in
          the room where it stands. We measure the door and the route. Where the item can be dismantled,
          we do so. Where it cannot, we tell you before the day rather than on it.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection
        id="ranches-control"
        tone="neutral"
        title="How do you keep the cost of a long-distance villa move under control?"
      >
        <p>
          Distance adds cost, but most of the total is still crew time, so a few decisions make a real
          difference.
        </p>
        <h3>Which decisions matter most?</h3>
        <p>
          Declutter first. Every box you do not need to move costs crew time, truck space and fuel. Sell
          or donate furniture that will not fit the new place. Book a date and slot that avoids peak
          traffic, because time on the road is billed one way or another. Choose one large truck and a
          larger crew over several trips if the numbers support it.
        </p>
        <h3>Is it cheaper to pack yourself?</h3>
        <p>
          Often yes for low-risk rooms. Clothes, books and toys are simple to pack. Ask the crew to
          handle the kitchen, glass, art and electronics. Compare a full-pack quote with a partial-pack
          quote and see what your own time is worth.
        </p>
        <h3>How does timing change the price?</h3>
        <p>
          Weekday moves usually cost less than weekends because crews and trucks are less in demand.
          Mid-month is cheaper than month-end. Summer mornings are cheaper in terms of crew fatigue and
          slower in terms of heat. We tell you when a different date would save money.
        </p>
        <h3>Do storage and delivery help?</h3>
        <p>
          If your new villa is not ready, holding furniture in storage and delivering once is cheaper
          than making two trips or paying the crew to wait. Storage in Dubai costs between AED 150 and
          AED 3,800 per month, depending on unit size, location, and climate control. Ask us for your
          exact storage rate and the terms.
        </p>
      </ArticleSection>

      <ArticleSection id="ranches-storage" title="Can you store furniture while you are away for long periods?">
        <p>
          Some Arabian Ranches families travel for the summer or take overseas postings of several
          months. Leaving a villa full of furniture is an option, but storage is safer for valuable
          pieces and useful when you are sub-letting or renovating.
        </p>
        <h3>What do we store?</h3>
        <p>
          Furniture, boxes, art, rugs and household goods. We list and label each item so that you can
          ask for one thing without emptying the unit.
        </p>
        <h3>How do we prepare items for storage?</h3>
        <p>
          Wood is dry, fabric is clean, mattresses are covered and metal is wiped. Wrapped items are
          stacked so that nothing crushes what is below. Ask us to explain how your items will be stored
          and how access works.
        </p>
        <h3>Can you deliver back to the villa or a new home?</h3>
        <p>Yes. Call with a few days’ notice and we deliver, assemble and place items.</p>
      </ArticleSection>

      <ArticleSection id="ranches-process" tone="neutral" title="What is our step-by-step process in Arabian Ranches?">
        <ol className="step-list">
          <li>
            <strong>You call with the details.</strong> Community, bedrooms, date and large items.
          </li>
          <li>
            <strong>Survey.</strong> Video for most villas.
          </li>
          <li>
            <strong>Written quote.</strong> Crew, trucks, time, distance.
          </li>
          <li>
            <strong>Access and permit.</strong> You confirm community rules; we plan around them.
          </li>
          <li>
            <strong>Packing.</strong> Room by room, labelled.
          </li>
          <li>
            <strong>Loading.</strong> Heavy items first, floors and doors protected.
          </li>
          <li>
            <strong>Transport.</strong> Route planned around traffic and truck restrictions.
          </li>
          <li>
            <strong>Unloading and assembly.</strong> Rooms set up in priority order.
          </li>
          <li>
            <strong>Handover.</strong> Walk-through and sign-off.
          </li>
        </ol>
      </ArticleSection>

      <ArticleSection
        id="ranches-prepare"
        title="How do you prepare for an Arabian Ranches move?"
        banner={
          <Banner
            src={`${IMG}/planning-arabian-ranches-move.webp`}
            alt="Movers wrapping furniture and preparing boxes for an Arabian Ranches move"
          />
        }
      >
        <h3>Four weeks out</h3>
        <p>Book the mover and confirm the date. Ask your landlord for move-out rules. Check community requirements.</p>
        <h3>Two weeks out</h3>
        <p>Request permits and access. Arrange utilities. Start packing non-essential rooms.</p>
        <h3>One week out</h3>
        <p>Label boxes. Confirm access with us. Organise school and address changes.</p>
        <h3>The day before</h3>
        <p>Defrost the fridge. Pack a first-night bag. Keep documents with you.</p>
        <h3>On the day</h3>
        <p>Be present at the new home. Direct the crew room by room.</p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="ranches-problems" tone="neutral" title="What are the most common Arabian Ranches moving problems?">
        <h3>The distance was not in the quote</h3>
        <p>Ask for the distance and time to be listed.</p>
        <h3>The villa was larger than the estimate</h3>
        <p>Ask for a survey.</p>
        <h3>The gate held up the truck</h3>
        <p>Confirm access details and permit early.</p>
        <h3>The move ran past allowed hours</h3>
        <p>Add crew and start early.</p>
        <h3>Snagging was not done</h3>
        <p>Snag first, then move.</p>
      </ArticleSection>

      <ArticleSection id="ranches-why" title="Why choose Al Hatem Movers in Arabian Ranches?">
        <ul>
          <li>
            <strong>We plan for distance, gates and villa size.</strong>
          </li>
          <li>
            <strong>Survey before quote for larger moves.</strong>
          </li>
          <li>
            <strong>Packing, dismantling and moving in one service.</strong>
          </li>
          <li>
            <strong>Written quotes with a breakdown.</strong>
          </li>
          <li>
            <strong>Licence and insurance:</strong> trade licence details available on request;
            licensed and insured, with insurance options discussed during your quotation.
          </li>
          <li>
            <strong>Reviews:</strong> rated 5.0 out of 5 on Google from 25 reviews, with customers
            praising careful handling and on-time service.
          </li>
        </ul>
        <Callout>
          <p>
            <strong>Note:</strong> Book your Arabian Ranches move. Call or WhatsApp +971 56 626 4074.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="ranches-out" tone="neutral" title="Moving out of Arabian Ranches">
        <p>
          Families move to Dubai Hills, <Link href="/movers-and-packers-in-jumeirah/">Jumeirah</Link>,{" "}
          <Link href="/movers-and-packers-in-abu-dhabi/">Abu Dhabi</Link> or overseas. On move-out,
          return access cards to your landlord and settle service charges. If you are moving abroad, we
          can prepare furniture for shipping with a partner and store what you are not ready to send.
        </p>
      </ArticleSection>
    </LocationLayout>
  );
}
