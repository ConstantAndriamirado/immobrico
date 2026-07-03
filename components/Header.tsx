'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BrandMark } from './Brand';
import { NAV } from '@/lib/site';

const serviceLinks = [
  { label: 'Montage de meubles', href: '/services/montage-meubles' },
  { label: 'Pose de cuisine', href: '/services/cuisine' },
  { label: 'Dressings & PAX', href: '/services/dressing-pax' },
  { label: 'Mobilier pro & bureaux', href: '/services/mobilier-professionnel' },
  { label: 'Aménagement clé en main', href: '/services/amenagement-cle-en-main' },
  { label: 'Logistique', href: '/services/logistique' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
            <div
              className="nav-dropdown"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="nav-dropdown-toggle" type="button" aria-expanded={servicesOpen ? 'true' : 'false'}>
                Services
              </button>
              <div className={`nav-dropdown-menu${servicesOpen ? ' open' : ''}`}>
                {serviceLinks.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setServicesOpen(false)}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            {NAV.filter((item) => item.href !== '/services').map((n) => (
              <Link key={n.href} href={n.href}>{n.label}</Link>
            ))}
          </nav>
          <div className="nav-r">
            <Link href="/contact" className="btn btn--brass btn--header">
              Demander un devis <span className="arr">→</span>
            </Link>
          </div>
          <button
            className={`burger${open ? ' open' : ''}`}
            aria-label="Menu"
            aria-expanded={open ? 'true' : 'false'}
            onClick={() => setOpen((o) => !o)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        <div className="mobile-menu-group">
          <span className="mobile-menu-title">Services</span>
          {serviceLinks.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
        </div>
        {NAV.filter((item) => item.href !== '/services').map((n) => (
          <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</Link>
        ))}
        <Link href="/contact" className="btn btn--brass btn--block" onClick={() => setOpen(false)}>
          Demander un devis <span className="arr">→</span>
        </Link>
      </div>
    </>
  );
}
