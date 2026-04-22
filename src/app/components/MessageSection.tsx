import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function MessageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative py-32 px-8 bg-gradient-to-b from-[#05050F] to-[#0D0D1F] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7B2FFF]/10 rounded-full blur-[128px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-xs uppercase tracking-[0.2em] text-[#00C2FF] mb-6 font-medium">
            Message from the Agency
          </h2>
          <blockquote className="text-4xl md:text-6xl font-bold leading-tight text-[#EEF0FF] italic mb-12">
            "We don't just solve problems — we uncover what AI can truly do."
          </blockquote>
          <p className="text-xl md:text-2xl text-[#7A7FA8] max-w-4xl mx-auto leading-relaxed">
            Redefining limits, shipping AI, building what's next. Defining a legacy in
            intelligent software — in production, not just pitch decks.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { title: 'Proof of concept', subtitle: '→ Production' },
            { title: '60% fewer', subtitle: 'support hours' },
            { title: '1M+ users', subtitle: 'served daily' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.3 + index * 0.1 }}
              className="relative group"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-[#7B2FFF]/20 hover:border-[#00C2FF] transition-all duration-500 bg-[#0D0D1F]/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7B2FFF]/20 to-[#00C2FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#EEF0FF] mb-2">
                    {stat.title}
                  </div>
                  <div className="text-xl md:text-2xl text-[#00C2FF] font-medium">
                    {stat.subtitle}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
