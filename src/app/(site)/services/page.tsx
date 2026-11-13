import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";
import { PageHeader } from "@/components/sections/PageHeader";
import { Process } from "@/components/sections/Process";
import { ServicesExplorer } from "@/components/services/ServicesExplorer";
import { TechExpertise } from "@/components/sections/TechExpertise";
import { WhyUs } from "@/components/sections/WhyUs";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeading } from "@/components/ui/Section";
import { servicesIntro } from "@/lib/site-content";
import { about, outcomes } from "@/lib/v2-content";

const WHY_IMAGE =
  "https://images.unsplash.com/photo-1758518729685-f88df7890776?w=1400&q=80&auto=format&fit=crop";

export const metadata: Metadata = {
  title: "Capabilities",
  description: servicesIntro.supporting,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow={servicesIntro.eyebrow}
        image="https://images.unsplash.com/photo-1758520145069-782ad713a7ac?w=2400&q=80&auto=format&fit=crop"
        imagePosition="object-[70%_12%]"
        title={servicesIntro.headline}
        accent="your mission"
        description={servicesIntro.supporting}
      />

      {/* Overview and depth in one place: tabs, arrows or a swipe move
          between one big card per solution area. */}
      <Section>
        <SectionHeading
          align="split"
          eyebrow="Key solution areas"
          title="Six areas we deliver in"
          description="Each area lists the services it covers, so a requirement can be matched against it directly."
        />
        <div className="mt-12">
          <ServicesExplorer />
        </div>
      </Section>

      <Section tone="dark" id="technology">
        <SectionHeading
          tone="dark"
          eyebrow="Technology expertise"
          title="Experienced people, practical engineering"
          description={servicesIntro.statement}
        />
        <div className="mt-12">
          <TechExpertise />
        </div>
      </Section>

      <Section tone="muted" id="outcomes">
        <SectionHeading eyebrow="Outcomes" title="What we help clients achieve" />
        <RevealGroup
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.06}
        >
          {outcomes.map((outcome) => (
            <RevealItem key={outcome.name}>
              <Card className="h-full">
                <h3 className="font-display text-lg font-semibold text-fg">{outcome.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{outcome.description}</p>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section id="process">
        <SectionHeading eyebrow="How we deliver" title="Five steps, every engagement" />
        <div className="mt-12">
          <Process />
        </div>
      </Section>

      {/* Why Tanvi IT — heading and photo hold on the left while the
          reasons scroll past on the right. */}
      <Section tone="muted">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Why Tanvi IT"
                title="What clients rely on us for"
                description={about.pullQuote}
              />
              <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl bg-deep-900">
                <Image
                  src={WHY_IMAGE}
                  alt="A team of professionals in a business meeting"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-deep-950/85 via-deep-950/10 to-transparent"
                  aria-hidden
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <WhyUs />
          </div>
        </div>
      </Section>

      <CTASection
        overline={about.promise}
        title="Tell us what the requirement is."
        description="We will come back with the contract vehicle, the delivery approach and a timeline."
        primaryLabel="Talk to our team"
        primaryHref="/contact"
        secondaryLabel="View contract vehicles"
        secondaryHref="/sewp-vi"
      />
    </>
  );
}
