"use client";

import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";

const replaced = [
  { name: "Webflow",    category: "Website Builder"     },
  { name: "Firebase",   category: "Backend / Database"  },
  { name: "Shopify",    category: "eCommerce"           },
  { name: "Stripe",     category: "Payments"            },
  { name: "Mixpanel",   category: "Analytics"           },
  { name: "OneSignal",  category: "Push Notifications"  },
  { name: "Vercel",     category: "Hosting / Deploy"    },
  { name: "Expo",       category: "Mobile Apps"         },
];

const encoderGets = [
  { text: "Website & mobile apps generated from intent",  tag: "Builder"        },
  { text: "Backend, APIs & database — auto-wired",        tag: "Infrastructure" },
  { text: "Built-in payments & income tracking",          tag: "Finance"        },
  { text: "Real-time analytics & business insights",      tag: "Intelligence"   },
  { text: "Push notifications managed automatically",     tag: "Engagement"     },
  { text: "Zero-config hosting & live deployments",       tag: "DevOps"         },
  { text: "AI that learns from your business data",       tag: "AI Layer"       },
  { text: "One dashboard for your entire operation",      tag: "Control"        },
];

const stats = [
  { value: "8×", label: "Fewer tools to manage"  },
  { value: "0",  label: "Integration headaches"  },
  { value: "1",  label: "Unified system"         },
];

export function WhatYouReplace() {
  return (
    <section className="relative bg-black text-white py-2 md:py-32 px-4 md:px-6 overflow-hidden">

      <div className="absolute inset-0 opacity-[0.022] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellips0e_80%_50%_at_50%_50%,rgba(255,255,255,0.03),transparent)]" />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-white/15" />
            <p className="text-[10px] tracking-[0.28em] text-white/30 uppercase font-medium">Tool Consolidation</p>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.02]">
              Eight tools. <span className="text-white/25">One system.</span>
            </h2>
            <p className="text-white/35 text-sm md:text-base max-w-xs leading-relaxed md:text-right">
              Stop stitching together platforms that were never designed to work as one.
            </p>
          </div>
        </motion.div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-4">

          {/* Before */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl border border-white/[0.07] bg-[#080808] overflow-hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-2.5">
                <div className="h-1.5 w-1.5 rounded-full bg-rose-400/60" />
                <span className="text-[10px] font-medium tracking-[0.22em] text-white/25 uppercase">Before Encoder</span>
              </div>
              <span className="text-[11px] text-white/20 tabular-nums">8 tools</span>
            </div>

            <div className="divide-y divide-white/[0.04]">
              {replaced.map((tool, i) => (
                <motion.div key={tool.name} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.04 + i * 0.05 }}
                  className="flex items-center justify-between px-6 py-3.5 group hover:bg-white/[0.02] transition-colors duration-150">
                  <div className="flex items-center gap-3">
                    <Minus size={12} className="text-rose-400/45 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-[13px] text-white/40 font-medium group-hover:text-white/60 transition-colors">{tool.name}</span>
                  </div>
                  <span className="text-[11px] text-white/18 tracking-wide">{tool.category}</span>
                </motion.div>
              ))}
            </div>

            <div className="px-6 py-4 border-t border-white/[0.05] bg-rose-950/10">
              <p className="text-[11px] text-white/22 leading-relaxed">
                Avg. <span className="text-white/40 font-medium">$800–$3,000 / mo</span> · Multiple contracts · Endless integrations
              </p>
            </div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-2xl border border-white/[0.11] bg-[#080808] overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_0%,rgba(255,255,255,0.04),transparent_55%)] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="relative flex items-center justify-between px-6 py-4 border-b border-white/[0.07]">
              <div className="flex items-center gap-2.5">
                <motion.div animate={{ opacity: [1, 0.35, 1] }} transition={{ duration: 2.2, repeat: Infinity }} className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                <span className="text-[10px] font-medium tracking-[0.22em] text-white/25 uppercase">With Encoder</span>
              </div>
              <span className="text-[11px] text-emerald-400/40 tabular-nums">1 system</span>
            </div>

            <div className="relative divide-y divide-white/[0.04]">
              {encoderGets.map((item, i) => (
                <motion.div key={item.text} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                  className="flex items-center justify-between px-6 py-3.5 group hover:bg-white/[0.03] transition-colors duration-150">
                  <div className="flex items-center gap-3">
                    <Check size={12} className="text-emerald-400/60 flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-[13px] text-white/50 group-hover:text-white/80 transition-colors">{item.text}</span>
                  </div>
                  <span className="text-[10px] text-white/18 tracking-wide whitespace-nowrap ml-4">{item.tag}</span>
                </motion.div>
              ))}
            </div>

            <div className="relative px-6 py-4 border-t border-white/[0.06] bg-emerald-950/15">
              <p className="text-[11px] text-white/22 leading-relaxed">
                One platform · <span className="text-white/40 font-medium">One subscription</span> · Everything connected
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 divide-x divide-white/[0.06] rounded-2xl border border-white/[0.07] bg-[#080808] overflow-hidden"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-6 text-center group hover:bg-white/[0.02] transition-colors duration-200">
              <p className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] text-white/75 mb-1.5">{stat.value}</p>
              <p className="text-[11px] text-white/28 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}