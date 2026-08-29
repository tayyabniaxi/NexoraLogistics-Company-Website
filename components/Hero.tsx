import { Phone, ArrowRight, ShieldCheck, Truck, Clock3 } from "lucide-react";
import { SITE } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy-950 text-white"
    >
      {/* Decorative gradient + pattern, no images required */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-navy-600/40 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-400">
            Strategic Logistics Support Services
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Professional Dispatch &amp; Logistics Coordination
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/70">
            We help streamline your transportation operations, improve load
            planning efficiency, maximize truck utilization, and ensure
            timely communication between drivers, brokers, and customers —
            so your business runs on time, every time.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-lg shadow-accent-500/20 transition-colors hover:bg-accent-400"
            >
              <Phone size={18} />
              Call Now
            </a>
            <a
              href="#services"
              className="flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Our Services
              <ArrowRight size={16} />
            </a>
          </div>

          <p className="mt-8 text-sm font-medium tracking-wide text-accent-400">
            {SITE.tagline}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <Truck size={18} className="text-accent-400" />
              </span>
              <div>
                <p className="text-lg font-bold leading-none">5 Service</p>
                <p className="text-xs text-white/60">Categories covered</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <Clock3 size={18} className="text-accent-400" />
              </span>
              <div>
                <p className="text-lg font-bold leading-none">24/7</p>
                <p className="text-xs text-white/60">Dispatch support</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <ShieldCheck size={18} className="text-accent-400" />
              </span>
              <div>
                <p className="text-lg font-bold leading-none">Compliant</p>
                <p className="text-xs text-white/60">Full regulatory support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
