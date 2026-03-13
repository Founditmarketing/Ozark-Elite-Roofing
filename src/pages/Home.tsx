import { Link } from 'react-router-dom';
import { ShieldCheck, TrendingDown, Clock, ArrowRight, CheckCircle2, Phone } from 'lucide-react';
import { motion } from 'motion/react';

const tileContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const tileItem = {
  hidden: { opacity: 0, y: -40, rotateX: 20, transformOrigin: "top" },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 200, damping: 20 }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden shadow-[inset_0_-20px_40px_rgba(0,0,0,0.5)]">
        <div className="absolute inset-0">
          <img
            src="/hero-bg.jpg"
            alt="Commercial Roof Restoration"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent-green/20 text-accent-green font-bold text-sm tracking-wider uppercase mb-6 border border-accent-green/30">
              Commercial Roofing Specialists
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-6 leading-tight tracking-tight">
              Don't Replace It,<br />
              <span className="text-accent-green">Restore It!</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Serving Purdy and Springfield, MO with top-tier commercial roof restoration systems that save you money, time, and energy.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="w-full sm:w-auto bg-accent-green hover:bg-[#86b025] text-white font-bold py-4 px-8 rounded text-lg transition-all transform hover:scale-105 uppercase tracking-wide shadow-lg flex items-center justify-center">
                Get a Free Estimate
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/services" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold py-4 px-8 rounded text-lg transition-all uppercase tracking-wide">
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement Banner */}
      <section className="bg-brand-gray py-16 border-y-4 border-accent-green">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ShieldCheck className="w-16 h-16 text-accent-green mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase tracking-wide">Our Mission</h2>
          <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed italic">
            "Our Mission is to install the best roof restoration systems at honest prices. We also strive to provide top notch customer service from our first contact with you to the end of the warranty period and beyond."
          </p>
        </div>
      </section>

      {/* The Ozark Advantage */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-accent-green uppercase tracking-widest mb-2">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 tracking-tight">The Ozark Advantage</h3>
            <div className="w-24 h-1 bg-accent-green mx-auto mt-6"></div>
          </div>

          <motion.div
            variants={tileContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            <motion.div
              variants={tileItem}
              className="bg-white p-10 rounded-xl shadow-xl border-2 border-transparent hover:border-accent-green/50 relative overflow-hidden group transition-colors duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              <TrendingDown className="w-14 h-14 text-brand-dark mb-6 relative z-10" />
              <h4 className="text-2xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide">Save Money</h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                Restorations are a fraction of the cost of full replacement. Don't tear off a roof that can be saved.
              </p>
            </motion.div>

            <motion.div
              variants={tileItem}
              className="bg-white p-10 rounded-xl shadow-xl border-2 border-transparent hover:border-accent-green/50 relative overflow-hidden group transition-colors duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              <div className="w-14 h-14 rounded-full bg-brand-dark/10 flex items-center justify-center mb-6 relative z-10">
                <span className="text-brand-dark font-bold text-2xl">$</span>
              </div>
              <h4 className="text-2xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide">Save on Bills</h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                White roof technology reduces cooling bills by reflecting solar heat, paying for itself over time.
              </p>
            </motion.div>

            <motion.div
              variants={tileItem}
              className="bg-white p-10 rounded-xl shadow-xl border-2 border-transparent hover:border-accent-green/50 relative overflow-hidden group transition-colors duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-green/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
              <Clock className="w-14 h-14 text-brand-dark mb-6 relative z-10" />
              <h4 className="text-2xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide">Save Time</h4>
              <p className="text-gray-600 leading-relaxed text-lg">
                Faster installation times than traditional tear-offs, meaning less disruption to your business operations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-accent-green uppercase tracking-widest mb-2">Our Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 tracking-tight mb-6">Commercial Roofing Solutions</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                We specialize in advanced restoration systems designed to extend the life of your commercial roof.
              </p>
            </div>
            <Link to="/services" className="hidden md:flex items-center text-brand-dark font-bold hover:text-accent-green transition-colors uppercase tracking-wide">
              View All Systems <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <motion.div
            variants={tileContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { title: 'Spray Polyurethane Foam (SPF)', desc: 'High R-value insulation, 100% waterproof, and seamless protection.', path: '/services/spray-polyurethane-foam', image: '/SPF_6.jpg' },
              { title: 'Metal Roof Restoration', desc: 'Rust inhibition and leak prevention with acrylic coating.', path: '/services/metal-roof-restoration', image: '/A033D8E3046F3DE1396AD0F308DECAD3.jpg' },
              { title: 'Fabric Reinforced System', desc: 'Rugged, seamless reinforcement for ultimate durability.', path: '/services/fabric-reinforced-system', image: '/7A4D2A06A4BF8AAA326CCB5FA6451695.jpg' },
              { title: 'Membrane Restoration', desc: 'Extends the life of TPO, PVC, or EPDM roofs affordably.', path: '/services/membrane-restoration', image: '/SinglePly_10.jpg' }
            ].map((service, idx) => (
              <motion.div variants={tileItem} key={idx} className="group cursor-pointer h-full">
                <Link to={service.path} className="flex flex-col h-full">
                  <div className="h-48 bg-gray-200 rounded-t-xl overflow-hidden relative shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-300"></div>
                  </div>
                  <div className="p-6 bg-gray-50 border border-t-0 border-gray-100 rounded-b-xl group-hover:bg-white group-hover:shadow-lg transition-all flex-grow flex flex-col">
                    <h4 className="font-heading font-bold text-xl text-gray-900 mb-3">{service.title}</h4>
                    <p className="text-gray-600 mb-4 flex-grow">{service.desc}</p>
                    <span className="text-accent-green font-bold flex items-center text-sm uppercase tracking-wide group-hover:translate-x-2 transition-transform mt-auto">
                      Learn More <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 text-center md:hidden">
            <Link to="/services" className="inline-flex items-center text-brand-dark font-bold hover:text-accent-green transition-colors uppercase tracking-wide">
              View All Systems <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6 tracking-tight">Ready to Restore Your Roof?</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
            Contact us today for a free, no-obligation roof consultation and estimate. We serve Purdy, Springfield, and the surrounding 60-mile radius.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="tel:417-444-3808" className="w-full sm:w-auto bg-white text-brand-dark font-bold py-4 px-8 rounded text-lg transition-colors hover:bg-gray-100 uppercase tracking-wide flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call 417-444-3808
            </a>
            <Link to="/contact" className="w-full sm:w-auto bg-accent-green hover:bg-[#86b025] text-brand-dark font-bold py-4 px-8 rounded text-lg transition-colors uppercase tracking-wide shadow-lg">
              Request Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
