import type { Metadata } from "next";
import Link from "next/link";
import { Download, ExternalLink, Mail, Phone } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { sewp, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "NASA SEWP VI",
  description:
    "Tanvi IT Solutions Inc. — NASA SEWP VI Category C contract holder (80TECH26D0642). Contract information, fair opportunity, ordering guide and program contacts.",
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-slate-200 py-3.5 first:border-t-0 sm:grid sm:grid-cols-[190px_1fr] sm:gap-4">
      <dt className="text-sm font-semibold text-ink-900">{label}</dt>
      <dd className="mt-1 text-sm text-slate-600 sm:mt-0">{children}</dd>
    </div>
  );
}

export default function SewpPage() {
  return (
    <>
      <PageHeader
        eyebrow="NASA SEWP VI · Contract Holder"
        title="NASA SEWP VI — Category C"
        description={`${siteConfig.legalName} is a NASA SEWP VI Contract Holder under Contract ${sewp.contractNumber}, providing ITC/AV mission-based services to all federal agencies and their approved contractors.`}
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {[
            `Contract ${sewp.contractNumber}`,
            sewp.contractType,
            `Surcharge ${sewp.surcharge}`,
          ].map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-300"
            >
              {chip}
            </span>
          ))}
        </div>
      </PageHeader>

      {/* Contract overview + at-a-glance details */}
      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_420px] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Contract overview"
              title="A multi-award Government-Wide Acquisition Contract"
            />
            <p className="mt-6 text-base leading-relaxed text-slate-600">{sewp.overview}</p>
          </div>

          <Card className="h-fit">
            <h2 className="font-display text-lg font-semibold text-ink-900">
              {siteConfig.legalName} contract information
            </h2>
            <dl className="mt-5">
              <Field label="Contract number">{sewp.contractNumber}</Field>
              <Field label="Category">{sewp.category}</Field>
              <Field label="Contract type">{sewp.contractType}</Field>
              <Field label="Period of performance">{sewp.pop}</Field>
              <Field label="SEWP surcharge">{sewp.surcharge}</Field>
              <Field label="UEI">{sewp.uei}</Field>
              <Field label="Contract holder page">
                <a
                  href={sewp.contractHolderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-gold-700 underline underline-offset-2 hover:text-gold-800"
                >
                  View on sewp.nasa.gov
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
              </Field>
            </dl>
          </Card>
        </div>
      </Section>

      {/* Program management contacts — required: how to obtain a quote */}
      <Section tone="dark">
        <SectionHeading
          tone="dark"
          eyebrow="How to obtain a quote"
          title="SEWP program management contacts"
          description="Contact our SEWP program management team directly for quotes, ordering support, post-delivery issues, or to troubleshoot a problematic order."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {sewp.contacts.map((c) => (
            <div
              key={c.email}
              className="rounded-card border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-400">
                {c.role}
              </p>
              <p className="mt-2 font-display text-xl font-bold text-white">{c.name}</p>
              <div className="mt-4 space-y-2.5">
                <a
                  href={`tel:${c.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-gold-300"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                  {c.phone}
                </a>
                <a
                  href={`mailto:${c.email}`}
                  className="flex items-center gap-2.5 text-sm text-slate-300 hover:text-gold-300"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                  {c.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Ordering guide */}
      <Section tone="muted">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <SectionHeading
              eyebrow="Ordering guide"
              title="Tanvi IT Solutions SEWP Ordering Guide"
              description="A downloadable, printable ordering guide covering the SEWP overview, fair opportunity, contact information, what's in scope for SEWP VI, and the ordering process."
            />
          </div>
          <div className="shrink-0">
            <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-400">
              <Download className="h-4 w-4" aria-hidden />
              Printable Category C ordering guide — coming soon
            </span>
          </div>
        </div>
      </Section>

      {/* Fair opportunity clause — required verbatim posting */}
      <Section>
        <SectionHeading eyebrow="Fair opportunity" title={sewp.fairOpportunity.heading} />
        <div className="mt-8 max-w-3xl space-y-4">
          {sewp.fairOpportunity.intro.map((p) => (
            <p key={p.slice(0, 40)} className="text-sm leading-relaxed text-slate-600">
              {p}
            </p>
          ))}
          <ol className="ml-5 list-decimal space-y-2 text-sm leading-relaxed text-slate-600">
            {sewp.fairOpportunity.conditions.map((c) => (
              <li key={c.slice(0, 30)}>{c}</li>
            ))}
          </ol>
          {sewp.fairOpportunity.trailing.map((p) => (
            <p key={p.slice(0, 40)} className="text-sm leading-relaxed text-slate-600">
              {p}
            </p>
          ))}
        </div>
      </Section>

      {/* NASA SEWP customer assistance */}
      <Section tone="muted">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="How to contact SEWP"
              title="NASA SEWP customer assistance"
            />
            <dl className="mt-8">
              <Field label="SEWP PMO hours">{sewp.sewpContact.pmoHours}</Field>
              <Field label="Customer help desk">{sewp.sewpContact.helpDesk}</Field>
              <Field label="Email">
                <a
                  href={`mailto:${sewp.sewpContact.email}`}
                  className="font-medium text-gold-700 underline underline-offset-2 hover:text-gold-800"
                >
                  {sewp.sewpContact.email}
                </a>
              </Field>
              <Field label="Website">
                <a
                  href={sewp.sewpContact.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gold-700 underline underline-offset-2 hover:text-gold-800"
                >
                  www.sewp.nasa.gov
                </a>
              </Field>
              <Field label="Order submission">
                <a
                  href={`mailto:${sewp.sewpContact.orders}`}
                  className="font-medium text-gold-700 underline underline-offset-2 hover:text-gold-800"
                >
                  {sewp.sewpContact.orders}
                </a>
              </Field>
            </dl>
          </div>

          <div>
            <SectionHeading eyebrow="Official links" title="SEWP and accessibility resources" />
            <ul className="mt-8 space-y-3">
              {sewp.links.map((link) => {
                const external = link.href.startsWith("http");
                return (
                  <li key={link.href}>
                    {external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-sm font-medium text-ink-900 hover:text-gold-700"
                      >
                        {link.label}
                        <ExternalLink
                          className="h-3.5 w-3.5 text-slate-400 group-hover:text-gold-700"
                          aria-hidden
                        />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm font-medium text-ink-900 hover:text-gold-700"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
            <p className="mt-8 max-w-md text-xs leading-relaxed text-slate-500">
              These SEWP pages are maintained in accordance with Section 508 of the
              Rehabilitation Act Amendments and applicable Government Access Standards for
              Electronic and Information Technology.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
