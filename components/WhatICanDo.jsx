import Reveal from './Reveal';
import { SKILLS } from '@/data/skills';

export default function WhatICanDo() {
  return (
    <section className="s" id="skills">
      <Reveal>
        <div className="lab">Expertise</div>
        <h2 className="t">Skills &amp; Technologies</h2>
      </Reveal>
      <div className="skill-grid">
        {SKILLS.map((g, i) => (
          <Reveal key={g.cat} className="bento">
            <div className="bh"><b>{String(i + 1).padStart(2, '0')}</b>{g.cat}</div>
            <div className="tags">{g.items.map((t) => <span key={t}>{t}</span>)}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
