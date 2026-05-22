"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";

export default function Home() {
  const { lang, dir, toggleLang } = useLanguage();
  const t = translations[lang];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ─── PROMO BANNER ─── */}
      <div className="bg-ink-deep text-canvas text-center text-sm font-bold py-3 px-4">
        {t.banner.text}
        <a href="#cta" className="ms-2 underline underline-offset-2 hover:no-underline">{t.banner.link}</a>
      </div>

      {/* ─── NAVBAR ─── */}
      <nav className="sticky top-0 z-50 bg-canvas/90 backdrop-blur-md border-b border-hairline-soft">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img src="/wasla-logo.svg" alt="Wasla" className="h-8" />
            </div>

            {/* Desktop pill-tab nav */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2">
                {t.nav.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="bg-canvas text-ink text-sm font-bold px-4 py-2 rounded-full border border-hairline hover:border-ink-deep/30 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              {/* Language Toggle */}
              <button
                onClick={toggleLang}
                className="text-xs font-bold px-3 py-1.5 rounded-full border border-hairline hover:bg-surface-soft transition-colors text-steel"
              >
                {lang === "ar" ? "English" : "العربية"}
              </button>
              <a
                href="#cta"
                className="bg-ink-button text-on-ink-button px-5 py-2 rounded-full text-sm font-bold hover:bg-charcoal transition-colors"
              >
                {t.nav.cta}
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-surface-soft transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-6 space-y-3">
              {t.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium text-ink hover:bg-surface-soft rounded-full transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => { toggleLang(); setMobileMenuOpen(false); }}
                className="block w-full px-4 py-2.5 text-sm font-medium text-ink hover:bg-surface-soft rounded-full transition-colors text-start"
              >
                {lang === "ar" ? "English" : "العربية"}
              </button>
              <a
                href="#cta"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 text-sm font-bold text-center bg-ink-button text-on-ink-button rounded-full"
              >
                {t.nav.cta}
              </a>
            </div>
          )}
        </div>
      </nav>

      <main className="flex-1">
        {/* ─── HERO ─── */}
        <section className="relative pt-28 pb-24 md:pt-40 md:pb-32 px-4 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-wasla-green/[0.04] rounded-full blur-3xl" />
            <div className="absolute -top-32 right-0 w-80 h-80 bg-primary/[0.03] rounded-full blur-3xl" />
            <div className="absolute -bottom-32 left-0 w-80 h-80 bg-fb-blue/[0.02] rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 bg-warning/20 rounded-full px-4 py-1.5 mb-8">
              <span className="text-lg leading-none">💡</span>
              <span className="text-ink-deep text-xs font-bold">{t.hero.badge}</span>
            </div>

            <h1
              className="text-[2.75rem] sm:text-6xl lg:text-7xl font-medium text-ink-deep leading-[1.12] tracking-tight"
              dangerouslySetInnerHTML={{ __html: t.hero.title }}
            />
            <p className="mt-6 text-lg md:text-xl text-steel max-w-2xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#cta"
                className="bg-ink-button text-on-ink-button px-10 py-4 rounded-full text-sm font-bold hover:bg-charcoal transition-all shadow-xl shadow-ink-button/20"
              >
                {t.hero.cta}
              </a>
              <a
                href="#features"
                className="bg-transparent text-ink-deep px-9 py-3.5 rounded-full text-sm font-bold border-2 border-ink-deep hover:bg-ink-deep/5 transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                {t.hero.watch}
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              {t.hero.chips.map((f) => (
                <span key={f} className="bg-surface-soft text-charcoal text-xs font-bold px-4 py-2 rounded-full border border-hairline-soft">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PROBLEM ─── */}
        <section className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-ink-deep leading-[1.17]">{t.problem.title}</h2>
            <p className="mt-4 text-steel">{t.problem.subtitle}</p>
            <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
              {t.problem.cards.map((item) => (
                <div key={item.title} className="group bg-canvas border border-hairline-soft rounded-3xl p-8 md:p-10 text-start hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 bg-wasla-green/10 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-wasla-green/20 transition-colors">
                    <span>{item.icon}</span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-ink-deep">{item.title}</h3>
                  <p className="mt-2 text-steel leading-relaxed">{item.desc}</p>
                  <span className="mt-4 block text-2xl">{item.emoji}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BENEFITS ─── */}
        <section className="py-16 md:py-24 px-4 bg-surface-soft">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-ink-deep leading-[1.17]">{t.benefits.title}</h2>
            <p className="mt-4 text-steel">{t.benefits.subtitle}</p>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {t.benefits.cards.map((item) => (
                <div key={item.title} className="group bg-canvas border border-hairline-soft rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
                  <div className="w-12 h-12 bg-wasla-green/10 rounded-xl flex items-center justify-center text-2xl mx-auto group-hover:bg-wasla-green/20 group-hover:scale-110 transition-all">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-ink-deep">{item.title}</h3>
                  <p className="mt-2 text-sm text-steel leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FEATURES ─── */}
        <section id="features" className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-ink-deep leading-[1.17]">{t.features.title}</h2>
              <p className="mt-4 text-steel">{t.features.subtitle}</p>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {t.features.cards.map((item) => (
                <div key={item.title} className="group bg-canvas border border-hairline-soft rounded-xl p-6 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 text-start">
                  <div className="w-12 h-12 bg-wasla-green/10 rounded-xl flex items-center justify-center text-2xl group-hover:bg-wasla-green/20 group-hover:scale-110 transition-all">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-ink-deep">{item.title}</h3>
                  <p className="mt-2 text-sm text-steel leading-relaxed">{item.desc}</p>
                  <div className="mt-3 pt-3 border-t border-hairline-soft/50">
                    <p className="text-xs text-wasla-green font-bold">{item.benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─── */}
        <section className="py-16 md:py-24 px-4 bg-surface-soft">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-ink-deep leading-[1.17]">{t.howItWorks.title}</h2>
            <p className="mt-4 text-steel">{t.howItWorks.subtitle}</p>
            <div className="relative mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="hidden md:block absolute top-20 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-hairline" />
              {t.howItWorks.steps.map((item) => (
                <div key={item.step} className="relative">
                  <div className="bg-canvas border border-hairline-soft rounded-3xl p-8 md:p-10 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 bg-wasla-green/10 rounded-2xl flex items-center justify-center mx-auto">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div className="mt-5 w-10 h-10 bg-wasla-green text-white rounded-full flex items-center justify-center mx-auto text-base font-bold shadow-sm">
                      {item.step}
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-ink-deep">{item.title}</h3>
                    <p className="mt-2 text-steel leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY CLINICS CHOOSE WASLA ─── */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-ink-deep leading-[1.17]">{t.why.title}</h2>
              <p className="mt-4 text-steel">{t.why.subtitle}</p>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
              {t.why.cards.map((item) => (
                <div key={item.title} className="text-center">
                  <span className="text-4xl">{item.icon}</span>
                  <h3 className="mt-4 text-xl font-bold text-ink-deep">{item.title}</h3>
                  <p className="mt-2 text-steel leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── APPOINTMENT REMINDERS ─── */}
        <section className="py-16 md:py-24 px-4 bg-surface-soft">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-ink-deep leading-[1.17]">{t.reminders.title}</h2>
              <p className="mt-4 text-steel">{t.reminders.subtitle}</p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-6 md:gap-12 items-center max-w-4xl mx-auto">
              <div className="space-y-6 text-start">
                {t.reminders.steps.map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-wasla-green/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-sm font-bold text-wasla-green">{item.step}</span>
                    </div>
                    <p className="text-ink-deep font-medium">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="bg-canvas border-2 border-wasla-green/30 rounded-3xl p-8 shadow-md">
                <div className="w-12 h-12 bg-wasla-green/10 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-xl font-bold text-wasla-green">{t.reminders.result.title}</h3>
                <ul className="mt-4 space-y-3">
                  {t.reminders.result.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-steel">
                      <span className="text-wasla-green shrink-0 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PRICING ─── */}
        <section id="pricing" className="py-16 md:py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-ink-deep leading-[1.17]">{t.pricing.title}</h2>
            <p className="mt-4 text-steel">{t.pricing.subtitle}</p>
            <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
              {t.pricing.plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-canvas border-2 rounded-3xl p-8 transition-all duration-300 ${
                    plan.popular ? "border-ink-deep shadow-xl scale-105" : "border-hairline-soft hover:shadow-lg"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-ink-deep text-canvas text-xs font-bold px-5 py-1.5 rounded-full shadow-sm">
                      {plan.tag}
                    </div>
                  )}
                  {!plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-surface-soft text-ink-deep text-xs font-bold px-5 py-1.5 rounded-full shadow-sm border border-hairline-soft">
                      {plan.tag}
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-ink-deep">{plan.name}</h3>
                  <p className="text-sm text-steel mt-1">{plan.desc}</p>
                  <div className="mt-6 flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-ink-deep">{plan.price}</span>
                    <span className="text-steel text-sm">{plan.suffix}</span>
                  </div>
                  <ul className="mt-8 space-y-3 text-start">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-ink">
                        <span className="w-5 h-5 bg-wasla-green/10 rounded-full flex items-center justify-center text-wasla-green text-xs font-bold">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#cta"
                    className={`mt-8 block w-full py-3.5 rounded-full text-sm font-bold text-center transition-all ${
                      plan.popular
                        ? "bg-ink-button text-on-ink-button hover:bg-charcoal shadow-md"
                        : "bg-canvas text-ink-deep border-2 border-hairline hover:border-ink-deep/30"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-stone">{t.pricing.footnote}</p>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-16 md:py-24 px-4 bg-surface-soft">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-ink-deep leading-[1.17] text-center">{t.faq.title}</h2>
            <p className="mt-4 text-steel text-center">{t.faq.subtitle}</p>
            <div className="mt-12 space-y-3">
              {t.faq.items.map((item, idx) => (
                <div key={idx} className={`bg-canvas border rounded-xl overflow-hidden transition-all duration-200 ${
                  openFaq === idx ? "border-wasla-green/30 shadow-sm" : "border-hairline-soft"
                }`}>
                  <button
                    className={`w-full px-6 py-4 flex items-center justify-between text-start transition-colors ${
                      openFaq === idx ? "bg-wasla-green/[0.02]" : "hover:bg-surface-soft"
                    }`}
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <span className="font-bold text-ink-deep">{item.q}</span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all shrink-0 ${
                      openFaq === idx ? "bg-wasla-green text-white rotate-180" : "bg-surface-soft text-steel"
                    }`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 text-sm text-ink/70 leading-relaxed border-t border-hairline-soft/50 pt-4">{item.a}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ─── */}
        <section id="cta" className="relative py-20 md:py-28 px-4 bg-ink-deep overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-wasla-green/[0.03] rounded-full blur-3xl" />
          </div>
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-canvas leading-[1.17]">
              {t.cta.title}
            </h2>
            <p className="mt-4 text-lg text-steel">
              {t.cta.subtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="bg-primary text-on-primary px-10 py-4 rounded-full text-sm font-bold hover:bg-primary-deep transition-all shadow-xl shadow-primary/25 hover:shadow-primary/35"
              >
                {t.cta.cta1}
              </a>
              <a
                href="#features"
                className="text-canvas/80 px-9 py-3.5 rounded-full text-sm font-bold border-2 border-canvas/20 hover:border-canvas/40 hover:text-canvas transition-all"
              >
                {t.cta.cta2}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-stone">
              {t.cta.badges.map((badge) => (
                <span key={badge} className="flex items-center gap-1.5">✓ {badge}</span>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="bg-canvas border-t border-hairline-soft py-14 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2">
                <img src="/wasla-logo.svg" alt="Wasla" className="h-8" />
              </div>
              <p className="mt-3 text-sm text-steel leading-relaxed">
                {t.footer.description}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-ink mb-4">{t.footer.columns[0].title}</h4>
              <ul className="space-y-2.5 text-sm text-steel">
                {"links" in t.footer.columns[0] && t.footer.columns[0].links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-ink-deep transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-ink mb-4">{t.footer.columns[1].title}</h4>
              <ul className="space-y-2.5 text-sm text-steel">
                {"links" in t.footer.columns[1] && t.footer.columns[1].links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-ink-deep transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-ink mb-4">{t.footer.columns[2].title}</h4>
              <div className="flex gap-3">
                {"social" in t.footer.columns[2] && t.footer.columns[2].social.map((s) => (
                  <a key={s.label} href={s.href} className="w-10 h-10 bg-surface-soft rounded-full flex items-center justify-center hover:bg-wasla-green hover:text-white transition-all text-xs font-bold text-steel">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-hairline-soft flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone">
            <p>{t.footer.legal}</p>
            <div className="flex items-center gap-3">
              <button
                onClick={toggleLang}
                className={`hover:text-ink-deep transition-colors cursor-pointer ${lang === "en" ? "text-wasla-green font-medium" : ""}`}
              >
                {t.footer.switch.en}
              </button>
              <span className="text-hairline">|</span>
              <button
                onClick={toggleLang}
                className={`hover:text-ink-deep transition-colors cursor-pointer ${lang === "ar" ? "text-wasla-green font-medium" : ""}`}
              >
                {t.footer.switch.ar}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
