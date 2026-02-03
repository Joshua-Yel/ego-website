import { Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onFinished: () => void;
}

export const SplashScreen = ({ onFinished }: SplashScreenProps) => {
  const [animationState, setAnimationState] = useState('start');

  useEffect(() => {
    // This function calculates the final position and scale for the logo transition.
    const setLogoTransitionProperties = () => {
      const splashLogo = document.getElementById('splash-logo-wrapper');
      const navLogo = document.getElementById('nav-logo');

      if (splashLogo && navLogo) {
        const splashRect = splashLogo.getBoundingClientRect();
        const navRect = navLogo.getBoundingClientRect();

        // Calculate the translation and scale needed to move the splash logo
        // to the navbar logo's position and size.
        const translateX = navRect.left - splashRect.left;
        const translateY = navRect.top - splashRect.top;
        const scale = navRect.width / splashRect.width;

        // Set CSS custom properties for the transition.
        const root = document.documentElement;
        root.style.setProperty('--logo-translate-x', `${translateX}px`);
        root.style.setProperty('--logo-translate-y', `${translateY}px`);
        root.style.setProperty('--logo-scale', `${scale}`);
      }
    };

    // Set properties on mount and on window resize.
    setLogoTransitionProperties();
    window.addEventListener('resize', setLogoTransitionProperties);

    // --- Animation Sequencing ---

    // 1. Start the logo scale-up animation immediately.
    const logoTimer = setTimeout(() => {
      setAnimationState((prev) => (prev === 'start' ? 'logo-start' : prev));
    }, 300);

    // 2. Start the circular reveal and logo transition after a delay.
    const revealTimer = setTimeout(() => {
      setAnimationState('reveal-start');
    }, 9000); // Wait 4s before starting the exit transition (total 5s+)

    // 3. Handle the end of the full animation sequence.
    const splashScreen = document.getElementById('splash-screen');
    const handleAnimationEnd = (event: AnimationEvent) => {
      // The final animation to end is 'circular-reveal'.
      if (event.animationName === 'circular-reveal') {
        onFinished();
      }
    };

    splashScreen?.addEventListener('animationend', handleAnimationEnd);

    return () => {
      window.removeEventListener('resize', setLogoTransitionProperties);
      splashScreen?.removeEventListener('animationend', handleAnimationEnd);
      clearTimeout(logoTimer);
      clearTimeout(revealTimer);
    };
  }, [onFinished]);

  // A map of animation states to their corresponding CSS classes.
  const animationClasses = {
    start: 'splash-start',
    'logo-start': 'splash-logo-start',
    'reveal-start': 'splash-reveal-start splash-transition-start',
  };

  return (
    <div id="splash-screen" className={`splash-screen ${animationClasses[animationState]}`}>
      <div id="splash-logo-wrapper" className="splash-logo-wrapper">
        {/* 
          This is the animating logo. It's larger than the final navbar logo.
          The size (h-16 w-16) and color (text-primary-foreground) are specific to the splash.
        */}
        <Zap className="h-16 w-16 text-primary-foreground" />
      </div>
    </div>
  );
};