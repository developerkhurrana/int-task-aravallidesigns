"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSuccess(true);
    setEmail("");
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section className="w-full bg-gradient-to-br from-aravalli-maroon to-aravalli-earth py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-playfair text-3xl font-bold text-aravalli-maroon sm:text-4xl">
            Join Our Journey
          </h2>
          <p className="mt-4 text-lg text-aravalli-beige">
            Subscribe to our newsletter for exclusive offers, new arrivals, and
            behind-the-scenes stories.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-xl">
          <form
            onSubmit={handleSubmit}
            className="relative flex w-full items-center gap-2 rounded-full bg-white/80 shadow-lg py-2 pl-6 pr-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-transparent text-sm text-aravalli-maroon placeholder-aravalli-maroon/60 focus:outline-none"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-br from-aravalli-maroon to-aravalli-earth px-5 py-2.5 text-sm font-semibold text-aravalli-beige transition-transform active:scale-[0.98] disabled:opacity-70 shadow-md"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span>Subscribing...</span>
                </div>
              ) : (
                <>
                  <span>Join Waitlist</span>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="-mr-4 h-4 w-4 opacity-0 transition-all group-hover:-mr-0 group-hover:opacity-100 group-active:-rotate-45"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </>
              )}
            </button>
          </form>
          {isSuccess && (
            <div className="mt-4 animate-fade-in rounded-lg bg-green-50 p-4 text-center text-green-700">
              Thank you for subscribing! We&apos;ll keep you updated with our
              latest collections.
            </div>
          )}
          <p className="mt-4 text-center text-sm text-aravalli-beige">
            By subscribing, you agree to our{" "}
            <a href="/privacy" className="text-white hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms" className="text-white hover:underline">
              Terms of Service
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
