export default function Hero() {
  return (
    <section className="relative pt-28 pb-24 md:pt-40 md:pb-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-wasla-green/[0.04] rounded-full blur-3xl" />
        <div className="absolute -top-32 right-0 w-80 h-80 bg-primary/[0.03] rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-0 w-80 h-80 bg-fb-blue/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 bg-warning/20 rounded-full px-4 py-1.5 mb-8">
          <span className="text-lg leading-none">✨</span>
          <span className="text-ink-deep text-xs font-bold">جديد — جرب Wasla مجاناً لمدة 7 أيام</span>
        </div>

        <h1 className="text-[2.75rem] sm:text-6xl lg:text-7xl font-medium text-ink-deep leading-[1.12] tracking-tight">
          وصل أعمالك <span className="text-wasla-green">بالواتساب.</span> بطريقة ذكية ومنظمة.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-steel max-w-2xl mx-auto leading-relaxed">
          Wasla هو مركز عمليات الواتساب لفريقك — صندوق وارد موحد،
          متابعة الطلبات والحجوزات، وردود تلقائية. كل هذا في مكان واحد.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#cta"
            className="bg-ink-button text-on-ink-button px-10 py-4 rounded-full text-sm font-bold hover:bg-charcoal transition-all shadow-xl shadow-ink-button/20"
          >
            ابدأ النسخة التجريبية
          </a>
          <a
            href="#features"
            className="bg-transparent text-ink-deep px-9 py-3.5 rounded-full text-sm font-bold border-2 border-ink-deep hover:bg-ink-deep/5 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            شوف الفيديو
          </a>
        </div>

        {/* Trust metrics */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm">
          <div className="flex items-center gap-2.5">
            <span className="text-wasla-green text-xl font-bold">٥٠+</span>
            <span className="text-steel">تاجر</span>
          </div>
          <div className="w-px h-5 bg-hairline hidden sm:block" />
          <div className="flex items-center gap-2.5">
            <span className="text-wasla-green text-xl font-bold">١٠,٠٠٠+</span>
            <span className="text-steel">محادثة شهرياً</span>
          </div>
          <div className="w-px h-5 bg-hairline hidden sm:block" />
          <div className="flex items-center gap-2.5">
            <span className="text-wasla-green text-xl font-bold">٩٨٪</span>
            <span className="text-steel">رضا العملاء</span>
          </div>
        </div>

        {/* Feature chips */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {["ردود تلقائية", "متابعة طلبات", "صندوق وارد موحد", "حجوزات مواعيد"].map((f) => (
            <span key={f} className="bg-surface-soft text-charcoal text-xs font-bold px-4 py-2 rounded-full border border-hairline-soft">
              ✓ {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
