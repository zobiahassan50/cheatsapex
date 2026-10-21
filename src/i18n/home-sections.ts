/**
 * Homepage section overlays for medium/light locales (features, whyUs, setup).
 * Merged in useTranslations so every language shows localized home chrome.
 */
import type { Translations } from './types';
import type { LocaleCode } from './locales';
import { PRODUCT_BASE } from '../config/site';

type PartialHome = Partial<
  Pick<Translations, 'features' | 'whyUs' | 'setup' | 'workflow'> & {
    faq: Pick<Translations['faq'], 'eyebrow' | 'title' | 'subtitle'>;
  }
>;

const productBase = PRODUCT_BASE;

function workflowCopy(
  eyebrow: string,
  badge: string,
  titleBefore: string,
  titleHighlight: string,
  subtitle: string,
  ctaLabel: string,
  ctaSecondary: string,
  items: Translations['workflow']['items'],
): Translations['workflow'] {
  return {
    eyebrow,
    badge,
    titleBefore,
    titleHighlight,
    subtitle,
    ctaLabel,
    ctaHref: productBase,
    ctaSecondary,
    ctaSecondaryHref: '/faq/',
    items,
  };
}

const bento = {
  aimbot: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
  esp: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
  loot: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
  stream: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
  eac: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
  dma: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-4',
  support: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-4',
} as const;

/** Levo-aligned 7 modules — titles/copy localized per language. */
function levoFeatures(
  eyebrow: string,
  title: string,
  subtitle: string,
  items: {
    title: string;
    subtitle: string;
    desc: string;
    bullets: string[];
    tags: string[];
  }[],
): Translations['features'] {
  const keys = ['aimbot', 'esp', 'loot', 'stream', 'eac', 'dma', 'support'] as const;
  return {
    eyebrow,
    title,
    subtitle,
    items: items.map((item, i) => ({
      ...item,
      bento: bento[keys[i]!],
    })),
  };
}

function setupSteps(
  buy: string,
  load: string,
  play: string,
  buyDesc: string,
  loadDesc: string,
  playDesc: string,
): Translations['setup']['steps'] {
  return [
    { step: '1', title: buy, desc: buyDesc },
    { step: '2', title: load, desc: loadDesc },
    { step: '3', title: play, desc: playDesc },
  ];
}

export const homeSectionOverlays: Partial<Record<Exclude<LocaleCode, 'en'>, PartialHome>> = {
  pt: {
    whyUs: {
      eyebrow: 'Por que nossos cheats',
      title: 'Cheats de Apex que ficam online',
      subtitle:
        'Atualizações rápidas do loader, miras suaves para Ranked e suporte Discord 24/7.',
      usLabel: 'Apex Cheats',
      otherLabel: 'Loja típica',
      rows: [
        {
          title: 'Updates após patches',
          desc: 'Novos builds costumam sair em horas após update do Apex ou EA Javelin.',
        },
        {
          title: 'Defaults suaves de aimbot',
          desc: 'Smoothness, FOV e bone priority pensados para Ranked.',
        },
        {
          title: 'Suporte Discord',
          desc: 'Ajuda com loader, configs e HWID — 24/7.',
        },
        {
          title: 'External + stream proof',
          desc: 'Loader externo e modo OBS-safe.',
        },
        {
          title: 'Configs na nuvem',
          desc: 'Salve presets BR / Ranked e carregue em outro PC.',
        },
        {
          title: 'Reset de HWID',
          desc: 'Resets de hardware e transferência de licença pelo Discord.',
        },
      ],
      metrics: [
        { value: '<24h', title: 'Patch', desc: 'Tempo típico até um loader novo após um patch grande.' },
        { value: '24/7', title: 'Suporte', desc: 'Setup, configs e conta no Discord.' },
        { value: '300+', title: 'Usuários', desc: 'Jogadores PC em cheatsapex.com.' },
      ],
    },
    setup: {
      eyebrow: 'Setup',
      titleLead: 'Compre cheats. Jogue em',
      titleHighlight: 'três passos',
      intro:
        'Compre seu cheat de Apex, baixe o loader, carregue um preset e abra o Apex. O Discord ajuda se travar.',
      ctaPrimary: 'Comprar cheats',
      ctaSecondary: 'FAQ de setup',
      ctaPrimaryHref: productBase,
      ctaSecondaryHref: '/faq/',
      steps: setupSteps(
        'Compre e baixe o loader',
        'Carregue presets',
        'Confira o status e jogue',
        'Finalize o checkout, abra o portal e baixe o loader Windows atual.',
        'Rode o loader, escolha Pubs ou Ranked e ajuste aimbot e ESP.',
        'Status online, abra o Apex no EA App e use seu config salvo.',
      ),
    },
    workflow: workflowCopy(
      'Como funciona',
      '4 passos',
      'Da compra aos',
      'cheats in-game.',
      'Compre cheats Apex, baixe o loader, ative os módulos e salve o config para a próxima partida.',
      'Comprar cheats',
      'FAQ de setup',
      [
        {
          num: '01',
          phase: 'Antes da compra',
          title: 'Confira o status',
          desc: 'Leia o banner ao vivo em cheatsapex.com antes de comprar ou abrir o jogo.',
        },
        {
          num: '02',
          phase: 'Checkout',
          title: 'Escolha o tier',
          desc: 'Lite, Pro ou Elite conforme os módulos que você precisa.',
        },
        {
          num: '03',
          phase: 'Loader',
          title: 'Abra e configure',
          desc: 'Baixe no portal, ative os módulos e teste em Arenas ou bot lobby.',
        },
        {
          num: '04',
          phase: 'In-game',
          title: 'Salve seu config',
          desc: 'Quando estiver bom, salve presets de Battle Royale e Ranked na nuvem.',
        },
      ],
    ),
  },
  ru: {
    features: levoFeatures(
    "Функции чита",
    "Модули читов Apex Legends",
    "Player ESP, advanced aimbot, loot ESP, no recoil, stream proof, EAC bypass и Cloud-DMA / AWS — актуальный каталог для PC.",
    [
      {
        title: "Advanced Aimbot",
        subtitle: "Боевой трекинг",
        desc: "Advanced aimbot для BR и Ranked с no recoil.",
        bullets: ["Advanced Aimbot", "No Recoil", "Пресеты Pubs и Ranked"],
        tags: ["apex aimbot", "no recoil", "ranked"],
      },
      {
        title: "Player ESP",
        subtitle: "Враги сквозь стены",
        desc: "Player ESP с box, skeleton, health и distance.",
        bullets: ["Player ESP", "Box ESP и Skeleton ESP", "Health Bar и Distance ESP"],
        tags: ["apex ESP", "wallhack", "player boxes"],
      },
      {
        title: "Weapon и Loot ESP",
        subtitle: "Оружие и лут",
        desc: "Weapon ESP и loot ESP для быстрого лута.",
        bullets: ["Weapon ESP", "Loot ESP", "Быстрые ротации"],
        tags: ["weapon ESP", "loot ESP", "POI"],
      },
      {
        title: "Stream Proof",
        subtitle: "Скрыть оверлей",
        desc: "Вы видите ESP; OBS пишет чистый кадр.",
        bullets: ["Stream Proof", "OBS-safe", "Тогл в лайве"],
        tags: ["stream proof", "OBS safe", "capture hide"],
      },
      {
        title: "EAC Bypass",
        subtitle: "После патчей",
        desc: "EAC bypass перепроверяется после Apex / Javelin.",
        bullets: ["EAC Bypass", "Статус после патчей", "Discord #status"],
        tags: ["eac bypass", "javelin", "apex anti cheat"],
      },
      {
        title: "Cloud-DMA и AWS",
        subtitle: "Варианты доставки",
        desc: "CLOUD-DMA OPTION и AWS option из каталога Apex.",
        bullets: ["CLOUD-DMA OPTION", "AWS option", "24/7 Support"],
        tags: ["apex dma cheats", "cloud dma", "aws"],
      },
      {
        title: "24/7 Support",
        subtitle: "Помощь Discord",
        desc: "Поддержка по лоадеру, конфигам и патчам.",
        bullets: ["24/7 Support", "Сетап", "Конфиги"],
        tags: ["discord support", "setup", "loader"],
      },
    ],
  ),
    whyUs: {
      eyebrow: 'Почему мы',
      title: 'Читы Apex, которые остаются онлайн',
      subtitle: 'Быстрые апдейты лоадера, безопасные дефолты aimbot для Ranked и поддержка Discord 24/7.',
      usLabel: 'Apex Cheats',
      otherLabel: 'Обычный магазин',
      rows: [
        { title: 'Апдейты после патчей', desc: 'Новые билды обычно в течение часов после обновления Apex или EA Javelin.' },
        { title: 'Плавные дефолты aimbot', desc: 'Smoothness, FOV и bone priority заточены под Ranked.' },
        { title: 'Поддержка Discord', desc: 'Помощь с лоадером, конфигами и HWID — 24/7.' },
        { title: 'External + stream proof', desc: 'Внешний лоадер и OBS-safe режим.' },
        { title: 'Облачные конфиги', desc: 'Сохраняйте пресеты BR / Ranked и переносите на другой ПК.' },
        { title: 'Сброс HWID', desc: 'Сбросы железа и перенос лицензии через Discord.' },
      ],
      metrics: [
        { value: '<24ч', title: 'Патч', desc: 'Обычное время до нового лоадера после крупного патча.' },
        { value: '24/7', title: 'Поддержка', desc: 'Discord: сетап, конфиги, аккаунт.' },
        { value: '300+', title: 'Игроки', desc: 'PC-игроки на cheatsapex.com.' },
      ],
    },
    setup: {
      eyebrow: 'Сетап',
      titleLead: 'Купи читы. Играй за',
      titleHighlight: 'три шага',
      intro: 'Оплати Apex cheat, скачай лоадер, загрузи пресет и запускай Apex. Discord поможет, если застрянешь.',
      ctaPrimary: 'Купить читы',
      ctaSecondary: 'FAQ по сетапу',
      ctaPrimaryHref: productBase,
      ctaSecondaryHref: '/faq/',
      steps: setupSteps(
        'Купи и скачай лоадер',
        'Загрузи пресеты',
        'Проверь статус и играй',
        'Оформи заказ, открой портал и скачай актуальный Windows-лоадер.',
        'Запусти лоадер, выбери Pubs или Ranked и настрой aimbot с ESP.',
        'Убедись, что статус online, запусти Apex в EA App и свой конфиг.',
      ),
    },
    workflow: workflowCopy(
      'Как это работает',
      '4 шага',
      'От покупки к',
      'читам в игре.',
      'Купи читы Apex, скачай лоадер, включи модули и сохрани конфиг на следующий матч.',
      'Купить читы',
      'FAQ по сетапу',
      [
        {
          num: '01',
          phase: 'Перед покупкой',
          title: 'Проверь статус',
          desc: 'Смотри живой баннер на cheatsapex.com перед покупкой или запуском.',
        },
        {
          num: '02',
          phase: 'Оплата',
          title: 'Выбери tier',
          desc: 'Lite, Pro или Elite — по нужным модулям.',
        },
        {
          num: '03',
          phase: 'Лоадер',
          title: 'Запусти и настрой',
          desc: 'Скачай в портале, включи модули и проверь в Arenas или bot lobby.',
        },
        {
          num: '04',
          phase: 'В игре',
          title: 'Сохрани конфиг',
          desc: 'Когда настройки ок — сохрани пресеты BR и Ranked в облако.',
        },
      ],
    ),
    faq: {
      eyebrow: 'FAQ',
      title: 'Вопросы о читах Apex',
      subtitle: 'Elite ESP и aimbot, HWID, UGC и Skin Changer — те же ответы, что на /faq/.',
    },
  },
  tr: {
    features: levoFeatures(
    "Cheat özellikleri",
    "Apex cheat modülleri",
    "Player ESP, advanced aimbot, loot ESP, no recoil, stream proof, EAC bypass ve Cloud-DMA / AWS — güncel PC kataloğu.",
    [
      {
        title: "Advanced Aimbot",
        subtitle: "Savaş takibi",
        desc: "BR ve Ranked için advanced aimbot ve no recoil.",
        bullets: ["Advanced Aimbot", "No Recoil", "Pubs ve Ranked preset"],
        tags: ["apex aimbot", "no recoil", "ranked"],
      },
      {
        title: "Player ESP",
        subtitle: "Duvardan oyuncu",
        desc: "Box, skeleton, health ve distance ile player ESP.",
        bullets: ["Player ESP", "Box ESP ve Skeleton ESP", "Health Bar ve Distance ESP"],
        tags: ["apex ESP", "wallhack", "player boxes"],
      },
      {
        title: "Weapon ve Loot ESP",
        subtitle: "Silah ve loot",
        desc: "Weapon ESP ve loot ESP ile daha hızlı loot.",
        bullets: ["Weapon ESP", "Loot ESP", "Hızlı rotasyon"],
        tags: ["weapon ESP", "loot ESP", "POI"],
      },
      {
        title: "Stream Proof",
        subtitle: "Yayında gizle",
        desc: "Siz ESP görürsünüz; OBS temiz kayıt alır.",
        bullets: ["Stream Proof", "OBS-safe", "Canlıda aç/kapa"],
        tags: ["stream proof", "OBS safe", "capture hide"],
      },
      {
        title: "EAC Bypass",
        subtitle: "Yama sonrası",
        desc: "EAC bypass Apex / Javelin güncellemelerinden sonra test edilir.",
        bullets: ["EAC Bypass", "Yama sonrası durum", "Discord #status"],
        tags: ["eac bypass", "javelin", "apex anti cheat"],
      },
      {
        title: "Cloud-DMA ve AWS",
        subtitle: "Teslim seçenekleri",
        desc: "Katalogdaki CLOUD-DMA OPTION ve AWS option.",
        bullets: ["CLOUD-DMA OPTION", "AWS option", "24/7 Support"],
        tags: ["apex dma cheats", "cloud dma", "aws"],
      },
      {
        title: "24/7 Support",
        subtitle: "Discord yardım",
        desc: "Loader, config ve yama desteği.",
        bullets: ["24/7 Support", "Kurulum", "Config"],
        tags: ["discord support", "setup", "loader"],
      },
    ],
  ),
    whyUs: {
      eyebrow: 'Neden biz',
      title: 'Çevrimiçi kalan Apex hileleri',
      subtitle: 'Hızlı loader güncellemesi, Ranked için yumuşak aimbot varsayılanları ve 24/7 Discord desteği.',
      usLabel: 'Apex Cheats',
      otherLabel: 'Tipik mağaza',
      rows: [
        { title: 'Yama sonrası güncelleme', desc: 'Apex veya EA Javelin sonrası genelde saatler içinde yeni build.' },
        { title: 'Yumuşak aimbot varsayılanları', desc: 'Smoothness, FOV ve bone priority Ranked için ayarlı.' },
        { title: 'Discord desteği', desc: 'Loader, config ve HWID yardımı 24/7.' },
        { title: 'External + stream proof', desc: 'Harici loader ve OBS-safe mod.' },
        { title: 'Bulut config', desc: 'BR / Ranked ayarlarını kaydedip başka PC’de açın.' },
        { title: 'HWID sıfırlama', desc: 'Donanım sıfırlama ve lisans taşıma Discord üzerinden.' },
      ],
      metrics: [
        { value: '<24s', title: 'Yama', desc: 'Büyük yama sonrası tipik loader süresi.' },
        { value: '24/7', title: 'Destek', desc: 'Kurulum, config, hesap.' },
        { value: '300+', title: 'Kullanıcı', desc: 'cheatsapex.com PC oyuncuları.' },
      ],
    },
    setup: {
      eyebrow: 'Kurulum',
      titleLead: 'Hile al. Oyna',
      titleHighlight: 'üç adımda',
      intro: 'Apex hilenizi alın, loader’ı indirin, preset yükleyin, Apex’i açın. Takılırsanız Discord yardımcı olur.',
      ctaPrimary: 'Hileleri al',
      ctaSecondary: 'Kurulum SSS',
      ctaPrimaryHref: productBase,
      ctaSecondaryHref: '/faq/',
      steps: setupSteps(
        'Satın al ve loader indir',
        'Presetleri yükle',
        'Durumu kontrol et ve oyna',
        'Ödemeyi bitirin, portali açın, güncel Windows loader’ı indirin.',
        'Loader’ı çalıştırın, Pubs veya Ranked seçin, aimbot ve ESP ayarlayın.',
        'Durum online olsun, EA App’te Apex’i açın, kaydettiğiniz config’i kullanın.',
      ),
    },
    workflow: workflowCopy(
      'Nasıl çalışır',
      '4 adım',
      'Satın almadan',
      'oyuna.',
      'Apex hilesi alın, loader’ı indirin, modülleri açın, sonraki maç için config kaydedin.',
      'Hileleri al',
      'Kurulum SSS',
      [
        {
          num: '01',
          phase: 'Satın almadan önce',
          title: 'Durumu kontrol et',
          desc: 'Satın almadan veya açmadan önce cheatsapex.com canlı banner’ını okuyun.',
        },
        {
          num: '02',
          phase: 'Ödeme',
          title: 'Tier seç',
          desc: 'İhtiyacınız olan modüllere göre Lite, Pro veya Elite.',
        },
        {
          num: '03',
          phase: 'Loader',
          title: 'Aç ve kur',
          desc: 'Portaldan indirin, modülleri açın, Arenas veya bot lobby’de test edin.',
        },
        {
          num: '04',
          phase: 'Oyunda',
          title: 'Config kaydet',
          desc: 'Ayarlar oturunca BR ve Ranked presetlerini buluta kaydedin.',
        },
      ],
    ),
    faq: {
      eyebrow: 'SSS',
      title: 'Apex hile soruları',
      subtitle: 'Elite ESP ve aimbot, HWID, UGC ve Skin Changer — /faq/ ile aynı yanıtlar.',
    },
  },
  de: {
    features: levoFeatures(
    "Cheat-Features",
    "Apex-Cheat-Module",
    "Player ESP, Advanced Aimbot, Loot ESP, No Recoil, Stream Proof, EAC Bypass und Cloud-DMA / AWS — aktueller PC-Katalog.",
    [
      {
        title: "Advanced Aimbot",
        subtitle: "Kampf-Tracking",
        desc: "Advanced Aimbot für BR und Ranked mit No Recoil.",
        bullets: ["Advanced Aimbot", "No Recoil", "Pubs- und Ranked-Presets"],
        tags: ["apex aimbot", "no recoil", "ranked"],
      },
      {
        title: "Player ESP",
        subtitle: "Gegner durch Wände",
        desc: "Player ESP mit Box, Skeleton, Health und Distance.",
        bullets: ["Player ESP", "Box ESP & Skeleton ESP", "Health Bar & Distance ESP"],
        tags: ["apex ESP", "wallhack", "player boxes"],
      },
      {
        title: "Weapon & Loot ESP",
        subtitle: "Waffen und Loot",
        desc: "Weapon ESP und Loot ESP für schnelleres Looten.",
        bullets: ["Weapon ESP", "Loot ESP", "Schnellere Rotationen"],
        tags: ["weapon ESP", "loot ESP", "POI"],
      },
      {
        title: "Stream Proof",
        subtitle: "Overlay verstecken",
        desc: "Du siehst ESP; OBS nimmt sauber auf.",
        bullets: ["Stream Proof", "OBS-safe", "Toggle live"],
        tags: ["stream proof", "OBS safe", "capture hide"],
      },
      {
        title: "EAC Bypass",
        subtitle: "Nach Patches",
        desc: "EAC Bypass wird nach Apex / Javelin neu geprüft.",
        bullets: ["EAC Bypass", "Status nach Patches", "Discord #status"],
        tags: ["eac bypass", "javelin", "apex anti cheat"],
      },
      {
        title: "Cloud-DMA & AWS",
        subtitle: "Lieferoptionen",
        desc: "CLOUD-DMA OPTION und AWS option aus dem Apex-Katalog.",
        bullets: ["CLOUD-DMA OPTION", "AWS option", "24/7 Support"],
        tags: ["apex dma cheats", "cloud dma", "aws"],
      },
      {
        title: "24/7 Support",
        subtitle: "Discord-Hilfe",
        desc: "Hilfe zu Loader, Configs und Patches.",
        bullets: ["24/7 Support", "Setup", "Configs"],
        tags: ["discord support", "setup", "loader"],
      },
    ],
  ),
    whyUs: {
      eyebrow: 'Warum wir',
      title: 'Apex Cheats, die online bleiben',
      subtitle: 'Schnelle Loader-Updates, weiche Aimbot-Defaults für Ranked und Discord-Support 24/7.',
      usLabel: 'Apex Cheats',
      otherLabel: 'Typischer Shop',
      rows: [
        { title: 'Updates nach Patches', desc: 'Neue Builds meist innerhalb von Stunden nach Apex oder EA Javelin.' },
        { title: 'Weiche Aimbot-Defaults', desc: 'Smoothness, FOV und Bone Priority für Ranked gesetzt.' },
        { title: 'Discord-Support', desc: 'Hilfe zu Loader, Configs und HWID — 24/7.' },
        { title: 'External + Stream Proof', desc: 'Externer Loader und OBS-sicherer Modus.' },
        { title: 'Cloud-Configs', desc: 'BR-/Ranked-Settings speichern und auf anderem PC laden.' },
        { title: 'HWID-Resets', desc: 'Hardware-Resets und Lizenzumzug über Discord.' },
      ],
      metrics: [
        { value: '<24h', title: 'Patch', desc: 'Übliche Zeit bis zum neuen Loader nach großem Patch.' },
        { value: '24/7', title: 'Support', desc: 'Setup, Configs, Account.' },
        { value: '300+', title: 'Nutzer', desc: 'PC-Spieler auf cheatsapex.com.' },
      ],
    },
    setup: {
      eyebrow: 'Setup',
      titleLead: 'Cheats kaufen. Spielen in',
      titleHighlight: 'drei Schritten',
      intro: 'Apex Cheat kaufen, Loader laden, Preset setzen, Apex starten. Discord hilft bei Problemen.',
      ctaPrimary: 'Cheats kaufen',
      ctaSecondary: 'Setup-FAQ',
      ctaPrimaryHref: productBase,
      ctaSecondaryHref: '/faq/',
      steps: setupSteps(
        'Kaufen und Loader laden',
        'Presets laden',
        'Status prüfen und spielen',
        'Checkout abschließen, Portal öffnen, aktuellen Windows-Loader laden.',
        'Loader starten, Pubs oder Ranked wählen, Aimbot und ESP einstellen.',
        'Status online, Apex in der EA App starten, gespeicherte Config nutzen.',
      ),
    },
    workflow: workflowCopy(
      'So funktioniert’s',
      '4 Schritte',
      'Vom Kauf zu',
      'Ingame-Cheats.',
      'Apex-Cheats kaufen, Loader laden, Module aktivieren, Config fürs nächste Match speichern.',
      'Cheats kaufen',
      'Setup-FAQ',
      [
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
    ),
    faq: {
      eyebrow: 'FAQ',
      title: 'Fragen zu Apex-Cheats',
      subtitle: 'Elite ESP & Aimbot, HWID, UGC und Skin Changer — dieselben Antworten wie unter /faq/.',
    },
  },
  pl: {
    features: levoFeatures(
    "Funkcje cheata",
    "Moduły cheatów Apex",
    "Player ESP, advanced aimbot, loot ESP, no recoil, stream proof, EAC bypass i Cloud-DMA / AWS — aktualny katalog PC.",
    [
      {
        title: "Advanced Aimbot",
        subtitle: "Tracking w walce",
        desc: "Advanced aimbot do BR i Ranked z no recoil.",
        bullets: ["Advanced Aimbot", "No Recoil", "Preset Pubs i Ranked"],
        tags: ["apex aimbot", "no recoil", "ranked"],
      },
      {
        title: "Player ESP",
        subtitle: "Wrogowie przez ściany",
        desc: "Player ESP z box, skeleton, health i distance.",
        bullets: ["Player ESP", "Box ESP i Skeleton ESP", "Health Bar i Distance ESP"],
        tags: ["apex ESP", "wallhack", "player boxes"],
      },
      {
        title: "Weapon i Loot ESP",
        subtitle: "Broń i loot",
        desc: "Weapon ESP i loot ESP do szybszego lootu.",
        bullets: ["Weapon ESP", "Loot ESP", "Szybsze rotacje"],
        tags: ["weapon ESP", "loot ESP", "POI"],
      },
      {
        title: "Stream Proof",
        subtitle: "Ukryj overlay",
        desc: "Widzisz ESP; OBS nagrywa czysto.",
        bullets: ["Stream Proof", "OBS-safe", "Toggle na żywo"],
        tags: ["stream proof", "OBS safe", "capture hide"],
      },
      {
        title: "EAC Bypass",
        subtitle: "Po patchach",
        desc: "EAC bypass testowany po Apex / Javelin.",
        bullets: ["EAC Bypass", "Status po patchach", "Discord #status"],
        tags: ["eac bypass", "javelin", "apex anti cheat"],
      },
      {
        title: "Cloud-DMA i AWS",
        subtitle: "Opcje dostawy",
        desc: "CLOUD-DMA OPTION i AWS option z katalogu Apex.",
        bullets: ["CLOUD-DMA OPTION", "AWS option", "24/7 Support"],
        tags: ["apex dma cheats", "cloud dma", "aws"],
      },
      {
        title: "24/7 Support",
        subtitle: "Pomoc Discord",
        desc: "Wsparcie loadera, configów i patchy.",
        bullets: ["24/7 Support", "Setup", "Configi"],
        tags: ["discord support", "setup", "loader"],
      },
    ],
  ),
    whyUs: {
      eyebrow: 'Dlaczego my',
      title: 'Cheaty Apex, które zostają online',
      subtitle: 'Szybkie update’y loadera, bezpieczne defaulty aimbotu na Ranked i Discord 24/7.',
      usLabel: 'Apex Cheats',
      otherLabel: 'Typowy sklep',
      rows: [
        { title: 'Update po patchach', desc: 'Nowe buildy zwykle w godziny po Apex lub EA Javelin.' },
        { title: 'Płynne defaulty aimbotu', desc: 'Smoothness, FOV i bone priority pod Ranked.' },
        { title: 'Wsparcie Discord', desc: 'Loader, configi i HWID — 24/7.' },
        { title: 'External + stream proof', desc: 'Zewnętrzny loader i tryb OBS-safe.' },
        { title: 'Configi w chmurze', desc: 'Zapisuj BR / Ranked i ładuj na innym PC.' },
        { title: 'Reset HWID', desc: 'Resety sprzętu i przenoszenie licencji przez Discord.' },
      ],
      metrics: [
        { value: '<24h', title: 'Patch', desc: 'Typowy czas do nowego loadera po dużym patchu.' },
        { value: '24/7', title: 'Wsparcie', desc: 'Setup, configi, konto.' },
        { value: '300+', title: 'Gracze', desc: 'Gracze PC na cheatsapex.com.' },
      ],
    },
    setup: {
      eyebrow: 'Setup',
      titleLead: 'Kup cheaty. Graj w',
      titleHighlight: 'trzech krokach',
      intro: 'Kup cheata Apex, pobierz loader, wczytaj preset i uruchom Apex. Discord pomoże, jeśli utkniesz.',
      ctaPrimary: 'Kup cheaty',
      ctaSecondary: 'FAQ setupu',
      ctaPrimaryHref: productBase,
      ctaSecondaryHref: '/faq/',
      steps: setupSteps(
        'Kup i pobierz loader',
        'Wczytaj presety',
        'Sprawdź status i graj',
        'Dokończ checkout, otwórz portal i pobierz aktualny loader Windows.',
        'Uruchom loader, wybierz Pubs lub Ranked, ustaw aimbot i ESP.',
        'Status online, uruchom Apex w EA App i swój zapisany config.',
      ),
    },
    workflow: workflowCopy(
      'Jak to działa',
      '4 kroki',
      'Od zakupu do',
      'cheatów w grze.',
      'Kup cheaty Apex, pobierz loader, włącz moduły i zapisz config na następną grę.',
      'Kup cheaty',
      'FAQ setupu',
      [
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
          desc: 'Lite, Pro lub Elite według potrzebnych modułów.',
        },
        {
          num: '03',
          phase: 'Loader',
          title: 'Uruchom i skonfiguruj',
          desc: 'Pobierz z portalu, włącz moduły, przetestuj w Arenas lub bot lobby.',
        },
        {
          num: '04',
          phase: 'W grze',
          title: 'Zapisz config',
          desc: 'Gdy ustawienia pasują — zapisz presety BR i Ranked w chmurze.',
        },
      ],
    ),
    faq: {
      eyebrow: 'FAQ',
      title: 'Pytania o cheaty Apex',
      subtitle: 'Elite ESP i aimbot, HWID, UGC i Skin Changer — te same odpowiedzi co na /faq/.',
    },
  },
  fr: {
    features: levoFeatures(
    "Fonctions du cheat",
    "Modules de cheat Apex",
    "Player ESP, aimbot avancé, loot ESP, no recoil, stream proof, EAC bypass et Cloud-DMA / AWS — catalogue PC actuel.",
    [
      {
        title: "Advanced Aimbot",
        subtitle: "Suivi de combat",
        desc: "Aimbot avancé pour BR et Ranked avec no recoil.",
        bullets: ["Advanced Aimbot", "No Recoil", "Presets Pubs et Ranked"],
        tags: ["apex aimbot", "no recoil", "ranked"],
      },
      {
        title: "Player ESP",
        subtitle: "Ennemis à travers les murs",
        desc: "Player ESP avec box, skeleton, health et distance.",
        bullets: ["Player ESP", "Box ESP et Skeleton ESP", "Health Bar et Distance ESP"],
        tags: ["apex ESP", "wallhack", "player boxes"],
      },
      {
        title: "Weapon et Loot ESP",
        subtitle: "Armes et loot",
        desc: "Weapon ESP et loot ESP pour looter plus vite.",
        bullets: ["Weapon ESP", "Loot ESP", "Rotations plus rapides"],
        tags: ["weapon ESP", "loot ESP", "POI"],
      },
      {
        title: "Stream Proof",
        subtitle: "Masquer l'overlay",
        desc: "Vous voyez l'ESP; OBS capture propre.",
        bullets: ["Stream Proof", "OBS-safe", "Toggle en live"],
        tags: ["stream proof", "OBS safe", "capture hide"],
      },
      {
        title: "EAC Bypass",
        subtitle: "Après les patchs",
        desc: "EAC bypass retesté après Apex / Javelin.",
        bullets: ["EAC Bypass", "Statut après patchs", "Discord #status"],
        tags: ["eac bypass", "javelin", "apex anti cheat"],
      },
      {
        title: "Cloud-DMA et AWS",
        subtitle: "Options de livraison",
        desc: "CLOUD-DMA OPTION et AWS option du catalogue Apex.",
        bullets: ["CLOUD-DMA OPTION", "AWS option", "24/7 Support"],
        tags: ["apex dma cheats", "cloud dma", "aws"],
      },
      {
        title: "24/7 Support",
        subtitle: "Aide Discord",
        desc: "Support loader, configs et patchs.",
        bullets: ["24/7 Support", "Setup", "Configs"],
        tags: ["discord support", "setup", "loader"],
      },
    ],
  ),
    whyUs: {
      eyebrow: 'Pourquoi nous',
      title: 'Des cheats Apex qui restent en ligne',
      subtitle: 'Updates loader rapides, defaults aimbot soft pour Ranked et Discord 24/7.',
      usLabel: 'Apex Cheats',
      otherLabel: 'Boutique typique',
      rows: [
        { title: 'Updates après patchs', desc: 'Nouveaux builds souvent en quelques heures après Apex ou EA Javelin.' },
        { title: 'Defaults aimbot soft', desc: 'Smoothness, FOV et bone priority réglés pour Ranked.' },
        { title: 'Support Discord', desc: 'Aide loader, configs et HWID — 24/7.' },
        { title: 'External + stream proof', desc: 'Loader externe et mode OBS-safe.' },
        { title: 'Configs cloud', desc: 'Sauvez BR / Ranked et rechargez sur un autre PC.' },
        { title: 'Resets HWID', desc: 'Resets hardware et transfert de licence via Discord.' },
      ],
      metrics: [
        { value: '<24h', title: 'Patch', desc: 'Délai typique vers un nouveau loader après gros patch.' },
        { value: '24/7', title: 'Support', desc: 'Setup, configs, compte.' },
        { value: '300+', title: 'Joueurs', desc: 'Joueurs PC sur cheatsapex.com.' },
      ],
    },
    setup: {
      eyebrow: 'Installation',
      titleLead: 'Achetez. Jouez en',
      titleHighlight: 'trois étapes',
      intro: 'Achetez le cheat Apex, téléchargez le loader, chargez un preset, lancez Apex. Discord aide en cas de blocage.',
      ctaPrimary: 'Acheter les cheats',
      ctaSecondary: 'FAQ setup',
      ctaPrimaryHref: productBase,
      ctaSecondaryHref: '/faq/',
      steps: setupSteps(
        'Acheter et télécharger le loader',
        'Charger les presets',
        'Vérifier le statut et jouer',
        'Terminez le checkout, ouvrez le portail et téléchargez le loader Windows actuel.',
        'Lancez le loader, choisissez Pubs ou Ranked, réglez aimbot et ESP.',
        'Statut online, lancez Apex via EA App et votre config sauvegardée.',
      ),
    },
    workflow: workflowCopy(
      'Comment ça marche',
      '4 étapes',
      'De l’achat aux',
      'cheats in-game.',
      'Achetez des cheats Apex, téléchargez le loader, activez les modules, sauvegardez votre config.',
      'Acheter des cheats',
      'FAQ setup',
      [
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
          desc: 'Lite, Pro ou Elite selon les modules dont vous avez besoin.',
        },
        {
          num: '03',
          phase: 'Loader',
          title: 'Lancer et configurer',
          desc: 'Téléchargez depuis le portail, activez les modules, testez en Arenas ou bot lobby.',
        },
        {
          num: '04',
          phase: 'In-game',
          title: 'Sauvegarder la config',
          desc: 'Quand c’est bon, sauvegardez les presets BR et Ranked dans le cloud.',
        },
      ],
    ),
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions sur les cheats Apex',
      subtitle: 'Elite ESP et aimbot, HWID, UGC et Skin Changer — les mêmes réponses que sur /faq/.',
    },
  },
  es: {
    features: levoFeatures(
    "Funciones del cheat",
    "Módulos de cheat de Apex",
    "Player ESP, aimbot avanzado, loot ESP, no recoil, stream proof, EAC bypass y Cloud-DMA / AWS — catálogo PC actual.",
    [
      {
        title: "Advanced Aimbot",
        subtitle: "Seguimiento en combate",
        desc: "Aimbot avanzado para BR y Ranked con no recoil.",
        bullets: ["Advanced Aimbot", "No Recoil", "Presets Pubs y Ranked"],
        tags: ["apex aimbot", "no recoil", "ranked"],
      },
      {
        title: "Player ESP",
        subtitle: "Enemigos a través de paredes",
        desc: "Player ESP con box, skeleton, health y distance.",
        bullets: ["Player ESP", "Box ESP y Skeleton ESP", "Health Bar y Distance ESP"],
        tags: ["apex ESP", "wallhack", "player boxes"],
      },
      {
        title: "Weapon y Loot ESP",
        subtitle: "Armas y loot",
        desc: "Weapon ESP y loot ESP para lootear más rápido.",
        bullets: ["Weapon ESP", "Loot ESP", "Rotaciones más rápidas"],
        tags: ["weapon ESP", "loot ESP", "POI"],
      },
      {
        title: "Stream Proof",
        subtitle: "Ocultar overlay",
        desc: "Tú ves ESP; OBS captura limpio.",
        bullets: ["Stream Proof", "OBS-safe", "Toggle en vivo"],
        tags: ["stream proof", "OBS safe", "capture hide"],
      },
      {
        title: "EAC Bypass",
        subtitle: "Tras parches",
        desc: "EAC bypass se reprueba tras Apex / Javelin.",
        bullets: ["EAC Bypass", "Estado tras parches", "Discord #status"],
        tags: ["eac bypass", "javelin", "apex anti cheat"],
      },
      {
        title: "Cloud-DMA y AWS",
        subtitle: "Opciones de entrega",
        desc: "CLOUD-DMA OPTION y AWS option del catálogo Apex.",
        bullets: ["CLOUD-DMA OPTION", "AWS option", "24/7 Support"],
        tags: ["apex dma cheats", "cloud dma", "aws"],
      },
      {
        title: "24/7 Support",
        subtitle: "Ayuda Discord",
        desc: "Soporte de loader, configs y parches.",
        bullets: ["24/7 Support", "Setup", "Configs"],
        tags: ["discord support", "setup", "loader"],
      },
    ],
  ),
    whyUs: {
      eyebrow: 'Por qué nosotros',
      title: 'Cheats de Apex que se mantienen online',
      subtitle: 'Updates rápidos del loader, defaults suaves de aimbot para Ranked y Discord 24/7.',
      usLabel: 'Apex Cheats',
      otherLabel: 'Tienda típica',
      rows: [
        { title: 'Updates tras parches', desc: 'Builds nuevos suelen salir en horas tras Apex o EA Javelin.' },
        { title: 'Defaults suaves de aimbot', desc: 'Smoothness, FOV y bone priority pensados para Ranked.' },
        { title: 'Soporte Discord', desc: 'Ayuda con loader, configs y HWID — 24/7.' },
        { title: 'External + stream proof', desc: 'Loader externo y modo OBS-safe.' },
        { title: 'Configs en la nube', desc: 'Guarda BR / Ranked y cárgalos en otro PC.' },
        { title: 'Resets HWID', desc: 'Resets de hardware y traslado de licencia por Discord.' },
      ],
      metrics: [
        { value: '<24h', title: 'Parche', desc: 'Tiempo típico hasta un loader nuevo tras un parche grande.' },
        { value: '24/7', title: 'Soporte', desc: 'Setup, configs, cuenta.' },
        { value: '300+', title: 'Usuarios', desc: 'Jugadores PC en cheatsapex.com.' },
      ],
    },
    setup: {
      eyebrow: 'Setup',
      titleLead: 'Compra cheats. Juega en',
      titleHighlight: 'tres pasos',
      intro: 'Compra tu cheat de Apex, descarga el loader, carga un preset y abre Apex. Discord ayuda si te atascas.',
      ctaPrimary: 'Comprar cheats',
      ctaSecondary: 'FAQ de setup',
      ctaPrimaryHref: productBase,
      ctaSecondaryHref: '/faq/',
      steps: setupSteps(
        'Compra y descarga el loader',
        'Carga presets',
        'Revisa el estado y juega',
        'Termina el checkout, abre el portal y descarga el loader Windows actual.',
        'Ejecuta el loader, elige Pubs o Ranked y ajusta aimbot y ESP.',
        'Estado online, lanza Apex en EA App y usa tu config guardada.',
      ),
    },
    workflow: workflowCopy(
      'Cómo funciona',
      '4 pasos',
      'De la compra a los',
      'cheats in-game.',
      'Compra cheats de Apex, descarga el loader, activa módulos y guarda tu config.',
      'Comprar cheats',
      'FAQ de setup',
      [
        {
          num: '01',
          phase: 'Antes de comprar',
          title: 'Revisa el estado',
          desc: 'Lee el banner en vivo en cheatsapex.com antes de comprar o lanzar.',
        },
        {
          num: '02',
          phase: 'Checkout',
          title: 'Elige un tier',
          desc: 'Lite, Pro o Elite según los módulos que necesites.',
        },
        {
          num: '03',
          phase: 'Loader',
          title: 'Abre y configura',
          desc: 'Descarga del portal, activa módulos y prueba en Arenas o bot lobby.',
        },
        {
          num: '04',
          phase: 'In-game',
          title: 'Guarda tu config',
          desc: 'Cuando esté bien, guarda presets de BR y Ranked en la nube.',
        },
      ],
    ),
    faq: {
      eyebrow: 'FAQ',
      title: 'Preguntas sobre cheats de Apex',
      subtitle: 'Elite ESP y aimbot, HWID, UGC y Skin Changer — las mismas respuestas que en /faq/.',
    },
  },
};
