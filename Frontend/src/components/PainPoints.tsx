const pains = [
  { icon: "🗃️", title: "طلبات ضائعة", desc: "بتستقبل طلبات عالواتساب ومابتوصلكش كلها" },
  { icon: "📞", title: "ردود متأخرة", desc: "فريقك مش عارف مين رد على مين والردود بتتأخر" },
  { icon: "🔄", title: "متابعة مفقودة", desc: "بتنسى تتابع مع الزبون بعد ما يخلص الطلب" },
];

export default function PainPoints() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-ink-deep leading-[1.17]">هل تعاني من هذه المشاكل؟</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
          {pains.map((item) => (
            <div
              key={item.title}
              className="bg-canvas border border-hairline-soft rounded-3xl p-8 md:p-10 text-right hover:shadow-md transition-shadow"
            >
              <span className="text-4xl">{item.icon}</span>
              <h3 className="mt-4 text-xl font-bold text-ink-deep">{item.title}</h3>
              <p className="mt-2 text-steel leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
