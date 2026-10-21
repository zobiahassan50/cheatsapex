import type { IconName } from '../components/icons/types';
import { checkoutPath } from '../config/checkout';
import type { LocaleCode } from '../i18n/locales';
import { withLocalePrefix } from '../i18n/utils';

export interface ProductShowcaseFeature {
  id: string;
  title: string;
  badge: string;
  icon: IconName;
  items: string[];
  image: string;
  imageAlt: string;
}

type ShowcaseCopy = {
  eyebrow: string;
  description: string;
  statusLabel: string;
  statusMeta: string;
  includedLabel: string;
  seoParagraphs: string[];
};

const showcaseCopy: Record<LocaleCode, ShowcaseCopy> = {
  en: {
    eyebrow: 'Products',
    description:
      'Apex Legends cheats hub for player ESP, advanced aimbot, loot ESP, and EAC bypass. Plans: 1 Week $15 · 1 Month $35 · Lifetime $150.',
    statusLabel: 'Active',
    statusMeta: '1 Week $15 · 1 Month $35 · Lifetime $150',
    includedLabel: 'Included with Apex',
    seoParagraphs: [
      'This Apex Legends products hub lists apex cheats in one place—ESP, wallhack overlays, aimbot, loot tools, stream proof, and Cloud-DMA / AWS options. Plans: 1 Week $15, 1 Month $35, or Lifetime $150.',
      'Browse player ESP, box ESP, skeleton ESP, weapon ESP, distance ESP, health bar, no recoil, and related modules side by side. Builds are retested after Apex and EA Javelin patches.',
      'Compare apex legends cheat modules, open Elite for the full combat suite, or pair with HWID Spoofer, UGC, and Skin Changer utilities when you need them.',
      'Windows 10/11 via EA App only. Check the Active status banner and Discord #status before every Ranked session.',
    ],
  },
  pt: {
    eyebrow: 'Produtos',
    description:
      'Hub de cheats Apex Legends: player ESP, aimbot e loot. Planos: 1 semana $15 · 1 mês $35 · vitalício $150.',
    statusLabel: 'Ativo',
    statusMeta: '1 semana $15 · 1 mês $35 · Vitalício $150',
    includedLabel: 'Incluído no Apex',
    seoParagraphs: [
      'Este hub agrupa cheats de Apex Legends — ESP, wallhack, aimbot e loot.',
      'Compare player ESP, loot ESP, EAC bypass e opções Cloud-DMA / AWS.',
      'Abra o checkout no plano que você precisa.',
    ],
  },
  ru: {
    eyebrow: 'Продукты',
    description:
      'Читы Apex Legends: player ESP, aimbot и loot. Тарифы: 1 неделя $15 · 1 месяц $35 · навсегда $150.',
    statusLabel: 'Active',
    statusMeta: '1 неделя $15 · 1 месяц $35 · Навсегда $150',
    includedLabel: 'Включено в Apex',
    seoParagraphs: [
      'Каталог читов Apex Legends — ESP, wallhack, aimbot и loot.',
      'Cloud-DMA и AWS доступны в списке модулей.',
      'Выберите тариф на checkout.',
    ],
  },
  tr: {
    eyebrow: 'Ürünler',
    description:
      'Apex Legends cheatleri: player ESP, aimbot ve loot. Planlar: 1 hafta $15 · 1 ay $35 · ömür boyu $150.',
    statusLabel: 'Aktif',
    statusMeta: '1 hafta $15 · 1 ay $35 · Ömür boyu $150',
    includedLabel: 'Apex ile birlikte',
    seoParagraphs: [
      'Apex Legends cheatleri — ESP, wallhack, aimbot ve loot — bu hub’da.',
      'Cloud-DMA ve AWS seçenekleri listede.',
      'İhtiyacınız olan plana göre checkout’a gidin.',
    ],
  },
  de: {
    eyebrow: 'Produkte',
    description:
      'Apex Legends Cheats: Player ESP, Aimbot und Loot. Pläne: 1 Woche $15 · 1 Monat $35 · Lifetime $150.',
    statusLabel: 'Aktiv',
    statusMeta: '1 Woche $15 · 1 Monat $35 · Lifetime $150',
    includedLabel: 'In Apex enthalten',
    seoParagraphs: [
      'Dieser Hub bündelt Apex Legends Cheats — ESP, Wallhack, Aimbot und Loot.',
      'Cloud-DMA und AWS Optionen sind gelistet.',
      'Öffne Checkout für den passenden Plan.',
    ],
  },
  pl: {
    eyebrow: 'Produkty',
    description:
      'Cheaty Apex Legends: player ESP, aimbot i loot. Plany: 1 tydzień $15 · 1 miesiąc $35 · lifetime $150.',
    statusLabel: 'Active',
    statusMeta: '1 tydzień $15 · 1 miesiąc $35 · Lifetime $150',
    includedLabel: 'W zestawie Apex',
    seoParagraphs: [
      'Hub cheatów Apex Legends — ESP, wallhack, aimbot i loot.',
      'Opcje Cloud-DMA i AWS są na liście.',
      'Wybierz plan przy checkout.',
    ],
  },
  fr: {
    eyebrow: 'Produits',
    description:
      'Cheats Apex Legends : player ESP, aimbot et loot. Plans : 1 semaine $15 · 1 mois $35 · lifetime $150.',
    statusLabel: 'Actif',
    statusMeta: '1 semaine $15 · 1 mois $35 · Lifetime $150',
    includedLabel: 'Inclus avec Apex',
    seoParagraphs: [
      'Ce hub regroupe les cheats Apex Legends — ESP, wallhack, aimbot et loot.',
      'Options Cloud-DMA et AWS listées.',
      'Ouvrez le checkout selon votre plan.',
    ],
  },
  es: {
    eyebrow: 'Productos',
    description:
      'Cheats de Apex Legends: player ESP, aimbot y loot. Planes: 1 semana $15 · 1 mes $35 · lifetime $150.',
    statusLabel: 'Activo',
    statusMeta: '1 semana $15 · 1 mes $35 · Lifetime $150',
    includedLabel: 'Incluido con Apex',
    seoParagraphs: [
      'Este hub agrupa cheats de Apex Legends — ESP, wallhack, aimbot y loot.',
      'Opciones Cloud-DMA y AWS en la lista.',
      'Abre el checkout según el plan que necesitas.',
    ],
  },
};

/** Hub showcase aligned with Levo Apex Legends Cheats listing. */
const apexProductShowcaseBase = {
  eyebrow: 'Products',
  title: 'APEX LEGENDS',
  description:
    'Apex Legends cheats hub for player ESP, advanced aimbot, loot ESP, and EAC bypass. Plans: 1 Week $15 · 1 Month $35 · Lifetime $150.',
  statusLabel: 'Active',
  statusMeta: '1 Week $15 · 1 Month $35 · Lifetime $150',
  buyUrl: checkoutPath('apex'),
  detailsUrl: '/products/apex-cheats/apex-elite/',
  includedLabel: 'Included with Apex',
  features: [
    {
      id: 'aimbot',
      title: 'Aimbot',
      badge: 'Included',
      icon: 'crosshair',
      items: ['Advanced Aimbot', 'No Recoil'],
      image: '/images/gameplay/apex-aimbot-combat.png',
      imageAlt:
        'Apex Legends aimbot combat view with scoped ESP box lock on an enemy player',
    },
    {
      id: 'player-esp',
      title: 'Player ESP',
      badge: 'Included',
      icon: 'eye',
      items: [
        'Player ESP',
        'Box ESP',
        'Skeleton ESP',
        'Health Bar',
        'Distance ESP',
      ],
      image: '/images/gameplay/apex-player-esp.png',
      imageAlt:
        'Apex Legends player ESP with green boxes, health bars, and distance tags while ADS',
    },
    {
      id: 'loot-esp',
      title: 'Loot ESP',
      badge: 'Included',
      icon: 'radar',
      items: ['Loot ESP', 'Weapon ESP'],
      image: '/images/gameplay/apex-loot-radar.png',
      imageAlt:
        'Apex Legends loot and item ESP with Hands markers, enemy boxes, and range labels',
    },
    {
      id: 'misc',
      title: 'Misc',
      badge: 'Included',
      icon: 'settings',
      items: [
        'EAC Bypass',
        'Stream Proof',
        '24/7 Support',
        'CLOUD-DMA OPTION',
        'AWS option',
      ],
      image: '/images/gameplay/apex-esp-wallhack.png',
      imageAlt:
        'Apex Legends skeleton ESP wallhack showing players through walls with boxes and distances',
    },
  ] satisfies ProductShowcaseFeature[],
};

export function getApexProductShowcase(locale: LocaleCode = 'en') {
  const copy = showcaseCopy[locale] ?? showcaseCopy.en;
  return {
    ...apexProductShowcaseBase,
    ...copy,
    buyUrl: apexProductShowcaseBase.buyUrl,
    detailsUrl: withLocalePrefix(apexProductShowcaseBase.detailsUrl, locale),
  };
}

/** @deprecated Prefer getApexProductShowcase(locale) */
export const apexProductShowcase = getApexProductShowcase('en');
