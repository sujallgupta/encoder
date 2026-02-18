"use client";

import { motion } from "framer-motion";
import { MessageSquare, Wand2, Rocket } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Strategic Blueprint",
      description:
        "Define the outcome — not the features. High-level intent is translated into structured architecture, operational systems, and scalable foundations.",
      example:
        "Global logistics network · Embedded payments · Real-time intelligence",
    },
    {
      number: "02",
      icon: Wand2,
      title: "Infrastructure Generation",
      description:
        "End-to-end systems are generated automatically — application layer, APIs, data pipelines, automation workflows, and deployment environments.",
      example:
        "Web platform · Native apps · Control systems · Cloud infrastructure",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Operational Scale",
      description:
        "Launch with enterprise-grade reliability. Monitor performance, optimize growth loops, and scale without rebuilding your foundation.",
      example:
        "Live deployment · Observability · Optimization · Expansion",
    },
  ];

  return (
    <section className="relative bg-[#050505] text-white py-24 md:py-32 px-4 md:px-6 overflow-hidden">

      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            From Concept to Infrastructure
          </h2>

          <p className="mt-4 text-white/50 text-base md:text-lg max-w-xl mx-auto">
            Enterprise-grade systems generated and deployed in structured phases.
          </p>
        </motion.div>

        <div className="space-y-4 md:space-y-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative group"
              >
                <div className="absolute inset-0 rounded-xl border border-white/5 bg-white/[0.03] transition duration-300 group-hover:border-white/10" />

                <div className="relative grid md:grid-cols-12 gap-6 md:gap-8 p-6 md:p-10 items-start md:items-center">

                  <div className="md:col-span-2 flex md:justify-center">
                    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border border-white/15 bg-black">
                      <Icon className="w-5 h-5 text-white/80" />
                    </div>
                  </div>

                  <div className="md:col-span-8">
                    <div className="text-[10px] md:text-xs text-white/30 tracking-widest mb-2 md:mb-3">
                      PHASE {step.number}
                    </div>

                    <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-3">
                      {step.title}
                    </h3>

                    <p className="text-white/50 text-sm md:text-base leading-relaxed mb-4">
                      {step.description}
                    </p>

                    <div className="inline-block px-4 py-2 border border-white/10 bg-white/[0.05] rounded-lg text-xs md:text-sm text-white/60">
                      {step.example}
                    </div>
                  </div>

                  <div className="hidden md:flex md:col-span-2 justify-end">
                    <span className="text-6xl font-semibold text-white/[0.04] select-none">
                      {step.number}
                    </span>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-16 md:mt-20"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 border border-white/20 bg-white/[0.06] rounded-full transition duration-300 hover:bg-white/[0.08]">
            <Rocket className="w-4 h-4 md:w-5 md:h-5 text-white" />
            <span className="text-sm md:text-base font-medium">
              Launch With Structural Advantage
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}