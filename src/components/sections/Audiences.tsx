import { Check } from "lucide-react";
import { audiences } from "@/lib/site-content";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

/** The "For employers / For talent" split from the design deck. */
export function Audiences() {
  return (
    <RevealGroup className="grid grid-cols-1 gap-6 lg:grid-cols-2" stagger={0.1}>
      {audiences.map((a, i) => (
        <RevealItem key={a.eyebrow} className="h-full">
          <div
            className={`flex h-full flex-col rounded-card border p-8 sm:p-10 ${
              i === 0
                ? "border-white/10 bg-white/5 backdrop-blur"
                : "border-gold-500/30 bg-gold-500/10 backdrop-blur"
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-gold-400">
              {a.eyebrow}
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold text-white">{a.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{a.description}</p>

            <ul className="mt-6 flex-1 space-y-2.5">
              {a.points.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-slate-200">
                  <Check className="h-4 w-4 shrink-0 text-gold-400" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>

            <Button
              href={a.cta.href}
              size="lg"
              variant={i === 0 ? "ghost-dark" : "primary"}
              className="mt-8 self-start"
            >
              {a.cta.label}
            </Button>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
