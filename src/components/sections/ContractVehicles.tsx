import Link from "next/link";
import { Award, FileCheck, ShieldCheck, Trophy } from "lucide-react";
import { achievements, certifications, contractVehicles } from "@/lib/site-content";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const achievementIcons = [Trophy, FileCheck, Award, ShieldCheck];

export function ContractVehicles({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";

  const card = dark
    ? "border-white/10 bg-white/5 hover:border-gold-400/40 hover:bg-white/10"
    : "border-slate-200 bg-white hover:border-gold-300 hover:shadow-elevated";
  const title = dark ? "text-white" : "text-ink-900";
  const detail = dark ? "text-slate-400" : "text-slate-500";

  return (
    <div>
      <RevealGroup
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        stagger={0.04}
      >
        {contractVehicles.map((v) => {
          const body = (
            <>
              <p className={`font-display text-sm font-bold ${title}`}>{v.name}</p>
              <p className={`mt-1 text-xs leading-relaxed ${detail}`}>{v.detail}</p>
            </>
          );
          return (
            <RevealItem key={v.name}>
              {v.href ? (
                <Link
                  href={v.href}
                  className={`block h-full rounded-card border p-4 transition-all duration-300 ${card}`}
                >
                  {body}
                  <span className="mt-2 inline-block text-xs font-semibold text-gold-600">
                    View contract details &rarr;
                  </span>
                </Link>
              ) : (
                <div className={`h-full rounded-card border p-4 transition-all duration-300 ${card}`}>
                  {body}
                </div>
              )}
            </RevealItem>
          );
        })}
      </RevealGroup>

      {/* Achievements */}
      <RevealGroup
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        stagger={0.06}
      >
        {achievements.map((a, i) => {
          const Icon = achievementIcons[i] ?? Trophy;
          return (
            <RevealItem key={a.value + a.label.slice(0, 12)}>
              <div
                className={`flex h-full gap-3.5 rounded-card border p-5 ${
                  dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-white"
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-control ${
                    dark ? "bg-gold-500/15 text-gold-300" : "bg-gold-50 text-gold-600"
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className={`font-display text-2xl font-bold ${title}`}>{a.value}</p>
                  <p className={`mt-1 text-xs leading-relaxed ${detail}`}>{a.label}</p>
                </div>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>

      {/* Certifications */}
      <div className={`mt-10 rounded-card border p-6 ${dark ? "border-white/10 bg-white/5" : "border-slate-200 bg-slate-50"}`}>
        <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">
          Certifications &amp; trusted standards
        </p>
        <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <li key={c.name} className="flex items-baseline gap-2">
              <span className={`text-sm font-bold ${title}`}>{c.name}</span>
              <span className={`text-xs ${detail}`}>{c.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
