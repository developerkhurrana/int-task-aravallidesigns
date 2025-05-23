import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Kurtis",
    image:
      "https://i.pinimg.com/736x/b3/fb/1c/b3fb1c48b3a6642b80f908378eb06973.jpg",
    href: "/kurtis",
  },
  {
    title: "Lehengas",
    image:
      "https://i.pinimg.com/736x/5c/76/14/5c7614806f230ae9402c744abd0b4bc6.jpg",
    href: "/lehengas",
  },
  {
    title: "Sarees",
    image:
      "https://i.pinimg.com/736x/a1/4d/9f/a14d9f9b10149cfcd555c2dffa4551fc.jpg",
    href: "/sarees",
  },
];

export function CategoryHighlights() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Shop by Category
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg"
            >
              <div className="relative h-full w-full">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
