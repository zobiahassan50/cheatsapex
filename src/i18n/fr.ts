import type { Translations } from './types';
import { DISCORD_URL, PRODUCT_BASE } from '../config/site';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';

const productBase = PRODUCT_BASE;

/** Full conversion — France. */
export const fr: Partial<Translations> = {
  site: {
    name: 'Apex Cheats',
    domain: 'cheatsapex.com',
    title: 'Acheter des cheats Apex | Aimbot & ESP Apex Legends',
    description:
      'Achetez des cheats Apex Legends pour PC : aimbot, player ESP, loot ESP, no recoil et stream proof. Plans dès $15 / semaine. Mis à jour après les patchs EA Javelin.',
    discord: DISCORD_URL,
  },
  nav: [
    { href: `${productBase}`, label: 'Produits' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'Apex en ligne',
    eyebrow: 'Cheats Apex',
    titleLine1: 'Apex Cheats',
    titleLine2: 'Aimbot, ESP & Wallhack',
    subtitle:
      'Achetez des cheats Apex pour PC — aimbot, ESP, wallhack, radar et loot ESP pour Battle Royale et Ranked. Mis à jour après chaque patch EAC.',
    ctaPrimary: 'Acheter les cheats',
    ctaDiscord: 'Rejoindre Discord',
    modesLabel: 'Modes',
    modes: ['Battle Royale', 'Ranked', 'Mixtape', 'Arenas'],
    metrics: [
      { label: 'Stream-safe', strong: 'Oui' },
      { label: 'Vitesse de patch', strong: '<24h' },
      { label: 'Joueurs', strong: '300+' },
      { label: 'Support', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Fonctions du cheat',
    title: 'Modules de cheat Apex',
    subtitle:
      'Player ESP, aimbot avancé, loot ESP, no recoil, stream proof, EAC bypass et Cloud-DMA / AWS — la suite live de cheats Apex Legends pour PC.',
    items: [
      {
        title: 'Advanced Aimbot',
        subtitle: 'Suivi de combat',
        desc: 'Aimbot avancé pour Battle Royale et Ranked avec no recoil pour un tracking stable en fight.',
        bullets: ['Advanced Aimbot', 'No Recoil', 'Presets Pubs et Ranked'],
        tags: ['apex aimbot', 'no recoil', 'ranked'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP',
        subtitle: 'Voir les ennemis à travers les murs',
        desc: 'Player ESP avec box, skeleton, health bar et distance pour repérer les squads avant le push.',
        bullets: ['Player ESP', 'Box ESP et Skeleton ESP', 'Health Bar et Distance ESP'],
        tags: ['apex ESP', 'wallhack', 'player boxes'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Weapon & Loot ESP',
        subtitle: 'Armes et loot au sol',
        desc: 'Weapon ESP et loot ESP mettent en avant les armes utiles et le loot pour s’équiper plus vite.',
        bullets: ['Weapon ESP', 'Loot ESP', 'Rotations plus rapides'],
        tags: ['weapon ESP', 'loot ESP', 'POI'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
      {
        title: 'Stream Proof',
        subtitle: 'Masquer les overlays en stream',
        desc: 'Vous voyez l’ESP et l’aimbot à l’écran. OBS et Game Bar capturent un flux de jeu propre.',
        bullets: ['Stream Proof', 'Capture OBS-safe', 'Toggle en live'],
        tags: ['stream proof', 'OBS safe', 'capture hide'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'EAC Bypass',
        subtitle: 'Livraison après patchs',
        desc: 'Les builds EAC bypass sont retestées après les mises à jour Apex et EA Javelin. Vérifiez le statut avant de lancer.',
        bullets: ['EAC Bypass', 'Statut après patchs', 'Discord #status'],
        tags: ['eac bypass', 'javelin', 'apex anti cheat'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Cloud-DMA & AWS',
        subtitle: 'Options de livraison',
        desc: 'CLOUD-DMA OPTION et AWS option pour les joueurs qui ont besoin de chemins de livraison alternatifs listés sur le catalogue Apex.',
        bullets: ['CLOUD-DMA OPTION', 'AWS option', '24/7 Support'],
        tags: ['apex dma cheats', 'cloud dma', 'aws'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-4',
      },
      {
        title: '24/7 Support',
        subtitle: 'Aide Discord',
        desc: 'Support Discord direct pour le setup du loader, les configs et les questions post-patch.',
        bullets: ['24/7 Support', 'Guides de setup', 'Aide configs'],
        tags: ['discord support', 'setup', 'loader'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-4',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Pourquoi nos cheats',
    title: 'Des cheats Apex qui restent en ligne',
    subtitle:
      'La plupart des boutiques tombent après les patchs EAC et vous laissent avec des bots. Nous livrons vite les updates du loader, gardons des defaults aimbot sûrs pour Ranked et répondons sur Discord 24/7.',
    usLabel: 'Apex Cheats',
    otherLabel: 'Boutique typique',
    rows: [
      {
        title: 'Updates loader après patchs',
        desc: 'Les nouveaux builds sortent en général en quelques heures après une mise à jour Apex ou EA Javelin. Vérifiez Discord #status avant de queue.',
      },
      {
        title: 'Defaults aimbot fluides',
        desc: 'Smoothness, FOV et bone priority par défaut sont réglés pour Ranked. Vous pourrez les resserrer plus tard.',
      },
      {
        title: 'Support Discord',
        desc: 'L’équipe Discord aide pour le setup du loader, les configs d’armes et les resets HWID. Couverture 24/7.',
      },
      {
        title: 'Loader external + stream proof',
        desc: 'Loader external avec mode OBS-safe pour garder les overlays hors de votre stream.',
      },
      {
        title: 'Configs cloud',
        desc: 'Enregistrez les réglages Battle Royale, Ranked et par arme, puis chargez-les sur un autre PC.',
      },
      {
        title: 'Resets HWID',
        desc: 'Resets matériel et transferts de licence passent par Discord. La plupart des boutiques vous verrouillent sur un seul PC.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Délai après patch',
        desc: 'Délai habituel pour livrer un loader après une grosse mise à jour Apex ou EA Javelin.',
      },
      {
        value: '24/7',
        title: 'Support',
        desc: 'Aide Discord pour le setup, les configs et les problèmes de compte.',
      },
      {
        value: '300+',
        title: 'Joueurs',
        desc: 'Joueurs PC utilisant aimbot, ESP et outils sur cheatsapex.com.',
      },
    ],
  },
  setup: {
    eyebrow: 'Installation',
    titleLead: 'Achetez. Jouez en',
    titleHighlight: 'trois étapes',
    intro:
      'Achetez votre cheat Apex, téléchargez le loader, chargez un preset, puis lancez Apex. Discord est là si vous bloquez.',
    ctaPrimary: 'Acheter les cheats',
    ctaSecondary: 'Voir la FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Étape 1',
        title: 'Acheter et télécharger le loader',
        desc: 'Terminez le checkout, ouvrez le portail et téléchargez le dernier loader Windows.',
      },
      {
        step: 'Étape 2',
        title: 'Charger les presets',
        desc: 'Lancez le loader, choisissez un preset Pubs ou Ranked, et réglez aimbot et ESP.',
      },
      {
        step: 'Étape 3',
        title: 'Vérifier le statut et jouer',
        desc: 'Confirmez que la bannière de statut est online, lancez Apex via EA App et utilisez votre config sauvegardée.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Plateforme',
    title: 'Windows PC',
    subtitle: 'Vérifiez la bannière de statut après les mises à jour Apex avant de lancer.',
    items: [
      'Windows 10 & 11',
      'EA Launcher',
      'Client Apex',
      'Auto updater',
      'Sync cloud des configs',
      'Support Discord',
      'Reset HWID',
      'Loader external',
    ],
  },
  cheats: {
    eyebrow: 'Cheat Elite',
    title: 'Cheats Apex Elite',
    subtitle:
      'Cheats Apex Legends pour PC — player ESP, aimbot avancé, loot ESP, no recoil, stream proof, EAC bypass, Cloud-DMA et AWS. Plans : 1 semaine $15 · 1 mois $35 · Lifetime $150.',
    viewAll: 'Voir les détails Elite',
    explore: 'Explorer',
    items: [
      {
        badge: 'Active',
        tier: 'Private',
        name: 'Elite',
        title: 'Apex Elite Cheats',
        desc: 'Achetez des cheats Apex Legends avec player ESP, aimbot avancé, weapon ESP, loot ESP, no recoil, stream proof, EAC bypass et support Discord 24/7. 1 semaine $15 · 1 mois $35 · Lifetime $150.',
        features: [
          'Player ESP',
          'Advanced Aimbot',
          'Weapon ESP',
          'Health Bar',
          'Distance ESP',
          'Box ESP',
          'Skeleton ESP',
          'Loot ESP',
          'No Recoil',
          'EAC Bypass',
          'Stream Proof',
          '24/7 Support',
          'CLOUD-DMA OPTION',
          'AWS option',
        ],
        more: 14,
        href: `${productBase}apex-elite/`,
        variant: 'limited',
      },
    ],
  },
  products: {
    eyebrow: 'Boutique',
    title: 'Acheter des cheats Apex',
    subtitle: 'Cheats Apex Elite, HWID spoofer, récupération UGC et Skin Changer — choisissez ce qu’il vous faut.',
    viewAll: 'Voir tous les cheats',
    get: 'Acheter',
    explore: 'Explorer',
    items: [
      {
        badge: 'Available',
        category: 'Utilitaire système',
        title: 'Apex HWID Spoofer',
        subtitle: 'Page blanche pour votre PC',
        desc: 'Achetez un HWID spoofer Apex pour serials disque, adresses MAC et GPU ID — suivez le guide du portail avant de relancer les cheats.',
        features: [
          'HWID Spoofer',
          'Apex Cleaner',
          'Outils disk serial',
          'Rotation adresse MAC',
          'Spoof GPU ID',
          'Scan de compatibilité',
          'Check conflits drivers',
          'Vérification post-spoof',
          'Guide cold reboot',
        ],
        more: 4,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Available',
        category: 'Récupération de compte',
        title: 'Outils Apex UGC Unban',
        subtitle: 'Unban & contrôle de gouvernance',
        desc: 'Achetez des outils Apex UGC pour restrictions de compte EA, bans EAC et security holds — workflows d’appel personnalisés et automatisation des litiges.',
        features: [
          'Appels compte EA',
          'Workflows ban EAC',
          'Automatisation litiges',
          'Documentation des dossiers',
          'Modèles de preuves',
          'Tableau de suivi statut',
          'Aide restriction holds',
        ],
        more: 3,
        href: `${productBase}ban-appeal/`,
      },
      {
        badge: 'Available',
        category: 'Cosmétique',
        title: 'Apex Skin Changer',
        subtitle: 'Débloquez tous les cosmétiques en local',
        desc: 'Achetez Apex Skin Changer / Unlock All pour skins de légende, skins d’armes et heirlooms — aperçu local sans achats boutique EA.',
        features: [
          'Swap skins légende',
          'Weapon skin changer',
          'Personnalisateur heirloom',
          'Aperçu Unlock All',
          'Aperçu sets exclusifs',
          'Export favoris loadout',
          'Client local uniquement',
        ],
        more: 7,
        href: `${productBase}unlock-all/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Guides cheats',
    title: 'Guides des cheats Apex Legends',
    subtitle: 'Setup aimbot, config ESP wallhack, tips Arenas et checks le jour du patch EAC.',
    latestTitle: 'Guides des cheats Apex Legends',
    latestSubtitle:
      'Guides pour aimbot undetected, ESP wallhack, loot ESP, statut EA Javelin et récupération HWID — filtrez par sujet ci-dessous.',
    filterAll: 'Tous les articles',
    sortLabel: 'Trier par',
    sortNewest: 'Plus récents',
    sortOldest: 'Plus anciens',
    sortShortRead: 'Lecture la plus courte',
    sortLongRead: 'Lecture la plus longue',
    emptyFilter: 'Aucun article ne correspond à ce filtre.',
    viewAll: 'Voir tous les articles',
    read: 'Lire',
    allArticles: 'Tous les articles',
    inThisArticle: 'Dans cet article',
    relatedGuides: 'Guides liés',
    ourProducts: 'Nos produits',
    buyApexCheats: 'Acheter Apex Cheats',
    items: [
      {
        tag: 'Guides',
        title: 'Meilleurs cheats & hacks Apex Legends 2026 : Aimbot, ESP & Wallhack',
        slug: 'best-cheats',
        image: '/images/blog/best-apex-legends-cheats-2026.png',
        desc: 'Comparez les meilleurs cheats Apex Legends en 2026 — aimbot undetected, ESP wallhack, loot ESP et outils HWID conçus pour EA Javelin sur PC.',
        date: '19 oct. 2026',
        readTime: '14 min de lecture',
      },
      {
        tag: 'Setup',
        title: 'Guide de l’aimbot Apex Legends undetected pour Ranked PC (2026)',
        slug: 'apex-aimbot',
        image: '/images/blog/undetected-apex-legends-aimbot.png',
        desc: 'Configurez un aimbot Apex Legends undetected pour Ranked — smoothness, FOV, bone priority et profils par arme après EA Javelin.',
        date: '8 sept. 2026',
        readTime: '12 min de lecture',
      },
      {
        tag: 'Setup',
        title: 'Guide ESP Wallhack Apex Legends 2026 : Player, Glow & Distance',
        slug: 'esp-wallhack',
        image: '/images/blog/apex-legends-esp-wallhack-2026.png',
        desc: 'Guide ESP wallhack Apex Legends 2026 — boxes joueurs, glow, santé, distance et loot ESP réglés pour Ranked et Battle Royale.',
        date: '14 août 2026',
        readTime: '13 min de lecture',
      },
      {
        tag: 'Mises à jour',
        title: 'EA Javelin Anticheat sur Apex Legends : statut des cheats & updates',
        slug: 'ea-javelin',
        image: '/images/blog/ea-javelin-anticheat-apex-cheats.png',
        desc: 'EA Javelin Anticheat a remplacé EAC sur Apex Legends PC. Comment fonctionnent le statut des cheats, les jours de patch et les bans HWID en 2026.',
        date: '22 juil. 2026',
        readTime: '11 min de lecture',
      },
      {
        tag: 'Produits',
        title: 'HWID Spoofer Apex Legends pour bans EA Javelin (2026)',
        slug: 'hwid-guide',
        image: '/images/blog/apex-legends-hwid-spoofer-javelin.png',
        desc: 'Guide du HWID spoofer Apex Legends pour bans matériels EA Javelin — quand spoofer, quand créer un nouveau compte et comment vérifier le statut.',
        date: '30 juin 2026',
        readTime: '9 min de lecture',
      },
      {
        tag: 'Setup',
        title: 'Comment acheter des cheats Apex undetected en 2026 (checkout sûr)',
        slug: 'buy-cheats',
        image: '/images/blog/buy-undetected-apex-cheats.png',
        desc: 'Comment acheter des cheats Apex Legends undetected en 2026 — choisissez un tier, vérifiez le statut EA Javelin et finalisez un checkout sécurisé.',
        date: '5 juin 2026',
        readTime: '8 min de lecture',
      },
      {
        tag: 'Guides',
        title: 'Les cheats Apex Legends sont-ils sûrs en 2026 ? Détection, bans & risque',
        slug: 'cheat-safety',
        image: '/images/blog/are-apex-legends-cheats-safe-2026.png',
        desc: 'Les cheats Apex Legends sont-ils sûrs en 2026 ? Comment fonctionnent vraiment la détection EA Javelin, les vagues de bans et les promesses « undetected ».',
        date: '12 mai 2026',
        readTime: '7 min de lecture',
      },
      {
        tag: 'Fonctionnalités',
        title: 'Fonctions des cheats Apex : aimbot, bots, ESP wallhack et plus',
        slug: 'cheat-features',
        image: '/images/blog/apex-cheats-features-guide.png',
        desc: 'Guide complet de nos cheats Apex — Aimbot, Loot Assist, Skin Changer, Radar Hack, ESP Wallhack et Auto Shield Break.',
        date: '18 avr. 2026',
        readTime: '5 min de lecture',
      },
      {
        tag: 'Guides',
        title: 'Apex Lite vs Pro : quel tier vous convient',
        slug: 'elite-guide',
        image: '/images/blog/apex-lite-vs-pro.png',
        desc: 'Conscience de map vs automatisation aimbot — comparez les cheats Apex Lite et Pro pour Battle Royale et Ranked.',
        date: '27 mars 2026',
        readTime: '10 min de lecture',
      },
      {
        tag: 'Guides',
        title: 'Guide Apex Skin Changer / Unlock All',
        slug: 'skin-guide',
        image: '/images/blog/apex-skin-changer-guide.png',
        desc: 'Prévisualisez en local skins de légende, skins d’armes et sets exclusifs avec notre module Unlock All Skin Changer.',
        date: '3 mars 2026',
        readTime: '6 min de lecture',
      },
      {
        tag: 'Guides',
        title: 'Guide du cheat Apex external',
        slug: 'external-cheat',
        image: '/images/blog/apex-external-cheat-guide.png',
        desc: 'Pourquoi les cheats Apex external comptent, comment fonctionne le loader external sur PC et ce qui rend un logiciel privé plus sûr que les outils gratuits.',
        date: '11 févr. 2026',
        readTime: '16 min de lecture',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Menu du cheat',
    title: 'Menu cheat Apex, organisé',
    subtitle:
      'Chaque module est groupé pour régler aimbot et ESP en plein match sans fouiller dans le chaos.',
    items: [
      {
        num: '01',
        label: 'Aimbot',
        title: 'Tracking adapté par arme',
        desc: 'Smoothness, FOV, Sticky Aim et Bone Priority dans un seul onglet aimbot.',
      },
      {
        num: '02',
        label: 'ESP',
        title: 'Wallhack qui reste lisible',
        desc: 'Boxes, skeletons, distance, santé et filtres de couleur d’équipe.',
      },
      {
        num: '03',
        label: 'Radar',
        title: 'Loot et rotates sous contrôle',
        desc: 'Points ennemis, timers de loot et mini-radar sur un overlay compact.',
      },
      {
        num: '04',
        label: 'Weapons',
        title: 'Profils aimbot par arme',
        desc: 'Sauvez des presets AR, SMG, shotgun et sniper et basculez avec des hotkeys.',
      },
      {
        num: '05',
        label: 'Loot',
        title: 'Chest ESP & loot assist',
        desc: 'Highlights de coffres, drops rares et pathing loot-assist Elite.',
      },
      {
        num: '06',
        label: 'Profiles',
        title: 'Configs pour chaque mode',
        desc: 'Presets Battle Royale, Ranked et Arenas avec backup cloud.',
      },
    ],
  },
  workflow: {
    eyebrow: 'Comment ça marche',
    badge: '4 étapes',
    titleBefore: 'De l’achat aux',
    titleHighlight: 'cheats in-game.',
    subtitle: 'Achetez des cheats Apex, téléchargez le loader, activez les modules, sauvez votre config pour le prochain match.',
    ctaLabel: 'Acheter les cheats',
    ctaHref: productBase,
    ctaSecondary: 'FAQ setup',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Avant l’achat',
        title: 'Vérifier le statut',
        desc: 'Lisez la bannière live sur cheatsapex.com avant d’acheter ou de lancer.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choisir un tier',
        desc: 'Choisissez Lite, Pro ou Elite selon les modules dont vous avez besoin.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Lancer et configurer',
        desc: 'Téléchargez depuis le portail, activez les modules et testez en Arenas ou bot lobby.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Sauvegarder la config',
        desc: 'Quand les réglages sont bons, sauvez les presets Battle Royale et Ranked dans le cloud.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Notes',
    title: 'Astuces rapides',
    items: [
      {
        num: '01',
        title: 'Après les patchs',
        desc: 'Vérifiez Discord et le statut du portail avant de queue Ranked après une mise à jour Apex.',
      },
      {
        num: '02',
        title: 'Commencez doucement',
        desc: 'Utilisez d’abord le smoothness aimbot et la portée ESP par défaut, puis montez si besoin.',
      },
      {
        num: '03',
        title: 'Aide Discord',
        desc: 'Bloqué sur le loader ou les configs ? Demandez sur Discord, quelqu’un vous guidera.',
      },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Support Apex Cheats',
    subtitle: 'Aide loader, HWID, checkout et compte.',
    channels: [
      {
        icon: 'users',
        title: 'Avant d’acheter',
        desc: 'Posez vos questions sur les tiers et le contenu de chaque produit.',
        linkLabel: 'Démarrer le checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Support e-mail',
        desc: 'Erreurs loader, HWID et problèmes de compte.',
        linkLabel: 'support@cheatsapex.com',
        href: 'mailto:support@cheatsapex.com',
      },
      {
        icon: 'navFaq',
        title: 'FAQ',
        desc: 'Compatibilité, bans et réponses setup.',
        linkLabel: 'Voir la FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Discord',
        desc: 'Support en ligne 24/7.',
        linkLabel: 'Rejoindre Discord',
        href: DISCORD_URL,
      },
    ],
    ticketTitle: 'À inclure dans votre ticket',
    ticketItems: [
      { title: 'E-mail de commande', desc: 'L’e-mail utilisé au checkout sur cheatsapex.com.' },
      { title: 'Plateforme', desc: 'Windows 10 ou 11, EA Launcher et votre version Apex.' },
      { title: 'Détail de l’erreur', desc: 'Capture ou texte exact du loader ou d’EA.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'FAQ Apex Cheats',
    subtitle:
      'Elite ESP & aimbot, HWID Spoofer, UGC, Skin Changer et statut EA Javelin — les mêmes réponses sur la homepage et cette page.',
    items: [
      {
        num: '01',
        q: 'Où vérifier si les cheats Apex sont en ligne ?',
        a: 'La bannière de statut live est sur cheatsapex.com et dans le canal Discord #status. Vérifiez toujours après une mise à jour Apex, EA Javelin ou de saison.',
      },
      {
        num: '02',
        q: 'Les cheats Apex Legends fonctionnent-ils avec EA Javelin Anticheat ?',
        a: 'Apex Legends PC utilise EA Javelin. Les builds privées Apex Cheats sont retestées après les patchs — confirmez la bannière de statut avant Ranked.',
      },
      {
        num: '03',
        q: 'Que se passe-t-il après l’achat ?',
        a: 'Votre portail débloque le loader, le guide de setup et la bibliothèque de configs via notre checkout sécurisé. Suivez le guide avant de lancer Apex.',
      },
      {
        num: '04',
        q: 'Quelles plateformes sont prises en charge ?',
        a: 'Apex via EA App sur Windows 10/11 64 bits uniquement. macOS et Linux ne sont pas supportés.',
      },
      {
        num: '05',
        q: 'Puis-je déplacer ma licence vers un nouveau PC ?',
        a: 'Oui — utilisez le reset HWID dans votre portail ou ouvrez un ticket Discord. Les limites dépendent de votre produit.',
      },
      {
        num: '06',
        q: 'Où sont listés les produits et utilitaires ?',
        a: 'Apex Elite, HWID Spoofer, UGC et Skin Changer sont sur cheatsapex.com/products/apex-cheats avec listes de fonctions et checkout via notre partenaire.',
      },
    ],
  },
  footer: {
    tagline: 'Cheats Apex pour PC : aimbot, ESP, wallhack et outils.',
    explore: 'Explorer',
    exploreLinks: [
      { href: '/', label: 'Aperçu des fonctions', ariaLabel: 'Fonctions', scrollTarget: 'features' },
      { href: '/products/apex-cheats/apex-elite/', label: 'Cheats Apex Elite', ariaLabel: 'Cheats Elite' },
      { href: '/products/apex-cheats/', label: 'Tous les produits & utilitaires', ariaLabel: 'Produits' },
      { href: '/blog/', label: 'Lire les guides de patch', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'FAQ pré-achat', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Mentions légales',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions générales',
    about: 'À propos',
  },
  legalPages: {
    about: {
      title: 'À propos d’Apex Cheats | Acheter Aimbot & ESP PC',
      description:
        'À propos d’Apex Cheats — achetez des cheats Apex PC (aimbot, ESP, wallhack), utilitaires et guides sur cheatsapex.com.',
      sections: [
        {
          heading: 'Qui nous sommes',
          paragraphs: [
            'Apex Cheats est un site PC pour les produits Apex aimbot, ESP, wallhack, radar et Skin Changer. Nous publions des comparaisons de tiers, des guides de setup et des notes de statut live.',
            'Les noms de jeux et de produits sont uniquement à des fins d’identification.',
          ],
        },
        {
          heading: 'Ce que nous vendons',
          paragraphs: [
            'Cheats Apex Lite, Pro et Elite, plus HWID Spoofer, Skin Changer et récupération UGC. Le blog couvre configs, checks de patch et mises à jour Easy Anti-Cheat.',
            'Les pages sont mises à jour quand Apex ou le loader change. Vérifiez la bannière de statut de la homepage et Discord #status avant de jouer.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Utilisez Discord ou l’e-mail pour les erreurs loader, la compatibilité et le checkout. Incluez votre e-mail de commande, compte EA et version Windows.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Politique de confidentialité | Boutique Apex Cheats',
      description:
        'Comment la boutique de cheats Apex sur cheatsapex.com traite analytics, cookies et données de contact.',
      sections: [
        {
          heading: 'Informations collectées',
          paragraphs: [
            'Nous pouvons collecter des analytics de base telles que les pages vues, le type d’appareil, le navigateur et une région approximative via Google Analytics lorsqu’il est activé. Le checkout s’effectue sur des pages externes. Nous ne stockons pas de données de carte bancaire sur cheatsapex.com.',
          ],
        },
        {
          heading: 'Utilisation des données',
          paragraphs: [
            'Les analytics montrent quels guides et pages produits sont utilisés pour corriger les liens cassés et améliorer les pages. Les tickets support conservent l’e-mail et le message jusqu’à la clôture.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'Nous utilisons des cookies analytics de base. Vous pouvez les bloquer dans votre navigateur. Le site fonctionne sans eux.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Pour les questions de confidentialité, utilisez la page Support. Les règles d’achat et de remboursement sont dans les Conditions générales.',
          ],
        },
      ],
    },
    terms: {
      title: 'Conditions Apex Cheats | Licence & remboursements',
      description:
        'Conditions pour acheter des cheats Apex sur cheatsapex.com — licence, livraison, remboursements et risque de compte.',
      sections: [
        {
          heading: 'Accord',
          paragraphs: [
            'Dernière mise à jour : septembre 2026. En utilisant cheatsapex.com ou en achetant un produit listé ici, vous acceptez ces Conditions générales et notre Politique de confidentialité.',
          ],
        },
        {
          heading: 'Ce que vous achetez',
          paragraphs: [
            'Nous vendons des tiers de cheats Apex (Lite, Pro, Elite) et des outils (HWID Spoofer, UGC, Skin Changer / Unlock All) via un portail et un loader Windows pour EA.',
            'Les pages produits listent ce qui est inclus à l’achat. Les fonctions peuvent changer quand Apex ou Easy Anti-Cheat est mis à jour.',
          ],
        },
        {
          heading: 'Checkout et livraison',
          paragraphs: [
            'Le paiement et la livraison de licence s’effectuent sur des pages de checkout externes. cheatsapex.com ne traite ni ne stocke de numéros de carte.',
            'Après l’achat, utilisez le portail opérateur lié à votre flux de commande pour télécharger le loader actuel et le guide de setup avant de lancer Apex.',
          ],
        },
        {
          heading: 'Utilisation de la licence',
          paragraphs: [
            'Les licences sont pour votre usage personnel uniquement. Ne partagez pas les fichiers loader, les identifiants portail ou les clés de licence. Les limites HWID et appareils dépendent de votre tier et sont appliquées dans le portail.',
          ],
        },
        {
          heading: 'Remboursements et achats',
          paragraphs: [
            'Toutes les ventes sont finales une fois le checkout terminé. Nous ne remboursons pas les changements d’avis, les bans de compte, les pénalités EAC, ni les problèmes dus à l’ignorance des guides de setup ou à l’exécution de modules pendant que la bannière de statut indique offline.',
            'Si le produit ne fonctionne pas comme décrit sur une config supportée — Apex via EA App sur Windows 10/11, loader actuel du portail, et bannière live online au démarrage — contactez-nous via la page Support. Incluez votre e-mail de commande, version Windows, build Apex, et captures ou texte d’erreur exact du loader.',
            'Nous pouvons, à notre discrétion, proposer un correctif, un accès de remplacement ou un remboursement partiel/total lorsque nous confirmons une faute de notre côté. Nous ne sommes pas obligés d’approuver chaque demande.',
          ],
        },
        {
          heading: 'Disponibilité et risque',
          paragraphs: [
            'Les outils tiers pour Apex peuvent entrer en conflit avec les mises à jour du jeu et les systèmes anti-cheat. Vous utilisez ce logiciel à vos propres risques, y compris une éventuelle action sur le compte.',
            'Vérifiez la bannière de statut de la homepage avant chaque session. Ne queuez pas ranked tant que les modules sont offline ou désalignés après un patch.',
          ],
        },
        {
          heading: 'Modifications',
          paragraphs: [
            'Nous pouvons mettre à jour ces conditions. La date « Dernière mise à jour » en haut changera alors. Continuer à utiliser le site après les changements signifie que vous acceptez les conditions révisées.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Pour les questions de conditions, de facturation ou de loader, utilisez les boutons de la page Support. Voir aussi notre Politique de confidentialité pour le traitement des données du site.',
          ],
        },
      ],
    },
    support: {
      title: 'Support Apex Cheats | Loader, HWID & Checkout',
      description:
        'Support cheats Apex pour setup loader, spoofing HWID et aide checkout sur cheatsapex.com.',
    },
  },
  ui: {
    skipLink: 'Aller au contenu principal',
    browseCheats: 'Essayer',
    browseCheatsMobile: 'Démarrer le paiement',
    buyNow: 'Acheter maintenant',
    viewDetails: 'Voir les détails',
    homeAria: 'Accueil Apex Cheats',
    checkoutAria: 'Démarrer le checkout',
    discordAria: 'Rejoindre Apex Cheats sur Discord',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
    themeLight: 'Passer en mode clair',
    themeDark: 'Passer en mode sombre',
    home: 'Accueil',
  },
  productHub: {
    pricingEyebrow: 'Tarifs',
    plansTitle: 'Plans de cheats Apex Legends',
    plansDesc:
      'Les mêmes modules sur chaque plan—player ESP, aimbot avancé, loot ESP, EAC bypass, stream proof, et Cloud-DMA / AWS en option.',
    modulesEyebrow: 'Modules',
    modulesTitle: 'Ce qui est inclus',
    modulesDesc: 'Modules de cheats Apex essentiels sur Lite, Pro et Elite.',
    catalogEyebrow: 'Catalogue',
    catalogTitle: 'Plus d’outils Apex',
    catalogDesc: 'HWID Spoofer, récupération UGC et Skin Changer aux côtés des cheats Elite.',
    stepsEyebrow: 'Comment ça marche',
    stepsTitle: 'Du checkout au jeu',
    stepsDesc: 'Achetez, téléchargez le loader, activez les modules, puis queuez quand le statut est online.',
    faqEyebrow: 'FAQ',
    faqTitle: 'FAQ du hub produits',
    faqDesc: 'Réponses rapides sur les offres, le statut et la livraison.',
  },
} as Partial<Translations>;
