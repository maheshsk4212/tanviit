import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";
import { Milestones } from "@/components/sections/Milestones";
import { PageHeader } from "@/components/sections/PageHeader";
import { Process } from "@/components/sections/Process";
import { StatsBar } from "@/components/sections/StatsBar";
import { WhyUs } from "@/components/sections/WhyUs";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ImageHighlightCard } from "@/components/ui/ImageHighlightCard";

export const metadata: Metadata = {
  title: "About",
  description: "Tanvi IT has been delivering IT consulting services since 2008.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="An IT consulting partner since 2008"
        description="Tanvi IT was founded to help organizations modernize with confidence. Nearly two decades later, we're still a senior-led, outcome-focused consulting firm — not a staffing shop."
      />
      <StatsBar />

      <Section>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="Our story" title="Built on delivery, not headcount" />
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              Tanvi IT was founded in 2008 with a simple premise: clients deserve
              consultants who own outcomes, not just fill seats. Since then, we&apos;ve
              grown into a full-lifecycle IT services firm working across
              application development, data, DevOps, and quality engineering.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              We&apos;ve built long-term relationships with clients across federal
              government, financial services, healthcare, and beyond — many of
              whom have worked with us for over a decade.
            </p>
          </div>

          <div className="relative">
            <div
              className="absolute -bottom-5 -right-5 hidden h-full w-full rounded-card bg-orange-500/10 sm:block"
              aria-hidden
            />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1758691736975-9f7f643d178e?w=1200&q=80&auto=format&fit=crop"
                alt="Tanvi IT consultants in the office"
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
              title="Why clients choose Tanvi IT"
            />
            <div className="mt-8">
              <WhyUs columns={1} tone="dark" />
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -bottom-5 -left-5 hidden h-full w-full rounded-card bg-white/10 sm:block"
              aria-hidden
            />
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1573496130141-209d200cebd8?w=1200&q=80&auto=format&fit=crop"
                alt="Senior consultants reviewing a delivery plan"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our journey" title="Milestones along the way" />
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_360px] lg:items-start">
          <Milestones />

          <div className="lg:sticky lg:top-24">
            <div className="duotone-navy relative aspect-[4/5] w-full overflow-hidden rounded-card">
              <Image
                src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?w=1200&q=80&auto=format&fit=crop"
                alt="Tanvi IT colleagues celebrating together in the office"
                fill
                sizes="(min-width: 1024px) 360px, 100vw"
                className="object-cover"
              />
            </div>
            <ImageHighlightCard
              label="Since 2008"
              title="150+ consultants delivering across eight practices"
            />
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="How we work" title="A proven delivery process" />
        <div className="mt-12">
          <Process />
        </div>
      </Section>

      <CTASection
        title="Want to know more about our team?"
        description="Reach out and we'll walk you through how we work and who you'd be working with."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="Join our team"
        secondaryHref="/careers"
      />
    </>
  );
}
