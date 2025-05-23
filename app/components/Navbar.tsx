"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navigation = [
  { name: "KURTIS", href: "/kurtis" },
  { name: "LEHENGAS", href: "/lehengas" },
  { name: "SAREES", href: "/sarees" },
  { name: "SUITS", href: "/suits" },
  { name: "DRESSES", href: "/dresses" },
  { name: "KAFTANS", href: "/kaftans" },
];

const mockCart = [
  {
    title: "Floral Print Kurta",
    price: "₹2,499",
    image:
      "https://i.pinimg.com/736x/e1/f9/c0/e1f9c0fb42b2e78f4123ad0f42b7c362.jpg",
    qty: 1,
  },
  {
    title: "Embroidered Lehenga",
    price: "₹12,999",
    image:
      "https://i.pinimg.com/736x/ca/8f/65/ca8f656c42cdd94fe352863dac442677.jpg",
    qty: 1,
  },
];

// Modern outlined SVG icons (Heroicons style)
const UserIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 0115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z"
    />
  </svg>
);
const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.239-4.5-5-4.5-1.54 0-2.94.805-3.75 2.016C11.94 4.555 10.54 3.75 9 3.75c-2.761 0-5 2.015-5 4.5 0 7.25 8 11 8 11s8-3.75 8-11z"
    />
  </svg>
);
const BagIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 10.5V7.125A4.125 4.125 0 0012.375 3h-.75A4.125 4.125 0 007.5 7.125V10.5m10.125 0h-13.5m13.5 0A2.625 2.625 0 0121 13.125v4.125A2.625 2.625 0 0118.375 19.875h-12.75A2.625 2.625 0 013 17.25v-4.125A2.625 2.625 0 015.625 10.5m13.5 0v0z"
    />
  </svg>
);

// Minimal icons for quantity and delete
const MinusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h12" />
  </svg>
);
const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);
const TrashIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);

  // Cart sheet close on Esc
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setCartOpen(false);
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md border-b border-aravalli-beige/40 font-sans">
        <nav className="flex items-center justify-between h-20 px-6 lg:px-12 font-sans">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col items-center justify-center leading-tight select-none"
            style={{ minWidth: 120 }}
          >
            <span className="font-playfair text-2xl lg:text-3xl font-extrabold text-aravalli-maroon tracking-tight">
              Ethnics
            </span>
            <span className="font-sans text-[10px] lg:text-xs font-light text-gray-500 tracking-widest mt-0 text-center">
              by Aravalli
            </span>
          </Link>

          {/* Nav Links */}
          <div className="flex-1 flex justify-center">
            <div className="flex gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-bold uppercase tracking-widest font-sans text-gray-800 hover:text-aravalli-maroon transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Search Bar */}
          <form
            className="flex items-center bg-white rounded-full border border-gray-300 focus-within:border-aravalli-maroon px-4 py-2 w-[400px] max-w-md mx-8 shadow-sm transition-colors"
            onSubmit={(e) => e.preventDefault()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#8B0000"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="flex-1 bg-transparent outline-none text-aravalli-maroon placeholder-aravalli-maroon/60 text-base font-sans"
            />
          </form>

          {/* Profile, Wishlist, Cart */}
          <div className="flex items-center gap-8 min-w-[120px] justify-end">
            <button
              aria-label="Profile"
              className="text-gray-800 hover:text-aravalli-maroon cursor-pointer"
            >
              <UserIcon className="w-6 h-6" />
            </button>
            <button
              aria-label="Wishlist"
              className="text-gray-800 hover:text-aravalli-maroon cursor-pointer"
            >
              <HeartIcon className="w-6 h-6" />
            </button>
            <button
              aria-label="Cart"
              className="text-gray-800 hover:text-aravalli-maroon cursor-pointer relative"
              onClick={() => setCartOpen(true)}
            >
              <BagIcon className="w-6 h-6" />
              <span className="absolute -top-1 -right-2 bg-aravalli-maroon text-white text-xs rounded-full px-1.5 py-0.5 font-bold">
                {mockCart.length}
              </span>
            </button>
          </div>
        </nav>
      </header>
      {/* Cart Sheet Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setCartOpen(false)}
          />
          {/* Sheet */}
          <aside className="ml-auto w-full max-w-md h-full bg-white shadow-2xl flex flex-col z-50 fixed right-0 top-0">
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h2 className="text-xl font-bold text-aravalli-maroon">
                Your Cart
              </h2>
              <button
                className="text-gray-500 hover:text-aravalli-maroon p-2"
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {mockCart.length === 0 ? (
                <p className="text-gray-500 text-center mt-8">
                  Your cart is empty.
                </p>
              ) : (
                <ul className="space-y-4">
                  {mockCart.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-4 border-b pb-4 last:border-b-0 last:pb-0"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-20 object-cover rounded-lg border"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-aravalli-maroon">
                          {item.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {item.price}
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            className="p-1 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <MinusIcon className="w-4 h-4" />
                          </button>
                          <span className="px-2 text-base font-semibold">
                            {item.qty}
                          </span>
                          <button
                            className="p-1 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <PlusIcon className="w-4 h-4" />
                          </button>
                          <button
                            className="ml-4 p-1 rounded-full border border-gray-300 hover:bg-red-100 transition-colors text-red-600"
                            aria-label="Remove from cart"
                          >
                            <TrashIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="px-6 py-4 border-t flex justify-end">
              <button
                className="px-6 py-3 rounded-full bg-aravalli-maroon text-white font-bold uppercase tracking-widest hover:bg-aravalli-earth transition-colors"
                onClick={() => setCartOpen(false)}
              >
                Checkout
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
