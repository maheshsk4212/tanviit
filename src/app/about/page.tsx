import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";
import { ContractVehicles } from "@/components/sections/ContractVehicles";
import { PageHeader } from "@/components/sections/PageHeader";
import { Process } from "@/components/sections/Process";
import { StatsBar } from "@/components/sections/StatsBar";
import { WhyUs } from "@/components/sections/WhyUs";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ImageHighlightCard } from "@/components/ui/ImageHighlightCard";

export const metadata: Metadata = {
  title: "About",
  description:
    "Tanvi IT Solutions Inc. — an 8(a) certified IT staffing and solutions firm serving federal, state, local and commercial clients.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Why choose Tanvi IT"
        title="Experience. Commitment. Results."
        accent="Results."
        description="We combine deep industry expertise, a people-first approach, and proven delivery to help government and commercial organizations achieve their mission."
      />
      <StatsBar />

      <Section tone="muted">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="The right partner. The right talent. The right results."
            />
            <p className="mt-6 text-base leading-relaxed text-fg-muted">
              Tanvi IT Solutions Inc. connects U.S. organizations with skilled IT
              professionals and delivers the technology solutions that turn strategy into
              working systems. We serve federal, state and local agencies alongside
              Fortune 500 enterprises.
            </p>
            <p className="mt-4 text-base leading-relaxed text-fg-muted">
              As an 8(a) certified small business holding ISO 9001, ISO/IEC 20000-1 and
              ISO/IEC 27001 certifications plus CMMI-DEV and CMMI-SVC Level 3 appraisals,
              we bring the process maturity that mission-critical programs require.
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

      <Section tone="dark">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              tone="dark"
              eyebrow="What sets us apart"
              title="That's the Tanvi IT advantage"
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
              label="Certified & compliant"
              title="ISO 9001 · ISO 20000-1 · ISO 27001 · CMMI L3 · 8(a)"
            />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Contract vehicles & achievements"
          title="Trusted partner to government and enterprise"
          description="Our contract vehicles give federal, state and local buyers a direct, compliant path to our talent and solutions."
        />
        <div className="mt-12">
          <ContractVehicles />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Our process"
          title="A proven process. Exceptional results."
          description="We follow a streamlined, collaborative approach to turn your goals into measurable outcomes — every time."
        />
        <div className="mt-12">
          <Process />
        </div>
      </Section>

      <CTASection
        title="Your vision. Our process."
        description="Partner with Tanvi IT Solutions Inc. and experience a process that delivers results you can count on."
        primaryLabel="Get started"
        primaryHref="/contact"
        secondaryLabel="Explore opportunities"
        secondaryHref="/careers"
      />
    </>
  );
}
