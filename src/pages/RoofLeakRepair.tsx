import { CheckCircle2, ArrowRight, Phone, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

const DOMAIN = 'https://ozark-elite-roofing.vercel.app';

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "RoofingContractor"],
  "name": "Ozark Elite Roofing",
  "url": `${DOMAIN}/services/roof-leak-repair-springfield-mo`,
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
        "name": "Roof Leak Repair",
        "serviceType": "Roof Leak Repair",
        "description": "Commercial and residential roof leak diagnosis and repair in Springfield, MO. Fast response. Accurate source identification. Written estimate before work begins.",
        "areaServed": "Springfield, MO",
        "provider": { "@type": "LocalBusiness", "name": "Ozark Elite Roofing" }
      }
    }]
  }
};

export default function RoofLeakRepair() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Roof Leak Repair Springfield MO | Commercial & Residential | Ozark Elite Roofing</title>
        <meta name="description" content="Active roof leak in Springfield, MO? Ozark Elite Roofing diagnoses and repairs leaking commercial and residential roofs. Fast response. Written estimate. Call 417-444-3808." />
        <link rel="canonical" href={`${DOMAIN}/services/roof-leak-repair-springfield-mo`} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[440px] flex items-center justify-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src="/Copy of DJI_0086.JPG" alt="Roof Leak Repair Springfield MO" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-accent-green/20 text-accent-green font-bold text-sm tracking-wider uppercase mb-4 border border-accent-green/30">
              Springfield, MO · Commercial & Residential
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-4 tracking-tight uppercase">
              Roof Leak <span className="text-accent-green">Repair</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              We find the actual source of the leak — not just the symptom. Fast response, written estimate, and repairs that hold.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a href="tel:417-444-3808" className="bg-accent-green hover:bg-[#86b025] text-brand-dark font-bold py-3 px-7 rounded uppercase tracking-wide transition-all hover:scale-105 flex items-center">
                <Phone className="w-5 h-5 mr-2" /> Call Now: 417-444-3808
              </a>
              <Link to="/contact" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-3 px-7 rounded uppercase tracking-wide transition-all flex items-center">
                Request an Inspection <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="bg-accent-green py-4">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-center gap-3 text-brand-dark font-bold text-center">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <span>Active leak? Call us at <a href="tel:417-444-3808" className="underline">417-444-3808</a> — we prioritize active leak situations.</span>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">

          <div className="space-y-14">

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide border-l-4 border-accent-green pl-4">
                Where Is My Roof Leaking From?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Most commercial roof leaks aren't where you think they are. Water enters at one point and travels along the roof deck — or through the insulation — before dripping through the ceiling, sometimes 10–20 feet away from the visible wet spot inside. The most common sources of commercial and residential roof leaks are: failed seams and laps, backed-out or missing fasteners, deteriorated flashing at walls and penetrations, clogged drains causing ponding water, and cracks or splits around HVAC curbs and equipment. We find the actual source, not just treat the symptom.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide border-l-4 border-accent-green pl-4">
                What Happens During a Leak Inspection?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We start with a visual roof walk and a probe or infrared scan to locate areas of wet insulation and membrane failures that aren't visible from the surface. We then identify the true source of infiltration — not just the wet area — and provide you with a written assessment of what needs to be done and what it will cost before any work begins. If you approve, we begin repairs as quickly as possible.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide border-l-4 border-accent-green pl-4">
                What Does Roof Leak Repair Cost?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Minor repairs — re-sealing a flashing, re-caulking backed-out fasteners, patching a small membrane area — can be very affordable. More extensive seam failures or widespread deterioration may indicate that full restoration is more cost-effective than repeated patching. We'll give you a written estimate before any work begins, and if full restoration would save you money over time, we'll tell you that clearly.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide border-l-4 border-accent-green pl-4">
                Do You Repair Both Commercial and Residential Roofs?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Yes. While our primary focus is commercial and industrial roofing, we repair residential roofs as well — particularly metal roofs, flat sections, and low-slope areas. We serve Springfield, Purdy, Joplin, and the surrounding 60-mile radius.
              </p>
            </motion.div>

          </div>

          {/* Common leak sources */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-10 border border-gray-100">
            <h2 className="text-xl font-heading font-bold text-gray-900 mb-6 uppercase tracking-wide">What We Look For</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Failed seams and laps (most common)',
                'Backed-out or corroded fasteners',
                'Deteriorated or missing flashings',
                'Clogged drains and ponding water',
                'Cracks around HVAC curbs and equipment',
                'Blistered or delaminated membrane sections',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent-green mr-3 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-6">Have an active leak? Don't wait — contact us now and we'll prioritize your inspection.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:417-444-3808" className="inline-flex items-center bg-accent-green hover:bg-[#86b025] text-brand-dark font-bold py-4 px-10 rounded transition-colors uppercase tracking-wide text-lg">
                <Phone className="w-5 h-5 mr-2" /> Call 417-444-3808
              </a>
              <Link to="/contact" className="inline-flex items-center bg-brand-dark hover:bg-gray-800 text-white font-bold py-4 px-10 rounded transition-colors uppercase tracking-wide text-lg group">
                Request Inspection
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-gray-50 py-14 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-sm font-bold text-accent-green uppercase tracking-widest mb-6">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Metal Roof Restoration', path: '/services/metal-roof-restoration-springfield-mo' },
              { label: 'EPDM Roof Restoration', path: '/services/epdm-roof-restoration-springfield-mo' },
              { label: 'TPO Roof Restoration', path: '/services/tpo-roof-restoration-springfield-mo' },
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
