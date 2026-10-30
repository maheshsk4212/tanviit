import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { siteConfig, siteUrl } from "@/lib/site-content";
import "./globals.css";

// One typeface across the whole site — headings and body. Work Sans at a
// medium weight with tight tracking carries the large display type.
const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const title = `${siteConfig.name} | IT Services & Consulting`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  // Shared links rendered as a card rather than a bare URL. Pages inherit
  // this and override title and description from their own metadata.
  openGraph: {
    type: "website",
    siteName: siteConfig.legalName,
    title,
    description: siteConfig.description,
    url: siteUrl,
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.legalName} — mission-focused technology`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${workSans.variable} h-full antialiased`}>
      {/* Header and footer belong to each design's own layout: (site) for the
          original, v2 for the second one. */}
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {/* First tab stop on every page: skip the navigation. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-5 focus:py-3 focus:text-base focus:font-semibold focus:text-black focus:shadow-lg focus:outline focus:outline-2 focus:outline-black"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
