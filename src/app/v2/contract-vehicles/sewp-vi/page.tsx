import type { Metadata } from "next";
import Image from "next/image";
import {
  CalendarRange,
  Clock,
  Compass,
  FileCheck2,
  FileSignature,
  Hash,
  Headset,
  Layers,
  Mail,
  Percent,
  Phone,
  Send,
  ShieldCheck,
  Globe,
  type LucideIcon,
} from "lucide-react";
import {
  Band,
  BandHeading,
  PageHero,
  Reveal,
  RevealGroup,
  RevealItem,
  V2Button,
} from "@/components/v2/V2Section";
import { V2CtaBanner } from "@/components/v2/V2CtaBanner";
import { sewpVi, v2Images } from "@/lib/v2-content";

export const metadata: Metadata = {
  title: "NASA SEWP VI — Category C",
  description:
    "Tanvi IT Solutions Inc. is a NASA SEWP VI Category C contract holder (80TECH26D0642). Contract details, fair opportunity, scope, ordering process and contacts.",
};

/* Contract number, category, category type, NAICS, period, surcharge, UEI —
   in the order the content lists them. */
const factIcons: LucideIcon[] = [
  Hash,
  Layers,
  FileSignature,
  FileCheck2,
  CalendarRange,
  Percent,
  ShieldCheck,
];

/* Define, confirm scope, submit, contact us, evaluate and award. */
const stepIcons: LucideIcon[] = [FileSignature, ShieldCheck, Send, Headset, FileCheck2];

/* PMO hours, help desk, email, order submission, website. */
const sewpContactIcons: LucideIcon[] = [Clock, Phone, Mail, Send, Globe];

export default function V2Sewp() {
  return (
    <>
      <PageHero
        eyebrow="Contract vehicles"
        title="NASA SEWP VI"
        accent="Category C"
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
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <BandHeading eyebrow="Contract overview" title="A multi-award GWAC" />
            <p className="mt-6 text-[17px] leading-[1.75] text-fg-muted sm:text-lg">
              {sewpVi.overview}
            </p>
          </Reveal>

          {/* The identifiers a contracting officer copies into an order, as
              cards rather than a definition list. */}
          <RevealGroup className="grid gap-4 sm:grid-cols-2" stagger={0.05}>
            {sewpVi.contract.map((row, i) => {
              const Icon = factIcons[i % factIcons.length];
              return (
                <RevealItem key={row.term} className="h-full">
                  <div className="group h-full rounded-2xl border border-navy-200 bg-white [background-image:linear-gradient(180deg,rgb(255_255_255)_0%,rgb(242_245_254)_100%)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-flame-500 hover:shadow-[0_18px_40px_-24px_rgb(6_26_46/0.4)]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-flame-600 ring-1 ring-navy-200 transition-colors duration-300 group-hover:bg-flame-600 group-hover:text-white group-hover:ring-flame-600">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-flame-700">
                      {row.term}
                    </p>
                    <p className="mt-1.5 font-display text-lg font-semibold leading-snug text-navy-900">
                      {row.detail}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </Band>

      {/* --------------------------------------------------------- In scope */}
      <Band tone="tint" motif id="scope">
        <BandHeading
          eyebrow="What's in scope"
          title="Category C — IT Mission-Based Services"
          lead="Summarized from Tanvi IT's SEWP VI Category C Ordering Guide. The executed contract, the NASA SEWP Contract Holder User Manual, applicable FAR provisions and current NASA SEWP procedures remain authoritative."
          action={
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <V2Button href={sewpVi.orderingGuide.href}>Download the ordering guide</V2Button>
              <span className="text-sm text-fg-subtle">{sewpVi.orderingGuide.version}</span>
            </div>
          }
        />
        <RevealGroup className="mt-14 grid gap-4 lg:grid-cols-2" stagger={0.04}>
          {sewpVi.scope.map((item) => (
            <RevealItem key={item.slice(0, 40)} className="h-full">
              <div className="group flex h-full gap-4 rounded-2xl border border-navy-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-flame-500 hover:shadow-[0_18px_40px_-24px_rgb(6_26_46/0.35)]">
                <span
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-50 text-flame-600 ring-1 ring-navy-200 transition-colors duration-300 group-hover:bg-flame-600 group-hover:text-white group-hover:ring-flame-600"
                  aria-hidden
                >
                  <Compass className="h-4 w-4" />
                </span>
                <p className="text-[15px] leading-relaxed text-fg">{item}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Band>

      {/* -------------------------------------------------- Fair opportunity */}
      <Band id="fair-opportunity">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* The clause runs long, so the heading holds beside it. */}
          <div>
            <Reveal className="lg:sticky lg:top-28">
              <BandHeading
                eyebrow="A.1.13"
                title="Fair opportunity and requests for quotes"
                lead="Reproduced in full from the NASA SEWP VI terms, unedited."
              />
              <p className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-navy-200 bg-navy-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-navy-700">
                <FileSignature className="h-4 w-4 text-flame-600" aria-hidden />
                Contract language
              </p>
            </Reveal>
          </div>

          {/* Verbatim from the NASA SEWP VI terms — do not edit or summarize. */}
          <Reveal delay={0.1}>
            <div className="space-y-5 rounded-3xl border border-navy-200 bg-navy-50 [background-image:linear-gradient(180deg,rgb(248_250_255)_0%,rgb(242_245_254)_100%)] p-8 text-[16px] leading-[1.75] text-fg sm:p-10">
              {sewpVi.fairOpportunity.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </Band>

      {/* --------------------------------------------------- Ordering process */}
      <Band tone="dark" id="ordering">
        <BandHeading
          onDark
          eyebrow="Ordering process"
          title="Five steps to an award"
          lead="From defining the requirement to the processed order, with what Tanvi IT needs from you at each point."
        />
        <ol className="relative mt-14 grid gap-5 lg:grid-cols-5 lg:gap-4">
          {/* The rail the markers sit on, joining the five steps. */}
          <span
            className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-white/15 lg:block"
            aria-hidden
          />
          {sewpVi.ordering.map((item, i) => {
            const Icon = stepIcons[i % stepIcons.length];
            return (
              <li key={item.step} className="group relative">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-navy-950 text-flame-400 transition-colors duration-300 group-hover:border-flame-500 group-hover:bg-flame-600 group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-5 font-display text-sm font-semibold tracking-[0.12em] text-flame-400">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-white">
                  {item.step}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-white/85">
                  {item.description}
                </p>
              </li>
            );
          })}
        </ol>
      </Band>

      {/* --------------------------------------------------------- Contacts */}
      <Band tone="tint" id="contacts">
        <BandHeading
          eyebrow="Contacts"
          title="Who to call about a SEWP requirement"
          lead="Tanvi IT's program management for scope and quotes; the NASA SEWP PMO for anything about the vehicle itself."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Tanvi IT's own people, on the photographic panel the rest of the
              site uses for a block that should carry weight. */}
          <Reveal>
            <div className="relative isolate h-full overflow-hidden rounded-3xl bg-navy-950">
              <Image
                src={v2Images.launch.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                quality={85}
                className="object-cover"
              />
              <div
                className="absolute inset-0 [background-image:linear-gradient(118deg,rgb(5_12_40/0.97)_0%,rgb(5_12_40/0.95)_60%,rgb(5_12_40/0.92)_100%)]"
                aria-hidden
              />
              <div className="relative p-8 sm:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-flame-400">
                  Tanvi IT
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em] text-white">
                  Program management
                </h3>
                <ul className="mt-8 space-y-4">
                  {sewpVi.managers.map((manager) => (
                    <li
                      key={manager.role}
                      className="rounded-2xl border border-white/12 bg-white/[0.06] p-6 transition-colors duration-300 hover:border-flame-500/60 hover:bg-white/[0.08]"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-flame-400">
                        {manager.role}
                      </p>
                      <p className="mt-2 font-display text-lg font-semibold text-white">
                        {manager.name}
                      </p>
                      <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] text-white">
                        <a
                          href={`tel:${manager.phone.replace(/[^\d]/g, "")}`}
                          className="inline-flex items-center gap-2 hover:text-flame-300"
                        >
                          <Phone className="h-4 w-4 text-flame-400" aria-hidden />
                          {manager.phone}
                        </a>
                        <a
                          href={`mailto:${manager.email}`}
                          className="inline-flex items-center gap-2 hover:text-flame-300"
                        >
                          <Mail className="h-4 w-4 text-flame-400" aria-hidden />
                          {manager.email}
                        </a>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-flame-700">
              NASA SEWP
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em] text-navy-900">
              Customer assistance
            </h3>
            <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-2" stagger={0.05}>
              {sewpVi.sewpContacts.map((contact, i) => {
                const Icon = sewpContactIcons[i % sewpContactIcons.length];
                return (
                  <RevealItem key={contact.label} className="h-full">
                    <div className="group h-full rounded-2xl border border-navy-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-flame-500 hover:shadow-[0_18px_40px_-24px_rgb(6_26_46/0.35)]">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-50 text-flame-600 ring-1 ring-navy-200 transition-colors duration-300 group-hover:bg-flame-600 group-hover:text-white group-hover:ring-flame-600">
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                      <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-navy-700">
                        {contact.label}
                      </p>
                      <p className="mt-1.5 text-[15px] leading-snug text-fg">{contact.detail}</p>
                    </div>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>
        </div>
      </Band>

      <V2CtaBanner
        eyebrow="Ready to quote"
        title="Send us the requirement and we will quote it"
        lead="Give us the SEWP request number, due date, agency, scope and submission instructions, and the program manager will come back to you."
        image={v2Images.capitol.src}
        imageAlt=""
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <V2Button href="/v2/contact">Talk to our team</V2Button>
          <V2Button href="/v2/contract-vehicles" variant="outline-dark">
            All contract vehicles
          </V2Button>
        </div>
      </V2CtaBanner>
    </>
  );
}
