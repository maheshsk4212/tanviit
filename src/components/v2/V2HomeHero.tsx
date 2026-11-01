import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, MapPin } from "lucide-react";
import { type ReactNode } from "react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

/**
 * The homepage hero, and the only one on the site that is light.
 *
 * The previous version put the Capitol time-lapse full-bleed behind the type
 * with a dark scrim over it and a 30-second scale loop running underneath.
 * Three things were wrong with that. The headline sat on moving pixels, so its
 * contrast changed frame to frame and it never read as crisply as type on a
 * solid field. The slow zoom was visible behind the text as a drift. And a
 * dark hero on a site whose every other band is white or pale meant the first
 * thing a visitor saw was the one section that looked like a different site.
 *
 * So the type now sits on a pale brand tint at full contrast, and the footage
 * moves into a framed panel beside it where it can play without anything
 * depending on it. Nothing loops, scales or drifts: the only motion is the
 * entrance reveal and the video itself.
 *
 * The layout is the one that serious firms in this sector converge on — a
 * readable measure of type on the left, one strong visual on the right, proof
 * immediately under the fold — because it survives the thing a hero is
 * actually for: being understood in two seconds.
 */
export function V2HomeHero({
  eyebrow,
  title,
  accent,
  lead,
  facts,
  award,
  children,
}: {
  eyebrow: string;
  title: string;
  /** Second line, set in the accent. */
  accent: string;
  lead: string;
  facts: { value: string; label: string; node?: ReactNode }[];
  /** The credential card that overlaps the panel. */
  award: { label: string; name: string; detail: string; href: string };
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-50">
      {/* A wash rather than a flat fill, so the band has depth without
          taking any contrast away from the headline. */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(70%_60%_at_85%_0%,rgb(255_255_255)_0%,rgb(255_255_255/0.75)_35%,transparent_75%)]"
        aria-hidden
      />
      <HeroGrid />

      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-navy-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy-700 shadow-[0_1px_2px_rgb(6_26_46/0.06)]">
              <span className="h-1.5 w-1.5 rounded-full bg-flame-600" aria-hidden />
              {eyebrow}
            </span>

            {/* Sized so the accent line holds together: it measures 616px at
                4rem against a 662px column, where 4.25rem overran and broke
                "Built for / what's next." across two lines. */}
            <h1 className="mt-7 text-balance font-display text-[2.75rem] font-bold leading-[1.02] tracking-[-0.035em] text-fg sm:text-6xl lg:text-[4rem]">
              {title}
              <span className="mt-1 block text-flame-600">{accent}</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-fg-muted sm:text-xl">{lead}</p>

            {children}
          </Reveal>

          <Reveal delay={0.14}>
            <HeroPanel award={award} />
          </Reveal>
        </div>

        {/* Proof sits under the fold line, not buried three sections down. */}
        <RevealGroup
          className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-navy-200 pt-10 sm:grid-cols-4 lg:mt-20"
          stagger={0.06}
        >
          {facts.map((fact) => (
            <RevealItem key={fact.label}>
              <p className="font-display text-4xl font-semibold tracking-[-0.03em] text-navy-900 sm:text-[2.75rem]">
                {fact.node ?? fact.value}
              </p>
              <p className="mt-2 text-[13px] font-medium leading-snug text-fg-subtle">
                {fact.label}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/**
 * The footage, framed. It plays muted and loops, but nothing is animating the
 * element itself — no scale, no drift — so there is no movement in the
 * periphery while someone is reading the headline.
 */
function HeroPanel({
  award,
}: {
  award: { label: string; name: string; detail: string; href: string };
}) {
  return (
    <div className="relative">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-navy-950 shadow-[0_30px_70px_-30px_rgb(6_26_46/0.45)] ring-1 ring-navy-950/10 lg:aspect-[5/4]">
        <Image
          src="/hero-capitol-poster.jpg"
          alt="The United States Capitol at dusk"
          fill
          priority
          sizes="(min-width: 1024px) 46vw, 100vw"
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
        {/* Seats the award card against the footage without dimming it. */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-navy-950/70 to-transparent"
          aria-hidden
        />
        {/* Top-left, because the award card overlaps the bottom edge. */}
        <p className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-navy-950/60 px-3.5 py-2 text-[12px] font-medium text-white backdrop-blur-sm">
          <MapPin className="h-3.5 w-3.5" aria-hidden />
          Serving federal missions from Chantilly, Virginia
        </p>
      </div>

      {/* The award overlaps the frame — the one piece of news worth
          interrupting the picture for. On a phone it sits under the frame
          instead: overlapping there covered half the photograph. */}
      <Link
        href={award.href}
        className="group relative mt-4 flex items-center gap-4 rounded-2xl border border-navy-200 bg-white p-5 shadow-[0_20px_45px_-25px_rgb(6_26_46/0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:border-flame-500 sm:absolute sm:-bottom-8 sm:left-6 sm:right-16 sm:mt-0 lg:-right-6 lg:left-auto lg:w-[19rem]"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-flame-600 text-white">
          <Award className="h-5 w-5" aria-hidden />
        </span>
        <span className="min-w-0">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-flame-700">
            {award.label}
          </span>
          <span className="mt-0.5 block font-display text-base font-semibold leading-snug text-navy-900">
            {award.name}
          </span>
          <span className="mt-0.5 block truncate text-[13px] text-fg-subtle">{award.detail}</span>
        </span>
        <ArrowRight
          className="ml-auto hidden h-4 w-4 shrink-0 text-navy-700 transition-transform duration-300 group-hover:translate-x-1 sm:block"
          aria-hidden
        />
      </Link>
    </div>
  );
}

/** Faint engineering grid, fading out before it reaches the type. */
function HeroGrid() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 opacity-[0.5] [background-image:linear-gradient(to_right,rgb(18_52_98/0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgb(18_52_98/0.07)_1px,transparent_1px)] [background-size:68px_68px] [mask-image:radial-gradient(85%_75%_at_50%_0%,black,transparent)]"
      aria-hidden
    />
  );
}
