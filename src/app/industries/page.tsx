import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { techExpertise } from "@/lib/site-content";

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
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techExpertise.map((group) => (
            <div
              key={group.area}
              className="rounded-card border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="font-display text-lg font-semibold text-white">{group.area}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-fg-subtle"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
