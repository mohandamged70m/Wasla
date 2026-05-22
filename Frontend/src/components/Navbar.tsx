"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#features", label: "المميزات" },
    { href: "#pricing", label: "الأسعار" },
    { href: "#faq", label: "أسئلة شائعة" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-canvas/90 backdrop-blur-md border-b border-hairline-soft">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/">
            <img src="/wasla-logo.svg" alt="Wasla" className="h-8" />
          </a>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="bg-canvas text-ink text-sm font-bold px-4 py-2 rounded-full border border-hairline hover:border-ink-deep/30 transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <a
              href="#cta"
              className="bg-ink-button text-on-ink-button px-5 py-2 rounded-full text-sm font-bold hover:bg-charcoal transition-colors"
            >
              ابدأ مجاناً
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-full hover:bg-surface-soft transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="القائمة"
          >
            <svg className="w-6 h-6 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 space-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-ink hover:bg-surface-soft rounded-full transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm font-bold text-center bg-ink-button text-on-ink-button rounded-full"
            >
              ابدأ مجاناً
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
