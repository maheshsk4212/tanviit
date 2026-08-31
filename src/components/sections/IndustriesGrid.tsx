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

export function IndustriesGrid({
  limit,
  columns = 5,
}: {
  limit?: number;
  columns?: 3 | 5;
}) {
  const items = limit ? industries.slice(0, limit) : industries;

  return (
    <RevealGroup
      className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ${
        columns === 5 ? "xl:grid-cols-5" : ""
      }`}
      stagger={0.05}
    >
      {items.map((industry, i) => {
        const Icon = icons[industry.slug] ?? Landmark;
        return (
          <RevealItem key={industry.slug}>
            <div
              id={industry.slug}
              className="group/card relative flex h-full scroll-mt-24 flex-col overflow-hidden rounded-card border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-elevated"
            >
              {/* warm wash that fills in on hover */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-gold-50 via-surface to-surface opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
                aria-hidden
              />
              {/* gold rule that draws across the top on hover */}
              <div
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-gold-300 transition-transform duration-300 ease-out group-hover/card:scale-x-100"
                aria-hidden
              />

              <div className="relative flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-control bg-gradient-to-br from-ink-900 to-ink-700 text-gold-300 shadow-sm transition-transform duration-300 group-hover/card:scale-110 group-hover/card:-rotate-3">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="font-display text-sm font-bold text-fg-subtle transition-colors duration-300 group-hover/card:text-gold-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="relative mt-5 font-display text-base font-bold text-fg">
                {industry.name}
              </h3>
              <p className="relative mt-2 flex-1 text-sm leading-relaxed text-fg-muted">
                {industry.summary}
              </p>
            </div>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
