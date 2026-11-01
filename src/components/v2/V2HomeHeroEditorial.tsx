import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import { type ReactNode } from "react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

export interface HomeHeroProps {
  eyebrow: string;
  title: string;
  accent: string;
  lead: string;
  facts: { value: string; label: string; node?: ReactNode }[];
  award: { label: string; name: string; detail: string; href: string };
  children?: ReactNode;
}

/**
 * Hero option B — editorial.
 *
 * Where the split option gives the headline half the width and the footage
 * the other half, this gives the headline the whole page. The type runs at
 * masthead scale across the full measure, the supporting line and the buttons
 * sit under a rule like a standfirst, and the footage comes after as a
 * cinematic band edge to edge rather than beside anything.
 *
 * It is the most confident of the three and the one that reads fastest,
 * because for the first screenful there is nothing to look at but the claim.
 * It asks the most of the words, which is the trade: if the headline ever
 * changes to something longer, this is the option that feels it.
 *
 * Still left-ranged, like every other heading on the site.
 */
export function V2HomeHeroEditorial({
  eyebrow,
  title,
  accent,
  lead,
  facts,
  award,
  children,
}: HomeHeroProps) {
  return (
    <section className="relative isolate bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <Reveal>
          {/* Eyebrow, then a rule that runs out to the margin — the masthead
              device that tells you the type below is the headline. */}
          <div className="flex items-center gap-5">
            <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.22em] text-flame-700">
              {eyebrow}
            </span>
            <span className="h-px flex-1 bg-navy-200" aria-hidden />
          </div>

          <h1 className="mt-8 text-balance font-display text-[2.75rem] font-bold leading-[0.98] tracking-[-0.04em] text-fg sm:text-6xl lg:text-[5rem]">
            {title} <span className="text-flame-600">{accent}</span>
          </h1>
        </Reveal>

        {/* Standfirst and actions, ranged under a rule like a broadsheet. */}
        <Reveal delay={0.1}>
          <div className="mt-10 grid gap-8 border-t border-navy-200 pt-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
            <p className="max-w-2xl text-lg leading-relaxed text-fg-muted sm:text-xl">{lead}</p>
            {children ? <div className="lg:pb-1">{children}</div> : null}
          </div>
        </Reveal>
      </div>

      {/* The footage, full width and letterboxed. Nothing animates it. */}
      <Reveal delay={0.16}>
        <div className="relative mt-12 lg:mt-16">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy-950 sm:aspect-[21/9]">
            <Image
              src="/hero-capitol-poster.jpg"
              alt="The United States Capitol at dusk"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <video
              src="/hero-capitol-loop.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
              tabIndex={-1}
              className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-navy-950/10 to-transparent"
              aria-hidden
            />

            <div className="absolute inset-x-0 bottom-0">
              <div className="mx-auto flex w-full max-w-7xl flex-wrap items-end justify-between gap-5 px-4 pb-6 sm:px-6 sm:pb-8 lg:px-8">
                <p className="text-sm font-medium text-white sm:text-base">
                  Serving federal missions from Chantilly, Virginia
                </p>
                {/* Filled dark rather than frosted white: at 10% white the
                    flame label measured 3.66:1 against a worst-case bright
                    frame, so its legibility depended on this particular clip
                    staying dark. This fill does not. */}
                <Link
                  href={award.href}
                  className="group inline-flex items-center gap-4 rounded-2xl border border-white/20 bg-navy-950/75 px-5 py-4 backdrop-blur-md transition-colors duration-300 hover:border-flame-400/70 hover:bg-navy-950/85"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-flame-600 text-white">
                    <Award className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-flame-300">
                      {award.label}
                    </span>
                    <span className="mt-0.5 block font-display text-base font-semibold leading-snug text-white">
                      {award.name}
                    </span>
                  </span>
                  <ArrowRight
                    className="h-4 w-4 shrink-0 text-white transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Proof as a tinted bar, closing the hero. */}
      <div className="bg-navy-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <RevealGroup className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4" stagger={0.06}>
            {facts.map((fact) => (
              <RevealItem key={fact.label}>
                <p className="font-display text-4xl font-semibold tracking-[-0.03em] text-navy-900">
                  {fact.node ?? fact.value}
                </p>
                <p className="mt-2 text-[13px] font-medium leading-snug text-fg-subtle">
                  {fact.label}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
