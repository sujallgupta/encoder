"use client";

import { motion } from "framer-motion";

export function Coordination() {
  return (
   <section className="hidden md:flex relative bg-[#050505] text-white min-h-screen items-center justify-center px-10 overflow-hidden">


      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] 
        bg-[linear-gradient(to_right,white_1px,transparent_1px),
            linear-gradient(to_bottom,white_1px,transparent_1px)]
        bg-[size:48px_48px]"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative text-center py-20 md:py-32"
      >
        {/* Ambient Glow */}
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-white/[0.02] rounded-full blur-[120px] md:blur-[160px]" />
        </motion.div>

        <div className="relative">

          {/* Massive Background Word */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: [0, -6, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              opacity: { duration: 1 },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
              scale: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
              text-[48px] 
              sm:text-[70px] 
              md:text-[140px] 
              font-semibold 
              tracking-tight 
              text-white/[0.04] 
              leading-none 
              select-none
            "
          >
            COORDINATION
          </motion.div>

          {/* Foreground Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="
              mt-8 md:mt-12
              text-xl sm:text-2xl md:text-4xl 
              font-medium 
              text-white/85 
              tracking-tight
            "
          >
            Is The Real Bottleneck.
          </motion.p>

        </div>
      </motion.div>

    </section>
  );
}
