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
    <section className="relative py-20 overflow-hidden bg-[#0D0D1F]">
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
              className="text-5xl md:text-7xl font-bold tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #7B2FFF 0%, #00C2FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
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
              className="text-5xl md:text-7xl font-bold tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #7B2FFF 0%, #00C2FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
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
              className="text-5xl md:text-7xl font-bold tracking-tight"
              style={{
                WebkitTextStroke: '2px rgba(123, 47, 255, 0.4)',
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
              className="text-5xl md:text-7xl font-bold tracking-tight"
              style={{
                WebkitTextStroke: '2px rgba(123, 47, 255, 0.4)',
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
