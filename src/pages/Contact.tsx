import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col bg-gray-50">
      {/* Page Header */}
      <section className="bg-brand-dark py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=2070" 
            alt="Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6 tracking-tight uppercase">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light">
            Ready to restore your roof? Get in touch for a free consultation and estimate.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div>
              <h2 className="text-sm font-bold text-accent-green uppercase tracking-widest mb-2">Get in Touch</h2>
              <h3 className="text-4xl font-heading font-black text-gray-900 tracking-tight mb-8">We're Here to Help</h3>
              
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                Whether you have a question about our restoration systems or need an immediate estimate for your commercial property, our team is ready to assist you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center shrink-0 border border-gray-100 mr-6">
                    <Phone className="w-6 h-6 text-brand-dark" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 uppercase tracking-wide mb-1">Phone</h4>
                    <a href="tel:417-444-3808" className="text-xl text-gray-600 hover:text-accent-green transition-colors">417-444-3808</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center shrink-0 border border-gray-100 mr-6">
                    <Mail className="w-6 h-6 text-brand-dark" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 uppercase tracking-wide mb-1">Email</h4>
                    <a href="mailto:ervin@ozarkeliteroofing.com" className="text-xl text-gray-600 hover:text-accent-green transition-colors">ervin@ozarkeliteroofing.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center shrink-0 border border-gray-100 mr-6">
                    <MapPin className="w-6 h-6 text-brand-dark" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 uppercase tracking-wide mb-1">Service Area</h4>
                    <p className="text-xl text-gray-600">Purdy, MO<br/>Springfield, MO (60-mile radius)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-14 h-14 bg-white rounded-full shadow-md flex items-center justify-center shrink-0 border border-gray-100 mr-6">
                    <Clock className="w-6 h-6 text-brand-dark" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 uppercase tracking-wide mb-1">Business Hours</h4>
                    <p className="text-xl text-gray-600">Mon - Fri: 8:00 AM - 5:00 PM<br/>Sat - Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-heading font-black text-gray-900 mb-6 uppercase tracking-wide">Request a Free Estimate</h3>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
                  <h4 className="font-bold text-xl mb-2">Thank You!</h4>
                  <p>Your message has been received. We will contact you shortly to schedule your consultation.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-brand-dark font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-green focus:border-transparent transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-green focus:border-transparent transition-all outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-green focus:border-transparent transition-all outline-none"
                        placeholder="(417) 555-0123"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">How can we help? *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent-green focus:border-transparent transition-all outline-none resize-none"
                      placeholder="Tell us about your roof and what you're looking for..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-accent-green hover:bg-[#86b025] text-brand-dark font-bold py-4 px-8 rounded-lg text-lg transition-colors uppercase tracking-wide shadow-lg flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-gray-200 relative">
        {/* Placeholder for Google Map - using an iframe with a general map of Springfield MO area */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d406086.3268481358!2d-93.59363026367187!3d37.18919649999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87cf62f745c8983f%3A0x6bfd6cb31e690da0!2sSpringfield%2C%20MO!5e0!3m2!1sen!2sus!4v1709664000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Service Area Map"
        ></iframe>
        
        {/* Map Overlay Info */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 md:left-8 md:translate-x-0 bg-white p-6 rounded-xl shadow-2xl border border-gray-100 max-w-sm w-[calc(100%-2rem)]">
          <h4 className="font-heading font-black text-xl text-gray-900 mb-2 uppercase tracking-wide">Service Area</h4>
          <p className="text-gray-600 mb-4">We proudly serve Purdy, Springfield, and the surrounding 60-mile radius.</p>
          <div className="flex items-center text-brand-dark font-bold">
            <MapPin className="w-5 h-5 mr-2" />
            60-Mile Radius
          </div>
        </div>
      </section>
    </div>
  );
}
