import type { MetadataRoute } from "next";

import { site } from "@/data/profile";

const routes = ["/", "/projects", "/robotics", "/music", "/resume"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = site.url.replace(/\/$/, "");
  const lastModified = new Date("2026-06-27");

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
