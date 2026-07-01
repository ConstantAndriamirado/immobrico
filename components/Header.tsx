'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BrandMark } from './Brand';
import { NAV, CONTACT } from '@/lib/site';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={solid ? 'solid' : ''}>
        <div className="container nav">
          <Link href="/" className="brand"><BrandMark /></Link>
          <nav className="nav-links">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href}>{n.label}</Link>
            ))}
          </nav>
          <div className="nav-r">
            <a href={`tel:${CONTACT.phoneIntl}`} className="nav-tel"><span className="sq"></span>{CONTACT.phone}</a>
            <Link href="/contact" className="btn btn--brass">Devis gratuit <span className="arr">→</span></Link>
          </div>
          <button
            className={`burger${open ? ' open' : ''}`}
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</Link>
        ))}
        <Link href="/contact" className="btn btn--brass btn--block" onClick={() => setOpen(false)}>
          Demander un devis <span className="arr">→</span>
        </Link>
      </div>
    </>
  );
}
