export type Faq = {
  id: string;
  group: "General" | "Bridal" | "Salon" | "Academy";
  question: string;
  answer: string;
};

/** Answers direct visitors to contact NUMRA — no policies are invented. */
export const faqs: Faq[] = [
  {
    id: "bridal-inquire",
    group: "Bridal",
    question: "How can I inquire about bridal makeup?",
    answer: "Use the booking inquiry form on the Contact page and choose “Bridal”. Share your event, preferred date and any inspiration, and the NUMRA team can follow up with you.",
  },
  {
    id: "salon-explore",
    group: "Salon",
    question: "How can I explore salon services?",
    answer: "Visit the Salon page to browse hair, skin and beauty services, then send an inquiry about the ones that interest you. Contact NUMRA to confirm what is currently offered.",
  },
  {
    id: "dates",
    group: "General",
    question: "How can I ask about available appointment dates?",
    answer: "Add your preferred date in the inquiry form, or contact NUMRA directly. Availability can only be confirmed by the team.",
  },
  {
    id: "pricing",
    group: "General",
    question: "How do I inquire about service pricing?",
    answer: "Pricing is not listed on this website. Please contact NUMRA for details about the service you are interested in.",
  },
  {
    id: "courses",
    group: "Academy",
    question: "What makeup courses are available?",
    answer: "The Academy page lists configurable example courses. Please send an academy inquiry to ask which courses are currently available, along with their schedules and fees.",
  },
  {
    id: "branch",
    group: "General",
    question: "How can I contact a particular branch?",
    answer: "Branch details are listed on the Contact page once configured. Until then, use the inquiry form and mention the branch you would like to reach.",
  },
  {
    id: "enrol",
    group: "Academy",
    question: "How do I inquire about academy enrollment?",
    answer: "Use the Academy inquiry form to share your interest. Submitting an inquiry is not an application or confirmation of enrollment — the NUMRA team will advise on next steps.",
  },
  {
    id: "bridal-trial",
    group: "Bridal",
    question: "Can I ask about a trial or about makeup for family members?",
    answer: "You are welcome to ask. Mention it in your inquiry and NUMRA can tell you what is possible for your date.",
  },
];
