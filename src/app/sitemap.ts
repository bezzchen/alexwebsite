import type { MetadataRoute } from "next";
import { absoluteUrl, sitemapPages } from "@/src/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return sitemapPages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified,
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : page.path === "/book" ? 0.9 : 0.8,
  }));
}
