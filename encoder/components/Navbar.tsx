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
    <>
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .nav-shimmer::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%);
          animation: shimmer 4s ease-in-out infinite;
        }
        .pill-btn {
          position: relative;
          display: flex;
          align-items: center;
          border-radius: 9999px;
          transition: all 0.2s;
        }
        .pill-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: rgba(255,255,255,0);
          transition: background 0.2s;
        }
        .pill-btn:hover::before {
          background: rgba(255,255,255,0.05);
        }
      `}</style>

      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <AnimatePresence initial={false} mode="wait">
          {!scrolled && (
            <motion.nav
              key="full"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="pointer-events-auto w-full"
            >
              <div
                className="relative w-full overflow-hidden"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0) 100%)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.12) 70%, transparent 100%)",
                  }}
                />

                <div
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)",
                  }}
                />

                <div className="mx-auto max-w-7xl px-6 md:px-10">
                  <div className="flex items-center justify-between h-[72px] md:h-[80px]">
                    <Link
                      href="/"
                      onClick={scrollToTop}
                      className="flex items-center gap-3 select-none group flex-shrink-0"
                    >
                      <div
                        className="relative flex items-center justify-center transition-all duration-300"
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 12,
                          border: "1px solid rgba(255,255,255,0.08)",
                          background: "rgba(255,255,255,0.03)",
                          boxShadow: "0 0 0 0 rgba(255,255,255,0)",
                          transition:
                            "border-color 0.3s, background 0.3s, box-shadow 0.3s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor =
                            "rgba(255,255,255,0.18)";
                          (e.currentTarget as HTMLElement).style.background =
                            "rgba(255,255,255,0.06)";
                          (e.currentTarget as HTMLElement).style.boxShadow =
                            "0 0 20px rgba(255,255,255,0.04)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor =
                            "rgba(255,255,255,0.08)";
                          (e.currentTarget as HTMLElement).style.background =
                            "rgba(255,255,255,0.03)";
                          (e.currentTarget as HTMLElement).style.boxShadow =
                            "0 0 0 0 rgba(255,255,255,0)";
                        }}
                      >
                        <Image
                          src="/logo.svg"
                          alt="Encoder"
                          width={25}
                          height={24}
                          priority
                          className="object-contain"
                        />
                      </div>
                      <span
                        className="text-[11px] font-semibold tracking-[0.28em] uppercase transition-colors duration-300"
                        style={{
                          color: "rgba(255,255,255,0.55)",
                          letterSpacing: "0.28em",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color =
                            "rgba(255,255,255,0.9)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color =
                            "rgba(255,255,255,0.55)")
                        }
                      >
                        Encoder
                      </span>
                    </Link>

                    <div className="flex-1" />

                    <div className="flex items-center gap-1.5">
                      <Link
                        href="/careers"
                        className="relative px-4 py-2 text-[12px] font-medium rounded-full transition-all duration-200 tracking-wide"
                        style={{ color: "rgba(255,255,255,0.45)" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.color =
                            "rgba(255,255,255,0.85)";
                          (e.currentTarget as HTMLElement).style.background =
                            "rgba(255,255,255,0.05)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.color =
                            "rgba(255,255,255,0.45)";
                          (e.currentTarget as HTMLElement).style.background =
                            "transparent";
                        }}
                      >
                        Careers
                      </Link>

                      <div
                        style={{
                          width: 1,
                          height: 14,
                          background: "rgba(255,255,255,0.08)",
                        }}
                      />

                      <Link
                        href="/waitlist"
                        className="relative group flex items-center gap-2 rounded-full px-5 py-2.5 text-[12px] font-medium overflow-hidden transition-all duration-200 ml-1"
                        style={{
                          color: "rgba(255,255,255,0.8)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          background: "rgba(255,255,255,0.05)",
                          boxShadow:
                            "0 1px 2px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background =
                            "rgba(255,255,255,0.09)";
                          (e.currentTarget as HTMLElement).style.borderColor =
                            "rgba(255,255,255,0.22)";
                          (e.currentTarget as HTMLElement).style.color =
                            "rgba(255,255,255,1)";
                          (e.currentTarget as HTMLElement).style.boxShadow =
                            "0 2px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background =
                            "rgba(255,255,255,0.05)";
                          (e.currentTarget as HTMLElement).style.borderColor =
                            "rgba(255,255,255,0.12)";
                          (e.currentTarget as HTMLElement).style.color =
                            "rgba(255,255,255,0.8)";
                          (e.currentTarget as HTMLElement).style.boxShadow =
                            "0 1px 2px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)";
                        }}
                      >
                        <span className="tracking-wide">Join Waitlist</span>
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                          style={{
                            color: "rgba(255,255,255,0.4)",
                            transition: "transform 0.2s",
                          }}
                        >
                          <path
                            d="M1.5 5.5h8M5.5 1.5l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.4"
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
              initial={{ opacity: 0, y: -20, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.96 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto mt-4"
            >
              <div
                className="nav-shimmer relative flex items-center gap-0 overflow-hidden"
                style={{
                  height: 48,
                  borderRadius: 9999,
                  border: "1px solid rgba(255,255,255,0.09)",
                  background: "rgba(8,8,8,0.92)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  boxShadow:
                    "0 8px 40px rgba(0,0,0,0.7), 0 1px 0 rgba(255,255,255,0.06) inset, 0 -1px 0 rgba(0,0,0,0.5) inset",
                  padding: "0 6px",
                  gap: 2,
                }}
              >
                <div
                  className="absolute top-0 left-12 right-12 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(255,255,255,0.14) 50%, transparent)",
                  }}
                />

                <button
                  onClick={scrollToTop}
                  className="relative flex items-center justify-center flex-shrink-0 transition-all duration-200"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 9999,
                    border: "1px solid rgba(255,255,255,0.09)",
                    background: "rgba(255,255,255,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.09)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.09)";
                  }}
                >
                  <Image
                    src="/logo.svg"
                    alt="Encoder"
                    width={18}
                    height={18}
                    priority
                  />
                </button>

                <div
                  style={{
                    width: 1,
                    height: 16,
                    background: "rgba(255,255,255,0.07)",
                    margin: "0 6px",
                  }}
                />

                <Link
                  href="/careers"
                  className="transition-all duration-200 rounded-full px-3.5 py-1.5 text-[11.5px] tracking-wide whitespace-nowrap"
                  style={{ color: "rgba(255,255,255,0.38)", fontWeight: 400 }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.78)";
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.38)";
                    (e.currentTarget as HTMLElement).style.background =
                      "transparent";
                  }}
                >
                  Careers
                </Link>

                <div
                  style={{
                    width: 1,
                    height: 16,
                    background: "rgba(255,255,255,0.07)",
                    margin: "0 6px",
                  }}
                />

                <Link
                  href="/waitlist"
                  className="relative flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[11.5px] font-medium whitespace-nowrap transition-all duration-200"
                  style={
                    {
                      color: "rgba(255,255,255,0.75)",
                      border: "1px solid rgba(255,255,255,0.11)",
                      background: "rgba(255,255,255,0.06)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)",
                      trackingWide: "0.02em",
                    } as React.CSSProperties
                  }
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,1)";
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.11)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.75)";
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.11)";
                  }}
                >
                  <span>Waitlist</span>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M1 5h8M5 1l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.35"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeOpacity="0.5"
                    />
                  </svg>
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
