import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { label: 'Projects Delivered', value: 250, suffix: '+' },
  { label: 'Enterprise Clients', value: 85, suffix: '+' },
  { label: 'AI Models Deployed', value: 120, suffix: '+' },
  { label: 'Success Rate', value: 98, suffix: '%' },
];

function AnimatedNumber({ value, duration = 2 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      setDisplayValue(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <div ref={ref}>{displayValue}</div>;
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      id="stats"
      className="relative py-32 px-8 bg-gradient-to-b from-[#0a0a1f] to-[#1a0f2e]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.65, 0.05, 0, 1] }}
          className="text-6xl md:text-8xl font-bold mb-20 text-center"
        >
          <span className="text-white">Proven</span>{' '}
          <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Excellence
          </span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.75,
                delay: index * 0.15,
                ease: [0.65, 0.05, 0, 1],
              }}
              className="relative group"
            >
              <div className="border-2 border-purple-500/20 rounded-2xl p-8 hover:border-violet-500 transition-all duration-700 hover:bg-purple-950/30 backdrop-blur-sm"
                   style={{ transition: 'all 0.75s cubic-bezier(0.65, 0.05, 0, 1)' }}>
                <div className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-violet-400 to-blue-400 bg-clip-text text-transparent mb-4 font-mono">
                  <AnimatedNumber value={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-sm md:text-base font-medium tracking-wider uppercase text-gray-400 group-hover:text-white transition-colors duration-500">
                  {stat.label}
                </div>

                {/* Accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.15 + 0.5,
                    ease: [0.65, 0.05, 0, 1],
                  }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-violet-500 to-transparent origin-left"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
