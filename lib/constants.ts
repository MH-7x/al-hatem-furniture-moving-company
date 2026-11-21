export const SITE_URL = (
  process.env.SITE_URL ?? "http://localhost:3000"
).replace(/\/+$/, "");

export const BUSINESS = {
  name: "Al Hatem Furniture Moving Company",
  arabicName: "شركة الحاتم لنقل اثاث",
  shortName: "Al Hatem Movers",
  phoneDisplay: "056 6264074",
  phoneLocal: "056 6264074",
  phoneHref: "tel:+971566264074",
  whatsappHref: "https://wa.me/971566264074",
  whatsappQuoteHref:
    "https://wa.me/971566264074?text=Hello%20Al%20Hatem%20Movers%20I%20would%20like%20to%20get%20a%20free%20moving%20quote.",
  email: "alhatemfurnituremovingcompany@gmail.com",
  emailHref: "mailto:alhatemfurnituremovingcompany@gmail.com",
  addressFull:
    "Office No. 402, NH Collection Dubai The Palm, Al Naghal, Palm Jumeirah (Nakhlat Jumeira), Dubai, United Arab Emirates",
  addressShort:
    "Office No. 402, NH Collection Dubai The Palm, Palm Jumeirah, Dubai",
  mapsHref: "https://maps.google.com/?cid=2687589740048274286",
  reviewsHref:
    "https://search.google.com/local/reviews?placeid=ChIJKUr3GoxrXz4RbtOPDaE8TCU",
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.7054042103737!2d55.1390611!3d25.1118318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b8c1af74a29%3A0x254c3ca10d8fd36e!2zQWwgSGF0ZW0gRnVybml0dXJlIE1vdmluZyBDb21wYW55IC0g2LTYsdmD2Kkg2KfZhNit2KfYqtmFINmE2YbZgtmEINin2KvYp9ir!5e0!3m2!1sen!2s!4v1795079461886!5m2!1sen!2s",
  hours: "Open 24 hours, 7 days a week",
} as const;

export const SOCIALS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/alhatemfurnituremovingcompany",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/alhatemfurnituremovingcompany",
  },

  { name: "X", href: "https://x.com/YOUR-X-HANDLE" },
] as const;

export const activeSocials = () =>
  SOCIALS.filter((s) => !s.href.includes("YOUR-"));

export const SERVICE_LINKS = [
  {
    href: "/home-movers-and-packers-in-dubai/",
    label: "Home Movers and Packers in Dubai",
  },
  { href: "/villa-movers-in-dubai/", label: "Villa Movers in Dubai" },
  { href: "/apartment-movers-in-dubai/", label: "Apartment Movers in Dubai" },
  { href: "/office-movers-in-dubai/", label: "Office Movers in Dubai" },
  { href: "/furniture-movers-in-dubai/", label: "Furniture Movers in Dubai" },
  {
    href: "/packing-and-unpacking-services-in-dubai/",
    label: "Packing and Unpacking Services in Dubai",
  },
  { href: "/storage-solutions-in-dubai/", label: "Storage Solutions in Dubai" },
  { href: "/cargo-services-in-dubai/", label: "Cargo Services in Dubai" },
] as const;

export const DUBAI_AREA_LINKS = [
  {
    href: "/movers-and-packers-in-dubai-marina/",
    label: "Movers and Packers in Dubai Marina",
    short: "Dubai Marina",
    footer: true,
  },
  {
    href: "/movers-and-packers-in-business-bay/",
    label: "Movers and Packers in Business Bay",
    short: "Business Bay",
    footer: true,
  },
  {
    href: "/movers-and-packers-in-jvc/",
    label: "Movers and Packers in JVC",
    short: "JVC",
    footer: true,
  },
  {
    href: "/movers-and-packers-in-mirdif/",
    label: "Movers and Packers in Mirdif",
    short: "Mirdif",
    footer: true,
  },
  {
    href: "/movers-and-packers-in-dubai-hills-estate/",
    label: "Movers and Packers in Dubai Hills Estate",
    short: "Dubai Hills Estate",
    footer: true,
  },
  {
    href: "/movers-and-packers-in-downtown-dubai/",
    label: "Movers and Packers in Downtown Dubai",
    short: "Downtown Dubai",
    footer: true,
  },
  {
    href: "/movers-and-packers-in-arabian-ranches/",
    label: "Movers and Packers in Arabian Ranches",
    short: "Arabian Ranches",
    footer: true,
  },
  {
    href: "/movers-and-packers-in-al-barsha/",
    label: "Movers and Packers in Al Barsha",
    short: "Al Barsha",
    footer: true,
  },
  {
    href: "/movers-and-packers-in-jumeirah/",
    label: "Movers and Packers in Jumeirah",
    short: "Jumeirah",
    footer: false,
  },
  {
    href: "/movers-and-packers-in-deira/",
    label: "Movers and Packers in Deira",
    short: "Deira",
    footer: false,
  },
  {
    href: "/movers-and-packers-in-al-quoz/",
    label: "Movers and Packers in Al Quoz",
    short: "Al Quoz",
    footer: false,
  },
] as const;

export const EMIRATE_LINKS = [
  {
    href: "/movers-and-packers-in-abu-dhabi/",
    label: "Movers and Packers in Abu Dhabi",
    short: "Abu Dhabi",
  },
  {
    href: "/movers-and-packers-in-sharjah/",
    label: "Movers and Packers in Sharjah",
    short: "Sharjah",
  },
  {
    href: "/movers-and-packers-in-ajman/",
    label: "Movers and Packers in Ajman",
    short: "Ajman",
  },
  {
    href: "/movers-and-packers-in-al-ain/",
    label: "Movers and Packers in Al Ain",
    short: "Al Ain",
  },
  {
    href: "/movers-and-packers-in-ras-al-khaimah/",
    label: "Movers and Packers in Ras Al Khaimah",
    short: "Ras Al Khaimah",
  },
  {
    href: "/movers-and-packers-in-fujairah/",
    label: "Movers and Packers in Fujairah",
    short: "Fujairah",
  },
] as const;

export const ALL_PATHS: readonly string[] = [
  "/",
  "/services/",
  "/areas-we-serve/",
  "/about/",
  "/contacts/",
  "/privacy-policy/",
  ...SERVICE_LINKS.map((l) => l.href),
  ...DUBAI_AREA_LINKS.map((l) => l.href),
  ...EMIRATE_LINKS.map((l) => l.href),
];
