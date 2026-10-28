import Image from "next/image";
import Link from "next/link";
import { PRICE_FALLBACK, type Service } from "@/data/services";

export function ServiceCard({ service, showPrice }: { service: Service; showPrice?: boolean }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-plum/10 bg-white transition-shadow duration-500 hover:shadow-soft">
      <Link href={`/services#${service.slug}`} className="block overflow-hidden" tabIndex={-1} aria-hidden>
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={service.image.src}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-2xl text-plum">{service.title}</h3>
        <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-taupe-dark">{service.short}</p>
        {showPrice && <p className="mt-4 text-sm text-gold-dark">{service.price ?? PRICE_FALLBACK}</p>}
        <Link
          href={`/services#${service.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-plum hover:text-gold-dark"
        >
          Learn More <span aria-hidden>→</span>
          <span className="sr-only"> about {service.title}</span>
        </Link>
      </div>
    </article>
  );
}
