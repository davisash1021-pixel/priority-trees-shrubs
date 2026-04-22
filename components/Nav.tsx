'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const links = [
  { href: '#about', label: 'About' },
  { href: '#supply', label: 'What We Supply' },
  { href: '#how', label: 'How It Works' },
  { href: '#team', label: 'Our Team' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href));
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive('#' + e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(s => s && obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="nav">
      <div className="wrap">
        <a href="#" className="nav-brand">
          <Image src="/pts-logo.svg" alt="Priority Trees & Shrubs" width={160} height={52} priority />
          <div className="nav-brand-name">
            <span className="nav-brand-title">Priority Trees & Shrubs</span>
            <span className="nav-brand-sub">Plant Material Supplier</span>
          </div>
        </a>
        <div className="nav-links">
          {links.map(l => (
            <a key={l.href} href={l.href} className={active === l.href ? 'active' : ''}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta">Request a Quote</a>
        </div>
      </div>
    </nav>
  );
}
