import Image from "next/image";
import { BookingCTA } from "@/components/home/BookingCTA";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/data/images";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About NUMRA",
  description:
    "Learn about NUMRA Makeup Studio & Salon in Lahore — makeup artistry, salon services and beauty education brought together.",
  path: "/about",
});

/** EDITABLE: add a founder story or founding year here only when confirmed. */
const founderStory: string | null = null;

const pillars = [
  {
    title: "Makeup philosophy",
    text: "Makeup should feel like you, only more assured. We start with a conversation about your event, outfit and preferences, then shape a look around them.",
  },
  {
    title: "Salon philosophy",
    text: "Hair and beauty care are part of a personal routine. We aim to present services clearly so you can choose what suits you.",
  },
  {
    title: "Education approach",
    text: "Learning makeup is about understanding skin, colour and technique. NUMRA Academy explores beauty education for people at different stages.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About NUMRA"
        title={
          <>
            Beauty with <em className="italic text-blush">intention.</em>
          </>
        }
        description="NUMRA brings together makeup artistry, salon services and beauty education in Lahore, Pakistan."
        image={images.bridalPink}
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
          <Reveal className="lg:col-span-5">
            <SectionHeading eyebrow="Our Story" title="One name. Three passions." />
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-taupe-dark lg:col-span-7">
            <p>
              NUMRA Makeup Studio &amp; Salon is a beauty brand that combines makeup artistry, salon services and
              beauty education. We want each visitor to feel welcomed, listened to and confident in how they look
              and feel.
            </p>
            <p>
              From bridal looks for every wedding event to everyday hair and skin care, and from first lessons to
              professional learning, NUMRA is designed as a complete beauty experience.
            </p>
            {founderStory && <p>{founderStory}</p>}
          </Reveal>
        </div>
      </section>

      <section className="bg-blush-soft py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="What guides us" title="Our approach" align="center" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full bg-ivory p-8">
                  <h3 className="font-serif text-2xl text-plum">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-taupe-dark">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-8 md:grid-cols-3 lg:px-10">
          {[images.makeupBlush, images.salonInterior, images.eyeMakeup].map((img, i) => (
            <Reveal key={img.src} delay={i * 0.08}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ivory pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="What we offer" title="Services at a glance" />
          <ul className="mt-10 grid gap-x-10 border-t border-plum/15 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.slug} className="border-b border-plum/15 py-5">
                <h3 className="font-serif text-2xl text-plum">{s.title}</h3>
                <p className="mt-1 text-taupe-dark">{s.short}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/salon">Explore the Salon</Button>
            <Button href="/academy" variant="secondary">
              Explore the Academy
            </Button>
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
