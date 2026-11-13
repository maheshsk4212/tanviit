import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FileCheck2, FileText, Hash, MapPin, ShieldCheck, Sparkles } from "lucide-react";
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
  gsaMas,
  howToBuy,
  naicsCodes,
  sewpVi,
  v2Images,
  vehicleProfiles,
} from "@/lib/v2-content";

export const metadata: Metadata = {
  title: "Contract vehicles",
  description:
    "Award work to Tanvi IT through NASA SEWP VI Category C (contract 80TECH26D0642) and GSA MAS (contract 47QTCA27D0018). Contract details, SINs and NAICS codes.",
};

/* The snapshot rows, in the order a contracting officer reads them. */
const snapshotIcons = [Hash, FileText, ShieldCheck, FileCheck2, Sparkles, MapPin];

export default function V2Vehicles() {
  const [featured] = vehicleProfiles;

  return (
    <>
      <PageHero
        eyebrow="Contract vehicles"
        title="Access technology solutions"
        accent="through our contract vehicles"
        lead="Tanvi IT holds two contract vehicles: NASA SEWP VI Category C and the GSA Multiple Award Schedule (MAS). Agencies may be able to procure services through existing contract vehicles, subject to applicable ordering procedures."
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <V2Button href="/v2/contract-vehicles/sewp-vi">NASA SEWP VI ordering</V2Button>
          <V2Button href="#gsa-mas" variant="outline-dark">
            GSA MAS details
          </V2Button>
          <V2Button href="/v2/contact" variant="outline-dark">
            Request a quote
          </V2Button>
        </div>
      </PageHero>

      {/* ------------------------------------------------- Featured: SEWP */}
      <Band tone="tint" id="sewp-vi">
        <Reveal className="overflow-hidden rounded-3xl border border-navy-200 bg-white">
          <div className="grid items-stretch lg:grid-cols-[1.25fr_1fr]">
            <div className="p-8 sm:p-10 lg:p-14">
              <span className="inline-flex items-center rounded-full bg-flame-600 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                Featured vehicle
              </span>
              <h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.03em] text-navy-900 sm:text-4xl">
                {featured.name}
                {/* The category is half the name to a buyer: it decides whether
                    this vehicle can carry their requirement at all. */}
                <span className="block text-flame-600">Category C</span>
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

      {/* ------------------------------------------------ Buyer snapshot */}
      <Band clip={false} tone="white">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* The heading holds while the details scroll past it. */}
          <div>
            <Reveal className="lg:sticky lg:top-28">
              <BandHeading
                eyebrow="At a glance"
                title="The details you need before you buy"
                lead="Everything a contracting officer usually asks for first, in one place."
              />
              <div className="mt-8">
                <MoreLink href="/v2/contact">Ask for anything else</MoreLink>
              </div>
            </Reveal>
          </div>

          <RevealGroup className="grid gap-5 sm:grid-cols-2" stagger={0.05}>
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
        </div>
      </Band>

      {/* ------------------------------------------------------ GSA MAS */}
      <Band motif id="gsa-mas">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
          <Reveal>
            <BandHeading eyebrow={gsaMas.kind} title={gsaMas.name} lead={gsaMas.summary} />
            <div className="mt-8">
              <MoreLink href="/v2/contact">Ask about ordering on MAS</MoreLink>
            </div>
          </Reveal>

          <Reveal delay={0.1} direction="right">
            <dl className="grid gap-px overflow-hidden rounded-2xl border border-navy-200 bg-navy-200 sm:grid-cols-2">
              {gsaMas.facts.map((row) => (
                <div key={row.term} className="bg-white p-7">
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-navy-700">
                    {row.term}
                  </dt>
                  <dd className="mt-2 font-display text-lg font-semibold leading-snug text-navy-900">
                    {row.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Band>

      {/* --------------------------------------------------- How to buy */}
      <Band tone="dark" id="how-to-buy">
        {/* Statement first, steps second — the reference leads this section
            with a claim and a photograph, not with a process diagram. */}
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-flame-400">
              Work with us
            </span>
            <h2 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.5rem]">
              Procurement made simple.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              Agencies may be able to procure services through existing contract vehicles, subject
              to applicable ordering procedures. Tell us the requirement and we will tell you
              whether NASA SEWP VI or GSA MAS fits — and say so plainly if neither does.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <V2Button href="/v2/contact">Talk to our team</V2Button>
              <V2Button href="/v2/contract-vehicles/sewp-vi" variant="outline-dark">
                SEWP VI ordering
              </V2Button>
            </div>
          </Reveal>

          <Reveal delay={0.12} direction="right" className="relative aspect-[5/4] overflow-hidden rounded-3xl">
            <Image
              src={v2Images.team.src}
              alt={v2Images.team.alt}
              fill
              quality={90}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-tr from-navy-950/55 to-transparent"
              aria-hidden
            />
          </Reveal>
        </div>

        <ol className="relative mt-20 grid gap-10 border-t border-white/15 pt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
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
      </Band>

      {/* ------------------------------------------------------------ NAICS */}
      <Band id="naics">
        <BandHeading
          eyebrow="NAICS codes"
          title="How to find us"
          lead="Buyers search by code. These are the NAICS codes on Tanvi IT's two contract vehicles."
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
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-navy-700">
                  {code.vehicle}
                </p>
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
