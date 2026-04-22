import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function ClientPortalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative py-32 px-8 bg-[#0D0D1F] overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-[#7B2FFF]/20 to-[#00C2FF]/20 rounded-full blur-[128px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-[#EEF0FF]">World-Class AI.</span>
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #7B2FFF 0%, #00C2FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Built for your business.
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-[#7A7FA8] max-w-3xl mx-auto mb-12">
              From proof of concept to production deployment. We build AI systems
              that deliver measurable business outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-12 py-5 rounded-full font-semibold text-lg tracking-wide text-[#EEF0FF] overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #7B2FFF 0%, #00C2FF 100%)',
                boxShadow: '0 8px 32px rgba(123, 47, 255, 0.4)',
              }}
            >
              <span className="flex items-center gap-2">
                View Case Studies
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-5 rounded-full font-semibold text-lg tracking-wide border-2 border-[#7B2FFF] text-[#EEF0FF] hover:bg-[#7B2FFF]/10 transition-colors"
            >
              Contact Us
            </motion.button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
