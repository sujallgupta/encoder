"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Paperclip, Github, Globe, Mic, ArrowRight } from "lucide-react";

const ideas = [
  "Build a global commerce infrastructure.",
  "Launch an AI-native operations platform.",
  "Create a vertically integrated digital business.",
  "Design a multi-region SaaS system with embedded payments.",
  "Build a full-stack marketplace with delivery and real-time analytics.",
  "Develop a scalable platform that runs your entire business.",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [ideaIndex, setIdeaIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");

  useEffect(() => {
    const current = ideas[ideaIndex];
    let timeout: NodeJS.Timeout;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => {
          setText(current.slice(0, text.length + 1));
        }, 26);
      } else {
        timeout = setTimeout(() => setPhase("pause"), 900);
      }
    }

    if (phase === "pause") {
      timeout = setTimeout(() => setPhase("deleting"), 500);
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(current.slice(0, text.length - 1));
        }, 18);
      } else {
        setPhase("typing");
        setIdeaIndex((prev) => (prev + 1) % ideas.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, ideaIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 overflow-hidden bg-black text-white">

      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.07),transparent_60%)]" />
      <div
        className="absolute inset-0 opacity-[0.03]
        [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
        [background-size:60px_60px]"
      />

      <div className="relative w-full max-w-5xl text-center">

        <div className="mb-6">
          <Link
            href="/careers"
            className="inline-flex items-center px-5 py-2 rounded-full border border-white/15 bg-white/[0.03] text-xs sm:text-sm text-white/60 hover:text-white hover:border-white/30 hover:bg-white/[0.06] transition"
          >
            We’re hiring
          </Link>
        </div>

        <h1
          className="
            font-semibold
            tracking-[-0.035em] sm:tracking-[-0.045em]
            leading-[1.1] sm:leading-[1.05]
            text-3xl sm:text-5xl md:text-6xl lg:text-7xl
            bg-gradient-to-b from-white via-white to-white/75
            bg-clip-text text-transparent
          "
        >
          The Operating System
          <br />
          for Modern Businesses.
        </h1>

        <p className="mt-6 sm:mt-10 text-white/60 text-base sm:text-lg max-w-2xl sm:max-w-3xl mx-auto leading-[1.7] sm:leading-[1.75]">
          Encoder builds and runs your entire business platform — from
          infrastructure to operations — unified in a single system.
        </p>

        <div className="mt-12 sm:mt-16 rounded-2xl border border-white/10 bg-[#111111]/80 backdrop-blur-xl p-5 sm:p-6 shadow-[0_0_120px_rgba(255,255,255,0.03)] max-w-4xl mx-auto">

          <textarea
            disabled
            value={text}
            className="w-full resize-none bg-transparent text-white/85 text-sm sm:text-base focus:outline-none h-14 sm:h-16 cursor-not-allowed"
          />

          <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div className="flex items-center gap-2 sm:gap-3">
              {[Paperclip, Github, Globe, Mic].map((Icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/50 hover:text-white transition"
                >
                  <Icon size={15} />
                </div>
              ))}
            </div>

            <button
              disabled
              className="
                w-full sm:w-auto
                flex items-center justify-center gap-1.5
                rounded-full
                bg-white/15
                px-4 sm:px-6
                py-2 sm:py-2.5
                text-xs sm:text-sm
                font-medium
                text-white
                hover:bg-white/25
                transition
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >
              <span className="whitespace-nowrap">Coming Soon</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
