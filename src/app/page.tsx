import { Audiences } from "@/components/sections/Audiences";
import { CTASection } from "@/components/sections/CTASection";
import { ContractVehicles } from "@/components/sections/ContractVehicles";
import { Hero } from "@/components/sections/Hero";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { Process } from "@/components/sections/Process";
import { ProvenResults } from "@/components/sections/ProvenResults";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { StatsBar } from "@/components/sections/StatsBar";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyUs } from "@/components/sections/WhyUs";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { clients } from "@/lib/site-content";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />

      {/* Services */}
      <Section tone="dark">
        <SectionHeading
          tone="dark"
          eyebrow="Our services"
          title="Flexible solutions. Built around your goals."
          description="From talent to technology, we deliver flexible, scalable IT solutions that help you innovate faster and achieve measurable business outcomes."
        />
        <div className="mt-12">
          <ServicesGrid />
        </div>
        <div className="mt-10 text-center">
          <Button href="/services" variant="ghost-dark">
            Explore our services
          </Button>
        </div>
      </Section>

      {/* For employers / For talent */}
      <Section tone="dark" className="pt-0">
        <Audiences />
      </Section>

      {/* Industries */}
      <Section>
        <SectionHeading
          eyebrow="Industries we serve"
          title="Domain expertise. Proven impact."
          description="We deliver tailored IT solutions across a wide range of public and private sector industries."
        />
        <div className="mt-12">
          <IndustriesGrid limit={5} />
        </div>
        <div className="mt-10 text-center">
          <Button href="/industries" variant="ghost">
            View all industries
          </Button>
        </div>
      </Section>

      {/* Proven results — concrete, quantified outcomes */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Proven results"
          title="Outcomes that hold up under scrutiny."
          description="We turn mission requirements into measurable results — delivered on time, on budget, and built to last."
        />
        <div className="mt-12">
          <ProvenResults />
        </div>
      </Section>

      {/* Contract vehicles & achievements */}
      <Section>
        <SectionHeading
          eyebrow="Contract vehicles & achievements"
          title="Trusted partner to government and enterprise clients"
          description="Buy through the vehicles you already hold — including NASA SEWP VI, GSA MAS and 8(a) STARS III."
        />
        <div className="mt-12">
          <ContractVehicles showAchievements={false} />
        </div>
      </Section>

      {/* Why choose */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Why choose Tanvi IT"
          title="Experience. Commitment. Results."
        />
        <div className="mt-12">
          <WhyUs />
        </div>
      </Section>

      {/* Process */}
      <Section tone="dark">
        <SectionHeading
          tone="dark"
          eyebrow="Our process"
          title="A proven process. Exceptional results."
          description="We follow a streamlined, collaborative approach to turn your goals into measurable outcomes — every time."
        />
        <div className="mt-12">
          <Process tone="dark" />
        </div>
      </Section>

      {/* Clients & testimonials */}
      <Section>
        <SectionHeading
          eyebrow="Clients & testimonials"
          title="Trusted by agencies. Proven by results."
          description="We build lasting partnerships by delivering high-quality solutions, exceptional service, and measurable impact."
          align="center"
        />

        {/* Trust strip — reads as a logo wall until real client marks exist. */}
        <ul className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {clients.map((client) => (
            <li key={client}>
              <span className="block rounded-full border border-line bg-gradient-to-b from-surface to-surface-muted px-6 py-3 font-display text-base font-semibold tracking-tight text-fg shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-elevated">
                {client}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <Testimonials />
        </div>
      </Section>

      <CTASection
        overline="Tanvi IT + your mission = delivered"
        title="Let's build what's next, together."
        description="Whether you need one specialist or an entire technology team, we're ready to help."
        primaryLabel="Talk to our team"
        primaryHref="/contact"
        secondaryLabel="Explore solutions"
        secondaryHref="/services"
      />
    </>
  );
}
