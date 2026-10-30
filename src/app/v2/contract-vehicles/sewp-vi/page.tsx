import type { Metadata } from "next";
import { Band, BandHeading, PageHero, V2Button } from "@/components/v2/V2Section";
import { sewpVi } from "@/lib/v2-content";

export const metadata: Metadata = {
  title: "NASA SEWP VI — Category C",
  description:
    "Tanvi IT Solutions Inc. is a NASA SEWP VI Category C contract holder (80TECH26D0642). Contract details, fair opportunity, scope, ordering process and contacts.",
};

export default function V2Sewp() {
  return (
    <>
      <PageHero
        eyebrow="Contract vehicles"
        title="NASA SEWP VI — Category C"
        lead="A multi-award Government-Wide Acquisition Contract. Tanvi IT holds contract 80TECH26D0642 for IT Mission-Based Services."
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <V2Button href="#ordering">How to order</V2Button>
          <V2Button href="#contacts" variant="outline-dark">
            Program contacts
          </V2Button>
        </div>
      </PageHero>

      {/* --------------------------------------------------- Contract facts */}
      <Band id="contract">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div>
            <BandHeading eyebrow="Contract overview" title="A multi-award GWAC" />
            <p className="mt-5 text-[17px] leading-[1.75] text-fg sm:text-lg">{sewpVi.overview}</p>
          </div>
          <dl className="divide-y divide-slate-200 rounded-2xl border border-navy-200 bg-slate-100 transition-all duration-300 hover:-translate-y-1 hover:border-flame-500 hover:shadow-[0_18px_40px_-24px_rgb(6_26_46/0.35)]">
            {sewpVi.contract.map((row) => (
              <div key={row.term} className="px-6 py-4">
                <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-navy-700">
                  {row.term}
                </dt>
                <dd className="mt-1 text-[17px] leading-relaxed text-fg">{row.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Band>

      {/* -------------------------------------------------- Fair opportunity */}
      <Band tone="tint" id="fair-opportunity">
        <BandHeading
          eyebrow="A.1.13"
          title="Fair opportunity and requests for quotes"
          lead="Contract language, reproduced in full."
        />
        {/* Verbatim from the NASA SEWP VI terms — do not edit or summarize. */}
        <div className="mt-10 max-w-4xl space-y-5 rounded-2xl border border-navy-200 bg-white p-8 text-[16px] leading-[1.75] text-fg sm:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-flame-500 hover:shadow-[0_18px_40px_-24px_rgb(6_26_46/0.35)]">
          {sewpVi.fairOpportunity.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </Band>

      {/* --------------------------------------------------------- In scope */}
      <Band id="scope">
        <BandHeading
          eyebrow="What's in scope"
          title="Category C — IT Mission-Based Services"
          lead="Summarized from Tanvi IT's SEWP VI Category C Ordering Guide. The executed contract, the NASA SEWP Contract Holder User Manual, applicable FAR provisions and current NASA SEWP procedures remain authoritative."
        />
        <ul className="mt-10 max-w-4xl space-y-4">
          {sewpVi.scope.map((item) => (
            <li
              key={item.slice(0, 40)}
              className="border-l-4 border-flame-500 pl-6 text-[17px] leading-[1.7] text-fg"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <a
            href={sewpVi.orderingGuide.href}
            className="inline-flex items-center gap-2 rounded-md bg-navy-700 px-6 py-3.5 text-base font-semibold text-white hover:bg-navy-800"
          >
            Download the ordering guide (PDF)
          </a>
          <p className="mt-3 text-sm text-fg-subtle">{sewpVi.orderingGuide.version}</p>
        </div>
      </Band>

      {/* --------------------------------------------------- Ordering process */}
      <Band tone="dark" id="ordering">
        <BandHeading onDark eyebrow="Ordering process" title="Five steps to an award" />
        <ol className="mt-12 space-y-6">
          {sewpVi.ordering.map((item, i) => (
            <li
              key={item.step}
              className="grid gap-3 border-t border-white/20 pt-6 sm:grid-cols-[auto_1fr] sm:gap-8"
            >
              <span className="font-display text-2xl font-semibold text-flame-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">{item.step}</h3>
                <p className="mt-2 max-w-3xl text-[17px] leading-[1.7] text-navy-100">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Band>

      {/* --------------------------------------------------------- Contacts */}
      <Band id="contacts">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <BandHeading eyebrow="Tanvi IT" title="Program management contacts" />
            <ul className="mt-8 divide-y divide-slate-200 border-y border-navy-200">
              {sewpVi.managers.map((manager) => (
                <li key={manager.role} className="py-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-navy-700">
                    {manager.role}
                  </p>
                  <p className="mt-1.5 font-display text-lg font-semibold text-navy-900">
                    {manager.name}
                  </p>
                  <p className="mt-1 text-[15px] text-fg">
                    <a href={`tel:${manager.phone.replace(/[^\d]/g, "")}`} className="hover:underline">
                      {manager.phone}
                    </a>{" "}
                    ·{" "}
                    <a href={`mailto:${manager.email}`} className="hover:underline">
                      {manager.email}
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <BandHeading eyebrow="NASA SEWP" title="Customer assistance" />
            <dl className="mt-8 divide-y divide-slate-200 border-y border-navy-200">
              {sewpVi.sewpContacts.map((contact) => (
                <div key={contact.label} className="flex flex-wrap justify-between gap-x-8 gap-y-1 py-5">
                  <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-navy-700">
                    {contact.label}
                  </dt>
                  <dd className="text-[17px] text-fg">{contact.detail}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10">
              <V2Button href="/v2/contact">Contact Tanvi IT</V2Button>
            </div>
          </div>
        </div>
      </Band>
    </>
  );
}
