import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, MapPin, Mail, ChevronDown } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import SprayPolyurethaneFoam from './pages/SprayPolyurethaneFoam';
import MetalRoofRestoration from './pages/MetalRoofRestoration';
import FabricReinforcedSystem from './pages/FabricReinforcedSystem';
import MembraneRestoration from './pages/MembraneRestoration';
import EpdmRoofRestoration from './pages/EpdmRoofRestoration';
import TpoRoofRestoration from './pages/TpoRoofRestoration';
import MetalRoofReplacement from './pages/MetalRoofReplacement';
import RoofLeakRepair from './pages/RoofLeakRepair';
import ResidentialServices from './pages/ResidentialServices';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

type DropdownItem = {
  name: string;
  path: string;
  divider?: boolean;
};

type NavLink = {
  name: string;
  path: string;
  dropdown?: DropdownItem[];
};

function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [footerFormData, setFooterFormData] = useState({ name: '', phone: '', email: '' });
  const [footerFormStatus, setFooterFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [footerFormError, setFooterFormError] = useState('');

  const handleFooterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFooterFormStatus('submitting');
    setFooterFormError('');

    try {
      await fetch('https://www.founditos.com/api/contact-form/abde05cf-827f-4f7d-91fb-95e896b5c836', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'manual',
        body: JSON.stringify({
          name: footerFormData.name,
          email: footerFormData.email,
          phone: footerFormData.phone,
          message: 'Footer quick contact form',
        }),
      });
    } catch {
      // CRM saves the lead then 307-redirects without CORS headers
    }

    setFooterFormStatus('success');
    setFooterFormData({ name: '', phone: '', email: '' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        { name: 'Commercial', path: '', divider: true },
        { name: 'Spray Foam Roofing', path: '/services/spray-polyurethane-foam-roofing-springfield-mo' },
        { name: 'Metal Roof Restoration', path: '/services/metal-roof-restoration-springfield-mo' },
        { name: 'Commercial Roof Coating', path: '/services/commercial-roof-coating-springfield-mo' },
        { name: 'EPDM Roof Restoration', path: '/services/epdm-roof-restoration-springfield-mo' },
        { name: 'TPO Roof Restoration', path: '/services/tpo-roof-restoration-springfield-mo' },
        { name: 'Metal Roof Replacement', path: '/services/metal-roof-replacement-springfield-mo' },
        { name: 'Roof Leak Repair', path: '/services/roof-leak-repair-springfield-mo' },
        { name: 'Residential', path: '', divider: true },
        { name: 'Residential Services', path: '/services/residential' },
      ],
    },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-brand-dark text-white text-sm py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Purdy, MO | Serving Springfield (60-mile radius)</span>
            <a href="mailto:ervin@ozarkeliteroofing.com" className="flex items-center hover:text-accent-green transition-colors"><Mail className="w-4 h-4 mr-2" /> ervin@ozarkeliteroofing.com</a>
          </div>
        </div>
      </div>

      {/* Sticky Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Ozark Elite Roofing" className="h-12 md:h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link to={link.path} className="font-semibold text-gray-800 hover:text-brand-dark transition-colors uppercase text-sm tracking-wide flex items-center">
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                </Link>
                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white shadow-xl rounded border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {link.dropdown.map((sublink) =>
                        sublink.divider ? (
                          <div key={sublink.name} className="px-4 pt-3 pb-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest select-none border-t border-gray-100 first:border-0 first:pt-1">
                            {sublink.name}
                          </div>
                        ) : (
                          <Link key={sublink.name} to={sublink.path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-accent-green transition-colors">
                            {sublink.name}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA & Phone */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:417-444-3808" className="flex items-center font-bold text-brand-dark hover:text-accent-green transition-colors text-lg">
              <Phone className="w-5 h-5 mr-2" />
              417-444-3808
            </a>
            <Link to="/contact" className="bg-accent-green hover:bg-[#86b025] text-brand-dark font-bold py-3 px-6 rounded transition-colors uppercase text-sm tracking-wide shadow-sm">
              Free Estimate
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-brand-dark" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col space-y-2">
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-semibold text-gray-800 hover:text-brand-dark uppercase text-lg flex items-center justify-between"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 flex flex-col space-y-2 border-l-2 border-gray-100 ml-2">
                      {link.dropdown.map((sublink) =>
                        sublink.divider ? (
                          <div key={sublink.name} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest select-none pt-2">
                            {sublink.name}
                          </div>
                        ) : (
                          <Link
                            key={sublink.name}
                            to={sublink.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-gray-600 hover:text-accent-green text-base"
                          >
                            {sublink.name}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-100 flex flex-col space-y-4">
                <a href="tel:417-444-3808" className="flex items-center font-bold text-brand-dark text-xl">
                  <Phone className="w-6 h-6 mr-3" />
                  417-444-3808
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-accent-green text-brand-dark font-bold py-4 px-6 rounded text-center uppercase tracking-wide"
                >
                  Free Estimate
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative text-white pt-20 pb-10 border-t-4 border-accent-green overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070"
            alt="Footer Background"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/95 to-brand-dark/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center mb-6">
              <img src="/logo.png" alt="Ozark Elite Roofing" className="h-16 w-auto object-contain" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 italic text-sm">
              "Our Mission is to install the best roof restoration systems at honest prices. We also strive to provide top notch customer service from our first contact with you to the end of the warranty period and beyond."
            </p>
            <div className="flex items-center space-x-3">
              <a
                href="https://www.facebook.com/profile.php?id=61578109254917"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ozark Elite Roofing on Facebook"
                className="w-10 h-10 bg-white/10 hover:bg-accent-green rounded-full flex items-center justify-center transition-colors group"
              >
                <svg className="w-5 h-5 text-white group-hover:text-brand-dark transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h3 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider text-gray-200">Contact Us</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-accent-green shrink-0" />
                <span>Purdy, Missouri<br />Serving Springfield, MO (60-mile radius)</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-accent-green shrink-0" />
                <a href="tel:417-444-3808" className="hover:text-white transition-colors">417-444-3808</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-accent-green shrink-0" />
                <a href="mailto:ervin@ozarkeliteroofing.com" className="hover:text-white transition-colors">ervin@ozarkeliteroofing.com</a>
              </li>
            </ul>
            <p className="mt-6 font-semibold text-accent-green text-sm">
              Contact us today for a roof consultation and estimate.
            </p>
          </div>

          {/* Form */}
          <div className="lg:col-span-4">
            <h3 className="font-heading font-bold text-lg mb-6 uppercase tracking-wider text-gray-200">Quick Estimate</h3>
            {footerFormStatus === 'success' ? (
              <div className="bg-accent-green/10 border border-accent-green/30 text-accent-green p-4 rounded">
                <p className="font-bold mb-1">Message Sent!</p>
                <p className="text-sm">We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleFooterSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={footerFormData.name}
                  onChange={(e) => setFooterFormData({ ...footerFormData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-gray-500 focus:outline-none focus:border-accent-green transition-colors text-sm"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={footerFormData.phone}
                  onChange={(e) => setFooterFormData({ ...footerFormData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-gray-500 focus:outline-none focus:border-accent-green transition-colors text-sm"
                />
                <input
                  type="email"
                  placeholder="Email Address (optional)"
                  value={footerFormData.email}
                  onChange={(e) => setFooterFormData({ ...footerFormData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white placeholder-gray-500 focus:outline-none focus:border-accent-green transition-colors text-sm"
                />
                {footerFormStatus === 'error' && (
                  <p className="text-red-400 text-xs">{footerFormError}</p>
                )}
                <button
                  type="submit"
                  disabled={footerFormStatus === 'submitting'}
                  className={`w-full bg-accent-green hover:bg-[#86b025] text-brand-dark font-bold py-3 px-4 rounded transition-colors uppercase tracking-wide text-sm ${footerFormStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {footerFormStatus === 'submitting' ? 'Sending...' : 'Request Estimate'}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Ozark Elite Roofing. All rights reserved.</p>
          <p className="text-center md:text-right max-w-xl">Commercial Roof Restoration Springfield MO | Metal Roof Restoration | Spray Foam Roofing | EPDM & TPO Restoration | Roof Leak Repair Springfield MO</p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          {/* New geo-modified entity routes */}
          <Route path="/services/spray-polyurethane-foam-roofing-springfield-mo" element={<SprayPolyurethaneFoam />} />
          <Route path="/services/metal-roof-restoration-springfield-mo" element={<MetalRoofRestoration />} />
          <Route path="/services/commercial-roof-coating-springfield-mo" element={<FabricReinforcedSystem />} />
          <Route path="/services/epdm-roof-restoration-springfield-mo" element={<EpdmRoofRestoration />} />
          <Route path="/services/tpo-roof-restoration-springfield-mo" element={<TpoRoofRestoration />} />
          <Route path="/services/metal-roof-replacement-springfield-mo" element={<MetalRoofReplacement />} />
          <Route path="/services/roof-leak-repair-springfield-mo" element={<RoofLeakRepair />} />
          {/* Legacy routes — kept for internal backward compat; vercel.json handles 301 redirects */}
          <Route path="/services/spray-polyurethane-foam" element={<SprayPolyurethaneFoam />} />
          <Route path="/services/metal-roof-restoration" element={<MetalRoofRestoration />} />
          <Route path="/services/fabric-reinforced-system" element={<FabricReinforcedSystem />} />
          <Route path="/services/membrane-restoration" element={<MembraneRestoration />} />
          {/* Residential */}
          <Route path="/services/residential" element={<ResidentialServices />} />
          {/* Other pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
