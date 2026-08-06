import { CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import PageSEO, { buildLocalBusinessSchema } from '../components/PageSEO';

const PATH = '/services/metal-roof-restoration-springfield-mo';

const schema = buildLocalBusinessSchema({
  path: PATH,
  service: {
    name: 'Metal Roof Restoration',
    description: 'Commercial metal roof restoration in Springfield, MO. Stops leaks at seams and fasteners, inhibits rust, and applies a reflective acrylic coating system.',
  },
});

export default function MetalRoofRestoration() {
  return (
    <div className="flex flex-col">
      <PageSEO
        title="Metal Roof Restoration Springfield MO | Stop Leaks & Rust | Ozark Elite Roofing"
        description="Leaking metal roof in Springfield, MO? Ozark Elite Roofing stops leaks, inhibits rust, and restores your metal roof with a reflective coating — no replacement needed. Free estimate."
        path={PATH}
        schema={schema}
        image="/Benchmark Top Coat_1.JPG"
      />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[440px] flex items-center justify-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img src="/Benchmark Top Coat_1.JPG" alt="Metal Roof Restoration Springfield MO" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-accent-green/20 text-accent-green font-bold text-sm tracking-wider uppercase mb-4 border border-accent-green/30">
              Springfield, MO · Commercial Metal Roofing
            </span>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-4 tracking-tight uppercase">
              Metal Roof <span className="text-accent-green">Restoration</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Stop leaks at seams and fasteners. Halt rust. Add 10–15 years to your metal roof — at a fraction of replacement cost.
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
                Why Is My Metal Roof Leaking?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Metal roofs typically fail at three points: (1) <strong>fasteners</strong> — screws and rivets back out over time from years of thermal expansion and contraction; (2) <strong>seams</strong> — where two panels overlap, the sealant ages, dries out, and fails; (3) <strong>transitions</strong> — where the roof meets walls, parapets, curbs, or penetrations. Our restoration system addresses all three in a single application.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide border-l-4 border-accent-green pl-4">
                Can a Metal Roof Be Restored Instead of Replaced?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                In most cases, yes. If the metal panels are structurally sound — not rusted completely through — restoration is not only possible but far more cost-effective. We treat the surface with Rust Off to neutralize active rust, re-seal all fasteners and seams with Kwik Kaulk, and apply a UV-resistant acrylic coating system that waterproofs and protects the metal for years to come.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide border-l-4 border-accent-green pl-4">
                How Long Does Metal Roof Coating Last?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With a quality acrylic coating system applied correctly, you can expect 10–15 years of additional service life from a restored metal roof. We back our work with a warranty, and the reflective finish qualifies as an Energy Star product in most applications.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide border-l-4 border-accent-green pl-4">
                The Restoration Process
              </h2>
              <ol className="space-y-3">
                {[
                  'Roof inspection and moisture probe survey',
                  'Power wash surface with Rust Off treatment to neutralize active rust',
                  'Kwik Kaulk all fastener heads and seam laps',
                  'Apply base coat with reinforcing fabric embedded at seams',
                  'Apply reflective acrylic finish coat',
                  'Final inspection and warranty documentation',
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
                'Stops leaks at seams, laps, and fastener heads',
                'Rust-inhibiting treatment halts active corrosion',
                'Reflective white finish reduces cooling costs',
                '40–60% less expensive than full roof replacement',
                'Typical job completed in 1–3 days',
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
            <img src="/Copy of DJI_0329.JPG" alt="Metal roof coating application Springfield MO" className="relative z-10 rounded-xl shadow-2xl w-full object-cover h-[460px]" />
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 mb-6">Not sure if your metal roof qualifies for restoration? We offer a free inspection.</p>
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
              { label: 'Metal Roof Replacement', path: '/services/metal-roof-replacement-springfield-mo' },
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
