import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-aravalli-earth text-aravalli-beige pt-12 pb-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-aravalli-beige/20">
          {/* About */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-2">
              Aravalli Designs
            </h3>
            <p className="text-sm leading-relaxed">
              Timeless elegance in every thread. Discover our premium collection
              of ethnic wear that celebrates India&apos;s rich textile heritage.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-2">
              Quick Links
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:underline">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:underline">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Socials */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-2">
              Connect With Us
            </h3>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="hover:text-white"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
                className="hover:text-white"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-facebook"
                >
                  <path d="M18 2h-3a4 4 0 0 0-4 4v3H7v4h4v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-aravalli-beige/80 mt-6 flex flex-col items-center">
          <span className="flex items-center gap-1">
            Made with
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#e63946"
              className="inline w-4 h-4 mx-1"
            >
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
            by Khurrana
          </span>
        </div>
      </div>
    </footer>
  );
}
