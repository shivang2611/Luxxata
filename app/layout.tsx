import type { Metadata } from "next";
import { Merriweather, Outfit } from "next/font/google";
import LuxxataApp from "@/components/lx/LuxxataApp";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, organisationLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/routes";
import "./globals.css";
import "./pseudo.css";

const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });
const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
});

const description = "Egypt holidays, planned from India. Find your kind of Egypt: history, the Nile, the Red Sea coast and the desert.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s · Amira` },
  description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "Amira", title: SITE_NAME, description, locale: "en_IN", url: "/" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${merriweather.variable}`}>
      <body>
        <JsonLd data={organisationLd()} />
        <LuxxataApp>{children}</LuxxataApp>
      </body>
    </html>
  );
}
