import { CheckCircle2, Headset } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-navy-950 py-24 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-400">
            Operational Summary
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Why Choose Naxora Logistics
          </h2>
          <p className="mt-4 text-white/70">
            We provide professional logistics and dispatch support services
            to help streamline your transportation operations, improve load
            planning efficiency, maximize truck utilization, and ensure
            timely communication between drivers, brokers, and customers.
            With a dedicated team of experienced dispatch professionals, we
            help reduce your operational burden while increasing
            profitability and customer satisfaction.
          </p>

          <ul className="mt-8 space-y-4">
            {WHY_CHOOSE_US.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-accent-400"
                />
                <span className="text-sm leading-relaxed text-white/85">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Illustrative panel — gradient + icon, no photo required */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 p-10 shadow-2xl ring-1 ring-white/10">
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-accent-500/20 blur-3xl" />
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-500/15 text-accent-400">
            <Headset size={30} />
          </span>
          <p className="mt-8 text-2xl font-bold leading-snug">
            &ldquo;A reliable extension of your operations team — dispatch,
            logistics coordination, and back-office support in one
            place.&rdquo;
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl font-extrabold text-accent-400">24/7</p>
              <p className="mt-1 text-xs text-white/60">Live dispatch support</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-accent-400">5</p>
              <p className="mt-1 text-xs text-white/60">Core service categories</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
