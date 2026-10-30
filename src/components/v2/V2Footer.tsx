import Link from "next/link";
import { certifications, siteConfig } from "@/lib/site-content";

const columns = [
  {
    heading: "Services",
    items: [
      { label: "Contract staffing", href: "/services#contract-staffing" },
      { label: "Direct hire", href: "/services#direct-hire" },
      { label: "Contract-to-hire", href: "/services#contract-to-hire" },
      { label: "RPO solutions", href: "/services#rpo-solutions" },
      { label: "IT consulting", href: "/services#it-consulting" },
    ],
  },
  {
    heading: "Contract vehicles",
    items: [
      { label: "NASA SEWP VI", href: "/sewp-vi" },
      { label: "GSA MAS", href: "/v2#vehicles" },
      { label: "8(a) STARS III", href: "/v2#vehicles" },
      { label: "All vehicles", href: "/v2#vehicles" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "Who we are", href: "/v2#who-we-are" },
      { label: "Industries", href: "/v2#industries" },
      { label: "Customers", href: "/v2#customers" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function V2Footer() {
  return (
    <footer className="bg-federal-950 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,1fr)]">
          <div>
            <p className="font-display text-xl font-semibold">{siteConfig.legalName}</p>
            <address className="mt-4 space-y-1 text-[15px] not-italic text-federal-100">
              <p>{siteConfig.address}</p>
              <p>
                <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="hover:underline">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className="hover:underline">
                  {siteConfig.email}
                </a>
              </p>
            </address>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-federal-300">
                {column.heading}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-[15px] text-white hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/15 pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-federal-300">
            Certifications &amp; appraisals
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {certifications.map((cert) => (
              <li
                key={cert.name}
                className="rounded-md border border-white/20 px-3 py-1.5 text-sm text-white"
              >
                {cert.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/15 pt-6 text-sm text-federal-100 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName} All rights reserved.
          </p>
          <p>
            Second design.{" "}
            <Link href="/" className="underline hover:text-white">
              View the original
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
