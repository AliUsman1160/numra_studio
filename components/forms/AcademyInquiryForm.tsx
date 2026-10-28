"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { courses } from "@/data/courses";
import { validateEmail, validateName, validatePhone, type FormErrors } from "@/lib/validation";
import { DemoConfirmation, DemoNotice } from "./DemoConfirmation";
import { SelectField, TextAreaField, TextField } from "./Field";

type Fields = { aname: string; aphone: string; aemail: string; course: string; level: string; amessage: string };
type Key = keyof Fields;

const levels = ["Complete beginner", "Some experience", "Already working in beauty"];
const empty: Fields = { aname: "", aphone: "", aemail: "", course: "", level: "", amessage: "" };

/** Dispatched by the course modal so its "Inquire" button preselects the course here. */
export const COURSE_EVENT = "numra:course-inquiry";

export function AcademyInquiryForm() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<FormErrors<Key>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onCourse = (e: Event) => {
      setValues((v) => ({ ...v, course: (e as CustomEvent<string>).detail }));
      setErrors((er) => ({ ...er, course: undefined }));
      setSubmitted(false);
    };
    window.addEventListener(COURSE_EVENT, onCourse);
    return () => window.removeEventListener(COURSE_EVENT, onCourse);
  }, []);

  const set = (k: Key) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next: FormErrors<Key> = {
      aname: validateName(values.aname),
      aphone: validatePhone(values.aphone),
      aemail: validateEmail(values.aemail),
      course: values.course ? undefined : "Please choose a course or “Not sure yet”.",
    };
    Object.keys(next).forEach((k) => next[k as Key] === undefined && delete next[k as Key]);
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      document.getElementById(first)?.focus();
      return;
    }
    setSubmitted(true);
  }

  const waMessage = `Hello NUMRA, I would like to ask about the Academy course: ${values.course || "available courses"}. ${values.amessage}`.trim();

  if (submitted) {
    return (
      <DemoConfirmation
        title="Academy inquiry completed (demo)"
        name={values.aname}
        onReset={() => setSubmitted(false)}
        summary={[
          { label: "Name", value: values.aname },
          { label: "Phone", value: values.aphone },
          { label: "Email", value: values.aemail },
          { label: "Course of interest", value: values.course },
          { label: "Experience", value: values.level },
          { label: "Message", value: values.amessage },
        ]}
      >
        <WhatsAppCTA message={waMessage} />
      </DemoConfirmation>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField id="aname" label="Full name" required autoComplete="name" value={values.aname} onChange={set("aname")} error={errors.aname} />
        <TextField id="aphone" label="Phone number" required type="tel" inputMode="tel" autoComplete="tel" placeholder="+92 …" value={values.aphone} onChange={set("aphone")} error={errors.aphone} />
      </div>
      <TextField id="aemail" label="Email address" type="email" autoComplete="email" value={values.aemail} onChange={set("aemail")} error={errors.aemail} />
      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField id="course" label="Course of interest" required value={values.course} onChange={set("course")} error={errors.course}>
          <option value="">Select…</option>
          {courses.map((c) => (
            <option key={c.slug} value={c.name}>
              {c.name}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </SelectField>
        <SelectField id="level" label="Your experience" value={values.level} onChange={set("level")}>
          <option value="">Prefer not to say</option>
          {levels.map((l) => (
            <option key={l} value={l}>
              {l}
            </option>
          ))}
        </SelectField>
      </div>
      <TextAreaField id="amessage" label="Questions or goals" rows={4} value={values.amessage} onChange={set("amessage")} />
      <DemoNotice />
      <div className="flex flex-wrap gap-3">
        <Button type="submit">Submit course inquiry (demo)</Button>
        <WhatsAppCTA message={waMessage} />
      </div>
    </form>
  );
}
