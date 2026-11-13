import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { ContractVehicles } from "@/components/sections/ContractVehicles";
import { PageHeader } from "@/components/sections/PageHeader";
import { Process } from "@/components/sections/Process";
import { StatsBar } from "@/components/sections/StatsBar";
import { WhyUs } from "@/components/sections/WhyUs";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ImageHighlightCard } from "@/components/ui/ImageHighlightCard";
import {
  about,
  jointVenture,
  leadership,
  leadershipContacts,
  leadershipIntro,
  storyMilestones,
} from "@/lib/v2-content";

export const metadata: Metadata = {
  title: "About",
  description: about.hero.statement,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow={about.hero.eyebrow}
        image="https://images.unsplash.com/photo-1669633760258-186e9dee81e7?w=2400&q=80&auto=format&fit=crop"
        title={about.hero.headline}
        accent="Trust."
        description={about.hero.supporting}
      />
      <StatsBar />

      <Section tone="muted">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Company overview" title="Who we are" />
            {about.overview.map((paragraph, i) => (
              <p
                key={paragraph.slice(0, 40)}
                className={`${i === 0 ? "mt-6" : "mt-4"} text-base leading-relaxed text-fg-muted`}
              >
                {paragraph}
              </p>
            ))}
            <p className="mt-8 border-l-2 border-gold-500 pl-5 font-display text-xl font-medium leading-snug text-fg">
              {about.pullQuote}
            </p>
          </div>

          <div className="relative">
            <div
              className="absolute -bottom-5 -right-5 hidden h-full w-full rounded-card bg-gold-500/10 sm:block"
              aria-hidden
            />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card bg-surface-muted">
              <Image
                src="https://images.unsplash.com/photo-1690378820474-b468b8ee64d3?w=1200&q=80&auto=format&fit=crop"
                alt="Tanvi IT Solutions consultants collaborating"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Our approach"
          title="Focused on outcomes. Built on trust."
          description={about.approachIntro}
        />
        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3" stagger={0.07}>
          {about.approach.map((item) => (
            <RevealItem key={item.name}>
              <Card className="h-full">
                <h3 className="font-display text-lg font-semibold text-fg">{item.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{item.description}</p>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="dark">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              tone="dark"
              eyebrow="Why Tanvi IT"
              title="What clients rely on us for"
            />
            <div className="mt-8">
              <WhyUs columns={1} tone="dark" />
            </div>
          </div>

          <div className="relative lg:sticky lg:top-24">
            <div className="duotone-ink relative aspect-[4/5] w-full overflow-hidden rounded-card">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop"
                alt="Tanvi IT Solutions delivery team at work"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <ImageHighlightCard
              label="Certifications & credentials"
              title="ISO 9001 · ISO 20000-1 · ISO 27001 · CMMI L3 · SBA 8(a) · SWaM"
            />
          </div>
        </div>
      </Section>

      <Section tone="muted" id="story">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Our story" title="Built to make a difference" />
            {about.story.map((paragraph, i) => (
              <p
                key={paragraph.slice(0, 40)}
                className={`${i === 0 ? "mt-6" : "mt-4"} text-base leading-relaxed text-fg-muted`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Milestones on a rail, so the years carry the story. */}
          <RevealGroup className="relative" stagger={0.08}>
            <span
              className="pointer-events-none absolute bottom-6 left-[0.6875rem] top-3 w-px bg-line-strong"
              aria-hidden
            />
            {storyMilestones.map((milestone) => (
              <RevealItem key={milestone.title}>
                <div className="relative flex gap-6 pb-9 last:pb-0">
                  <span className="relative mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold-500 bg-surface">
                    <span className="h-2 w-2 rounded-full bg-gold-500" aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-800">
                      {milestone.year}
                    </p>
                    <h3 className="mt-1.5 font-display text-lg font-semibold tracking-tight text-fg">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg-muted">{milestone.detail}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      <Section id="leadership">
        <SectionHeading
          eyebrow="Leadership"
          title="Experienced leadership. Mission-driven direction."
          description={leadershipIntro}
        />
        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2" stagger={0.07}>
          {leadership.map((leader) => {
            const contact = leadershipContacts[leader.name];
            return (
              <RevealItem key={leader.name}>
                <Card className="h-full">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-800">
                    {leader.role}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-fg">
                    {leader.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-fg-muted">{leader.bio}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {leader.areas.map((area) => (
                      <li
                        key={area}
                        className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-fg-muted"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                  {contact ? (
                    <p className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-6 text-sm text-fg">
                      <a
                        href={`mailto:${contact.email}`}
                        className="inline-flex items-center gap-2 hover:text-gold-700"
                      >
                        <Mail className="h-4 w-4 text-gold-700" aria-hidden />
                        {contact.email}
                      </a>
                      <a
                        href={`tel:${contact.phone.replace(/[^\d]/g, "")}`}
                        className="inline-flex items-center gap-2 hover:text-gold-700"
                      >
                        <Phone className="h-4 w-4 text-gold-700" aria-hidden />
                        {contact.phone}
                      </a>
                    </p>
                  ) : null}
                </Card>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Section>

      <Section tone="muted" id="contract-vehicles">
        <SectionHeading
          eyebrow="Contract vehicles"
          title="Access technology solutions through our contract vehicles"
          description="Agencies may be able to procure services through existing contract vehicles, subject to applicable ordering procedures."
        />
        <div className="mt-12">
          <ContractVehicles />
        </div>
      </Section>

      <Section id="joint-venture">
        <SectionHeading eyebrow="Joint ventures" title={jointVenture.name} />
        <p className="mt-5 flex flex-wrap gap-2">
          {jointVenture.partners.split("+").map((partner) => (
            <span
              key={partner}
              className="rounded-full border border-line bg-surface-muted px-4 py-2 font-display text-sm font-semibold text-fg"
            >
              {partner.trim()}
            </span>
          ))}
        </p>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-fg-muted">
          {jointVenture.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <a
          href={jointVenture.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:-translate-y-0.5"
        >
          Learn more about TA Federal
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="How we deliver" title="Five steps, every engagement" />
        <div className="mt-12">
          <Process />
        </div>
      </Section>

      <CTASection
        overline={about.promise}
        title={about.closing.headline}
        description={about.closing.body}
        primaryLabel="Talk to our team"
        primaryHref="/contact"
        secondaryLabel="Explore careers"
        secondaryHref="/careers"
      />
    </>
  );
}
