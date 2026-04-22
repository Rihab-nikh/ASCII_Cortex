import { motion } from 'motion/react';

const partners = [
  'OPENAI',
  'HUGGINGFACE',
  'ANTHROPIC',
  'GOOGLE CLOUD',
  'AWS',
  'AZURE',
  'DATABRICKS',
  'NVIDIA',
];

export default function PartnersMarquee() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-[#7B2FFF] via-[#00C2FF] to-[#7B2FFF]">
      {/* Top row - moving left */}
      <div className="relative flex whitespace-nowrap mb-8">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-16 pr-16"
        >
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={i}
              className="text-5xl md:text-7xl font-bold text-white tracking-tight"
            >
              {partner} •
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-16 pr-16"
        >
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={`dup-${i}`}
              className="text-5xl md:text-7xl font-bold text-white tracking-tight"
            >
              {partner} •
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom row - moving right */}
      <div className="relative flex whitespace-nowrap justify-end">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-16 pr-16"
        >
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={i}
              className="text-5xl md:text-7xl font-bold text-white/20 tracking-tight"
              style={{
                WebkitTextStroke: '2px rgba(255, 255, 255, 0.6)',
                color: 'transparent',
              }}
            >
              {partner} •
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-16 pr-16"
        >
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={`dup-${i}`}
              className="text-5xl md:text-7xl font-bold text-white/20 tracking-tight"
              style={{
                WebkitTextStroke: '2px rgba(255, 255, 255, 0.6)',
                color: 'transparent',
              }}
            >
              {partner} •
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
