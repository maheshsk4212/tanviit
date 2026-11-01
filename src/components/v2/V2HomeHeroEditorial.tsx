import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import { type ReactNode } from "react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

export interface HomeHeroProps {
  eyebrow: string;
  title: string;
  accent: string;
  lead: string;
  facts: { value: string; label: string; node?: ReactNode }[];
  award: { label: string; name: string; detail: string; href: string };
  children?: ReactNode;
}

/**
 * Hero option B — the Alpha Omega banner, rebuilt for Tanvi IT.
 *
 * Measured off alphaomega.com rather than approximated: a 768px band, the
 * footage filling it edge to edge under two diagonal gradients, and the
 * headline at display scale with the second phrase running inline in the
 * accent colour rather than dropping to its own line. Their type is 98px at
 * weight 500 with line-height 0.92 and -0.03em tracking, which is what gives
 * it the density; ours matches that and keeps the site's own font.
 *
 * Their layout is deliberately spare — no eyebrow, one paragraph, one pill
 * button with a circular arrow, everything ranged left and sitting low in the
 * band. The restraint is the effect: there is one thing to read.
 *
 * Two departures, both because we have something they do not. The background
 * is the commissioned footage rather than a still, and the SEWP VI award and
 * the credentials get a strip below the band, since a contract number is the
 * thing a federal buyer is actually looking for.
 *
 * This option is dark. Option A is the light one.
 */
export function V2HomeHeroEditorial({
  title,
  accent,
  lead,
  facts,
  award,
  children,
}: HomeHeroProps) {
  return (
    <section className="relative isolate">
      <div className="relative flex min-h-[34rem] items-end overflow-hidden bg-navy-950 lg:min-h-[48rem]">
        <Image
          src="/hero-capitol-poster.jpg"
          alt="The United States Capitol at dusk"
          fill
          priority
          sizes="100vw"
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

        {/* The reference's two gradients — one weighting the corner the type
            sits in, one darkening the bottom — plus a flat 40% wash the
            reference does not need.

            Theirs run to opaque black over a bright, largely abstract still.
            Ours sits over a dusk time-lapse whose bright horizon band falls
            exactly at headline height, and a diagonal alone cannot darken
            that without erasing the picture. These values were solved rather
            than guessed: sampled across eight frames of the loop against the
            real glyph boxes, they put the accent line — the limiting element,
            because a light orange needs a dark field — at 4.11:1 against the
            3:1 it needs. All three layers are the same navy, so their order
            does not change the result.

            Raising the wash buys contrast and costs picture; 0.40 was the
            point where the margin stopped being tight. */}
        <div
          className="absolute inset-0 [background-image:linear-gradient(131deg,rgb(5_12_40/0.9)_0%,rgb(5_12_40/0.8)_40%,rgb(5_12_40/0.3)_65%,rgb(5_12_40/0)_88%),linear-gradient(169deg,rgb(5_12_40/0)_25%,rgb(5_12_40/0.45)_70%,rgb(5_12_40/0.7)_100%),linear-gradient(0deg,rgb(5_12_40/0.4)_0%,rgb(5_12_40/0.4)_100%)]"
          aria-hidden
        />

        <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-[4.5rem] lg:pt-[10.5rem]">
          <Reveal>
            {/* 98px at weight 500, line-height 0.92, tracking -0.03em — the
                reference's own settings. The accent runs inline. */}
            <h1 className="max-w-5xl text-balance font-display text-[2.75rem] font-medium leading-[0.95] tracking-[-0.03em] text-white sm:text-6xl lg:text-[6.125rem] lg:leading-[0.92]">
              {title} <span className="text-flame-400">{accent}</span>
            </h1>
            <p className="mt-6 max-w-[48rem] text-lg leading-relaxed text-white">{lead}</p>
            {children}
          </Reveal>
        </div>
      </div>

      {/* The award and the credentials, which the reference's hero has no
          equivalent of — a contract number is what a federal buyer scans for. */}
      <div className="border-b border-navy-200 bg-navy-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:gap-12">
            <Reveal>
              <Link
                href={award.href}
                className="group flex items-center gap-4 rounded-2xl border border-navy-200 bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-flame-500"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-flame-600 text-white">
                  <Award className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-flame-700">
                    {award.label}
                  </span>
                  <span className="mt-0.5 block font-display text-base font-semibold leading-snug text-navy-900">
                    {award.name}
                  </span>
                </span>
                <ArrowRight
                  className="ml-2 h-4 w-4 shrink-0 text-navy-700 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            </Reveal>

            <RevealGroup
              className="grid flex-1 grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4"
              stagger={0.06}
            >
              {facts.map((fact) => (
                <RevealItem key={fact.label}>
                  <p className="font-display text-3xl font-semibold tracking-[-0.03em] text-navy-900">
                    {fact.node ?? fact.value}
                  </p>
                  <p className="mt-1.5 text-[13px] font-medium leading-snug text-fg-subtle">
                    {fact.label}
                  </p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
