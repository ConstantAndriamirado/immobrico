import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';

export const metadata: Metadata = {
  title: "Zones d'intervention — Orléans, Saran, Olivet & Loiret | ImmoBrico",
  description:
    "ImmoBrico intervient à Orléans, Saran, Olivet, Fleury-les-Aubrais, Saint-Jean-de-la-Ruelle, Saint-Jean-de-Braye et dans tout le Loiret pour le montage de meubles et l'aménagement.",
  alternates: { canonical: '/zones-intervention' },
};

const ZONES = [
  { v: 'Orléans', d: 'Centre-ville et tous les quartiers.' },
  { v: 'Saran', d: 'Notre base, intervention immédiate.' },
  { v: 'Olivet', d: 'Montage et aménagement à domicile.' },
  { v: 'Fleury-les-Aubrais', d: 'Particuliers et professionnels.' },
  { v: 'Saint-Jean-de-la-Ruelle', d: 'Montage de meubles toutes marques.' },
  { v: 'Saint-Jean-de-Braye', d: 'Cuisines, dressings, mobilier.' },
  { v: 'Ingré · Ormes', d: "Nord-ouest de l'agglomération." },
  { v: 'Chécy · Semoy', d: 'Est orléanais.' },
];

const AUTRES = ['La Chapelle-Saint-Mesmin', 'Saint-Cyr-en-Val', 'Boigny-sur-Bionne', 'Marigny-les-Usages', 'Chanteau', 'Mardié', 'Combleux', 'Bou', 'Tout le Loiret (45)'];

export default function ZonesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Zones d'intervention"
        title="Orléans, son agglomération & tout le Loiret."
        subtitle="Basés à Saran, nous nous déplaçons rapidement dans Orléans Métropole et au-delà, dans tout le département du Loiret."
        crumbs={[{ label: "Zones d'intervention" }]}
      />
      <section className="sec">
        <div className="container">
          <div className="cards">
            {ZONES.map((z) => (
              <div className="card reveal" key={z.v}>
                <span className="cat">Secteur</span>
                <h4>{z.v}</h4>
                <p>{z.d}</p>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ marginTop: '2.4rem' }}>
            <span className="eyebrow">Également desservi</span>
            <div className="real-filter" style={{ marginTop: '1rem' }}>
              {AUTRES.map((a) => (<span className="chip" key={a} style={{ pointerEvents: 'none' }}>{a}</span>))}
            </div>
          </div>
        </div>
      </section>
      <CtaBand title="Votre commune est dans le Loiret ?" text="Contactez-nous pour confirmer le déplacement et obtenir votre devis." />
    </>
  );
}
