import type { Metadata } from "next";
import { Band, BandHeading, PageHero, V2Button } from "@/components/v2/V2Section";
import { benefits } from "@/lib/site-content";
import { about, careers } from "@/lib/v2-content";

export const metadata: Metadata = {
  title: "Careers",
  description: "Build your future with Tanvi IT. Culture, benefits and open positions at a federal and commercial technology company in Chantilly, Virginia.",
};

export default function V2Careers() {
  return (
    <>
      <PageHero eyebrow="Careers" title={careers.headline} lead={careers.body}>
        <p className="mt-6 font-display text-lg font-semibold text-flame-400">
          {careers.strapline}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <V2Button href="#openings">View open positions</V2Button>
          <V2Button href="/v2/about" variant="outline-dark">
            About Tanvi IT
          </V2Button>
        </div>
      </PageHero>

      <Band id="culture">
        <BandHeading split
          eyebrow="Culture"
          title="Talent, technology and trust — applied to how we work"
          lead={about.approachIntro}
        />
        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {about.approach.map((item) => (
            <li key={item.name} className="rounded-2xl border border-navy-200 bg-navy-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-flame-500 hover:shadow-[0_18px_40px_-24px_rgb(6_26_46/0.35)]">
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-navy-700">
                {item.name}
              </h3>
              <p className="mt-4 text-[17px] leading-[1.7] text-fg">{item.description}</p>
            </li>
          ))}
        </ul>
      </Band>

      <Band tone="tint" id="benefits">
        <BandHeading eyebrow="Benefits" title="What we offer" />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <li key={benefit.title} className="rounded-2xl border border-navy-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-flame-500 hover:shadow-[0_18px_40px_-24px_rgb(6_26_46/0.35)]">
              <h3 className="font-display text-lg font-semibold text-navy-900">{benefit.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-fg">{benefit.description}</p>
            </li>
          ))}
        </ul>
      </Band>

      {/* NEEDS-CONTENT: no job listings exist in the supplied content guides or
          on the current website, so there is nothing to publish here yet. The
          section routes candidates to the team rather than showing an empty
          list; swap in the feed as soon as one exists. */}
      <Band tone="dark" id="openings">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <BandHeading split
            onDark
            eyebrow="Open positions"
            title="Tell us where you fit"
            lead="Send us your résumé and the kind of work you are looking for, and we will route it to the team hiring for it."
          />
          <div className="flex flex-wrap gap-3">
            <V2Button href="/v2/contact">Send your résumé</V2Button>
          </div>
        </div>
      </Band>
    </>
  );
}
