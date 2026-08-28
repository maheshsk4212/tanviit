"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { industries } from "@/lib/site-content";
import { Button } from "@/components/ui/Button";
import { NotchPanel } from "@/components/ui/NotchPanel";
import { ImageHighlightCard } from "@/components/ui/ImageHighlightCard";

export function IndustriesTabs() {
  const [active, setActive] = useState(0);
  const industry = industries[active];

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]">
      <NotchPanel tone="navy-deep" className="h-fit lg:sticky lg:top-24">
        <nav className="scrollbar-hide flex gap-1 overflow-x-auto p-3 lg:flex-col lg:overflow-visible lg:p-4">
          {industries.map((ind, i) => (
            <button
              key={ind.slug}
              type="button"
              onClick={() => setActive(i)}
              aria-current={i === active}
              className={`shrink-0 rounded-control px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide transition-colors sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${
                i === active
                  ? "bg-orange-500/15 text-orange-300"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {ind.name}
            </button>
          ))}
        </nav>
      </NotchPanel>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_300px] md:items-start">
        <motion.div
          key={industry.slug}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-orange-600">
            Industry focus
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold text-navy-900">
            {industry.name}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-navy-900">
            {industry.summary}
          </p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-600">
            {industry.description}
          </p>

          <p className="mt-8 text-sm font-semibold text-navy-900">Industries include:</p>
          <ul className="mt-4 space-y-2.5">
            {industry.segments.map((segment) => (
              <li key={segment} className="flex items-center gap-2.5 text-sm text-slate-700">
                <Check className="h-4 w-4 shrink-0 text-orange-500" aria-hidden />
                {segment}
              </li>
            ))}
          </ul>

          <Button href="/contact" variant="ghost" className="mt-8">
            Talk to us
          </Button>
        </motion.div>

        <motion.div
          key={`${industry.slug}-visual`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card bg-slate-100">
            <Image
              src={industry.image}
              alt={industry.name}
              fill
              sizes="(min-width: 768px) 300px, 100vw"
              className="object-cover"
              priority={active === 0}
            />
          </div>
          <ImageHighlightCard
            label={industry.highlight.label}
            title={industry.highlight.title}
          />
        </motion.div>
      </div>
    </div>
  );
}
