import { CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

const DOMAIN = 'https://ozark-elite-roofing.vercel.app';

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "RoofingContractor"],
  "name": "Ozark Elite Roofing",
  "url": `${DOMAIN}/services/tpo-roof-restoration-springfield-mo`,
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
        "name": "TPO Roof Restoration",
        "serviceType": "TPO Roof Restoration",
        "description": "TPO single-ply membrane restoration and coating for commercial properties in Springfield, MO. Seam repair and re-coating — no full replacement.",
        "areaServed": "Springfield, MO",
        "provider": { "@type": "LocalBusiness", "name": "Ozark Elite Roofing" }
      }
    }]
  }
};

export default function TpoRoofRestoration() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>TPO Roof Restoration Springfield MO | Coating & Repair | Ozark Elite Roofing</title>
        <meta name="description" content="Aging TPO roof in Springfield, MO? Ozark Elite Roofing restores and recoats TPO single-ply membranes to stop leaks and extend service life. No replacement needed. Free inspection." />
        <link rel="canonical" href={`${DOMAIN}/services/tpo-roof-restoration-springfield-mo`} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[440px] flex items-center justify-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src="/SinglePly_5.JPG" alt="TPO Roof Restoration Springfield MO" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-accent-green/20 text-accent-green font-bold text-sm tracking-wider uppercase mb-4 border border-accent-green/30">
              Springfield, MO · TPO Single-Ply Roofing
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-4 tracking-tight uppercase">
              TPO Roof <span className="text-accent-green">Restoration</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Failing TPO seams and surface degradation — restored with a coating system that extends membrane life by 10+ years.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link to="/contact" className="bg-accent-green hover:bg-[#86b025] text-brand-dark font-bold py-3 px-7 rounded uppercase tracking-wide transition-all hover:scale-105 flex items-center">
                Get a Free Estimate <ArrowRight className="ml-2 w-5 h-5" />
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

          <div className="space-y-14">

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide border-l-4 border-accent-green pl-4">
                Why Do TPO Roofs Fail Early?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                TPO (thermoplastic polyolefin) membranes are popular in commercial construction for their energy efficiency and low cost — but they have a well-known weakness: heat-welded seams. Over time, UV degradation, thermal cycling, and building movement stress these seams, eventually causing separation and leaks. Thinner TPO membranes (45 mil) are especially vulnerable. Once a seam begins to fail, water infiltration can spread quickly beneath the membrane before it shows up on the ceiling inside.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide border-l-4 border-accent-green pl-4">
                Can a TPO Roof Be Restored Without Replacement?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                In most cases, yes. If the membrane is still properly bonded to the substrate and moisture infiltration beneath the membrane is limited, a TPO-compatible coating system can restore the waterproofing layer. We re-weld or seal any compromised seams, prime the TPO surface with a compatible primer, and apply a fabric-reinforced base coat followed by a reflective finish coat. The result: a restored, watertight roof with a fresh reflective surface.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide border-l-4 border-accent-green pl-4">
                The TPO Restoration Process
              </h2>
              <ol className="space-y-3">
                {[
                  'Roof walk and seam-by-seam inspection',
                  'Infrared or probe moisture scan to locate subsurface wet areas',
                  'Re-weld or seal any compromised seam areas',
                  'Apply TPO-compatible primer to the membrane surface',
                  'Apply fabric-reinforced base coat at seams and transitions',
                  'Apply reflective finish coat across entire field',
                  'Warranty documentation',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="shrink-0 w-7 h-7 rounded-full bg-accent-green text-brand-dark font-black text-sm flex items-center justify-center">{i + 1}</span>
                    <span className="text-gray-700 text-lg pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </motion.div>

          </div>

          {/* Benefits */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-10 border border-gray-100">
            <h2 className="text-xl font-heading font-bold text-gray-900 mb-6 uppercase tracking-wide">Key Benefits</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Addresses the #1 failure point — seam separation',
                'Highly reflective finish restores energy performance',
                '40–55% less expensive than full TPO replacement',
                'Extends membrane life by 10+ years',
                'Most jobs completed in 1–2 days',
                'Backed by a product and labor warranty',
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
            <img src="/SinglePly_7.JPG" alt="TPO roof coating restoration Springfield MO" className="relative z-10 rounded-xl shadow-2xl w-full object-cover h-[460px]" />
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-6">We inspect your TPO roof at no charge to determine the most cost-effective path forward.</p>
            <Link to="/contact" className="inline-flex items-center bg-brand-dark hover:bg-gray-800 text-white font-bold py-4 px-10 rounded transition-colors uppercase tracking-wide text-lg group">
              Schedule a Free Inspection
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-gray-50 py-14 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-sm font-bold text-accent-green uppercase tracking-widest mb-6">Also Consider</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'EPDM Roof Restoration', path: '/services/epdm-roof-restoration-springfield-mo' },
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
