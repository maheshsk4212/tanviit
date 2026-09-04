import { Award, Building2, CalendarCheck, Users } from "lucide-react";
import { stats } from "@/lib/site-content";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const icons = [CalendarCheck, Users, Building2, Award];

/**
 * The trust bar directly under the hero — the first proof point a visitor
 * sees, so the numbers are large and in true black rather than small and grey.
 */
export function StatsBar() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface-muted">
      <div
        className="absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-gold-400/10 blur-3xl"
        aria-hidden
      />
      <Container className="relative py-14 sm:py-16">
        <RevealGroup
          className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4"
          stagger={0.08}
        >
          {stats.map((stat, i) => {
            const Icon = icons[i] ?? Award;
            return (
              <RevealItem
                key={stat.label}
                className={`group/s flex flex-col items-center text-center ${
                  i > 0 ? "sm:border-l sm:border-line" : ""
                }`}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-control bg-gradient-to-br from-ink-900 to-ink-700 text-gold-300 shadow-elevated transition-transform duration-300 group-hover/s:scale-110 group-hover/s:-rotate-3">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <p className="mt-5 font-display text-5xl font-semibold leading-none tracking-tight text-fg sm:text-6xl">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="mt-3 text-sm font-medium text-fg-muted">{stat.label}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
