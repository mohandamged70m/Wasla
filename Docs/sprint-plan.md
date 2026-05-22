# Wasla — 7-Day MVP Sprint Plan

**Goal:** A working WhatsApp Operations Hub that an SME owner can sign up for, connect their WhatsApp number, and immediately use with their team.

**Constraint:** Solo founder — must be ruthless about scope.

---

## Sprint Rules

- **Daily cut-off:** 8 PM. Ship or cut.
- **If something takes > 4 hours and isn't essential → defer to V2.**
- **No custom UI components for MVP** — use Tailwind UI or pre-built libraries.
- **No mobile app** — web-only with responsive design.
- **No AI/chatbot** — manual replies only.
- **No analytics beyond essential KPIs.**

---

## Phase 1: Foundation (Day 1–2)

### Day 1 — Project Setup & Auth

| Time | Task | Details |
|------|------|---------|
| 9-11 AM | Init project | Next.js (or React+Vite) + Node.js/Express + TypeScript + PostgreSQL. Set up monorepo structure. |
| 11-1 PM | Database schema | Tables: users, teams, team_members, contacts, conversations, messages, orders, appointments, quotes |
| 1-2 PM | Lunch | — |
| 2-4 PM | Auth system | Phone OTP + email/password. JWT-based session. Simple onboarding flow (name → phone → email → create team). |
| 4-6 PM | Team management | Create team, invite members via link (no email invite yet — just shareable link). |
| 6-8 PM | UI shell | Layout: sidebar (teams, conversations, contacts), top bar (user, search), main area. Arabic RTL support. |

### Day 2 — WhatsApp API Connection

| Time | Task | Details |
|------|------|---------|
| 9-11 AM | Register with BSP | Sign up with 360dialog or MessageBird. Get API credentials. Set up webhook endpoint. |
| 11-1 PM | WhatsApp number pairing | QR code generation. Link business WhatsApp number. Store WABA ID. |
| 1-2 PM | Lunch | — |
| 2-4 PM | Send/receive messages | Webhook → save incoming messages to DB. Send message API → post to WhatsApp. |
| 4-6 PM | Real-time updates | WebSocket connection so new messages appear instantly in the inbox without refresh. |
| 6-8 PM | Basic threading | Group messages by conversation (contact). Sort by most recent. Show unread badge. |

**Checkpoint Day 2:** Can sign up, connect WhatsApp number, receive and reply to a message.

---

## Phase 2: Team Inbox (Day 3–4)

### Day 3 — Shared Inbox Core

| Time | Task | Details |
|------|------|---------|
| 9-11 AM | Conversation list | Sidebar showing all conversations. Contact name, last message preview, time, unread count. |
| 11-1 PM | Chat view | Message history with timestamps. Send message box. Emoji + attachment support. |
| 1-2 PM | Lunch | — |
| 2-4 PM | Agent assignment | Dropdown in each conversation. Assign/unassign. Show assigned agent avatar in list. |
| 4-6 PM | Quick replies | Create/edit/delete template messages. Insert from dropdown in chat. |
| 6-8 PM | Message search | Search across conversations by keyword. Filter by assigned agent. |

### Day 4 — Contact Management

| Time | Task | Details |
|------|------|---------|
| 9-11 AM | Contact profile | Slide-out panel showing contact info, conversation history, notes, tags. |
| 11-1 PM | Tags/labels | Create custom tags (VIP, follow-up, return customer). Apply to contacts. Filter by tag. |
| 1-2 PM | Lunch | — |
| 2-4 PM | Notes | Add internal notes per contact. Not visible to customer. |
| 4-6 PM | Block/archive | Archive conversations. Block contacts (no more messages reachable). |
| 6-8 PM | Polish | Fix bugs, improve RTL rendering, handle media message display. |

**Checkpoint Day 4:** Team of 3 can use the inbox together. Agents assigned. Quick replies working. Contact profiles functional.

---

## Phase 3: Business Objects (Day 5–6)

### Day 5 — Orders & Quotes

| Time | Task | Details |
|------|------|---------|
| 9-11 AM | Order creation | From conversation, click "Create Order". Fields: customer, items, total, status, notes. |
| 11-1 PM | Order pipeline | Kanban view: New → Confirmed → Preparing → Shipped → Delivered. Drag to update. |
| 1-2 PM | Lunch | — |
| 2-4 PM | Order messages | Auto-send confirmation to customer when order is created. Status update messages. |
| 4-6 PM | Quote creation | From conversation, click "Create Quote". Fields: customer, items/services, total, valid until, notes. |
| 6-8 PM | Quote pipeline | Draft → Sent → Accepted → Rejected → Converted (to order or appointment). |

### Day 6 — Appointments & Dashboard

| Time | Task | Details |
|------|------|---------|
| 9-11 AM | Appointment creation | From conversation, click "Create Appointment". Fields: patient, date/time, service, notes. |
| 11-1 PM | Calendar view | Daily/weekly/monthly view of appointments. Click to see details. |
| 1-2 PM | Lunch | — |
| 2-4 PM | Reminders | Basic: send reminder 24h before appointment. Manual toggle. |
| 4-6 PM | Dashboard | Cards: conversations today, orders today, appointments today, pending quotes. Simple chart: conversations over last 7 days. |
| 6-8 PM | Settings page | Business hours, default statuses, notification preferences, team management. |

**Checkpoint Day 6:** Full workflow: receive message → create order/appointment/quote → manage pipeline → send updates → dashboard overview.

---

## Phase 4: Launch Prep (Day 7)

### Day 7 — Polish, Pricing & Launch

| Time | Task | Details |
|------|------|---------|
| 9-11 AM | Stripe/Paymob integration | Subscription payment setup. Free trial 7 days. Auto-billing. Downgrade handling. |
| 11-1 PM | Onboarding flow | Connect WhatsApp → Create team → Invite members → First conversation → Create first order. Guided wizard. |
| 1-2 PM | Lunch | — |
| 2-4 PM | Landing page | Hero section, features, pricing, FAQ, CTA. Self-hosted on Vercel or Netlify. |
| 4-6 PM | Bug bash | Test every flow. Fix critical bugs. Test on mobile browser. |
| 6-8 PM | Launch | Deploy to production. Post first LinkedIn content. DM first 10 potential customers. |

**Checkpoint Day 7:** Live product. Paying customers can onboard. Public landing page.

---

## Post-MVP (Days 8–14)

| Priority | Feature | Why |
|----------|---------|-----|
| 1 | Google Calendar sync | Clinics need it; unlocks clinic vertical |
| 2 | Broadcast messages | Marketing use-case; increases stickiness |
| 3 | Team analytics | Owner needs to see who's performing |
| 4 | AI auto-reply (basic) | Reduces workload; competitive necessity |

---

## Daily Ritual Checklist

- [ ] Write 1 social media post (LinkedIn or Instagram)
- [ ] DM 3-5 potential customers on Instagram/Facebook
- [ ] Fix the top 3 bugs found that day
- [ ] Track: signups, conversations handled, orders created
- [ ] End of day: push to GitHub, note what to do tomorrow

---

*Version 1.0 — Last updated: May 22, 2026*
