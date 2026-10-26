import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  FileCheck, 
  ShieldCheck, 
  Boxes, 
  Truck, 
  Headphones, 
  Handshake, 
  Factory, 
  CheckCircle,
  Building2,
  Users2,
  HeartPulse,
  Sparkles
} from 'lucide-react';
import { productCategories, allProducts } from '../data/productsData';
import ProductCard from '../components/ProductCard';
import { companyInfo } from '../data/companyData';

export default function HomePage({ onOpenEnquiry, onSelectProduct }) {
  const featuredProducts = allProducts.filter(p => p.featured);

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* 1. HERO BANNER SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F7FF] via-[#F8FBFE] to-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-sky-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200/60 text-[#0284C7] text-xs font-extrabold uppercase tracking-widest shadow-2xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>WELCOME TO B.R. ENTERPRISES</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0B2545] tracking-tight leading-[1.12]">
                Trusted Pharma Partner <br />
                <span className="text-[#0B2545]">for a </span>
                <span className="text-[#0284C7] inline-block">Healthier Future</span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                We are a leading pharmaceutical company in Indore, serving healthcare needs through high-quality tablets, capsules, creams and more. Committed to better health, always.
              </p>

              {/* Action Buttons matching visual mock */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#0B2545] hover:bg-[#0284C7] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 group"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#0B2545] border border-slate-300 text-sm font-bold shadow-2xs hover:shadow-sm transition-all duration-200"
                >
                  <span>About Us</span>
                </Link>
              </div>

              {/* Quick stats highlights */}
              <div className="pt-6 border-t border-slate-200/70 grid grid-cols-3 gap-4">
                <div>
                  <span className="block text-xl sm:text-2xl font-extrabold text-[#0B2545]">250+</span>
                  <span className="text-xs text-slate-500 font-medium">Approved Formulations</span>
                </div>
                <div>
                  <span className="block text-xl sm:text-2xl font-extrabold text-[#0284C7]">WHO-GMP</span>
                  <span className="text-xs text-slate-500 font-medium">Certified Ecosystem</span>
                </div>
                <div>
                  <span className="block text-xl sm:text-2xl font-extrabold text-[#0B2545]">100%</span>
                  <span className="text-xs text-slate-500 font-medium">Quality Testing</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Composition matching reference */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Decorative glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-200/40 to-teal-100/40 rounded-3xl blur-2xl -z-10" />

                {/* Main Hero Container */}
                <div className="relative rounded-3xl overflow-hidden border border-white/80 shadow-2xl bg-gradient-to-br from-white via-sky-50/50 to-blue-50/30">
                  <img
                    src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1200&q=85"
                    alt="Spilled medicine bottle with tablets and capsules"
                    className="w-full h-[360px] sm:h-[440px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />

                  {/* "Better Health Together" Artistic Handwritten Overlay Badge */}
                  <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl border border-sky-100 rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="flex items-center gap-2">
                      <HeartPulse className="w-5 h-5 text-sky-600 animate-pulse" />
                      <div>
                        <span className="block font-serif italic text-lg sm:text-xl font-bold text-[#0B2545] tracking-tight leading-none">
                          Better Health
                        </span>
                        <span className="block font-sans text-xs font-extrabold uppercase tracking-widest text-[#0284C7]">
                          Together
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Top-left Quick Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-800 shadow-md border border-slate-100 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Quality Assured</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PRODUCT CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-extrabold text-[#0284C7] uppercase tracking-widest block mb-1">
              OUR PRODUCTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              Product Categories
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-left md:text-right">
            <p className="text-slate-500 text-sm max-w-md">
              Explore our wide range of pharmaceutical products designed for quality, safety and better health.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center gap-1 text-sm font-bold text-[#0284C7] hover:text-[#0B2545] transition flex-shrink-0"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group bg-white rounded-2xl border border-slate-200/80 p-4 transition-all duration-300 hover:shadow-xl hover:border-sky-300 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Category Image */}
              <div className={`w-full h-44 rounded-xl bg-gradient-to-br ${category.themeColor} overflow-hidden mb-4 p-2 flex items-center justify-center relative`}>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-[11px] font-bold text-slate-700 px-2 py-0.5 rounded shadow-2xs">
                  {category.count}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#0B2545] group-hover:text-sky-700 transition">
                  {category.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-2">
                  {category.description}
                </p>
              </div>

              {/* Arrow Button */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-sky-600 group-hover:underline">
                  Browse Range
                </span>
                <div className="w-8 h-8 rounded-full border border-sky-200 bg-sky-50 text-sky-700 flex items-center justify-center group-hover:bg-[#0B2545] group-hover:border-[#0B2545] group-hover:text-white transition">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. TRUST BADGES STRIP (5 COLUMNS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center divide-y md:divide-y-0 lg:divide-x divide-slate-100">
            
            {/* 1. High Quality Products */}
            <div className="flex items-center gap-3.5 pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#0B2545] leading-snug">High Quality Products</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Strict quality tests</p>
              </div>
            </div>

            {/* 2. WHO-GMP Compliant */}
            <div className="flex items-center gap-3.5 pt-4 md:pt-0 lg:pl-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#0B2545] leading-snug">WHO-GMP Compliant</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Certified manufacturing</p>
              </div>
            </div>

            {/* 3. Wide Product Range */}
            <div className="flex items-center gap-3.5 pt-4 md:pt-0 lg:pl-6">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                <Boxes className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#0B2545] leading-snug">Wide Product Range</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">250+ formulations</p>
              </div>
            </div>

            {/* 4. Timely Delivery */}
            <div className="flex items-center gap-3.5 pt-4 md:pt-0 lg:pl-6">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#0B2545] leading-snug">Timely Delivery</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Nationwide logistics</p>
              </div>
            </div>

            {/* 5. Customer Support */}
            <div className="flex items-center gap-3.5 pt-4 md:pt-0 lg:pl-6 col-span-2 sm:col-span-1">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#0B2545] leading-snug">Customer Support</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Dedicated enquiry desk</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. DUAL BANNERS (PHARMA FRANCHISE & THIRD PARTY MANUFACTURING) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Card: Pharma Franchise Enquiry */}
          <div className="relative rounded-3xl overflow-hidden p-8 sm:p-10 bg-gradient-to-br from-[#EBFBF7] to-[#D5F5EC] border border-emerald-200/80 shadow-md flex flex-col justify-between group">
            <div className="space-y-4 max-w-lg">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
                <Handshake className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
                  Pharma Franchise <br />
                  <span className="text-emerald-700">Enquiry</span>
                </h3>
                <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
                  Become our franchise partner and grow your business with trusted quality products, monopoly rights, and complete promotional marketing support.
                </p>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onOpenEnquiry?.({ enquiryType: 'Pharma Franchise' })}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Card: Third Party Manufacturing */}
          <div className="relative rounded-3xl overflow-hidden p-8 sm:p-10 bg-gradient-to-br from-[#EBF5FB] via-[#E2F0FA] to-[#D6EAF8] border border-sky-200 shadow-md flex flex-col justify-between group">
            <div className="space-y-4 max-w-lg relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#0B2545] text-white flex items-center justify-center shadow-md">
                <Factory className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
                  Third Party Manufacturing
                </h3>
                <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
                  We offer reliable third-party manufacturing services with complete quality assurance, high batch capacity, and regulatory documentation support.
                </p>
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <button
                onClick={() => onOpenEnquiry?.({ enquiryType: 'Third Party Manufacturing' })}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B2545] hover:bg-[#0284C7] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Subtle Cleanroom Pharma Manufacturing Background on right */}
            <div className="absolute right-0 top-0 bottom-0 w-2/5 opacity-15 sm:opacity-25 pointer-events-none overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=600&q=80"
                alt="Pharma factory cleanroom"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 5. FEATURED PRODUCTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-extrabold text-[#0284C7] uppercase tracking-widest block mb-1">
              FEATURED PRODUCTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight">
              Our Featured Products
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-1 text-sm font-bold text-[#0284C7] hover:text-[#0B2545] transition"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 5 Cards Grid as in reference mock */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={onSelectProduct}
              onEnquire={(prod) => onOpenEnquiry?.({ productName: prod.name, strength: prod.strength })}
            />
          ))}
        </div>
      </section>

      {/* 6. ABOUT B.R. ENTERPRISES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left: Modern Corporate Building Image */}
            <div className="lg:col-span-4">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 group">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
                  alt="B.R. Enterprises Headquarters Building"
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-5">
                  <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow border border-sky-100">
                    <span className="font-extrabold text-xs text-[#0B2545] block">B.R. ENTERPRISES</span>
                    <span className="text-[10px] text-slate-500">Indore Facility</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle: Content & Mission */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-extrabold text-[#0284C7] uppercase tracking-widest block">
                ABOUT B.R. ENTERPRISES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] leading-tight">
                Committed to Quality & Care
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                B.R. Enterprises is a trusted name in the pharmaceutical industry, based in Indore. We specialize in manufacturing and supplying a wide range of pharmaceutical products with a focus on quality, safety and customer satisfaction.
              </p>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B2545] hover:bg-[#0284C7] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: 3 Pillars Cards */}
            <div className="lg:col-span-3 space-y-3.5">
              <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0B2545]">Quality Products</h4>
                  <p className="text-[11px] text-slate-500">for Better Health</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Users2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0B2545]">Trusted by Healthcare</h4>
                  <p className="text-[11px] text-slate-500">Professionals</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-[#0B2545]">Based in Indore</h4>
                  <p className="text-[11px] text-slate-500">Serving Across India</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
