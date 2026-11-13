import type { Metadata } from "next";
import {
  Eye,
  LifeBuoy,
  Mail,
  MapPin,
  Phone,
  PiggyBank,
  Sparkles,
  Stethoscope,
  Umbrella,
  type LucideIcon,
} from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { benefits, siteConfig } from "@/lib/site-content";
import { careers, employeeBenefits } from "@/lib/v2-content";

/* No tooth in the icon set, so dental borrows the mark used for oral care. */
const benefitIcons: Record<string, LucideIcon> = {
  medical: Stethoscope,
  dental: Sparkles,
  vision: Eye,
  disability: LifeBuoy,
  life: Umbrella,
  retirement: PiggyBank,
};

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build your future with Tanvi IT. Culture and benefits at a federal and commercial technology company in Chantilly, Virginia.",
};

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        image="https://images.unsplash.com/photo-1780072773684-028dafcfff0b?w=2400&q=80&auto=format&fit=crop"
        title={careers.headline}
        accent="with Tanvi IT"
        description={careers.body}
      />

      <Section tone="muted">
        <SectionHeading
          eyebrow="Employee benefits"
          title={employeeBenefits.headline}
          description={employeeBenefits.intro[0]}
        />
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-fg-muted">
          {employeeBenefits.intro[1]}
        </p>
        <RevealGroup
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.07}
        >
          {benefits.map((benefit) => {
            const Icon = benefitIcons[benefit.icon] ?? Sparkles;
            return (
              <RevealItem key={benefit.title}>
                <Card className="h-full">
                  <span className="flex h-11 w-11 items-center justify-center rounded-control bg-gradient-to-br from-ink-800 to-ink-600 text-gold-300 shadow-sm transition-transform duration-300 group-hover/card:scale-110 group-hover/card:rotate-3">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-fg">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {benefit.description}
                  </p>
                </Card>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Section>

      <Section>
        <SectionHeading
          title={employeeBenefits.investing.heading}
          description={employeeBenefits.investing.body}
        />
      </Section>

      <Section tone="dark">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              tone="dark"
              title="Tell us where you fit"
              description="Send us your résumé and the kind of work you are looking for, and we will route it to the team hiring for it."
            />
            <Button href="/contact#contact-form" size="lg" className="mt-8">
              Send your résumé
            </Button>
          </div>

          <ul className="space-y-5 lg:pt-4">
            <li className="flex items-start gap-3.5 text-slate-200">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-control border border-white/10 bg-white/5 text-gold-300">
                <Mail className="h-4 w-4" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-slate-300">
                  Email
                </span>
                <a href={`mailto:${siteConfig.email}`} className="text-white hover:text-gold-300">
                  {siteConfig.email}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-3.5 text-slate-200">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-control border border-white/10 bg-white/5 text-gold-300">
                <Phone className="h-4 w-4" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-slate-300">
                  Phone
                </span>
                <a href={`tel:${siteConfig.phone}`} className="text-white hover:text-gold-300">
                  {siteConfig.phone}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-3.5 text-slate-200">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-control border border-white/10 bg-white/5 text-gold-300">
                <MapPin className="h-4 w-4" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-slate-300">
                  Office
                </span>
                <span className="text-white">{siteConfig.address}</span>
              </span>
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
}
