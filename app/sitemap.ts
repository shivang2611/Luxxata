import type { MetadataRoute } from "next";
import { COLLS, TRIPS } from "@/lib/data";
import { PATHS, SITE_URL } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...Object.values(PATHS),
    ...COLLS.map((c: { id: string }) => "/collections/" + c.id),
    ...TRIPS.map((t: { id: string }) => "/trips/" + t.id),
  ];
  return paths.map((p) => ({ url: new URL(p, SITE_URL).toString(), changeFrequency: "weekly", priority: p === "/" ? 1 : 0.7 }));
}
