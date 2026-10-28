"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import type { GalleryItem } from "@/data/gallery";
import { useDialog } from "@/lib/useDialog";

export function Lightbox({
  items,
  index,
  onClose,
  onChange,
}: {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onChange: (i: number) => void;
}) {
  const open = index !== null;
  const ref = useDialog<HTMLDivElement>(open, onClose);
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null) return;
      onChange((index + dir + items.length) % items.length);
    },
    [index, items.length, onChange],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, go]);

  if (index === null) return null;
  const item = items[index];
  if (!item) return null;

  return (
    <div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label={`Image viewer: ${item.caption}`}
      tabIndex={-1}
      className="fixed inset-0 z-[100] flex flex-col bg-espresso/95 backdrop-blur-sm"
      onClick={onClose}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
      }}
    >
      <div className="flex items-center justify-between px-4 py-3 text-ivory sm:px-8" onClick={(e) => e.stopPropagation()}>
        <p className="text-sm tracking-wide" aria-live="polite">
          {index + 1} / {items.length}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="grid h-12 w-12 place-items-center rounded-full hover:bg-ivory/10"
        >
          <X size={26} aria-hidden />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-20">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            go(-1);
          }}
          aria-label="Previous image"
          className="absolute left-1 z-10 grid h-12 w-12 place-items-center rounded-full bg-ivory/10 text-ivory hover:bg-ivory/20 sm:left-6"
        >
          <ChevronLeft size={26} aria-hidden />
        </button>
        <div className="relative h-full w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
          <Image
            key={item.id}
            src={item.src}
            alt={item.alt}
            fill
            sizes="100vw"
            quality={80}
            className="object-contain"
            priority
          />
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            go(1);
          }}
          aria-label="Next image"
          className="absolute right-1 z-10 grid h-12 w-12 place-items-center rounded-full bg-ivory/10 text-ivory hover:bg-ivory/20 sm:right-6"
        >
          <ChevronRight size={26} aria-hidden />
        </button>
      </div>

      <div className="px-4 py-4 text-center text-ivory" onClick={(e) => e.stopPropagation()}>
        <p className="font-serif text-xl">{item.caption}</p>
        <p className="mt-1 text-xs text-ivory/60">Illustrative sample image</p>
      </div>
    </div>
  );
}
