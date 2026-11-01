import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, MapPin } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { type HomeHeroProps } from "@/components/v2/V2HomeHeroEditorial";

/**
 * Hero option C — modular.
 *
 * The headline, the footage, the award and the proof each get their own tile
 * rather than being arranged around a single column of type. It is the option
 * that carries the most at once: a buyer sees the claim, the contract and the
 * credentials in one screen without scrolling, which suits a page whose job is
 * partly to be scanned by someone checking whether we are a real contractor.
 *
 * The cost is that the headline is no longer the only thing on the screen, so
 * it lands a little softer than the other two. It is also the most structured
 * — it will look deliberate as long as the tiles stay this few.
 */
export function V2HomeHeroBento({
  eyebrow,
  title,
  accent,
  lead,
  facts,
  award,
  children,
}: HomeHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-100 py-6 sm:py-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-[1fr_auto]">
          {/* The claim. Two columns wide, so it still leads. */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-center rounded-3xl bg-white p-8 sm:p-10 lg:p-14">
              <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-navy-200 bg-navy-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-navy-700">
                <span className="h-1.5 w-1.5 rounded-full bg-flame-600" aria-hidden />
                {eyebrow}
              </span>
              <h1 className="mt-7 text-balance font-display text-[2.5rem] font-bold leading-[1.03] tracking-[-0.035em] text-fg sm:text-5xl lg:text-[3.75rem]">
                {title}
                <span className="mt-1 block text-flame-600">{accent}</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted sm:text-lg">
                {lead}
              </p>
              {children}
            </div>
          </Reveal>

          {/* The footage, full height beside it. */}
          <Reveal delay={0.1} className="lg:row-span-2">
            <div className="relative h-full min-h-[18rem] overflow-hidden rounded-3xl bg-navy-950">
              <Image
                src="/hero-capitol-poster.jpg"
                alt="The United States Capitol at dusk"
                fill
                priority
                sizes="(min-width: 1024px) 33vw, 100vw"
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
                className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-navy-950/70 to-transparent"
                aria-hidden
              />
              <p className="absolute left-5 top-5 flex items-center gap-2 pr-5 text-[13px] font-medium leading-snug text-white">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden />
                Serving federal missions from Chantilly, Virginia
              </p>
            </div>
          </Reveal>

          {/* The award, filled — the one tile that should catch the eye. */}
          <Reveal delay={0.16}>
            <Link
              href={award.href}
              className="group flex h-full flex-col justify-between gap-8 rounded-3xl bg-flame-600 p-8 text-white transition-colors duration-300 hover:bg-flame-700"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                <Award className="h-6 w-6" aria-hidden />
              </span>
              <span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                  {award.label}
                </span>
                <span className="mt-1.5 block text-balance font-display text-2xl font-semibold leading-tight">
                  {award.name}
                </span>
                <span className="mt-2 flex items-center gap-2 text-sm text-white">
                  {award.detail}
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </span>
            </Link>
          </Reveal>

          {/* The proof, as the counterweight tile. */}
          <Reveal delay={0.22}>
            <div className="h-full rounded-3xl bg-navy-950 p-8 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-flame-400">
                Credentials
              </p>
              <RevealGroup className="mt-6 grid grid-cols-2 gap-x-6 gap-y-6" stagger={0.05}>
                {facts.map((fact) => (
                  <RevealItem key={fact.label}>
                    <p className="font-display text-3xl font-semibold tracking-[-0.03em] text-white">
                      {fact.node ?? fact.value}
                    </p>
                    <p className="mt-1.5 text-[12px] leading-snug text-white/75">{fact.label}</p>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
