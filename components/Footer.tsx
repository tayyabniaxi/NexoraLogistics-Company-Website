import Link from "next/link";
import { Phone, Mail, MapPin, User } from "lucide-react";
import { SITE, NAV_LINKS, SERVICE_CATEGORIES, SOCIAL_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-navy-950 text-white/70 md:scroll-mt-28">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="text-xl font-extrabold tracking-tight text-white">
              Naxora<span className="text-accent-500">Logistics</span>
            </span>
            <p className="mt-4 text-sm leading-relaxed">
              Professional logistics and dispatch support services helping
              carriers and owner-operators run profitable, compliant, and
              stress-free operations.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/10 transition-colors hover:bg-accent-500 hover:text-navy-950 hover:ring-accent-500"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-accent-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICE_CATEGORIES.map((service) => (
                <li key={service.title}>
                  <Link href="#services" className="hover:text-accent-400">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <User size={16} className="shrink-0" />
                {SITE.contactName}
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                {SITE.address}
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a href={SITE.phoneHref} className="hover:text-accent-400">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <a href={SITE.emailHref} className="hover:text-accent-400">
                  {SITE.emailDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
