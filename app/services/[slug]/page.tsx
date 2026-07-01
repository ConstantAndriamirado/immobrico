import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';
import { SERVICES } from '@/lib/content';

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = SERVICES.find((x) => x.slug === params.slug);
  if (!s) return {};
  return {
    title: `${s.name} à Orléans & dans le Loiret | ImmoBrico`,
    description: s.intro.slice(0, 155),
    alternates: { canonical: `/services/${s.slug}` },
  };
}

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const s = SERVICES.find((x) => x.slug === params.slug);
  if (!s) notFound();
  const others = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow="Service"
        title={s.name}
        subtitle={s.short}
        crumbs={[{ label: 'Services', href: '/services' }, { label: s.name }]}
      />

      {s.image && (
        <section className="sec" style={{ paddingTop: 'clamp(1.6rem,3vw,2.4rem)', paddingBottom: 0 }}>
          <div className="container">
            <div className="svc-photo reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.image} alt={s.name} decoding="async" />
            </div>
          </div>
        </section>
      )}

      <section className="sec">
        <div className="container split">
          <div className="prose reveal">
            <p>{s.intro}</p>
            <h2>Ce qui est inclus</h2>
            <ul className="incl">
              {s.includes.map((it) => (<li key={it}>{it}</li>))}
            </ul>
          </div>
          <div className="reveal">
            <span className="eyebrow">Comment ça se passe</span>
            <div className="logi-grid" style={{ gridTemplateColumns: '1fr', marginTop: '1.4rem' }}>
              {s.process.map((p, i) => (
                <div className="logi-step" key={i}>
                  <div className="n">{String(i + 1).padStart(2, '0')}</div>
                  <h4>{p.t}</h4>
                  <p>{p.d}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '1.6rem' }}>
              <Link href="/contact" className="btn btn--brass btn--block">Demander un devis <span className="arr">→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--alt">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Autres prestations</span>
            <h2 className="h2">Explorez nos services.</h2>
          </div>
          <div className="cards">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="card reveal">
                <h4>{o.name}</h4>
                <p>{o.short}</p>
                <span className="more">En savoir plus <span className="arr">→</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
