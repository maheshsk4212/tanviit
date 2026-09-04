import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/site-content";
import { Card } from "@/components/ui/Card";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export function Testimonials() {
  return (
    <RevealGroup className="grid grid-cols-1 gap-6 lg:grid-cols-3" stagger={0.08}>
      {testimonials.map((testimonial) => (
        <RevealItem key={testimonial.company} className="h-full">
          <Card className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <Quote className="h-7 w-7 text-gold-300" aria-hidden />
              <div className="flex gap-0.5 text-gold-400" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
            </div>
            <p className="mt-4 flex-1 text-base leading-relaxed text-fg-muted">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-ink-700 to-ink-900 text-xs font-bold text-gold-300">
                {testimonial.initials}
              </span>
              <div>
                <p className="text-sm font-semibold text-fg">{testimonial.author}</p>
                <p className="text-xs text-fg-subtle">{testimonial.company}</p>
              </div>
            </div>
          </Card>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
