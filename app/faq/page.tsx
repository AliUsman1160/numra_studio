import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { faqs } from "@/data/faqs";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers about inquiring for bridal makeup, salon services, appointments, pricing and academy courses at NUMRA Makeup Studio & Salon.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Questions, <em className="italic text-blush">answered.</em>
          </>
        }
        description="Quick guidance on how to inquire. For anything not covered here, please contact NUMRA directly."
        image={images.bridalOrnate}
      />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Accordion items={faqs} />
          <div className="mt-14 text-center">
            <p className="font-serif text-2xl text-plum">Still have a question?</p>
            <div className="mt-6">
              <Button href="/contact">Contact NUMRA</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
