"use client";

import { type ReactNode } from "react";

/**
 * Tracks the pointer across a grid and writes its position (relative to each
 * card) into `--x`/`--y` on every `.spotlight` child, which the CSS uses to
 * paint a soft light that spills across neighbouring cards.
 */
export function SpotlightGrid({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`spotlight-grid ${className}`}
      onPointerMove={(e) => {
        for (const card of e.currentTarget.querySelectorAll<HTMLElement>(".spotlight")) {
          const rect = card.getBoundingClientRect();
          card.style.setProperty("--x", `${e.clientX - rect.left}px`);
          card.style.setProperty("--y", `${e.clientY - rect.top}px`);
        }
      }}
    >
      {children}
    </div>
  );
}
