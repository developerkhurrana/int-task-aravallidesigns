"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function BrandStory() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="https://i.pinimg.com/736x/e1/f9/c0/e1f9c0fb42b2e78f4123ad0f42b7c362.jpg"
              alt="Aravalli Designs Story"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <motion.h2
              className="font-playfair text-3xl font-bold text-aravalli-maroon md:text-4xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              Our Story
            </motion.h2>
            <motion.p
              className="mt-4 text-lg text-gray-600"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              Founded with a passion for preserving India&apos;s rich textile
              heritage, Aravalli Designs brings together traditional
              craftsmanship and contemporary design. Each piece in our
              collection is a testament to the skilled artisans who pour their
              heart into creating these timeless garments.
            </motion.p>
            <motion.p
              className="mt-4 text-lg text-gray-600"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              We believe in sustainable fashion that celebrates our cultural
              roots while embracing modern aesthetics. Our designs are created
              with love, care, and attention to detail, ensuring that every
              garment tells a story of its own.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
