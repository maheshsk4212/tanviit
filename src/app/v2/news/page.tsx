import type { Metadata } from "next";
import { Band, BandHeading, MoreLink, PageHero } from "@/components/v2/V2Section";
import { featuredNews } from "@/lib/v2-content";

export const metadata: Metadata = {
  title: "News & insights",
  description: "News from Tanvi IT Solutions, including the award of NASA SEWP VI Category C contract 80TECH26D0642 for IT mission-based services.",
};

export default function V2News() {
  return (
    <>
      <PageHero
        eyebrow="News & insights"
        title="Latest news & insights"
        lead="Contract awards, Federal milestones, certifications, partnerships and company announcements."
      />

      <Band>
        <article className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-navy-700">
            Featured — contract award
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-navy-900 sm:text-4xl">
            {featuredNews.title}
          </h2>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.1em] text-fg-subtle">
            {featuredNews.dateline}
          </p>

          <div className="mt-8 space-y-5 text-[17px] leading-[1.75] text-fg sm:text-lg">
            {featuredNews.body.slice(0, 3).map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="my-10 border-l-4 border-flame-500 py-1 pl-6">
            <p className="font-display text-xl leading-snug text-navy-900 sm:text-2xl">
              “{featuredNews.quote.text}”
            </p>
            <footer className="mt-4 text-[15px] font-semibold text-fg-subtle">
              — {featuredNews.quote.attribution}
            </footer>
          </blockquote>

          <div className="space-y-5 text-[17px] leading-[1.75] text-fg sm:text-lg">
            {featuredNews.body.slice(3).map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-10 grid gap-6 rounded-2xl border border-navy-200 bg-navy-50 p-8 sm:grid-cols-2 transition-all duration-300 hover:-translate-y-1 hover:border-flame-500 hover:shadow-[0_18px_40px_-24px_rgb(6_26_46/0.35)]">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-navy-700">
                Contract number
              </dt>
              <dd className="mt-1.5 text-[17px] text-fg">80TECH26D0642</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-navy-700">
                Contract category
              </dt>
              <dd className="mt-1.5 text-[17px] text-fg">Category C – IT Mission-Based Services</dd>
            </div>
          </dl>

          <div className="mt-8">
            <MoreLink href="/v2/contract-vehicles/sewp-vi">SEWP VI ordering information</MoreLink>
          </div>
        </article>
      </Band>

      {/* NEEDS-CONTENT: the homepage guide asks for a running 2026+ feed of
          awards, certifications, partnerships and events. Only the SEWP VI
          announcement has been supplied so far. */}
      <Band tone="tint">
        <BandHeading
          eyebrow="More announcements"
          title="Further news will be published here"
          lead="Contract awards, certifications, partnerships, events and technology insights from 2026 onward."
        />
      </Band>
    </>
  );
}
