import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Clock,
  CodeXml,
  FileCheck,
  Headset,
  Landmark,
  LockKeyhole,
  ServerCog,
  ShieldCheck,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";
import { achievements, certifications, contractVehicles } from "@/lib/site-content";
import { Chip } from "@/components/ui/Chip";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const achievementIcons = [Trophy, FileCheck, Clock, Users];

/* One mark per standard, so the grid doesn't read as six copies of a badge. */
const certificationIcons: Record<string, LucideIcon> = {
  "ISO 9001:2015": BadgeCheck,
  "ISO/IEC 20000-1:2018": ServerCog,
  "ISO/IEC 27001:2013": LockKeyhole,
  "CMMI-DEV L3": CodeXml,
  "CMMI-SVC L3": Headset,
  "8(a)": Landmark,
};

/* Four copies: the marquee slides by half its track (two copies, ~2,600px),
   which must be wider than the container for the loop to stay seamless. */
const badgeTrack = [...certifications, ...certifications, ...certifications, ...certifications];

/** Circular seal: scope set around the ring, mark and standard in the centre. */
function CertificationBadge({
  name,
  detail,
  icon: Icon,
  ringId,
  dark,
}: {
  name: string;
  detail: string;
  icon: LucideIcon;
  /** Unique per rendered badge — the ring text follows this path by id. */
  ringId: string;
  dark: boolean;
}) {
  // Keep every ring similarly dense (42–52 characters): repeat the scope while
  // another copy still fits, and top up a lone long scope with "Certified".
  const unit = `${detail} • `;
  let ring = unit;
  while (ring.length + unit.length <= 52) ring += unit;
  if (ring.length < 40) ring += "Certified • ";
  ring = ring.toUpperCase();

  return (
    <div className="group/b relative h-44 w-44 shrink-0">
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden>
        <circle cx="100" cy="100" r="97" fill="none" strokeWidth="2" className="stroke-gold-500" />
        <circle
          cx="100"
          cy="100"
          r="72"
          strokeWidth="1"
          strokeDasharray="3 4"
          className={dark ? "fill-white/5 stroke-gold-400/60" : "fill-cream-50 stroke-gold-500/60"}
        />
        <g className="origin-center transition-transform duration-700 ease-out group-hover/b:rotate-[40deg]">
          <path
            id={ringId}
            d="M 100,100 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0"
            fill="none"
          />
          <text
            className={`font-display text-[11px] font-semibold ${
              dark ? "fill-white/70" : "fill-deep-900/70"
            }`}
          >
            {/* Stretch to the full circumference (2π·85 ≈ 534) so the ring closes. */}
            <textPath href={`#${ringId}`} textLength={530} lengthAdjust="spacing">
              {ring}
            </textPath>
          </text>
        </g>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center">
        <Icon
          className={`h-6 w-6 ${dark ? "text-gold-400" : "text-gold-600"}`}
          strokeWidth={1.75}
          aria-hidden
        />
        <p
          className={`mt-2 text-balance font-display text-[15px] font-semibold leading-tight tracking-[-0.01em] ${
            dark ? "text-white" : "text-deep-900"
          }`}
        >
          {name}
          <span className="sr-only">, {detail}</span>
        </p>
      </div>
    </div>
  );
}

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

export function ContractVehicles({
  tone = "light",
  showAchievements = true,
}: {
  tone?: "light" | "dark";
  /** Off on the homepage, where "Proven results" already carries the numbers
      — repeating the same figures twice on one page reads as padding. */
  showAchievements?: boolean;
}) {
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
      {showAchievements ? (
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
      ) : null}

      {/* Certifications — seal badges on an auto-scrolling strip that pauses
          on hover. Only the first copy is exposed to assistive tech; with
          reduced motion the strip stops and scrolls by hand instead. */}
      <div className="mt-16">
        <Chip tone={dark ? "dark" : "light"}>Certifications &amp; trusted standards</Chip>
        <h3
          className={`mt-4 max-w-2xl text-balance font-display text-2xl font-medium leading-tight tracking-[-0.02em] sm:text-3xl ${
            dark ? "text-white" : "text-fg"
          }`}
        >
          The process maturity mission-critical programs require.
        </h3>
        <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)] motion-reduce:overflow-x-auto">
          <ul className="animate-marquee flex w-max py-2">
            {badgeTrack.map((c, i) => (
              <li
                key={`${c.name}-${i}`}
                aria-hidden={i >= certifications.length}
                className="mr-10"
              >
                <CertificationBadge
                  name={c.name}
                  detail={c.detail}
                  icon={certificationIcons[c.name] ?? ShieldCheck}
                  ringId={`cert-ring-${i}`}
                  dark={dark}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
