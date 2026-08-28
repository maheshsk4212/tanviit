import {
  Banknote,
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Landmark as StateHouse,
  RadioTower,
  ShieldCheck,
  ShoppingBag,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { industries } from "@/lib/site-content";
import { Card } from "@/components/ui/Card";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const icons: Record<string, LucideIcon> = {
  "federal-government": Landmark,
  "state-government": StateHouse,
  "local-government": Building2,
  "defense-intelligence": ShieldCheck,
  healthcare: HeartPulse,
  "banking-financial-services": Banknote,
  education: GraduationCap,
  "energy-utilities": Zap,
  "retail-ecommerce": ShoppingBag,
  telecommunications: RadioTower,
};

export function IndustriesGrid({ limit }: { limit?: number }) {
  const items = limit ? industries.slice(0, limit) : industries;

  return (
    <RevealGroup
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
      stagger={0.05}
    >
      {items.map((industry) => {
        const Icon = icons[industry.slug] ?? Landmark;
        return (
          <RevealItem key={industry.slug}>
            <Card id={industry.slug} className="flex h-full scroll-mt-24 flex-col">
              <span className="flex h-11 w-11 items-center justify-center rounded-control bg-gold-50 text-gold-600 transition-transform duration-300 group-hover/card:scale-110 group-hover/card:-rotate-3">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-ink-900">
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
