import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import FranchisePage from './pages/FranchisePage';
import ManufacturingPage from './pages/ManufacturingPage';
import ContactPage from './pages/ContactPage';
import SearchModal from './components/SearchModal';
import EnquiryModal from './components/EnquiryModal';
import ProductModal from './components/ProductModal';
import WhatsAppFloat from './components/WhatsAppFloat';

// Auto scroll to top on route change
function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}

function AppContent() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryInitialData, setEnquiryInitialData] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Global handler to trigger enquiry modal
  const handleOpenEnquiry = (initial = null) => {
    setEnquiryInitialData(initial);
    setIsEnquiryOpen(true);
  };

  // Global handler for selecting a product to view details
  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800">
      <ScrollToTop />

      {/* Sticky Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onOpenEnquiry={handleOpenEnquiry}
                onSelectProduct={handleSelectProduct}
              />
            } 
          />
          <Route 
            path="/products" 
            element={
              <ProductsPage 
                onOpenEnquiry={handleOpenEnquiry}
                onSelectProduct={handleSelectProduct}
              />
            } 
          />
          <Route 
            path="/about" 
            element={<AboutPage onOpenEnquiry={handleOpenEnquiry} />} 
          />
          <Route 
            path="/franchise" 
            element={<FranchisePage onOpenEnquiry={handleOpenEnquiry} />} 
          />
          <Route 
            path="/manufacturing" 
            element={<ManufacturingPage onOpenEnquiry={handleOpenEnquiry} />} 
          />
          <Route 
            path="/contact" 
            element={<ContactPage />} 
          />
          {/* Catch-all redirect to Home */}
          <Route 
            path="*" 
            element={
              <HomePage 
                onOpenEnquiry={handleOpenEnquiry}
                onSelectProduct={handleSelectProduct}
              />
            } 
          />
        </Routes>
      </main>

      {/* Professional Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* Global Interactive Modals & Widgets */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={handleSelectProduct}
      />

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => {
          setIsEnquiryOpen(false);
          setEnquiryInitialData(null);
        }}
        initialData={enquiryInitialData}
      />

      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onEnquire={(prod) => {
          handleOpenEnquiry({
            productName: prod.name,
            strength: prod.strength,
            enquiryType: 'Product Price & Availability'
          });
        }}
      />

      <WhatsAppFloat />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
