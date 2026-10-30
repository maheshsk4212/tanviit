import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { siteConfig } from "@/lib/site-content";
import "./globals.css";

// One typeface across the whole site — headings and body. Work Sans at a
// medium weight with tight tracking carries the large display type.
const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | IT Services & Consulting`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${workSans.variable} h-full antialiased`}>
      {/* Header and footer belong to each design's own layout: (site) for the
          original, v2 for the second one. */}
      <body className="flex min-h-full flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
