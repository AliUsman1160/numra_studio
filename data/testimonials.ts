export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  detail?: string;
  /** Set to false ONLY for genuine, permitted client feedback. */
  placeholder: boolean;
};

/**
 * PLACEHOLDERS — these are not real reviews. Replace each entry with genuine,
 * permitted client feedback and set `placeholder: false`. The placeholder
 * label disappears automatically for verified entries. No star ratings are
 * shown anywhere.
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "Your verified client feedback will appear here. Replace this placeholder in data/testimonials.ts.",
    name: "Client name",
    detail: "Service or event",
    placeholder: true,
  },
  {
    id: "t2",
    quote: "Add a short, genuine quote shared with permission by a NUMRA client.",
    name: "Client name",
    detail: "Service or event",
    placeholder: true,
  },
  {
    id: "t3",
    quote: "Real experiences, in the words of real clients, will replace this sample text.",
    name: "Client name",
    detail: "Service or event",
    placeholder: true,
  },
];
