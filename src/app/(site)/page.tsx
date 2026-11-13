import { CapabilitiesBento } from "@/components/sections/CapabilitiesBento";
import { CTASection } from "@/components/sections/CTASection";
import { ExpertiseStack } from "@/components/sections/ExpertiseStack";
import { Hero } from "@/components/sections/Hero";
import { IndustriesSplit } from "@/components/sections/IndustriesSplit";
import { KeyFigures } from "@/components/sections/KeyFigures";
import { PromoVideo } from "@/components/sections/PromoVideo";
import { ResultsShowcase } from "@/components/sections/ResultsShowcase";
import { TestimonialCards } from "@/components/sections/TestimonialCards";
import { VehicleCards } from "@/components/sections/VehicleCards";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { about, homeHero, valueProposition } from "@/lib/v2-content";

export default function Home() {
  return (
    <>
      <Hero />

      {/* What we do — the six solution areas */}
      <Section tone="muted">
        <SectionHeading
          align="split"
          eyebrow="What we do"
          title="Technology that supports the mission"
          description={homeHero.statement}
        />
        <div className="mt-14">
          <CapabilitiesBento />
        </div>
      </Section>

      {/* Key figures band */}
      <KeyFigures />

      {/* Technology expertise — stacking cards */}
      <Section>
        <SectionHeading
          align="split"
          eyebrow="Technology expertise"
          title="Expertise across the modern stack"
          description="Our capabilities span application modernization, data and analytics, cloud and DevSecOps, cybersecurity, enterprise architecture, software engineering, quality engineering, testing, and emerging technologies."
        />
        <div className="mt-14">
          <ExpertiseStack />
        </div>
      </Section>

      {/* Industries — inset rounded panel, echoing the closing banner */}
      <div className="bg-surface px-3 pb-3 sm:px-4 sm:pb-4">
        <Section tone="dark" className="rounded-2xl">
          <IndustriesSplit />
        </Section>
      </div>

      {/* Why Tanvi IT + client seals */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Why Tanvi IT"
          title="Value creation, mission outcomes, long-term success."
          description={valueProposition[0]}
          action={<Button href="/contact">Talk to our team</Button>}
        />
        <div className="mt-12">
          <ResultsShowcase />
        </div>
      </Section>

      {/* Contract vehicles */}
      <Section>
        <SectionHeading
          eyebrow="Contract vehicles"
          title="Access technology solutions through our contract vehicles"
          description="Agencies may be able to procure services through existing contract vehicles, subject to applicable ordering procedures."
          action={<Button href="/sewp-vi">View SEWP VI</Button>}
        />
        <div className="mt-12">
          <VehicleCards />
        </div>
      </Section>

      {/* Full-frame brand film, breaking the run of light sections. */}
      <PromoVideo />

      {/* Testimonials */}
      <Section>
        <SectionHeading
          eyebrow="Client testimonials"
          title="What our clients say"
          action={<Button href="/contact">Work with us</Button>}
        />
        <div className="mt-12">
          <TestimonialCards />
        </div>
      </Section>

      <CTASection
        overline={about.promise}
        title={about.closing.headline}
        description={about.closing.body}
        primaryLabel="Talk to our team"
        primaryHref="/contact"
      />
    </>
  );
}
