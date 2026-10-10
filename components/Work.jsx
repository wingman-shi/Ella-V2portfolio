'use client';
import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import { PROJECTS } from '@/data/projects';

export default function Work() {
  const [cur, setCur] = useState(0);
  const [narrow, setNarrow] = useState(false);
  const touchX = useRef(0);
  const n = PROJECTS.length;

  useEffect(() => {
    const onResize = () => setNarrow(innerWidth < 700);
    onResize();
    addEventListener('resize', onResize);
    return () => removeEventListener('resize', onResize);
  }, []);

  // Auto-advance; restarts whenever the user picks a project.
  useEffect(() => {
    const t = setInterval(() => setCur((c) => (c + 1) % n), 5000);
    return () => clearInterval(t);
  }, [cur, n]);

  const p = PROJECTS[cur];

  return (
    <section className="s" id="projects">
      <Reveal>
        <div className="lab">Selected Work</div>
        <h2 className="t">Projects I&apos;m proud of</h2>
      </Reveal>

      <Reveal
        className="album"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          const d = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(d) > 40) setCur((c) => (c + (d < 0 ? 1 : n - 1)) % n);
        }}
      >
        {PROJECTS.map((w, i) => {
          const half = Math.floor(n / 2);
          const o = ((i - cur + n + half) % n) - half;
          const a = Math.abs(o);
          const x = o * (a === 1 ? 200 : 330) * (narrow ? 0.55 : 1);
          const s = a === 0 ? 1 : a === 1 ? 0.72 : 0.55;
          return (
            <div
              key={i}
              className="al"
              onClick={() => setCur(i)}
              style={{
                background: `linear-gradient(135deg,${w.colors})`,
                transform: `translate(calc(-50% + ${x}px),-50%) scale(${s})`,
                zIndex: 5 - a,
                opacity: a === 0 ? 1 : a === 1 ? 0.85 : 0.3,
              }}
            >
              <img src={w.img} alt={w.title} draggable={false} />
            </div>
          );
        })}
      </Reveal>

      <div className="dots">
        {PROJECTS.map((_, i) => (
          <button key={i} className={i === cur ? 'on' : ''} onClick={() => setCur(i)} aria-label={`Project ${i + 1}`} />
        ))}
      </div>

      <Reveal className="winfo">
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
        <div className="ptags">{p.tags.map((t) => <span key={t}>{t}</span>)}</div>
        <a href={p.href} target="_blank" rel="noopener noreferrer">View Project →</a>
      </Reveal>
    </section>
  );
}
