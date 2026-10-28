"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import type { GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";
import { Lightbox } from "./Lightbox";

const spans: Record<GalleryItem["shape"], string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
};

/** Masonry-style grid (CSS columns) that opens items in an accessible lightbox. */
export function GalleryGrid({ items, className }: { items: GalleryItem[]; className?: string }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <motion.ul layout className={cn("columns-2 gap-3 sm:gap-4 lg:columns-3 xl:columns-4", className)}>
        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <motion.li
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35 }}
              className="mb-3 break-inside-avoid sm:mb-4"
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Open image: ${item.caption}`}
                className="group relative block w-full overflow-hidden bg-blush-soft"
              >
                <div className={cn("relative w-full", spans[item.shape])}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-plum/80 to-transparent p-4 text-left font-serif text-lg text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {item.caption}
                </span>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      <Lightbox items={items} index={active} onClose={() => setActive(null)} onChange={setActive} />
    </>
  );
}
