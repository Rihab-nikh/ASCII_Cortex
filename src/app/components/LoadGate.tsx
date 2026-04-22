import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface LoadGateProps {
  onComplete: () => void;
}

export default function LoadGate({ onComplete }: LoadGateProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: progress >= 100 ? 0 : 1 }}
      transition={{ duration: 0.5, delay: progress >= 100 ? 0 : 0 }}
      className="fixed inset-0 z-[100] bg-[#05050F] flex items-center justify-center"
      style={{ pointerEvents: progress >= 100 ? 'none' : 'auto' }}
    >
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-12"
          style={{
            background: 'linear-gradient(135deg, #7B2FFF 0%, #00C2FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          INITIALIZING ALTAMIRA
        </motion.h1>

        <div className="w-80 h-1 bg-[#0D0D1F] rounded-full overflow-hidden mx-auto">
          <motion.div
            className="h-full rounded-full"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #7B2FFF 0%, #00C2FF 100%)',
              boxShadow: '0 0 20px rgba(123, 47, 255, 0.6)',
            }}
          />
        </div>

        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="mt-6 text-[#7A7FA8] text-sm tracking-widest uppercase"
        >
          AI-NATIVE SINCE 2019
        </motion.div>
      </div>
    </motion.div>
  );
}
