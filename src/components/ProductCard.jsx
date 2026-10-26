import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ProductCard({ product, onClick, onEnquire }) {
  return (
    <div 
      onClick={() => onClick?.(product)}
      className="group relative bg-white rounded-2xl border border-slate-200/80 p-4 transition-all duration-300 hover:shadow-xl hover:border-sky-200 hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
    >
      {/* Product Image Container */}
      <div className="relative w-full h-44 rounded-xl bg-slate-50/80 border border-slate-100 overflow-hidden flex items-center justify-center p-2 mb-4 group-hover:bg-sky-50/40 transition-colors">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Floating Category Tag */}
        <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide rounded-md bg-white/90 text-slate-600 shadow-xs border border-slate-200/60 backdrop-blur-xs">
          {product.categoryLabel}
        </span>
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h3 className="font-bold text-[#0B2545] text-base group-hover:text-sky-700 transition-colors line-clamp-1">
          {product.name}
        </h3>
        
        {/* Strength / Dosage */}
        <p className="text-sm font-semibold text-slate-700 mt-0.5">
          {product.strength}
        </p>

        {/* Category subtitle as in reference */}
        <p className="text-xs text-slate-400 font-medium mt-1">
          {product.categoryLabel}
        </p>
      </div>

      {/* Bottom Action Row with Circular Arrow Button */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[11px] font-semibold text-sky-600 group-hover:underline">
          View Details
        </span>

        <button
          type="button"
          aria-label={`View ${product.name}`}
          onClick={(e) => {
            e.stopPropagation();
            onClick?.(product);
          }}
          className="w-8 h-8 rounded-full border border-sky-200 bg-sky-50/60 text-sky-700 flex items-center justify-center group-hover:bg-[#0B2545] group-hover:border-[#0B2545] group-hover:text-white transition-all duration-200 shadow-2xs"
        >
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}
