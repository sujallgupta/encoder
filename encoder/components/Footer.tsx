"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const links = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Join Waitlist", href: "/waitlist" },
    { label: "Press", href: "" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "" },
    { label: "Terms of Service", href: "" },
    { label: "Cookie Policy", href: "" },
  ],
};

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/encoder.ai",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37a4 4 0 1 1-2.37-2.37 4 4 0 0 1 2.37 2.37z" />
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/encoderai",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 8 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      aria-label="Scroll to top"
      style={{ pointerEvents: visible ? "auto" : "none" }}
      className="group flex items-center gap-3"
    >
      <div className="relative h-10 w-10 rounded-full border border-white/[0.12] bg-white/[0.04] flex items-center justify-center overflow-hidden group-hover:border-white/[0.28] group-hover:bg-white/[0.08] transition-all duration-200">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-transparent to-white/[0.08]"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
        <motion.div
          animate={{ y: hovered ? -2 : 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          className="relative z-10"
        >
          <ArrowUp
            size={16}
            strokeWidth={2}
            className="text-white/40 group-hover:text-white/85 transition-colors duration-200"
          />
        </motion.div>
      </div>

      <span className="text-[11px] tracking-[0.2em] uppercase font-medium text-white/25 group-hover:text-white/55 transition-colors duration-200 whitespace-nowrap">
        Back to top
      </span>
    </motion.button>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-[#050505] text-white border-t border-white/[0.06] px-4 md:px-6 pt-16 pb-10 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 w-fit">
              <div className="h-9 w-9 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
                <Image src="/logo.svg" alt="Encoder" width={22} height={22} />
              </div>
              <span className="text-base font-semibold tracking-[0.18em] text-white/80">
                ENCODER
              </span>
            </Link>

            <p className="text-sm text-white/30 leading-relaxed max-w-xs mb-6">
              The AI business engine. Build, launch, manage, and scale your
              entire digital operation from one intelligent system.
            </p>

            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="h-8 w-8 flex items-center justify-center rounded-lg border border-white/8 bg-white/[0.02] text-white/30 hover:text-white/70 hover:border-white/15 transition"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-[10px] font-semibold tracking-[0.2em] text-white/25 uppercase mb-4">
                {group}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/40 hover:text-white/75 transition"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} Encoder. All rights reserved.
          </p>

          <ScrollToTopButton />
        </div>
      </div>
    </footer>
  );
}
