import type { Metadata } from "next";
import { Band, BandHeading, MoreLink, PageHero, V2Button } from "@/components/v2/V2Section";
import { contractVehicles } from "@/lib/site-content";
import { naicsCodes, sewpVi } from "@/lib/v2-content";

export const metadata: Metadata = {
  title: "Contract vehicles",
  description:
    "Award work to Tanvi IT through NASA SEWP VI Category C, GSA MAS, 8(a) STARS III and cooperative vehicles. Contract details and NAICS 541511.",
};

const anchors: Record<string, string> = {
  "GSA MAS": "gsa-mas",
  "8(a) STARS III": "stars-iii",
};

/* NEEDS-CONFIRMATION (internal): this list carries over from the original
   site and should be checked against the vehicles active today. */
export default function V2Vehicles() {
  return (
    <>
      <PageHero
        eyebrow="Contract vehicles"
        title="Buy through a vehicle you already hold"
        lead="Tanvi IT is available through government-wide acquisition contracts, schedules and cooperative agreements — so a requirement can move from scope to staffed team without a new procurement."
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <V2Button href="/v2/contract-vehicles/sewp-vi">NASA SEWP VI ordering</V2Button>
          <V2Button href="/v2/contact" variant="outline-dark">
            Request a quote
          </V2Button>
        </div>
      </PageHero>

      {/* ------------------------------------------------------- SEWP VI */}
      <Band>
        <div className="grid gap-10 rounded-2xl border border-navy-200 bg-navy-50 p-8 sm:p-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-[0_18px_40px_-24px_rgb(6_26_46/0.35)]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-navy-700">
              Featured vehicle
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-[-0.02em] text-navy-900">
              NASA SEWP VI — Category C
            </h2>
            <p className="mt-5 text-[17px] leading-[1.7] text-fg sm:text-lg">
              A multi-award Government-Wide Acquisition Contract for IT, communications and
              audio-visual solutions and services, available to all Federal agencies and their
              approved contractors.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <MoreLink href="/v2/contract-vehicles/sewp-vi">Ordering information</MoreLink>
              <a
                href={sewpVi.orderingGuide.href}
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] text-navy-700 underline-offset-4 hover:underline"
              >
                Download the ordering guide (PDF)
              </a>
            </div>
          </div>
          <dl className="space-y-5">
            {sewpVi.contract.slice(0, 5).map((row) => (
              <div key={row.term}>
                <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-navy-700">
                  {row.term}
                </dt>
                <dd className="mt-1 text-[17px] leading-relaxed text-fg">{row.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Band>

      {/* ------------------------------------------------------ All vehicles */}
      <Band tone="tint" id="all-vehicles">
        <BandHeading
          eyebrow="All vehicles"
          title="Where Tanvi IT can be awarded work"
          lead="Vehicles Tanvi IT holds or can be awarded work through, across federal, state, local and cooperative purchasing."
        />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-navy-200 bg-navy-200 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:shadow-[0_18px_40px_-24px_rgb(6_26_46/0.35)]">
          {contractVehicles.map((vehicle) => (
            <li
              key={vehicle.name}
              id={anchors[vehicle.name]}
              className="scroll-mt-28 bg-white p-6"
            >
              <h3 className="font-display text-lg font-medium text-navy-900">{vehicle.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-fg">{vehicle.detail}</p>
              {vehicle.name === "NASA SEWP VI" ? (
                <div className="mt-4">
                  <MoreLink href="/v2/contract-vehicles/sewp-vi">Details</MoreLink>
                </div>
              ) : null}
            </li>
          ))}
        </ul>
      </Band>

      {/* ------------------------------------------------------------ NAICS */}
      <Band id="naics">
        <BandHeading
          eyebrow="NAICS codes"
          title="How to find us"
          lead="Buyers search by code. This is the NAICS code on Tanvi IT's SEWP VI Category C contract."
        />
        <ul className="mt-10 max-w-3xl divide-y divide-slate-200 border-y border-navy-200">
          {naicsCodes.map((code) => (
            <li key={code.code} className="flex flex-wrap items-baseline gap-x-8 gap-y-1 py-5">
              <span className="font-display text-xl font-medium text-navy-700">{code.code}</span>
              <span className="text-[17px] text-fg">{code.title}</span>
            </li>
          ))}
        </ul>
      </Band>
    </>
  );
}
