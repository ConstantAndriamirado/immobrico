'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Reveals() {
  const pathname = usePathname();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal, .stagger'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    );
    els.forEach((el) => { if (!el.classList.contains('in')) io.observe(el); });
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
