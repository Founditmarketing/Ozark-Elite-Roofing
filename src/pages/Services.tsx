import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

const DOMAIN = 'https://ozark-elite-roofing.vercel.app';

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "RoofingContractor"],
  "name": "Ozark Elite Roofing",
  "url": `${DOMAIN}/services`,
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
  }
};

const commercialServices = [
  {
    title: 'Spray Polyurethane Foam Roofing',
    desc: 'The highest R-value of any commercial roofing material — seamless, 100% waterproof, and applied without tear-off.',
    path: '/services/spray-polyurethane-foam-roofing-springfield-mo',
    image: '/SPF_6.jpg',
  },
  {
    title: 'Metal Roof Restoration',
    desc: 'Stop leaks at seams and fasteners. Halt rust. Add 10–15 years to your existing metal roof.',
    path: '/services/metal-roof-restoration-springfield-mo',
    image: '/DSC01403_0575.jpg',
  },
  {
    title: 'Commercial Roof Coating',
    desc: 'Fabric-reinforced coating for flat and low-slope commercial roofs. No tear-off required.',
    path: '/services/commercial-roof-coating-springfield-mo',
    image: '/7A4D2A06A4BF8AAA326CCB5FA6451695.jpg',
  },
  {
    title: 'EPDM Roof Restoration',
    desc: 'Restore shrinking, cracking, or leaking EPDM rubber membranes at a fraction of replacement cost.',
    path: '/services/epdm-roof-restoration-springfield-mo',
    image: '/SinglePly_6.jpg',
  },
  {
    title: 'TPO Roof Restoration',
    desc: 'Re-seal failing seams and recoat aging TPO membranes — extending service life by 10+ years.',
    path: '/services/tpo-roof-restoration-springfield-mo',
    image: '/SinglePly_10.jpg',
  },
  {
    title: 'Metal Roof Replacement',
    desc: 'When restoration is no longer viable, expert metal roof replacement with long-term warranty.',
    path: '/services/metal-roof-replacement-springfield-mo',
    image: '/DJI_0036 (1).jpg',
  },
  {
    title: 'Roof Leak Repair',
    desc: 'Fast response for active leaks. We find the source — not just the symptom — and fix it right.',
    path: '/services/roof-leak-repair-springfield-mo',
    image: '/Copy of DJI_0086.JPG',
  },
];

const tileContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const tileItem = {
  hidden: { opacity: 0, y: -30, rotateX: 15, transformOrigin: 'top' },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } },
};

export default function Services() {
  return (
    <div className="flex flex-col bg-gray-50">
      <Helmet>
        <title>Commercial Roofing Services Springfield MO | Ozark Elite Roofing</title>
        <meta name="description" content="Commercial roofing services in Springfield, MO — spray foam, metal roof restoration, EPDM, TPO, roof coating, leak repair, and metal replacement. Free inspection." />
        <link rel="canonical" href={`${DOMAIN}/services`} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* Page Header */}
      <section className="bg-brand-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/Copy of DJI_0155.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-accent-green/20 text-accent-green font-bold text-sm tracking-wider uppercase mb-4 border border-accent-green/30">
            Purdy & Springfield, MO · 60-Mile Radius
          </span>
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tight uppercase">
            Commercial Roofing Services<br />
            <span className="text-accent-green">in Springfield, MO</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
            Each of our services is a dedicated restoration or replacement system — choose the one that matches your roof type and problem.
          </p>
        </div>
      </section>

      {/* Commercial Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-accent-green uppercase tracking-widest mb-2">One Page, One System</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 tracking-tight">Commercial Services</h3>
            <div className="w-24 h-1 bg-accent-green mx-auto mt-6" />
          </div>

          <motion.div
            variants={tileContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {commercialServices.map((service) => (
              <motion.div variants={tileItem} key={service.title} className="group cursor-pointer h-full">
                <Link to={service.path} className="flex flex-col h-full">
                  <div className="h-52 bg-gray-200 rounded-t-xl overflow-hidden relative shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                  <div className="p-6 bg-white border border-t-0 border-gray-100 rounded-b-xl group-hover:shadow-lg transition-all flex-grow flex flex-col">
                    <h3 className="font-heading font-bold text-xl text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 flex-grow">{service.desc}</p>
                    <span className="text-accent-green font-bold flex items-center text-sm uppercase tracking-wide group-hover:translate-x-2 transition-transform mt-auto">
                      Learn More <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Residential crosslink */}
      <section className="bg-white border-y border-gray-200 py-14">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-heading font-bold text-gray-900 mb-2">Residential Roofing Services</h2>
            <p className="text-gray-500">We also serve homeowners in the Springfield, MO area with the same proven restoration systems.</p>
          </div>
          <Link
            to="/services/residential"
            className="shrink-0 inline-flex items-center bg-brand-dark hover:bg-gray-800 text-white font-bold py-3 px-8 rounded transition-colors uppercase tracking-wide"
          >
            View Residential Services <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-6 tracking-tight">Not sure which system is right for you?</h2>
          <p className="text-xl text-gray-400 mb-10 font-light">
            Our experts will inspect your roof and recommend the most cost-effective restoration solution — at no charge.
          </p>
          <Link to="/contact" className="inline-block bg-accent-green hover:bg-[#86b025] text-brand-dark font-bold py-4 px-10 rounded text-lg transition-colors uppercase tracking-wide shadow-lg">
            Schedule a Free Inspection
          </Link>
        </div>
      </section>
    </div>
  );
}
