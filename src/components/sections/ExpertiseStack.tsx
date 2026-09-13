import Image from "next/image";
import { techExpertise } from "@/lib/site-content";
import { Button } from "@/components/ui/Button";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Technology areas as full-width cards that stack on scroll (lg+): each card
 * sticks a little lower than the last, so the previous one stays peeking out
 * above it. The image swaps sides card to card.
 */
export function ExpertiseStack() {
  return (
    <div>
      {techExpertise.map((area, i) => (
        <div
          key={area.area}
          className="pb-6 lg:sticky"
          style={{ top: `calc(6rem + ${i * 1.25}rem)` }}
        >
          <article className="grid overflow-hidden rounded-2xl border border-white/5 bg-deep-900 text-white shadow-[0_-16px_40px_-24px_rgb(0_0_0/0.6)] lg:min-h-[32rem] lg:grid-cols-2">
            <div className="flex flex-col p-8 sm:p-10 lg:p-12">
              <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.18em]">
                <span className="text-gold-400">{area.area}</span>
                <span className="text-white/40">
                  {pad(i + 1)} / {pad(techExpertise.length)}
                </span>
              </div>
              <h3 className="mt-5 max-w-md font-display text-3xl font-medium leading-[1.08] tracking-[-0.02em] sm:text-4xl lg:text-[2.75rem]">
                {area.headline}
              </h3>
              <p className="mt-8 max-w-md text-base leading-relaxed text-white/75 lg:mt-auto lg:pt-10">
                {area.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {area.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/services#it-consulting">Explore</Button>
              </div>
            </div>
            <div
              className={`relative min-h-64 overflow-hidden lg:m-2 lg:min-h-0 lg:rounded-xl ${
                i % 2 === 1 ? "lg:order-first" : ""
              }`}
            >
              <Image
                src={area.image}
                alt={area.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </article>
        </div>
      ))}
    </div>
  );
}
