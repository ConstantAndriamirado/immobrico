import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveals from '@/components/Reveals';

const JSONLD = '{"@context": "https://schema.org", "@type": "HomeAndConstructionBusiness", "name": "ImmoBrico", "description": "Montage et installation de tout type de mobilier (toutes marques) et aménagement clé en main à Orléans et dans le Loiret, pour particuliers et professionnels.", "image": "https://www.immobrico.eu/logo.png", "telephone": "+33781909233", "email": "contact@immobrico.org", "url": "https://www.immobrico.eu/", "priceRange": "€€", "address": {"@type": "PostalAddress", "addressLocality": "Saran", "addressRegion": "Loiret", "postalCode": "45770", "addressCountry": "FR"}, "geo": {"@type": "GeoCoordinates", "latitude": 47.94791, "longitude": 1.880734}, "areaServed": ["Orléans", "Saran", "Saint-Jean-de-la-Ruelle", "Olivet", "Fleury-les-Aubrais", "Loiret", "Île-de-France", "Loir-et-Cher"], "openingHoursSpecification": [{"@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "07:00", "closes": "19:00"}], "sameAs": ["https://www.facebook.com/profile.php?id=100088498965995", "https://www.instagram.com/immobrico/"], "slogan": "Le spécialiste du montage de meubles et de l\'aménagement clé en main dans le Loiret", "knowsAbout": ["Montage de meubles", "Montage de meubles IKEA", "Pose de cuisine", "Dressing PAX", "Mobilier professionnel", "Aménagement de bureaux", "Aménagement intérieur", "Aménagement clé en main", "Réception et stockage de mobilier", "Logistique mobilier"], "hasOfferCatalog": {"@type": "OfferCatalog", "name": "Prestations ImmoBrico", "itemListElement": [{"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Montage et installation de mobilier (toutes marques)"}}, {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Dressings & PAX"}}, {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Pose de cuisine & aménagement de cuisine"}}, {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Mobilier professionnel & aménagement de bureaux"}}, {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Aménagement clé en main"}}, {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Réception, stockage & logistique"}}, {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Conception & projection 3D"}}]}}';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.immobrico.eu'),
  title: 'Monteur de meubles à Orléans (Loiret) — Montage, mobilier & aménagement clé en main | ImmoBrico',
  description: 'ImmoBrico, monteur de meubles à Orléans et dans le Loiret : montage de meubles toutes marques, pose de cuisine, dressing PAX, mobilier professionnel, aménagement de bureaux et aménagement clé en main. Particuliers & professionnels. Devis gratuit sous 24 h.',
  keywords: ['monteur de meubles Orléans', 'montage de meubles Loiret', 'pose de cuisine Orléans', 'dressing PAX Orléans', 'aménagement intérieur Orléans', 'mobilier professionnel Orléans', 'aménagement de bureaux Orléans'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Monteur de meubles à Orléans (Loiret) — Montage, mobilier & aménagement clé en main | ImmoBrico',
    description: 'ImmoBrico, monteur de meubles à Orléans et dans le Loiret : montage de meubles toutes marques, pose de cuisine, dressing PAX, mobilier professionnel, aménagement de bureaux et aménagement clé en main. Particuliers & professionnels. Devis gratuit sous 24 h.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'ImmoBrico',
    url: 'https://www.immobrico.eu',
  },
  icons: { icon: '/logo-immobrico.png' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#121012' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
        <Footer />
        <Reveals />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD }} />
      </body>
    </html>
  );
}
