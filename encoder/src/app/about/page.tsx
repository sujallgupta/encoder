"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, ReactNode, CSSProperties } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function useGoogleFonts(): void {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400&display=swap";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);
}

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
}

function Reveal({ children, delay = 0, y = 40 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

function GoldLine() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        margin: "64px 0",
      }}
    >
      <div
        style={{ flex: 1, height: "1px", background: "rgba(200,169,81,0.15)" }}
      />
      <div
        style={{
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: "#C8A951",
        }}
      />
      <div
        style={{ flex: 1, height: "1px", background: "rgba(200,169,81,0.15)" }}
      />
    </div>
  );
}

interface TagProps {
  children: ReactNode;
}

function Tag({ children }: TagProps) {
  return (
    <span
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "10px",
        letterSpacing: "3px",
        textTransform: "uppercase",
        color: "#C8A951",
        border: "1px solid rgba(200,169,81,0.25)",
        padding: "6px 14px",
        borderRadius: "2px",
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
}

interface StatItemProps {
  number: string;
  label: string;
}

function StatItem({ number, label }: StatItemProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <span
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "44px",
          fontWeight: "800",
          color: "#C8A951",
          lineHeight: 1,
          letterSpacing: "-2px",
        }}
      >
        {number}
      </span>
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "10px",
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.3)",
          lineHeight: 1.6,
          whiteSpace: "pre-line",
        }}
      >
        {label}
      </span>
    </div>
  );
}

interface PillBadgeProps {
  children: ReactNode;
}

function PillBadge({ children }: PillBadgeProps) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        background: "rgba(200,169,81,0.05)",
        border: "1px solid rgba(200,169,81,0.18)",
        borderRadius: "2px",
        padding: "12px 20px",
      }}
    >
      <div
        style={{
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: "#C8A951",
          boxShadow: "0 0 8px rgba(200,169,81,0.8)",
        }}
      />
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "10px",
          letterSpacing: "2.5px",
          textTransform: "uppercase",
          color: "#C8A951",
        }}
      >
        {children}
      </span>
    </div>
  );
}

interface Stat {
  number: string;
  label: string;
}

interface ManifestoLine {
  line: string;
}

const stats: Stat[] = [
  { number: "10×", label: "Faster than\ntraditional builds" },
  { number: "1", label: "Unified ecosystem\nfor every app" },
  { number: "∞", label: "Scales with\nyour ambition" },
];

const capabilities: string[] = [
  "Complete website & app generation from a description",
  "Multi-app connected ecosystem under one backend",
  "Built-in hosting, scaling & infrastructure management",
  "Real-time deployment across web and mobile",
  "Automated analytics, income & expense tracking",
  "Self-learning AI that trains on your business data",
];

const manifesto: ManifestoLine[] = [
  { line: "You bring the idea." },
  { line: "The AI builds the infrastructure." },
  { line: "The system learns from your data." },
  { line: "You focus on growing the business." },
];

export default function AboutPage() {
  useGoogleFonts();

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const bodyTextStyle: CSSProperties = {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: "clamp(17px, 2.5vw, 21px)",
    lineHeight: "1.9",
    color: "rgba(240,235,227,0.6)",
  };

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: "100vh",
        background: "#060606",
        color: "#F0EBE3",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: rgba(200,169,81,0.2); color: #F0EBE3; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #060606; }
        ::-webkit-scrollbar-thumb { background: rgba(200,169,81,0.35); }
      `}</style>

      <motion.div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          y: bgY,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "1000px",
            height: "1000px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(200,169,81,0.035) 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(200,169,81,0.02) 80px, rgba(200,169,81,0.02) 81px),
              repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(200,169,81,0.02) 80px, rgba(200,169,81,0.02) 81px)
            `,
          }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "absolute",
          top: "60px",
          left: "32px",
        }}
      >
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            fontFamily: "'DM Mono', monospace",
            fontSize: "10px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "rgba(240,235,227,0.35)",
            textDecoration: "none",
          }}
        >
          <ArrowLeft size={12} strokeWidth={2} />
          Home
        </Link>
      </motion.div>

      <main
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          padding: "0 32px 180px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ paddingTop: "160px", marginBottom: "28px" }}
        >
          <Tag>About the Platform</Tag>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(48px, 8vw, 84px)",
            fontWeight: "600",
            lineHeight: "1.0",
            letterSpacing: "-2px",
            color: "#F0EBE3",
          }}
        >
          We exist to remove the{" "}
          <em style={{ fontStyle: "italic", color: "#C8A951" }}>barrier</em>{" "}
          between idea and reality.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(17px, 2.2vw, 20px)",
            lineHeight: "1.85",
            color: "rgba(240,235,227,0.45)",
            marginTop: "32px",
          }}
        >
          An AI-powered platform that builds, manages, and evolves your entire
          digital business — so you never have to touch a line of code.
        </motion.p>

        <GoldLine />

        <div style={{ display: "flex", gap: "60px", flexWrap: "wrap" }}>
          {stats.map((stat, i) => (
            <Reveal key={stat.number} delay={i * 0.1}>
              <StatItem number={stat.number} label={stat.label} />
            </Reveal>
          ))}
        </div>

        <GoldLine />

        <Reveal>
          <p style={bodyTextStyle}>
            Starting a business online has never been harder to execute, even as
            it has become easier to imagine. Developers, designers, servers,
            databases, payment gateways, hosting — each one a separate contract,
            a separate cost, a separate point of failure. The technical burden
            does not just slow ideas down. It buries most of them entirely.
          </p>
        </Reveal>

        <div style={{ marginTop: "44px" }}>
          <Reveal delay={0.08}>
            <p style={bodyTextStyle}>
              We are building the system that ends that entirely. Describe your
              business in plain language. The AI generates a complete,
              production-ready website or mobile application — layout, branding,
              logic, and infrastructure — deployed and live. No assembly
              required. No technical team. No delay.
            </p>
          </Reveal>
        </div>

        <GoldLine />

        <Reveal>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "10px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#C8A951",
              marginBottom: "36px",
            }}
          >
            What the platform handles
          </div>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {capabilities.map((cap, i) => (
            <Reveal key={cap} delay={i * 0.07}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "22px",
                  padding: "22px 0",
                  borderBottom: "1px solid rgba(200,169,81,0.07)",
                  borderTop:
                    i === 0 ? "1px solid rgba(200,169,81,0.07)" : "none",
                }}
              >
                <div
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: "#C8A951",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "rgba(240,235,227,0.7)",
                    letterSpacing: "0.2px",
                  }}
                >
                  {cap}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <GoldLine />

        <Reveal>
          <p style={{ ...bodyTextStyle, marginBottom: "40px" }}>
            But the platform does not stop at building. It becomes an
            intelligence layer. As your business operates, it collects real
            signals — customer behavior, revenue patterns, delivery performance,
            marketing results. That data trains continuously inside the
            platform, with no configuration needed. Over time, it surfaces
            pricing opportunities, predicts demand, optimizes workflows, and
            identifies inefficiencies before they cost you.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p style={bodyTextStyle}>
            This is not a website builder. It is not a tool you outgrow. It is a
            permanent co-founder — one that understands your numbers, scales
            with your ambition, and never stops working.
          </p>
        </Reveal>

        <GoldLine />

        <Reveal>
          <div
            style={{
              borderLeft: "2px solid #C8A951",
              paddingLeft: "40px",
            }}
          >
            {manifesto.map((item, i) => (
              <motion.p
                key={item.line}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.14,
                }}
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: i % 2 !== 0 ? "italic" : "normal",
                  fontSize: "clamp(22px, 3.5vw, 32px)",
                  fontWeight: i === manifesto.length - 1 ? 600 : 400,
                  lineHeight: "1.5",
                  color:
                    i === manifesto.length - 1
                      ? "#F0EBE3"
                      : "rgba(240,235,227,0.45)",
                  marginBottom: i < manifesto.length - 1 ? "8px" : "0",
                  letterSpacing: "-0.5px",
                }}
              >
                {item.line}
              </motion.p>
            ))}
          </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          style={{ marginTop: "80px" }}
        >
          <PillBadge>Built for what comes next</PillBadge>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginTop: "120px" }}
        >
          <Link
            href="/"
            style={{ fontSize: "12px", letterSpacing: "3px", color: "#C8A951" }}
          >
            ← Go back home
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
