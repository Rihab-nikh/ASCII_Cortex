import { motion } from 'motion/react';

const marqueeText = [
  'AI SOLUTIONS',
  'SOFTWARE DEVELOPMENT',
  'INTELLIGENT AUTOMATION',
  'MACHINE LEARNING',
  'INNOVATION',
  'DIGITAL TRANSFORMATION',
];

export default function Marquee() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600">
      {/* Top marquee - moving left */}
      <div className="relative flex whitespace-nowrap mb-6">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-12 pr-12"
        >
          {[...marqueeText, ...marqueeText].map((text, i) => (
            <div
              key={i}
              className="text-6xl md:text-8xl font-bold text-white tracking-tight"
            >
              {text} •
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
          className="flex gap-12 pr-12"
        >
          {[...marqueeText, ...marqueeText].map((text, i) => (
            <div
              key={`dup-${i}`}
              className="text-6xl md:text-8xl font-bold text-white tracking-tight"
            >
              {text} •
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom marquee - moving right */}
      <div className="relative flex whitespace-nowrap justify-end">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex gap-12 pr-12"
        >
          {[...marqueeText, ...marqueeText].map((text, i) => (
            <div
              key={i}
              className="text-6xl md:text-8xl font-bold text-white/20 tracking-tight"
              style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.5)', color: 'transparent' }}
            >
              {text} •
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
          className="flex gap-12 pr-12"
        >
          {[...marqueeText, ...marqueeText].map((text, i) => (
            <div
              key={`dup-${i}`}
              className="text-6xl md:text-8xl font-bold text-white/20 tracking-tight"
              style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.5)', color: 'transparent' }}
            >
              {text} •
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
