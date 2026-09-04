import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { PageHeader } from "@/components/sections/PageHeader";
import { Process } from "@/components/sections/Process";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ServicesShowcase } from "@/components/services/ServicesShowcase";
import { TechExpertise } from "@/components/sections/TechExpertise";
import { WhyUs } from "@/components/sections/WhyUs";
import { Section, SectionHeading } from "@/components/ui/Section";

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

      {/* Overview first: the whole offering scannable at a glance, before any
          one practice is explained in depth. */}
      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="Five practices. One accountable team."
          description="Engage us for a single specialist or an entire delivery function — the same standards, governance and people apply either way."
        />
        <div className="mt-12">
          <ServicesGrid />
        </div>
      </Section>

      {/* Then the depth. */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="In depth"
          title="How each practice works"
          description="What you get, how we run it, and what makes each engagement model the right call."
        />
        <div className="mt-12">
          <ServicesShowcase />
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

      <Section tone="muted">
        <SectionHeading
          eyebrow="Why teams stay"
          title="Experience. Commitment. Results."
          description="The reasons clients keep coming back after the first engagement closes."
        />
        <div className="mt-12">
          <WhyUs />
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
