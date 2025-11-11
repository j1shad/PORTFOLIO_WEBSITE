import { useEffect, useState, useMemo } from 'react';
import GooeyNav from './GooeyNav.jsx';
import './GooeyNav.css';

interface GooeyNavBarProps {
  currentPath: string;
  base: string;
}

export default function GooeyNavBar({ currentPath, base }: GooeyNavBarProps) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Add responsive styles
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 640px) {
        .gooey-nav-container nav ul {
          gap: 0.5em !important;
          padding: 0 0.5em !important;
          font-size: 0.875rem !important;
        }
        .gooey-nav-container nav ul li a {
          padding: 0.4em 0.6em !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

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

  const navItems = [
    { label: 'Home', href: base || '/' },
    { label: 'About', href: `${base}/about` },
    { label: 'Projects', href: `${base}/projects` },
    { label: 'Blog', href: `${base}/blog` },
    { label: 'Contact', href: `${base}/contact` }
  ];

  const getActiveIndex = useMemo(() => {
    const normalizedPath = currentPath.endsWith('/') ? currentPath.slice(0, -1) : currentPath;
    const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;

    if (normalizedPath === normalizedBase || normalizedPath === '') return 0;
    if (normalizedPath.startsWith(`${normalizedBase}/blog`)) return 3;
    if (normalizedPath === `${normalizedBase}/about`) return 1;
    if (normalizedPath === `${normalizedBase}/projects`) return 2;
    if (normalizedPath === `${normalizedBase}/contact`) return 4;
    return 0;
  }, [currentPath, base]);

  return (
    <div
      className={`gooey-navbar-wrapper ${theme}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '0.5rem',
        ['--color-1' as string]: theme === 'dark' ? '#A855F7' : '#5227FF',
        ['--color-2' as string]: theme === 'dark' ? '#B19EEF' : '#FF9FFC',
        ['--color-3' as string]: theme === 'dark' ? '#8B5CF6' : '#B19EEF',
        ['--color-4' as string]: theme === 'dark' ? '#C084FC' : '#A855F7',
        ['--nav-bg' as string]: theme === 'dark' ? 'rgba(9, 9, 11, 0.4)' : 'rgba(255, 255, 255, 0.4)',
        ['--nav-text' as string]: theme === 'dark' ? '#E4E4E7' : '#09090B',
        ['--gooey-nav-text-color' as string]: theme === 'dark' ? '#E4E4E7' : '#09090B',
        ['--gooey-nav-active-text' as string]: theme === 'dark' ? '#09090B' : '#FFFFFF',
        ['--gooey-nav-active-bg' as string]: theme === 'dark' ? '#FFFFFF' : '#09090B',
        ['--gooey-nav-blend-mode' as string]: theme === 'dark' ? 'lighten' : 'normal'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: theme === 'dark' ? '1px solid hsl(240 4% 16%)' : '1px solid hsl(240 6% 90%)',
          borderRadius: '9999px',
          padding: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: theme === 'dark'
            ? '0 2px 8px hsla(262, 80%, 50%, 0.2)'
            : '0 2px 8px hsla(262, 80%, 50%, 0.15)'
        }}
      >
        <GooeyNav
          items={navItems}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          initialActiveIndex={getActiveIndex}
        />
      </div>
    </div>
  );
}
