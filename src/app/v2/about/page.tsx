import type { Metadata } from "next";
import { Band, BandHeading, MoreLink, PageHero, V2Button } from "@/components/v2/V2Section";
import {
  about,
  certificationsIntro,
  jointVenture,
  leadership,
  leadershipIntro,
  v2Certifications,
} from "@/lib/v2-content";

export const metadata: Metadata = {
  title: "About Tanvi IT",
  description: "Tanvi IT Solutions Inc. — a technology and consulting company in Chantilly, VA delivering mission-focused IT since 2008. Leadership, credentials and approach.",
};

export default function V2About() {
  return (
    <>
      <PageHero
        eyebrow={about.hero.eyebrow}
        title={about.hero.headline}
        lead={about.hero.supporting}
      >
        <div className="mt-9 flex flex-wrap gap-3">
          <V2Button href="/v2/capabilities">Our capabilities</V2Button>
          <V2Button href="#leadership" variant="outline-dark">
            Meet our leadership
          </V2Button>
        </div>
      </PageHero>

      {/* ----------------------------------------------------- Who we are */}
      <Band id="overview">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <BandHeading eyebrow="Company overview" title="Who we are" />
          <div className="space-y-5 text-[17px] leading-[1.7] text-fg sm:text-lg">
            {about.overview.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
        <p className="mt-14 border-l-4 border-copper-500 pl-6 font-display text-2xl font-semibold leading-snug tracking-[-0.015em] text-navy-900 sm:text-3xl">
          {about.pullQuote}
        </p>
      </Band>

      {/* ----------------------------------------------------- Our approach */}
      <Band tone="tint" id="approach">
        <BandHeading
          eyebrow="Our approach"
          title="Focused on outcomes. Built on trust."
          lead={about.approachIntro}
        />
        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {about.approach.map((item) => (
            <li
              key={item.name}
              className="rounded-xl border border-navy-100 bg-white p-8"
            >
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-copper-700">
                {item.name}
              </h3>
              <p className="mt-4 text-[17px] leading-[1.7] text-fg">{item.description}</p>
            </li>
          ))}
        </ul>
      </Band>

      {/* -------------------------------------------------------- Why Tanvi */}
      <Band id="why">
        <BandHeading eyebrow="Why Tanvi IT" title="What clients rely on us for" />
        <ul className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {about.whyTanvi.map((item) => (
            <li key={item.name} className="border-t border-navy-100 pt-6">
              <h3 className="font-display text-lg font-semibold text-navy-900">{item.name}</h3>
              <p className="mt-2.5 text-[17px] leading-[1.7] text-fg">{item.description}</p>
            </li>
          ))}
        </ul>
      </Band>

      {/* -------------------------------------------------------- Our story */}
      <Band tone="dark" id="story">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <BandHeading onDark eyebrow="Our story" title="Built to make a difference" />
          <div className="space-y-5 text-[17px] leading-[1.7] text-navy-100 sm:text-lg">
            {about.story.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
        <p className="mt-12 border-t border-white/15 pt-8 font-display text-xl font-semibold tracking-[-0.01em] text-copper-400 sm:text-2xl">
          The Tanvi IT promise — {about.promise}
        </p>
      </Band>

      {/* ------------------------------------------------------- Leadership */}
      <Band id="leadership">
        <BandHeading
          eyebrow="Leadership"
          title="Experienced leadership. Mission-driven direction."
          lead={leadershipIntro}
        />
        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {leadership.map((person) => (
            <li key={person.name} className="rounded-xl border border-navy-100 bg-navy-50 p-8">
              <h3 className="font-display text-xl font-semibold text-navy-900">{person.name}</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-copper-700">
                {person.role}
              </p>
              <p className="mt-5 text-[17px] leading-[1.7] text-fg">{person.bio}</p>
              <h4 className="mt-7 text-sm font-semibold uppercase tracking-[0.12em] text-fg-subtle">
                Areas of leadership
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {person.areas.map((area) => (
                  <li
                    key={area}
                    className="rounded border border-navy-100 bg-white px-2.5 py-1 text-[13px] font-medium text-fg"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Band>

      {/* --------------------------------------------------- Certifications */}
      <Band tone="tint" id="certifications">
        <BandHeading
          eyebrow="Certifications & credentials"
          title="Our commitment to quality, security & continuous improvement"
          lead={certificationsIntro}
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {["Quality & process", "Federal / socioeconomic"].map((group) => (
            <div key={group}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-copper-700">
                {group}
              </h3>
              <ul className="mt-5 space-y-3">
                {v2Certifications
                  .filter((cert) => cert.group === group)
                  .map((cert) => (
                    <li
                      key={cert.name}
                      className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 rounded-lg border border-navy-100 bg-white px-6 py-4"
                    >
                      <span className="font-display text-base font-semibold text-navy-900">
                        {cert.name}
                      </span>
                      <span className="text-[15px] text-fg">{cert.detail}</span>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </Band>

      {/* ------------------------------------------------------------- JV */}
      <Band id="joint-ventures">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <BandHeading eyebrow="Joint ventures" title={jointVenture.name} />
          <div>
            <p className="font-display text-lg font-semibold text-copper-700">
              {jointVenture.partners}
            </p>
            <div className="mt-5 space-y-5 text-[17px] leading-[1.7] text-fg sm:text-lg">
              {jointVenture.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <a
              href={jointVenture.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] text-copper-700 underline-offset-4 hover:underline"
            >
              Learn more about TA Federal
            </a>
          </div>
        </div>
      </Band>

      {/* ---------------------------------------------------------- Closing */}
      <Band tone="dark">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16">
          <BandHeading onDark title={about.closing.headline} lead={about.closing.body} />
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <V2Button href="/v2/capabilities" variant="outline-dark">
              Explore our capabilities
            </V2Button>
            <V2Button href="/v2/careers">Explore careers</V2Button>
          </div>
        </div>
        <div className="mt-10">
          <MoreLink href="/v2/contact" onDark>
            Talk to our team
          </MoreLink>
        </div>
      </Band>
    </>
  );
}
