import { CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

const DOMAIN = 'https://ozark-elite-roofing.vercel.app';

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "RoofingContractor"],
  "name": "Ozark Elite Roofing",
  "url": `${DOMAIN}/services/spray-polyurethane-foam-roofing-springfield-mo`,
  "telephone": "+14174443808",
  "email": "ervin@ozarkeliteroofing.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Purdy",
    "addressRegion": "MO",
    "postalCode": "65734",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 36.8167, "longitude": -93.9238 },
    "geoRadius": "96560"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "itemListElement": [{
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Spray Polyurethane Foam Roofing",
        "serviceType": "Spray Polyurethane Foam Roofing",
        "description": "Seamless, 100% waterproof SPF roofing system installed on commercial buildings in Springfield, MO. Highest R-value per inch of any commercial roofing material.",
        "areaServed": "Springfield, MO",
        "provider": { "@type": "LocalBusiness", "name": "Ozark Elite Roofing" }
      }
    }]
  }
};

export default function SprayPolyurethaneFoam() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Spray Foam Roofing Springfield MO | Ozark Elite Roofing</title>
        <meta name="description" content="Ozark Elite Roofing installs spray polyurethane foam (SPF) roofing on commercial buildings in Springfield, MO. 100% waterproof. Highest R-value. Free inspection." />
        <link rel="canonical" href={`${DOMAIN}/services/spray-polyurethane-foam-roofing-springfield-mo`} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[440px] flex items-center justify-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src="/SPF_11.jpg" alt="Spray Polyurethane Foam Roofing Springfield MO" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-accent-green/20 text-accent-green font-bold text-sm tracking-wider uppercase mb-4 border border-accent-green/30">
              Springfield, MO · Commercial Roofing
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-4 tracking-tight uppercase">
              Spray Polyurethane Foam <span className="text-accent-green">Roofing</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              100% seamless, fully waterproof, and the highest R-value of any commercial roofing material. Applied over your existing roof — no tear-off.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link to="/contact" className="bg-accent-green hover:bg-[#86b025] text-brand-dark font-bold py-3 px-7 rounded uppercase tracking-wide transition-all hover:scale-105 flex items-center">
                Get a Free Inspection <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="tel:417-444-3808" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-3 px-7 rounded uppercase tracking-wide transition-all flex items-center">
                <Phone className="w-4 h-4 mr-2" /> 417-444-3808
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">

          {/* Q&A Section */}
          <div className="space-y-14">

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide border-l-4 border-accent-green pl-4">
                What Is Spray Polyurethane Foam Roofing?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Spray polyurethane foam — commonly called SPF or spray foam roofing — is a liquid-applied system that expands on contact to form a seamless, monolithic insulation and waterproofing barrier. Unlike traditional materials that sit on top of a deck, SPF fully adheres and conforms to any shape, sealing every penetration and curb without joints or seams. That's important because seam failure is the #1 cause of commercial roof leaks.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide border-l-4 border-accent-green pl-4">
                Is Spray Foam a Good Commercial Roofing System?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Yes — when installed correctly by a trained applicator, SPF is one of the most durable and energy-efficient commercial roofing systems available. It has been used successfully on flat and low-slope commercial roofs for over 50 years. It's also renewable: when the protective topcoat wears, a new elastomeric coating is applied over the existing foam — no tear-off, no landfill, no business disruption.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide border-l-4 border-accent-green pl-4">
                How Long Does a Spray Foam Roof Last?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A properly installed SPF roof, maintained with periodic re-coating, can last the life of the building. The foam itself does not degrade — only the UV-protective elastomeric topcoat needs renewal, typically every 10–20 years depending on exposure and topcoat thickness.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide border-l-4 border-accent-green pl-4">
                What Does Spray Foam Roofing Cost vs. Replacement?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                SPF roofing typically costs 30–50% less than a full tear-off and replacement. Because it installs over the existing roof in most cases, there's no demolition cost, no disposal fee, and no multi-day business disruption from a large crew working overhead.
              </p>
            </motion.div>

          </div>

          {/* Benefits */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-10 border border-gray-100">
            <h2 className="text-xl font-heading font-bold text-gray-900 mb-6 uppercase tracking-wide">Key Benefits</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Highest R-value per inch of any commercial roofing material',
                '100% seamless — eliminates seam failure, the #1 cause of leaks',
                'Self-flashing around HVAC units, drains, skylights, and penetrations',
                'Adds structural rigidity — foam is fully adhered to the deck',
                'Renewable system — re-coat extends life without tear-off',
                'Serving Springfield, Purdy, Joplin, and the surrounding 60-mile area',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent-green mr-3 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-accent-green/15 transform translate-x-4 translate-y-4 rounded-xl" />
            <img src="/SPF_7.jpg" alt="SPF roofing application Springfield MO" className="relative z-10 rounded-xl shadow-2xl w-full object-cover h-[460px]" />
          </div>

          {/* CTA inline */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-6">Ready to find out if SPF roofing is right for your building?</p>
            <Link to="/contact" className="inline-flex items-center bg-brand-dark hover:bg-gray-800 text-white font-bold py-4 px-10 rounded transition-colors uppercase tracking-wide text-lg group">
              Schedule a Free Roof Inspection
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-gray-50 py-14 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-sm font-bold text-accent-green uppercase tracking-widest mb-6">Also Consider</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Metal Roof Restoration', path: '/services/metal-roof-restoration-springfield-mo' },
              { label: 'Commercial Roof Coating', path: '/services/commercial-roof-coating-springfield-mo' },
              { label: 'Roof Leak Repair', path: '/services/roof-leak-repair-springfield-mo' },
            ].map(s => (
              <Link key={s.label} to={s.path} className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-accent-green/50 hover:shadow-md transition-all text-center text-sm font-semibold text-gray-700 hover:text-accent-green">
                {s.label} <ArrowRight className="inline w-4 h-4 ml-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
