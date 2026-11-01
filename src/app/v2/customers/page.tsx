import type { Metadata } from "next";
import Image from "next/image";
import { Quote } from "lucide-react";
import {
  Band,
  BandHeading,
  MoreLink,
  PageHero,
  Reveal,
  RevealGroup,
  RevealItem,
  V2Button,
} from "@/components/v2/V2Section";
import { V2FeatureRow } from "@/components/v2/V2FeatureRow";
import { V2Tabs, type SectorPanel } from "@/components/v2/V2Tabs";
import { industries, testimonials } from "@/lib/site-content";
import { customerGroups, sectorTabs, v2Images } from "@/lib/v2-content";

export const metadata: Metadata = {
  title: "Customers & past performance",
  description:
    "Government and commercial organizations Tanvi IT supports, the mission areas we deliver in, and what our clients say about the work.",
};

/** Initials for a customer mark, standing in until real logos arrive. */
function monogram(name: string) {
  const words = name.split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

/**
 * Sector tabs carry their industries by slug; resolve them here so the names
 * and summaries stay written once, in `industries`.
 */
const panels: SectorPanel[] = sectorTabs.map((sector) => ({
  ...sector,
  items: sector.industrySlugs.flatMap((slug) => {
    const industry = industries.find((item) => item.slug === slug);
    return industry ? [{ name: industry.name, summary: industry.summary }] : [];
  }),
}));

const [governmentGroup, commercialGroup] = customerGroups;

export default function V2Customers() {
  return (
    <>
      <PageHero
        eyebrow="Customers & past performance"
        title="Delivered for agencies"
        accent="and enterprises"
        lead="Tanvi IT supports Federal, state and local government alongside commercial organizations — with the same delivery practices behind each engagement."
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <V2Button href="/v2/capabilities">What we deliver</V2Button>
          <V2Button href="/v2/contact" variant="outline-dark">
            Request past performance
          </V2Button>
        </div>
      </PageHero>

      <Band id="mission-areas">
        <BandHeading
          eyebrow="Who we serve"
          title="Four sectors, one standard of delivery"
          lead="Pick the sector you buy for and see the areas we work in, the systems we touch and what an engagement there tends to involve."
        />
        <div className="mt-12">
          <V2Tabs
            panels={panels}
            action={<V2Button href="/v2/capabilities">See the capabilities behind this</V2Button>}
          />
        </div>
      </Band>

      <Band motif tone="tint" id="customers">
        <BandHeading
          eyebrow="Customers"
          title="Organizations that have trusted us with delivery"
          lead="Government programs and the systems integrators who put us in front of their own clients."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1.9fr] lg:gap-6">
          {/* The government customer carries the page, so it gets the filled
              card rather than a slot in the same grid as the rest. */}
          <Reveal className="h-full">
            <div className="flex h-full flex-col justify-between gap-10 rounded-2xl bg-navy-950 p-8 text-white">
              <div>
                <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-flame-400">
                  {governmentGroup.heading}
                </span>
                {governmentGroup.customers.map((customer) => (
                  <div key={customer.name} className="mt-8">
                    <p className="font-display text-4xl font-semibold tracking-[-0.03em] text-white">
                      {customer.name}
                    </p>
                    {customer.detail ? (
                      <p className="mt-3 text-base leading-relaxed text-white/80">
                        {customer.detail}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
              <MoreLink href="/v2/contract-vehicles" onDark>
                How to buy from us
              </MoreLink>
            </div>
          </Reveal>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-navy-700">
              {commercialGroup.heading}
            </h3>
            <RevealGroup
              className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
              stagger={0.04}
            >
              {commercialGroup.customers.map((customer) => (
                <RevealItem key={customer.name} className="h-full">
                  <div className="group flex h-full flex-col items-center justify-center gap-3 rounded-xl border border-navy-200 bg-white px-4 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-flame-500 hover:shadow-[0_18px_40px_-24px_rgb(6_26_46/0.35)]">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-50 font-display text-sm font-semibold text-navy-800 transition-colors duration-300 group-hover:bg-flame-600 group-hover:text-white">
                      {monogram(customer.name)}
                    </span>
                    <span className="font-display text-base font-semibold leading-snug text-navy-900">
                      {customer.name}
                    </span>
                    {customer.detail ? (
                      <span className="text-[13px] leading-snug text-fg-subtle">
                        {customer.detail}
                      </span>
                    ) : null}
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
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

      <Band tone="dark" id="testimonials">
        <BandHeading
          onDark
          eyebrow="Client testimonials"
          title="What our clients say"
          lead="From the integrators and programs that have worked alongside our teams."
        />
        <RevealGroup className="mt-12 grid gap-5 lg:grid-cols-3" stagger={0.08}>
          {testimonials.map((testimonial) => (
            <RevealItem key={testimonial.company} className="h-full">
              <figure className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-flame-500/50">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt=""
                    fill
                    quality={85}
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                  {/* Deep enough that the quote mark reads against any frame. */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/55 to-navy-950/20"
                    aria-hidden
                  />
                  <Quote
                    className="absolute bottom-5 left-7 h-9 w-9 text-flame-400 transition-transform duration-300 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <blockquote className="flex-1 text-[17px] leading-[1.65] text-white/90">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-display text-sm font-semibold text-white">
                      {testimonial.initials}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-white">
                        {testimonial.author}
                      </span>
                      <span className="block text-sm text-white/70">{testimonial.company}</span>
                    </span>
                  </figcaption>
                </div>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </Band>

      <Band tone="tint">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <BandHeading
            title="Looking for past performance detail?"
            lead="We can provide program references, scope summaries and a capability statement on request."
          />
          <V2Button href="/v2/contact">Contact us</V2Button>
        </div>
      </Band>
    </>
  );
}
