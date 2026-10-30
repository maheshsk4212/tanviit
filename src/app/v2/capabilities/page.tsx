import type { Metadata } from "next";
import { Band, BandHeading, PageHero, V2Button } from "@/components/v2/V2Section";
import { capabilitiesHero, howWeDeliver, outcomes, solutionAreas } from "@/lib/v2-content";

export const metadata: Metadata = {
  title: "Capabilities & Solutions",
  description: "Application modernization, data and analytics, DevOps and cloud, enterprise architecture, quality engineering and IV&V, and emerging technologies.",
};

export default function V2Capabilities() {
  return (
    <>
      <PageHero
        eyebrow={capabilitiesHero.eyebrow}
        title={capabilitiesHero.headline}
        lead={capabilitiesHero.supporting}
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <V2Button href="#solution-areas">Explore our capabilities</V2Button>
          <V2Button href="/v2/contact" variant="outline-dark">
            Request our capability statement
          </V2Button>
        </div>
      </PageHero>

      <Band>
        <p className="max-w-4xl text-[17px] leading-[1.75] text-fg sm:text-lg">
          {capabilitiesHero.statement}
        </p>
      </Band>

      {/* --------------------------------------------------- Solution areas */}
      <Band tone="tint" id="solution-areas">
        <BandHeading split
          eyebrow="Key solution areas"
          title="Six areas we deliver in"
          lead="Each area lists the services it covers, so a requirement can be matched against it directly."
        />
        {/* Numbered rows rather than a card grid: each area gets the width to
            list its services, and the page reads as an index. */}
        <ul className="mt-14 border-t border-navy-200">
          {solutionAreas.map((area, i) => (
            <li
              key={area.slug}
              id={area.slug}
              className="scroll-mt-28 border-b border-navy-200 py-10"
            >
              <div className="grid gap-x-10 gap-y-5 lg:grid-cols-[3.5rem_1fr_1.1fr]">
                <span className="font-display text-sm font-semibold tracking-[0.1em] text-navy-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold leading-snug tracking-[-0.015em] text-navy-900">
                    {area.name}
                  </h3>
                  <p className="mt-3 text-[17px] leading-[1.7] text-fg">{area.description}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-navy-700">
                    Key service areas
                  </h4>
                  <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                    {area.services.map((service) => (
                      <li
                        key={service}
                        className="flex gap-2.5 text-[15px] leading-snug text-fg"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-flame-500" aria-hidden />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Band>

      {/* -------------------------------------------------------- Outcomes */}
      <Band id="outcomes">
        <BandHeading eyebrow="Outcomes" title="What we help clients achieve" />
        <ul className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome) => (
            <li key={outcome.name} className="border-t border-navy-200 pt-6">
              <h3 className="font-display text-lg font-semibold text-navy-900">{outcome.name}</h3>
              <p className="mt-2.5 text-[17px] leading-[1.7] text-fg">{outcome.description}</p>
            </li>
          ))}
        </ul>
      </Band>

      {/* ------------------------------------------------------ How we deliver */}
      <Band tone="dark" id="how-we-deliver">
        <BandHeading onDark eyebrow="How we deliver" title="Five steps, every engagement" />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {howWeDeliver.map((item, i) => (
            <li key={item.step} className="border-t border-white/20 pt-6">
              <span className="font-display text-sm font-semibold text-flame-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold text-white">{item.step}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-navy-100">{item.description}</p>
            </li>
          ))}
        </ol>
      </Band>

      <Band tone="tint">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <BandHeading split
            title="Tell us what the requirement is."
            lead="We will come back with the contract vehicle, the delivery approach and a timeline."
          />
          <div className="flex flex-wrap gap-3">
            <V2Button href="/v2/contact">Contact us</V2Button>
            <V2Button href="/v2/contract-vehicles" variant="outline">
              Contract vehicles
            </V2Button>
          </div>
        </div>
      </Band>
    </>
  );
}
