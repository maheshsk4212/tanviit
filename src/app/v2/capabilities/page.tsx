import type { Metadata } from "next";
import { Band, BandHeading, PageHero, V2Button } from "@/components/v2/V2Section";
import { V2FeatureRow } from "@/components/v2/V2FeatureRow";
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
      <Band motif tone="tint" id="solution-areas">
        <BandHeading
          eyebrow="Key solution areas"
          title="Six areas we deliver in"
          lead="Each area lists the services it covers, so a requirement can be matched against it directly."
        />
        {/* Each area faces its own photograph, alternating sides down the
            page, so the section reads as work rather than as a list. */}
        <div className="mt-16 space-y-20 lg:space-y-28">
          {solutionAreas.map((area, i) => (
            <div key={area.slug} id={area.slug} className="scroll-mt-28">
              <V2FeatureRow
                index={i + 1}
                eyebrow="Key solution area"
                title={area.name}
                description={area.description}
                image={area.image}
                imageAlt={area.imageAlt}
                flip={i % 2 === 1}
              >
                <ul className="mt-7 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                  {area.services.map((service) => (
                    <li key={service} className="flex gap-3 text-[15px] leading-snug text-fg">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-flame-500"
                        aria-hidden
                      />
                      {service}
                    </li>
                  ))}
                </ul>
              </V2FeatureRow>
            </div>
          ))}
        </div>
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
          <BandHeading
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
