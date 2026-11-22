import { REVIEW_COUNT } from "@/lib/constants";
import Link from "next/link";
import { ArticleSection, ContactStrip } from "@/components/Article";
import { Callout, ChipLink } from "@/components/Cards";
import { Banner, LocationLayout } from "@/components/LocationLayout";
import { buildMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const PATH = "/movers-and-packers-in-dubai-hills-estate/";
const TITLE = "Movers and Packers in Dubai Hills Estate | Moving Services";
const DESCRIPTION =
  "Looking for movers and packers in Dubai Hills Estate? Get careful villa and apartment relocation, furniture protection and expert packing.";
const IMG = "/images/movers-and-packers-in-dubai-hills-estate";
const IMAGE = `${IMG}/movers-packers-dubai-hills-estate.webp`;
const IMAGE_ALT =
  "Movers and packers in Dubai Hills Estate loading wrapped furniture beside a moving truck";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: IMAGE,
  imageAlt: IMAGE_ALT,
});

const faqs = [
  [
    "How much does a move in Dubai Hills cost?",
    "A move in Dubai Hills Estate typically costs AED 700–12,000 or more. Apartments typically cost AED 700–4,500 transport-only depending on size, a 2-bedroom townhouse typically costs AED 1,500–2,500, a 3-bedroom villa AED 3,500–6,000 before packing, a 4-bedroom villa AED 5,000–7,000 before packing, and a 5-bedroom villa AED 7,000–12,000 before packing. The exact price is confirmed in writing after a survey and after the permit is confirmed.",
  ],
  [
    "How Much Notice Do You Need?",
    "One to two weeks. Apply for the permit as soon as your date is set. Call +971 56 626 4074.",
  ],
  [
    "Do I Need A Permit To Move Into Dubai Hills?",
    "Yes. Access is denied without a move-in permit.",
  ],
  [
    "How Long Before The Move Should I Apply?",
    "At least one business day before, and earlier if you can.",
  ],
  [
    "Why Was My Permit Refused?",
    "A common reason is unpaid service fees on the property. Ask your landlord to clear the account.",
  ],
  [
    "Do I Need Access Cards For Vehicles?",
    "Residents receive vehicle access cards through the community. Check the current fee and rules.",
  ],
  ["Can You Move Me On A Weekend?", "Yes, if your permit and building rules allow it."],
  ["Can You Deliver And Assemble New Furniture?", "Yes."],
  ["Do You Offer Storage?", "Yes."],
  [
    "Is My Move Insured?",
    "Al Hatem Movers is licensed and insured, and insurance options are discussed during your quotation. Ask for the policy in writing.",
  ],
  ["Can You Move Me To Another Emirate?", "Yes."],
  [
    "How Do I Request A Quote?",
    "Call or WhatsApp +971 56 626 4074 with your community, home type and date.",
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
    ["Movers and Packers in Dubai Hills Estate", PATH],
  ],
  service: {
    name: "Movers and Packers in Dubai Hills Estate",
    serviceType: "Moving and packing services",
    description:
      "Looking for movers and packers in Dubai Hills Estate? Get careful villa and apartment relocation, furniture protection and professional packing services.",
    areaServed: {
      "@type": "Place",
      name: "Dubai Hills Estate, Dubai",
      containedInPlace: { "@type": "City", name: "Dubai" },
    },
  },
  faqs,
});

export default function DubaiHillsPage() {
  return (
    <LocationLayout
      schema={schema}
      crumbLabel="Movers and Packers in Dubai Hills Estate"
      title="Movers and Packers in Dubai Hills Estate"
      heroImage={{ src: IMAGE, alt: IMAGE_ALT, ratio: "8:3" }}
      intro={
        <>
          <p>
            Dubai Hills Estate is a managed master community with controlled gates, a formal permit
            process and a mix of villas, townhouses and apartments, many of them newly handed over.
            Moving here goes smoothly when the permit and access are sorted before the truck leaves the
            yard. Al Hatem Furniture Moving Company plans Dubai Hills moves around that process. Call
            +971 56 626 4074 for a written quote.
          </p>
          <Callout>
            <p>
              <strong>Note:</strong> Moving in Dubai Hills? Call or WhatsApp +971 56 626 4074 with your
              community, home type and date. We reply with a plan and a quote.
            </p>
          </Callout>
        </>
      }
      faqId="hills-faq-title"
      reviews
      faqTitle="Frequently asked questions about Movers and Packers in Dubai Hills Estate"
      faqs={faqs}
      nearby={
        <>
          <ChipLink href="/movers-and-packers-in-al-barsha/">Movers in Al Barsha</ChipLink>
          <ChipLink href="/movers-and-packers-in-arabian-ranches/">Movers in Arabian Ranches</ChipLink>
          <ChipLink href="/movers-and-packers-in-business-bay/">Movers in Business Bay</ChipLink>
          <ChipLink href="/movers-and-packers-in-downtown-dubai/">Movers in Downtown Dubai</ChipLink>
          <ChipLink href="/areas-we-serve/">All Areas We Serve</ChipLink>
        </>
      }
      closing={
        <p>
          <strong>Note:</strong> Get your Dubai Hills quote today. Call or WhatsApp +971 56 626 4074.
        </p>
      }
    >
      <ArticleSection id="hills-need" title="What do you need to move into or out of Dubai Hills Estate?">
        <h3>What does the permit process involve?</h3>
        <p>
          Applications are submitted online through the community’s resident channels. The guidance asks
          for applications at least one business day before the move, so do not leave it for the morning
          of the move. Tenants generally provide an Ejari copy, Emirates ID (front and back) and a
          passport copy with the visa page. Homeowners log in with their credentials and do not need to
          upload the same documents.
        </p>
        <h3>What can block a tenant’s permit?</h3>
        <p>
          Outstanding service fees on the property. If the landlord has unpaid charges, the tenant cannot
          apply until they are settled. This is the most common reason for a late permit, and it is out
          of your control, so ask your landlord or agent to confirm the account is clear as soon as you
          sign the lease.
        </p>
        <h3>What are vehicle access cards?</h3>
        <p>
          Residents receive access cards for vehicles. According to the community’s published guidance,
          the maximum number of cards equals the number of assigned parking spaces, each card carries a
          fee, and cards expire when the tenancy ends and must be reactivated on renewal. When you move
          out, return the cards to your landlord. Fees and rules can change, so confirm the current
          details with Emaar Community Management.
        </p>
        <h3>Does the mover need to be registered?</h3>
        <p>
          Requirements for movers can vary by community and time. Ask the community team what they need
          from the moving company, and send us the request. We provide the details they ask for.
        </p>
      </ArticleSection>

      <ContactStrip lead="Speak With Our Packing Specialists" />

      <ArticleSection id="hills-parts" tone="neutral" title="Which parts of Dubai Hills do we serve?">
        <p>Dubai Hills is not one type of home. The plan changes with the type.</p>
        <div className="table-wrap">
          <table>
            <caption className="sr-only">How a Dubai Hills move differs by area</caption>
            <thead>
              <tr>
                <th scope="col">Area</th>
                <th scope="col">Typical home</th>
                <th scope="col">What the move involves</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Maple and Sidra</th>
                <td>Townhouses and family villas</td>
                <td>Multi-level carrying, garage items, gardens</td>
              </tr>
              <tr>
                <th scope="row">Mulberry, Fairway and Golf Place villas</th>
                <td>Larger villas</td>
                <td>Larger crew, two trucks, outdoor items</td>
              </tr>
              <tr>
                <th scope="row">Park Heights and Executive Residences</th>
                <td>Mid-rise apartments</td>
                <td>Lift booking, parking, permits</td>
              </tr>
              <tr>
                <th scope="row">Collective, Acacia and Dubai Hills apartments</th>
                <td>Apartments near the mall</td>
                <td>Lift access, weekend traffic</td>
              </tr>
              <tr>
                <th scope="row">Mall-side and business park units</th>
                <td>Retail and small offices</td>
                <td>After-hours moves</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Give us your community name, cluster or building, and street or unit number.</p>
      </ArticleSection>

      <ArticleSection id="hills-new" title="How do you move into a newly handed-over home in Dubai Hills?">
        <p>
          A large share of Dubai Hills homes are new, and many residents are the first to live in them.
          New-handover moves have their own steps.
        </p>
        <h3>What is snagging, and how does it affect your move?</h3>
        <p>
          Snagging is the inspection where defects such as paint marks, loose fittings, leaking taps and
          misaligned doors are recorded and reported to the developer for repair. Do it before your
          furniture goes in. It is far harder to get repairs done or prove a defect if furniture is
          already covering the walls and floors. Ask for your snagging inspection to be done first, then
          book the movers.
        </p>
        <h3>What if the home is not fully ready?</h3>
        <p>
          If works are still going on, dust, open floors and workmen can damage furniture. We can put
          your furniture into storage for a few days and deliver when the home is ready. Storage in Dubai
          costs between AED 150 and AED 3,800 per month, depending on unit size, location, and climate
          control. Ask us for your exact storage rate and the terms.
        </p>
        <h3>Should you move everything at once?</h3>
        <p>
          Not always. We can deliver bedrooms and kitchen first and move the rest later. This is common
          for owners who are still finishing curtains, lights and fittings.
        </p>
        <h3>Who installs curtains, lights and appliances?</h3>
        <p>
          You or your contractors, not the movers. We move and assemble furniture. Fixtures that need an
          electrician, plumber or installer should be booked separately, ideally before the furniture
          arrives.
        </p>
        <h3>What should be protected on delivery?</h3>
        <p>
          New floors and walls. We use floor runners and door-frame guards, and we do not drag items
          across new surfaces. The developer or landlord may treat marks as a warranty issue you have to
          prove was not caused by you, so protection matters.
        </p>
        <Callout>
          <p>
            <strong>Note:</strong> Getting keys to a new Dubai Hills home? Call +971 56 626 4074 before
            you finalise the move date, and we plan around your snagging and permit.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="hills-villa" tone="neutral" title="How do you move a villa or townhouse in Dubai Hills?">
        <h3>What is typical?</h3>
        <p>
          Three- to five-bedroom villas and townhouses with a garage, maid’s room and small garden. Rooms
          are modern and the layout is predictable, but there are usually multiple floors and a lot of
          possessions.
        </p>
        <h3>How do we plan the crew and truck?</h3>
        <p>
          We survey by video, list rooms and large items, note garage and storage contents, and check the
          community access. A four-bedroom villa usually needs a larger crew and either a big truck or
          two trips. We give you numbers after the survey.
        </p>
        <h3>What about garden and outdoor items?</h3>
        <p>Outdoor sofas, BBQs, planters and play equipment. Some need dismantling. Tell us in advance.</p>
        <h3>Can you assemble furniture after delivery?</h3>
        <p>Yes. We assemble beds, wardrobes, desks and tables and place them as you direct.</p>
      </ArticleSection>

      <ArticleSection id="hills-apartment" title="How do you move an apartment in Dubai Hills?">
        <h3>What do apartment buildings require?</h3>
        <p>
          A move-in permit through the community process, and a lift booking where the building manages
          one. Requirements can differ between buildings, so ask your building manager. Some ask for a
          deposit.
        </p>
        <h3>Which times work best?</h3>
        <p>
          Weekday mornings. Weekends are busy, and buildings near Dubai Hills Mall have heavy traffic at
          weekends.
        </p>
        <h3>What about parking?</h3>
        <p>
          Visitor parking near the entrance can be limited. We choose a truck that fits and tell you if a
          separate parking permit is needed.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="hills-services" tone="neutral" title="What services do we provide in Dubai Hills?">
        <h3>House and Apartment Moving</h3>
        <p>
          We handle moves from studio apartments to five-bedroom villas. Our{" "}
          <Link href="/home-movers-and-packers-in-dubai/">
            <strong>home moving services in Dubai</strong>
          </Link>{" "}
          include furniture protection, loading and transportation.
        </p>
        <h3>Packing and Unpacking</h3>
        <p>
          Choose full or partial packing based on your needs. Our{" "}
          <Link href="/packing-and-unpacking-services-in-dubai/">
            <strong>packing and unpacking services in Dubai</strong>
          </Link>{" "}
          help prepare household belongings for transport, with packing materials supplied according to
          the service arranged.
        </p>
        <h3>Furniture Dismantling and Assembly</h3>
        <p>
          Beds, wardrobes, tables and outdoor furniture may need dismantling before moving. Explore our{" "}
          <Link href="/furniture-movers-in-dubai/">
            <strong>furniture moving services in Dubai</strong>
          </Link>{" "}
          for help with larger household items.
        </p>
        <h3>New-Home Delivery and Set-Up</h3>
        <p>
          Bought furniture for your new home? We can help coordinate collection from showrooms or
          warehouses, delivery, assembly and placement. See our{" "}
          <Link href="/furniture-movers-in-dubai/">
            <strong>furniture movers in Dubai</strong>
          </Link>{" "}
          page for related services.
        </p>
        <h3>Storage</h3>
        <p>
          Storage can help when handover dates do not match, during renovations or while downsizing.
          Explore our{" "}
          <Link href="/storage-solutions-in-dubai/">
            <strong>storage solutions in Dubai</strong>
          </Link>{" "}
          for available options.
        </p>
        <h3>Same-day moves</h3>
        <p>If your permit is approved and the crew is available.</p>
      </ArticleSection>

      <ArticleSection
        id="hills-cost"
        title="How much do movers cost in Dubai Hills?"
        banner={
          <Banner
            src={`${IMG}/dubai-hills-home-relocation.webp`}
            alt="Movers preparing packed furniture for a Dubai Hills Estate home relocation"
          />
        }
      >
        <p>Price depends on home type, volume, floor, packing level and distance.</p>
        <p>
          A move in Dubai Hills Estate typically costs AED 700–12,000 or more, depending on home type,
          volume, and packing level. An apartment typically costs AED 700–1,200 for a studio, AED
          1,000–1,800 for a 1-bedroom, AED 1,800–3,000 for a 2-bedroom, and AED 2,800–4,500 for a
          3-bedroom, transport-only. A 2-bedroom townhouse typically costs AED 1,500–2,500. A 3-bedroom
          villa typically costs AED 3,500–6,000 before packing, or AED 4,000–5,500 with full packing. A
          4-bedroom villa typically costs AED 5,000–7,000 before packing, or AED 5,500–7,500 with
          packing. A 5-bedroom villa typically costs AED 7,000–12,000 before packing, or AED 7,500–12,000
          with full packing. The exact price is confirmed in writing after a survey and after the permit
          is confirmed, because a move that cannot enter the community cannot start on time.
        </p>
        <h3>What should the quote say?</h3>
        <p>
          Crew, truck size, time window, packing, dismantling, extras and waiting time. Ask about Salik as
          well, since routes from other parts of Dubai may cross toll gates.
        </p>
        <p>
          The quote should list crew size, truck size, time window, packing materials, dismantling, and
          waiting time. In Dubai Hills it must also list the permit status, the entrance to be used, and
          the vehicle access cards arranged — those are community requirements, not mover extras, and a
          truck turned away at the gate loses the day. It must also state whether new-home delivery and
          assembly are included, because many Dubai Hills moves are into newly handed-over homes where
          furniture is delivered and assembled, not just unloaded.
        </p>
        <h3>Are there charges from the community?</h3>
        <p>
          Access cards and other community charges are separate from the moving quote. Check the current
          fees with the community manager.
        </p>
        <p>
          Community and service charges are separate from the mover’s price, and no fixed community
          charge is published here because it depends on the home, the account, and whether service fees
          are clear — unpaid service fees can block a permit application. Ask what community charges
          apply to your home before moving day, and confirm the permit is approved before the truck
          leaves. If the home is newly handed over, confirm snagging is finished first — furniture
          delivered before snagging has to be moved again, and that costs a second visit.
        </p>
        <p>
          Home type matters first: villas and townhouses carry garden and outdoor items, apartments carry
          lift, parking, and shared-area rules. Permit lead time matters: apply as soon as the date is
          set, and allow for a refused or delayed permit. Working-hour limits, parking, and road-blocking
          rules inside the community matter — they set the start time and the crew size. Readiness
          matters: a home that is not fully ready, or still in snagging, cannot take a full delivery. New
          furniture delivery, curtain and appliance installation, and packaging removal are separate
          services to list in the quote, not assumed.
        </p>
      </ArticleSection>

      <ArticleSection id="hills-truck" tone="neutral" title="How do you get to Dubai Hills with a truck?">
        <p>
          Dubai Hills sits between Al Khail Road, Umm Suqeim Road and Sheikh Mohammed Bin Zayed Road.
          Main entrances are gated, and trucks must be on the permit and access lists.
        </p>
        <h3>When is traffic heaviest?</h3>
        <p>
          Weekday mornings and evenings on the roads leading to Al Khail Road, and weekends near the
          mall. Early morning is easiest.
        </p>
        <h3>Are there truck restrictions?</h3>
        <p>
          Heavy vehicles have timed restrictions on parts of Dubai’s road network, including Sheikh
          Mohammed Bin Zayed Road and Emirates Road in specific windows. Rules change, so we check the
          current schedule when planning the route.
        </p>
        <h3>Which entrance do we use?</h3>
        <p>
          The one your permit and the community team specify. Tell us where your home is and we confirm
          the route.
        </p>
      </ArticleSection>

      <ArticleSection
        id="hills-rules"
        title="What community rules affect movers working inside Dubai Hills?"
      >
        <p>
          Managed communities set behaviour rules as well as access rules. They vary, and they are the
          reason a move can be stopped halfway even when the permit is fine. We do not claim to know
          every current rule, so we ask you to confirm them, and we plan to the strictest reading.
        </p>
        <h3>Are there working-hour limits?</h3>
        <p>
          Communities often restrict noisy work, including deliveries and moves, to set hours, and may
          close weekends or public holidays for that kind of work. Ask the community team for the
          permitted hours and give us the times in writing. If a move is likely to run past the
          deadline, we add crew to finish inside it instead of hoping the security team will be
          flexible.
        </p>
        <h3>What about parking and blocking roads?</h3>
        <p>
          Trucks should park only where the community allows, and should not block gates, bins or
          neighbours’ driveways. A truck that blocks a road can be moved on by security. We tell the
          driver where to stop and choose a truck that fits the plot.
        </p>
        <h3>What about waste and packaging?</h3>
        <p>
          Cardboard, wrap and old furniture cannot be left outside on the street. We take packing waste
          away with us. For large items you want to dispose of, tell us before the day, because disposal
          is a separate arrangement and community bins are not for furniture.
        </p>
        <h3>What about lifts, stairs and shared areas in apartments?</h3>
        <p>
          Protect lift walls and floors, keep corridors clear, and do not leave boxes in shared areas. We
          use pads and runners, and we move in and out of the lift in a planned order to avoid blocking
          neighbours for long.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection
        id="hills-deliver"
        tone="neutral"
        title="Can you deliver furniture you have bought for a new Dubai Hills home?"
      >
        <p>
          Yes, and it is the most common request we get from new owners. Many Dubai Hills residents
          furnish a new home from several sellers at once: sofas from one showroom, a dining set from
          another, beds from a warehouse. Deliveries arrive on different days, and none of the sellers
          coordinate.
        </p>
        <h3>How does collection and delivery work?</h3>
        <p>
          We collect from showrooms and warehouses in Al Quoz, Dubai Investments Park, Sharjah and
          elsewhere, check items against your invoice for visible damage, and deliver them to your home in
          one trip. You give us a list of sellers, addresses and item details. The sellers need to release
          the goods to us with your authorisation, so tell them we are coming.
        </p>
        <h3>Why do people choose one delivery day?</h3>
        <p>
          Because permits, lift slots and building rules apply to every delivery, and one crew doing
          everything is easier on you and the neighbours. It also means one crew assembles everything, so
          you have one point of contact if a piece is missing a screw.
        </p>
        <h3>What if something arrives damaged?</h3>
        <p>
          We note visible damage at collection and delivery, photograph it, and tell you straight away so
          that you can raise it with the seller. We do not sign off on items we have seen are damaged
          without telling you.
        </p>
        <h3>Can you remove the packaging afterwards?</h3>
        <p>Yes. We unwrap, assemble and take the packaging with us.</p>
      </ArticleSection>

      <ArticleSection id="hills-family" title="How do you move with children or pets into Dubai Hills?">
        <p>
          Dubai Hills has many families, and most of them have questions about how to keep the household
          calm during the move.
        </p>
        <h3>How do you keep children safe on moving day?</h3>
        <p>
          Arrange for them to be with a relative or friend if you can. If they stay, agree a safe room
          away from the doors, lifts and carrying routes. Moving days involve open doors, heavy items and
          strangers, and small children can walk into the path of a carrier.
        </p>
        <h3>What about pets?</h3>
        <p>
          Cats and dogs get frightened by noise and open doors. Board them for the day, or put them in a
          closed room with food, water and a sign on the door so nobody opens it. Do not let pets out into
          the hallway or garden while gates are open. Fish tanks are drained and moved by their owner,
          since we cannot move water safely.
        </p>
        <h3>What should be ready first at the new home?</h3>
        <p>
          Beds, a working kitchen kettle and fridge, bedding, basic toiletries and a bag of children’s
          favourite items. We assemble bedrooms first so that the household can sleep properly the first
          night.
        </p>
      </ArticleSection>

      <ArticleSection id="hills-process" tone="neutral" title="What is our step-by-step process in Dubai Hills?">
        <ol className="step-list">
          <li>
            <strong>You call with the details.</strong> Community, home type, date, large items.
          </li>
          <li>
            <strong>Permit check.</strong> We ask whether your permit is approved and whether your
            landlord has cleared service fees.
          </li>
          <li>
            <strong>Survey.</strong> Video for larger homes.
          </li>
          <li>
            <strong>Written quote.</strong> Crew, truck, time, services.
          </li>
          <li>
            <strong>Packing.</strong> Full or partial.
          </li>
          <li>
            <strong>Loading.</strong> Heavy items first, floors and doors protected.
          </li>
          <li>
            <strong>Transport.</strong> Route planned around gates and traffic.
          </li>
          <li>
            <strong>Unloading and assembly.</strong> Rooms set up in priority order.
          </li>
          <li>
            <strong>Handover.</strong> Walk-through and sign-off.
          </li>
        </ol>
      </ArticleSection>

      <ArticleSection id="hills-prepare" title="How do you prepare for a Dubai Hills move?">
        <h3>Four weeks out</h3>
        <p>Confirm keys or handover date. Ask your landlord to clear service fees. Book the mover.</p>
        <h3>Two weeks out</h3>
        <p>
          Apply for the permit as soon as the date is firm. Arrange utilities and internet. If new-build,
          book your snagging.
        </p>
        <h3>One week out</h3>
        <p>Check permit approval. Sort access cards. Label boxes.</p>
        <h3>The day before</h3>
        <p>
          Defrost the fridge. Confirm the truck’s access details with us. Keep documents with you.
        </p>
        <h3>On the day</h3>
        <p>
          Be present at the new home. Walk the crew through the rooms. Report any existing damage before
          furniture goes in.
        </p>
      </ArticleSection>

      <ArticleSection
        id="hills-problems"
        tone="neutral"
        title="What are the most common Dubai Hills moving problems?"
        banner={
          <Banner
            src={`${IMG}/dubai-hills-villa-moving-day.webp`}
            alt="Movers carrying protected furniture beside a Dubai Hills Estate villa"
          />
        }
      >
        <h3>The permit was not applied for in time</h3>
        <p>Apply at least one business day before, and earlier if you can.</p>
        <h3>Service fees blocked the application</h3>
        <p>Ask your landlord to clear the account.</p>
        <h3>Furniture arrived before snagging</h3>
        <p>Do snagging first.</p>
        <h3>The truck was turned away at the gate</h3>
        <p>Confirm the access list and vehicle details.</p>
        <h3>The home was not ready</h3>
        <p>Confirm handover and utilities in advance.</p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="hills-why" title="Why choose Al Hatem Movers in Dubai Hills?">
        <ul>
          <li>
            <strong>We plan around permits and access.</strong> Not after the truck arrives.
          </li>
          <li>
            <strong>Experience with new-handover moves.</strong>
          </li>
          <li>
            <strong>Packing, dismantling, delivery and assembly in one service.</strong>
          </li>
          <li>
            <strong>Written quotes with a breakdown.</strong>
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
            <strong>Note:</strong> Book your Dubai Hills move. Call or WhatsApp +971 56 626 4074.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection id="hills-out" tone="neutral" title="Moving out of Dubai Hills">
        <p>
          Residents move to Arabian Ranches, Jumeirah, Downtown or other emirates. On move-out, return
          access cards to your landlord, settle service charges and confirm the handover process. We plan
          the route and the next community’s access requirements with you.
        </p>
      </ArticleSection>
    </LocationLayout>
  );
}
