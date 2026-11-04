import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import TripView from "@/components/lx/views/TripView";
import { TRIPS, fmt } from "@/lib/data";
import { findTrip, pageMetadata, tripLd } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return TRIPS.map((t: { id: string }) => ({ slug: t.id }));
}

export async function generateMetadata({ params }: PageProps<"/trips/[slug]">) {
  const t = findTrip((await params).slug);
  if (!t) return {};
  const price = t.price ? ` From ${fmt(t.price)} per person.` : "";
  return pageMetadata({ title: `${t.name} · ${t.dur}`, description: t.why + price, path: "/trips/" + t.id, image: t.img });
}

export default async function TripPage({ params }: PageProps<"/trips/[slug]">) {
  const t = findTrip((await params).slug);
  if (!t) notFound();
  return (
    <>
      <JsonLd data={tripLd(t)} />
      <TripView />
    </>
  );
}
