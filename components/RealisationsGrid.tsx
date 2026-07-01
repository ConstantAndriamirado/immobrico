'use client';
import { useState } from 'react';
import { REALISATIONS, REAL_CATEGORIES } from '@/lib/content';

export default function RealisationsGrid() {
  const [cat, setCat] = useState('Tous');
  const items = cat === 'Tous' ? REALISATIONS : REALISATIONS.filter((r) => r.cat === cat);
  return (
    <>
      <div className="real-filter">
        {REAL_CATEGORIES.map((c) => (
          <button key={c} className={cat === c ? 'active' : ''} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <div className="real-grid" style={{ marginTop: '1.6rem' }}>
        {items.map((r, i) => (
          <article className="real" key={r.title + i}>
            <div className="ph">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={r.src} alt={r.title} loading="lazy" decoding="async" />
            </div>
            <div className="meta"><span className="cat">{r.cat}</span><h4>{r.title}</h4></div>
          </article>
        ))}
      </div>
    </>
  );
}
