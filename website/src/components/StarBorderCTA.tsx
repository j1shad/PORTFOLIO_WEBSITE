import { useEffect, useState } from 'react';
import StarBorder from './StarBorder.jsx';

interface StarBorderCTAProps {
  href: string;
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

export default function StarBorderCTA({ href, variant, children, className = '' }: StarBorderCTAProps) {
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

  const getColor = () => {
    if (theme === 'light') {
      return variant === 'primary' ? '#5227FF' : 'cyan';
    } else {
      return variant === 'primary' ? '#A855F7' : '#C084FC';
    }
  };

  return (
    <StarBorder
      as="a"
      href={href}
      className={`w-full sm:w-auto ${className}`}
      color={getColor()}
      speed="5s"
      thickness={1}
    >
      {children}
    </StarBorder>
  );
}
