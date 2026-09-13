import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { certifications, mainNav, services, siteConfig, techExpertise } from "@/lib/site-content";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

const industryLinks = mainNav.find((item) => item.href === "/industries")?.menu ?? [];
const companyLinks = mainNav.filter((item) => !item.menu && item.href !== "/");

const columns = [
  {
    title: "Services",
    links: services.map((s) => ({ label: s.name, href: `/services#${s.slug}` })),
  },
  {
    title: "Technology",
    links: techExpertise.map((t) => ({ label: t.area, href: "/services#it-consulting" })),
  },
  {
    title: "Industries",
    links: industryLinks.map(({ label, href }) => ({ label, href })),
  },
  {
    title: "Company",
    links: companyLinks.map(({ label, href }) => ({ label, href })),
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-deep-900 text-white">
      <Container className="pb-10 pt-16 sm:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-2xl font-medium leading-tight tracking-[-0.02em] sm:text-[1.75rem]">
              Let&rsquo;s talk talent
              <br />
              &amp; technology
            </h2>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group mt-6 flex max-w-sm items-center justify-between gap-4 rounded-full border border-white/15 bg-white/5 py-1.5 pl-5 pr-1.5 text-sm text-white/80 transition-colors hover:border-gold-400/60 hover:text-white"
            >
              {siteConfig.email}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 text-deep-950 transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" aria-hidden />
              </span>
            </a>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold text-white">{col.title}</h3>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 transition-colors hover:text-gold-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="dark" />
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold">Headquarters</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold">Certifications &amp; accreditations</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70"
                >
                  {cert.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>IT Services &amp; Consulting since 2008</p>
        </div>
      </Container>
    </footer>
  );
}
