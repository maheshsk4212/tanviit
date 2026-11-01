"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Check } from "lucide-react";

export interface HeroOption {
  key: string;
  name: string;
  summary: string;
  strengths: string[];
  tradeoff: string;
  render: ReactNode;
}

/**
 * Side-by-side picker for the three homepage hero directions, so the client
 * can see each one full size in the real page rather than as a screenshot.
 *
 * The choice goes in the URL hash, which is the whole point: whichever option
 * they are looking at, the address bar holds a link that opens on that one, so
 * approval can come back as "the second link" instead of a description.
 */
export function HeroOptionPicker({ options }: { options: HeroOption[] }) {
  const [active, setActive] = useState(0);

  // Open on whichever option the shared link names.
  useEffect(() => {
    const fromHash = () => {
      const key = window.location.hash.replace("#", "");
      const i = options.findIndex((o) => o.key === key);
      if (i >= 0) setActive(i);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [options]);

  const choose = (i: number) => {
    setActive(i);
    history.replaceState(null, "", `#${options[i].key}`);
  };

  const option = options[active];

  return (
    <>
      <div className="sticky top-0 z-50 border-b border-navy-200 bg-white/95 backdrop-blur">
        <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy-700">
              Homepage hero — choose one
            </p>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Hero options">
              {options.map((item, i) => {
                const selected = i === active;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => choose(i)}
                    aria-pressed={selected}
                    className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                      selected
                        ? "border-navy-950 bg-navy-950 text-white"
                        : "border-navy-200 bg-white text-navy-800 hover:border-navy-400 hover:bg-navy-50"
                    }`}
                  >
                    {selected ? <Check className="h-4 w-4" aria-hidden /> : null}
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Notes on the option above the thing itself, so the client knows what
          they are being asked to compare. */}
      <div className="border-b border-navy-200 bg-navy-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-12">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-navy-900">
                {option.name}
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">{option.summary}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-700">
                What it does well
              </p>
              <ul className="mt-3 space-y-2">
                {option.strengths.map((point) => (
                  <li key={point} className="flex gap-2.5 text-[15px] leading-snug text-fg">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-flame-600" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-700">
                The trade-off
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-fg">{option.tradeoff}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Keyed so each option mounts fresh and its reveals play. */}
      <div key={option.key}>{option.render}</div>
    </>
  );
}
