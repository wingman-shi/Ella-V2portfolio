'use client';
import { useState } from 'react';
import Reveal from './Reveal';
import { EMAIL } from '@/data/site';

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${f.name || 'a visitor'}`);
    const body = encodeURIComponent(`${f.message}\n\n— ${f.name} (${f.email})`);
    location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="s" id="contact">
      <div className="grid2">
        <Reveal>
          <div className="lab">Get In Touch</div>
          <h2 className="ch">LET&apos;S<br /><em>CREATE</em><br />TOGETHER</h2>
          <p className="desc">
            Let&apos;s create something beautiful together. I&apos;m currently open to freelance projects and full-time opportunities. Drop me a message!
          </p>
          <p className="direct">Or reach me directly: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        </Reveal>
        <Reveal>
          <form className="form" onSubmit={submit}>
            <label>Name<input required value={f.name} onChange={set('name')} placeholder="Your name" /></label>
            <label>Email<input required type="email" value={f.email} onChange={set('email')} placeholder="your@email.com" /></label>
            <label>Message<textarea required rows={5} value={f.message} onChange={set('message')} placeholder="Tell me about your project..." /></label>
            <button className="big" type="submit">Send Message ✦</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
