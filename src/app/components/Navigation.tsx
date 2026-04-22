import { motion } from 'motion/react';
import { Menu, Sparkles } from 'lucide-react';

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 2.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-[#05050F]/80 backdrop-blur-xl border-b border-[#7B2FFF]/10"
    >
      <div className="max-w-[1920px] mx-auto flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 text-2xl font-bold tracking-tight cursor-pointer"
        >
          <Sparkles className="text-[#00C2FF]" size={28} />
          <span
            style={{
              background: 'linear-gradient(135deg, #7B2FFF 0%, #00C2FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            ALTAMIRA
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-wide text-[#EEF0FF]">
          <a href="#solutions" className="hover:text-[#00C2FF] transition-colors duration-300">
            Solutions
          </a>
          <a href="#mission" className="hover:text-[#00C2FF] transition-colors duration-300">
            Mission
          </a>
          <a href="#industries" className="hover:text-[#00C2FF] transition-colors duration-300">
            Industries
          </a>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="border border-[#7B2FFF]/50 rounded-full p-3 hover:bg-[#7B2FFF] hover:border-[#7B2FFF] transition-all duration-500 text-[#EEF0FF]"
        >
          <Menu size={20} />
        </motion.button>
      </div>
    </motion.nav>
  );
}
