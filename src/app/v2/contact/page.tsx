import type { Metadata } from "next";
import { Band, BandHeading, PageHero } from "@/components/v2/V2Section";
import { V2ContactForm } from "@/components/v2/V2ContactForm";
import { contactPaths, sewpVi, v2Site } from "@/lib/v2-content";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Government, prime contractor and commercial inquiry routes for Tanvi IT Solutions Inc., plus SEWP VI program contacts.",
};

export default function V2Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Start the conversation"
        lead="Tell us the requirement, the vehicle and the timeline — we will come back with the people and the approach."
      />

      <Band tone="tint" id="contact-form">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <BandHeading
            eyebrow="Write to us"
            title="Send us a message"
            lead="For a requirement, a teaming question or a résumé. Tell us what you need and we will route it to the right person."
          />
          <div className="rounded-2xl border border-navy-200 bg-white p-7 sm:p-9">
            <V2ContactForm to={v2Site.email} />
          </div>
        </div>
      </Band>

      <Band>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <BandHeading eyebrow="Inquiry routes" title="How can we help?" />
            <ul className="mt-10 divide-y divide-slate-200 border-y border-navy-200">
              {contactPaths.map((path) => (
                <li key={path.name} className="py-6">
                  <h3 className="font-display text-lg font-semibold text-navy-900">{path.name}</h3>
                  <p className="mt-2 text-[17px] leading-[1.7] text-fg">{path.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-navy-200 bg-navy-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-flame-500 hover:shadow-[0_18px_40px_-24px_rgb(6_26_46/0.35)]">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-navy-700">
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

            <h2 className="mt-10 text-sm font-semibold uppercase tracking-[0.14em] text-navy-700">
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
