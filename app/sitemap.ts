import type { MetadataRoute } from "next";
import { ALL_PATHS, SITE_URL } from "@/lib/constants";

/**
 * Per-page sitemap data.
 *
 * - `lastModified`: hard-coded, format YYYY-MM-DD. Update it MANUALLY for a
 *   page whenever you make a change to that page.
 * - `image`: the page's main image (same file as the `IMAGE` const in the
 *   page's own page.tsx). Update it here if you swap the main image.
 */
type PageMeta = { lastModified: string; image: string };

const PAGES: Record<string, PageMeta> = {
  // ── Core pages ──
  "/": {
    lastModified: "2026-11-19",
    image: "/images/home/al-hatem-movers-dubai-villa-move.webp",
  },
  "/services/": {
    lastModified: "2026-11-19",
    image: "/images/services/moving-and-packing-services-dubai.webp",
  },
  "/areas-we-serve/": {
    lastModified: "2026-11-19",
    image: "/images/global/uae-moving-service-coverage.webp",
  },
  "/about/": {
    lastModified: "2026-11-19",
    image: "/images/global/al-hatem-movers-team-and-truck-uae.webp",
  },
  "/contacts/": {
    lastModified: "2026-11-19",
    image: "/images/global/al-hatem-movers-team-and-truck-uae.webp",
  },
  "/privacy-policy/": {
    lastModified: "2026-11-19",
    image: "/images/global/al-hatem-movers-og-default.webp",
  },

  // ── Services ──
  "/home-movers-and-packers-in-dubai/": {
    lastModified: "2026-11-19",
    image: "/images/home-movers-and-packers-in-dubai/home-movers-dubai-family-house-move.webp",
  },
  "/villa-movers-in-dubai/": {
    lastModified: "2026-11-19",
    image: "/images/villa-movers-in-dubai/villa-movers-dubai-crew-at-work.webp",
  },
  "/apartment-movers-in-dubai/": {
    lastModified: "2026-11-19",
    image: "/images/apartment-movers-in-dubai/apartment-movers-dubai-high-rise-move.webp",
  },
  "/office-movers-in-dubai/": {
    lastModified: "2026-11-19",
    image: "/images/office-movers-in-dubai/office-movers-dubai-at-work.webp",
  },
  "/furniture-movers-in-dubai/": {
    lastModified: "2026-11-19",
    image: "/images/furniture-movers-in-dubai/furniture-movers-dubai-wrapped-furniture.webp",
  },
  "/packing-and-unpacking-services-in-dubai/": {
    lastModified: "2026-11-19",
    image: "/images/packing-and-unpacking-services-in-dubai/packing-unpacking-services-dubai.webp",
  },
  "/storage-solutions-in-dubai/": {
    lastModified: "2026-11-19",
    image: "/images/storage-solutions-in-dubai/storage-services-dubai-hero.webp",
  },
  "/cargo-services-in-dubai/": {
    lastModified: "2026-11-19",
    image: "/images/cargo-services-in-dubai/cargo-services-dubai-hero.webp",
  },

  // ── Dubai areas ──
  "/movers-and-packers-in-dubai-marina/": {
    lastModified: "2026-11-19",
    image: "/images/movers-and-packers-in-dubai-marina/movers-packers-dubai-marina.webp",
  },
  "/movers-and-packers-in-business-bay/": {
    lastModified: "2026-11-19",
    image: "/images/movers-and-packers-in-business-bay/movers-packers-business-bay.webp",
  },
  "/movers-and-packers-in-jvc/": {
    lastModified: "2026-11-19",
    image: "/images/movers-and-packers-in-jvc/movers-packers-jvc.webp",
  },
  "/movers-and-packers-in-mirdif/": {
    lastModified: "2026-11-19",
    image: "/images/movers-and-packers-in-mirdif/movers-packers-mirdif.webp",
  },
  "/movers-and-packers-in-dubai-hills-estate/": {
    lastModified: "2026-11-19",
    image: "/images/movers-and-packers-in-dubai-hills-estate/movers-packers-dubai-hills-estate.webp",
  },
  "/movers-and-packers-in-downtown-dubai/": {
    lastModified: "2026-11-19",
    image: "/images/movers-and-packers-in-downtown-dubai/movers-packers-downtown-dubai.webp",
  },
  "/movers-and-packers-in-arabian-ranches/": {
    lastModified: "2026-11-19",
    image: "/images/movers-and-packers-in-arabian-ranches/movers-packers-arabian-ranches.webp",
  },
  "/movers-and-packers-in-al-barsha/": {
    lastModified: "2026-11-19",
    image: "/images/movers-and-packers-in-al-barsha/movers-packers-al-barsha.webp",
  },
  "/movers-and-packers-in-jumeirah/": {
    lastModified: "2026-11-19",
    image: "/images/movers-and-packers-in-jumeirah/movers-packers-jumeirah.webp",
  },
  "/movers-and-packers-in-deira/": {
    lastModified: "2026-11-19",
    image: "/images/movers-and-packers-in-deira/movers-packers-deira.webp",
  },
  "/movers-and-packers-in-al-quoz/": {
    lastModified: "2026-11-19",
    image: "/images/movers-and-packers-in-al-quoz/movers-packers-al-quoz.webp",
  },

  // ── Other emirates ──
  "/movers-and-packers-in-abu-dhabi/": {
    lastModified: "2026-11-19",
    image: "/images/movers-and-packers-in-abu-dhabi/movers-packers-abu-dhabi.webp",
  },
  "/movers-and-packers-in-sharjah/": {
    lastModified: "2026-11-19",
    image: "/images/movers-and-packers-in-sharjah/movers-packers-sharjah.webp",
  },
  "/movers-and-packers-in-ajman/": {
    lastModified: "2026-11-19",
    image: "/images/movers-and-packers-in-ajman/movers-packers-ajman.webp",
  },
  "/movers-and-packers-in-al-ain/": {
    lastModified: "2026-11-19",
    image: "/images/movers-and-packers-in-al-ain/movers-packers-al-ain.webp",
  },
  "/movers-and-packers-in-ras-al-khaimah/": {
    lastModified: "2026-11-19",
    image: "/images/movers-and-packers-in-ras-al-khaimah/movers-packers-ras-al-khaimah.webp",
  },
  "/movers-and-packers-in-fujairah/": {
    lastModified: "2026-11-19",
    image: "/images/movers-and-packers-in-fujairah/movers-packers-fujairah.webp",
  },
};

export default function sitemap(): MetadataRoute.Sitemap {
  return ALL_PATHS.map((path) => {
    const page = PAGES[path];
    if (!page) {
      // Fail the build loudly instead of silently shipping a URL with no lastmod/image.
      throw new Error(`sitemap.ts: add "${path}" to PAGES (lastModified + image).`);
    }

    return {
      url: `${SITE_URL}${path}`,
      lastModified: page.lastModified,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : path.split("/").filter(Boolean).length === 1 ? 0.8 : 0.7,
      images: [`${SITE_URL}${page.image}`],
    };
  });
}
