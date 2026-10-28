import { InstagramIcon } from "@/components/ui/InstagramIcon";
import Link from "next/link";
import { navLinks } from "@/data/navigation";
import { services, inquiryHref } from "@/data/services";
import { siteConfig } from "@/data/site-config";
import { ContactInfo } from "./ContactInfo";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="bg-espresso text-ivory/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-4">
          <Wordmark light />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">
            Makeup artistry, salon services and beauty education — together in one place in {siteConfig.city}.
          </p>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm hover:text-gold"
          >
            <InstagramIcon size={18} /> Follow {siteConfig.social.instagramHandle}
          </a>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <h2 className="eyebrow mb-5 text-gold">Explore</h2>
          <ul className="space-y-3 text-sm">
            {[...navLinks.slice(1), { href: "/contact", label: "Contact" }, { href: "/faq", label: "FAQ" }].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services" className="lg:col-span-3">
          <h2 className="eyebrow mb-5 text-gold">Services</h2>
          <ul className="space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={inquiryHref(s.title, s.inquiryType)} className="hover:text-gold">
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/academy" className="hover:text-gold">
                NUMRA Academy
              </Link>
            </li>
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="eyebrow mb-5 text-gold">Visit &amp; Contact</h2>
          <ContactInfo light className="text-sm" />
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-ivory/60 sm:px-8 md:flex-row md:justify-between lg:px-10">
          <p>© {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.</p>
          <p>Photography shown is illustrative sample imagery until the NUMRA portfolio is supplied.</p>
        </div>
      </div>
    </footer>
  );
}
