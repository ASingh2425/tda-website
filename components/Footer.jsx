'use client';
import { motion } from 'framer-motion';

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
  { name: 'Join Us', href: '#about' },
  { name: 'Events', href: '#contact' }
];

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/tda-org'},
  { name: 'LinkedIn', url: 'https://linkedin.com/company/tda'},
  { name: 'Instagram', url: 'https://instagram.com/tda_mit'},
  { name: 'Discord', url: 'https://discord.gg/tda'}
];

export default function Footer() {
  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full z-50">
      {/* Main Footer Section with Black Background */}
      <div className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            {/* Logo & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-black font-orbitron font-bold text-lg">TDA</span>
                </div>
                <span className="text-accent font-orbitron text-xl font-bold">The Data Alchemists</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-md mx-auto">
                Empowering minds through data science, AI, ML, and web development. 
                Join our community of curious minds at MIT Manipal.
              </p>
            </motion.div>

            {/* Content Sections Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
            >
              {/* Quick Links */}
              <div className="text-center">
                <h3 className="text-accent font-orbitron font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.href)}
                      className="block w-full text-gray-300 hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="text-center">
                <h3 className="text-accent font-orbitron font-semibold mb-4">Contact Info</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-accent text-sm"></span>
                    <span className="text-gray-300 text-sm">tda@mit.edu</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-accent text-sm"></span>
                    <span className="text-gray-300 text-sm">MIT Manipal, India</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-accent text-sm"></span>
                    <span className="text-gray-300 text-sm">Mon-Fri: 9AM-6PM</span>
                  </div>
                </div>
              </div>

              {/* Connect */}
              <div className="text-center">
                <h3 className="text-accent font-orbitron font-semibold mb-4">Connect</h3>
                <div className="space-y-2">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center justify-center space-x-2 p-2 bg-gray-800 border border-accent/20 rounded-lg hover:border-accent/40 transition-all duration-300"
                    >
                      <div className="w-4 h-4 bg-accent/20 rounded flex items-center justify-center">
                        <span className="text-accent text-xs font-bold">{social.name.charAt(0)}</span>
                      </div>
                      <span className="text-gray-300 text-sm font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Follow Us */}
              <div className="text-center">
                <h3 className="text-accent font-orbitron font-semibold mb-4">Follow Us</h3>
                <div className="space-y-2">
                  <p className="text-gray-300 text-sm">Stay updated with our latest projects and events</p>
                  <div className="flex justify-center space-x-3">
                    <motion.a
                      href="mailto:tda@mit.edu"
                      whileHover={{ scale: 1.1 }}
                      className="text-accent hover:text-white transition-colors duration-300"
                    >
                    </motion.a>
                    <motion.a
                      href="#hero"
                      onClick={() => handleNavClick('#hero')}
                      whileHover={{ scale: 1.1 }}
                      className="text-accent hover:text-white transition-colors duration-300"
                    >
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Small Footer Section */}
      <div className="bg-gray-900 text-gray-400 py-4 border-t border-accent/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="text-xs space-y-1">
              <p>&copy; {new Date().getFullYear()} The Data Alchemists. All rights reserved.</p>
              <p>MIT Manipal, Karnataka, India</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
