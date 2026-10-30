import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pivx-alliance-registry-lisa.vercel.app";
  const routes = ["", "/protocol", "/submit"];
  const slugs = ["allnodes-2018", "ark-io-2021", "blockdx-2022", "degenswap-labs"];
  return [...routes, ...slugs.map((s) => `/alliance/${s}`)].map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date("2026-10-30"),
  }));
}
