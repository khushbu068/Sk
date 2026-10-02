import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SlideOne } from '@/slides/SlideOne';
import { SlideTwo } from '@/slides/SlideTwo';
import { SlideThree } from '@/slides/SlideThree';
import { SlideFour } from '@/slides/SlideFour';
import { SlideFive } from '@/slides/SlideFive';
import { FloatingHearts, FallingPetals } from '@/components/FloatingHearts';
import { HeartNav } from '@/components/HeartNav';
import { MusicToggle } from '@/components/MusicToggle';
import { HeartIcon } from '@/components/Decorations';

const SECTIONS = ['Bubu', 'Things I Love', 'Our Story', 'Memories', 'For You'];

function App() {
  const [entered, setEntered] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const handleNavigate = useCallback((index: number) => {
    const target = sectionRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const setRef = useCallback((index: number) => (el: HTMLElement | null) => {
    sectionRefs.current[index] = el;
  }, []);

  useEffect(() => {
    if (!entered) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.sectionIndex);
            setActiveSection(index);
          }
        });
      },
      { threshold: 0.35 }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [entered]);

  return (
    <div className="relative min-h-screen">
      {/* Background effects — only after entering */}
      {entered && (
        <>
          <FloatingHearts count={12} />
          <FallingPetals count={15} />
        </>
      )}

      {/* Heart navigation — only after entering */}
      {entered && (
        <HeartNav
          sections={SECTIONS}
          activeSection={activeSection}
          onNavigate={handleNavigate}
        />
      )}

      {/* Music toggle — always visible */}
      <MusicToggle />

      {/* Opening screen — full takeover until entered */}
      <AnimatePresence mode="wait">
        {!entered && (
          <motion.div
            key="opening"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SlideOne onProceed={() => setEntered(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* All 5 slides in scrollable layout — shown after entering */}
      <AnimatePresence>
        {entered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Slide 1 — Hero (scrollable version) */}
            <section ref={setRef(0)} data-section-index={0}>
              <SlideOne
                isOpening={false}
                onProceed={() => {
                  const el = sectionRefs.current[1];
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </section>

            {/* Slide 2 — Things I Love About My Bubu */}
            <section ref={setRef(1)} data-section-index={1}>
              <SlideTwo />
            </section>

            {/* Slide 3 — Our Story Timeline */}
            <section ref={setRef(2)} data-section-index={2}>
              <SlideThree />
            </section>

            {/* Slide 4 — Little Moments, Big Memories */}
            <section ref={setRef(3)} data-section-index={3}>
              <SlideFour />
            </section>

            {/* Slide 5 — Finale Love Message */}
            <section ref={setRef(4)} data-section-index={4}>
              <SlideFive />
            </section>

            {/* Footer */}
            <footer className="relative bg-gradient-burgundy py-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <HeartIcon size={16} className="text-baby-300 animate-heartbeat" />
                <span className="font-handwritten text-lg text-baby-200">
                  made with too much love for my Bubu ❤️
                </span>
                <HeartIcon size={16} className="text-baby-300 animate-heartbeat" />
              </div>
              <p className="font-handwritten text-sm text-baby-400/60">
                Happy Boyfriend Day, Bubu 🌹
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
