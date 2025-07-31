
'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden" id="hero">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background"></div>
      
      {/* Distributed Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/6 w-16 h-16 border border-accent/20 rounded-full blur-sm"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-24 right-1/5 w-20 h-20 border border-accent/30 rounded-lg blur-sm"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, -90, -180]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/8 w-24 h-24 border border-accent/25 rounded-full blur-sm"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 120, 240]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/8 w-18 h-18 border border-accent/20 rounded-lg blur-sm"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.55, 0.25],
            rotate: [0, 90, 180]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-20 h-20 border border-accent/30 rounded-full blur-sm"
          animate={{ 
            scale: [1, 1.25, 1],
            opacity: [0.2, 0.45, 0.2],
            rotate: [0, -120, -240]
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-24 right-1/4 w-16 h-16 border border-accent/25 rounded-lg blur-sm"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 60, 120]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/2 w-14 h-14 border border-accent/20 rounded-full blur-sm"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.35, 0.15],
            rotate: [0, 45, 90]
          }}
          transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Netflix-style Centered Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-8"
        >
          {/* TDA Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 200 }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-accent to-cyan-400 flex items-center justify-center shadow-2xl glow-accent mx-auto mb-8"
          >
            <span className="text-background text-6xl md:text-7xl font-orbitron font-bold select-none">TDA</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-6xl md:text-8xl lg:text-9xl font-orbitron font-bold text-white glow-accent drop-shadow-lg leading-tight"
          >
            The Data <span className="text-accent">Alchemists</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-2xl md:text-3xl lg:text-4xl text-accent font-poppins font-medium mb-12 max-w-4xl mx-auto"
          >
            Empowering Minds through Data
          </motion.p>

          {/* Call-to-Action Buttons - Netflix Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-5 rounded-2xl text-xl md:text-2xl font-semibold bg-gradient-to-r from-accent to-cyan-400 text-background shadow-lg hover:shadow-accent/50 transition-all duration-300 min-w-[160px]"
            >
              Join Us
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-5 rounded-2xl text-xl md:text-2xl font-semibold border-2 border-accent text-accent bg-background/50 backdrop-blur-sm shadow-lg hover:bg-accent hover:text-background transition-all duration-300 min-w-[160px]"
            >
              Events
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-5 rounded-2xl text-xl md:text-2xl font-semibold border-2 border-accent text-accent bg-background/50 backdrop-blur-sm shadow-lg hover:bg-accent hover:text-background transition-all duration-300 min-w-[160px]"
            >
              Contact
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-accent rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-accent rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
