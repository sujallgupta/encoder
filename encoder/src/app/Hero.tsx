// // "use client";

// // import { useEffect, useState } from "react";
// // import {
// //   Paperclip,
// //   Github,
// //   Globe,
// //   Mic,
// //   ArrowRight,
// //   Layers,
// //   Smartphone,
// //   Link,
// // } from "lucide-react";

// // const ideas = [
// //    "Build a global commerce infrastructure.",
// //   "Launch an AI-native operations platform.",
// //   "Create a vertically integrated digital business.",
// //   "Design a multi-region SaaS system with embedded payments.",
// //   "Build a full-stack marketplace with delivery and real-time analytics.",
// //   "Develop a scalable platform that runs your entire business."
// // ];

// // export default function Hero() {
// //   const [text, setText] = useState("");
// //   const [ideaIndex, setIdeaIndex] = useState(0);
// //   const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");
// //   const [activeTab, setActiveTab] = useState("fullstack");

// //   useEffect(() => {
// //     const current = ideas[ideaIndex];
// //     let timeout: NodeJS.Timeout;

// //     if (phase === "typing") {
// //       if (text.length < current.length) {
// //         timeout = setTimeout(() => {
// //           setText(current.slice(0, text.length + 1));
// //         }, 26);
// //       } else {
// //         timeout = setTimeout(() => setPhase("pause"), 900);
// //       }
// //     }

// //     if (phase === "pause") {
// //       timeout = setTimeout(() => setPhase("deleting"), 500);
// //     }

// //     if (phase === "deleting") {
// //       if (text.length > 0) {
// //         timeout = setTimeout(() => {
// //           setText(current.slice(0, text.length - 1));
// //         }, 18);
// //       } else {
// //         setPhase("typing");
// //         setIdeaIndex((prev) => (prev + 1) % ideas.length);
// //       }
// //     }

// //     return () => clearTimeout(timeout);
// //   }, [text, phase, ideaIndex]);

// //   return (
// //     <section className="relative min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center px-6 mt-5 overflow-hidden">
// //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.08),transparent_60%)]" />

// //       {/* Subtle grid */}
// //       <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:40px_40px]" />

// //       {/* Gradient blur orb */}
// //       <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/2 rounded-full blur-[160px] opacity-20" />

// //       <div className="relative w-full max-w-5xl text-center">
// //         <h1
// //           className="font-semibold leading-[1.02] tracking-[-0.045em]
// //                        text-4xl sm:text-5xl md:text-6xl lg:text-7xl
// //                        bg-gradient-to-b from-white via-white to-white/75
// //                        bg-clip-text text-transparent"
// //         >
// //           The Operating System
// //           <br />
// //           for Modern Businesses.
// //         </h1>

// //         <p className="mt-10 text-white/60 text-lg max-w-3xl mx-auto leading-[1.75]">
// //           Encoder builds and runs your entire business platform — from
// //           infrastructure to operations — unified in a single system.
// //         </p>
// //       </div>

// //       <div className="relative w-full max-w-4xl mt-5">
// //         <div className="flex gap-2 px-4">
// //           {[
// //             { key: "fullstack", label: "Full Stack App", icon: Layers },
// //             { key: "mobile", label: "Mobile App", icon: Smartphone },
// //           ].map((tab) => {
// //             const Icon = tab.icon;
// //             const active = activeTab === tab.key;

// //             return (
// //               <button
// //                 key={tab.key}
// //                 onClick={() => setActiveTab(tab.key)}
// //                 className={`flex items-center gap-2 rounded-t-lg px-4 py-2 text-sm
// //                   border border-white/10 border-b-0 transition
// //                   ${
// //                     active
// //                       ? "bg-[#111111] text-white"
// //                       : "bg-[#0c0c0c] text-white/50 hover:text-white/80"
// //                   }`}
// //               >
// //                 <Icon size={14} />
// //                 {tab.label}
// //               </button>
// //             );
// //           })}
// //         </div>

// //         <div className="rounded-2xl border border-white/10 bg-[#111111]/90 backdrop-blur-md p-6 shadow-[0_0_120px_rgba(255,255,255,0.03)] transition">
// //           <textarea
// //             disabled
// //             value={text}
// //             className="w-full resize-none bg-transparent text-white/85 text-base focus:outline-none h-15 cursor-not-allowed"
// //           />

// //           <div className="mt-6 flex items-center justify-between">
// //             <div className="flex items-center gap-3">
// //               {[Paperclip, Github, Globe, Mic].map((Icon, i) => (
// //                 <div
// //                   key={i}
// //                   className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-[#0c0c0c] text-white/50 transition hover:bg-[#161616] hover:text-white"
// //                 >
// //                   <Icon size={16} />
// //                 </div>
// //               ))}
// //             </div>

// //             <button
// //               disabled
// //               className="flex items-center gap-2 rounded-full bg-white/15 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-white/25"
// //             >
// //               Coming Soon
// //               <ArrowRight size={16} />
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { useEffect, useState } from "react";
// import {
//   Paperclip,
//   Github,
//   Globe,
//   Mic,
//   ArrowRight,
// } from "lucide-react";

// const ideas = [
//   "Build a global commerce infrastructure.",
//   "Launch an AI-native operations platform.",
//   "Create a vertically integrated digital business.",
//   "Design a multi-region SaaS system with embedded payments.",
//   "Build a full-stack marketplace with delivery and real-time analytics.",
//   "Develop a scalable platform that runs your entire business."
// ];

// export default function Hero() {
//   const [text, setText] = useState("");
//   const [ideaIndex, setIdeaIndex] = useState(0);
//   const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");

//   useEffect(() => {
//     const current = ideas[ideaIndex];
//     let timeout: NodeJS.Timeout;

//     if (phase === "typing") {
//       if (text.length < current.length) {
//         timeout = setTimeout(() => {
//           setText(current.slice(0, text.length + 1));
//         }, 26);
//       } else {
//         timeout = setTimeout(() => setPhase("pause"), 900);
//       }
//     }

//     if (phase === "pause") {
//       timeout = setTimeout(() => setPhase("deleting"), 500);
//     }

//     if (phase === "deleting") {
//       if (text.length > 0) {
//         timeout = setTimeout(() => {
//           setText(current.slice(0, text.length - 1));
//         }, 18);
//       } else {
//         setPhase("typing");
//         setIdeaIndex((prev) => (prev + 1) % ideas.length);
//       }
//     }

//     return () => clearTimeout(timeout);
//   }, [text, phase, ideaIndex]);

//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 overflow-hidden">

//       {/* HERO-ONLY BACKGROUND */}

//       {/* Base gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

//       {/* Radial light */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.08),transparent_60%)]" />

//       {/* Subtle grid */}
//       <div
//         className="absolute inset-0 opacity-[0.03]
//         [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
//         [background-size:60px_60px]"
//       />

//       {/* Content */}
//       <div className="relative w-full max-w-5xl text-center">

//         <h1 className="font-semibold leading-[1.02] tracking-[-0.045em]
//                        text-4xl sm:text-5xl md:text-6xl lg:text-7xl
//                        bg-gradient-to-b from-white via-white to-white/75
//                        bg-clip-text text-transparent">
//           The Operating System
//           <br />
//           for Modern Businesses.
//         </h1>

//         <p className="mt-10 text-white/60 text-lg max-w-3xl mx-auto leading-[1.75]">
//           Encoder builds and runs your entire business platform — from
//           infrastructure to operations — unified in a single system.
//         </p>

//         <div className="mt-16 rounded-2xl border border-white/10 bg-[#111111]/80 backdrop-blur-xl p-6 shadow-[0_0_120px_rgba(255,255,255,0.03)] max-w-4xl mx-auto">

//           <textarea
//             disabled
//             value={text}
//             className="w-full resize-none bg-transparent text-white/85 text-base focus:outline-none h-16 cursor-not-allowed"
//           />

//           <div className="mt-6 flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               {[Paperclip, Github, Globe, Mic].map((Icon, i) => (
//                 <div
//                   key={i}
//                   className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/50 hover:text-white transition"
//                 >
//                   <Icon size={16} />
//                 </div>
//               ))}
//             </div>

//             <button
//               disabled
//               className="flex items-center gap-2 rounded-full bg-white/15 px-6 py-2.5 text-sm font-medium text-white hover:bg-white/25 transition"
//             >
//               Coming Soon
//               <ArrowRight size={16} />
//             </button>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

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
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.08),transparent_60%)]" />
      <div
        className="absolute inset-0 opacity-[0.03]
        [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
        [background-size:60px_60px]"
      />

      {/* Content */}
      <div className="relative w-full max-w-5xl text-center">
        <div className="mb-5">
          <Link
            href="/careers"
            className="
              inline-flex items-center
              px-6 py-2.5
              rounded-full
              border border-white/15
              bg-white/[0.03]
              text-sm text-white/60
              hover:text-white
              hover:border-white/30
              hover:bg-white/[0.06]
              transition-all duration-300
            "
          >
            We’re hiring
          </Link>
        </div>

        <h1
          className="font-semibold leading-[1.02] tracking-[-0.045em]
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                       bg-gradient-to-b from-white via-white to-white/75
                       bg-clip-text text-transparent"
        >
          The Operating System
          <br />
          for Modern Businesses.
        </h1>

        <p className="mt-10 text-white/60 text-lg max-w-3xl mx-auto leading-[1.75]">
          Encoder builds and runs your entire business platform — from
          infrastructure to operations — unified in a single system.
        </p>

        <div className="mt-16 rounded-2xl border border-white/10 bg-[#111111]/80 backdrop-blur-xl p-6 shadow-[0_0_120px_rgba(255,255,255,0.03)] max-w-4xl mx-auto">
          <textarea
            disabled
            value={text}
            className="w-full resize-none bg-transparent text-white/85 text-base focus:outline-none h-16 cursor-not-allowed"
          />

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {[Paperclip, Github, Globe, Mic].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/50 hover:text-white transition"
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>

            <button
              disabled
              className="flex items-center gap-2 rounded-full bg-white/15 px-6 py-2.5 text-sm font-medium text-white hover:bg-white/25 transition"
            >
              Coming Soon
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
