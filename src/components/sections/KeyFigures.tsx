import { stats } from "@/lib/site-content";
import { Container } from "@/components/ui/Container";

/**
 * Full-width key-figures band. Mustard-to-cream: brand gold on the left,
 * fading to near-white on the right. Text is solid dark rather than
 * translucent so the labels stay readable over the saturated gold end.
 */
export function KeyFigures() {
  return (
    <div className="bg-gradient-to-r from-gold-500 to-cream-50">
      <Container>
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col-reverse py-5 sm:py-6 ${
                i % 2 === 1 ? "border-l border-deep-950/10 pl-6" : ""
              } ${i >= 2 ? "border-t border-deep-950/10 lg:border-t-0" : ""} ${
                i > 0 ? "lg:border-l lg:border-deep-950/10 lg:pl-8" : ""
              }`}
            >
              <dt className="mt-1 text-sm text-deep-900">{stat.label}</dt>
              <dd className="font-display text-2xl font-medium tracking-[-0.02em] text-deep-950 sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </div>
  );
}
