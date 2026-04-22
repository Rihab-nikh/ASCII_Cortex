import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-20 px-8 bg-gradient-to-b from-[#0D0D1F] to-[#05050F] overflow-hidden">
      {/* Animated blobs */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          y: [0, 8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-[#7B2FFF]/10 rounded-full blur-[128px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00C2FF]/10 rounded-full blur-[128px]"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-6xl font-bold mb-4"
              style={{
                background: 'linear-gradient(135deg, #7B2FFF 0%, #00C2FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
          >
            "Always bringing the intelligence."
          </h3>
        </motion.div>

        {/* Rotating orb visualization */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="flex justify-center mb-16"
        >
          <div className="relative w-48 h-48">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, #7B2FFF 0%, #00C2FF 100%)',
                filter: 'blur(40px)',
              }}
            />
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Sparkles size={48} className="text-[#00C2FF]" />
            </motion.div>
          </div>
        </motion.div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
          <div>
            <h4 className="text-[#EEF0FF] font-bold mb-4 uppercase tracking-wider text-sm">Solutions</h4>
            <ul className="space-y-2 text-[#7A7FA8]">
              <li><a href="#" className="hover:text-[#00C2FF] transition-colors">AI Agents</a></li>
              <li><a href="#" className="hover:text-[#00C2FF] transition-colors">Chatbots</a></li>
              <li><a href="#" className="hover:text-[#00C2FF] transition-colors">Computer Vision</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#EEF0FF] font-bold mb-4 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-2 text-[#7A7FA8]">
              <li><a href="#" className="hover:text-[#00C2FF] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#00C2FF] transition-colors">Team</a></li>
              <li><a href="#" className="hover:text-[#00C2FF] transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#EEF0FF] font-bold mb-4 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-2 text-[#7A7FA8]">
              <li><a href="#" className="hover:text-[#00C2FF] transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-[#00C2FF] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#00C2FF] transition-colors">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#EEF0FF] font-bold mb-4 uppercase tracking-wider text-sm">Connect</h4>
            <ul className="space-y-2 text-[#7A7FA8]">
              <li><a href="#" className="hover:text-[#00C2FF] transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-[#00C2FF] transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-[#00C2FF] transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#7B2FFF]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="text-[#00C2FF]" size={24} />
            <span className="text-[#EEF0FF] font-bold text-xl">ALTAMIRA</span>
          </div>
          <p className="text-[#7A7FA8] text-sm">
            © 2026 Altamira AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
