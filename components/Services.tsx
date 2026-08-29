import { Check } from "lucide-react";
import { SERVICE_CATEGORIES } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-600">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Full-Service Dispatch &amp; Logistics Support
          </h2>
          <p className="mt-4 text-slate-600">
            Everything a carrier or owner-operator needs to run profitably,
            handled by one dedicated team.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-xl hover:shadow-slate-200/60"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 text-accent-400">
                  <Icon size={22} />
                </span>
                <h3 className="mt-6 text-lg font-bold text-navy-950">
                  {category.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-accent-500"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
