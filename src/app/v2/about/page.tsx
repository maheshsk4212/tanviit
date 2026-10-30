import type { Metadata } from "next";
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
import Image from "next/image";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { V2FeatureRow } from "@/components/v2/V2FeatureRow";
import {
  about,
  storyMilestones,
  leadershipContacts,
  certificationsIntro,
  jointVenture,
  leadership,
  leadershipIntro,
  v2Certifications,
  v2Images,
} from "@/lib/v2-content";

export const metadata: Metadata = {
  title: "About Tanvi IT",
  description: "Tanvi IT Solutions Inc. — a technology and consulting company in Chantilly, VA delivering mission-focused IT since 2008. Leadership, credentials and approach.",
};

/* Talent, Technology, Trust — a photograph for each. */
const valueImages = [v2Images.team, v2Images.workstation, v2Images.people];

export default function V2About() {
  return (
    <>
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={about.hero.headline}
        lead={about.hero.supporting}
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <V2Button href="/v2/capabilities">Our capabilities</V2Button>
          <V2Button href="#leadership" variant="outline-dark">
            Meet our leadership
          </V2Button>
        </div>
      </PageHero>

      {/* ----------------------------------------------------- Who we are */}
      <Band id="overview">
        <V2FeatureRow
          eyebrow="Company overview"
          title="Who we are"
          image={v2Images.team.src}
          imageAlt={v2Images.team.alt}
        >
          <div className="mt-5 space-y-5 text-base leading-relaxed text-fg-muted sm:text-lg">
            {about.overview.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </V2FeatureRow>
        <p className="mt-14 border-l-4 border-flame-500 pl-6 font-display text-2xl font-semibold leading-snug tracking-[-0.015em] text-navy-900 sm:text-3xl">
          {about.pullQuote}
        </p>
      </Band>

      {/* ----------------------------------------------------- Our approach */}
      <Band tone="dark" id="approach">
        <BandHeading
          onDark
          eyebrow="Our approach"
          title="Focused on outcomes. Built on trust."
          lead={about.approachIntro}
        />
        <RevealGroup className="mt-16 grid gap-5 lg:grid-cols-3" stagger={0.08}>
          {about.approach.map((item, i) => (
            <RevealItem key={item.name}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white/[0.06] transition-colors duration-300 hover:bg-white/[0.1]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={valueImages[i].src}
                    alt={valueImages[i].alt}
                    fill
                    quality={90}
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent"
                    aria-hidden
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-flame-400">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/80">
                    {item.description}
                  </p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Band>

      {/* The promise, set large — the reference gives its mission a band of
          its own rather than a line inside another section. */}
      <Band tone="tint">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-700">
            The Tanvi IT promise
          </p>
          <p className="mt-6 text-balance font-display text-3xl font-semibold leading-[1.2] tracking-[-0.03em] text-navy-900 sm:text-4xl lg:text-[2.75rem]">
            {about.promise}
          </p>
        </Reveal>
      </Band>

      {/* -------------------------------------------------------- Why Tanvi */}
      <Band id="why">
        <BandHeading eyebrow="Why Tanvi IT" title="What clients rely on us for" />
        <ul className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {about.whyTanvi.map((item) => (
            <li key={item.name} className="border-t border-navy-200 pt-6">
              <h3 className="font-display text-lg font-semibold text-navy-900">{item.name}</h3>
              <p className="mt-2.5 text-[17px] leading-[1.7] text-fg">{item.description}</p>
            </li>
          ))}
        </ul>
      </Band>

      {/* -------------------------------------------------------- Our story */}
      <Band tone="dark" id="story">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <Reveal>
            <BandHeading onDark eyebrow="Our story" title="Built to make a difference" />
            <div className="mt-10 overflow-hidden rounded-3xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src={v2Images.group.src}
                  alt={v2Images.group.alt}
                  fill
                  quality={90}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent"
                  aria-hidden
                />
              </div>
            </div>
          </Reveal>

          {/* Milestones on a rail, so the years carry the story. */}
          <RevealGroup className="relative" stagger={0.09}>
            <span
              className="pointer-events-none absolute bottom-6 left-[0.6875rem] top-3 w-px bg-white/15"
              aria-hidden
            />
            {storyMilestones.map((milestone) => (
              <RevealItem key={milestone.title}>
                <div className="group relative flex gap-6 pb-10 last:pb-0">
                  <span className="relative mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/25 bg-navy-950 transition-colors duration-300 group-hover:border-flame-500">
                    <span className="h-2 w-2 rounded-full bg-flame-500" aria-hidden />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-flame-400">
                      {milestone.year}
                    </p>
                    <h3 className="mt-1.5 font-display text-xl font-semibold tracking-[-0.02em] text-white">
                      {milestone.title}
                    </h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-white/75">
                      {milestone.detail}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <p className="mt-14 border-t border-white/15 pt-8 font-display text-lg font-semibold tracking-[-0.01em] text-flame-400 sm:text-xl">
          The Tanvi IT promise — {about.promise}
        </p>
      </Band>

      {/* ------------------------------------------------------- Leadership */}
      <Band id="leadership">
        <BandHeading
          eyebrow="Leadership"
          title="Experienced leadership. Mission-driven direction."
          lead={leadershipIntro}
        />
        <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-2" stagger={0.1}>
          {leadership.map((person) => {
            const contact = leadershipContacts[person.name];
            return (
              <RevealItem key={person.name}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-flame-500 hover:shadow-[0_18px_40px_-24px_rgb(6_26_46/0.35)]">
                  {/* Monogram plate — the portraits are not ours to publish yet. */}
                  <div className="flex items-center gap-5 border-b border-navy-100 bg-navy-50 p-7">
                    <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-navy-900 font-display text-xl font-semibold text-white">
                      {person.name
                        .split(" ")
                        .map((part) => part[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                    <span>
                      <span className="block font-display text-xl font-semibold tracking-[-0.02em] text-navy-900">
                        {person.name}
                      </span>
                      <span className="mt-1 block text-sm font-semibold uppercase tracking-[0.14em] text-flame-700">
                        {person.role}
                      </span>
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-[15px] leading-relaxed text-fg-muted">{person.bio}</p>

                    <h4 className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-navy-700">
                      Areas of leadership
                    </h4>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {person.areas.map((area) => (
                        <li
                          key={area}
                          className="rounded-full border border-navy-200 px-3 py-1 text-[13px] font-medium text-fg"
                        >
                          {area}
                        </li>
                      ))}
                    </ul>

                    {contact ? (
                      <p className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-navy-100 pt-5 text-[15px]">
                        <a
                          href={`mailto:${contact.email}`}
                          className="font-medium text-navy-700 underline-offset-4 hover:text-flame-600 hover:underline"
                        >
                          {contact.email}
                        </a>
                        <a
                          href={`tel:${contact.phone.replace(/[^\d]/g, "")}`}
                          className="text-fg-muted underline-offset-4 hover:text-flame-600 hover:underline"
                        >
                          {contact.phone}
                        </a>
                      </p>
                    ) : null}
                  </div>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Band>

      <Band tone="tint" id="certifications">
        <BandHeading
          eyebrow="Certifications & credentials"
          title="Our commitment to quality, security & continuous improvement"
          lead={certificationsIntro}
        />
        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {v2Certifications.map((cert) => (
            <RevealItem key={cert.name}>
              <div className="group flex h-full flex-col rounded-2xl border border-navy-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-flame-500 hover:shadow-[0_18px_40px_-24px_rgb(6_26_46/0.35)]">
                {/* Seal, rather than a row in a list. */}
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-navy-200 text-flame-600 transition-colors duration-300 group-hover:border-flame-500 group-hover:bg-flame-600 group-hover:text-white">
                  <BadgeCheck className="h-6 w-6" aria-hidden />
                </span>
                <p className="mt-6 font-display text-lg font-semibold leading-snug text-navy-900">
                  {cert.name}
                </p>
                <p className="mt-1.5 text-[15px] leading-relaxed text-fg-muted">{cert.detail}</p>
                <p className="mt-auto pt-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-fg-subtle">
                  {cert.group}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Band>

      {/* ------------------------------------------------------------- JV */}
      <Band id="joint-ventures">
        <V2FeatureRow
          eyebrow="Joint ventures"
          title={jointVenture.name}
          image={v2Images.people.src}
          imageAlt={v2Images.people.alt}
        >
          {/* The two partners, named as a pair. */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {jointVenture.partners.split("+").map((partner) => (
              <span
                key={partner}
                className="rounded-full border border-navy-200 bg-navy-50 px-4 py-2 font-display text-sm font-semibold text-navy-900"
              >
                {partner.trim()}
              </span>
            ))}
          </div>

          <div className="mt-6 space-y-5 text-base leading-relaxed text-fg-muted sm:text-lg">
            {jointVenture.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8">
            <a
              href={jointVenture.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-flame-600 px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-flame-700"
            >
              Learn more about TA Federal
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
          </div>
        </V2FeatureRow>
      </Band>

      {/* ------------------------------------------------- Work with us */}
      <Band>
        <V2FeatureRow
          eyebrow="Work with us"
          title="Buying from Tanvi IT is straightforward"
          description="We are already on the vehicles most agencies hold — NASA SEWP VI Category C, GSA MAS, 8(a) STARS III and the cooperative agreements state and local buyers use. That means a requirement can reach award without a new procurement."
          image={v2Images.capitol.src}
          imageAlt={v2Images.capitol.alt}
          flip
        >
          <div className="mt-8 flex flex-wrap gap-3">
            <V2Button href="/v2/contract-vehicles">View contract vehicles</V2Button>
            <V2Button href="/v2/contract-vehicles/sewp-vi" variant="outline">
              NASA SEWP VI
            </V2Button>
          </div>
        </V2FeatureRow>
      </Band>

      {/* ---------------------------------------------------------- Closing */}
      <Band tone="dark">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16">
          <BandHeading  onDark title={about.closing.headline} lead={about.closing.body} />
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <V2Button href="/v2/capabilities" variant="outline-dark">
              Explore our capabilities
            </V2Button>
            <V2Button href="/v2/careers">Explore careers</V2Button>
          </div>
        </div>
        <div className="mt-10">
          <MoreLink href="/v2/contact" onDark>
            Talk to our team
          </MoreLink>
        </div>
      </Band>
    </>
  );
}
