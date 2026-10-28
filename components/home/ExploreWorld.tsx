import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/data/images";

const cards = [
  {
    title: "Bridal & Makeup",
    text: "Explore bridal and occasion makeup looks tailored to your event, personal style, and vision.",
    cta: "Explore Bridal Beauty",
    href: "/bridal",
    image: images.bridalGoldGreen,
  },
  {
    title: "Salon & Hair",
    text: "Discover hair styling, color, treatments, and beauty services for your personal-care routine.",
    cta: "Explore Salon Services",
    href: "/salon",
    image: images.hairUpdo,
  },
  {
    title: "Beauty Academy",
    text: "Explore beauty-learning opportunities and discover the available makeup and professional training options.",
    cta: "Explore the Academy",
    href: "/academy",
    image: images.makeupFace,
  },
];

export function ExploreWorld() {
  return (
    <section className="bg-blush-soft py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading eyebrow="Explore Our World" title="Three Ways to Experience NUMRA" align="center" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <Link
                href={c.href}
                className="group relative block aspect-[3/4] overflow-hidden bg-plum text-ivory sm:aspect-[4/5] md:aspect-[3/4]"
              >
                <Image
                  src={c.image.src}
                  alt={c.image.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/90 via-plum/20 to-transparent transition-colors duration-500 group-hover:from-plum-deep" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="font-serif text-3xl">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/85">{c.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 border-b border-gold pb-1 text-[0.75rem] font-medium uppercase tracking-[0.16em] text-gold">
                    {c.cta}
                    <ArrowUpRight size={16} aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
