const steps = [
  { step: "١", title: "وصل واتساب بزنسك", desc: "المسح QR أو استخدم رقم التليفون", icon: "📲" },
  { step: "٢", title: "فريقك يرد من شاشة واحدة", desc: "صندوق وارد موحد لكل الفريق", icon: "👥" },
  { step: "٣", title: "تابع وانمو", desc: "طلبات — حجوزات — عروض سعر لوحة تحكم واحدة", icon: "📊" },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 px-4 bg-surface-soft">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-ink-deep leading-[1.17]">كيف يعمل Wasla؟</h2>
        <p className="mt-4 text-steel max-w-xl mx-auto">ثلاث خطوات بسيطة وتبدأ تنظيم محادثاتك</p>
        <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((item) => (
            <div key={item.step} className="relative">
              <div className="bg-canvas border border-hairline-soft rounded-3xl p-8 md:p-10">
                <div className="w-14 h-14 bg-wasla-green/10 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <div className="mt-4 w-8 h-8 bg-wasla-green text-white rounded-full flex items-center justify-center mx-auto text-sm font-bold">
                  {item.step}
                </div>
                <h3 className="mt-4 text-xl font-bold text-ink-deep">{item.title}</h3>
                <p className="mt-2 text-steel leading-relaxed">{item.desc}</p>
              </div>
              {item.step !== "٣" && (
                <div className="hidden md:block absolute top-1/2 -left-4 text-2xl text-hairline">←</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
