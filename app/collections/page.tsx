import CollectionsView from "@/components/lx/views/CollectionsView";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Find Your Egypt",
  description: "Five ways to see Egypt from India: ancient wonders, Nile cruises, all-inclusive Red Sea escapes, Sharm after sunset, and the deserts and oases.",
  path: "/collections",
});

export default function CollectionsPage() {
  return <CollectionsView />;
}
