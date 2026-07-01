import DevisForm from '@/components/DevisForm';
import { HERO_IMAGE, REALISATIONS } from '@/lib/content';

export default function Home() {
  return (
    <main id="top">

  
  <section className="hero">
    <div className="hero-bg" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={HERO_IMAGE} alt="" />
    </div>
    <div className="container hero-inner">
      <span className="eyebrow reveal">Monteur de meubles &amp; aménagement clé en main — Orléans &amp; Loiret</span>
      <h1 className="display reveal">Votre mobilier monté et installé.<br />Votre espace <span className="brass-text">aménagé, clé en main</span>.</h1>
      <p className="lead reveal">À Orléans et dans le Loiret, ImmoBrico monte et installe tout type de mobilier (toutes marques), pose vos cuisines, dressings et PAX, équipe vos bureaux et aménage vos espaces clé en main. Pour les particuliers comme pour les professionnels. Proprement, dans les délais.</p>
      <div className="hero-cta reveal">
        <a href="#devis" className="btn btn--brass">Demander un devis <span className="arr">→</span></a>
        <a href="/realisations" className="lnk">Voir nos réalisations <span className="arr">→</span></a>
      </div>
      <div className="hero-meta reveal">
        <div className="m"><div className="k">Mobilier</div><div className="v">Toutes marques</div></div>
        <div className="m"><div className="k">Devis</div><div className="v">Gratuit, sous 24 h</div></div>
        <div className="m"><div className="k">Disponibilité</div><div className="v">7j/7 · 7h–19h</div></div>
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
        <span className="eyebrow">Nos services</span>
        <h2 className="h2">Du meuble à l'espace fini.</h2>
        <p className="lead">Un interlocuteur unique pour le montage de meubles, la pose de cuisine, l'agencement et l'aménagement clé en main de vos espaces, à Orléans et dans le Loiret.</p>
      </div>
      <div className="svc-row reveal">
        <span className="svc-n">01</span>
        <div>
          <h3>Montage &amp; installation de mobilier</h3>
          <p>Tout type de mobilier, toutes marques : on réceptionne, on monte, on fixe et on installe. Dressings, cuisines, mobilier professionnel, sur-mesure — un service complet qui vous fait gagner du temps.</p>
          <p className="kw">Dressings &amp; PAX · Cuisines · Mobilier de bureau · Sur-mesure · Fixations murales</p>
        </div>
        <a href="#devis" className="svc-go">Devis <span className="arr">→</span></a>
      </div>
      <div className="svc-row reveal">
        <span className="svc-n">02</span>
        <div>
          <h3>Aménagement &amp; agencement clé en main</h3>
          <p>Vous nous confiez l'espace, on vous le rend prêt à vivre : sélection et fourniture du mobilier si besoin, réception, installation et mise en place complète. Pour particuliers et professionnels.</p>
          <p className="kw">Logements meublés · Bureaux &amp; commerces · Locatif · Résidences</p>
        </div>
        <a href="#devis" className="svc-go">Devis <span className="arr">→</span></a>
      </div>
      <div className="svc-row reveal">
        <span className="svc-n">03</span>
        <div>
          <h3>Mobilier professionnel &amp; aménagement de bureaux</h3>
          <p>Bureaux, commerces, espaces d'accueil : fourniture, montage et installation de mobilier professionnel, agencement et optimisation de vos locaux à Orléans et dans le Loiret.</p>
          <p className="kw">Aménagement de bureaux · Mobilier de commerce · Espaces pro · Optimisation d'espace</p>
        </div>
        <a href="#devis" className="svc-go">Devis <span className="arr">→</span></a>
      </div>
      <div className="svc-plus reveal">
        <span className="tag">Et aussi</span>
        <p><b>Petits travaux &amp; finitions</b> — pose d'accessoires, luminaires, tringles, étagères, fixation TV, retouches… les détails qui complètent et finissent vos espaces.</p>
      </div>
    </div>
  </section>

  
  <section className="sec sec--alt" id="parcours">
    <div className="container">
      <div className="sec-head reveal">
        <span className="eyebrow">Comment ça marche</span>
        <h2 className="h2">Deux situations, un accompagnement.</h2>
        <p className="lead">Que votre mobilier soit déjà livré ou pas encore choisi, on part de votre point de départ.</p>
      </div>
      <div className="parc-grid">
        <div className="parc reveal">
          <div className="tag">Cas 01 — vous avez déjà votre mobilier</div>
          <h3>On s'occupe de tout, jusqu'à la mise en service.</h3>
          <ul className="steps">
            <li><b>Livraison</b> de vos cartons sur place si besoin</li>
            <li><b>Montage</b> de l'ensemble du mobilier</li>
            <li><b>Installation</b> &amp; mise en place dans chaque pièce</li>
            <li><b>Fixations murales</b> : TV, étagères, tringles</li>
            <li><b>Pose des accessoires</b> &amp; réglages</li>
            <li><b>Mise en service</b> &amp; évacuation des emballages</li>
          </ul>
        </div>
        <div className="parc reveal">
          <div className="tag">Cas 02 — vous n'avez pas encore votre mobilier</div>
          <h3>On vous accompagne du choix à l'installation.</h3>
          <ul className="steps">
            <li><b>Accompagnement</b> &amp; conseil selon votre projet</li>
            <li><b>Sélection &amp; fourniture</b> du mobilier</li>
            <li><b>Réception</b> des marchandises &amp; palettes</li>
            <li><b>Stockage temporaire</b> sécurisé si nécessaire</li>
            <li><b>Livraison</b> au bon moment, au bon endroit</li>
            <li><b>Installation</b> complète &amp; finitions</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  
  <section className="sec" id="realisations">
    <div className="container">
      <div className="sec-head reveal">
        <span className="eyebrow">Réalisations</span>
        <h2 className="h2">Nos derniers chantiers.</h2>
        <p className="lead">Un aperçu de nos montages et aménagements, pour particuliers et professionnels.</p>
      </div>
      
      <div className="real-grid stagger">
        {REALISATIONS.slice(0, 6).map((r, i) => (
          <article className="real" key={i}>
            <div className="ph">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={r.src} alt={r.title} loading="lazy" decoding="async" />
            </div>
            <div className="meta"><span className="cat">{r.cat}</span><h4>{r.title}</h4></div>
          </article>
        ))}
      </div>
      <div className="real-cta reveal"><a href="#devis" className="lnk">Voir toutes nos réalisations <span className="arr">→</span></a></div>
    </div>
  </section>

  
  <section className="sec sec--alt" id="cle">
    <div className="container">
      <div className="sec-head reveal">
        <span className="eyebrow">Offre clé en main</span>
        <h2 className="h2">On vous tend les clés d'un lieu fini.</h2>
        <p className="lead">Pour les particuliers comme pour les professionnels, on prend en charge l'aménagement complet de vos espaces.</p>
      </div>
      <p className="cle-flow reveal">Studios <i>·</i> Appartements meublés <i>·</i> Colocations <i>·</i> Locatif <i>·</i> Bureaux <i>·</i> Commerces <i>·</i> Restaurants <i>·</i> Bars <i>·</i> Salles de formation <i>·</i> Résidences étudiantes.</p>
    </div>
  </section>

  
  <section className="sec" id="logistique">
    <div className="container">
      <div className="sec-head reveal">
        <span className="eyebrow">Logistique intégrée</span>
        <h2 className="h2">De la palette au meuble en place.</h2>
        <p className="lead">On gère toute la chaîne pour vous éviter la manutention et les emballages qui s'entassent.</p>
      </div>
      <div className="logi-grid stagger">
        <div className="logi-step"><div className="n">01</div><h4>Réception</h4><p>Marchandises &amp; palettes réceptionnées pour vous.</p></div>
        <div className="logi-step"><div className="n">02</div><h4>Stockage</h4><p>Stockage temporaire sécurisé jusqu'au jour J.</p></div>
        <div className="logi-step"><div className="n">03</div><h4>Livraison</h4><p>Acheminement sur site, à l'étage, au bon moment.</p></div>
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
        <div className="tarif"><h4>Montage d'un meuble</h4><p>Assemblage et mise en place d'un meuble standard, toutes marques.</p><div className="price"><small>à partir de</small>39 €</div></div>
        <div className="tarif"><h4>Fixation murale / TV</h4><p>Pose sécurisée : TV, étagères, tringles, tableaux, accessoires.</p><div className="price"><small>à partir de</small>49 €</div></div>
        <div className="tarif"><h4>Dressing / PAX</h4><p>Montage complet d'un dressing ou placard modulable.</p><div className="price"><small>à partir de</small>149 €</div></div>
        <div className="tarif"><h4>Journée de montage</h4><p>Une équipe sur place pour vos projets multi-meubles.</p><div className="price"><small>à partir de</small>290 €</div></div>
        <div className="tarif devis"><h4>Cuisine équipée</h4><p>Montage et installation complète, selon la configuration.</p><div className="price">Sur devis</div></div>
        <div className="tarif devis"><h4>Aménagement clé en main</h4><p>Projet complet, de la réception à l'installation finale.</p><div className="price">Sur devis</div></div>
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
        <div className="why"><div className="n">01</div><h4>Expertise</h4><p>Des poseurs expérimentés, tout type de mobilier.</p></div>
        <div className="why"><div className="n">02</div><h4>Service client</h4><p>Un interlocuteur réactif, 7j/7 de 7h à 19h.</p></div>
        <div className="why"><div className="n">03</div><h4>Qualité garantie</h4><p>Un travail vérifié, des finitions à la hauteur.</p></div>
        <div className="why"><div className="n">04</div><h4>Transparence</h4><p>Un devis clair, sans surprise sur la facture.</p></div>
        <div className="why"><div className="n">05</div><h4>Prix justes</h4><p>Un bon rapport qualité-prix, adapté au projet.</p></div>
      </div>
    </div>
  </section>

  
  <section className="sec sec--alt" id="avis">
    <div className="container">
      <div className="avis-head reveal">
        <div>
          <span className="eyebrow">Avis clients</span>
          <h2 className="h2" style={{ marginTop: '1rem' }}>Ils nous ont confié leur intérieur.</h2>
        </div>
        
        <div className="gnote"><span className="stars">★★★★★</span><b>5,0</b><span>· Avis Google</span></div>
      </div>
      <div className="avis-grid stagger">
        <div className="avis">
          <div className="stars">★★★★★</div>
          <p>« Montage d'un dressing complet en une matinée. C'est nickel et tout est droit. »</p>
          <div className="who"><b>Marie L.</b><span>Orléans · particulier</span></div>
        </div>
        <div className="avis">
          <div className="stars">★★★★★</div>
          <p>« Aménagement de nos bureaux : réception, montage, installation, tout était géré. »</p>
          <div className="who"><b>Thomas R.</b><span>Saran · entreprise</span></div>
        </div>
        <div className="avis">
          <div className="stars">★★★★★</div>
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
          <div className="tag">Bientôt</div>
          <h3>Visualisez votre espace aménagé, avant les travaux.</h3>
          <p>Un aperçu 3D de votre intérieur pour vous projeter et valider l'agencement en toute confiance.</p>
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
              <li>Estimation gratuite &amp; sans engagement</li>
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
        <h2 className="h2">Monteur de meubles à Orléans &amp; dans le Loiret.</h2>
        <p className="lead" style={{ marginTop: '1rem' }}>Montage de meubles, pose de cuisine, dressing PAX et aménagement intérieur à Orléans, Saran, Olivet, Fleury-les-Aubrais et dans tout le Loiret.</p>
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
