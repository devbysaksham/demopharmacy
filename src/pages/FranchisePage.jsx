import React, { useState } from 'react';
import { 
  Handshake, 
  MapPin, 
  Gift, 
  TrendingUp, 
  Truck, 
  ShieldCheck, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Send,
  Sparkles,
  FileText
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function FranchisePage({ onOpenEnquiry }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    state: '',
    district: '',
    experience: '1-3 Years',
    investment: '₹50,000 - ₹1,00,000',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.district.trim()) {
      setErrorMsg('Please fill in Name, Phone, and your Target District.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 lg:space-y-24 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-emerald-800 via-teal-800 to-[#0B2545] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-xs font-bold uppercase tracking-wider backdrop-blur-xs border border-emerald-400/30">
            <Handshake className="w-3.5 h-3.5" />
            <span>PCD Pharma Franchise Opportunities</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Exclusive District Monopoly PCD Pharma Franchise in India
          </h1>

          <p className="text-emerald-100 text-base sm:text-lg leading-relaxed">
            Partner with B.R. Enterprises to expand your pharmaceutical business. Enjoy genuine monopoly rights, comprehensive promotional tools, and a reliable portfolio of 250+ WHO-GMP compliant medicines.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${companyInfo.phones.franchise}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition"
            >
              <Phone className="w-4 h-4" />
              <span>Call Franchise Desk: {companyInfo.phones.franchise}</span>
            </a>
          </div>
        </div>

        {/* Decorative background shape */}
        <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none p-8">
          <Handshake className="w-96 h-96 text-white" />
        </div>
      </section>

      {/* 2. Key Benefits of Partnering */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold text-[#0284C7] uppercase tracking-widest block">
            WHY CHOOSE B.R. ENTERPRISES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545]">
            Comprehensive Support for Franchise Partners
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We provide everything you need to start, grow, and dominate pharmaceutical distribution in your designated territory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-md transition space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0B2545]">District Monopoly Rights</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Strict territory protection ensuring zero internal competition in your allotted district, city, or operational zone.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-md transition space-y-3">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center border border-sky-100">
              <Gift className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0B2545]">Free Promotional Inputs</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Complete marketing kit including Visual Aids, Doctor Catch Covers, MR Bags, Reminder Cards, and Product Glossaries.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-md transition space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-100">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0B2545]">High Margin Potential</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Attractive net rates that yield handsome profit margins, enabling sustainable financial expansion for distributors.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-md transition space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-100">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0B2545]">Fast 48-Hour Dispatch</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Centrally situated in Indore with nationwide transport connectivity ensuring swift order fulfillment and zero stockouts.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-md transition space-y-3">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0B2545]">WHO-GMP Tested Quality</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Premium blister and Alu-Alu packaging with tamper-evident foils, clear batch coding, and shelf-life stability.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs hover:shadow-md transition space-y-3">
            <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center border border-rose-100">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0B2545]">Diverse Formulation Range</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Tablets, capsules, dermatological creams, antibiotic lines, analgesics, pediatric syrups, and multivitamin tonics.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Interactive Franchise Application Form */}
      <section className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-extrabold text-emerald-700 uppercase tracking-widest block">
              APPLY FOR TERRITORY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
              Check Franchise Availability in Your District
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Submit your target district and details below. Our franchise coordinator will verify district availability and share product pricing sheets within 24 hours.
            </p>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-3 text-xs">
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Direct Franchise Line:</span>
                <a href={`tel:${companyInfo.phones.franchise}`} className="text-emerald-700 font-bold hover:underline">
                  {companyInfo.phones.franchise}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <Mail className="w-4 h-4 text-sky-600" />
                <span>Official Enquiry:</span>
                <a href={`mailto:${companyInfo.emails.primary}`} className="text-sky-700 font-bold hover:underline">
                  {companyInfo.emails.primary}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-8 space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Application Received!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for your interest in partnering with B.R. Enterprises for <span className="font-semibold text-emerald-700">{formData.district}, {formData.state}</span>.
                </p>
                <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-500 border border-slate-200 max-w-sm mx-auto">
                  <span>Demo notice: Form validated successfully. For direct contact, tap the WhatsApp button or call {companyInfo.phones.franchise}.</span>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-sm"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Applicant Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Mr. Amit Verma"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9826012345"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Target State *
                    </label>
                    <input
                      type="text"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="e.g. Madhya Pradesh, Rajasthan"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Target District / City *
                    </label>
                    <input
                      type="text"
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      placeholder="e.g. Ujjain, Jabalpur, Gwalior"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Pharma Experience
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none"
                    >
                      <option value="New to Pharma">New Entrepreneur / Startup</option>
                      <option value="1-3 Years">1 - 3 Years</option>
                      <option value="3-5 Years">3 - 5 Years</option>
                      <option value="5+ Years">5+ Years Experienced</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Initial Investment Capacity
                    </label>
                    <select
                      value={formData.investment}
                      onChange={(e) => setFormData({ ...formData, investment: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none"
                    >
                      <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                      <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                      <option value="₹1,00,000 - ₹2,50,000">₹1,00,000 - ₹2,50,000</option>
                      <option value="₹2,50,000+">₹2,50,000 and above</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Message / Additional Notes
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about existing doctor relationships or target therapeutic segments..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Franchise Application</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
