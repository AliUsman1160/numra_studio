/**
 * Central image registry.
 *
 * All photography below is ILLUSTRATIVE stock imagery (Unsplash licence) used
 * as a stand-in until NUMRA's own portfolio is supplied. The people shown are
 * not NUMRA clients. To swap in real work, replace the `src` (drop files into
 * /public/images/portfolio/) — nothing else needs to change.
 */
export type SiteImage = { src: string; alt: string };

const s = (name: string, alt: string): SiteImage => ({
  src: `/images/stock/${name}.jpg`,
  alt,
});

export const images = {
  heroBride: s("bridal-red-flower", "Bride in a red and gold outfit with red roses in her styled hair (illustrative image)"),
  bridalRedVeil: s("bridal-red-veil", "Bride in red with a sheer dupatta and jewellery, looking at the camera (illustrative image)"),
  bridalRedRose: s("bridal-red-rose", "Bride in a red dress with a rose hair accessory (illustrative image)"),
  bridalGoldGreen: s("bridal-red-gold-a", "Bride in red and gold against a deep green backdrop (illustrative image)"),
  bridalGoldBlack: s("bridal-red-gold-b", "Bride with henna and gold jewellery in a black and red outfit (illustrative image)"),
  bridalRedGoldC: s("bridal-red-gold-c", "Bride in layered red jewellery with bangles and bridal makeup (illustrative image)"),
  bridalPeach: s("bridal-red-gold-d", "Bride lifting a blush dupatta over an orange embroidered outfit (illustrative image)"),
  bridalColourful: s("bridal-red-gold-e", "Bride in a green and gold necklace with soft bridal makeup (illustrative image)"),
  bridalNoseRing: s("bridal-nosering", "Close portrait of a bride with sparkling eye makeup and a nose ring (illustrative image)"),
  bridalOrnate: s("bridal-ornate", "Bride in red with an ornate tikka and gold necklace (illustrative image)"),
  bridalPink: s("bridal-crown", "Seated bride in soft pink and ivory with long curled hair (illustrative image)"),
  bridalGlam: s("bridal-pastel-flower", "Dramatic bridal eye makeup with a floral hair accessory (illustrative image)"),
  bridalTeal: s("bridal-poses", "Bride in a teal and gold embroidered outfit (illustrative image)"),
  bridalGlow: s("bridal-candle", "Bride in gold-toned attire holding glowing lights at dusk (illustrative image)"),
  eyeMakeup: s("makeup-applying", "Close-up of shimmer eyeshadow being applied with a brush (illustrative image)"),
  makeupFace: s("makeup-face", "Makeup artist applying eyeshadow to a model (illustrative image)"),
  makeupBlush: s("makeup-blush", "Makeup artist applying blush before an event (illustrative image)"),
  lashes: s("lashes", "Eyelash extension treatment in progress (illustrative image)"),
  redLipstick: s("red-lipstick", "Beauty close-up with a defined brow and glowing skin (illustrative image)"),
  brushes: s("brushes-black", "Professional makeup brushes arranged on a white surface (illustrative image)"),
  brushesJar: s("brushes-closeup", "Makeup brushes in a holder on a vanity (illustrative image)"),
  productsFlat: s("brushes-pink", "Makeup brushes, lipstick and compacts flat-lay (illustrative image)"),
  palette: s("palette-hand", "Hand holding an eyeshadow palette and brush (illustrative image)"),
  productsTable: s("products-table", "Professional makeup palettes and products on a table (illustrative image)"),
  cosmetics: s("cosmetics", "Eyeshadow palette, foundation and brushes flat-lay (illustrative image)"),
  vanity: s("vanity", "Makeup vanity mirror with warm lights (illustrative image)"),
  hairBlowdry: s("hair-blowdry", "Hairstylist blow-drying a client's hair (illustrative image)"),
  hairCurling: s("hair-curling", "Stylist curling a client's hair in a salon (illustrative image)"),
  hairUpdo: s("hair-updo", "Hairstylist working on a client in a bright salon (illustrative image)"),
  hairColour: s("hair-done", "Colourist applying hair colour to a client (illustrative image)"),
  hairColourVivid: s("hair-color-multi", "Long wavy hair with vivid colour (illustrative image)"),
  hairWash: s("hair-cut", "Client at a salon basin during a hair treatment (illustrative image)"),
  hairTools: s("hair-tools", "Hands holding brushes, scissors and tinting tools (illustrative image)"),
  salonInterior: s("salon-interior", "Modern salon interior with round mirrors and chairs (illustrative image)"),
  salonChairs: s("salon-chairs", "Salon chairs facing round mirrors (illustrative image)"),
  facialMask: s("facial-mask", "Client receiving a facial treatment (illustrative image)"),
  facialTreatment: s("facial-treatment", "Facial treatment with a cap and gloves (illustrative image)"),
  facialMassage: s("facial-massage", "Close-up of a facial massage (illustrative image)"),
  skincare: s("skincare-jade", "Skincare products and a jade roller (illustrative image)"),
  nails: s("nails-salon", "Manicure in progress at a nail station (illustrative image)"),
  nailsPink: s("nails-pink", "Hand with soft pink manicured nails (illustrative image)"),
  nailPolish: s("nails-polish", "Shelves of nail polish bottles (illustrative image)"),
} satisfies Record<string, SiteImage>;

export type ImageKey = keyof typeof images;
