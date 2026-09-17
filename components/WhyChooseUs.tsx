import Image from "next/image";
import { CheckCircle2, Headset } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section id="about" className="scroll-mt-20 bg-navy-950 py-14 text-white md:scroll-mt-28 md:py-20">
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

        <div className="relative min-h-[420px] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10 sm:min-h-[480px]">
          <Image
            src="/images/about-truck.jpeg"
            alt="Naxora Logistics semi-truck parked at a freight facility"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/75 to-navy-950/10" />

          <div className="relative flex h-full min-h-[420px] flex-col justify-end p-8 sm:min-h-[480px] sm:p-10">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-500/15 text-accent-400 ring-1 ring-white/10">
              <Headset size={30} />
            </span>
            <p className="mt-8 text-2xl font-bold leading-snug">
              &ldquo;A reliable extension of your operations team, covering
              dispatch, logistics coordination, and back-office support in
              one place.&rdquo;
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
      </div>
    </section>
  );
}
