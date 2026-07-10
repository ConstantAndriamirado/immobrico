import articleImage1 from '@/assets/modern_office_space_with_large_window_that_offers.jpg';
import articleImage2 from '@/assets/modern_living_room_with_round_wooden_dining_table.jpg';
import articleImage3 from '@/assets/modern_dining_area_in_small_apartment_the_room.jpg';
import articleImage4 from '@/assets/balcony_with_two_wicker_chairs_and_small_table.jpg';
import articleImage5 from '@/assets/modern_office_space_with_white_reception_desk_in.jpg';
import articleImage6 from '@/assets/an_empty_office_space_with_large_wooden_desk.jpg';
import articleImage7 from '@/assets/patio_area_with_gray_wicker_sofa_and_two.jpg';
import articleImage8 from '@/assets/modern_living_room_with_large_flat_screen_tv.jpg';
import articleImage9 from '@/assets/modern_reception_desk_with_curved_design_the_desk.jpg';
import articleImage10 from '@/assets/patio_area_of_house_with_blue_gazebo_attached.jpg';
import articleImage11 from '@/assets/round_inflatable_hot_tub_on_wooden_deck_the.jpg';
import articleImage12 from '@/assets/modern_kitchen_with_stainless_steel_sink_and_count_2.jpg';

export type Block = { kind: 'h' | 'p' | 'ul'; text?: string; items?: string[] };

export type Article = { slug: string; title: string; date: string; readMin: number; image: string; excerpt: string; body: Block[] };

export const ARTICLES: Article[] = [
  {
    "slug": "outils-bosch",
    "title": "Outils Bosch : la qualité professionnelle au service du montage ImmoBrico",
    "date": "16 juin 2025",
    "readMin": 2,
    "image": articleImage1.src,
    "excerpt": "",
    "body": [
      {
        "kind": "p",
        "text": "Saviez-vous que les équipes ImmoBrico utilisent l'outillage Bosch professionnel pour assurer la précision, la rapidité et la fiabilité de leurs montages ? Voici nos deux références incontournables, choisies pour leur rapport qualité/prix et leur robustesse."
      },
      {
        "kind": "h",
        "text": "La perceuse-visseuse Bosch GSR 12V-15"
      },
      {
        "kind": "p",
        "text": "Compacte, puissante et légère, c'est l'outil fétiche de nos monteurs : elle assemble tous types de meubles, même dans les recoins difficiles d'accès."
      },
      {
        "kind": "ul",
        "items": [
          "Batterie 12V lithium, longue autonomie",
          "Format sans fil pour plus de liberté",
          "Fiabilité signée Bosch"
        ]
      },
      {
        "kind": "h",
        "text": "Le coffret Bosch 43 embouts Pro Extra Hard"
      },
      {
        "kind": "ul",
        "items": [
          "43 embouts robustes pour toutes les vis (PH, PZ, SL, TH…)",
          "Boîte de rangement ergonomique",
          "Longévité exceptionnelle"
        ]
      },
      {
        "kind": "h",
        "text": "Pourquoi ImmoBrico choisit Bosch"
      },
      {
        "kind": "p",
        "text": "Un bon outil fait toute la différence : performance constante sur chantier, gain de temps lors des montages, et moins de SAV grâce à une fixation parfaite. C'est avec cette exigence que nous intervenons chez vous."
      }
    ]
  },
  {
    "slug": "interieur-cocooning",
    "title": "Un intérieur cocooning avec ImmoBrico et nos partenaires textiles haut de gamme",
    "date": "9 juin 2025",
    "readMin": 2,
    "image": articleImage2.src,
    "excerpt": "",
    "body": [
      {
        "kind": "p",
        "text": "Envie d'un intérieur chaleureux, élégant et confortable ? Grâce à nos partenaires (Jalla, Descamps, Tommy Hilfiger) et à nos prestations de montage sur mesure, ImmoBrico vous accompagne dans l'aménagement de votre chambre, salon ou salle de bain."
      },
      {
        "kind": "h",
        "text": "Linge de lit & ambiance cosy"
      },
      {
        "kind": "p",
        "text": "Le linge de lit de qualité fait toute la différence. ImmoBrico monte vos lits, têtes de lit, tables de chevet et armoires, et installe vos tringles à rideaux pour une chambre 100% fonctionnelle et élégante."
      },
      {
        "kind": "h",
        "text": "Salle de bain bien pensée"
      },
      {
        "kind": "p",
        "text": "Meuble sous vasque, colonne, armoire murale, miroir rétroéclairé, luminaires, tringles, rideaux… ImmoBrico installe tout avec précision."
      },
      {
        "kind": "h",
        "text": "Décoration & finitions"
      },
      {
        "kind": "p",
        "text": "Un plaid bien plié, un coussin assorti, un rideau bien fixé : c'est la touche finale. Nous fixons étagères, cadres et supports muraux pour un intérieur cohérent et personnalisé — avec, en prime, des conseils sur le placement idéal de vos meubles et luminaires."
      }
    ]
  },
  {
    "slug": "meubler-avec-style",
    "title": "Meubler sa maison avec style grâce à ImmoBrico + nos marques partenaires (Darty, Amazon, Aliexpress...)",
    "date": "2 juin 2025",
    "readMin": 3,
    "image": articleImage3.src,
    "excerpt": "Meubler sa maison avec style grâce à ImmoBrico + nos marques partenaires",
    "body": [
      {
        "kind": "p",
        "text": "ImmoBrico, spécialiste du montage de meubles à domicile, vous accompagne pour aménager tout votre intérieur avec nos marques partenaires (Darty, Amazon, Aosom, Descamps, Jalla, Tommy Hilfiger…)."
      },
      {
        "kind": "h",
        "text": "Achetez, on monte pour vous"
      },
      {
        "kind": "p",
        "text": "Vous commandez un canapé, une table basse ou une armoire sur Darty, Amazon ou Aliexpress ? Ne vous encombrez pas du montage : ImmoBrico s'en charge à domicile dès 85 € TTC."
      },
      {
        "kind": "p",
        "text": "Livraison, déballage, montage et évacuation des emballages : on s'occupe de tout, pour un intérieur prêt à vivre."
      }
    ]
  },
  {
    "slug": "promos-darty-ete",
    "title": "Meubles d’été, promos Darty, montage pro : ImmoBrico vous simplifie la vie !",
    "date": "31 mai 2025",
    "readMin": 2,
    "image": articleImage4.src,
    "excerpt": "",
    "body": [
      {
        "kind": "p",
        "text": "Envie d'un nouvel équipement pour l'été sans vous soucier du montage ? Darty propose régulièrement des promos sur une sélection de meubles et d'équipements pour toute la maison, et ImmoBrico s'occupe du montage à domicile partout autour d'Orléans, Saran, Olivet et plus."
      },
      {
        "kind": "p",
        "text": "Fauteuils de jardin, meubles TV, petits frigos, rangements d'appoint… livrés chez vous, mais à monter seul ? Non merci."
      },
      {
        "kind": "h",
        "text": "Ce que propose ImmoBrico"
      },
      {
        "kind": "ul",
        "items": [
          "Montage à domicile dès 85 € TTC",
          "Intervention rapide, outillage pro",
          "Déballage & évacuation des cartons compris",
          "Livraison + installation possible (forfait 130 €)"
        ]
      },
      {
        "kind": "p",
        "text": "Vous commandez, nous venons tout installer dans la foulée. Simple, rapide, efficace."
      }
    ]
  },
  {
    "slug": "mobilier-professionnel-experts",
    "title": "VOS MEUBLES PROFESSIONNELS, MONTÉS ET AGENCÉS PAR DES EXPERTS !",
    "date": "14 mars 2025",
    "readMin": 1,
    "image": articleImage5.src,
    "excerpt": "Entreprises, collectivités, résidences étudiantes, grandes distributions, hôpitaux, établissements publics ou privés… nous sommes là pour vous ! Vous avez déjà vos meubles ? Pas de",
    "body": [
      {
        "kind": "p",
        "text": "Entreprises, collectivités, résidences étudiantes, grandes distributions, hôpitaux, établissements publics ou privés… nous sommes là pour vous !"
      },
      {
        "kind": "p",
        "text": "Vous avez déjà vos meubles ? Pas de souci : nos équipes les montent et les installent avec précision. ImmoBrico, c'est la garantie d'un espace fonctionnel, esthétique et durable."
      }
    ]
  },
  {
    "slug": "expert-amenagement-bureaux",
    "title": "Besoin d'un expert en aménagement et montage pour vos bureaux ?",
    "date": "10 mars 2025",
    "readMin": 1,
    "image": articleImage6.src,
    "excerpt": "\"ImmoBrico accompagne les entreprises du Loiret et d'Île-de-France dans l'aménagement et la maintenance de leurs bureaux. Une installation rapide, fiable et sans stress !\"",
    "body": [
      {
        "kind": "p",
        "text": "ImmoBrico accompagne les entreprises du Loiret et d'Île-de-France dans l'aménagement et la maintenance de leurs bureaux : fixation d'équipements, montage de mobilier, petits travaux…"
      },
      {
        "kind": "p",
        "text": "Une installation rapide, fiable et sans stress, pour des espaces de travail prêts à l'emploi."
      }
    ]
  },
  {
    "slug": "espaces-de-pause",
    "title": "TRANSFORMEZ VOS ESPACES DE PAUSE AVEC IMMOBRICO !",
    "date": "2 mars 2025",
    "readMin": 2,
    "image": articleImage7.src,
    "excerpt": "Et grâce à nos partenaires privilégiés , nous pouvons même vous accompagner sur la fourniture de mobilier adapté à vos besoins (tables, fauteuils, canapés, rangements, etc.).",
    "body": [
      {
        "kind": "p",
        "text": "Offrez à vos équipes un espace de pause convivial et fonctionnel. ImmoBrico aménage vos salles de détente : montage du mobilier, agencement et finitions."
      },
      {
        "kind": "p",
        "text": "Et grâce à nos partenaires privilégiés, nous pouvons aussi vous accompagner sur la fourniture du mobilier adapté à vos besoins : tables, fauteuils, canapés, rangements, etc."
      }
    ]
  },
  {
    "slug": "plus-que-du-montage",
    "title": "Nouveauté chez ImmoBrico : Nous vous proposons bien plus que des services de montage de meubles !",
    "date": "30 sept. 2024",
    "readMin": 2,
    "image": articleImage8.src,
    "excerpt": "",
    "body": [
      {
        "kind": "p",
        "text": "Chez ImmoBrico, nous proposons bien plus que le montage de meubles. Au-delà de l'assemblage, nous installons, fixons, aménageons et finissons vos espaces — pour les particuliers comme pour les professionnels."
      },
      {
        "kind": "ul",
        "items": [
          "Montage et installation de mobilier, toutes marques",
          "Fixations murales : TV, étagères, tringles",
          "Aménagement et agencement d'intérieur",
          "Petits travaux et finitions",
          "Réception, stockage et logistique"
        ]
      },
      {
        "kind": "p",
        "text": "Un seul interlocuteur, un service clé en main, à Orléans et dans tout le Loiret."
      }
    ]
  },
  {
    "slug": "aide-montage-agencement-achat",
    "title": "Besoin d'aide pour le montage, l'agencement ou l'achat de vos meubles ?",
    "date": "23 sept. 2024",
    "readMin": 3,
    "image": articleImage9.src,
    "excerpt": "ImmoBrico, spécialiste du montage, agencement et installation de meubles pour particuliers et professionnels. Contactez-nous pour un service clé en main avec devis gratuit !",
    "body": [
      {
        "kind": "p",
        "text": "ImmoBrico est votre spécialiste du montage, de l'agencement et de l'installation de meubles, pour les particuliers et les professionnels."
      },
      {
        "kind": "p",
        "text": "Besoin d'aide pour monter, agencer ou même acheter vos meubles ? On vous accompagne de A à Z, avec un service clé en main et un devis gratuit sous 24 h."
      },
      {
        "kind": "p",
        "text": "Contactez-nous : on s'occupe de tout, vous profitez d'un intérieur fini."
      }
    ]
  },
  {
    "slug": "reduire-vos-impots",
    "title": "Profitez de nos services tout en réduisant vos impôts !",
    "date": "12 août 2024",
    "readMin": 1,
    "image": articleImage10.src,
    "excerpt": "Profitez de nos services tout en réduisant vos impôts ! Une prestation facturée 200€ ne vous coûtera que 100€ après application du crédit d'impôt.",
    "body": [
      {
        "kind": "p",
        "text": "Profitez de nos services tout en réduisant vos impôts ! En tant que service à la personne, nos prestations éligibles ouvrent droit à 50 % de crédit d'impôt."
      },
      {
        "kind": "p",
        "text": "Concrètement, une prestation facturée 200 € ne vous coûte réellement que 100 € après application du crédit d'impôt."
      }
    ]
  },
  {
    "slug": "choisir-le-bon-canape",
    "title": "Post Éducatif : Comment Choisir le Canapé Parfait pour Votre Maison",
    "date": "3 juil. 2024",
    "readMin": 3,
    "image": articleImage11.src,
    "excerpt": "",
    "body": [
      {
        "kind": "p",
        "text": "Le canapé est la pièce maîtresse du salon. Voici nos conseils pour bien le choisir — et profiter du montage et de l'installation par ImmoBrico."
      },
      {
        "kind": "ul",
        "items": [
          "Mesurez votre espace et les accès (portes, escaliers, ascenseur)",
          "Choisissez la taille et la forme : droit, d'angle ou modulable",
          "Privilégiez un revêtement adapté à votre usage (enfants, animaux)",
          "Soignez le confort de l'assise et le maintien du dossier"
        ]
      },
      {
        "kind": "p",
        "text": "Une fois votre canapé livré, ImmoBrico s'occupe du montage et de la mise en place, proprement et sans prise de tête."
      }
    ]
  },
  {
    "slug": "organiser-le-montage",
    "title": "Astuces pour Organiser le Montage de Vos Meubles",
    "date": "30 juin 2024",
    "readMin": 3,
    "image": articleImage12.src,
    "excerpt": "Le montage de meubles peut parfois sembler une tâche ardue, mais avec un peu d'organisation et quelques astuces simples, vous pouvez y arriver",
    "body": [
      {
        "kind": "p",
        "text": "Le montage de meubles peut sembler une tâche ardue, mais avec un peu d'organisation et quelques astuces simples, tout devient plus facile."
      },
      {
        "kind": "ul",
        "items": [
          "Préparez un espace de travail dégagé",
          "Vérifiez les pièces et la visserie avant de commencer",
          "Munissez-vous des bons outils",
          "Suivez la notice étape par étape, sans brûler les étapes"
        ]
      },
      {
        "kind": "p",
        "text": "Et si vous préférez gagner du temps, confiez le montage à ImmoBrico : rapide, propre et garanti."
      }
    ]
  }
];
