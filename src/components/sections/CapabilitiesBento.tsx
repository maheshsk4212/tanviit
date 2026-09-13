import { ArrowRight, BriefcaseBusiness, Repeat, UserCheck, Users, Workflow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site-content";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const icons: Record<string, typeof Users> = {
  "contract-staffing": Users,
  "direct-hire": UserCheck,
  "contract-to-hire": Repeat,
  "rpo-solutions": Workflow,
  "it-consulting": BriefcaseBusiness,
};

/* Bento rhythm on the 4-column grid: row one 1·1·2, row two 2·2. The last
   tile spans both columns at sm so it never sits alone at half width. */
const spans = [
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
  "lg:col-span-2",
  "sm:col-span-2 lg:col-span-2",
];

/** Image tiles for each service; the summary slides up on hover (always shown on touch). */
export function CapabilitiesBento() {
  return (
    <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service, i) => {
        const Icon = icons[service.slug] ?? BriefcaseBusiness;
        return (
          <RevealItem key={service.slug} className={spans[i] ?? ""}>
            <Link
              href={`/services#${service.slug}`}
              className="group relative isolate flex h-72 flex-col justify-between overflow-hidden rounded-xl bg-deep-900 p-6 text-white lg:h-[21rem]"
            >
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                className="-z-20 object-cover opacity-70 transition-transform duration-700 ease-out [filter:saturate(0.5)] group-hover:scale-105"
              />
              <div
                className="absolute inset-0 -z-10 bg-gradient-to-t from-deep-950 via-deep-950/55 to-deep-950/20"
                aria-hidden
              />
              <Icon className="h-7 w-7 text-gold-400" strokeWidth={1.75} aria-hidden />
              <div>
                <h3 className="font-display text-xl font-medium tracking-[-0.01em]">{service.name}</h3>
                <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] lg:group-focus-visible:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="max-w-sm pt-2 text-sm leading-relaxed text-white/75">
                      {service.summary}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-gold-300">
                      Explore more
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
