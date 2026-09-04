import { Target, Trophy, Users2, Wrench } from "lucide-react";
import { whyUs } from "@/lib/site-content";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const icons = [Trophy, Wrench, Users2, Target];

export function WhyUs({
  columns = 2,
  tone = "light",
}: {
  columns?: 1 | 2;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <RevealGroup
      className={`grid grid-cols-1 gap-5 ${columns === 2 ? "sm:grid-cols-2" : ""}`}
      stagger={0.08}
    >
      {whyUs.map((item, i) => {
        const Icon = icons[i] ?? Target;
        return (
          <RevealItem key={item.title} className="h-full">
            <div
              className={`group/w relative flex h-full gap-4 overflow-hidden rounded-card border p-6 transition-all duration-300 ${
                dark
                  ? "border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] hover:-translate-y-1 hover:border-gold-400/50"
                  : "border-line bg-gradient-to-b from-surface to-surface-muted hover:-translate-y-1 hover:border-gold-300 hover:shadow-elevated-lg"
              }`}
            >
              <span
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold-400/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover/w:opacity-100"
                aria-hidden
              />
              <span
                className={`relative mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-control shadow-sm transition-transform duration-300 group-hover/w:scale-110 group-hover/w:-rotate-3 ${
                  dark
                    ? "border border-white/15 bg-white/10 text-gold-300"
                    : "bg-gradient-to-br from-ink-900 to-ink-700 text-gold-300"
                }`}
              >
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <div className="relative">
                <h3
                  className={`font-display text-lg font-semibold tracking-tight ${
                    dark ? "text-white" : "text-fg"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    dark ? "text-slate-200" : "text-fg-muted"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
