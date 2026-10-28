import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { Suspense } from "react";
import { BookingInquiryForm } from "@/components/forms/BookingInquiryForm";
import { ContactInfo } from "@/components/layout/ContactInfo";
import { PageHero } from "@/components/ui/PageHero";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site-config";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact & Appointment Inquiry",
  description:
    "Send an appointment or course inquiry to NUMRA Makeup Studio & Salon in Lahore. Ask about bridal makeup, salon services or the beauty academy.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s start the <em className="italic text-blush">conversation.</em>
          </>
        }
        description="Tell us about your event, service or course of interest. This page includes a demo inquiry form and NUMRA's contact details."
        image={images.vanity}
      />
      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl text-plum">Inquiry form</h2>
            <p className="mt-3 mb-8 text-taupe-dark">Fields marked * are required.</p>
            <Suspense fallback={<p className="text-taupe-dark">Loading form…</p>}>
              <BookingInquiryForm />
            </Suspense>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-md bg-plum p-8 text-ivory sm:p-10">
              <h2 className="font-serif text-3xl">Visit &amp; contact</h2>
              <ContactInfo light className="mt-8" />
              <div className="mt-8 flex flex-col items-start gap-4 border-t border-ivory/15 pt-8">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-gold"
                >
                  <InstagramIcon size={18} /> {siteConfig.social.instagramHandle} on Instagram
                </a>
                <WhatsAppCTA variant="outlineLight" />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
