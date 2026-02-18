// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   User,
//   Globe,
//   Smartphone,
//   LayoutDashboard,
//   Database,
//   CreditCard,
//   LineChart,
//   Server,
//   BrainCircuit,
//   BarChart3,
//   Bell,
//   RefreshCw,
//   ShieldCheck,
// } from "lucide-react";

// const outputs = [
//   Globe,
//   Smartphone,
//   LayoutDashboard,
//   Database,
//   CreditCard,
//   LineChart,
// ];

// const capabilities = [
//   {
//     icon: Server,
//     label: "Built-in Hosting",
//     desc: "Zero-config cloud infrastructure, auto-scaled.",
//     glow: "rgba(96,165,250,0.18)",
//     border: "rgba(96,165,250,0.25)",
//   },
//   {
//     icon: BrainCircuit,
//     label: "AI Training",
//     desc: "Learns from your own business data automatically.",
//     glow: "rgba(167,139,250,0.18)",
//     border: "rgba(167,139,250,0.25)",
//   },
//   {
//     icon: BarChart3,
//     label: "Analytics & Insights",
//     desc: "Revenue trends, behavior patterns, growth signals.",
//     glow: "rgba(52,211,153,0.18)",
//     border: "rgba(52,211,153,0.25)",
//   },
//   {
//     icon: Bell,
//     label: "Push Notifications",
//     desc: "Managed delivery across web and mobile.",
//     glow: "rgba(251,191,36,0.18)",
//     border: "rgba(251,191,36,0.25)",
//   },
//   {
//     icon: RefreshCw,
//     label: "Live Deployments",
//     desc: "Push updates instantly — no downtime.",
//     glow: "rgba(249,115,22,0.18)",
//     border: "rgba(249,115,22,0.25)",
//   },
//   {
//     icon: ShieldCheck,
//     label: "Secure Infrastructure",
//     desc: "Enterprise-grade security baked in from day one.",
//     glow: "rgba(236,72,153,0.18)",
//     border: "rgba(236,72,153,0.25)",
//   },
// ];

// export function Vision() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [size, setSize] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     const resize = () => {
//       if (!containerRef.current) return;
//       const rect = containerRef.current.getBoundingClientRect();
//       setSize({ width: rect.width, height: rect.height });
//     };
//     resize();
//     window.addEventListener("resize", resize);
//     return () => window.removeEventListener("resize", resize);
//   }, []);

//   const { width, height } = size;
//   const centerX = width / 2;
//   const centerY = height / 2;
//   const leftX = width * 0.12;
//   const rightX = width * 0.88;
//   const spacing = height / (outputs.length + 1);

//   return (
//     <section className="py-20 sm:py-28 bg-black px-4 sm:px-10">
//       {/* Section heading */}
//       <div className="mb-12 items sm:mb-16">
//         <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-3">
//           A Compressed Business Infrastructure
//         </h2>
//         <p className="text-white/45 text-sm sm:text-base max-w-xl">
//           One autonomous system transforming human intent into
//           fully operational digital ecosystems.
//         </p>
//       </div>

//       {/* Two-column layout */}
//       <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">

//         {/* ── LEFT: Diagram ── */}
//         <motion.div
//           ref={containerRef}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//           className="relative w-full lg:w-1/2 aspect-[4/3] rounded-2xl border border-white/10 bg-[#050505] overflow-hidden flex-shrink-0"
//         >
//           {/* Grid texture */}
//           <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px]" />

//           {width > 0 && (
//             <svg className="absolute inset-0 w-full h-full pointer-events-none">
//               <FlowingPath d={`M ${leftX} ${centerY} L ${centerX} ${centerY}`} />
//               {outputs.map((_, i) => {
//                 const y = spacing * (i + 1);
//                 return (
//                   <FlowingPath
//                     key={i}
//                     d={`M ${centerX} ${centerY} Q ${centerX + width * 0.08} ${y} ${rightX} ${y}`}
//                     delay={i * 0.2}
//                   />
//                 );
//               })}
//             </svg>
//           )}

//           {/* User node */}
//           <div
//             className="absolute -translate-x-1/2 -translate-y-1/2"
//             style={{ left: leftX, top: centerY }}
//           >
//             <Circle>
//               <User size={14} />
//             </Circle>
//           </div>

//           {/* Center node */}
//           <div
//             className="absolute -translate-x-1/2 -translate-y-1/2"
//             style={{ left: centerX, top: centerY }}
//           >
//             <motion.div
//               animate={{ scale: [1, 1.06, 1] }}
//               transition={{ duration: 3, repeat: Infinity }}
//             >
//               <Circle large>
//                 <img
//                   src="/logo.svg"
//                   alt="EncoderAI"
//                   className="h-7 w-7 sm:h-9 sm:w-9 opacity-90"
//                 />
//               </Circle>
//             </motion.div>
//           </div>

//           {/* Output nodes */}
//           {outputs.map((Icon, i) => {
//             const y = spacing * (i + 1);
//             return (
//               <div
//                 key={i}
//                 className="absolute -translate-x-1/2 -translate-y-1/2"
//                 style={{ left: rightX, top: y }}
//               >
//                 <motion.div
//                   animate={{ y: [0, -3, 0] }}
//                   transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
//                 >
//                   <Circle>
//                     <Icon size={14} />
//                   </Circle>
//                 </motion.div>
//               </div>
//             );
//           })}
//         </motion.div>

//         {/* ── RIGHT: Capability Cards ── */}
//         <div className="w-full lg:w-1/2 grid grid-cols-2 gap-3 sm:gap-4">
//           {capabilities.map((cap, i) => (
//             <motion.div
//               key={cap.label}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: i * 0.08 }}
//               whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
//               className="relative group rounded-xl p-4 sm:p-5 bg-[#0a0a0a] border overflow-hidden cursor-default"
//               style={{ borderColor: cap.border }}
//             >
//               {/* Hover glow */}
//               <div
//                 className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
//                 style={{
//                   background: `radial-gradient(ellipse at 30% 40%, ${cap.glow} 0%, transparent 70%)`,
//                 }}
//               />

//               {/* Always-on ambient glow */}
//               <div
//                 className="absolute inset-0 rounded-xl"
//                 style={{
//                   background: `radial-gradient(ellipse at 30% 40%, ${cap.glow.replace("0.18", "0.07")} 0%, transparent 60%)`,
//                 }}
//               />

//               <div className="relative z-10">
//                 {/* Icon badge */}
//                 <div
//                   className="mb-3 inline-flex items-center justify-center h-9 w-9 rounded-lg border"
//                   style={{
//                     borderColor: cap.border,
//                     background: cap.glow.replace("0.18", "0.12"),
//                   }}
//                 >
//                   <cap.icon size={16} className="text-white/80" />
//                 </div>

//                 {/* Label */}
//                 <p className="text-white text-xs sm:text-sm font-semibold mb-1 tracking-tight">
//                   {cap.label}
//                 </p>

//                 {/* Description */}
//                 <p className="text-white/40 text-[11px] sm:text-xs leading-relaxed">
//                   {cap.desc}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function FlowingPath({ d, delay = 0 }: { d: string; delay?: number }) {
//   return (
//     <motion.path
//       d={d}
//       stroke="rgba(255,255,255,0.2)"
//       strokeWidth="1.5"
//       fill="none"
//       strokeDasharray="6 12"
//       animate={{ strokeDashoffset: [0, -100] }}
//       transition={{ duration: 3, repeat: Infinity, ease: "linear", delay }}
//     />
//   );
// }

// function Circle({
//   children,
//   large,
// }: {
//   children: React.ReactNode;
//   large?: boolean;
// }) {
//   return (
//     <div
//       className={`
//         ${large ? "h-14 w-14 sm:h-20 sm:w-20" : "h-9 w-9 sm:h-11 sm:w-11"}
//         flex items-center justify-center
//         rounded-full
//         bg-[#111]
//         border border-white/15
//         text-white
//         shadow-[0_0_25px_rgba(255,255,255,0.05)]
//       `}
//     >
//       {children}
//     </div>
//   );
// }





"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Globe,
  Smartphone,
  LayoutDashboard,
  Database,
  CreditCard,
  LineChart,
  Server,
  BrainCircuit,
  BarChart3,
  Bell,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

const outputs = [
  Globe,
  Smartphone,
  LayoutDashboard,
  Database,
  CreditCard,
  LineChart,
];

const capabilities = [
  { icon: Server, label: "Built-in Hosting", desc: "Zero-config cloud infrastructure." },
  { icon: BrainCircuit, label: "AI Training", desc: "Learns from your business data." },
  { icon: BarChart3, label: "Analytics", desc: "Revenue and growth signals." },
  { icon: Bell, label: "Notifications", desc: "Managed delivery across platforms." },
  { icon: RefreshCw, label: "Live Deployments", desc: "Push updates instantly." },
  { icon: ShieldCheck, label: "Security", desc: "Enterprise-grade protection." },
];

export function Vision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const resize = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setSize({ width: rect.width, height: rect.height });
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const { width, height } = size;
  const centerX = width / 2;
  const centerY = height / 2;
  const leftX = width * 0.12;
  const rightX = width * 0.88;
  const spacing = height / (outputs.length + 1);

  return (
    <section className="py-20 bg-black px-6">

      {/* Centered Heading */}
      <div className="mb-20 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
          A Compressed Business Infrastructure
        </h2>
        <p className="text-white/40 text-base leading-relaxed">
          One autonomous system transforming human intent into
          fully operational digital ecosystems.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">

        {/* LEFT: Diagram */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full lg:w-1/2 aspect-[4/3] rounded-2xl border border-white/10 bg-[#050505] overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />

          {width > 0 && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <FlowingPath d={`M ${leftX} ${centerY} L ${centerX} ${centerY}`} />
              {outputs.map((_, i) => {
                const y = spacing * (i + 1);
                return (
                  <FlowingPath
                    key={i}
                    d={`M ${centerX} ${centerY} Q ${centerX + width * 0.08} ${y} ${rightX} ${y}`}
                    delay={i * 0.2}
                  />
                );
              })}
            </svg>
          )}

          <div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: leftX, top: centerY }}
          >
            <Circle><User size={14} /></Circle>
          </div>

          <div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: centerX, top: centerY }}
          >
            <Circle large>
              <img src="/logo.svg" alt="Encoder" className="h-8 w-8 opacity-90" />
            </Circle>
          </div>

          {outputs.map((Icon, i) => {
            const y = spacing * (i + 1);
            return (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: rightX, top: y }}
              >
                <Circle><Icon size={14} /></Circle>
              </div>
            );
          })}
        </motion.div>

        {/* RIGHT: Capabilities */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-8">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-6"
            >
              <div className="mb-4 inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-[#111]">
                <cap.icon size={16} className="text-white/70" />
              </div>

              <p className="text-white text-sm font-medium mb-2 tracking-tight">
                {cap.label}
              </p>

              <p className="text-white/40 text-xs leading-relaxed">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlowingPath({ d, delay = 0 }: { d: string; delay?: number }) {
  return (
    <motion.path
      d={d}
      stroke="rgba(255,255,255,0.15)"
      strokeWidth="1.2"
      fill="none"
      strokeDasharray="6 12"
      animate={{ strokeDashoffset: [0, -80] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear", delay }}
    />
  );
}

function Circle({ children, large }: { children: React.ReactNode; large?: boolean }) {
  return (
    <div
      className={`
        ${large ? "h-16 w-16" : "h-10 w-10"}
        flex items-center justify-center
        rounded-full
        bg-[#111]
        border border-white/15
        text-white
      `}
    >
      {children}
    </div>
  );
}
