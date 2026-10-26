import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Pill, ExternalLink } from 'lucide-react';
import { allProducts } from '../data/productsData';

export default function SearchModal({ isOpen, onClose, onSelectProduct }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = query.trim()
    ? allProducts.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.brandName.toLowerCase().includes(query.toLowerCase()) ||
        p.composition.toLowerCase().includes(query.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(query.toLowerCase()) ||
        p.indication.toLowerCase().includes(query.toLowerCase())
      )
    : allProducts.slice(0, 6);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-5 py-4 border-b border-slate-100 gap-3">
          <Search className="w-5 h-5 text-sky-600 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tablets, capsules, ointments, syrups, molecules..."
            className="w-full text-slate-800 placeholder-slate-400 bg-transparent text-base outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-md transition"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          <div className="flex items-center justify-between px-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <span>{query.trim() ? `Search Results (${filtered.length})` : 'Popular Medicines'}</span>
            <span>Category</span>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <Pill className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="font-semibold text-slate-700">No matching pharmaceutical products found</p>
              <p className="text-sm mt-1">Try searching for "Paracetamol", "Pantoprazole", "Cream", or "Syrup"</p>
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectProduct?.(item);
                  onClose();
                }}
                className="group flex items-center justify-between p-3 rounded-xl hover:bg-sky-50/80 cursor-pointer border border-transparent hover:border-sky-100 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-sky-700 transition">
                      {item.name} <span className="text-xs font-semibold text-sky-600 ml-1">({item.strength})</span>
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-1">{item.composition}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 group-hover:bg-sky-100 group-hover:text-sky-800 transition">
                    {item.categoryLabel}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="bg-slate-50 px-5 py-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Search B.R. Enterprises verified formulations</span>
          <span className="text-sky-600 font-medium">WHO-GMP Compliant Portfolio</span>
        </div>
      </div>
    </div>
  );
}
