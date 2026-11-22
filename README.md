# Al Hatem Furniture Moving Company – Movers and Packers in Dubai & the UAE

Official website of **Al Hatem Furniture Moving Company** (شركة الحاتم لنقل اثاث), a licensed and insured moving company on Palm Jumeirah, Dubai. Serving homes, villas, apartments and offices across Dubai and the UAE since 2014, with packing, furniture moving, storage and cargo services.

- **Phone / WhatsApp:** [+971 56 626 4074](tel:+971566264074)
- **Email:** alhatemfurnituremovingcompany@gmail.com
- **Office:** Office No. 402, NH Collection Dubai The Palm, Al Naghal, Palm Jumeirah (Nakhlat Jumeira), Dubai, UAE
- **Hours:** Open 24 hours, 7 days a week
- **Free quote:** by phone, WhatsApp or the online quote form on the site

---

## About the company

Al Hatem Movers is a Dubai-based moving company that helps families and businesses relocate safely and with minimal stress. The team handles the whole move: careful packing, furniture dismantling and reassembly, loading, transport, unloading and set-up at the new property. Same-day moving is available subject to scheduling, and a free survey confirms the exact price before the move.

### Services

| Service                 | What it covers                                 |
| ----------------------- | ---------------------------------------------- |
| Home movers and packers | Full household relocation in Dubai             |
| Villa movers            | Large household moves in villa communities     |
| Apartment movers        | High-rise moves, lift bookings, building rules |
| Office movers           | Workstations, IT equipment, minimal downtime   |
| Furniture movers        | Safe handling, dismantling and assembly        |
| Packing and unpacking   | Packing materials, labelling, unpacking        |
| Storage solutions       | Short- and long-term secure storage            |
| Cargo services          | Household goods and commercial shipments       |

### Areas served

- **Dubai communities:** Dubai Marina, Business Bay, JVC, Mirdif, Dubai Hills Estate, Downtown Dubai, Arabian Ranches, Al Barsha, Jumeirah, Deira and Al Quoz, plus other residential and commercial districts.
- **Other emirates:** Abu Dhabi, Sharjah, Ajman, Al Ain, Ras Al Khaimah and Fujairah.

---

## About this website

A fast, mobile-first marketing website built to rank for local moving searches such as _movers and packers in Dubai_, _villa movers in Dubai_ and _office movers in Dubai_, and to turn visitors into quote requests.

**31 pages:** Home, Services, Areas We Serve, About, Contacts, Privacy Policy, 8 service pages and 18 location pages, plus a custom 404 page.

### Features

- Responsive design with three hero layouts: split (home and service pages), immersive (location pages) and bold (About and Contacts)
- One-tap Call and WhatsApp buttons, including a mobile action bar
- Quote form that opens WhatsApp with the customer's details pre-filled
- Fully static pages (pre-rendered at build time) for fast loading
- Optimized WebP images with descriptive alt text
- Accessible markup: skip link, labelled form fields, logical heading order

### SEO

- Unique title, meta description and canonical URL on every page
- Open Graph and Twitter Card tags with a social share image
- JSON-LD structured data: `MovingCompany`, `WebSite`, `WebPage`, `BreadcrumbList`, `Service` and `FAQPage`
- Auto-generated `sitemap.xml` and `robots.txt`
- Clean URLs with trailing slashes and breadcrumb navigation
- Local SEO signals: consistent name, address and phone number, map embed, and a dedicated page for each served area

---

## Tech stack

- [Next.js](https://nextjs.org) 16 (App Router) with React 19 and TypeScript
- [Tailwind CSS](https://tailwindcss.com) 4
- [lucide-react](https://lucide.dev) icons
- [pnpm](https://pnpm.io) package manager

## Getting started

**Requirements:** Node.js 20.9 or newer and pnpm.

```bash
# install dependencies
pnpm install

# create your local environment file
cp .env.example .env.local

# start the dev server at http://localhost:3000
pnpm dev
```

### Environment variables

| Variable   | Purpose                                                                                                                                                           |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `SITE_URL` | The live domain, **without** a trailing slash (e.g. `https://www.yourdomain.com`). Used for canonical URLs, Open Graph URLs, the sitemap and all structured data. |

> **Important:** set `SITE_URL` in your hosting provider's environment settings before building for production. If it is missing, the site falls back to `http://localhost:3000`.

### Scripts

| Command      | Description                  |
| ------------ | ---------------------------- |
| `pnpm dev`   | Start the development server |
| `pnpm build` | Create the production build  |
| `pnpm start` | Serve the production build   |
| `pnpm lint`  | Run ESLint                   |

## Project structure

```
app/            Pages and routes (one folder per page), layout, sitemap, robots
components/     Shared UI: header, footer, hero, cards, FAQ, quote form, map
components/hero Hero variants (split, immersive, bold) and breadcrumb
lib/            Business details, metadata helpers, JSON-LD schema
public/images/  Optimized site images, grouped by page
```

Business details (phone, email, address, hours, links) live in one place: [`lib/constants.ts`](lib/constants.ts). Update them there and the whole site, including structured data, stays in sync.

## Deployment

The site is fully static and can be deployed to [Vercel](https://vercel.com) or any host that supports Next.js.

**Before going live:**

1. Set `SITE_URL` to the live domain.
2. Replace the placeholder social links in `lib/constants.ts` with real profile URLs (placeholders are hidden automatically).
3. Add analytics and verify the site in Google Search Console, then submit `/sitemap.xml`.
4. Claim and link the Google Business Profile.

## Contact

Need to move in Dubai or anywhere in the UAE? Call or WhatsApp **+971 56 626 4074** for a free moving quote.

© 2026 Al Hatem Furniture Moving Company. All rights reserved.
