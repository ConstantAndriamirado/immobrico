import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import CtaBand from '@/components/CtaBand';
import { TARIFS, FAQ, CREDIT_IMPOT } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Tarifs — Montage de meubles & aménagement à Orléans | ImmoBrico',
  description:
    "Tarifs indicatifs « à partir de » pour le montage à domicile, la fixation murale et la journée de montage à Orléans et dans le Loiret. Devis gratuit pour les projets plus importants. 50 % de crédit d'impôt.",
  alternates: { canonical: '/tarifs' },
};

export default function TarifsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tarifs indicatifs"
        title="Des repères clairs, un devis sur mesure."
        subtitle="Quelques exemples pour vous donner une idée. Chaque projet reste estimé précisément via un devis personnalisé gratuit."
        crumbs={[{ label: 'Tarifs' }]}
      />
      <section className="sec">
        <div className="container">
          <div className="tarifs-grid">
            {TARIFS.map((t) => (
              <div className={`tarif${t.from ? '' : ' devis'}`} key={t.name}>
                <h4>{t.name}</h4>
                <p>{t.desc}</p>
                <div className="price">
                  {t.from && <small>à partir de</small>}
                  {t.price}
                </div>
              </div>
            ))}
          </div>
          <p className="tarifs-note">
            <span className="sq"></span> Tarifs indicatifs, hors fournitures. Pour une estimation précise,{' '}
            <Link href="/contact">demandez votre devis gratuit</Link>.
          </p>
          <p className="tarifs-note" style={{ marginTop: '.6rem' }}>
            <span className="sq"></span> {CREDIT_IMPOT}
          </p>
        </div>
      </section>
      <section className="sec sec--alt">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Questions fréquentes</span>
            <h2 className="h2">Bon à savoir.</h2>
          </div>
          <div className="faq-list">
            {FAQ.slice(0, 4).map((f) => (
              <div className="faq-item reveal" key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
          <p className="tarifs-note" style={{ marginTop: '1.4rem' }}>
            <span className="sq"></span> <Link href="/faq">Voir toutes les questions fréquentes →</Link>
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
