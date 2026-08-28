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
      className={`grid grid-cols-1 gap-8 ${columns === 2 ? "sm:grid-cols-2" : ""}`}
      stagger={0.08}
    >
      {whyUs.map((item, i) => {
        const Icon = icons[i] ?? Target;
        return (
          <RevealItem key={item.title} className="flex gap-4">
            <span
              className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-control ${
                dark
                  ? "border border-white/10 bg-white/5 text-orange-300"
                  : "bg-navy-50 text-navy-700"
              }`}
            >
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <h3
                className={`font-display text-lg font-semibold ${
                  dark ? "text-white" : "text-navy-900"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`mt-1.5 text-sm leading-relaxed ${
                  dark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {item.description}
              </p>
            </div>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
