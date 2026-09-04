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
          // Gradient rail rather than a flat hairline, fading toward the next step.
          "pointer-events-none absolute top-7 left-[4.5rem] -right-10 h-px bg-gradient-to-r to-transparent",
          dark ? "from-gold-400/50" : "from-gold-400/70",
          "hidden",
          isLast ? "" : endsSmRow ? "sm:hidden" : "sm:block",
          isLast ? "" : endsLgRow ? "lg:hidden" : "lg:block",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <RevealItem key={step.title} className="group/step relative">
            {!isLast && <span className={connector} aria-hidden />}

            {/* Oversized ghost numeral for depth behind the step. */}
            <span
              className={`pointer-events-none absolute -top-4 right-2 font-display text-7xl font-semibold leading-none transition-colors duration-300 ${
                dark
                  ? "text-white/[0.06] group-hover/step:text-gold-300/20"
                  : "text-ink-950/[0.05] group-hover/step:text-gold-500/20"
              }`}
              aria-hidden
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <span
              className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600 font-display text-lg font-semibold text-ink-950 shadow-elevated transition-transform duration-300 group-hover/step:scale-110 ${
                dark ? "ring-4 ring-ink-950" : "ring-4 ring-surface"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3
              className={`relative mt-5 font-display text-lg font-semibold tracking-tight ${
                dark ? "text-white" : "text-fg"
              }`}
            >
              {step.title}
            </h3>
            <p
              className={`relative mt-2 text-sm leading-relaxed ${
                dark ? "text-slate-200" : "text-fg-muted"
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
