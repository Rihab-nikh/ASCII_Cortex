import { motion } from 'motion/react';
import { Menu, Sparkles } from 'lucide-react';

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: [0.65, 0.05, 0, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-[#0a0a1f]/80 backdrop-blur-xl border-b border-purple-500/10"
    >
      <div className="max-w-[1920px] mx-auto flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: [0.65, 0.05, 0, 1] }}
          className="flex items-center gap-3 text-2xl font-bold tracking-tight"
        >
          <Sparkles className="text-violet-400" size={28} />
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Nexus
          </span>
          <span className="text-white">AI</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-wide">
          <a href="#services" className="hover:text-violet-400 transition-colors duration-300">
            Services
          </a>
          <a href="#industries" className="hover:text-violet-400 transition-colors duration-300">
            Industries
          </a>
          <a href="#expertise" className="hover:text-violet-400 transition-colors duration-300">
            Expertise
          </a>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="border border-violet-500/50 rounded-full p-3 hover:bg-violet-500 hover:text-white hover:border-violet-500 transition-all duration-500"
          style={{ transition: 'all 0.75s cubic-bezier(0.65, 0.05, 0, 1)' }}
        >
          <Menu size={20} />
        </motion.button>
      </div>
    </motion.nav>
  );
}
