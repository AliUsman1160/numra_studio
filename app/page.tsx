import { AcademyPromo } from "@/components/home/AcademyPromo";
import { BookingCTA } from "@/components/home/BookingCTA";
import { BrandIntro } from "@/components/home/BrandIntro";
import { ExploreWorld } from "@/components/home/ExploreWorld";
import { Hero } from "@/components/home/Hero";
import { InstagramGrid } from "@/components/home/InstagramGrid";
import { SignatureLooks } from "@/components/home/SignatureLooks";
import { SignatureServices } from "@/components/home/SignatureServices";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyNumra } from "@/components/home/WhyNumra";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "NUMRA Makeup Studio & Salon | Bridal Makeup, Salon & Academy",
  description:
    "Explore bridal makeup, salon and hair services, and beauty education at NUMRA Makeup Studio & Salon in Lahore, Pakistan. Discover our services and inquire about appointments.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <ExploreWorld />
      <SignatureLooks />
      <SignatureServices />
      <WhyNumra />
      <AcademyPromo />
      <Testimonials />
      <InstagramGrid />
      <BookingCTA />
    </>
  );
}
