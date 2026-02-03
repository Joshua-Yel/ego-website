import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSolutionSection } from '@/components/ProblemSolutionSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { PricingSection } from '@/components/PricingSection';
import { AboutSection } from '@/components/AboutSection';
import { AppShowcase } from '@/components/AppShowcase';
import { BetaSection } from '@/components/BetaSection';
import { ImpactSection } from '@/components/ImpactSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
// import { Background } from '@/components/Background';

const Index = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-[#1a1d29] text-white relative overflow-hidden">
      {/* <Background mousePos={mousePos} /> */}
      <Navbar />
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <PricingSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;