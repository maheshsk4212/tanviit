import { Award, Gauge, Handshake, ShieldCheck, Target, Users, type LucideIcon } from "lucide-react";
import { whyUs } from "@/lib/site-content";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

/* Keyed by title so every reason keeps its own mark (an index list had only
   four icons, which left the last three sharing a fallback). */
const icons: Record<string, LucideIcon> = {
  "Mission-Focused Partnership": Handshake,
  "Proven Expertise": Award,
  "Top 1% Talent Network": Users,
  "Quality You Can Trust": ShieldCheck,
  "Agile & Scalable Solutions": Gauge,
  "Results That Matter": Target,
};

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Reasons to choose Tanvi IT in a hairline-divided panel: solid-gold icon
 * tile, oversized ghost numeral, title, and a gold rule that extends on
 * hover. `columns={1}` lays each reason out as an icon-left row.
 */
export function WhyUs({
  columns = 2,
  tone = "light",
}: {
  columns?: 1 | 2;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  const row = columns === 1;

  return (
    <RevealGroup
      className={`grid grid-cols-1 gap-px overflow-hidden rounded-2xl border ${
        row ? "" : "sm:grid-cols-2"
      } ${dark ? "border-white/10 bg-white/10" : "border-line bg-line"}`}
      stagger={0.06}
    >
      {whyUs.map((item, i) => {
        const Icon = icons[item.title] ?? Target;
        return (
          <RevealItem key={item.title} className={dark ? "bg-deep-900" : "bg-surface"}>
            <div
              className={`group/w relative flex h-full overflow-hidden transition-colors duration-300 ${
                row ? "items-start gap-5 p-6 sm:p-7" : "flex-col p-7 sm:p-8"
              } ${dark ? "hover:bg-white/[0.03]" : "hover:bg-cream-50"}`}
            >
              <span
                className={`pointer-events-none absolute right-5 top-3 font-display text-6xl font-semibold leading-none tracking-[-0.04em] transition-colors duration-300 group-hover/w:text-gold-500/25 ${
                  dark ? "text-white/[0.06]" : "text-deep-900/[0.06]"
                }`}
                aria-hidden
              >
                {pad(i + 1)}
              </span>

              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold-500 text-deep-950 shadow-[0_12px_30px_-10px_rgb(213_155_41/0.75)] transition-transform duration-300 group-hover/w:-translate-y-0.5 group-hover/w:-rotate-6">
                <Icon className="h-7 w-7" strokeWidth={2} aria-hidden />
              </span>

              <div className={`relative ${row ? "pr-12" : "mt-7"}`}>
                <h3
                  className={`font-display text-xl font-medium tracking-[-0.01em] ${
                    dark ? "text-white" : "text-fg"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${dark ? "text-white/70" : "text-fg-muted"}`}
                >
                  {item.description}
                </p>
                <span
                  className="mt-5 block h-px w-10 origin-left bg-gold-500 transition-transform duration-500 group-hover/w:scale-x-[2.5]"
                  aria-hidden
                />
              </div>
            </div>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
