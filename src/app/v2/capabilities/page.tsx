import type { Metadata } from "next";
import {
  Band,
  BandHeading,
  PageHero,
  RevealGroup,
  RevealItem,
  V2Button,
} from "@/components/v2/V2Section";
import { V2FeatureRow } from "@/components/v2/V2FeatureRow";
import {
  capabilitiesHero,
  howWeDeliver,
  outcomes,
  solutionAreas,
  v2Images,
} from "@/lib/v2-content";
import {
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  Cog,
  Compass,
  Gauge,
  Lightbulb,
  RefreshCw,
  Repeat,
  Search,
  TrendingUp,
} from "lucide-react";
/* Understand, Align, Engineer, Validate, Evolve. */
const stepIcons = [Search, Compass, Cog, CheckCircle2, Repeat];

/* Modernize, Optimize, Inform, Innovate, Scale, Deliver with confidence. */
const outcomeIcons = [RefreshCw, Gauge, BarChart3, Lightbulb, TrendingUp, BadgeCheck];

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
        <V2FeatureRow
          eyebrow="How we work"
          title="Experienced people, practical engineering"
          description={capabilitiesHero.statement}
          image={v2Images.team.src}
          imageAlt={v2Images.team.alt}
          flip
        >
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { value: "6", label: "Solution areas" },
              { value: "38", label: "Named services" },
              { value: "2008", label: "Delivering since" },
            ].map((fact) => (
              <li key={fact.label} className="border-t-2 border-flame-500 pt-4">
                <p className="font-display text-2xl font-semibold tracking-[-0.02em] text-navy-900">
                  {fact.value}
                </p>
                <p className="mt-1 text-[13px] uppercase tracking-[0.12em] text-fg-subtle">
                  {fact.label}
                </p>
              </li>
            ))}
          </ul>
        </V2FeatureRow>
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
        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {outcomes.map((outcome, i) => {
            const Icon = outcomeIcons[i % outcomeIcons.length];
            return (
              <RevealItem key={outcome.name}>
                <div className="group h-full rounded-2xl border border-navy-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-flame-500 hover:shadow-[0_18px_40px_-24px_rgb(6_26_46/0.35)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-flame-600 transition-colors duration-300 group-hover:bg-flame-600 group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-semibold text-navy-900">
                    {outcome.name}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-fg-muted">
                    {outcome.description}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Band>

      {/* ------------------------------------------------------ How we deliver */}
      <Band tone="dark" id="how-we-deliver">
        <BandHeading onDark eyebrow="How we deliver" title="Five steps, every engagement" />
        <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          <span
            className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-white/15 lg:block"
            aria-hidden
          />
          {howWeDeliver.map((item, i) => {
            const Icon = stepIcons[i % stepIcons.length];
            return (
              <li key={item.step} className="group relative">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-navy-950 text-flame-400 transition-colors duration-300 group-hover:border-flame-500 group-hover:bg-flame-600 group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-5 font-display text-sm font-semibold tracking-[0.12em] text-flame-400">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-semibold text-white">
                  {item.step}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-white/75">
                  {item.description}
                </p>
              </li>
            );
          })}

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
