import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RotateCw } from 'lucide-react';

export default function MobileRotatePrompt() {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isLandscape = window.innerWidth > window.innerHeight;
      const isMobile = window.innerWidth < 768;
      setShowPrompt(isLandscape && isMobile);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  return (
    <AnimatePresence>
      {showPrompt && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-[#05050F] flex items-center justify-center"
        >
          <div className="text-center px-8">
            <motion.div
              animate={{ rotate: [0, 90, 90, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="mb-8 flex justify-center"
            >
              <RotateCw size={64} className="text-[#00C2FF]" />
            </motion.div>

            <h2
              className="text-4xl font-bold mb-4"
              style={{
                background: 'linear-gradient(135deg, #7B2FFF 0%, #00C2FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              This is a vertical mission.
            </h2>

            <p className="text-xl text-[#7A7FA8]">
              Please rotate your device to portrait mode for the best experience.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
