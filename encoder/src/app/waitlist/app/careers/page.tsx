import Link from "next/link";
import { ArrowRight } from "lucide-react";

const roles = [
  {
    title: "Full Stack Engineer",
    description:
      "Your most important hire. Builds the platform, backend, APIs, database, and user interface. The foundation everything else sits on.",
  },
  {
    title: "AI / ML Engineer",
    description:
      "Owns the generation engine and intelligence layer. Designs and maintains the AI systems that power app and website creation.",
  },
  {
    title: "DevOps / Cloud Engineer",
    description:
      "Architects infrastructure, deployment pipelines, hosting, and reliability. Ensures zero-configuration deployment works flawlessly.",
  },
  {
    title: "UI / UX Designer",
    description:
      "Designs a seamless experience for non-technical founders. Translates complexity into clarity and usability.",
  },
];

export default function CareersPage() {
  return (
    <main className="relative bg-black text-white min-h-screen overflow-hidden">

      <div className="relative max-w-6xl mx-auto px-6 py-28">

        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-[-0.04em] leading-[1.05]">
            Build the foundation.
            <span className="block text-white/40">
              Define the future.
            </span>
          </h1>

          <p className="mt-8 text-white/50 text-lg leading-relaxed max-w-2xl">
            We’re building the operating system for modern businesses.
            Join early. Build something that matters.
          </p>
        </div>

        {/* Roles */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10">

          {roles.map((role, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <h3 className="text-xl font-semibold tracking-tight">
                {role.title}
              </h3>

              <p className="mt-4 text-white/50 text-sm leading-relaxed">
                {role.description}
              </p>

              <div className="mt-8">
                <Link
                  href="https://forms.gle/YOUR_GOOGLE_FORM_LINK"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition"
                >
                  Apply Now
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}
