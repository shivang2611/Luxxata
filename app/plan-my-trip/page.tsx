import EnquiryView from "@/components/lx/views/EnquiryView";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Plan My Trip",
  description: "Tell us about your Egypt trip. A planner replies personally within one working day with a route, named stays and an exact price.",
  path: "/plan-my-trip",
});

export default function EnquiryPage() {
  return <EnquiryView />;
}
