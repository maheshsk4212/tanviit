import type { Metadata } from "next";
import { Band, BandHeading, PageHero } from "@/components/v2/V2Section";
import { contactPaths, sewpVi, v2Site } from "@/lib/v2-content";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Government, prime contractor and commercial enquiry routes for Tanvi IT Solutions Inc., plus SEWP VI program contacts.",
};

export default function V2Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Start the conversation"
        lead="Tell us the requirement, the vehicle and the timeline — we will come back with the people and the approach."
      />

      <Band>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <BandHeading eyebrow="Enquiry routes" title="How can we help?" />
            <ul className="mt-10 divide-y divide-brass-200 border-y border-brass-200">
              {contactPaths.map((path) => (
                <li key={path.name} className="py-6">
                  <h3 className="font-display text-lg font-semibold text-fg">{path.name}</h3>
                  <p className="mt-2 text-[17px] leading-[1.7] text-fg">{path.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-brass-200 bg-brass-50 p-8">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-brass-700">
              Head office
            </h2>
            <address className="mt-4 space-y-1.5 text-[17px] not-italic leading-relaxed text-fg">
              <p>{v2Site.legalName}</p>
              <p>{v2Site.hq}</p>
              <p>
                <a href={`tel:${v2Site.phone.replace(/[^+\d]/g, "")}`} className="hover:underline">
                  {v2Site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${v2Site.email}`} className="hover:underline">
                  {v2Site.email}
                </a>
              </p>
            </address>

            <h2 className="mt-10 text-sm font-semibold uppercase tracking-[0.14em] text-brass-700">
              SEWP VI program contacts
            </h2>
            <ul className="mt-4 space-y-5">
              {sewpVi.managers.slice(0, 2).map((manager) => (
                <li key={manager.role}>
                  <p className="text-[15px] font-semibold text-fg">{manager.name}</p>
                  <p className="text-[15px] text-fg-subtle">{manager.role}</p>
                  <p className="mt-1 text-[15px] text-fg">
                    <a href={`tel:${manager.phone.replace(/[^\d]/g, "")}`} className="hover:underline">
                      {manager.phone}
                    </a>{" "}
                    ·{" "}
                    <a href={`mailto:${manager.email}`} className="hover:underline">
                      {manager.email}
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Band>
    </>
  );
}
