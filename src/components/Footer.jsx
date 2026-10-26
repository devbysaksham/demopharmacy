import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';
import Logo from './Logo';
import { companyInfo } from '../data/companyData';
import { productCategories } from '../data/productsData';

export default function Footer({ onOpenEnquiry }) {
  return (
    <footer className="bg-[#0B2545] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid Row matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" showTagline={true} />
            <p className="text-sm text-slate-300/90 leading-relaxed pr-4">
              B.R. Enterprises is a trusted pharmaceutical enterprise based in Indore, dedicated to discovering, formulating and supplying high-standard medicines across India.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-sky-500 hover:text-white flex items-center justify-center text-slate-300 transition"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-pink-600 hover:text-white flex items-center justify-center text-slate-300 transition"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={companyInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-sky-600 hover:text-white flex items-center justify-center text-slate-300 transition"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-sky-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-sky-500" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-sky-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-sky-500" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-sky-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-sky-500" /> Product Catalog
                </Link>
              </li>
              <li>
                <Link to="/franchise" className="hover:text-sky-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-sky-500" /> PCD Franchise
                </Link>
              </li>
              <li>
                <Link to="/manufacturing" className="hover:text-sky-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-sky-500" /> Third-Party Mfg
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-sky-400 transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-sky-500" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Product Segments
            </h4>
            <ul className="space-y-2 text-sm">
              {productCategories.map((c) => (
                <li key={c.id}>
                  <Link
                    to={`/products?category=${c.id}`}
                    className="hover:text-sky-400 transition flex items-center justify-between"
                  >
                    <span>{c.name}</span>
                    <span className="text-xs text-slate-500">{c.count}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => onOpenEnquiry?.({ enquiryType: 'Product Price & Availability' })}
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300 underline"
                >
                  Request Full Product Price List &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact Info (Matching Reference Footer) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">
              Headquarters & Enquiries
            </h4>
            
            {/* Email */}
            <div className="flex items-start gap-3 text-sm">
              <Mail className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-slate-400 block font-medium">Official Email</span>
                <a 
                  href={`mailto:${companyInfo.emails.primary}`}
                  className="text-white font-medium hover:text-sky-400 transition break-all"
                >
                  {companyInfo.emails.primary}
                </a>
              </div>
            </div>

            {/* Third Party Enquiry Phone */}
            <div className="flex items-start gap-3 text-sm">
              <Phone className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-slate-400 block font-medium">Third Party Enquiry</span>
                <a 
                  href={`tel:${companyInfo.phones.thirdParty}`}
                  className="text-white font-medium hover:text-sky-400 transition"
                >
                  {companyInfo.phones.thirdParty}
                </a>
              </div>
            </div>

            {/* Franchise Enquiry Phone */}
            <div className="flex items-start gap-3 text-sm">
              <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-slate-400 block font-medium">Franchise Enquiry</span>
                <a 
                  href={`tel:${companyInfo.phones.franchise}`}
                  className="text-white font-medium hover:text-emerald-400 transition"
                >
                  {companyInfo.phones.franchise}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-slate-400 block font-medium">Registered Office</span>
                <span className="text-slate-300 text-xs leading-relaxed block">
                  {companyInfo.address}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2025 B.R. Enterprises. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              Quality Compliant Formulations
            </span>
            <Link to="/contact" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
