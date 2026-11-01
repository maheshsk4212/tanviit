import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export interface MosaicTile {
  name: string;
  description: string;
  href: string;
  image: string;
  Icon: LucideIcon;
}

/**
 * Photographic capability tiles, the pattern the reference leads with: a
 * staggered mosaic of image-backed cards, icon at the top, title at the
 * bottom, the description sliding up on hover. The photograph lifts and the
 * scrim lightens on hover so the grid feels alive under the cursor rather
 * than being a flat colour field.
 *
 * Heights alternate deliberately — a uniform grid reads as a spreadsheet.
 */
const rhythm = [
  "lg:h-[27rem]",
  "lg:mt-10 lg:h-[23rem]",
  "lg:h-[25rem]",
  "lg:mt-10 lg:h-[21rem]",
];

export function V2Mosaic({ tiles }: { tiles: MosaicTile[] }) {
  return (
    <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
      {tiles.map((tile, i) => (
        <RevealItem key={tile.name} className={rhythm[i % rhythm.length]}>
          <Link
            href={tile.href}
            className="group relative isolate flex h-72 flex-col justify-between overflow-hidden rounded-2xl bg-navy-950 p-6 text-white lg:h-full"
          >
            <Image
              src={tile.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              quality={90}
              className="-z-20 object-cover opacity-[0.6] transition-transform duration-[900ms] ease-out group-hover:scale-110"
            />
            <div
              className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/25 transition-opacity duration-500 group-hover:opacity-85"
              aria-hidden
            />

            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-flame-400 backdrop-blur transition-all duration-500 group-hover:border-flame-500/60 group-hover:bg-flame-500/20">
              <tile.Icon className="h-5 w-5" aria-hidden />
            </span>

            <div>
              <h3 className="font-display text-xl font-semibold leading-snug tracking-[-0.02em] text-white">
                {tile.name}
              </h3>
              {/* Collapsed until hover; always open for touch and reduced motion. */}
              <div className="grid grid-rows-[0fr] transition-all duration-500 ease-out group-hover:grid-rows-[1fr] motion-reduce:grid-rows-[1fr]">
                <p className="overflow-hidden text-[15px] leading-relaxed text-white/80 opacity-0 transition-opacity duration-300 group-hover:pt-3 group-hover:opacity-100 motion-reduce:pt-3 motion-reduce:opacity-100">
                  {tile.description}
                </p>
              </div>
              <ArrowUpRight
                className="mt-4 h-5 w-5 text-flame-400 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                aria-hidden
              />
            </div>
          </Link>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

/**
 * Logo rail that drifts continuously, so a wall of customer marks has motion
 * without demanding attention. The list is duplicated and the track shifts by
 * half its width, which makes the loop seamless; it stops for
 * prefers-reduced-motion and when a mark is hovered.
 */
export function V2Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <ul className="flex w-max animate-marquee items-center gap-4 group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
        {doubled.map((item, i) => (
          <li
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            /* Named group: the rail itself already uses the unnamed one to
               pause the animation, so the card needs its own to swap colour
               without the two interfering. */
            className="group/mark flex h-24 w-52 shrink-0 items-center justify-center rounded-xl border border-navy-100 bg-white px-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-flame-600 hover:bg-flame-600 hover:shadow-[0_16px_34px_-18px_rgb(216_56_10/0.6)]"
          >
            <span className="font-display text-base font-semibold tracking-[-0.01em] text-navy-900 transition-colors duration-300 group-hover/mark:text-white">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
