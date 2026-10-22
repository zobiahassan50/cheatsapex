import type { Translations } from './types';
import { DISCORD_URL, PRODUCT_BASE } from '../config/site';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';

const productBase = PRODUCT_BASE;

/** Full conversion — Poland. */
export const pl: Partial<Translations> = {
  site: {
    name: 'Apex Cheats',
    domain: 'cheatsapex.com',
    title: 'Kup cheaty Apex Legends | Aimbot i ESP',
    description:
      'Kup cheaty Apex Legends na PC: aimbot, player ESP, loot ESP, no recoil i stream proof. Plany od $15 / tydzień. Aktualizowane po patchach EA Javelin.',
    discord: DISCORD_URL,
  },
  nav: [
    { href: `${productBase}`, label: 'Produkty' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Wsparcie' },
  ],
  hero: {
    status: 'Apex online',
    eyebrow: 'Cheaty Apex',
    titleLine1: 'Apex Cheats',
    titleLine2: 'Aimbot, ESP i Wallhack',
    subtitle:
      'Kup cheaty Apex na PC — aimbot, ESP, wallhack, radar i loot ESP do Battle Royale i Ranked. Aktualizowane po każdym patchu EAC.',
    ctaPrimary: 'Kup cheaty',
    ctaDiscord: 'Dołącz do Discord',
    modesLabel: 'Tryby',
    modes: ['Battle Royale', 'Ranked', 'Mixtape', 'Arenas'],
    metrics: [
      { label: 'Stream-safe', strong: 'Tak' },
      { label: 'Szybkość patchy', strong: '<24h' },
      { label: 'Użytkownicy', strong: '300+' },
      { label: 'Wsparcie', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Funkcje cheata',
    title: 'Moduły cheatów Apex',
    subtitle:
      'Player ESP, advanced aimbot, loot ESP, no recoil, stream proof, EAC bypass oraz Cloud-DMA / AWS — aktualny zestaw cheatów Apex Legends na PC.',
    items: [
      {
        title: 'Advanced Aimbot',
        subtitle: 'Tracking w walce',
        desc: 'Advanced aimbot do Battle Royale i Ranked z no recoil, żeby tracking był stabilny w walkach.',
        bullets: ['Advanced Aimbot', 'No Recoil', 'Presety Pubs i Ranked'],
        tags: ['apex aimbot', 'no recoil', 'ranked'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP',
        subtitle: 'Widzisz wrogów przez ściany',
        desc: 'Player ESP z box, skeleton, health bar i distance — zauważysz składy zanim wejdą.',
        bullets: ['Player ESP', 'Box ESP i Skeleton ESP', 'Health Bar i Distance ESP'],
        tags: ['apex ESP', 'wallhack', 'player boxes'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Weapon i Loot ESP',
        subtitle: 'Broń i loot na ziemi',
        desc: 'Weapon ESP i loot ESP podświetlają użyteczną broń i loot, żebyś szybciej się uzbroił.',
        bullets: ['Weapon ESP', 'Loot ESP', 'Szybsze rotacje'],
        tags: ['weapon ESP', 'loot ESP', 'POI'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
      {
        title: 'Stream Proof',
        subtitle: 'Ukryj overlay na streamie',
        desc: 'Ty widzisz ESP i aimbot na ekranie. OBS i Game Bar nagrywają czystą grę.',
        bullets: ['Stream Proof', 'Nagrywanie OBS-safe', 'Toggle na żywo'],
        tags: ['stream proof', 'OBS safe', 'capture hide'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'EAC Bypass',
        subtitle: 'Dostawa po patchach',
        desc: 'Buildy EAC bypass są ponownie testowane po update’ach Apex i EA Javelin. Sprawdź status przed startem.',
        bullets: ['EAC Bypass', 'Status po patchach', 'Discord #status'],
        tags: ['eac bypass', 'javelin', 'apex anti cheat'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Cloud-DMA i AWS',
        subtitle: 'Opcje dostawy',
        desc: 'CLOUD-DMA OPTION i AWS option dla graczy, którzy potrzebują alternatywnych ścieżek z katalogu Apex.',
        bullets: ['CLOUD-DMA OPTION', 'AWS option', '24/7 Support'],
        tags: ['apex dma cheats', 'cloud dma', 'aws'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-4',
      },
      {
        title: '24/7 Support',
        subtitle: 'Pomoc na Discord',
        desc: 'Bezpośrednie wsparcie Discord przy setupie loadera, configach i pytaniach po patchu.',
        bullets: ['24/7 Support', 'Przeprowadzenie przez setup', 'Pomoc z configami'],
        tags: ['discord support', 'setup', 'loader'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-4',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Dlaczego nasze cheaty',
    title: 'Cheaty Apex, które zostają online',
    subtitle:
      'Większość sklepów pada po patchach EAC i zostawia Cię z botami. My szybko wypuszczamy update’y loadera, trzymamy bezpieczne defaulty aimbotu na Ranked i odpowiadamy na Discord 24/7.',
    usLabel: 'Apex Cheats',
    otherLabel: 'Typowy sklep',
    rows: [
      {
        title: 'Update loadera po patchach',
        desc: 'Nowe buildy zwykle wychodzą w ciągu godzin po update Apex lub EA Javelin. Sprawdź Discord #status przed kolejką.',
      },
      {
        title: 'Płynne defaulty aimbotu',
        desc: 'Domyślne smoothness, FOV i bone priority są ustawione pod Ranked. Później możesz je zaostrzyć.',
      },
      {
        title: 'Wsparcie Discord',
        desc: 'Ludzie na Discord pomagają z setupem loadera, configami broni i resetami HWID. Pokrycie 24/7.',
      },
      {
        title: 'External loader + stream proof',
        desc: 'Zewnętrzny loader z trybem OBS-safe, żeby overlay nie trafiał na stream.',
      },
      {
        title: 'Configi w chmurze',
        desc: 'Zapisuj ustawienia Battle Royale, Ranked i per-broń, potem ładuj je na innym PC.',
      },
      {
        title: 'Resety HWID',
        desc: 'Resety sprzętu i przenoszenie licencji idą przez Discord. Większość sklepów blokuje Cię na jednym PC.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Czas po patchu',
        desc: 'Typowy czas do wypuszczenia loadera po dużym update Apex lub EA Javelin.',
      },
      {
        value: '24/7',
        title: 'Wsparcie',
        desc: 'Pomoc Discord przy setupie, configach i problemach z kontem.',
      },
      {
        value: '300+',
        title: 'Użytkownicy',
        desc: 'Gracze PC z aimbotem, ESP i narzędziami na cheatsapex.com.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup',
    titleLead: 'Kup cheaty. Graj w',
    titleHighlight: 'trzech krokach',
    intro:
      'Kup cheata Apex, pobierz loader, wczytaj preset i otwórz Apex. Discord pomoże, jeśli utkniesz.',
    ctaPrimary: 'Kup cheaty',
    ctaSecondary: 'Zobacz FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Krok 1',
        title: 'Kup i pobierz loader',
        desc: 'Dokończ checkout, otwórz portal i pobierz aktualny loader Windows.',
      },
      {
        step: 'Krok 2',
        title: 'Wczytaj presety',
        desc: 'Uruchom loader, wybierz preset Pubs lub Ranked i ustaw aimbot oraz ESP.',
      },
      {
        step: 'Krok 3',
        title: 'Sprawdź status i graj',
        desc: 'Potwierdź, że banner statusu jest online, uruchom Apex w EA App i użyj zapisanego configu.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platforma',
    title: 'Windows PC',
    subtitle: 'Po update’ach Apex sprawdź banner statusu, zanim uruchomisz grę.',
    items: [
      'Windows 10 i 11',
      'EA Launcher',
      'Klient Apex',
      'Auto updater',
      'Sync configów w chmurze',
      'Wsparcie Discord',
      'Reset HWID',
      'External loader',
    ],
  },
  cheats: {
    eyebrow: 'Cheat Elite',
    title: 'Cheaty Apex Elite',
    subtitle:
      'Cheaty Apex Legends na PC — player ESP, advanced aimbot, loot ESP, no recoil, stream proof, EAC bypass, Cloud-DMA i AWS. Plany: 1 tydzień $15 · 1 miesiąc $35 · Lifetime $150.',
    viewAll: 'Szczegóły Elite',
    explore: 'Odkryj',
    items: [
      {
        badge: 'Active',
        tier: 'Private',
        name: 'Elite',
        title: 'Apex Elite Cheats',
        desc: 'Kup cheaty Apex Legends z player ESP, advanced aimbot, weapon ESP, loot ESP, no recoil, stream proof, EAC bypass i wsparciem Discord 24/7. 1 tydzień $15 · 1 miesiąc $35 · Lifetime $150.',
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
    eyebrow: 'Sklep',
    title: 'Kup cheaty Apex',
    subtitle: 'Cheaty Apex Elite, HWID spoofer, odzyskiwanie UGC i Skin Changer — wybierz, czego potrzebujesz.',
    viewAll: 'Wszystkie cheaty',
    get: 'Kup',
    explore: 'Odkryj',
    items: [
      {
        badge: 'Available',
        category: 'Narzędzie systemowe',
        title: 'Apex HWID Spoofer',
        subtitle: 'Czysta karta dla Twojego PC',
        desc: 'Kup HWID spoofer Apex do seriali dysków, adresów MAC i GPU ID — przejdź przewodnik w portalu, zanim znów uruchomisz cheaty.',
        features: [
          'HWID Spoofer',
          'Apex Cleaner',
          'Narzędzia disk serial',
          'Rotacja adresu MAC',
          'Spoof GPU ID',
          'Skan kompatybilności',
          'Check konfliktów sterowników',
          'Weryfikacja po spoof',
          'Poradnik cold reboot',
        ],
        more: 4,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Available',
        category: 'Odzyskiwanie konta',
        title: 'Narzędzia Apex UGC Unban',
        subtitle: 'Unban i kontrola governance',
        desc: 'Kup narzędzia Apex UGC do ograniczeń konta EA, banów EAC i security holds — własne workflow odwołań i automatyzacja sporów.',
        features: [
          'Odwołania konta EA',
          'Workflow banów EAC',
          'Automatyzacja sporów',
          'Dokumentacja spraw',
          'Szablony dowodów',
          'Panel śledzenia statusu',
          'Pomoc przy restriction holds',
        ],
        more: 3,
        href: `${productBase}ban-appeal/`,
      },
      {
        badge: 'Available',
        category: 'Kosmetyki',
        title: 'Apex Skin Changer',
        subtitle: 'Odblokuj wszystkie kosmetyki lokalnie',
        desc: 'Kup Apex Skin Changer / Unlock All do skinów legend, broni i heirloom — lokalny podgląd bez zakupów w sklepie EA.',
        features: [
          'Zmiana skinów legend',
          'Weapon skin changer',
          'Customizer heirloom',
          'Podgląd Unlock All',
          'Podgląd exclusive setów',
          'Eksport ulubionych loadout',
          'Tylko lokalny klient',
        ],
        more: 7,
        href: `${productBase}unlock-all/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Poradniki cheatów',
    title: 'Poradniki do cheatów Apex Legends',
    subtitle: 'Setup aimbotu, config ESP wallhack, wskazówki Arenas i checklisty po patchu EAC.',
    latestTitle: 'Poradniki do cheatów Apex Legends',
    latestSubtitle:
      'Poradniki o undetected aimbot, ESP wallhack, loot ESP, statusie EA Javelin i odzyskiwaniu HWID — filtruj poniżej.',
    filterAll: 'Wszystkie artykuły',
    sortLabel: 'Sortuj',
    sortNewest: 'Najnowsze',
    sortOldest: 'Najstarsze',
    sortShortRead: 'Najkrótsze',
    sortLongRead: 'Najdłuższe',
    emptyFilter: 'Brak artykułów dla tego filtra.',
    viewAll: 'Wszystkie artykuły',
    read: 'Czytaj',
    allArticles: 'Wszystkie artykuły',
    inThisArticle: 'W tym artykule',
    relatedGuides: 'Powiązane poradniki',
    ourProducts: 'Nasze produkty',
    buyApexCheats: 'Kup Apex Cheats',
    items: [
      {
        tag: 'Poradniki',
        title: 'Najlepsze cheaty i hacki do Apex Legends 2026: Aimbot, ESP i Wallhack',
        slug: 'best-cheats',
        image: '/images/blog/best-apex-legends-cheats-2026.png',
        desc: 'Porównaj najlepsze cheaty do Apex Legends w 2026 — undetected aimbot, ESP wallhack, loot ESP i narzędzia HWID pod EA Javelin na PC.',
        date: '19 paź 2026',
        readTime: '14 min czytania',
      },
      {
        tag: 'Setup',
        title: 'Poradnik undetected aimbota Apex Legends na Ranked PC (2026)',
        slug: 'apex-aimbot',
        image: '/images/blog/undetected-apex-legends-aimbot.png',
        desc: 'Skonfiguruj undetected aimbot Apex Legends na Ranked — smoothness, FOV, bone priority i profile per-broń po EA Javelin.',
        date: '8 wrz 2026',
        readTime: '12 min czytania',
      },
      {
        tag: 'Setup',
        title: 'Poradnik ESP Wallhack Apex Legends 2026: Player, Glow i Distance',
        slug: 'esp-wallhack',
        image: '/images/blog/apex-legends-esp-wallhack-2026.png',
        desc: 'Poradnik ESP wallhack Apex Legends 2026 — boxy graczy, glow, zdrowie, dystans i loot ESP pod Ranked i Battle Royale.',
        date: '14 sie 2026',
        readTime: '13 min czytania',
      },
      {
        tag: 'Aktualizacje',
        title: 'EA Javelin Anticheat w Apex Legends: status cheatów i update’y',
        slug: 'ea-javelin',
        image: '/images/blog/ea-javelin-anticheat-apex-cheats.png',
        desc: 'EA Javelin Anticheat zastąpił EAC w Apex Legends na PC. Jak działają status cheatów, dni patchy i bany HWID w 2026.',
        date: '22 lip 2026',
        readTime: '11 min czytania',
      },
      {
        tag: 'Produkty',
        title: 'HWID Spoofer Apex Legends przy banach EA Javelin (2026)',
        slug: 'hwid-guide',
        image: '/images/blog/apex-legends-hwid-spoofer-javelin.png',
        desc: 'Poradnik HWID spoofera Apex Legends przy banach sprzętowych EA Javelin — kiedy spoofować, kiedy nowe konto i jak sprawdzić status.',
        date: '30 cze 2026',
        readTime: '9 min czytania',
      },
      {
        tag: 'Setup',
        title: 'Jak kupić undetected cheaty Apex w 2026 (bezpieczny checkout)',
        slug: 'buy-cheats',
        image: '/images/blog/buy-undetected-apex-cheats.png',
        desc: 'Jak kupić undetected cheaty Apex Legends w 2026 — wybierz tier, sprawdź status EA Javelin i dokończ bezpieczny checkout.',
        date: '5 cze 2026',
        readTime: '8 min czytania',
      },
      {
        tag: 'Poradniki',
        title: 'Czy cheaty Apex Legends są bezpieczne w 2026? Detekcja, bany i ryzyko',
        slug: 'cheat-safety',
        image: '/images/blog/are-apex-legends-cheats-safe-2026.png',
        desc: 'Czy cheaty Apex Legends są bezpieczne w 2026? Jak naprawdę działają detekcja EA Javelin, fale banów i obietnice „undetected”.',
        date: '12 maj 2026',
        readTime: '7 min czytania',
      },
      {
        tag: 'Funkcje',
        title: 'Funkcje cheatów Apex: aimbot, boty, ESP wallhack i więcej',
        slug: 'cheat-features',
        image: '/images/blog/apex-cheats-features-guide.png',
        desc: 'Pełny przewodnik po naszych cheatach Apex — Aimbot, Loot Assist, Skin Changer, Radar Hack, ESP Wallhack i Auto Shield Break.',
        date: '18 kwi 2026',
        readTime: '5 min czytania',
      },
      {
        tag: 'Poradniki',
        title: 'Apex Lite vs Pro: który tier jest dla Ciebie',
        slug: 'elite-guide',
        image: '/images/blog/apex-lite-vs-pro.png',
        desc: 'Świadomość mapy kontra automatyzacja aimbotu — porównaj cheaty Apex Lite i Pro do Battle Royale i Ranked.',
        date: '27 mar 2026',
        readTime: '10 min czytania',
      },
      {
        tag: 'Poradniki',
        title: 'Poradnik Apex Skin Changer / Unlock All',
        slug: 'skin-guide',
        image: '/images/blog/apex-skin-changer-guide.png',
        desc: 'Lokalny podgląd skinów legend, broni i exclusive setów dzięki modułowi Unlock All Skin Changer.',
        date: '3 mar 2026',
        readTime: '6 min czytania',
      },
      {
        tag: 'Poradniki',
        title: 'Poradnik zewnętrznego cheata Apex',
        slug: 'external-cheat',
        image: '/images/blog/apex-external-cheat-guide.png',
        desc: 'Dlaczego external cheaty Apex mają znaczenie, jak działa external loader na PC i co czyni prywatne oprogramowanie bezpieczniejszym od darmowych narzędzi.',
        date: '11 lut 2026',
        readTime: '16 min czytania',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Menu cheata',
    title: 'Menu cheata Apex, uporządkowane',
    subtitle:
      'Każdy moduł jest pogrupowany, żebyś mógł stroić aimbot i ESP w trakcie meczu bez chaosu.',
    items: [
      {
        num: '01',
        label: 'Aimbot',
        title: 'Tracking dopasowany do broni',
        desc: 'Smoothness, FOV, Sticky Aim i Bone Priority w jednej zakładce aimbotu.',
      },
      {
        num: '02',
        label: 'ESP',
        title: 'Wallhack, który zostaje czytelny',
        desc: 'Boxy, skeletony, dystans, zdrowie i filtry kolorów drużyn.',
      },
      {
        num: '03',
        label: 'Radar',
        title: 'Loot i rotacje pod kontrolą',
        desc: 'Kropki wrogów, timery lootu i mini-radar na kompaktowym overlayu.',
      },
      {
        num: '04',
        label: 'Weapons',
        title: 'Profile aimbotu per-broń',
        desc: 'Zapisuj presety AR, SMG, shotgun i sniper i przełączaj hotkeyami.',
      },
      {
        num: '05',
        label: 'Loot',
        title: 'Chest ESP i loot assist',
        desc: 'Podświetlenia skrzyń, rzadkie dropy i pathing loot-assist Elite.',
      },
      {
        num: '06',
        label: 'Profiles',
        title: 'Configi na każdy tryb',
        desc: 'Presety Battle Royale, Ranked i Arenas z backupem w chmurze.',
      },
    ],
  },
  workflow: {
    eyebrow: 'Jak to działa',
    badge: '4 kroki',
    titleBefore: 'Od zakupu do',
    titleHighlight: 'cheatów w grze.',
    subtitle: 'Kup cheaty Apex, pobierz loader, włącz moduły, zapisz config na kolejny mecz.',
    ctaLabel: 'Kup cheaty',
    ctaHref: productBase,
    ctaSecondary: 'FAQ setupu',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Przed zakupem',
        title: 'Sprawdź status',
        desc: 'Przeczytaj żywy banner na cheatsapex.com przed zakupem lub startem.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Wybierz tier',
        desc: 'Wybierz Lite, Pro lub Elite według potrzebnych modułów.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Uruchom i skonfiguruj',
        desc: 'Pobierz z portalu, włącz moduły i przetestuj w Arenas lub bot lobby.',
      },
      {
        num: '04',
        phase: 'W grze',
        title: 'Zapisz config',
        desc: 'Gdy ustawienia pasują, zapisz presety Battle Royale i Ranked w chmurze.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Notatki',
    title: 'Szybkie wskazówki',
    items: [
      {
        num: '01',
        title: 'Po patchach',
        desc: 'Sprawdź Discord i status w portalu, zanim wejdziesz w kolejkę Ranked po update Apex.',
      },
      {
        num: '02',
        title: 'Zacznij wolno',
        desc: 'Najpierw użyj domyślnego smoothness aimbotu i zasięgu ESP, potem podnieś, jeśli trzeba.',
      },
      {
        num: '03',
        title: 'Pomoc Discord',
        desc: 'Utknąłeś przy loaderze lub configach? Napisz na Discord — ktoś Cię przeprowadzi.',
      },
    ],
  },
  support: {
    eyebrow: 'Wsparcie',
    title: 'Wsparcie Apex Cheats',
    subtitle: 'Pomoc przy loaderze, HWID, checkout i koncie.',
    channels: [
      {
        icon: 'users',
        title: 'Przed zakupem',
        desc: 'Zapytaj o tiery i co zawiera każdy produkt.',
        linkLabel: 'Rozpocznij checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'E-mail',
        desc: 'Błędy loadera, HWID i problemy z kontem.',
        linkLabel: 'support@cheatsapex.com',
        href: 'mailto:support@cheatsapex.com',
      },
      {
        icon: 'navFaq',
        title: 'FAQ',
        desc: 'Kompatybilność, bany i odpowiedzi o setupie.',
        linkLabel: 'Zobacz FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Discord',
        desc: 'Wsparcie online 24/7.',
        linkLabel: 'Dołącz do Discord',
        href: DISCORD_URL,
      },
    ],
    ticketTitle: 'Dołącz do ticketa',
    ticketItems: [
      { title: 'E-mail zamówienia', desc: 'E-mail użyty przy checkout na cheatsapex.com.' },
      { title: 'Platforma', desc: 'Windows 10 lub 11, EA Launcher i wersja Apex.' },
      { title: 'Szczegół błędu', desc: 'Screenshot lub dokładny tekst z loadera albo EA.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'FAQ Apex Cheats',
    subtitle:
      'Elite ESP i aimbot, HWID Spoofer, UGC, Skin Changer i status EA Javelin — te same odpowiedzi na homepage i tej stronie.',
    items: [
      {
        num: '01',
        q: 'Gdzie sprawdzę, czy cheaty Apex są online?',
        a: 'Żywy banner statusu jest na cheatsapex.com i na kanale Discord #status. Zawsze sprawdzaj po update Apex, EA Javelin lub sezonu.',
      },
      {
        num: '02',
        q: 'Czy cheaty Apex Legends działają z EA Javelin Anticheat?',
        a: 'Apex Legends na PC używa EA Javelin. Prywatne buildy Apex Cheats są ponownie testowane po patchach — potwierdź banner statusu przed Ranked.',
      },
      {
        num: '03',
        q: 'Co dzieje się po zakupie?',
        a: 'Portal odblokowuje loader, przewodnik setupu i bibliotekę configów przez bezpieczny checkout. Przejdź przewodnik, zanim uruchomisz Apex.',
      },
      {
        num: '04',
        q: 'Jakie platformy są wspierane?',
        a: 'Apex przez EA App na Windows 10/11 64-bit. macOS i Linux nie są wspierane.',
      },
      {
        num: '05',
        q: 'Czy mogę przenieść licencję na nowy PC?',
        a: 'Tak — użyj resetu HWID w portalu albo otwórz ticket na Discord. Limity zależą od produktu.',
      },
      {
        num: '06',
        q: 'Gdzie są produkty i narzędzia?',
        a: 'Apex Elite, HWID Spoofer, UGC i Skin Changer są na cheatsapex.com/products/apex-cheats z listami funkcji i checkoutem u partnera.',
      },
    ],
  },
  footer: {
    tagline: 'Cheaty Apex na PC: aimbot, ESP, wallhack i narzędzia.',
    explore: 'Odkryj',
    exploreLinks: [
      { href: '/', label: 'Przegląd funkcji', ariaLabel: 'Funkcje', scrollTarget: 'features' },
      { href: '/products/apex-cheats/apex-elite/', label: 'Cheaty Apex Elite', ariaLabel: 'Cheaty Elite' },
      { href: '/products/apex-cheats/', label: 'Wszystkie produkty i narzędzia', ariaLabel: 'Produkty' },
      { href: '/blog/', label: 'Poradniki po patchach', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'FAQ przed zakupem', ariaLabel: 'FAQ' },
    ],
    support: 'Wsparcie',
    legal: 'Prawne',
    privacy: 'Polityka prywatności',
    terms: 'Regulamin',
    about: 'O nas',
  },
  legalPages: {
    about: {
      title: 'O Apex Cheats | Kup Aimbot i ESP na PC',
      description:
        'O Apex Cheats — kup cheaty Apex na PC (aimbot, ESP, wallhack), narzędzia i poradniki na cheatsapex.com.',
      sections: [
        {
          heading: 'Kim jesteśmy',
          paragraphs: [
            'Apex Cheats to strona PC z produktami Apex: aimbot, ESP, wallhack, radar i Skin Changer. Publikujemy porównania tierów, poradniki setupu i live status.',
            'Nazwy gier i produktów służą wyłącznie do identyfikacji.',
          ],
        },
        {
          heading: 'Co sprzedajemy',
          paragraphs: [
            'Cheaty Apex Lite, Pro i Elite oraz HWID Spoofer, Skin Changer i odzyskiwanie UGC. Blog obejmuje configi, checklisty po patchach i update Easy Anti-Cheat.',
            'Strony aktualizujemy, gdy zmienia się Apex lub loader. Przed grą sprawdź banner statusu na homepage i Discord #status.',
          ],
        },
        {
          heading: 'Wsparcie',
          paragraphs: [
            'Użyj Discord lub e-maila przy błędach loadera, kompatybilności i checkout. Dołącz e-mail zamówienia, konto EA i wersję Windows.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Polityka prywatności | Sklep Apex Cheats',
      description:
        'Jak sklep cheatów Apex na cheatsapex.com obsługuje analytics, cookies i dane kontaktowe.',
      sections: [
        {
          heading: 'Jakie dane zbieramy',
          paragraphs: [
            'Możemy zbierać podstawowe analytics, takie jak odsłony, typ urządzenia, przeglądarka i przybliżony region przez Google Analytics, gdy jest włączone. Checkout odbywa się na zewnętrznych stronach. Nie przechowujemy danych kart płatniczych na cheatsapex.com.',
          ],
        },
        {
          heading: 'Jak używamy danych',
          paragraphs: [
            'Analytics pokazują, które poradniki i strony produktów są używane, żebyśmy mogli naprawiać linki i ulepszać treści. Tickety wsparcia przechowują e-mail i wiadomość do zamknięcia sprawy.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'Używamy podstawowych cookies analytics. Możesz je zablokować w przeglądarce. Strona działa także bez nich.',
          ],
        },
        {
          heading: 'Wsparcie',
          paragraphs: [
            'W sprawach prywatności użyj strony Wsparcie. Zasady zakupów i zwrotów są w Regulaminie.',
          ],
        },
      ],
    },
    terms: {
      title: 'Regulamin Apex Cheats | Licencja i zwroty',
      description:
        'Warunki zakupu cheatów Apex na cheatsapex.com — licencja, dostawa, zwroty i ryzyko konta.',
      sections: [
        {
          heading: 'Umowa',
          paragraphs: [
            'Ostatnia aktualizacja: wrzesień 2026. Korzystając z cheatsapex.com lub kupując produkt, akceptujesz ten Regulamin i Politykę prywatności.',
          ],
        },
        {
          heading: 'Co kupujesz',
          paragraphs: [
            'Sprzedajemy tiery cheatów Apex (Lite, Pro, Elite) oraz narzędzia (HWID Spoofer, UGC, Skin Changer / Unlock All) przez portal i loader Windows dla EA.',
            'Strony produktów wymieniają, co jest w zestawie. Funkcje mogą się zmieniać po update Apex lub Easy Anti-Cheat.',
          ],
        },
        {
          heading: 'Checkout i dostawa',
          paragraphs: [
            'Płatność i dostawa licencji odbywają się na zewnętrznych stronach checkout. cheatsapex.com nie przetwarza ani nie przechowuje numerów kart.',
            'Po zakupie użyj portalu operatora z przepływu zamówienia, żeby pobrać aktualny loader i przewodnik setupu przed uruchomieniem Apex.',
          ],
        },
        {
          heading: 'Użycie licencji',
          paragraphs: [
            'Licencje są wyłącznie do użytku osobistego. Nie udostępniaj plików loadera, loginów do portalu ani kluczy licencji. Limity HWID i urządzeń zależą od tieru i są egzekwowane w portalu.',
          ],
        },
        {
          heading: 'Zwroty i zakupy',
          paragraphs: [
            'Wszystkie sprzedaże są ostateczne po zakończeniu checkout. Nie zwracamy zakupów ze zmiany zdania, banów konta, kar EAC ani problemów wynikających z ignorowania przewodników setupu lub uruchamiania modułów, gdy banner statusu pokazuje offline.',
            'Jeśli produkt nie działa zgodnie z opisem na wspieranym setupie — Apex w EA App na Windows 10/11, aktualny loader z portalu i żywy banner online w momencie startu — skontaktuj się przez stronę Wsparcie. Dołącz e-mail zamówienia, wersję Windows, build Apex oraz screenshoty lub dokładny tekst błędu z loadera.',
            'Możemy według uznania zaproponować poprawkę, zastępczy dostęp albo częściowy/pełny zwrot, gdy potwierdzimy naszą winę. Nie jesteśmy zobowiązani do akceptacji każdego wniosku.',
          ],
        },
        {
          heading: 'Dostępność i ryzyko',
          paragraphs: [
            'Narzędzia firm trzecich do Apex mogą kolidować z update’ami gry i systemami anti-cheat. Używasz oprogramowania na własne ryzyko, w tym możliwej akcji na koncie.',
            'Przed każdą sesją sprawdź banner statusu na homepage. Nie wchodź w ranked, gdy moduły są offline lub rozjechane po patchu.',
          ],
        },
        {
          heading: 'Zmiany',
          paragraphs: [
            'Możemy aktualizować te warunki. Data „Ostatnia aktualizacja” u góry zmieni się wtedy. Dalsze korzystanie ze strony oznacza akceptację zmienionych warunków.',
          ],
        },
        {
          heading: 'Wsparcie',
          paragraphs: [
            'W sprawach regulaminu, rozliczeń lub loadera użyj przycisków na stronie Wsparcie. Zobacz też Politykę prywatności dotyczącą danych na stronie.',
          ],
        },
      ],
    },
    support: {
      title: 'Wsparcie Apex Cheats | Loader, HWID i Checkout',
      description:
        'Wsparcie cheatów Apex przy setupie loadera, spoofingu HWID i checkout na cheatsapex.com.',
    },
  },
  ui: {
    skipLink: 'Przejdź do treści',
    browseCheats: 'Wypróbuj',
    browseCheatsMobile: 'Do kasy',
    buyNow: 'Kup teraz',
    viewDetails: 'Szczegóły',
    homeAria: 'Strona główna Apex Cheats',
    checkoutAria: 'Rozpocznij zakup',
    discordAria: 'Dołącz do Apex Cheats na Discord',
    menuOpen: 'Otwórz menu',
    menuClose: 'Zamknij menu',
    themeLight: 'Przełącz na tryb jasny',
    themeDark: 'Przełącz na tryb ciemny',
    home: 'Strona główna',
  },
  productHub: {
    pricingEyebrow: 'Cennik',
    plansTitle: 'Plany cheatów Apex Legends',
    plansDesc:
      'Te same moduły w każdym planie—player ESP, advanced aimbot, loot ESP, EAC bypass, stream proof oraz opcjonalnie Cloud-DMA / AWS.',
    modulesEyebrow: 'Moduły',
    modulesTitle: 'Co jest w zestawie',
    modulesDesc: 'Główne moduły cheatów Apex w Lite, Pro i Elite.',
    catalogEyebrow: 'Katalog',
    catalogTitle: 'Więcej narzędzi Apex',
    catalogDesc: 'HWID Spoofer, odzyskiwanie UGC i Skin Changer obok cheatów Elite.',
    stepsEyebrow: 'Jak to działa',
    stepsTitle: 'Od checkoutu do gry',
    stepsDesc: 'Kup, pobierz loader, włącz moduły, potem wejdź do kolejki, gdy status jest online.',
    faqEyebrow: 'FAQ',
    faqTitle: 'FAQ huba produktów',
    faqDesc: 'Szybkie odpowiedzi o planach, statusie i dostawie.',
  },
} as Partial<Translations>;
