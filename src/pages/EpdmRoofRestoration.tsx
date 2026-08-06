import { CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import PageSEO, { buildLocalBusinessSchema } from '../components/PageSEO';

const PATH = '/services/epdm-roof-restoration-springfield-mo';

const schema = buildLocalBusinessSchema({
  path: PATH,
  service: {
    name: 'EPDM Roof Restoration',
    description: 'EPDM rubber roof restoration and coating for commercial buildings in Springfield, MO. Extends membrane life without full replacement.',
  },
});

export default function EpdmRoofRestoration() {
  return (
    <div className="flex flex-col">
      <PageSEO
        title="EPDM Roof Restoration Springfield MO | Membrane Coating | Ozark Elite Roofing"
        description="Is your EPDM rubber roof shrinking, cracking, or leaking in Springfield, MO? Ozark Elite Roofing restores EPDM membranes at a fraction of replacement cost. Free estimate."
        path={PATH}
        schema={schema}
        image="/SinglePly_11.jpg"
      />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[440px] flex items-center justify-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src="/SinglePly_11.jpg" alt="EPDM Roof Restoration Springfield MO" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-accent-green/20 text-accent-green font-bold text-sm tracking-wider uppercase mb-4 border border-accent-green/30">
              Springfield, MO · EPDM Rubber Roofing
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-4 tracking-tight uppercase">
              EPDM Roof <span className="text-accent-green">Restoration</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Shrinking, cracking, or leaking EPDM membrane? We restore it — without the cost and disruption of full replacement.
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
                What Are the Signs My EPDM Roof Needs Restoration?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                EPDM (ethylene propylene diene monomer) rubber roofs are durable, but they show their age in recognizable ways: shrinkage and edge pulls where the membrane pulls away from walls and flashings; cracking or blistering of the surface from UV exposure; seam and flashing failures where the adhesive has lost its bond; and ponding water in areas that previously drained. When these issues appear, most building owners assume full replacement is the only answer. Often, it's not.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide border-l-4 border-accent-green pl-4">
                Can You Coat Over an EPDM Roof?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Yes — provided the existing membrane is still structurally bonded to the deck and hasn't been compromised by moisture infiltration beneath the membrane. We perform a non-destructive moisture survey before recommending a coating approach. For qualifying roofs, we apply a specially formulated EPDM-compatible coating system that bonds to the rubber surface, restores flexibility, seals problem seams, and provides a bright, highly reflective finish.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide border-l-4 border-accent-green pl-4">
                How Much Does EPDM Restoration Cost vs. Replacement?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                EPDM replacement typically runs $5–$10 per square foot installed — plus demo and disposal. Restoration through a coating system typically runs 40–55% of that figure, with no tear-off, no dumpsters, and significantly less disruption to your facility. For a 10,000 sq ft roof, that difference can be $25,000 or more.
              </p>
            </motion.div>

          </div>

          {/* Benefits */}
          <div className="mt-16 bg-gray-50 rounded-2xl p-10 border border-gray-100">
            <h2 className="text-xl font-heading font-bold text-gray-900 mb-6 uppercase tracking-wide">Key Benefits</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Extends service life of existing EPDM by 10–15 years',
                'Eliminates shrinkage-related edge and corner failures',
                'Highly reflective white finish — significant energy savings',
                'No tear-off required — less disruption to your facility',
                'Compatible with ballasted and fully-adhered EPDM systems',
                'Backed by warranty — materials and labor',
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
            <img src="/SinglePly_9.jpg" alt="EPDM roof restoration coating Springfield MO" className="relative z-10 rounded-xl shadow-2xl w-full object-cover h-[460px]" />
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-6">We offer a free inspection to determine if your EPDM roof qualifies for restoration coating.</p>
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
              { label: 'TPO Roof Restoration', path: '/services/tpo-roof-restoration-springfield-mo' },
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
