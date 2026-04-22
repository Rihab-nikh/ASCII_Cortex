import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

const photos = [
  { caption: 'AI Agent launch, 2024', color: 'from-violet-500/40 to-purple-600/40' },
  { caption: 'Computer Vision PoC, 2023', color: 'from-blue-500/40 to-cyan-600/40' },
  { caption: 'Chatbot live for 1M+ users', color: 'from-purple-500/40 to-pink-600/40' },
  { caption: '60% fewer support hours', color: 'from-cyan-500/40 to-blue-600/40' },
  { caption: 'Team summit, Q1 2024', color: 'from-violet-500/40 to-blue-600/40' },
  { caption: 'Whiteboard strategy session', color: 'from-purple-500/40 to-violet-600/40' },
];

export default function HorizontalPhotoReel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['5%', '-60%']);

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-[#0D0D1F] overflow-hidden"
    >
      <div className="mb-16 px-8">
        <h2 className="text-6xl md:text-8xl font-bold text-[#EEF0FF]">
          Our <span
            style={{
              background: 'linear-gradient(135deg, #7B2FFF 0%, #00C2FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >Journey</span>
        </h2>
      </div>

      <motion.div
        style={{ x }}
        className="flex gap-8 px-8"
      >
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative flex-shrink-0 w-[400px] md:w-[500px] h-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-[#7B2FFF]/20 hover:border-[#00C2FF] transition-all duration-500 group"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${photo.color}`} />
            <div className="absolute inset-0 bg-[#0D0D1F]/30 group-hover:bg-[#0D0D1F]/10 transition-all duration-500" />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#05050F] to-transparent"
            >
              <p className="text-2xl font-bold text-[#EEF0FF]">{photo.caption}</p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
