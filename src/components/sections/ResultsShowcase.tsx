import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { clients, provenResults } from "@/lib/site-content";
import { Chip } from "@/components/ui/Chip";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

const RESULTS_IMAGE =
  "https://images.unsplash.com/photo-1764004657175-11ce991efcca?w=1600&q=80&auto=format&fit=crop";

/* One treatment per card, in order: deep gradient, mustard, photo (double width). */
const styles = [
  { card: "result-dark text-white", chip: "accent", sub: "text-white/75" },
  { card: "bg-gold-500 text-deep-950", chip: "light", sub: "text-deep-950/80" },
  { card: "text-white sm:col-span-2", chip: "accent", sub: "text-white/80", photo: true },
] as const;

export function ResultsShowcase() {
  return (
    <>
      <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {provenResults.map((result, i) => {
          const style = styles[i % styles.length];
          return (
            <RevealItem key={result.metric} className={"photo" in style ? "sm:col-span-2" : ""}>
              <article
                className={`relative isolate flex h-full min-h-[20rem] flex-col overflow-hidden rounded-2xl p-6 sm:p-7 ${style.card}`}
              >
                {"photo" in style ? (
                  <>
                    <Image
                      src={RESULTS_IMAGE}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="-z-20 object-cover [filter:saturate(0.6)_brightness(0.85)]"
                    />
                    <div
                      className="absolute inset-0 -z-10 bg-gradient-to-r from-deep-950/90 via-deep-950/60 to-deep-950/10"
                      aria-hidden
                    />
                  </>
                ) : null}
                <Chip tone={style.chip} className="self-start">
                  {result.context}
                </Chip>
                <p className="mt-5 font-display text-5xl font-medium tracking-[-0.03em] sm:text-6xl">
                  {result.metric}
                </p>
                <p className={`mt-3 max-w-xs text-sm leading-relaxed ${style.sub}`}>{result.label}</p>
                <Link
                  href={result.href}
                  className="mt-auto inline-flex items-center gap-1.5 pt-8 text-sm font-medium underline-offset-4 hover:underline"
                >
                  {result.cta}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </article>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <p className="mt-16 text-sm font-medium text-fg">Trusted by leading organizations:</p>
      {/* Wordmark marquee — the list is rendered twice so the loop is
          seamless; the second copy is hidden from assistive tech. Spacing
          lives inside each item so -50% lands exactly on the seam. */}
      <div className="relative mt-6 overflow-hidden border-y border-deep-900/10 py-7 [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
        <ul className="animate-marquee flex w-max items-center">
          {[...clients, ...clients].map((client, i) => (
            <li
              key={`${client}-${i}`}
              aria-hidden={i >= clients.length}
              className="flex shrink-0 items-center"
            >
              <span className="whitespace-nowrap font-display text-2xl font-semibold tracking-[-0.02em] text-deep-900/70 sm:text-3xl">
                {client}
              </span>
              <span className="mx-10 h-2 w-2 rotate-45 bg-gold-500" aria-hidden />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
