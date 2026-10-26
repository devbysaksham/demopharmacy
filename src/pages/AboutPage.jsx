import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight,
  CheckCircle2,
  Users2,
  Microscope,
  Sparkles
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function AboutPage({ onOpenEnquiry }) {
  return (
    <div className="space-y-16 lg:space-y-24 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. Header Hero */}
      <section className="bg-gradient-to-r from-[#0B2545] via-[#10386b] to-[#0284C7] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
            <Building2 className="w-3.5 h-3.5" />
            <span>About B.R. Enterprises</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Committed to Quality Healthcare from Indore to Across India
          </h1>

          <p className="text-sky-100 text-base sm:text-lg leading-relaxed">
            A progressive, quality-conscious pharmaceutical enterprise dedicated to discovering, formulating, and delivering medicines for human health with unwavering ethics and uncompromising safety standards.
          </p>
        </div>

        {/* Decorative background shape */}
        <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none p-8">
          <Building2 className="w-96 h-96 text-white" />
        </div>
      </section>

      {/* 2. Company Story & Facility Highlights */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-5">
          <span className="text-xs font-extrabold text-[#0284C7] uppercase tracking-widest block">
            OUR STORY & BACKGROUND
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] leading-tight">
            Building Healthcare Trust Since Inception
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Headquartered at <strong className="text-slate-900">Vidhya Palace, Chhota Bangarda, Indore</strong>, B.R. Enterprises has grown into a distinguished name in the domestic pharmaceutical landscape.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Our portfolio encompasses critical therapeutic categories including analgesic tablets, antibiotic & anti-ulcer capsules, dermatological creams and lotions, and pediatric syrups. We synergize our distribution network with certified WHO-GMP partner manufacturing facilities, ensuring that every batch meets rigorous pharmacopeial standards.
          </p>

          <div className="pt-2 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-sky-50 border border-sky-100">
              <span className="text-2xl font-extrabold text-[#0284C7] block">250+</span>
              <span className="text-xs font-semibold text-slate-700 mt-0.5 block">Approved Formulations</span>
              <span className="text-[11px] text-slate-500">Across 4 core segments</span>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
              <span className="text-2xl font-extrabold text-emerald-700 block">18+</span>
              <span className="text-xs font-semibold text-slate-700 mt-0.5 block">States Covered</span>
              <span className="text-[11px] text-slate-500">Dedicated PCD network</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1000&q=80"
              alt="Quality assurance laboratory and clean facility"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent flex items-end p-6">
              <div className="text-white space-y-1">
                <span className="text-xs font-bold text-sky-300 uppercase tracking-wider block">Analytical Compliance</span>
                <h4 className="text-lg font-bold">Good Manufacturing Practice (GMP) Standardized Lines</h4>
                <p className="text-xs text-slate-300">Continuous chemical, physical, and microbiological quality verification.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-4 relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100 shadow-2xs">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-extrabold text-[#0B2545]">Our Mission</h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            To enhance human well-being by providing accessible, premium quality, and affordable pharmaceutical products. We empower healthcare professionals and franchise associates with dependable supply chains and ethical transparency.
          </p>
          <ul className="space-y-2 pt-2 text-sm text-slate-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
              <span>Strict compliance with Indian Pharmacopoeia standards</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
              <span>Competitive pricing for domestic healthcare accessibility</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
              <span>Sustainable, tamper-proof Alu-Alu & blister packaging</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-4 relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shadow-2xs">
            <Eye className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-extrabold text-[#0B2545]">Our Vision</h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            To be recognized among central India’s foremost pharmaceutical formulation and franchise leaders, recognized for unwavering integrity, clinical efficacy, and collaborative partnership growth.
          </p>
          <ul className="space-y-2 pt-2 text-sm text-slate-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Expanding dermatological and respiratory offerings</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Establishing exclusive district monopoly rights nationwide</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Rapid 48-72 hour dispatch SLAs for distribution partners</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 4. Quality Policy Banner */}
      <section className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-12 text-center space-y-5">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-extrabold text-[#0284C7] uppercase tracking-widest block">
            QUALITY POLICY & COMPLIANCE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
            Quality Is Our Core Principle, Not An Afterthought
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            All formulations marketed by B.R. Enterprises are manufactured in audited, accredited WHO-GMP compliant facilities equipped with high-precision analytical equipment, HVAC filtered air handling systems, and automated blister sealing machinery.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap justify-center gap-4 text-xs font-semibold text-slate-700">
          <div className="px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
            Stability Tested Formulations
          </div>
          <div className="px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
            Batch-to-Batch Consistency
          </div>
          <div className="px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
            Tamper-Evident Packaging
          </div>
          <div className="px-4 py-2 bg-white rounded-xl border border-slate-200 shadow-2xs">
            Drug Controller Certified
          </div>
        </div>
      </section>

      {/* 5. CTA Row */}
      <section className="bg-gradient-to-r from-sky-50 to-blue-100/60 border border-sky-200 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-[#0B2545]">Interested in Partnering with B.R. Enterprises?</h3>
          <p className="text-sm text-slate-600 mt-1">Connect with our franchise management desk or explore third-party contract manufacturing.</p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            to="/products"
            className="px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-sm font-bold transition"
          >
            Explore Catalog
          </Link>
          <button
            onClick={() => onOpenEnquiry?.({ enquiryType: 'Pharma Franchise' })}
            className="px-5 py-2.5 rounded-xl bg-[#0B2545] hover:bg-[#0284C7] text-white text-sm font-bold shadow-sm transition"
          >
            Enquire Now
          </button>
        </div>
      </section>
    </div>
  );
}
