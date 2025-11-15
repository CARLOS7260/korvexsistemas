import type { MetadataRoute } from "next";

const baseUrl = "https://korvex.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = ["", "/politica-de-privacidade", "/politica-de-cookies", "/termos-de-uso"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.6,
  }));
}

