"use client";

import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import type { Course } from "@/data/courses";
import { useDialog } from "@/lib/useDialog";
import { COURSE_EVENT } from "@/components/forms/AcademyInquiryForm";
import { CourseCard, courseDetails } from "./CourseCard";

/** Course grid with a details modal. Optional course fields are hidden when empty. */
export function CourseExplorer({ courses }: { courses: Course[] }) {
  const [active, setActive] = useState<Course | null>(null);
  const close = () => setActive(null);
  const ref = useDialog<HTMLDivElement>(active !== null, close);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <CourseCard key={c.slug} course={c} onDetails={() => setActive(c)} />
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-espresso/70 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div
            ref={ref}
            role="dialog"
            aria-modal="true"
            aria-labelledby="course-dialog-title"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90svh] w-full max-w-xl overflow-y-auto rounded-md bg-ivory p-7 sm:p-10"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close course details"
              className="absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-full text-plum hover:bg-blush-soft"
            >
              <X size={22} aria-hidden />
            </button>
            <p className="eyebrow mb-3 text-gold-dark">Course details</p>
            <h3 id="course-dialog-title" className="pr-8 font-serif text-4xl text-plum">
              {active.name}
            </h3>
            <p className="mt-4 leading-relaxed text-taupe-dark">{active.overview}</p>

            {courseDetails(active).length > 0 ? (
              <dl className="mt-6 grid gap-4 border-t border-plum/10 pt-6 sm:grid-cols-2">
                {courseDetails(active).map((d) => (
                  <div key={d.label}>
                    <dt className="eyebrow text-taupe-dark">{d.label}</dt>
                    <dd className="mt-1 text-espresso">{d.value}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="mt-6 rounded-md bg-blush-soft p-3 text-sm text-plum">
                Duration, fee, schedule and certificate details have not been confirmed. Send an inquiry to ask about
                current availability.
              </p>
            )}

            <h4 className="eyebrow mt-6 text-plum">What you may explore</h4>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-espresso marker:text-gold">
              {active.topics.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <div className="mt-8">
              <Button
                type="button"
                onClick={() => {
                  const name = active.name;
                  close();
                  window.dispatchEvent(new CustomEvent(COURSE_EVENT, { detail: name }));
                  document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Inquire about this course
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
