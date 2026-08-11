import type { MetadataRoute } from "next";
import { company, services } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/dienstleistungen", "/ueber-uns", "/kontakt", "/datenschutz", "/agb"];
  const serviceRoutes = services.map((service) => `/dienstleistungen/${service.slug}`);

  return [...routes, ...serviceRoutes].map((route) => ({
    url: `${company.url}${route}`,
    lastModified: new Date()
  }));
}
