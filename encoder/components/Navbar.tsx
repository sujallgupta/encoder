
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 52);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <AnimatePresence initial={false} mode="wait">

        {!scrolled && (
          <motion.nav
            key="full"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28 }}
            className="pointer-events-auto w-full"
          >
            <div className="relative w-full backdrop-blur-xl border-b border-white/5 bg-black/70">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
                <div className="flex items-center justify-between h-[64px] sm:h-[72px] md:h-[80px]">

                  <Link
                    href="/"
                    onClick={scrollToTop}
                    className="flex items-center gap-2 sm:gap-3"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <Image
                        src="/logo.svg"
                        alt="Encoder"
                        width={20}
                        height={20}
                        priority
                      />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-white/60">
                      Encoder
                    </span>
                  </Link>

                  <div className="flex items-center gap-2 sm:gap-3">

                    <Link
                      href="/careers"
                      className="px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-[12px] rounded-full text-white/50 hover:text-white transition"
                    >
                      Careers
                    </Link>

                    <Link
                      href="/waitlist"
                      className="flex items-center gap-1.5 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-[11px] sm:text-[12px] font-medium border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:border-white/25 transition"
                    >
                      Join Waitlist
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path
                          d="M1 5h8M5 1l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </motion.nav>
        )}

        {scrolled && (
          <motion.nav
            key="pill"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto mt-3 sm:mt-4"
          >
            <div className="flex items-center gap-1 sm:gap-2 rounded-full border border-white/10 bg-black/90 backdrop-blur-xl px-2 sm:px-3 h-[42px] sm:h-[48px] shadow-xl">

              <button
                onClick={scrollToTop}
                className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <Image
                  src="/logo.svg"
                  alt="Encoder"
                  width={16}
                  height={16}
                />
              </button>

              <Link
                href="/careers"
                className="px-3 py-1.5 text-[11px] sm:text-[12px] rounded-full text-white/50 hover:text-white hover:bg-white/5 transition"
              >
                Careers
              </Link>

              <Link
                href="/waitlist"
                className="flex items-center gap-1 rounded-full px-3.5 sm:px-4 py-1.5 text-[11px] sm:text-[12px] font-medium border border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:border-white/25 transition"
              >
                Waitlist
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M1 5h8M5 1l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>

            </div>
          </motion.nav>
        )}

      </AnimatePresence>
    </div>
  );
}
