import type { Metadata } from "next";
import {
  Banknote,
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  MapPin,
  Quote,
  ShieldCheck,
  ShoppingCart,
  Zap,
} from "lucide-react";

/* Federal, state, local, defense, healthcare, banking, education, energy, retail. */
const industryIcons = [
  Landmark,
  Building2,
  MapPin,
  ShieldCheck,
  HeartPulse,
  Banknote,
  GraduationCap,
  Zap,
  ShoppingCart,
];

/** Initials for a customer mark, standing in until real logos arrive. */
function monogram(name: string) {
  const words = name.split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}
import { Band, BandHeading, PageHero, V2Button } from "@/components/v2/V2Section";
import { V2FeatureRow } from "@/components/v2/V2FeatureRow";
import { industries, testimonials } from "@/lib/site-content";
import { customerGroups, v2Images } from "@/lib/v2-content";

export const metadata: Metadata = {
  title: "Customers & past performance",
  description:
    "Government and commercial organizations Tanvi IT supports, the mission areas we deliver in, and what our clients say about the work.",
};

export default function V2Customers() {
  return (
    <>
      <PageHero
        eyebrow="Customers & past performance"
        title="Delivered for agencies and enterprises"
        lead="Tanvi IT supports Federal, state and local government alongside commercial organizations — with the same delivery practices behind each engagement."
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <V2Button href="/v2/capabilities">What we deliver</V2Button>
          <V2Button href="/v2/contact" variant="outline-dark">
            Request past performance
          </V2Button>
        </div>
      </PageHero>

      <Band id="customers">
        <BandHeading
          eyebrow="Customers"
          title="Organizations we support"
          lead="Government programs and commercial organizations that have trusted Tanvi IT with delivery."
        />
        {customerGroups.map((group) => (
          <div key={group.heading} className="mt-12">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-navy-700">
              {group.heading}
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {group.customers.map((customer) => (
                <li
                  key={customer.name}
                  className="group flex h-full flex-col items-center justify-center gap-3 rounded-xl border border-navy-200 bg-white px-4 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-flame-500 hover:shadow-[0_18px_40px_-24px_rgb(6_26_46/0.35)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-50 font-display text-sm font-semibold text-navy-800 transition-colors duration-300 group-hover:bg-flame-600 group-hover:text-white">
                    {monogram(customer.name)}
                  </span>
                  <span className="font-display text-base font-semibold text-navy-900">
                    {customer.name}
                  </span>
                  {customer.detail ? (
                    <span className="text-[13px] leading-snug text-fg-subtle">
                      {customer.detail}
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Band>

      <Band motif tone="tint" id="mission-areas">
        <BandHeading
          eyebrow="Mission areas"
          title="Where we work"
          lead="The sectors our teams know, so an engagement starts with the constraints already understood."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <li
              key={industry.slug}
              className="group rounded-2xl border border-navy-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-flame-500 hover:shadow-[0_18px_40px_-24px_rgb(6_26_46/0.35)]"
            >
              {(() => {
                const Icon = industryIcons[i % industryIcons.length];
                return (
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-flame-600 transition-colors duration-300 group-hover:bg-flame-600 group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                );
              })()}
              <h3 className="mt-6 font-display text-lg font-semibold text-navy-900">
                {industry.name}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-fg">{industry.summary}</p>
            </li>
          ))}
        </ul>
      </Band>

      <Band>
        <V2FeatureRow
          eyebrow="Past performance"
          title="Delivery that holds up under review"
          description="Program references, scope summaries and a capability statement are available on request — the detail an evaluator needs, rather than a logo wall alone."
          image={v2Images.workstation.src}
          imageAlt={v2Images.workstation.alt}
        >
          <div className="mt-8">
            <V2Button href="/v2/contact">Request past performance</V2Button>
          </div>
        </V2FeatureRow>
      </Band>

      <Band tone="tint" id="testimonials">
        <BandHeading eyebrow="Client testimonials" title="What our clients say" />
        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li
              key={testimonial.company}
              className="group flex h-full flex-col rounded-2xl border border-navy-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-flame-500 hover:shadow-[0_18px_40px_-24px_rgb(6_26_46/0.35)]"
            >
              <Quote
                className="h-8 w-8 shrink-0 text-flame-500 transition-transform duration-300 group-hover:-translate-y-0.5"
                aria-hidden
              />
              <blockquote className="mt-5 flex-1 text-[17px] leading-[1.65] text-fg">
                “{testimonial.quote}”
              </blockquote>
              <div className="mt-7 flex items-center gap-3 border-t border-navy-100 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-50 font-display text-sm font-semibold text-navy-800">
                  {testimonial.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-fg">{testimonial.author}</span>
                  <span className="block text-sm text-fg-subtle">{testimonial.company}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Band>

      <Band tone="dark">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <BandHeading
            onDark
            title="Looking for past performance detail?"
            lead="We can provide program references, scope summaries and a capability statement on request."
          />
          <V2Button href="/v2/contact" variant="outline-dark">
            Contact us
          </V2Button>
        </div>
      </Band>
    </>
  );
}
