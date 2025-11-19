import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { LaunchPack } from './components/LaunchPack';
import { Showcase } from './components/Showcase';
import { About } from './components/About';
import { WaitlistSection } from './components/WaitlistSection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans overflow-x-hidden bg-white text-neutral-900">
      <Toaster 
        position="bottom-center" 
        toastOptions={{
          style: {
            background: '#0B1220',
            color: '#fff',
            fontFamily: 'Inter, sans-serif',
            borderRadius: '12px',
            padding: '16px',
          },
        }}
      />
      
      <Navbar scrolled={scrolled} />
      
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <LaunchPack />
        <Showcase />
        <About />
        <WaitlistSection />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default App;