import Link from "next/link";
import Image from "next/image";
import { capabilities, v2Certifications, v2Site } from "@/lib/v2-content";

const columns = [
  {
    heading: "Capabilities",
    items: capabilities.slice(0, 5).map((c) => ({ label: c.name, href: "/v2/capabilities" })),
  },
  {
    heading: "Contract vehicles",
    items: [
      { label: "NASA SEWP VI", href: "/v2/contract-vehicles/sewp-vi" },
      { label: "GSA MAS", href: "/v2/contract-vehicles#gsa-mas" },
      { label: "8(a) STARS III", href: "/v2/contract-vehicles#stars-iii" },
      { label: "All vehicles & NAICS", href: "/v2/contract-vehicles" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About", href: "/v2/about" },
      { label: "Leadership", href: "/v2/about#leadership" },
      { label: "Customers", href: "/v2/customers" },
      { label: "News", href: "/v2/news" },
      { label: "Careers", href: "/v2/careers" },
      { label: "Contact", href: "/v2/contact" },
    ],
  },
];

/** Light footer: the page ends on paper, not on a dark slab. */
export function V2Footer() {
  return (
    <footer className="border-t border-navy-100 bg-navy-50 text-fg">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_repeat(3,1fr)]">
          <div>
            <Image
              src="/tanvi-it-logo@3x.png"
              alt={v2Site.legalName}
              width={167}
              height={43}
              className="h-9 w-auto"
            />
            <address className="mt-5 space-y-1 text-[15px] not-italic text-fg">
              <p>{v2Site.hq}</p>
              <p>
                <a
                  href={`tel:${v2Site.phone.replace(/[^+\d]/g, "")}`}
                  className="hover:text-copper-700 hover:underline"
                >
                  {v2Site.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${v2Site.email}`}
                  className="hover:text-copper-700 hover:underline"
                >
                  {v2Site.email}
                </a>
              </p>
            </address>
            <p className="mt-5 text-[15px] font-semibold text-copper-700">{v2Site.tagline}</p>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-copper-700">
                {column.heading}
              </h2>
              <ul className="mt-3 space-y-1">
                {column.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="-my-1 inline-block py-1.5 text-[15px] text-fg hover:text-copper-700 hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-navy-100 pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-copper-700">
            Certifications &amp; credentials
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {v2Certifications.map((cert) => (
              <li
                key={cert.name}
                className="rounded-md border border-navy-100 bg-white px-3 py-1.5 text-sm font-medium text-fg"
              >
                {cert.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-navy-100 pt-6 text-sm text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {v2Site.legalName} All rights reserved.
          </p>
          <p>
            Second design.{" "}
            <Link href="/" className="underline hover:text-copper-700">
              View the original
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
