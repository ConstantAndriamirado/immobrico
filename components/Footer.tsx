import Link from 'next/link';
import { BrandMark } from './Brand';
import { CONTACT } from '@/lib/site';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div>
            <div className="foot-brand"><BrandMark /></div>
            <p className="desc">
              Monteur de meubles à Orléans et dans le Loiret : montage de mobilier toutes marques,
              pose de cuisine, dressing PAX, mobilier professionnel et aménagement clé en main.
              Particuliers &amp; professionnels.
            </p>
          </div>
          <div className="foot-col">
            <h5>Services</h5>
            <Link href="/services/montage-meubles">Montage de meubles</Link>
            <Link href="/services/cuisine">Pose de cuisine</Link>
            <Link href="/services/amenagement-cle-en-main">Aménagement clé en main</Link>
            <Link href="/services/mobilier-professionnel">Mobilier pro &amp; bureaux</Link>
            <Link href="/realisations">Réalisations</Link>
            <Link href="/tarifs">Tarifs</Link>
          </div>
          <div className="foot-col">
            <h5>Contact</h5>
            <a href={`tel:${CONTACT.phoneIntl}`}>{CONTACT.phone}</a>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <p>{CONTACT.city} ({CONTACT.cp}) · France</p>
            <p>{CONTACT.hours}</p>
            <Link href="/zones-intervention">Zones d&apos;intervention</Link>
            <Link href="/actualites">Actualités</Link>
            <Link href="/faq">FAQ</Link>
          </div>
          <div className="foot-col">
            <h5>Suivez-nous</h5>
            <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
        <div className="foot-bot">
          <span>© {new Date().getFullYear()} ImmoBrico — Tous droits réservés.</span>
          <span>Conçu &amp; développé par <a href="https://ymhb-web.com" target="_blank" rel="noopener noreferrer">YMHB Web</a></span>
        </div>
      </div>
    </footer>
  );
}
