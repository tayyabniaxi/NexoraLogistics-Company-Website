import { Laptop2 } from "lucide-react";
import { TOOLS } from "@/lib/data";

export default function Technology() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-accent-600">
          Technology &amp; Tools
        </span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
          Our Team Is Experienced With
        </h2>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {TOOLS.map((tool) => (
            <span
              key={tool}
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-navy-900 shadow-sm"
            >
              <Laptop2 size={16} className="text-accent-500" />
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
