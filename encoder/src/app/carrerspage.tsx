import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Careerpage() {
  return (
    <section className="relative bg-black text-white py-20 md:py-24 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          We’re hiring.
        </h2>

        <p className="mt-5 text-white/45 text-base leading-relaxed">
          Join a focused team building the operating system for modern
          businesses. We care deeply about craft, clarity, and long-term impact.
        </p>

        <div className="mt-10">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-2.5 text-sm text-white/70 hover:text-white hover:border-white/30 transition"
          >
            View Open Roles
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
}
