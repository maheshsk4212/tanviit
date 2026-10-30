import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Download,
  ExternalLink,
  LifeBuoy,
  Mail,
  Phone,
  ScrollText,
  ShoppingCart,
} from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { PageHeader } from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { SpotlightGrid } from "@/components/motion/SpotlightGrid";
import { sewp, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "NASA SEWP VI",
  description:
    "Tanvi IT Solutions Inc. — NASA SEWP VI Category C contract holder (80TECH26D0642). Contract information, fair opportunity, ordering guide and program contacts.",
};

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1541185934-01b600ea069c?w=2400&q=80&auto=format&fit=crop";

/** Shown on the credential card, under the contract number. */
const contractFacts = [
  { label: "Category", value: sewp.category },
  { label: "Contract type", value: sewp.contractType },
  { label: "Period of performance", value: sewp.pop },
  { label: "SEWP surcharge", value: sewp.surcharge },
  { label: "UEI", value: sewp.uei },
];

/* Figures quoted from the program overview (sewp.overview) shown beside them. */
const programStats = [
  { value: "1993", label: "SEWP I — the first GWAC in federal acquisition" },
  { value: "50,000+", label: "Orders a year from federal agencies" },
  { value: sewp.surcharge, label: "Usage fee that makes the program self-funding" },
];

const assistRows = [
  { icon: LifeBuoy, label: "SEWP PMO hours", value: sewp.sewpContact.pmoHours },
  {
    icon: Phone,
    label: "Customer help desk",
    value: sewp.sewpContact.helpDesk,
    href: `tel:${sewp.sewpContact.helpDesk.replace(/[^0-9]/g, "")}`,
  },
  { icon: Mail, label: "Email", value: sewp.sewpContact.email, href: `mailto:${sewp.sewpContact.email}` },
  {
    icon: ShoppingCart,
    label: "Order submission",
    value: sewp.sewpContact.orders,
    href: `mailto:${sewp.sewpContact.orders}`,
  },
  { icon: ExternalLink, label: "Website", value: "www.sewp.nasa.gov", href: sewp.sewpContact.website },
];

const fairOpportunityLink = sewp.links.find((l) => /fair opportunity/i.test(l.label));

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

export default function SewpPage() {
  return (
    <>
      <PageHeader
        eyebrow="NASA SEWP VI · Contract Holder"
        title="NASA SEWP VI — Category C"
        accent="Category C"
        description={`${siteConfig.legalName} is a NASA SEWP VI Contract Holder under Contract ${sewp.contractNumber}, providing ITC/AV mission-based services to all federal agencies and their approved contractors.`}
        image={HERO_IMAGE}
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href="#quote" size="lg">
            Request a quote
          </Button>
          <Button
            href={sewp.contractHolderUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="ghost-dark"
            arrow={false}
          >
            Verify on sewp.nasa.gov
            <ExternalLink className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </PageHeader>

      {/* Contract at a glance — program overview beside a credential card. */}
      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Contract at a glance"
              title="Tanvi IT Solutions SEWP VI contract information"
            />
            <h3 className="mt-10 font-display text-xl font-medium tracking-[-0.01em] text-fg">
              About the NASA SEWP program
            </h3>
            <p className="mt-3 text-base leading-relaxed text-fg-muted">{sewp.overview}</p>

            <RevealGroup
              className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3"
              stagger={0.06}
            >
              {programStats.map((stat) => (
                <RevealItem key={stat.label} className="bg-surface p-6">
                  <p className="font-display text-3xl font-medium tracking-[-0.02em] text-fg">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-fg-muted">{stat.label}</p>
                </RevealItem>
              ))}
            </RevealGroup>

            <div className="mt-6 flex gap-4 rounded-2xl border border-gold-500/30 bg-cream-50 p-5">
              <ScrollText className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden />
              <p className="text-sm leading-relaxed text-fg-muted">
                <span className="font-semibold text-fg">Multi-award GWAC.</span> SEWP VI is a
                multi-award Government-Wide Acquisition Contract. Orders are placed under the Fair
                Opportunity provisions of FAR 16.505(b) —{" "}
                <a
                  href="#fair-opportunity"
                  className="font-medium text-gold-700 underline underline-offset-2 hover:text-gold-800"
                >
                  see the clause posted in full below
                </a>
                .
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal className="lg:sticky lg:top-28">
              <SpotlightGrid>
                <article className="card-premium spotlight group/t relative isolate overflow-hidden rounded-3xl p-7 text-white sm:p-9">
                  <div className="noise-overlay pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden />

                  <div className="relative z-10 flex items-center justify-between gap-4">
                    <Image
                      src="/tanvi-it-logo@3x.png"
                      alt=""
                      width={501}
                      height={129}
                      className="h-7 w-auto brightness-0 invert"
                    />
                    <Chip tone="accent">Contract holder</Chip>
                  </div>

                  <p className="relative z-10 mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                    NASA SEWP VI · Contract number
                  </p>
                  {/* 13 characters that must not wrap — sized down on phones so
                      the number fits the card instead of being clipped. */}
                  <p className="text-metallic relative z-10 mt-2 whitespace-nowrap font-display text-3xl font-medium tracking-[-0.02em] sm:text-5xl">
                    {sewp.contractNumber}
                  </p>

                  <dl className="relative z-10 mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-7">
                    {contractFacts.map((fact, i) => (
                      <div key={fact.label} className={i === 0 ? "col-span-2" : ""}>
                        <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
                          {fact.label}
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-white/90">{fact.value}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="relative z-10 mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
                    <p className="text-xs text-white/50">Multi-award GWAC · FAR 16.505(b)</p>
                    <a
                      href={sewp.contractHolderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-300 transition-colors hover:text-gold-200"
                    >
                      Contract holder record
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </div>
                </article>
              </SpotlightGrid>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Quote / support / troubleshooting contacts */}
      <Section tone="dark" id="quote">
        <SectionHeading
          tone="dark"
          align="split"
          eyebrow="Program support"
          title="How to obtain a quote or resolve an order"
          description="Contact our SEWP program management team directly for quotes, ordering support, warranty and post-delivery issues, or to troubleshoot a problematic order."
        />

        <SpotlightGrid className="mt-12">
          <RevealGroup className="grid grid-cols-1 gap-5 md:grid-cols-2" stagger={0.08}>
            {sewp.contacts.map((c) => (
              <RevealItem key={c.email} className="h-full">
                <article className="card-premium spotlight group/t relative isolate flex h-full flex-col overflow-hidden rounded-2xl p-7 sm:p-8">
                  <div className="noise-overlay pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden />

                  <div className="relative z-10 flex items-center gap-5">
                    <span
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(145deg,var(--color-gold-300),var(--color-gold-600))] font-display text-xl font-semibold text-deep-950 shadow-[0_12px_30px_-10px_rgb(213_155_41/0.7)]"
                      aria-hidden
                    >
                      {initials(c.name)}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-400">
                        {c.role}
                      </p>
                      <h3 className="text-metallic mt-1 font-display text-2xl font-medium tracking-[-0.02em]">
                        {c.name}
                      </h3>
                    </div>
                  </div>

                  <div className="relative z-10 mt-8 grid gap-3 sm:grid-cols-2">
                    <a
                      href={`tel:${c.phone.replace(/[^0-9+]/g, "")}`}
                      className="flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3.5 text-sm text-white/85 transition-colors hover:border-gold-400/50 hover:text-white"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold-500/15 text-gold-300">
                        <Phone className="h-4 w-4" aria-hidden />
                      </span>
                      {c.phone}
                    </a>
                    <a
                      href={`mailto:${c.email}`}
                      className="flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3.5 text-sm text-white/85 transition-colors hover:border-gold-400/50 hover:text-white"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold-500/15 text-gold-300">
                        <Mail className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="truncate">{c.email}</span>
                    </a>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </SpotlightGrid>

        {/* Ordering guide */}
        <Reveal className="mt-5">
          <div className="card-premium relative isolate flex flex-col gap-6 overflow-hidden rounded-2xl p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="noise-overlay pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden />
            <div className="flex items-start gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold-500 text-deep-950 shadow-[0_12px_30px_-10px_rgb(213_155_41/0.75)]">
                <Download className="h-6 w-6" strokeWidth={2} aria-hidden />
              </span>
              <div>
                <p className="font-display text-xl font-medium text-white">
                  Tanvi IT Solutions SEWP Ordering Guide
                </p>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-white/65">
                  Downloadable and printable — SEWP overview, fair opportunity, contact
                  information, what&apos;s in scope for SEWP VI, and the ordering process.
                </p>
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-gold-400/40 bg-gold-500/10 px-4 py-2 text-sm font-medium text-gold-200 sm:self-auto">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden />
              Category C guide — coming soon
            </span>
          </div>
        </Reveal>
      </Section>

      {/* Fair opportunity clause — required verbatim posting */}
      <Section tone="muted" id="fair-opportunity">
        <SectionHeading
          eyebrow="Fair opportunity"
          title={sewp.fairOpportunity.heading}
          description="Posted in full as required for multi-award Government-Wide Acquisition Contracts."
        />
        {/*
          The clause text is a required verbatim posting — never edit, reword
          or summarise it. Only the presentation around it changes: a context
          rail on the left and document-grade typography on the right.
        */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[320px_1fr] lg:gap-12">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="card-premium relative isolate overflow-hidden rounded-2xl p-7 text-white">
              <div className="noise-overlay pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden />
              <Chip tone="accent">
                <ScrollText className="h-3.5 w-3.5" aria-hidden />
                Required posting
              </Chip>
              <p className="mt-5 text-sm leading-relaxed text-white/70">
                Multi-award Government-Wide Acquisition Contract holders must post this clause
                publicly and in full. It is reproduced here exactly as issued.
              </p>

              <dl className="mt-6 space-y-4 border-t border-white/10 pt-6">
                {[
                  { term: "Authority", detail: "FAR Part 16.505(b)" },
                  { term: "Contract", detail: sewp.contractNumber },
                  { term: "Source", detail: "NASA SEWP VI SOW" },
                ].map((row) => (
                  <div key={row.term}>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
                      {row.term}
                    </dt>
                    <dd className="mt-1 font-display text-base font-medium text-white">{row.detail}</dd>
                  </div>
                ))}
              </dl>

              {fairOpportunityLink ? (
                <a
                  href={fairOpportunityLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-gold-300 transition-colors hover:text-gold-200"
                >
                  Verify on sewp.nasa.gov
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : null}
            </div>
          </aside>

          <article className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_30px_60px_-40px_rgb(0_0_0/0.35)]">
            <div className="h-1 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-700" aria-hidden />
            <header className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-7 py-5 sm:px-10">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-deep-900 text-gold-300">
                  <ScrollText className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-display text-base font-medium text-fg">Clause A.1.13</p>
                  <p className="text-xs text-fg-subtle">NASA SEWP VI · {sewp.contractNumber}</p>
                </div>
              </div>
              <Chip>Verbatim · unedited</Chip>
            </header>

            {/* Generous measure and leading — legal prose is unscannable at
                tight body settings. */}
            <div className="space-y-5 px-7 py-9 sm:px-10 sm:py-11">
              {sewp.fairOpportunity.intro.map((p) => (
                <p key={p.slice(0, 40)} className="text-[0.95rem] leading-7 text-fg-muted">
                  {p}
                </p>
              ))}

              {/* Sub-conditions inset so they read as part of the sentence
                  above rather than as loose body copy. */}
              <ol className="ml-1 list-decimal space-y-3 rounded-xl border-l-2 border-gold-400 bg-cream-50 py-5 pl-9 pr-6 text-[0.95rem] leading-7 text-fg-muted marker:font-semibold marker:text-gold-600">
                {sewp.fairOpportunity.conditions.map((c) => (
                  <li key={c.slice(0, 30)}>{c}</li>
                ))}
              </ol>

              {sewp.fairOpportunity.trailing.map((p) => (
                <p key={p.slice(0, 40)} className="text-[0.95rem] leading-7 text-fg-muted">
                  {p}
                </p>
              ))}
            </div>
          </article>
        </div>
      </Section>

      {/* NASA SEWP customer assistance + official links */}
      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="How to contact SEWP" title="NASA SEWP customer assistance" />
            <ul className="mt-8 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
              {assistRows.map((row) => (
                <li
                  key={row.label}
                  className="flex items-center gap-4 p-5 transition-colors hover:bg-cream-50"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-500 text-deep-950 shadow-[0_10px_24px_-12px_rgb(213_155_41/0.8)]">
                    <row.icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-fg-subtle">
                      {row.label}
                    </p>
                    {row.href ? (
                      <a
                        href={row.href}
                        className="break-words font-medium text-fg transition-colors hover:text-gold-700"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <p className="font-medium text-fg">{row.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading eyebrow="Official links" title="SEWP and accessibility resources" />
            <ul className="mt-8 space-y-3">
              {sewp.links.map((link) => {
                const external = link.href.startsWith("http");
                const className =
                  "group flex items-center justify-between gap-4 rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-gold-400/60 hover:bg-cream-50";
                const inner = (
                  <>
                    <span className="text-sm font-medium text-fg">
                      {link.label}
                      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
                    </span>
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-deep-900 text-gold-300 transition-transform duration-300 group-hover:rotate-45"
                      aria-hidden
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </>
                );
                return (
                  <li key={link.href}>
                    {external ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
                        {inner}
                      </a>
                    ) : (
                      <Link href={link.href} className={className}>
                        {inner}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
            <p className="mt-6 rounded-2xl border border-line bg-cream-50 p-5 text-xs leading-relaxed text-fg-subtle">
              These SEWP pages are maintained in accordance with Section 508 of the Rehabilitation
              Act Amendments and applicable Government Access Standards for Electronic and
              Information Technology.
            </p>
          </div>
        </div>
      </Section>

      <CTASection
        overline="Tanvi IT + your mission = delivered"
        title="Ready to buy through SEWP VI?"
        description="Contact our SEWP program management team for quotes, ordering support, or help with an existing order."
        primaryLabel="Request a quote"
        primaryHref="#quote"
        secondaryLabel="Talk to our team"
        secondaryHref="/contact"
      />
    </>
  );
}
