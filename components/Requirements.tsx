import { Phone } from "lucide-react";
import { REQUIREMENTS, SITE } from "@/lib/data";

export default function Requirements() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl bg-gradient-to-br from-navy-900 to-navy-950 px-8 py-14 text-white sm:px-14">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-accent-400">
              Ready To Sign Up?
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              What You&apos;ll Need To Get Started
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {REQUIREMENTS.map((req) => {
              const Icon = req.icon;
              return (
                <div
                  key={req.text}
                  className="flex items-center gap-4 rounded-xl bg-white/5 p-5 ring-1 ring-white/10"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-500/15 text-accent-400">
                    <Icon size={20} />
                  </span>
                  <p className="text-sm font-medium text-white/90">
                    {req.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-2 rounded-full bg-accent-500 px-8 py-3.5 text-sm font-semibold text-navy-950 shadow-lg transition-colors hover:bg-accent-400"
            >
              <Phone size={18} />
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
