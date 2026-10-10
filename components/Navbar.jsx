'use client';
import { useEffect, useState } from 'react';
import { NAV_LINKS } from '@/data/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(null); // null until mounted (avoids hydration mismatch)
  const [activeHref, setActiveHref] = useState('');

  useEffect(() => {
    const t = document.documentElement.dataset.theme;
    setDark(t ? t === 'dark' : matchMedia('(prefers-color-scheme:dark)').matches);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const atPageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      const currentLink = [...NAV_LINKS].reverse().find(([, href]) => {
        const section = document.getElementById(href.slice(1));
        return section && section.getBoundingClientRect().top <= 120;
      });
      const nextHref = atPageBottom ? NAV_LINKS[NAV_LINKS.length - 1][1] : currentLink?.[1] ?? '';
      setActiveHref((currentHref) => currentHref === nextHref ? currentHref : nextHref);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const toggle = () => {
    const next = dark ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    setDark(!dark);
  };

  return (
    <nav>
      <a href="#hero" className="brand"><span className="logo">M</span>MARIENELLA</a>
      <div className={`links ${open ? 'open' : ''}`}>
        {NAV_LINKS.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className={activeHref === href ? 'active' : ''}
            aria-current={activeHref === href ? 'location' : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </div>
      <div className="right">
        <button className="ibtn" onClick={toggle} aria-label="Toggle theme">
          {dark === null ? '☾' : dark ? '☾' : '☀'}
        </button>
        <a href="#contact" className="cta">Contact Me</a>
        <button className="ibtn burger" onClick={() => setOpen((o) => !o)} aria-label="Menu">☰</button>
      </div>
    </nav>
  );
}
