import type { Metadata } from "next";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { HeroOptionPicker, type HeroOption } from "@/components/v2/HeroOptionPicker";
import { V2HomeHero } from "@/components/v2/V2HomeHero";
import { V2HomeHeroBento } from "@/components/v2/V2HomeHeroBento";
import { V2HomeHeroEditorial } from "@/components/v2/V2HomeHeroEditorial";
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
    key: "editorial",
    name: "B — Editorial",
    summary:
      "The headline runs at masthead scale across the full width with nothing beside it. The supporting line and buttons sit under a rule, and the footage follows as a cinematic band edge to edge with the award over it.",
    strengths: [
      "The boldest and the fastest to read — for one screen there is only the claim",
      "Footage gets far more room, at cinema proportions",
      "Reads as a brand rather than a brochure",
    ],
    tradeoff:
      "It asks the most of the words. Proof moves below the footage rather than sitting beside the headline, and a longer headline would weaken it.",
    render: <V2HomeHeroEditorial {...shared}>{actions}</V2HomeHeroEditorial>,
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
