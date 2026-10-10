'use client';
import { useEffect, useRef, useState } from 'react';

// Fades/slides children in when scrolled into view.
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`rv ${ready && !seen ? 'pre' : ''} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  );
}
