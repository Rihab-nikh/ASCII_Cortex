import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const photos = [
  {
    caption: 'AI Agent launch, 2024',
    image: 'https://images.unsplash.com/photo-1716703432455-3045789de738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    caption: 'Computer Vision PoC, 2023',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    caption: 'Chatbot live for 1M+ users',
    image: 'https://images.unsplash.com/photo-1767163934854-655747a35068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    caption: '60% fewer support hours',
    image: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    caption: 'Team summit, Q1 2024',
    image: 'https://images.unsplash.com/photo-1759884247160-27b8465544b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
  {
    caption: 'Whiteboard strategy session',
    image: 'https://images.unsplash.com/photo-1775709610612-c589e29679ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
  },
];

export default function HorizontalPhotoReel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative py-32 bg-[#0D0D1F] overflow-hidden">
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

      <div
        ref={scrollRef}
        className="overflow-x-auto overflow-y-hidden scrollbar-hide snap-x snap-mandatory pb-8"
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div className="flex gap-8 px-8 min-w-max">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[400px] md:w-[500px] h-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-[#7B2FFF]/20 hover:border-[#00C2FF] transition-all duration-500 group snap-center"
            >
              <ImageWithFallback
                src={photo.image}
                alt={photo.caption}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#7B2FFF]/20 to-[#00C2FF]/20 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-[#0D0D1F]/30 group-hover:bg-[#0D0D1F]/10 transition-all duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#05050F] via-[#05050F]/80 to-transparent">
                <p className="text-2xl font-bold text-[#EEF0FF]">{photo.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
