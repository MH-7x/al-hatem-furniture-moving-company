import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/manage-reviews-x7k2" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
