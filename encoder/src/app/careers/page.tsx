import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const roles = [
  {
    title: "Full Stack Engineer",
    description:
      "Design and build the core platform — backend systems, APIs, database architecture, and user interface. This role defines the technical foundation every future capability depends on.",
  },
  {
    title: "AI / ML Engineer",
    description:
      "Own the intelligence layer. Architect and refine the generation systems that transform ideas into functional products. This is central to our long-term advantage.",
  },
  {
    title: "DevOps / Cloud Engineer",
    description:
      "Design infrastructure from first principles. Ensure deployment, scalability, reliability, and performance operate without friction or compromise.",
  },
  {
    title: "UI / UX Designer",
    description:
      "Translate complexity into clarity. Craft an experience so intuitive that non-technical founders feel immediate control and confidence.",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-24 sm:pb-32">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/40 hover:text-white transition"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>

        <div className="mt-14 sm:mt-16 max-w-3xl">
          <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/30">
            Careers
          </p>

          <h1 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] leading-[1.1] sm:leading-[1.05]">
            Build enduring infrastructure.
          </h1>

          <p className="mt-6 sm:mt-10 text-base sm:text-lg text-white/50 leading-relaxed">
            We are building the operating system for modern businesses.
            The team assembled now will define the architecture, standards,
            and culture that compound over the next decade.
          </p>
        </div>

        <div className="mt-16 sm:mt-24 border-t border-white/10" />

        <div className="mt-16 sm:mt-24">
          <h2 className="text-lg sm:text-xl font-medium">
            Open Roles
          </h2>

          <div className="mt-12 sm:mt-16 space-y-12 sm:space-y-16">
            {roles.map((role, index) => (
              <div key={index}>

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 sm:gap-8">

                  <div className="max-w-2xl">
                    <h3 className="text-lg sm:text-2xl font-medium tracking-tight">
                      {role.title}
                    </h3>

                    <p className="mt-4 sm:mt-6 text-sm sm:text-base text-white/50 leading-relaxed">
                      {role.description}
                    </p>
                  </div>

                  <div className="md:pt-2">
                    <Link
                      href="https://forms.gle/Ha1oijDHVDVcvfkv9"
                      target="_blank"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/60 hover:text-white transition"
                    >
                      Apply
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 hover:translate-x-1"
                      />
                    </Link>
                  </div>

                </div>

                {index !== roles.length - 1 && (
                  <div className="mt-12 sm:mt-16 border-t border-white/5" />
                )}

              </div>
            ))}
          </div>
        </div>

        <div className="mt-28 sm:mt-40 text-center border-t border-white/10 pt-16 sm:pt-24">

          <h3 className="text-xl sm:text-3xl font-medium">
            Excellence compounds.
          </h3>

          <p className="mt-6 sm:mt-8 text-sm sm:text-base text-white/50 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            If you believe infrastructure is destiny and that careful work
            creates disproportionate long-term advantage, this is the moment
            to join.
          </p>

          <div className="mt-10 sm:mt-12 flex flex-col items-center gap-6 sm:gap-8">

            <Link
              href="https://forms.gle/Ha1oijDHVDVcvfkv9"
              target="_blank"
              className="inline-flex items-center gap-2 border border-white/20 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm text-white/70 hover:text-white hover:border-white transition"
            >
              Submit Application
              <ArrowRight size={15} />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/40 hover:text-white transition"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>

          </div>

        </div>

      </div>
    </main>
  );
}
