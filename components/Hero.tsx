import Image from "next/image";
import { Phone, ArrowRight, ShieldCheck, Truck, Clock3 } from "lucide-react";
import { SITE } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-20 overflow-hidden bg-navy-950 text-white md:scroll-mt-28"
    >
      {/* Background photo with dark overlay for text contrast */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-truck.jpeg"
          alt="Semi-truck hauling a loaded flatbed trailer on the highway"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/55 md:bg-gradient-to-r md:from-navy-950/85 md:via-navy-950/45 md:to-navy-950/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-8 md:pb-20 md:pt-12">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-accent-400 sm:px-4 sm:text-xs">
            Strategic Logistics Support Services
          </span>

          <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-4xl lg:text-5xl">
            Professional Dispatch &amp; Logistics Coordination
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/70">
            We help streamline your transportation operations, improve load
            planning efficiency, maximize truck utilization, and ensure
            timely communication between drivers, brokers, and customers, so
            your business runs on time, every time.
          </p>

          <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={SITE.phoneHref}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-lg shadow-accent-500/20 transition-colors hover:bg-accent-400 sm:w-auto"
            >
              <Phone size={18} />
              Call Now
            </a>
            <a
              href="#services"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Our Services
              <ArrowRight size={16} />
            </a>
          </div>

          <p className="mt-8 text-sm font-medium tracking-wide text-accent-400">
            {SITE.tagline}
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Truck size={18} className="text-accent-400" />
              </span>
              <div>
                <p className="text-lg font-bold leading-none">5 Service</p>
                <p className="text-xs text-white/60">Categories covered</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Clock3 size={18} className="text-accent-400" />
              </span>
              <div>
                <p className="text-lg font-bold leading-none">24/7</p>
                <p className="text-xs text-white/60">Dispatch support</p>
              </div>
            </div>
            <div className="col-span-2 flex items-center justify-center gap-3 sm:col-span-1 sm:justify-start">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
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
