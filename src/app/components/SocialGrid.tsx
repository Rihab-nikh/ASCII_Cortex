import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Linkedin, Twitter, Youtube } from 'lucide-react';

const posts = [
  { type: 'linkedin', content: 'AI Agent deployment case study', color: 'from-blue-500/40 to-cyan-600/40' },
  { type: 'twitter', content: 'Thoughts on LLM optimization', color: 'from-violet-500/40 to-purple-600/40' },
  { type: 'youtube', content: 'Computer Vision demo', color: 'from-purple-500/40 to-pink-600/40' },
  { type: 'linkedin', content: 'Team at AI Summit 2024', color: 'from-cyan-500/40 to-blue-600/40' },
  { type: 'twitter', content: 'Real-time ML inference tips', color: 'from-violet-600/40 to-blue-500/40' },
  { type: 'youtube', content: 'Building production AI', color: 'from-purple-600/40 to-violet-500/40' },
];

const iconMap = {
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
};

export default function SocialGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative py-32 px-8 bg-gradient-to-b from-[#05050F] to-[#0D0D1F]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="mb-16 text-center"
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-[#EEF0FF]">Latest</span>{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #7B2FFF 0%, #00C2FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Content
            </span>
          </h2>
          <p className="text-xl text-[#7A7FA8]">
            Insights, demos, and updates from the Altamira team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => {
            const Icon = iconMap[post.type as keyof typeof iconMap];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: index * 0.1 }}
                className="group relative aspect-square rounded-2xl overflow-hidden border border-[#7B2FFF]/20 hover:border-[#00C2FF] transition-all duration-500 cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${post.color}`} />
                <div className="absolute inset-0 bg-[#0D0D1F]/50 group-hover:bg-[#0D0D1F]/30 transition-all duration-500" />

                <div className="absolute top-6 right-6 z-10">
                  <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
                    <Icon size={20} className="text-[#EEF0FF]" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#05050F] to-transparent">
                  <p className="text-xl font-bold text-[#EEF0FF] group-hover:text-[#00C2FF] transition-colors">
                    {post.content}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
