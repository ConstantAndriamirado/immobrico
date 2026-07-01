import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';
import RealisationsGrid from '@/components/RealisationsGrid';

export const metadata: Metadata = {
  title: 'Réalisations — Montages & aménagements à Orléans et dans le Loiret | ImmoBrico',
  description:
    "Découvrez nos réalisations : montage de meubles, dressings, cuisines, mobilier professionnel et aménagements à Orléans, Saran, Saint-Jean-de-la-Ruelle et dans le Loiret.",
  alternates: { canonical: '/realisations' },
};

export default function RealisationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Réalisations"
        title="Nos derniers chantiers."
        subtitle="Pose de cuisine, montage de dressing, agencement de bureaux ou installation de mobilier : ImmoBrico intervient à Orléans, Saran, Saint-Jean-de-la-Ruelle et dans tout le Loiret, avec un travail propre, soigné et efficace. Filtrez par type de projet."
        crumbs={[{ label: 'Réalisations' }]}
      />
      <section className="sec">
        <div className="container">
          <RealisationsGrid />
        </div>
      </section>
      <CtaBand title="Envie d'un résultat comme ceux-là ?" text="Parlez-nous de votre projet : devis gratuit sous 24 h." />
    </>
  );
}
