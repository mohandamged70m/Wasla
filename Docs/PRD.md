# Wasla — Product Requirements Document (PRD)

## 1. Product Overview

**Product Name:** Wasla (وصلة) — "Connection" in Arabic
**Tagline:** Wasel biznesak bel WhatsApp (وصل بزنسك بالواتساب)
**Type:** SaaS — WhatsApp Operations Hub for Egyptian SMEs
**Target Market:** All SMEs taking customer conversations via WhatsApp (E-commerce, Clinics, Service Businesses)
**Initial Strategy:** Horizontal platform — lock into highest-traction vertical post-MVP based on real usage data

## 2. Problem Statement

Egyptian SMEs across all sectors run their customer operations almost entirely through WhatsApp. Yet they have no tools beyond the WhatsApp Business app itself:

- Multiple staff cannot share one WhatsApp number without sharing a phone
- Orders, appointments, and quotes get lost in chat threads
- No follow-up reminders exist — opportunities slip through
- No team accountability — who replied to which customer?
- No analytics — owners don't know response times, conversion rates, or team performance
- Customers expect instant replies but businesses can't keep up

WhatsApp Business app is designed for one-person shops. The moment you hire staff, you outgrow it.

## 3. Vision

Become the default operations layer for every Egyptian SME that uses WhatsApp to sell, serve, and support customers.

## 4. Target Users (Personas)

### Persona 1: Dina — E-commerce Owner
- **Age:** 28 | **Location:** Cairo | **Business:** Women's fashion on Instagram
- **Daily volume:** 80-150 WhatsApp messages
- **Pain:** Loses orders in chat, delivery mix-ups, no team visibility
- **Needs:** Order capture from chat, status tracking, team inbox
- **Willing to pay:** EGP 300-800/mo

### Persona 2: Dr. Karim — Clinic Owner
- **Age:** 42 | **Location:** Alexandria | **Business:** Private dental clinic (3 staff)
- **Daily volume:** 40-60 patient messages
- **Pain:** Double-booking, missed reminders, staff using personal phones
- **Needs:** Appointment booking via chat, auto-reminders, multi-staff inbox
- **Willing to pay:** EGP 500-1,200/mo

### Persona 3: Ahmed — Service Business Owner
- **Age:** 35 | **Location:** Giza | **Business:** Home maintenance services (5 technicians)
- **Daily volume:** 30-50 customer messages
- **Pain:** Quotes sent ad-hoc, no scheduling system, customers don't show up
- **Needs:** Quote templates from chat, schedule management, service reminders
- **Willing to pay:** EGP 200-500/mo

## 5. Feature Matrix

### MVP (Week 1 — Must Have)

| Feature | Description | Priority |
|---------|-------------|----------|
| WhatsApp API Connection | Connect business WhatsApp number via QR code or phone link | P0 |
| Multi-Agent Shared Inbox | Team of 2-10 can receive/reply from same number | P0 |
| Contact Management | Auto-save contacts, view chat history, add notes/tags | P0 |
| Quick Replies (Templates) | Pre-saved message templates for common replies | P0 |
| Order Capture | Mark a chat as "Order" with status tracking | P0 |
| Appointment Capture | Mark a chat as "Appointment" with date/time tracking | P0 |
| Quote Capture | Mark a chat as "Quote" with amount tracking | P0 |
| Status Pipeline | Custom statuses per type (Order: New→Confirmed→Shipped→Delivered) | P0 |
| Agent Assignment | Assign chats to specific team members | P0 |
| Basic Dashboard | Total conversations, response time, orders/appointments today | P1 |
| Broadcast (Limited) | Send message to all opted-in contacts | P1 |

### V2 (Week 2-3 — Should Have)

| Feature | Description |
|---------|-------------|
| Automated Reminders | Auto-send appointment reminders 24h before |
| Delivery Integration | Notify delivery partners via WhatsApp |
| Payment Links | Send Paymob/Stripe links in chat |
| Chat Tagging | Custom labels (VIP, urgent, needs follow-up) |
| Team Performance Reports | Per-agent metrics: response time, resolved chats |
| Calendar Sync | Google Calendar two-way sync for appointments |
| Business Hours Settings | Auto-reply outside working hours |

### V3 (Month 2 — Nice to Have)

- AI chatbot for simple inquiries
- Click-to-WhatsApp ad integration
- WhatsApp catalog sync
- Multi-language (Arabic/English auto-detect)
- Mobile app

## 6. User Flows

### Flow 1: Customer sends order request
```
Customer texts → Wasla creates new contact (if new)
  → Auto-reply sent: "شكراً لتواصلك! تم استلام طلبك وسيتم التأكيد قريباً"
  → Conversation appears in shared inbox
  → Agent assigns to team member
  → Agent marks as "Order" → fills details (product, quantity, address)
  → Auto-reply: "تم تأكيد طلب #124 🎉"
  → Order moves through pipeline: Confirmed → Shipped → Delivered
```

### Flow 2: Patient books appointment
```
Patient messages clinic → Agent opens chat
  → Agent asks for preferred date/time
  → Agent creates Appointment record
  → Google Calendar event created
  → 24h before: auto-reminder sent to patient
  → 1h before: second reminder
  → Patient can reply "confirm" or "cancel"
```

### Flow 3: Service quote request
```
Customer: "كم تكلفة تركيب مكيف؟"
  → Agent opens Quote template → fills details
  → Quote sent as formatted message via WhatsApp
  → Customer accepts → Agent converts to Appointment
  → Technician assigned → notified via WhatsApp
  → Service reminder sent to customer
```

## 7. Non-Functional Requirements

- **Platform:** Web app (mobile-responsive) — PWA support
- **Tech Stack:** Node.js/Express + TypeScript backend, React + Tailwind frontend, PostgreSQL
- **WhatsApp Provider:** 360dialog / MessageBird / Twilio (Cloud API)
- **Auth:** Phone OTP + email/password
- **Security:** End-to-end encryption (WhatsApp native), encrypted at rest
- **Uptime:** 99.5% SLA
- **Performance:** Message delivery < 2 seconds, dashboard load < 3 seconds
- **Language:** Arabic-first UI + English toggle

## 8. Pricing Model (EGP)

| Plan | Price/mo | Users | Conversations | Features |
|------|----------|-------|---------------|----------|
| Starter | 299 EGP | 1 | 500 | Shared inbox, quick replies, basic dashboard |
| Growth | 599 EGP | 3 | 2,000 | All Starter + order/apt/quote tracking, broadcasts |
| Business | 999 EGP | 10 | Unlimited | All Growth + calendar sync, reports, custom statuses |
| Enterprise | Custom | Unlimited | Unlimited | All + dedicated support, API access, white-label |

**Free Trial:** 7 days full-featured, no credit card.

## 9. Success Metrics (First 90 Days)

| Metric | Target |
|--------|--------|
| Active users (daily) | 50 |
| Paid customers | 45 |
| MRR | $1,000+ (~EGP 31,000) |
| Avg response time | < 5 min |
| Customer retention (month 1→2) | 70%+ |
| NPS | 40+ |

## 10. Risks & Mitigation

| Risk | Mitigation |
|------|------------|
| WhatsApp API approval delays | Pre-register with BSP; have manual fallback (copy number to click) |
| Low willingness to pay | Free 7-day trial; show immediate value (time saved) |
| Churn after free trial | In-app onboarding that drives habit; email/SMS reminders before trial ends |
| Competition (Kommo, Gallabox entering Egypt) | Local-first (Arabic, EGP pricing, Egyptian support); faster execution |
| Solo founder burnout | Ruthless prioritization (MVP only); automate everything possible |
| Meta policy changes | Multiple BSP providers; own the customer relationship, not just API layer |

## 11. Competitive Landscape

| Competitor | Strength | Weakness | Our Advantage |
|------------|----------|----------|---------------|
| WhatsApp Business App | Free, simple | No team features, no CRM | Multi-agent, CRM, automation |
| Kommo | Good CRM, WhatsApp integration | Expensive ($12/user/mo), not Egypt-focused | Local pricing, Arabic-first |
| Gallabox | Great for India market | Not Egypt-optimized | Local support, EGP pricing |
| ManyContacts | Clinic-focused | Niche, EU pricing | Horizontal, cheaper |
| eGrow | E-commerce focused | Expensive ($499/mo) | Affordable, flexible |

---

*Version 1.0 — Last updated: May 22, 2026*
