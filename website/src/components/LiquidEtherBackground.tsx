import { useEffect, useState } from 'react';
import LiquidEther from './LiquidEther.jsx';

export default function LiquidEtherBackground() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const lightColors = ['#5227FF', '#FF9FFC', '#B19EEF'];
  const darkColors = ['#A855F7', '#8B5CF6', '#C084FC'];

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      zIndex: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none'
    }}>
      <LiquidEther
        colors={theme === 'dark' ? darkColors : lightColors}
        mouseForce={20}
        cursorSize={100}
        isViscous={false}
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo={false}
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />
    </div>
  );
}
