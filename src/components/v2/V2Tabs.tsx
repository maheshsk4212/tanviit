"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

export interface SectorPanel {
  key: string;
  tab: string;
  eyebrow: string;
  title: string;
  lead: string;
  image: { src: string; alt: string };
  /** Named areas inside the sector, each with its own one-line summary. */
  items: { name: string; summary: string }[];
}

/**
 * Sector switcher, the pattern the reference leads its own "who we serve" page
 * with: one row of sector names, and the panel below swaps to that sector's
 * heading, photograph and the areas it covers. Ten industries laid out as ten
 * equal cards gives the eye nowhere to start; four sectors with detail on
 * demand lets a visitor find themselves in one move.
 *
 * Built as a real tablist — arrow keys move between tabs, Home and End jump to
 * the ends, and only the selected panel is in the accessibility tree. The
 * panel fades on change, and holds still for anyone who has asked for reduced
 * motion.
 */
export function V2Tabs({ panels, action }: { panels: SectorPanel[]; action?: ReactNode }) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduced = useReducedMotion() ?? false;

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const moves: Record<string, number> = {
      ArrowRight: active + 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: panels.length - 1,
    };
    const next = moves[event.key];
    if (next === undefined) return;
    event.preventDefault();
    const index = (next + panels.length) % panels.length;
    setActive(index);
    tabRefs.current[index]?.focus();
  };

  const panel = panels[active];

  return (
    <div>
      {/* Scrolls rather than wrapping on a phone, so the row still reads as
          one control instead of breaking into a block of links. */}
      <div
        role="tablist"
        aria-label="Sectors we serve"
        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {panels.map((item, i) => {
          const selected = i === active;
          return (
            <button
              key={item.key}
              ref={(node) => {
                tabRefs.current[i] = node;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={onKeyDown}
              className={`shrink-0 rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                selected
                  ? "border-navy-950 bg-navy-950 text-white"
                  : "border-navy-200 bg-white text-navy-800 hover:border-navy-400 hover:bg-navy-50"
              }`}
            >
              {item.tab}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel-${active}`}
        aria-labelledby={`${baseId}-tab-${active}`}
        tabIndex={0}
        // Keyed on the sector so React remounts it and the fade replays.
        key={panel.key}
        // The floor steadies the page: panels carry between one and five
        // industries, and without it switching tabs moved everything below by
        // a few hundred pixels.
        className={`mt-12 grid gap-10 lg:min-h-[34rem] lg:grid-cols-2 lg:items-center lg:gap-16 ${
          reduced ? "" : "motion-safe:animate-[tab-in_450ms_ease-out]"
        }`}
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flame-700">
            {panel.eyebrow}
          </p>
          <h3 className="mt-4 text-balance font-display text-3xl font-semibold leading-[1.1] tracking-[-0.025em] text-fg lg:text-[2.5rem]">
            {panel.title}
          </h3>
          <p className="mt-5 text-base leading-relaxed text-fg-muted sm:text-lg">{panel.lead}</p>

          <p className="mt-9 text-sm font-semibold uppercase tracking-[0.14em] text-navy-700">
            Where we work
          </p>
          {/* Four or more run two abreast, so a long sector does not stretch
              to twice the height of a short one beside the same picture. */}
          <ul
            className={`mt-5 grid gap-4 ${panel.items.length >= 4 ? "sm:grid-cols-2" : ""}`}
          >
            {panel.items.map((item) => (
              <li key={item.name} className="flex gap-4">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-flame-600 text-white"
                  aria-hidden
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span>
                  <span className="font-display text-base font-semibold text-navy-900">
                    {item.name}
                  </span>
                  <span className="mt-1 block text-[15px] leading-relaxed text-fg">
                    {item.summary}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          {action ? <div className="mt-10">{action}</div> : null}
        </div>

        <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-navy-900 lg:aspect-[5/4]">
          <Image
            src={panel.image.src}
            alt={panel.image.alt}
            fill
            quality={90}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
          />
          <div
            className="absolute inset-0 bg-gradient-to-tr from-navy-950/45 via-navy-950/5 to-transparent"
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}
