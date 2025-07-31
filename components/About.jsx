'use client';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: '2023',
    title: 'TDA Founded',
    description: 'The Data Alchemists was established at MIT Manipal'
  },
  {
    year: '2024',
    title: 'First Workshop Series',
    description: 'Launched comprehensive Data Science workshops'
  },
  {
    year: '2024',
    title: 'AI/ML Projects',
    description: 'Completed multiple machine learning projects'
  },
  {
    year: '2024',
    title: 'Community Growth',
    description: 'Expanded to 100+ active members'
  }
];

const skillCards = [
  { title: 'Data Science', description: 'Statistical analysis and data visualization' },
  { title: 'AI & ML', description: 'Machine learning algorithms and neural networks' },
  { title: 'Web Development', description: 'Full-stack development and modern frameworks' },
  { title: 'Problem Solving', description: 'Creative solutions through data-driven insights' }
];

export default function About() {
  return (
    <section className="py-20 bg-background relative overflow-hidden" id="about">
      {/* Floating Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 w-20 h-20 border border-accent/20 rounded-full blur-sm"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-40 right-1/3 w-16 h-16 border border-accent/30 rounded-lg blur-sm"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, -90, -180]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-40 left-1/2 w-24 h-24 border border-accent/25 rounded-full blur-sm"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 120, 240]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-18 h-18 border border-accent/20 rounded-lg blur-sm"
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.55, 0.25],
            rotate: [0, 90, 180]
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Netflix-style Container */}
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-8">
            About <span className="text-accent glow-accent">TDA</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            A student-led initiative to nurture skillsets in <span className="text-accent font-semibold">Data Science</span>, 
            <span className="text-accent font-semibold"> AI</span>, <span className="text-accent font-semibold">ML</span>, 
            and <span className="text-accent font-semibold">Web Development</span>.
          </p>
        </motion.div>

        {/* Skills Cards - Netflix Style Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-orbitron font-bold text-white text-center mb-12">
            Our <span className="text-accent">Expertise</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {skillCards.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-background/50 backdrop-blur-sm border border-accent/20 rounded-xl p-8 text-center hover:border-accent/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-2xl text-accent font-bold">{skill.title.charAt(0)}</div>
                </div>
                <h3 className="text-xl font-orbitron font-semibold text-accent mb-3">{skill.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline - Netflix Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <h3 className="text-3xl font-orbitron font-bold text-white text-center mb-16">
            Our <span className="text-accent">Journey</span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={`${event.year}-${event.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="w-full"
              >
                <div className="bg-accent/10 border border-accent/30 rounded-xl p-8 backdrop-blur-sm hover:border-accent/40 transition-all duration-300 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl font-orbitron font-bold text-accent">{event.year}</div>
                    <div className="w-6 h-6 bg-accent rounded-full relative">
                      <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75"></div>
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{event.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
