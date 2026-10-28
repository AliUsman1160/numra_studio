export type FormErrors<T extends string> = Partial<Record<T, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateName(value: string): string | undefined {
  const v = value.trim();
  if (!v) return "Please enter your full name.";
  if (v.length < 2) return "Name looks too short.";
  return undefined;
}

export function validatePhone(value: string): string | undefined {
  const v = value.trim();
  if (!v) return "Please enter a phone number.";
  if (!/^[+\d\s\-()]+$/.test(v)) return "Use digits only (you may include +, spaces or dashes).";
  const digits = v.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) return "Enter a valid phone number with 10–15 digits.";
  return undefined;
}

export function validateEmail(value: string, required = false): string | undefined {
  const v = value.trim();
  if (!v) return required ? "Please enter your email address." : undefined;
  return EMAIL_RE.test(v) ? undefined : "Enter a valid email address, e.g. name@example.com.";
}

export function validateDate(value: string): string | undefined {
  if (!value) return undefined;
  const picked = new Date(`${value}T00:00:00`);
  if (Number.isNaN(picked.getTime())) return "Enter a valid date.";
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return picked < today ? "Preferred date cannot be in the past." : undefined;
}

export function validateMessage(value: string, min = 10): string | undefined {
  const v = value.trim();
  if (!v) return "Please tell us a little about your inquiry.";
  if (v.length < min) return `Please write at least ${min} characters.`;
  return undefined;
}

export function todayISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}
