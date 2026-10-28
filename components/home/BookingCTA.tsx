import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/images";

export function BookingCTA() {
  return (
    <section className="bg-plum text-ivory">
      <div className="mx-auto grid max-w-7xl items-center lg:grid-cols-12">
        <Reveal className="px-5 py-20 sm:px-8 lg:col-span-7 lg:px-10 lg:py-28">
          <p className="eyebrow mb-5 text-gold">Let&apos;s Begin</p>
          <h2 className="font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            Your Next Beauty Experience Starts Here.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">
            Whether you&apos;re planning your bridal look, exploring salon services, or interested in beauty
            education, let&apos;s start the conversation.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact" variant="gold">
              Book an Appointment
            </Button>
            <Button href="/academy" variant="outlineLight">
              Explore Academy
            </Button>
          </div>
        </Reveal>
        <div className="relative h-96 lg:col-span-5 lg:h-full lg:min-h-[34rem]">
          <Image
            src={images.bridalPeach.src}
            alt={images.bridalPeach.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-[50%_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-plum/50 to-transparent lg:bg-gradient-to-r lg:from-plum/70" />
        </div>
      </div>
    </section>
  );
}
