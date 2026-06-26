import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { AnimatedBackground } from './components/ui/AnimatedBackground';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { Preloader } from './components/ui/Preloader';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Contact } from './components/sections/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  // Lock scrolling and reset to the top while the intro plays.
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : '';
    if (loading) window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = '';
    };
  }, [loading]);

  return (
    <div className="relative min-h-screen overflow-clip">
      <AnimatePresence>
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <AnimatedBackground />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
