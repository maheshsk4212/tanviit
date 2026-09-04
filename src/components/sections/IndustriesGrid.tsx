import Image from "next/image";
import {
  Banknote,
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Landmark as StateHouse,
  RadioTower,
  ShieldCheck,
  ShoppingBag,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { industries } from "@/lib/site-content";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const icons: Record<string, LucideIcon> = {
  "federal-government": Landmark,
  "state-government": StateHouse,
  "local-government": Building2,
  "defense-intelligence": ShieldCheck,
  healthcare: HeartPulse,
  "banking-financial-services": Banknote,
  education: GraduationCap,
  "energy-utilities": Zap,
  "retail-ecommerce": ShoppingBag,
  telecommunications: RadioTower,
};

/* Each URL was checked to resolve AND visually reviewed for subject matter —
   ids alone are not trustworthy (the first "federal" pick was a lion). */
const images: Record<string, string> = {
  "federal-government": "photo-1523292562811-8fa7962a78c8", // columned government building
  "state-government": "photo-1531218150217-54595bc2b934", // capital skyline at dusk
  "local-government": "photo-1477959858617-67f85cf4f1df", // municipal skyline
  "defense-intelligence": "photo-1579912437766-7896df6d3cd3", // service member, tactical
  healthcare: "photo-1576091160399-112ba8d25d1d", // clinician
  "banking-financial-services": "photo-1611974789855-9c2a0a7236a3", // market chart
  education: "photo-1541339907198-e08756dedf3f", // graduation
  "energy-utilities": "photo-1466611653911-95081537e5b7", // wind turbines
  "retail-ecommerce": "photo-1441986300917-64674bd600d8", // storefront
  telecommunications: "photo-1544197150-b99a580bb7a8", // network patch cabling
};

const src = (slug: string) =>
  `https://images.unsplash.com/${images[slug] ?? images["federal-government"]}?w=1200&q=80&auto=format&fit=crop`;

export function IndustriesGrid({ limit }: { limit?: number; columns?: 3 | 5 }) {
  const items = limit ? industries.slice(0, limit) : industries;

  // Bento: the first tile runs wide. If that leaves a single orphan on the
  // last row, widen the final tile too so the grid closes out flush.
  const widenLast = (items.length + 1) % 3 === 2;
  const lastIndex = items.length - 1;

  return (
    <RevealGroup
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      stagger={0.05}
    >
      {items.map((industry, i) => {
        const Icon = icons[industry.slug] ?? Landmark;
        const wide = i === 0 || (widenLast && i === lastIndex);

        return (
          <RevealItem
            key={industry.slug}
            className={wide ? "sm:col-span-2 lg:col-span-2" : ""}
          >
            <article
              id={industry.slug}
              className="group/card relative flex h-full min-h-[268px] scroll-mt-24 flex-col justify-end overflow-hidden rounded-card"
            >
              <Image
                src={src(industry.slug)}
                alt=""
                fill
                sizes={wide ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
              />

              {/* Legibility scrim, then a warm brand wash that blooms on hover. */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/75 to-ink-950/25"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-gold-600/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
                aria-hidden
              />
              <div
                className="absolute inset-0 rounded-card ring-1 ring-inset ring-white/10 transition-colors duration-300 group-hover/card:ring-gold-400/50"
                aria-hidden
              />

              {/* Oversized ghost numeral, the way editorial grids number things. */}
              <span
                className="pointer-events-none absolute right-4 top-1 font-display text-6xl font-semibold leading-none text-white/10 transition-colors duration-300 group-hover/card:text-gold-300/25"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-control border border-white/15 bg-white/10 text-gold-300 backdrop-blur transition-all duration-300 group-hover/card:-rotate-3 group-hover/card:scale-110 group-hover/card:border-gold-300/50 group-hover/card:bg-gold-500/20">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>

                <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-white">
                  {industry.name}
                </h3>

                {/* Summary stays out of the way until the tile is hovered. */}
                <div className="grid grid-rows-[0fr] transition-all duration-500 ease-out group-hover/card:grid-rows-[1fr] motion-reduce:grid-rows-[1fr]">
                  <p className="overflow-hidden text-sm leading-relaxed text-slate-200 opacity-0 transition-opacity duration-300 group-hover/card:pt-2 group-hover/card:opacity-100 motion-reduce:pt-2 motion-reduce:opacity-100">
                    {industry.summary}
                  </p>
                </div>
              </div>
            </article>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
