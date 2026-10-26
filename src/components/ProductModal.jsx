import React from 'react';
import { X, CheckCircle2, Package, ShieldCheck, FileText, Send, Building2 } from 'lucide-react';

export default function ProductModal({ product, isOpen, onClose, onEnquire }) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-sky-100 text-sky-800">
              {product.categoryLabel}
            </span>
            <span className="text-xs font-semibold text-slate-500">
              {product.brandName}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="w-full h-56 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-[#0B2545] leading-tight">
                {product.name}
              </h3>
              <p className="text-base font-semibold text-sky-600 mt-1">
                Strength: {product.strength}
              </p>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                {product.indication}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-200/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Manufactured in WHO-GMP Compliant Partner Facilities</span>
              </div>
            </div>
          </div>

          {/* Technical Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Active Composition
              </span>
              <span className="text-sm font-semibold text-slate-800 mt-0.5 block">
                {product.composition}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Packaging Presentation
              </span>
              <span className="text-sm font-semibold text-slate-800 mt-0.5 block flex items-center gap-1.5">
                <Package className="w-4 h-4 text-sky-600" />
                {product.packing}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Dosage Form
              </span>
              <span className="text-sm font-semibold text-slate-800 mt-0.5 block">
                {product.dosageForm}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Commercial Availability
              </span>
              <span className="text-sm font-semibold text-slate-800 mt-0.5 block">
                PCD Franchise & Third-Party Manufacturing
              </span>
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span>Minimum order quantities apply for contract manufacturing.</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 rounded-xl transition"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnquire?.(product);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#0B2545] hover:bg-[#0284C7] rounded-xl shadow-md hover:shadow-lg transition duration-200"
            >
              <Send className="w-4 h-4" />
              <span>Enquire for {product.name}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
