import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Band,
  BandHeading,
  MoreLink,
  PageHero,
  Reveal,
  RevealGroup,
  RevealItem,
  V2Button,
} from "@/components/v2/V2Section";
import {
  about,
  capabilities,
  careers,
  customerGroups,
  featuredNews,
  homeHero,
  v2Certifications,
  v2Site,
  valueProposition,
} from "@/lib/v2-content";
import { testimonials } from "@/lib/site-content";

/**
 * Homepage of the second design, built on the patterns that make
 * alphaomega.com work: one deep hue for the dark bands, a vivid accent used
 * sparingly on them, a pale grey between, cards of deliberately uneven height,
 * split panels where a headline faces a panel of detail, and everything
 * arriving on scroll. Type is the original design's scale — Work Sans at
 * weight 500, tight tracking, body copy in true black.
 */
const heroFacts = [
  { value: "2008", label: "Serving clients since" },
  { value: "SEWP VI", label: "Category C contract holder" },
  { value: "6", label: "Certifications & appraisals" },
  { value: "8(a)", label: "SBA certified small business" },
];

const credentialStrip = [
  "ISO 9001:2015",
  "ISO/IEC 20000-1:2018",
  "ISO/IEC 27001:2013",
  "CMMI-DEV L3",
  "CMMI-SVC L3",
  "SBA 8(a)",
  "NASA SEWP VI",
];

/* Uneven card heights, the way the reference staggers its capability tiles. */
const cardHeights = [
  "lg:min-h-[23rem]",
  "lg:mt-10 lg:min-h-[19rem]",
  "lg:mt-4 lg:min-h-[21rem]",
  "lg:mt-14 lg:min-h-[18rem]",
];

export default function V2Home() {
  return (
    <>
      <PageHero
        video
        tall
        eyebrow={v2Site.tagline}
        title="Mission-focused technology."
        accent="Built for what's next."
        lead={homeHero.supporting}
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <V2Button href="/v2/capabilities">View capabilities</V2Button>
          <V2Button href="/v2/contract-vehicles/sewp-vi" variant="outline-dark">
            NASA SEWP VI
          </V2Button>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t border-white/20 pt-8 sm:grid-cols-4">
          {heroFacts.map((fact) => (
            <div key={fact.label}>
              <dd className="font-display text-2xl font-medium tracking-[-0.02em] text-sky-300">
                {fact.value}
              </dd>
              <dt className="mt-1 text-[13px] leading-snug text-white">{fact.label}</dt>
            </div>
          ))}
        </dl>
      </PageHero>

      {/* ------------------------------------------------- Credential rule */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-12">
            {credentialStrip.map((item) => (
              <li
                key={item}
                className="text-[13px] font-semibold uppercase tracking-[0.16em] text-fg-subtle"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* -------------------------------------------- Value proposition */}
      <Band>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <BandHeading
              eyebrow="Why Tanvi IT"
              title="Value creation, mission outcomes, long-term success."
            />
            <p className="mt-9 border-l-2 border-sky-400 pl-6 font-display text-xl font-medium leading-snug tracking-[-0.02em] text-fg">
              {about.pullQuote}
            </p>
          </Reveal>
          <Reveal
            delay={0.1}
            className="space-y-6 text-base leading-relaxed text-fg-muted sm:text-lg"
          >
            {valueProposition.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <div className="pt-2">
              <MoreLink href="/v2/about">About Tanvi IT</MoreLink>
            </div>
          </Reveal>
        </div>

        <RevealGroup className="mt-20 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {about.whyTanvi.map((item) => (
            <RevealItem key={item.name} className="border-t-2 border-navy-700 pt-5">
              <h3 className="font-display text-lg font-medium tracking-[-0.02em] text-fg">
                {item.name}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-fg-muted">{item.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Band>

      {/* ------------------------------- Capabilities — staggered dark cards */}
      <Band tone="tint" id="capabilities">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <BandHeading
            eyebrow="Capabilities"
            title="Technology that supports the mission"
            lead={homeHero.statement}
          />
          <MoreLink href="/v2/capabilities">All capabilities</MoreLink>
        </div>

        <RevealGroup className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
          {capabilities.map((capability, i) => (
            <RevealItem key={capability.name} className={cardHeights[i % cardHeights.length]}>
              <Link
                href="/v2/capabilities"
                className="group flex h-full flex-col justify-between rounded-2xl bg-navy-950 p-7 transition-colors duration-300 hover:bg-navy-900"
              >
                <span className="font-display text-sm font-medium tracking-[0.1em] text-sky-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-10">
                  <h3 className="font-display text-xl font-medium leading-snug tracking-[-0.02em] text-white">
                    {capability.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/75">
                    {capability.description}
                  </p>
                  <ArrowUpRight
                    className="mt-5 h-5 w-5 text-sky-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Band>

      {/* ------------------------------ Contract feature — split dark panel */}
      <Band>
        <Reveal className="overflow-hidden rounded-3xl bg-navy-950">
          <div className="grid gap-12 p-10 sm:p-14 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:p-16">
            <div>
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                Latest news
              </span>
              <h2 className="mt-6 text-balance font-display text-3xl font-medium leading-[1.08] tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.75rem]">
                {featuredNews.title}
              </h2>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-sky-300">
                {featuredNews.dateline}
              </p>
              <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
                {featuredNews.body[0]}
              </p>
              <div className="mt-9 flex flex-wrap gap-6">
                <MoreLink href="/v2/news" onDark>
                  Read the announcement
                </MoreLink>
                <MoreLink href="/v2/contract-vehicles/sewp-vi" onDark>
                  Ordering information
                </MoreLink>
              </div>
            </div>

            <div className="rounded-2xl bg-white/[0.06] p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                Contract number
              </p>
              <p className="mt-3 font-display text-4xl font-medium tracking-[-0.03em] text-white sm:text-[2.75rem]">
                80TECH26D0642
              </p>
              <dl className="mt-8 space-y-5 border-t border-white/15 pt-8">
                {[
                  { term: "Category", detail: "Category C — IT Mission-Based Services" },
                  { term: "Period of performance", detail: "Nov 2026 – Oct 2036" },
                  { term: "NAICS", detail: "541511" },
                ].map((row) => (
                  <div key={row.term} className="flex flex-wrap justify-between gap-x-8 gap-y-1">
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                      {row.term}
                    </dt>
                    <dd className="text-[15px] text-white">{row.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </Band>

      {/* --------------------------------------------- Certifications */}
      <Band tone="tint" id="certifications">
        <BandHeading
          eyebrow="Certifications & credentials"
          title="Independently appraised, federally certified"
          lead="Third-party assessments of how we run quality, security and service management — the evidence behind every proposal we submit."
        />
        <RevealGroup
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          stagger={0.05}
        >
          {v2Certifications.map((cert) => (
            <RevealItem key={cert.name}>
              <div className="flex h-full flex-col justify-center rounded-2xl border border-slate-200 bg-white px-5 py-8 text-center">
                <p className="font-display text-base font-medium leading-tight tracking-[-0.01em] text-fg">
                  {cert.name}
                </p>
                <p className="mt-2 text-[13px] leading-snug text-fg-subtle">{cert.detail}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
        <div className="mt-12">
          <MoreLink href="/v2/about#certifications">About our credentials</MoreLink>
        </div>
      </Band>

      {/* -------------------------------------------------- Customers */}
      <Band id="customers">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <BandHeading
            eyebrow="Customers & past performance"
            title="Organizations we support"
            lead="Government programs and commercial organizations that have trusted Tanvi IT with delivery."
          />
          <MoreLink href="/v2/customers">Past performance</MoreLink>
        </div>
        {customerGroups.map((group) => (
          <div key={group.heading} className="mt-14">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-700">
              {group.heading}
            </h3>
            <RevealGroup
              className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5"
              stagger={0.04}
            >
              {group.customers.map((customer) => (
                <RevealItem key={customer.name}>
                  <div className="flex h-24 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-center transition-colors duration-300 hover:border-navy-300">
                    <span className="font-display text-base font-medium tracking-[-0.01em] text-fg">
                      {customer.name}
                    </span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        ))}
      </Band>

      {/* ----------------------------------------------- Testimonials */}
      <Band tone="dark">
        <BandHeading onDark eyebrow="Client testimonials" title="What our clients say" />
        <Reveal delay={0.1}>
          <figure className="mt-14 border-l-2 border-sky-400 pl-8">
            <blockquote className="max-w-4xl text-balance font-display text-2xl font-medium leading-[1.3] tracking-[-0.02em] text-white sm:text-3xl lg:text-[2.25rem]">
              “{testimonials[0].quote}”
            </blockquote>
            <figcaption className="mt-7 text-[15px] text-white/80">
              <span className="font-semibold text-white">{testimonials[0].author}</span>,{" "}
              {testimonials[0].company}
            </figcaption>
          </figure>
        </Reveal>
        <RevealGroup className="mt-14 grid gap-10 border-t border-white/15 pt-12 sm:grid-cols-2">
          {testimonials.slice(1).map((testimonial) => (
            <RevealItem key={testimonial.company}>
              <blockquote className="text-base leading-relaxed text-white/80 sm:text-lg">
                “{testimonial.quote}”
              </blockquote>
              <p className="mt-4 text-[15px] text-white/80">
                <span className="font-semibold text-white">{testimonial.author}</span>,{" "}
                {testimonial.company}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Band>

      {/* ---------------------------------------------------- Careers */}
      <Band tone="tint">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <BandHeading eyebrow="Careers" title={careers.headline} lead={careers.body} />
            <p className="mt-7 font-display text-lg font-medium tracking-[-0.02em] text-navy-700">
              {careers.strapline}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <V2Button href="/v2/careers">Explore careers</V2Button>
              <V2Button href="/v2/contact" variant="outline">
                Contact us
              </V2Button>
            </div>
          </Reveal>
          <RevealGroup className="grid gap-4" stagger={0.08}>
            {about.approach.map((item) => (
              <RevealItem key={item.name}>
                <div className="rounded-2xl border border-slate-200 bg-white p-7">
                  <h3 className="font-display text-sm font-medium uppercase tracking-[0.18em] text-navy-700">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-fg-muted">
                    {item.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Band>
    </>
  );
}
