import Image from "next/image";
import { BookingCTA } from "@/components/home/BookingCTA";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/images";
import { PRICE_FALLBACK, inquiryHref, serviceCategories, services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { Check } from "lucide-react";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Bridal and occasion makeup, hair styling, hair colour and treatments, skin and beauty services and makeup lessons at NUMRA in Lahore.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Beauty for every <em className="italic text-blush">occasion.</em>
          </>
        }
        description="Makeup, hair and salon services, and learning opportunities — explore what NUMRA offers and start an inquiry for the ones you love."
        image={images.makeupFace}
      >
        <Button href="/contact" variant="light">
          Send an Inquiry
        </Button>
      </PageHero>

      <nav
        aria-label="Service categories"
        className="sticky top-[4.5rem] z-30 border-b border-plum/10 bg-ivory/95 backdrop-blur"
      >
        <ul className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 sm:px-8 lg:px-10">
          {serviceCategories.map((c) => (
            <li key={c.id} className="shrink-0">
              <a
                href={`#${c.id}`}
                className="block rounded-full border border-plum/25 px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-plum hover:bg-plum hover:text-ivory"
              >
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {serviceCategories.map((cat, ci) => {
        const items = services.filter((s) => s.category === cat.id);
        return (
          <section
            key={cat.id}
            id={cat.id}
            aria-label={cat.label}
            className={`scroll-mt-32 py-20 lg:py-28 ${ci % 2 ? "bg-blush-soft" : ""}`}
          >
            <div className="mx-auto max-w-7xl space-y-20 px-5 sm:px-8 lg:space-y-28 lg:px-10">
              {items.map((s, i) => (
                <Reveal key={s.slug}>
                  <article id={s.slug} className="scroll-mt-32 grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                    <div className={`relative aspect-[4/3] overflow-hidden lg:col-span-6 ${i % 2 ? "lg:order-2" : ""}`}>
                      <Image
                        src={s.image.src}
                        alt={s.image.alt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="lg:col-span-6">
                      <p className="eyebrow mb-3 text-gold-dark">{cat.label}</p>
                      <h2 className="font-serif text-4xl text-plum sm:text-5xl">{s.title}</h2>
                      <p className="mt-5 text-lg leading-relaxed text-taupe-dark">{s.description}</p>
                      <ul className="mt-6 space-y-2.5">
                        {s.highlights.map((h) => (
                          <li key={h} className="flex gap-3 text-espresso">
                            <Check size={18} className="mt-1 shrink-0 text-gold-dark" aria-hidden />
                            {h}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-6 text-sm text-gold-dark">{s.price ?? PRICE_FALLBACK}</p>
                      <div className="mt-6">
                        <Button href={inquiryHref(s.title, s.inquiryType)}>Inquire About {s.title}</Button>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        );
      })}

      <BookingCTA />
    </>
  );
}
