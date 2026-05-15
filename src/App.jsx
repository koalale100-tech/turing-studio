import React, { useState, useRef, useEffect, useCallback } from 'react';

import {
  Menu, Search, MessageCircle, Sun, Moon, Home, PlayCircle,
  BookOpen, Wrench, Share2, Info, Compass, X, Linkedin,
  User, LogOut, Bookmark, ChevronRight, Check, Copy,
  ArrowLeft, Send, Clock, Zap, BarChart2, Instagram, Youtube, Mail,
  ExternalLink,
} from 'lucide-react';

const CHAPTERS = [
  {
    id: 0,
    num: 'Introduction',
    title: 'YouTube en 2026',
    subtitle: 'Le nouveau moteur de recherche',
    duration: '4 min',
    tags: ['Contexte', 'Plateforme'],
    color: '#C9A961',
    stat: '2,53 Mds',
    statLabel: 'utilisateurs actifs mondiaux',
    description: "YouTube n'est plus une plateforme vidéo. C'est le 2ème moteur de recherche mondial et le premier espace de contact entre une marque et son audience. Produire à cadence soutenue est devenu un défi structurel pour les équipes de communication.",
    insight: "50M d'utilisateurs actifs en France. 720 000 heures de vidéos publiées chaque jour. 46 minutes passées en moyenne sur la plateforme par jour.",
    readContent: [
      {
        heading: "Une plateforme de recherche avant tout",
        body: "YouTube s'est imposé comme le 2ème moteur de recherche mondial. Pour une marque, être absent de YouTube revient à être invisible sur Google. TikTok et Instagram fonctionnent avec un contenu adaptatif dans le fil algorithmique. YouTube est fondamentalement différent : c'est une plateforme de recherche active où les utilisateurs arrivent avec une question, un besoin d'apprentissage ou un problème à résoudre.\n\nCette intention d'achat est directement mesurable. 55% des consommateurs utilisent YouTube pour des recherches liées à des produits avant un achat. En 2025, 84% des consommateurs ont été convaincus d'acheter un produit ou un service après avoir regardé une vidéo. Ces chiffres transforment profondément la place de YouTube dans les stratégies de marque : être présent sur la plateforme, ce n'est pas seulement pour divertir ou améliorer son image. C'est s'inscrire dans le parcours d'achat du consommateur au moment de haute intentionnalité.\n\nYouTube joue par ailleurs un rôle croissant dans la notoriété long terme. Contrairement aux contenus éphémères des stories ou des Reels, une vidéo YouTube bien référencée continue de générer des vues des mois, voire des années après sa publication. Les professionnels du secteur appellent ce phénomène le compounding effect du contenu evergreen.",
        source: "Google, Think with Google, 2023 : 55% des consommateurs utilisent YouTube pour des recherches liées à un produit avant achat. HubSpot, 2025 : 84% des consommateurs convaincus d'acheter après une vidéo.",
      },
      {
        heading: "Le basculement vers la télévision",
        body: "En décembre 2024, Nielsen a publié un résultat historique : YouTube est devenu la première plateforme de streaming visionnée sur les écrans de télévision aux États-Unis, dépassant Netflix pour la première fois avec 11,1% du total du temps de visionnage sur TV. Cette progression s'inscrit dans une tendance lourde mesurée trimestre après trimestre depuis 2022.\n\nEn France, la consommation de YouTube sur écrans connectés (Smart TV, box opérateur, consoles) a progressé de 38% entre 2022 et 2024. Produire pour YouTube en 2026, c'est produire pour un téléviseur autant que pour un smartphone. Or les exigences de lisibilité ne sont pas les mêmes : une miniature lisible sur un écran de 6 pouces n'est pas nécessairement lisible à 3 mètres sur un écran de 55 pouces. Un sous-titre positionné en bas de l'image peut être masqué par l'interface de la TV connectée. Un format de 8 minutes conçu pour une consultation mobile en transport se consomme différemment dans un salon.\n\nIgnorer cette dimension revient à concevoir une stratégie de contenu partiellement inadaptée à votre audience réelle.",
        source: "Nielsen, The Gauge, décembre 2024 : 11,1% du temps de visionnage TV aux États-Unis. Médiamétrie, Observatoire de la Vidéo en Ligne, 2024 : +38% sur écrans connectés en France.",
      },
      {
        heading: "YouTube devient interactif",
        body: "Depuis 2024, YouTube a progressivement déployé un outil d'IA conversationnelle accessible directement sous les vidéos via le bouton Ask. Il permet aux spectateurs de poser des questions sur le contenu qu'ils regardent sans quitter la plateforme. En décembre 2025, 20 millions d'utilisateurs avaient interagi avec l'outil Ask au cours du seul mois de décembre.\n\nCette évolution a des conséquences directes sur la production. La qualité de la transcription, la précision factuelle du contenu et la clarté de la structure narrative conditionnent désormais non seulement le VSEO mais aussi la pertinence des réponses générées par l'IA conversationnelle. Une vidéo mal structurée ou factuellement imprécise génère des réponses IA de mauvaise qualité, ce qui nuit à l'expérience utilisateur et, par ricochet, aux signaux de satisfaction captés par l'algorithme.\n\nYouTube étend également le format Shorts au-delà de la vidéo verticale. Les publications statiques, images et carrousel, s'intègrent directement dans le défilement vertical des Shorts, à la manière d'Instagram.",
        source: "YouTube Help Center, Conversational AI tool, 2024. Neal Mohan, lettre annuelle YouTube 2026 : 20M d'utilisateurs mensuels sur l'outil Ask en décembre 2025.",
      },
      {
        heading: "La pression structurelle sur les communicants",
        body: "Cette opportunité s'accompagne d'une pression sans précédent. Pour exister dans l'algorithme, les communicants font face à une dictature du volume et de la régularité. Produire du contenu de haute qualité à un rythme soutenu est devenu un défi logistique et financier quasi insurmontable avec les méthodes traditionnelles.\n\nC'est dans ce contexte que l'Intelligence Artificielle et les outils d'automatisation ont fait une entrée fracassante ces dernières années. De la génération de scripts à la création de miniatures, en passant par le montage assisté, la promesse est séduisante : produire mieux, plus vite, et pour moins cher. L'idée d'une chaîne YouTube autonome n'est plus une utopie. C'est une réalité accessible à toute direction de communication.\n\nPourtant, une menace plane sur cette course à l'efficacité. À force de tout automatiser, le risque est de lisser les aspérités, de gommer la personnalité et de rompre le lien de confiance avec l'audience. Sur une plateforme où la proximité humaine est un facteur primaire d'engagement, le contenu parfaitement optimisé peut paradoxalement devenir sans intérêt.",
        source: "HubSpot, State of Marketing, 2024 : la vidéo est le format avec le meilleur ROI pour la 3ème année consécutive. Edelman, Trust Barometer, 2024.",
      },
    ],
  },
  {
    id: 1,
    num: 'Partie 1',
    title: 'Un environnement exigeant',
    subtitle: 'Pour les communicants',
    duration: '11 min',
    tags: ['Algorithme', 'SEO', 'Shorts'],
    color: '#E63946',
    stat: '70%',
    statLabel: 'du watch time vient des recommandations',
    description: "Moteur de recherche, plateforme TV, outil de shopping, écosystème de formats variés : YouTube cumule les rôles. L'algorithme récompense la cadence autant que la qualité. Les workflows traditionnels ne tiennent plus.",
    insight: "70% du temps de visionnage est généré par les recommandations algorithmiques. La régularité de publication est un signal primaire de l'algorithme. (YouTube Official Blog, 2023)",
    readContent: [
      {
        heading: "L'algorithme : deux moteurs, une logique",
        body: "L'algorithme de YouTube est l'un des systèmes de recommandation les plus sophistiqués au monde. Il repose sur deux moteurs distincts mais complémentaires : le moteur de recherche (YouTube Search) et le moteur de recommandation (suggested videos, page d'accueil). Ensemble, ils déterminent l'intégralité de la visibilité organique d'un contenu.\n\nSelon YouTube, 70% du temps de visionnage total sur la plateforme est directement généré par les recommandations algorithmiques. Ce chiffre révèle un aspect contre-intuitif : produire une bonne vidéo ne suffit pas. Il faut produire une vidéo que l'algorithme a intérêt à recommander. Les signaux pris en compte sont multiples : le taux de clic sur la miniature et le titre, la durée de visionnage et le taux de rétention, les interactions (likes, commentaires, partages), la satisfaction déclarée via les enquêtes post-visionnage, et la régularité de publication.\n\nCe dernier point est crucial : l'algorithme récompense la cadence. Les chaînes qui publient régulièrement bénéficient d'un boost algorithmique lié à la fidélisation de l'audience. Une chaîne qui publie au moins une vidéo par semaine connaît une croissance d'audience supérieure à celles publiant moins fréquemment.",
        source: "YouTube Official Blog, 2023 : 70% du watch time généré par les recommandations. YouTube Creator Academy, Consistency and audience growth, 2023.",
      },
      {
        heading: "YouTube Shorts : un levier à part entière",
        body: "Lancés en 2021 en réponse directe à TikTok et aux Reels Instagram, les YouTube Shorts sont des vidéos verticales d'une durée maximale de 60 secondes. Ils constituent aujourd'hui un levier de croissance à part entière avec sa propre logique algorithmique. YouTube Shorts enregistre désormais plus de 200 milliards de vues quotidiennes, contre 70 milliards début 2024, soit une croissance de plus de 180% en un an.\n\nLe circuit de recommandation des Shorts est indépendant. Les Shorts sont distribués via un flux dédié, distinct du moteur de recommandation des vidéos longues. Cela signifie qu'une marque peut toucher une audience nouvelle, plus jeune, sans cannibaliser les performances de ses contenus longs. En moyenne, 74% des vues sur les Shorts proviennent d'utilisateurs qui ne sont pas encore abonnés à la chaîne. C'est le principal moteur de découverte de la plateforme.\n\nL'enjeu le plus significatif réside dans l'effet de halo sur la chaîne principale. YouTube a officiellement confirmé que les Shorts peuvent générer des abonnements à la chaîne globale. Une stratégie avancée utilise les Shorts comme teaser ou synthèse des vidéos longues. Le taux d'engagement moyen sur les Shorts est de 5,91%, dépassant TikTok (5,75%) et Instagram Reels (5,53%).",
        source: "Neal Mohan, lettre annuelle YouTube 2026. Loopex Digital, 2026 : 74% des vues Shorts venant de non-abonnés. Socialinsider, HubSpot, 2025 : taux d'engagement comparatifs.",
      },
      {
        heading: "Le VSEO : une discipline hybride",
        body: "Si YouTube fonctionne comme un moteur de recherche, il doit être traité comme tel. Le VSEO (Video Search Engine Optimization) repose sur un ensemble de leviers distincts mais interdépendants. Le titre est le premier signal envoyé à l'algorithme : il doit intégrer le mot-clé principal dans les 60 premiers caractères, tout en restant incitatif pour générer un taux de clic élevé. La description constitue le deuxième levier majeur : YouTube indexe les 5 000 caractères disponibles mais accorde un poids majoritaire aux 150 premiers caractères.\n\nLes chapitres (timestamps) ont une importance algorithmique confirmée officiellement par YouTube. Ils permettent à la plateforme de comprendre la structure sémantique d'une vidéo et d'indexer ses différentes parties de manière indépendante. Une vidéo bien chapeautée peut apparaître dans les résultats de recherche pour plusieurs requêtes distinctes. Les sous-titres et la transcription jouent un double rôle : accessibilité et VSEO. Une transcription imprécise pénalise le référencement.\n\nLes miniatures influencent directement le CTR, l'un des signaux primaires de l'algorithme de recommandation. Elles constituent l'attraction visuelle pré-visionnage numéro un sur la plateforme. Une miniature créative et lisible sur tous les supports est un levier de performance à part entière. À titre d'indication, 89,8% des utilisateurs accèdent à YouTube depuis leur smartphone.",
        source: "Backlinko, YouTube SEO : The Definitive Guide, 2023. Google Search Central Blog, Video chapters in search, 2020. We Are Social / Meltwater, 2025.",
      },
      {
        heading: "Le mur de l'inefficacité",
        body: "La production vidéo traditionnelle repose sur un processus séquentiel en plusieurs phases : brief, scripting, tournage, montage, étalonnage, validation, mise en ligne. La somme représente, pour une vidéo de marque standard, entre 3 et 8 semaines de travail selon la complexité du projet. Ce délai est structurellement incompatible avec les exigences de cadence. Une marque qui vise une publication hebdomadaire doit théoriquement avoir 4 à 8 projets en cours simultanément à des stades différents.\n\nLe goulot d'étranglement le plus fréquent se situe à deux niveaux. L'écriture et le scripting : la phase de conception créative est la moins industrialisable dans un workflow traditionnel, car elle dépend de ressources humaines qualifiées dont le temps est limité. La validation interne : les circuits de relecture et d'approbation multiplient les allers-retours, allongeant mécaniquement les délais sans nécessairement améliorer la qualité finale.\n\nEn France, une vidéo institutionnelle ou de marque réalisée par une agence externe se situe généralement entre 5 000 et 50 000 euros selon le format, la durée et les besoins techniques. En 2026, le coût moyen d'une vidéo professionnelle de type talking head se situe entre 10 000 et 15 000 euros par unité lorsqu'elle est externalisée. Pour une marque souhaitant publier une fois par semaine, l'investissement annuel dépasse rapidement les 500 000 euros.",
        source: "Lemonlight, Video Production Timeline Guide, 2023. Vidyard, B2B Video Benchmarks Report, 2023 : 58% citent le temps comme premier frein. Spirit Juice Studios / Viva Media, 2026.",
      },
    ],
  },
  {
    id: 2,
    num: 'Partie 2',
    title: "La science de l'attention",
    subtitle: 'Et de la rétention',
    duration: '8 min',
    tags: ['Rétention', 'Narration', 'Psychologie'],
    color: '#5C7F6B',
    stat: '30 sec',
    statLabel: 'décident du taux de rétention global',
    description: "Curiosity gap, pattern interrupts, expertise vs proximité : l'engagement n'est pas le fruit du hasard. C'est une science éditoriale documentée, appuyée sur la psychologie cognitive.",
    insight: "Les chaînes dont les vidéos présentent une chute supérieure à 40% dans les 30 premières secondes voient leur distribution algorithmique significativement réduite. (YouTube Creators, 2025)",
    readContent: [
      {
        heading: "La courbe de rétention",
        body: "YouTube Studio met à disposition de chaque chaîne un outil analytique : le graphique de rétention de l'audience. Ce graphique représente, seconde par seconde, le pourcentage de spectateurs qui regardent la vidéo. Sa lecture n'est pas intuitive mais elle est extrêmement informatrice. Une chute brutale dans les 30 premières secondes signale une accroche défaillante. Un plateau stable sur 60% de la durée puis une chute signale un problème de conclusion. Une série de micro-chutes régulières signale des transitions mal construites. À l'inverse, des pics de rétention (moments où des spectateurs rembobinent) signalent des contenus précieux pour l'audience.\n\nUne étude publiée dans le Journal of Educational Technology portant sur 6,9 millions de visionnages de vidéos éducatives révèle que l'attention des spectateurs commence à décliner significativement à partir de 6 minutes de visionnage continu. Ce déclin est enrayé à chaque introduction d'un élément nouveau : changement de registre, nouvelle question, données inattendues, changement de rythme.\n\nYouTube Creators documente que les chaînes dont les vidéos présentent une chute supérieure à 40% dans les 30 premières secondes voient leur distribution algorithmique significativement réduite. L'algorithme interprète ce signal comme un contenu dont la promesse (titre et miniature) ne correspond pas à la réalité.",
        source: "Guo, Kim et Rubin, Journal of Educational Technology & Society, 2014 : étude sur 6,9M de visionnages. YouTube Creators, Understanding Audience Retention, 2025.",
      },
      {
        heading: "Les 4 types d'accroche",
        body: "La question directe à l'audience crée un curiosity gap immédiat et positionne le spectateur comme destinataire direct du contenu. Néanmoins, le public est devenu immunisé aux questions rhétoriques trop simples. Son efficacité reste limitée sans un angle véritablement surprenant.\n\nLa statistique contre-intuitive génère un effet de surprise cognitive qui ralentit le scroll mental du spectateur et crée une ouverture attentionnelle. C'est le format d'accroche le plus fréquemment utilisé par les vidéos à fort taux de rétention dans les niches B2B et éducatives. Son efficacité repose sur le principe de violation d'expectation : le cerveau alloue davantage de ressources attentionnelles à l'information qui contredit ses croyances existantes.\n\nL'anecdote personnelle ou le cas concret active ce que les neuroscientifiques appellent le neural coupling, documenté par Uri Hasson et son équipe à Princeton : la synchronisation neuronale entre narrateur et auditeur. Une histoire concrète engage le cerveau à un niveau plus profond qu'une affirmation abstraite.\n\nLe teaser de conclusion utilise la structure narrative de l'open loop. Poser une tension narrative dont la résolution viendra plus tard exploite le Zeigarnik effect : la tendance du cerveau à maintenir en mémoire les tâches inachevées jusqu'à leur résolution.",
        source: "VidIQ, Creator Performance Report, 2026. Barto, Neural Computation, 2013 : violation d'expectation. Hasson et al., PNAS, 2010 : neural coupling. Zeigarnik, Psychological Research, 1927.",
      },
      {
        heading: "Les pattern interrupts et le rythme narratif",
        body: "Construire une bonne accroche n'est que la première étape. Le vrai défi est de maintenir l'attention sur 8, 12 ou 20 minutes. Le concept opérationnel central est celui des pattern interrupts : des ruptures de rythme délibérées qui réinitialisent l'attention du spectateur à intervalles réguliers. Todd Beaupré, directeur senior de Growth and Discovery chez YouTube, a souligné lors du YouTube Creator Summit 2024 que les vidéos présentant des changements de registre réguliers génèrent des courbes de rétention plus plates.\n\nEn pratique, les pattern interrupts peuvent prendre des formes variées : passer du visage du présentateur à une image d'archive pour une respiration visuelle, zoomer légèrement sur le visage lors d'un point clé pour le focus attentionnel, faire apparaître le chiffre ou le mot-clé cité à l'écran pour la mémorisation, couper la musique de fond pour créer un silence avant une révélation.\n\nLa fonction Jump Ahead, active en France pour les abonnés YouTube Premium, a donné une dimension concrète et mesurable aux pattern interrupts. Lorsqu'un spectateur double-tape pour avancer dans une vidéo, un bouton Jump ahead apparaît et lui propose de sauter directement au moment suivant jugé le plus engageant. Si un passage est systématiquement sauté, l'algorithme le détecte, le qualifie comme skippable et le signale à l'ensemble de l'audience abonnée Premium.",
        source: "Todd Beaupré, YouTube Creator Summit, 2024. YouTube Blog, Level up your YouTube experience, juin 2024.",
      },
      {
        heading: "Expertise vs proximité",
        body: "Trop d'expertise sans proximité produit un contenu perçu comme froid, condescendant ou inaccessible. Trop de proximité sans expertise produit un contenu perçu comme sympathique mais sans valeur ajoutée. Le bon dosage conditionne directement la confiance accordée par l'audience.\n\nRoobina Ohanian identifie trois dimensions de la crédibilité perçue d'un locuteur : l'expertise (la compétence perçue sur le sujet), la fiabilité (la perception d'honnêteté et d'intention bienveillante) et l'attractivité (au sens de chaleur humaine et d'identification). La recherche montre que l'impact maximal sur l'intention d'action de l'audience est obtenu lorsque les trois dimensions sont simultanément activées.\n\nSur YouTube, cette combinaison prend des formes différentes selon le positionnement de la chaîne. Le format praticien qui partage active simultanément l'expertise et la fiabilité : il sait de quoi il parle car il l'a vécu. C'est le format qui génère les taux d'engagement profond les plus élevés dans les niches B2B. Le format expert pédagogue structure une expertise complexe en étapes accessibles avec des exemples concrets. Le format fondateur visible incarne personnellement la chaîne, avec ses convictions et sa trajectoire. Il active les trois dimensions simultanément.",
        source: "Ohanian, Journal of Advertising, 1990 : trois dimensions de la crédibilité. Edelman, B2B Thought Leadership Impact Report, 2023.",
      },
    ],
  },
  {
    id: 3,
    num: 'Partie 3',
    title: "L'automatisation appliquée",
    subtitle: 'À YouTube',
    duration: '13 min',
    tags: ['IA', 'Outils', 'Workflow', 'ROI'],
    color: '#7F77DD',
    stat: '-34%',
    statLabel: 'sur le cycle de production moyen',
    description: "Scripts, miniatures, montage, VSEO, doublage multilingue : cartographie complète des outils disponibles avec leurs bénéfices mesurables et leurs risques réels.",
    insight: "Les workflows intégrant des outils IA réduisent le cycle de production de 34% en moyenne. Les gains les plus importants : recherche (-58%) et scripting (-61%). (Wyzowl, 2025)",
    readContent: [
      {
        heading: "Génération de scripts avec les LLM",
        body: "La production de contenu textuel (scripts, titres, descriptions, plans d'épisodes) représente historiquement l'une des phases les plus chronophages du workflow vidéo. C'est aussi le domaine où l'Intelligence Artificielle générative a connu les avancées les plus spectaculaires depuis 2022. Le nombre de modèles de langage déployés à usage commercial est passé de 3 en 2018 à plus de 51 en 2023.\n\nLa qualité d'un script généré par IA est directement proportionnelle à la qualité du brief fourni. Le prompt n'est pas une simple requête : c'est un cahier des charges éditorial. En 2025, Claude est devenu une référence pour la création de contenu éditorial long. Sa capacité à maintenir une cohérence stylistique sur de longs formats et à respecter un ton de marque précisément défini en fait un outil particulièrement pertinent. ChatGPT reste la référence la plus polyvalente et la plus largement adoptée. Gemini Pro se distingue par une fenêtre de contexte de 1 million de tokens. Mistral Large mérite une mention particulière dans le contexte français : développé par une équipe française, il produit naturellement des scripts en français d'une fluidité stylistique supérieure à ses concurrents américains sur des sujets techniques.\n\nL'étape suivante est d'organiser le LLM non plus comme un outil isolé mais comme un agent dans un pipeline de production : décomposer la production en tâches successives, chacune confiée à un prompt spécialisé, les outputs s'alimentant mutuellement.",
        source: "Stanford HAI, AI Index Report, 2024 : 51 modèles LLM à usage commercial en 2023. Wyzowl, 2025 : gains sur recherche -58%, scripting -61%.",
      },
      {
        heading: "Montage et post-production automatisés",
        body: "Descript représente l'un des cas d'usage les plus frappants de la post-production automatisée. Ce logiciel transforme la piste audio d'une vidéo en texte éditable : modifier la transcription modifie automatiquement la vidéo. Cette approche, dite text-based editing, permet à des non-monteurs de réaliser des coupes, des réorganisations et des corrections en quelques minutes. L'outil supprime automatiquement les silences, les mots de remplissage, et équilibre les niveaux audio.\n\nOpusClip incarne la promesse du repurposing automatisé. Il transforme automatiquement une vidéo longue en plusieurs clips courts optimisés pour YouTube Shorts. L'IA analyse le contenu, identifie les moments les plus engageants, les recadre en format vertical et ajoute des sous-titres animés. OpusClip attribue un score de virabilité à chaque clip généré.\n\nYouTube Create, lancé en beta sur Android en septembre 2023 et disponible sur iOS depuis décembre 2025, est l'unique éditeur vidéo officiellement développé par YouTube. Gratuit et intégré directement avec YouTube Studio, il intègre la fonctionnalité Edit with AI lancée en novembre 2025 : elle analyse automatiquement la pellicule d'un créateur pour en extraire les moments les plus pertinents. Elle intègre également des capacités issues de Google Veo pour générer un plan de coupe (B-roll) à partir d'un simple prompt textuel.",
        source: "Sensor Tower, App Intelligence Report, 2024 : CapCut, 200M d'utilisateurs actifs mensuels. YouTube Create, App Store / Google Play, documentation officielle, 2025.",
      },
      {
        heading: "VSEO automatisé et YouTube Studio",
        body: "TubeBuddy et VidIQ sont les deux plateformes dominantes du segment VSEO automatisé. TubeBuddy, extension navigateur certifiée partenaire officiel YouTube, propose un système de scoring des tags, des suggestions de mots-clés basées sur les données de recherche réelles et une fonctionnalité d'A/B testing des titres et miniatures. Les créateurs utilisant régulièrement cette fonctionnalité enregistrent un CTR moyen supérieur de 41%. VidIQ se distingue par ses capacités d'analyse concurrentielle et un score de performance prédictif qui évalue le potentiel de visibilité d'une vidéo avant sa publication.\n\nYouTube Studio lui-même a connu en 2024 et 2025 des évolutions majeures qui en font bien plus qu'un simple outil de mise en ligne. L'onglet Inspiration génère des suggestions de sujets, de titres et de formats personnalisées à partir des performances historiques de la chaîne et des tendances de recherche dans la niche. Son avantage différenciant par rapport aux outils tiers est fondamental : les suggestions sont contextualisées avec la chaîne. La Research Tab donne accès aux requêtes effectuées par les utilisateurs dans la niche, avec des données de volume directement issues de la plateforme.\n\nAskStudio, déployé progressivement en 2026, est un assistant IA conversationnel intégré à YouTube Studio permettant aux équipes d'interroger les données analytiques en langage naturel.",
        source: "TubeBuddy, Creator Performance Report, 2023 : CTR supérieur de 41% pour les utilisateurs du A/B test. YouTube Help Center, Using the Research tab, 2024.",
      },
      {
        heading: "ROI par profil d'équipe",
        body: "Une étude de Wyzowl portant sur 412 équipes de création de contenu montre que les workflows intégrant des outils IA réduisent le cycle de production d'une vidéo de 34% en moyenne. Les gains sont supérieurs sur les phases de recherche (-58%) et de scripting (-61%). Ces gains varient cependant selon la complexité des contenus et le niveau de personnalisation conservé. En revanche, le montage et la post-production restent des activités créatives à forte intensité humaine. Le gain sur ces phases reste modeste.\n\nUn freelance avec une stack à 50-80 euros par mois obtient un ROI x4 à x6 sur son temps libéré, calculé sur la base d'un TJM de 350 euros par jour. Une équipe de 2 à 5 personnes à 150-250 euros par mois atteint un ROI x5 à x9 avec un gain mensuel de 990 à 1 760 euros. Un département avec une stack à 400-800 euros par mois génère 30 à 60 000 euros par an de valeur libérée, soit un ROI x10 à x20.\n\nTrois observations méritent d'être soulignées. L'empilement d'outils est le piège le plus courant : la règle est d'automatiser d'abord la tâche la plus chronophage avant d'étendre le périmètre. Les modèles open-source (Mistral, LLaMA via Ollama) offrent une alternative à coût quasi nul pour les équipes techniques. La dépendance aux éditeurs est un risque réel : une révision tarifaire ou une interruption de service peut invalider un workflow en place.",
        source: "Wyzowl, Video Marketing Statistics 2025. TJM freelance : Crème de la Crème, 2025. Coût externalisation : Union des Agences, 2024. Tarifs éditeurs : mai 2026.",
      },
    ],
  },
  {
    id: 4,
    num: 'Partie 4',
    title: 'Le facteur humain',
    subtitle: "Dans l'automatisation",
    duration: '9 min',
    tags: ['Authenticité', 'Marque', 'Storytelling'],
    color: '#C9A961',
    stat: '71%',
    statLabel: 'veulent des marques authentiques en ligne',
    description: "Ce qui ne peut pas être automatisé : l'intention créative, le choix des sujets, la gestion communautaire, l'incarnation. Ces quatre dimensions restent irréductiblement humaines.",
    insight: "Les chaînes incarnées par un visage récurrent bénéficient d'un taux de rétention supérieur de 22% en moyenne à celles reposant sur des formats voix-off ou animés. (Vidyard, Creator Economy Report, 2023)",
    readContent: [
      {
        heading: "Définir l'authenticité d'une marque",
        body: "Avant de préserver l'authenticité, il faut la définir avec précision. Dans l'usage courant, le terme est devenu un mot-valise qui désigne indistinctement la spontanéité, la transparence, le naturel ou l'absence de production léchée. Ces définitions sont insuffisantes. Une marque peut être parfaitement naturelle dans sa production et totalement inauthentique dans son positionnement. À l'inverse, une vidéo bien produite peut être profondément authentique si elle exprime un point de vue réel et cohérent.\n\nSelon Gilmore et Pine, l'authenticité n'est pas une propriété intrinsèque d'un objet ou d'une marque : c'est une perception construite par le consommateur à partir d'indices de cohérence entre ce qu'une marque dit être, ce qu'elle fait et ce qu'elle valorise. Elle ne s'obtient pas en renonçant à la production mais en garantissant la cohérence entre identité déclarée et expression réelle.\n\nDans le contexte spécifique des plateformes sociales, Brüns et Meißner démontrent que la perception d'authenticité est directement affectée par la suspicion d'automatisation. Leurs études expérimentales montrent que lorsqu'un consommateur sait ou soupçonne qu'un contenu est généré par IA, sa perception d'authenticité de la marque chute significativement, indépendamment de la qualité objective du contenu.",
        source: "Gilmore et Pine, Authenticity : What Consumers Really Want, Harvard Business Review Press, 2007. Brüns et Meißner, Journal of Retailing and Consumer Services, 2024.",
      },
      {
        heading: "Les trois piliers de l'authenticité perçue",
        body: "Le premier pilier est le ton, le style et les valeurs. Le ton d'une chaîne (la manière dont elle s'adresse à son audience, le registre lexical qu'elle emploie, les postures qu'elle adopte) est la couche identitaire la plus profonde d'une présence YouTube. C'est elle que l'audience perçoit en premier, souvent de manière inconsciente, et qu'elle reconnaît sur la durée. La chaîne HugoDécrypte illustre ce principe : Hugo Travers a construit une audience de plus de 4 millions d'abonnés en adoptant un positionnement tonal unique (rigueur sans hermétisme, neutralité sans fadeur, pédagogie sans condescendance).\n\nLe deuxième pilier est le storytelling humain. YouTube est fondamentalement une plateforme de storytelling. Les vidéos qui performent le mieux sur le long terme ne sont pas les plus informatives : ce sont celles qui créent un lien émotionnel durable. L'attachement repose sur trois éléments narratifs que l'IA ne génère pas spontanément : la vulnérabilité (les moments où la marque admet une difficulté ou une erreur), la progression (l'évolution visible de la chaîne au fil du temps), et la spécificité (les détails concrets qui ancrent le récit dans une réalité irréductible).\n\nLe troisième pilier est la présence du visage et de la voix. Les liens parasociaux générés par un visage récurrent produisent des niveaux de confiance comparables aux relations interpersonnelles réelles. Les chaînes incarnées par un visage récurrent bénéficient d'un taux de rétention supérieur de 22% en moyenne.",
        source: "Horton et Wohl, Mass Communication and Para-Social Interaction, Psychiatry, 1956. Bowden et Mirzaei, Journal of Brand Management, 2021. Vidyard, Creator Economy Report, 2023.",
      },
      {
        heading: "Ce qui ne peut pas être automatisé",
        body: "L'intention créative est la première zone profondément humaine. Elle se matérialise par la décision de ce que la marque choisit de dire, comment elle le dit et pourquoi maintenant. Cette décision implique une lecture du contexte (culturel, concurrentiel, communautaire) que les systèmes automatisés ne peuvent pas reproduire. L'IA optimise à partir de données historiques : elle est structurellement rétrospective là où la décision créative est prospective.\n\nLe choix des sujets est un acte de positionnement. Choisir un sujet c'est choisir une communauté à servir, un problème à prendre en charge, un territoire sémantique à revendiquer. C'est aussi décider que cette question est celle que votre marque est légitime à traiter mieux que quiconque. Cette légitimité éditoriale ne se calcule pas : elle se construit par une accumulation de décisions cohérentes qui définissent l'identité de la chaîne.\n\nLa gestion des commentaires doit rester humaine. La section commentaires constitue une source de données qualitatives précieuse : questions non résolues, frustrations exprimées, nuances apportées par des experts dans l'audience, signaux d'intention d'achat. La réciprocité perçue (le sentiment que la marque écoute et répond) est l'un des cinq facteurs principaux de l'engagement durable sur les plateformes sociales. La réponse éditoriale (qui exprime la voix de la marque, crée un lien, reconnaît une erreur ou défend un point de vue) doit rester humaine.",
        source: "Simon, The Sciences of the Artificial, MIT Press, 1969. Hollebeek et Macky, Journal of Interactive Marketing, 2019.",
      },
      {
        heading: "Les risques de l'automatisation mal dosée",
        body: "Le premier risque est l'uniformisation des contenus. Les outils d'IA générative sont entraînés sur les mêmes corpus et optimisés pour produire des outputs statistiquement plausibles. Par définition, ils tendent vers la moyenne et non vers un contenu unique. Lorsque plusieurs marques d'un même secteur utilisent les mêmes outils avec des prompts similaires, elles produisent des contenus visuellement et textuellement proches. 61% des professionnels du marketing B2B ayant adopté des outils d'IA générative déclarent que leurs contenus ressemblent davantage à ceux de leurs concurrents.\n\nLe deuxième risque est la menace algorithmique de la médiocrité. Dans ses évolutions les plus récentes, l'algorithme n'optimise plus uniquement le CTR et le watch time : il optimise aussi la satisfaction déclarée de l'utilisateur. Une vidéo avec un CTR élevé mais un contenu décevant est pénalisée algorithmiquement malgré ses indicateurs superficiels positifs.\n\nLe troisième risque est la perte silencieuse de singularité éditoriale. Une chaîne qui s'industrialise progressivement ne voit pas sa performance s'effondrer brutalement. Elle voit ses métriques de surface rester stables (CTR, vues) tandis que ses métriques d'engagement profond (commentaires, partages, watch time par abonné) s'érodent lentement. Les chaînes reposant exclusivement sur des scripts IA ont enregistré une chute de 37% de leur taux d'engagement suite aux mises à jour de mars 2024.",
        source: "Content Marketing Institute, B2B Content Marketing Report, 2024 : 61% déclarent ressembler davantage à leurs concurrents. ShortsGenerator Analysis, 2025 : chute de 37%.",
      },
    ],
  },
  {
    id: 5,
    num: 'Partie 5',
    title: 'Méthodologie hybride',
    subtitle: "Automatiser sans perdre l'âme",
    duration: '12 min',
    tags: ['Méthode', 'Pipeline', 'BVD', 'Checklist'],
    color: '#E63946',
    stat: '5 étapes',
    statLabel: 'pour un workflow hybride opérationnel',
    description: "Audit du workflow, Brand Voice Document, pipeline de production, contrôle qualité éditorial, pilotage par les données. Un guide pas à pas pour une équipe de 1 à 5 personnes.",
    insight: "Mise en place complète en 4 à 6 semaines. L'investissement initial est compensé dès le 2ème mois de production par le gain de temps généré.",
    readContent: [
      {
        heading: "Étape 1 : auditer son workflow actuel",
        body: "La première erreur des équipes qui adoptent des outils d'automatisation est de commencer par les outils. L'automatisation sans audit préalable crée de nouveaux problèmes sans en résoudre. L'étape 1 consiste à cartographier le workflow actuel pour identifier où se situent réellement les goulots d'étranglement.\n\nIl s'agit de mesurer combien de temps chaque phase prend réellement : recherche du sujet et de l'angle, rédaction du script, relecture et corrections, création du brief miniature, préparation du tournage, tournage lui-même, tri des rushes, montage, habillage, étalonnage, sous-titrage, export, rédaction du titre et de la description, création de la miniature, upload et configuration YouTube Studio, promotion.\n\nDeux critères d'évaluation complémentaires sont à appliquer. L'identité de marque doit être documentée avant d'automatiser : ton de marque écrit et partagé avec tous les prestataires, ligne éditoriale documentée, charte graphique YouTube, position éditoriale claire et assumée. Si moins de 6 des 8 critères d'identité sont validés, il est fortement déconseillé d'automatiser. L'automatisation sans identité forte produit du volume médiocre algorithmiquement pénalisé.",
        source: "Vidyard, State of Video Report, 2024 : 58% des marketeurs vidéo citent le temps de production comme premier frein à la cadence de publication.",
      },
      {
        heading: "Étape 2 : construire son Brand Voice Document",
        body: "Le Brand Voice Document (BVD) est le document le plus important du workflow d'automatisation. Il garantit que chaque contenu généré par IA respecte l'identité de la marque sans réécriture systématique. Sans BVD, chaque prompt repart de zéro. Avec un BVD bien construit, chaque prompt repart de l'identité.\n\nLe BVD comprend sept composantes : l'identité de la chaîne (nom, secteur, positionnement en une phrase), l'audience cible (profil, niveau de connaissance, préoccupation principale, ce qu'ils n'aiment pas), le ton et le style (ton général, registre lexical, posture, rythme des phrases), les expressions signature et les expressions à éviter, les sujets couverts et les sujets exclus, la structure type d'une vidéo, et les références stylistiques (trois vidéos de la chaîne, trois chaînes externes dont on apprécie le ton).\n\nLe BVD doit tenir en une à deux pages maximum pour être intégralement traité par le modèle. Il se colle directement dans les instructions système du LLM. Sur Claude, la fonctionnalité Projects permet de centraliser le BVD dans un contexte mémorisé partagé avec toute l'équipe éditoriale.",
        source: "Writer.com et Jasper AI permettent d'entraîner le modèle directement sur des scripts existants via fine-tuning du ton de marque.",
      },
      {
        heading: "Étape 3 : le pipeline de production hybride",
        body: "La méthode hybride repose sur un principe simple : séparer la production vidéo en tâches automatisables et en tâches humaines, puis organiser le workflow en conséquence. Les tâches automatisables incluent : recherche de mots-clés et analyse concurrentielle, génération de la première ébauche de script, génération de variantes de titres et descriptions, création de variantes de miniatures, suppression des silences et mots de remplissage, génération automatique de sous-titres, optimisation VSEO, scheduling et publication programmée, génération de Shorts par repurposing.\n\nLes tâches humaines non négociables incluent : la décision éditoriale finale sur le sujet et l'angle, la réécriture tonale et l'injection de la voix de marque, la validation de la prise de position, la sélection de la miniature finale, le rythme narratif et les coupes créatives du montage, la relecture et correction de la transcription, la lecture des commentaires et les réponses éditoriales, l'analyse des données et les décisions d'ajustement stratégique.\n\nLe pipeline complet se déroule en quatre phases : idéation (veille TubeBuddy et Perplexity, décision d'angle humaine), scripting (ébauche Claude, réécriture humaine, VSEO et brief miniature IA), post-production (Descript pour le montage, sous-titres corrigés manuellement, OpusClip pour les Shorts avec sélection humaine), publication (scheduling automatisé, commentaires humains uniquement).",
        source: "Wyzowl, Video Marketing Statistics 2025 : le gain global sur le pipeline complet se situe entre 15 et 25%.",
      },
      {
        heading: "Étapes 4 et 5 : contrôle qualité et pilotage par les données",
        body: "Aucune vidéo n'est mise en ligne sans validation par une personne qui n'a pas participé à sa production. Ce regard externe permet de détecter les écarts d'identité que le producteur ne voit plus. Un garant éditorial unique est désigné, avec pour rôle de connaître intimement l'identité de la marque et de détecter les écarts. Les retours doivent être formulés en termes d'identité, pas de goût personnel.\n\nLes 7 métriques essentielles à suivre : CTR (seuil d'alerte sous 3%), taux de rétention à 30% (seuil sous 60%), taux de rétention à 50% (seuil sous 45%), commentaires organiques par vidéo (seuil sous 5), abonnements issus de la vidéo (seuil sous 10), watch time par abonné sur 30 jours (en baisse sur 3 mois = signaux d'identité faibles), ratio impressions vs CTR (écart croissant = problème VSEO ou timing).\n\nGoogle Looker Studio couplé à l'API YouTube Studio permet un tableau de bord automatisé partagé avec toute l'équipe. Le Playbook de tests trimestriels consiste à structurer chaque trimestre autour d'une hypothèse de format principale à tester sur 8 à 10 vidéos consécutives. Les équipes qui conduisent des tests de format réguliers enregistrent une croissance d'audience 2,3 fois supérieure à celles qui ne testent pas.",
        source: "Vidyard, State of Video Report, 2024 : croissance d'audience 2,3x supérieure avec tests réguliers. Forrester, The State of Digital Asset Management, 2023.",
      },
    ],
  },
  {
    id: 6,
    num: 'Conclusion',
    title: "Ce qui ne changera pas",
    subtitle: "L'humain comme avantage concurrentiel",
    duration: '5 min',
    tags: ['Avenir', 'IA Act', 'Stratégie'],
    color: '#5C7F6B',
    stat: '24 mois',
    statLabel: 'de transformations à anticiper',
    description: "En 2026, n'importe quelle équipe peut générer un script correct en 60 secondes. Ces capacités sont devenues des commodités. Ce qui ne l'est pas : la capacité à construire une relation de confiance durable avec son audience.",
    insight: "YouTube devient simultanément plateforme IA (Veo, Likeness-Based Shorts), plateforme de transaction (In-App Checkout) et plateforme interactive (Ask, Jump Ahead, AskStudio).",
    readContent: [
      {
        heading: "Ce qui va changer dans les 24 prochains mois",
        body: "L'écosystème d'outils décrit dans ce livre blanc est en évolution permanente. Trois tendances structurelles vont remodeler le workflow de production YouTube dans les 24 prochains mois.\n\nYouTube devient une plateforme de création IA. Les fonctionnalités annoncées par Neal Mohan en 2026 en témoignent : création de Shorts à partir de sa propre image (Likeness-Based Shorts), génération de clips vidéo cinématiques via Veo 3.1 intégré directement dans le flux de création, génération de jeux interactifs depuis un prompt texte (Playables). L'avatar à partir de sa propre image est radicalement différent de l'avatar générique sans identité propre. Pour les marques françaises, l'utilisation de l'avatar natif d'un collaborateur pose des questions juridiques complexes sur la propriété de l'avatar après le départ du salarié.\n\nYouTube devient une plateforme de transaction. L'In-App Checkout et les Dynamic Ad Slots transforment les catalogues en actifs commerciaux récurrents. YouTube devient une plateforme de plus en plus contrôlée : labellisation obligatoire des contenus synthétiques réalistes, systèmes de détection des deepfakes, obligations de transparence issues de l'AI Act européen. Ne pas déclarer un doublage IA peut désormais entraîner une démonétisation, voire une suppression de la chaîne.",
        source: "Neal Mohan, lettre annuelle YouTube 2026. Règlement (UE) 2024/1689, article 50. YouTube Help Center, Disclosure for altered or synthetic content, 2024.",
      },
      {
        heading: "L'avantage concurrentiel réel",
        body: "En 2026, n'importe quelle équipe peut générer un script YouTube correct en 60 secondes. N'importe quelle marque peut produire une miniature optimisée, un titre A/B testé, une description VSEO-compliant. Ces capacités sont devenues des commodités. Ce qui ne l'est pas, et ne le sera pas de sitôt, c'est la capacité à construire une relation de confiance durable avec son audience.\n\nDans un marché où tous accèdent aux mêmes outils, l'avantage revient à ce que les outils ne peuvent pas faire. Ce qui retient l'attention, génère la confiance et crée la fidélité : la présence d'une personnalité reconnaissable, d'un point de vue assumé, d'une cohérence entre valeurs déclarées et comportements observés. Ces mécanismes sont antérieurs à YouTube, antérieurs à Internet. Ils sont anthropologiques.\n\nCe n'est pas un argument contre l'automatisation. C'est, au contraire, l'argument le plus puissant en sa faveur. Si vous automatisez les tâches répétitives avec discipline, vous libérez du temps et de l'énergie pour la créativité. L'humain est la force vive la plus précieuse.",
        source: "Horton et Wohl, 1956. Gilmore et Pine, 2007. Berger et Milkman, Journal of Marketing Research, 2012. Edelman, Trust Barometer, 2024.",
      },
      {
        heading: "La question centrale",
        body: "Ce livre blanc est parti d'un paradoxe. YouTube offre aux marques une opportunité éditoriale sans équivalent et pourtant, les conditions pour exister sur cette plateforme sont celles que les méthodes de production traditionnelles ne peuvent pas tenir. Ce n'est pas un manque de budget ou de talent. C'est une incompatibilité structurelle.\n\nL'automatisation peut générer un risque symétrique au problème qu'elle résout. Produire plus vite ce qui ne vaut pas la peine d'être produit. Du contenu techniquement irréprochable, VSEO-optimisé, cadencé mais sans authenticité. Des vidéos que l'algorithme distribue mais que l'audience fuit. Des chaînes qui ressemblent à toutes les autres chaînes qui utilisent les mêmes outils.\n\nLe problème de fond des chaînes de marque sur YouTube n'est pas un problème de vitesse, de volume ou de qualité. C'est un problème d'identité. YouTube en 2026 récompense la cohérence entre qui vous êtes et ce que vous produisez. Automatiser intelligemment, c'est simplement se donner les moyens de tenir cette cohérence dans la durée. L'humain reste décideur final. L'authenticité est ce qui donne une raison d'engager.",
        source: "Edelman, Trust Barometer, 2024 : 71% des consommateurs déclarent qu'il est plus important que jamais pour les marques de préserver leur authenticité dans leurs communications en ligne.",
      },
    ],
  },
];

// ─── SOURCES (inchangées) ────────────────────────────────────────────────────
const SOURCES = [
  { chapter: 'Introduction', chapterColor: '#C9A961', chapterId: 0, items: [
    { type: 'Données plateforme', author: 'Google / Think with Google', title: 'How YouTube influences purchase decisions', date: '2023', stat: '55% des consommateurs utilisent YouTube pour des recherches produit avant achat.' },
    { type: 'Rapport sectoriel', author: 'HubSpot', title: 'State of Marketing Report', date: '2025', stat: "84% des consommateurs ont été convaincus d'acheter un produit après avoir regardé une vidéo." },
    { type: 'Données plateforme', author: 'Nielsen', title: 'The Gauge', date: 'Décembre 2024', stat: 'YouTube dépasse Netflix avec 11,1% du temps de visionnage TV aux États-Unis.' },
    { type: 'Données plateforme', author: 'Médiamétrie', title: 'Observatoire de la Vidéo en Ligne', date: '2024', stat: 'La consommation YouTube sur écrans connectés a progressé de 38% entre 2022 et 2024 en France.' },
    { type: 'Données plateforme', author: 'YouTube / Neal Mohan', title: 'Lettre annuelle YouTube', date: '2026', stat: "20 millions d'utilisateurs mensuels ont interagi avec l'outil Ask en décembre 2025." },
    { type: 'Rapport sectoriel', author: 'Digital Report', title: 'Global Overview Report', date: 'Octobre 2024', stat: "2,53 milliards d'utilisateurs actifs mondiaux. 50 millions en France." },
  ]},
  { chapter: 'Partie 1', chapterColor: '#E63946', chapterId: 1, items: [
    { type: 'Données plateforme', author: 'YouTube Official Blog', title: "How YouTube's recommendation system works", date: '2023', stat: '70% du temps de visionnage total est généré par les recommandations algorithmiques.' },
    { type: 'Données plateforme', author: 'YouTube Creator Academy', title: 'Consistency and audience growth', date: '2023', stat: "Les chaînes publiant au moins une vidéo par semaine connaissent une croissance d'audience supérieure." },
    { type: 'Données plateforme', author: 'Neal Mohan / YouTube', title: 'Lettre annuelle YouTube', date: '2026', stat: 'YouTube Shorts dépasse 200 milliards de vues quotidiennes, +180% en un an.' },
    { type: 'Données plateforme', author: 'Loopex Digital', title: 'YouTube Shorts Statistics', date: '2026', stat: "74% des vues sur les Shorts proviennent d'utilisateurs non abonnés à la chaîne." },
    { type: 'Étude académique', author: 'Backlinko', title: 'YouTube SEO : The Definitive Guide', date: '2023', stat: "Les vidéos dont le titre contient exactement le terme recherché ont une probabilité plus élevée d'apparaître en 1ère page." },
    { type: 'Rapport sectoriel', author: 'We Are Social / Meltwater', title: 'Digital Report', date: '2025', stat: "89,8% des utilisateurs accèdent à YouTube depuis leur smartphone." },
    { type: 'Rapport sectoriel', author: 'Vidyard', title: 'B2B Video Benchmarks Report', date: '2023', stat: "58% des professionnels du marketing vidéo citent le temps de production comme principal frein à la cadence." },
    { type: 'Rapport sectoriel', author: 'Spirit Juice Studios / Viva Media', title: 'Video Production Cost Report', date: '2026', stat: "Le coût moyen d'une vidéo talking head externalisée se situe entre 10 000 et 15 000 euros en 2026." },
    { type: 'Données plateforme', author: 'Socialinsider / HubSpot', title: 'Social Media Benchmarks', date: '2025', stat: "Taux d'engagement Shorts : 5,91%, dépassant TikTok (5,75%) et Instagram Reels (5,53%)." },
  ]},
  { chapter: 'Partie 2', chapterColor: '#5C7F6B', chapterId: 2, items: [
    { type: 'Étude académique', author: 'Guo, Kim et Rubin', title: 'How Video Production Affects Student Engagement', date: '2014', stat: "L'attention commence à décliner après 6 minutes de visionnage continu (étude sur 6,9M de visionnages)." },
    { type: 'Données plateforme', author: 'YouTube Creators', title: 'Understanding Audience Retention', date: '2025', stat: "Une chute supérieure à 40% dans les 30 premières secondes réduit significativement la distribution algorithmique." },
    { type: 'Étude académique', author: 'Hasson et al., Princeton', title: 'Brain-to-brain coupling', date: '2010', stat: 'Neural coupling : synchronisation neuronale entre narrateur et auditeur lors d\'un récit concret.' },
    { type: 'Étude académique', author: 'Zeigarnik', title: 'On Finished and Unfinished Tasks', date: '1927', stat: "Le cerveau maintient en mémoire les tâches inachevées jusqu'à leur résolution." },
    { type: 'Données plateforme', author: 'Todd Beaupré / YouTube', title: 'YouTube Creator Summit', date: '2024', stat: "Les vidéos avec des changements de registre réguliers génèrent des courbes de rétention plus plates." },
    { type: 'Étude académique', author: 'Ohanian, Roobina', title: "Construction and Validation of a Scale to Measure Celebrity Endorsers' Perceived Expertise", date: '1990', stat: "Trois dimensions de la crédibilité perçue : expertise, fiabilité, attractivité." },
  ]},
  { chapter: 'Partie 3', chapterColor: '#7F77DD', chapterId: 3, items: [
    { type: 'Étude académique', author: 'Stanford HAI', title: 'AI Index Report', date: '2024', stat: '51 modèles LLM déployés à usage commercial en 2023, contre 3 en 2018.' },
    { type: 'Rapport sectoriel', author: 'Wyzowl', title: 'Video Marketing Statistics', date: '2025', stat: "Les workflows IA réduisent le cycle de production de 34% en moyenne. Gains : recherche -58%, scripting -61%." },
    { type: 'Données plateforme', author: 'TubeBuddy', title: 'Creator Performance Report', date: '2023', stat: "Les créateurs utilisant le A/B test de miniatures enregistrent un CTR moyen supérieur de 41%." },
    { type: 'Rapport sectoriel', author: 'Forrester Research', title: 'The State of Digital Asset Management', date: '2023', stat: "Un DAM centralisé réduit de 43% le temps consacré à la recherche d'assets." },
  ]},
  { chapter: 'Partie 4', chapterColor: '#C9A961', chapterId: 4, items: [
    { type: 'Étude académique', author: 'Gilmore et Pine', title: 'Authenticity : What Consumers Really Want', date: '2007', stat: "L'authenticité est une perception construite à partir d'indices de cohérence." },
    { type: 'Étude académique', author: 'Brüns et Meißner', title: 'AI-generated content and brand authenticity perceptions', date: '2024', stat: "La suspicion d'automatisation fait chuter la perception d'authenticité, indépendamment de la qualité objective." },
    { type: 'Étude académique', author: 'Horton et Wohl', title: 'Mass Communication and Para-Social Interaction', date: '1956', stat: "Les liens parasociaux générés par un visage récurrent produisent des niveaux de confiance comparables aux relations réelles." },
    { type: 'Rapport sectoriel', author: 'Vidyard', title: 'Creator Economy Report', date: '2023', stat: "Les chaînes incarnées par un visage récurrent ont un taux de rétention supérieur de 22% en moyenne." },
    { type: 'Rapport sectoriel', author: 'Content Marketing Institute', title: 'B2B Content Marketing Report', date: '2024', stat: "61% des marketeurs B2B ayant adopté l'IA déclarent que leurs contenus ressemblent davantage à ceux de leurs concurrents." },
    { type: 'Rapport sectoriel', author: 'Edelman', title: 'Trust Barometer', date: '2024', stat: "71% des consommateurs déclarent qu'il est plus important que jamais pour les marques de préserver leur authenticité en ligne." },
  ]},
  { chapter: 'Partie 5', chapterColor: '#E63946', chapterId: 5, items: [
    { type: 'Rapport sectoriel', author: 'Vidyard', title: 'State of Video Report', date: '2024', stat: "Les équipes qui testent régulièrement leurs formats ont une croissance d'audience 2,3x supérieure." },
    { type: 'Rapport sectoriel', author: 'Wyzowl', title: 'Video Marketing Statistics', date: '2025', stat: "Le gain global sur le pipeline complet avec automatisation se situe entre 15 et 25%." },
  ]},
  { chapter: 'Conclusion', chapterColor: '#5C7F6B', chapterId: 6, items: [
    { type: 'Données plateforme', author: 'Neal Mohan / YouTube', title: 'Lettre annuelle YouTube', date: '2026', stat: 'Annonce des Likeness-Based Shorts, intégration de Veo 3.1, et déploiement des Playables.' },
    { type: 'Réglementation', author: 'Parlement européen', title: 'Règlement (UE) 2024/1689, AI Act', date: '2024', stat: 'Article 50 : obligations de transparence sur les contenus audiovisuels générés ou modifiés par IA.' },
    { type: 'Rapport sectoriel', author: 'Edelman', title: 'Trust Barometer', date: '2024', stat: "71% des consommateurs déclarent qu'il est plus important que jamais pour les marques de préserver leur authenticité en ligne." },
  ]},
];

const SOURCE_TYPES = ['Tous', 'Étude académique', 'Rapport sectoriel', 'Données plateforme', 'Réglementation'];

// ─── WORKFLOW PHASES (32 outils) ─────────────────────────────────────────────
const WORKFLOW_PHASES = [
  {
    id: 'ideation',
    label: 'Idéation',
    color: '#C9A961',
    description: 'Trouver les bons sujets, analyser la concurrence, identifier les lacunes éditoriales.',
    tools: [
      { name: 'TubeBuddy', description: 'Extension navigateur certifiée partenaire officiel YouTube. Analyse les volumes de recherche, score les tags et propose des mots-clés basés sur les données réelles de la plateforme.', usage: 'Keyword Explorer pour identifier les sujets à fort potentiel et faible concurrence. Croiser avec les tendances de la Research Tab YouTube Studio.', price: '9 à 49 € / mois', link: 'https://tubebuddy.com' },
      { name: 'VidIQ', description: "Plateforme d'analyse concurrentielle YouTube avec un score de performance prédictif. Évalue le potentiel de visibilité d'une vidéo avant sa publication.", usage: "Veille concurrentielle sur les chaînes de son secteur. Score prédictif avant publication pour valider le potentiel d'une vidéo.", price: '9 à 49 € / mois', link: 'https://vidiq.com' },
      { name: 'Perplexity AI', description: 'Moteur de recherche IA qui synthétise des réponses sourcées en temps réel. Idéal pour identifier les questions non résolues dans une niche.', usage: "Demander quelles sont les questions les plus fréquentes et les moins abordées sur un sujet donné. Alimenter l'Agent 1 du pipeline de production.", price: 'Gratuit / 20 € / mois (Pro)', link: 'https://perplexity.ai' },
      { name: 'YouTube Studio, Inspiration Tab', description: "Onglet natif de YouTube Studio qui génère des suggestions de sujets, titres et formats personnalisées à partir des performances historiques de la chaîne et des tendances de la niche.", usage: "Point de départ hebdomadaire avant toute réunion éditoriale. Filtrer par type de contenu et exporter les sujets retenus vers l'outil de planification.", price: 'Gratuit', link: 'https://studio.youtube.com' },
      { name: 'YouTube Studio, Research Tab', description: "Donne accès aux requêtes de recherche effectuées par les utilisateurs YouTube dans la niche. Données de volume directement issues de la plateforme, introuvables sur les outils tiers.", usage: "Identifier les requêtes à fort volume non encore traitées sur la chaîne. Particulièrement utile pour les secteurs techniques où les volumes sont faibles mais l'intention d'achat est forte.", price: 'Gratuit', link: 'https://studio.youtube.com' },
    ],
  },
  {
    id: 'scripting',
    label: 'Scripting',
    color: '#E63946',
    description: 'Générer la première ébauche, structurer le script, optimiser le titre et la description.',
    tools: [
      { name: 'Claude (Anthropic)', description: "Modèle de langage de référence pour la création de contenu éditorial long. Maintient une cohérence stylistique sur de longs formats et respecte un ton de marque précisément défini via la fonctionnalité Projects.", usage: "Générer la première ébauche de script à partir du Brand Voice Document. Enchaîner dans la même conversation avec les agents VSEO (titres, description, timestamps) et brief miniature.", price: '18 € / mois (Pro)', link: 'https://claude.ai' },
      { name: 'ChatGPT (OpenAI)', description: "Référence la plus polyvalente et la plus largement adoptée. Adapté à des usages variés : scripting, reformulation, génération de variantes d'accroches.", usage: "Alternative à Claude pour la génération de scripts. Particulièrement efficace pour les formats courts et les variantes de titres en grand nombre.", price: '20 € / mois (Plus)', link: 'https://chatgpt.com' },
      { name: 'Gemini Pro (Google)', description: "Se distingue par une fenêtre de contexte de 1 million de tokens. Permet d'ingérer un document entier pour en dériver des scripts cohérents.", usage: "Pertinent quand le script doit s'appuyer sur un corpus long déjà existant. Intégration native avec Google Workspace.", price: '22 € / mois (Advanced)', link: 'https://gemini.google.com' },
      { name: 'Mistral Large', description: "Modèle français développé par Mistral AI. Produit des scripts en français d'une fluidité stylistique supérieure aux modèles américains sur des sujets techniques ou institutionnels.", usage: "Recommandé pour les marques françaises dont le ton institutionnel est central. Alternative souveraine pour les équipes soumises à des contraintes RGPD strictes.", price: '15 € / mois', link: 'https://mistral.ai' },
      {
        name: 'Writer.com',
        description: "Plateforme de création de contenu IA spécialisée dans le fine-tuning du ton de marque. Permet d'entraîner le modèle directement sur vos scripts existants pour qu'il internalise précisément votre voix de marque, sans ajustements stylistiques systématiques.",
        usage: "Fine-tuner sur votre corpus de scripts existants. Résultat : des scripts qui sonnent comme vous dès la première génération. Idéal pour les équipes dispersées géographiquement qui doivent maintenir une cohérence tonale sans brief répété.",
        price: '18 à 50 € / mois',
        link: 'https://writer.com',
      },
      {
        name: 'Dust',
        description: "Plateforme française permettant de construire des agents IA personnalisés connectés aux outils internes (Notion, Slack, Google Drive, Confluence). Positionnement RGPD-compatible avec hébergement en Europe — argument décisif pour les directions juridiques des grandes organisations françaises.",
        usage: "Déployer un agent 'Script YouTube' accessible à tous les collaborateurs. L'agent interroge automatiquement la base de connaissances interne (BVD, historique vidéos, messages clés) et génère un brief structuré soumis pour validation humaine.",
        price: '29 à 69 € / mois',
        link: 'https://dust.tt',
      },
    ],
  },
  {
    id: 'montage',
    label: 'Montage',
    color: '#5C7F6B',
    description: 'Couper, rythmer, sous-titrer et décliner la vidéo longue en Shorts.',
    tools: [
      { name: 'Descript', description: "Logiciel de montage text-based editing : modifier la transcription modifie automatiquement la vidéo. Supprime les silences et mots de remplissage en un clic. Génère les sous-titres automatiquement.", usage: "Phase principale de montage pour les formats talking head. Importer la vidéo brute, éditer en mode texte, supprimer les hésitations, exporter le fichier .srt pour YouTube Studio.", price: '12 à 24 € / mois', link: 'https://descript.com' },
      { name: 'OpusClip', description: "Transforme automatiquement une vidéo longue en clips courts optimisés pour YouTube Shorts. L'IA identifie les moments les plus engageants, recadre en vertical et ajoute des sous-titres animés avec un score de virabilité par clip.", usage: "Repurposing systématique après chaque vidéo longue. Sélection humaine obligatoire parmi les clips générés. Personnaliser les sous-titres pour les aligner avec la charte graphique.", price: '15 à 29 € / mois', link: 'https://opusclip.com' },
      { name: 'YouTube Create', description: "Application mobile gratuite officiellement développée par YouTube. Intègre Edit with AI et des capacités Google Veo pour générer du B-roll à partir d'un prompt textuel.", usage: "Production Shorts simple et rapide depuis mobile. Outil de référence pour les équipes qui veulent éviter toute dépendance réglementaire à un outil tiers.", price: 'Gratuit', link: 'https://youtube.com' },
      { name: 'Adobe Premiere Pro', description: "Suite professionnelle avec fonctionnalités IA intégrées : Auto-reframe, Enhance Speech, Auto Color. Ne remplace pas le monteur mais élimine les inégalités de rendu visibles à volume élevé.", usage: "Voie de moindre résistance pour les équipes déjà formées à la suite Adobe. Auto-reframe pour décliner une vidéo horizontale en Shorts sans re-tournage.", price: 'Adobe Creative Cloud (60 € / mois)', link: 'https://adobe.com/premiere' },
      { name: 'CapCut', description: "Référence pour la production rapide de formats courts. Génération automatique de sous-titres, détection de scènes, effets et transitions préconfigurés. 200M d'utilisateurs actifs en 2024.", usage: "Production de Shorts à haute cadence. Point de vigilance : l'application a fait l'objet de procédures de restriction dans plusieurs pays en raison de ses origines ByteDance.", price: 'Gratuit / 10 € / mois (Pro)', link: 'https://capcut.com' },
      {
        name: 'Runway ML (Gen-3)',
        description: "Outil de génération vidéo IA avancé. Gen-3 permet de générer des séquences B-roll de quelques secondes à partir d'une description textuelle ou d'une image de référence. Particulièrement précieux pour les marques sans budget de tournage supplémentaire.",
        usage: "Générer du B-roll personnalisé pour illustrer des concepts abstraits (data, processus, idées) sans recourir à des banques d'images génériques. Intégrer les clips générés entre les séquences talking head pour maintenir le rythme visuel.",
        price: '12 à 76 € / mois',
        link: 'https://runwayml.com',
      },
      {
        name: 'Whisper (OpenAI)',
        description: "Modèle de reconnaissance vocale open-source développé par OpenAI. Déployable en local, il atteint une précision de 92-95% en français avec une diction claire. Alternative à coût quasi nul pour les équipes techniques soumises à des contraintes RGPD.",
        usage: "Générer des transcriptions précises depuis la ligne de commande sans envoyer les données audio vers un serveur tiers. Exporter le fichier .srt corrigé dans YouTube Studio pour garantir l'exactitude de l'indexation VSEO.",
        price: 'Gratuit (open-source)',
        link: 'https://openai.com/research/whisper',
      },
    ],
  },
  {
    id: 'doublage',
    label: 'Doublage',
    color: '#F4845F',
    description: 'Traduire, doubler et décliner vos vidéos en plusieurs langues pour multiplier votre portée mondiale.',
    tools: [
      {
        name: 'Rask AI',
        description: "Outil de traduction et doublage IA supportant plus de 130 langues. Adapte automatiquement les expressions idiomatiques et les références locales. Conserve la voix originale du locuteur avec une synchronisation labiale précise.",
        usage: "Traduire et doubler vos vidéos en espagnol, anglais ou arabe pour multiplier votre portée. Prévoir une relecture humaine obligatoire pour les contenus à forte densité sémantique ou les prises de position tranchées. Déclarer le contenu synthétique dans YouTube Studio (IA Act 2024).",
        price: '60 à 150 € / mois',
        link: 'https://rask.ai',
      },
      {
        name: 'ElevenLabs',
        description: "Référence mondiale du clonage vocal par IA. Reproduit la voix d'un locuteur réel à partir d'un échantillon audio de quelques secondes. Conservation de l'intonation, du timbre et du rythme naturel. Utilisé par des médias et studios de podcasting à l'échelle mondiale.",
        usage: "Générer des versions multilingues d'une vidéo en conservant la voix du porte-parole. Usage recommandé pour les teasers et les Shorts. Ne pas utiliser pour les prises de position sensibles sans validation humaine dans la langue cible.",
        price: '5 à 22 € / mois',
        link: 'https://elevenlabs.io',
      },
      {
        name: 'HeyGen',
        description: "Plateforme de création d'avatars vidéo IA réalistes. Génère un présentateur synthétique qui lit un script avec des mouvements de lèvres synchronisés et des expressions faciales générées. Capacité multilingue intégrée.",
        usage: "Usage fonctionnel interne uniquement (formation, onboarding, tutoriels internes). Ne pas utiliser comme porte-parole principal d'une chaîne de marque publique. Déclaration obligatoire dans YouTube Studio depuis 2024. Question juridique pour les marques françaises : propriété de l'avatar après départ du salarié.",
        price: '24 à 120 € / mois',
        link: 'https://heygen.com',
      },
      {
        name: 'Papercup',
        description: "Solution de doublage IA de qualité broadcast, utilisée par BBC et Sky News. Conservation de l'intonation et du style de la voix originale. Adapté aux contenus journalistiques, institutionnels et éducatifs à fort enjeu de crédibilité.",
        usage: "Doublage de qualité professionnelle pour les marques qui opèrent à l'international avec des audiences exigeantes. Nécessite un volume minimal de contenu pour être rentable. Idéal en complément d'une stratégie YouTube multilingue structurée.",
        price: 'Sur devis (à partir de 500 € / mois)',
        link: 'https://papercup.com',
      },
    ],
  },
  {
    id: 'vseo',
    label: 'VSEO',
    color: '#7F77DD',
    description: "Optimiser titres, descriptions, tags, miniatures et sous-titres pour l'algorithme.",
    tools: [
      { name: 'TubeBuddy (VSEO)', description: "Title Optimizer, scoring des tags et A/B test natif sur les miniatures. Les créateurs utilisant le A/B test enregistrent un CTR supérieur de 41%.", usage: "Activer le Thumbnail A/B Test sur les 7 premiers jours de chaque publication. Vérifier la présence du mot-clé dans les 60 premiers caractères du titre.", price: '9 à 49 € / mois', link: 'https://tubebuddy.com' },
      { name: 'Canva (Magic Studio)', description: "Suite Magic Studio : Magic Generate, Magic Edit, Magic Resize pour adapter automatiquement aux formats YouTube, Shorts et Instagram. 170 millions d'utilisateurs actifs.", usage: "Création et déclinaison des miniatures à partir d'un brief généré par Claude. Couplé à un DAM centralisé, garantit la cohérence graphique pour toutes les équipes.", price: 'Gratuit / 13 € / mois (Pro)', link: 'https://canva.com' },
      { name: 'Adobe Firefly', description: "IA générative d'Adobe intégrée dans Photoshop et Illustrator. Entraîné exclusivement sur des contenus libres de droits, il garantit une sécurité juridique pour les usages commerciaux.", usage: "Générer des arrière-plans pour les miniatures, remplacer un fond sans fond vert. Ce qui prenait 2 à 3 heures à un retoucheur prend moins de 10 minutes.", price: '5 € / mois (standalone)', link: 'https://firefly.adobe.com' },
      { name: 'YouTube Studio, Sous-titres', description: "Interface centrale pour corriger et valider les transcriptions automatiques dans plus de 40 langues. Permet d'uploader des fichiers .srt pour forcer l'indexation du texte vérifié.", usage: "Corriger les erreurs de noms propres, termes techniques et anglicismes après chaque publication. Uploader le fichier .srt corrigé pour garantir l'exactitude de l'indexation VSEO.", price: 'Gratuit', link: 'https://studio.youtube.com' },
      {
        name: 'Midjourney',
        description: "Modèle de génération d'images par IA via Discord. Produit des visuels d'ambiance, illustrations conceptuelles et arrière-plans pour miniatures avec un style artistique distinctif et une haute qualité esthétique.",
        usage: "Générer des arrière-plans ou des visuels d'idées abstraites pour les miniatures. Toujours retoucher manuellement dans Canva ou Photoshop pour garantir la cohérence avec la charte graphique de la chaîne. Règle : l'IA génère, l'humain sélectionne et valide.",
        price: '10 à 60 € / mois',
        link: 'https://midjourney.com',
      },
      {
        name: 'Stable Diffusion',
        description: "Modèle de génération d'images open-source déployable en local via Automatic1111 ou ComfyUI. Alternative souveraine à Midjourney et DALL-E pour les équipes soumises à des contraintes RGPD strictes — aucune donnée ne quitte votre infrastructure.",
        usage: "Générer des visuels en local sans partage de données avec un éditeur tiers. Nécessite des compétences techniques pour l'installation et le paramétrage. Idéal pour les grandes organisations avec une DSI impliquée dans les choix d'outils IA.",
        price: 'Gratuit (infrastructure à maintenir)',
        link: 'https://stability.ai',
      },
    ],
  },
  {
    id: 'publication',
    label: 'Publication',
    color: '#C9A961',
    description: 'Programmer, analyser les performances et piloter la stratégie par les données.',
    tools: [
      { name: 'YouTube Studio, Analytics', description: "QG opérationnel de la chaîne. Graphique de rétention seconde par seconde, CTR, watch time, abonnements par vidéo. AskStudio (2026) permet d'interroger les données en langage naturel.", usage: "Réserver 10 minutes par semaine à la lecture des analytics avant la réunion éditoriale. Identifier les 3 vidéos avec le meilleur taux de rétention à 50% et analyser leurs accroches.", price: 'Gratuit', link: 'https://studio.youtube.com' },
      { name: 'Google Looker Studio', description: "Outil de dataviz couplable à l'API YouTube Studio. Agrège en temps réel CTR, taux de rétention, watch time et abonnements. Permet de croiser les données avec les paramètres de format.", usage: "Configurer un tableau de bord partagé avec toute l'équipe éditoriale. Planifier un rapport automatique hebdomadaire par email. Support de la réunion éditoriale.", price: 'Gratuit', link: 'https://lookerstudio.google.com' },
      { name: 'Make (ex-Integromat)', description: "Outil de workflow automation no-code. Permet de créer des scénarios qui déclenchent automatiquement la génération d'un brief de script dès qu'un sujet dépasse un seuil défini sur TubeBuddy.", usage: "Automatiser la chaîne veille, brief, notification éditoriale. L'humain reste décideur final : l'automation prend en charge la pré-qualification des opportunités éditoriales.", price: '9 à 29 € / mois', link: 'https://make.com' },
      { name: 'MorningFame', description: "Outil d'analyse conçu pour les chaînes en croissance (moins de 50 000 abonnés). Compare les performances aux chaînes de taille similaire dans la même niche plutôt qu'à l'ensemble de YouTube.", usage: "Pertinent en phase de lancement pour benchmarker sur des standards réalistes. Plus actionnable que TubeBuddy ou VidIQ pour un communicant qui débute.", price: '9 € / mois', link: 'https://morningfa.me' },
    ],
  },
];

// ─── TOOL ICON COMPONENT ──────────────────────────────────────────────────────
const ToolIcon = ({ name, color }) => {
  const s = { width: 18, height: 18, strokeWidth: 1.8 };
  const icons = {
    'TubeBuddy': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 12h8M12 8v8"/></svg>,
    'VidIQ': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    'Perplexity AI': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><circle cx="11" cy="11" r="7"/><path d="M20 20l-3-3"/><path d="M11 8v6M8 11h6"/></svg>,
    'YouTube Studio, Inspiration Tab': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>,
    'YouTube Studio, Research Tab': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><circle cx="11" cy="11" r="7"/><path d="M20 20l-3-3"/></svg>,
    'Claude (Anthropic)': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><path d="M12 3c-1.5 4-4 7-4 10a4 4 0 008 0c0-3-2.5-6-4-10z"/><circle cx="12" cy="13" r="1.5" fill={color}/></svg>,
    'ChatGPT (OpenAI)': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><path d="M12 2a7 7 0 017 7v1a3 3 0 010 6H5a3 3 0 010-6V9a7 7 0 017-7z"/><path d="M9 17v2m6-2v2"/></svg>,
    'Gemini Pro (Google)': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>,
    'Mistral Large': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 12h8M12 8v8"/></svg>,
    'Writer.com': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/><path d="M15 5l4 4"/></svg>,
    'Dust': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z"/><circle cx="19" cy="18" r="2"/><circle cx="5" cy="18" r="2"/></svg>,
    // ── Montage ───────────────────────────────────────────────────────────────
    'Descript': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9h10M7 13h6"/></svg>,
    'OpusClip': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><path d="M5 3l14 9-14 9V3z"/></svg>,
    'YouTube Create': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M9 13l4-2.5L9 8v5z" fill={color} stroke="none"/></svg>,
    'Adobe Premiere Pro': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><path d="M4 4h16v16H4z"/><path d="M8 16V8l4 4 4-4v8"/></svg>,
    'CapCut': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><circle cx="12" cy="12" r="9"/><path d="M10 9l5 3-5 3V9z"/></svg>,
    'Runway ML (Gen-3)': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><rect x="2" y="7" width="20" height="13" rx="2"/><path d="M16 2l-2 5H10L8 2"/><path d="M9 14l2-2 2 2 3-4"/></svg>,
    'Whisper (OpenAI)': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><polyline points="2 12 6 7 10 17 14 5 18 12 22 12"/></svg>,
    // ── Doublage & Voix ───────────────────────────────────────────────────────
    'Rask AI': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><circle cx="12" cy="12" r="9"/><path d="M12 3c-3.5 4-3.5 14 0 18M12 3c3.5 4 3.5 14 0 18M3 12h18"/></svg>,
    'ElevenLabs': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><line x1="6" y1="6" x2="6" y2="18" strokeWidth="2.5"/><line x1="10" y1="4" x2="10" y2="20" strokeWidth="2.5"/><line x1="14" y1="8" x2="14" y2="16" strokeWidth="2.5"/><line x1="18" y1="10" x2="18" y2="14" strokeWidth="2.5"/></svg>,
    'HeyGen': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><circle cx="12" cy="7" r="4"/><path d="M6 21v-2a6 6 0 0 1 12 0v2"/><path d="M19 3l.7 1.4L21 5l-1.3.6L19 7l-.7-1.4L17 5l1.3-.6L19 3z" fill={color} strokeWidth="1"/></svg>,
    'Papercup': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>,
    // ── VSEO ──────────────────────────────────────────────────────────────────
    'TubeBuddy (VSEO)': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><path d="M3 9l9-6 9 6v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    'Canva (Magic Studio)': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="12" r="4"/></svg>,
    'Adobe Firefly': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><path d="M12 2c0 6-6 8-6 14a6 6 0 0 0 12 0c0-6-6-8-6-14z"/><path d="M9 17c0-2 1.5-3 3-4.5"/></svg>,
    'YouTube Studio, Sous-titres': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M7 13h4M7 17h8"/></svg>,
    'Midjourney': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><circle cx="12" cy="12" r="9"/><circle cx="9" cy="10" r="1.5" fill={color} stroke="none"/><circle cx="15" cy="9" r="1.5" fill={color} stroke="none"/><circle cx="16" cy="14" r="1.5" fill={color} stroke="none"/><circle cx="10" cy="15" r="1.5" fill={color} stroke="none"/></svg>,
    'Stable Diffusion': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>,
    // ── Publication ───────────────────────────────────────────────────────────
    'YouTube Studio, Analytics': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    'Google Looker Studio': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>,
    'Make (ex-Integromat)': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 12h4m2-4.5l-4 4.5 4 4.5"/></svg>,
    'MorningFame': <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><path d="M12 3v1M4.2 4.2l.7.7M3 12h1M4.2 19.8l.7-.7M12 21v-1M19.8 19.8l-.7-.7M21 12h-1M19.8 4.2l-.7.7"/><circle cx="12" cy="12" r="4"/></svg>,
  };
  return icons[name] || <svg viewBox="0 0 24 24" fill="none" stroke={color} {...s}><circle cx="12" cy="12" r="9"/></svg>;
};

// ─── ABOUT VIEW ───────────────────────────────────────────────────────────────
function AProposView({ theme, openFeedback, isMobile }) {
  return (
    <div style={{ maxWidth: '740px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: theme.textMuted, marginBottom: '28px' }}>
        <span>Studio</span><ChevronRight size={12} /><span style={{ color: theme.text }}>À propos</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '36px' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#C9A961', color: '#1B1B23', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 400, flexShrink: 0 }}>BV</div>
        <div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: '32px', fontWeight: 400, letterSpacing: '-0.5px', lineHeight: 1.1, color: theme.text, marginBottom: '6px', fontVariantLigatures: 'none' }}>Bruno VINET</h1>
          <p style={{ fontSize: '14px', color: theme.textMuted, margin: '0 0 4px' }}>Étudiant en Master · ESP Lyon</p>
          <p style={{ fontSize: '13px', color: theme.textMuted, margin: 0, fontStyle: 'italic' }}>Spécialisation innovation, communication et marketing digital</p>
        </div>
      </div>
      <div style={{ marginBottom: '32px', paddingBottom: '32px', borderBottom: `1px solid ${theme.border}` }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 400, color: theme.text, marginBottom: '14px', fontVariantLigatures: 'none' }}>Contexte du livre blanc</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, color: theme.text, margin: '0 0 14px' }}>Ce livre blanc a été produit dans le cadre du Master à l'École Supérieure de la Publicité de Lyon, en clôture d'un cursus spécialisé en innovation, communication et marketing digital.</p>
        <p style={{ fontSize: '15px', lineHeight: 1.75, color: theme.text, margin: '0 0 14px' }}>La question de départ est simple : comment les équipes de communication peuvent-elles produire du contenu YouTube à cadence soutenue sans sacrifier leur authenticité de marque ? Une tension structurelle que les outils d'IA rendent à la fois plus aiguë et, paradoxalement, plus soluble.</p>
        <p style={{ fontSize: '15px', lineHeight: 1.75, color: theme.text, margin: 0 }}>Le livre blanc couvre l'environnement YouTube en 2026, la science de l'attention et de la rétention, les outils d'automatisation disponibles, le facteur humain irréductible, et une méthodologie hybride opérationnelle. 54 sources académiques, sectorielles et institutionnelles sont mobilisées.</p>
      </div>
      <div style={{ marginBottom: '32px', paddingBottom: '32px', borderBottom: `1px solid ${theme.border}` }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 400, color: theme.text, marginBottom: '14px', fontVariantLigatures: 'none' }}>Méthodologie</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.75, color: theme.text, margin: '0 0 20px' }}>La recherche documentaire s'appuie sur trois types de sources : les données officielles des plateformes (YouTube, Nielsen, Médiamétrie), les rapports sectoriels (HubSpot, Wyzowl, Vidyard, Edelman), et la littérature académique en psychologie cognitive, comportement du consommateur et sciences de la communication.</p>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '10px' }}>
          {[
            { value: '54', label: 'Sources citées', color: '#7F77DD' },
            { value: '7', label: 'Chapitres', color: '#E63946' },
            { value: '32', label: 'Outils analysés', color: '#C9A961' },
          ].map(stat => (
            <div key={stat.label} style={{ background: theme.bgSecondary, borderRadius: '10px', padding: '16px', textAlign: 'center', border: `1px solid ${theme.border}` }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: '28px', fontWeight: 400, color: stat.color, lineHeight: 1, marginBottom: '4px', fontVariantLigatures: 'none' }}>{stat.value}</div>
              <div style={{ fontSize: '12px', color: theme.textMuted }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginBottom: '12px' }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 400, color: theme.text, marginBottom: '14px', fontVariantLigatures: 'none' }}>Contact</h2>
        <p style={{ fontSize: '15px', lineHeight: 1.7, color: theme.textMuted, margin: '0 0 18px' }}>Pour toute question sur le livre blanc, une suggestion, ou simplement pour échanger sur le sujet.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/bruno-vinet/" target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '13px 16px', background: theme.bgElevated, border: `1px solid ${theme.border}`, borderRadius: '10px', textDecoration: 'none', transition: 'border-color 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#0A66C2'}
            onMouseLeave={e => e.currentTarget.style.borderColor = theme.border}>
            <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: '#0A66C215', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Linkedin size={16} style={{ color: '#0A66C2' }} /></div>
            <div style={{ flex: 1 }}><div style={{ fontSize: '12px', color: theme.textMuted, marginBottom: '1px' }}>LinkedIn</div><div style={{ fontSize: '14px', color: theme.text }}>bruno-vinet</div></div>
            <ChevronRight size={13} style={{ color: theme.textMuted, flexShrink: 0 }} />
          </a>

          {/* Email — ouvre le formulaire de retour */}
          <button onClick={() => openFeedback && openFeedback()}
            style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '13px 16px', background: theme.bgElevated, border: `1px solid ${theme.border}`, borderRadius: '10px', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit', width: '100%', transition: 'border-color 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = theme.accent}
            onMouseLeave={e => e.currentTarget.style.borderColor = theme.border}>
            <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: theme.accent + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Mail size={16} style={{ color: theme.accent }} /></div>
            <div style={{ flex: 1 }}><div style={{ fontSize: '12px', color: theme.textMuted, marginBottom: '1px' }}>Email</div><div style={{ fontSize: '14px', color: theme.text }}>bruno.vinet11@gmail.com</div></div>
            <ChevronRight size={13} style={{ color: theme.textMuted, flexShrink: 0 }} />
          </button>

          {/* YouTube */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '13px 16px', background: theme.bgElevated, border: `1px solid ${theme.border}`, borderRadius: '10px', opacity: 0.6 }}>
            <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: '#E6394615', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Youtube size={16} style={{ color: '#E63946' }} /></div>
            <div style={{ flex: 1 }}><div style={{ fontSize: '12px', color: theme.textMuted, marginBottom: '1px' }}>Chaîne YouTube</div><div style={{ fontSize: '14px', color: theme.textMuted, fontStyle: 'italic' }}>À venir</div></div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '36px', padding: '16px 20px', background: theme.bgSecondary, borderRadius: '0 10px 10px 0', borderLeft: `3px solid ${theme.ocre}` }}>
        <p style={{ fontSize: '14px', lineHeight: 1.65, color: theme.text, margin: 0 }}>Merci à Michel Beck pour son accompagnement tout au long de ce projet.</p>
      </div>
    </div>
  );
}

// ─── ACCUEIL VIEW ─────────────────────────────────────────────────────────────
function AccueilView({ theme, darkMode, readChapters, pinnedChapters, setActiveSection, setReadingChapter, markRead, isMobile, onOpenResume }) {
  const lastRead = readChapters.length > 0 ? CHAPTERS[readChapters[readChapters.length - 1]] : null;
  const totalTools = WORKFLOW_PHASES.reduce((s, p) => s + p.tools.length, 0);

  const navCards = [
    { id: 'chapitres', icon: PlayCircle, color: theme.accent, title: 'Chapitres', sub: '7 chapitres, introduction à conclusion', badge: readChapters.length > 0 ? `${readChapters.length}/7 lus` : null },
    { id: 'outils', icon: Wrench, color: theme.ocre, title: 'Boîte à outils', sub: `${totalTools} outils en 6 phases de production` },
    { id: 'sources', icon: BookOpen, color: '#7F77DD', title: 'Sources', sub: '54 références classées et filtrables' },
    { id: 'calculateur', icon: BarChart2, color: '#5C7F6B', title: 'Calculateur ROI', sub: 'Estimez la valeur libérée par votre stack IA' },
    { id: 'bvd', icon: Zap, color: '#E63946', title: 'Brand Voice Doc.', sub: 'Construisez et exportez votre BVD en 7 étapes' },
  ];

  return (
    <div style={{ maxWidth: '860px', margin: '0 auto' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: '40px', fontWeight: 400, letterSpacing: '-1px', lineHeight: 1.1, color: theme.text, marginBottom: '10px', fontVariantLigatures: 'none' }}>Automatisation & Authenticité.</h1>
        <p style={{ fontSize: '16px', color: theme.textMuted, lineHeight: 1.65, maxWidth: '760px', margin: '0 0 6px', textWrap: 'balance' }}>Un livre blanc sur la production vidéo YouTube en 2026. Comment automatiser sans sacrifier l'identité de marque ? Comment produire à cadence soutenue sans perdre l'âme du contenu ?</p>
        <p style={{ fontSize: '13px', color: theme.textMuted, margin: 0 }}>Bruno VINET, ESP Lyon, mai 2026.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', marginBottom: '32px' }}>
        {navCards.map(card => (
          <div key={card.id} onClick={() => setActiveSection(card.id)} style={{ background: theme.bgElevated, border: `1px solid ${theme.border}`, borderRadius: '12px', padding: '18px', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '10px', transition: 'border-color 0.15s, transform 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = card.color; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = theme.border; e.currentTarget.style.transform = 'translateY(0)'; }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <card.icon size={18} style={{ color: card.color }} />
              {card.badge && <span style={{ fontSize: '10px', fontWeight: 600, color: card.color, background: card.color + '18', padding: '2px 8px', borderRadius: '999px' }}>{card.badge}</span>}
            </div>
            <div>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: '15px', fontWeight: 400, color: theme.text, marginBottom: '3px', fontVariantLigatures: 'none' }}>{card.title}</div>
              <div style={{ fontSize: '12px', color: theme.textMuted, lineHeight: 1.4 }}>{card.sub}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ background: theme.bgSecondary, border: `1px solid ${theme.border}`, borderRadius: '12px', padding: '20px 22px', marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <span style={{ fontSize: '13px', fontWeight: 500, color: theme.text }}>Progression de lecture</span>
          <span style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', color: theme.accent, fontVariantLigatures: 'none' }}>{readChapters.length}<span style={{ fontSize: '13px', color: theme.textMuted, fontFamily: 'inherit' }}> / 7</span></span>
        </div>
        <div style={{ display: 'flex', gap: '4px', marginBottom: '14px' }}>
          {CHAPTERS.map(c => {
            const isRead = readChapters.includes(c.id);
            return <div key={c.id} onClick={() => setActiveSection('chapitres')} style={{ flex: 1, height: '6px', borderRadius: '999px', background: isRead ? c.color : theme.border, cursor: 'pointer', transition: 'background 0.2s' }} title={c.title} />;
          })}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {lastRead ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: lastRead.color }} />
              <span style={{ fontSize: '12px', color: theme.textMuted }}>Dernier lu : <span style={{ color: theme.text, fontWeight: 500 }}>{lastRead.title}</span></span>
            </div>
          ) : <span style={{ fontSize: '12px', color: theme.textMuted, fontStyle: 'italic' }}>Aucun chapitre lu pour l'instant.</span>}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {onOpenResume && (
              <button onClick={onOpenResume} style={{ fontSize: '12px', color: '#C9A961', background: 'transparent', border: `1px solid #C9A96133`, borderRadius: '6px', padding: '5px 12px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '5px' }}
                onMouseEnter={e => e.currentTarget.style.background = '#C9A96112'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <ArrowLeft size={11} style={{ transform: 'rotate(270deg)' }} /> Résumé PDF
              </button>
            )}
            <button onClick={() => setActiveSection('chapitres')} style={{ fontSize: '12px', color: theme.accent, background: 'transparent', border: `1px solid ${theme.accent}33`, borderRadius: '6px', padding: '5px 12px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500 }}
              onMouseEnter={e => e.currentTarget.style.background = theme.accent + '12'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
              {readChapters.length === 0 ? 'Commencer' : 'Continuer'} <ChevronRight size={11} style={{ display: 'inline', verticalAlign: 'middle' }} />
            </button>
          </div>
        </div>
      </div>
      {pinnedChapters.length > 0 && (
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '13px' }}>
            <Bookmark size={13} style={{ color: theme.ocre }} fill={theme.ocre} />
            <span style={{ fontSize: '13px', fontWeight: 500, color: theme.text }}>Épinglés</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '10px' }}>
            {CHAPTERS.filter(c => pinnedChapters.includes(c.id)).map(c => (
              <div key={c.id} onClick={() => { setActiveSection('chapitres'); setReadingChapter(c); markRead(c.id); }} style={{ background: theme.bgElevated, border: `1px solid ${theme.border}`, borderRadius: '10px', padding: '14px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', transition: 'border-color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = c.color}
                onMouseLeave={e => e.currentTarget.style.borderColor = theme.border}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: c.color, flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "'Fraunces', serif", fontSize: '13px', color: theme.text, fontVariantLigatures: 'none', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.title}</div>
                  <div style={{ fontSize: '11px', color: theme.textMuted }}>{c.num}</div>
                </div>
                <ChevronRight size={13} style={{ color: theme.textMuted, flexShrink: 0 }} />
              </div>
            ))}
          </div>
        </div>
      )}
      <div style={{ padding: '18px 22px', borderLeft: `3px solid ${theme.accent}`, background: theme.bgSecondary, borderRadius: '0 10px 10px 0' }}>
        <p style={{ fontFamily: "'Caveat', cursive", fontSize: '20px', lineHeight: 1.45, color: theme.text, margin: '0 0 5px' }}>« L'automatisation est l'outil qui permet de tenir le rythme. L'authenticité est ce qui donne une raison d'engager. »</p>
        <div style={{ fontSize: '11px', color: theme.textMuted }}>Livre blanc Projet Turing Studio, 2026</div>
      </div>
    </div>
  );
}

// ─── SOURCES VIEW ─────────────────────────────────────────────────────────────
function SourcesView({ theme }) {
  const [activeType, setActiveType] = useState('Tous');
  const filtered = SOURCES.map(group => ({ ...group, items: group.items.filter(item => activeType === 'Tous' || item.type === activeType) })).filter(group => group.items.length > 0);
  const totalSources = SOURCES.reduce((s, g) => s + g.items.length, 0);
  const filteredCount = filtered.reduce((s, g) => s + g.items.length, 0);
  const typeColors = { 'Étude académique': '#7F77DD', 'Rapport sectoriel': '#C9A961', 'Données plateforme': '#E63946', 'Réglementation': '#5C7F6B' };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: theme.textMuted, marginBottom: '12px' }}>
          <span>Studio</span><ChevronRight size={12} /><span style={{ color: theme.text }}>Sources & données</span>
        </div>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: '38px', fontWeight: 400, letterSpacing: '-1px', marginBottom: '6px', lineHeight: 1.1, fontVariantLigatures: 'none' }}>Sources & données.</h1>
        <p style={{ fontSize: '15px', color: theme.textMuted, margin: 0 }}>{filteredCount} source{filteredCount > 1 ? 's' : ''} sur {totalSources}, toutes les références citées dans le livre blanc.</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '32px' }}>
        {SOURCE_TYPES.map(type => {
          const isActive = activeType === type;
          return <button key={type} onClick={() => setActiveType(type)} style={{ padding: '6px 14px', background: isActive ? (typeColors[type] || theme.accent) : theme.bgSecondary, border: `1px solid ${isActive ? (typeColors[type] || theme.accent) : theme.border}`, borderRadius: '999px', fontSize: '12px', fontWeight: isActive ? 600 : 400, color: isActive ? '#FFFFFF' : theme.textMuted, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s' }}>{type}</button>;
        })}
      </div>
      {filtered.length === 0 ? (
        <div style={{ padding: '48px 24px', textAlign: 'center', color: theme.textMuted, fontSize: '14px', fontStyle: 'italic' }}>Aucune source pour cette combinaison de filtres.</div>
      ) : filtered.map(group => (
        <div key={group.chapterId} style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: group.chapterColor, flexShrink: 0 }} />
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: '18px', fontWeight: 400, color: theme.text, fontVariantLigatures: 'none' }}>{group.chapter}</span>
            <span style={{ fontSize: '11px', color: theme.textMuted, padding: '2px 8px', background: theme.bgSecondary, border: `1px solid ${theme.border}`, borderRadius: '999px' }}>{group.items.length}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '20px', borderLeft: `2px solid ${group.chapterColor}33` }}>
            {group.items.map((item, i) => {
              const CitationButton = () => {
                const [copied, setCopied] = useState(false);
                return (
                  <button onClick={() => {
                    const citation = `${item.author}. ${item.title}. ${item.date}. ${item.stat}`;
                    navigator.clipboard.writeText(citation).catch(() => {});
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }} style={{ flexShrink: 0, background: 'transparent', border: 'none', cursor: 'pointer', color: copied ? '#5C7F6B' : theme.textMuted, padding: '4px 7px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', fontFamily: 'inherit', fontWeight: copied ? 600 : 400, transition: 'color 0.15s' }}
                    title="Copier la référence">
                    {copied ? <><Check size={11} /> Copié</> : <><Copy size={11} /> Citer</>}
                  </button>
                );
              };
              return (
              <div key={i} style={{ background: theme.bgElevated, border: `1px solid ${theme.border}`, borderRadius: '10px', padding: '14px 16px', transition: 'border-color 0.15s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = group.chapterColor + '88'}
                onMouseLeave={e => e.currentTarget.style.borderColor = theme.border}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '6px' }}>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: '9px', fontWeight: 700, color: typeColors[item.type] || theme.textMuted, textTransform: 'uppercase', letterSpacing: '0.7px', display: 'inline-block', marginBottom: '4px' }}>{item.type}</span>
                    <div style={{ fontFamily: "'Fraunces', serif", fontSize: '14px', fontWeight: 400, color: theme.text, lineHeight: 1.3, fontVariantLigatures: 'none' }}>{item.title}</div>
                    <div style={{ fontSize: '12px', color: theme.textMuted, marginTop: '2px' }}>{item.author}, {item.date}</div>
                  </div>
                  <CitationButton />
                </div>
                <div style={{ padding: '8px 10px', background: theme.bgSecondary, borderRadius: '6px', borderLeft: `2px solid ${typeColors[item.type] || theme.textMuted}55` }}>
                  <p style={{ fontSize: '12px', lineHeight: 1.55, color: theme.text, margin: 0, fontStyle: 'italic' }}>{item.stat}</p>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── TOOL CARD ────────────────────────────────────────────────────────────────
function ToolCard({ tool, phaseColor, theme }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ background: theme.bgElevated, border: `1px solid ${open ? phaseColor : theme.border}`, borderRadius: '12px', overflow: 'hidden', transition: 'border-color 0.2s' }}
      onMouseEnter={e => { if (!open) e.currentTarget.style.borderColor = phaseColor + '66'; }}
      onMouseLeave={e => { if (!open) e.currentTarget.style.borderColor = theme.border; }}>
      <div onClick={() => setOpen(!open)} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '13px 16px', cursor: 'pointer' }}>
        <div style={{ width: '36px', height: '36px', borderRadius: '9px', background: phaseColor + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <ToolIcon name={tool.name} color={phaseColor} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: '14px', fontWeight: 400, color: theme.text, fontVariantLigatures: 'none', lineHeight: 1.3 }}>{tool.name}</div>
          {!open && <div style={{ fontSize: '12px', color: theme.textMuted, marginTop: '2px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '420px' }}>{tool.description.substring(0, 72)}...</div>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <span style={{ fontSize: '11px', color: phaseColor, fontWeight: 600, background: phaseColor + '12', padding: '3px 9px', borderRadius: '999px', whiteSpace: 'nowrap' }}>{tool.price}</span>
          <ChevronRight size={13} style={{ color: theme.textMuted, transition: 'transform 0.2s', transform: open ? 'rotate(90deg)' : 'rotate(0deg)', flexShrink: 0 }} />
        </div>
      </div>
      {open && (
        <div style={{ padding: '0 16px 14px', borderTop: `1px solid ${theme.border}` }}>
          <p style={{ fontSize: '13px', lineHeight: 1.7, color: theme.text, margin: '12px 0 11px' }}>{tool.description}</p>
          <div style={{ padding: '9px 12px', background: theme.bgSecondary, borderRadius: '7px', borderLeft: `3px solid ${phaseColor}`, marginBottom: '11px' }}>
            <div style={{ fontSize: '9px', fontWeight: 700, color: phaseColor, textTransform: 'uppercase', letterSpacing: '0.7px', marginBottom: '3px' }}>Cas d'usage</div>
            <p style={{ fontSize: '12px', lineHeight: 1.6, color: theme.text, margin: 0 }}>{tool.usage}</p>
          </div>
          <a href={tool.link} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: phaseColor, textDecoration: 'none', fontWeight: 500, padding: '5px 11px', border: `1px solid ${phaseColor}33`, borderRadius: '6px', background: phaseColor + '0D' }}
            onMouseEnter={e => e.currentTarget.style.background = phaseColor + '1F'}
            onMouseLeave={e => e.currentTarget.style.background = phaseColor + '0D'}>
            Accéder à l'outil <ExternalLink size={11} />
          </a>
        </div>
      )}
    </div>
  );
}

// ─── TOOLS VIEW ───────────────────────────────────────────────────────────────
function ToolsView({ theme }) {
  const [activePhase, setActivePhase] = useState('ideation');
  const phaseEmojis = {
    ideation: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={16} height={16}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>,
    scripting: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={16} height={16}><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
    montage: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={16} height={16}><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M10 10l5 3-5 3v-6z"/></svg>,
    doublage: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={16} height={16}><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>,
    vseo: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={16} height={16}><circle cx="11" cy="11" r="7"/><path d="M20 20l-3-3"/></svg>,
    publication: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} width={16} height={16}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  };
  const phase = WORKFLOW_PHASES.find(p => p.id === activePhase);
  const totalTools = WORKFLOW_PHASES.reduce((s, p) => s + p.tools.length, 0);
  const currentIndex = WORKFLOW_PHASES.findIndex(p => p.id === activePhase);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: theme.textMuted, marginBottom: '12px' }}>
          <span>Studio</span><ChevronRight size={12} /><span style={{ color: theme.text }}>Boîte à outils</span>
        </div>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: '38px', fontWeight: 400, letterSpacing: '-1px', marginBottom: '6px', lineHeight: 1.1, fontVariantLigatures: 'none' }}>Boîte à outils.</h1>
        <p style={{ fontSize: '15px', color: theme.textMuted, margin: 0 }}>{totalTools} outils organisés par phase du workflow de production.</p>
      </div>

      {/* Nav phases */}
      <div style={{ display: 'flex', gap: '0', marginBottom: '28px', background: theme.bgSecondary, borderRadius: '12px', padding: '4px', border: `1px solid ${theme.border}` }}>
        {WORKFLOW_PHASES.map((p) => {
          const isActive = activePhase === p.id;
          return (
            <button key={p.id} onClick={() => setActivePhase(p.id)} style={{ flex: 1, padding: '8px 4px', background: isActive ? theme.bgElevated : 'transparent', border: 'none', borderRadius: '9px', cursor: 'pointer', fontFamily: 'inherit', fontSize: '11px', fontWeight: isActive ? 600 : 400, color: isActive ? p.color : theme.textMuted, transition: 'all 0.15s', boxShadow: isActive ? '0 1px 4px rgba(0,0,0,0.08)' : 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', position: 'relative' }}>
              <span style={{ color: isActive ? p.color : theme.textMuted, opacity: isActive ? 1 : 0.6 }}>{phaseEmojis[p.id]}</span>
              <span>{p.label}</span>
            </button>
          );
        })}
      </div>

      {/* Description phase */}
      <div style={{ padding: '12px 16px', background: theme.bgSecondary, borderLeft: `3px solid ${phase.color}`, borderRadius: '0 8px 8px 0', marginBottom: '20px' }}>
        <span style={{ fontSize: '11px', fontWeight: 700, color: phase.color, textTransform: 'uppercase', letterSpacing: '0.6px', marginRight: '8px' }}>Phase {currentIndex + 1}/{WORKFLOW_PHASES.length}</span>
        <span style={{ fontSize: '13px', color: theme.text }}>{phase.description}</span>
      </div>

      {/* Outils */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {phase.tools.map((tool) => <ToolCard key={tool.name} tool={tool} phaseColor={phase.color} theme={theme} />)}
      </div>

      {/* Navigation bas */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '36px', gap: '10px' }}>
        {currentIndex > 0 ? (
          <button onClick={() => setActivePhase(WORKFLOW_PHASES[currentIndex - 1].id)}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 16px', background: 'transparent', border: `1px solid ${theme.border}`, borderRadius: '8px', fontSize: '13px', color: theme.textMuted, cursor: 'pointer', fontFamily: 'inherit' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = phase.color}
            onMouseLeave={e => e.currentTarget.style.borderColor = theme.border}>
            <ArrowLeft size={13} /> Phase précédente
          </button>
        ) : <div />}
        {currentIndex < WORKFLOW_PHASES.length - 1 ? (
          <button onClick={() => setActivePhase(WORKFLOW_PHASES[currentIndex + 1].id)}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '9px 16px', background: phase.color, border: 'none', borderRadius: '8px', fontSize: '13px', color: '#FFFFFF', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500 }}>
            Phase suivante <ChevronRight size={13} />
          </button>
        ) : (
          <span style={{ fontFamily: "'Caveat', cursive", fontSize: '16px', color: theme.textMuted, padding: '9px 0', fontStyle: 'italic' }}>Workflow complet.</span>
        )}
      </div>
    </div>
  );
}

// ─── CALCULATEUR ROI ──────────────────────────────────────────────────────────
const ROI_PROFILES = [
  {
    id: 'freelance',
    label: 'Freelance',
    color: '#C9A961',
    defaultHeures: 10,
    defaultTJM: 350,
    defaultStack: 65,
    stackMin: 20, stackMax: 150,
    heuresMin: 2, heuresMax: 30,
    roiRef: 'x4 à x6',
    context: "Stack à 50–80 € / mois · TJM de référence 350 € / jour",
  },
  {
    id: 'equipe',
    label: 'Petite équipe',
    color: '#E63946',
    defaultHeures: 25,
    defaultTJM: 400,
    defaultStack: 200,
    stackMin: 80, stackMax: 400,
    heuresMin: 5, heuresMax: 60,
    roiRef: 'x5 à x9',
    context: "Stack à 150–250 € / mois · 2 à 5 personnes",
  },
  {
    id: 'departement',
    label: 'Département',
    color: '#7F77DD',
    defaultHeures: 80,
    defaultTJM: 600,
    defaultStack: 600,
    stackMin: 200, stackMax: 1500,
    heuresMin: 20, heuresMax: 200,
    roiRef: 'x10 à x20',
    context: "Stack à 400–800 € / mois · Direction de la communication",
  },
];

const fmtEur = (n) => n.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });

function CustomSlider({ value, onChange, min, max, step = 1, color }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ position: 'relative', height: '20px', display: 'flex', alignItems: 'center' }}>
      <div style={{ position: 'absolute', left: 0, right: 0, height: '4px', background: '#FFFFFF', borderRadius: '999px', border: '1px solid #E0DACA' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${pct}%`, background: color, borderRadius: '999px' }} />
        <div style={{ position: 'absolute', top: '50%', left: `${pct}%`, transform: 'translate(-50%, -50%)', width: '16px', height: '16px', borderRadius: '50%', background: color, boxShadow: '0 1px 4px rgba(0,0,0,0.18)', pointerEvents: 'none' }} />
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(Number(e.target.value))}
        style={{ position: 'absolute', left: 0, width: '100%', opacity: 0, cursor: 'pointer', margin: 0, height: '20px', zIndex: 2 }} />
    </div>
  );
}

function SliderInput({ label, value, onChange, min, max, unit, step = 1, hint, color, theme }) {
  return (
    <div style={{ marginBottom: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px' }}>
        <span style={{ fontSize: '13px', fontWeight: 500, color: theme.text }}>{label}</span>
        <span style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', color, fontVariantLigatures: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
          {unit === '€' ? fmtEur(value) : `${value} ${unit}`}
        </span>
      </div>
      <CustomSlider value={value} onChange={onChange} min={min} max={max} step={step} color={color} />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
        <span style={{ fontSize: '11px', color: theme.textMuted }}>{unit === '€' ? fmtEur(min) : `${min} ${unit}`}</span>
        <span style={{ fontSize: '11px', color: theme.textMuted }}>{unit === '€' ? fmtEur(max) : `${max} ${unit}`}</span>
      </div>
      {hint && <p style={{ fontSize: '11px', color: theme.textMuted, marginTop: '5px', fontStyle: 'italic' }}>{hint}</p>}
    </div>
  );
}

function MetricCard({ label, value, sub, highlight, color, theme }) {
  return (
    <div style={{ background: highlight ? color + '12' : theme.bgElevated, border: `1px solid ${highlight ? color + '44' : theme.border}`, borderRadius: '12px', padding: '18px 20px' }}>
      <div style={{ fontSize: '11px', color: highlight ? color : theme.textMuted, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '8px' }}>{label}</div>
      <div style={{ fontFamily: "'Fraunces', serif", fontSize: '30px', fontWeight: 400, color: highlight ? color : theme.text, lineHeight: 1, fontVariantLigatures: 'none' }}>{value}</div>
      {sub && <div style={{ fontSize: '12px', color: theme.textMuted, marginTop: '5px' }}>{sub}</div>}
    </div>
  );
}

function CalculateurView({ theme, isMobile }) {
  const [profileId, setProfileId] = useState('freelance');
  const [heures, setHeures] = useState(10);
  const [tjm, setTjm] = useState(350);
  const [stack, setStack] = useState(65);

  const profile = ROI_PROFILES.find(p => p.id === profileId);

  const handleProfile = (id) => {
    const p = ROI_PROFILES.find(r => r.id === id);
    setProfileId(id);
    setHeures(p.defaultHeures);
    setTjm(p.defaultTJM);
    setStack(p.defaultStack);
  };

  const heuresMois = heures * 4.33;
  const heuresLiberees = Math.round(heuresMois * 0.34);
  const tauxHoraire = tjm / 8;
  const valeurLiberee = Math.round(heuresLiberees * tauxHoraire);
  const roi = stack > 0 ? (valeurLiberee / stack) : 0;
  const gainAnnuel = valeurLiberee * 12;

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto' }}>
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: theme.textMuted, marginBottom: '12px' }}>
          <span>Studio</span><ChevronRight size={12} /><span style={{ color: theme.text }}>Calculateur ROI</span>
        </div>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: '38px', fontWeight: 400, letterSpacing: '-1px', marginBottom: '6px', lineHeight: 1.1, fontVariantLigatures: 'none' }}>Calculateur ROI.</h1>
        <p style={{ fontSize: '15px', color: theme.textMuted, margin: 0 }}>Estimez la valeur libérée par votre stack d'automatisation YouTube selon votre profil.</p>
      </div>

      {/* Profile selector */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '32px', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
        {ROI_PROFILES.map(p => (
          <button key={p.id} onClick={() => handleProfile(p.id)} style={{ flex: 1, padding: '12px 8px', background: profileId === p.id ? p.color : theme.bgSecondary, border: `1px solid ${profileId === p.id ? p.color : theme.border}`, borderRadius: '10px', cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}
            onMouseEnter={e => { if (profileId !== p.id) e.currentTarget.style.borderColor = p.color; }}
            onMouseLeave={e => { if (profileId !== p.id) e.currentTarget.style.borderColor = theme.border; }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: profileId === p.id ? '#FFFFFF' : theme.text }}>{p.label}</span>
            <span style={{ fontSize: '10px', color: profileId === p.id ? 'rgba(255,255,255,0.75)' : theme.textMuted }}>{p.roiRef}</span>
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '28px', marginBottom: '32px', alignItems: 'start' }}>
        {/* Inputs */}
        <div style={{ background: theme.bgSecondary, borderRadius: '14px', padding: '24px', border: `1px solid ${theme.border}` }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: profile.color, textTransform: 'uppercase', letterSpacing: '0.7px', marginBottom: '20px' }}>Vos paramètres</div>

          <SliderInput
            label="Temps de production vidéo / semaine"
            value={heures} onChange={setHeures}
            min={profile.heuresMin} max={profile.heuresMax} unit="h"
            hint="Recherche, scripting, tournage, montage, publication"
            color={profile.color} theme={theme}
          />
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '10px' }}>
              <span style={{ fontSize: '13px', fontWeight: 500, color: theme.text }}>Taux journalier moyen (TJM)</span>
              <span style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', color: profile.color, fontVariantLigatures: 'none' }}>{fmtEur(tjm)}</span>
            </div>
            <CustomSlider value={tjm} onChange={setTjm} min={150} max={1500} step={25} color={profile.color} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
              <span style={{ fontSize: '11px', color: theme.textMuted }}>150 €</span>
              <span style={{ fontSize: '11px', color: theme.textMuted }}>1 500 €</span>
            </div>
            <p style={{ fontSize: '11px', color: theme.textMuted, marginTop: '5px', fontStyle: 'italic' }}>Référence livre blanc : 350 € / jour (freelance)</p>
          </div>
          <SliderInput
            label="Coût de la stack IA / mois"
            value={stack} onChange={setStack}
            min={profile.stackMin} max={profile.stackMax} unit="€"
            hint={profile.context}
            color={profile.color} theme={theme}
          />
        </div>

        {/* Results */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <MetricCard label="ROI estimé" value={`× ${roi.toFixed(1)}`} sub={`Référence livre blanc : ${profile.roiRef}`} highlight color={profile.color} theme={theme} />
          <MetricCard label="Temps libéré / mois" value={`${heuresLiberees} h`} sub={`Soit ${(heuresLiberees / 8).toFixed(1)} jour${heuresLiberees >= 8 ? 's' : ''} de travail`} color={profile.color} theme={theme} />
          <MetricCard label="Valeur libérée / mois" value={fmtEur(valeurLiberee)} sub={`${fmtEur(gainAnnuel)} / an`} color={profile.color} theme={theme} />
          <MetricCard label="Coût stack / mois" value={fmtEur(stack)} sub={`${fmtEur(stack * 12)} / an`} color={profile.color} theme={theme} />
        </div>
      </div>

      {/* Barre visuelle ROI */}
      <div style={{ background: theme.bgSecondary, border: `1px solid ${theme.border}`, borderRadius: '12px', padding: '20px 24px', marginBottom: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ fontSize: '13px', fontWeight: 500, color: theme.text }}>Valeur libérée vs. coût stack</span>
          <span style={{ fontSize: '12px', color: theme.textMuted }}>Pour 1 € investi → {roi.toFixed(1)} € de valeur créée</span>
        </div>
        <div style={{ position: 'relative', height: '10px', background: theme.bgElevated, borderRadius: '999px', overflow: 'hidden', border: `1px solid ${theme.border}` }}>
          <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${Math.min((valeurLiberee / Math.max(valeurLiberee, stack * 20)) * 100, 100)}%`, background: profile.color, borderRadius: '999px', transition: 'width 0.4s ease' }} />
        </div>
        <div style={{ display: 'flex', gap: '16px', marginTop: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '10px', height: '10px', borderRadius: '2px', background: profile.color }} /><span style={{ fontSize: '11px', color: theme.textMuted }}>Valeur libérée : {fmtEur(valeurLiberee)} / mois</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '10px', height: '10px', borderRadius: '2px', background: theme.bgElevated, border: `1px solid ${theme.border}` }} /><span style={{ fontSize: '11px', color: theme.textMuted }}>Coût stack : {fmtEur(stack)} / mois</span></div>
        </div>
      </div>

      {/* Source + caveat */}
      <div style={{ padding: '14px 18px', background: theme.bgSecondary, borderRadius: '8px', borderLeft: `3px solid ${profile.color}`, marginBottom: '12px' }}>
        <p style={{ fontSize: '12px', color: theme.textMuted, margin: 0, lineHeight: 1.65 }}>
          <strong style={{ color: theme.text }}>Méthodologie :</strong> Gain de 34% sur le cycle de production (Wyzowl, 2025). Taux de conversion temps→valeur calculé sur la base du TJM saisi (1 jour = 8h). Les gains les plus importants se situent sur la recherche (−58%) et le scripting (−61%).
        </p>
      </div>
      <p style={{ fontSize: '11px', color: theme.textMuted, fontStyle: 'italic', margin: 0 }}>Estimation indicative. Les résultats varient selon la complexité des contenus et le niveau de personnalisation conservé.</p>
    </div>
  );
}

// ─── CHECKLIST BVD ────────────────────────────────────────────────────────────
const BVD_SECTIONS = [
  {
    id: 'identite',
    title: "Identité de la chaîne",
    color: '#C9A961',
    description: "Le socle de votre positionnement éditorial.",
    fields: [
      { id: 'nom', label: 'Nom de la chaîne', placeholder: 'Ex. : Turing Studio' },
      { id: 'secteur', label: 'Secteur', placeholder: 'Ex. : Communication digitale, RH, Finance...' },
      { id: 'positionnement', label: 'Positionnement en une phrase', placeholder: 'Ex. : La chaîne qui explique l\'IA aux équipes com non-techniques.' },
    ],
  },
  {
    id: 'audience',
    title: 'Audience cible',
    color: '#E63946',
    description: "Qui regarde, ce qu'ils attendent, ce qu'ils rejettent.",
    fields: [
      { id: 'profil', label: 'Profil type', placeholder: 'Ex. : Directeur communication, 35-50 ans, grandes entreprises françaises' },
      { id: 'niveau', label: 'Niveau de connaissance du sujet', placeholder: 'Ex. : Notions de base en IA, pas de profil technique' },
      { id: 'preoccupation', label: 'Préoccupation principale', placeholder: 'Ex. : Produire plus de contenu sans augmenter les coûts' },
      { id: 'rejet', label: "Ce qu'ils n'aiment pas", placeholder: 'Ex. : Le jargon tech, les promesses sans preuves, les vidéos trop longues' },
    ],
  },
  {
    id: 'ton',
    title: 'Ton & style',
    color: '#5C7F6B',
    description: "La voix reconnaissable de votre chaîne.",
    fields: [
      { id: 'tonGeneral', label: 'Ton général', placeholder: 'Ex. : Direct, pédagogue, sans condescendance' },
      { id: 'registre', label: 'Registre lexical', placeholder: 'Ex. : Professionnel mais accessible, pas d\'acronymes non expliqués' },
      { id: 'posture', label: 'Posture', placeholder: 'Ex. : Praticien qui partage, pas expert qui surplombe' },
      { id: 'rythme', label: 'Rythme des phrases', placeholder: 'Ex. : Courtes et percutantes. Maximum 2 lignes par idée.' },
    ],
  },
  {
    id: 'expressions',
    title: 'Expressions signature',
    color: '#7F77DD',
    description: "Les formules qui vous appartiennent, et celles à bannir.",
    fields: [
      { id: 'signature', label: 'Expressions à utiliser', placeholder: 'Ex. : "Ce qui ne changera pas", "La question de fond", "Concrètement..."' },
      { id: 'bannies', label: 'Expressions à éviter', placeholder: 'Ex. : "Révolution", "Disruptif", "Game-changer", "Simple"' },
    ],
  },
  {
    id: 'sujets',
    title: 'Territoire éditorial',
    color: '#C9A961',
    description: "Les sujets que vous traitez, et ceux que vous laissez aux autres.",
    fields: [
      { id: 'couverts', label: 'Sujets couverts', placeholder: 'Ex. : Automatisation IA, stratégie YouTube, personal branding B2B...' },
      { id: 'exclus', label: 'Sujets exclus', placeholder: 'Ex. : Actualité politique, vie privée des équipes, prises de position partisanes' },
    ],
  },
  {
    id: 'structure',
    title: 'Structure type d\'une vidéo',
    color: '#E63946',
    description: "Le squelette narratif de chaque épisode.",
    fields: [
      { id: 'accroche', label: 'Accroche (0–30s)', placeholder: 'Ex. : Statistique contre-intuitive + promesse explicite' },
      { id: 'corps', label: 'Corps (structure)', placeholder: 'Ex. : 3 parties numérotées, chaque partie ouvre sur une question' },
      { id: 'conclusion', label: 'Conclusion', placeholder: 'Ex. : Synthèse en 3 points + call to action unique' },
    ],
  },
  {
    id: 'references',
    title: 'Références stylistiques',
    color: '#5C7F6B',
    description: "Les chaînes dont vous admirez le ton, et 3 de vos meilleures vidéos.",
    fields: [
      { id: 'externes', label: 'Chaînes externes de référence (ton)', placeholder: 'Ex. : HugoDécrypte, Nota Bene, Underscore_' },
      { id: 'propres', label: 'Vos 3 meilleures vidéos', placeholder: 'Ex. : [URL 1], [URL 2], [URL 3]' },
    ],
  },
];

function BVDView({ theme }) {
  const [values, setValues] = useState({});
  const [openSections, setOpenSections] = useState({ identite: true });
  const [copied, setCopied] = useState(false);
  const [showPdf, setShowPdf] = useState(false);

  const setValue = (fieldId, val) => setValues(prev => ({ ...prev, [fieldId]: val }));
  const toggleSection = (id) => setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));

  const totalFields = BVD_SECTIONS.reduce((s, sec) => s + sec.fields.length, 0);
  const filledFields = Object.values(values).filter(v => v && v.trim().length > 0).length;
  const pct = Math.round((filledFields / totalFields) * 100);

  const buildLines = () => {
    const lines = ['BRAND VOICE DOCUMENT · Projet Turing Studio', '='.repeat(48), ''];
    BVD_SECTIONS.forEach(sec => {
      lines.push(sec.title.toUpperCase());
      lines.push('-'.repeat(32));
      sec.fields.forEach(f => {
        const val = values[f.id];
        lines.push(`${f.label} : ${val && val.trim() ? val.trim() : '(non renseigné)'}`);
      });
      lines.push('');
    });
    lines.push('Source : Livre blanc "Automatisation & Authenticité YouTube" · Bruno VINET, mai 2026.');
    return lines.join('\n');
  };

  const exportBVD = () => {
    const text = buildLines();
    try {
      navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div style={{ maxWidth: '760px', margin: '0 auto' }}>

      {/* Modal aperçu PDF */}
      {showPdf && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(27,27,35,0.72)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
          <div style={{ background: '#FFFFFF', borderRadius: '16px', width: '100%', maxWidth: '680px', maxHeight: '85vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 24px 64px rgba(0,0,0,0.22)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 22px', borderBottom: '1px solid #E0DACA' }}>
              <span style={{ fontFamily: 'Georgia, serif', fontSize: '16px', color: '#1B1B23' }}>Brand Voice Document</span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button onClick={() => { const el = document.getElementById('bvd-print-area'); const w = window.open('', '', 'width=800,height=900'); w.document.write(`<html><head><title>BVD</title><style>body{font-family:sans-serif;padding:32px;color:#1B1B23;}h2{font-size:13px;text-transform:uppercase;letter-spacing:.5px;margin:20px 0 6px;}p{font-size:13px;margin:0 0 4px;color:#444;}label{font-size:11px;color:#888;}div.val{padding:6px 10px;background:#F5F1E8;border-radius:4px;font-size:13px;margin-bottom:8px;}@media print{button{display:none}}</style></head><body>${el.innerHTML}<script>window.print()<\/script></body></html>`); w.document.close(); }} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 14px', background: '#E63946', color: '#FFF', border: 'none', borderRadius: '8px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
                  Imprimer / Enregistrer PDF
                </button>
                <button onClick={() => setShowPdf(false)} style={{ background: 'transparent', border: '1px solid #E0DACA', borderRadius: '8px', padding: '7px 12px', cursor: 'pointer', fontSize: '12px', color: '#6B6B78', fontFamily: 'inherit' }}>Fermer</button>
              </div>
            </div>
            <div id="bvd-print-area" style={{ overflowY: 'auto', padding: '28px 32px' }}>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: '22px', color: '#1B1B23', marginBottom: '4px' }}>Brand Voice Document</div>
              <div style={{ fontSize: '12px', color: '#9A9AA8', marginBottom: '28px' }}>Projet Turing Studio · Bruno VINET · mai 2026</div>
              {BVD_SECTIONS.map((sec, si) => (
                <div key={sec.id} style={{ marginBottom: '22px', paddingBottom: '22px', borderBottom: si < BVD_SECTIONS.length - 1 ? '1px solid #E0DACA' : 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: sec.color + '22', border: `1.5px solid ${sec.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: sec.color, fontFamily: 'Georgia, serif', flexShrink: 0 }}>{si + 1}</div>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#1B1B23', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{sec.title}</span>
                  </div>
                  {sec.fields.map(f => {
                    const val = values[f.id];
                    return (
                      <div key={f.id} style={{ marginBottom: '8px', paddingLeft: '28px' }}>
                        <div style={{ fontSize: '10px', color: '#9A9AA8', marginBottom: '2px' }}>{f.label}</div>
                        <div style={{ fontSize: '13px', color: val && val.trim() ? '#1B1B23' : '#C0BFB8', padding: '6px 10px', background: '#F5F1E8', borderRadius: '5px', borderLeft: `2px solid ${sec.color}`, fontStyle: val && val.trim() ? 'normal' : 'italic' }}>
                          {val && val.trim() ? val.trim() : 'Non renseigné'}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: theme.textMuted, marginBottom: '12px' }}>
          <span>Studio</span><ChevronRight size={12} /><span style={{ color: theme.text }}>Checklist BVD</span>
        </div>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: '38px', fontWeight: 400, letterSpacing: '-1px', marginBottom: '6px', lineHeight: 1.1, fontVariantLigatures: 'none' }}>Brand Voice Document.</h1>
        <p style={{ fontSize: '15px', color: theme.textMuted, margin: 0 }}>Les 7 composantes du BVD. Remplissez, copiez, collez dans vos prompts.</p>
      </div>

      {/* Progression */}
      <div style={{ background: theme.bgSecondary, border: `1px solid ${theme.border}`, borderRadius: '12px', padding: '16px 20px', marginBottom: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '13px', fontWeight: 500, color: theme.text }}>Complétion</span>
            <span style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', color: '#5C7F6B', fontVariantLigatures: 'none' }}>{pct}%</span>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={() => setShowPdf(true)} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 12px', background: theme.bgElevated, color: theme.text, border: `1px solid ${theme.border}`, borderRadius: '8px', fontSize: '12px', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit' }}>
              <ArrowLeft size={13} style={{ transform: 'rotate(270deg)' }} /> Aperçu PDF
            </button>
            <button onClick={exportBVD} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 14px', background: copied ? '#5C7F6B' : theme.accent, color: '#FFF', border: 'none', borderRadius: '8px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', transition: 'background 0.2s' }}>
              {copied ? <><Check size={13} /> Copié !</> : <><Copy size={13} /> Copier le BVD</>}
            </button>
          </div>
        </div>
        <div style={{ height: '6px', background: theme.border, borderRadius: '999px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${pct}%`, background: '#5C7F6B', borderRadius: '999px', transition: 'width 0.3s ease' }} />
        </div>
        <p style={{ fontSize: '11px', color: theme.textMuted, margin: '7px 0 0', fontStyle: 'italic' }}>
          {filledFields} / {totalFields} champs renseignés.
        </p>
      </div>

      {/* Sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {BVD_SECTIONS.map((sec, si) => {
          const isOpen = openSections[sec.id];
          const secFilled = sec.fields.filter(f => values[f.id] && values[f.id].trim()).length;
          return (
            <div key={sec.id} style={{ background: theme.bgElevated, border: `1px solid ${isOpen ? sec.color : theme.border}`, borderRadius: '12px', overflow: 'hidden', transition: 'border-color 0.2s' }}>
              {/* Section header */}
              <button onClick={() => toggleSection(sec.id)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 18px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: sec.color + '18', border: `1.5px solid ${sec.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: "'Fraunces', serif", fontSize: '13px', color: sec.color, fontVariantLigatures: 'none' }}>{si + 1}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: theme.text, marginBottom: '2px' }}>{sec.title}</div>
                  <div style={{ fontSize: '12px', color: theme.textMuted }}>{sec.description}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                  {secFilled > 0 && (
                    <span style={{ fontSize: '11px', color: sec.color, fontWeight: 600, background: sec.color + '15', padding: '2px 8px', borderRadius: '999px' }}>{secFilled}/{sec.fields.length}</span>
                  )}
                  <ChevronRight size={14} style={{ color: theme.textMuted, transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                </div>
              </button>

              {/* Fields */}
              {isOpen && (
                <div style={{ padding: '4px 18px 18px', borderTop: `1px solid ${theme.border}` }}>
                  {sec.fields.map((field, fi) => {
                    const val = values[field.id] || '';
                    const filled = val.trim().length > 0;
                    return (
                      <div key={field.id} style={{ marginTop: '14px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                          <div style={{ width: '16px', height: '16px', borderRadius: '4px', border: `1.5px solid ${filled ? sec.color : theme.border}`, background: filled ? sec.color : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.15s' }}>
                            {filled && <Check size={10} color="#FFF" strokeWidth={3} />}
                          </div>
                          <label style={{ fontSize: '13px', fontWeight: 500, color: theme.text }}>{field.label}</label>
                        </div>
                        <textarea
                          value={val}
                          onChange={e => setValue(field.id, e.target.value)}
                          placeholder={field.placeholder}
                          rows={2}
                          style={{ width: '100%', padding: '9px 12px', background: theme.bgSecondary, border: `1px solid ${filled ? sec.color + '66' : theme.border}`, borderRadius: '8px', fontSize: '13px', lineHeight: 1.6, color: theme.text, fontFamily: 'inherit', resize: 'vertical', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.15s' }}
                          onFocus={e => e.target.style.borderColor = sec.color}
                          onBlur={e => e.target.style.borderColor = filled ? sec.color + '66' : theme.border}
                        />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Aide */}
      <div style={{ marginTop: '28px', padding: '14px 18px', background: theme.bgSecondary, borderRadius: '8px', borderLeft: `3px solid #7F77DD` }}>
        <p style={{ fontSize: '12px', color: theme.textMuted, margin: 0, lineHeight: 1.7 }}>
          <strong style={{ color: theme.text }}>Comment utiliser ce BVD :</strong> Cliquez sur "Exporter le BVD", puis collez le texte dans le champ Instructions système de votre outil IA (Claude Projects, ChatGPT Custom Instructions, Gemini...). Tous vos scripts suivants respecteront automatiquement votre identité de marque.
        </p>
      </div>
    </div>
  );
}

// ─── QR CODE WIDGET ───────────────────────────────────────────────────────────
function QRCodeWidget({ url, size = 140, theme }) {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.innerHTML = '';
    setReady(false);
    setFailed(false);

    const init = () => {
      try {
        new window.QRCode(ref.current, {
          text: url,
          width: size,
          height: size,
          colorDark: '#1B1B23',
          colorLight: '#FFFFFF',
          correctLevel: window.QRCode.CorrectLevel.M,
        });
        setTimeout(() => setReady(true), 100);
      } catch(e) { setFailed(true); }
    };

    if (window.QRCode) { init(); return; }

    const existing = document.querySelector('script[data-qrcode]');
    if (existing) { existing.addEventListener('load', init); return; }

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
    script.setAttribute('data-qrcode', '1');
    script.onload = init;
    script.onerror = () => setFailed(true);
    document.head.appendChild(script);
  }, [url, size]);

  const download = () => {
    const canvas = ref.current?.querySelector('canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'projet-turing-qr.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <div style={{ position: 'relative', flexShrink: 0 }}>
        {!ready && !failed && (
          <div style={{ width: size, height: size, background: theme.bgSecondary, borderRadius: '8px', border: `1px solid ${theme.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '20px', height: '20px', border: `2px solid ${theme.border}`, borderTopColor: '#C9A961', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </div>
        )}
        {failed && (
          <div style={{ width: size, height: size, background: theme.bgSecondary, borderRadius: '8px', border: `1px solid ${theme.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: theme.textMuted, textAlign: 'center', padding: '8px' }}>
            QR code<br />indisponible
          </div>
        )}
        <div ref={ref} style={{ borderRadius: '8px', overflow: 'hidden', display: ready ? 'block' : 'none', border: `1px solid ${theme.border}` }} />
      </div>
      <div>
        <div style={{ fontSize: '13px', fontWeight: 600, color: theme.text, marginBottom: '4px' }}>QR code</div>
        <div style={{ fontSize: '12px', color: theme.textMuted, lineHeight: 1.5, marginBottom: '12px' }}>Scannez pour accéder au studio depuis votre téléphone.</div>
        {ready && (
          <button onClick={download} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 12px', background: '#C9A961', color: '#1B1B23', border: 'none', borderRadius: '7px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
            <ArrowLeft size={12} style={{ transform: 'rotate(270deg)' }} /> Télécharger
          </button>
        )}
      </div>
    </div>
  );
}

// ─── RÉSUMÉ PDF ───────────────────────────────────────────────────────────────
function ResumePDFModal({ onClose, theme }) {
  const printResume = () => {
    const toolsHTML = WORKFLOW_PHASES.map(phase => `
      <div style="margin-bottom:16px;">
        <div style="font-size:11px;font-weight:700;color:${phase.color};text-transform:uppercase;letter-spacing:.6px;margin-bottom:6px;">${phase.label}</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;">
          ${phase.tools.map(t => `<span style="font-size:11px;padding:3px 8px;background:#F5F1E8;border-radius:4px;border:1px solid #E0DACA;color:#1B1B23;">${t.name}</span>`).join('')}
        </div>
      </div>`).join('');

    const statsHTML = CHAPTERS.map(c => `
      <tr>
        <td style="padding:8px 12px;font-weight:500;color:#1B1B23;font-size:12px;border-bottom:1px solid #E0DACA;">${c.num} · ${c.title}</td>
        <td style="padding:8px 12px;font-size:12px;font-weight:700;color:${c.color};border-bottom:1px solid #E0DACA;">${c.stat}</td>
        <td style="padding:8px 12px;font-size:11px;color:#6B6B78;border-bottom:1px solid #E0DACA;">${c.statLabel}</td>
      </tr>`).join('');

    const html = `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8">
      <title>Résumé · Automatisation & Authenticité YouTube</title>
      <style>
        *{box-sizing:border-box;margin:0;padding:0;}
        body{font-family:-apple-system,sans-serif;color:#1B1B23;background:#fff;padding:48px;max-width:800px;margin:0 auto;line-height:1.6;}
        h1{font-family:Georgia,serif;font-size:32px;font-weight:400;letter-spacing:-1px;margin-bottom:6px;}
        h2{font-family:Georgia,serif;font-size:18px;font-weight:400;color:#1B1B23;margin:32px 0 14px;padding-bottom:6px;border-bottom:2px solid #C9A961;}
        h3{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#6B6B78;margin:0 0 8px;}
        .meta{font-size:13px;color:#6B6B78;margin-bottom:32px;}
        .abstract{font-size:14px;line-height:1.75;color:#1B1B23;padding:16px 20px;background:#F5F1E8;border-radius:8px;border-left:3px solid #C9A961;margin-bottom:32px;}
        table{width:100%;border-collapse:collapse;font-size:12px;}
        th{padding:8px 12px;text-align:left;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.6px;color:#9A9AA8;background:#F9F7F3;border-bottom:2px solid #E0DACA;}
        .insight{font-size:12px;line-height:1.65;color:#1B1B23;padding:10px 14px;background:#F5F1E8;border-radius:6px;border-left:3px solid #E63946;margin-bottom:8px;font-style:italic;}
        .footer{margin-top:40px;padding-top:16px;border-top:1px solid #E0DACA;font-size:11px;color:#9A9AA8;}
        @media print{body{padding:24px;}.footer{position:fixed;bottom:16px;}}
      </style></head><body>

      <h1>Automatisation & Authenticité YouTube</h1>
      <div class="meta">Bruno VINET · ESP Lyon · Mai 2026 · Livre blanc</div>

      <div class="abstract">
        YouTube est devenu le 2ème moteur de recherche mondial. Pour exister sur la plateforme, les marques font face à une pression de volume incompatible avec les méthodes de production traditionnelles. Ce livre blanc explore comment automatiser intelligemment sans sacrifier l'authenticité de marque — condition première de la fidélisation sur YouTube.
      </div>

      <h2>Chiffres clés par chapitre</h2>
      <table>
        <thead><tr><th>Chapitre</th><th>Stat clé</th><th>Indicateur</th></tr></thead>
        <tbody>${statsHTML}</tbody>
      </table>

      <h2>Insights essentiels</h2>
      ${[
        "70% du temps de visionnage YouTube est généré par les recommandations algorithmiques. La cadence de publication est un signal primaire de l'algorithme.",
        "Les 30 premières secondes d'une vidéo déterminent le taux de rétention global. Une chute supérieure à 40% réduit significativement la distribution algorithmique.",
        "Les workflows intégrant des outils IA réduisent le cycle de production de 34% en moyenne. Les gains sont supérieurs sur la recherche (-58%) et le scripting (-61%).",
        "Les chaînes reposant exclusivement sur des scripts IA ont enregistré une chute de 37% de leur taux d'engagement. L'authenticité reste le facteur de différenciation principal.",
        "L'humain reste décideur sur l'identité, la prise de position et la relation avec l'audience. Ces tâches ne peuvent être déléguées sans risque de perte d'authenticité."
      ].map(i => `<div class="insight">${i}</div>`).join('')}

      <h2>Stack d'outils — ${WORKFLOW_PHASES.reduce((s, p) => s + p.tools.length, 0)} outils en ${WORKFLOW_PHASES.length} phases</h2>
      ${toolsHTML}

      <h2>Méthodologie hybride en 5 étapes</h2>
      ${[
        ['1. Auditer', 'Cartographier le workflow actuel, mesurer le temps par phase, identifier les goulots d\'étranglement réels avant toute automatisation.'],
        ['2. Brand Voice Document', 'Documenter l\'identité de marque en 7 composantes. Sans BVD, chaque prompt repart de zéro. Avec un BVD, chaque script respecte automatiquement votre voix.'],
        ['3. Pipeline hybride', 'Séparer les tâches automatisables (recherche, ébauche, VSEO, Shorts) des tâches humaines (angle, voix, validation, commentaires).'],
        ['4. Contrôle qualité', 'Aucune vidéo en ligne sans validation par une personne externe à la production. Un garant éditorial unique connaît l\'identité de la marque.'],
        ['5. Pilotage par les données', 'Suivre 7 métriques clés, planifier des tests de format trimestriels. Les équipes qui testent régulièrement ont une croissance 2,3x supérieure.'],
      ].map(([t, b]) => `<div style="display:flex;gap:14px;margin-bottom:12px;"><div style="font-size:12px;font-weight:700;color:#C9A961;flex-shrink:0;min-width:120px;">${t}</div><div style="font-size:12px;color:#1B1B23;line-height:1.65;">${b}</div></div>`).join('')}

      <div class="footer">
        Projet Turing Studio · Résumé généré automatiquement · Livre blanc "Automatisation & Authenticité YouTube" · Bruno VINET, mai 2026
      </div>
      <script>window.onload=()=>window.print();<\/script>
    </body></html>`;

    const win = window.open('', '_blank', 'width=900,height=800');
    if (win) { win.document.write(html); win.document.close(); }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(27,27,35,0.72)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', backdropFilter: 'blur(4px)' }}>
      <div style={{ background: theme.bgElevated, borderRadius: '20px', width: '100%', maxWidth: '520px', border: `1px solid ${theme.border}`, boxShadow: '0 24px 64px rgba(0,0,0,0.22)', overflow: 'hidden' }}>
        <div style={{ padding: '32px' }}>
          <div style={{ width: '48px', height: '48px', background: '#C9A961' + '18', border: `1px solid #C9A96144`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
            <ArrowLeft size={20} style={{ color: '#C9A961', transform: 'rotate(270deg)' }} />
          </div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', fontWeight: 400, marginBottom: '8px', fontVariantLigatures: 'none' }}>Résumé du livre blanc</h2>
          <p style={{ fontSize: '13px', color: theme.textMuted, marginBottom: '24px', lineHeight: 1.6 }}>Un document de synthèse prêt à imprimer ou enregistrer en PDF. Contient les chiffres clés, les 5 insights essentiels, la stack complète des 32 outils et la méthodologie en 5 étapes.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
            {[
              { label: 'Chiffres clés', sub: '7 statistiques, une par chapitre' },
              { label: 'Insights essentiels', sub: '5 points de synthèse actionnable' },
              { label: 'Stack complète', sub: `${WORKFLOW_PHASES.reduce((s, p) => s + p.tools.length, 0)} outils en ${WORKFLOW_PHASES.length} phases` },
              { label: 'Méthodologie', sub: 'Pipeline hybride en 5 étapes' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9A961', flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: theme.text, fontWeight: 500 }}>{item.label}</span>
                <span style={{ fontSize: '12px', color: theme.textMuted }}>{item.sub}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={onClose} style={{ flex: 1, padding: '11px', background: 'transparent', border: `1px solid ${theme.border}`, borderRadius: '10px', fontSize: '13px', color: theme.textMuted, cursor: 'pointer', fontFamily: 'inherit' }}>Annuler</button>
            <button onClick={printResume} style={{ flex: 2, padding: '11px', background: '#C9A961', border: 'none', borderRadius: '10px', fontSize: '13px', fontWeight: 600, color: '#1B1B23', cursor: 'pointer', fontFamily: 'inherit' }}>
              Générer le résumé PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── GUIDE ONBOARDING ─────────────────────────────────────────────────────────
const GUIDE_STEPS = [
  {
    id: 0,
    label: 'Bienvenue',
    color: '#C9A961',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" width={64} height={64}>
        <circle cx="32" cy="32" r="30" fill="#C9A96118" stroke="#C9A961" strokeWidth="1.5"/>
        <text x="32" y="40" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="26" fill="#C9A961">T</text>
      </svg>
    ),
    title: 'Turing Studio',
    body: "Un espace de lecture interactif construit autour du livre blanc Automatisation & Authenticité YouTube (mai 2026). Ce guide rapide vous présente les sections et fonctions de la plateforme. Vous pouvez le relancer à tout moment via le menu Guide.",
  },
  {
    id: 1,
    label: 'Navigation',
    color: '#E63946',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" width={64} height={64}>
        <rect x="6" y="10" width="20" height="44" rx="4" fill="#E6394618" stroke="#E63946" strokeWidth="1.5"/>
        <rect x="32" y="10" width="26" height="44" rx="4" fill="#E6394618" stroke="#E63946" strokeWidth="1.5" strokeDasharray="3 2"/>
        <circle cx="16" cy="22" r="3" fill="#E63946"/>
        <circle cx="16" cy="32" r="3" fill="#E63946" opacity=".4"/>
        <circle cx="16" cy="42" r="3" fill="#E63946" opacity=".4"/>
      </svg>
    ),
    title: 'La barre latérale',
    body: "La colonne de gauche donne accès à toutes les sections : Accueil, Chapitres, Sources, Boîte à outils, Calculateur ROI et Brand Voice Document. Vous pouvez la replier en cliquant sur l'icône Menu en haut à gauche pour gagner de l'espace.",
  },
  {
    id: 2,
    label: 'Chapitres',
    color: '#E63946',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" width={64} height={64}>
        <rect x="8" y="8" width="22" height="30" rx="3" fill="#E6394618" stroke="#E63946" strokeWidth="1.5"/>
        <rect x="34" y="8" width="22" height="30" rx="3" fill="#E6394618" stroke="#E63946" strokeWidth="1.5" opacity=".5"/>
        <rect x="8" y="42" width="22" height="14" rx="3" fill="#E6394618" stroke="#E63946" strokeWidth="1.5" opacity=".3"/>
        <rect x="34" y="42" width="22" height="14" rx="3" fill="#E6394618" stroke="#E63946" strokeWidth="1.5" opacity=".6"/>
        <path d="M18 26l3 3 6-6" stroke="#E63946" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Lire les chapitres',
    body: "7 chapitres à lire en cliquant sur une carte. Chaque chapitre peut être épinglé avec l'icône ci-dessous. En lecture, activez le Mode focus pour un plein écran sans distraction, et naviguez entre les sections via la table des matières flottante à droite.",
    feature: { Icon: Bookmark, label: "Épingler un chapitre" },
  },
  {
    id: 3,
    label: 'Outils',
    color: '#C9A961',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" width={64} height={64}>
        <rect x="6" y="18" width="52" height="8" rx="2" fill="#C9A96118" stroke="#C9A961" strokeWidth="1.5"/>
        <rect x="6" y="30" width="52" height="8" rx="2" fill="#C9A96118" stroke="#C9A961" strokeWidth="1.5" opacity=".6"/>
        <rect x="6" y="42" width="52" height="8" rx="2" fill="#C9A96118" stroke="#C9A961" strokeWidth="1.5" opacity=".35"/>
        <circle cx="14" cy="22" r="3" fill="#C9A961"/>
        <circle cx="14" cy="34" r="3" fill="#C9A961" opacity=".5"/>
        <circle cx="14" cy="46" r="3" fill="#C9A961" opacity=".3"/>
      </svg>
    ),
    title: 'La boîte à outils',
    body: "32 outils organisés en 6 phases de production : Idéation, Scripting, Montage, Doublage & Voix, VSEO, Publication. Cliquez sur un outil pour lire sa description, son cas d'usage et son tarif. Naviguez entre les phases avec les onglets en haut.",
  },
  {
    id: 4,
    label: 'ROI & BVD',
    color: '#5C7F6B',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" width={64} height={64}>
        <rect x="8" y="36" width="10" height="20" rx="2" fill="#5C7F6B" opacity=".4"/>
        <rect x="22" y="26" width="10" height="30" rx="2" fill="#5C7F6B" opacity=".6"/>
        <rect x="36" y="16" width="10" height="40" rx="2" fill="#5C7F6B"/>
        <rect x="50" y="30" width="6" height="26" rx="2" fill="#5C7F6B" opacity=".3"/>
        <path d="M8 14h12M8 20h8" stroke="#5C7F6B" strokeWidth="1.5" strokeLinecap="round" opacity=".6"/>
      </svg>
    ),
    title: 'Calculateur ROI & BVD',
    body: "Le Calculateur ROI estime la valeur libérée par votre stack d'automatisation selon votre profil (Freelance, Équipe, Département) via trois curseurs interactifs. Le Brand Voice Document vous guide à travers 7 sections pour documenter votre identité de marque, exportable en PDF ou à copier dans vos prompts IA.",
  },
  {
    id: 5,
    label: 'Sources',
    color: '#7F77DD',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" width={64} height={64}>
        <rect x="10" y="10" width="44" height="44" rx="4" fill="#7F77DD18" stroke="#7F77DD" strokeWidth="1.5"/>
        <path d="M20 22h24M20 30h18M20 38h20" stroke="#7F77DD" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="46" cy="46" r="8" fill="#7F77DD"/>
        <path d="M43 46l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Sources & données',
    body: "54 références classées par chapitre : études académiques, rapports sectoriels, données de plateformes et réglementations. Filtrez par type, et copiez n'importe quelle référence avec le bouton Citer sur chaque source.",
  },
  {
    id: 6,
    label: 'Partager',
    color: '#5C7F6B',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" width={64} height={64}>
        <rect x="8" y="20" width="48" height="24" rx="12" fill="#5C7F6B18" stroke="#5C7F6B" strokeWidth="1.5"/>
        <circle cx="26" cy="32" r="5" stroke="#5C7F6B" strokeWidth="1.5"/>
        <path d="M29.5 35.5l4 4" stroke="#5C7F6B" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M40 32h6" stroke="#5C7F6B" strokeWidth="1.5" strokeLinecap="round" opacity=".4"/>
      </svg>
    ),
    title: 'Recherche & partage',
    body: "La barre de recherche couvre les chapitres, les outils et les sources. Basculez entre mode clair et sombre avec l'icône ci-dessous. Via le bouton Partager : partagez sur LinkedIn, copiez le lien, scannez ou téléchargez le QR code, et générez un résumé PDF du livre blanc.",
    feature: { Icon: Moon, label: "Mode sombre" },
  },
  {
    id: 7,
    label: "C'est parti",
    color: '#C9A961',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" width={64} height={64}>
        <circle cx="32" cy="32" r="28" fill="#C9A96118" stroke="#C9A961" strokeWidth="1.5"/>
        <path d="M22 32l7 7 13-14" stroke="#C9A961" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Tout est prêt.',
    body: "Entrez votre nom ou pseudo ci-dessous. Il apparaitra sur votre avatar dans la plateforme.",
    hasNameInput: true,
  },
];

function GuideModal({ onClose, theme, userName, setUserName }) {
  const [step, setStep] = useState(0);
  const [localName, setLocalName] = useState(userName || '');
  const current = GUIDE_STEPS[step];
  const isLast = step === GUIDE_STEPS.length - 1;
  const progress = ((step + 1) / GUIDE_STEPS.length) * 100;

  const handleClose = () => {
    if (localName.trim()) setUserName(localName.trim());
    onClose();
  };

  const handleNext = () => {
    if (isLast) {
      if (localName.trim()) setUserName(localName.trim());
      onClose();
    } else {
      setStep(s => s + 1);
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(27,27,35,0.72)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', backdropFilter: 'blur(4px)' }}>
      <div style={{ background: theme.bgElevated, borderRadius: '20px', width: '100%', maxWidth: '500px', border: `1px solid ${theme.border}`, boxShadow: '0 24px 64px rgba(0,0,0,0.22)', overflow: 'hidden', position: 'relative' }}>

        {/* Progress bar */}
        <div style={{ height: '3px', background: theme.bgSecondary }}>
          <div style={{ height: '100%', background: current.color, width: `${progress}%`, transition: 'width 0.35s ease, background 0.3s' }} />
        </div>

        {/* Close */}
        <button onClick={handleClose} style={{ position: 'absolute', top: '16px', right: '16px', background: 'transparent', border: 'none', cursor: 'pointer', color: theme.textMuted, padding: '6px', borderRadius: '8px', display: 'flex', zIndex: 1 }}
          onMouseEnter={e => e.currentTarget.style.background = theme.bgSecondary}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
          <X size={17} />
        </button>

        {/* Step dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', paddingTop: '24px' }}>
          {GUIDE_STEPS.map((s, i) => (
            <button key={s.id} onClick={() => setStep(i)} style={{ width: i === step ? '20px' : '7px', height: '7px', borderRadius: '999px', background: i === step ? current.color : (i < step ? current.color + '55' : theme.border), border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.25s' }} />
          ))}
        </div>

        {/* Content */}
        <div style={{ padding: '28px 36px 32px', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '22px' }}>
            {current.icon}
          </div>
          <div style={{ fontSize: '10px', fontWeight: 700, color: current.color, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
            {step + 1} / {GUIDE_STEPS.length}
          </div>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '24px', fontWeight: 400, color: theme.text, lineHeight: 1.2, marginBottom: '14px', fontVariantLigatures: 'none' }}>
            {current.title}
          </h2>
          <p style={{ fontSize: '14px', lineHeight: 1.75, color: theme.textMuted, margin: 0, maxWidth: '380px', marginLeft: 'auto', marginRight: 'auto' }}>
            {current.body}
          </p>

          {/* Feature icon pill */}
          {current.feature && (
            <div style={{ marginTop: '16px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: theme.bgSecondary, borderRadius: '999px', border: `1px solid ${theme.border}` }}>
              <current.feature.Icon size={15} style={{ color: current.color }} />
              <span style={{ fontSize: '13px', color: theme.text, fontWeight: 500 }}>{current.feature.label}</span>
            </div>
          )}

          {/* Name input for last step */}
          {current.hasNameInput && (
            <div style={{ marginTop: '20px', maxWidth: '320px', marginLeft: 'auto', marginRight: 'auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: theme.bgSecondary, border: `1px solid ${localName.trim() ? current.color : theme.border}`, borderRadius: '12px', padding: '4px 4px 4px 16px', transition: 'border-color 0.2s' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: current.color, color: '#1B1B23', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Fraunces', serif", fontSize: '13px', fontWeight: 600, flexShrink: 0, transition: 'background 0.2s' }}>
                  {localName.trim() ? localName.trim().slice(0, 2).toUpperCase() : '?'}
                </div>
                <input
                  autoFocus
                  type="text"
                  value={localName}
                  onChange={e => setLocalName(e.target.value)}
                  placeholder="Votre prénom ou pseudo..."
                  maxLength={24}
                  style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', fontSize: '14px', color: theme.text, fontFamily: 'inherit', padding: '10px 0' }}
                />
              </div>

            </div>
          )}
        </div>

        {/* Nav buttons */}
        <div style={{ padding: '0 36px 28px', display: 'flex', gap: '10px' }}>
          {step > 0 ? (
            <button onClick={() => setStep(s => s - 1)} style={{ flex: 1, padding: '11px', background: 'transparent', border: `1px solid ${theme.border}`, borderRadius: '10px', fontSize: '13px', fontWeight: 500, color: theme.textMuted, cursor: 'pointer', fontFamily: 'inherit', transition: 'border-color 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = current.color}
              onMouseLeave={e => e.currentTarget.style.borderColor = theme.border}>
              Précédent
            </button>
          ) : (
            <button onClick={handleClose} style={{ flex: 1, padding: '11px', background: 'transparent', border: `1px solid ${theme.border}`, borderRadius: '10px', fontSize: '13px', fontWeight: 500, color: theme.textMuted, cursor: 'pointer', fontFamily: 'inherit' }}>
              Passer
            </button>
          )}
          <button onClick={handleNext}
            style={{ flex: 2, padding: '11px', background: current.color, border: 'none', borderRadius: '10px', fontSize: '13px', fontWeight: 600, color: '#FFFFFF', cursor: 'pointer', fontFamily: 'inherit', transition: 'opacity 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            {isLast ? 'Commencer' : 'Suivant'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN SHELL ───────────────────────────────────────────────────────────────

// Defined at module scope to keep its component identity stable across renders —
// otherwise inputs inside any modal lose focus on every keystroke.
function ModalWrap({ theme, onClose, children, small }) {
  return (
    <div style={{ position: 'fixed', inset: 0, background: theme.overlay, zIndex: 200, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: small ? '15vh' : '12vh' }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{ background: theme.bgElevated, borderRadius: '16px', width: '100%', maxWidth: small ? '420px' : '640px', margin: '0 16px', border: `1px solid ${theme.border}`, position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '12px', right: '12px', background: 'transparent', border: 'none', cursor: 'pointer', color: theme.textMuted, padding: '6px', borderRadius: '6px', display: 'flex' }}><X size={17} /></button>
        {children}
      </div>
    </div>
  );
}

function ProjetTuringShell() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const [activeSection, setActiveSection] = useState('accueil');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [avatarMenuOpen, setAvatarMenuOpen] = useState(false);
  const [feedbackEmail, setFeedbackEmail] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showGuide, setShowGuide] = useState(true);
  const guideSeen = useRef(false);
  const handleCloseGuide = useCallback(() => { guideSeen.current = true; setShowGuide(false); }, []);
  const handleOpenGuide = useCallback(() => setShowGuide(true), []);
  const [userName, setUserName] = useState('');
  const [openChapter, setOpenChapter] = useState(null);
  const [readingChapter, setReadingChapter] = useState(null);
  const [pinnedChapters, setPinnedChapters] = useState([]);
  const [readChapters, setReadChapters] = useState([]);
  const avatarRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Caveat:wght@400;500&family=Geist:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) setSidebarOpen(false);
      else setSidebarOpen(true);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClick = (e) => { if (avatarRef.current && !avatarRef.current.contains(e.target)) setAvatarMenuOpen(false); };
    if (avatarMenuOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [avatarMenuOpen]);

  useEffect(() => {
    if (readingChapter && mainRef.current) mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  }, [readingChapter]);

  useEffect(() => {
    if (mainRef.current) mainRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  // Esc closes modals, ⌘K / Ctrl+K opens search
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        if (searchOpen) { setSearchOpen(false); setSearchQuery(''); }
        else if (feedbackOpen) { setFeedbackOpen(false); setFeedbackSent(false); setFeedbackEmail(''); setFeedbackMessage(''); }
        else if (shareOpen) setShareOpen(false);
        else if (showGuide) handleCloseGuide();
        else if (avatarMenuOpen) setAvatarMenuOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setSearchOpen(true); }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [searchOpen, feedbackOpen, shareOpen, showGuide, avatarMenuOpen]);

  const theme = darkMode ? {
    bg: '#1B1B23', bgSecondary: '#23232D', bgElevated: '#2A2A35',
    text: '#F5F1E8', textMuted: '#9A9AA8', border: '#2F2F3B',
    accent: '#E63946', ocre: '#C9A961', overlay: 'rgba(0,0,0,0.75)', cardBg: '#23232D',
  } : {
    bg: '#F5F1E8', bgSecondary: '#EEE9DC', bgElevated: '#FFFFFF',
    text: '#1B1B23', textMuted: '#6B6B78', border: '#E0DACA',
    accent: '#E63946', ocre: '#C9A961', overlay: 'rgba(27,27,35,0.5)', cardBg: '#FFFFFF',
  };

  const navItems = [
    { id: 'accueil', label: 'Accueil', icon: Home },
    { id: 'chapitres', label: 'Chapitres', icon: PlayCircle },
    { id: 'sources', label: 'Sources & données', icon: BookOpen },
    { id: 'outils', label: 'Boîte à outils', icon: Wrench },
    { id: 'calculateur', label: 'Calculateur ROI', icon: BarChart2 },
    { id: 'bvd', label: 'Brand Voice Doc.', icon: Zap },
  ];
  const navItemsSecondary = [{ id: 'partager', label: 'Partager', icon: Share2, action: () => setShareOpen(true) }];
  const navItemsBottom = [{ id: 'apropos', label: 'À propos', icon: Info }, { id: 'guide', label: 'Guide', icon: Compass, action: handleOpenGuide }];

  const togglePin = (id) => setPinnedChapters(prev => prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]);
  const markRead = (id) => setReadChapters(prev => prev.includes(id) ? prev : [...prev, id]);
  const goToChapter = (chapter) => { setReadingChapter(chapter); markRead(chapter.id); };

  const Logo = () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <svg width="32" height="24" viewBox="-2 -1 34 24" fill="none" style={{ flexShrink: 0 }}>
        <g opacity="0.28">
          <polygon points="13,3 13,19 27,11"
            fill="#E63946"
            stroke="#E63946" strokeWidth="3.5"
            strokeLinejoin="round"
          />
        </g>
        <polygon points="1,3 1,19 15,11"
          fill="#E63946"
          stroke="#E63946" strokeWidth="3.5"
          strokeLinejoin="round"
        />
      </svg>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '5px', lineHeight: 1 }}>
        <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: '20px', letterSpacing: '-0.4px', color: theme.text, fontVariantLigatures: 'none' }}>Turing</span>
        <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 400, fontSize: '13px', letterSpacing: '-0.1px', color: theme.textMuted, fontVariantLigatures: 'none' }}>Studio</span>
      </div>
    </div>
  );

  const NavBtn = ({ item, isActive, onClick, muted }) => {
    const Icon = item.icon;
    const showLabel = sidebarOpen || isMobile;
    return (
      <button onClick={() => { onClick(); if (isMobile) setSidebarOpen(false); }} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 12px', background: isActive ? theme.bgSecondary : 'transparent', border: 'none', borderRadius: '10px', color: muted ? theme.textMuted : theme.text, cursor: 'pointer', fontSize: '14px', fontFamily: 'inherit', fontWeight: isActive ? 500 : 400, position: 'relative', justifyContent: 'flex-start', width: '100%', textAlign: 'left' }}
        onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = theme.bgSecondary; }}
        onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}>
        {isActive && <span style={{ position: 'absolute', left: 0, top: '20%', bottom: '20%', width: '3px', background: theme.accent, borderRadius: '0 3px 3px 0' }} />}
        <Icon size={19} style={{ flexShrink: 0, marginLeft: '2px' }} />
        {showLabel && (<><span style={{ flex: 1 }}>{item.label}</span>{item.badge && <span style={{ fontSize: '11px', padding: '2px 8px', background: theme.bgElevated, border: `1px solid ${theme.border}`, borderRadius: '999px', color: theme.textMuted }}>{item.badge}</span>}</>)}
      </button>
    );
  };

  const [focusMode, setFocusMode] = useState(false);
  const [activeTocIdx, setActiveTocIdx] = useState(0);

  useEffect(() => {
    if (!readingChapter || !mainRef.current) { setActiveTocIdx(0); return; }
    setActiveTocIdx(0);
    const el = mainRef.current;
    const handleScroll = () => {
      const sections = (readingChapter.readContent || []).map((_, i) =>
        document.getElementById(`toc-section-${readingChapter.id}-${i}`)
      ).filter(Boolean);
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].getBoundingClientRect().top <= 140) { setActiveTocIdx(i); return; }
      }
      setActiveTocIdx(0);
    };
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [readingChapter]);

  const ReadingView = ({ chapter }) => {
    const focusBg = darkMode ? '#16161E' : '#FDFBF7';
    const containerStyle = focusMode ? {
      position: 'fixed', inset: 0, zIndex: 150,
      background: focusBg, overflowY: 'auto',
      padding: isMobile ? '24px 20px' : '48px 0',
    } : {};

    const scrollToSection = (i) => {
      const el = document.getElementById(`toc-section-${chapter.id}-${i}`);
      if (el) {
        const container = focusMode ? el.closest('[style*="overflow-y"]') : mainRef.current;
        if (container) {
          const offset = el.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop - 80;
          container.scrollTo({ top: offset, behavior: 'smooth' });
        }
      }
    };

    const showToc = !isMobile && !focusMode && chapter.readContent.length > 1;

    return (
      <div style={containerStyle}>
        <div style={{ display: 'flex', gap: '32px', maxWidth: showToc ? '1060px' : '680px', margin: '0 auto', padding: focusMode && !isMobile ? '0 24px' : undefined }}>

          {/* Contenu principal */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Barre du haut */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
              <button onClick={() => { setReadingChapter(null); setFocusMode(false); }} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', border: 'none', color: theme.textMuted, cursor: 'pointer', fontSize: '13px', fontFamily: 'inherit', padding: '6px 8px', borderRadius: '6px' }}
                onMouseEnter={e => e.currentTarget.style.background = theme.bgSecondary}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                <ArrowLeft size={15} /> Retour aux chapitres
              </button>
              <button onClick={() => setFocusMode(f => !f)} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '6px 12px', background: focusMode ? chapter.color : theme.bgSecondary, color: focusMode ? '#FFF' : theme.textMuted, border: `1px solid ${focusMode ? chapter.color : theme.border}`, borderRadius: '8px', fontSize: '12px', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s' }}>
                {focusMode ? <><Compass size={13} /> Quitter le focus</> : <><Compass size={13} /> Mode focus</>}
              </button>
            </div>

            {/* En-tête chapitre */}
            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <span style={{ fontSize: '11px', fontWeight: 600, color: chapter.color, textTransform: 'uppercase', letterSpacing: '0.6px' }}>{chapter.num}</span>
                <span style={{ fontSize: '12px', color: theme.textMuted }}>·</span>
                <span style={{ fontSize: '12px', color: theme.textMuted, display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={11} /> {chapter.duration}</span>
                {readChapters.includes(chapter.id) && (
                  <span style={{ fontSize: '11px', padding: '2px 8px', background: '#5C7F6B22', color: '#5C7F6B', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '4px' }}><Check size={9} /> Lu</span>
                )}
              </div>
              <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: focusMode ? '48px' : '40px', fontWeight: 400, letterSpacing: '-1px', lineHeight: 1.1, color: theme.text, marginBottom: '6px', fontVariantLigatures: 'none', transition: 'font-size 0.2s' }}>{chapter.title}</h1>
              <p style={{ fontSize: '18px', color: theme.textMuted, lineHeight: 1.4, marginBottom: '18px' }}>{chapter.subtitle}</p>
              <div style={{ height: '3px', width: '44px', background: chapter.color, borderRadius: '2px' }} />
            </div>

            {/* Encart stat */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', padding: '18px 22px', background: theme.bgSecondary, borderRadius: '12px', border: `1px solid ${theme.border}`, marginBottom: '48px' }}>
              <div style={{ flexShrink: 0 }}>
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: '30px', fontWeight: 400, color: chapter.color, lineHeight: 1, fontVariantLigatures: 'none' }}>{chapter.stat}</div>
                <div style={{ fontSize: '11px', color: theme.textMuted, marginTop: '4px', maxWidth: '100px', lineHeight: 1.35 }}>{chapter.statLabel}</div>
              </div>
              <div style={{ width: '1px', height: '44px', background: theme.border, flexShrink: 0, marginTop: '4px' }} />
              <p style={{ fontSize: '13px', lineHeight: 1.65, color: theme.text, flex: 1, fontStyle: 'italic', margin: 0 }}>{chapter.insight}</p>
            </div>

            {/* Sections */}
            {chapter.readContent.map((section, i) => (
              <div key={i} id={`toc-section-${chapter.id}-${i}`} style={{ marginBottom: '36px', paddingBottom: '36px', borderBottom: i < chapter.readContent.length - 1 ? `1px solid ${theme.border}` : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '14px' }}>
                  <span style={{ fontFamily: "'Fraunces', serif", fontSize: '13px', color: chapter.color, fontVariantLigatures: 'none', flexShrink: 0, opacity: 0.8, minWidth: '20px' }}>{String(i + 1).padStart(2, '0')}</span>
                  <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: focusMode ? '22px' : '20px', fontWeight: 400, color: theme.text, lineHeight: 1.2, fontVariantLigatures: 'none', margin: 0, transition: 'font-size 0.2s' }}>{section.heading}</h2>
                </div>
                <div style={{ paddingLeft: focusMode ? '0' : '30px' }}>
                  {section.body.split('\n\n').map((para, pi) => (
                    <p key={pi} style={{ fontSize: focusMode ? '17px' : '15px', lineHeight: focusMode ? 1.9 : 1.8, color: theme.text, margin: '0 0 16px', transition: 'font-size 0.2s' }}>{para}</p>
                  ))}
                  <div style={{ padding: '9px 12px', background: theme.bgSecondary, borderRadius: '6px', borderLeft: `2px solid ${chapter.color}66`, marginTop: '4px' }}>
                    <span style={{ fontSize: '9px', fontWeight: 700, color: chapter.color, textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '3px' }}>Source</span>
                    <p style={{ fontSize: '12px', color: theme.textMuted, lineHeight: 1.55, margin: 0, fontStyle: 'italic' }}>{section.source}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation bas */}
            <div style={{ marginTop: '8px', padding: '20px 22px', background: theme.bgSecondary, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
              <div>
                <div style={{ fontSize: '11px', color: theme.textMuted, marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Chapitre suivant</div>
                {chapter.id < 6 ? (
                  <button onClick={() => goToChapter(CHAPTERS[chapter.id + 1])} style={{ fontFamily: "'Fraunces', serif", fontSize: '16px', fontWeight: 400, color: theme.text, background: 'transparent', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left', fontVariantLigatures: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {CHAPTERS[chapter.id + 1].title} <ChevronRight size={14} />
                  </button>
                ) : (
                  <span style={{ fontFamily: "'Fraunces', serif", fontSize: '16px', color: theme.textMuted, fontStyle: 'italic', fontVariantLigatures: 'none' }}>Fin du livre blanc.</span>
                )}
              </div>
              <button onClick={() => { setReadingChapter(null); setFocusMode(false); }} style={{ padding: '9px 16px', background: 'transparent', border: `1px solid ${theme.border}`, borderRadius: '8px', fontSize: '13px', color: theme.textMuted, cursor: 'pointer', fontFamily: 'inherit', flexShrink: 0 }}
                onMouseEnter={e => e.currentTarget.style.borderColor = theme.accent}
                onMouseLeave={e => e.currentTarget.style.borderColor = theme.border}>
                Retour aux chapitres
              </button>
            </div>
          </div>

          {/* Table des matières flottante */}
          {showToc && (
            <div style={{ width: '200px', flexShrink: 0 }}>
              <div style={{ position: 'sticky', top: '24px' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, color: theme.textMuted, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '12px' }}>Dans ce chapitre</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  {chapter.readContent.map((section, i) => {
                    const isActive = activeTocIdx === i;
                    return (
                      <button key={i} onClick={() => scrollToSection(i)} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', background: 'transparent', border: 'none', cursor: 'pointer', padding: '6px 8px', borderRadius: '6px', textAlign: 'left', fontFamily: 'inherit', transition: 'background 0.15s', width: '100%' }}
                        onMouseEnter={e => e.currentTarget.style.background = theme.bgSecondary}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                        <div style={{ width: '2px', minHeight: '14px', borderRadius: '999px', background: isActive ? chapter.color : theme.border, flexShrink: 0, marginTop: '3px', transition: 'background 0.2s' }} />
                        <span style={{ fontSize: '12px', color: isActive ? theme.text : theme.textMuted, fontWeight: isActive ? 500 : 400, lineHeight: 1.4, transition: 'color 0.2s' }}>
                          {section.heading}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    );
  };

  const ChapterCard = ({ chapter }) => {
    const isOpen = openChapter === chapter.id;
    const isPinned = pinnedChapters.includes(chapter.id);
    const isRead = readChapters.includes(chapter.id);
    return (
      <div style={{ background: theme.cardBg, border: `1px solid ${isOpen ? chapter.color : theme.border}`, borderRadius: '14px', overflow: 'hidden', transition: 'border-color 0.2s' }}
        onMouseEnter={e => { if (!isOpen) e.currentTarget.style.borderColor = chapter.color + '77'; }}
        onMouseLeave={e => { if (!isOpen) e.currentTarget.style.borderColor = theme.border; }}>
        <div onClick={() => { setOpenChapter(isOpen ? null : chapter.id); markRead(chapter.id); }} style={{ height: '128px', background: darkMode ? '#16161E' : '#ECEAE0', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', cursor: 'pointer' }}>
          <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 25% 50%, ${chapter.color}25 0%, transparent 65%)` }} />
          <span style={{ fontFamily: "'Fraunces', serif", fontSize: '82px', fontWeight: 400, color: chapter.color + '12', position: 'absolute', right: '6px', bottom: '-14px', lineHeight: 1, userSelect: 'none', fontVariantLigatures: 'none' }}>{chapter.id}</span>
          <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <div style={{ fontFamily: "'Fraunces', serif", fontSize: '28px', fontWeight: 400, color: chapter.color, lineHeight: 1, fontVariantLigatures: 'none' }}>{chapter.stat}</div>
            <div style={{ fontSize: '11px', color: theme.textMuted, marginTop: '5px', maxWidth: '120px', lineHeight: 1.3 }}>{chapter.statLabel}</div>
          </div>
          {isRead && <div style={{ position: 'absolute', top: '9px', left: '9px', background: '#5C7F6B', color: '#fff', fontSize: '10px', padding: '2px 7px', borderRadius: '999px', display: 'flex', alignItems: 'center', gap: '3px' }}><Check size={9} /> Lu</div>}
          <div style={{ position: 'absolute', bottom: '9px', right: '9px', background: 'rgba(0,0,0,0.5)', color: '#fff', fontSize: '11px', padding: '2px 7px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '3px' }}><Clock size={9} /> {chapter.duration}</div>
        </div>
        <div style={{ padding: '13px 14px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
            <div style={{ flex: 1, cursor: 'pointer' }} onClick={() => { setOpenChapter(isOpen ? null : chapter.id); markRead(chapter.id); }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: chapter.color, textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '4px' }}>{chapter.num}</div>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: '15px', fontWeight: 400, lineHeight: 1.25, color: theme.text, marginBottom: '2px', fontVariantLigatures: 'none' }}>{chapter.title}</div>
              <div style={{ fontSize: '12px', color: theme.textMuted }}>{chapter.subtitle}</div>
            </div>
            <button onClick={e => { e.stopPropagation(); togglePin(chapter.id); }} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: isPinned ? theme.ocre : theme.textMuted, padding: '2px', borderRadius: '6px', flexShrink: 0, marginTop: '1px' }}><Bookmark size={14} fill={isPinned ? theme.ocre : 'none'} /></button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '9px' }}>
            {chapter.tags.map(tag => <span key={tag} style={{ fontSize: '10px', padding: '2px 7px', background: theme.bgSecondary, border: `1px solid ${theme.border}`, borderRadius: '999px', color: theme.textMuted }}>{tag}</span>)}
          </div>
          {isOpen && (
            <div style={{ marginTop: '13px', paddingTop: '13px', borderTop: `1px solid ${theme.border}` }}>
              <p style={{ fontSize: '13px', lineHeight: 1.65, color: theme.textMuted, margin: '0 0 11px' }}>{chapter.description}</p>
              <div style={{ padding: '9px 11px', background: theme.bgSecondary, borderRadius: '7px', borderLeft: `3px solid ${chapter.color}`, marginBottom: '13px' }}>
                <div style={{ fontSize: '9px', fontWeight: 700, color: chapter.color, textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '3px' }}>Insight clé</div>
                <p style={{ fontSize: '12px', lineHeight: 1.55, color: theme.text, margin: 0, fontStyle: 'italic' }}>{chapter.insight}</p>
              </div>
              <button onClick={() => { goToChapter(chapter); setOpenChapter(null); }} style={{ width: '100%', padding: '9px', background: chapter.color, color: '#FFFFFF', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <PlayCircle size={13} /> Lire ce chapitre
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderChapitres = () => {
    if (readingChapter) return <ReadingView chapter={readingChapter} />;
    return (
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '26px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: theme.textMuted, marginBottom: '12px' }}><span>Studio</span><ChevronRight size={12} /><span style={{ color: theme.text }}>Chapitres</span></div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: '38px', fontWeight: 400, letterSpacing: '-1px', marginBottom: '6px', lineHeight: 1.1, fontVariantLigatures: 'none' }}>7 chapitres.</h1>
              <p style={{ fontSize: '15px', color: theme.textMuted, lineHeight: 1.5, maxWidth: '420px', margin: 0 }}>Cliquez sur une carte pour découvrir le contenu.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '10px 18px', background: theme.bgSecondary, borderRadius: '10px', border: `1px solid ${theme.border}`, flexShrink: 0 }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', color: theme.accent, fontVariantLigatures: 'none' }}>{readChapters.length}<span style={{ fontSize: '14px', color: theme.textMuted }}> / 7</span></div>
              <div style={{ fontSize: '10px', color: theme.textMuted, textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '2px' }}>lus</div>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: theme.textMuted, marginBottom: '5px' }}><span>Progression</span><span>{Math.round((readChapters.length / 7) * 100)}%</span></div>
          <div style={{ height: '3px', background: theme.bgSecondary, borderRadius: '999px', overflow: 'hidden' }}>
            <div style={{ width: `${(readChapters.length / 7) * 100}%`, height: '100%', background: theme.accent, borderRadius: '999px', transition: 'width 0.4s ease' }} />
          </div>
        </div>
        {pinnedChapters.length > 0 && (
          <div style={{ marginBottom: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '13px' }}><Bookmark size={13} style={{ color: theme.ocre }} fill={theme.ocre} /><span style={{ fontSize: '13px', fontWeight: 500, color: theme.text }}>Épinglés</span><span style={{ fontSize: '11px', color: theme.textMuted }}>({pinnedChapters.length})</span></div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '12px', alignItems: 'start' }}>
              {CHAPTERS.filter(c => pinnedChapters.includes(c.id)).map(c => <ChapterCard key={c.id} chapter={c} />)}
            </div>
            <div style={{ height: '1px', background: theme.border, margin: '26px 0' }} />
          </div>
        )}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '12px', alignItems: 'start' }}>
          {CHAPTERS.map(c => <ChapterCard key={c.id} chapter={c} />)}
        </div>
        <div style={{ marginTop: '52px', padding: '18px 22px', borderLeft: `3px solid ${theme.accent}`, background: theme.bgSecondary, borderRadius: '0 12px 12px 0' }}>
          <p style={{ fontFamily: "'Caveat', cursive", fontSize: '20px', lineHeight: 1.45, color: theme.text, margin: '0 0 5px' }}>« L'automatisation est l'outil qui permet de tenir le rythme. L'authenticité est ce qui donne une raison d'engager. »</p>
          <div style={{ fontSize: '11px', color: theme.textMuted }}>Livre blanc Projet Turing Studio, 2026</div>
        </div>
      </div>
    );
  };

  const renderMainContent = () => {
    if (activeSection === 'chapitres') return renderChapitres();
    if (activeSection === 'outils') return <ToolsView theme={theme} isMobile={isMobile} />;
    if (activeSection === 'calculateur') return <CalculateurView theme={theme} isMobile={isMobile} />;
    if (activeSection === 'bvd') return <BVDView theme={theme} isMobile={isMobile} />;
    if (activeSection === 'apropos') return <AProposView theme={theme} openFeedback={() => setFeedbackOpen(true)} isMobile={isMobile} />;
    if (activeSection === 'sources') return <SourcesView theme={theme} isMobile={isMobile} />;
    if (activeSection === 'accueil') return <AccueilView theme={theme} darkMode={darkMode} readChapters={readChapters} pinnedChapters={pinnedChapters} setActiveSection={setActiveSection} setReadingChapter={setReadingChapter} markRead={markRead} isMobile={isMobile} onOpenResume={() => setShowResume(true)} />;
    if (activeSection === 'profil') return (
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <button onClick={() => setActiveSection('accueil')} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', border: 'none', color: theme.textMuted, cursor: 'pointer', fontSize: '13px', fontFamily: 'inherit', marginBottom: '24px', padding: '6px 8px', borderRadius: '6px' }}><ArrowLeft size={15} /> Retour</button>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: '38px', fontWeight: 400, letterSpacing: '-1px', marginBottom: '32px', lineHeight: 1.1, fontVariantLigatures: 'none' }}>Mon profil de lecture</h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {[{ label: 'Chapitres lus', value: `${readChapters.length} / 7`, progress: (readChapters.length / 7) * 100 }, { label: 'Épinglés', value: `${pinnedChapters.length}` }, { label: 'Dernière visite', value: "Aujourd'hui" }].map(s => (
            <div key={s.label} style={{ background: theme.bgElevated, border: `1px solid ${theme.border}`, borderRadius: '12px', padding: '18px' }}>
              <div style={{ fontSize: '11px', color: theme.textMuted, marginBottom: '7px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{s.label}</div>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: '24px', fontWeight: 400, marginBottom: s.progress !== undefined ? '10px' : 0, fontVariantLigatures: 'none' }}>{s.value}</div>
              {s.progress !== undefined && <div style={{ height: '3px', background: theme.bgSecondary, borderRadius: '999px', overflow: 'hidden' }}><div style={{ width: `${s.progress}%`, height: '100%', background: theme.accent, transition: 'width 0.5s ease' }} /></div>}
            </div>
          ))}
        </div>
      </div>
    );
    if (activeSection === 'bookmarks') return (
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <button onClick={() => setActiveSection('accueil')} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', border: 'none', color: theme.textMuted, cursor: 'pointer', fontSize: '13px', fontFamily: 'inherit', marginBottom: '24px', padding: '6px 8px', borderRadius: '6px' }}><ArrowLeft size={15} /> Retour</button>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: '38px', fontWeight: 400, letterSpacing: '-1px', marginBottom: '24px', lineHeight: 1.1, fontVariantLigatures: 'none' }}>Chapitres épinglés</h1>
        {pinnedChapters.length === 0
          ? <div style={{ background: theme.bgSecondary, border: `1px solid ${theme.border}`, borderRadius: '12px', padding: '48px 24px', textAlign: 'center' }}><Bookmark size={36} style={{ color: theme.textMuted, margin: '0 auto 12px' }} /><p style={{ fontSize: '14px', color: theme.textMuted, fontStyle: 'italic' }}>Aucun chapitre épinglé pour l'instant.</p></div>
          : <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '12px', alignItems: 'start' }}>{CHAPTERS.filter(c => pinnedChapters.includes(c.id)).map(c => <ChapterCard key={c.id} chapter={c} />)}</div>}
      </div>
    );
    return (
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginTop: '44px', padding: '18px 22px', borderLeft: `3px solid ${theme.accent}`, background: theme.bgSecondary, borderRadius: '0 12px 12px 0' }}>
          <p style={{ fontFamily: "'Caveat', cursive", fontSize: '20px', lineHeight: 1.4, color: theme.text, margin: 0 }}>« Une machine peut-elle créer ? » La question reste ouverte.</p>
        </div>
      </div>
    );
  };

  // ModalWrap is defined at module scope (see top of file) to keep its identity
  // stable across re-renders — otherwise inputs inside modals lose focus on every keystroke.

  return (
    <div style={{ minHeight: '100vh', background: theme.bg, color: theme.text, fontFamily: "'Geist', system-ui, sans-serif", display: 'flex', flexDirection: 'column' }}>
      <style>{`
        * { box-sizing:border-box; margin:0; padding:0; }
        input::placeholder, textarea::placeholder { color:${theme.textMuted}; }
        @keyframes pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.4; transform:scale(0.9); } }
      `}</style>

      {/* Header */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: theme.bg, borderBottom: `1px solid ${theme.border}`, height: '64px', display: 'flex', alignItems: 'center', padding: '0 16px', gap: '16px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', minWidth: '200px' }}>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background: 'transparent', border: 'none', color: theme.text, cursor: 'pointer', padding: '9px', borderRadius: '10px', display: 'flex' }}
            onMouseEnter={e => e.currentTarget.style.background = theme.bgSecondary}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
            <Menu size={22} />
          </button>
          <Logo />
        </div>
        <div style={{ flex: 1, maxWidth: '600px', margin: '0 auto' }}>
          <button onClick={() => setSearchOpen(true)} style={{ width: '100%', display: 'flex', alignItems: 'center', background: theme.bgSecondary, border: `1px solid ${theme.border}`, borderRadius: '999px', padding: '9px 18px', gap: '10px', cursor: 'pointer', color: theme.textMuted, fontSize: '14px', fontFamily: 'inherit' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = theme.accent}
            onMouseLeave={e => e.currentTarget.style.borderColor = theme.border}>
            <Search size={18} /><span style={{ flex: 1, textAlign: 'left' }}>{isMobile ? 'Rechercher...' : 'Rechercher dans le livre blanc...'}</span>
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <button onClick={() => setDarkMode(!darkMode)} style={{ background: 'transparent', border: 'none', color: theme.text, cursor: 'pointer', padding: '9px', borderRadius: '10px', display: 'flex' }}
            onMouseEnter={e => e.currentTarget.style.background = theme.bgSecondary}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setFeedbackOpen(true)} style={{ background: 'transparent', border: 'none', color: theme.text, cursor: 'pointer', padding: '9px', borderRadius: '10px', display: 'flex', position: 'relative' }}
            onMouseEnter={e => e.currentTarget.style.background = theme.bgSecondary}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
            <MessageCircle size={20} />
            <span style={{ position: 'absolute', top: '7px', right: '7px', width: '8px', height: '8px', borderRadius: '50%', background: theme.accent, animation: 'pulse 2s ease-in-out infinite' }} />
          </button>
          <div ref={avatarRef} style={{ position: 'relative', marginLeft: '8px' }}>
            <button onClick={() => setAvatarMenuOpen(!avatarMenuOpen)} style={{ width: '36px', height: '36px', borderRadius: '50%', background: theme.ocre, color: '#1B1B23', border: avatarMenuOpen ? `2px solid ${theme.accent}` : '2px solid transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '13px', cursor: 'pointer', fontFamily: "'Fraunces', serif" }}>
              {userName ? userName.split(/\s+/).filter(Boolean).map(w => w[0]).join('').slice(0, 2).toUpperCase() : 'PT'}
            </button>
            {avatarMenuOpen && (
              <div style={{ position: 'absolute', top: '48px', right: 0, background: theme.bgElevated, border: `1px solid ${theme.border}`, borderRadius: '12px', padding: '8px', minWidth: '236px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', zIndex: 100 }}>
                <div style={{ padding: '11px 13px 9px', borderBottom: `1px solid ${theme.border}`, marginBottom: '6px' }}>
                  <div style={{ fontWeight: 500, fontSize: '14px' }}>{userName || 'Projet Turing Studio'}</div>
                  <div style={{ fontSize: '12px', color: theme.textMuted, marginTop: '2px' }}>{readChapters.length} chapitres lus sur 7</div>
                </div>
                {[
                  { icon: User, label: 'Mon profil de lecture', action: () => { setAvatarMenuOpen(false); setActiveSection('profil'); } },
                  { icon: Bookmark, label: 'Chapitres épinglés', action: () => { setAvatarMenuOpen(false); setActiveSection('bookmarks'); } },
                  { icon: Share2, label: 'Partager le livre blanc', action: () => { setAvatarMenuOpen(false); setShareOpen(true); } },
                ].map(item => (
                  <button key={item.label} onClick={item.action} style={{ display: 'flex', alignItems: 'center', gap: '11px', width: '100%', padding: '9px 11px', background: 'transparent', border: 'none', borderRadius: '8px', cursor: 'pointer', fontFamily: 'inherit', color: theme.text, fontSize: '13px' }}
                    onMouseEnter={e => e.currentTarget.style.background = theme.bgSecondary}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                    <item.icon size={15} style={{ color: theme.textMuted }} />{item.label}
                  </button>
                ))}
                <div style={{ height: '1px', background: theme.border, margin: '6px 0' }} />
                <button onClick={() => { setAvatarMenuOpen(false); setShowQuitConfirm(true); }} style={{ display: 'flex', alignItems: 'center', gap: '11px', width: '100%', padding: '9px 11px', background: 'transparent', border: 'none', borderRadius: '8px', cursor: 'pointer', fontFamily: 'inherit', color: theme.text, fontSize: '13px' }}
                  onMouseEnter={e => e.currentTarget.style.background = theme.bgSecondary}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                  <LogOut size={15} style={{ color: theme.textMuted }} />Quitter le studio
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden', position: 'relative' }}>
        {/* Mobile overlay */}
        {isMobile && sidebarOpen && (
          <div onClick={() => setSidebarOpen(false)} style={{ position: 'fixed', inset: 0, top: '64px', background: 'rgba(27,27,35,0.4)', zIndex: 99 }} />
        )}
        {/* Sidebar */}
        <aside style={{
          width: isMobile ? '100%' : (sidebarOpen ? '240px' : '58px'),
          maxWidth: isMobile ? '280px' : undefined,
          background: theme.bg,
          borderRight: `1px solid ${theme.border}`,
          padding: '16px 6px',
          transition: 'width 0.2s ease, transform 0.2s ease',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: isMobile ? 'fixed' : 'sticky',
          top: '64px',
          left: 0,
          zIndex: isMobile ? 100 : undefined,
          transform: isMobile && !sidebarOpen ? 'translateX(-100%)' : 'translateX(0)',
          alignSelf: 'flex-start',
          height: 'calc(100vh - 64px)',
          overflowY: 'auto',
          flexShrink: 0,
          boxShadow: isMobile && sidebarOpen ? '4px 0 24px rgba(0,0,0,0.12)' : 'none',
        }}>
          <div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {navItems.map(item => <NavBtn key={item.id} item={item} isActive={activeSection === item.id} onClick={() => setActiveSection(item.id)} />)}
            </nav>
            <div style={{ height: '1px', background: theme.border, margin: '12px 8px' }} />
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {navItemsSecondary.map(item => <NavBtn key={item.id} item={item} isActive={false} onClick={item.action} />)}
            </nav>
          </div>
          <div>
            <div style={{ height: '1px', background: theme.border, margin: '12px 8px' }} />
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {navItemsBottom.map(item => <NavBtn key={item.id} item={item} isActive={activeSection === item.id && !item.action} onClick={item.action || (() => setActiveSection(item.id))} muted />)}
            </nav>
            {sidebarOpen && (
              <div style={{ marginTop: '14px', padding: '11px 13px', fontSize: '13px', fontFamily: "'Caveat', cursive", color: theme.textMuted, lineHeight: 1.4 }}>
                « Une machine peut-elle créer ? »
                <div style={{ marginTop: '3px', fontSize: '10px', fontFamily: "'Geist', sans-serif" }}>A. Turing, 1950</div>
              </div>
            )}
          </div>
        </aside>

        {/* Main */}
        <main ref={mainRef} style={{ flex: 1, padding: isMobile ? '20px 16px' : '32px 48px', overflowY: 'auto', height: 'calc(100vh - 64px)', minWidth: 0 }}>
          {renderMainContent()}
        </main>
      </div>

      {/* Search modal */}
      {searchOpen && (
        <ModalWrap theme={theme} onClose={() => { setSearchOpen(false); setSearchQuery(''); }}>
          <div style={{ padding: '0 22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 0', borderBottom: `1px solid ${theme.border}` }}>
              <Search size={19} style={{ color: theme.textMuted }} />
              <input autoFocus type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Tapez pour chercher..." style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: theme.text, fontSize: '16px', fontFamily: 'inherit' }} />
            </div>
            <div style={{ padding: '14px 0', maxHeight: '420px', overflowY: 'auto' }}>
              {searchQuery.length === 0 && <div style={{ textAlign: 'center', padding: '32px 20px', color: theme.textMuted, fontFamily: "'Caveat', cursive", fontSize: '18px' }}>Chapitres, outils, sources...</div>}
              {searchQuery.length > 0 && (() => {
                const q = searchQuery.toLowerCase();
                const chapterResults = CHAPTERS.filter(c => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q) || c.tags.some(t => t.toLowerCase().includes(q)) || c.readContent.some(s => s.body.toLowerCase().includes(q) || s.heading.toLowerCase().includes(q)));
                const toolResults = WORKFLOW_PHASES.flatMap(p => p.tools.filter(t => t.name.toLowerCase().includes(q) || t.description.toLowerCase().includes(q) || t.usage.toLowerCase().includes(q)).map(t => ({ ...t, phaseLabel: p.label, phaseColor: p.color, phaseId: p.id })));
                const sourceResults = SOURCES.flatMap(g => g.items.filter(s => s.title.toLowerCase().includes(q) || s.author.toLowerCase().includes(q) || s.stat.toLowerCase().includes(q)).map(s => ({ ...s, chapterColor: g.chapterColor, chapter: g.chapter })));
                const total = chapterResults.length + toolResults.length + sourceResults.length;
                if (total === 0) return <div style={{ textAlign: 'center', padding: '24px', color: theme.textMuted, fontSize: '14px' }}>Aucun résultat pour « {searchQuery} »</div>;
                return (
                  <div>
                    {chapterResults.length > 0 && <>
                      <div style={{ fontSize: '10px', fontWeight: 700, color: theme.textMuted, textTransform: 'uppercase', letterSpacing: '0.8px', padding: '4px 13px 6px' }}>Chapitres</div>
                      {chapterResults.map(c => (
                        <button key={c.id} onClick={() => { setActiveSection('chapitres'); goToChapter(c); setSearchOpen(false); setSearchQuery(''); }} style={{ display: 'block', width: '100%', textAlign: 'left', background: 'transparent', border: 'none', padding: '9px 13px', borderRadius: '8px', cursor: 'pointer', fontFamily: 'inherit', color: theme.text, marginBottom: '2px' }}
                          onMouseEnter={e => e.currentTarget.style.background = theme.bgSecondary}
                          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                          <div style={{ fontSize: '10px', color: c.color, fontWeight: 700, marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{c.num}</div>
                          <div style={{ fontSize: '13px', fontWeight: 500, fontFamily: "'Fraunces', serif", fontVariantLigatures: 'none' }}>{c.title}</div>
                        </button>
                      ))}
                    </>}
                    {toolResults.length > 0 && <>
                      <div style={{ fontSize: '10px', fontWeight: 700, color: theme.textMuted, textTransform: 'uppercase', letterSpacing: '0.8px', padding: '10px 13px 6px', borderTop: chapterResults.length > 0 ? `1px solid ${theme.border}` : 'none', marginTop: chapterResults.length > 0 ? '6px' : 0 }}>Outils</div>
                      {toolResults.map(t => (
                        <button key={t.name} onClick={() => { setActiveSection('outils'); setSearchOpen(false); setSearchQuery(''); }} style={{ display: 'block', width: '100%', textAlign: 'left', background: 'transparent', border: 'none', padding: '9px 13px', borderRadius: '8px', cursor: 'pointer', fontFamily: 'inherit', color: theme.text, marginBottom: '2px' }}
                          onMouseEnter={e => e.currentTarget.style.background = theme.bgSecondary}
                          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: t.phaseColor, flexShrink: 0, display: 'inline-block' }} />
                            <span style={{ fontSize: '13px', fontWeight: 500 }}>{t.name}</span>
                            <span style={{ fontSize: '11px', color: theme.textMuted }}>{t.phaseLabel}</span>
                          </div>
                          <div style={{ fontSize: '11px', color: theme.textMuted, marginTop: '2px', paddingLeft: '14px' }}>{t.price}</div>
                        </button>
                      ))}
                    </>}
                    {sourceResults.length > 0 && <>
                      <div style={{ fontSize: '10px', fontWeight: 700, color: theme.textMuted, textTransform: 'uppercase', letterSpacing: '0.8px', padding: '10px 13px 6px', borderTop: (chapterResults.length + toolResults.length) > 0 ? `1px solid ${theme.border}` : 'none', marginTop: (chapterResults.length + toolResults.length) > 0 ? '6px' : 0 }}>Sources</div>
                      {sourceResults.slice(0, 4).map((s, i) => (
                        <button key={i} onClick={() => { setActiveSection('sources'); setSearchOpen(false); setSearchQuery(''); }} style={{ display: 'block', width: '100%', textAlign: 'left', background: 'transparent', border: 'none', padding: '9px 13px', borderRadius: '8px', cursor: 'pointer', fontFamily: 'inherit', color: theme.text, marginBottom: '2px' }}
                          onMouseEnter={e => e.currentTarget.style.background = theme.bgSecondary}
                          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: s.chapterColor, flexShrink: 0, display: 'inline-block' }} />
                            <span style={{ fontSize: '13px', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.title}</span>
                          </div>
                          <div style={{ fontSize: '11px', color: theme.textMuted, marginTop: '2px', paddingLeft: '14px' }}>{s.author}, {s.date}</div>
                        </button>
                      ))}
                      {sourceResults.length > 4 && <div style={{ fontSize: '11px', color: theme.textMuted, padding: '4px 13px', fontStyle: 'italic' }}>+{sourceResults.length - 4} autre{sourceResults.length - 4 > 1 ? 's' : ''} dans Sources & données</div>}
                    </>}
                  </div>
                );
              })()}
            </div>
          </div>
        </ModalWrap>
      )}

      {/* Feedback modal */}
      {feedbackOpen && (
        <ModalWrap theme={theme} onClose={() => { setFeedbackOpen(false); setFeedbackSent(false); setFeedbackEmail(''); setFeedbackMessage(''); }} small>
          <div style={{ padding: '32px', textAlign: 'center' }}>
            {!feedbackSent ? (
              <>
                <div style={{ width: '50px', height: '50px', background: theme.accent, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}><MessageCircle size={23} color="#FFF" /></div>
                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '21px', fontWeight: 400, marginBottom: '7px', fontVariantLigatures: 'none' }}>Envoyer un retour</h2>
                <p style={{ fontSize: '13px', color: theme.textMuted, marginBottom: '20px', lineHeight: 1.5 }}>Une question, une suggestion, une erreur repérée ?</p>
                <input type="email" value={feedbackEmail} onChange={e => setFeedbackEmail(e.target.value)} placeholder="votre@email.com" style={{ width: '100%', padding: '10px 13px', border: `1px solid ${theme.border}`, borderRadius: '8px', background: theme.bg, color: theme.text, fontSize: '13px', fontFamily: 'inherit', marginBottom: '9px', outline: 'none', boxSizing: 'border-box' }} />
                <textarea value={feedbackMessage} onChange={e => setFeedbackMessage(e.target.value)} placeholder="Votre message..." rows="5" style={{ width: '100%', padding: '10px 13px', border: `1px solid ${theme.border}`, borderRadius: '8px', background: theme.bg, color: theme.text, fontSize: '13px', lineHeight: 1.5, fontFamily: 'inherit', marginBottom: '11px', outline: 'none', resize: 'vertical', boxSizing: 'border-box', minHeight: '110px', display: 'block' }} />
                <button onClick={() => {
                  if (!feedbackEmail.includes('@') || feedbackMessage.trim().length <= 5) return;
                  const subject = encodeURIComponent('Retour Projet Turing Studio');
                  const body = encodeURIComponent(`De : ${feedbackEmail}\n\n${feedbackMessage}`);
                  const mailto = `mailto:bruno.vinet11@gmail.com?subject=${subject}&body=${body}`;
                  navigator.clipboard.writeText(`À : bruno.vinet11@gmail.com\nDe : ${feedbackEmail}\n\n${feedbackMessage}`).catch(() => {});
                  window.location.href = mailto;
                  setFeedbackSent(true);
                }} style={{ width: '100%', padding: '11px', background: feedbackEmail.includes('@') && feedbackMessage.trim().length > 5 ? theme.accent : theme.border, color: '#FFF', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: 500, cursor: feedbackEmail.includes('@') && feedbackMessage.trim().length > 5 ? 'pointer' : 'not-allowed', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px', transition: 'background 0.15s' }}>
                  <Send size={14} /> Envoyer
                </button>
              </>
            ) : (
              <div style={{ padding: '8px 0' }}>
                <div style={{ width: '50px', height: '50px', background: '#5C7F6B', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}><Check size={24} color="#FFF" /></div>
                <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 400, marginBottom: '7px', fontVariantLigatures: 'none' }}>Message prêt à envoyer</h2>
                <p style={{ fontSize: '13px', color: theme.textMuted, marginBottom: '16px', lineHeight: 1.6 }}>Votre messagerie devrait s'ouvrir avec le message pré-rempli. Si rien ne s'est passé, le message a été copié dans le presse-papiers. Collez-le dans un nouvel email à :</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: theme.bgSecondary, border: `1px solid ${theme.border}`, borderRadius: '8px', marginBottom: '14px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 500, color: theme.text }}>bruno.vinet11@gmail.com</span>
                  <button onClick={() => { navigator.clipboard.writeText('bruno.vinet11@gmail.com').catch(() => {}); }} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: theme.accent, padding: '2px 6px', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', fontWeight: 600, fontFamily: 'inherit' }}><Copy size={11} /> Copier</button>
                </div>
                <button onClick={() => { setFeedbackOpen(false); setFeedbackSent(false); setFeedbackEmail(''); setFeedbackMessage(''); }} style={{ fontSize: '13px', color: theme.textMuted, background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: 'inherit', textDecoration: 'underline' }}>Fermer</button>
              </div>
            )}
          </div>
        </ModalWrap>
      )}

      {/* Share modal */}
      {shareOpen && (
        <ModalWrap theme={theme} onClose={() => setShareOpen(false)} small>
          <div style={{ padding: '30px' }}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '21px', fontWeight: 400, marginBottom: '7px', fontVariantLigatures: 'none' }}>Faire connaître Projet Turing Studio</h2>
            <p style={{ fontSize: '13px', color: theme.textMuted, marginBottom: '18px', lineHeight: 1.5 }}>Partagez le livre blanc avec votre réseau.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '14px' }}>
              {[{ icon: Linkedin, label: 'Partager sur LinkedIn', color: '#0A66C2', url: 'https://www.linkedin.com/feed/' }, { icon: Instagram, label: 'Partager sur Instagram', color: '#E4405F', url: 'https://instagram.com' }].map(item => (
                <a key={item.label} href={item.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '11px', width: '100%', padding: '10px 13px', background: theme.bgSecondary, border: `1px solid ${theme.border}`, borderRadius: '9px', cursor: 'pointer', fontFamily: 'inherit', color: theme.text, fontSize: '13px', fontWeight: 500, textDecoration: 'none' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = theme.accent}
                  onMouseLeave={e => e.currentTarget.style.borderColor = theme.border}>
                  <item.icon size={15} style={{ color: item.color }} /><span style={{ flex: 1 }}>{item.label}</span>
                </a>
              ))}
            </div>
            <div style={{ height: '1px', background: theme.border, marginBottom: '13px' }} />
            <button onClick={() => { navigator.clipboard.writeText('https://projet-turing.com/livre-blanc').catch(() => {}); setLinkCopied(true); setTimeout(() => setLinkCopied(false), 2000); }} style={{ width: '100%', padding: '10px 13px', background: theme.bgSecondary, border: `1px solid ${theme.border}`, borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', fontFamily: 'inherit', color: theme.text, fontSize: '13px', marginBottom: '14px' }}>
              <span style={{ color: theme.textMuted }}>projet-turing.com/livre-blanc</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: linkCopied ? '#5C7F6B' : theme.accent, fontWeight: 500 }}>{linkCopied ? <><Check size={12} /> Copié</> : <><Copy size={12} /> Copier</>}</span>
            </button>
            <div style={{ height: '1px', background: theme.border, marginBottom: '14px' }} />
            <div style={{ padding: '14px 16px', background: theme.bgSecondary, border: `1px solid ${theme.border}`, borderRadius: '10px' }}>
              <QRCodeWidget url="https://projet-turing.com/livre-blanc" size={120} theme={theme} />
            </div>
          </div>
        </ModalWrap>
      )}

      {/* Quit confirm modal */}
      {showQuitConfirm && (
        <ModalWrap theme={theme} onClose={() => setShowQuitConfirm(false)} small>
          <div style={{ padding: '30px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '20px', fontWeight: 400, marginBottom: '7px', fontVariantLigatures: 'none' }}>Quitter le studio ?</h2>
            <p style={{ fontSize: '13px', color: theme.textMuted, marginBottom: '22px', lineHeight: 1.5 }}>Vos progrès de lecture resteront sauvegardés.</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => setShowQuitConfirm(false)} style={{ flex: 1, padding: '10px', background: theme.bgSecondary, border: `1px solid ${theme.border}`, borderRadius: '8px', fontSize: '13px', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit', color: theme.text }}>Annuler</button>
              <button onClick={() => setShowQuitConfirm(false)} style={{ flex: 1, padding: '10px', background: theme.accent, color: '#FFF', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit' }}>Quitter</button>
            </div>
          </div>
        </ModalWrap>
      )}

      {/* Guide onboarding */}
      {showGuide && <GuideModal onClose={handleCloseGuide} theme={theme} userName={userName} setUserName={setUserName} />}

      {/* Résumé PDF */}
      {showResume && <ResumePDFModal onClose={() => setShowResume(false)} theme={theme} />}
    </div>
  );
}

export default ProjetTuringShell;
