import { images, type SiteImage } from "./images";

export type InquiryType = "Bridal" | "Salon" | "Makeup" | "Academy" | "Other";

export type ServiceCategoryId = "bridal" | "hair" | "colour" | "skin" | "lessons";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  /** Short descriptive points shown on the services page. Edit freely. */
  highlights: string[];
  image: SiteImage;
  category: ServiceCategoryId;
  inquiryType: InquiryType;
  /** Leave null until verified pricing is supplied. */
  price: string | null;
};

export const PRICE_FALLBACK = "Contact us for details";

export const serviceCategories: { id: ServiceCategoryId; label: string }[] = [
  { id: "bridal", label: "Bridal & Occasion" },
  { id: "hair", label: "Hair Styling" },
  { id: "colour", label: "Colour & Treatments" },
  { id: "skin", label: "Skin & Beauty" },
  { id: "lessons", label: "Makeup Lessons" },
];

export const services: Service[] = [
  {
    slug: "bridal-makeup",
    title: "Bridal Makeup",
    short: "Looks for Barat, Walima, Nikkah and Mehndi, shaped around your outfit and personal style.",
    description:
      "Plan a bridal look for each event of your wedding. Share your outfit, colours and inspiration, and start a conversation about the style that feels right for you.",
    highlights: ["Barat, Walima, Nikkah and Mehndi looks", "Styling aligned to your outfit and preferences", "Enquire to discuss your date and requirements"],
    image: images.bridalRedVeil,
    category: "bridal",
    inquiryType: "Bridal",
    price: null,
  },
  {
    slug: "party-occasion-makeup",
    title: "Party & Occasion Makeup",
    short: "Makeup for engagements, dinners, family events and celebrations.",
    description:
      "From a soft everyday glow to a statement evening look, discuss the makeup that suits your event and your comfort level.",
    highlights: ["Engagements, dawats and celebrations", "Soft, classic or statement looks", "Enquire to discuss your event"],
    image: images.makeupBlush,
    category: "bridal",
    inquiryType: "Makeup",
    price: null,
  },
  {
    slug: "hair-styling",
    title: "Hair Styling",
    short: "Cuts, blow-dries, curls and occasion hairstyles for everyday and special days.",
    description:
      "Explore haircuts, styling and occasion hairstyles. Tell us about the look you have in mind and we will take it from there.",
    highlights: ["Haircuts and blow-dries", "Curls, waves and updos", "Occasion hairstyling to pair with makeup"],
    image: images.hairBlowdry,
    category: "hair",
    inquiryType: "Salon",
    price: null,
  },
  {
    slug: "hair-colour-treatments",
    title: "Hair Color & Treatments",
    short: "Colour services and care treatments for your hair routine.",
    description:
      "Ask about hair colour and treatment options. Suitability and results depend on your hair, so we recommend starting with an enquiry.",
    highlights: ["Colour services", "Care and conditioning treatments", "Enquire for suitability and availability"],
    image: images.hairColour,
    category: "colour",
    inquiryType: "Salon",
    price: null,
  },
  {
    slug: "skin-beauty-services",
    title: "Skin & Beauty Services",
    short: "Facials, hand and foot care and other personal-care services.",
    description:
      "Discover facials and beauty services for your self-care routine. Contact us to ask which services are currently offered.",
    highlights: ["Facials and skin care", "Manicure and pedicure", "Other beauty services — enquire for the current list"],
    image: images.facialTreatment,
    category: "skin",
    inquiryType: "Salon",
    price: null,
  },
  {
    slug: "makeup-lessons",
    title: "Makeup Lessons",
    short: "Learn makeup skills through NUMRA Academy learning opportunities.",
    description:
      "Interested in learning makeup — for yourself or professionally? Explore the Academy and send a course inquiry.",
    highlights: ["Makeup fundamentals to professional skills", "Explore the Academy for course options", "Send an inquiry for current availability"],
    image: images.palette,
    category: "lessons",
    inquiryType: "Academy",
    price: null,
  },
];

export type SalonService = {
  slug: string;
  title: string;
  description: string;
  image: SiteImage;
  price: string | null;
};

/** Edit this list to match the salon menu once services are verified. */
export const salonServices: SalonService[] = [
  { slug: "haircuts-styling", title: "Haircuts & Styling", description: "Cuts, blow-dries and everyday styling tailored to your hair and routine.", image: images.hairBlowdry, price: null },
  { slug: "hair-colour", title: "Hair Color", description: "Explore colour options and discuss what may suit you before booking.", image: images.hairColour, price: null },
  { slug: "hair-treatments", title: "Hair Treatments", description: "Care treatments for your hair routine. Ask us about current options.", image: images.hairWash, price: null },
  { slug: "occasion-hairstyling", title: "Occasion Hairstyling", description: "Updos, curls and styled looks for weddings, parties and celebrations.", image: images.hairUpdo, price: null },
  { slug: "facials-beauty", title: "Facials & Beauty Services", description: "Facials and skin-focused services for a relaxing self-care routine.", image: images.facialMask, price: null },
  { slug: "manicure-pedicure", title: "Manicure & Pedicure", description: "Hand and foot care, from classic polish to neat, polished finishes.", image: images.nails, price: null },
  { slug: "other-services", title: "Other Services", description: "Additional beauty services can be added here once confirmed. Contact us to ask what is available.", image: images.salonInterior, price: null },
];

export function inquiryHref(service: string, type?: InquiryType) {
  const params = new URLSearchParams({ service });
  if (type) params.set("type", type);
  return `/contact?${params.toString().replace(/\+/g, "%20")}`;
}
