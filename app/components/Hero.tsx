"use client";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://image.wedmegood.com/resized/1000X/uploads/member/1847805/1613723425_WhatsApp_Image_2021_02_19_at_1.56.21_PM__11_.jpeg"
          alt="Aravalli Designs Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="font-playfair text-5xl font-bold md:text-7xl lg:text-8xl">
              Timeless Elegance in Every Thread
            </h1>
            <p className="mt-6 text-lg md:text-xl lg:text-2xl">
              Discover our premium collection of ethnic wear
            </p>
            <div className="mt-8 flex justify-center">
              <button className="px-12 py-4 rounded-full bg-aravalli-maroon font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#a94444] transition-colors duration-200">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
