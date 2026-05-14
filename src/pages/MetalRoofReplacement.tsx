import { CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

const DOMAIN = 'https://ozark-elite-roofing.vercel.app';

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "RoofingContractor"],
  "name": "Ozark Elite Roofing",
  "url": `${DOMAIN}/services/metal-roof-replacement-springfield-mo`,
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
        "name": "Metal Roof Replacement",
        "serviceType": "Metal Roof Replacement",
        "description": "Commercial metal roof replacement in Springfield, MO. Expert installation of standing seam and exposed-fastener metal roofing systems.",
        "areaServed": "Springfield, MO",
        "provider": { "@type": "LocalBusiness", "name": "Ozark Elite Roofing" }
      }
    }]
  }
};

export default function MetalRoofReplacement() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Metal Roof Replacement Springfield MO | Commercial | Ozark Elite Roofing</title>
        <meta name="description" content="When restoration isn't enough, Ozark Elite Roofing provides commercial metal roof replacement in Springfield, MO. Expert installation. Long-term warranty. Free estimate." />
        <link rel="canonical" href={`${DOMAIN}/services/metal-roof-replacement-springfield-mo`} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[440px] flex items-center justify-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src="/DJI_0036 (1).jpg" alt="Metal Roof Replacement Springfield MO" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-accent-green/20 text-accent-green font-bold text-sm tracking-wider uppercase mb-4 border border-accent-green/30">
              Springfield, MO · Commercial Metal Roofing
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-4 tracking-tight uppercase">
              Metal Roof <span className="text-accent-green">Replacement</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              When restoration is no longer the right answer — we install new commercial metal roofing systems built to last 30–50 years.
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
                When Is Metal Roof Replacement the Right Choice?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Not every metal roof can — or should — be restored. Replacement is the right call when the metal panels are rusted completely through; when there is significant structural damage to the decking beneath; when the roof has already received multiple coatings and the surface will no longer accept another; or when the building owner wants a full system upgrade with a new long-term warranty. We will always tell you honestly which option is right for your building — even if that means recommending restoration over replacement.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide border-l-4 border-accent-green pl-4">
                What Type of Metal Roofing Do You Install?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We install high-quality standing seam and exposed-fastener metal panels for commercial and industrial applications. We work with facility managers and building owners to select the right panel profile, gauge, and finish that balances long-term performance, durability, and your budget. All installations are done by trained crews with experience on commercial structures.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide border-l-4 border-accent-green pl-4">
                How Long Does a New Metal Roof Last?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A properly installed commercial metal roof should last 30–50 years with minimal maintenance. Pair it with a periodic coating renewal every 15–20 years and it can effectively become a permanent roofing solution for the life of the building.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide border-l-4 border-accent-green pl-4">
                Should I Choose Restoration or Replacement?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                If your metal roof is leaking but the panels are structurally intact and not rusted through, restoration almost always makes more financial sense. It costs 40–60% less and can add 10–15 years of life. If the panels are compromised or you need a fresh warranty on the entire system, replacement is the better long-term investment. We'll give you an honest assessment of which path fits your building after a free roof inspection.
              </p>
            </motion.div>

          </div>

          {/* Benefits */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-10 border border-gray-100">
            <h2 className="text-xl font-heading font-bold text-gray-900 mb-6 uppercase tracking-wide">Key Benefits</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Expert installation on commercial and industrial buildings',
                'Multiple panel profiles and finishes available',
                'Long-term warranty on materials and labor',
                'Improves building value and energy performance',
                'Option to install over existing decking in qualifying situations',
                'Serving Springfield, Purdy, Joplin, and surrounding areas',
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
            <img src="/Copy of DJI_0006 (1).jpg" alt="Commercial metal roof replacement Springfield MO" className="relative z-10 rounded-xl shadow-2xl w-full object-cover h-[460px]" />
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-6">Not sure if you need restoration or replacement? We'll tell you honestly after a free inspection.</p>
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
              { label: 'Metal Roof Restoration', path: '/services/metal-roof-restoration-springfield-mo' },
              { label: 'Spray Foam Roofing', path: '/services/spray-polyurethane-foam-roofing-springfield-mo' },
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
