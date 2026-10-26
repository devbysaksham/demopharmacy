# B.R. Enterprises - Pharmaceutical Company Website Redesign Demo

A complete, modern, and responsive pharmaceutical company website redesign demo built for **B.R. Enterprises**, based in Indore, Madhya Pradesh. Designed with a premium corporate pharmaceutical aesthetic matching the provided visual reference.

---

## 🚀 Live Local Development

The development server is running locally:
- **Local URL**: [http://localhost:5173/](http://localhost:5173/)
- **Command to Run**: `npm run dev`
- **Command to Build**: `npm run build`

---

## 🛠 Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (Tailwind Vite integration)
- **React Router v7** (Multi-page client-side navigation with auto-scroll)
- **Lucide React** (Modern, clean corporate icons)
- **Google Fonts** (*Plus Jakarta Sans* for clean clinical typography)

---

## 🎨 Design Direction & Match with Visual Reference

- **Color Palette**:
  - Deep Navy Blue (`#0B2545`) for corporate headers, primary buttons, and footer.
  - Clinical Sky / Teal Blue (`#0284C7`, `#0EA5E9`) for accents, badges, category themes, and active states.
  - Soft Mint Green (`#059669`, `#10B981`) for the Pharma Franchise callout.
  - Clean light-blue background tinting (`#F0F7FF`, `#F8FAFC`) with generous whitespace.
- **Card Styling**: Rounded cards (`rounded-2xl`, `rounded-3xl`), soft ambient shadows, and micro-interaction hover lift.
- **Mobile-First Responsive Layout**: Smooth transition from multi-column desktop grids to tablet and mobile views, featuring a sliding hamburger navigation drawer.

---

## 📄 Pages and Sections Implemented

1. **Header & Navbar**:
   - Vector B.R. Enterprises logo monogram and tagline.
   - Navigation links: *Home*, *About Us*, *Products* (with hover/click dropdown for all categories), *Franchise*, *Third Party Manufacturing*, and *Contact Us*.
   - Interactive search button (opens live search modal).
   - Direct "Enquiry Now" CTA pill button.
   - Mobile hamburger toggle with sliding responsive navigation menu.

2. **Hero Banner**:
   - Welcome badge: `WELCOME TO B.R. ENTERPRISES`.
   - Headline: *Trusted Pharma Partner for a Healthier Future*.
   - Subtitle detailing Indore presence and healthcare commitment.
   - Primary and secondary CTAs (*Explore Our Products* & *About Us*).
   - High-resolution pharmaceutical composition with amber glass bottle and spilled white & blue capsules.
   - Handcrafted floating badge: *Better Health Together*.

3. **Product Categories**:
   - 4 Category cards with custom imagery, thematic gradients, product count, and quick-access arrow buttons:
     - **Tablets** (Analgesics, antibiotics, gastrointestinal)
     - **Capsules** (SR pellets, anti-ulcerants, antifungals)
     - **Creams & Ointments** (Topical steroids, dermacare, anti-fungals)
     - **Syrups & Suspensions** (Pediatric cough syrups, suspensions, multivitamins)

4. **Trust Badges Strip**:
   - 5-column trust icons: *High Quality Products*, *WHO-GMP Compliant*, *Wide Product Range*, *Timely Delivery*, and *Customer Support*.

5. **Dual Promotional Banners**:
   - **Pharma Franchise Enquiry**: Mint-teal accent card highlighting monopoly rights, marketing support, and direct "Enquire Now" trigger.
   - **Third Party Manufacturing**: Crisp navy/sky card highlighting contract manufacturing capabilities, GMP compliance, and cleanroom background imagery.

6. **Featured Products**:
   - 5 Verified product cards with dosage, category badge, and detail triggers matching the reference:
     1. *Paracetamol Tablets* (500 mg / 650 mg - Tablets)
     2. *Pantoprazole Capsules* (40 mg - Capsules)
     3. *Clobetasol Cream* (0.05% - Creams)
     4. *Dextromethorphan Syrup* (15 mg/5 ml - Syrups)
     5. *Multivitamin Tablets* (Daily Formula - Tablets)
   - Interactive quick-view modal (`ProductModal`) showing formulation, active salts, indications, packaging type, and direct inquiry CTA.

7. **About B.R. Enterprises Section**:
   - Indore facility corporate headquarters photo.
   - Company background, mission, and quality commitment.
   - 3 Feature pillars: *Quality Products for Better Health*, *Trusted by Healthcare Professionals*, and *Based in Indore Serving Across India*.

8. **Corporate Footer**:
   - Verified B.R. Enterprises details:
     - **Email**: `brenterprises6773@gmail.com`
     - **Third Party Enquiry**: `+91 9340281001`
     - **Franchise Enquiry**: `+91 9131485910`
     - **Registered Address**: `B-25/3, First Floor, Vidhya Palace, Chhota Bangarda, Indore, Madhya Pradesh - 452005`
   - Navigation links, product categories, and social links (Facebook, Instagram, LinkedIn).
   - Copyright © 2025 B.R. Enterprises.

9. **Dedicated Subpages**:
   - **`/products`**: Full catalog with instant keyword search, category filter tabs, sorting, and modal view.
   - **`/about`**: Corporate overview, facility information, mission, vision, and quality policy.
   - **`/franchise`**: Dedicated PCD franchise details, monopoly terms, promotional inputs, and application form.
   - **`/manufacturing`**: Contract manufacturing workflows, 6-phase process, dosage specs, and RFQ form.
   - **`/contact`**: Detailed contact desk, interactive enquiry form with validation, and embedded Indore Google Map.

10. **Interactive Floating WhatsApp Widget**:
    - Pre-configured click-to-chat targeting `+91 9340281001` with greeting and pre-filled inquiry text.

---

## 🔒 Form Submissions & Production Integration Guide

In compliance with the project guidelines, the enquiry and RFQ forms perform full client-side validation (field requirements, email patterns, 10-digit phone checks) without dispatching unverified network requests to real email servers.

### Steps to Enable Real Form Submissions in Production:

1. **Option A: Email Service (Serverless / Frontend API)**
   - Sign up for a service such as [EmailJS](https://www.emailjs.com/) or [Resend](https://resend.com/).
   - Add environment variables:
     ```env
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```
   - In `src/components/EnquiryModal.jsx`, replace the simulated `setTimeout` in `handleSubmit` with the `emailjs.send()` call.

2. **Option B: Custom Node / Express / Next.js API Backend**
   - Create an endpoint `POST /api/enquiries` using `nodemailer`:
     ```javascript
     import nodemailer from 'nodemailer';
     
     const transporter = nodemailer.createTransport({
       host: process.env.SMTP_HOST,
       port: 587,
       auth: {
         user: process.env.SMTP_USER,
         pass: process.env.SMTP_PASS,
       },
     });
     ```
   - Forward the payload to `brenterprises6773@gmail.com` and store a copy in your CRM or PostgreSQL/MongoDB database.

3. **Option C: WhatsApp Cloud API / Webhook**
   - Connect submitted inquiries directly to the WhatsApp Business API to alert sales representatives on `+91 9131485910` or `+91 9340281001` in real time.
