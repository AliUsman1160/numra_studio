import { FilterableGallery } from "@/components/gallery/FilterableGallery";
import { BookingCTA } from "@/components/home/BookingCTA";
import { PageHero } from "@/components/ui/PageHero";
import { galleryItems } from "@/data/gallery";
import { images } from "@/data/images";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Gallery",
  description:
    "A visual portfolio of bridal and occasion makeup, hair styling, salon moments and beauty details from NUMRA Makeup Studio & Salon.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            A portfolio of <em className="italic text-blush">beauty.</em>
          </>
        }
        description="Bridal looks, hair styling, salon moments and the details that matter. Filter by category and tap any image to enlarge."
        image={images.bridalNoseRing}
      />
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="mb-8 text-sm text-taupe-dark">
            Images are illustrative sample photography until NUMRA&apos;s own portfolio is added.
          </p>
          <FilterableGallery items={galleryItems} mode="category" />
        </div>
      </section>
      <BookingCTA />
    </>
  );
}
