"use client";

import { useState } from "react";
import {
  bridalStyles,
  galleryCategories,
  type BridalStyle,
  type GalleryCategory,
  type GalleryItem,
} from "@/data/gallery";
import { GalleryFilters } from "./GalleryFilters";
import { GalleryGrid } from "./GalleryGrid";

/** Frontend-only filtering. `mode` chooses between gallery categories and bridal events. */
export function FilterableGallery({
  items,
  mode,
}: {
  items: GalleryItem[];
  mode: "category" | "bridal";
}) {
  const [filter, setFilter] = useState<string>("all");

  const filtered = items.filter((i) => {
    if (filter === "all") return true;
    return mode === "category" ? i.category === (filter as GalleryCategory) : i.bridalStyle === (filter as BridalStyle);
  });

  const options = mode === "category" ? galleryCategories : bridalStyles;

  return (
    <div>
      <GalleryFilters
        label={mode === "category" ? "Filter gallery by category" : "Filter bridal looks by event"}
        options={options as { id: string; label: string }[]}
        value={filter}
        onChange={setFilter}
      />
      <p className="sr-only" aria-live="polite">
        Showing {filtered.length} images
      </p>
      <GalleryGrid items={filtered} className="mt-8" />
      {filtered.length === 0 && <p className="mt-8 text-taupe-dark">No images in this category yet.</p>}
    </div>
  );
}
