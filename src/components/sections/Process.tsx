"use client";

import { processSteps } from "@/lib/site-content";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const COLS_SM = 2;
const COLS_LG = 4;

export function Process({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  const lastIndex = processSteps.length - 1;

  return (
    <RevealGroup className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
      {processSteps.map((step, index) => {
        // The connector runs from each step's marker to the next one. It has to
        // be drawn per-step (not as one bar across the section) so it also
        // appears on the second row, and it's hidden wherever a row ends.
        const endsSmRow = (index + 1) % COLS_SM === 0;
        const endsLgRow = (index + 1) % COLS_LG === 0;
        const isLast = index === lastIndex;

        const connector = [
          "pointer-events-none absolute top-6 left-14 -right-10 h-px",
          dark ? "bg-white/15" : "bg-slate-200",
          "hidden",
          isLast ? "" : endsSmRow ? "sm:hidden" : "sm:block",
          isLast ? "" : endsLgRow ? "lg:hidden" : "lg:block",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <RevealItem key={step.title} className="relative">
            {!isLast && <span className={connector} aria-hidden />}

            <span
              className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold-500 font-display text-lg font-bold shadow-sm ${
                dark ? "bg-ink-950 text-gold-400" : "bg-white text-gold-600"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3
              className={`mt-4 font-display text-lg font-semibold ${
                dark ? "text-white" : "text-ink-900"
              }`}
            >
              {step.title}
            </h3>
            <p
              className={`mt-1.5 text-sm leading-relaxed ${
                dark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {step.description}
            </p>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
