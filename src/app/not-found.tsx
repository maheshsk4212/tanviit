import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section } from "@/components/ui/Section";
import { mainNav } from "@/lib/site-content";

/**
 * Every page opens on a dark hero, which is what the transparent top nav is
 * drawn against — on a bare white page its white logo and links would be
 * invisible. So the 404 gets the same dark PageHeader as everything else.
 */
export default function NotFound() {
  return (
    <>
      <PageHeader
        eyebrow="404"
        title="We couldn't find that page."
        accent="that page."
        description="The link may be out of date, or the page may have moved. Here's where to go instead."
      />

      <Section tone="muted">
        <div className="flex flex-col gap-8">
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:-translate-y-0.5"
          >
            Back to home
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>

          <ul className="flex flex-wrap gap-3">
            {mainNav
              .filter((item) => item.href !== "/")
              .map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-full border border-line bg-gradient-to-b from-surface to-surface-muted px-5 py-2.5 text-sm font-semibold text-fg shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-elevated"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
