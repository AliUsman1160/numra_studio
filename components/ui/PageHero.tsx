import Image from "next/image";
import type { ReactNode } from "react";
import type { SiteImage } from "@/data/images";

/** Editorial page hero: text on plum with an image panel. Sits under the transparent header. */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image?: SiteImage;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-plum text-ivory">
      <div className="mx-auto grid max-w-7xl items-stretch gap-0 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
        <div className="relative z-10 flex flex-col justify-center py-32 sm:py-36 lg:col-span-7 lg:py-44 lg:pr-12">
          <p className="eyebrow mb-5 text-gold">{eyebrow}</p>
          <h1 className="font-serif text-5xl leading-[1.04] sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">{description}</p>
          {children && <div className="mt-9 flex flex-wrap gap-4">{children}</div>}
        </div>
        {image && (
          <div className="relative -mx-5 h-80 sm:-mx-8 sm:h-[26rem] lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:h-auto lg:w-5/12">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-[50%_25%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-plum/50 via-transparent to-transparent lg:from-plum/60" />
          </div>
        )}
      </div>
    </section>
  );
}
