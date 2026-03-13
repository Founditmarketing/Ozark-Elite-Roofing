import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const tileContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
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

export default function Services() {
  const services = [
    {
      id: 'spf',
      title: 'Spray Polyurethane Foam (SPF)',
      description: 'A seamless, high-performance roofing system that provides superior insulation and waterproofing.',
      benefits: [
        'High R-value insulation significantly reduces energy costs',
        '100% waterproof, seamless protection against leaks',
        'Self-flashing around penetrations',
        'Lightweight and adds structural strength'
      ],
      image: '/SPF_10.jpg'
    },
    {
      id: 'metal',
      title: 'Metal Roof Restoration',
      description: 'A complete waterproofing system for metal roofs that stops leaks, inhibits rust, and provides an energy-efficient finish.',
      process: 'Prepare and power-wash with Rust Off, Kwik Kaulk fastener heads, and complete with acrylic coating.',
      benefits: [
        'Stops leaks at seams and fasteners',
        'Inhibits rust and prevents future corrosion',
        'Extends the life of the existing metal roof',
        'Reflective finish lowers cooling costs'
      ],
      image: '/DSC01403_0575.jpg'
    },
    {
      id: 'fabric',
      title: 'Fabric Reinforced System',
      description: 'A rugged, seamless reinforcement system that provides exceptional durability and waterproofing.',
      process: 'Reinforcing seams with Spunflex and applying a base coat for ultimate durability.',
      benefits: [
        'Rugged, seamless reinforcement',
        'Exceptional durability against weather and foot traffic',
        'Expands and contracts with the roof',
        'Cost-effective alternative to replacement'
      ],
      image: '/A033D8E3046F3DE1396AD0F308DECAD3.jpg'
    },
    {
      id: 'membrane',
      title: 'Membrane Restoration',
      description: 'A specialized coating system designed to extend the life of aging single-ply roofs.',
      benefits: [
        'Extends the life of TPO, PVC, or EPDM roofs',
        'A fraction of the cost of a full replacement',
        'Stops leaks and seals seams',
        'Highly reflective surface reduces energy consumption'
      ],
      image: '/SinglePly_6.jpg'
    },
    {
      id: 'replacement',
      title: 'Metal Replacement',
      description: 'When restoration is no longer viable, we provide expert metal roof replacement services.',
      benefits: [
        'High-quality, durable metal panels',
        'Expert installation by trained professionals',
        'Long-term warranty protection',
        'Improved building aesthetics and value'
      ],
      image: '/DJI_0036 (1).jpg'
    }
  ];

  return (
    <div className="flex flex-col bg-gray-50">
      {/* Page Header */}
      <section className="bg-brand-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/Copy of DJI_0155.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tight uppercase">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
            Specialized commercial roofing systems designed to restore, protect, and extend the life of your investment.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: -40, rotateX: 20, transformOrigin: "top" }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video lg:aspect-square max-h-[500px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 border-4 border-white/20 rounded-2xl"></div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-dark mb-6 uppercase tracking-wide">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {service.process && (
                    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-8">
                      <h3 className="font-bold text-gray-900 uppercase tracking-wide mb-2 text-sm">The Process</h3>
                      <p className="text-gray-700 italic">{service.process}</p>
                    </div>
                  )}

                  <div className="mb-10">
                    <h3 className="font-bold text-gray-900 uppercase tracking-wide mb-4">Key Benefits</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="w-6 h-6 text-accent-green mr-3 shrink-0" />
                          <span className="text-gray-700 text-lg">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/contact" className="inline-flex items-center text-brand-dark font-bold hover:text-accent-green transition-colors uppercase tracking-wide text-lg group">
                    Get an estimate for this system
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-6 tracking-tight">Not sure which system is right for you?</h2>
          <p className="text-xl text-gray-400 mb-10 font-light">
            Our experts will inspect your roof and recommend the most cost-effective restoration solution.
          </p>
          <Link to="/contact" className="inline-block bg-accent-green hover:bg-[#86b025] text-brand-dark font-bold py-4 px-10 rounded text-lg transition-colors uppercase tracking-wide shadow-lg">
            Schedule a Free Inspection
          </Link>
        </div>
      </section>
    </div>
  );
}
