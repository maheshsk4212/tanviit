import {
  BarChart3,
  Boxes,
  Cloud,
  Code2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { techExpertise } from "@/lib/site-content";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

/** Icon per technology area, matched by name (falls back to a code glyph). */
const techIcons: Record<string, LucideIcon> = {
  "Software Development": Code2,
  "Cloud & DevOps": Cloud,
  "Data & Analytics": BarChart3,
  "Enterprise Solutions": Boxes,
  Cybersecurity: ShieldCheck,
};

/** Shared by the Industries and Services pages — both need the same bench. */
export function TechExpertise() {
  return (
    <RevealGroup
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      stagger={0.06}
    >
      {techExpertise.map((group) => {
        const Icon = techIcons[group.area] ?? Code2;
        return (
          <RevealItem key={group.area} className="h-full">
            <div className="group/t relative flex h-full flex-col overflow-hidden rounded-card border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/50">
              <span
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold-400/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover/t:opacity-100"
                aria-hidden
              />
              <div className="relative flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-control border border-white/15 bg-white/10 text-gold-300 transition-transform duration-300 group-hover/t:scale-110">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tight text-white">
                  {group.area}
                </h3>
              </div>
              <ul className="relative mt-5 flex flex-wrap gap-2">
                {group.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 transition-colors duration-300 hover:border-gold-400/50 hover:bg-gold-500/10 hover:text-gold-200"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
