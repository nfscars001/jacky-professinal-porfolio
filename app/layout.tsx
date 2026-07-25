import type { Metadata } from "next";
import { Geist, Space_Mono, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { SkipLink } from "@/components/layout/skip-link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

/* =============================================================================
   FONTS (§13) — loaded via next/font, no CSS @import
   ============================================================================= */
const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-geist",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

/* =============================================================================
   GLOBAL METADATA (§17)
   ============================================================================= */
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://jackyho.design"
  ),
  title: {
    default: "Jacky Ho — Product Designer & Creative Technologist",
    template: "%s | Jacky Ho",
  },
  description:
    "Toronto-based product designer and creative technologist working across AI platforms, digital tools, and connected products. Founder at Westside Union, Faculty at George Brown College.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Jacky Ho",
    images: [
      {
        url: "/images/social/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Jacky Ho — Product Designer & Creative Technologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jacky Ho — Product Designer & Creative Technologist",
    description:
      "Toronto-based product designer and creative technologist.",
    images: ["/images/social/og-default.jpg"],
  },
  icons: {
    icon: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
};

/* =============================================================================
   ROOT LAYOUT
   ============================================================================= */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${spaceMono.variable} ${syne.variable}`}
    >
      <body>
        <SkipLink />
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
