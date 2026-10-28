export type Branch = {
  id: string;
  name: string;
  city: string;
  /** Leave empty until the verified street address is supplied. */
  address: string;
  phone: string;
  mapUrl: string;
};

/**
 * PLACEHOLDER: branch details have not been supplied. Add or edit branches
 * here; the footer, contact page and inquiry forms update automatically.
 */
export const branches: Branch[] = [
  {
    id: "lahore",
    name: "Lahore",
    city: "Lahore, Pakistan",
    address: "",
    phone: "",
    mapUrl: "",
  },
];
