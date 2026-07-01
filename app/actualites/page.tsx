import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';
import { ARTICLES } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Actualités & conseils — Montage, aménagement & astuces | ImmoBrico',
  description:
    "Le blog ImmoBrico : conseils de montage, idées d'aménagement, bons plans et nouveautés pour particuliers et professionnels à Orléans et dans le Loiret.",
  alternates: { canonical: '/actualites' },
};

export default function ActualitesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Actualités"
        title="Conseils, astuces & nouveautés."
        subtitle="Idées d'aménagement, bons plans et coulisses de nos montages. De quoi vous inspirer pour vos projets."
        crumbs={[{ label: 'Actualités' }]}
      />
      <section className="sec">
        <div className="container">
          <div className="cards">
            {ARTICLES.map((a) => (
              <Link key={a.slug} href={`/actualites/${a.slug}`} className="card reveal">
                <div className="card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.image} alt={a.title} loading="lazy" decoding="async" />
                </div>
                <span className="article-meta">{a.date} · {a.readMin} min</span>
                <h4>{a.title}</h4>
                <p>{a.excerpt}</p>
                <span className="more">Lire l'article <span className="arr">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
