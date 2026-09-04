import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { provenResults } from "@/lib/site-content";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

/**
 * "Proven results" — the pattern every strong federal competitor leans on
 * (Alpha Omega's "Proven success"): a short context tag, one big number, and a
 * one-line outcome. Concrete numbers beat adjectives.
 *
 * NEEDS-CONFIRMATION: the metrics below are drawn from the aggregate
 * achievements deck. To match a best-in-class page these should become
 * specific, named-program wins (e.g. "$250k saved per Navy audit cycle").
 * Swap in real client outcomes once approved for public use.
 */
export function ProvenResults() {
  return (
    <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-3" stagger={0.09}>
      {provenResults.map((r) => (
        <RevealItem key={r.label} className="h-full">
          <div className="group flex h-full flex-col rounded-card border border-line bg-surface p-8 shadow-elevated transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated-lg">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              {r.context}
            </p>
            <p className="mt-6 font-display text-5xl font-semibold tracking-tight text-fg sm:text-6xl">
              {r.metric}
            </p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-fg-muted">
              {r.label}
            </p>
            <Link
              href={r.href}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-fg transition-colors hover:text-gold-600"
            >
              {r.cta}
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </Link>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
