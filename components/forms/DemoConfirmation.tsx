import { Info } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";

/** Shown after a valid demo submission. It never claims anything was sent or confirmed. */
export function DemoConfirmation({
  title,
  name,
  summary,
  onReset,
  children,
}: {
  title: string;
  name: string;
  summary: { label: string; value: string }[];
  onReset: () => void;
  children?: ReactNode;
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="rounded-lg border border-gold/50 bg-white p-6 shadow-soft sm:p-8"
    >
      <p className="eyebrow mb-3 text-gold-dark">Demo preview only</p>
      <h3 className="font-serif text-3xl text-plum">{title}</h3>
      <p className="mt-3 leading-relaxed text-taupe-dark">
        Thank you, {name.trim().split(" ")[0]}. Your details passed validation, but this website is a frontend
        demo — <strong className="text-espresso">nothing has been sent, saved or confirmed.</strong> To
        reach NUMRA, please use the contact details on this page.
      </p>
      <dl className="mt-6 grid gap-x-6 gap-y-3 border-t border-plum/10 pt-6 text-sm sm:grid-cols-2">
        {summary
          .filter((s) => s.value)
          .map((s) => (
            <div key={s.label}>
              <dt className="eyebrow text-taupe-dark">{s.label}</dt>
              <dd className="mt-0.5 break-words text-espresso">{s.value}</dd>
            </div>
          ))}
      </dl>
      <p className="mt-6 flex gap-2 rounded-md bg-blush-soft p-3 text-xs leading-relaxed text-plum">
        <Info size={16} className="mt-0.5 shrink-0" aria-hidden />
        This summary exists only in your browser and disappears when you leave or reset the form.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        {children}
        <Button variant="secondary" onClick={onReset} type="button">
          Edit or start again
        </Button>
      </div>
    </div>
  );
}

export function DemoNotice() {
  return (
    <p className="flex gap-2 rounded-md bg-blush-soft p-3 text-xs leading-relaxed text-plum">
      <Info size={16} className="mt-0.5 shrink-0" aria-hidden />
      Demo form: it validates your input but does not transmit or store your inquiry.
    </p>
  );
}
