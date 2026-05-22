"use client";

import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const navLinks = [
    { label: "المميزات", href: "#features" },
    { label: "الأسعار", href: "#pricing" },
    { label: "أسئلة شائعة", href: "#faq" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* ─── PROMO BANNER ─── */}
      <div className="bg-ink-deep text-canvas text-center text-sm font-bold py-3 px-4">
        عيادتك على واتساب محتاجة تنظيم؟ جرب Wasla ٧ أيام مجاناً
        <a href="#cta" className="mr-2 underline underline-offset-2 hover:no-underline">ابدأ دلوقتي</a>
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
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="bg-canvas text-ink text-sm font-bold px-4 py-2 rounded-full border border-hairline hover:border-ink-deep/30 transition-colors"
                  >
                    {link.label}
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
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium text-ink hover:bg-surface-soft rounded-full transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 text-sm font-bold text-center bg-ink-button text-on-ink-button rounded-full"
              >
                ابدأ مجاناً
              </a>
            </div>
          )}
        </div>
      </nav>

      <main className="flex-1">
        {/* ─── HERO ─── */}
        <section className="relative pt-28 pb-24 md:pt-40 md:pb-32 px-4 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-wasla-green/[0.04] rounded-full blur-3xl" />
            <div className="absolute -top-32 right-0 w-80 h-80 bg-primary/[0.03] rounded-full blur-3xl" />
            <div className="absolute -bottom-32 left-0 w-80 h-80 bg-fb-blue/[0.02] rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 bg-warning/20 rounded-full px-4 py-1.5 mb-8">
              <span className="text-lg leading-none">💡</span>
              <span className="text-ink-deep text-xs font-bold">مخصوص للعيادات والمراكز الطبية</span>
            </div>

            <h1 className="text-[2.75rem] sm:text-6xl lg:text-7xl font-medium text-ink-deep leading-[1.12] tracking-tight">
              مواعيد ومرضى عيادتك على الواتساب — <span className="text-wasla-green">نظام متكامل</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-steel max-w-2xl mx-auto leading-relaxed">
              Wasla بيحول واتساب عيادتك لصندوق وارد موحد مع حجوزات مواعيد، تذكير تلقائي للمرضى،
              وفريق كامل يدير المحادثات من شاشة واحدة.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#cta"
                className="bg-ink-button text-on-ink-button px-10 py-4 rounded-full text-sm font-bold hover:bg-charcoal transition-all shadow-xl shadow-ink-button/20"
              >
                ابدأ النسخة التجريبية — ٧ أيام مجاناً
              </a>
              <a
                href="#features"
                className="bg-transparent text-ink-deep px-9 py-3.5 rounded-full text-sm font-bold border-2 border-ink-deep hover:bg-ink-deep/5 transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                شوف إزاي بيشتغل
              </a>
            </div>

            {/* Feature chips */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
              {["حجوزات مواعيد", "تذكير تلقائي", "صندوق وارد موحد", "توزيع المحادثات", "تقارير العيادة"].map((f) => (
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-ink-deep leading-[1.17]">الواتساب بيكلف عيادتك مرضى — وأنت مش واخد بالك</h2>
            <p className="mt-4 text-steel">مريض بيسأل عن الكشف. تاني عاوز يحجز. تالت بيلغي. والمشاكل دي:</p>
            <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                { icon: "🗓️", title: "المواعيد بتضيع", desc: "المريض يحجز عالواتساب. محدش يسجل. الميعاد يضيع. والمريض يروح لعيادة تانية وأنت مش دريان.", emoji: "😤" },
                { icon: "👤", title: "الاستقبال تحت ضغط", desc: "ريسيبشنيست على واتسابها الشخصي. الردود تتأخر. المرضى يزعلوا. والموظف يحرق.", emoji: "😰" },
                { icon: "📉", title: "المرضى مش بيرجعوا", desc: "مفيش متابعة. مفيش تذكير. ولا رسالة شكر. المريض ينسى عيادتك بسرعة.", emoji: "😞" },
              ].map((item) => (
                <div key={item.title} className="group bg-canvas border border-hairline-soft rounded-3xl p-8 md:p-10 text-right hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-ink-deep leading-[1.17]">إيه اللي بيتغير بعد Wasla؟</h2>
            <p className="mt-4 text-steel">مش بس أداة — النظام بيغير طريقة شغل عيادتك بالكامل</p>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {[
                { icon: "🗓️", title: "مواعيد منظمة", desc: "كل حجز بيتسجل تلقائياً. التذكيرات بتوصل المريض. ونسبة الحضور بتزيد." },
                { icon: "⚡", title: "رد في ثواني", desc: "كل محادثة تتوزع على الفريق. مفيش انتظار. مفيش مريض يتكرر عليه السؤال." },
                { icon: "📊", title: "قرارات ببيانات", desc: "تقارير واضحة: مين الأسرع في الرد؟ مين أكتر واحد بيحجز؟ مفيش تخمين." },
                { icon: "💆", title: "استقبال مرتاح", desc: "فريقك يشتغل من شاشة واحدة. والريسيبشنيست مش محتاج تستخدم واتسابها الشخصي." },
              ].map((item) => (
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-ink-deep leading-[1.17]">أدوات بتغير طريقة شغل عيادتك على الواتساب</h2>
              <p className="mt-4 text-steel">كل اللي محتاجه عشان تحول واتساب من دردشة لنظام إدارة عيادة</p>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {[
                { icon: "💬", title: "صندوق وارد العيادة", desc: "كل محادثات الواتساب في مكان واحد. الفريق كامل يرد من شاشة واحدة. ولا مريض يتأخر عليه الرد.", benefit: "المرضى ياخدوا رد سريع — وأنت متأكد مفيش حاجة بتضيع" },
                { icon: "📅", title: "حجوزات المواعيد", desc: "المريض يحجز ميعاد من الواتساب مباشرة. الموعد يتسجل في التقويم. واتصال تأكيد تلقائي.", benefit: "عملية الحجز بتاخد ثواني — والمواعيد مش بتتضيع" },
                { icon: "⏰", title: "تذكير تلقائي بالواتساب", desc: "المريض يستقبل تذكير قبل الميعاد بكام ساعة. يقدر يؤكد أو يعيد الحجز برسالة واحدة.", benefit: "نسبة الحضور بتزيد — والغيير في اللحظة الأخيرة بيقل" },
                { icon: "👥", title: "فريق كامل على رقم واحد", desc: "الريسيبشنيست والدكاترة كلهم يشتغلوا على نفس رقم واتساب العيادة. كل واحد دوره واضح.", benefit: "شغل منسق — ومفيش لبس في مين المسؤول عن إيه" },
                { icon: "🩺", title: "سجل المريض", desc: "تاريخ كل محادثات المريض محفوظ: الحجوزات السابقة، الاستفسارات، والملاحظات. متاح في ثانية.", benefit: "كل مريض وله ملف — والدكاترة عارفين تاريخه" },
                { icon: "📈", title: "تقارير العيادة", desc: "تقارير أداء الفريق، عدد الحجوزات، سرعة الرد، وأكتر. أرقام حقيقية تساعدك تطور شغلك.", benefit: "قراراتك مبنية على بيانات — مش على احساس" },
              ].map((item) => (
                <div key={item.title} className="group bg-canvas border border-hairline-soft rounded-xl p-6 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 text-right">
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-ink-deep leading-[1.17]">تبدأ في ٥ دقايق — من غير تعقيد</h2>
            <p className="mt-4 text-steel">في ٣ خطوات بس، عيادتك بتشتغل بنظام</p>
            <div className="relative mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="hidden md:block absolute top-20 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-hairline" />
              {[
                { step: "١", title: "وصل واتساب عيادتك", desc: "مسح QR كود أو إضافة رقم واتساب بزنس. خلصناها في ٥ دقايق. من غير تعقيد فني.", icon: "📲" },
                { step: "٢", title: "ضيف فريق الاستقبال", desc: "الريسيبشنيست والدكاترة يدخلوا على اللوحة. كل واحد بصلاحياته. مفيش تداخل.", icon: "👥" },
                { step: "٣", title: "ابدأ استقبال المرضى", desc: "حجوزات، تذكيرات، متابعة — كل حاجة من واتساب. والمرضى يحجزوا وهم في البيت.", icon: "✅" },
              ].map((item) => (
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-ink-deep leading-[1.17]">إيه اللي يخلّي Wasla مختلف للعيادات؟</h2>
              <p className="mt-4 text-steel">مش أداة عامة — منصة مبنية خصيصاً عشان توافق شغل العيادات والمراكز الطبية</p>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: "🏥",
                  title: "مبني خصيصاً للعيادات",
                  desc: "مش بنحاول نركب أداة عامة على شغلك. Wasla معمول عشان يوافق إدارة المواعيد، متابعة المرضى، وشغل الاستقبال.",
                },
                {
                  icon: "🇪🇬",
                  title: "مصري ١٠٠٪",
                  desc: "أسعار بالجنيه المصري. دعم فني بالعربي. وبنفهم سوق العيادات في مصر — مش بنقل تجربة من برة.",
                },
                {
                  icon: "⚡",
                  title: "تجهيز في دقائق",
                  desc: "وصل واتساب عيادتك في ٥ دقايق. الريسيبشنيست تستخدمه من أول يوم. من غير تدريب. من غير تعقيد.",
                },
              ].map((item) => (
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-ink-deep leading-[1.17]">الغيير مشكلة بتكلف عيادتك فرص</h2>
              <p className="mt-4 text-steel">المريض يلغي في اللحظة الأخيرة والموعد يضيع. Wasla بيحل المشكلة دي بتذكير تلقائي على الواتساب.</p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-6 md:gap-12 items-center max-w-4xl mx-auto">
              {/* Steps */}
              <div className="space-y-6 text-right">
                {[
                  { step: "١", text: "المريض يحجز ميعاد — من الواتساب أو الريسيبشنيست" },
                  { step: "٢", text: "Wasla يسجل الميعاد ويربطه بتقويم العيادة" },
                  { step: "٣", text: "تذكير أوتوماتيكي يوصل المريض قبل الميعاد بكام ساعة" },
                  { step: "٤", text: "المريض يؤكد الحضور — أو يعيد الحجز لوقت تاني" },
                  { step: "٥", text: "الموعد مش بيتلغى — والمريض بيحضر" },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-wasla-green/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-sm font-bold text-wasla-green">{item.step}</span>
                    </div>
                    <p className="text-ink-deep font-medium">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* Result card */}
              <div className="bg-canvas border-2 border-wasla-green/30 rounded-3xl p-8 shadow-md">
                <div className="w-12 h-12 bg-wasla-green/10 rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-xl font-bold text-wasla-green">النتيجة</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "مواعيدك ممتلئة بالمرضى الفعليين",
                    "الريسيبشنيست مش بتتصل بكل مريض تذكره",
                    "الغيير في اللحظة الأخيرة قلّ",
                    "المرضى يحسوا إن العيادة منظمة ومهتمة",
                  ].map((item) => (
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-ink-deep leading-[1.17]">خطة تناسب عيادتك — ابدأ مجاناً</h2>
            <p className="mt-4 text-steel">جرب Wasla ٧ أيام مجاناً. من غير فيزا. من غير التزام. واختار الخطة اللي تناسبك بعد كده.</p>
            <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "تجربة مجانية", price: "مجاناً", desc: "جرب Wasla ٧ أيام — بدون فيزا",
                  features: ["مستخدم واحد", "صندوق وارد موحد", "حجوزات مواعيد", "تذكير تلقائي", "دعم فني بالواتساب"],
                  popular: false,
                  tag: "ابدأ هنا",
                },
                {
                  name: "ستارتر", price: "٢٩٩", desc: "للعيادات الصغيرة — فريق يبدأ ينظم شغله",
                  features: ["٢ مستخدمين", "صندوق وارد موحد", "حجوزات مواعيد غير محدودة", "تذكير تلقائي", "ردود سريعة", "سجل المرضى"],
                  popular: true,
                  tag: "الأكثر طلباً",
                },
                {
                  name: "نمو", price: "٥٩٩", desc: "للمراكز الطبية — فريق كامل بصلاحيات متقدمة",
                  features: ["٥ مستخدمين", "كل مميزات ستارتر", "توزيع المحادثات", "تقارير أداء", "أولوية الدعم الفني", "غير محدود محادثات"],
                  popular: false,
                  tag: "للنشاطات الكبيرة",
                },
              ].map((plan) => (
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
                    <span className="text-steel text-sm">{plan.name !== "تجربة مجانية" ? "ج/شهر" : ""}</span>
                  </div>
                  <ul className="mt-8 space-y-3 text-right">
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
                    {plan.name === "تجربة مجانية" ? "ابدأ التجربة المجانية" : "ابدأ دلوقتي"}
                  </a>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-stone">
              كل الخطط تشمل ٧ أيام تجربة مجانية — من غير فيزا — إلغاء في أي وقت
            </p>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-16 md:py-24 px-4 bg-surface-soft">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-ink-deep leading-[1.17] text-center">أسئلة شائعة</h2>
            <p className="mt-4 text-steel text-center">أكثر الأسئلة اللي بتجينا عن Wasla للعيادات</p>
            <div className="mt-12 space-y-3">
              {[
                { q: "هل Wasla يناسب عيادتي — أنا عيادة أسنان/جلدية/علاج طبيعي؟", a: "أيوه. Wasla معمول لأي عيادة بتستخدم واتساب مع المرضى. سواء عيادة أسنان، جلدية، علاج طبيعي، أو مركز طبي. النظام بيوافق طريقة شغلك — مش العكس." },
                { q: "هل محتاج خط واتساب بزنس جديد ولا ينفع الرقم القديم؟", a: "ينفع الرقم القديم. Wasla يتصل بحساب واتساب بزنس الموجود عندك — سواء قديم أو جديد. والتجهيز ياخد ٥ دقايق بس." },
                { q: "هل في رسوم تركيب أو تجهيز؟", a: "لأ. مفيش أي رسوم خفية. التركيب مجاني. التجربة مجانية ٧ أيام. والدفع بس لما تقرر تكمل." },
                { q: "الريسيبشنيست محتاجة تدريب عشان تستخدم Wasla؟", a: "لأ خالص. الواجهة بسيطة وكلها عربي. الريسيبشنيست تبدأ تشتغل من أول دقيقة. ولو احتاجت حاجة — فريق الدعم معاكم خطوة بخطوة." },
                { q: "التذكير التلقائي بيشتغل إزاي بالظبط؟", a: "لما تحجز ميعاد لمريض، Wasla يبعتله رسالة واتساب تلقائي قبل الميعاد بعدد الساعات اللي تحدّدها. المريض يفتحها يقراها — خلاص. ولو عاوز يلغي، بيعملها من نفس الرسالة." },
                { q: "هل البيانات والمريض آمنة على Wasla؟", a: "البيانات مشفرة بالكامل ومستضافة على سيرفرات في مصر. بنمشي على أعلى معايير الأمان وبنلتزم بقوانين حماية البيانات." },
                { q: "هل أقدر أجرب Wasla قبل ما أدفع؟", a: "أكيد. ٧ أيام تجربة مجانية كاملة. كل المميزات متاحة. من غير فيزا. من غير التزام. لو عجبكش — توقف في أي وقت." },
                { q: "عندي دكاترة كتير — هل ينفع أضيف كل فريق العيادة؟", a: "أيوه. في خطة 'نمو' تقدر تضيف ٥ مستخدمين بصلاحيات مختلفة. وكل واحد يشتغل على نفس رقم واتساب العيادة." },
                { q: "هل المريض يقدر يحجز ميعاد من الواتساب مباشرة من غير ما يكلم حد؟", a: "أيوه. تقدر تشغل الردود التلقائية اللي تخلي المريض يحجز ميعاد برسالة واحدة. النظام يختار الوقت المتاح ويأكد الحجز تلقائياً." },
                { q: "الدعم الفني — لو حصل مشكلة في ١٢ بليل؟", a: "الدعم الفني بالعربي على واتساب. بنرد في أسرع وقت. لأن احنا عارفين إن عيادتك شغالة طول الوقت." },
              ].map((item, idx) => (
                <div key={idx} className={`bg-canvas border rounded-xl overflow-hidden transition-all duration-200 ${
                  openFaq === idx ? "border-wasla-green/30 shadow-sm" : "border-hairline-soft"
                }`}>
                  <button
                    className={`w-full px-6 py-4 flex items-center justify-between text-right transition-colors ${
                      openFaq === idx ? "bg-wasla-green/[0.02]" : "hover:bg-surface-soft"
                    }`}
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <span className="font-bold text-ink-deep">{item.q}</span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
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
              عيادتك تستحق نظام — جرب Wasla النهارده
            </h2>
            <p className="mt-4 text-lg text-steel">
              ٧ أيام تجربة مجانية. من غير فيزا. من غير التزام. وشوف الفرق في تنظيم مواعيد ومرضى عيادتك.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="bg-primary text-on-primary px-10 py-4 rounded-full text-sm font-bold hover:bg-primary-deep transition-all shadow-xl shadow-primary/25 hover:shadow-primary/35"
              >
                ابدأ النسخة التجريبية المجانية
              </a>
              <a
                href="#features"
                className="text-canvas/80 px-9 py-3.5 rounded-full text-sm font-bold border-2 border-canvas/20 hover:border-canvas/40 hover:text-canvas transition-all"
              >
                شوف المميزات
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-stone">
              <span className="flex items-center gap-1.5">✓ بدون فيزا</span>
              <span className="flex items-center gap-1.5">✓ بدون التزام</span>
              <span className="flex items-center gap-1.5">✓ إلغاء في أي وقت</span>
              <span className="flex items-center gap-1.5">✓ دعم فني بالعربي</span>
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
                نوصل العيادات بمرضاهم — نظام إدارة مواعيد ومحادثات الواتساب للعيادات والمراكز الطبية
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-ink mb-4">Wasla</h4>
              <ul className="space-y-2.5 text-sm text-steel">
                <li><a href="#features" className="hover:text-ink-deep transition-colors">المميزات</a></li>
                <li><a href="#pricing" className="hover:text-ink-deep transition-colors">الأسعار</a></li>
                <li><a href="#" className="hover:text-ink-deep transition-colors">المدونة</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-ink mb-4">تواصل</h4>
              <ul className="space-y-2.5 text-sm text-steel">
                <li><a href="#" className="hover:text-ink-deep transition-colors">واتساب</a></li>
                <li><a href="#" className="hover:text-ink-deep transition-colors">بريد إلكتروني</a></li>
                <li><a href="#" className="hover:text-ink-deep transition-colors">الدعم الفني</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-ink mb-4">تابعنا</h4>
              <div className="flex gap-3">
                {["in", "ig", "tt", "fb"].map((s) => (
                  <a key={s} href="#" className="w-10 h-10 bg-surface-soft rounded-full flex items-center justify-center hover:bg-wasla-green hover:text-white transition-all text-xs font-bold text-steel">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-hairline-soft flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone">
            <p>© 2026 Wasla. جميع الحقوق محفوظة.</p>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-ink-deep transition-colors">English</a>
              <span className="text-hairline">|</span>
              <span className="text-wasla-green font-medium">العربية</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
