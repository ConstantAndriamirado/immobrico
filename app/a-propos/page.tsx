import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';
import { VALUES } from '@/lib/content';

export const metadata: Metadata = {
  title: 'À propos — ImmoBrico, monteur de meubles & aménagement à Orléans',
  description:
    "ImmoBrico, spécialiste du montage de meubles et de l'aménagement intérieur à Orléans et dans le Loiret. Notre histoire, notre expertise et nos valeurs au service des particuliers et des professionnels.",
  alternates: { canonical: '/a-propos' },
};

export default function AProposPage() {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title="Le montage et l'aménagement, c'est notre métier."
        subtitle="Spécialistes du montage de meubles et de l'agencement d'intérieur, nous accompagnons particuliers et professionnels d'Orléans et du Loiret avec un service clé en main."
        crumbs={[{ label: 'À propos' }]}
      />

      <section className="sec">
        <div className="container split">
          <div className="prose reveal">
            <h2>Qui sommes-nous ?</h2>
            <p>
              ImmoBrico est votre partenaire de confiance pour le montage, l'installation et l'agencement
              de tout type de mobilier, toutes marques confondues. Basés à Saran, aux portes d'Orléans,
              nous intervenons dans tout le Loiret auprès des particuliers comme des professionnels.
            </p>
            <p>
              Notre conviction est simple : vous faire gagner du temps et vous éviter le stress du montage.
              Vous achetez vos meubles où vous le souhaitez, nous nous occupons du reste — du déballage
              à la mise en place finale, en passant par les fixations murales et les finitions.
            </p>
            <h2>Notre expertise</h2>
            <p>
              Montage de meubles, pose de cuisine, dressings et PAX, mobilier professionnel, aménagement
              clé en main, réception et logistique : nos équipes maîtrisent chaque étape, avec un outillage
              professionnel et le souci du travail bien fait. Quel que soit le projet, nous appliquons la
              même exigence de qualité, du petit montage au chantier d'ampleur.
            </p>
            <h2>Aménagement de bureaux & professionnels</h2>
            <p>
              Nous accompagnons les entreprises, collectivités, résidences, commerces, syndics et bailleurs
              dans l'aménagement de leurs espaces : montage de mobilier, agencement, installation en site
              occupé et maintenance. Un interlocuteur unique, réactif, pour des locaux prêts à l'emploi.
            </p>
          </div>
          <aside className="reveal">
            <span className="eyebrow">En bref</span>
            <ul className="info-list" style={{ marginTop: '1.2rem' }}>
              <li><span className="k">Métier</span><span className="v">Montage & aménagement</span></li>
              <li><span className="k">Clients</span><span className="v">Particuliers & pros</span></li>
              <li><span className="k">Zone</span><span className="v">Orléans & Loiret</span></li>
              <li><span className="k">Marques</span><span className="v">Toutes marques</span></li>
              <li><span className="k">Disponibilité</span><span className="v">7j/7 · 7h – 19h</span></li>
              <li><span className="k">Crédit d'impôt</span><span className="v">50 % (services à la personne)</span></li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="sec sec--alt">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Nos valeurs</span>
            <h2 className="h2">Ce qui nous guide.</h2>
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

      <CtaBand />
    </>
  );
}
