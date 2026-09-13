import { ArrowUpRight, Banknote, Building2, HeartPulse, Landmark } from "lucide-react";
import Link from "next/link";
import { industries } from "@/lib/site-content";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/Section";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const featured: { slug: string; label?: string; icon: typeof Landmark }[] = [
  { slug: "federal-government", icon: Landmark },
  { slug: "state-government", label: "State & Local", icon: Building2 },
  { slug: "healthcare", icon: HeartPulse },
  { slug: "banking-financial-services", label: "Financial Services", icon: Banknote },
];

const cards = featured.flatMap((f) => {
  const industry = industries.find((i) => i.slug === f.slug);
  return industry ? [{ ...f, name: f.label ?? industry.name, summary: industry.summary }] : [];
});

/** Dark two-column band: heading and action left, hairline-divided industry grid right. */
export function IndustriesSplit() {
  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <SectionHeading
          tone="dark"
          eyebrow="Industries we serve"
          title="Domain expertise. Proven impact."
          description="We deliver tailored IT solutions across a wide range of public and private sector industries."
        />
        <div className="mt-10">
          <Button href="/industries">All industries</Button>
        </div>
      </div>

      <RevealGroup className="grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:col-span-7">
        {cards.map(({ slug, name, summary, icon: Icon }) => (
          <RevealItem key={slug} className="bg-deep-900">
            <Link
              href={`/industries#${slug}`}
              className="group flex h-full flex-col p-7 transition-colors hover:bg-white/[0.03] sm:p-8"
            >
              <Icon className="h-9 w-9 text-gold-400" strokeWidth={1.5} aria-hidden />
              <h3 className="mt-6 font-display text-xl font-medium">{name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{summary}</p>
              <ArrowUpRight
                className="mt-8 h-5 w-5 text-white/60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-300"
                aria-hidden
              />
            </Link>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
