import { PRICING_PLANS } from "@/lib/data";

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 py-14 md:scroll-mt-28 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-600">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Dispatch Service Fee
          </h2>
          <p className="mt-4 text-slate-600">
            Straightforward, performance-aligned pricing built around how
            your business operates.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.title}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-navy-950 text-white shadow-2xl ring-1 ring-navy-800"
                  : "border border-slate-200 bg-white"
              }`}
            >
              <h3
                className={`text-sm font-semibold uppercase tracking-wide ${
                  plan.highlighted ? "text-accent-400" : "text-accent-600"
                }`}
              >
                {plan.title}
              </h3>
              <p
                className={`mt-4 text-3xl font-extrabold ${
                  plan.highlighted ? "text-white" : "text-navy-950"
                }`}
              >
                {plan.rate}
              </p>
              <p
                className={`mt-4 text-sm leading-relaxed ${
                  plan.highlighted ? "text-white/70" : "text-slate-600"
                }`}
              >
                {plan.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          Fixed monthly rates are negotiated individually based on fleet size
          and service requirements.
        </p>
      </div>
    </section>
  );
}
