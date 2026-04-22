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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#05050F]">
      {/* Animated particle background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, transparent 0%, #05050F 100%),
            repeating-linear-gradient(0deg, transparent, transparent 2px, #7B2FFF 2px, #7B2FFF 3px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, #7B2FFF 2px, #7B2FFF 3px)
          `,
          backgroundSize: '100% 100%, 60px 60px, 60px 60px',
          x: mousePosition.x,
          y: mousePosition.y,
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B2FFF]/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00C2FF]/20 rounded-full blur-[128px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block px-6 py-2 mb-4 rounded-full border border-[#7B2FFF]/30 bg-[#0D0D1F]/50 backdrop-blur-sm"
          >
            <span className="text-[#00C2FF] text-xs uppercase tracking-[0.2em] font-medium">
              AI-native since 2019
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(4rem,18vw,16rem)] font-bold leading-[0.85] tracking-[-0.06em]"
          >
            <span className="block text-[#EEF0FF]">ALTAMIRA</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(1.5rem,5vw,4rem)] font-bold leading-tight tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #7B2FFF 0%, #00C2FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            AI-NATIVE PRODUCT &<br />SOLUTIONS AGENCY
          </motion.h2>

          {/* Circuit trace signature - complex PCB-style path */}
          <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            width="300"
            height="60"
            viewBox="0 0 300 60"
            className="mx-auto my-8"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: 'easeInOut' }}
              d="M 0 30 L 40 30 L 50 20 L 50 10 L 60 10 L 70 30 L 100 30 L 110 40 L 110 50 L 130 50 L 140 30 L 170 30 L 180 20 L 190 20 L 200 30 L 230 30 L 240 40 L 250 40 L 260 30 L 300 30"
              stroke="#00C2FF"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                filter: 'drop-shadow(0 0 12px rgba(0, 194, 255, 0.9))',
              }}
            />
            <circle cx="50" cy="10" r="4" fill="#00C2FF" />
            <circle cx="110" cy="50" r="4" fill="#00C2FF" />
            <circle cx="190" cy="20" r="4" fill="#00C2FF" />
            <circle cx="250" cy="40" r="4" fill="#00C2FF" />
            <circle cx="70" cy="30" r="3" fill="#7B2FFF" opacity="0.8" />
            <circle cx="140" cy="30" r="3" fill="#7B2FFF" opacity="0.8" />
            <circle cx="200" cy="30" r="3" fill="#7B2FFF" opacity="0.8" />
          </motion.svg>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 1 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-[#7A7FA8] leading-relaxed"
          >
            Redefining limits, shipping AI, building what's next. Defining a legacy
            in intelligent software — in production, not just pitch decks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.3 }}
            className="flex gap-6 justify-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative px-10 py-4 rounded-full font-semibold text-lg tracking-wide text-[#EEF0FF] overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #7B2FFF 0%, #00C2FF 100%)',
                boxShadow: '0 8px 32px rgba(123, 47, 255, 0.4)',
              }}
            >
              Next Project
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 rounded-full font-semibold text-lg tracking-wide border-2 border-[#7B2FFF] text-[#EEF0FF] hover:bg-[#7B2FFF]/10"
            >
              Case Studies
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-[#00C2FF] rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-[#00C2FF] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
