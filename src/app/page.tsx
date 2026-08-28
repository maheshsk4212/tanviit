import { CTASection } from "@/components/sections/CTASection";
import { Differentiator } from "@/components/sections/Differentiator";
import { Hero } from "@/components/sections/Hero";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { Process } from "@/components/sections/Process";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { StatsBar } from "@/components/sections/StatsBar";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyUs } from "@/components/sections/WhyUs";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />

      <Section tone="dark">
        <SectionHeading
          tone="dark"
          eyebrow="What we do"
          title="Full-lifecycle IT consulting"
          description="From modernizing legacy applications to standing up analytics platforms, our teams cover the full delivery lifecycle in-house."
        />
        <div className="mt-12">
          <ServicesGrid limit={4} />
        </div>
        <div className="mt-10 text-center">
          <Button href="/services" variant="ghost-dark">
            View all services
          </Button>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Who we serve"
          title="Industries we know well"
          description="Nearly two decades of delivery across regulated, mission-critical environments."
        />
        <div className="mt-12">
          <IndustriesGrid limit={3} />
        </div>
        <div className="mt-10 text-center">
          <Button href="/industries" variant="ghost">
            View all industries
          </Button>
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading
          tone="dark"
          eyebrow="Tanvi IT vs. staffing firms"
          title="Consulting, not headcount"
          description="We're built and run differently than a typical staffing vendor — and it shows up in how engagements get delivered."
          align="center"
        />
        <div className="mt-12">
          <Differentiator />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Why Tanvi IT" title="Consulting that delivers outcomes" />
        <div className="mt-12">
          <WhyUs />
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading tone="dark" eyebrow="How we work" title="A proven delivery process" />
        <div className="mt-12">
          <Process tone="dark" />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Client voices"
          title="Trusted by teams who need it done right"
          align="center"
        />
        <div className="mt-12">
          <Testimonials />
        </div>
      </Section>

      <CTASection
        title="Ready to modernize with confidence?"
        description="Tell us about your project and we'll set up time to talk through it."
        primaryLabel="Contact us"
        primaryHref="/contact"
        secondaryLabel="See open roles"
        secondaryHref="/careers"
      />
    </>
  );
}
