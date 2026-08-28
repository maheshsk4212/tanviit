import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  Building2,
  Clock,
  FileCheck,
  Landmark,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";
import { achievements, certifications, contractVehicles } from "@/lib/site-content";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const achievementIcons = [Trophy, FileCheck, Clock, Users];

/** Federal-wide vehicles read differently from co-ops; group them so the list scans. */
const COOPERATIVES = new Set([
  "HGACBuy",
  "NASPO ValuePoint",
  "OMNIA Partners",
  "NCPA",
  "Sourcewell",
  "State & Local",
]);

function VehicleList({
  items,
  label,
  icon: Icon,
  chip,
  title,
  detail,
}: {
  items: typeof contractVehicles;
  label: string;
  icon: LucideIcon;
  chip: string;
  title: string;
  detail: string;
}) {
  return (
    <div>
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-600">
        <Icon className="h-3.5 w-3.5" aria-hidden />
        {label}
      </p>
      <RevealGroup className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2" stagger={0.04}>
        {items.map((v) => (
          <RevealItem key={v.name}>
            <div className={`h-full rounded-card border p-4 transition-all duration-300 ${chip}`}>
              <p className={`font-display text-sm font-bold ${title}`}>{v.name}</p>
              <p className={`mt-1 text-xs leading-relaxed ${detail}`}>{v.detail}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}

export function ContractVehicles({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";

  const featured = contractVehicles[0];
  const federal = contractVehicles.slice(1).filter((v) => !COOPERATIVES.has(v.name));
  const coops = contractVehicles.slice(1).filter((v) => COOPERATIVES.has(v.name));

  const title = dark ? "text-white" : "text-ink-900";
  const detail = dark ? "text-slate-400" : "text-slate-500";
  const chip = dark
    ? "border-white/10 bg-white/5 hover:border-gold-400/50 hover:bg-white/10"
    : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-elevated";

  return (
    <div>
      {/* Featured: the newest and most specific award */}
      <RevealItem>
        <Link
          href={featured.href ?? "/sewp-vi"}
          className="group relative block overflow-hidden rounded-card border border-gold-500/40 bg-gradient-to-br from-ink-900 via-ink-950 to-ink-900 p-8 transition-all duration-300 hover:border-gold-400 sm:p-10"
        >
          <div className="absolute inset-0 grid-overlay opacity-50" aria-hidden />
          <div
            className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold-500/20 blur-3xl transition-opacity duration-500 group-hover:opacity-150"
            aria-hidden
          />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-300">
                <BadgeCheck className="h-3.5 w-3.5" aria-hidden />
                Newest award
              </p>
              <h3 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
                {featured.name}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{featured.detail}</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform duration-300 group-hover:-translate-y-0.5">
              View contract details
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </span>
          </div>
        </Link>
      </RevealItem>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <VehicleList
          items={federal}
          label="Federal-wide vehicles"
          icon={Landmark}
          chip={chip}
          title={title}
          detail={detail}
        />
        <VehicleList
          items={coops}
          label="State, local & cooperative"
          icon={Building2}
          chip={chip}
          title={title}
          detail={detail}
        />
      </div>

      {/* Achievements */}
      <RevealGroup
        className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4"
        stagger={0.06}
      >
        {achievements.map((a, i) => {
          const Icon = achievementIcons[i] ?? Trophy;
          return (
            <RevealItem key={a.value + a.label.slice(0, 12)} className="h-full">
              <div className="flex h-full flex-col bg-white p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-control bg-gold-50 text-gold-600">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-4 font-display text-3xl font-bold text-ink-900">{a.value}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{a.label}</p>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>

      {/* Certifications */}
      <div className="mt-8 rounded-card border border-slate-200 bg-white p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-600">
          <Award className="h-3.5 w-3.5" aria-hidden />
          Certifications &amp; trusted standards
        </p>
        <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c) => (
            <li key={c.name} className="flex items-start gap-3">
              <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden />
              <span>
                <span className="block text-sm font-bold text-ink-900">{c.name}</span>
                <span className="block text-xs text-slate-500">{c.detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
