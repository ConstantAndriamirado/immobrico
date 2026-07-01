import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import DevisForm from '@/components/DevisForm';
import { CONTACT } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact & devis gratuit — ImmoBrico, Orléans & Loiret',
  description:
    "Contactez ImmoBrico pour un devis gratuit sous 24 h : montage de meubles, pose de cuisine, dressing, mobilier professionnel et aménagement à Orléans et dans le Loiret. Tél. 07 81 90 92 33, 7j/7.",
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Parlons de votre projet."
        subtitle="Décrivez votre besoin et joignez quelques photos : on revient vers vous sous 24 h avec une estimation claire et gratuite."
        crumbs={[{ label: 'Contact' }]}
      />
      <section className="sec">
        <div className="container contact-grid">
          <div className="reveal">
            <span className="eyebrow">Coordonnées</span>
            <ul className="info-list" style={{ marginTop: '1.2rem' }}>
              <li><span className="k">Téléphone</span><span className="v"><a href={`tel:${CONTACT.phoneIntl}`}>{CONTACT.phone}</a></span></li>
              <li><span className="k">E-mail</span><span className="v"><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></span></li>
              <li><span className="k">Secteur</span><span className="v">{CONTACT.city} ({CONTACT.cp}) · Orléans & Loiret</span></li>
              <li><span className="k">Horaires</span><span className="v">{CONTACT.hours}</span></li>
              <li><span className="k">WhatsApp</span><span className="v"><a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">Écrire sur WhatsApp</a></span></li>
              <li><span className="k">Réseaux</span><span className="v"><a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer">Facebook</a> · <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></span></li>
            </ul>
            <div style={{ marginTop: '1.6rem', borderRadius: '14px', overflow: 'hidden', border: '1px solid var(--line)' }}>
              <iframe
                title="Zone d'intervention ImmoBrico"
                src="https://www.google.com/maps?q=Saran,+45770&output=embed"
                style={{ width: '100%', minHeight: '300px', border: 0, display: 'block', filter: 'grayscale(.3) contrast(1.05)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="reveal">
            <DevisForm />
          </div>
        </div>
      </section>
    </>
  );
}
