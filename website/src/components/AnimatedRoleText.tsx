import { useEffect, useState } from 'react';
import RotatingText from './RotatingText.jsx';

export default function AnimatedRoleText() {
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

  const roles = ['Data Engineering', 'Data Analysis', 'Data Science'];

  const lightColors = ['#5227FF', '#FF9FFC', '#B19EEF', '#A855F7', '#5227FF'];
  const darkColors = ['#A855F7', '#C084FC', '#B19EEF', '#8B5CF6', '#A855F7'];

  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${theme === 'dark' ? darkColors.join(', ') : lightColors.join(', ')})`,
    backgroundSize: '300% 100%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    animation: 'gradient 8s linear infinite',
    display: 'inline-block',
    fontWeight: 600
  };

  return (
    <>
      <RotatingText
        texts={roles}
        mainClassName="inline-block font-semibold"
        staggerFrom="last"
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '-120%' }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden"
        elementLevelClassName="gradient-role-text"
        transition={{ type: 'spring', damping: 30, stiffness: 400 }}
        rotationInterval={3000}
        splitBy="characters"
      />
      <style jsx global>{`
        .gradient-role-text {
          display: inline-block;
          background-image: linear-gradient(to right, ${theme === 'dark' ? darkColors.join(', ') : lightColors.join(', ')});
          background-size: 300% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: gradient 8s linear infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  );
}
