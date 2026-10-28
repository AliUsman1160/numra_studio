import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { branches } from "@/data/branches";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

function Row({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="mt-0.5 text-gold" aria-hidden>
        {icon}
      </span>
      <div>
        <p className="eyebrow mb-1 opacity-70">{label}</p>
        <div className="leading-relaxed">{children}</div>
      </div>
    </li>
  );
}

const pending = <span className="italic opacity-70">To be confirmed — details coming soon.</span>;

/** Reads everything from data/site-config.ts and data/branches.ts. */
export function ContactInfo({ light, className }: { light?: boolean; className?: string }) {
  return (
    <ul className={cn("space-y-6 text-[0.95rem]", light ? "text-ivory/90" : "text-espresso", className)}>
      <Row icon={<Phone size={18} />} label="Phone">
        {siteConfig.phones.length
          ? siteConfig.phones.map((p) => (
              <div key={p}>
                <a className="hover:text-gold" href={`tel:${p.replace(/[^\d+]/g, "")}`}>
                  {p}
                </a>
              </div>
            ))
          : pending}
      </Row>
      <Row icon={<Mail size={18} />} label="Email">
        {siteConfig.email ? (
          <a className="hover:text-gold" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
        ) : (
          pending
        )}
      </Row>
      <Row icon={<MapPin size={18} />} label={branches.length > 1 ? "Branches" : "Branch"}>
        {branches.map((b) => (
          <div key={b.id} className="mb-2 last:mb-0">
            <span className="font-medium">{b.name}</span>
            {b.address ? <span> — {b.address}</span> : <span className="opacity-70"> — {b.city} (street address to be confirmed)</span>}
            {b.phone && <div>{b.phone}</div>}
            {b.mapUrl && (
              <a className="underline hover:text-gold" href={b.mapUrl} target="_blank" rel="noopener noreferrer">
                View on map
              </a>
            )}
          </div>
        ))}
      </Row>
      <Row icon={<Clock size={18} />} label="Opening hours">
        {siteConfig.openingHours.length
          ? siteConfig.openingHours.map((h) => (
              <div key={h.days}>
                {h.days}: {h.hours}
              </div>
            ))
          : pending}
      </Row>
    </ul>
  );
}
