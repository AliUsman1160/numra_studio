/**
 * Central business configuration.
 *
 * Every value marked PLACEHOLDER is intentionally empty until NUMRA supplies
 * verified details. Empty values are hidden or shown as "to be confirmed" by
 * the UI — nothing here is invented. Update this file only; no component
 * contains contact details.
 */
export const siteConfig = {
  name: "NUMRA",
  fullName: "NUMRA Makeup Studio & Salon",
  tagline: "Makeup · Salon · Beauty Academy",
  city: "Lahore, Pakistan",
  // PLACEHOLDER: replace with the production domain before launch.
  url: "https://numra-studio.example",
  description:
    "NUMRA brings together makeup artistry, salon services and beauty education in Lahore, Pakistan.",

  social: {
    instagram: "https://www.instagram.com/numrams/",
    instagramHandle: "@numrams",
    // PLACEHOLDER: add verified links to enable them in the footer.
    facebook: "",
    tiktok: "",
    youtube: "",
  },

  // PLACEHOLDER: add verified phone numbers, e.g. ["+92 300 0000000"].
  phones: [] as string[],
  // PLACEHOLDER: add a verified email address.
  email: "",
  // PLACEHOLDER: digits only with country code, e.g. "923000000000".
  // When set, WhatsApp buttons appear automatically.
  whatsappNumber: "",

  // PLACEHOLDER: add verified opening hours, e.g. { days: "Mon – Sat", hours: "10:00 – 20:00" }.
  openingHours: [] as { days: string; hours: string }[],
};

export const hasContactDetails =
  siteConfig.phones.length > 0 || Boolean(siteConfig.email);

export function whatsappLink(message: string): string | null {
  if (!siteConfig.whatsappNumber) return null;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
