import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";
import { PageHeader } from "@/components/sections/PageHeader";
import { Process } from "@/components/sections/Process";
import { ServicesExplorer } from "@/components/services/ServicesExplorer";
import { TechExpertise } from "@/components/sections/TechExpertise";
import { WhyUs } from "@/components/sections/WhyUs";
import { Section, SectionHeading } from "@/components/ui/Section";
import { stats } from "@/lib/site-content";

const WHY_IMAGE =
  "https://images.unsplash.com/photo-1758518729685-f88df7890776?w=1400&q=80&auto=format&fit=crop";
const retention = stats.find((s) => s.label === "Client retention");

export const metadata: Metadata = {
  title: "Services",
  description:
    "Contract staffing, direct hire, contract-to-hire, RPO and IT consulting — delivered by one accountable team for federal, state, local and commercial clients.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Full-lifecycle IT consulting services"
        accent="consulting services"
        description="Five practices, one accountable delivery team — from sourcing specialist talent to running the technology programs that talent supports."
      />

      {/* Overview and depth in one place: tabs, arrows or a swipe move
          between one big card per practice. */}
      <Section>
        <SectionHeading
          align="split"
          eyebrow="What we do"
          title="Five practices. One accountable team."
          description="Engage us for a single specialist or an entire delivery function — the same standards, governance and people apply either way."
        />
        <div className="mt-12">
          <ServicesExplorer />
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading
          tone="dark"
          eyebrow="Technology expertise"
          title="Deep bench across the modern stack"
          description="Our consultants and placed professionals cover the platforms and disciplines federal and commercial programs actually run on."
        />
        <div className="mt-12">
          <TechExpertise />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How we deliver"
          title="A proven process. Exceptional results."
          description="Every engagement runs the same streamlined path — so you always know what happens next, and who owns it."
        />
        <div className="mt-12">
          <Process />
        </div>
      </Section>

      {/* Why teams stay — heading and photo hold on the left while the
          reasons scroll past on the right. */}
      <Section tone="muted">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Why teams stay"
                title="Experience. Commitment. Results."
                description="The reasons clients keep coming back after the first engagement closes."
              />
              <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl bg-deep-900">
                <Image
                  src={WHY_IMAGE}
                  alt="A team of professionals in a business meeting"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-deep-950/85 via-deep-950/10 to-transparent"
                  aria-hidden
                />
                {retention ? (
                  <div className="absolute bottom-5 left-5 text-white sm:bottom-6 sm:left-6">
                    <p className="font-display text-5xl font-medium tracking-[-0.03em]">
                      {retention.value}
                    </p>
                    <p className="mt-1 text-sm text-white/80">{retention.label}</p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <WhyUs />
          </div>
        </div>
      </Section>

      <CTASection
        overline="Tanvi IT + your mission = delivered"
        title="Not sure where to start?"
        description="Tell us about your goals and we'll help you scope the right engagement — no obligation."
        primaryLabel="Talk to our team"
        primaryHref="/contact"
        secondaryLabel="View contract vehicles"
        secondaryHref="/sewp-vi"
      />
    </>
  );
}
