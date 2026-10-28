import Image from "next/image";
import { FilterableGallery } from "@/components/gallery/FilterableGallery";
import { BookingCTA } from "@/components/home/BookingCTA";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";
import { bridalGallery } from "@/data/gallery";
import { images } from "@/data/images";
import { inquiryHref } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Bridal Makeup & Styling",
  description:
    "Explore bridal makeup and hairstyling inspiration for Barat, Walima, Nikkah and Mehndi, and send an appointment inquiry to NUMRA in Lahore.",
  path: "/bridal",
});

const details = [
  { img: images.eyeMakeup, label: "Eyes" },
  { img: images.redLipstick, label: "Skin & glow" },
  { img: images.hairUpdo, label: "Hair" },
  { img: images.lashes, label: "Lashes" },
];

export default function BridalPage() {
  return (
    <>
      <PageHero
        eyebrow="Bridal"
        title={
          <>
            Your signature <em className="italic text-blush">bridal look.</em>
          </>
        }
        description="From Mehndi to Barat, Nikkah to Walima — explore bridal styling inspiration and start a conversation about your day."
        image={images.heroBride}
      >
        <Button href={inquiryHref("Bridal Makeup", "Bridal")} variant="light">
          Inquire About Bridal Makeup
        </Button>
      </PageHero>

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Bridal Styling" title="Every event, its own look." />
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-taupe-dark lg:col-span-7">
            <p>
              A wedding is made of many moments. Barat calls for classic grandeur, Walima for elegance, Nikkah for
              refined softness and Mehndi for colour and play.
            </p>
            <p>
              Browse the inspiration below, then send an inquiry sharing your outfit, colours, date and ideas. NUMRA
              can talk you through the options for your event.
            </p>
            <p className="text-sm">
              Imagery on this page is illustrative sample photography and does not show NUMRA clients.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blush-soft py-24 lg:py-32" aria-labelledby="portfolio-title">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Bridal Portfolio"
            title={<span id="portfolio-title">Looks for every ceremony</span>}
          />
          <div className="mt-10">
            <FilterableGallery items={bridalGallery} mode="bridal" />
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="In the details" title="Makeup & hairstyle details" align="center" />
          <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {details.map((d, i) => (
              <li key={d.label}>
                <Reveal delay={i * 0.06}>
                  <figure>
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={d.img.src}
                        alt={d.img.alt}
                        fill
                        loading="lazy"
                        sizes="(min-width: 768px) 25vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 font-serif text-xl text-plum">{d.label}</figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ivory pb-24 lg:pb-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading eyebrow="Bridal FAQ" title="Questions brides ask" align="center" />
          <Accordion className="mt-12" items={faqs.filter((f) => f.group === "Bridal" || f.id === "dates" || f.id === "pricing")} />
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
