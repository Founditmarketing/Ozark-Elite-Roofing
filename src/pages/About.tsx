import { Shield, Award, DollarSign } from 'lucide-react';
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

export default function About() {
  const values = [
    {
      icon: <Shield className="w-10 h-10 text-accent-green" />,
      title: 'Professionalism',
      description: 'We conduct our business with the highest level of integrity and respect for your property.'
    },
    {
      icon: <Award className="w-10 h-10 text-accent-green" />,
      title: 'Quality',
      description: 'We use premium materials and proven techniques to ensure a lasting restoration.'
    },
    {
      icon: <DollarSign className="w-10 h-10 text-accent-green" />,
      title: 'Value',
      description: 'Honest pricing for systems that save you money compared to full replacements.'
    }
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* Page Header */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541888087525-071470743b06?auto=format&fit=crop&q=80&w=2070" 
            alt="Background" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6 tracking-tight uppercase">About Us</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              The story behind Ozark Elite Roofing and the values that drive our commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border-4 border-brand-dark/20 rounded-2xl"></div>
              </motion.div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <h2 className="text-sm font-bold text-accent-green uppercase tracking-widest mb-2">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 tracking-tight mb-8">Built on Trust and Hard Work</h3>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Ozark Elite Roofing was founded with a simple goal: to provide commercial property owners in Purdy, Springfield, and the surrounding areas with a smarter alternative to costly roof replacements.
                </p>
                <p>
                  We saw too many businesses tearing off roofs that still had life in them, simply because they didn't know about advanced restoration systems. We set out to change that by specializing in high-performance coatings and spray foam applications.
                </p>
                <p>
                  Today, we are proud to be a trusted partner for facility managers and business owners across Missouri. Our team is dedicated to delivering solutions that not only stop leaks but also improve energy efficiency and extend the lifespan of your building's most critical asset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-accent-green uppercase tracking-widest mb-2">What We Stand For</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-extrabold text-gray-900 tracking-tight">Our Core Values</h3>
            <div className="w-24 h-1 bg-accent-green mx-auto mt-6"></div>
          </div>

          <motion.div 
            variants={tileContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                variants={tileItem}
                className="bg-white p-10 rounded-xl shadow-lg border-2 border-transparent hover:border-accent-green/50 text-center group transition-colors duration-300"
              >
                <div className="w-20 h-20 mx-auto bg-brand-dark/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-dark/10 transition-colors">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-heading font-bold text-gray-900 mb-4 uppercase tracking-wide">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
