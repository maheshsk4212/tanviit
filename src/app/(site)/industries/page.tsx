import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { PageHeader } from "@/components/sections/PageHeader";
import { TechExpertise } from "@/components/sections/TechExpertise";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Tanvi IT supports Federal, state and local government alongside commercial organizations — defense, healthcare, financial services, education, energy, retail and telecom.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Customers & past performance"
        image="https://images.unsplash.com/photo-1739122228703-4f1a68d629ed?w=2400&q=80&auto=format&fit=crop"
        title="Delivering solutions for government agencies and enterprises"
        accent="government agencies and enterprises"
        description="Tanvi IT supports Federal, state and local government alongside commercial organizations — with the same delivery practices behind each engagement."
      />

      <Section>
        <IndustriesGrid />
      </Section>

      <Section tone="dark">
        <SectionHeading
          tone="dark"
          eyebrow="Technology expertise"
          title="Expertise across the modern stack"
          description="Our capabilities span application modernization, data and analytics, cloud and DevSecOps, cybersecurity, enterprise architecture, software engineering, quality engineering, testing, and emerging technologies."
        />
        <div className="mt-12">
          <TechExpertise />
        </div>
      </Section>

      <CTASection
        title="Ready to solve what's next?"
        description="Whether you are modernizing a mission-critical application, transforming enterprise data, adopting cloud technologies, strengthening cybersecurity, or seeking a trusted technology partner, Tanvi IT brings the expertise and commitment to help move your mission forward."
        primaryLabel="Talk to our team"
        primaryHref="/contact"
      />
    </>
  );
}
