import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';
import { SERVICES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Services — Montage de meubles, cuisine, dressing & aménagement | ImmoBrico',
  description:
    "Toutes les prestations ImmoBrico à Orléans et dans le Loiret : montage de meubles toutes marques, pose de cuisine, dressings & PAX, mobilier professionnel, aménagement clé en main, logistique et petits travaux.",
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nos services"
        title="Du meuble à l'espace fini."
        subtitle="Un interlocuteur unique pour le montage de meubles, la pose de cuisine, l'agencement et l'aménagement clé en main de vos espaces, à Orléans et dans le Loiret."
        crumbs={[{ label: 'Services' }]}
      />
      <section className="sec">
        <div className="container">
          <div className="cards">
            {SERVICES.map((s, i) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card reveal">
                {s.image && (
                  <div className="card-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.image} alt={s.name} loading="lazy" decoding="async" />
                  </div>
                )}
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.name}</h3>
                <p>{s.short}</p>
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
