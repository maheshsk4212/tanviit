import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Cloud,
  Code2,
  Lightbulb,
  Repeat,
  ShieldCheck,
  UserCheck,
  Users,
  Workflow,
} from "lucide-react";
import { Band, BandHeading } from "@/components/v2/V2Section";
import {
  certifications,
  clients,
  contractVehicles,
  industries,
  services,
  siteConfig,
  techExpertise,
} from "@/lib/site-content";

/**
 * Second design. Same company, same content library, different argument:
 * credentials and contract vehicles come first, everything is blue-and-white
 * and left-aligned, nothing animates, and body copy is near-black at 17–18px.
 *
 * It follows the information architecture that works on sites like
 * centennialtechnologies.com — qualify the buyer, then list capabilities by
 * name — while fixing what those sites get wrong: a real <h1>, an accent that
 * passes contrast, no stock clipart, and a page that loads in one second.
 */

/* Icons by position rather than by name, so renaming content cannot break. */
const talentIcons = [Users, UserCheck, Repeat, Workflow, Lightbulb];
const techIcons = [Code2, Cloud, BarChart3, Building2, ShieldCheck];

const heroFacts = [
  { value: `${contractVehicles.length}`, label: "Contract vehicles held" },
  { value: `${certifications.length}`, label: "Certifications & appraisals" },
  { value: "SEWP VI", label: "Category C contract holder" },
  { value: "Reston, VA", label: "Headquarters" },
];

export default function V2Home() {
  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="border-b border-federal-100 bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-federal-700">
              ISO 9001 · ISO/IEC 27001 · CMMI-DEV L3 · SBA 8(a)
            </p>
            <h1 className="mt-5 font-display text-[2.5rem] font-semibold leading-[1.1] tracking-[-0.025em] text-fg sm:text-5xl lg:text-[3.25rem]">
              IT talent and technology for federal and commercial missions.
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.7] text-fg sm:text-lg">
              {siteConfig.legalName} places cleared, pre-vetted IT professionals and delivers
              end-to-end technology services for federal, state, local and commercial clients —
              available through the contract vehicles you already hold.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="#vehicles"
                className="inline-flex items-center gap-2 rounded-md bg-federal-700 px-6 py-3.5 text-base font-semibold text-white hover:bg-federal-800"
              >
                View contract vehicles
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-federal-300 px-6 py-3.5 text-base font-semibold text-federal-800 hover:bg-federal-50"
              >
                Talk to our team
              </Link>
            </div>
          </div>

          {/* The proof panel does the job a stock photograph usually does — and
              answers the first question a contracting officer actually asks. */}
          <div className="rounded-xl bg-federal-800 p-8 text-white sm:p-10">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-federal-200">
              At a glance
            </h2>
            <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-8">
              {heroFacts.map((fact) => (
                <div key={fact.label}>
                  <dd className="font-display text-3xl font-semibold tracking-[-0.02em]">
                    {fact.value}
                  </dd>
                  <dt className="mt-1.5 text-sm leading-snug text-federal-100">{fact.label}</dt>
                </div>
              ))}
            </dl>
            <p className="mt-9 border-t border-white/15 pt-6 text-[15px] leading-relaxed text-federal-100">
              Small business · 8(a) certified · Serving agencies and enterprises nationwide since
              2008.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- Certifications band */}
      <Band tone="blue" id="certifications">
        <BandHeading
          onBlue
          eyebrow="Independently appraised"
          title="Certifications and appraisals"
          lead="Third-party assessments of how we run quality, security and service management — the evidence behind every proposal we submit."
        />
        <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {certifications.map((cert) => (
            <li key={cert.name} className="text-center">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white px-3">
                <span className="font-display text-[13px] font-semibold leading-[1.25] tracking-[-0.01em] text-federal-800">
                  {cert.name}
                </span>
              </div>
              <p className="mt-3 text-sm leading-snug text-federal-100">{cert.detail}</p>
            </li>
          ))}
        </ul>
      </Band>

      {/* ---------------------------------------------------------- Who we are */}
      <Band id="who-we-are">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <BandHeading eyebrow="Who we are" title="A staffing and technology partner built for regulated work." />
            <div className="mt-6 space-y-5 text-[17px] leading-[1.7] text-fg sm:text-lg">
              <p>
                {siteConfig.legalName} connects U.S. organizations with skilled IT professionals and
                delivers the technology work behind them — software development, cloud and DevOps,
                data and analytics, enterprise platforms and cybersecurity. We support federal,
                state and local agencies alongside commercial clients.
              </p>
              <p>
                Our certifications are independently appraised and our contracts are already in
                place, so a programme can move from requirement to staffed team without a new
                procurement. Work is delivered by cleared, pre-screened professionals who stay on
                the engagement.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-7 inline-flex items-center gap-2 text-base font-semibold text-federal-700 underline underline-offset-4 hover:text-federal-800"
            >
              More about the company
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <dl className="space-y-6 rounded-xl border border-federal-100 bg-federal-50 p-8">
            {[
              { term: "Headquarters", detail: siteConfig.address },
              { term: "Business status", detail: "Small business · SBA 8(a) certified" },
              { term: "Delivery", detail: "Nationwide, all U.S. time zones" },
              { term: "Contact", detail: `${siteConfig.phone} · ${siteConfig.email}` },
            ].map((row) => (
              <div key={row.term}>
                <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-federal-700">
                  {row.term}
                </dt>
                <dd className="mt-1.5 text-[17px] leading-relaxed text-fg">{row.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Band>

      {/* ------------------------------------------------------------ Services */}
      <Band tone="tint" id="services">
        <BandHeading
          eyebrow="What we do"
          title="Services"
          lead="Two lines of business, each listed by name so you can match them against your requirement."
        />

        <h3 className="mt-14 font-display text-2xl font-semibold tracking-[-0.015em] text-fg">
          Talent solutions
        </h3>
        <p className="mt-3 max-w-3xl text-[17px] leading-[1.7] text-fg">
          Sourcing, screening and placing IT professionals — on contract, permanently, or as a
          managed recruitment function.
        </p>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = talentIcons[i % talentIcons.length];
            return (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="flex h-full flex-col rounded-xl border border-federal-100 bg-white p-7 hover:border-federal-300"
                >
                  <Icon className="h-7 w-7 text-federal-700" aria-hidden />
                  <h4 className="mt-5 font-display text-lg font-semibold text-fg">
                    {service.name}
                  </h4>
                  <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-fg">
                    {service.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] text-federal-700">
                    Learn more
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <h3 className="mt-16 font-display text-2xl font-semibold tracking-[-0.015em] text-fg">
          Technology services
        </h3>
        <p className="mt-3 max-w-3xl text-[17px] leading-[1.7] text-fg">
          Consultants who deliver the work itself, across the platforms federal and commercial
          programmes run on.
        </p>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techExpertise.map((area, i) => {
            const Icon = techIcons[i % techIcons.length];
            return (
              <li
                key={area.area}
                className="flex h-full flex-col rounded-xl border border-federal-100 bg-white p-7"
              >
                <Icon className="h-7 w-7 text-federal-700" aria-hidden />
                <h4 className="mt-5 font-display text-lg font-semibold text-fg">{area.area}</h4>
                <p className="mt-2.5 text-[15px] leading-relaxed text-fg">{area.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {area.stack.slice(0, 6).map((item) => (
                    <li
                      key={item}
                      className="rounded border border-federal-200 bg-federal-50 px-2.5 py-1 text-xs font-medium text-federal-800"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </Band>

      {/* ---------------------------------------------------- Contract vehicles */}
      <Band id="vehicles">
        <BandHeading
          eyebrow="How to buy"
          title="Contract vehicles"
          lead="Award work through a vehicle you already hold. Each is current and available for new task orders."
        />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-xl border border-federal-200 bg-federal-200 sm:grid-cols-2 lg:grid-cols-3">
          {contractVehicles.map((vehicle) => (
            <li key={vehicle.name} className="bg-white p-6">
              <h3 className="font-display text-lg font-semibold text-fg">{vehicle.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg">{vehicle.detail}</p>
              {vehicle.href ? (
                <Link
                  href={vehicle.href}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] text-federal-700 hover:underline"
                >
                  Details
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              ) : null}
            </li>
          ))}
        </ul>
        {/* NEEDS-CONTENT: NAICS codes go here as their own panel — buyers search
            by code, and it is one of the few things this design still lacks. */}
      </Band>

      {/* ---------------------------------------------------------- Industries */}
      <Band tone="tint" id="industries">
        <BandHeading
          eyebrow="Who we serve"
          title="Industries"
          lead="Mission context we already understand, so a team arrives knowing the constraints."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <li key={industry.slug}>
              <Link
                href={`/industries#${industry.slug}`}
                className="flex h-full flex-col rounded-xl border border-federal-100 bg-white p-7 hover:border-federal-300"
              >
                <h3 className="font-display text-lg font-semibold text-fg">{industry.name}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-fg">{industry.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Band>

      {/* ----------------------------------------------------------- Customers */}
      <Band tone="blue" id="customers">
        <BandHeading
          onBlue
          eyebrow="Track record"
          title="Organizations we support"
          lead="Agencies and enterprises that have trusted Tanvi IT with programme delivery and technical hiring."
        />
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((client) => (
            <li
              key={client}
              className="flex h-24 items-center justify-center rounded-lg bg-white px-4 text-center"
            >
              <span className="font-display text-base font-semibold text-federal-800">
                {client}
              </span>
            </li>
          ))}
        </ul>
        {/* NEEDS-CONTENT: replace these wordmarks with agency seals and client
            logos once the list — and permission to display each — is confirmed. */}
      </Band>

      {/* ----------------------------------------------------------------- CTA */}
      <Band>
        <div className="flex flex-col gap-8 rounded-xl border border-federal-200 bg-federal-50 p-10 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-[-0.02em] text-fg">
              Tell us what the requirement is.
            </h2>
            <p className="mt-4 text-[17px] leading-[1.7] text-fg sm:text-lg">
              Whether it is one cleared specialist or a full delivery team, we will come back with
              the vehicle, the staffing plan and a timeline.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-federal-700 px-6 py-3.5 text-base font-semibold text-white hover:bg-federal-800"
            >
              Contact us
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 rounded-md border border-federal-300 bg-white px-6 py-3.5 text-base font-semibold text-federal-800 hover:bg-federal-100"
            >
              Careers
            </Link>
          </div>
        </div>
      </Band>
    </>
  );
}
