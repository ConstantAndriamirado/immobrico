import Link from 'next/link';

type Crumb = { label: string; href?: string };

export default function PageHeader({
  eyebrow, title, subtitle, crumbs = [],
}: { eyebrow: string; title: string; subtitle?: string; crumbs?: Crumb[] }) {
  return (
    <section className="page-hero">
      <div className="container">
        <nav className="crumbs" aria-label="Fil d'Ariane">
          <Link href="/">Accueil</Link>
          {crumbs.map((c, i) => (
            <span key={i} style={{ display: 'inline-flex', gap: '.5rem', alignItems: 'center' }}>
              <span className="sep">/</span>
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
            </span>
          ))}
        </nav>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="display">{title}</h1>
        {subtitle && <p className="lead">{subtitle}</p>}
      </div>
    </section>
  );
}
