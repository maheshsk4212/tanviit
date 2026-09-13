import {
  BarChart3,
  Boxes,
  Cloud,
  Code2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { techExpertise } from "@/lib/site-content";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SpotlightGrid } from "@/components/motion/SpotlightGrid";

/** Icon per technology area, matched by name (falls back to a code glyph). */
const techIcons: Record<string, LucideIcon> = {
  "Software Development": Code2,
  "Cloud & DevOps": Cloud,
  "Data & Analytics": BarChart3,
  "Enterprise Solutions": Boxes,
  Cybersecurity: ShieldCheck,
};

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Premium bento on the dark band: the first area is a tall featured card
 * (photo + full description) and the other four sit in a 2×2 beside it.
 * Deep cards with metallic-gold hairlines, engraved numerals, metallic titles
 * and a cursor spotlight. Shared by the Industries and Services pages.
 */
export function TechExpertise() {
  return (
    <SpotlightGrid>
      <RevealGroup
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2"
        stagger={0.06}
      >
        {techExpertise.map((group, i) => {
          const Icon = techIcons[group.area] ?? Code2;
          const featured = i === 0;
          return (
            <RevealItem
              key={group.area}
              className={featured ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}
            >
              <article className="card-premium spotlight group/t relative isolate flex h-full flex-col overflow-hidden rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8">
                <div className="noise-overlay pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden />

                {featured ? (
                  <div className="relative -mx-7 -mt-7 mb-8 h-56 overflow-hidden sm:-mx-8 sm:-mt-8 lg:h-72">
                    <Image
                      src={group.image}
                      alt={group.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover opacity-70 transition-transform duration-700 ease-out [filter:saturate(0.6)] group-hover/t:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-b from-deep-950/10 via-deep-800/50 to-deep-800"
                      aria-hidden
                    />
                  </div>
                ) : null}

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gold-400/30 bg-gradient-to-br from-gold-500/20 to-gold-500/[0.03] text-gold-300 shadow-[inset_0_1px_0_rgb(255_255_255/0.08)] transition-colors duration-300 group-hover/t:border-gold-300/70 group-hover/t:text-gold-200">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span
                    className="numeral-outline font-display text-5xl font-semibold leading-none tracking-[-0.04em]"
                    aria-hidden
                  >
                    {pad(i + 1)}
                  </span>
                </div>

                <h3 className="text-metallic relative z-10 mt-8 font-display text-2xl font-medium tracking-[-0.02em] sm:text-[1.75rem]">
                  {group.area}
                </h3>
                <p
                  className={`relative z-10 mt-2 leading-snug ${
                    featured ? "text-lg text-white/85" : "text-sm text-white/65"
                  }`}
                >
                  {group.headline}
                </p>
                {featured ? (
                  <p className="relative z-10 mt-3 text-sm leading-relaxed text-white/60">
                    {group.description}
                  </p>
                ) : null}

                <ul className="relative z-10 mt-auto flex flex-wrap gap-2 pt-7">
                  {group.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/75 transition-colors duration-300 hover:border-gold-400/50 hover:text-gold-200"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </SpotlightGrid>
  );
}
