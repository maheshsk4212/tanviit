import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Shared hero for interior pages. Big, tightly-tracked, medium-weight display
 * type on a warm dark ground — the same "impact from scale, not stroke weight"
 * language as the homepage hero, so every page opens clean and bold.
 *
 * Pass `accent` as a trailing substring of `title` to render that part as the
 * gold gradient (e.g. title="Domain expertise. Proven impact." accent="Proven impact.").
 */
export function PageHeader({
  eyebrow,
  title,
  accent,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
  children?: ReactNode;
}) {
  const splitAt = accent ? title.length - accent.length : -1;
  return (
    <section className="relative overflow-hidden border-b border-line mesh-dark">
      <div className="absolute inset-0 grid-overlay" aria-hidden />
      <div className="absolute inset-0 noise-overlay opacity-30" aria-hidden />
      <div
        className="absolute -right-24 -top-16 h-96 w-96 rounded-full bg-gold-500/20 blur-[120px] animate-pulse-glow"
        aria-hidden
      />
      <Container className="relative py-20 sm:py-28 lg:py-32">
        <Reveal>
          {eyebrow ? (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.03] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {splitAt > 0 ? (
              <>
                {title.slice(0, splitAt)}
                <span className="text-gradient-gold">{accent}</span>
              </>
            ) : (
              title
            )}
          </h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
              {description}
            </p>
          ) : null}
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
