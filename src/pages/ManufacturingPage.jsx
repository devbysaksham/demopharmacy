import React, { useState } from 'react';
import { 
  Factory, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Workflow, 
  Clock, 
  Award, 
  Phone, 
  Mail, 
  Send,
  Boxes,
  FileSpreadsheet
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ManufacturingPage({ onOpenEnquiry }) {
  const [rfqData, setRfqData] = useState({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    productType: 'Tablets',
    batchSize: 'Standard Commercial Batch',
    formulationName: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleRfqSubmit = (e) => {
    e.preventDefault();
    if (!rfqData.contactPerson.trim() || !rfqData.phone.trim() || !rfqData.formulationName.trim()) {
      setErrorMsg('Please specify Contact Person, Phone, and Formulation Name.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const workflowSteps = [
    {
      step: "01",
      title: "Molecule & Dose Selection",
      desc: "Select from our vast approved dossier list or provide custom formulation composition specs."
    },
    {
      step: "02",
      title: "Quotation & Commercials",
      desc: "Transparent raw material, packaging, and conversion pricing with clear minimum order quantities (MOQs)."
    },
    {
      step: "03",
      title: "Artwork & Brand Approvals",
      desc: "Carton design, foil printing, and Drug Controller labeling compliance review within 48-72 hours."
    },
    {
      step: "04",
      title: "Precision Batch Manufacturing",
      desc: "Formulation blending, compression/filling in certified cleanrooms with environmental HVAC filtration."
    },
    {
      step: "05",
      title: "Quality Release & COA",
      desc: "Comprehensive lab assay, dissolution, and microbial testing with verified Certificate of Analysis."
    },
    {
      step: "06",
      title: "Safe Dispatch & Logistics",
      desc: "Heavy-duty corrugated shipping with temperature monitoring from our central Indore logistics hub."
    }
  ];

  return (
    <div className="space-y-16 lg:space-y-24 py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* 1. Header Hero */}
      <section className="bg-gradient-to-r from-[#0B2545] via-[#103463] to-[#0284C7] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-bold uppercase tracking-wider backdrop-blur-xs border border-white/15">
            <Factory className="w-3.5 h-3.5" />
            <span>Third-Party Contract Manufacturing</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Reliable Pharmaceutical Contract Manufacturing in Indore
          </h1>

          <p className="text-sky-100 text-base sm:text-lg leading-relaxed">
            Scalable, compliant, and cost-effective contract manufacturing services for pharmaceutical companies, hospital chains, and distributors across India.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${companyInfo.phones.thirdParty}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0284C7] hover:bg-[#0369a1] text-white font-bold text-sm shadow-md transition"
            >
              <Phone className="w-4 h-4" />
              <span>Manufacturing Desk: {companyInfo.phones.thirdParty}</span>
            </a>
          </div>
        </div>

        {/* Decorative background shape */}
        <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none p-8">
          <Factory className="w-96 h-96 text-white" />
        </div>
      </section>

      {/* 2. Manufacturing Sections Grid */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold text-[#0284C7] uppercase tracking-widest block">
            MANUFACTURING CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545]">
            Approved Dosage Forms & Packaging Lines
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Modern, dedicated equipment blocks designed to prevent cross-contamination and guarantee formulation stability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center border border-sky-100">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0B2545]">Tablets Section</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Uncoated, film-coated, enteric-coated, sustained release, and chewable tablets. Alu-Alu and blister packaging.
            </p>
            <div className="pt-2 text-xs font-semibold text-sky-600">
              High speed rotary compression
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100">
              <Boxes className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0B2545]">Capsules Section</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Hard gelatin capsules, micro-pellets filling, delayed-release gastro-resistant formulations.
            </p>
            <div className="pt-2 text-xs font-semibold text-teal-600">
              Automated capsule filling lines
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center border border-purple-100">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0B2545]">Creams & Ointments</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Sterile topical emulsions, anti-fungal ointments, dermatological lotions, aluminum lamitube packaging.
            </p>
            <div className="pt-2 text-xs font-semibold text-purple-600">
              Vacuum planetary homogenizers
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-100">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0B2545]">Syrups & Liquids</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Pediatric drops, cough syrups, suspension tonics, liquid multivitamins, calibrated bottle capping.
            </p>
            <div className="pt-2 text-xs font-semibold text-amber-600">
              Automatic liquid filling lines
            </div>
          </div>
        </div>
      </section>

      {/* 3. 6-Step Workflow */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold text-[#0284C7] uppercase tracking-widest block">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545]">
            Seamless Contract Manufacturing Process
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            From initial dossier formulation to final carton dispatch, our streamlined process guarantees on-time delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowSteps.map((step) => (
            <div key={step.step} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs relative overflow-hidden group">
              <span className="text-4xl font-extrabold text-slate-100 group-hover:text-sky-100 transition absolute right-4 top-4 select-none">
                {step.step}
              </span>
              <span className="inline-block px-2.5 py-0.5 rounded bg-sky-100 text-sky-800 text-xs font-bold mb-3">
                Phase {step.step}
              </span>
              <h4 className="text-base font-bold text-[#0B2545]">{step.title}</h4>
              <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Request for Quotation (RFQ) Form */}
      <section className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-extrabold text-[#0284C7] uppercase tracking-widest block">
              GET A QUOTE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
              Request Manufacturing Quotation (RFQ)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Submit your formulation requirements or inquiry for third-party contract manufacturing. Our technical commercial team will provide competitive rates and production timelines.
            </p>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-3 text-xs">
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Manufacturing Desk:</span>
                <a href={`tel:${companyInfo.phones.thirdParty}`} className="text-sky-700 font-bold hover:underline">
                  {companyInfo.phones.thirdParty}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <Mail className="w-4 h-4 text-sky-600" />
                <span>Technical Enquiries:</span>
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
                <h3 className="text-2xl font-bold text-slate-900">RFQ Received!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you! Your manufacturing inquiry for <span className="font-semibold text-sky-700">{rfqData.formulationName}</span> ({rfqData.productType}) has been logged.
                </p>
                <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-500 border border-slate-200 max-w-sm mx-auto">
                  <span>Demo notice: Form validated successfully. In production, this directly notifies the production team.</span>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 bg-[#0B2545] text-white rounded-xl text-sm font-bold shadow-sm"
                >
                  Submit Another RFQ
                </button>
              </div>
            ) : (
              <form onSubmit={handleRfqSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      value={rfqData.companyName}
                      onChange={(e) => setRfqData({ ...rfqData, companyName: e.target.value })}
                      placeholder="e.g. Apex Health Corp"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-sky-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      value={rfqData.contactPerson}
                      onChange={(e) => setRfqData({ ...rfqData, contactPerson: e.target.value })}
                      placeholder="e.g. Rahul Gupta"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-sky-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={rfqData.phone}
                      onChange={(e) => setRfqData({ ...rfqData, phone: e.target.value })}
                      placeholder="e.g. 9826012345"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-sky-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={rfqData.email}
                      onChange={(e) => setRfqData({ ...rfqData, email: e.target.value })}
                      placeholder="e.g. purchase@apexhealth.com"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:border-sky-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Dosage Form
                    </label>
                    <select
                      value={rfqData.productType}
                      onChange={(e) => setRfqData({ ...rfqData, productType: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none"
                    >
                      <option value="Tablets">Tablets (Alu-Alu / Blister)</option>
                      <option value="Capsules">Capsules (Hard Gelatin / SR)</option>
                      <option value="Creams & Ointments">Creams & Ointments (Lamitubes)</option>
                      <option value="Syrups & Suspensions">Syrups & Oral Suspensions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Expected Batch Size
                    </label>
                    <select
                      value={rfqData.batchSize}
                      onChange={(e) => setRfqData({ ...rfqData, batchSize: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none"
                    >
                      <option value="Standard Commercial Batch">Standard Pilot Batch (Minimum MOQ)</option>
                      <option value="Medium Commercial (50,000+ units)">Medium (50,000+ units)</option>
                      <option value="Large Scale (1,00,000+ units)">Large Commercial (1,00,000+ units)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Formulation / Molecule Name *
                  </label>
                  <input
                    type="text"
                    value={rfqData.formulationName}
                    onChange={(e) => setRfqData({ ...rfqData, formulationName: e.target.value })}
                    placeholder="e.g. Paracetamol 650mg, Pantoprazole 40mg + Domperidone 30mg SR"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Additional Specifications & Packaging Preferences
                  </label>
                  <textarea
                    rows={2}
                    value={rfqData.notes}
                    onChange={(e) => setRfqData({ ...rfqData, notes: e.target.value })}
                    placeholder="Specify blister type (e.g. 10x10 Alu-Alu), special colors, or target delivery date..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#0B2545] hover:bg-[#0284C7] text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Manufacturing Quote</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
