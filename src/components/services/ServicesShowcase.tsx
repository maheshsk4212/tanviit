import Image from "next/image";
import { Check } from "lucide-react";
import { services } from "@/lib/site-content";
import { Reveal } from "@/components/motion/Reveal";

export function ServicesShowcase() {
  return (
    <div className="space-y-6 sm:space-y-8">
      {services.map((service, index) => {
        const reversed = index % 2 === 1;
        return (
          <Reveal key={service.slug} direction={reversed ? "right" : "left"}>
            <div
              id={service.slug}
              className="group grid scroll-mt-24 grid-cols-1 overflow-hidden rounded-card border border-line bg-surface shadow-sm transition-all duration-300 hover:border-gold-200 hover:shadow-elevated-lg lg:grid-cols-2"
            >
              <div
                className={`relative aspect-[4/3] w-full overflow-hidden bg-ink-950 lg:aspect-auto ${
                  reversed ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Scrim only where the caption sits, so already-dark photos
                    keep their detail instead of crushing to black. */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-gold-600/10 via-transparent to-transparent"
                  aria-hidden
                />

                <span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 font-display text-sm font-bold text-fg backdrop-blur">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="absolute inset-x-5 bottom-5 flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="h-4 w-1 shrink-0 rounded-full bg-gold-500" aria-hidden />
                  {service.visualNote}
                </p>
              </div>

              <div
                className={`flex flex-col justify-center p-8 sm:p-10 lg:p-12 ${
                  reversed ? "lg:order-1" : ""
                }`}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                  Practice {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-fg sm:text-3xl">
                  {service.name}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-fg-muted">
                  {service.description}
                </p>

                <ul className="mt-6 grid grid-cols-1 gap-3 border-t border-line pt-6 sm:grid-cols-2">
                  {service.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-start gap-2.5 text-sm text-fg-muted"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
