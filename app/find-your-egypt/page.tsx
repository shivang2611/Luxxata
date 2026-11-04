import FinderView from "@/components/lx/views/FinderView";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Trip Finder",
  description: "Answer five quick questions and we'll suggest the Egypt trips that suit who you're travelling with, what you want and your budget.",
  path: "/find-your-egypt",
});

export default function FinderPage() {
  return <FinderView />;
}
