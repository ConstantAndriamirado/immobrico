import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';
import { PRO, VALUES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Professionnels — Montage & aménagement pour entreprises, syndics, bailleurs | ImmoBrico',
  description:
    "ImmoBrico accompagne les professionnels à Orléans et dans le Loiret : entreprises, collectivités, résidences, commerces, syndics et bailleurs. Montage de mobilier, aménagement de bureaux et logistique, en site occupé si besoin.",
  alternates: { canonical: '/professionnels' },
};

export default function ProPage() {
  return (
    <>
      <PageHeader
        eyebrow="Professionnels"
        title="Votre partenaire mobilier & aménagement pour les pros."
        subtitle="Un interlocuteur unique pour équiper, monter et aménager vos espaces — avec la réactivité et la rigueur qu'attendent les professionnels."
        crumbs={[{ label: 'Professionnels' }]}
      />
      <section className="sec">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Ils nous font confiance</span>
            <h2 className="h2">Une réponse adaptée à chaque métier.</h2>
          </div>
          <div className="cards">
            {PRO.map((p) => (
              <div className="card reveal" key={p.title}>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec sec--alt">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Pourquoi ImmoBrico</span>
            <h2 className="h2">Sérieux, réactivité, finitions.</h2>
            <p className="lead">Devis clair, planning respecté, intervention en site occupé possible et évacuation des emballages : on vous simplifie la gestion.</p>
          </div>
          <div className="why-grid stagger">
            {VALUES.map((v) => (
              <div className="why" key={v.n}>
                <div className="n">{v.n}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Un besoin récurrent ou un projet d'ampleur ?" text="Parlons-en : devis et conditions adaptés aux professionnels." />
    </>
  );
}
