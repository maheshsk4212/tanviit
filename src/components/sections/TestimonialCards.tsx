import { Quote } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/lib/site-content";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

/** Testimonials in an editorial card layout: photo thumbnail, tag, quote, byline. */
export function TestimonialCards() {
  return (
    <RevealGroup className="grid gap-8 md:grid-cols-3">
      {testimonials.map((t) => (
        <RevealItem key={t.company}>
          <figure>
            <div className="relative isolate aspect-[16/10] overflow-hidden rounded-xl bg-deep-900">
              <Image
                src={t.image}
                alt=""
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="-z-20 object-cover [filter:saturate(0.7)]"
              />
              <div
                className="absolute inset-0 -z-10 bg-gradient-to-t from-deep-950/90 via-deep-950/30 to-transparent"
                aria-hidden
              />
              <Quote className="absolute left-4 top-4 h-6 w-6 text-gold-400" aria-hidden />
              <p className="absolute inset-x-4 bottom-4 font-display text-xl font-medium leading-tight text-white">
                {t.company}
              </p>
            </div>
            <p className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-fg-subtle">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden />
              Client testimonial
            </p>
            <blockquote className="mt-2 text-[1.05rem] font-medium leading-snug text-fg">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-sm text-fg-subtle">
              <span className="font-semibold text-fg">{t.author}</span>, {t.company}
            </figcaption>
          </figure>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
