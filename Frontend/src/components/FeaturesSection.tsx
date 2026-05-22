const features = [
  { icon: "💬", title: "صندوق وارد موحد", desc: "كل فريقك يرد على واتساب واحد من شاشة واحدة" },
  { icon: "📦", title: "متابعة الطلبات", desc: "أنشئ طلب من أي محادثة وتابعه خطوة بخطوة" },
  { icon: "⚡", title: "ردود تلقائية", desc: "جهز ردود جاهزة للأسئلة المتكررة وأرسلها بضغطة زر" },
  { icon: "📅", title: "حجوزات المواعيد", desc: "حجز مواعيد وتذكير تلقائي للمرضى والعملاء" },
  { icon: "💰", title: "عروض سعر", desc: "جهز عرض سعر احترافي وأرسله في ثوان" },
  { icon: "📈", title: "تقارير وأداء", desc: "شوف أداء فريقك ومؤشرات نشاطك التجاري" },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-ink-deep leading-[1.17]">كل اللي تحتاجه لإدارة محادثاتك</h2>
        <p className="mt-4 text-steel max-w-xl mx-auto">أدوات متكاملة تناسب كل الأنشطة التجارية</p>
      </div>
      <div className="mt-12 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {features.map((item) => (
          <div
            key={item.title}
            className="bg-canvas border border-hairline-soft rounded-xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <FeatureIcon icon={item.icon} />
            <h3 className="mt-4 text-lg font-bold text-ink-deep">{item.title}</h3>
            <p className="mt-2 text-sm text-steel leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeatureIcon({ icon }: { icon: string }) {
  return (
    <div className="w-12 h-12 bg-wasla-green/10 rounded-xl flex items-center justify-center text-2xl">
      {icon}
    </div>
  );
}
