import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/Button";
import { images } from "@/data/images";

export function BrandIntro() {
  return (
    <section id="welcome" className="scroll-mt-20 bg-ivory py-24 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <Reveal className="relative lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={images.bridalRedVeil.src}
              alt={images.bridalRedVeil.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 right-4 hidden w-40 border-8 border-ivory sm:block md:w-52 lg:-right-10">
            <div className="relative aspect-[3/4]">
              <Image
                src={images.eyeMakeup.src}
                alt={images.eyeMakeup.alt}
                fill
                sizes="208px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-6 lg:pl-8">
          <SectionHeading eyebrow="Welcome to NUMRA" title="Where Beauty Meets Artistry." />
          <div className="mt-7 space-y-5 text-base leading-relaxed text-taupe-dark sm:text-lg">
            <p>
              NUMRA brings together three things we care about: makeup artistry, salon services and beauty
              education — all under one name in Lahore.
            </p>
            <p>
              Whether you are preparing for your wedding, refreshing your hair, or learning to create looks of your
              own, we believe beauty should feel personal, considered and confident.
            </p>
          </div>
          <div className="mt-9">
            <TextLink href="/about">Discover NUMRA</TextLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
