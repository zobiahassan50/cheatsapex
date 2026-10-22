import type { Translations } from './types';
import { DISCORD_URL, PRODUCT_BASE } from '../config/site';

const productBase = PRODUCT_BASE;

/** Medium conversion — Germany. Full UI overlay (no English fallback for headings/copy). */
export const de: Partial<Translations> = {
  site: {
    name: 'Apex Cheats',
    domain: 'cheatsapex.com',
    title: 'Apex Legends Cheats kaufen | Aimbot & ESP',
    description:
      'Undetected Apex Legends Cheats für PC — Aimbot, ESP Wallhack, Loot ESP und HWID. Updates für EA Javelin nach jedem Patch.',
    discord: DISCORD_URL,
  },
  nav: [
    { href: `${productBase}`, label: 'Produkte' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'Apex online',
    eyebrow: 'Private Apex Legends Cheats',
    titleLine1: 'Apex Legends Cheats kaufen',
    titleLine2: 'Aimbot, ESP Wallhack & Loot ESP',
    subtitle:
      'Apex Legends Hacks für PC — undetected Aimbot, ESP Wallhack, Radar und Loot ESP für Battle Royale und Ranked. Nach jedem EAC-Patch aktualisiert.',
    ctaPrimary: 'Cheats kaufen',
    ctaDiscord: 'Discord beitreten',
    modesLabel: 'Modi',
    modes: ['Battle Royale', 'Ranked', 'Mixtape', 'Arenas'],
    metrics: [
      { label: 'Stream-safe', strong: 'Ja' },
      { label: 'Patch-Tempo', strong: '<24h' },
      { label: 'Nutzer', strong: '300+' },
      { label: 'Support', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Cheat-Features',
    title: 'Apex-Cheat-Module',
    subtitle:
      'Player ESP, Advanced Aimbot, Loot ESP, No Recoil, Stream Proof, EAC Bypass und Cloud-DMA / AWS — aktueller PC-Katalog für Apex Legends.',
    items: [
      {
        title: 'Advanced Aimbot',
        subtitle: 'Kampf-Tracking',
        desc: 'Advanced Aimbot für Battle Royale und Ranked mit No Recoil, damit das Tracking in Fights stabil bleibt.',
        bullets: ['Advanced Aimbot', 'No Recoil', 'Pubs- und Ranked-Presets'],
        tags: ['apex aimbot', 'no recoil', 'ranked'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP',
        subtitle: 'Gegner durch Wände',
        desc: 'Player ESP mit Box, Skeleton, Health Bar und Distance — Squads erkennen, bevor sie pushen.',
        bullets: ['Player ESP', 'Box ESP & Skeleton ESP', 'Health Bar & Distance ESP'],
        tags: ['apex ESP', 'wallhack', 'player boxes'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Weapon & Loot ESP',
        subtitle: 'Waffen und Loot',
        desc: 'Weapon ESP und Loot ESP markieren nutzbare Waffen und Bodenloot für schnelleres Gear-up.',
        bullets: ['Weapon ESP', 'Loot ESP', 'Schnellere Rotationen'],
        tags: ['weapon ESP', 'loot ESP', 'POI'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
      {
        title: 'Stream Proof',
        subtitle: 'Overlay verstecken',
        desc: 'Du siehst ESP und Aimbot auf dem Bildschirm. OBS und Game Bar erfassen einen sauberen Feed.',
        bullets: ['Stream Proof', 'OBS-safe Capture', 'Toggle live'],
        tags: ['stream proof', 'OBS safe', 'capture hide'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'EAC Bypass',
        subtitle: 'Patch-bewusst',
        desc: 'EAC-Bypass-Builds werden nach Apex- und EA-Javelin-Updates neu getestet. Status vor dem Start prüfen.',
        bullets: ['EAC Bypass', 'Status nach Patches', 'Discord #status'],
        tags: ['eac bypass', 'javelin', 'apex anti cheat'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Cloud-DMA & AWS',
        subtitle: 'Lieferoptionen',
        desc: 'CLOUD-DMA OPTION und AWS option für alternative Delivery-Pfade im Apex-Katalog.',
        bullets: ['CLOUD-DMA OPTION', 'AWS option', '24/7 Support'],
        tags: ['apex dma cheats', 'cloud dma', 'aws'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-4',
      },
      {
        title: '24/7 Support',
        subtitle: 'Discord-Hilfe',
        desc: 'Direkter Discord-Support für Loader-Setup, Configs und Fragen nach Patches.',
        bullets: ['24/7 Support', 'Setup-Walkthroughs', 'Config-Hilfe'],
        tags: ['discord support', 'setup', 'loader'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-4',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Warum wir',
    title: 'Apex Cheats, die online bleiben',
    subtitle:
      'Viele Shops sind nach EAC-Patches offline und lassen dich mit Bots allein. Wir liefern Loader-Updates schnell, halten Aimbot-Defaults für Ranked sicher und antworten auf Discord 24/7.',
    usLabel: 'Apex Cheats',
    otherLabel: 'Typischer Shop',
    rows: [
      {
        title: 'Updates nach Patches',
        desc: 'Neue Builds meist innerhalb von Stunden nach einem Apex- oder EA-Javelin-Update. Vor dem Queue Discord #status prüfen.',
      },
      {
        title: 'Weiche Aimbot-Defaults',
        desc: 'Smoothness, FOV und Bone Priority sind für Ranked gesetzt. Später kannst du enger drehen.',
      },
      {
        title: 'Discord-Support',
        desc: 'Hilfe zu Loader-Setup, Waffen-Configs und HWID-Resets. Abdeckung 24/7.',
      },
      {
        title: 'External + Stream Proof',
        desc: 'Externer Loader mit OBS-sicherem Modus — Overlays bleiben vom Stream weg.',
      },
      {
        title: 'Cloud-Configs',
        desc: 'Battle-Royale-, Ranked- und Waffen-Settings speichern und auf einem anderen PC laden.',
      },
      {
        title: 'HWID-Resets',
        desc: 'Hardware-Resets und Lizenzumzug über Discord. Viele Shops sperren dich auf einen PC.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Patch-Turnaround',
        desc: 'Übliche Zeit bis zum neuen Loader nach großem Apex- oder EA-Javelin-Update.',
      },
      {
        value: '24/7',
        title: 'Support',
        desc: 'Discord-Hilfe für Setup, Configs und Account-Themen.',
      },
      {
        value: '300+',
        title: 'Nutzer',
        desc: 'PC-Spieler mit Aimbot, ESP und Tools auf cheatsapex.com.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup',
    titleLead: 'Cheats kaufen. Spielen in',
    titleHighlight: 'drei Schritten',
    intro:
      'Apex Cheat kaufen, Loader laden, Preset setzen, Apex starten. Discord hilft, wenn du steckenbleibst.',
    ctaPrimary: 'Cheats kaufen',
    ctaSecondary: 'FAQ ansehen',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Schritt 1',
        title: 'Kaufen und Loader laden',
        desc: 'Checkout abschließen, Portal öffnen und den aktuellen Windows-Loader laden.',
      },
      {
        step: 'Schritt 2',
        title: 'Presets laden',
        desc: 'Loader starten, Pubs- oder Ranked-Preset wählen, Aimbot und ESP einstellen.',
      },
      {
        step: 'Schritt 3',
        title: 'Status prüfen und spielen',
        desc: 'Status-Banner online bestätigen, Apex in der EA App starten und gespeicherte Config nutzen.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Plattform',
    title: 'Windows PC',
    subtitle: 'Nach Apex-Updates das Status-Banner prüfen, bevor du startest.',
    items: [
      'Windows 10 & 11',
      'EA Launcher',
      'Apex-Client',
      'Auto-Updater',
      'Config Cloud-Sync',
      'Discord-Support',
      'HWID-Reset',
      'External Loader',
    ],
  },
  cheats: {
    eyebrow: 'Elite Cheat',
    title: 'Apex Elite Cheats',
    subtitle:
      'Apex Legends Cheats für PC — Player ESP, Advanced Aimbot, Loot ESP, No Recoil, Stream Proof, EAC Bypass, Cloud-DMA und AWS. Pläne: 1 Woche $15 · 1 Monat $35 · Lifetime $150.',
    viewAll: 'Elite-Details ansehen',
    explore: 'Entdecken',
    items: [
      {
        badge: 'Aktiv',
        tier: 'Private',
        name: 'Elite',
        title: 'Apex Elite Cheats',
        desc: 'Apex Legends Cheats mit Player ESP, Advanced Aimbot, Weapon ESP, Loot ESP, No Recoil, Stream Proof, EAC Bypass und 24/7 Discord-Support. 1 Woche $15 · 1 Monat $35 · Lifetime $150.',
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
    eyebrow: 'Shop',
    title: 'Apex Cheats kaufen',
    subtitle: 'Elite Apex Cheats, HWID Spoofer, UGC Recovery und Skin Changer — wähle, was du brauchst.',
    viewAll: 'Alle Cheats',
    get: 'Kaufen',
    explore: 'Entdecken',
    items: [
      {
        badge: 'Verfügbar',
        category: 'System-Utility',
        title: 'Apex HWID Spoofer',
        subtitle: 'Sauberer Neustart für deinen PC',
        desc: 'Apex HWID Spoofer für Disk-Serials, MAC-Adressen und GPU-IDs — Portal-Guide vor dem erneuten Cheat-Start folgen.',
        features: [
          'HWID Spoofer',
          'Apex Cleaner',
          'Disk-Serial-Tools',
          'MAC-Adress-Rotation',
          'GPU-ID-Spoof',
          'Kompatibilitäts-Scan',
          'Treiber-Konflikt-Check',
          'Nach-Spoof-Check',
          'Cold-Reboot-Guide',
        ],
        more: 4,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Verfügbar',
        category: 'Account-Recovery',
        title: 'Apex UGC Unban Tools',
        subtitle: 'Unban & Governance',
        desc: 'Apex UGC Tools für EA-Account-Restriktionen, EAC-Bans und Security Holds — Appeal-Workflows und Dispute-Automation.',
        features: [
          'EA-Account-Appeals',
          'EAC-Ban-Workflows',
          'Dispute-Automation',
          'Fall-Dokumentation',
          'Evidence-Templates',
          'Status-Dashboard',
          'Restriction-Holds-Hilfe',
        ],
        more: 3,
        href: `${productBase}ban-appeal/`,
      },
      {
        badge: 'Verfügbar',
        category: 'Kosmetik',
        title: 'Apex Skin Changer',
        subtitle: 'Alle Cosmetics lokal freischalten',
        desc: 'Apex Skin Changer / Unlock All für Legend-, Waffen- und Heirloom-Skins — lokale Vorschau ohne EA-Store-Käufe.',
        features: [
          'Legend-Skin-Swap',
          'Weapon Skin Changer',
          'Heirloom-Customizer',
          'Unlock-All-Vorschau',
          'Exclusive-Set-Vorschau',
          'Loadout-Favoriten-Export',
          'Nur lokaler Client',
        ],
        more: 7,
        href: `${productBase}unlock-all/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Cheat-Guides',
    title: 'Apex Legends Cheat-Guides',
    subtitle: 'Aimbot-Setup, ESP-Wallhack-Config, Arenas-Übung und EAC-Patch-Checks.',
    latestTitle: 'Apex Legends Cheat-Guides',
    latestSubtitle:
      'Guides zu undetected Aimbot, ESP Wallhack, Loot ESP, EA-Javelin-Status und HWID-Recovery — unten nach Thema filtern.',
    filterAll: 'Alle Artikel',
    sortLabel: 'Sortieren',
    sortNewest: 'Neueste zuerst',
    sortOldest: 'Älteste zuerst',
    sortShortRead: 'Kurzeste Lesezeit',
    sortLongRead: 'Längste Lesezeit',
    emptyFilter: 'Keine Artikel für diesen Filter.',
    viewAll: 'Alle Artikel',
    read: 'Lesen',
    allArticles: 'Alle Artikel',
    inThisArticle: 'In diesem Artikel',
    relatedGuides: 'Ähnliche Guides',
    ourProducts: 'Unsere Produkte',
    buyApexCheats: 'Apex Cheats kaufen',
    items: [
      {
        tag: 'Guides',
        title: 'Beste Apex-Legends-Cheats & Hacks 2026: Aimbot, ESP & Wallhack',
        slug: 'best-cheats',
        image: '/images/blog/best-apex-legends-cheats-2026.png',
        desc: 'Vergleiche die besten Apex-Legends-Cheats 2026: Undetected-Aimbot, ESP-Wallhack, Loot-ESP und HWID-Tools für EA Javelin auf dem PC.',
        date: '19. Okt. 2026',
        readTime: '14 Min. Lesezeit',
      },
      {
        tag: 'Setup',
        title: 'Undetected-Apex-Legends-Aimbot-Guide für Ranked am PC (2026)',
        slug: 'apex-aimbot',
        image: '/images/blog/undetected-apex-legends-aimbot.png',
        desc: 'Richte einen Undetected-Apex-Legends-Aimbot für Ranked ein: Glättung, FOV, Bone Priority und Profile pro Waffe nach EA Javelin.',
        date: '8. Sep. 2026',
        readTime: '12 Min. Lesezeit',
      },
      {
        tag: 'Setup',
        title: 'Apex-Legends-ESP-Wallhack-Guide 2026: Spieler, Glow & Distanz',
        slug: 'esp-wallhack',
        image: '/images/blog/apex-legends-esp-wallhack-2026.png',
        desc: 'ESP-Wallhack-Guide für Apex Legends 2026: Spieler-Boxen, Glow, Gesundheit, Distanz und Loot-ESP, abgestimmt auf Ranked und Battle Royale.',
        date: '14. Aug. 2026',
        readTime: '13 Min. Lesezeit',
      },
      {
        tag: 'Updates',
        title: 'EA Javelin Anticheat in Apex Legends: Cheat-Status & Updates',
        slug: 'ea-javelin',
        image: '/images/blog/ea-javelin-anticheat-apex-cheats.png',
        desc: 'EA Javelin Anticheat hat EAC in Apex Legends am PC abgelöst. So funktionieren Apex-Cheat-Status, Patch-Tage und HWID-Bans 2026.',
        date: '22. Juli 2026',
        readTime: '11 Min. Lesezeit',
      },
      {
        tag: 'Produkte',
        title: 'Apex-Legends-HWID-Spoofer bei EA-Javelin-Bans (2026)',
        slug: 'hwid-guide',
        image: '/images/blog/apex-legends-hwid-spoofer-javelin.png',
        desc: 'HWID-Spoofer-Guide für Apex Legends bei EA-Javelin-Hardware-Bans: wann Spoofing, wann neuer Account und wie du den Status prüfst.',
        date: '30. Juni 2026',
        readTime: '9 Min. Lesezeit',
      },
      {
        tag: 'Setup',
        title: 'Undetected-Apex-Cheats 2026 kaufen (sicherer Checkout)',
        slug: 'buy-cheats',
        image: '/images/blog/buy-undetected-apex-cheats.png',
        desc: 'So kaufst du Undetected-Apex-Legends-Cheats 2026: Tier wählen, EA-Javelin-Status prüfen und den sicheren Checkout abschließen.',
        date: '5. Juni 2026',
        readTime: '8 Min. Lesezeit',
      },
      {
        tag: 'Guides',
        title: 'Sind Apex-Legends-Cheats 2026 sicher? Erkennung, Bans & Risiko',
        slug: 'cheat-safety',
        image: '/images/blog/are-apex-legends-cheats-safe-2026.png',
        desc: 'Sind Apex-Legends-Cheats 2026 sicher? So funktionieren EA-Javelin-Erkennung, Banwellen und „Undetected“-Versprechen tatsächlich.',
        date: '12. Mai 2026',
        readTime: '7 Min. Lesezeit',
      },
      {
        tag: 'Features',
        title: 'Apex-Cheats-Features: Aimbot, Bots, ESP-Wallhack und mehr',
        slug: 'cheat-features',
        image: '/images/blog/apex-cheats-features-guide.png',
        desc: 'Kompletter Guide zu unseren Apex-Cheats: Aimbot, Loot Assist, Skin Changer, Radar Hack, ESP-Wallhack und Auto Shield Break.',
        date: '18. Apr. 2026',
        readTime: '5 Min. Lesezeit',
      },
      {
        tag: 'Guides',
        title: 'Apex Lite vs Pro: welcher Tier passt zu dir',
        slug: 'elite-guide',
        image: '/images/blog/apex-lite-vs-pro.png',
        desc: 'Map Awareness vs Aimbot-Automation — vergleiche Lite- und Pro-Apex-Cheats für Battle Royale und Ranked.',
        date: '27. März 2026',
        readTime: '10 Min. Lesezeit',
      },
      {
        tag: 'Guides',
        title: 'Apex Skin Changer / Unlock-All-Guide',
        slug: 'skin-guide',
        image: '/images/blog/apex-skin-changer-guide.png',
        desc: 'Legend-, Waffen- und Exclusive-Sets lokal mit unserem Unlock-All-Skin-Changer-Modul vorschauen.',
        date: '3. März 2026',
        readTime: '6 Min. Lesezeit',
      },
      {
        tag: 'Guides',
        title: 'Guide für externe Apex-Cheats',
        slug: 'external-cheat',
        image: '/images/blog/apex-external-cheat-guide.png',
        desc: 'Warum externe Apex-Cheats zählen, wie der External Loader am PC funktioniert und was private Software sicherer macht als Free-Tools.',
        date: '11. Feb. 2026',
        readTime: '16 Min. Lesezeit',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Cheat-Menü',
    title: 'Apex-Cheat-Menü, geordnet',
    subtitle:
      'Jedes Cheat-Modul ist gruppiert, damit du Aimbot und ESP mitten im Match justieren kannst — ohne Chaos.',
    items: [
      {
        num: '01',
        label: 'Aimbot',
        title: 'Tracking, das sich pro Waffe anpasst',
        desc: 'Smoothness, FOV, Sticky Aim und Bone Priority in einem Aimbot-Tab.',
      },
      {
        num: '02',
        label: 'ESP',
        title: 'Wallhack, der lesbar bleibt',
        desc: 'Boxen, Skeletons, Distanz, Health und Team-Farbfilter.',
      },
      {
        num: '03',
        label: 'Radar',
        title: 'Loot und Rotationen im Blick',
        desc: 'Gegner-Dots, Loot-Timer und Mini-Radar auf kompaktem Overlay.',
      },
      {
        num: '04',
        label: 'Weapons',
        title: 'Aimbot-Profile pro Waffe',
        desc: 'AR-, SMG-, Shotgun- und Sniper-Presets speichern und per Hotkey wechseln.',
      },
      {
        num: '05',
        label: 'Loot',
        title: 'Chest ESP & Loot Assist',
        desc: 'Chest-Highlights, Rare Drops und Elite-Loot-Assist-Pathing.',
      },
      {
        num: '06',
        label: 'Profiles',
        title: 'Configs für jeden Modus',
        desc: 'Battle-Royale-, Ranked- und Arenas-Presets mit Cloud-Backup.',
      },
    ],
  },
  workflow: {
    eyebrow: 'So funktioniert’s',
    badge: '4 Schritte',
    titleBefore: 'Vom Kauf zu',
    titleHighlight: 'Ingame-Cheats.',
    subtitle:
      'Apex-Cheats kaufen, Loader laden, Module aktivieren, Config fürs nächste Match speichern.',
    ctaLabel: 'Cheats kaufen',
    ctaHref: productBase,
    ctaSecondary: 'Setup-FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Vor dem Kauf',
        title: 'Status prüfen',
        desc: 'Lies das Live-Banner auf cheatsapex.com vor Kauf oder Start.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Tier wählen',
        desc: 'Lite, Pro oder Elite je nach benötigten Modulen.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Starten und einrichten',
        desc: 'Im Portal laden, Module an, in Arenas oder Bot-Lobby testen.',
      },
      {
        num: '04',
        phase: 'Ingame',
        title: 'Config speichern',
        desc: 'Wenn es passt: BR- und Ranked-Presets in die Cloud speichern.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Notizen',
    title: 'Kurztipps',
    items: [
      {
        num: '01',
        title: 'Nach Patches',
        desc: 'Discord und Portal-Status prüfen, bevor du nach einem Apex-Update Ranked queueest.',
      },
      {
        num: '02',
        title: 'Langsam starten',
        desc: 'Zuerst Default-Aimbot-Smoothness und ESP-Range nutzen, dann bei Bedarf erhöhen.',
      },
      {
        num: '03',
        title: 'Discord-Hilfe',
        desc: 'Probleme mit Loader oder Configs? Frag im Discord — jemand führt dich durch.',
      },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'Apex Cheats Support',
    subtitle:
      'Hilfe zu Loader, HWID Spoofer, Checkout, Lizenz und Account für Elite ESP & Aimbot auf Windows-PC.',
    channels: [
      {
        icon: 'users',
        title: 'Vor dem Kauf',
        desc: 'Tier-Unterschiede (Lite / Pro / Elite), was ESP und Aimbot enthalten und welche Utilities zum Plan passen.',
      },
      {
        icon: 'headphones',
        title: 'E-Mail-Support',
        desc: 'Schreib an support@cheatsapex.com bei Loader-Fehlern, HWID Spoofer, Lizenzumzug und Belegen.',
      },
      {
        icon: 'navFaq',
        title: 'FAQ-Antworten',
        desc: 'EA-Javelin-Kompatibilität, Bans, Ranked, Stream Proof und Setup stehen auf der FAQ-Seite.',
      },
      {
        icon: 'messageCircle',
        title: 'Discord-Hilfe',
        desc: 'Live-Status, Patchnotes und 24/7-Hilfe in Discord—ideal bei dringenden Loader- oder Post-Update-Themen.',
      },
      {
        icon: 'settings',
        title: 'Loader & Setup',
        desc: 'Erster Start, Defender-Ausnahmen, EA-App-Konflikte und Profile für Battle Royale oder Ranked.',
      },
      {
        icon: 'shield',
        title: 'HWID & Sicherheit',
        desc: 'Wann den HWID Spoofer nutzen, wie ein Hardware-Ban aussieht und wie wir nach Javelin-Patches retesten.',
      },
    ],
    helpTitle: 'Wobei wir helfen',
    helpItems: [
      {
        title: 'Checkout & Lieferung',
        desc: 'Kein Portalzugang, Zahlung ausstehend oder Lizenz entsperrt nach dem Kauf nicht.',
      },
      {
        title: 'Loader startet nicht',
        desc: 'Crash beim Öffnen, Antivirus-Quarantäne, fehlende VC++-Runtime oder „bereits gestartet“.',
      },
      {
        title: 'ESP- / Aimbot-Configs',
        desc: 'Smoothness, FOV, Knochenwahl, Loot-ESP-Filter und Stream-Proof-Overlays.',
      },
      {
        title: 'Nach einem Apex-Update',
        desc: 'Vor Ranked Undetected / Updating prüfen; Elite-Builds werden nach jedem Patch erneut getestet.',
      },
      {
        title: 'UGC & Skin Changer',
        desc: 'Utility-Freischaltung, Reihenfolge mit Elite und was senden, wenn Skins nicht greifen.',
      },
      {
        title: 'Account & Lizenz',
        desc: 'Lizenz auf neuen PC umziehen, HWID-Limits und Zugang mit Bestell-E-Mail wiederherstellen.',
      },
    ],
    ticketTitle: 'Im Ticket angeben',
    ticketItems: [
      { title: 'Bestell-E-Mail', desc: 'Die E-Mail, die du beim Checkout auf cheatsapex.com genutzt hast.' },
      { title: 'Bestell-ID oder Beleg', desc: 'Zahlungs-ID, Rechnungsnummer oder Screenshot der Bestätigungsmail.' },
      { title: 'Plattform', desc: 'Windows 10 oder 11 (64-Bit), EA App oder Steam und deine Apex-Client-Version.' },
      { title: 'Produkt & Plan', desc: 'Elite / Pro / Lite, HWID Spoofer, UGC oder Skin Changer—und Ranked oder Pubs.' },
      { title: 'Fehlerdetails', desc: 'Screenshot oder exakter Text vom Loader, Portal oder EA-/Javelin-Meldung.' },
      { title: 'Bereits versucht', desc: 'Antivirus pausiert, Admin-Start, sauberer Neustart oder Discord-#status nach dem Patch.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Apex Cheats FAQ',
    subtitle:
      'Elite ESP & Aimbot, HWID Spoofer, UGC, Skin Changer und EA-Javelin-Status — dieselben Antworten wie auf der Homepage und dieser Seite.',
    items: [
      {
        num: '01',
        q: 'Wo sehe ich, ob Apex Cheats online sind?',
        a: 'Das Live-Status-Banner steht auf cheatsapex.com und im Discord-Kanal #status. Immer nach Apex-, EA-Javelin- oder Season-Update prüfen.',
      },
      {
        num: '02',
        q: 'Funktionieren Apex-Legends-Cheats mit EA Javelin Anticheat?',
        a: 'Apex Legends auf dem PC nutzt EA Javelin. Private Apex-Cheats-Builds werden nach Patches neu getestet — Status-Banner vor Ranked bestätigen.',
      },
      {
        num: '03',
        q: 'Was passiert nach dem Kauf?',
        a: 'Dein Portal schaltet Loader, Setup-Guide und Config-Bibliothek über unseren sicheren Checkout frei. Guide folgen, bevor du Apex startest.',
      },
      {
        num: '04',
        q: 'Welche Plattformen werden unterstützt?',
        a: 'Apex über die EA App nur auf Windows 10/11 64-Bit. macOS und Linux werden nicht unterstützt.',
      },
      {
        num: '05',
        q: 'Kann ich die Lizenz auf einen neuen PC umziehen?',
        a: 'Ja — HWID-Reset im Portal nutzen oder ein Discord-Ticket öffnen. Limits hängen vom Produkt ab.',
      },
      {
        num: '06',
        q: 'Wo sind Produkte und Utilities gelistet?',
        a: 'Apex Elite, HWID Spoofer, UGC und Skin Changer stehen unter cheatsapex.com/products/apex-cheats mit Feature-Listen und Checkout über unseren Partner.',
      },
    ],
  },
  footer: {
    tagline: 'Apex Cheats für PC: Aimbot, ESP, Wallhack und Tools.',
    explore: 'Entdecken',
    exploreLinks: [
      { href: '/', label: 'Feature-Übersicht', ariaLabel: 'Features', scrollTarget: 'features' },
      { href: '/products/apex-cheats/apex-elite/', label: 'Elite-Cheats', ariaLabel: 'Elite' },
      { href: '/products/apex-cheats/', label: 'Produkte & Utilities', ariaLabel: 'Produkte' },
      { href: '/blog/', label: 'Patch-Guides', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'FAQ vor dem Kauf', ariaLabel: 'FAQ' },
    ],
    support: 'Support',
    legal: 'Rechtliches',
    privacy: 'Datenschutz',
    terms: 'AGB',
    about: 'Über uns',
  },
  legalPages: {
    about: {
      title: 'Über Apex Cheats | PC Aimbot & ESP kaufen',
      description:
        'Über Apex Cheats — PC Apex Cheats (Aimbot, ESP, Wallhack), Utilities und Guides auf cheatsapex.com.',
      sections: [
        {
          heading: 'Wer wir sind',
          paragraphs: [
            'Apex Cheats ist eine PC-Seite für Apex Aimbot, ESP, Wallhack, Radar und Skin-Changer-Produkte. Wir veröffentlichen Tier-Vergleiche, Setup-Guides und Live-Status-Hinweise.',
            'Spiel- und Produktnamen dienen nur der Identifikation.',
          ],
        },
        {
          heading: 'Was wir verkaufen',
          paragraphs: [
            'Lite-, Pro- und Elite-Apex-Cheats sowie HWID Spoofer, Skin Changer und UGC Recovery. Der Blog deckt Configs, Patch-Checks und Easy-Anti-Cheat-Updates ab.',
            'Seiten werden aktualisiert, wenn Apex oder der Loader sich ändert. Vor dem Spielen Homepage-Status-Banner und Discord #status prüfen.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Für Loader-Fehler, Kompatibilität und Checkout Discord oder E-Mail nutzen. Bestell-E-Mail, EA-Account und Windows-Version angeben.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Datenschutz | Apex Cheats Shop',
      description:
        'Wie der Apex-Cheats-Shop auf cheatsapex.com Analytics, Cookies und Kontaktdaten handhabt.',
      sections: [
        {
          heading: 'Welche Daten wir erheben',
          paragraphs: [
            'Wir können Basis-Analytics wie Seitenaufrufe, Gerätetyp, Browser und ungefähre Region über Google Analytics erheben, wenn es aktiviert ist. Checkout läuft auf externen Seiten. Zahlungskartendaten speichern wir nicht auf cheatsapex.com.',
          ],
        },
        {
          heading: 'Wie wir Daten nutzen',
          paragraphs: [
            'Analytics zeigen, welche Guides und Produktseiten genutzt werden, damit wir kaputte Links beheben und Seiten verbessern. Support-Tickets behalten E-Mail und Nachricht, bis das Thema geschlossen ist.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'Wir nutzen Basis-Analytics-Cookies. Du kannst Cookies im Browser blockieren. Die Seite funktioniert auch ohne sie.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Bei Datenschutzfragen die Support-Seite nutzen. Kauf- und Erstattungsregeln stehen in den AGB.',
          ],
        },
      ],
    },
    terms: {
      title: 'AGB für Apex Cheats | Lizenz & Erstattungen',
      description:
        'Bedingungen für den Kauf von Apex Cheats auf cheatsapex.com — Lizenznutzung, Lieferung, Erstattungen und Account-Risiko.',
      sections: [
        {
          heading: 'Vereinbarung',
          paragraphs: [
            'Zuletzt aktualisiert: September 2026. Mit der Nutzung von cheatsapex.com oder dem Kauf eines hier gelisteten Produkts akzeptierst du diese AGB und unsere Datenschutzrichtlinie.',
          ],
        },
        {
          heading: 'Was du kaufst',
          paragraphs: [
            'Wir verkaufen Apex-Cheat-Tiers (Lite, Pro, Elite) und Tools (HWID Spoofer, UGC, Skin Changer / Unlock All) über ein Portal und einen Windows-Loader für EA.',
            'Produktseiten listen, was beim Kauf enthalten ist. Features können sich ändern, wenn Apex oder Easy Anti-Cheat updaten.',
          ],
        },
        {
          heading: 'Checkout und Lieferung',
          paragraphs: [
            'Zahlung und Lizenzlieferung laufen über externe Checkout-Seiten. cheatsapex.com verarbeitet oder speichert keine Kartendaten.',
            'Nach dem Kauf den Operator-Portal-Link aus dem Bestellfluss nutzen, um den aktuellen Loader und Setup-Guide zu laden, bevor du Apex startest.',
          ],
        },
        {
          heading: 'Lizenznutzung',
          paragraphs: [
            'Lizenzen sind nur für den persönlichen Gebrauch. Loader-Dateien, Portal-Logins oder Lizenzschlüssel nicht teilen. HWID- und Geräte-Limits hängen vom Tier ab und werden im Portal durchgesetzt.',
          ],
        },
        {
          heading: 'Erstattungen und Käufe',
          paragraphs: [
            'Alle Verkäufe sind final, sobald der Checkout abgeschlossen ist. Wir erstatten keine Meinungsänderungen, Account-Bans, EAC-Strafen oder Probleme durch Ignorieren der Setup-Guides bzw. Nutzung von Modulen, während das Status-Banner offline zeigt.',
            'Funktioniert das Produkt auf einem unterstützten Setup nicht wie beschrieben — Apex über EA App auf Windows 10/11, aktueller Loader aus dem Portal und Live-Status-Banner online beim Start — kontaktiere uns über die Support-Seite. Bestell-E-Mail, Windows-Version, Apex-Build sowie Screenshots oder exakten Fehlertext vom Loader angeben.',
            'Wir können nach Ermessen Fix, Ersatzzugang oder teilweise/volle Erstattung anbieten, wenn wir einen Fehler auf unserer Seite bestätigen. Wir sind nicht verpflichtet, jede Anfrage zu genehmigen.',
          ],
        },
        {
          heading: 'Verfügbarkeit und Risiko',
          paragraphs: [
            'Drittanbieter-Tools für Apex können mit Game-Updates und Anti-Cheat-Systemen kollidieren. Du nutzt diese Software auf eigenes Risiko, einschließlich möglicher Account-Maßnahmen.',
            'Vor jeder Session das Homepage-Status-Banner prüfen. Nicht ranked queueen, während Module offline oder nach einem Patch falsch ausgerichtet sind.',
          ],
        },
        {
          heading: 'Änderungen',
          paragraphs: [
            'Wir können diese Bedingungen aktualisieren. Das Datum „Zuletzt aktualisiert“ oben ändert sich dann. Fortgesetzte Nutzung der Seite nach Änderungen bedeutet Zustimmung zu den geänderten Bedingungen.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Bei Fragen zu AGB, Abrechnung oder Loader die Buttons auf der Support-Seite nutzen. Zur Datenverarbeitung siehe auch unsere Datenschutzrichtlinie.',
          ],
        },
      ],
    },
    support: {
      title: 'Apex Cheats Support | Loader, HWID & Checkout',
      description:
        'Apex-Cheats-Support für Loader-Setup, HWID-Spoofing und Checkout-Hilfe auf cheatsapex.com.',
    },
  },
  ui: {
    skipLink: 'Zum Inhalt springen',
    browseCheats: 'Jetzt testen',
    browseCheatsMobile: 'Zur Kasse',
    buyNow: 'Jetzt kaufen',
    viewDetails: 'Details',
    homeAria: 'Apex Cheats Startseite',
    checkoutAria: 'Checkout starten',
    discordAria: 'Apex Cheats Discord',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',
    themeLight: 'Hellmodus',
    themeDark: 'Dunkelmodus',
    home: 'Startseite',
  },
  productHub: {
    pricingEyebrow: 'Preise',
    plansTitle: 'Apex Legends Cheat-Pläne',
    plansDesc:
      'Dieselben Module in jedem Plan—Player ESP, Advanced Aimbot, Loot ESP, EAC Bypass, Stream Proof und optional Cloud-DMA / AWS.',
    modulesEyebrow: 'Module',
    modulesTitle: 'Was enthalten ist',
    modulesDesc: 'Kern-Apex-Cheat-Module in Lite, Pro und Elite.',
    catalogEyebrow: 'Katalog',
    catalogTitle: 'Weitere Apex-Tools',
    catalogDesc: 'HWID Spoofer, UGC-Recovery und Skin Changer neben Elite-Cheats.',
    stepsEyebrow: 'So funktioniert’s',
    stepsTitle: 'Vom Checkout ins Spiel',
    stepsDesc: 'Kaufen, Loader herunterladen, Module aktivieren, dann queuen, wenn der Status online ist.',
    faqEyebrow: 'FAQ',
    faqTitle: 'FAQ zum Produkthub',
    faqDesc: 'Kurze Antworten zu Stufen, Status und Lieferung.',
  },
} as Partial<Translations>;
