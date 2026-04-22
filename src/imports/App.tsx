import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import Marquee from './components/Marquee';
import Stats from './components/Stats';
import Navigation from './components/Navigation';
import Industries from './components/Industries';

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#0a0a1f] text-white min-h-screen">
      <Navigation />
      <Hero />
      <Stats />
      <Marquee />
      <ServicesGrid />
      <Industries />
    </div>
  );
}
