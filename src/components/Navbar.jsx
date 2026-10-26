import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, ChevronDown, Phone, Mail, Sparkles, Send } from 'lucide-react';
import Logo from './Logo';
import { companyInfo } from '../data/companyData';
import { productCategories } from '../data/productsData';

export default function Navbar({ onOpenSearch, onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Products', 
      path: '/products',
      hasDropdown: true 
    },
    { name: 'Franchise', path: '/franchise' },
    { name: 'Third Party Manufacturing', path: '/manufacturing' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-200 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3' 
        : 'bg-white border-b border-slate-100 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Logo variant="dark" />

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 lg:gap-2">
            {navLinks.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div 
                    key={item.name} 
                    className="relative"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => `px-3.5 py-2 text-sm font-semibold transition-colors flex items-center gap-1 rounded-lg ${
                        isActive 
                          ? 'text-[#0284C7] font-bold' 
                          : 'text-slate-700 hover:text-[#0284C7]'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        productsDropdownOpen ? 'rotate-180 text-sky-600' : 'text-slate-400'
                      }`} />
                    </NavLink>

                    {/* Products Mega Dropdown */}
                    {productsDropdownOpen && (
                      <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5 mt-1 animate-fade-in z-50">
                        <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          Categories
                        </div>
                        {productCategories.map((cat) => (
                          <Link
                            key={cat.id}
                            to={`/products?category=${cat.id}`}
                            className="flex items-center justify-between p-2.5 rounded-xl hover:bg-sky-50 text-slate-700 hover:text-sky-800 transition"
                          >
                            <span className="text-sm font-medium">{cat.name}</span>
                            <span className="text-xs text-slate-400">{cat.count}</span>
                          </Link>
                        ))}
                        <div className="border-t border-slate-100 mt-1 pt-1.5">
                          <Link
                            to="/products"
                            className="flex items-center justify-between p-2.5 rounded-xl bg-sky-50/70 text-sky-700 hover:bg-sky-100 font-semibold text-xs transition"
                          >
                            <span>View All Formulations &rarr;</span>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => `relative px-3.5 py-2 text-sm font-semibold transition-colors rounded-lg ${
                    isActive 
                      ? 'text-[#0B2545] font-bold' 
                      : 'text-slate-600 hover:text-[#0B2545]'
                  }`}
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#0284C7] rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 text-slate-600 hover:text-[#0B2545] hover:bg-slate-100 rounded-full transition"
              title="Search medicines and products"
              aria-label="Search medicines"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Direct Enquiry CTA Button as in reference mock */}
            <button
              onClick={() => onOpenEnquiry?.({ enquiryType: 'Pharma Franchise' })}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-[#0B2545] hover:bg-[#0284C7] rounded-full shadow-sm hover:shadow-md transition-all duration-200"
            >
              <span>Enquiry Now</span>
            </button>
          </div>

          {/* Mobile Hamburger & Search Icon */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0B2545] rounded-lg hover:bg-slate-100 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-fade-in">
          <div className="space-y-1">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => `block px-4 py-2.5 rounded-xl text-base font-semibold transition ${
                  isActive 
                    ? 'bg-sky-50 text-[#0284C7] font-bold' 
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Category quick links in mobile menu */}
          <div className="mt-4 pt-4 border-t border-slate-100">
            <div className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Browse Categories
            </div>
            <div className="grid grid-cols-2 gap-2 px-2">
              {productCategories.map((c) => (
                <Link
                  key={c.id}
                  to={`/products?category=${c.id}`}
                  className="px-3 py-2 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-sky-50 rounded-lg border border-slate-100 transition"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick contact and CTA button */}
          <div className="mt-5 pt-4 border-t border-slate-100 space-y-3 px-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry?.({ enquiryType: 'Pharma Franchise' });
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-[#0B2545] hover:bg-[#0284C7] rounded-xl shadow-md transition"
            >
              <Send className="w-4 h-4" />
              <span>Enquiry Now</span>
            </button>

            <div className="text-center text-xs text-slate-500 pt-1">
              <span>Franchise Desk: </span>
              <a href={`tel:${companyInfo.phones.franchise}`} className="font-semibold text-sky-700 hover:underline">
                {companyInfo.phones.franchise}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
