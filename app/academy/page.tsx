import { Check, Info } from "lucide-react";
import Image from "next/image";
import { CourseExplorer } from "@/components/academy/CourseExplorer";
import { AcademyInquiryForm } from "@/components/forms/AcademyInquiryForm";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { courses, learningTopics } from "@/data/courses";
import { faqs } from "@/data/faqs";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Beauty Academy — Makeup Courses",
  description:
    "Explore makeup and beauty-learning opportunities at the NUMRA Academy in Lahore and send a course inquiry.",
  path: "/academy",
});

export default function AcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="NUMRA Academy"
        title={
          <>
            Turn passion into <em className="italic text-blush">skill.</em>
          </>
        }
        description="Explore makeup and beauty-learning opportunities designed for people who want to develop their understanding of beauty artistry."
        image={images.makeupBlush}
      >
        <Button href="#courses" variant="light">
          Explore Courses
        </Button>
        <Button href="#enroll" variant="outlineLight">
          Course Inquiry
        </Button>
      </PageHero>

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
          <Reveal className="lg:col-span-6">
            <SectionHeading eyebrow="About the Academy" title="Learn the art behind the look." />
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-taupe-dark">
              <p>
                The NUMRA Academy is where our love for makeup becomes learning. Whether you are curious about
                makeup for yourself or considering a path in beauty, the Academy is a place to start the conversation.
              </p>
              <p>Contact NUMRA to ask about current courses, schedules, fees and certificates.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={images.palette.src} alt={images.palette.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
              <div className="relative mt-10 aspect-[3/4] overflow-hidden">
                <Image src={images.productsTable.src} alt={images.productsTable.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="courses" className="scroll-mt-20 bg-blush-soft py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="Courses" title="Course options" />
          <p className="mt-6 flex max-w-2xl gap-2 rounded-md bg-ivory p-4 text-sm leading-relaxed text-plum">
            <Info size={18} className="mt-0.5 shrink-0" aria-hidden />
            These are configurable example courses, not confirmation that each is currently running. Details such as
            fees, dates and certification are shown only once verified.
          </p>
          <div className="mt-12">
            <CourseExplorer courses={courses} />
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading eyebrow="Learning topics" title="What you may explore" />
          <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {learningTopics.map((t) => (
              <li key={t} className="flex gap-3 border-b border-plum/15 pb-4 text-lg text-espresso">
                <Check size={20} className="mt-1 shrink-0 text-gold-dark" aria-hidden />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="enroll" className="scroll-mt-20 bg-plum py-24 text-ivory lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Enrollment Inquiry"
              title="Ask about the Academy."
              description="Tell us what you would like to learn and the team can share current options. Submitting this form is an inquiry only, not an application."
              tone="light"
            />
          </div>
          <div className="rounded-md bg-ivory p-6 text-espresso sm:p-9 lg:col-span-7">
            <AcademyInquiryForm />
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeading eyebrow="Academy FAQ" title="Common questions" align="center" />
          <Accordion className="mt-12" items={faqs.filter((f) => f.group === "Academy" || f.id === "pricing")} />
        </div>
      </section>
    </>
  );
}
