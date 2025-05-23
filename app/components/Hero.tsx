"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        <Image
          src="https://image.wedmegood.com/resized/1000X/uploads/member/1847805/1613723425_WhatsApp_Image_2021_02_19_at_1.56.21_PM__11_.jpeg"
          alt="Aravalli Designs Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.h1
              className="font-playfair text-5xl font-bold md:text-7xl lg:text-8xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Timeless Elegance in Every Thread
            </motion.h1>
            <motion.p
              className="mt-6 text-lg md:text-xl lg:text-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Discover our premium collection of ethnic wear
            </motion.p>
            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <button className="px-12 py-4 rounded-full bg-aravalli-maroon font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#a94444] transition-colors duration-200">
                Shop Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
