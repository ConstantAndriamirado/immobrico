'use client';
import { useEffect, useRef, useState } from 'react';
import { REALISATIONS, REALISATIONS_MORE, REAL_CATEGORIES } from '@/lib/content';

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

function GalleryCard({ item, index, onPlay, hideMeta }: { item: (typeof REALISATIONS_MORE)[number]; index: number; onPlay?: (v: HTMLVideoElement) => void; hideMeta?: boolean }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (item.type !== 'video' || !videoRef.current) return;

    const video = videoRef.current;
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      video.currentTime = 0;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) {
          video.pause();
          video.currentTime = 0;
          setIsPlaying(false);
        }
      },
      { threshold: 0.25 }
    );

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);
    observer.observe(video);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
      observer.disconnect();
    };
  }, [item.type]);

  const handleVideoToggle = async () => {
    if (!videoRef.current) return;
    const video = videoRef.current;

    if (video.paused) {
      try {
        await video.play();
        onPlay?.(video);
      } catch {
        setIsPlaying(false);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <article className="real" key={item.title + index}>
      <div className="ph">
        {item.type === 'video' ? (
          <>
            <video ref={videoRef} poster={item.poster} src={item.videoUrl} controls preload="metadata" playsInline />
            <button type="button" className="real-play" onClick={handleVideoToggle} aria-label={isPlaying ? 'Mettre en pause' : 'Lire la vidéo'}>
              {isPlaying ? '❚❚' : '▶'}
            </button>
            <span className="real-badge">Vidéo</span>
          </>
        ) : (
          <img src={item.src} alt={item.title} loading="lazy" decoding="async" />
        )}
      </div>
      {!hideMeta && (
        <div className="meta">
          <span className="cat">{item.cat}</span>
          <h4>{item.title}</h4>
        </div>
      )}
    </article>
  );
}

export default function RealisationsGrid() {
  const [cat, setCat] = useState('Tous');
  const [showMore, setShowMore] = useState(false);
  const items = cat === 'Tous' ? REALISATIONS : REALISATIONS.filter((r) => r.cat === cat);
  const moreItems = cat === 'Tous' ? REALISATIONS_MORE : REALISATIONS_MORE.filter((r) => r.cat === cat);
  const usedMedia = new Set(
    REALISATIONS.flatMap((item) => (item.images ?? (item.src ? [item.src] : [])).filter(Boolean))
  );
  const imageItems = moreItems.filter((item) => item.type === 'image' && item.src && !usedMedia.has(item.src));
  const videoItems = moreItems.filter((item) => item.type === 'video');

  // Keep track of the currently playing video so we can pause it when another starts
  const currentPlayingRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoPlay = (video: HTMLVideoElement) => {
    try {
      if (currentPlayingRef.current && currentPlayingRef.current !== video) {
        currentPlayingRef.current.pause();
        currentPlayingRef.current.currentTime = 0;
      }
    } catch {
      // ignore
    }
    currentPlayingRef.current = video;
  };

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

      <div className="real-more">
        <button type="button" className="real-more__toggle" onClick={() => setShowMore((v) => !v)} aria-expanded={showMore}>
          {showMore ? 'Masquer le contenu supplémentaire' : 'Voir plus'}
        </button>

        {showMore && (
          <div className="real-more__content">
            {imageItems.length > 0 && (
              <div className="real-more__section">
                <div className="real-more__header">
                  <h3>Images</h3>
                  <p>Autres réalisations visuelles autour de ce thème.</p>
                </div>
                <div className="real-grid real-grid--compact">
                  {imageItems.map((item, i) => (
                    <GalleryCard key={item.title + i} item={item} index={i} onPlay={handleVideoPlay} />
                  ))}
                </div>
              </div>
            )}

            {videoItems.length > 0 && (
              <div className="real-more__section">
                <div className="real-more__header">
                  <h3>Vidéos</h3>
                  <p>Extraits de montage et mise en scène de certains chantiers.</p>
                </div>
                <div className="real-grid real-grid--compact">
                  {videoItems.map((item, i) => (
                    <GalleryCard key={item.title + i} item={item} index={i} onPlay={handleVideoPlay} hideMeta />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
