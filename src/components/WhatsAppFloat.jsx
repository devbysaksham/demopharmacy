import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMsg = encodeURIComponent(
    "Hello,\nI want to connect with B.R. Enterprises for Pharma Products.\nPlease guide me ahead."
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Greeting Popup */}
      {isOpen && (
        <div className="mb-3 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 animate-fade-in text-slate-800">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-xs text-[#0B2545]">B.R. Enterprises Pharma Desk</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
            Hi there! Need pricing or franchise availability in your district? Connect directly with our team on WhatsApp.
          </p>
          <a
            href={`https://wa.me/${companyInfo.phones.thirdPartyRaw}?text=${defaultMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
        title="WhatsApp Support"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.53C9.36 7.53 9.09 7.6 8.87 7.84C8.65 8.08 8.02 8.67 8.02 9.87C8.02 11.08 8.9 12.24 9.02 12.41C9.15 12.57 10.74 15.03 13.18 16.08C13.76 16.33 14.21 16.48 14.56 16.6C15.15 16.78 15.68 16.76 16.1 16.7C16.58 16.63 17.55 16.11 17.76 15.54C17.96 14.97 17.96 14.48 17.9 14.38C17.84 14.28 17.68 14.22 17.43 14.1C17.18 13.97 15.96 13.37 15.73 13.29C15.5 13.2 15.34 13.16 15.18 13.41C15.01 13.65 14.54 14.22 14.4 14.38C14.26 14.54 14.11 14.57 13.87 14.44C13.62 14.32 12.82 14.06 11.87 13.21C11.13 12.55 10.63 11.73 10.49 11.49C10.35 11.24 10.47 11.11 10.6 10.98C10.71 10.87 10.85 10.68 10.97 10.54C11.1 10.4 11.14 10.29 11.22 10.13C11.3 9.97 11.26 9.82 11.2 9.7C11.14 9.58 10.65 8.38 10.45 7.89C10.25 7.41 10.05 7.48 9.89 7.47C9.74 7.46 9.57 7.46 9.4 7.46" />
        </svg>
      </button>
    </div>
  );
}
