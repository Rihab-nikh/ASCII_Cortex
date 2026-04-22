import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import LoadGate from './components/LoadGate';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import MessageSection from './components/MessageSection';
import HorizontalPhotoReel from './components/HorizontalPhotoReel';
import OnMissionOffMission from './components/OnMissionOffMission';
import SolutionsHallOfFame from './components/SolutionsHallOfFame';
import ClientPortalCTA from './components/ClientPortalCTA';
import PartnersMarquee from './components/PartnersMarquee';
import SocialGrid from './components/SocialGrid';
import Footer from './components/Footer';
import MobileRotatePrompt from './components/MobileRotatePrompt';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!loadingComplete) return;

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
  }, [loadingComplete]);

  return (
    <>
      <MobileRotatePrompt />
      {!loadingComplete && <LoadGate onComplete={() => setLoadingComplete(true)} />}
      <div className="bg-[#05050F] text-[#EEF0FF] min-h-screen">
        <Navigation />
        <Hero />
        <MessageSection />
        <HorizontalPhotoReel />
        <OnMissionOffMission />
        <SolutionsHallOfFame />
        <ClientPortalCTA />
        <PartnersMarquee />
        <SocialGrid />
        <Footer />
      </div>
    </>
  );
}