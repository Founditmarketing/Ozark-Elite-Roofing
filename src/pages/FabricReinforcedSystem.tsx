import { CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

const DOMAIN = 'https://ozark-elite-roofing.vercel.app';

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "RoofingContractor"],
  "name": "Ozark Elite Roofing",
  "url": `${DOMAIN}/services/commercial-roof-coating-springfield-mo`,
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
        "name": "Commercial Roof Coating",
        "serviceType": "Commercial Roof Coating",
        "description": "Fabric-reinforced commercial roof coating system for flat and low-slope roofs in Springfield, MO. Applied over existing roofing — no tear-off required.",
        "areaServed": "Springfield, MO",
        "provider": { "@type": "LocalBusiness", "name": "Ozark Elite Roofing" }
      }
    }]
  }
};

export default function FabricReinforcedSystem() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Commercial Roof Coating Springfield MO | Fabric Reinforced Systems | Ozark Elite Roofing</title>
        <meta name="description" content="Ozark Elite Roofing applies fabric-reinforced commercial roof coatings to flat and low-slope roofs in Springfield, MO. No tear-off required. Free inspection." />
        <link rel="canonical" href={`${DOMAIN}/services/commercial-roof-coating-springfield-mo`} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[440px] flex items-center justify-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src="/280C41C0688BE6D81C8C3A3C38D46C55.jpg" alt="Commercial Roof Coating Springfield MO" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-accent-green/20 text-accent-green font-bold text-sm tracking-wider uppercase mb-4 border border-accent-green/30">
              Springfield, MO · Commercial Flat Roofing
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-4 tracking-tight uppercase">
              Commercial <span className="text-accent-green">Roof Coating</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Fabric-reinforced waterproofing for flat and low-slope commercial roofs. No tear-off. Applied over your existing system in 1–2 days.
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

          <div className="space-y-14">

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide border-l-4 border-accent-green pl-4">
                What Is a Commercial Roof Coating?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A commercial roof coating is a fluid-applied membrane that is rolled or sprayed over an existing roof surface to restore its waterproofing, reflectivity, and structural integrity. Unlike a replacement, a coating works with your existing roof — no tear-off, no dumpsters, no disruption to your business operations. When the existing surface is still structurally sound, coating is almost always the smarter financial decision.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide border-l-4 border-accent-green pl-4">
                What Is a Fabric Reinforced Roof System?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our fabric-reinforced system takes standard coating a step further. A layer of polyester reinforcing fabric (Spunflex) is embedded into the base coat at all seams, transitions, and field areas prone to movement. This dramatically increases tensile strength and prevents the coating from splitting or delaminating — even under hail impact or foot traffic from rooftop equipment maintenance.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide border-l-4 border-accent-green pl-4">
                What Types of Roofs Can Be Coated?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We coat most commercial flat and low-slope roof types, including built-up (BUR) systems and modified bitumen cap sheet roofs. If you have an older gravel or tar roof that is showing its age, we can often coat it without removal. If you're unsure whether your roof qualifies, we'll inspect it at no charge and give you an honest recommendation.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide border-l-4 border-accent-green pl-4">
                How Does Roof Coating Save Money?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The biggest cost driver in commercial roofing is tear-off and disposal. An average commercial flat roof can generate tons of waste that costs thousands to remove and haul away — before a single new material is installed. Coating eliminates that cost entirely. The reflective white finish also reduces cooling loads, which shows up on every utility bill for the life of the coating.
              </p>
            </motion.div>

          </div>

          {/* Benefits */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-10 border border-gray-100">
            <h2 className="text-xl font-heading font-bold text-gray-900 mb-6 uppercase tracking-wide">Key Benefits</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Seam-reinforced with Spunflex fabric for superior durability',
                'Expands and contracts with the roof — no cracking or delaminating',
                'Energy Star–rated reflective finish reduces cooling loads',
                'Applied over most existing commercial flat roof substrates',
                'Backed by a manufacturer\'s warranty',
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
            <img src="/7A4D2A06A4BF8AAA326CCB5FA6451695.jpg" alt="Commercial roof coating application Springfield MO" className="relative z-10 rounded-xl shadow-2xl w-full object-cover h-[460px]" />
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-6">Get a free inspection to find out if your flat roof qualifies for coating restoration.</p>
            <Link to="/contact" className="inline-flex items-center bg-brand-dark hover:bg-gray-800 text-white font-bold py-4 px-10 rounded transition-colors uppercase tracking-wide text-lg group">
              Schedule a Free Roof Inspection
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
              { label: 'TPO Roof Restoration', path: '/services/tpo-roof-restoration-springfield-mo' },
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
