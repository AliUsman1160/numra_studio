import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "light" | "outlineLight" | "gold";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[0.82rem] font-medium uppercase tracking-[0.14em] transition-all duration-300 focus-visible:outline-offset-4 disabled:opacity-60 min-h-12";

const variants: Record<Variant, string> = {
  primary: "bg-plum text-ivory hover:bg-plum-deep shadow-soft",
  secondary: "border border-plum/40 text-plum hover:bg-plum hover:text-ivory",
  light: "bg-ivory text-plum hover:bg-white",
  outlineLight: "border border-ivory/50 text-ivory hover:bg-ivory hover:text-plum",
  gold: "bg-gold text-espresso hover:bg-[#d2b57f]",
};

type Props = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  href?: string;
  external?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({ variant = "primary", className, children, href, external, ...rest }: Props) {
  const classes = cn(base, variants[variant], className);
  if (href) {
    if (external || href.startsWith("http")) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

export function TextLink({
  href,
  children,
  light,
  className,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.16em] border-b pb-1 transition-colors",
        light
          ? "text-ivory border-ivory/40 hover:border-gold hover:text-gold"
          : "text-plum border-plum/30 hover:border-gold hover:text-gold-dark",
        className,
      )}
    >
      {children}
      <span aria-hidden className="transition-transform group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
