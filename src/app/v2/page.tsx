import {
  BadgeCheck,
  Boxes,
  Brain,
  CheckCircle2,
  Cloud,
  Code2,
  Cog,
  Compass,
  Database,
  Layers,
  Repeat,
  Search,
  ShieldCheck,
  TestTube2,
} from "lucide-react";
/* Understand, Align, Engineer, Validate, Evolve. */
const stepIcons = [Search, Compass, Cog, CheckCircle2, Repeat];
import {
  Band,
  BandHeading,
  MoreLink,
  Reveal,
  RevealGroup,
  RevealItem,
  V2Button,
} from "@/components/v2/V2Section";
import { V2Marquee, V2Mosaic } from "@/components/v2/V2Mosaic";
import { V2HomeHero } from "@/components/v2/V2HomeHero";
import { V2CtaBanner } from "@/components/v2/V2CtaBanner";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import {
  about,
  capabilities,
  careers,
  customerGroups,
  featuredNews,
  heroAward,
  heroFacts,
  homeHero,
  howWeDeliver,
  v2Certifications,
  v2Images,
  v2Site,
  valueProposition,
} from "@/lib/v2-content";
import Image from "next/image";
import { services, techExpertise, testimonials } from "@/lib/site-content";

/**
 * Homepage of the second design, built on what actually makes alphaomega.com
 * work: tinted light bands rather than neutral grey, section tops centred
 * under a pill eyebrow, capability tiles that are photographs with type over
 * them at staggered heights, and motion on nearly everything — reveals on
 * scroll, counters that count, a logo rail that drifts, images that lift under
 * the cursor.
 *
 * Type and motion come from the original design: Work Sans at weight 500 with
 * tight tracking, and the same Reveal easing and stagger.
 */
const credentialStrip = [
  "ISO 9001:2015",
  "ISO/IEC 20000-1:2018",
  "ISO/IEC 27001:2013",
  "CMMI-DEV L3",
  "CMMI-SVC L3",
  "SBA 8(a)",
  "NASA SEWP VI",
];

/* Photographs already vetted for the original design, reused here so the
   tiles are imagery rather than flat colour. */
const tileImages = [
  techExpertise[0]?.image,
  techExpertise[2]?.image,
  techExpertise[1]?.image,
  techExpertise[4]?.image,
  techExpertise[3]?.image,
  services[0]?.image,
  services[4]?.image,
  services[1]?.image,
];

const tileIcons = [Layers, Database, Cloud, ShieldCheck, Boxes, Code2, TestTube2, Brain];

const mosaic = capabilities.map((capability, i) => ({
  name: capability.name,
  description: capability.description,
  href: "/v2/capabilities",
  image: tileImages[i % tileImages.length] ?? "",
  Icon: tileIcons[i % tileIcons.length],
}));

export default function V2Home() {
  return (
    <>
      <V2HomeHero
        eyebrow={v2Site.tagline}
        title="Mission-focused technology."
        accent="Built for what's next."
        lead={homeHero.supporting}
        facts={heroFacts.map((fact) => ({
          ...fact,
          node: fact.count ? <AnimatedCounter value={fact.value} /> : undefined,
        }))}
        award={heroAward}
      >
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <V2Button href="/v2/capabilities">View capabilities</V2Button>
          <V2Button href="/v2/contract-vehicles/sewp-vi" variant="outline">
            NASA SEWP VI
          </V2Button>
        </div>
      </V2HomeHero>

      {/* ------------------------------------------------- Credential rule */}
      {/* A tinted rule rather than bare text on white, so the credentials
          read as a band of their own between the hero and the page. */}
      <div className="border-b border-navy-100 bg-navy-50 [background-image:linear-gradient(90deg,rgb(227_232_252)_0%,rgb(248_250_255)_50%,rgb(227_232_252)_100%)]">
        <div className="mx-auto w-full max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
          <RevealGroup
            className="flex flex-wrap items-center gap-x-8 gap-y-3 sm:gap-x-12"
            stagger={0.05}
          >
            {credentialStrip.map((item) => (
              <RevealItem key={item}>
                <span className="flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-navy-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-flame-600" aria-hidden />
                  {item}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
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
            <p className="mt-9 border-l-2 border-flame-500 pl-6 font-display text-xl font-semibold leading-snug tracking-[-0.02em] text-fg">
              {about.pullQuote}
            </p>
          </Reveal>
          <Reveal
            delay={0.1}
            direction="right"
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

        {/* The section was four columns of prose and nothing else. The
            photograph gives it something to look at, and the four points sit
            over it as cards rather than under it as a text list. */}
        <Reveal className="mt-20">
          <div className="relative isolate overflow-hidden rounded-3xl bg-navy-950">
            <Image
              src={v2Images.team.src}
              alt={v2Images.team.alt}
              fill
              sizes="100vw"
              quality={85}
              className="object-cover"
            />
            <div
              className="absolute inset-0 [background-image:linear-gradient(118deg,rgb(5_12_40/0.95)_0%,rgb(5_12_40/0.9)_55%,rgb(5_12_40/0.82)_100%)]"
              aria-hidden
            />
            <RevealGroup
              className="relative grid gap-x-10 gap-y-10 p-8 sm:grid-cols-2 sm:p-12 lg:grid-cols-4 lg:p-14"
              stagger={0.06}
            >
              {about.whyTanvi.map((item) => (
                <RevealItem key={item.name}>
                  <div className="group border-t-2 border-white/20 pt-5 transition-colors duration-300 hover:border-flame-500">
                    <h3 className="font-display text-lg font-semibold tracking-[-0.02em] text-white">
                      {item.name}
                    </h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-white/80">
                      {item.description}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Reveal>
      </Band>

      {/* ------------------------------ Capabilities — photographic mosaic */}
      <Band motif tone="tint" id="capabilities">
        <BandHeading
          eyebrow="What we do"
          title="Technology that supports the mission"
          lead={homeHero.statement}
          action={<V2Button href="/v2/capabilities">All capabilities</V2Button>}
        />
        <div className="mt-16">
          <V2Mosaic tiles={mosaic} />
        </div>
      </Band>

      {/* ------------------------------ Contract feature — split dark panel */}
      <Band>
        <Reveal className="overflow-hidden rounded-3xl bg-navy-950">
          <div className="grid gap-12 p-10 sm:p-14 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:p-16">
            <div>
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-flame-400">
                Latest news
              </span>
              <h2 className="mt-6 text-balance font-display text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.75rem]">
                {featuredNews.title}
              </h2>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-flame-400">
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

            <Reveal delay={0.15} direction="right" className="rounded-2xl bg-white/[0.06] p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flame-400">
                Contract number
              </p>
              <p className="mt-3 font-display text-4xl font-semibold tracking-[-0.03em] text-white sm:text-[2.75rem]">
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
            </Reveal>
          </div>
        </Reveal>
      </Band>

      {/* ------------------------------------- How we deliver — numbered rail */}
      <Band tone="dark">
        <BandHeading
          onDark
          eyebrow="How we deliver"
          title="Five steps, every engagement"
        />
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

      {/* --------------------------------------------- Certifications */}
      <Band motif tone="tint" id="certifications">
        <BandHeading
          eyebrow="Certifications & credentials"
          title="Independently appraised, federally certified"
          lead="Third-party assessments of how we run quality, security and service management — the evidence behind every proposal we submit."
          action={<MoreLink href="/v2/about#certifications">About our credentials</MoreLink>}
        />
        <RevealGroup
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          stagger={0.05}
        >
          {v2Certifications.map((cert) => (
            <RevealItem key={cert.name}>
              {/* Each card carries a seal and a gradient rather than being a
                  white box with two lines of type in it. */}
              <div className="group flex h-full flex-col items-center justify-start rounded-2xl border border-navy-200 bg-white [background-image:linear-gradient(180deg,rgb(255_255_255)_0%,rgb(242_245_254)_100%)] px-5 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-flame-500 hover:shadow-[0_18px_40px_-24px_rgb(6_26_46/0.45)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-50 text-flame-600 ring-1 ring-navy-200 transition-colors duration-300 group-hover:bg-flame-600 group-hover:text-white group-hover:ring-flame-600">
                  <BadgeCheck className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-4 font-display text-base font-semibold leading-tight tracking-[-0.01em] text-fg">
                  {cert.name}
                </p>
                <p className="mt-2 text-[13px] leading-snug text-fg-subtle">{cert.detail}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Band>

      {/* ------------------------------------ Customers — drifting logo rail */}
      <Band motif id="customers">
        <BandHeading
          eyebrow="Customers & past performance"
          title="Organizations we support"
          lead="Government programs and commercial organizations that have trusted Tanvi IT with delivery."
          action={<MoreLink href="/v2/customers">Customers & past performance</MoreLink>}
        />
        <Reveal className="mt-16">
          <V2Marquee items={customerGroups.flatMap((g) => g.customers.map((c) => c.name))} />
        </Reveal>
      </Band>

      {/* ----------------------------------------------- Testimonials */}
      <Band tone="dark">
        <BandHeading onDark eyebrow="Client testimonials" title="What our clients say" />
        <Reveal delay={0.1}>
          {/* The lead quote gets the photograph that was already sitting in
              the content and never being shown. */}
          <figure className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16">
            <div className="border-l-2 border-flame-500 pl-8">
              <blockquote className="text-balance font-display text-2xl font-semibold leading-[1.3] tracking-[-0.02em] text-white sm:text-3xl lg:text-[2.25rem]">
                “{testimonials[0].quote}”
              </blockquote>
              <figcaption className="mt-7 text-[15px] text-white/80">
                <span className="font-semibold text-white">{testimonials[0].author}</span>,{" "}
                {testimonials[0].company}
              </figcaption>
            </div>
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-navy-900">
              <Image
                src={testimonials[0].image}
                alt=""
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                quality={85}
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-tr from-navy-950/55 via-navy-950/10 to-transparent"
                aria-hidden
              />
            </div>
          </figure>
        </Reveal>
        <RevealGroup className="mt-16 grid gap-6 border-t border-white/15 pt-12 sm:grid-cols-2">
          {testimonials.slice(1).map((testimonial) => (
            <RevealItem key={testimonial.company}>
              <div className="h-full rounded-2xl bg-white/[0.06] p-8 transition-colors duration-300 hover:bg-white/[0.1]">
                <blockquote className="text-base leading-relaxed text-white/85 sm:text-lg">
                  “{testimonial.quote}”
                </blockquote>
                <p className="mt-5 text-[15px] text-white/80">
                  <span className="font-semibold text-white">{testimonial.author}</span>,{" "}
                  {testimonial.company}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Band>

      {/* ---------------------------------------------------- Careers */}
      <Band tone="tint">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <BandHeading eyebrow="Careers" title={careers.headline} lead={careers.body} />
            <p className="mt-7 font-display text-lg font-semibold tracking-[-0.02em] text-navy-700">
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
                <div className="group rounded-2xl border border-navy-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-flame-500">
                  <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-navy-700">
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

      {/* The reference closes on an inset photographic banner rather than a
          plain CTA strip; this is the same device. */}
      <V2CtaBanner
        eyebrow="Work with us"
        title={about.closing.headline}
        lead={about.closing.body}
        image={v2Images.capitol.src}
        imageAlt=""
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <V2Button href="/v2/contact">Talk to our team</V2Button>
          <V2Button href="/v2/contract-vehicles" variant="outline-dark">
            How to buy
          </V2Button>
        </div>
      </V2CtaBanner>
    </>
  );
}
