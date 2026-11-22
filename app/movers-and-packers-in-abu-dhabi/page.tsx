import { ReviewsSection } from "@/components/Blocks";
import Link from "next/link";
import { ArticleSection, ContactStrip } from "@/components/Article";
import { Callout, ChipLink } from "@/components/Cards";
import { Banner, LocationLayout } from "@/components/LocationLayout";
import { Button } from "@/components/Button";
import { FinalCta } from "@/components/FinalCta";
import { BUSINESS } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

const PATH = "/movers-and-packers-in-abu-dhabi/";
const TITLE = "Movers Abu Dhabi | Trusted Movers and Packers Abu Dhabi";
const DESCRIPTION =
  "Looking for movers Abu Dhabi? Our trusted movers and packers Abu Dhabi provide safe packing, careful handling and stress-free relocation services.";
const IMG = "/images/movers-and-packers-in-abu-dhabi";
const IMAGE = `${IMG}/movers-packers-abu-dhabi.webp`;
const IMAGE_ALT = "Movers and packers in Abu Dhabi handling a home relocation";

export const metadata = buildMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  image: IMAGE,
  imageAlt: IMAGE_ALT,
});

const faqs = [
  [
    "How Much Do Movers And Packers Cost In Abu Dhabi?",
    "A move in Abu Dhabi typically costs AED 700–15,000 or more. Local apartments typically cost AED 700–4,500 transport-only depending on size, a single item AED 150–250, a 3-bedroom villa AED 3,500–6,000 before packing, and a Dubai-to-Abu Dhabi move AED 1,500–2,200 for a 1-bedroom and AED 2,500–3,500 for a 2-bedroom. The exact price is confirmed in writing after a free assessment.",
  ],
  [
    "Do You Provide Same-Day Moving Services In Abu Dhabi?",
    "Yes. Depending on our schedule and your location, we can arrange same-day or urgent moving services for homes, apartments, villas, and offices across Abu Dhabi.",
  ],
  [
    "Do You Offer Packing And Unpacking Services?",
    "Yes. Our team provides complete packing and unpacking services using quality packing materials to help protect your furniture, electronics, kitchen items, glassware, and other valuable belongings.",
  ],
  [
    "Can You Move Villas And Large Family Homes?",
    "Absolutely. We regularly handle villa relocations in communities such as Khalifa City, Al Raha Gardens, Yas Acres, Saadiyat Island, and other residential areas in Abu Dhabi. Our team manages packing, dismantling, transportation, and furniture reassembly.",
  ],
  [
    "Do You Move Offices And Commercial Spaces?",
    "Yes. We provide office relocation services for businesses of all sizes. Our team carefully handles office furniture, computers, documents, and equipment while working to minimise disruption to your business operations.",
  ],
  [
    "Which Areas Do You Serve In Abu Dhabi?",
    "We provide moving and packing services throughout Abu Dhabi, including Al Reem Island, Yas Island, Khalifa City, Mohammed Bin Zayed City, Mussafah, Al Bateen, Al Raha Beach, Saadiyat Island, Al Khalidiyah, and many nearby communities.",
  ],
  [
    "Can You Move Furniture To Another Emirate?",
    "Yes. Along with local moves in Abu Dhabi, we also provide inter-emirate moving services to Dubai, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain, and other locations across the UAE.",
  ],
  [
    "Do You Provide Storage Solutions?",
    "Yes. If your new property is not ready or you need extra space during your relocation, we can arrange secure storage solutions for your household or office belongings.",
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
    ["Movers and Packers in Abu Dhabi", PATH],
  ],
  service: {
    name: "Movers and Packers in Abu Dhabi",
    serviceType: "Moving and packing services",
    description:
      "Need reliable movers and packers in Abu Dhabi? Al Hatem Movers offers home, villa, apartment and office moving with professional packing and safe transport.",
    areaServed: { "@type": "City", name: "Abu Dhabi" },
  },
  faqs,
});

export default function AbuDhabiPage() {
  return (
    <LocationLayout
      schema={schema}
      crumbLabel="Movers and Packers in Abu Dhabi"
      title="#1 Movers Abu Dhabi for Safe & Stress-Free Relocation"
      heroImage={{ src: IMAGE, alt: IMAGE_ALT, ratio: "16:9" }}
      intro={
        <p>
          Moving to a new place is an exciting step, but it can also feel stressful without the right
          support. As a trusted moving company Abu Dhabi families rely on, Al Hatem Furniture Moving
          Company provides trusted{" "}
          <Link href="/packing-and-unpacking-services-in-dubai/">moving and packing services</Link>{" "}
          across Abu Dhabi, helping families and businesses relocate safely and on time.
        </p>
      }
      faqId="ad-faq-title"
      faqTitle="Frequently Asked Questions"
      faqs={faqs}
      faqNote={
        <p>
          Moving to or from Sharjah? Read about our{" "}
          <Link href="/movers-and-packers-in-sharjah/">movers and packers in Sharjah</Link> service.
        </p>
      }
      nearby={
        <>
          <ChipLink href="/movers-and-packers-in-al-ain/">Movers in Al Ain</ChipLink>
          <ChipLink href="/movers-and-packers-in-sharjah/">Movers in Sharjah</ChipLink>
          <ChipLink href="/movers-and-packers-in-ajman/">Movers in Ajman</ChipLink>
          <ChipLink href="/areas-we-serve/">All Areas We Serve</ChipLink>
        </>
      }
      after={
        <>
          <ReviewsSection id="ad-reviews-title" title="What Our Customers Say" />
          <FinalCta id="ad-final-title" title="Get a Free Moving Quote Today">
            <p>
              Planning a move in Abu Dhabi doesn’t have to be stressful. Whether you’re relocating your
              home, apartment, villa, office, or furniture, Al Hatem Movers is here to make the process
              simple from start to finish.
            </p>
            <p>
              Our experienced team takes care of packing, transportation, unloading, and furniture setup,
              allowing you to focus on settling into your new space. Every move is planned carefully to
              ensure your belongings arrive safely and on time.
            </p>
            <p>
              If you’re looking for dependable <strong>packers movers abu dhabi</strong>, contact Al Hatem
              Movers today. We’ll provide a free quotation and help you choose the moving service that
              best fits your requirements.
            </p>
          </FinalCta>
        </>
      }
    >
      <ArticleSection
        id="ad-reliable"
        title="Reliable Movers and Packers in Abu Dhabi for Homes, Villas, Offices & Furniture"
      >
        <p>
          Whether you are moving from an apartment in Al Reem Island, a villa in Khalifa City, or an
          office in Al Maryah Island, our experienced team plans every step carefully. We handle
          packing, loading, transportation, unloading, and furniture setup so you can enjoy a smooth
          moving experience.
        </p>
        <p>
          Our trained movers use quality packing materials, modern moving equipment, and well-maintained
          trucks to protect your belongings throughout the journey. From small household moves to{" "}
          <Link href="/office-movers-in-dubai/">complete office relocations</Link>, we work with the
          same level of care and professionalism.
        </p>
        <p>
          If you are looking for dependable movers and packers in Abu Dhabi, Al Hatem Movers is ready to
          make your move simple, safe, and hassle-free.
        </p>
      </ArticleSection>

      <ContactStrip lead="Speak With Our Packing Specialists" />

      <ArticleSection id="ad-trusted" tone="neutral" title="Trusted by Thousands Across Abu Dhabi">
        <ul className="check-list grid gap-3 font-semibold text-black">
          <li>12+ Years of Moving Experience (Since 2014)</li>
          <li>12,000+ Successful Home & Office Moves</li>
          <li>Modern 3-Ton Moving Trucks Ready to Serve</li>
          <li>Serving All Areas of Abu Dhabi & Across the UAE</li>
        </ul>
        <div className="not-prose">
          <Button href={BUSINESS.whatsappQuoteHref}>Get a Free Quote</Button>
        </div>
        <Callout>
          <p>
            <strong>Note:</strong> Planning your move in Abu Dhabi?{" "}
            <Link href="/contacts/">Contact Al Hatem Movers</Link> today for a free quote and let our
            experienced team handle every step of your relocation.
          </p>
        </Callout>
      </ArticleSection>

      <ArticleSection
        id="ad-services"
        title="Moving Services We Provide in Abu Dhabi"
        banner={
          <Banner
            src={`${IMG}/moving-team-truck-abu-dhabi.webp`}
            alt="Moving team and truck ready for a move in Abu Dhabi"
            ratio="16:9"
          />
        }
      >
        <p>We offer complete relocation solutions for every type of move in Abu Dhabi.</p>
        <ul className="check-list grid gap-2 font-semibold text-black">
          <li>Home Movers in Abu Dhabi</li>
          <li>Villa Movers in Abu Dhabi</li>
          <li>Apartment Movers in Abu Dhabi</li>
          <li>Office Movers in Abu Dhabi</li>
          <li>Furniture Movers in Abu Dhabi</li>
          <li>Packing and Unpacking Services</li>
          <li>Storage Solutions</li>
          <li>Local and Inter-Emirate Moving</li>
          <li>Cargo Services (Available on Request)</li>
        </ul>
        <p>
          No matter the size of your move, our team focuses on careful handling, timely delivery, and
          excellent customer service.
        </p>
        <div className="not-prose">
          <Button href={BUSINESS.whatsappQuoteHref}>Get a Free Quote</Button>
        </div>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="ad-why" tone="neutral" title="Why Choose Al Hatem Movers in Abu Dhabi?">
        <p>
          Choosing the right moving company is just as important as choosing your new home or office. At
          Al Hatem Movers, we believe every customer deserves a stress-free moving experience from start
          to finish.
        </p>
        <h3>Local Knowledge of Abu Dhabi</h3>
        <p>
          Our team understands the layout of Abu Dhabi and its residential and commercial communities. We
          regularly work in areas such as Khalifa City, Mohammed Bin Zayed City, Al Reem Island, Yas
          Island, Al Raha Beach, Al Bateen, Mussafah, and many other locations. This local knowledge helps
          us plan efficient moving routes and avoid unnecessary delays.
        </p>
        <h3>Safe Packing for Every Item</h3>
        <p>
          Every move is different. Fragile decorations, kitchen items, electronics, office equipment, and
          large furniture all require different packing methods. We use quality packing materials to keep
          your belongings protected during loading, transport, and unloading.
        </p>
        <h3>Experienced Moving Team</h3>
        <p>
          Our movers are trained to handle household and commercial relocations with care. From
          dismantling furniture to placing everything in your new property, every task is completed with
          attention to detail.
        </p>
        <h3>Modern Moving Vehicles</h3>
        <p>
          We use clean and well-maintained moving trucks designed for secure transportation. Your
          belongings remain protected while travelling anywhere within Abu Dhabi or to another emirate.
        </p>
        <h3>Transparent Pricing</h3>
        <p>
          We believe in honest quotations with no hidden surprises. Before your move begins, we explain
          the services included so you know exactly what to expect.
        </p>
        <h3>Flexible Scheduling</h3>
        <p>
          Whether you need a planned move or an urgent relocation, our team works with your schedule to
          reduce disruption to your family or business.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection
        id="ad-home"
        title="Home Movers in Abu Dhabi"
        banner={
          <Banner
            src={`${IMG}/home-movers-abu-dhabi.webp`}
            alt="Home movers in Abu Dhabi carrying household furniture"
          />
        }
      >
        <p>
          Moving to a new home is more than transporting furniture. It is about moving the place where
          your family feels comfortable. Our home movers in Abu Dhabi make this process simple by handling
          every stage with care and proper planning.
        </p>
        <p>
          Whether you are moving from a studio apartment, a townhouse, or a large family home, we
          organise the move to reduce stress and save your valuable time. Our team carefully packs
          household items, labels every box, loads everything safely, and delivers your belongings to
          your new home in an organised manner.
        </p>
        <p>
          Many residential communities in Abu Dhabi have building access rules, lift booking
          requirements, and designated loading areas. Our movers understand these procedures and
          coordinate the move to avoid unnecessary delays whenever possible.
        </p>
        <p>
          We also protect large furniture, household appliances, glass items, electronics, and valuable
          decorations using suitable packing materials before transportation. After reaching your new
          home, we unload everything carefully and place your furniture where you want it.
        </p>
        <p>
          Whether you are relocating within Khalifa City, Yas Island, Al Reem Island, Al Raha Beach,
          Mohammed Bin Zayed City, or another part of Abu Dhabi, Al Hatem Movers provides a reliable home
          moving service designed around your needs.
        </p>
        <h3>Our Home Moving Service Includes</h3>
        <ul className="check-list grid gap-2">
          <li>Professional packing using quality materials</li>
          <li>Furniture dismantling and reassembly</li>
          <li>Safe loading and unloading</li>
          <li>Secure transportation</li>
          <li>Careful handling of fragile items</li>
          <li>Appliance and furniture placement</li>
          <li>Optional unpacking assistance</li>
        </ul>
        <p>
          Our goal is simple, to help you settle into your new home with confidence while we take care of
          the heavy work.
        </p>
        <p>Moving your home soon? Speak with our team today and get a free moving estimate with no hidden charges.</p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="ad-khalifa" tone="neutral" title="Movers in Khalifa City">
        <p>
          Moving within Khalifa City needs the same careful planning as any Abu Dhabi move. Our movers in
          Khalifa City help families move between villas, townhouses and apartments, handling every stage
          with care and proper planning.
        </p>
        <p>
          Khalifa City is a residential suburb in Abu Dhabi, about 25 kilometres from Downtown Abu Dhabi
          and close to Abu Dhabi International Airport and Yas Island. Our team understands building
          access rules, lift booking requirements and designated loading areas in Khalifa City, and
          coordinates the move to avoid unnecessary delays.
        </p>
        <h3>Our Movers in Khalifa City Service Includes</h3>
        <ul className="check-list grid gap-2">
          <li>Professional packing using quality materials</li>
          <li>Furniture dismantling and reassembly</li>
          <li>Safe loading and unloading</li>
          <li>Secure transportation</li>
          <li>Careful handling of fragile items</li>
          <li>Furniture placement in your new home</li>
          <li>Optional unpacking assistance</li>
        </ul>
      </ArticleSection>

      <ArticleSection
        id="ad-villa"
        title="Villa Movers in Abu Dhabi"
        banner={
          <Banner
            src={`${IMG}/villa-movers-abu-dhabi.webp`}
            alt="Villa movers in Abu Dhabi moving furniture from a villa"
          />
        }
      >
        <p>
          Moving a villa requires careful planning, experienced movers, and the right equipment. Villas
          usually have larger furniture, outdoor items, delicate decorations, and multiple rooms that
          need extra attention during relocation. Our villa movers in Abu Dhabi manage every step
          professionally so you can move without unnecessary stress.
        </p>
        <p>
          Whether you are relocating from Khalifa City, Al Raha Gardens, Yas Acres, Saadiyat Island, Al
          Reef Villas, or another villa community, our team creates a moving plan based on your
          property’s layout and your moving schedule.
        </p>
        <p>
          Large wardrobes, beds, dining tables, sofas, and other bulky furniture are carefully
          dismantled before packing. Every item is wrapped with protective materials to reduce the risk
          of scratches or damage during transportation.
        </p>
        <p>
          Our team also understands that many villa communities have security procedures, parking rules,
          and access requirements. We coordinate the move properly to complete the relocation as smoothly
          as possible.
        </p>
        <h3>Our Villa Moving Service Includes</h3>
        <ul className="check-list grid gap-2">
          <li>Complete villa packing service</li>
          <li>Furniture dismantling and assembly</li>
          <li>Safe handling of luxury furniture</li>
          <li>Packing for fragile and valuable items</li>
          <li>Loading and unloading</li>
          <li>Secure transportation</li>
          <li>Furniture placement in your new villa</li>
          <li>Optional unpacking assistance</li>
        </ul>
        <p>
          Whether you are moving to another villa in Abu Dhabi or relocating to a different emirate, Al
          Hatem Movers makes your villa move organised, safe, and hassle-free.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection
        id="ad-apartment"
        tone="neutral"
        title="Apartment Movers in Abu Dhabi"
        banner={
          <Banner
            src={`${IMG}/apartment-movers-abu-dhabi.webp`}
            alt="Apartment movers in Abu Dhabi carrying wrapped furniture"
          />
        }
      >
        <p>
          Apartment moving comes with different challenges compared to house or villa relocations. Lift
          reservations, parking restrictions, narrow hallways, and building management rules all require
          proper planning. Our apartment movers in Abu Dhabi are experienced in handling these situations
          every day.
        </p>
        <p>
          From studio apartments to spacious family apartments, we carefully pack your belongings and
          transport them safely to your new address. Every box is labelled properly, making unpacking
          easier once the move is complete.
        </p>
        <p>
          We frequently provide apartment moving services in communities such as Al Reem Island, Al Maryah
          Island, Al Raha Beach, Al Khalidiyah, Tourist Club Area, and Corniche Road, where organised
          planning is essential for a smooth relocation.
        </p>
        <p>
          Our team protects furniture, electronics, kitchen items, mirrors, artwork, and other valuable
          belongings throughout the moving process. After delivery, we can also help position furniture in
          the correct rooms to save you time.
        </p>
        <h3>Our Apartment Moving Service Includes</h3>
        <ul className="check-list grid gap-2">
          <li>Packing and labelling household items</li>
          <li>Furniture dismantling and assembly</li>
          <li>Lift-friendly moving equipment</li>
          <li>Safe loading and transportation</li>
          <li>Careful unloading</li>
          <li>Furniture placement</li>
          <li>Optional unpacking service</li>
        </ul>
        <p>No matter the floor level or apartment size, we aim to make your move simple and comfortable.</p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="ad-furniture" title="Furniture Movers in Abu Dhabi">
        <p>
          Furniture is often the most valuable part of any move. Heavy sofas, wardrobes, dining tables,
          beds, office desks, display cabinets, and fragile wooden items all need proper handling to
          prevent damage. Our furniture movers in Abu Dhabi use safe moving techniques and quality
          protective materials for every job.
        </p>
        <p>
          Before loading, each furniture piece is wrapped using moving blankets, stretch film, bubble
          wrap, or protective covers where required. Larger items are dismantled carefully to make
          transportation safer and easier.
        </p>
        <p>
          Whether you are moving a few furniture items, furnishing a new property, or relocating an
          entire home or office, our experienced team handles every item with care from pickup to
          delivery.
        </p>
        <p>
          We provide <Link href="/furniture-movers-in-dubai/">furniture moving services</Link> throughout
          Abu Dhabi, including Khalifa City, Mohammed Bin Zayed City, Mussafah, Yas Island, Al Bateen,
          Saadiyat Island, and surrounding communities.
        </p>
        <p>
          Whether you’re moving a single apartment or a large villa, we’re ready to make your relocation
          simple and stress-free. Get in touch today for a free consultation.
        </p>
        <h3>We Move All Types of Furniture</h3>
        <ul className="check-list grid gap-2 sm:grid-cols-2">
          <li>Bedroom furniture</li>
          <li>Living room furniture</li>
          <li>Dining tables and chairs</li>
          <li>Office furniture</li>
          <li>Modular furniture</li>
          <li>Antique and wooden furniture</li>
          <li>Home appliances</li>
          <li>Commercial furniture</li>
        </ul>
        <p>
          Our goal is to deliver every furniture item safely so it reaches your new location in the same
          condition as when it was packed.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection
        id="ad-office"
        tone="neutral"
        title="Office Movers in Abu Dhabi"
        banner={
          <Banner
            src={`${IMG}/office-movers-abu-dhabi.webp`}
            alt="Office movers in Abu Dhabi handling furniture and equipment"
          />
        }
      >
        <p>
          Relocating a business requires careful planning to avoid unnecessary downtime. Our office
          movers in Abu Dhabi help companies move quickly and efficiently while keeping business
          operations as smooth as possible.
        </p>
        <p>
          Whether you are moving a small office, a corporate workspace, a retail shop, or a commercial
          unit, our team creates a moving plan that suits your schedule. We carefully pack office
          furniture, computers, documents, printers, meeting room equipment, and other business assets
          before transporting them safely to the new location.
        </p>
        <p>
          We regularly assist businesses moving within Al Maryah Island, Abu Dhabi Global Market (ADGM),
          Mussafah Industrial Area, Khalifa Industrial Zone Abu Dhabi (KIZAD), Electra Street, Hamdan
          Street, and other commercial districts.
        </p>
        <p>
          Our movers work carefully to minimise disruption so your employees can return to work as soon as
          possible.
        </p>
        <h3>Our Office Moving Service Includes</h3>
        <ul className="check-list grid gap-2">
          <li>Office relocation planning</li>
          <li>Packing office equipment</li>
          <li>Computer and IT equipment handling</li>
          <li>Furniture dismantling and reassembly</li>
          <li>Safe loading and unloading</li>
          <li>Secure transportation</li>
          <li>Office setup at the new location</li>
        </ul>
        <p>
          Whether your business is moving across Abu Dhabi or to another emirate, Al Hatem Movers delivers
          a reliable office relocation service tailored to your needs.
        </p>
        <p>
          Need to relocate your office without disrupting your business? Contact Al Hatem Movers to plan a
          smooth office move in Abu Dhabi.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="ad-packing" title="Packing and Unpacking Services in Abu Dhabi">
        <p>
          Proper packing is one of the most important parts of a successful move. Even a short journey
          can damage belongings if they are not packed correctly. Our packing and unpacking services in
          Abu Dhabi are designed to protect your household or office items from the moment the move
          begins.
        </p>
        <p>
          Our team uses quality packing materials for different types of belongings. Fragile items such
          as glassware, mirrors, artwork, electronics, and kitchenware receive extra protection, while
          furniture is wrapped carefully before loading.
        </p>
        <p>
          Every box is organised and labelled, making it easier to unpack and find essential items after
          arriving at your new property.
        </p>
        <p>
          Once the move is complete, we can also unpack your belongings and help place them in the
          appropriate rooms, allowing you to settle in more quickly.
        </p>
        <h3>Our Packing Service Covers</h3>
        <ul className="check-list grid gap-2 sm:grid-cols-2">
          <li>Household packing</li>
          <li>Office packing</li>
          <li>Furniture wrapping</li>
          <li>Kitchen item packing</li>
          <li>Fragile item protection</li>
          <li>Electronics packing</li>
          <li>Box labelling and organisation</li>
          <li>Optional unpacking service</li>
        </ul>
        <p>
          Whether you need a complete packing service or help with selected items, our experienced team is
          ready to assist.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="ad-storage" tone="neutral" title="Storage Services in Abu Dhabi">
        <p>
          Sometimes your new property is not ready immediately, or you may simply need extra space for
          your belongings. Al Hatem Movers offers storage solutions that give you a safe place to keep
          your household or office items until you are ready to move them.
        </p>
        <p>
          Our storage service is suitable during home renovations, office relocations, temporary
          accommodation, overseas travel, or when you need additional space without overcrowding your
          property.
        </p>
        <p>
          Before storage, our team carefully packs and prepares your belongings to help keep them in good
          condition while they remain stored.
        </p>
        <h3>Our Storage Solutions Are Suitable For</h3>
        <ul className="check-list grid gap-2 sm:grid-cols-2">
          <li>Household furniture</li>
          <li>Office furniture</li>
          <li>Home appliances</li>
          <li>Business equipment</li>
          <li>Seasonal household items</li>
          <li>Boxes and personal belongings</li>
        </ul>
        <p>
          Whether you need storage for a few days or a longer period, we can help you find a practical
          solution that fits your moving schedule.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="ad-cargo" title="Cargo Services in Abu Dhabi">
        <p>
          In addition to local moving services, Al Hatem Movers also provides cargo services for customers
          who need to transport goods safely within the UAE.
        </p>
        <p>
          Whether you are sending household items, furniture, office equipment, or commercial goods, our
          team arranges secure transportation with careful handling from collection to delivery.
        </p>
        <p>
          Every shipment is planned according to the size, destination, and type of items being
          transported. We focus on timely delivery while ensuring your belongings remain protected
          throughout the journey.
        </p>
        <h3>Our Cargo Services Include</h3>
        <ul className="check-list grid gap-2 sm:grid-cols-2">
          <li>Household cargo</li>
          <li>Furniture transportation</li>
          <li>Commercial cargo</li>
          <li>Office equipment delivery</li>
          <li>Inter-emirate transportation</li>
          <li>Scheduled pickup and delivery</li>
        </ul>
        <p>
          If you are unsure which service is right for your shipment, our team will help you choose the
          most suitable transport option based on your requirements.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="ad-process" tone="neutral" title="Our Simple Moving Process">
        <p>
          We believe moving should be organised from the beginning. Our process is simple, transparent,
          and designed to save you time while keeping your belongings safe throughout the journey.
        </p>
        <h3>1. Request a Free Quote</h3>
        <p>
          Contact our team by phone or through our website. Share your moving requirements, including
          your location, property type, and preferred moving date. We will provide a clear quotation
          based on your needs.
        </p>
        <h3>2. Moving Assessment</h3>
        <p>
          For larger homes, villas, or office relocations, our team can assess the move before moving day.
          This helps us prepare the right number of movers, packing materials, and vehicles.
        </p>
        <h3>3. Professional Packing</h3>
        <p>
          Our movers carefully pack your belongings using quality packing materials. Fragile items,
          electronics, furniture, and valuable possessions receive extra protection before
          transportation.
        </p>
        <h3>4. Safe Loading & Transportation</h3>
        <p>
          Once everything is packed, we load your belongings using safe lifting techniques and transport
          them securely to your new location anywhere in Abu Dhabi or across the UAE.
        </p>
        <h3>5. Unloading & Furniture Setup</h3>
        <p>
          After arrival, we unload your belongings carefully and place furniture in the rooms you choose.
          If required, our team also reassembles dismantled furniture and helps with unpacking.
        </p>
        <p>
          Ready to get started? Let our experienced movers create a personalised moving plan for your home
          or business.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection
        id="ad-areas"
        title="Areas We Serve in Abu Dhabi"
        banner={
          <Banner
            src={`${IMG}/abu-dhabi-areas-we-serve.webp`}
            alt="Moving services across residential areas of Abu Dhabi"
          />
        }
      >
        <p>
          Al Hatem Movers proudly provides moving and packing services across Abu Dhabi. Whether you are
          moving within the city or relocating to another emirate, our experienced team is ready to help.
        </p>
        <p>We regularly serve customers in:</p>
        <ul className="check-list grid gap-2 sm:grid-cols-2">
          <li>Khalifa City</li>
          <li>Mohammed Bin Zayed City (MBZ City)</li>
          <li>Al Reem Island</li>
          <li>Yas Island</li>
          <li>Saadiyat Island</li>
          <li>Al Raha Beach</li>
          <li>Al Raha Gardens</li>
          <li>Al Bateen</li>
          <li>Al Khalidiyah</li>
          <li>Corniche Area</li>
          <li>Al Mushrif</li>
          <li>Mussafah</li>
          <li>Al Shahama</li>
          <li>Al Reef</li>
          <li>Al Maryah Island</li>
          <li>Al Danah</li>
          <li>Al Zahiyah (Tourist Club Area)</li>
          <li>Rabdan</li>
          <li>Shakhbout City</li>
          <li>Masdar City</li>
        </ul>
        <p>
          If your community is not listed above, contact us. Our team also serves many nearby residential
          and commercial areas across Abu Dhabi.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="ad-trust" tone="neutral" title="Why Abu Dhabi Residents Trust Al Hatem Movers">
        <p>
          Finding reliable moving company abu dhabi is important because you are trusting someone with
          your personal belongings. At Al Hatem Movers, we focus on delivering a service that customers
          can depend on from the first phone call until the final item is placed in their new property.
        </p>
        <h3>We Respect Your Time</h3>
        <p>
          Moving day should not be filled with unnecessary delays. Our team plans every move carefully
          and arrives prepared to complete the relocation efficiently.
        </p>
        <h3>We Protect Your Belongings</h3>
        <p>
          Every item is handled with care. We use suitable packing materials and safe loading techniques
          to reduce the risk of damage during transportation.
        </p>
        <h3>We Understand Local Communities</h3>
        <p>
          Every area in Abu Dhabi has different access rules, parking arrangements, and property layouts.
          Our local experience allows us to prepare for these situations before moving day.
        </p>
        <h3>Friendly and Professional Team</h3>
        <p>
          Our movers work respectfully inside your home or office. We keep communication clear throughout
          the process and make sure your questions are answered.
        </p>
        <h3>Complete Moving Solutions</h3>
        <p>
          Instead of hiring different companies for packing, transportation, storage, and furniture
          assembly, you can get everything from one experienced team.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection id="ad-tips" title="Moving Tips for a Smooth Relocation in Abu Dhabi">
        <p>
          Good planning can make your move easier and help avoid last-minute problems. Here are a few
          simple tips before your moving day.
        </p>
        <h3>Book Your Move Early</h3>
        <p>
          Weekends and the end of the month are usually the busiest times for moving in Abu Dhabi.
          Booking early helps you secure your preferred moving date.
        </p>
        <h3>Inform Your Building Management</h3>
        <p>
          Many apartment buildings and residential communities require lift reservations or moving
          permits. Contact your building management a few days before your move.
        </p>
        <h3>Separate Important Documents</h3>
        <p>
          Keep passports, Emirates IDs, bank documents, jewellery, medicines, chargers, and other
          essential items with you instead of packing them inside the moving truck.
        </p>
        <h3>Label Your Boxes</h3>
        <p>
          Writing the room name on each box makes unpacking much easier after you arrive at your new
          property.
        </p>
        <h3>Declutter Before Packing</h3>
        <p>
          Moving is a good opportunity to donate, recycle, or dispose of items you no longer need. This
          can reduce moving time and help lower transportation costs.
        </p>
      </ArticleSection>

      <ContactStrip />

      <ArticleSection
        id="ad-cost"
        tone="neutral"
        title="What Affects the Cost of Movers and Packers in Abu Dhabi?"
        banner={
          <Banner
            src={`${IMG}/abu-dhabi-moving-cost-factors.webp`}
            alt="Factors that affect the cost of movers and packers in Abu Dhabi"
          />
        }
      >
        <p>Every move is different, so the final cost depends on several factors rather than a fixed price.</p>
        <p>Some of the main factors include:</p>
        <ul>
          <li>Size of your home or office</li>
          <li>Number of furniture items</li>
          <li>Distance between locations</li>
          <li>Packing and unpacking requirements</li>
          <li>Floor level and lift availability</li>
          <li>Number of movers required</li>
          <li>Storage requirements</li>
          <li>Special handling for fragile or valuable items</li>
        </ul>
        <p>
          We provide clear quotations based on your moving requirements so you know what services are
          included before your move begins.
        </p>
        <p>
          A moving services abu dhabi typically costs AED 700–15,000 or more, depending on home size,
          distance, packing, and access. A local apartment typically costs AED 700–1,200 for a studio,
          AED 1,000–1,800 for a 1-bedroom, AED 1,800–3,000 for a 2-bedroom, and AED 2,800–4,500 for a
          3-bedroom, transport-only, or AED 1,000–1,600, AED 1,500–2,400, AED 2,500–3,800, and AED
          3,800–5,500 with full packing. A 2-bedroom villa typically costs AED 1,500–2,500, a 3-bedroom
          villa AED 3,500–6,000 before packing, a 4-bedroom villa AED 5,000–7,000 before packing, and a
          5-bedroom villa AED 7,000–12,000 before packing. A single item typically costs AED 150–250, and
          a small office typically costs AED 1,000–2,500. For a move between Dubai and Abu Dhabi, a
          1-bedroom typically costs AED 1,500–2,200 and a 2-bedroom AED 2,500–3,500, as one fixed price
          for the whole route, including the crossing — one crew loads and delivers the same day, about
          ninety minutes each way on E11. Island-to-mainland moves inside Abu Dhabi, such as Corniche to
          Khalifa City or Reem to Shakhbout, are built into one flat written price, with bridges, tolls,
          and timing included. The exact price is confirmed in writing after a free assessment, before
          the move begins, with the services included explained so you know exactly what to expect.
        </p>
        <p>
          Distance matters most for an Abu Dhabi move after home size: a local move inside Abu Dhabi, an
          island-to-mainland move, and a Dubai-to-Abu Dhabi move are three different prices, and only the
          route price is comparable across them. Volume matters next: number of furniture items, and
          whether the move is a home, villa, office, or furniture-only load. Packing matters: packing and
          unpacking requirements, and whether furniture assembly is included, change the range. Access
          matters: floor level, lift availability, building management permission, and community gates and
          security checks change the crew and the time. Timing matters: month-end is the busiest week as
          Tawtheeq leases turn over, so for end-of-month, weekend, or cross-emirate dates, booking two to
          three days ahead secures the preferred time, while mid-week and mid-month slots are usually open
          sooner. Storage and cargo, if needed, are quoted separately by time and route.
        </p>
      </ArticleSection>
    </LocationLayout>
  );
}
