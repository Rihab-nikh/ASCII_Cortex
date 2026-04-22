import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Brain, MessageSquare, Eye, Lightbulb, Database, Cpu } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const solutions = [
  {
    name: 'AI Agents',
    category: 'Autonomous Systems',
    metric: '85% task automation',
    icon: Brain,
    gradient: 'from-violet-500 to-purple-600',
    baseImage: 'https://images.unsplash.com/photo-1761740533449-b8d4385e60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    hoverImage: 'https://images.unsplash.com/photo-1765046255517-412341954c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    name: 'Chatbots',
    category: 'Conversational AI',
    metric: '1M+ conversations/month',
    icon: MessageSquare,
    gradient: 'from-purple-500 to-blue-600',
    baseImage: 'https://images.unsplash.com/photo-1762330465857-07e4c81c0dfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    hoverImage: 'https://images.unsplash.com/photo-1676573408178-a5f280c3a320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    name: 'Computer Vision',
    category: 'Visual Intelligence',
    metric: '99.2% accuracy',
    icon: Eye,
    gradient: 'from-blue-500 to-cyan-600',
    baseImage: 'https://images.unsplash.com/photo-1529042261946-1d09f5f87a33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    hoverImage: 'https://images.unsplash.com/photo-1678845530864-18a666ca9762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    name: 'AI Consulting',
    category: 'Strategy & Advisory',
    metric: '50+ enterprises guided',
    icon: Lightbulb,
    gradient: 'from-cyan-500 to-violet-600',
    baseImage: 'https://images.unsplash.com/photo-1759884247160-27b8465544b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    hoverImage: 'https://images.unsplash.com/photo-1716703432455-3045789de738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    name: 'PoC Development',
    category: 'Rapid Prototyping',
    metric: '2-4 weeks to demo',
    icon: Cpu,
    gradient: 'from-violet-600 to-purple-500',
    baseImage: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    hoverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    name: 'Data Intelligence',
    category: 'Analytics & Insights',
    metric: 'Real-time processing',
    icon: Database,
    gradient: 'from-purple-600 to-blue-500',
    baseImage: 'https://images.unsplash.com/photo-1767163934854-655747a35068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    hoverImage: 'https://images.unsplash.com/photo-1775709610612-c589e29679ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
];

function SolutionCard({ solution, index }: { solution: typeof solutions[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = solution.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
      transition={{
        duration: 0.75,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer"
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#7B2FFF]/20 hover:border-[#00C2FF] transition-all duration-700">
        {/* Base image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={solution.baseImage}
            alt={solution.name}
            className="w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: isHovered ? 0 : 1 }}
          />
        </div>

        {/* Hover image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={solution.hoverImage}
            alt={`${solution.name} detail`}
            className="w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: isHovered ? 1 : 0 }}
          />
        </div>

        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-30`} />

        {/* Card overlay */}
        <div className="absolute inset-0 bg-[#0D0D1F]/50 backdrop-blur-[1px]" />

        {/* Icon */}
        <motion.div
          animate={{
            scale: isHovered ? 1.2 : 1,
            y: isHovered ? -20 : 0,
          }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-8 left-8 z-10"
        >
          <div className={`p-4 rounded-xl bg-gradient-to-br ${solution.gradient}`}>
            <Icon size={32} className="text-white" />
          </div>
        </motion.div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
          <motion.div
            animate={{ y: isHovered ? -10 : 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-xs uppercase tracking-widest text-[#00C2FF] mb-2">
              {solution.category}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-[#EEF0FF]">{solution.name}</h3>

            {/* Metric reveal on hover */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                height: isHovered ? 'auto' : 0,
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg font-semibold"
              style={{
                background: 'linear-gradient(135deg, #7B2FFF 0%, #00C2FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {solution.metric}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom glow on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${solution.gradient}`}
          style={{
            boxShadow: isHovered ? '0 0 24px rgba(123, 47, 255, 0.8)' : 'none',
          }}
        />
      </div>
    </motion.div>
  );
}

export default function SolutionsHallOfFame() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="solutions"
      ref={ref}
      className="relative py-32 px-8 bg-gradient-to-b from-[#05050F] via-[#0D0D1F] to-[#05050F]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-[#EEF0FF]">Solutions</span>
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #7B2FFF 0%, #00C2FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Hall of Fame
            </span>
          </h2>
          <p className="text-xl text-[#7A7FA8] max-w-2xl">
            World-class AI solutions engineered for production environments.
            From concept to deployment, built to scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.name} solution={solution} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
