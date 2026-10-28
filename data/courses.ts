export type Course = {
  slug: string;
  name: string;
  overview: string;
  /** Optional fields: leave undefined/empty and they will not be displayed. */
  duration?: string;
  fee?: string;
  startDate?: string;
  format?: string;
  requirements?: string;
  certificate?: string;
  topics: string[];
};

/**
 * CONFIGURABLE EXAMPLES — not confirmation that any course is currently
 * running. Add verified duration, fee, start date, format, requirements and
 * certificate information below; fields left empty are hidden by the UI.
 */
export const courses: Course[] = [
  {
    slug: "makeup-fundamentals",
    name: "Makeup Fundamentals",
    overview: "A starting point for anyone who wants to understand skin, tools and everyday makeup techniques.",
    topics: ["Skin preparation basics", "Brushes, tools and hygiene", "Colour and tone basics", "Everyday looks"],
  },
  {
    slug: "professional-makeup",
    name: "Professional Makeup",
    overview: "Explore the skills and techniques involved in working with clients as a makeup artist.",
    topics: ["Client consultation", "Face shapes and features", "Working with different skin tones", "Building a portfolio"],
  },
  {
    slug: "bridal-makeup",
    name: "Bridal Makeup",
    overview: "Learn about approaches to bridal looks for Barat, Walima, Nikkah and Mehndi.",
    topics: ["Planning a bridal look", "Eyes, lips and base for photography", "Pairing makeup with hairstyle and outfit"],
  },
  {
    slug: "party-makeup",
    name: "Party Makeup",
    overview: "Discover soft and statement looks for parties, dinners and celebrations.",
    topics: ["Day-to-night looks", "Eye shapes and shading", "Lip and cheek techniques"],
  },
  {
    slug: "advanced-techniques",
    name: "Advanced Makeup Techniques",
    overview: "For learners who already know the basics and want to refine and expand their technique.",
    topics: ["Precision and finishing", "Contour and highlight methods", "Creative colour work"],
  },
];

export const learningTopics = [
  "Skin preparation and base",
  "Eyes, brows and lashes",
  "Lips and cheeks",
  "Bridal and occasion looks",
  "Tools, brushes and hygiene",
  "Client communication",
];
