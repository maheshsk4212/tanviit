import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Band, BandHeading, MoreLink, PageHero, V2Button } from "@/components/v2/V2Section";
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
 * Homepage of the second design. Each band gets its own treatment rather than
 * one card grid repeated down the page: a credential rule, an asymmetric
 * statement, a numbered capability index, a dark contract feature, a seal row,
 * a grouped logo wall, a featured quote and a split careers panel.
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

export default function V2Home() {
  return (
    <>
      <PageHero
        video
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
              <dd className="font-display text-2xl font-semibold text-copper-400">{fact.value}</dd>
              <dt className="mt-1 text-[13px] leading-snug text-white">{fact.label}</dt>
            </div>
          ))}
        </dl>
      </PageHero>

      {/* ------------------------------------------------- Credential rule */}
      <div className="border-b border-navy-100 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-12">
            {credentialStrip.map((item) => (
              <li
                key={item}
                className="text-[13px] font-semibold uppercase tracking-[0.14em] text-fg-subtle"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* -------------------------------------------- Value proposition */}
      <Band>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <BandHeading
              eyebrow="Why Tanvi IT"
              title="Value creation, mission outcomes, long-term success."
            />
            <p className="mt-8 border-l-4 border-copper-500 pl-6 font-display text-xl font-semibold leading-snug text-navy-900">
              {about.pullQuote}
            </p>
          </div>
          <div className="space-y-5 text-[17px] leading-[1.75] text-fg sm:text-lg">
            {valueProposition.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <div className="pt-4">
              <MoreLink href="/v2/about">About Tanvi IT</MoreLink>
            </div>
          </div>
        </div>

        <ul className="mt-16 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {about.whyTanvi.map((item) => (
            <li key={item.name} className="border-t-2 border-copper-500 pt-5">
              <h3 className="font-display text-base font-semibold text-navy-900">{item.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg">{item.description}</p>
            </li>
          ))}
        </ul>
      </Band>

      {/* ------------------------------------------- Capability index */}
      <Band tone="tint" id="capabilities">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <BandHeading
            eyebrow="Capabilities"
            title="Technology that supports the mission"
            lead={homeHero.statement}
          />
          <MoreLink href="/v2/capabilities">All capabilities</MoreLink>
        </div>

        <ul className="mt-14 border-t border-navy-200">
          {capabilities.map((capability, i) => (
            <li key={capability.name} className="border-b border-navy-200">
              <Link
                href="/v2/capabilities"
                className="group grid gap-x-8 gap-y-2 px-2 py-7 transition-colors hover:bg-white sm:grid-cols-[3.5rem_1fr_2rem] sm:items-baseline"
              >
                <span className="font-display text-sm font-semibold tracking-[0.1em] text-copper-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.015em] text-navy-900 group-hover:text-copper-800 sm:text-2xl">
                    {capability.name}
                  </h3>
                  <p className="mt-2 max-w-3xl text-[16px] leading-relaxed text-fg">
                    {capability.description}
                  </p>
                </div>
                <ArrowRight
                  className="hidden h-5 w-5 self-center text-copper-600 opacity-0 transition-opacity group-hover:opacity-100 sm:block"
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>
      </Band>

      {/* ------------------------------------------ Contract feature */}
      <Band tone="dark">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <BandHeading onDark eyebrow="Latest news" title={featuredNews.title} />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.1em] text-copper-400">
              {featuredNews.dateline}
            </p>
            <p className="mt-6 text-[17px] leading-[1.75] text-navy-100 sm:text-lg">
              {featuredNews.body[0]}
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <MoreLink href="/v2/news" onDark>
                Read the announcement
              </MoreLink>
              <MoreLink href="/v2/contract-vehicles/sewp-vi" onDark>
                Ordering information
              </MoreLink>
            </div>
          </div>

          <div className="border border-white/20 p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-copper-400">
              Contract number
            </p>
            <p className="mt-3 font-display text-4xl font-semibold tracking-[-0.02em] text-white sm:text-5xl">
              80TECH26D0642
            </p>
            <dl className="mt-8 space-y-5 border-t border-white/20 pt-8">
              {[
                { term: "Category", detail: "Category C — IT Mission-Based Services" },
                { term: "Period of performance", detail: "Nov 2026 – Oct 2036" },
                { term: "NAICS", detail: "541511 — Custom Computer Programming Services" },
              ].map((row) => (
                <div key={row.term} className="flex flex-wrap justify-between gap-x-8 gap-y-1">
                  <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-copper-400">
                    {row.term}
                  </dt>
                  <dd className="text-[15px] text-white">{row.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Band>

      {/* --------------------------------------------- Certifications */}
      <Band id="certifications">
        <BandHeading
          eyebrow="Certifications & credentials"
          title="Independently appraised, federally certified"
          lead="Third-party assessments of how we run quality, security and service management — the evidence behind every proposal we submit."
        />
        <ul className="mt-12 grid grid-cols-2 gap-px bg-navy-200 sm:grid-cols-3 lg:grid-cols-6">
          {v2Certifications.map((cert) => (
            <li key={cert.name} className="bg-white px-5 py-8 text-center">
              <p className="font-display text-base font-semibold leading-tight text-navy-900">
                {cert.name}
              </p>
              <p className="mt-2 text-[13px] leading-snug text-fg-subtle">{cert.detail}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <MoreLink href="/v2/about#certifications">About our credentials</MoreLink>
        </div>
      </Band>

      {/* -------------------------------------------------- Customers */}
      <Band tone="tint" id="customers">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <BandHeading
            eyebrow="Customers & past performance"
            title="Organizations we support"
            lead="Government programmes and commercial organizations that have trusted Tanvi IT with delivery."
          />
          <MoreLink href="/v2/customers">Past performance</MoreLink>
        </div>
        {customerGroups.map((group) => (
          <div key={group.heading} className="mt-12">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-copper-700">
              {group.heading}
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-px bg-navy-200 sm:grid-cols-3 lg:grid-cols-5">
              {group.customers.map((customer) => (
                <li
                  key={customer.name}
                  className="flex h-24 items-center justify-center bg-white px-4 text-center"
                >
                  <span className="font-display text-base font-semibold text-navy-900">
                    {customer.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Band>

      {/* ----------------------------------------------- Testimonials */}
      <Band>
        <BandHeading eyebrow="Client testimonials" title="What our clients say" />
        <figure className="mt-12 border-l-4 border-copper-500 pl-8">
          <blockquote className="max-w-4xl font-display text-2xl font-medium leading-[1.35] tracking-[-0.015em] text-navy-900 sm:text-[2rem]">
            “{testimonials[0].quote}”
          </blockquote>
          <figcaption className="mt-6 text-[15px] text-fg">
            <span className="font-semibold">{testimonials[0].author}</span>,{" "}
            {testimonials[0].company}
          </figcaption>
        </figure>
        <ul className="mt-12 grid gap-10 border-t border-navy-100 pt-10 sm:grid-cols-2">
          {testimonials.slice(1).map((testimonial) => (
            <li key={testimonial.company}>
              <blockquote className="text-[17px] leading-[1.7] text-fg">
                “{testimonial.quote}”
              </blockquote>
              <p className="mt-4 text-[15px] text-fg">
                <span className="font-semibold">{testimonial.author}</span>, {testimonial.company}
              </p>
            </li>
          ))}
        </ul>
      </Band>

      {/* ---------------------------------------------------- Careers */}
      <Band tone="tint">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <BandHeading eyebrow="Careers" title={careers.headline} lead={careers.body} />
            <p className="mt-6 font-display text-lg font-semibold text-copper-700">
              {careers.strapline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <V2Button href="/v2/careers">Explore careers</V2Button>
              <V2Button href="/v2/contact" variant="outline">
                Contact us
              </V2Button>
            </div>
          </div>
          <ul className="space-y-px bg-navy-200">
            {about.approach.map((item) => (
              <li key={item.name} className="bg-white p-7">
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-copper-700">
                  {item.name}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-fg">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Band>
    </>
  );
}
