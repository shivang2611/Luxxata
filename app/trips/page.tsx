import CatalogueView from "@/components/lx/views/CatalogueView";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Trips",
  description: "Private Egypt itineraries planned from India: Cairo and Giza, Nile cruises, Luxor and the Red Sea, with prices per person.",
  path: "/trips",
});

export default function TripsPage() {
  return <CatalogueView />;
}
