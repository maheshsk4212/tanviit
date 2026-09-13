"use client";

import { ArrowLeft, ArrowRight, Check, Code2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { services } from "@/lib/site-content";
import { serviceIcons } from "@/lib/service-icons";
import { Button } from "@/components/ui/Button";

const pad = (n: number) => String(n).padStart(2, "0");
const clamp = (i: number) => Math.max(0, Math.min(services.length - 1, i));

/**
 * Every practice in one place: a tab row and arrows above a horizontal,
 * snap-scrolling strip of big cards (the next card peeks in to invite a
 * swipe). Tabs, arrows, swipes and `/services#slug` deep links all move the
 * same strip, and the active tab follows its scroll position.
 */
export function ServicesExplorer() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  /** Card a tab/arrow is travelling to; scroll updates wait until it lands. */
  const pendingRef = useRef<number | null>(null);
  const pendingTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  function select(index: number) {
    const track = trackRef.current;
    const target = clamp(index);
    const slide = track?.children[target] as HTMLElement | undefined;
    if (!track || !slide) return;

    // Highlight the chosen tab straight away, and don't let the smooth scroll
    // flick it through every card in between. The timer is a backstop in
    // case the user takes over mid-scroll and never lands on the target.
    setActive(target);
    pendingRef.current = target;
    clearTimeout(pendingTimerRef.current);
    pendingTimerRef.current = setTimeout(() => {
      pendingRef.current = null;
    }, 900);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: slide.offsetLeft, behavior: reduceMotion ? "auto" : "smooth" });
  }

  // Active card = the one whose left edge is nearest the strip's scroll
  // position (the last card can't reach the left edge, so the end wins).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const slides = Array.from(track.children) as HTMLElement[];
      const atEnd = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
      let nearest = 0;
      slides.forEach((slide, i) => {
        if (
          Math.abs(slide.offsetLeft - track.scrollLeft) <
          Math.abs(slides[nearest].offsetLeft - track.scrollLeft)
        ) {
          nearest = i;
        }
      });
      const current = atEnd ? slides.length - 1 : nearest;

      if (pendingRef.current !== null) {
        if (current !== pendingRef.current) return; // still travelling
        pendingRef.current = null;
      }
      setActive(current);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      clearTimeout(pendingTimerRef.current);
    };
  }, []);

  // Deep links: arriving on /services#rpo-solutions (or the hash changing)
  // scrolls both axes at once — the page down to the strip, honouring the
  // card's scroll margin for the fixed nav, and the strip across to the card.
  useEffect(() => {
    const syncFromHash = () => {
      const slug = window.location.hash.slice(1);
      if (!services.some((s) => s.slug === slug)) return;
      document.getElementById(slug)?.scrollIntoView({ block: "start", inline: "start" });
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="scrollbar-hide -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.slug] ?? Code2;
            const on = i === active;
            return (
              <button
                key={service.slug}
                type="button"
                onClick={() => select(i)}
                aria-controls={service.slug}
                aria-current={on ? "true" : undefined}
                className={`inline-flex shrink-0 items-center gap-2.5 rounded-full border py-1.5 pl-1.5 pr-4 text-sm font-medium transition-colors duration-300 ${
                  on
                    ? "border-deep-900 bg-deep-900 text-white"
                    : "border-line bg-surface text-fg-muted hover:border-deep-900/30 hover:text-fg"
                }`}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300 ${
                    on ? "bg-gold-500 text-deep-950" : "bg-cream-100 text-gold-700"
                  }`}
                >
                  <Icon className="h-4 w-4" strokeWidth={2.25} aria-hidden />
                </span>
                {service.name}
              </button>
            );
          })}
        </div>

        <div className="flex shrink-0 items-center gap-4">
          <p className="font-display text-sm font-semibold tabular-nums text-fg">
            {pad(active + 1)} <span className="text-fg-subtle">/ {pad(services.length)}</span>
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => select(active - 1)}
              disabled={active === 0}
              aria-label="Previous practice"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-deep-900/20 text-deep-900 transition-colors hover:bg-deep-900 hover:text-white disabled:pointer-events-none disabled:opacity-35"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => select(active + 1)}
              disabled={active === services.length - 1}
              aria-label="Next practice"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-500 text-deep-950 transition-colors hover:bg-gold-400 disabled:pointer-events-none disabled:opacity-35"
            >
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Our five practices"
        className="scrollbar-hide relative mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain"
      >
        {services.map((service, i) => {
          const Icon = serviceIcons[service.slug] ?? Code2;
          return (
            <article
              key={service.slug}
              id={service.slug}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${services.length}: ${service.name}`}
              className={`grid w-[90%] shrink-0 snap-start scroll-mt-40 overflow-hidden rounded-3xl bg-deep-900 text-white transition-opacity duration-500 sm:w-[88%] lg:w-[86%] lg:grid-cols-[1.05fr_1fr] ${
                i === active ? "" : "opacity-60"
              }`}
            >
              <div className="relative min-h-60 sm:min-h-72 lg:min-h-[34rem]">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-deep-950/90 via-deep-950/20 to-deep-950/10"
                  aria-hidden
                />
                <span className="absolute left-5 top-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-500 text-deep-950 shadow-[0_12px_30px_-10px_rgb(213_155_41/0.75)] sm:left-6 sm:top-6">
                  <Icon className="h-7 w-7" strokeWidth={2} aria-hidden />
                </span>
                <p className="absolute bottom-5 left-5 right-5 inline-flex w-fit items-center gap-2 rounded-2xl border border-white/15 bg-black/35 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm sm:bottom-6 sm:left-6">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" aria-hidden />
                  {service.visualNote}
                </p>
              </div>

              <div className="flex flex-col p-7 sm:p-10 lg:p-12">
                <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.18em]">
                  <span className="text-gold-400">Practice {pad(i + 1)}</span>
                  <span className="text-white/40">
                    {pad(i + 1)} / {pad(services.length)}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-3xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-4xl lg:text-[2.75rem]">
                  {service.name}
                </h3>
                <p className="mt-3 text-lg leading-snug text-gold-200">{service.summary}</p>
                <p className="mt-4 text-base leading-relaxed text-white/70">{service.description}</p>

                <ul className="mt-7 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-2">
                  {service.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-2.5 text-sm text-white/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                      {capability}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-9">
                  <Button href={`/contact?practice=${service.slug}`}>Discuss {service.name}</Button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-6 h-0.5 overflow-hidden rounded-full bg-line" aria-hidden>
        <div
          className="h-full rounded-full bg-gold-500 transition-[width] duration-500 ease-out"
          style={{ width: `${((active + 1) / services.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
