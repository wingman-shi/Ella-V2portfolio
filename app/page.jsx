import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import WhatICanDo from '@/components/WhatICanDo';
import Contact from '@/components/Contact';
import { NAME, SOCIALS } from '@/data/site';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <WhatICanDo />
      <Contact />
      <footer>
        <div className="foot">
          <div className="logo">M</div>
          <p>© 2025 {NAME} — Designed &amp; built with ♥ using Next.js + React</p>
          <div className="foot-links">
            {SOCIALS.slice(0, 3).map(([l, h]) => <a key={l} href={h}>{l}</a>)}
          </div>
        </div>
      </footer>
    </>
  );
}
