import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Heart, GraduationCap, TrendingUp, Shield } from 'lucide-react';

const industries = [
  {
    name: 'Healthcare',
    description: 'AI-powered diagnostics, patient management systems, and medical data analytics transforming healthcare delivery.',
    icon: Heart,
    projects: '45+ Projects',
    highlight: 'HIPAA Compliant',
  },
  {
    name: 'EdTech',
    description: 'Intelligent learning platforms, adaptive curricula, and educational analytics driving personalized education.',
    icon: GraduationCap,
    projects: '32+ Projects',
    highlight: 'Student Success',
  },
  {
    name: 'Commodity Trading',
    description: 'Real-time market analytics, predictive modeling, and automated trading systems for competitive advantage.',
    icon: TrendingUp,
    projects: '28+ Projects',
    highlight: 'Market Leadership',
  },
  {
    name: 'Defense & Robotics',
    description: 'Advanced unmanned platforms, robotic engineering, and autonomous systems for European defense contractors.',
    icon: Shield,
    projects: '18+ Projects',
    highlight: 'Mission Critical',
  },
];

export default function Industries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      id="industries"
      className="relative py-32 px-8 bg-gradient-to-b from-[#0a0a1f] via-[#1a0f2e] to-[#0a0a1f] overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.65, 0.05, 0, 1] }}
          className="mb-20 text-center"
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-white">Industry</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Specialized solutions across critical sectors, delivering transformative
            technology that drives measurable business outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.75,
                  delay: index * 0.15,
                  ease: [0.65, 0.05, 0, 1],
                }}
                className="group relative"
              >
                <div className="relative h-full p-8 rounded-2xl border-2 border-purple-500/20 hover:border-violet-500 bg-[#1a0f2e]/50 backdrop-blur-sm overflow-hidden"
                     style={{ transition: 'all 0.75s cubic-bezier(0.65, 0.05, 0, 1)' }}>

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 to-blue-500/0 group-hover:from-violet-500/10 group-hover:to-blue-500/10 transition-all duration-700" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.5, ease: [0.65, 0.05, 0, 1] }}
                      className="inline-block p-4 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 mb-6"
                    >
                      <Icon size={40} className="text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-violet-300 transition-colors duration-500">
                      {industry.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {industry.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-violet-400" />
                        <span className="text-gray-500 font-medium">{industry.projects}</span>
                      </div>
                      <div className="px-4 py-1 rounded-full bg-violet-500/20 text-violet-300 font-semibold">
                        {industry.highlight}
                      </div>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.75, delay: index * 0.15 + 0.3, ease: [0.65, 0.05, 0, 1] }}
                    className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-violet-500/30 group-hover:border-violet-400 transition-colors duration-700"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.8, ease: [0.65, 0.05, 0, 1] }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-12 py-5 rounded-full font-semibold text-lg tracking-wide shadow-lg shadow-violet-500/50 hover:shadow-violet-500/70"
            style={{ transition: 'all 0.75s cubic-bezier(0.65, 0.05, 0, 1)' }}
          >
            Discuss Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
