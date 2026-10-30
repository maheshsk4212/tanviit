import { ChevronDown } from "lucide-react";
import { type ReactNode } from "react";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export interface AccordionRow {
  title: string;
  meta?: string;
  children: ReactNode;
}

/**
 * Disclosure list, the pattern the reference uses for its own fourteen
 * contract vehicles: one row each, detail on demand. It keeps a long list
 * scannable — a buyer finds their vehicle by name and opens only that one —
 * where fourteen cards would push everything else off the page.
 *
 * Built on <details>/<summary>, so it works without JavaScript, is operable
 * from the keyboard, and is announced correctly by screen readers. The chevron
 * turns on open; the body slides rather than snapping, and holds still for
 * anyone who has asked for reduced motion.
 */
export function V2Accordion({
  rows,
  defaultOpen = 0,
}: {
  rows: AccordionRow[];
  /** Index of the row that starts open; -1 for all closed. */
  defaultOpen?: number;
}) {
  return (
    <RevealGroup className="divide-y divide-navy-200 overflow-hidden rounded-2xl border border-navy-200 bg-white">
      {rows.map((row, i) => (
        <RevealItem key={row.title}>
          <details className="group" open={i === defaultOpen}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-6 transition-colors duration-300 hover:bg-navy-50 sm:px-8 [&::-webkit-details-marker]:hidden">
              <span className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="font-display text-xl font-semibold tracking-[-0.02em] text-navy-900 sm:text-2xl">
                  {row.title}
                </span>
                {row.meta ? (
                  <span className="rounded-full border border-navy-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-navy-700">
                    {row.meta}
                  </span>
                ) : null}
              </span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-navy-200 text-flame-600 transition-all duration-300 group-hover:border-flame-500 group-open:bg-flame-600 group-open:text-white">
                <ChevronDown
                  className="h-4 w-4 transition-transform duration-300 group-open:rotate-180"
                  aria-hidden
                />
              </span>
            </summary>
            <div className="px-6 pb-8 sm:px-8 motion-safe:animate-[accordion-open_300ms_ease-out]">
              {row.children}
            </div>
          </details>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
