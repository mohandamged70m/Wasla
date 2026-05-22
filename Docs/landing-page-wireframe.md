# Wasla — Landing Page Wireframe & UI/UX Blueprint

---

## 1. Design System

### Brand Identity

- **Name:** Wasla (وصلة) — نـوصـلـك بـعـمـلائـك
- **Tone:** Modern, trustworthy, local. Not corporate — it's for the Egyptian entrepreneur.
- **Colors:**

```
Primary:    #1DA1F2 (WhatsApp blue / trust)
Secondary:  #00A884 (WhatsApp green)
Accent:     #FF6B35 (Orange — energy, CTA)
Dark:       #1A1A2E
Light:      #F8F9FA
Text:       #333333
```

- **Typography:**
  - Headings: Tajawal (Arabic) / Inter (English)
  - Body: Noto Sans Arabic / Inter
- **Border radius:** 12px for cards, 8px for buttons
- **Icons:** Phosphor icons (clean, modern)
- **Grid:** 12-column, max 1200px container

### RTL Layout

- Everything is RTL by default (Arabic-first)
- LTR option toggle in footer
- Margins/paddings mirrored for RTL

---

## 2. Page Structure (Desktop)

### Section 1: Navigation + Hero

```
┌──────────────────────────────────────────────────────────────┐
│ [Logo: Wasla 🟢]  المميزات  الأسعار  تواصل  [ابدأ مجاناً]  │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│    ┌──────────────────────────────────────┐                  │
│    │                                      │                  │
│    │  وصل أعمالك بالواتساب.               │                  │
│    │  بطريقة ذكية ومنظمة.                 │                  │
│    │                                      │                  │
│    │  Wasla هو مركز عمليات الواتساب       │                  │
│    │  لفريقك — صندوق وارد موحد،           │                  │
│    │  متابعة الطلبات والحجوزات،           │                  │
│    │  وردود تلقائية.                      │                  │
│    │                                      │                  │
│    │  [ابدأ النسخة التجريبية]  [شوف الفيديو ▶]              │
│    │                                      │                  │
│    │  مجاناً 7 أيام — بدون فيزا           │                  │
│    │                                      │                  │
│    └──────────────────────────────────────┘                  │
│                                                              │
│    ┌──────────────────────────────────────┐                  │
│    │ [Phone Mockup]                       │                  │
│    │                                      │                  │
│    │  ╭────────────────────────╮          │                  │
│    │  │ Wasla Inbox           │          │                  │
│    │  │ ┌──────────────────┐  │          │                  │
│    │  │ │ 📱 منى —— طلب #45 │  │          │                  │
│    │  │ │    جديد          │  │          │                  │
│    │  │ ├──────────────────┤  │          │                  │
│    │  │ │ 📱 أحمد —— حجز   │  │          │                  │
│    │  │ │    غداً 10ص      │  │          │                  │
│    │  │ ├──────────────────┤  │          │                  │
│    │  │ │ 📱 سارة —— عرض   │  │          │                  │
│    │  │ │    سعر 1,500 ج  │  │          │                  │
│    │  │ └──────────────────┘  │          │                  │
│    │  ╰────────────────────────╯          │                  │
│    └──────────────────────────────────────┘                  │
│                                                              │
├──────────────────────────────────────────────────────────────┤
```

### Section 2: Social Proof

```
│  يثق بنا أكثر من 50 تاجر مصري                                 │
│  [Logo 1]  [Logo 2]  [Logo 3]  [Logo 4]  [Logo 5]          │
│                                                              │
│  "كان عندي فوضى في الواتساب — دلوقتي كل حاجة منظمة"          │
│  — نادين، صاحبة متجر ملابس                                   │
```

### Section 3: Problem / Pain

```
│  هل تعاني من هذه المشاكل؟                                      │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │ 🗃️           │  │ 📞           │  │ 🔄           │       │
│  │ طلبات ضائعة  │  │ ردود متأخرة │  │ متابعة مفقودة│       │
│  │              │  │              │  │              │       │
│  │ بتستقبل طلبات│  │ فريقك مش     │  │ بتنسى تتابع  │       │
│  │ عالواتساب    │  │ عارف مين رد  │  │ مع الزبون بعد│       │
│  │ ومبتوصلش    │  │ ومين لأ      │  │ ما يخلص      │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
```

### Section 4: How It Works (3 Steps)

```
│  كيف يعمل Wasla؟                                            │
│                                                              │
│  ┌──────────────────────────────────────────────────┐        │
│  │                                                   │        │
│  │  ① توصل واتساب بزنسك         ② فريقك يرد من شاشة واحدة  │
│  │  ┌──────────┐                 ┌──────────┐               │
│  │  │ المسح QR │                 │ صندوق    │               │
│  │  │ أو رقم   │                 │ وارد واحد│               │
│  │  │ التليفون │                 │ لكل     │               │
│  │  └──────────┘                 │ الفريق  │               │
│  │                                                   │        │
│  │  ③ تتابع وتنمو                      │        │
│  │  ┌──────────┐                       │        │
│  │  │ طلبات    │                       │        │
│  │  │ حجوزات   │                       │        │
│  │  │ عروض سعر│                       │        │
│  │  └──────────┘                       │        │
│  └──────────────────────────────────────────────────┘        │
```

### Section 5: Features

```
│  كل اللي تحتاجه لإدارة محادثاتك                               │
│                                                              │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐             │
│  │ صندوق وارد │  │ متابعة     │  │ ردود تلقائية│             │
│  │ موحد      │  │ الطلبات   │  │            │             │
│  │            │  │            │  │            │             │
│  │ كل فريقك   │  │ أنشئ طلب  │  │ جهز ردود  │             │
│  │ يرد على    │  │ من أي محادثة│  │ جاهزة      │             │
│  │ واتساب واحد│  │ وتابعه    │  │ للأسئلة   │             │
│  │            │  │ خطوة بخطوة │  │ المتكررة  │             │
│  └────────────┘  └────────────┘  └────────────┘             │
│                                                              │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐             │
│  │ حجوزات     │  │ عروض سعر  │  │ تقارير    │             │
│  │ المواعيد  │  │            │  │ وأداء    │             │
│  │            │  │            │  │            │             │
│  │ حجز مواعيد │  │ جهز عرض   │  │ شوف أداء  │             │
│  │ وتذكير    │  │ سعر وأرسله│  │ فريقك      │             │
│  │ تلقائي    │  │ في ثوان   │  │ ومؤشراتك  │             │
│  └────────────┘  └────────────┘  └────────────┘             │
```

### Section 6: For Every Business

```
│  Wasla يناسب كل أنواع الأنشطة                                 │
│                                                              │
│  ┌─────────────────────┐  ┌─────────────────────┐           │
│  │  🛍️ التجارة         │  │  🏥 العيادات       │           │
│  │  الإلكترونية        │  │                     │           │
│  │  طلبات واتساب       │  │  حجوزات مواعيد      │           │
│  │  متابعة توصيل       │  │  تذكير المرضى       │           │
│  │  ردود تلقائية       │  │  متابعة ما بعد الكشف│           │
│  └─────────────────────┘  └─────────────────────┘           │
│  ┌─────────────────────┐  ┌─────────────────────┐           │
│  │  🔧 الخدمات         │  │  ✨ وأنشطة           │           │
│  │                     │  │  أخرى               │           │
│  │  عروض سعر           │  │                     │           │
│  │  جدولة المواعيد     │  │  أي نشاط يستخدم     │           │
│  │  دعم العملاء        │  │  الواتساب مع      │           │
│  └─────────────────────┘  │  العملاء            │           │
│                            └─────────────────────┘           │
```

### Section 7: Pricing

```
│  خطط بأسعار تناسب كل الأعمال                                 │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │ Starter     │  │ Growth       │  │ Business     │       │
│  │             │  │              │  │              │       │
│  │ 299 ج/شهر  │  │ 599 ج/شهر   │  │ 999 ج/شهر   │       │
│  │             │  │              │  │              │       │
│  │ ✓ مستخدم 1 │  │ ✓ مستخدمين 3│  │ ✓ 10 مستخدمين│       │
│  │ ✓ 500 محادثة│  │ ✓ 2,000 محادثة│  │ ✓ غير محدود  │       │
│  │ ✓ صندوق وارد│  │ ✓ كل شيء في │  │ ✓ كل شيء في  │       │
│  │ ✓ ردود سريعة│  │   Starter   │  │   Growth     │       │
│  │             │  │ ✓ متابعة    │  │ ✓ تقارير    │       │
│  │             │  │   الطلبات  │  │ ✓ ربط التقويم│       │
│  │             │  │ ✓ بث رسائل  │  │ ✓ حالات   │       │
│  │             │  │             │  │   مخصصة      │       │
│  │             │  │             │  │ ✓ دعم أولوية │       │
│  │             │  │             │  │              │       │
│  │ [اختر الخطة]│  │ [اختر الخطة]│  │ [اختر الخطة]│       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│                                                              │
│  كل الخطط تشمل: 7 أيام تجربة مجانية — إلغاء في أي وقت         │
│                                                              │
│  [مؤسسات؟ تواصل معنا للحصول على خطة مخصصة]                   │
```

### Section 8: Testimonials

```
│  ماذا يقول عملاؤنا؟                                          │
│                                                              │
│  ┌─────────────────────────────────────────┐                 │
│  │ "Wasla غير شكل شغلي. كان الواتساب عندي │                 │
│  │  فوضى وكنت بضيع طلبات كتير — دلوقتي كل │                 │
│  │  حاجة منظمة وفريقي شغال بكفاءة."       │                 │
│  │                                         │                 │
│  │  — سارة، صاحبة متجر online             │                 │
│  └─────────────────────────────────────────┘                 │
│                                                              │
│  ┌─────────────────────────────────────────┐                 │
│  │ "كنت بضيع مواعيد المرضى — دلوقتي        │                 │
│  │  Wasla بيذكرهم وبيأكد معاهم تلقائياً."  │                 │
│  │                                         │                 │
│  │  — دكتور محمد، عيادة أسنان             │                 │
│  └─────────────────────────────────────────┘                 │
```

### Section 9: FAQ

```
│  أسئلة شائعة                                                │
│                                                              │
│  ❓ هل أحتاج إلى اشتراك واتساب بزنس؟                        │
│  نعم، تحتاج إلى حساب واتساب بزنس (مجاني). Wasla يتصل به.    │
│                                                              │
│  ❓ هل يمكن لفريقي استخدام نفس الرقم؟                        │
│  نعم! هذا بالضبط ما يفعله Wasla — رقم واتساب واحد لفريق كامل.│
│                                                              │
│  ❓ هل يناسب Wasla نشاطي التجاري؟                           │
│  إذا كنت تستخدم الواتساب مع العملاء، يناسبك. نقطة.          │
│                                                              │
│  ❓ ماذا يحدث بعد انتهاء النسخة التجريبية؟                   │
│  نختار خطة تناسبك. أو تقدر توقف الاشتراك — بياناتك محفوظة.  │
│                                                              │
│  ❓ هل فيه دعم فني بالعربي؟                                  │
│  أكيد. واتساب 24 ساعة. بنرد في أسرع وقت.                     │
```

### Section 10: Final CTA + Footer

```
│                                                              │
│  جرب Wasla مجاناً لمدة 7 أيام                                │
│  وصل بزنسك — و ركز على نموه                                 │
│                                                              │
│  [ابدأ النسخة التجريبية المجانية]                           │
│  بدون فيزا — بدون التزام — إلغاء في أي وقت                  │
│                                                              │
│  ─────────────────────────────────────────────────────────   │
│                                                              │
│  Wasla           المميزات  الأسعار  المدونة  تواصل          │
│                                                              │
│  © 2026 Wasla. جميع الحقوق محفوظة.                          │
│                                                              │
│  [LinkedIn] [Instagram] [TikTok] [Facebook]                 │
│                                                              │
│  English ←→ العربية                                         │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## 3. Mobile Layout

On mobile:
- Navigation collapses to hamburger menu
- Hero stacks vertically (text on top, phone mockup below)
- Features grid becomes single column
- Pricing cards become vertical list
- FAQ becomes accordion (already is)
- CTA is full-width sticky button at bottom

---

## 4. Key Pages (MVP)

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Landing, signup CTA |
| Features | `/features` | Detailed feature breakdown |
| Pricing | `/pricing` | Plans, compare table |
| Blog | `/blog` | SEO content |
| Login | `/login` | Auth |
| App | `/app` | Main dashboard (after auth) |

---

## 5. Copy Guidelines

- **Arabic first, English second.** All UI text in Arabic by default. English toggle available.
- **Use Egyptian slang** sparingly (makes it feel local but not unprofessional).
- **Benefit-oriented headers** — not "Multi-Agent Inbox" but "فريقك يرد من شاشة واحدة"
- **Short sentences.** Egyptian users scan.
- **No jargon.** No "omnichannel", "synergy", "workflow optimization". Just "نظم محادثاتك" (organize your chats).
- **Numbers are concrete.** Not "affordable" but "ابدأ من 299 ج في الشهر"

---

## 6. CTA Hierarchy

| CTA | Placement | Color | Text |
|-----|-----------|-------|------|
| Primary | Hero, end of sections | WhatsApp Green (#00A884) | ابدأ النسخة التجريبية |
| Secondary | Pricing cards | White outline | اختر الخطة |
| Tertiary | Blog, footer | Text link | اعرف أكثر |
| Ghost | Feature sections | No bg, border | شوف الفيديو ▶ |

---

## 7. Conversion Optimization

**Above the fold must include:**
- Value proposition (What is Wasla?)
- Social proof (عندك 50+ تاجر بيستخدمه)
- One clear CTA (ابدأ مجاناً)
- Phone mockup (show the product)

**Trust signals:**
- "مجاناً 7 أيام — بدون فيزا"
- "إلغاء في أي وقت"
- Customer logos
- Testimonials with real names

**Scarcity:**
- Not yet. Focus on value first. Scarcity comes after product-market fit.

---

## 8. Color & Emotion Mapping

| Color | Usage | Emotion |
|-------|-------|---------|
| WhatsApp Green | Primary CTA, brand accent | Trust, familiarity |
| Blue | Navigation, links | Professional, calm |
| Orange | Special offers, highlights | Energy, urgency |
| Dark blue/navy | Headers, footer | Authority, stability |
| Light gray | Backgrounds | Clean, modern |
| White | Cards, content | Space, clarity |

---

## 9. Performance Targets

- Lighthouse score: 90+ on mobile
- Page load: < 2 seconds
- Time to interactive: < 3 seconds
- First meaningful paint: < 1.5 seconds
- Image optimization: WebP format, lazy loading

---

*Version 1.0 — Last updated: May 22, 2026*
