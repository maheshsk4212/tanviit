import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

/**
 * Chrome for the original design. It lives in a route group so the URLs are
 * unchanged — "/" and "/services" are still exactly that — while the second
 * design under /v2 can carry its own header and footer.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
