import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';
import { FAQ } from '@/lib/content';

export const metadata: Metadata = {
  title: "FAQ — Vos questions sur le montage & l'aménagement | ImmoBrico",
  description:
    "Toutes les réponses sur nos services de montage de meubles et d'aménagement à Orléans : marques, garanties, outils, crédit d'impôt, paiement, horaires et fonctionnement.",
  alternates: { canonical: '/faq' },
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Vos questions, nos réponses."
        subtitle="Tout ce qu'il faut savoir avant de nous confier votre montage ou votre aménagement."
        crumbs={[{ label: 'FAQ' }]}
      />
      <section className="sec">
        <div className="container">
          <div className="faq-list">
            {FAQ.map((f) => (
              <div className="faq-item reveal" key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
