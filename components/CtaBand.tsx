import Link from 'next/link';

export default function CtaBand({
  title = 'Un projet de montage ou d’aménagement ?',
  text = 'Décrivez-nous votre besoin : devis gratuit sous 24 h, sans engagement.',
}: { title?: string; text?: string }) {
  return (
    <section className="sec">
      <div className="container reveal">
        <div className="teaser">
          <div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
          <div className="cta-wrap">
            <Link href="/contact" className="btn btn--brass">Demander un devis <span className="arr">→</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
