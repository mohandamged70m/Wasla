export default function SocialProof() {
  const logos = ["متجر نون", "عيادة سما", "صيانة المنزل", "ازياء مريم", "دكتور وليد"];

  return (
    <section className="py-12 md:py-16 bg-surface-soft">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm font-bold text-charcoal mb-6">يثق بنا أكثر من ٥٠ تاجر مصري</p>
        <div className="flex flex-wrap justify-center gap-4 items-center">
          {logos.map((name) => (
            <div
              key={name}
              className="bg-canvas px-5 py-2.5 rounded-full shadow-sm text-sm font-medium text-steel border border-hairline-soft"
            >
              {name}
            </div>
          ))}
        </div>
        <div className="mt-8 max-w-2xl mx-auto bg-canvas rounded-xl p-6 md:p-8 border border-hairline-soft">
          <p className="text-lg text-ink leading-relaxed">
            &ldquo;كان عندي فوضى في الواتساب — دلوقتي كل حاجة منظمة. فرق كبير في شغلي.&rdquo;
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="w-10 h-10 bg-wasla-green/10 rounded-full flex items-center justify-center text-wasla-green font-bold text-sm">
              ن
            </div>
            <p className="text-sm font-bold text-ink-deep">— نادين، صاحبة متجر ملابس أونلاين</p>
          </div>
        </div>
      </div>
    </section>
  );
}
