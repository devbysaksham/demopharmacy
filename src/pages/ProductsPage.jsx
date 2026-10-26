import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, X, Pill, Sparkles, CheckCircle2, Send, SlidersHorizontal } from 'lucide-react';
import { allProducts, productCategories } from '../data/productsData';
import ProductCard from '../components/ProductCard';

export default function ProductsPage({ onSelectProduct, onOpenEnquiry }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    setSelectedCategory(cat);
  }, [searchParams]);

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    if (catId === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: catId });
    }
  };

  const filtered = allProducts
    .filter((product) => {
      const matchesCat = selectedCategory === 'all' || product.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        product.name.toLowerCase().includes(q) ||
        product.brandName.toLowerCase().includes(q) ||
        product.composition.toLowerCase().includes(q) ||
        product.indication.toLowerCase().includes(q) ||
        product.categoryLabel.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });

  return (
    <div className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#0B2545] via-[#11325d] to-[#0284C7] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-lg">
        <div className="relative z-10 max-w-2xl space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-bold tracking-wider uppercase backdrop-blur-xs">
            <Sparkles className="w-3.5 h-3.5" />
            Verified Pharmaceutical Catalog
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Pharmaceutical Products
          </h1>
          <p className="text-sky-100 text-sm sm:text-base leading-relaxed">
            Browse our comprehensive range of tablets, capsules, skin formulations, and oral syrups manufactured in accordance with strict WHO-GMP quality benchmarks.
          </p>
        </div>

        {/* Decorative circle overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
          <Pill className="w-96 h-96 -rotate-45" />
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs space-y-4">
        {/* Top Controls: Search Bar & Sort */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-1 w-full">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by medicine name, salt / composition, or therapeutic indication..."
              className="w-full pl-11 pr-10 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-sky-500 focus:outline-none transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <SlidersHorizontal className="w-4 h-4 text-slate-400 flex-shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3.5 py-3 text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-sky-500 w-full md:w-auto"
            >
              <option value="popular">Sort: Featured First</option>
              <option value="name-asc">Sort: Name (A to Z)</option>
              <option value="name-desc">Sort: Name (Z to A)</option>
            </select>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-none">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex-shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-[#0B2545] text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Products ({allProducts.length})
          </button>

          {productCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => handleCategoryChange(c.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition flex-shrink-0 ${
                selectedCategory === c.id
                  ? 'bg-[#0284C7] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count & Active Filter Indicator */}
      <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500">
        <div>
          Showing <span className="font-bold text-slate-900">{filtered.length}</span> formulations
          {selectedCategory !== 'all' && (
            <span> in <span className="font-semibold text-sky-700 capitalize">{selectedCategory}</span></span>
          )}
          {searchQuery && (
            <span> matching "<span className="font-semibold text-slate-800">{searchQuery}</span>"</span>
          )}
        </div>

        {(selectedCategory !== 'all' || searchQuery) && (
          <button
            onClick={() => {
              handleCategoryChange('all');
              setSearchQuery('');
            }}
            className="text-xs font-semibold text-rose-600 hover:underline"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Products Grid */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center space-y-4 max-w-lg mx-auto shadow-xs">
          <div className="w-16 h-16 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mx-auto">
            <Pill className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-800">No matching products found</h3>
          <p className="text-sm text-slate-500">
            We couldn't find any formulation matching your search criteria. Try modifying your search term or select "All Products".
          </p>
          <button
            onClick={() => {
              handleCategoryChange('all');
              setSearchQuery('');
            }}
            className="px-5 py-2.5 bg-[#0B2545] text-white rounded-xl text-sm font-bold"
          >
            Show All Products
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={onSelectProduct}
              onEnquire={(prod) => onOpenEnquiry?.({ productName: prod.name, strength: prod.strength })}
            />
          ))}
        </div>
      )}

      {/* Catalog Request Callout */}
      <div className="bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50 border border-sky-200/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="text-lg font-bold text-[#0B2545]">Looking for a Specific Formulation or Bulk Packing?</h3>
          <p className="text-sm text-slate-600">
            We formulate and manufacture customized dosage forms and batch sizes for PCD distributors and institutional clients.
          </p>
        </div>

        <button
          onClick={() => onOpenEnquiry?.({ enquiryType: 'Product Price & Availability' })}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B2545] hover:bg-[#0284C7] text-white text-sm font-bold shadow-md hover:shadow-lg transition flex-shrink-0"
        >
          <Send className="w-4 h-4" />
          <span>Request Complete Price List</span>
        </button>
      </div>
    </div>
  );
}
