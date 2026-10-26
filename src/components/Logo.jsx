import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ variant = 'dark', className = '', showTagline = true }) {
  const isLight = variant === 'light';

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Stylized BR Pharma Monogram */}
      <div className="relative flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-white to-blue-50 border border-sky-100 shadow-sm flex items-center justify-center p-1.5 transition-transform duration-200 group-hover:scale-105">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Stylized interlocking 'B' & 'R' with pharma medical curves */}
          <path
            d="M20 18H52C62.5 18 70 24 70 34C70 41.5 65.5 46.5 59 49C68 51.5 74 57.5 74 68C74 79 64 85 51 85H20V18Z"
            stroke="#0284C7"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32 18V85"
            stroke="#0B2545"
            strokeWidth="11"
            strokeLinecap="round"
          />
          <path
            d="M32 49H54C60 49 63 46 63 41C63 36 59 33 53 33H32"
            stroke="#0EA5E9"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            d="M48 51L72 85"
            stroke="#0284C7"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <circle cx="78" cy="24" r="6" fill="#0EA5E9" />
        </svg>
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`font-extrabold tracking-tight text-xl leading-none transition-colors ${
            isLight ? 'text-white' : 'text-[#0B2545]'
          }`}>
            B.R. ENTERPRISES
          </span>
        </div>
        {showTagline && (
          <span className={`text-[11px] font-medium tracking-wide mt-1 transition-colors ${
            isLight ? 'text-slate-300' : 'text-slate-500'
          }`}>
            Quality Medicines for a Healthier Tomorrow
          </span>
        )}
      </div>
    </Link>
  );
}
