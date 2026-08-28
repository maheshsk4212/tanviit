import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/site-content";
import { Card } from "@/components/ui/Card";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export function Testimonials() {
  return (
    <RevealGroup className="grid grid-cols-1 gap-6 lg:grid-cols-3" stagger={0.08}>
      {testimonials.map((testimonial) => (
        <RevealItem key={testimonial.author} className="h-full">
          <Card className="flex h-full flex-col">
            <div className="flex items-center justify-between">
              <Quote className="h-7 w-7 text-orange-300" aria-hidden />
              <div className="flex gap-0.5 text-orange-400" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-navy-700 to-navy-900 text-xs font-bold text-orange-300">
                {testimonial.initials}
              </span>
              <p className="text-sm font-semibold text-navy-900">{testimonial.author}</p>
            </div>
          </Card>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
