import Image from "next/image";
import { BookingCTA } from "@/components/home/BookingCTA";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/data/images";
import { PRICE_FALLBACK, inquiryHref, salonServices } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Salon Services — Hair, Skin & Beauty",
  description:
    "Explore haircuts and styling, hair colour and treatments, occasion hairstyling, facials, manicure and pedicure at NUMRA in Lahore.",
  path: "/salon",
});

export default function SalonPage() {
  return (
    <>
      <PageHero
        eyebrow="Salon"
        title={
          <>
            Hair, skin &amp; <em className="italic text-blush">beauty.</em>
          </>
        }
        description="A modern space for personal care. Explore salon services and ask the team about what is currently available."
        image={images.salonInterior}
      >
        <Button href="/contact?type=Salon" variant="light">
          Inquire About a Service
        </Button>
      </PageHero>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Salon Services"
            title="Care that fits your routine."
            description="Service availability, pricing and results vary. Please get in touch to confirm details before booking."
          />
          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {salonServices.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <article id={s.slug} className="group flex h-full flex-col scroll-mt-28">
                  <div className="relative aspect-[4/5] overflow-hidden bg-blush-soft">
                    <Image
                      src={s.image.src}
                      alt={s.image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-6 font-serif text-3xl text-plum">{s.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-taupe-dark">{s.description}</p>
                  <p className="mt-4 text-sm text-gold-dark">{s.price ?? PRICE_FALLBACK}</p>
                  <div className="mt-5">
                    <Button href={inquiryHref(s.title, "Salon")} variant="secondary">
                      Inquire <span className="sr-only">about {s.title}</span>
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
