import { BUSINESS, SITE_URL } from "./constants";
import { REVIEWS } from "./reviews";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const address = {
  "@type": "PostalAddress",
  streetAddress:
    "Office No. 402, NH Collection Dubai The Palm, Al Naghal, Palm Jumeirah",
  addressLocality: "Dubai",
  addressRegion: "Dubai",
  addressCountry: "AE",
};

const geo = {
  "@type": "GeoCoordinates",
  latitude: 25.1118318,
  longitude: 55.1390611,
};

const serviceOffers = [
  ["home-movers-and-packers-in-dubai", "Home Movers and Packers in Dubai"],
  ["villa-movers-in-dubai", "Villa Movers in Dubai"],
  ["apartment-movers-in-dubai", "Apartment Movers in Dubai"],
  ["office-movers-in-dubai", "Office Movers in Dubai"],
  ["furniture-movers-in-dubai", "Furniture Movers in Dubai"],
  [
    "packing-and-unpacking-services-in-dubai",
    "Packing and Unpacking Services in Dubai",
  ],
  ["storage-solutions-in-dubai", "Storage Solutions in Dubai"],
  ["cargo-services-in-dubai", "Cargo Services in Dubai"],
] as const;

export function rootSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Place",
        "@id": `${SITE_URL}/#place`,
        name: "Al Hatem Furniture Moving Company - شركة الحاتم لنقل اثاث",
        address,
        geo,
        hasMap: BUSINESS.mapsHref,
      },
      {
        "@type": ["MovingCompany", "Organization"],
        "@id": `${SITE_URL}/#organization`,
        name: BUSINESS.name,
        alternateName: [
          "Al Hatem Movers",
          BUSINESS.arabicName,
          `${BUSINESS.name} - ${BUSINESS.arabicName}`,
        ],
        url: `${SITE_URL}/`,
        description:
          "Al Hatem Furniture Moving Company is a licensed and insured moving company on Palm Jumeirah, Dubai, providing home, villa, apartment, office and furniture moving, packing, storage and cargo services across Dubai and the UAE since 2014.",
        logo: {
          "@type": "ImageObject",
          "@id": `${SITE_URL}/#logo`,
          url: `${SITE_URL}/images/global/al-hatem-logo-light.svg`,
          contentUrl: `${SITE_URL}/images/global/al-hatem-logo-light.svg`,
          caption: BUSINESS.name,
          inLanguage: "en-US",
          width: 250,
          height: 72,
        },
        image: [
          { "@id": `${SITE_URL}/#logo` },
          `${SITE_URL}/images/home/al-hatem-movers-dubai-villa-move.webp`,
          `${SITE_URL}/images/global/al-hatem-movers-team-and-truck-uae.webp`,
        ],
        telephone: "+971566264074",
        email: BUSINESS.email,
        address,
        geo,
        hasMap: BUSINESS.mapsHref,
        location: { "@id": `${SITE_URL}/#place` },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: days,
            opens: "00:00",
            closes: "23:59",
          },
        ],
        priceRange: "AED 150 – AED 15,000",
        currenciesAccepted: "AED",
        areaServed: [
          ...[
            "Dubai",
            "Abu Dhabi",
            "Sharjah",
            "Ajman",
            "Al Ain",
            "Ras Al Khaimah",
            "Fujairah",
            "Umm Al Quwain",
          ].map((name) => ({ "@type": "City", name })),
          { "@type": "Country", name: "United Arab Emirates" },
        ],
        foundingDate: "2014",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+971566264074",
            email: BUSINESS.email,
            contactType: "customer service",
            areaServed: "AE",
            hoursAvailable: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: days,
              opens: "00:00",
              closes: "23:59",
            },
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "25",
          bestRating: "5",
          worstRating: "1",
        },

        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Moving and packing services",
          itemListElement: serviceOffers.map(([slug, name]) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": `${SITE_URL}/${slug}/#service`,
              name,
              url: `${SITE_URL}/${slug}/`,
            },
          })),
        },
        sameAs: [
          BUSINESS.mapsHref,
          "https://www.facebook.com/YOUR-FACEBOOK-PAGE",
          "https://www.instagram.com/YOUR-INSTAGRAM-HANDLE/",
          "https://www.tiktok.com/@YOUR-TIKTOK-HANDLE",
          "https://x.com/YOUR-X-HANDLE",
        ].filter((u) => !u.includes("YOUR-")),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: BUSINESS.name,
        alternateName: "Al Hatem Movers",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-US",
      },
    ],
  };
}

export const abs = (path: string) => `${SITE_URL}${path}`;

type PageSchemaArgs = {
  path: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  pageType?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
  crumbs?: readonly (readonly [name: string, path: string])[];
  service?: {
    name: string;
    serviceType: string;
    description: string;
    areaServed: unknown;
  };
  faqs?: readonly (readonly [question: string, answer: string])[];
  extra?: readonly unknown[];
  webPageExtra?: Record<string, unknown>;
};

export function pageSchema({
  path,
  title,
  description,
  image,
  imageAlt,
  pageType = "WebPage",
  crumbs = [],
  service,
  faqs,
  extra = [],
  webPageExtra = {},
}: PageSchemaArgs) {
  const url = abs(path);
  const trail = [["Home", "/"] as const, ...crumbs];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": pageType,
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        inLanguage: "en-US",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: abs(image),
          caption: imageAlt,
        },
        ...webPageExtra,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: trail.map(([name, p], i) => ({
          "@type": "ListItem",
          position: i + 1,
          name,
          item: abs(p),
        })),
      },
      ...(service
        ? [
            {
              "@type": "Service",
              "@id": `${url}#service`,
              name: service.name,
              serviceType: service.serviceType,
              description: service.description,
              url,
              mainEntityOfPage: { "@id": `${url}#webpage` },
              provider: { "@id": `${SITE_URL}/#organization` },
              areaServed: service.areaServed,
              image: abs(image),
            },
          ]
        : []),
      ...(faqs
        ? [
            {
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              isPartOf: { "@id": `${url}#webpage` },
              mainEntity: faqs.map(([name, text]) => ({
                "@type": "Question",
                name,
                acceptedAnswer: { "@type": "Answer", text },
              })),
            },
          ]
        : []),
      ...extra,
    ],
  };
}
