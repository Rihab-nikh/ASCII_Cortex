import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export default function OnMissionOffMission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="mission"
      ref={ref}
      className="relative py-32 px-8 bg-gradient-to-b from-[#0D0D1F] to-[#05050F] overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00C2FF]/10 rounded-full blur-[128px]" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* ON MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl font-bold text-[#EEF0FF] leading-none"
              >
                ON
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl font-bold leading-none"
                style={{
                  background: 'linear-gradient(135deg, #7B2FFF 0%, #00C2FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                MISSION
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.5 }}
              className="space-y-6 text-[#7A7FA8]"
            >
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#00C2FF]" />
                <div>
                  <h3 className="text-xl font-bold text-[#EEF0FF] mb-2">Case Studies</h3>
                  <p>Real-world AI deployments solving complex business challenges</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#00C2FF]" />
                <div>
                  <h3 className="text-xl font-bold text-[#EEF0FF] mb-2">Client Outcomes</h3>
                  <p>Measurable results from production AI systems</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#00C2FF]" />
                <div>
                  <h3 className="text-xl font-bold text-[#EEF0FF] mb-2">Tech Stack</h3>
                  <p>Cutting-edge AI frameworks and infrastructure</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* OFF MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl font-bold text-[#EEF0FF] leading-none"
              >
                OFF
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl font-bold leading-none"
                style={{
                  background: 'linear-gradient(135deg, #00C2FF 0%, #7B2FFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                MISSION
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.7 }}
              className="space-y-6 text-[#7A7FA8]"
            >
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#7B2FFF]" />
                <div>
                  <h3 className="text-xl font-bold text-[#EEF0FF] mb-2">Team Culture</h3>
                  <p>Inside our AI-native agency and how we work</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#7B2FFF]" />
                <div>
                  <h3 className="text-xl font-bold text-[#EEF0FF] mb-2">Events & Summits</h3>
                  <p>Conferences, workshops, and team gatherings</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#7B2FFF]" />
                <div>
                  <h3 className="text-xl font-bold text-[#EEF0FF] mb-2">Thought Leadership</h3>
                  <p>Insights, research, and perspectives on AI's future</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
