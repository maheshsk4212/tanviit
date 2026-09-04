import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  BadgeCheck,
  Building2,
  Clock,
  FileCheck,
  Landmark,
  ShieldCheck,
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
  dark,
}: {
  items: typeof contractVehicles;
  label: string;
  icon: LucideIcon;
  dark: boolean;
}) {
  return (
    <div>
      <p
        className={`flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] ${
          dark ? "text-gold-400" : "text-gold-600"
        }`}
      >
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-full ${
            dark ? "bg-gold-500/15" : "bg-gold-50"
          }`}
        >
          <Icon className="h-3.5 w-3.5" aria-hidden />
        </span>
        {label}
      </p>
      {/* Gradient hairline instead of a flat 1px rule. */}
      <div
        className={`mt-3 h-px bg-gradient-to-r to-transparent ${
          dark ? "from-white/25" : "from-line-strong"
        }`}
        aria-hidden
      />
      <RevealGroup className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2" stagger={0.04}>
        {items.map((v) => (
          <RevealItem key={v.name}>
            <div
              className={`group/v relative h-full overflow-hidden rounded-card border p-4 pl-5 transition-all duration-300 ${
                dark
                  ? "border-white/10 bg-white/[0.04] hover:-translate-y-0.5 hover:border-gold-400/50 hover:bg-white/[0.08]"
                  : "border-line bg-gradient-to-br from-surface to-surface-muted hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-elevated"
              }`}
            >
              {/* Accent rail that fills in on hover. */}
              <span
                className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gradient-to-b from-gold-300 to-gold-600 transition-transform duration-300 ease-out group-hover/v:scale-y-100"
                aria-hidden
              />
              <p
                className={`font-display text-sm font-semibold ${
                  dark ? "text-white" : "text-fg"
                }`}
              >
                {v.name}
              </p>
              <p
                className={`mt-1 text-xs leading-relaxed ${
                  dark ? "text-slate-300" : "text-fg-subtle"
                }`}
              >
                {v.detail}
              </p>
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
              <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {featured.name}
              </h3>
              <p className="mt-2 text-sm text-slate-200">{featured.detail}</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-transform duration-300 group-hover:-translate-y-0.5">
              View contract details
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </span>
          </div>
        </Link>
      </RevealItem>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <VehicleList
          items={federal}
          label="Federal-wide vehicles"
          icon={Landmark}
          dark={dark}
        />
        <VehicleList
          items={coops}
          label="State, local & cooperative"
          icon={Building2}
          dark={dark}
        />
      </div>

      {/* Achievements — a rich dark panel so the numbers carry real weight
          instead of sitting in flat white boxes. */}
      <div className="relative mt-14 overflow-hidden rounded-card mesh-dark p-8 sm:p-10">
        <div className="absolute inset-0 grid-overlay opacity-40" aria-hidden />
        <div
          className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gold-500/15 blur-3xl"
          aria-hidden
        />
        <RevealGroup
          className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          stagger={0.06}
        >
          {achievements.map((a, i) => {
            const Icon = achievementIcons[i] ?? Trophy;
            return (
              <RevealItem key={a.value + a.label.slice(0, 12)} className="h-full">
                <div className="group/a flex h-full flex-col">
                  <span className="flex h-11 w-11 items-center justify-center rounded-control border border-white/15 bg-white/10 text-gold-300 backdrop-blur transition-all duration-300 group-hover/a:scale-110 group-hover/a:border-gold-300/50">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="text-gradient-gold mt-5 font-display text-5xl font-semibold leading-none tracking-tight sm:text-6xl">
                    {a.value}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{a.label}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>

      {/* Certifications — seal-style badges rather than a plain bullet list. */}
      <div className="mt-8">
        <p
          className={`flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] ${
            dark ? "text-gold-400" : "text-gold-600"
          }`}
        >
          <span
            className={`flex h-7 w-7 items-center justify-center rounded-full ${
              dark ? "bg-gold-500/15" : "bg-gold-50"
            }`}
          >
            <Award className="h-3.5 w-3.5" aria-hidden />
          </span>
          Certifications &amp; trusted standards
        </p>
        <RevealGroup
          className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.04}
        >
          {certifications.map((c) => (
            <RevealItem key={c.name}>
              <div
                className={`group/c flex h-full items-center gap-4 rounded-card border p-4 transition-all duration-300 ${
                  dark
                    ? "border-white/10 bg-white/[0.04] hover:border-gold-400/50"
                    : "border-line bg-gradient-to-br from-surface to-surface-muted hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-elevated"
                }`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-ink-950 shadow-sm transition-transform duration-300 group-hover/c:scale-110">
                  <ShieldCheck className="h-5 w-5" aria-hidden />
                </span>
                <span>
                  <span
                    className={`block font-display text-sm font-semibold ${
                      dark ? "text-white" : "text-fg"
                    }`}
                  >
                    {c.name}
                  </span>
                  <span
                    className={`block text-xs ${dark ? "text-slate-300" : "text-fg-subtle"}`}
                  >
                    {c.detail}
                  </span>
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </div>
  );
}
