"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  TrendingUp,
  DollarSign,
  Users,
  Zap,
  BarChart2,
  ArrowUpRight,
} from "lucide-react";

const insights = [
  {
    icon: TrendingUp,
    label: "Growth Strategy",
    text: "Customers in tier-2 cities show 3.2× higher retention. Expand regional delivery zones.",
    delay: 0,
  },
  {
    icon: DollarSign,
    label: "Pricing Signal",
    text: "Premium tier conversion drops at $49. Optimal price point detected at $39.",
    delay: 0.1,
  },
  {
    icon: Users,
    label: "Behavior Pattern",
    text: "68% of churned users never completed onboarding step 3. Automate nudge.",
    delay: 0.2,
  },
  {
    icon: Zap,
    label: "Efficiency Gap",
    text: "Average delivery lag is 18 min above benchmark. Route optimization available.",
    delay: 0.3,
  },
  {
    icon: BarChart2,
    label: "Revenue Opportunity",
    text: "Upsell window is highest on day 7 post-signup. Trigger offer sequence.",
    delay: 0.4,
  },
];

export function AIIntelligence() {
  return (
    <section className="relative bg-[#050505] text-white py-15 md:py-15 px-4 md:px-6 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Animated glow sweep */}
      <motion.div
        animate={{ x: ["-60%", "60%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 -translate-y-1/2 h-[600px] w-[40%] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent blur-3xl pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] tracking-[0.25em] text-white/30 uppercase mb-4">
              The Intelligence Layer
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] mb-6">
              Your platform learns.{" "}
              <span className="text-white/40">Your business evolves.</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg leading-relaxed">
              As your business operates, it generates data — sales patterns, customer behavior,
              delivery performance, financial trends. Encoder doesn't just store it.
              It trains on it, continuously, without any configuration from you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-3"
          >
            {[
              { label: "Data Sources Connected", value: "Automatic" },
              { label: "Model Configuration Required", value: "None" },
              { label: "Training Frequency", value: "Continuous" },
              { label: "Insights Delivery", value: "Real-time" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between px-5 py-3.5 rounded-xl border border-white/[0.07] bg-white/[0.02]"
              >
                <span className="text-sm text-white/40">{stat.label}</span>
                <span className="text-sm font-semibold text-white/90">{stat.value}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Live feed label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <div className="flex items-center gap-2 mb-5">
            <div className="flex items-center gap-1.5">
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="h-1.5 w-1.5 rounded-full bg-emerald-400"
              />
              <span className="text-xs text-white/30 tracking-widest uppercase">
                Live Intelligence Feed
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {insights.map((insight, i) => (
            <motion.div
              key={insight.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: insight.delay }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative group rounded-xl border border-white/[0.08] bg-[#0a0a0a] p-5 overflow-hidden cursor-default"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_20%_20%,rgba(255,255,255,0.05),transparent_70%)]" />

              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <insight.icon size={14} className="text-white/40" />
                    <span className="text-[11px] text-white/35 tracking-wider uppercase">
                      {insight.label}
                    </span>
                  </div>
                  <ArrowUpRight size={13} className="text-white/20 group-hover:text-white/50 transition" />
                </div>

                <p className="text-sm text-white/65 leading-relaxed">{insight.text}</p>

                <div className="mt-4 h-px w-full bg-white/[0.06] relative overflow-hidden">
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                    className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Ghost card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-xl border border-white/[0.04] bg-[#070707] p-5 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="flex items-center gap-2 justify-center"
              >
                <BrainCircuit size={16} className="text-white/30" />
                <span className="text-xs text-white/30 tracking-widest">Analyzing…</span>
              </motion.div>
              <p className="text-[11px] text-white/15 mt-2">New insight incoming</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 md:mt-20 text-center"
        >
          <p className="text-white/30 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Not just a builder. Not just a management tool.{" "}
            <span className="text-white/60">
              An intelligent business advisor that gets smarter as you grow.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}