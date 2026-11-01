import type { Metadata } from "next";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { HeroOptionPicker, type HeroOption } from "@/components/v2/HeroOptionPicker";
import { V2HomeHero } from "@/components/v2/V2HomeHero";
import { V2HomeHeroBento } from "@/components/v2/V2HomeHeroBento";
import { V2HomeHeroEditorial } from "@/components/v2/V2HomeHeroEditorial";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { V2Button } from "@/components/v2/V2Section";
import { heroAward, heroFacts, homeHero, v2Site } from "@/lib/v2-content";

export const metadata: Metadata = {
  title: "Homepage hero — options for approval",
  description: "Three directions for the Tanvi IT homepage hero, for review and sign-off.",
  // A working page for sign-off, not something search engines should hold.
  robots: { index: false, follow: false },
};

const shared = {
  eyebrow: v2Site.tagline,
  title: "Mission-focused technology.",
  accent: "Built for what's next.",
  lead: homeHero.supporting,
  facts: heroFacts.map((fact) => ({
    ...fact,
    node: fact.count ? <AnimatedCounter value={fact.value} /> : undefined,
  })),
  award: heroAward,
};

/**
 * Option B's own control. The reference pairs one pill button, filled in its
 * accent with dark text and a circular arrow chip, against the dark banner —
 * no secondary button at all. Two light buttons would not read there anyway.
 */
const bannerAction = (
  <div className="mt-9">
    <Link
      href="/v2/capabilities"
      className="group inline-flex items-center gap-6 rounded-full bg-flame-500 py-2 pl-8 pr-2 text-lg font-medium text-navy-950 transition-colors duration-300 hover:bg-flame-400"
    >
      Explore our capabilities
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-950 text-white transition-transform duration-300 group-hover:translate-x-1">
        <ArrowRight className="h-5 w-5" aria-hidden />
      </span>
    </Link>
  </div>
);

const actions = (
  <div className="mt-9 flex flex-wrap items-center gap-3">
    <V2Button href="/v2/capabilities">View capabilities</V2Button>
    <V2Button href="/v2/contract-vehicles/sewp-vi" variant="outline">
      NASA SEWP VI
    </V2Button>
  </div>
);

const options: HeroOption[] = [
  {
    key: "split",
    name: "A — Split",
    summary:
      "The headline on the left at full contrast, the Capitol footage framed beside it, and the SEWP VI award on a card overlapping the frame. Credentials sit directly underneath. This is the version currently live.",
    strengths: [
      "Claim and proof visible together without scrolling",
      "Footage is contained, so nothing moves behind the type",
      "Holds its shape down to a phone",
    ],
    tradeoff:
      "The most familiar of the three. It is the layout a buyer has seen on other contractor sites, which makes it safe rather than memorable.",
    render: <V2HomeHero {...shared}>{actions}</V2HomeHero>,
  },
  {
    key: "banner",
    name: "B — Banner",
    summary:
      "Built to the Alpha Omega hero, measured rather than approximated: a tall band with the footage filling it edge to edge under two diagonal gradients, the headline at display scale with the accent running inline, and a single pill button. The award and credentials sit on a light strip below.",
    strengths: [
      "The most striking of the three, and closest to how the firms you are compared with present themselves",
      "Gives the commissioned footage the whole screen",
      "Spare by design — one headline, one line of support, one button",
    ],
    tradeoff:
      "This is the dark option. It is the one section that would not match the light bands running down the rest of the page, and white type over moving footage never reads as crisply as type on a solid field.",
    render: <V2HomeHeroEditorial {...shared}>{bannerAction}</V2HomeHeroEditorial>,
  },
  {
    key: "modular",
    name: "C — Modular",
    summary:
      "Claim, footage, award and credentials each get their own tile. The award tile is filled in the brand orange so the SEWP VI contract is the first thing the eye lands on after the headline.",
    strengths: [
      "Carries the most in one screen — claim, contract and credentials at once",
      "Gives the SEWP VI award real prominence",
      "Suits a visitor who is scanning to check we are a real contractor",
    ],
    tradeoff:
      "The headline is no longer the only thing on screen, so it lands a little softer. It also stays tidy only while the tiles stay this few.",
    render: <V2HomeHeroBento {...shared}>{actions}</V2HomeHeroBento>,
  },
];

export default function HeroOptions() {
  return (
    <main className="min-h-screen bg-white">
      <HeroOptionPicker options={options} />

      <div className="border-t border-navy-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="max-w-3xl text-[15px] leading-relaxed text-fg-muted">
            Each option is the real page, not a picture of one — the footage plays and the links
            work. Switching options updates the address bar, so the link in your browser always
            opens on whichever one you are looking at. Send that link back with your choice.
          </p>
        </div>
      </div>
    </main>
  );
}
