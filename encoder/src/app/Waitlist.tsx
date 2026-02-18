"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";

const perks = [
  "First access when we launch",
  "Founding member pricing locked in",
  "Direct input on features & roadmap",
  "Priority onboarding support",
];

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async () => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Please enter a valid email.");
      setState("error");
      return;
    }

    setState("loading");
    setErrorMsg("");

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdhe8ZESsv6ZL1CyAy2UO-IDF1pkCN3i3Un_uX5vUdzlz0CvQ/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            "entry.223456594": email,
          }).toString(),
        }
      );

      setState("success");
      setEmail("");
    } catch (error) {
      setErrorMsg("Something went wrong. Try again.");
      setState("error");
    }
  };

  return (
    <section
      id="waitlist"
      className="relative bg-black text-white py-24 md:py-32 px-4 md:px-6 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(255,255,255,0.07),transparent_60%)]" />

      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-[120px] pointer-events-none"
      />

      <div className="relative max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02] mb-5"
        >
          You bring the idea.
          <span className="block text-white/40">
            We build the rest.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/45 text-base md:text-lg mb-10 leading-relaxed"
        >
          Join the waitlist and be first to launch your entire business
          infrastructure from a single AI-powered system.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-8"
        >
          <AnimatePresence mode="wait">
            {state !== "success" ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (state === "error") setState("idle");
                  }}
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleSubmit()
                  }
                  className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/25 outline-none focus:border-white/25 focus:bg-white/[0.06] transition"
                />

                <button
                  onClick={handleSubmit}
                  disabled={state === "loading"}
                  className="flex items-center justify-center gap-2 rounded-xl bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition disabled:opacity-60 flex-shrink-0"
                >
                  {state === "loading" ? (
                    <Loader2
                      size={15}
                      className="animate-spin"
                    />
                  ) : (
                    <>
                      <span>Get Early Access</span>
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 py-4"
              >
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-emerald-400/15 border border-emerald-400/30">
                  <Check
                    size={15}
                    className="text-emerald-400"
                  />
                </div>
                <span className="text-white/70 text-sm">
                  You're on the list. We'll be in touch.
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {state === "error" && (
            <p className="text-red-400/70 text-xs mt-2">
              {errorMsg}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-3"
        >
          {perks.map((perk) => (
            <div
              key={perk}
              className="flex items-center gap-2 text-white/35 text-xs"
            >
              <Check
                size={12}
                className="text-white/30 flex-shrink-0"
              />
              {perk}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
