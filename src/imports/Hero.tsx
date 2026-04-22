import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1f] via-[#1a0f2e] to-[#0a0a1f]" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]" />

      {/* Animated grid */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #8b5cf6 1px, transparent 1px),
            linear-gradient(to bottom, #8b5cf6 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          x: mousePosition.x,
          y: mousePosition.y,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.65, 0.05, 0, 1] }}
          className="space-y-8"
        >
          <motion.h1
            className="text-[clamp(3rem,12vw,12rem)] font-bold leading-[0.83] tracking-[-0.05em]"
            style={{ textShadow: '0 0 80px rgba(139, 92, 246, 0.5)' }}
          >
            <span className="block">AI-POWERED</span>
            <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              INNOVATION
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.8, ease: [0.65, 0.05, 0, 1] }}
            className="text-xl md:text-2xl font-light tracking-wide max-w-3xl mx-auto text-gray-300"
          >
            Enterprise AI solutions, custom software development, and intelligent automation
            that transforms your business into a future-ready powerhouse.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.2, ease: [0.65, 0.05, 0, 1] }}
            className="flex gap-6 justify-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-10 py-4 rounded-full font-semibold text-lg tracking-wide shadow-lg shadow-violet-500/50"
              style={{ transition: 'all 0.75s cubic-bezier(0.65, 0.05, 0, 1)' }}
            >
              Start Your Project
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="border-2 border-violet-500 text-white px-10 py-4 rounded-full font-semibold text-lg tracking-wide hover:bg-violet-500/10"
              style={{ transition: 'all 0.75s cubic-bezier(0.65, 0.05, 0, 1)' }}
            >
              Explore Services
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, delay: 1.8, ease: [0.65, 0.05, 0, 1] }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-violet-400 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
