import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Building2, 
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Business Enquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!phoneDigits || phoneDigits.length < 10) {
      errs.phone = 'Please provide a valid 10-digit mobile number.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 8) {
      errs.message = 'Please provide a message with at least 8 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <div className="space-y-16 lg:space-y-24 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-[#0B2545] via-[#113460] to-[#0284C7] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-2xl space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
            <Phone className="w-3.5 h-3.5" />
            <span>Connect with B.R. Enterprises</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact Our Healthcare Team
          </h1>
          <p className="text-sky-100 text-sm sm:text-base leading-relaxed">
            Have questions regarding PCD franchise availability, third-party batch manufacturing, or product pricing? We are based in Indore and ready to assist you.
          </p>
        </div>

        {/* Decorative shape */}
        <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none p-8">
          <Mail className="w-80 h-80 text-white" />
        </div>
      </section>

      {/* 2. Contact Details & Interactive Form */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Verified Contact Information */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-extrabold text-[#0284C7] uppercase tracking-widest block">
              GET IN TOUCH
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
              Corporate Office & Helpdesk
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Reach our authorized department representatives directly via phone, email, or visit our Indore headquarters.
            </p>
          </div>

          <div className="space-y-4">
            {/* Third Party Phone */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs hover:border-sky-300 transition flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center flex-shrink-0 border border-sky-100">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Third Party Manufacturing Desk
                </span>
                <a
                  href={`tel:${companyInfo.phones.thirdParty}`}
                  className="text-base font-bold text-[#0B2545] hover:text-sky-600 transition block mt-0.5"
                >
                  {companyInfo.phones.thirdParty}
                </a>
                <span className="text-xs text-slate-500">Contract inquiries & batch pricing</span>
              </div>
            </div>

            {/* Franchise Phone */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs hover:border-emerald-300 transition flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Pharma Franchise Desk
                </span>
                <a
                  href={`tel:${companyInfo.phones.franchise}`}
                  className="text-base font-bold text-[#0B2545] hover:text-emerald-600 transition block mt-0.5"
                >
                  {companyInfo.phones.franchise}
                </a>
                <span className="text-xs text-slate-500">Monopoly territory confirmation</span>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs hover:border-sky-300 transition flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center flex-shrink-0 border border-sky-100">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Official Email
                </span>
                <a
                  href={`mailto:${companyInfo.emails.primary}`}
                  className="text-base font-bold text-[#0B2545] hover:text-sky-600 transition block mt-0.5 break-all"
                >
                  {companyInfo.emails.primary}
                </a>
                <span className="text-xs text-slate-500">Formal inquiries and proposals</span>
              </div>
            </div>

            {/* Office Address */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs hover:border-sky-300 transition flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center flex-shrink-0 border border-indigo-100">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Head Office Location
                </span>
                <p className="text-sm font-semibold text-slate-800 mt-0.5 leading-relaxed">
                  {companyInfo.address}
                </p>
                <span className="text-xs text-slate-500">Indore, Madhya Pradesh - 452005</span>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 flex items-center gap-3 text-xs text-slate-600">
              <Clock className="w-4 h-4 text-sky-600 flex-shrink-0" />
              <div>
                <span className="font-semibold text-slate-800">Operational Hours: </span>
                <span>Monday – Saturday, 10:00 AM – 7:00 PM IST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          {isSuccess ? (
            <div className="text-center py-10 space-y-5 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <span className="font-bold text-slate-800">{formData.name}</span>. Your enquiry has been received and validated in this redesign demo.
              </p>

              {/* Integration note banner */}
              <div className="bg-amber-50 border border-amber-200 text-amber-900 rounded-xl p-4 text-xs text-left max-w-lg mx-auto">
                <div className="flex gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Production Setup Note:</span>
                    <p className="mt-0.5 text-amber-800">
                      This redesign demo validates all inputs on the client side without dispatching emails. In production, configure an SMTP server (e.g. Resend, SendGrid, or AWS SES) or connect this form to your backend API.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${companyInfo.phones.thirdPartyRaw}?text=${encodeURIComponent(
                    `Hello B.R. Enterprises, I am ${formData.name}. Subject: ${formData.subject}. Message: "${formData.message}"`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect on WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      subject: 'General Business Enquiry',
                      message: ''
                    });
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-[#0B2545]">Send Us an Online Message</h3>
                <p className="text-xs text-slate-500 mt-1">Please fill in the required fields and our team will get in touch.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Rajesh Sharma"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                      errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-sky-500'
                    } focus:outline-none transition`}
                  />
                  {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 9826012345"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                      errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-sky-500'
                    } focus:outline-none transition`}
                  />
                  {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. contact@business.com"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                      errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-sky-500'
                    } focus:outline-none transition`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Subject / Department
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none"
                  >
                    <option value="General Business Enquiry">General Business Enquiry</option>
                    <option value="PCD Pharma Franchise">PCD Pharma Franchise Desk</option>
                    <option value="Third Party Manufacturing">Third Party Contract Manufacturing</option>
                    <option value="Product Pricing Sheet">Product Pricing Sheet Request</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Detail your requirements, target territory, or question..."
                  className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                    errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-sky-500'
                  } focus:outline-none transition`}
                />
                {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-[#0B2545] hover:bg-[#0284C7] text-white font-bold text-sm shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Submitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 3. Interactive Google Map Embed of Indore Location */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold text-[#0B2545]">Location Map</h3>
            <p className="text-xs text-slate-500">B-25/3 Vidhya Palace, Chhota Bangarda, Indore (M.P), India</p>
          </div>
          <a
            href="https://maps.google.com/?q=B-25/3+Vidhya+Palace,+Chhota+Bangarda,+Indore+Madhya+Pradesh+452005"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-sky-600 hover:underline flex items-center gap-1"
          >
            <span>Open in Google Maps &rarr;</span>
          </a>
        </div>

        <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
          <iframe
            src="https://maps.google.com/maps?q=B-25%2F3%20Vidhya%20Palace%2C%20Indore%20%28M.P%29%20India&t=m&z=13&output=embed&iwloc=near"
            title="B.R. Enterprises Location, Indore"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
