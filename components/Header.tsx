"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, MapPin, ChevronDown } from "lucide-react";
import { SITE, NAV_LINKS, SERVICE_CATEGORIES } from "@/lib/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top info bar */}
      <div className="hidden md:block bg-navy-950 text-white/80 text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-6 py-2">
          <a
            href={`tel:${SITE.phoneHref.replace("tel:", "")}`}
            className="flex items-center gap-2 hover:text-accent-400 transition-colors"
          >
            <Phone size={14} />
            {SITE.phoneDisplay}
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={14} />
            {SITE.address}
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="#home" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold tracking-tight text-navy-900">
              Naxora
              <span className="text-accent-500">Logistics</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#home"
              className="text-sm font-medium text-navy-900 hover:text-accent-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-navy-900 hover:text-accent-600 transition-colors"
            >
              About Us
            </Link>

            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium text-navy-900 hover:text-accent-600 transition-colors">
                Our Services
                <ChevronDown size={14} />
              </button>
              <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                <ul className="rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                  {SERVICE_CATEGORIES.map((service) => (
                    <li key={service.title}>
                      <Link
                        href="#services"
                        className="block rounded-lg px-3 py-2 text-sm text-navy-800 hover:bg-slate-50 hover:text-accent-600"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href="#contact"
              className="text-sm font-medium text-navy-900 hover:text-accent-600 transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          <div className="hidden md:block">
            <a
              href={SITE.phoneHref}
              className="rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-navy-950 shadow-sm transition-colors hover:bg-accent-400"
            >
              Call Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-navy-900"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-6 py-4">
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-2 py-2.5 text-sm font-medium text-navy-900 hover:bg-slate-50"
                >
                  {link.label}
                </Link>
              ))}

              <p className="mt-2 px-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Our Services
              </p>
              {SERVICE_CATEGORIES.map((service) => (
                <Link
                  key={service.title}
                  href="#services"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-2 py-2 pl-4 text-sm text-navy-800 hover:bg-slate-50"
                >
                  {service.title}
                </Link>
              ))}

              <a
                href={SITE.phoneHref}
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-navy-950"
              >
                <Phone size={16} />
                {SITE.phoneDisplay}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
