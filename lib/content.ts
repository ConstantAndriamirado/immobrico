export type Service = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  includes: string[];
  process: { t: string; d: string }[];
  keywords: string[];
  image?: string;
};

export const HERO_IMAGE = "https://files.cdn-files-a.com/uploads/8174732/2000_67e45b12a54e9.jpg";

export const CREDIT_IMPOT = "Services à la personne : jusqu’à 50 % de crédit d’impôt sur les prestations éligibles. Une prestation de 200 € ne vous coûte réellement que 100 €.";

export const SERVICES: Service[] = [
  {
    "slug": "montage-meubles",
    "name": "Montage & installation de mobilier",
    "short": "Tout type de mobilier, toutes marques : monté, fixé, installé.",
    "intro": "Besoin d'un montage de meubles rapide et sécurisé ? ImmoBrico s'occupe du montage, de l'installation et de l'agencement de votre mobilier, pour les particuliers comme pour les entreprises. IKEA, BUT, Conforama, Maisons du Monde, Leroy Merlin, Amazon ou sur-mesure : quelle que soit la marque, vous gagnez du temps et profitez d'un service clé en main, du déballage à la mise en place finale.",
    "includes": [
      "Déballage et tri des éléments",
      "Montage soigné selon notice constructeur",
      "Fixation murale sécurisée (meubles hauts, étagères)",
      "Mise en place dans la pièce",
      "Réglages (portes, tiroirs, aplomb)",
      "Évacuation des cartons et emballages"
    ],
    "process": [
      {
        "t": "Devis",
        "d": "Estimation gratuite sous 24 h à partir de votre besoin et de vos photos."
      },
      {
        "t": "Intervention",
        "d": "Montage et installation à la date convenue, proprement."
      },
      {
        "t": "Vérification",
        "d": "Contrôle qualité et réglages avant de quitter les lieux."
      }
    ],
    "keywords": [
      "monteur de meubles Orléans",
      "montage de meubles Loiret",
      "montage IKEA Orléans"
    ],
    "image": "https://files.cdn-files-a.com/uploads/8174732/800_gi-67cd6b753ea0d.jpg"
  },
  {
    "slug": "cuisine",
    "name": "Pose de cuisine & aménagement de cuisine",
    "short": "Montage et installation complète de votre cuisine équipée.",
    "intro": "Cuisine en kit ou sur-mesure, nous assurons le montage des caissons, la pose des façades, plans de travail, électroménager encastrable et finitions. Une cuisine prête à l'emploi, installée dans les règles de l'art.",
    "includes": [
      "Montage des caissons et meubles",
      "Pose des façades et plans de travail",
      "Installation de l'électroménager encastrable",
      "Fixation murale et calage de niveau",
      "Pose des poignées, plinthes et finitions",
      "Raccordements simples (hors plomberie/élec lourde)"
    ],
    "process": [
      {
        "t": "Étude",
        "d": "On valide ensemble la configuration et le planning."
      },
      {
        "t": "Montage",
        "d": "Pose complète de la cuisine, élément par élément."
      },
      {
        "t": "Finitions",
        "d": "Réglages, alignements et nettoyage du chantier."
      }
    ],
    "keywords": [
      "pose de cuisine Orléans",
      "montage cuisine Loiret"
    ],
    "image": "https://images.cdn-files-a.com/uploads/8174732/2000_649427b0c47f1.jpg?width=1000"
  },
  {
    "slug": "dressing-pax",
    "name": "Dressings & PAX",
    "short": "Montage de dressings et placards modulables sur-mesure.",
    "intro": "Spécialistes du montage de dressings et systèmes PAX, nous assemblons et fixons vos rangements modulables — Ikea, Alinéa, Lapeyre, portes de placard coulissantes — des plus simples aux configurations d'angle complexes, avec aménagement intérieur complet.",
    "includes": [
      "Assemblage des caissons et structures",
      "Fixation murale anti-bascule",
      "Pose des portes (battantes / coulissantes)",
      "Aménagement intérieur (tringles, tiroirs, étagères)",
      "Réglage et alignement des façades",
      "Évacuation des emballages"
    ],
    "process": [
      {
        "t": "Devis",
        "d": "Selon le nombre de modules et la configuration."
      },
      {
        "t": "Montage",
        "d": "Assemblage et fixation sécurisée."
      },
      {
        "t": "Réglages",
        "d": "Alignement parfait des portes et tiroirs."
      }
    ],
    "keywords": [
      "dressing PAX Orléans",
      "montage dressing Loiret"
    ],
    "image": "https://images.cdn-files-a.com/uploads/8174732/2000_6489d0188d937.jpg?width=1000"
  },
  {
    "slug": "mobilier-professionnel",
    "name": "Mobilier professionnel & aménagement de bureaux",
    "short": "Fourniture, montage et agencement de mobilier pro.",
    "intro": "Entreprises, collectivités, résidences étudiantes, commerces, établissements publics ou privés : nous montons et agençons votre mobilier professionnel et optimisons l'agencement de vos locaux. Vous avez déjà vos meubles ? Nos équipes s'en chargent. Un interlocuteur unique pour équiper vos espaces de travail, en site occupé si besoin.",
    "includes": [
      "Conseil et fourniture du mobilier (option)",
      "Montage de postes, rangements, cloisons",
      "Aménagement de salles de réunion",
      "Mobilier d'accueil et de commerce",
      "Installation en site occupé possible",
      "Intervention coordonnée et planifiée"
    ],
    "process": [
      {
        "t": "Cahier des charges",
        "d": "On cadre le besoin, le volume et le planning."
      },
      {
        "t": "Livraison & montage",
        "d": "Réception, montage et installation sur site."
      },
      {
        "t": "Mise en service",
        "d": "Espaces prêts à l'emploi, sans interruption d'activité."
      }
    ],
    "keywords": [
      "mobilier professionnel Orléans",
      "aménagement de bureaux Orléans"
    ],
    "image": "https://images.cdn-files-a.com/uploads/8174732/2000_64bed3d045720.jpg?width=1000"
  },
  {
    "slug": "amenagement-cle-en-main",
    "name": "Rénovation & aménagement clé en main",
    "short": "Un espace livré, prêt à vivre ou prêt à louer.",
    "intro": "Transformez votre espace avec ImmoBrico ! Pour les particuliers comme pour les professionnels, nous réalisons des travaux d'aménagement et de rénovation intérieure sur mesure pour bureaux, commerces et logements : conseil, fourniture éventuelle du mobilier, réception, montage, installation et finitions. Vous récupérez les clés d'un lieu fini.",
    "includes": [
      "Accompagnement et conseil d'aménagement",
      "Sélection et fourniture du mobilier (option)",
      "Réception et stockage temporaire",
      "Montage et installation complète",
      "Décoration et accessoires (option)",
      "Lieu livré prêt à l'emploi"
    ],
    "process": [
      {
        "t": "Projet",
        "d": "On définit ensemble le résultat attendu et le budget."
      },
      {
        "t": "Réalisation",
        "d": "Logistique, montage et installation de A à Z."
      },
      {
        "t": "Livraison",
        "d": "Remise des clés d'un espace fini et fonctionnel."
      }
    ],
    "keywords": [
      "aménagement intérieur Orléans",
      "aménagement clé en main Loiret",
      "rénovation intérieure Orléans"
    ],
    "image": "https://files.cdn-files-a.com/uploads/8174732/800_gi-67d58f81af1fa.jpg"
  },
  {
    "slug": "logistique",
    "name": "Réception, stockage & logistique",
    "short": "De la palette au meuble en place, on gère toute la chaîne.",
    "intro": "Vous évitez la manutention et les allers-retours : nous réceptionnons vos marchandises et palettes, les stockons temporairement si besoin, puis assurons la livraison, le montage et l'installation au bon moment. Nous gérons aussi les gros volumes (équipement de sites, centres et locaux professionnels).",
    "includes": [
      "Réception des marchandises et palettes",
      "Stockage temporaire sécurisé",
      "Livraison sur site, à l'étage",
      "Montage et installation",
      "Coordination du planning de livraison",
      "Évacuation des déchets et emballages"
    ],
    "process": [
      {
        "t": "Réception",
        "d": "On réceptionne et contrôle vos livraisons."
      },
      {
        "t": "Stockage",
        "d": "Conservation sécurisée jusqu'au jour J."
      },
      {
        "t": "Livraison & pose",
        "d": "Acheminement, montage et installation."
      }
    ],
    "keywords": [
      "réception stockage mobilier Orléans",
      "logistique mobilier Loiret"
    ],
    "image": "https://images.cdn-files-a.com/uploads/8174732/800_64b80a4e396b5-thumbnail.jpg?width=1000"
  },
  {
    "slug": "petits-travaux",
    "name": "Bricolage, petits travaux & finitions",
    "short": "Les détails qui complètent et finissent vos espaces.",
    "intro": "En complément de nos prestations principales, ImmoBrico réalise les petits travaux qui font la différence : réparations (poignées, luminaires, joints), fixations murales (tringles, étagères, TV), montage de meubles et retouches (peinture, finitions). Gagnez du temps avec un service clé en main.",
    "includes": [
      "Réparations : poignées, luminaires, joints",
      "Fixations murales : tringles, étagères, TV",
      "Pose d'accessoires et de luminaires",
      "Montage de meubles ponctuel",
      "Retouches : peinture, finitions",
      "Démontage et débarras d'anciens meubles"
    ],
    "process": [
      {
        "t": "Devis",
        "d": "À l'heure ou au forfait selon la liste de tâches."
      },
      {
        "t": "Intervention",
        "d": "Réalisation soignée, en une seule visite si possible."
      },
      {
        "t": "Contrôle",
        "d": "Vérification et nettoyage avant départ."
      }
    ],
    "keywords": [
      "bricolage Orléans",
      "fixation TV Orléans",
      "petits travaux Loiret"
    ],
    "image": "https://images.cdn-files-a.com/uploads/8174732/2000_65ae2d627cccc.jpg?width=1000"
  }
];

export const REALISATIONS: { src: string; title: string; cat: string }[] = [
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_6489d018c8735_filter_6489d03f895cf.jpg?width=850",
    "title": "Un canapé Conforama",
    "cat": "Salons & canapés"
  },
  {
    "src": "https://files.cdn-files-a.com/uploads/8174732/2000_6489d019cafe0_filter_67e0515e1ea98.jpg",
    "title": "Une armoire Conforama",
    "cat": "Chambres & dressings"
  },
  {
    "src": "https://files.cdn-files-a.com/uploads/8174732/2000_6489d01968f3c_filter_67e2d44d279db.jpg",
    "title": "Un dressing Alinéa",
    "cat": "Chambres & dressings"
  },
  {
    "src": "https://files.cdn-files-a.com/uploads/8174732/2000_6489d01ac2448_filter_67e2d67a581a1.jpg",
    "title": "Un bahut Amazon",
    "cat": "Rangements & meubles"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_6489d0188d937.jpg?width=850",
    "title": "Un dressing Pax Ikea",
    "cat": "Chambres & dressings"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_6489d01adb6b7.jpg?width=850",
    "title": "Un lit coffre Conforama",
    "cat": "Chambres & dressings"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_6489d01ac5159.jpg?width=850",
    "title": "Un lit coffre But",
    "cat": "Chambres & dressings"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_6489d01abaa45.jpg?width=850",
    "title": "Un lit coffre Conforama",
    "cat": "Chambres & dressings"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_6489d01ac6e09.jpg?width=850",
    "title": "Un buffet Conforama",
    "cat": "Rangements & meubles"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_6489d01af34e0.jpg?width=850",
    "title": "Une armoire Conforama",
    "cat": "Chambres & dressings"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_648c0b1e762c4.jpg?width=850",
    "title": "Installation & pose de porte de placard coulissant",
    "cat": "Chambres & dressings"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_648c0b1ea4cc6.jpg?width=850",
    "title": "Installations d'un dressing Lapeyre",
    "cat": "Chambres & dressings"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_648c0b1f43060.jpg?width=850",
    "title": "Installation d'une chambre mobilier Ikea",
    "cat": "Chambres & dressings"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_648c0b203ec04.jpg?width=850",
    "title": "Une table Ikea",
    "cat": "Rangements & meubles"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_648c0b219125f.jpg?width=850",
    "title": "Une bibliothèque Picawood",
    "cat": "Rangements & meubles"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_648c0b2201fe9.jpg?width=850",
    "title": "Un lit 2 places Conforama",
    "cat": "Chambres & dressings"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_648c0b21df13b.jpg?width=850",
    "title": "Un canapé 2 places Conforama",
    "cat": "Salons & canapés"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_648c0b21aef34.jpg?width=850",
    "title": "Un canapé 7 places d'angle Conforama",
    "cat": "Salons & canapés"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_648c0b222bbe1.jpg?width=850",
    "title": "Un canapé 3 places Ikea",
    "cat": "Salons & canapés"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_648c0b22923e2.jpg?width=850",
    "title": "Installation d'un salon mobilier Ikea",
    "cat": "Salons & canapés"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_649425b39df60_filter_649425eb88aca.jpg?width=850",
    "title": "Une étagère VILTO Ikea",
    "cat": "Rangements & meubles"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_649427b0c47f1.jpg?width=850",
    "title": "Une Table à manger et l'installation et la pose d'un miroir La Redoute",
    "cat": "Rangements & meubles"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_649da0595725b.jpg?width=850",
    "title": "Montage & agencement de plusieurs lits",
    "cat": "Chambres & dressings"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_649da059e2d96.jpg?width=850",
    "title": "Montage d'une maisonnette de 4m²",
    "cat": "Extérieur & divers"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/800_64a14ce77ee70-thumbnail.jpg?width=850",
    "title": "Rempotage",
    "cat": "Extérieur & divers"
  },
  {
    "src": "https://files.cdn-files-a.com/uploads/8174732/800_64b7e615b5d95-thumbnail_filter_67eedb7c917bf.jpg",
    "title": "Installation d'un Spa INTEX",
    "cat": "Extérieur & divers"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_64b7f78152b79.jpg?width=850",
    "title": "Un canapé d'angle Conforama",
    "cat": "Salons & canapés"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_64b7f78164130.jpg?width=850",
    "title": "Un meuble télévision Conforama",
    "cat": "Rangements & meubles"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_64b7f79ec131c.jpg?width=850",
    "title": "Un porte manteau Conforama",
    "cat": "Rangements & meubles"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_64b7f79f09c73.jpg?width=850",
    "title": "Un meuble TV But",
    "cat": "Rangements & meubles"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_64b7f79ea1247.jpg?width=850",
    "title": "Un bahut But",
    "cat": "Rangements & meubles"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/800_64b7f7aa8aa2e-thumbnail.jpg?width=850",
    "title": "Une bibliothèque IKEA type billy",
    "cat": "Rangements & meubles"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/800_64b80a4e396b5-thumbnail.jpg?width=850",
    "title": "Montage des meubles au centre des archives à orléans",
    "cat": "Bureaux & pro"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_64bed3d045720.jpg?width=850",
    "title": "Un bureau gamer BUT",
    "cat": "Bureaux & pro"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_64bed40dc6c53.jpg?width=850",
    "title": "Un mobilier chaussure moderne BUT",
    "cat": "Rangements & meubles"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_650eb90457ea6.jpg?width=850",
    "title": "Un lit Amazon",
    "cat": "Chambres & dressings"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_650eb905b940c.jpg?width=850",
    "title": "Un canapé d'angle Conforama",
    "cat": "Salons & canapés"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_650eb9080f2d7.jpg?width=850",
    "title": "Un buffet moderne BUT",
    "cat": "Rangements & meubles"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_65ae2be184765.png?width=850",
    "title": "Un Toboggan extérieure",
    "cat": "Extérieur & divers"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_65ae2c0a52694.png?width=850",
    "title": "Une chambre avec des meubles Ikea",
    "cat": "Chambres & dressings"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_65ae2d627cccc.jpg?width=850",
    "title": "Montage de meuble & fixation d'étagère IKEA",
    "cat": "Rangements & meubles"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_65ae2d6303c6d.jpg?width=850",
    "title": "Un buffet sur mesure de centimetre.com",
    "cat": "Rangements & meubles"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_65ae2d649a308.jpg?width=850",
    "title": "Montage & Agencement d'un meubles télévision Amazon",
    "cat": "Rangements & meubles"
  },
  {
    "src": "https://files.cdn-files-a.com/uploads/8174732/2000_65e8c31f10a49_filter_67eecb1720471.png",
    "title": "Montage d'une table à langer Amazon",
    "cat": "Rangements & meubles"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_65e8c31f1594e.png?width=850",
    "title": "Montage d'un lit 2 places IKEA",
    "cat": "Chambres & dressings"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_65e8c31f17958.png?width=850",
    "title": "Installation d'un canapé 2 Place IKEA",
    "cat": "Salons & canapés"
  },
  {
    "src": "https://images.cdn-files-a.com/uploads/8174732/2000_65e8c31ef1669.png?width=850",
    "title": "Agencement d'un lit 1 Place",
    "cat": "Chambres & dressings"
  }
];

export const REAL_CATEGORIES = ["Tous", "Salons & canapés", "Chambres & dressings", "Rangements & meubles", "Bureaux & pro", "Extérieur & divers"];

export const PRO: { title: string; desc: string }[] = [
  {
    "title": "Entreprises & bureaux",
    "desc": "Équipement et agencement de vos espaces de travail, sans interrompre l'activité."
  },
  {
    "title": "Collectivités & établissements",
    "desc": "Hôpitaux, établissements publics ou privés : montage et installation sur sites."
  },
  {
    "title": "Résidences étudiantes & coliving",
    "desc": "Ameublement complet de studios et logements meublés en série."
  },
  {
    "title": "Commerces & grande distribution",
    "desc": "Mobilier d'accueil, agencement de salle et d'espaces clients."
  },
  {
    "title": "Syndics & bailleurs",
    "desc": "Remise en état et ameublement entre deux locations, rapidement."
  },
  {
    "title": "Espaces de pause & détente",
    "desc": "Tables, fauteuils, canapés, rangements : on aménage vos espaces de pause."
  }
];

export const TARIFS: { name: string; desc: string; price: string; from?: boolean }[] = [
  {
    "name": "Montage à domicile",
    "desc": "Assemblage et installation de mobilier, toutes marques.",
    "price": "85 €",
    "from": true
  },
  {
    "name": "Fixation murale / TV",
    "desc": "Pose sécurisée : TV, étagères, tringles, tableaux, accessoires.",
    "price": "49 €",
    "from": true
  },
  {
    "name": "Livraison + installation",
    "desc": "Forfait livraison puis montage et mise en place chez vous.",
    "price": "130 €",
    "from": true
  },
  {
    "name": "Journée de montage",
    "desc": "Une équipe sur place pour vos projets multi-meubles.",
    "price": "290 €",
    "from": true
  },
  {
    "name": "Pose de cuisine",
    "desc": "Montage et installation complète, selon la configuration.",
    "price": "Sur devis"
  },
  {
    "name": "Aménagement clé en main",
    "desc": "Projet complet, de la réception à l'installation finale.",
    "price": "Sur devis"
  }
];

export const VALUES: { n: string; title: string; desc: string }[] = [
  {
    "n": "01",
    "title": "Expertise",
    "desc": "Des professionnels formés et expérimentés, qui maîtrisent leur métier."
  },
  {
    "n": "02",
    "title": "Service client",
    "desc": "Une attention personnalisée : on répond vite et efficacement à vos questions."
  },
  {
    "n": "03",
    "title": "Qualité garantie",
    "desc": "Aucun compromis sur la qualité, du petit montage au grand projet."
  },
  {
    "n": "04",
    "title": "Transparence",
    "desc": "Une communication ouverte et honnête, à chaque étape du projet."
  },
  {
    "n": "05",
    "title": "Prix compétitifs",
    "desc": "Un excellent rapport qualité-prix, des tarifs justes et compétitifs."
  }
];

export const FAQ: { q: string; a: string }[] = [
  {
    "q": "Comment fonctionnent vos services ?",
    "a": "Nous fonctionnons sur rendez-vous : vous nous contactez, nous fixons un rendez-vous ensemble et établissons un devis en fonction de vos besoins."
  },
  {
    "q": "Assemblez-vous des meubles autres qu'IKEA ?",
    "a": "Oui, nous ne nous limitons pas à IKEA. Nous montons tout type de mobilier, toutes marques : BUT, Conforama, Maisons du Monde, Leroy Merlin, Amazon, Alinéa, Lapeyre, sur-mesure…"
  },
  {
    "q": "Installez-vous étagères, stores, placards et penderies ?",
    "a": "Oui, notre gamme de services comprend l'installation de tous ces éléments."
  },
  {
    "q": "Pouvez-vous démonter et débarrasser les anciens meubles ?",
    "a": "Oui, nous proposons un service de démontage et d'élimination des anciens meubles."
  },
  {
    "q": "Que se passe-t-il avec les emballages ?",
    "a": "L'évacuation des emballages est incluse dans notre prestation : nous laissons votre espace propre et prêt à l'emploi."
  },
  {
    "q": "Fournissez-vous les outils nécessaires ?",
    "a": "Oui, nos professionnels sont équipés de tous les outils nécessaires. Vous n'avez rien à fournir."
  },
  {
    "q": "Proposez-vous une garantie sur votre travail ?",
    "a": "Oui, nous offrons une garantie de satisfaction. Si vous n'êtes pas satisfait, nous corrigeons le problème dans les meilleurs délais."
  },
  {
    "q": "Et si l'espace de montage n'est pas suffisant ?",
    "a": "Nos monteurs ont besoin d'un espace de travail approprié. Si des manutentions supplémentaires sont nécessaires faute de place, des frais additionnels peuvent s'appliquer."
  },
  {
    "q": "Que faire si des pièces sont manquantes ou endommagées ?",
    "a": "Lors d'une livraison par nos soins, nous vérifions le bordereau. Si un carton est endommagé, nous nous réservons le droit de le refuser."
  },
  {
    "q": "Combien de temps faut-il pour monter un meuble ?",
    "a": "Cela dépend de la complexité et de la taille du meuble. Nous donnons une estimation précise une fois le meuble identifié."
  },
  {
    "q": "Pouvez-vous intervenir aujourd'hui ?",
    "a": "Si notre planning le permet, nous pouvons intervenir le jour même. Nous travaillons toutefois principalement sur rendez-vous."
  },
  {
    "q": "Quand dois-je payer ?",
    "a": "Le paiement est dû une fois la prestation réalisée."
  },
  {
    "q": "Quels moyens de paiement acceptez-vous ?",
    "a": "Espèces, carte bleue ou virement bancaire. Nous n'acceptons pas les chèques."
  },
  {
    "q": "Et si j'annule mon rendez-vous ?",
    "a": "Merci de nous prévenir au moins 48 heures à l'avance afin que nous puissions reprogrammer."
  },
  {
    "q": "Bénéficie-t-on d'un crédit d'impôt ?",
    "a": "Oui, nos prestations de services à la personne sont éligibles à 50 % de crédit d'impôt : une prestation facturée 200 € ne vous coûte réellement que 100 €."
  },
  {
    "q": "Quels sont vos horaires ?",
    "a": "Nous sommes disponibles 7j/7, de 7h à 19h, sans interruption."
  }
];
