import type { Course } from "@/data/courses";

/** Returns only the optional course fields that contain information. */
export function courseDetails(c: Course) {
  return [
    { label: "Duration", value: c.duration },
    { label: "Fee", value: c.fee },
    { label: "Start date", value: c.startDate },
    { label: "Format", value: c.format },
    { label: "Requirements", value: c.requirements },
    { label: "Certificate", value: c.certificate },
  ].filter((d): d is { label: string; value: string } => Boolean(d.value?.trim()));
}

export function CourseCard({ course, onDetails }: { course: Course; onDetails?: () => void }) {
  const details = courseDetails(course);
  return (
    <article className="flex h-full flex-col rounded-sm border border-plum/10 bg-white p-7 transition-shadow hover:shadow-soft">
      <p className="eyebrow text-gold-dark">Example course</p>
      <h3 className="mt-3 font-serif text-2xl text-plum">{course.name}</h3>
      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-taupe-dark">{course.overview}</p>
      {details.length > 0 && (
        <ul className="mt-4 space-y-1 text-sm text-espresso">
          {details.slice(0, 3).map((d) => (
            <li key={d.label}>
              <span className="text-taupe-dark">{d.label}:</span> {d.value}
            </li>
          ))}
        </ul>
      )}
      {onDetails && (
        <button
          type="button"
          onClick={onDetails}
          aria-haspopup="dialog"
          className="mt-6 self-start text-[0.78rem] font-medium uppercase tracking-[0.16em] text-plum underline-offset-8 hover:text-gold-dark hover:underline"
        >
          View details <span aria-hidden>→</span>
          <span className="sr-only"> for {course.name}</span>
        </button>
      )}
    </article>
  );
}
