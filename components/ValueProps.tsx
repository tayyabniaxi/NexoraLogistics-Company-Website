import { CheckCircle2 } from "lucide-react";
import { BENEFITS } from "@/lib/data";

export default function ValueProps() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-600">
            Benefits
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Benefits of Working With Us
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-500/10 text-accent-600">
                <CheckCircle2 size={18} />
              </span>
              <p className="text-sm font-medium text-navy-900">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
