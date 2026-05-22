import type { Lang } from "@/contexts/LanguageContext";

export type Translations = typeof translations;
export type TranslationKey = Lang;

export const translations = {
  ar: {
    banner: {
      text: "عيادتك على واتساب محتاجة تنظيم؟ جرب Wasla ٧ أيام مجاناً",
      link: "ابدأ دلوقتي",
    },
    nav: {
      links: [
        { label: "المميزات", href: "#features" },
        { label: "الأسعار", href: "#pricing" },
        { label: "أسئلة شائعة", href: "#faq" },
      ],
      cta: "ابدأ مجاناً",
    },
    hero: {
      badge: "💡 مخصوص للعيادات والمراكز الطبية",
      title: 'مواعيد ومرضى عيادتك على الواتساب — <span class="text-wasla-green">نظام متكامل</span>',
      subtitle:
        "Wasla بيحول واتساب عيادتك لصندوق وارد موحد مع حجوزات مواعيد، تذكير تلقائي للمرضى، وفريق كامل يدير المحادثات من شاشة واحدة.",
      cta: "ابدأ النسخة التجريبية — ٧ أيام مجاناً",
      watch: "شوف إزاي بيشتغل",
      chips: ["حجوزات مواعيد", "تذكير تلقائي", "صندوق وارد موحد", "توزيع المحادثات", "تقارير العيادة"],
    },
    problem: {
      title: "الواتساب بيكلف عيادتك مرضى — وأنت مش واخد بالك",
      subtitle: "مريض بيسأل عن الكشف. تاني عاوز يحجز. تالت بيلغي. والمشاكل دي:",
      cards: [
        { icon: "🗓️", title: "المواعيد بتضيع", desc: "المريض يحجز عالواتساب. محدش يسجل. الميعاد يضيع. والمريض يروح لعيادة تانية وأنت مش دريان.", emoji: "😤" },
        { icon: "👤", title: "الاستقبال تحت ضغط", desc: "ريسيبشنيست على واتسابها الشخصي. الردود تتأخر. المرضى يزعلوا. والموظف يحرق.", emoji: "😰" },
        { icon: "📉", title: "المرضى مش بيرجعوا", desc: "مفيش متابعة. مفيش تذكير. ولا رسالة شكر. المريض ينسى عيادتك بسرعة.", emoji: "😞" },
      ],
    },
    benefits: {
      title: "إيه اللي بيتغير بعد Wasla؟",
      subtitle: "مش بس أداة — النظام بيغير طريقة شغل عيادتك بالكامل",
      cards: [
        { icon: "🗓️", title: "مواعيد منظمة", desc: "كل حجز بيتسجل تلقائياً. التذكيرات بتوصل المريض. ونسبة الحضور بتزيد." },
        { icon: "⚡", title: "رد في ثواني", desc: "كل محادثة تتوزع على الفريق. مفيش انتظار. مفيش مريض يتكرر عليه السؤال." },
        { icon: "📊", title: "قرارات ببيانات", desc: "تقارير واضحة: مين الأسرع في الرد؟ مين أكتر واحد بيحجز؟ مفيش تخمين." },
        { icon: "💆", title: "استقبال مرتاح", desc: "فريقك يشتغل من شاشة واحدة. والريسيبشنيست مش محتاج تستخدم واتسابها الشخصي." },
      ],
    },
    features: {
      title: "أدوات بتغير طريقة شغل عيادتك على الواتساب",
      subtitle: "كل اللي محتاجه عشان تحول واتساب من دردشة لنظام إدارة عيادة",
      cards: [
        { icon: "💬", title: "صندوق وارد العيادة", desc: "كل محادثات الواتساب في مكان واحد. الفريق كامل يرد من شاشة واحدة. ولا مريض يتأخر عليه الرد.", benefit: "المرضى ياخدوا رد سريع — وأنت متأكد مفيش حاجة بتضيع" },
        { icon: "📅", title: "حجوزات المواعيد", desc: "المريض يحجز ميعاد من الواتساب مباشرة. الموعد يتسجل في التقويم. واتصال تأكيد تلقائي.", benefit: "عملية الحجز بتاخد ثواني — والمواعيد مش بتتضيع" },
        { icon: "⏰", title: "تذكير تلقائي بالواتساب", desc: "المريض يستقبل تذكير قبل الميعاد بكام ساعة. يقدر يؤكد أو يعيد الحجز برسالة واحدة.", benefit: "نسبة الحضور بتزيد — والغيير في اللحظة الأخيرة بيقل" },
        { icon: "👥", title: "فريق كامل على رقم واحد", desc: "الريسيبشنيست والدكاترة كلهم يشتغلوا على نفس رقم واتساب العيادة. كل واحد دوره واضح.", benefit: "شغل منسق — ومفيش لبس في مين المسؤول عن إيه" },
        { icon: "🩺", title: "سجل المريض", desc: "تاريخ كل محادثات المريض محفوظ: الحجوزات السابقة، الاستفسارات، والملاحظات. متاح في ثانية.", benefit: "كل مريض وله ملف — والدكاترة عارفين تاريخه" },
        { icon: "📈", title: "تقارير العيادة", desc: "تقارير أداء الفريق، عدد الحجوزات، سرعة الرد، وأكتر. أرقام حقيقية تساعدك تطور شغلك.", benefit: "قراراتك مبنية على بيانات — مش على احساس" },
      ],
    },
    howItWorks: {
      title: "تبدأ في ٥ دقايق — من غير تعقيد",
      subtitle: "في ٣ خطوات بس، عيادتك بتشتغل بنظام",
      steps: [
        { step: "١", icon: "📲", title: "وصل واتساب عيادتك", desc: "مسح QR كود أو إضافة رقم واتساب بزنس. خلصناها في ٥ دقايق. من غير تعقيد فني." },
        { step: "٢", icon: "👥", title: "ضيف فريق الاستقبال", desc: "الريسيبشنيست والدكاترة يدخلوا على اللوحة. كل واحد بصلاحياته. مفيش تداخل." },
        { step: "٣", icon: "✅", title: "ابدأ استقبال المرضى", desc: "حجوزات، تذكيرات، متابعة — كل حاجة من واتساب. والمرضى يحجزوا وهم في البيت." },
      ],
    },
    why: {
      title: "إيه اللي يخلّي Wasla مختلف للعيادات؟",
      subtitle: "مش أداة عامة — منصة مبنية خصيصاً عشان توافق شغل العيادات والمراكز الطبية",
      cards: [
        { icon: "🏥", title: "مبني خصيصاً للعيادات", desc: "مش بنحاول نركب أداة عامة على شغلك. Wasla معمول عشان يوافق إدارة المواعيد، متابعة المرضى، وشغل الاستقبال." },
        { icon: "🇪🇬", title: "مصري ١٠٠٪", desc: "أسعار بالجنيه المصري. دعم فني بالعربي. وبنفهم سوق العيادات في مصر — مش بنقل تجربة من برة." },
        { icon: "⚡", title: "تجهيز في دقائق", desc: "وصل واتساب عيادتك في ٥ دقايق. الريسيبشنيست تستخدمه من أول يوم. من غير تدريب. من غير تعقيد." },
      ],
    },
    reminders: {
      title: "الغيير مشكلة بتكلف عيادتك فرص",
      subtitle: "المريض يلغي في اللحظة الأخيرة والموعد يضيع. Wasla بيحل المشكلة دي بتذكير تلقائي على الواتساب.",
      steps: [
        { step: "١", text: "المريض يحجز ميعاد — من الواتساب أو الريسيبشنيست" },
        { step: "٢", text: "Wasla يسجل الميعاد ويربطه بتقويم العيادة" },
        { step: "٣", text: "تذكير أوتوماتيكي يوصل المريض قبل الميعاد بكام ساعة" },
        { step: "٤", text: "المريض يؤكد الحضور — أو يعيد الحجز لوقت تاني" },
        { step: "٥", text: "الموعد مش بيتلغى — والمريض بيحضر" },
      ],
      result: {
        title: "النتيجة",
        items: [
          "مواعيدك ممتلئة بالمرضى الفعليين",
          "الريسيبشنيست مش بتتصل بكل مريض تذكره",
          "الغيير في اللحظة الأخيرة قلّ",
          "المرضى يحسوا إن العيادة منظمة ومهتمة",
        ],
      },
    },
    pricing: {
      title: "خطة تناسب عيادتك — ابدأ مجاناً",
      subtitle: "جرب Wasla ٧ أيام مجاناً. من غير فيزا. من غير التزام. واختار الخطة اللي تناسبك بعد كده.",
      plans: [
        { name: "تجربة مجانية", price: "مجاناً", desc: "جرب Wasla ٧ أيام — بدون فيزا", features: ["مستخدم واحد", "صندوق وارد موحد", "حجوزات مواعيد", "تذكير تلقائي", "دعم فني بالواتساب"], popular: false, tag: "ابدأ هنا", cta: "ابدأ التجربة المجانية", suffix: "" },
        { name: "ستارتر", price: "٢٩٩", desc: "للعيادات الصغيرة — فريق يبدأ ينظم شغله", features: ["٢ مستخدمين", "صندوق وارد موحد", "حجوزات مواعيد غير محدودة", "تذكير تلقائي", "ردود سريعة", "سجل المرضى"], popular: true, tag: "الأكثر طلباً", cta: "ابدأ دلوقتي", suffix: "ج/شهر" },
        { name: "نمو", price: "٥٩٩", desc: "للمراكز الطبية — فريق كامل بصلاحيات متقدمة", features: ["٥ مستخدمين", "كل مميزات ستارتر", "توزيع المحادثات", "تقارير أداء", "أولوية الدعم الفني", "غير محدود محادثات"], popular: false, tag: "للنشاطات الكبيرة", cta: "ابدأ دلوقتي", suffix: "ج/شهر" },
      ],
      footnote: "كل الخطط تشمل ٧ أيام تجربة مجانية — من غير فيزا — إلغاء في أي وقت",
    },
    faq: {
      title: "أسئلة شائعة",
      subtitle: "أكثر الأسئلة اللي بتجينا عن Wasla للعيادات",
      items: [
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
      ],
    },
    cta: {
      title: "عيادتك تستحق نظام — جرب Wasla النهارده",
      subtitle: "٧ أيام تجربة مجانية. من غير فيزا. من غير التزام. وشوف الفرق في تنظيم مواعيد ومرضى عيادتك.",
      cta1: "ابدأ النسخة التجريبية المجانية",
      cta2: "شوف المميزات",
      badges: ["بدون فيزا", "بدون التزام", "إلغاء في أي وقت", "دعم فني بالعربي"],
    },
    footer: {
      description: "نوصل العيادات بمرضاهم — نظام إدارة مواعيد ومحادثات الواتساب للعيادات والمراكز الطبية",
      columns: [
        {
          title: "Wasla",
          links: [
            { label: "المميزات", href: "#features" },
            { label: "الأسعار", href: "#pricing" },
            { label: "المدونة", href: "#" },
          ],
        },
        {
          title: "تواصل",
          links: [
            { label: "واتساب", href: "#" },
            { label: "بريد إلكتروني", href: "#" },
            { label: "الدعم الفني", href: "#" },
          ],
        },
        {
          title: "تابعنا",
          social: [
            { label: "in", href: "#" },
            { label: "ig", href: "#" },
            { label: "tt", href: "#" },
            { label: "fb", href: "#" },
          ],
        },
      ],
      legal: "© 2026 Wasla. جميع الحقوق محفوظة.",
      switch: { ar: "العربية", en: "English" },
    },
  },
  en: {
    banner: {
      text: "Your clinic's WhatsApp needs organizing? Try Wasla 7 days free",
      link: "Start Now",
    },
    nav: {
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
      ],
      cta: "Start Free",
    },
    hero: {
      badge: "💡 Built for clinics & medical centers",
      title: 'Appointments & patients on WhatsApp — <span class="text-wasla-green">an integrated system</span>',
      subtitle:
        "Wasla turns your clinic's WhatsApp into a unified inbox with appointment booking, automatic reminders, and a full team managing conversations from one screen.",
      cta: "Start Free Trial — 7 Days",
      watch: "See How It Works",
      chips: ["Appointment Booking", "Auto Reminders", "Unified Inbox", "Team Inbox", "Clinic Reports"],
    },
    problem: {
      title: "WhatsApp is costing you patients — and you don't even notice",
      subtitle: "One patient asks about fees. Another wants to book. A third cancels. Sound familiar?",
      cards: [
        { icon: "🗓️", title: "Lost Appointments", desc: "A patient books on WhatsApp. No one logs it. The slot gets double-booked. The patient goes elsewhere.", emoji: "😤" },
        { icon: "👤", title: "Reception Under Pressure", desc: "Receptionist on their personal WhatsApp. Responses are slow. Patients get frustrated. Staff burns out.", emoji: "😰" },
        { icon: "📉", title: "Patients Don't Come Back", desc: "No follow-up. No reminders. No thank-you message. Patients forget your clinic exists.", emoji: "😞" },
      ],
    },
    benefits: {
      title: "What changes after Wasla?",
      subtitle: "Not just a tool — it transforms how your clinic operates",
      cards: [
        { icon: "🗓️", title: "Organized Appointments", desc: "Every booking is logged automatically. Reminders reach patients. Show-up rates go up." },
        { icon: "⚡", title: "Lightning-Fast Replies", desc: "Every conversation is routed to the right team member. No waiting. No重复 questions." },
        { icon: "📊", title: "Data-Driven Decisions", desc: "Clear reports: who responds fastest? who books the most? No more guesswork." },
        { icon: "💆", title: "Stress-Free Reception", desc: "Your team works from one screen. Receptionists no longer need to use personal WhatsApp." },
      ],
    },
    features: {
      title: "Tools that transform your clinic's WhatsApp workflow",
      subtitle: "Everything you need to turn WhatsApp from chat into a clinic management system",
      cards: [
        { icon: "💬", title: "Clinic Inbox", desc: "All WhatsApp conversations in one place. The whole team responds from a single screen. No patient waits.", benefit: "Patients get fast replies — and nothing slips through the cracks" },
        { icon: "📅", title: "Appointment Booking", desc: "Patients book directly from WhatsApp. Appointments sync to your calendar. Auto-confirmation included.", benefit: "Booking takes seconds — and appointments never get lost" },
        { icon: "⏰", title: "Auto WhatsApp Reminders", desc: "Patients receive a reminder hours before their appointment. Confirm or reschedule with one message.", benefit: "Show-up rates increase — last-minute cancellations drop" },
        { icon: "👥", title: "Full Team on One Number", desc: "Receptionists and doctors all work from the same clinic WhatsApp number. Clear roles for everyone.", benefit: "Coordinated workflow — no confusion about who handles what" },
        { icon: "🩺", title: "Patient History", desc: "Every patient's conversation history saved: past bookings, inquiries, notes. Available in seconds.", benefit: "Every patient has a file — doctors know their history" },
        { icon: "📈", title: "Clinic Reports", desc: "Team performance, booking stats, response times, and more. Real numbers to grow your practice.", benefit: "Decisions based on data — not gut feeling" },
      ],
    },
    howItWorks: {
      title: "Start in 5 minutes — no complexity",
      subtitle: "3 simple steps to get your clinic on the system",
      steps: [
        { step: "1", icon: "📲", title: "Connect your clinic's WhatsApp", desc: "Scan a QR code or add your WhatsApp Business number. Done in 5 minutes. No technical hassle." },
        { step: "2", icon: "👥", title: "Add your reception team", desc: "Receptionists and doctors log into the dashboard. Each with their own permissions. No overlap." },
        { step: "3", icon: "✅", title: "Start accepting patients", desc: "Bookings, reminders, follow-ups — everything from WhatsApp. Patients book from the comfort of home." },
      ],
    },
    why: {
      title: "What makes Wasla different for clinics?",
      subtitle: "Not a generic tool — a platform built specifically for clinics and medical centers",
      cards: [
        { icon: "🏥", title: "Built for Clinics", desc: "We don't force a generic tool onto your workflow. Wasla is designed for appointment management, patient follow-up, and reception operations." },
        { icon: "🇪🇬", title: "100% Egyptian", desc: "Pricing in EGP. Support in Arabic. We understand the Egyptian clinic market — we're not copying an overseas product." },
        { icon: "⚡", title: "Setup in Minutes", desc: "Connect your clinic's WhatsApp in 5 minutes. Your receptionist uses it from day one. No training. No complexity." },
      ],
    },
    reminders: {
      title: "No-shows cost your clinic opportunities",
      subtitle: "A patient cancels last minute and the slot is wasted. Wasla solves this with automatic WhatsApp reminders.",
      steps: [
        { step: "1", text: "Patient books an appointment — via WhatsApp or receptionist" },
        { step: "2", text: "Wasla logs the appointment and syncs it with the clinic calendar" },
        { step: "3", text: "Auto reminder reaches the patient hours before the appointment" },
        { step: "4", text: "Patient confirms attendance — or reschedules for another time" },
        { step: "5", text: "The slot is filled — and the patient shows up" },
      ],
      result: {
        title: "The Result",
        items: [
          "Your schedule is filled with actual patients",
          "Receptionists don't have to call every patient as a reminder",
          "Last-minute cancellations drop significantly",
          "Patients feel the clinic is organized and cares",
        ],
      },
    },
    pricing: {
      title: "A plan that fits your clinic — start free",
      subtitle: "Try Wasla 7 days free. No credit card. No commitment. Choose your plan after.",
      plans: [
        { name: "Free Trial", price: "Free", desc: "Try Wasla 7 days — no credit card", features: ["1 user", "Unified inbox", "Appointment booking", "Auto reminders", "WhatsApp support"], popular: false, tag: "Start Here", cta: "Start Free Trial", suffix: "" },
        { name: "Starter", price: "299", desc: "For small clinics — a team getting organized", features: ["2 users", "Unified inbox", "Unlimited bookings", "Auto reminders", "Quick replies", "Patient history"], popular: true, tag: "Most Popular", cta: "Start Now", suffix: "EGP/mo" },
        { name: "Growth", price: "599", desc: "For medical centers — full team with advanced permissions", features: ["5 users", "All Starter features", "Conversation routing", "Performance reports", "Priority support", "Unlimited conversations"], popular: false, tag: "For Growing Practices", cta: "Start Now", suffix: "EGP/mo" },
      ],
      footnote: "All plans include 7-day free trial — no credit card — cancel anytime",
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "The most common questions about Wasla for clinics",
      items: [
        { q: "Is Wasla right for my clinic — dental/dermatology/physical therapy?", a: "Yes. Wasla works for any clinic that uses WhatsApp with patients. Whether you're a dental clinic, dermatology, physical therapy, or medical center. The system adapts to your workflow — not the other way around." },
        { q: "Do I need a new WhatsApp Business number or can I use my existing one?", a: "Your existing number works fine. Wasla connects to your current WhatsApp Business account — whether old or new. Setup takes 5 minutes." },
        { q: "Are there any setup or installation fees?", a: "No. Zero hidden fees. Setup is free. The 7-day trial is free. You only pay when you decide to continue." },
        { q: "Does my receptionist need training to use Wasla?", a: "Not at all. The interface is simple and intuitive. Your receptionist starts working from minute one. If they need anything, our support team is with you every step of the way." },
        { q: "How exactly do the auto reminders work?", a: "When you book an appointment for a patient, Wasla automatically sends a WhatsApp message before the appointment at the time you set. The patient opens it, reads it — done. If they want to cancel, they can do it from the same message." },
        { q: "Is my patient data secure on Wasla?", a: "All data is fully encrypted and hosted on servers in Egypt. We follow the highest security standards and comply with data protection regulations." },
        { q: "Can I try Wasla before paying?", a: "Absolutely. 7-day full free trial. All features available. No credit card. No commitment. If you don't like it, stop anytime." },
        { q: "I have multiple doctors — can I add my entire clinic team?", a: "Yes. The 'Growth' plan supports 5 users with different permissions. Everyone works on the same clinic WhatsApp number." },
        { q: "Can patients book appointments from WhatsApp directly without talking to anyone?", a: "Yes. Enable auto-replies that let patients book an appointment with a single message. The system picks available slots and confirms the booking automatically." },
        { q: "Support — what if something goes wrong at midnight?", a: "Arabic support on WhatsApp. We reply as fast as possible because we know your clinic runs around the clock." },
      ],
    },
    cta: {
      title: "Your clinic deserves a system — try Wasla today",
      subtitle: "7-day free trial. No credit card. No commitment. See the difference in organizing your clinic's appointments and patients.",
      cta1: "Start Your Free Trial",
      cta2: "See Features",
      badges: ["No credit card", "No commitment", "Cancel anytime", "Arabic support"],
    },
    footer: {
      description: "Connecting clinics with their patients — WhatsApp appointment & conversation management for clinics and medical centers",
      columns: [
        {
          title: "Wasla",
          links: [
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "#pricing" },
            { label: "Blog", href: "#" },
          ],
        },
        {
          title: "Contact",
          links: [
            { label: "WhatsApp", href: "#" },
            { label: "Email", href: "#" },
            { label: "Support", href: "#" },
          ],
        },
        {
          title: "Follow Us",
          social: [
            { label: "in", href: "#" },
            { label: "ig", href: "#" },
            { label: "tt", href: "#" },
            { label: "fb", href: "#" },
          ],
        },
      ],
      legal: "© 2026 Wasla. All rights reserved.",
      switch: { ar: "العربية", en: "English" },
    },
  },
} as const;
