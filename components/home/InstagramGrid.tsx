import { InstagramIcon } from "@/components/ui/InstagramIcon";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { instagramSamples } from "@/data/gallery";
import { siteConfig } from "@/data/site-config";

export function InstagramGrid() {
  return (
    <section className="bg-blush-soft py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow={siteConfig.social.instagramHandle}
          title="Follow the Beauty."
          description="A sample grid inspired by social media. These are not live Instagram posts — visit the official profile for NUMRA's latest work."
          align="center"
        />
        <ul className="mt-12 grid grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-6">
          {instagramSamples.map((img, i) => (
            <li key={img.src}>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit NUMRA on Instagram (sample image ${i + 1})`}
                className="group relative block aspect-square overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 16vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 grid place-items-center bg-plum/50 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <InstagramIcon className="text-ivory" size={28} />
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Button href={siteConfig.social.instagram} external>
            <InstagramIcon size={16} /> Follow on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
}
