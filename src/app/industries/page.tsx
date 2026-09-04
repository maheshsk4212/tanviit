import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { PageHeader } from "@/components/sections/PageHeader";
import { TechExpertise } from "@/components/sections/TechExpertise";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Tanvi IT Solutions delivers IT talent and technology solutions across federal, state and local government, defense, healthcare, financial services, education, energy, retail and telecom.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries we serve"
        title="Domain expertise. Proven impact."
        accent="Proven impact."
        description="We deliver tailored IT solutions that drive efficiency, innovation, and mission success across a wide range of public and private sector industries."
      />

      <Section>
        <IndustriesGrid />
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

      <CTASection
        title="Multiple industries. One commitment."
        description="No matter the industry, our focus remains the same — delivering innovative, secure, and results-driven IT solutions that create lasting impact."
        primaryLabel="Let's work together"
        primaryHref="/contact"
      />
    </>
  );
}
