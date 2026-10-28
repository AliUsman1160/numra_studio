import type { Metadata } from "next";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site-config";

export function buildMetadata({
  title,
  description,
  path,
  absoluteTitle,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.fullName}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: siteConfig.fullName,
      locale: "en_PK",
      type: "website",
      images: [{ url: images.heroBride.src, alt: "NUMRA — sample bridal imagery" }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}
