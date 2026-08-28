import { Code2 } from "lucide-react";
import { services, type ServiceItem } from "@/lib/site-content";
import { serviceIcons } from "@/lib/service-icons";
import { Card } from "@/components/ui/Card";
import { CircleArrowLink } from "@/components/ui/CircleArrowLink";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export function ServicesGrid({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.07}>
      {items.map((service) => (
        <RevealItem key={service.slug}>
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
      <h3 className="mt-4 font-display text-lg font-semibold text-ink-900">
        {service.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{service.summary}</p>
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-sm font-semibold text-ink-900">Learn more</span>
        <CircleArrowLink href={`/services#${service.slug}`} label={`Learn more about ${service.name}`} />
      </div>
    </Card>
  );
}
