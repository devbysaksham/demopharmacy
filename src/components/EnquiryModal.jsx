import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Phone, Mail, Building, ShieldCheck, MessageSquare } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function EnquiryModal({ isOpen, onClose, initialData = null }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    state: 'Madhya Pradesh',
    enquiryType: 'Pharma Franchise',
    productInterest: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        enquiryType: initialData.enquiryType || prev.enquiryType,
        productInterest: initialData.productName ? `${initialData.productName} (${initialData.strength || ''})` : prev.productInterest,
        message: initialData.productName 
          ? `Hello, I am interested in placing an enquiry for ${initialData.productName} (${initialData.strength || ''}). Please provide minimum order quantity, pricing, and packaging details.`
          : prev.message
      }));
    }
  }, [initialData]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      // Reset after closing if already submitted
      if (submittedData) {
        setSubmittedData(null);
      }
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, submittedData]);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter your full name (at least 2 letters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    const phoneDigits = formData.phone.replace(/\D/g, '');
    if (!phoneDigits || phoneDigits.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (!formData.city.trim()) {
      errs.city = 'Please specify your city / territory.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 8) {
      errs.message = 'Please provide details about your enquiry (minimum 8 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate realistic client-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData, timestamp: new Date().toLocaleTimeString() });
    }, 700);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      city: '',
      state: 'Madhya Pradesh',
      enquiryType: 'Pharma Franchise',
      productInterest: '',
      message: ''
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#0B2545] text-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300">
              <Send className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-snug">
                {submittedData ? 'Enquiry Received' : 'Submit Business Enquiry'}
              </h3>
              <p className="text-xs text-sky-200">
                B.R. Enterprises • PCD Franchise & Third-Party Manufacturing
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-slate-300 hover:text-white transition"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {submittedData ? (
            /* Success Feedback View */
            <div className="text-center py-4 space-y-5 animate-fade-in">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-xl font-extrabold text-slate-900">
                  Thank You, {submittedData.fullName}!
                </h4>
                <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
                  Your enquiry for <span className="font-semibold text-sky-700">{submittedData.enquiryType}</span> has been validated and recorded successfully in this redesign demo.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-left text-xs space-y-2 max-w-lg mx-auto">
                <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                  <span className="text-slate-500">Contact:</span>
                  <span className="font-semibold text-slate-800">{submittedData.phone} | {submittedData.email}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                  <span className="text-slate-500">Location:</span>
                  <span className="font-semibold text-slate-800">{submittedData.city}, {submittedData.state}</span>
                </div>
                {submittedData.productInterest && (
                  <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                    <span className="text-slate-500">Product:</span>
                    <span className="font-semibold text-sky-700">{submittedData.productInterest}</span>
                  </div>
                )}
                <div>
                  <span className="text-slate-500 block mb-0.5">Enquiry Message:</span>
                  <p className="text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200">
                    "{submittedData.message}"
                  </p>
                </div>
              </div>

              {/* Production Note Banner (Required by prompt) */}
              <div className="bg-amber-50 border border-amber-200 text-amber-900 rounded-xl p-3.5 text-xs text-left">
                <div className="flex gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Production Integration Note:</span>
                    <p className="mt-0.5 text-amber-800">
                      As required for this standalone redesign demo, form submissions are validated locally without sending mock data to live email servers. To connect this form in production, attach an API endpoint such as EmailJS, SendGrid, Resend, or a Node/Express backend at <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">POST /api/enquiries</code>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Connect Options */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${companyInfo.phones.thirdPartyRaw}?text=${encodeURIComponent(
                    `Hello B.R. Enterprises, I am ${submittedData.fullName} from ${submittedData.city}. I submitted an enquiry for ${submittedData.enquiryType}: "${submittedData.message}"`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Direct on WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Form View */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Dr. Rajesh Sharma"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                      errors.fullName ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-sky-500'
                    } focus:outline-none transition`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.fullName}</p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Number (10 Digits) <span className="text-rose-500">*</span>
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
                  {errors.phone && (
                    <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. contact@pharmabiz.com"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                      errors.email ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-sky-500'
                    } focus:outline-none transition`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.email}</p>
                  )}
                </div>

                {/* City / Territory */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    City / Target Territory <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Indore, Bhopal, Raipur"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                      errors.city ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-sky-500'
                    } focus:outline-none transition`}
                  />
                  {errors.city && (
                    <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.city}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Enquiry Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Enquiry Category <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-white focus:border-sky-500 focus:outline-none transition font-medium text-slate-800"
                  >
                    <option value="Pharma Franchise">PCD Pharma Franchise (Monopoly Basis)</option>
                    <option value="Third Party Manufacturing">Third Party Contract Manufacturing</option>
                    <option value="Product Price & Availability">Product Pricing & Catalog Request</option>
                    <option value="Institutional Supply">Institutional / Hospital Supply</option>
                    <option value="Other Business Enquiry">General Business Enquiry</option>
                  </select>
                </div>

                {/* Product of Interest */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Specific Medicine / Category (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    placeholder="e.g. Paracetamol 500mg, Ointments"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-sky-500 focus:outline-none transition"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Enquiry Message / Business Requirements <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your business background, target district, expected order volume, or any specific formulation requirements..."
                  className={`w-full px-3.5 py-2.5 text-sm rounded-xl border ${
                    errors.message ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200 focus:border-sky-500'
                  } focus:outline-none transition`}
                />
                {errors.message && (
                  <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.message}</p>
                )}
              </div>

              {/* Direct verified phone notice */}
              <div className="p-3 bg-sky-50/60 rounded-xl border border-sky-100 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1.5 font-medium">
                  <Phone className="w-3.5 h-3.5 text-sky-600" />
                  Urgent Requirement? Call Desk:
                </span>
                <span className="font-bold text-[#0B2545]">
                  {companyInfo.phones.thirdParty} / {companyInfo.phones.franchise}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 rounded-xl transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-[#0B2545] hover:bg-[#0284C7] rounded-xl shadow-md hover:shadow-lg transition duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Validating...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Enquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
