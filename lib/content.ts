import heroImage from '@/assets/modern_living_room_with_large_window_on_the_2.jpg';
import montageImage from '@/assets/modern_living_room_with_beige_sofa_and_wooden.jpg';
import cuisineImage from '@/assets/modern_kitchen_with_white_cabinets_and_black_count_2.jpg';
import dressingImage from '@/assets/black_sliding_wardrobe_with_large_mirror_in_the.jpg';
import bureauImage from '@/assets/modern_office_space_with_large_window_that_offers.jpg';
import amenagementImage from '@/assets/modern_dining_area_with_round_wooden_table_and.jpg';
import logistiqueImage from '@/assets/an_empty_office_space_with_large_wooden_desk.jpg';
import travauxImage from '@/assets/white_bathroom_vanity_with_single_sink_and_mirror.jpg';
import realisation1 from '@/assets/modern_kitchen_with_large_wooden_table_in_the.jpg';
import realisation2 from '@/assets/white_wardrobe_in_bedroom_the_wardrobe_has_two_2.jpg';
import realisation3 from '@/assets/modern_office_space_with_white_reception_desk_in.jpg';
import realisation4 from '@/assets/wooden_sideboard_in_room_with_floral_wallpaper_the.jpg';
import realisation5 from '@/assets/modern_wardrobe_with_black_and_silver_color_scheme.jpg';
import realisation6 from '@/assets/white_wooden_bed_frame_with_two_drawers_underneath.jpg';
import realisation7 from '@/assets/modern_living_room_with_gray_sectional_sofa_in_2.jpg';
import realisation8 from '@/assets/modern_living_room_with_large_flat_screen_tv.jpg';
import wardrobeImage1 from '@/assets/black_sliding_wardrobe_with_large_mirror_in_the.jpg';
import wardrobeImage3 from '@/assets/modern_wardrobe_with_black_and_silver_color_scheme.jpg';
import officeImage1 from '@/assets/modern_office_space_with_large_window_that_offers.jpg';
import officeImage2 from '@/assets/modern_office_space_with_white_reception_desk_in.jpg';
import salonImage1 from '@/assets/modern_living_room_with_gray_sectional_sofa_in_2.jpg';
import salonImage2 from '@/assets/modern_living_room_with_large_flat_screen_tv.jpg';
import salonImage3 from '@/assets/modern_living_room_with_beige_sofa_and_round.jpg';
import salonImage4 from '@/assets/living_room_with_blue_velvet_sofa_in_the.jpg';
import outdoorImage1 from '@/assets/patio_area_of_house_with_blue_gazebo_attached.jpg';
import outdoorImage2 from '@/assets/small_garden_with_gravel_ground_and_variety_of.jpg';
import spaImage from '@/assets/round_inflatable_hot_tub_on_wooden_deck_the.jpg';
import diningImage from '@/assets/modern_dining_area_with_round_wooden_table_and.jpg';
import shelvingImage from '@/assets/large_wooden_shelving_unit_in_room_with_hardwood.jpg';
import shelvingImage2 from '@/assets/wooden_bookshelf_in_corner_of_room_with_hardwood.jpg';
import bedroomImage1 from '@/assets/white_wooden_bed_frame_with_two_drawers_underneath.jpg';
import bedroomImage2 from '@/assets/modern_bedroom_with_single_bed_in_the_center.jpg';
import tableImage1 from '@/assets/modern_kitchen_with_wooden_table_in_the_center.jpg';
import bookcaseImage from '@/assets/tall_wooden_bookcase_with_six_shelves_in_room_2.jpg';
import sideboardImage from '@/assets/wooden_sideboard_in_room_with_floral_wallpaper_the.jpg';
import wardrobeImage4 from '@/assets/large_white_wardrobe_in_room_with_wooden_flooring.jpg';

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

export const HERO_IMAGE = heroImage.src;

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
    "image": montageImage.src
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
    "image": cuisineImage.src
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
    "image": dressingImage.src
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
    "image": bureauImage.src
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
    "image": amenagementImage.src
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
    "image": logistiqueImage.src
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
    "image": travauxImage.src
  }
];

export type GalleryItem = { type: 'image' | 'video'; src?: string; poster?: string; videoUrl?: string; title: string; cat: string };

export const REALISATIONS_MORE: GalleryItem[] = [
  {
    type: 'image',
    src: realisation1.src,
    title: 'Cuisine équipée & finitions',
    cat: 'Rangements & meubles'
  },
  {
    type: 'image',
    src: officeImage1.src,
    title: 'Aménagement de bureaux & espaces pro',
    cat: 'Bureaux & pro'
  },
  {
    type: 'image',
    src: outdoorImage2.src,
    title: 'Aménagement extérieur & jardin',
    cat: 'Extérieur & divers'
  },
  {
    type: 'image',
    src: diningImage.src,
    title: 'Table à manger & agencement intérieur',
    cat: 'Rangements & meubles'
  },
  {
    type: 'video',
    poster: dressingImage.src,
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    title: 'Montage dressing en vidéo',
    cat: 'Chambres & dressings'
  },
  {
    type: 'video',
    poster: salonImage1.src,
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
    title: 'Aménagement salon en vidéo',
    cat: 'Salons & canapés'
  },
  {
    type: 'video',
    poster: cuisineImage.src,
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    title: 'Pose de cuisine en vidéo',
    cat: 'Rangements & meubles'
  }
];

export const REALISATIONS: { src?: string; images?: string[]; title: string; cat: string }[] = [
  {
    "src": realisation1.src,
    "title": "Cuisine équipée & finitions",
    "cat": "Cuisine & aménagement"
  },
  {
    "src": realisation2.src,
    "title": "Dressing PAX & rangements",
    "cat": "Dressings & rangement"
  },
  {
    "src": realisation3.src,
    "title": "Bureau & mobilier professionnel",
    "cat": "Bureaux & espaces pro"
  },
  {
    "src": realisation4.src,
    "title": "Un bahut Amazon",
    "cat": "Rangements & meubles"
  },
  {
    "src": realisation5.src,
    "title": "Un dressing Pax Ikea",
    "cat": "Chambres & dressings"
  },
  {
    "src": realisation6.src,
    "title": "Un lit coffre Conforama",
    "cat": "Chambres & dressings"
  },
  {
    "src": realisation7.src,
    "title": "Un lit coffre But",
    "cat": "Chambres & dressings"
  },
  {
    "src": realisation8.src,
    "title": "Un lit coffre Conforama",
    "cat": "Chambres & dressings"
  },
  {
    "src": shelvingImage.src,
    "title": "Un buffet Conforama",
    "cat": "Rangements & meubles"
  },
  {
    "src": wardrobeImage4.src,
    "title": "Une armoire Conforama",
    "cat": "Chambres & dressings"
  },
  {
    "src": wardrobeImage1.src,
    "title": "Installation & pose de porte de placard coulissant",
    "cat": "Chambres & dressings"
  },
  {
    "src": wardrobeImage3.src,
    "title": "Installations d'un dressing Lapeyre",
    "cat": "Chambres & dressings"
  },
  {
    "src": bedroomImage1.src,
    "title": "Installation d'une chambre mobilier Ikea",
    "cat": "Chambres & dressings"
  },
  {
    "src": tableImage1.src,
    "title": "Une table Ikea",
    "cat": "Rangements & meubles"
  },
  {
    "src": bookcaseImage.src,
    "title": "Une bibliothèque Picawood",
    "cat": "Rangements & meubles"
  },
  {
    "src": bedroomImage2.src,
    "title": "Un lit 2 places Conforama",
    "cat": "Chambres & dressings"
  },
  {
    "src": salonImage1.src,
    "title": "Un canapé 2 places Conforama",
    "cat": "Salons & canapés"
  },
  {
    "src": salonImage3.src,
    "title": "Un canapé 7 places d'angle Conforama",
    "cat": "Salons & canapés"
  },
  {
    "src": salonImage2.src,
    "title": "Un canapé 3 places Ikea",
    "cat": "Salons & canapés"
  },
  {
    "src": salonImage4.src,
    "title": "Installation d'un salon mobilier Ikea",
    "cat": "Salons & canapés"
  },
  {
    "src": shelvingImage2.src,
    "title": "Une étagère VILTO Ikea",
    "cat": "Rangements & meubles"
  },
  {
    "src": diningImage.src,
    "title": "Une Table à manger et l'installation et la pose d'un miroir La Redoute",
    "cat": "Rangements & meubles"
  },
  {
    "src": bedroomImage1.src,
    "title": "Montage & agencement de plusieurs lits",
    "cat": "Chambres & dressings"
  },
  {
    "images": [outdoorImage2.src, outdoorImage1.src],
    "title": "Aménagement extérieur & jardin",
    "cat": "Extérieur & divers"
  },
  {
    "src": spaImage.src,
    "title": "Installation d'un Spa INTEX",
    "cat": "Extérieur & divers"
  },
  {
    "src": salonImage1.src,
    "title": "Un canapé d'angle Conforama",
    "cat": "Salons & canapés"
  },
  {
    "images": [shelvingImage.src, shelvingImage2.src, bookcaseImage.src, sideboardImage.src],
    "title": "Rangements & meubles sur mesure",
    "cat": "Rangements & meubles"
  },
  {
    "images": [officeImage1.src, officeImage2.src],
    "title": "Aménagement de bureaux & espaces pro",
    "cat": "Bureaux & pro"
  },
  {
    "images": [bedroomImage1.src, bedroomImage2.src],
    "title": "Chambres & lits installés",
    "cat": "Chambres & dressings"
  },
  {
    "images": [salonImage1.src, salonImage2.src, salonImage3.src, salonImage4.src],
    "title": "Canapés & salons aménagés",
    "cat": "Salons & canapés"
  },
  {
    "src": outdoorImage1.src,
    "title": "Aménagement extérieur & jardin",
    "cat": "Extérieur & divers"
  },
  {
    "src": diningImage.src,
    "title": "Table à manger & agencement intérieur",
    "cat": "Rangements & meubles"
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
