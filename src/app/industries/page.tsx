import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { PageHeader } from "@/components/sections/PageHeader";
import { IndustriesTabs } from "@/components/industries/IndustriesTabs";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Tanvi IT delivers technology consulting across federal government, financial services, healthcare, insurance, telecommunications, and retail.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="Industry experience that shortens the learning curve"
        description="We bring domain context as well as technical depth — so engagements start faster and land better."
      />

      <Section>
        <IndustriesTabs />
      </Section>

      <CTASection
        title="Don't see your industry?"
        description="Our practices are built to transfer across sectors — let's talk about your specific context."
        primaryLabel="Contact us"
        primaryHref="/contact"
      />
    </>
  );
}
