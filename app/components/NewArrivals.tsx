import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Floral Print Kurta",
    price: "₹2,499",
    image:
      "https://i.pinimg.com/736x/e1/f9/c0/e1f9c0fb42b2e78f4123ad0f42b7c362.jpg",
    href: "/products/floral-print-kurta",
  },
  {
    title: "Embroidered Lehenga",
    price: "₹12,999",
    image:
      "https://i.pinimg.com/736x/ca/8f/65/ca8f656c42cdd94fe352863dac442677.jpg",
    href: "/products/embroidered-lehenga",
  },
  {
    title: "Silk Saree",
    price: "₹8,999",
    image:
      "https://i.pinimg.com/736x/d9/4b/16/d94b163bfe53c06122550bd3cdeaf180.jpg",
    href: "/products/silk-saree",
  },
  {
    title: "Designer Anarkali",
    price: "₹5,999",
    image:
      "https://i.pinimg.com/736x/3d/2c/52/3d2c52da6ba67af4203cee1b6eaf45dd.jpg",
    href: "/products/designer-anarkali",
  },
];

export function NewArrivals() {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          New Arrivals
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link key={product.title} href={product.href} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-gray-900">
                  {product.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="/shop"
            className="px-12 py-4 rounded-full bg-aravalli-maroon font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#a94444] transition-colors duration-200"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
