import { useEffect, useState } from 'react';
import StarBorder from './StarBorder.jsx';

interface StarBorderWrapperProps {
  as?: 'div' | 'a' | 'button';
  href?: string;
  className?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'subtle';
  onClick?: () => void;
}

export default function StarBorderWrapper({
  as = 'div',
  href,
  className = '',
  children,
  variant = 'primary',
  onClick
}: StarBorderWrapperProps) {
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
      if (variant === 'primary') return '#5227FF';
      if (variant === 'secondary') return 'cyan';
      return '#8B5CF6'; // subtle
    } else {
      if (variant === 'primary') return '#A855F7';
      if (variant === 'secondary') return '#C084FC';
      return '#8B5CF6'; // subtle
    }
  };

  const props: any = {
    className: `w-full ${className}`,
    color: getColor(),
    speed: '6s',
    thickness: 1,
  };

  if (href) {
    props.href = href;
  }

  if (onClick) {
    props.onClick = onClick;
  }

  return (
    <StarBorder
      as={as}
      {...props}
    >
      {children}
    </StarBorder>
  );
}
