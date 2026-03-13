import React from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function MetalRoofRestoration() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/Benchmark Top Coat_1.JPG"
            alt="Metal Roof Restoration"
            className="w-full h-full object-cover opacity-30"
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
              Metal Roof <span className="text-accent-green">Restoration</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Rust inhibition and leak prevention with advanced acrylic coating systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6 uppercase tracking-wide">
              Stop Leaks and Rust in Their Tracks
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our Metal Roof Restoration system is a complete waterproofing system for metal roofs. It stops leaks, inhibits rust, and provides an energy-efficient, long-lasting, attractive finish coat which will extend the life of your roof for years.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Stops leaks at seams and fasteners',
                'Inhibits rust and prevents future corrosion',
                'Reflective white finish lowers cooling costs',
                'Extends the life of your existing metal roof',
                'Fraction of the cost of metal roof replacement'
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
              src="/BA2F9B1339D1F5041541015CC36761F7.jpg"
              alt="Metal Roof Coating"
              className="relative z-10 rounded-xl shadow-2xl w-full object-cover h-[500px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
