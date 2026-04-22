import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Brain, Code, Cpu, Zap, Smartphone, Cloud, Database, GitBranch } from 'lucide-react';

const services = [
  {
    name: 'AI Agent Development',
    category: 'AI Solutions',
    description: 'Intelligent autonomous agents',
    icon: Brain,
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    name: 'Custom Software Development',
    category: 'Software Development',
    description: 'Tailored enterprise solutions',
    icon: Code,
    gradient: 'from-purple-500 to-blue-600',
  },
  {
    name: 'LLM Development',
    category: 'AI Solutions',
    description: 'Large language model integration',
    icon: Cpu,
    gradient: 'from-blue-500 to-violet-600',
  },
  {
    name: 'AI Process Automation',
    category: 'AI Solutions',
    description: 'Streamline operations with AI',
    icon: Zap,
    gradient: 'from-violet-600 to-purple-500',
  },
  {
    name: 'Mobile App Development',
    category: 'Software Development',
    description: 'iOS & Android excellence',
    icon: Smartphone,
    gradient: 'from-purple-600 to-blue-500',
  },
  {
    name: 'Cloud Architecture',
    category: 'Infrastructure',
    description: 'Scalable cloud solutions',
    icon: Cloud,
    gradient: 'from-blue-600 to-violet-500',
  },
  {
    name: 'SaaS AI Agent',
    category: 'AI Solutions',
    description: 'AI-powered SaaS platforms',
    icon: Database,
    gradient: 'from-violet-500 to-blue-600',
  },
  {
    name: 'Legacy Modernization',
    category: 'Software Development',
    description: 'Transform outdated systems',
    icon: GitBranch,
    gradient: 'from-purple-500 to-violet-600',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.75,
        delay: index * 0.1,
        ease: [0.65, 0.05, 0, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer"
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-purple-500/20 hover:border-violet-500"
           style={{ transition: 'all 0.75s cubic-bezier(0.65, 0.05, 0, 1)' }}>

        {/* Service background with gradient */}
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.75, ease: [0.65, 0.05, 0, 1] }}
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`}
        />

        {/* Card background */}
        <div className="absolute inset-0 bg-[#1a0f2e]/80 backdrop-blur-sm" />

        {/* Icon */}
        <motion.div
          animate={{
            scale: isHovered ? 1.2 : 1,
            y: isHovered ? -20 : 0,
          }}
          transition={{ duration: 0.75, ease: [0.65, 0.05, 0, 1] }}
          className="absolute top-8 left-8 z-10"
        >
          <div className={`p-4 rounded-xl bg-gradient-to-br ${service.gradient}`}>
            <Icon size={32} className="text-white" />
          </div>
        </motion.div>

        {/* Service info */}
        <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: isHovered ? -10 : 0 }}
            transition={{ duration: 0.75, ease: [0.65, 0.05, 0, 1] }}
          >
            <div className="text-xs uppercase tracking-widest text-violet-400 mb-2">
              {service.category}
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">{service.name}</h3>
            <div className="text-base text-gray-400">{service.description}</div>
          </motion.div>

          {/* Hover button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20,
            }}
            transition={{ duration: 0.5, ease: [0.65, 0.05, 0, 1] }}
            className={`mt-6 w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-violet-500/50`}
            style={{ transition: 'all 0.75s cubic-bezier(0.65, 0.05, 0, 1)' }}
          >
            Learn More
          </motion.button>
        </div>

        {/* Corner accent */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.5, ease: [0.65, 0.05, 0, 1] }}
          className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-violet-400"
        />

        {/* Glowing particles effect */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 pointer-events-none"
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50,
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
                className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function ServicesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-32 px-8 bg-gradient-to-b from-[#1a0f2e] to-[#0a0a1f]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.65, 0.05, 0, 1] }}
          className="mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-white">Our</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Comprehensive AI and software solutions engineered to propel your
            business into the future of intelligent automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
