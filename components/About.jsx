import Reveal from './Reveal';
import { NAME, SOCIALS, DETAILS } from '@/data/site';

export default function About() {
  return (
    <section className="s" id="about">
      <Reveal>
        <div className="lab">About Me</div>
        <h2 className="t">Turning ideas into <span className="hl">pixel-perfect</span> reality</h2>
        <div className="prof">
          <div className="ph">
            <div className="av"><img src="/images/portrait.jpg" alt={NAME} /></div>
            <div className="pd">
              <div className="pn">{NAME.toUpperCase()}</div>
              <p>
                I&apos;m a frontend developer and designer who believes great software should be both beautiful and blazing fast. I specialize in React ecosystems, motion design, and crafting design systems from scratch.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me sketching UI concepts in Figma, listening to music, or exploring the city of Iloilo.
              </p>
              <div className="social">
                {SOCIALS.map(([l, h]) => <a key={l} href={h}>{l}</a>)}
              </div>
            </div>
          </div>
          <div className="bot">
            <div className="cur">
              {DETAILS.map(([ic, t]) => <div className="ci" key={t}>{ic}<div>{t}</div></div>)}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
