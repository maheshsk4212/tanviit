import { Code2 } from "lucide-react";
import { services, type ServiceItem } from "@/lib/site-content";
import { serviceIcons } from "@/lib/service-icons";
import { Card } from "@/components/ui/Card";
import { CircleArrowLink } from "@/components/ui/CircleArrowLink";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export function ServicesGrid({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;

  // Three columns with the first tile running wide, so an odd count (5
  // services) fills two complete rows instead of stranding one card alone.
  const widenFirst = items.length % 3 === 2;

  return (
    <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
      {items.map((service, i) => (
        <RevealItem
          key={service.slug}
          className={widenFirst && i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
        >
          <ServiceCard service={service} />
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

export function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = serviceIcons[service.slug] ?? Code2;

  return (
    <Card id={service.slug} className="flex h-full scroll-mt-24 flex-col">
      <span className="flex h-11 w-11 items-center justify-center rounded-control bg-gradient-to-br from-ink-800 to-ink-600 text-gold-300 shadow-sm transition-transform duration-300 group-hover/card:scale-110 group-hover/card:rotate-3">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="mt-4 font-display text-lg font-semibold text-fg">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-fg-muted">{service.summary}</p>
      <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
        <span className="text-sm font-semibold text-fg">Learn more</span>
        <CircleArrowLink href={`/services#${service.slug}`} label={`Learn more about ${service.name}`} />
      </div>
    </Card>
  );
}
