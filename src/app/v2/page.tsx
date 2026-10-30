import Link from "next/link";
import {
  Boxes,
  Brain,
  Cloud,
  Database,
  Layers,
  ShieldCheck,
  TestTube2,
  Code2,
} from "lucide-react";
import { Band, BandHeading, MoreLink, PageHero, V2Button } from "@/components/v2/V2Section";
import {
  capabilities,
  careers,
  featuredNews,
  homeHero,
  v2Certifications,
  customerGroups,
  v2Site,
  valueProposition,
} from "@/lib/v2-content";
import { testimonials } from "@/lib/site-content";

/**
 * Homepage of the second design, following the client's homepage
 * implementation guide: positioning, value proposition, the eight
 * capabilities, credentials, customers, testimonials, the SEWP VI award and
 * careers — each linking out to a page of its own.
 */
const capabilityIcons = [Layers, Database, Cloud, ShieldCheck, Boxes, Code2, TestTube2, Brain];

const heroFacts = [
  { value: "2008", label: "Serving clients since" },
  { value: "SEWP VI", label: "Category C contract holder" },
  { value: "6", label: "Certifications & appraisals" },
  { value: "8(a)", label: "SBA certified small business" },
];

export default function V2Home() {
  return (
    <>
      <PageHero
        tall
        eyebrow={v2Site.tagline}
        title={homeHero.headline}
        lead={homeHero.supporting}
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <V2Button href="/v2/capabilities">View capabilities</V2Button>
          <V2Button href="/v2/contract-vehicles/sewp-vi" variant="outline-dark">
            NASA SEWP VI
          </V2Button>
        </div>

        <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t border-white/20 pt-8 sm:grid-cols-4">
          {heroFacts.map((fact) => (
            <div key={fact.label}>
              <dd className="font-display text-2xl font-semibold text-brass-400">{fact.value}</dd>
              <dt className="mt-1 text-[13px] leading-snug text-white">{fact.label}</dt>
            </div>
          ))}
        </dl>
      </PageHero>

      {/* ------------------------------------------------- Value proposition */}
      <Band>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <BandHeading eyebrow="Why Tanvi IT" title="Value creation, mission outcomes, long-term success." />
          <div className="space-y-5 text-[17px] leading-[1.7] text-fg sm:text-lg">
            {valueProposition.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <MoreLink href="/v2/about">About Tanvi IT</MoreLink>
          </div>
        </div>
      </Band>

      {/* ------------------------------------------------------- Capabilities */}
      <Band tone="tint" id="capabilities">
        <BandHeading
          eyebrow="Capabilities"
          title="Technology that supports the mission"
          lead={homeHero.statement}
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability, i) => {
            const Icon = capabilityIcons[i % capabilityIcons.length];
            return (
              <li key={capability.name}>
                <Link
                  href="/v2/capabilities"
                  className="flex h-full flex-col rounded-xl border border-brass-100 bg-white p-7 hover:border-brass-300"
                >
                  <Icon className="h-7 w-7 text-brass-700" aria-hidden />
                  <h3 className="mt-5 font-display text-lg font-semibold text-fg">
                    {capability.name}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-fg">
                    {capability.description}
                  </p>
                  <span className="mt-5 text-sm font-semibold uppercase tracking-[0.1em] text-brass-700">
                    Learn more
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Band>

      {/* ------------------------------------------------------- Credentials */}
      <Band tone="dark" id="certifications">
        <BandHeading
          onDark
          eyebrow="Certifications & credentials"
          title="Independently appraised, federally certified"
          lead="Third-party assessments of how we run quality, security and service management — the evidence behind every proposal we submit."
        />
        <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {v2Certifications.map((cert) => (
            <li key={cert.name} className="text-center">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white px-3">
                <span className="font-display text-[13px] font-semibold leading-[1.25] tracking-[-0.01em] text-ink-950">
                  {cert.name}
                </span>
              </div>
              <p className="mt-3 text-sm leading-snug text-ink-100">{cert.detail}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <MoreLink href="/v2/about#certifications" onDark>
            About our credentials
          </MoreLink>
        </div>
      </Band>

      {/* ------------------------------------------------- Featured: SEWP VI */}
      <Band>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <BandHeading eyebrow="Latest news" title={featuredNews.title} />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.1em] text-fg-subtle">
              {featuredNews.dateline}
            </p>
            <p className="mt-5 text-[17px] leading-[1.7] text-fg sm:text-lg">
              {featuredNews.body[0]}
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <MoreLink href="/v2/news">Read the announcement</MoreLink>
              <MoreLink href="/v2/contract-vehicles/sewp-vi">SEWP VI ordering information</MoreLink>
            </div>
          </div>
          <dl className="space-y-6 rounded-xl border border-brass-100 bg-brass-50 p-8">
            {[
              { term: "Contract number", detail: "80TECH26D0642" },
              { term: "Category", detail: "Category C — IT Mission-Based Services" },
              { term: "Period of performance", detail: "Nov 2026 – Oct 2036" },
              { term: "NAICS", detail: "541511 — Custom Computer Programming Services" },
            ].map((row) => (
              <div key={row.term}>
                <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-brass-700">
                  {row.term}
                </dt>
                <dd className="mt-1.5 text-[17px] leading-relaxed text-fg">{row.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Band>

      {/* --------------------------------------------------------- Customers */}
      <Band tone="tint" id="customers">
        <BandHeading
          eyebrow="Customers & past performance"
          title="Organizations we support"
          lead="Agencies and enterprises that have trusted Tanvi IT with programme delivery and technical hiring."
        />
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {customerGroups.flatMap((group) => group.customers).map((customer) => (
            <li
              key={customer.name}
              className="flex h-24 items-center justify-center rounded-lg border border-brass-100 bg-white px-4 text-center"
            >
              <span className="font-display text-base font-semibold text-ink-950">
                {customer.name}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <MoreLink href="/v2/customers">Customers & past performance</MoreLink>
        </div>
      </Band>

      {/* ------------------------------------------------------ Testimonials */}
      <Band>
        <BandHeading eyebrow="Client testimonials" title="What our clients say" />
        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial) => (
            <li
              key={testimonial.company}
              className="flex h-full flex-col rounded-xl border border-brass-100 bg-white p-7"
            >
              <blockquote className="flex-1 text-[17px] leading-[1.65] text-fg">
                “{testimonial.quote}”
              </blockquote>
              <p className="mt-6 text-sm font-semibold text-fg">{testimonial.author}</p>
              <p className="text-sm text-fg-subtle">{testimonial.company}</p>
            </li>
          ))}
        </ul>
      </Band>

      {/* ----------------------------------------------------------- Careers */}
      <Band tone="dark">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-16">
          <div>
            <BandHeading onDark eyebrow="Careers" title={careers.headline} lead={careers.body} />
            <p className="mt-5 font-display text-lg font-semibold text-brass-400">
              {careers.strapline}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <V2Button href="/v2/careers" variant="outline-dark">
              Explore careers
            </V2Button>
            <V2Button href="/v2/contact">Contact us</V2Button>
          </div>
        </div>
      </Band>
    </>
  );
}
