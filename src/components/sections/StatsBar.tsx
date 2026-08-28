import { Award, Building2, CalendarCheck, Users } from "lucide-react";
import { stats } from "@/lib/site-content";
import { Container } from "@/components/ui/Container";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const icons = [CalendarCheck, Users, Building2, Award];

export function StatsBar() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <Container className="py-10">
        <RevealGroup
          className="grid grid-cols-2 gap-8 sm:grid-cols-4"
          stagger={0.08}
        >
          {stats.map((stat, i) => {
            const Icon = icons[i] ?? Award;
            return (
              <RevealItem key={stat.label} className="flex flex-col items-center text-center">
                <span className="mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-600">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <p className="font-display text-3xl font-bold text-navy-900 sm:text-4xl">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
