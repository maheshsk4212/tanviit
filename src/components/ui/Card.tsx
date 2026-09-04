import { type ReactNode } from "react";

/**
 * Shared surface for card grids. Layered rather than flat: a soft vertical
 * gradient, a gold rule that draws across the top on hover, and a warm wash
 * that blooms behind the content — so grids read as premium instead of as
 * rows of plain bordered boxes.
 */
export function Card({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`group/card relative overflow-hidden rounded-card border border-line bg-gradient-to-b from-surface to-surface-muted p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gold-300 hover:shadow-elevated-lg ${className}`}
    >
      <span
        className="pointer-events-none absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-gold-300 transition-transform duration-300 ease-out group-hover/card:scale-x-100"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold-400/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover/card:opacity-100"
        aria-hidden
      />
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </div>
  );
}
