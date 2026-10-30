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

export default function Home() {
  return (
    <>
      <Hero />

      {/* What we do — services bento */}
      <Section tone="muted">
        <SectionHeading
          align="split"
          eyebrow="What we do"
          title="Flexible solutions. Built around your goals."
          description="From talent to technology, we deliver flexible, scalable IT solutions that help you innovate faster and achieve measurable business outcomes."
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
          description="Beyond talent, our consultants deliver strategic technology advisory and hands-on solutions across software, cloud, data, enterprise platforms and cybersecurity."
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

      {/* Proven results + client seals */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Proven results"
          title="Outcomes that hold up under scrutiny."
          description="We turn mission requirements into measurable results — delivered on time, on budget, and built to last."
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
          title="Trusted partner to government and enterprise clients"
          description="Buy through the vehicles you already hold — including NASA SEWP VI, GSA MAS and 8(a) STARS III."
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
          title="Trusted by agencies. Proven by results."
          description="We build lasting partnerships by delivering high-quality solutions, exceptional service, and measurable impact."
          action={<Button href="/contact">Work with us</Button>}
        />
        <div className="mt-12">
          <TestimonialCards />
        </div>
      </Section>

      <CTASection
        overline="Tanvi IT + your mission = delivered"
        title="Let's build what's next, together."
        description="Whether you need one specialist or an entire technology team, we're ready to help."
        primaryLabel="Talk to our team"
        primaryHref="/contact"
      />
    </>
  );
}
