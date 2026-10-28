import { Eye, HeartHandshake, Layers, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const points = [
  {
    icon: HeartHandshake,
    title: "Personalized Approach",
    text: "Help clients explore looks and services suited to their preferences.",
  },
  {
    icon: Sparkles,
    title: "Beauty Expertise",
    text: "Presenting makeup, hair, and beauty services in a clear and professional way.",
  },
  {
    icon: Layers,
    title: "A Complete Beauty Experience",
    text: "Bringing together makeup, salon services, and learning opportunities.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    text: "Valuing the importance of styling, presentation, and individual preferences.",
  },
];

export function WhyNumra() {
  return (
    <section className="bg-plum py-24 text-ivory lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="Why NUMRA?" title="Thoughtful Beauty. Professional Care." tone="light" />
        <div className="mt-14 grid gap-px overflow-hidden bg-ivory/15 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="bg-plum">
              <div className="h-full p-8 lg:p-9">
                <p.icon className="text-gold" size={30} strokeWidth={1.3} aria-hidden />
                <h3 className="mt-6 font-serif text-2xl">{p.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ivory/75">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
