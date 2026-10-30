import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-content";

/**
 * /v2 is a design option rather than a second public site, so it is kept out
 * of the index — the pages themselves also carry `noindex`.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/v2", "/v2/"] }],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
