import Image from "next/image";
import { Laptop2 } from "lucide-react";
import { TOOLS } from "@/lib/data";

export default function Technology() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <span className="text-sm font-semibold uppercase tracking-wide text-accent-600">
            Technology &amp; Tools
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
            Our Team Is Experienced With
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
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

        <div className="relative order-first lg:order-last">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200 sm:aspect-video lg:aspect-[4/3]">
            <Image
              src="/images/dispatch-dashboard.jpeg"
              alt="Dispatch team monitoring load boards and real-time tracking dashboards"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
