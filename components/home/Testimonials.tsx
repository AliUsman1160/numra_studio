import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const allPlaceholders = testimonials.every((t) => t.placeholder);
  return (
    <section className="bg-blush-soft py-24 lg:py-32" aria-labelledby="experiences-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Client Experiences"
          title={<span id="experiences-title">Words from Our Clients</span>}
          description={
            allPlaceholders
              ? "Genuine client feedback will be shared here. The cards below are placeholders, not real reviews."
              : undefined
          }
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.08}>
              <figure className="relative h-full rounded-sm bg-ivory p-8">
                <Quote className="mb-5 text-gold" size={28} aria-hidden />
                {t.placeholder && (
                  <p className="eyebrow mb-3 inline-block rounded-full border border-gold-dark/40 px-3 py-1 text-gold-dark">
                    Placeholder
                  </p>
                )}
                <blockquote className="font-serif text-xl leading-snug text-plum">{t.quote}</blockquote>
                <figcaption className="mt-6 text-sm text-taupe-dark">
                  <span className="font-medium text-espresso">{t.name}</span>
                  {t.detail && <span> · {t.detail}</span>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
