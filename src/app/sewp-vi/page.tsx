import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  CalendarClock,
  Download,
  ExternalLink,
  FileText,
  Hash,
  LifeBuoy,
  Mail,
  Percent,
  Phone,
  ShoppingCart,
  Tag,
} from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { sewp, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "NASA SEWP VI",
  description:
    "Tanvi IT Solutions Inc. — NASA SEWP VI Category C contract holder (80TECH26D0642). Contract information, fair opportunity, ordering guide and program contacts.",
};

const contractFacts = [
  { icon: Hash, label: "Contract number", value: sewp.contractNumber },
  { icon: Tag, label: "Category", value: sewp.category },
  { icon: BadgeCheck, label: "Contract type", value: sewp.contractType },
  { icon: CalendarClock, label: "Period of performance", value: sewp.pop },
  { icon: Percent, label: "SEWP surcharge", value: sewp.surcharge },
  { icon: FileText, label: "UEI", value: sewp.uei },
];

export default function SewpPage() {
  return (
    <>
      <PageHeader
        eyebrow="NASA SEWP VI · Contract Holder"
        title="NASA SEWP VI — Category C"
        accent="Category C"
        description={`${siteConfig.legalName} is a NASA SEWP VI Contract Holder under Contract ${sewp.contractNumber}, providing ITC/AV mission-based services to all federal agencies and their approved contractors.`}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={sewp.contractHolderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:-translate-y-0.5"
          >
            Verify on sewp.nasa.gov
            <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          </a>
          <a
            href="#quote"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-gold-300 hover:text-gold-300"
          >
            Request a quote
          </a>
        </div>
      </PageHeader>

      {/* Contract at a glance */}
      <Section>
        <SectionHeading
          eyebrow="Contract at a glance"
          title="Tanvi IT Solutions SEWP VI contract information"
        />
        <RevealGroup
          className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.05}
        >
          {contractFacts.map((f) => (
            <RevealItem key={f.label} className="h-full">
              <div className="flex h-full flex-col bg-surface p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-control bg-gold-50 text-gold-600">
                  <f.icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-fg-subtle">
                  {f.label}
                </p>
                <p className="mt-1 font-display text-lg font-bold leading-snug text-fg">
                  {f.value}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div>
            <h3 className="font-display text-xl font-bold text-fg">
              About the NASA SEWP program
            </h3>
            <p className="mt-4 text-base leading-relaxed text-fg-muted">{sewp.overview}</p>
          </div>
          <div className="h-fit rounded-card border border-line bg-surface-muted p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">
              Multi-award GWAC
            </p>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">
              SEWP VI is a multi-award Government-Wide Acquisition Contract. Orders are
              placed under the Fair Opportunity provisions of FAR 16.505(b) — see the clause
              posted in full below.
            </p>
            <a
              href={sewp.contractHolderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700 underline underline-offset-2 hover:text-gold-800"
            >
              Contract holder record
              <ExternalLink className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>
        </div>
      </Section>

      {/* Quote / support / troubleshooting contacts */}
      <Section tone="dark" id="quote">
        <SectionHeading
          tone="dark"
          eyebrow="Program support"
          title="How to obtain a quote or resolve an order"
          description="Contact our SEWP program management team directly for quotes, ordering support, warranty and post-delivery issues, or to troubleshoot a problematic order."
        />

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2" stagger={0.08}>
          {sewp.contacts.map((c) => (
            <RevealItem key={c.email} className="h-full">
              <div className="group flex h-full flex-col rounded-card border border-white/10 bg-white/5 p-7 backdrop-blur transition-colors duration-300 hover:border-gold-400/40 hover:bg-white/10">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                  {c.role}
                </p>
                <p className="mt-2 font-display text-2xl font-bold text-white">{c.name}</p>
                <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                  <a
                    href={`tel:${c.phone.replace(/[^0-9+]/g, "")}`}
                    className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-gold-300"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-control bg-white/5 text-gold-400">
                      <Phone className="h-4 w-4" aria-hidden />
                    </span>
                    {c.phone}
                  </a>
                  <a
                    href={`mailto:${c.email}`}
                    className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-gold-300"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-control bg-white/5 text-gold-400">
                      <Mail className="h-4 w-4" aria-hidden />
                    </span>
                    {c.email}
                  </a>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Ordering guide */}
        <div className="mt-6 flex flex-col gap-5 rounded-card border border-gold-500/30 bg-gold-500/10 p-7 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-control bg-gold-500/20 text-gold-300">
              <Download className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="font-display text-lg font-bold text-white">
                Tanvi IT Solutions SEWP Ordering Guide
              </p>
              <p className="mt-1 text-sm text-slate-300">
                Downloadable and printable — SEWP overview, fair opportunity, contact
                information, what&apos;s in scope for SEWP VI, and the ordering process.
              </p>
            </div>
          </div>
          <span className="shrink-0 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-slate-400">
            Category C guide — coming soon
          </span>
        </div>
      </Section>

      {/* Fair opportunity clause — required verbatim posting */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Fair opportunity"
          title={sewp.fairOpportunity.heading}
          description="Posted in full as required for multi-award Government-Wide Acquisition Contracts."
        />
        <div className="mt-10 max-w-3xl space-y-4 rounded-card border border-line bg-surface p-7 sm:p-9">
          {sewp.fairOpportunity.intro.map((p) => (
            <p key={p.slice(0, 40)} className="text-sm leading-relaxed text-fg-muted">
              {p}
            </p>
          ))}
          <ol className="ml-5 list-decimal space-y-2 text-sm leading-relaxed text-fg-muted marker:font-semibold marker:text-gold-600">
            {sewp.fairOpportunity.conditions.map((c) => (
              <li key={c.slice(0, 30)}>{c}</li>
            ))}
          </ol>
          {sewp.fairOpportunity.trailing.map((p) => (
            <p key={p.slice(0, 40)} className="text-sm leading-relaxed text-fg-muted">
              {p}
            </p>
          ))}
        </div>
      </Section>

      {/* NASA SEWP customer assistance + official links */}
      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="How to contact SEWP"
              title="NASA SEWP customer assistance"
            />
            <div className="mt-8 space-y-3">
              {[
                { icon: LifeBuoy, label: "SEWP PMO hours", value: sewp.sewpContact.pmoHours },
                { icon: Phone, label: "Customer help desk", value: sewp.sewpContact.helpDesk, href: `tel:${sewp.sewpContact.helpDesk.replace(/[^0-9]/g, "")}` },
                { icon: Mail, label: "Email", value: sewp.sewpContact.email, href: `mailto:${sewp.sewpContact.email}` },
                { icon: ShoppingCart, label: "Order submission", value: sewp.sewpContact.orders, href: `mailto:${sewp.sewpContact.orders}` },
                { icon: ExternalLink, label: "Website", value: "www.sewp.nasa.gov", href: sewp.sewpContact.website },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center gap-4 rounded-card border border-line bg-surface p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-control bg-gold-50 text-gold-600">
                    <row.icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-fg-subtle">
                      {row.label}
                    </p>
                    {row.href ? (
                      <a
                        href={row.href}
                        className="text-sm font-semibold text-fg hover:text-gold-700"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-fg">{row.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Official links" title="SEWP and accessibility resources" />
            <ul className="mt-8 divide-y divide-line rounded-card border border-line bg-surface">
              {sewp.links.map((link) => {
                const external = link.href.startsWith("http");
                const inner = (
                  <>
                    <span className="text-sm font-medium text-fg group-hover:text-gold-700">
                      {link.label}
                    </span>
                    <ExternalLink
                      className={`h-4 w-4 shrink-0 text-slate-300 group-hover:text-gold-600 ${
                        external ? "" : "rotate-45"
                      }`}
                      aria-hidden
                    />
                  </>
                );
                return (
                  <li key={link.href}>
                    {external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-4 p-4 transition-colors hover:bg-surface-muted"
                      >
                        {inner}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between gap-4 p-4 transition-colors hover:bg-surface-muted"
                      >
                        {inner}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
            <p className="mt-6 rounded-card border border-line bg-surface-muted p-5 text-xs leading-relaxed text-fg-subtle">
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
