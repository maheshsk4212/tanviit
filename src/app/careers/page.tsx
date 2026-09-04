import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { benefits, siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build your career at Tanvi IT — a senior-led IT consulting firm delivering for public and private sector clients since 2008.",
};

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build your career at Tanvi IT"
        accent="at Tanvi IT"
        description="We're always looking for senior-minded consultants who want to own outcomes, not just fill seats. We don't have a public job board right now — reach out and tell us what you do best."
      />

      <Section>
        <SectionHeading
          eyebrow="What we offer"
          title="Benefits that support the long haul"
          description="Consulting is demanding work. Our package is built so people can do it sustainably, and keep growing while they do."
        />
        <RevealGroup
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.07}
        >
          {benefits.map((benefit) => (
            <RevealItem key={benefit.title}>
              <Card className="h-full">
                <h3 className="font-display text-lg font-semibold text-fg">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {benefit.description}
                </p>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="dark">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              tone="dark"
              eyebrow="Get in touch"
              title="Tell us what you're great at"
              description="Send us your resume and a note about the kind of work you want to be doing. If there's a fit — now or when a role opens — we'll reach out."
            />
            <Button href={`mailto:${siteConfig.email}`} size="lg" className="mt-8">
              <Mail className="h-4 w-4" aria-hidden />
              Email your resume
            </Button>
          </div>

          <ul className="space-y-5 lg:pt-4">
            <li className="flex items-start gap-3.5 text-slate-300">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-control border border-white/10 bg-white/5 text-gold-300">
                <Mail className="h-4 w-4" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Email
                </span>
                <a href={`mailto:${siteConfig.email}`} className="text-white hover:text-gold-300">
                  {siteConfig.email}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-3.5 text-slate-300">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-control border border-white/10 bg-white/5 text-gold-300">
                <Phone className="h-4 w-4" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Phone
                </span>
                <a href={`tel:${siteConfig.phone}`} className="text-white hover:text-gold-300">
                  {siteConfig.phone}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-3.5 text-slate-300">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-control border border-white/10 bg-white/5 text-gold-300">
                <MapPin className="h-4 w-4" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wide text-slate-400">
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
