import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/forms/ContactForm";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Tanvi IT to discuss your project.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project"
        description="Tell us a bit about what you're working on and a member of our team will follow up."
      />

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div className="rounded-card border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-display text-lg font-semibold text-ink-900">
                Get in touch directly
              </h3>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3 text-sm text-slate-600">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" aria-hidden />
                  {siteConfig.address}
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <Phone className="h-5 w-5 shrink-0 text-gold-500" aria-hidden />
                  <a href={`tel:${siteConfig.phone}`} className="hover:text-ink-900">
                    {siteConfig.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-slate-600">
                  <Mail className="h-5 w-5 shrink-0 text-gold-500" aria-hidden />
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-ink-900">
                    {siteConfig.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
