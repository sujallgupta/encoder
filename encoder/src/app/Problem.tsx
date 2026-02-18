"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  GitBranch,
  Server,
  Shield,
  Activity,
} from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const items = [
  { icon: Rocket, label: "Deployment" },
  { icon: GitBranch, label: "CI/CD" },
  { icon: Server, label: "Infrastructure" },
  { icon: Shield, label: "Security" },
  { icon: Activity, label: "Monitoring" },
];

export function Problem() {
  return (
    <section
      aria-labelledby="production-gap"
      className="relative isolate overflow-hidden bg-black px-6 py-24 md:py-32 text-white"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          animate={{
            x: ["-5%", "5%", "-5%"],
            y: ["-3%", "3%", "-3%"],
          }}
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.07), transparent 60%)",
          }}
          className="absolute inset-0"
        />

        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 h-full w-[40%] bg-gradient-to-r from-transparent via-white/5 to-transparent blur-3xl"
        />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.h2
            variants={fadeUp}
            id="production-gap"
            className="text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl"
          >
            <span className="block text-white/60">
              Vibe coding speeds up building.
            </span>
            <span className="block text-white">
              It does not handle production.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-lg text-white/60"
          >
            Production still requires engineering.
          </motion.p>

          <motion.ul
            variants={fadeUp}
            className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-8 text-sm text-white/50"
          >
            {items.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 transition hover:text-white/80"
              >
                <Icon
                  size={18}
                  strokeWidth={1.5}
                  className="text-white/30"
                  aria-hidden="true"
                />
                <span>{label}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}