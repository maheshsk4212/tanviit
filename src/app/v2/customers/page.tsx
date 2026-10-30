import type { Metadata } from "next";
import { Band, BandHeading, PageHero, V2Button } from "@/components/v2/V2Section";
import { industries, testimonials } from "@/lib/site-content";
import { customerGroups } from "@/lib/v2-content";

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
                  className="flex h-24 flex-col items-center justify-center rounded-xl border border-navy-200 bg-white px-4 text-center"
                >
                  <span className="font-display text-base font-semibold text-navy-900">
                    {customer.name}
                  </span>
                  {customer.detail ? (
                    <span className="mt-1 text-[13px] leading-snug text-fg-subtle">
                      {customer.detail}
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Band>

      <Band tone="tint" id="mission-areas">
        <BandHeading
          eyebrow="Mission areas"
          title="Where we work"
          lead="The sectors our teams know, so an engagement starts with the constraints already understood."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <li
              key={industry.slug}
              className="rounded-2xl border border-navy-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-flame-500 hover:shadow-[0_18px_40px_-24px_rgb(6_26_46/0.35)]"
            >
              <h3 className="font-display text-lg font-semibold text-navy-900">{industry.name}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-fg">{industry.summary}</p>
            </li>
          ))}
        </ul>
      </Band>

      <Band id="testimonials">
        <BandHeading eyebrow="Client testimonials" title="What our clients say" />
        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <li
              key={testimonial.company}
              className="flex h-full flex-col rounded-2xl border border-navy-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-flame-500 hover:shadow-[0_18px_40px_-24px_rgb(6_26_46/0.35)]"
            >
              <blockquote className="flex-1 text-[17px] leading-[1.65] text-fg">
                “{testimonial.quote}”
              </blockquote>
              <p className="mt-6 text-sm font-semibold text-fg">{testimonial.author}</p>
              <p className="text-sm text-fg-subtle">{testimonial.company}</p>
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
