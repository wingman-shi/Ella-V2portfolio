import { NAME, ROLE, HERO_BIO } from '@/data/site';

export default function Hero() {
  return (
    <section id="hero">
      <div className="marq">
        {Array.from({ length: 4 }, (_, i) => <span key={i}>{NAME.toUpperCase()}</span>)}
      </div>
      <div className="circ" style={{ width: 'min(700px,90vw)', aspectRatio: 1 }} />
      <div className="circ" style={{ width: 'min(940px,120vw)', aspectRatio: 1 }} />
      <div className="circ" style={{ width: 'min(1180px,150vw)', aspectRatio: 1 }} />
      <div className="hero-info">
        <p className="role">{ROLE}</p>
        <p>{HERO_BIO}</p>
        <div className="hero-actions">
          <a className="btn-primary" href="#projects">View Work</a>
          <a className="btn-ghost" href="#contact">Let&apos;s Talk →</a>
        </div>
      </div>
      <div className="scroll"><i /><b>Scroll Down</b></div>
    </section>
  );
}
