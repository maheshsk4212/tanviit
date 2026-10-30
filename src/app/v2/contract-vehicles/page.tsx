import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  FileCheck2,
  FileText,
  Hash,
  Landmark,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
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
  buyerSnapshot,
  cooperativeVehicles,
  howToBuy,
  naicsCodes,
  sewpVi,
  v2Images,
  vehicleProfiles,
} from "@/lib/v2-content";

export const metadata: Metadata = {
  title: "Contract vehicles",
  description:
    "Award work to Tanvi IT through NASA SEWP VI Category C, GSA MAS, 8(a) STARS III and cooperative vehicles. Contract details and NAICS 541511.",
};

/* The snapshot rows, in the order a contracting officer reads them. */
const snapshotIcons = [Hash, FileText, ShieldCheck, FileCheck2, Sparkles, MapPin];

export default function V2Vehicles() {
  const [featured, ...others] = vehicleProfiles;

  return (
    <>
      <PageHero
        eyebrow="Contract vehicles"
        title="Buy through a vehicle"
        accent="you already hold"
        lead="Tanvi IT is available through government-wide acquisition contracts, schedules and cooperative agreements — so a requirement can move from scope to staffed team without a new procurement."
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <V2Button href="/v2/contract-vehicles/sewp-vi">NASA SEWP VI ordering</V2Button>
          <V2Button href="/v2/contact" variant="outline-dark">
            Request a quote
          </V2Button>
        </div>
      </PageHero>

      {/* ------------------------------------------------ Buyer snapshot */}
      <Band>
        <BandHeading
          eyebrow="At a glance"
          title="The details you need before you buy"
          lead="Everything a contracting officer usually asks for first, in one place."
        />
        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {buyerSnapshot.map((row, i) => {
            const Icon = snapshotIcons[i % snapshotIcons.length];
            return (
              <RevealItem key={row.term}>
                <div className="group h-full rounded-2xl border border-navy-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-flame-500 hover:shadow-[0_18px_40px_-24px_rgb(6_26_46/0.35)]">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-flame-600 transition-colors duration-300 group-hover:bg-flame-600 group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-navy-700">
                    {row.term}
                  </p>
                  <p className="mt-2 font-display text-lg font-semibold leading-snug text-navy-900">
                    {row.detail}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Band>

      {/* ------------------------------------------------- Featured: SEWP */}
      <Band tone="tint">
        <Reveal className="overflow-hidden rounded-3xl border border-navy-200 bg-white">
          <div className="grid items-stretch lg:grid-cols-[1.25fr_1fr]">
            <div className="p-8 sm:p-10 lg:p-14">
              <span className="inline-flex items-center rounded-full bg-flame-600 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                Featured vehicle
              </span>
              <h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.03em] text-navy-900 sm:text-4xl">
                {featured.name}
              </h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-navy-700">
                {featured.kind}
              </p>
              <p className="mt-5 text-base leading-relaxed text-fg-muted sm:text-lg">
                {featured.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <MoreLink href="/v2/contract-vehicles/sewp-vi">Ordering information</MoreLink>
                <a
                  href={sewpVi.orderingGuide.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-navy-700 underline-offset-4 hover:text-flame-600 hover:underline"
                >
                  Ordering guide (PDF)
                </a>
              </div>
            </div>

            <div className="relative min-h-[20rem] overflow-hidden lg:min-h-full">
              <Image
                src={v2Images.launch.src}
                alt={v2Images.launch.alt}
                fill
                quality={90}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              {/* the exhaust trail is near-white; this keeps the facts legible */}
              <div className="absolute inset-0 bg-navy-950/85" aria-hidden />
              <dl className="relative grid gap-5 p-8 sm:grid-cols-2 sm:p-10 lg:p-12">
                {featured.facts.map((row) => (
                  <div key={row.term}>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-flame-400">
                      {row.term}
                    </dt>
                    <dd className="mt-1 text-[15px] leading-relaxed text-white">{row.detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </Band>

      {/* ------------------------------------------- Vehicle by vehicle */}
      <Band motif id="all-vehicles">
        <BandHeading
          eyebrow="Federal vehicles"
          title="Where Tanvi IT can be awarded work"
          lead="What each programme is for, so you can tell at a glance whether it is the right route for your requirement."
        />
        <RevealGroup className="mt-14 grid gap-5 lg:grid-cols-2" stagger={0.06}>
          {others.map((vehicle) => (
            <RevealItem key={vehicle.name}>
              <article className="group flex h-full flex-col rounded-2xl border border-navy-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-flame-500 hover:shadow-[0_18px_40px_-24px_rgb(6_26_46/0.35)]">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-flame-600 transition-colors duration-300 group-hover:bg-flame-600 group-hover:text-white">
                    <Landmark className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="rounded-full border border-navy-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-navy-700">
                    {vehicle.kind}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.02em] text-navy-900">
                  {vehicle.name}
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-fg-muted">
                  {vehicle.summary}
                </p>
                <p className="mt-6 border-t border-navy-100 pt-5 text-[13px] text-fg-subtle">
                  Contract number and award details on request.
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Band>

      {/* ------------------------------------------------- Cooperatives */}
      <Band tone="tint">
        <BandHeading
          eyebrow="State, local & cooperative"
          title="Routes outside the federal vehicles"
          lead="Cooperative purchasing agreements that state, local and education buyers can award through."
        />
        <RevealGroup
          className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-navy-200 bg-navy-200 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.04}
        >
          {cooperativeVehicles.map((vehicle) => (
            <RevealItem key={vehicle.name}>
              <div className="group flex h-full items-start gap-4 bg-white p-6 transition-colors duration-300 hover:bg-navy-50">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-flame-600 transition-colors duration-300 group-hover:bg-flame-600 group-hover:text-white">
                  <Building2 className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span className="block font-display text-base font-semibold text-navy-900">
                    {vehicle.name}
                  </span>
                  <span className="mt-1 block text-[14px] leading-snug text-fg-muted">
                    {vehicle.detail}
                  </span>
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Band>

      {/* --------------------------------------------------- How to buy */}
      <Band tone="dark" id="how-to-buy">
        <BandHeading
          onDark
          eyebrow="How to buy"
          title="From requirement to award"
          lead="The route is the same whichever vehicle it travels on; only the paperwork at step three changes."
        />
        <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <span
            className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-white/15 lg:block"
            aria-hidden
          />
          {howToBuy.map((item, i) => (
            <li key={item.step} className="group relative">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-navy-950 font-display text-sm font-semibold text-flame-400 transition-colors duration-300 group-hover:border-flame-500 group-hover:bg-flame-600 group-hover:text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{item.step}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-white/75">{item.description}</p>
            </li>
          ))}
        </ol>
        <div className="mt-14">
          <V2Button href="/v2/contact" variant="outline-dark">
            Talk to our team
          </V2Button>
        </div>
      </Band>

      {/* ------------------------------------------------------------ NAICS */}
      <Band id="naics">
        <BandHeading
          eyebrow="NAICS codes"
          title="How to find us"
          lead="Buyers search by code. This is the NAICS code on Tanvi IT's SEWP VI Category C contract."
        />
        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {naicsCodes.map((code) => (
            <RevealItem key={code.code}>
              <div className="group h-full rounded-2xl border border-navy-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-flame-500 hover:shadow-[0_18px_40px_-24px_rgb(6_26_46/0.35)]">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-flame-600 transition-colors duration-300 group-hover:bg-flame-600 group-hover:text-white">
                  <Hash className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-6 font-display text-3xl font-semibold tracking-[-0.03em] text-navy-900">
                  {code.code}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">{code.title}</p>
              </div>
            </RevealItem>
          ))}
          <RevealItem>
            <Link
              href="/v2/contact"
              className="group flex h-full flex-col justify-center rounded-2xl border border-dashed border-navy-300 bg-navy-50 p-8 transition-colors duration-300 hover:border-flame-500 hover:bg-white"
            >
              <p className="font-display text-lg font-semibold text-navy-900">
                Looking for another code?
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">
                Tell us the code your requirement sits under and we will confirm whether we can be
                awarded against it.
              </p>
              <span className="mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-flame-700">
                Ask us
              </span>
            </Link>
          </RevealItem>
        </RevealGroup>
      </Band>
    </>
  );
}
