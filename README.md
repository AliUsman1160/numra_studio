# NUMRA Makeup Studio & Salon — website

Frontend-only Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.
No backend, API routes, database or auth. Forms validate and show a demo confirmation only.

    npm install
    npm run dev      # http://localhost:3000
    npm run lint
    npm run build && npm start

## Editing content (all in /data)
- `site-config.ts` — phones, email, WhatsApp number, opening hours, social links (empty = shown as "to be confirmed"; WhatsApp buttons appear once a number is set)
- `branches.ts`, `services.ts`, `courses.ts`, `faqs.ts`, `testimonials.ts`, `gallery.ts`
- `images.ts` — every image reference. Photos are **illustrative Unsplash stock** in `public/images/stock/`; swap in real NUMRA work by changing paths here.
- Prices: leave `price: null` to show "Contact us for details". Empty optional course fields are hidden.
- Testimonials are placeholders (`placeholder: true`) — replace with verified feedback.
