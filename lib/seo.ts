import type { Metadata } from "next";
import { COLLS, TRIPS } from "./data";
import { SITE_URL } from "./routes";

export const SITE_NAME = "Amira — Journeys in Egypt";

type Trip = (typeof TRIPS)[number];
type Coll = (typeof COLLS)[number];

export const findTrip = (slug: string): Trip | undefined => TRIPS.find((t: Trip) => t.id === slug);
export const findColl = (slug: string): Coll | undefined => COLLS.find((c: Coll) => c.id === slug);

const abs = (path: string) => new URL(path, SITE_URL).toString();

export function pageMetadata({ title, description, path, image }: { title: string; description: string; path: string; image?: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, images: image ? [{ url: image }] : undefined },
    twitter: { card: "summary_large_image", title, description, images: image ? [image] : undefined },
  };
}

export function organisationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Amira",
    alternateName: SITE_NAME,
    url: SITE_URL,
    description: "Egypt holidays, planned from India.",
    areaServed: "IN",
  };
}

export function tripLd(t: Trip) {
  return {
    "@context": "https://schema.org",
    "@type": ["TouristTrip", "Product"],
    name: t.name,
    description: t.why,
    image: abs(t.img),
    url: abs("/trips/" + t.id),
    touristType: t.best,
    itinerary: {
      "@type": "ItemList",
      itemListElement: t.legs.map((leg, i) => {
        const [place, nights] = leg as [string, number];
        return {
          "@type": "ListItem",
          position: i + 1,
          item: { "@type": "Place", name: `${place} (${nights} night${nights > 1 ? "s" : ""})` },
        };
      }),
    },
    ...(t.price
      ? { offers: { "@type": "Offer", price: t.price, priceCurrency: "INR", availability: "https://schema.org/InStock", url: abs("/trips/" + t.id) } }
      : {}),
  };
}

export function faqLd(faqs: string[][]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
}
