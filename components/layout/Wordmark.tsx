import Link from "next/link";
import { cn } from "@/lib/utils";

/** Typographic wordmark — not an official logo. */
export function Wordmark({ light, className }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" aria-label="NUMRA Makeup Studio & Salon — home" className={cn("inline-flex flex-col leading-none", className)}>
      <span className={cn("font-serif text-[1.9rem] font-medium tracking-[0.32em]", light ? "text-ivory" : "text-plum")}>
        NUMRA
      </span>
      <span className={cn("mt-1 text-[0.5rem] uppercase tracking-[0.42em]", light ? "text-gold" : "text-gold-dark")}>
        Makeup Studio &amp; Salon
      </span>
    </Link>
  );
}
