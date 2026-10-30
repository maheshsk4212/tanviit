import type { Metadata } from "next";
import { Band, BandHeading, PageHero, V2Button } from "@/components/v2/V2Section";
import { benefits } from "@/lib/site-content";
import { about, careers } from "@/lib/v2-content";

export const metadata: Metadata = {
  title: "Careers",
  description: careers.body,
};

export default function V2Careers() {
  return (
    <>
      <PageHero eyebrow="Careers" title={careers.headline} lead={careers.body}>
        <p className="mt-6 font-display text-lg font-semibold text-brass-400">
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
        <BandHeading
          eyebrow="Culture"
          title="Talent, technology and trust — applied to how we work"
          lead={about.approachIntro}
        />
        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {about.approach.map((item) => (
            <li key={item.name} className="rounded-xl border border-brass-100 bg-brass-50 p-8">
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-brass-700">
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
            <li key={benefit.title} className="rounded-xl border border-brass-100 bg-white p-7">
              <h3 className="font-display text-lg font-semibold text-fg">{benefit.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-fg">{benefit.description}</p>
            </li>
          ))}
        </ul>
      </Band>

      {/* NEEDS-CONTENT: the live openings feed. Until it is supplied, this
          sends candidates to the team rather than to an empty list. */}
      <Band tone="dark" id="openings">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <BandHeading
            onDark
            eyebrow="Open positions"
            title="Tell us where you fit"
            lead="Current openings are being added here. In the meantime, send us your résumé and the kind of work you are looking for, and we will route it to the right team."
          />
          <div className="flex flex-wrap gap-3">
            <V2Button href="/v2/contact">Send your résumé</V2Button>
          </div>
        </div>
      </Band>
    </>
  );
}
