import type { Metadata } from "next";
import { V2Header } from "@/components/v2/V2Header";
import { V2Footer } from "@/components/v2/V2Footer";

export const metadata: Metadata = {
  title: {
    default: "Tanvi IT Solutions — second design",
    // Without this, a plain string above would reset the root template and
    // every page below would lose the brand suffix.
    template: "%s | Tanvi IT Solutions",
  },
  description:
    "An alternative design for Tanvi IT Solutions: credentials, contract vehicles and capabilities first, in a conventional blue-and-white layout.",
  // A design option, not a page for search engines to index alongside the site.
  robots: { index: false, follow: false },
};

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <V2Header />
      <main id="main" className="flex-1">{children}</main>
      <V2Footer />
    </>
  );
}
