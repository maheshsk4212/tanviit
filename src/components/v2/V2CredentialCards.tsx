import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  GitBranch,
  Headset,
  Landmark,
  Lock,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

/**
 * One icon per credential. The reference puts the real certification badge
 * artwork on each card, which is the better answer — but those marks are
 * licensed and we do not hold the files, so these stand in. The point of
 * giving each its own is that a reader can tell a security certificate from a
 * process appraisal from a socioeconomic status without reading the label.
 */
const icons: Record<string, LucideIcon> = {
  quality: Award,
  service: Headset,
  security: Lock,
  development: GitBranch,
  services: Workflow,
  federal: Landmark,
  ownership: Users,
};

export interface Credential {
  name: string;
  detail: string;
  group: string;
  icon: string;
}

/**
 * Credential cards, built to the reference's proportions: tall, left-ranged,
 * 16px radius, a hairline border and a decorative pattern held in one corner —
 * their `pattern-card` device. Theirs sits flat on the page; ours floats and
 * lifts, which is what was asked for and what the rest of this page's cards
 * already do.
 *
 * The grid is four across and the eighth slot is a link rather than a
 * credential, because seven cards across four columns otherwise leaves a row
 * with a hole in it.
 */
export function V2CredentialCards({
  credentials,
  moreHref,
}: {
  credentials: Credential[];
  moreHref: string;
}) {
  return (
    <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.05}>
      {credentials.map((cert) => {
        const Icon = icons[cert.icon] ?? Award;
        return (
          <RevealItem key={cert.name} className="h-full">
            <article className="group relative flex h-full min-h-[15rem] flex-col overflow-hidden rounded-2xl border border-navy-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-flame-500 hover:shadow-[0_26px_55px_-30px_rgb(6_26_46/0.55)]">
              <CornerPattern />

              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-50 text-flame-600 ring-1 ring-navy-200 transition-all duration-300 group-hover:bg-flame-600 group-hover:text-white group-hover:ring-flame-600">
                <Icon className="h-6 w-6" aria-hidden />
              </span>

              {/* mt-auto drops the text to the foot of the card, so the titles
                  line up across the row however long the descriptions run. */}
              <div className="relative mt-auto pt-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-flame-700">
                  {cert.group}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold leading-tight tracking-[-0.02em] text-fg">
                  {cert.name}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-fg-muted">{cert.detail}</p>
              </div>
            </article>
          </RevealItem>
        );
      })}

      {/* Fills the row and gives the grid somewhere to go. */}
      <RevealItem className="h-full">
        <Link
          href={moreHref}
          className="group relative flex h-full min-h-[15rem] flex-col justify-between overflow-hidden rounded-2xl border border-dashed border-navy-300 bg-navy-50 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-flame-500 hover:bg-white hover:shadow-[0_26px_55px_-30px_rgb(6_26_46/0.55)]"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-navy-200 bg-white text-navy-700 transition-colors duration-300 group-hover:border-flame-600 group-hover:bg-flame-600 group-hover:text-white">
            <ArrowUpRight className="h-6 w-6" aria-hidden />
          </span>
          <span className="mt-auto pt-10">
            <span className="block font-display text-xl font-semibold leading-tight tracking-[-0.02em] text-fg">
              What each one covers
            </span>
            <span className="mt-2 block text-[14px] leading-relaxed text-fg-muted">
              Scope, appraisal dates and the bodies that issued them.
            </span>
          </span>
        </Link>
      </RevealItem>
    </RevealGroup>
  );
}

/**
 * The reference's pattern sits in a corner of each card and is the only
 * ornament on it. Concentric arcs in the brand navy, warming on hover.
 */
function CornerPattern() {
  return (
    <svg
      className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 text-navy-200 transition-colors duration-500 group-hover:text-flame-200"
      viewBox="0 0 160 160"
      fill="none"
      aria-hidden
    >
      <circle cx="110" cy="50" r="34" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="110" cy="50" r="54" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="110" cy="50" r="74" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
