import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';
import { ARTICLES } from '@/lib/blog';

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = ARTICLES.find((x) => x.slug === params.slug);
  if (!a) return {};
  return {
    title: `${a.title} | ImmoBrico`,
    description: (a.excerpt || a.title).slice(0, 155),
    alternates: { canonical: `/actualites/${a.slug}` },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = ARTICLES.find((x) => x.slug === params.slug);
  if (!a) notFound();
  const others = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow="Actualités"
        title={a.title}
        subtitle={`${a.date} · ${a.readMin} min de lecture`}
        crumbs={[{ label: 'Actualités', href: '/actualites' }, { label: a.title }]}
      />
      <section className="sec" style={{ paddingTop: 'clamp(1.6rem,3vw,2.4rem)', paddingBottom: 0 }}>
        <div className="container">
          <div className="svc-photo reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={a.image} alt={a.title} decoding="async" />
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="container">
          <div className="prose reveal" style={{ margin: '0 auto' }}>
            {a.body.map((b, i) => {
              if (b.kind === 'h') return <h2 key={i}>{b.text}</h2>;
              if (b.kind === 'ul') return <ul key={i}>{(b.items || []).map((it, j) => <li key={j}>{it}</li>)}</ul>;
              return <p key={i}>{b.text}</p>;
            })}
            <p style={{ marginTop: '2rem' }}>
              <Link href="/contact" className="btn btn--brass">Demander un devis <span className="arr">→</span></Link>
            </p>
          </div>
        </div>
      </section>
      <section className="sec sec--alt">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">À lire aussi</span>
            <h2 className="h2">D'autres conseils.</h2>
          </div>
          <div className="cards">
            {others.map((o) => (
              <Link key={o.slug} href={`/actualites/${o.slug}`} className="card reveal">
                <div className="card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={o.image} alt={o.title} loading="lazy" decoding="async" />
                </div>
                <span className="article-meta">{o.date}</span>
                <h4>{o.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
