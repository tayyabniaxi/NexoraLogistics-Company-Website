import Image from "next/image";
import { Phone, Mail, BadgeCheck } from "lucide-react";
import { SITE } from "@/lib/data";

export default function Commitment() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-14 text-white md:py-20">
      <div className="absolute inset-0">
        <Image
          src="/images/commitment-truck.jpeg"
          alt="Box truck ready for dispatch at a logistics yard"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent-400">
          <BadgeCheck size={14} />
          Ready for Operational Deployment
        </span>

        <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Our Commitment
        </h2>

        <p className="mt-6 text-lg leading-relaxed text-white/80">
          We are committed to becoming a reliable extension of your
          operations team by providing professional dispatching, logistics
          coordination, and back-office support that contributes directly to
          your company&apos;s growth and success. We look forward to
          discussing how our services can support your business objectives.
        </p>

        <p className="mt-4 text-sm leading-relaxed text-white/60">
          Our approach is built on disciplined performance tracking, a
          strongly incentive-driven team culture, and full regulatory
          compliance on every load, every day.
        </p>

        <p className="mt-8 text-sm font-medium tracking-wide text-accent-400">
          {SITE.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 rounded-full bg-accent-500 px-7 py-3.5 text-sm font-semibold text-navy-950 shadow-lg transition-colors hover:bg-accent-400"
          >
            <Phone size={18} />
            {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.emailHref}
            className="flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Mail size={18} />
            {SITE.emailDisplay}
          </a>
        </div>

        <p className="mt-10 text-sm text-white/50">
          Thank you for your time and consideration. We look forward to
          building a long-term partnership with your organization. Open for
          strategy discussion &amp; questions.
        </p>
      </div>
    </section>
  );
}
