import Image from "next/image";
import { CourseCard } from "@/components/academy/CourseCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { courses } from "@/data/courses";
import { images } from "@/data/images";

export function AcademyPromo() {
  return (
    <section className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={images.makeupBlush.src}
                alt={images.makeupBlush.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-3 hidden w-36 border-8 border-ivory sm:block lg:-right-8 lg:w-44">
              <div className="relative aspect-square">
                <Image src={images.brushes.src} alt={images.brushes.alt} fill sizes="176px" className="object-cover" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <SectionHeading
              eyebrow="The NUMRA Academy"
              title="Turn Your Passion for Beauty into a Skill."
              description="Explore makeup and beauty-learning opportunities designed for people who want to develop their understanding of beauty artistry."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/academy">Explore Available Courses</Button>
              <Button href="/academy#enroll" variant="secondary">
                Submit a Course Inquiry
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {courses.slice(0, 3).map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.08}>
              <CourseCard course={c} />
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-taupe-dark">
          Courses shown are configurable examples. Contact NUMRA to ask which courses are currently available.
        </p>
      </div>
    </section>
  );
}
