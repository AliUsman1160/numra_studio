"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { branches } from "@/data/branches";
import { services, type InquiryType } from "@/data/services";
import {
  todayISO,
  validateDate,
  validateEmail,
  validateMessage,
  validateName,
  validatePhone,
  type FormErrors,
} from "@/lib/validation";
import { DemoConfirmation, DemoNotice } from "./DemoConfirmation";
import { SelectField, TextAreaField, TextField } from "./Field";

const inquiryTypes: InquiryType[] = ["Bridal", "Salon", "Makeup", "Academy", "Other"];

type Fields = {
  name: string;
  phone: string;
  email: string;
  type: string;
  branch: string;
  date: string;
  message: string;
};
type Key = keyof Fields;

function validate(v: Fields): FormErrors<Key> {
  const errors: FormErrors<Key> = {
    name: validateName(v.name),
    phone: validatePhone(v.phone),
    email: validateEmail(v.email),
    type: v.type ? undefined : "Please choose an inquiry type.",
    date: validateDate(v.date),
    message: validateMessage(v.message),
  };
  Object.keys(errors).forEach((k) => errors[k as Key] === undefined && delete errors[k as Key]);
  return errors;
}

function initialFrom(params: URLSearchParams): Fields {
  const service = params.get("service") ?? "";
  const known = services.find((s) => s.title.toLowerCase() === service.toLowerCase());
  const typeParam = params.get("type");
  const type =
    inquiryTypes.find((t) => t === typeParam) ?? known?.inquiryType ?? (service ? "Other" : "");
  return {
    name: "",
    phone: "",
    email: "",
    type,
    branch: "",
    date: "",
    message: service ? `I would like to ask about: ${service}.` : "",
  };
}

/** Keyed by the query string so a new `?service=` link resets the prefill. */
export function BookingInquiryForm() {
  const params = useSearchParams();
  return <InquiryFormInner key={params.toString()} params={params} />;
}

function InquiryFormInner({ params }: { params: URLSearchParams }) {
  const [values, setValues] = useState<Fields>(() => initialFrom(params));
  const [errors, setErrors] = useState<FormErrors<Key>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k: Key) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    const first = Object.keys(next)[0];
    if (first) {
      document.getElementById(first)?.focus();
      return;
    }
    setSubmitted(true);
  }

  const waMessage = `Hello NUMRA, I would like to inquire about ${values.type || "your services"}${
    values.date ? ` around ${values.date}` : ""
  }. ${values.message}${values.name ? ` — ${values.name}` : ""}`.trim();

  if (submitted) {
    const branchName = branches.find((b) => b.id === values.branch)?.name ?? "";
    return (
      <DemoConfirmation
        title="Inquiry form completed (demo)"
        name={values.name}
        onReset={() => setSubmitted(false)}
        summary={[
          { label: "Name", value: values.name },
          { label: "Phone", value: values.phone },
          { label: "Email", value: values.email },
          { label: "Inquiry type", value: values.type },
          { label: "Preferred branch", value: branchName },
          { label: "Preferred date", value: values.date },
          { label: "Message", value: values.message },
        ]}
      >
        <WhatsAppCTA message={waMessage} />
      </DemoConfirmation>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <TextField id="name" label="Full name" required autoComplete="name" value={values.name} onChange={set("name")} error={errors.name} />
        <TextField id="phone" label="Phone number" required type="tel" autoComplete="tel" inputMode="tel" placeholder="+92 …" value={values.phone} onChange={set("phone")} error={errors.phone} />
      </div>
      <TextField id="email" label="Email address" type="email" autoComplete="email" value={values.email} onChange={set("email")} error={errors.email} />
      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField id="type" label="Inquiry type" required value={values.type} onChange={set("type")} error={errors.type}>
          <option value="">Select…</option>
          {inquiryTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </SelectField>
        {branches.length > 0 && (
          <SelectField id="branch" label="Preferred branch" value={values.branch} onChange={set("branch")}>
            <option value="">No preference</option>
            {branches.map((b) => (
              <option key={b.id} value={b.id}>
                {b.name}
              </option>
            ))}
          </SelectField>
        )}
      </div>
      <TextField
        id="date"
        label="Preferred appointment date"
        type="date"
        min={todayISO()}
        hint="If applicable. Availability can only be confirmed by NUMRA."
        value={values.date}
        onChange={set("date")}
        error={errors.date}
      />
      <TextAreaField id="message" label="Message" required value={values.message} onChange={set("message")} error={errors.message} />
      <DemoNotice />
      <div className="flex flex-wrap gap-3">
        <Button type="submit">Submit inquiry (demo)</Button>
        <WhatsAppCTA message={waMessage} />
      </div>
    </form>
  );
}
