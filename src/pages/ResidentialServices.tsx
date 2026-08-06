import { CheckCircle2, ArrowRight, ShieldCheck, Droplets, Wrench, Phone, DollarSign, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import PageSEO, { buildLocalBusinessSchema } from '../components/PageSEO';

const PATH = '/services/residential';

const schema = buildLocalBusinessSchema({
  path: PATH,
  service: {
    name: 'Residential Roof Restoration',
    description: 'Metal roof restoration, spray polyurethane foam, and leak repair for homes in the Springfield, MO area — extending roof life at a fraction of replacement cost.',
  },
});

const tileContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const tileItem = {
  hidden: { opacity: 0, y: -30, rotateX: 15, transformOrigin: 'top' },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: 'spring', stiffness: 200, damping: 20 },
  },
};

const residentialServices = [
  {
    id: 'metal-restoration',
    icon: ShieldCheck,
    tag: 'Most Popular',
    title: 'Metal Roof Restoration',
    subtitle: 'Stop leaks. Halt rust. Extend your roof life by 10–15 years.',
    description:
      "Your home's metal roof doesn't have to be replaced when it starts showing its age. Our proven restoration process seals every seam and fastener, applies a rust-inhibiting treatment, then finishes with a highly reflective coating system — protecting your home and lowering your energy bills.",
    benefits: [
      'Seals seams, laps, and fastener holes against water intrusion',
      'Rust-inhibiting primer protects existing metal panels',
      'Energy Star–rated reflective topcoat reduces cooling costs',
      'Fraction of the cost of a full tear-off and re-roof',
      'Backed by a comprehensive warranty',
    ],
    image: '/res1.png',
    accent: true,
  },
  {
    id: 'spf-residential',
    icon: Droplets,
    tag: 'Best Insulation',
    title: 'Spray Polyurethane Foam (SPF)',
    subtitle: 'Seamless. Waterproof. Incredibly efficient.',
    description:
      'For flat or low-slope roof sections on your home — garages, additions, sunroom roofs — SPF is the gold standard. It expands to fill every gap, creating a fully seamless, monolithic waterproof barrier with the highest R-value per inch of any roofing material.',
    benefits: [
      'Highest R-value per inch of any residential roofing material',
      'Fully seamless — zero joints or seams to fail',
      'Self-flashing around chimneys, vents, and skylights',
      'Adds structural strength to the roof deck',
      'Renewable — periodic re-coat keeps it performing for decades',
    ],
    image: '/res2.png',
    accent: false,
  },
  {
    id: 'coating-repair',
    icon: Wrench,
    tag: 'Fast & Affordable',
    title: 'Roof Coating & Leak Repair',
    subtitle: 'Stop leaks fast. Protect your home without breaking the bank.',
    description:
      'Active leak? Aging flat section? Our coating and repair service applies high-performance elastomeric or acrylic coatings over your existing roofing surface — sealing cracks, stopping leaks, and extending the service life of your roof without the disruption and cost of a full replacement.',
    benefits: [
      'Stops active leaks quickly — often in a single visit',
      'Extends service life by 5–10+ years',
      'UV-resistant formulas prevent premature surface aging',
      'Compatible with most existing flat, low-slope, and metal surfaces',
      'Clean, non-disruptive application process',
    ],
    image: '/res4.png',
    accent: false,
  },
];

const stats = [
  { value: '10–15', label: 'Years added to roof life', suffix: '+' },
  { value: '50', label: 'Less than replacement cost', suffix: '%' },
  { value: '60', label: 'Mile service radius', suffix: '' },
  { value: '100', label: 'Satisfaction guaranteed', suffix: '%' },
];

const processSteps = [
  {
    step: '01',
    title: 'Free Inspection',
    desc: "We come to you, assess your roof's condition, and identify the best restoration approach.",
  },
  {
    step: '02',
    title: 'Custom Estimate',
    desc: 'You receive a detailed, no-obligation written estimate with clear scope and pricing.',
  },
  {
    step: '03',
    title: 'Expert Application',
    desc: 'Our trained crew applies the restoration system using proven materials and techniques.',
  },
  {
    step: '04',
    title: 'Warranty & Support',
    desc: 'Your restored roof is backed by a warranty, and we remain your partner through its life.',
  },
];

export default function ResidentialServices() {
  return (
    <div className="flex flex-col">
      <PageSEO
        title="Residential Roof Restoration Springfield, MO | Ozark Elite Roofing"
        description="Ozark Elite Roofing brings commercial-grade metal roof restoration, spray foam, and leak repair to homes in the Springfield, MO area — for a fraction of replacement cost."
        path={PATH}
        schema={schema}
        image="/res3.png"
      />

      {/* ─── Hero ─── */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/res3.png"
            alt="Residential Roof Restoration"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-accent-green/20 text-accent-green font-bold text-sm tracking-wider uppercase mb-5 border border-accent-green/30">
              Homeowner Solutions · Purdy &amp; Springfield, MO
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-6 leading-tight tracking-tight">
              Residential<br />
              <span className="text-accent-green">Roofing Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              The same proven commercial-grade restoration technology — applied to your home. Extend your roof's life for a fraction of replacement cost.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-accent-green hover:bg-[#86b025] text-brand-dark font-bold py-4 px-8 rounded text-lg transition-all transform hover:scale-105 uppercase tracking-wide shadow-lg flex items-center justify-center"
              >
                Get a Free Inspection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:417-444-3808"
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold py-4 px-8 rounded text-lg transition-all uppercase tracking-wide flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                417-444-3808
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="bg-accent-green py-8">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={tileContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            {stats.map((s) => (
              <motion.div variants={tileItem} key={s.label}>
                <div className="text-3xl md:text-4xl font-heading font-extrabold text-brand-dark">
                  {s.value}<span className="text-2xl">{s.suffix}</span>
                </div>
                <div className="text-brand-dark/80 font-semibold text-sm uppercase tracking-wide mt-1">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Intro ─── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-sm font-bold text-accent-green uppercase tracking-widest mb-3">Why Restore Instead of Replace?</h2>
          <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 mb-6 tracking-tight">
            Don't Replace It — Restore It
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Most residential roofs that are leaking or aging don't need a full tear-off. With the right restoration system, we can seal, protect, and waterproof your existing roof — saving you thousands and adding years of reliable performance. We bring commercial-grade solutions to every home we serve.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: DollarSign, title: 'Save Money', desc: 'Restoration costs a fraction of full roof replacement — often 50% less or more.' },
              { icon: Clock, title: 'Save Time', desc: 'Most jobs are completed in 1–2 days with minimal disruption to your home.' },
              { icon: Star, title: 'Peace of Mind', desc: 'Every job is backed by a warranty and our commitment to customer service.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:border-accent-green/40 transition-colors">
                <Icon className="w-10 h-10 text-accent-green mb-4" />
                <h4 className="font-heading font-bold text-xl text-gray-900 mb-2 uppercase tracking-wide">{title}</h4>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services Detail ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-accent-green uppercase tracking-widest mb-3">What We Offer</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 tracking-tight">
              Residential Services
            </h3>
            <div className="w-24 h-1 bg-accent-green mx-auto mt-6" />
          </div>

          <div className="space-y-28">
            {residentialServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: -40, rotateX: 20, transformOrigin: 'top' }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-14 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative">
                    {/* Background accent */}
                    <div className="absolute inset-0 bg-accent-green/15 transform translate-x-4 translate-y-4 rounded-2xl" />
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video lg:aspect-[4/3] max-h-[480px]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 border-4 border-white/20 rounded-2xl" />
                    </div>
                    {/* Tag badge */}
                    <div className="absolute top-4 left-4 bg-accent-green text-brand-dark text-xs font-black uppercase tracking-widest py-1 px-3 rounded shadow-lg">
                      {service.tag}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-3 mb-2">
                    <service.icon className="w-7 h-7 text-accent-green shrink-0" />
                    <span className="text-xs font-bold text-accent-green uppercase tracking-widest">{service.tag}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-dark mb-3 uppercase tracking-wide leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-accent-green font-semibold text-lg mb-5 italic">{service.subtitle}</p>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-10">
                    <h3 className="font-bold text-gray-900 uppercase tracking-wide mb-4 text-sm">Key Benefits</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-accent-green mr-3 shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center bg-brand-dark hover:bg-gray-800 text-white font-bold py-3 px-7 rounded transition-colors uppercase tracking-wide group"
                  >
                    Get a Free Estimate
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-accent-green uppercase tracking-widest mb-3">Simple &amp; Stress-Free</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight">
              How It Works
            </h3>
            <div className="w-24 h-1 bg-accent-green mx-auto mt-6" />
          </div>

          <motion.div
            variants={tileContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processSteps.map((step) => (
              <motion.div
                key={step.step}
                variants={tileItem}
                className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-accent-green/30 transition-all"
              >
                <div className="text-6xl font-heading font-black text-accent-green/20 leading-none mb-4 select-none">
                  {step.step}
                </div>
                <h4 className="text-xl font-heading font-bold text-white mb-3 uppercase tracking-wide">{step.title}</h4>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Commercial CTA crosslink ─── */}
      <section className="bg-gray-50 py-14 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">Need Commercial Roofing?</h2>
            <p className="text-gray-500">We specialize in commercial &amp; industrial roof restoration — explore our full commercial systems.</p>
          </div>
          <Link
            to="/services"
            className="shrink-0 inline-flex items-center bg-brand-dark hover:bg-gray-800 text-white font-bold py-3 px-8 rounded transition-colors uppercase tracking-wide"
          >
            View Commercial Services <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="relative bg-brand-dark py-24 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid-res" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid-res)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6 tracking-tight">
            Ready to Restore Your Home's Roof?
          </h2>
          <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed">
            Contact us today for a free, no-obligation residential roof inspection and estimate. Serving Purdy, Springfield, and the surrounding 60-mile radius.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
            <a
              href="tel:417-444-3808"
              className="w-full sm:w-auto bg-white text-brand-dark font-bold py-4 px-8 rounded text-lg transition-colors hover:bg-gray-100 uppercase tracking-wide flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call 417-444-3808
            </a>
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-accent-green hover:bg-[#86b025] text-brand-dark font-bold py-4 px-8 rounded text-lg transition-colors uppercase tracking-wide shadow-lg"
            >
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
