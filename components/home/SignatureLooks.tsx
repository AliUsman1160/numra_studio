"use client";

import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "@/components/gallery/Lightbox";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { galleryItems, type GalleryItem } from "@/data/gallery";

const picks: { id: string; label: string; className: string }[] = [
  { id: "b1", label: "Traditional Red Bridal", className: "col-span-2 row-span-2" },
  { id: "b2", label: "Soft-Glam Nikkah", className: "" },
  { id: "b3", label: "Elegant Walima", className: "" },
  { id: "b4", label: "Golden-Toned Bridal", className: "row-span-2" },
  { id: "b5", label: "Contemporary Pastel & Glam", className: "" },
  { id: "d1", label: "Eye Makeup Detail", className: "" },
  { id: "h3", label: "Hairstyling Detail", className: "col-span-2 md:col-span-1" },
];

const items: GalleryItem[] = picks.flatMap((p) => {
  const base = galleryItems.find((g) => g.id === p.id);
  return base ? [{ ...base, caption: p.label }] : [];
});

export function SignatureLooks() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Signature Bridal Looks"
            title="Your Wedding. Your Signature Look."
            description="Sample imagery illustrating the styles you can discuss with NUMRA. Tap any image to view it larger."
          />
          <Button href="/bridal" variant="secondary" className="self-start md:self-auto">
            View Bridal Portfolio
          </Button>
        </div>

        <ul className="mt-14 grid auto-rows-[11rem] grid-cols-2 gap-3 sm:auto-rows-[14rem] sm:gap-4 md:grid-cols-4 md:auto-rows-[15rem]">
          {items.map((item, i) => (
            <li key={item.id} className={picks[i]?.className}>
              <Reveal className="h-full">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Open image: ${item.caption}`}
                  className="group relative block h-full w-full overflow-hidden bg-blush-soft"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-plum/85 to-transparent p-3 text-left font-serif text-base text-ivory sm:p-4 sm:text-lg">
                    {item.caption}
                  </span>
                </button>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
      <Lightbox items={items} index={active} onClose={() => setActive(null)} onChange={setActive} />
    </section>
  );
}
