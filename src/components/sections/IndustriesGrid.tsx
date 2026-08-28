import {
  Banknote,
  HeartPulse,
  Landmark,
  RadioTower,
  ShoppingBag,
  Umbrella,
  type LucideIcon,
} from "lucide-react";
import { industries } from "@/lib/site-content";
import { Card } from "@/components/ui/Card";
import { CircleArrowLink } from "@/components/ui/CircleArrowLink";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const icons: Record<string, LucideIcon> = {
  "federal-government": Landmark,
  "financial-services": Banknote,
  healthcare: HeartPulse,
  insurance: Umbrella,
  telecommunications: RadioTower,
  "retail-consumer": ShoppingBag,
};

export function IndustriesGrid({ limit }: { limit?: number }) {
  const items = limit ? industries.slice(0, limit) : industries;

  return (
    <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
      {items.map((industry) => {
        const Icon = icons[industry.slug] ?? Landmark;
        return (
          <RevealItem key={industry.slug}>
            <Card id={industry.slug} className="flex h-full scroll-mt-24 flex-col">
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-control bg-orange-50 text-orange-600 transition-transform duration-300 group-hover/card:scale-110 group-hover/card:-rotate-3">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <CircleArrowLink
                  href="/contact"
                  label={`Talk to us about ${industry.name}`}
                  tone="light"
                />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">
                {industry.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {industry.summary}
              </p>
            </Card>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
