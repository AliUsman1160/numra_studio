"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { images } from "@/data/images";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-plum text-ivory">
      <div className="mx-auto grid min-h-[100svh] max-w-[90rem] lg:grid-cols-12">
        <div className="relative z-10 flex flex-col justify-center px-5 pb-16 pt-32 sm:px-8 lg:col-span-6 lg:py-32 lg:pl-14 lg:pr-10 xl:pl-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="eyebrow mb-6 text-gold"
          >
            Makeup · Salon · Beauty Academy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[3.1rem] leading-[1.02] sm:text-7xl xl:text-[5.5rem]"
          >
            Beauty, Artistry
            <br />
            <em className="font-normal italic text-blush">&amp; Confidence.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-7 max-w-md text-base leading-relaxed text-ivory/80 sm:text-lg"
          >
            Discover personalized beauty services, timeless bridal looks, and professional learning experiences with
            NUMRA.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="/services" variant="light">
              Explore Our Services
            </Button>
            <Button href="/bridal" variant="outlineLight">
              Discover Bridal Looks
            </Button>
          </motion.div>
        </div>

        <div className="relative h-[70svh] lg:col-span-6 lg:h-auto">
          <Image
            src={images.heroBride.src}
            alt={images.heroBride.alt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[50%_20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-plum/60 via-transparent to-plum/30 lg:bg-gradient-to-r lg:from-plum/50 lg:via-transparent lg:to-transparent" />
          <p className="absolute bottom-4 right-4 rounded-full bg-espresso/60 px-3 py-1 text-[0.65rem] uppercase tracking-widest text-ivory/80 backdrop-blur">
            Illustrative image
          </p>
        </div>
      </div>

      <a
        href="#welcome"
        aria-label="Scroll to content"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory/70 hover:text-gold lg:flex"
      >
        <span className="eyebrow">Scroll</span>
        <motion.span
          aria-hidden
          className="block h-10 w-px origin-top bg-current"
          animate={{ scaleY: [0.2, 1, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </a>
    </section>
  );
}
