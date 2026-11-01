import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { type HomeHeroProps } from "@/components/v2/V2HomeHeroEditorial";

/**
 * Hero option C — minimal.
 *
 * One photograph, and as little over it as the page can get away with: a rule,
 * a headline at a conversational size, one sentence, one text link. No cards,
 * no tiles, no buttons, no numbers in boxes. The credentials run along the
 * bottom as a hairline of small caps rather than a row of statistics.
 *
 * It is the quiet one. Where the banner shouts at 98px over moving footage,
 * this holds still and lets the picture carry the screen — which only works
 * because the picture is worth carrying it: the Capitol at blue hour with the
 * network overlay, at 2560px, still rather than video so nothing moves at all.
 *
 * The restraint is the argument. A buyer who has seen four contractor sites
 * that morning has seen four busy ones.
 */
export function V2HomeHeroMinimal({ eyebrow, title, accent, lead, facts, award }: HomeHeroProps) {
  return (
    <section className="relative isolate flex min-h-[36rem] flex-col justify-end overflow-hidden lg:min-h-[44rem]">
      <Image
        src="/hero-civic-network.jpg"
        alt="The United States Capitol at blue hour beneath a network of connected points"
        fill
        priority
        sizes="100vw"
        quality={88}
        className="object-cover"
      />
      {/* Barely there by the standards of the other two — enough to seat the
          type, not enough to flatten the picture. */}
      <div
        className="absolute inset-0 [background-image:linear-gradient(100deg,rgb(5_12_40/0.88)_0%,rgb(5_12_40/0.72)_34%,rgb(5_12_40/0.42)_62%,rgb(5_12_40/0.28)_100%)]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-32 sm:px-6 lg:px-8 lg:pb-16 lg:pt-40">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-flame-500" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white">
              {eyebrow}
            </span>
          </div>

          {/* Deliberately under the banner option's scale, and all one colour.
              The accent line was flame, which measured 2.08:1 here against the
              3:1 it needs — a light orange cannot clear that on anything but a
              near-black field, and the scrim heavy enough to give it one took
              half the photograph with it. White reads 4.77:1 at the same spot
              and leaves the picture alone. A two-tone headline was the less
              minimal choice anyway; the accent now lives in the rule above and
              the marker on the award link. */}
          <h1 className="mt-8 max-w-3xl text-balance font-display text-[2.25rem] font-medium leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.5rem]">
            {title} {accent}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white sm:text-lg">{lead}</p>

          <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
            <Link
              href="/v2/capabilities"
              className="group inline-flex items-center gap-3 border-b border-white/40 pb-1.5 text-base font-medium text-white transition-colors duration-300 hover:border-flame-400 hover:text-flame-300"
            >
              View our capabilities
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
            <Link
              href={award.href}
              className="group inline-flex items-center gap-3 text-base text-white/85 transition-colors duration-300 hover:text-white"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-flame-500" aria-hidden />
              {award.name}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Credentials as a hairline, not a statistics panel. */}
      <div className="relative border-t border-white/15">
        <div className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <RevealGroup
            className="flex flex-wrap items-center gap-x-10 gap-y-3 sm:gap-x-14"
            stagger={0.05}
          >
            {facts.map((fact) => (
              <RevealItem key={fact.label}>
                <span className="flex items-baseline gap-2.5">
                  <span className="font-display text-lg font-semibold tracking-[-0.02em] text-white">
                    {fact.value}
                  </span>
                  <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-white/75">
                    {fact.label}
                  </span>
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
