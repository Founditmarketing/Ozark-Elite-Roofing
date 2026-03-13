import React from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function SprayPolyurethaneFoam() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2070" 
            alt="Spray Polyurethane Foam" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-4 tracking-tight uppercase">
              Spray Polyurethane <span className="text-accent-green">Foam (SPF)</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              High R-value insulation, 100% waterproof, and seamless protection for your commercial roof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 uppercase tracking-wide">
              Superior Insulation & Waterproofing
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Spray Polyurethane Foam (SPF) is a high-performance roofing system that provides excellent insulation and waterproofing in a single application. It expands to form a seamless, monolithic barrier that seals all penetrations and conforms to any roof shape.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Highest R-value per inch of any roofing material',
                'Seamless, monolithic, and fully adhered',
                'Self-flashing around penetrations',
                'Reduces thermal shock and building movement',
                'Can be applied over most existing roof systems'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-accent-green mr-3 shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-flex items-center bg-brand-dark hover:bg-gray-800 text-white font-bold py-4 px-8 rounded transition-colors uppercase tracking-wide">
              Request an Estimate <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-accent-green/20 transform translate-x-4 translate-y-4 rounded-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000" 
              alt="SPF Application" 
              className="relative z-10 rounded-xl shadow-2xl w-full object-cover h-[500px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
