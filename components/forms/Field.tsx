import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const control =
  "w-full rounded-md border bg-white px-4 py-3 text-base text-espresso placeholder:text-taupe transition-colors focus:border-plum focus:outline-none focus:ring-2 focus:ring-gold/60 min-h-12";

type Common = { id: string; label: string; error?: string; hint?: string; required?: boolean };

function Wrapper({ id, label, error, hint, required, children }: Common & { children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-plum">
        {label}
        {required ? <span className="text-gold-dark" aria-hidden> *</span> : <span className="ml-1 font-normal text-taupe-dark">(optional)</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-xs text-taupe-dark">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-[#a3283d]">
          {error}
        </p>
      )}
    </div>
  );
}

function describedBy(id: string, error?: string, hint?: string) {
  return error ? `${id}-error` : hint ? `${id}-hint` : undefined;
}

export function TextField({
  id,
  label,
  error,
  hint,
  required,
  ...rest
}: Common & Omit<InputHTMLAttributes<HTMLInputElement>, "id">) {
  return (
    <Wrapper id={id} label={label} error={error} hint={hint} required={required}>
      <input
        id={id}
        name={id}
        required={false}
        aria-required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy(id, error, hint)}
        className={cn(control, error ? "border-[#a3283d]" : "border-plum/25")}
        {...rest}
      />
    </Wrapper>
  );
}

export function SelectField({
  id,
  label,
  error,
  hint,
  required,
  children,
  ...rest
}: Common & Omit<SelectHTMLAttributes<HTMLSelectElement>, "id">) {
  return (
    <Wrapper id={id} label={label} error={error} hint={hint} required={required}>
      <select
        id={id}
        name={id}
        aria-required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy(id, error, hint)}
        className={cn(control, error ? "border-[#a3283d]" : "border-plum/25")}
        {...rest}
      >
        {children}
      </select>
    </Wrapper>
  );
}

export function TextAreaField({
  id,
  label,
  error,
  hint,
  required,
  ...rest
}: Common & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id">) {
  return (
    <Wrapper id={id} label={label} error={error} hint={hint} required={required}>
      <textarea
        id={id}
        name={id}
        rows={5}
        aria-required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy(id, error, hint)}
        className={cn(control, "resize-y", error ? "border-[#a3283d]" : "border-plum/25")}
        {...rest}
      />
    </Wrapper>
  );
}
