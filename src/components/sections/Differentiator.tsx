import { Check, Minus } from "lucide-react";
import { differentiators } from "@/lib/site-content";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export function Differentiator() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-elevated-lg">
      <div className="grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-[1.4fr_1fr_1fr] sm:divide-x sm:divide-y-0">
        <div className="p-6 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            What you get
          </p>
        </div>
        <div className="bg-navy-950 p-6 text-center sm:p-7">
          <p className="font-display text-lg font-bold text-white">Tanvi IT</p>
          <p className="mt-0.5 text-xs text-orange-300">Consulting firm, since 2008</p>
        </div>
        <div className="p-6 text-center sm:p-7">
          <p className="font-display text-lg font-semibold text-slate-500">
            Typical staffing firm
          </p>
          <p className="mt-0.5 text-xs text-slate-400">Resume-forwarding model</p>
        </div>
      </div>

      <RevealGroup className="divide-y divide-slate-100" stagger={0.06}>
        {differentiators.map((row) => (
          <RevealItem key={row.label}>
            <div className="grid grid-cols-1 items-center divide-y divide-slate-100 sm:grid-cols-[1.4fr_1fr_1fr] sm:divide-x sm:divide-y-0">
              <div className="p-5 sm:p-6">
                <p className="text-sm font-medium text-navy-900">{row.label}</p>
              </div>
              <div className="flex items-center justify-center gap-2 bg-navy-50/60 p-5 text-center sm:p-6">
                <Check className="h-4 w-4 shrink-0 text-orange-600" aria-hidden />
                <span className="text-sm font-medium text-navy-800">{row.tanvi}</span>
              </div>
              <div className="flex items-center justify-center gap-2 p-5 text-center sm:p-6">
                <Minus className="h-4 w-4 shrink-0 text-slate-300" aria-hidden />
                <span className="text-sm text-slate-500">{row.others}</span>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
