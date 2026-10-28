"use client";

import { cn } from "@/lib/utils";

export function GalleryFilters<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: { id: T; label: string }[];
  value: T;
  onChange: (id: T) => void;
  label: string;
}) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          aria-pressed={value === o.id}
          onClick={() => onChange(o.id)}
          className={cn(
            "min-h-11 rounded-full border px-5 py-2 text-[0.75rem] font-medium uppercase tracking-[0.14em] transition-colors",
            value === o.id
              ? "border-plum bg-plum text-ivory"
              : "border-plum/25 text-plum hover:border-plum hover:bg-blush-soft",
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
