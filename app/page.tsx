import DevisForm from '@/components/DevisForm';
import { HERO_IMAGE, REALISATIONS, SERVICES } from '@/lib/content';

const highlightServices = SERVICES.filter((service) =>
  ['montage-meubles', 'cuisine', 'dressing-pax', 'mobilier-professionnel'].includes(service.slug),
);

export default function Home() {
  return (
    <main id="top">
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={HERO_IMAGE} alt="" />
        </div>
        <div className="container hero-inner">
          <span className="eyebrow reveal">Montage de meubles · Installation · Aménagement clé en main</span>
          <h1 className="display reveal">
            Montage de meubles, installation et aménagement clé en main à Orléans et dans le Loiret.
          </h1>
          <p className="lead reveal">
            ImmoBrico accompagne vos projets du mobilier à l’espace fini : livraison de meubles, montage, installation, agencement, mobilier professionnel et logistique, pour particuliers et professionnels.
          </p>
          <div className="hero-cta reveal">
            <a href="#devis" className="btn btn--brass">Demander un devis <span className="arr">→</span></a>
            <a href="/realisations" className="lnk">Voir nos réalisations <span className="arr">→</span></a>
          </div>
          <div className="hero-meta reveal">
            <div className="m"><div className="k">Spécialité</div><div className="v">Mobilier &amp; aménagement</div></div>
            <div className="m"><div className="k">Devis</div><div className="v">Gratuit, sous 24 h</div></div>
            <div className="m"><div className="k">Disponibilité</div><div className="v">Lun–ven · 7h–19h</div></div>
            <div className="m"><div className="k">Clientèle</div><div className="v">Particuliers &amp; pros</div></div>
          </div>
        </div>
      </section>

      <section className="brands">
        <p className="cap">Nous montons et installons <b>tout type de mobilier, toutes marques.</b></p>
        <div className="marquee">
          <div className="marquee-track" id="track">
            <span>IKEA</span><span className="dot"></span><span>BUT</span><span className="dot"></span><span>Conforama</span><span className="dot"></span><span>Maisons du Monde</span><span className="dot"></span><span>Leroy Merlin</span><span className="dot"></span><span>Amazon</span><span className="dot"></span><span>Mobilier professionnel</span><span className="dot"></span><span>Mobilier de bureau</span><span className="dot"></span><span>Sur-mesure</span><span className="dot"></span>
            <span>IKEA</span><span className="dot"></span><span>BUT</span><span className="dot"></span><span>Conforama</span><span className="dot"></span><span>Maisons du Monde</span><span className="dot"></span><span>Leroy Merlin</span><span className="dot"></span><span>Amazon</span><span className="dot"></span><span>Mobilier professionnel</span><span className="dot"></span><span>Mobilier de bureau</span><span className="dot"></span><span>Sur-mesure</span><span className="dot"></span>
          </div>
        </div>
        <p className="seo">Montage et installation de mobilier IKEA, BUT, Conforama, Maisons du Monde, Leroy Merlin, Amazon, mobilier professionnel, de bureau et sur-mesure — quelle que soit la marque ou l'enseigne.</p>
      </section>

      <section className="sec" id="services">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Prestations</span>
            <h2 className="h2">Des prestations pensées pour le mobilier, l’installation et l’aménagement.</h2>
            <p className="lead">Un interlocuteur unique pour le montage de meubles, la livraison de meubles, l’agencement, le mobilier professionnel, la logistique et les projets clés en main.</p>
          </div>
          <div className="service-grid">
            {highlightServices.map((service, index) => (
              <article className={`service-card reveal ${index % 2 === 1 ? 'service-card--alt' : ''}`} key={service.slug}>
                <div className="service-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={service.image} alt={service.name} loading="lazy" decoding="async" />
                </div>
                <div className="service-body">
                  <span className="service-kicker">Spécialité</span>
                  <h3>{service.name}</h3>
                  <p>{service.short}</p>
                  <a href={`/services/${service.slug}`} className="lnk">
                    Découvrir la prestation <span className="arr">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--alt" id="parcours">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Comment ça marche</span>
            <h2 className="h2">Un accompagnement clair, du mobilier à l’espace fini.</h2>
            <p className="lead">Que votre mobilier soit déjà livré ou pas encore choisi, nous prenons en charge l’essentiel de la chaîne.</p>
          </div>
          <div className="parc-grid">
            <div className="parc reveal">
              <div className="tag">Vous avez déjà votre mobilier</div>
              <h3>On s’occupe de tout, jusqu’à la mise en service.</h3>
              <ul className="steps">
                <li><b>Livraison</b> de vos cartons sur place si besoin</li>
                <li><b>Montage</b> de l’ensemble du mobilier</li>
                <li><b>Installation</b> et mise en place dans chaque pièce</li>
                <li><b>Finitions</b> et réglages de qualité</li>
                <li><b>Évacuation</b> des emballages et cartons</li>
              </ul>
            </div>
            <div className="parc reveal">
              <div className="tag">Vous n’avez pas encore votre mobilier</div>
              <h3>On vous accompagne du choix à l’installation.</h3>
              <ul className="steps">
                <li><b>Conseil</b> sur le mobilier et l’agencement</li>
                <li><b>Fourniture</b> si besoin, selon votre projet</li>
                <li><b>Réception</b> des marchandises et palettes</li>
                <li><b>Logistique</b> et stockage temporaire si nécessaire</li>
                <li><b>Installation</b> complète et finitions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="realisations">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Réalisations</span>
            <h2 className="h2">Des projets complets, mis en valeur.</h2>
            <p className="lead">Cuisines, dressings, bureaux, logements meublés et espaces de commerce : nos chantiers sont pensés pour durer.</p>
          </div>

          <div className="real-grid stagger">
            {REALISATIONS.slice(0, 8).map((r, i) => (
              <article className={`real ${i % 3 === 1 ? 'real--tall' : ''} ${i % 4 === 0 ? 'real--wide' : ''}`} key={`${r.title}-${i}`}>
                <div className="ph">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.src} alt={r.title} loading="lazy" decoding="async" />
                </div>
                <div className="meta"><span className="cat">{r.cat}</span><h4>{r.title}</h4></div>
              </article>
            ))}
          </div>
          <div className="real-cta reveal"><a href="/realisations" className="lnk">Voir toutes nos réalisations <span className="arr">→</span></a></div>
        </div>
      </section>

      <section className="sec sec--alt" id="cle">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Offre clé en main</span>
            <h2 className="h2">On vous tend les clés d’un lieu fini.</h2>
            <p className="lead">Pour les particuliers comme pour les professionnels, nous prenons en charge l’aménagement complet de vos espaces.</p>
          </div>
          <p className="cle-flow reveal">Studios <i>·</i> Appartements meublés <i>·</i> Colocations <i>·</i> Locatif <i>·</i> Bureaux <i>·</i> Commerces <i>·</i> Restaurants <i>·</i> Bars <i>·</i> Salles de formation <i>·</i> Résidences étudiantes.</p>
        </div>
      </section>

      <section className="sec" id="logistique">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Logistique intégrée</span>
            <h2 className="h2">De la palette au meuble en place.</h2>
            <p className="lead">On gère toute la chaîne pour vous éviter la manutention et les emballages qui s’entassent.</p>
          </div>
          <div className="logi-grid stagger">
            <div className="logi-step"><div className="n">01</div><h4>Réception</h4><p>Marchandises et palettes réceptionnées pour vous.</p></div>
            <div className="logi-step"><div className="n">02</div><h4>Stockage</h4><p>Stockage temporaire sécurisé jusqu’au jour J.</p></div>
            <div className="logi-step"><div className="n">03</div><h4>Livraison</h4><p>Acheminement sur site, à l’étage, au bon moment.</p></div>
            <div className="logi-step"><div className="n">04</div><h4>Montage</h4><p>Assemblage soigné de tout le mobilier.</p></div>
            <div className="logi-step"><div className="n">05</div><h4>Installation</h4><p>Mise en place, fixations et réglages.</p></div>
            <div className="logi-step"><div className="n">06</div><h4>Évacuation</h4><p>On repart avec les cartons et les déchets.</p></div>
          </div>
        </div>
      </section>

      <section className="sec sec--alt" id="tarifs">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Tarifs indicatifs</span>
            <h2 className="h2">Des repères clairs, un devis sur mesure.</h2>
            <p className="lead">Quelques exemples pour vous donner une idée. Chaque projet reste estimé précisément via un devis personnalisé gratuit.</p>
          </div>

          <div className="tarifs-grid stagger">
            <div className="tarif">
              <div className="tarif-head"><span className="tag">À partir de</span><div className="price">39 €</div></div>
              <h4>Montage d’un meuble</h4><p>Assemblage et mise en place d’un meuble standard, toutes marques.</p>
            </div>
            <div className="tarif">
              <div className="tarif-head"><span className="tag">À partir de</span><div className="price">49 €</div></div>
              <h4>Fixation murale / TV</h4><p>Pose sécurisée : TV, étagères, tringles, tableaux, accessoires.</p>
            </div>
            <div className="tarif">
              <div className="tarif-head"><span className="tag">À partir de</span><div className="price">149 €</div></div>
              <h4>Dressing / PAX</h4><p>Montage complet d’un dressing ou placard modulable.</p>
            </div>
            <div className="tarif">
              <div className="tarif-head"><span className="tag">À partir de</span><div className="price">290 €</div></div>
              <h4>Journée de montage</h4><p>Une équipe sur place pour vos projets multi-meubles.</p>
            </div>
            <div className="tarif tarif--featured">
              <div className="tarif-head"><span className="tag">Sur devis</span><div className="price">Cuisine équipée</div></div>
              <p>Montage et installation complète, selon la configuration et l’agencement.</p>
            </div>
            <div className="tarif tarif--featured">
              <div className="tarif-head tarif-head--split"><span className="tag">Sur devis</span><div className="price">Aménagement clé en main</div></div>
              <p>Projet complet, de la réception à l’installation finale et aux finitions.</p>
            </div>
          </div>
          <p className="tarifs-note"><span className="sq"></span> Tarifs indicatifs, hors fournitures. Pour une estimation précise, <a href="#devis">demandez votre devis gratuit</a>.</p>
        </div>
      </section>

      <section className="sec">
        <div className="container">
          <div className="sec-head reveal">
            <span className="eyebrow">Pourquoi ImmoBrico</span>
            <h2 className="h2">Le réflexe local de confiance.</h2>
          </div>
          <div className="why-grid stagger">
            <div className="why"><div className="n">01</div><h4>Expertise</h4><p>Des poseurs expérimentés, à l’aise sur tous les mobiliers.</p></div>
            <div className="why"><div className="n">02</div><h4>Réactivité</h4><p>Un interlocuteur disponible pour planifier votre chantier.</p></div>
            <div className="why"><div className="n">03</div><h4>Qualité garantie</h4><p>Un travail vérifié avec un soin particulier aux finitions.</p></div>
            <div className="why"><div className="n">04</div><h4>Transparence</h4><p>Un devis clair, sans surprise sur la facture.</p></div>
            <div className="why"><div className="n">05</div><h4>Prix justes</h4><p>Un bon rapport qualité-prix, adapté à chaque projet.</p></div>
          </div>
        </div>
      </section>

      <section className="sec sec--alt" id="avis">
        <div className="container">
          <div className="avis-head reveal">
            <div>
              <span className="eyebrow">Avis Google</span>
              <h2 className="h2 section-title--spaced">Des projets réalisés avec sérieux et précision.</h2>
            </div>
            <div className="gnote"><span className="stars">5/5</span><b>5,0</b><span>· Avis Google</span></div>
          </div>
          <div className="avis-grid stagger">
            <div className="avis">
              <div className="stars">5/5</div>
              <p>« Montage d’un dressing complet en une matinée. C’est nickel et tout est droit. »</p>
              <div className="who"><b>Marie L.</b><span>Orléans · particulier</span></div>
            </div>
            <div className="avis">
              <div className="stars">5/5</div>
              <p>« Aménagement de nos bureaux : réception, montage, installation, tout était géré. »</p>
              <div className="who"><b>Thomas R.</b><span>Saran · entreprise</span></div>
            </div>
            <div className="avis">
              <div className="stars">5/5</div>
              <p>« Je fais appel à eux entre deux locations. Sérieux, ponctuels, logements impeccables. »</p>
              <div className="who"><b>Sophie M.</b><span>Olivet · bailleur</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="container reveal">
          <div className="teaser">
            <div>
              <div className="tag">Conception 3D</div>
              <h3>Visualisez votre espace aménagé, avant les travaux.</h3>
              <p>Conception 3D, livraison de meubles, logistique et agencement : un aperçu clair de votre projet avant les travaux.</p>
            </div>
            <div className="cta-wrap"><a href="#devis" className="btn btn--ghost">Être informé <span className="arr">→</span></a></div>
          </div>
        </div>
      </section>

      <section className="sec sec--alt" id="devis">
        <div className="container devis-grid">
          <div className="devis-aside reveal">
            <span className="eyebrow">Devis gratuit</span>
            <h2 className="h2">Parlez-nous de votre projet.</h2>
            <p className="lead">Décrivez votre besoin, ajoutez quelques photos : on revient vers vous sous 24 h avec une estimation claire.</p>
            <ul className="devis-pts">
              <li>Réponse sous 24 h ouvrées</li>
              <li>Estimation gratuite et sans engagement</li>
              <li>Une photo vaut mille mots : joignez les vôtres</li>
            </ul>
          </div>
          <DevisForm />
        </div>
      </section>

      <section className="sec" id="zone">
        <div className="container zone-grid">
          <div className="reveal">
            <span className="eyebrow">Zone d'intervention</span>
            <h2 className="h2">Monteur de meubles à Orléans et dans le Loiret.</h2>
            <p className="lead section-intro">Montage de meubles, pose de cuisine, dressing PAX et aménagement intérieur à Orléans, Saran, Olivet, Fleury-les-Aubrais et dans tout le Loiret.</p>
            <p className="zone-list">Saran <i>·</i> Orléans <i>·</i> Saint-Jean-de-la-Ruelle <i>·</i> Olivet <i>·</i> Fleury-les-Aubrais <i>·</i> Loiret <i>·</i> Île-de-France <i>·</i> Loir-et-Cher.</p>
          </div>
          <div className="map reveal">
            <div className="ring"></div>
            <div className="ring r2"></div>
            <div className="pin"><div className="dot"></div><div className="lab">Saran · 45770</div></div>
          </div>
        </div>
      </section>
    </main>
  );
}
