import type { Translations } from './types';
import { DISCORD_URL, PRODUCT_BASE } from '../config/site';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';

const productBase = PRODUCT_BASE;

/** Medium conversion — Russia. Full UI overlay (no English fallback for headings/copy). */
export const ru: Partial<Translations> = {
  site: {
    name: 'Apex Cheats',
    domain: 'cheatsapex.com',
    title: 'Купить читы Apex Legends | Aimbot и ESP',
    description:
      'Купите undetected читы Apex Legends для PC — aimbot, ESP wallhack, loot ESP и HWID. Обновления под EA Javelin каждый патч.',
    discord: DISCORD_URL,
  },
  nav: [
    { href: `${productBase}`, label: 'Продукты' },
    { href: '/blog/', label: 'Блог' },
    { href: '/forum/', label: 'Форум' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Поддержка' },
  ],
  hero: {
    status: 'Apex online',
    eyebrow: 'Приватные читы Apex Legends',
    titleLine1: 'Купить читы Apex Legends',
    titleLine2: 'Aimbot, ESP Wallhack и Loot ESP',
    subtitle:
      'Магазин хаков Apex Legends для PC — undetected aimbot, ESP wallhack, радар и loot ESP для Battle Royale и Ranked. Обновляется после каждого патча EAC.',
    ctaPrimary: 'Купить читы',
    ctaDiscord: 'Discord',
    modesLabel: 'Режимы',
    modes: ['Battle Royale', 'Ranked', 'Mixtape', 'Arenas'],
    metrics: [
      { label: 'Stream-safe', strong: 'Да' },
      { label: 'Патч', strong: '<24ч' },
      { label: 'Игроки', strong: '300+' },
      { label: 'Поддержка', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Функции чита',
    title: 'Модули читов Apex Legends',
    subtitle:
      'Player ESP, advanced aimbot, loot ESP, no recoil, stream proof, EAC bypass и Cloud-DMA / AWS — актуальный каталог для PC.',
    items: [
      {
        title: 'Advanced Aimbot',
        subtitle: 'Боевой трекинг',
        desc: 'Advanced aimbot для Battle Royale и Ranked с no recoil — трекинг остаётся стабильным в файтах.',
        bullets: ['Advanced Aimbot', 'No Recoil', 'Пресеты Pubs и Ranked'],
        tags: ['apex aimbot', 'no recoil', 'ranked'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP',
        subtitle: 'Враги сквозь стены',
        desc: 'Player ESP с box, skeleton, health bar и distance — замечайте сквады до пуша.',
        bullets: ['Player ESP', 'Box ESP и Skeleton ESP', 'Health Bar и Distance ESP'],
        tags: ['apex ESP', 'wallhack', 'player boxes'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Weapon и Loot ESP',
        subtitle: 'Оружие и лут',
        desc: 'Weapon ESP и loot ESP подсвечивают оружие и лут на полу — быстрее экипируетесь.',
        bullets: ['Weapon ESP', 'Loot ESP', 'Быстрые ротации'],
        tags: ['weapon ESP', 'loot ESP', 'POI'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
      {
        title: 'Stream Proof',
        subtitle: 'Скрыть оверлей',
        desc: 'Вы видите ESP и aimbot. OBS и Game Bar пишут чистый кадр.',
        bullets: ['Stream Proof', 'OBS-safe capture', 'Тогл в лайве'],
        tags: ['stream proof', 'OBS safe', 'capture hide'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'EAC Bypass',
        subtitle: 'После патчей',
        desc: 'Сборки EAC bypass перепроверяются после обновлений Apex и EA Javelin. Проверяйте статус перед запуском.',
        bullets: ['EAC Bypass', 'Статус после патчей', 'Discord #status'],
        tags: ['eac bypass', 'javelin', 'apex anti cheat'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Cloud-DMA и AWS',
        subtitle: 'Варианты доставки',
        desc: 'CLOUD-DMA OPTION и AWS option для альтернативных путей доставки из каталога Apex.',
        bullets: ['CLOUD-DMA OPTION', 'AWS option', '24/7 Support'],
        tags: ['apex dma cheats', 'cloud dma', 'aws'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-4',
      },
      {
        title: '24/7 Support',
        subtitle: 'Помощь Discord',
        desc: 'Прямая поддержка в Discord по лоадеру, конфигам и вопросам после патчей.',
        bullets: ['24/7 Support', 'Сетап', 'Конфиги'],
        tags: ['discord support', 'setup', 'loader'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-4',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Почему мы',
    title: 'Читы Apex, которые остаются онлайн',
    subtitle:
      'Многие магазины падают после патчей EAC и оставляют вас с ботами. Мы быстро шлём апдейты лоадера, держим безопасные дефолты aimbot для Ranked и отвечаем в Discord 24/7.',
    usLabel: 'Apex Cheats',
    otherLabel: 'Обычный магазин',
    rows: [
      {
        title: 'Апдейты после патчей',
        desc: 'Новые билды обычно выходят в течение часов после обновления Apex или EA Javelin. Перед очередью смотрите Discord #status.',
      },
      {
        title: 'Плавные дефолты aimbot',
        desc: 'Smoothness, FOV и bone priority заточены под Ranked. Позже можно ужесточить.',
      },
      {
        title: 'Поддержка Discord',
        desc: 'Помощь с лоадером, конфигами оружия и сбросом HWID. Покрытие 24/7.',
      },
      {
        title: 'External + stream proof',
        desc: 'Внешний лоадер с OBS-safe режимом — оверлеи не попадают на стрим.',
      },
      {
        title: 'Облачные конфиги',
        desc: 'Сохраняйте пресеты Battle Royale, Ranked и под оружие и загружайте на другом ПК.',
      },
      {
        title: 'Сброс HWID',
        desc: 'Сбросы железа и перенос лицензии через Discord. Многие магазины привязывают к одному ПК.',
      },
    ],
    metrics: [
      {
        value: '<24ч',
        title: 'Патч',
        desc: 'Обычное время до нового лоадера после крупного обновления Apex или EA Javelin.',
      },
      {
        value: '24/7',
        title: 'Поддержка',
        desc: 'Discord: сетап, конфиги и аккаунт.',
      },
      {
        value: '300+',
        title: 'Игроки',
        desc: 'PC-игроки с aimbot, ESP и утилитами на cheatsapex.com.',
      },
    ],
  },
  setup: {
    eyebrow: 'Сетап',
    titleLead: 'Купи читы. Играй за',
    titleHighlight: 'три шага',
    intro:
      'Оплати Apex cheat, скачай лоадер, загрузи пресет и запускай Apex. Discord поможет, если застрянешь.',
    ctaPrimary: 'Купить читы',
    ctaSecondary: 'Смотреть FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Шаг 1',
        title: 'Купи и скачай лоадер',
        desc: 'Заверши оплату, открой портал и скачай актуальный Windows-лоадер.',
      },
      {
        step: 'Шаг 2',
        title: 'Загрузи пресеты',
        desc: 'Запусти лоадер, выбери пресет Pubs или Ranked и настрой aimbot с ESP.',
      },
      {
        step: 'Шаг 3',
        title: 'Проверь статус и играй',
        desc: 'Убедись, что баннер статуса online, запусти Apex в EA App и свой сохранённый конфиг.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Платформа',
    title: 'Windows PC',
    subtitle: 'После обновлений Apex проверяйте баннер статуса перед запуском.',
    items: [
      'Windows 10 и 11',
      'EA Launcher',
      'Клиент Apex',
      'Автообновление',
      'Синхронизация конфигов в облаке',
      'Поддержка Discord',
      'Сброс HWID',
      'Внешний лоадер',
    ],
  },
  cheats: {
    eyebrow: 'Elite чит',
    title: 'Читы Apex Elite',
    subtitle:
      'Читы Apex Legends для PC — player ESP, advanced aimbot, loot ESP, no recoil, stream proof, EAC bypass, Cloud-DMA и AWS. Планы: 1 неделя $15 · 1 месяц $35 · навсегда $150.',
    viewAll: 'Подробнее об Elite',
    explore: 'Смотреть',
    items: [
      {
        badge: 'Активен',
        tier: 'Private',
        name: 'Elite',
        title: 'Apex Elite Cheats',
        desc: 'Читы Apex Legends с player ESP, advanced aimbot, weapon ESP, loot ESP, no recoil, stream proof, EAC bypass и поддержкой Discord 24/7. 1 неделя $15 · 1 месяц $35 · навсегда $150.',
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
    eyebrow: 'Магазин',
    title: 'Купить читы Apex',
    subtitle: 'Elite Apex читы, HWID Spoofer, UGC recovery и Skin Changer — выберите нужное.',
    viewAll: 'Все читы',
    get: 'Купить',
    explore: 'Смотреть',
    items: [
      {
        badge: 'Доступно',
        category: 'Системная утилита',
        title: 'Apex HWID Spoofer',
        subtitle: 'Чистый старт для ПК',
        desc: 'HWID spoofer для Apex: disk serial, MAC и GPU ID — следуйте гайду в портале перед повторным запуском читов.',
        features: [
          'HWID Spoofer',
          'Apex Cleaner',
          'Инструменты disk serial',
          'Ротация MAC',
          'Спуф GPU ID',
          'Скан совместимости',
          'Проверка конфликтов драйверов',
          'Проверка после спуфа',
          'Гайд cold reboot',
        ],
        more: 4,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Доступно',
        category: 'Восстановление аккаунта',
        title: 'Apex UGC Unban Tools',
        subtitle: 'Unban и управление',
        desc: 'UGC-инструменты Apex для ограничений EA, банов EAC и security holds — кастомные апелляции и автоматизация диспутов.',
        features: [
          'Апелляции EA-аккаунта',
          'Workflow банов EAC',
          'Автоматизация диспутов',
          'Документы по кейсам',
          'Шаблоны доказательств',
          'Дашборд статуса',
          'Помощь с restriction holds',
        ],
        more: 3,
        href: `${productBase}ban-appeal/`,
      },
      {
        badge: 'Доступно',
        category: 'Косметика',
        title: 'Apex Skin Changer',
        subtitle: 'Локальный Unlock All',
        desc: 'Skin Changer / Unlock All для скинов легенд, оружия и heirlooms — локальный превью без покупок в магазине EA.',
        features: [
          'Смена скинов легенд',
          'Weapon skin changer',
          'Кастомизатор heirloom',
          'Превью Unlock All',
          'Превью exclusive sets',
          'Экспорт избранного loadout',
          'Только локальный клиент',
        ],
        more: 7,
        href: `${productBase}unlock-all/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Гайды по читам',
    title: 'Гайды по читам Apex Legends',
    subtitle: 'Настройка aimbot, ESP wallhack, тренировка в Arenas и проверки после патчей EAC.',
    latestTitle: 'Гайды по читам Apex Legends',
    latestSubtitle:
      'Гайды по undetected aimbot, ESP wallhack, loot ESP, статусу EA Javelin и HWID — фильтруйте по теме ниже.',
    filterAll: 'Все статьи',
    sortLabel: 'Сортировка',
    sortNewest: 'Сначала новые',
    sortOldest: 'Сначала старые',
    sortShortRead: 'Короткие',
    sortLongRead: 'Длинные',
    emptyFilter: 'Нет статей по фильтру.',
    viewAll: 'Все статьи',
    read: 'Читать',
    allArticles: 'Все статьи',
    inThisArticle: 'В этой статье',
    relatedGuides: 'Похожие гайды',
    ourProducts: 'Наши продукты',
    buyApexCheats: 'Купить Apex Cheats',
    items: [
      {
        tag: 'Гайды',
        title: 'Лучшие читы и хаки для Apex Legends 2026: аимбот, ESP и wallhack',
        slug: 'best-cheats',
        image: '/images/blog/best-apex-legends-cheats-2026.png',
        desc: 'Сравните лучшие читы для Apex Legends 2026: undetected аимбот, ESP wallhack, loot ESP и HWID-инструменты под EA Javelin на ПК.',
        date: '19 окт. 2026',
        readTime: '14 мин чтения',
      },
      {
        tag: 'Настройка',
        title: 'Гайд по undetected аимботу для Apex Legends в Ranked на ПК (2026)',
        slug: 'apex-aimbot',
        image: '/images/blog/undetected-apex-legends-aimbot.png',
        desc: 'Настройте undetected аимбот для Apex Legends в Ranked: плавность, FOV, приоритет кости и профили под оружие после EA Javelin.',
        date: '8 сент. 2026',
        readTime: '12 мин чтения',
      },
      {
        tag: 'Настройка',
        title: 'Гайд по ESP wallhack для Apex Legends 2026: игроки, свечение и дистанция',
        slug: 'esp-wallhack',
        image: '/images/blog/apex-legends-esp-wallhack-2026.png',
        desc: 'Гайд по ESP wallhack для Apex Legends 2026: боксы игроков, свечение, здоровье, дистанция и loot ESP, настроенные для Ranked и Battle Royale.',
        date: '14 авг. 2026',
        readTime: '13 мин чтения',
      },
      {
        tag: 'Обновления',
        title: 'EA Javelin Anticheat в Apex Legends: статус читов и обновления',
        slug: 'ea-javelin',
        image: '/images/blog/ea-javelin-anticheat-apex-cheats.png',
        desc: 'EA Javelin Anticheat заменил EAC в Apex Legends на ПК. Как работают статус читов, дни патчей и HWID-баны в 2026 году.',
        date: '22 июл. 2026',
        readTime: '11 мин чтения',
      },
      {
        tag: 'Продукты',
        title: 'HWID-спуфер для Apex Legends при банах EA Javelin (2026)',
        slug: 'hwid-guide',
        image: '/images/blog/apex-legends-hwid-spoofer-javelin.png',
        desc: 'Гайд по HWID-спуферу для Apex Legends при аппаратных банах EA Javelin: когда делать спуф, когда заводить новый аккаунт и как проверять статус.',
        date: '30 июн. 2026',
        readTime: '9 мин чтения',
      },
      {
        tag: 'Настройка',
        title: 'Как купить undetected читы для Apex в 2026 (безопасная оплата)',
        slug: 'buy-cheats',
        image: '/images/blog/buy-undetected-apex-cheats.png',
        desc: 'Как купить undetected читы для Apex Legends в 2026: выберите тариф, проверьте статус EA Javelin и завершите безопасную оплату.',
        date: '5 июн. 2026',
        readTime: '8 мин чтения',
      },
      {
        tag: 'Гайды',
        title: 'Безопасны ли читы для Apex Legends в 2026? Детекты, баны и риски',
        slug: 'cheat-safety',
        image: '/images/blog/are-apex-legends-cheats-safe-2026.png',
        desc: 'Безопасны ли читы для Apex Legends в 2026? Как на самом деле работают детекты EA Javelin, волны банов и заявления об «undetected».',
        date: '12 мая 2026',
        readTime: '7 мин чтения',
      },
      {
        tag: 'Функции',
        title: 'Функции читов для Apex: аимбот, боты, ESP wallhack и другое',
        slug: 'cheat-features',
        image: '/images/blog/apex-cheats-features-guide.png',
        desc: 'Полный гайд по нашим читам для Apex: аимбот, Loot Assist, Skin Changer, радар-хак, ESP wallhack и Auto Shield Break.',
        date: '18 апр. 2026',
        readTime: '5 мин чтения',
      },
      {
        tag: 'Гайды',
        title: 'Apex Lite vs Pro: какой tier вам подходит',
        slug: 'elite-guide',
        image: '/images/blog/apex-lite-vs-pro.png',
        desc: 'Осведомлённость на карте vs автоматизация aimbot — сравните Lite и Pro читы Apex для Battle Royale и Ranked.',
        date: '27 мар. 2026',
        readTime: '10 мин чтения',
      },
      {
        tag: 'Гайды',
        title: 'Гайд по Apex Skin Changer / Unlock All',
        slug: 'skin-guide',
        image: '/images/blog/apex-skin-changer-guide.png',
        desc: 'Локальный превью скинов легенд, оружия и exclusive sets с модулем Unlock All Skin Changer.',
        date: '3 мар. 2026',
        readTime: '6 мин чтения',
      },
      {
        tag: 'Гайды',
        title: 'Гайд по внешним читам Apex',
        slug: 'external-cheat',
        image: '/images/blog/apex-external-cheat-guide.png',
        desc: 'Почему важны внешние читы Apex, как работает внешний лоадер на ПК и чем приватный софт безопаснее бесплатных инструментов.',
        date: '11 фев. 2026',
        readTime: '16 мин чтения',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Меню чита',
    title: 'Меню читов Apex — по порядку',
    subtitle:
      'Каждый модуль сгруппирован, чтобы настраивать aimbot и ESP прямо в матче без хаоса.',
    items: [
      {
        num: '01',
        label: 'Aimbot',
        title: 'Трекинг под каждое оружие',
        desc: 'Smoothness, FOV, Sticky Aim и Bone Priority в одной вкладке aimbot.',
      },
      {
        num: '02',
        label: 'ESP',
        title: 'Wallhack, который читается',
        desc: 'Боксы, скелеты, дистанция, здоровье и фильтры цвета команды.',
      },
      {
        num: '03',
        label: 'Radar',
        title: 'Лут и ротации под контролем',
        desc: 'Точки врагов, таймеры лута и мини-радар на компактном оверлее.',
      },
      {
        num: '04',
        label: 'Weapons',
        title: 'Профили aimbot по оружию',
        desc: 'Сохраняйте пресеты AR, SMG, shotgun и sniper и меняйте хоткеями.',
      },
      {
        num: '05',
        label: 'Loot',
        title: 'Chest ESP и loot assist',
        desc: 'Подсветка сундуков, редкий лут и Elite loot-assist pathing.',
      },
      {
        num: '06',
        label: 'Profiles',
        title: 'Конфиги под каждый режим',
        desc: 'Пресеты Battle Royale, Ranked и Arenas с облачным бэкапом.',
      },
    ],
  },
  workflow: {
    eyebrow: 'Как это работает',
    badge: '4 шага',
    titleBefore: 'От покупки к',
    titleHighlight: 'читам в игре.',
    subtitle:
      'Купите читы Apex, скачайте лоадер, включите модули и сохраните конфиг на следующий матч.',
    ctaLabel: 'Купить читы',
    ctaHref: productBase,
    ctaSecondary: 'FAQ по сетапу',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Перед покупкой',
        title: 'Проверь статус',
        desc: 'Смотрите живой баннер на cheatsapex.com перед покупкой или запуском.',
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
        desc: 'Скачайте в портале, включите модули и проверьте в Arenas или bot lobby.',
      },
      {
        num: '04',
        phase: 'В игре',
        title: 'Сохрани конфиг',
        desc: 'Когда настройки ок — сохраните пресеты BR и Ranked в облако.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Заметки',
    title: 'Быстрые советы',
    items: [
      {
        num: '01',
        title: 'После патчей',
        desc: 'Проверьте Discord и статус в портале перед очередью в Ranked после обновления Apex.',
      },
      {
        num: '02',
        title: 'Начните спокойно',
        desc: 'Сначала дефолтная плавность aimbot и дальность ESP, потом повышайте при необходимости.',
      },
      {
        num: '03',
        title: 'Помощь Discord',
        desc: 'Застряли на лоадере или конфигах? Спросите в Discord — проведут по шагам.',
      },
    ],
  },
  support: {
    eyebrow: 'Поддержка',
    title: 'Поддержка Apex Cheats',
    subtitle: 'Помощь по лоадеру, HWID, оплате и аккаунту.',
    channels: [
      {
        icon: 'users',
        title: 'Перед покупкой',
        desc: 'Спросите про тарифы и что входит в каждый продукт.',
        linkLabel: 'К оплате',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Email-поддержка',
        desc: 'Ошибки лоадера, HWID и аккаунт.',
        linkLabel: 'support@cheatsapex.com',
        href: 'mailto:support@cheatsapex.com',
      },
      {
        icon: 'navFaq',
        title: 'FAQ',
        desc: 'Совместимость, баны и сетап.',
        linkLabel: 'Смотреть FAQ',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Discord',
        desc: 'Поддержка онлайн 24/7.',
        linkLabel: 'Войти в Discord',
        href: DISCORD_URL,
      },
    ],
    ticketTitle: 'Укажите в тикете',
    ticketItems: [
      { title: 'Email заказа', desc: 'Email, который вы использовали при оплате на cheatsapex.com.' },
      { title: 'Платформа', desc: 'Windows 10 или 11, EA Launcher и версия Apex.' },
      { title: 'Детали ошибки', desc: 'Скриншот или точный текст из лоадера или EA.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'FAQ Apex Cheats',
    subtitle:
      'Elite ESP и aimbot, HWID Spoofer, UGC, Skin Changer и статус EA Javelin — те же ответы, что на главной и этой странице.',
    items: [
      {
        num: '01',
        q: 'Где проверить, онлайн ли читы Apex?',
        a: 'Живой баннер статуса на cheatsapex.com и в Discord #status. Всегда проверяйте после обновления Apex, EA Javelin или сезона.',
      },
      {
        num: '02',
        q: 'Работают ли читы Apex Legends с EA Javelin Anticheat?',
        a: 'Apex Legends на PC использует EA Javelin. Приватные сборки Apex Cheats перепроверяются после патчей — подтвердите баннер статуса перед Ranked.',
      },
      {
        num: '03',
        q: 'Что происходит после покупки?',
        a: 'Портал открывает лоадер, гайд по сетапу и библиотеку конфигов через безопасную оплату. Следуйте гайду до запуска Apex.',
      },
      {
        num: '04',
        q: 'Какие платформы поддерживаются?',
        a: 'Apex через EA App только на Windows 10/11 64-bit. macOS и Linux не поддерживаются.',
      },
      {
        num: '05',
        q: 'Можно ли перенести лицензию на новый ПК?',
        a: 'Да — сброс HWID в портале или тикет в Discord. Лимиты зависят от продукта.',
      },
      {
        num: '06',
        q: 'Где список продуктов и утилит?',
        a: 'Apex Elite, HWID Spoofer, UGC и Skin Changer — на cheatsapex.com/products/apex-cheats со списками функций и оплатой через партнёра.',
      },
    ],
  },
  footer: {
    tagline: 'Читы Apex для PC: aimbot, ESP, wallhack и утилиты.',
    explore: 'Разделы',
    exploreLinks: [
      { href: '/', label: 'Обзор функций', ariaLabel: 'Функции', scrollTarget: 'features' },
      { href: '/products/apex-cheats/apex-elite/', label: 'Читы Elite', ariaLabel: 'Elite' },
      { href: '/products/apex-cheats/', label: 'Продукты и утилиты', ariaLabel: 'Продукты' },
      { href: '/blog/', label: 'Гайды по патчам', ariaLabel: 'Блог' },
      { href: '/faq/', label: 'FAQ перед покупкой', ariaLabel: 'FAQ' },
    ],
    support: 'Поддержка',
    legal: 'Правовая информация',
    privacy: 'Конфиденциальность',
    terms: 'Условия',
    about: 'О нас',
  },
  legalPages: {
    about: {
      title: 'О Apex Cheats | Купить aimbot и ESP для PC',
      description:
        'О Apex Cheats — купите читы Apex для PC (aimbot, ESP, wallhack), утилиты и гайды на cheatsapex.com.',
      sections: [
        {
          heading: 'Кто мы',
          paragraphs: [
            'Apex Cheats — сайт для PC с продуктами aimbot, ESP, wallhack, радар и Skin Changer для Apex. Мы публикуем сравнения тарифов, гайды по сетапу и заметки о живом статусе.',
            'Названия игр и продуктов указаны только для идентификации.',
          ],
        },
        {
          heading: 'Что мы продаём',
          paragraphs: [
            'Читы Apex тарифов Lite, Pro и Elite, а также HWID Spoofer, Skin Changer и UGC recovery. Блог охватывает конфиги, проверки патчей и обновления Easy Anti-Cheat.',
            'Страницы обновляются при изменениях Apex или лоадера. Перед игрой проверяйте баннер статуса на главной и Discord #status.',
          ],
        },
        {
          heading: 'Поддержка',
          paragraphs: [
            'По ошибкам лоадера, совместимости и оплате пишите в Discord или на email. Укажите email заказа, аккаунт EA и версию Windows.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Политика конфиденциальности | Магазин Apex Cheats',
      description:
        'Как магазин читов Apex на cheatsapex.com обрабатывает аналитику, cookies и контактные данные.',
      sections: [
        {
          heading: 'Какие данные мы собираем',
          paragraphs: [
            'Мы можем собирать базовую аналитику: просмотры страниц, тип устройства, браузер и приблизительный регион через Google Analytics, если он включён. Оплата проходит на внешних страницах. Данные карт на cheatsapex.com не храним.',
          ],
        },
        {
          heading: 'Как мы используем данные',
          paragraphs: [
            'Аналитика показывает, какими гайдами и страницами продуктов пользуются, чтобы чинить ссылки и улучшать сайт. Тикеты поддержки хранят email и сообщение до закрытия вопроса.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'Мы используем базовые cookies аналитики. Можно блокировать cookies в браузере. Сайт работает и без них.',
          ],
        },
        {
          heading: 'Поддержка',
          paragraphs: [
            'По вопросам конфиденциальности используйте страницу Support. Правила покупок и возвратов — в Условиях.',
          ],
        },
      ],
    },
    terms: {
      title: 'Условия Apex Cheats | Лицензия и возвраты',
      description:
        'Условия покупки читов Apex на cheatsapex.com — лицензия, доставка, возвраты и риск для аккаунта.',
      sections: [
        {
          heading: 'Соглашение',
          paragraphs: [
            'Обновлено: сентябрь 2026. Используя cheatsapex.com или покупая продукт с этого сайта, вы соглашаетесь с этими Условиями и Политикой конфиденциальности.',
          ],
        },
        {
          heading: 'Что вы покупаете',
          paragraphs: [
            'Мы продаём тарифы читов Apex (Lite, Pro, Elite) и инструменты (HWID Spoofer, UGC, Skin Changer / Unlock All) через портал и Windows-лоадер для EA.',
            'На страницах продуктов указано, что входит в покупку. Функции могут меняться при обновлениях Apex или Easy Anti-Cheat.',
          ],
        },
        {
          heading: 'Оплата и доставка',
          paragraphs: [
            'Оплата и выдача лицензии идут на внешних страницах checkout. cheatsapex.com не обрабатывает и не хранит номера карт.',
            'После покупки используйте портал оператора из заказа, чтобы скачать актуальный лоадер и гайд по сетапу до запуска Apex.',
          ],
        },
        {
          heading: 'Использование лицензии',
          paragraphs: [
            'Лицензии только для личного использования. Не делитесь файлами лоадера, логинами портала или ключами. Лимиты HWID и устройств зависят от тарифа и применяются в портале.',
          ],
        },
        {
          heading: 'Возвраты и покупки',
          paragraphs: [
            'Все продажи окончательны после завершения оплаты. Мы не возвращаем средства за смену мнения, баны аккаунта, штрафы EAC или проблемы из-за игнорирования гайдов / запуска модулей при offline-статусе.',
            'Если продукт не работает как описано на поддерживаемой конфигурации — Apex через EA App на Windows 10/11, актуальный лоадер из портала и баннер статуса online при старте — свяжитесь через страницу Support. Укажите email заказа, версию Windows, билд Apex и скриншоты или точный текст ошибки лоадера.',
            'По своему усмотрению мы можем предложить исправление, замену доступа или частичный/полный возврат при подтверждённой ошибке с нашей стороны. Мы не обязаны одобрять каждый запрос.',
          ],
        },
        {
          heading: 'Доступность и риск',
          paragraphs: [
            'Сторонние инструменты для Apex могут конфликтовать с обновлениями игры и античитом. Вы используете ПО на свой риск, включая возможные действия против аккаунта.',
            'Перед каждой сессией проверяйте баннер статуса на главной. Не вставайте в ranked, пока модули offline или не согласованы после патча.',
          ],
        },
        {
          heading: 'Изменения',
          paragraphs: [
            'Мы можем обновлять эти условия. Дата «Обновлено» сверху изменится. Продолжение использования сайта после изменений означает согласие с новой редакцией.',
          ],
        },
        {
          heading: 'Поддержка',
          paragraphs: [
            'По условиям, оплате или лоадеру используйте кнопки на странице Support. Также см. Политику конфиденциальности о данных сайта.',
          ],
        },
      ],
    },
    support: {
      title: 'Поддержка Apex Cheats | Лоадер, HWID и оплата',
      description:
        'Поддержка читов Apex по лоадеру, HWID-спуфу и оплате на cheatsapex.com.',
    },
  },
  ui: {
    skipLink: 'К основному содержимому',
    browseCheats: 'Попробовать',
    browseCheatsMobile: 'К оплате',
    buyNow: 'Купить',
    viewDetails: 'Подробнее',
    homeAria: 'Главная Apex Cheats',
    checkoutAria: 'Оформить заказ',
    discordAria: 'Discord Apex Cheats',
    menuOpen: 'Открыть меню',
    menuClose: 'Закрыть меню',
    themeLight: 'Светлая тема',
    themeDark: 'Тёмная тема',
    home: 'Главная',
  },
  productHub: {
    pricingEyebrow: 'Цены',
    plansTitle: 'Тарифы читов Apex Legends',
    plansDesc:
      'Одни и те же модули в каждом тарифе—player ESP, advanced aimbot, loot ESP, EAC bypass, stream proof и опционально Cloud-DMA / AWS.',
    modulesEyebrow: 'Модули',
    modulesTitle: 'Что входит',
    modulesDesc: 'Основные модули читов Apex в Lite, Pro и Elite.',
    catalogEyebrow: 'Каталог',
    catalogTitle: 'Ещё инструменты Apex',
    catalogDesc: 'HWID Spoofer, восстановление UGC и Skin Changer рядом с Elite-читами.',
    stepsEyebrow: 'Как это работает',
    stepsTitle: 'От оплаты до игры',
    stepsDesc: 'Купите, скачайте лоадер, включите модули и заходите в очередь, когда статус online.',
    faqEyebrow: 'FAQ',
    faqTitle: 'FAQ хаба продуктов',
    faqDesc: 'Краткие ответы о тарифах, статусе и доставке.',
  },
} as Partial<Translations>;
