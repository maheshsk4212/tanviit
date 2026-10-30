import type { Metadata } from "next";
import { Band, BandHeading, PageHero, V2Button } from "@/components/v2/V2Section";
import { clients, industries, testimonials } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Customers & past performance",
  description:
    "Agencies and enterprises Tanvi IT supports, the mission areas we work in, and what clients say about the work.",
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
          lead="NEEDS-CONTENT: these are the client names carried over from the current site. Federal customers and projects — MHBE among them — should be added, and each logo needs permission to display before it replaces a wordmark."
        />
        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((client) => (
            <li
              key={client}
              className="flex h-24 items-center justify-center rounded-lg border border-brass-100 bg-brass-50 px-4 text-center"
            >
              <span className="font-display text-base font-semibold text-ink-950">{client}</span>
            </li>
          ))}
        </ul>
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
              className="rounded-xl border border-brass-100 bg-white p-7"
            >
              <h3 className="font-display text-lg font-semibold text-fg">{industry.name}</h3>
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
              className="flex h-full flex-col rounded-xl border border-brass-100 bg-white p-7"
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
            lead="We can provide programme references, scope summaries and a capability statement on request."
          />
          <V2Button href="/v2/contact" variant="outline-dark">
            Contact us
          </V2Button>
        </div>
      </Band>
    </>
  );
}
