import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServicesShowcase } from "@/components/services/ServicesShowcase";
import { services } from "@/lib/site-content";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-lifecycle IT consulting services: application development & modernization, BI, data analytics, DevOps, emerging tech, enterprise architecture, IV&V, and performance testing.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Full-lifecycle IT consulting services"
        accent="consulting services"
        description="Eight practices, one accountable delivery team — covering everything from application modernization to independent quality assurance."
      >
        <div className="mt-8 flex flex-wrap gap-2">
          {services.map((service) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-gold-400/40 hover:bg-gold-500/10 hover:text-gold-300"
            >
              {service.name}
            </a>
          ))}
        </div>
      </PageHeader>

      <Section tone="muted">
        <ServicesShowcase />
      </Section>

      <CTASection
        title="Not sure where to start?"
        description="Tell us about your goals and we'll help you scope the right engagement."
        primaryLabel="Contact us"
        primaryHref="/contact"
      />
    </>
  );
}
