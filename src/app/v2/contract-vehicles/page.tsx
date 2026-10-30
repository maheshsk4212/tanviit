import type { Metadata } from "next";
import Image from "next/image";
import { Building2, FileText, Hash, Landmark } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Band, BandHeading, MoreLink, PageHero, V2Button } from "@/components/v2/V2Section";
import { contractVehicles } from "@/lib/site-content";
import { naicsCodes, sewpVi, v2Images } from "@/lib/v2-content";

export const metadata: Metadata = {
  title: "Contract vehicles",
  description:
    "Award work to Tanvi IT through NASA SEWP VI Category C, GSA MAS, 8(a) STARS III and cooperative vehicles. Contract details and NAICS 541511.",
};

/* Vehicles fall into three kinds, and the kind is what a buyer scans for. */
function vehicleKind(detail: string): { Icon: LucideIcon; label: string } {
  const text = detail.toLowerCase();
  if (text.includes("cooperative") || text.includes("state") || text.includes("council")) {
    return { Icon: Building2, label: "Cooperative" };
  }
  if (text.includes("schedule") || text.includes("staffing") || text.includes("professional")) {
    return { Icon: FileText, label: "Schedule" };
  }
  return { Icon: Landmark, label: "Federal" };
}

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
        <div className="grid items-stretch gap-0 overflow-hidden rounded-3xl border border-navy-200 bg-navy-50 lg:grid-cols-[1.25fr_1fr]">
          <div className="p-8 sm:p-10 lg:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-navy-700">
              Featured vehicle
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-navy-900">
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
          <div className="relative min-h-[18rem] overflow-hidden lg:min-h-full">
            <Image
              src={v2Images.launch.src}
              alt={v2Images.launch.alt}
              fill
              quality={90}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            {/* the exhaust trail is near-white; this keeps the facts over it legible */}
            <div className="absolute inset-0 bg-navy-950/85" aria-hidden />
            <dl className="relative space-y-5 p-8 sm:p-10 lg:p-12">
            {sewpVi.contract.slice(0, 5).map((row) => (
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
      </Band>

      {/* ------------------------------------------------------ All vehicles */}
      <Band motif tone="tint" id="all-vehicles">
        <BandHeading
          eyebrow="All vehicles"
          title="Where Tanvi IT can be awarded work"
          lead="Vehicles Tanvi IT holds or can be awarded work through, across federal, state, local and cooperative purchasing."
        />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-navy-200 bg-navy-200 sm:grid-cols-2 lg:grid-cols-3">
          {contractVehicles.map((vehicle) => (
            <li
              key={vehicle.name}
              id={anchors[vehicle.name]}
              className="group scroll-mt-28 bg-white p-6 transition-colors duration-300 hover:bg-navy-50"
            >
              {(() => {
                const kind = vehicleKind(vehicle.detail);
                return (
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-flame-600 transition-colors duration-300 group-hover:bg-flame-600 group-hover:text-white">
                      <kind.Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className="rounded-full border border-navy-200 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-navy-700">
                      {kind.label}
                    </span>
                  </div>
                );
              })()}
              <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                {vehicle.name}
              </h3>
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
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {naicsCodes.map((code) => (
            <li
              key={code.code}
              className="group rounded-2xl border border-navy-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-flame-500 hover:shadow-[0_18px_40px_-24px_rgb(6_26_46/0.35)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-flame-600 transition-colors duration-300 group-hover:bg-flame-600 group-hover:text-white">
                <Hash className="h-5 w-5" aria-hidden />
              </span>
              <p className="mt-6 font-display text-3xl font-semibold tracking-[-0.03em] text-navy-900">
                {code.code}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">{code.title}</p>
            </li>
          ))}
        </ul>
      </Band>
    </>
  );
}
