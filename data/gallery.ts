import { images, type SiteImage } from "./images";

export type GalleryCategory = "bridal" | "hair" | "salon" | "details";
export type BridalStyle = "barat" | "walima" | "nikkah" | "mehndi";

export type GalleryItem = SiteImage & {
  id: string;
  category: GalleryCategory;
  /** Present on bridal items so the Bridal page can filter by event. */
  bridalStyle?: BridalStyle;
  caption: string;
  /** Layout hint for editorial grids. */
  shape: "portrait" | "landscape" | "square";
};

export const galleryCategories: { id: GalleryCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "bridal", label: "Bridal & Occasion" },
  { id: "hair", label: "Hair Styling" },
  { id: "salon", label: "Salon" },
  { id: "details", label: "Beauty Details" },
];

export const bridalStyles: { id: BridalStyle | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "barat", label: "Barat" },
  { id: "walima", label: "Walima" },
  { id: "nikkah", label: "Nikkah" },
  { id: "mehndi", label: "Mehndi" },
];

const g = (
  id: string,
  img: SiteImage,
  category: GalleryCategory,
  caption: string,
  shape: GalleryItem["shape"] = "portrait",
  bridalStyle?: BridalStyle,
): GalleryItem => ({ id, ...img, category, caption, shape, bridalStyle });

/** Sample portfolio — replace image sources in data/images.ts with real work. */
export const galleryItems: GalleryItem[] = [
  g("b1", images.bridalRedVeil, "bridal", "Traditional red bridal look", "portrait", "barat"),
  g("b2", images.bridalPink, "bridal", "Soft-glam Nikkah styling", "portrait", "nikkah"),
  g("b3", images.bridalPeach, "bridal", "Elegant Walima tones", "portrait", "walima"),
  g("b4", images.bridalGoldGreen, "bridal", "Golden-toned bridal look", "portrait", "barat"),
  g("b5", images.bridalGlam, "bridal", "Contemporary bridal eyes", "portrait", "nikkah"),
  g("b6", images.bridalRedGoldC, "bridal", "Red and gold with bangles", "portrait", "barat"),
  g("b7", images.bridalTeal, "bridal", "Jewel-tone festive styling", "portrait", "mehndi"),
  g("b8", images.bridalGlow, "bridal", "Golden-hour bridal portrait", "portrait", "mehndi"),
  g("b9", images.bridalColourful, "bridal", "Soft bridal glow", "portrait", "walima"),
  g("b10", images.bridalNoseRing, "bridal", "Sparkling bridal eye detail", "portrait", "barat"),
  g("b11", images.bridalGoldBlack, "bridal", "Bridal henna and jewellery", "portrait", "mehndi"),
  g("b12", images.bridalOrnate, "bridal", "Ornate tikka and red dupatta", "portrait", "walima"),
  g("h1", images.hairBlowdry, "hair", "Blow-dry styling", "landscape"),
  g("h2", images.hairCurling, "hair", "Curls and waves", "landscape"),
  g("h3", images.hairUpdo, "hair", "Hairstyling at the chair", "portrait"),
  g("h4", images.hairColour, "hair", "Hair colour application", "landscape"),
  g("h5", images.hairColourVivid, "hair", "Colourful long waves", "portrait"),
  g("s1", images.salonInterior, "salon", "Modern salon interior", "landscape"),
  g("s2", images.salonChairs, "salon", "Styling stations", "landscape"),
  g("s3", images.facialTreatment, "salon", "Facial treatment", "landscape"),
  g("s4", images.nails, "salon", "Manicure station", "landscape"),
  g("s5", images.nailsPink, "salon", "Soft pink manicure", "portrait"),
  g("d1", images.eyeMakeup, "details", "Shimmer eye detail", "portrait"),
  g("d2", images.makeupFace, "details", "Eyeshadow application", "portrait"),
  g("d3", images.lashes, "details", "Lash detail", "portrait"),
  g("d4", images.redLipstick, "details", "Glowing skin close-up", "portrait"),
  g("d5", images.brushes, "details", "Professional brushes", "square"),
  g("d6", images.vanity, "details", "Vanity mirror", "portrait"),
];

export const bridalGallery = galleryItems.filter((i) => i.category === "bridal");

/** Instagram-style sample grid (not live posts). */
export const instagramSamples: SiteImage[] = [
  images.bridalRedRose,
  images.eyeMakeup,
  images.hairCurling,
  images.productsFlat,
  images.bridalPeach,
  images.nailsPink,
];
