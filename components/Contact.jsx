'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/tda-org'},
  { name: 'LinkedIn', url: 'https://linkedin.com/company/tda'},
  { name: 'Instagram', url: 'https://instagram.com/tda_mit',},
  { name: 'Discord', url: 'https://discord.gg/tda'}
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted form data:", formData);
    alert("Message sent (check console)!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="contact">
      {/* Floating Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/3 w-24 h-24 border border-accent/20 rounded-full blur-sm"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 right-1/3 w-16 h-16 border border-accent/30 rounded-lg blur-sm"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, -90, -180]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-20 h-20 border border-accent/25 rounded-full blur-sm"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 120, 240]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Netflix-style Container */}
      <div className="w-full max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-8">
            Get in <span className="text-accent glow-accent">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to join the data revolution? Reach out to us!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 w-full">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="xl:col-span-2 bg-background/50 backdrop-blur-sm border border-accent/20 rounded-xl p-8"
          >
            <h3 className="text-2xl font-orbitron font-bold text-accent mb-8">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-semibold text-white" htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-accent/30 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-white" htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-accent/30 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 font-semibold text-white" htmlFor="message">Message</label>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-accent/30 text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 resize-none"
                  placeholder="Tell us about your interest in data science..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-accent text-background rounded-xl font-semibold shadow-lg hover:shadow-accent/50 transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & QR Code */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* QR Code Placeholder */}
            <div className="bg-background/50 backdrop-blur-sm border border-accent/20 rounded-xl p-6 text-center">
              <h3 className="text-xl font-orbitron font-bold text-accent mb-4">Scan to Connect</h3>
              <div className="w-40 h-40 mx-auto bg-accent/10 border-2 border-accent/30 rounded-lg flex items-center justify-center mb-4">
                <div className="text-5xl"></div>
              </div>
              <p className="text-gray-300 text-sm">QR Code for quick access</p>
            </div>

            {/* Social Links */}
            <div className="bg-background/50 backdrop-blur-sm border border-accent/20 rounded-xl p-6">
              <h3 className="text-xl font-orbitron font-bold text-accent mb-6">Follow Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center space-x-2 p-3 bg-background/30 border border-accent/20 rounded-lg hover:border-accent/40 transition-all duration-300"
                  >
                    <div className="w-6 h-6 bg-accent/20 rounded flex items-center justify-center">
                      <span className="text-accent text-xs font-bold">{social.name.charAt(0)}</span>
                    </div>
                    <span className="text-white text-sm font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-background/50 backdrop-blur-sm border border-accent/20 rounded-xl p-6">
              <h3 className="text-xl font-orbitron font-bold text-accent mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-accent text-lg"></span>
                  <span className="text-white text-sm">tda@mit.edu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent text-lg"></span>
                  <span className="text-white text-sm">MIT Manipal, Karnataka, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-accent text-lg"></span>
                  <span className="text-white text-sm">Mon-Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 