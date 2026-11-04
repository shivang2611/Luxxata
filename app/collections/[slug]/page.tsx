import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import CollectionView from "@/components/lx/views/CollectionView";
import { COLLS } from "@/lib/data";
import { faqLd, findColl, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return COLLS.map((c: { id: string }) => ({ slug: c.id }));
}

export async function generateMetadata({ params }: PageProps<"/collections/[slug]">) {
  const c = findColl((await params).slug);
  if (!c) return {};
  return pageMetadata({ title: c.name, description: c.intro || c.line, path: "/collections/" + c.id, image: c.img });
}

export default async function CollectionPage({ params }: PageProps<"/collections/[slug]">) {
  const c = findColl((await params).slug);
  if (!c) notFound();
  return (
    <>
      {c.full && c.faqs?.length ? <JsonLd data={faqLd(c.faqs)} /> : null}
      <CollectionView />
    </>
  );
}
