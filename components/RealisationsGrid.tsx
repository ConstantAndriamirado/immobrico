'use client';
import { useState } from 'react';
import { REALISATIONS, REAL_CATEGORIES } from '@/lib/content';

function RealisationCard({ item, index }: { item: (typeof REALISATIONS)[number]; index: number }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = item.images ?? [item.src!];
  const hasMultiple = images.length > 1;

  const showPrev = () => setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const showNext = () => setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <article className="real" key={item.title + index}>
      <div className="ph">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={images[activeIndex]} alt={item.title} loading="lazy" decoding="async" />
        {hasMultiple && (
          <>
            <button type="button" className="real-nav real-nav-prev" onClick={showPrev} aria-label="Image précédente">
              ‹
            </button>
            <button type="button" className="real-nav real-nav-next" onClick={showNext} aria-label="Image suivante">
              ›
            </button>
          </>
        )}
      </div>
      <div className="meta">
        <span className="cat">{item.cat}</span>
        <h4>{item.title}</h4>
      </div>
    </article>
  );
}

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
        {items.map((item, i) => (
          <RealisationCard key={item.title + i} item={item} index={i} />
        ))}
      </div>
    </>
  );
}
