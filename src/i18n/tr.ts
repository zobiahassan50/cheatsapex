import type { Translations } from './types';
import { DISCORD_URL, PRODUCT_BASE } from '../config/site';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';

const productBase = PRODUCT_BASE;

/** Medium conversion — Turkey. Full UI overlay (no English fallback for headings/copy). */
export const tr: Partial<Translations> = {
  site: {
    name: 'Apex Cheats',
    domain: 'cheatsapex.com',
    title: 'Apex Legends Cheat Satın Al | Aimbot ve ESP',
    description:
      'PC için undetected Apex Legends cheatleri — aimbot, ESP wallhack, loot ESP ve HWID. Her patch’te EA Javelin güncellemesi.',
    discord: DISCORD_URL,
  },
  nav: [
    { href: `${productBase}`, label: 'Ürünler' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Forum' },
    { href: '/faq/', label: 'SSS' },
    { href: '/support/', label: 'Destek' },
  ],
  hero: {
    status: 'Apex online',
    eyebrow: 'Özel Apex Legends cheatleri',
    titleLine1: 'Apex Legends Cheat Satın Al',
    titleLine2: 'Aimbot, ESP Wallhack ve Loot ESP',
    subtitle:
      'PC için Apex Legends hackleri — Battle Royale ve Ranked için undetected aimbot, ESP wallhack, radar ve loot ESP. Her EAC yamasından sonra güncellenir.',
    ctaPrimary: 'Cheat satın al',
    ctaDiscord: 'Discord’a katıl',
    modesLabel: 'Modlar',
    modes: ['Battle Royale', 'Ranked', 'Mixtape', 'Arenas'],
    metrics: [
      { label: 'Stream-safe', strong: 'Evet' },
      { label: 'Patch hızı', strong: '<24s' },
      { label: 'Kullanıcı', strong: '300+' },
      { label: 'Destek', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Cheat özellikleri',
    title: 'Apex cheat modülleri',
    subtitle:
      'Player ESP, advanced aimbot, loot ESP, no recoil, stream proof, EAC bypass ve Cloud-DMA / AWS — güncel PC kataloğu.',
    items: [
      {
        title: 'Advanced Aimbot',
        subtitle: 'Savaş takibi',
        desc: 'Battle Royale ve Ranked için advanced aimbot ve no recoil — takip dövüşlerde tutarlı kalır.',
        bullets: ['Advanced Aimbot', 'No Recoil', 'Pubs ve Ranked preset'],
        tags: ['apex aimbot', 'no recoil', 'ranked'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP',
        subtitle: 'Duvardan oyuncu',
        desc: 'Box, skeleton, health bar ve distance ile player ESP — squad’ları push’tan önce görün.',
        bullets: ['Player ESP', 'Box ESP ve Skeleton ESP', 'Health Bar ve Distance ESP'],
        tags: ['apex ESP', 'wallhack', 'player boxes'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Weapon ve Loot ESP',
        subtitle: 'Silah ve loot',
        desc: 'Weapon ESP ve loot ESP kullanılabilir silahları ve yer loot’unu vurgular — daha hızlı ekipman.',
        bullets: ['Weapon ESP', 'Loot ESP', 'Hızlı rotasyon'],
        tags: ['weapon ESP', 'loot ESP', 'POI'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
      {
        title: 'Stream Proof',
        subtitle: 'Yayında gizle',
        desc: 'Siz ESP ve aimbot görürsünüz. OBS ve Game Bar temiz oyun kaydı alır.',
        bullets: ['Stream Proof', 'OBS-safe capture', 'Canlıda aç/kapa'],
        tags: ['stream proof', 'OBS safe', 'capture hide'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'EAC Bypass',
        subtitle: 'Yama sonrası',
        desc: 'EAC bypass build’leri Apex ve EA Javelin güncellemelerinden sonra yeniden test edilir. Başlamadan önce durumu kontrol edin.',
        bullets: ['EAC Bypass', 'Yama sonrası durum', 'Discord #status'],
        tags: ['eac bypass', 'javelin', 'apex anti cheat'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Cloud-DMA ve AWS',
        subtitle: 'Teslim seçenekleri',
        desc: 'Apex kataloğundaki alternatif teslim yolları için CLOUD-DMA OPTION ve AWS option.',
        bullets: ['CLOUD-DMA OPTION', 'AWS option', '24/7 Support'],
        tags: ['apex dma cheats', 'cloud dma', 'aws'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-4',
      },
      {
        title: '24/7 Support',
        subtitle: 'Discord yardım',
        desc: 'Loader kurulumu, config ve yama sonrası sorular için doğrudan Discord desteği.',
        bullets: ['24/7 Support', 'Kurulum', 'Config'],
        tags: ['discord support', 'setup', 'loader'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-4',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Neden biz',
    title: 'Çevrimiçi kalan Apex hileleri',
    subtitle:
      'Çoğu mağaza EAC yamalarından sonra düşer ve sizi botlarla bırakır. Loader güncellemelerini hızlı göndeririz, Ranked için güvenli aimbot varsayılanları tutarız ve Discord’da 24/7 yanıt veririz.',
    usLabel: 'Apex Cheats',
    otherLabel: 'Tipik mağaza',
    rows: [
      {
        title: 'Yama sonrası güncelleme',
        desc: 'Yeni build’ler genelde Apex veya EA Javelin güncellemesinden saatler içinde çıkar. Queue öncesi Discord #status kontrol edin.',
      },
      {
        title: 'Yumuşak aimbot varsayılanları',
        desc: 'Smoothness, FOV ve bone priority Ranked için ayarlı. İsterseniz sonra sıkılaştırabilirsiniz.',
      },
      {
        title: 'Discord desteği',
        desc: 'Loader kurulumu, silah config’leri ve HWID sıfırlama yardımı. Kapsama 24/7.',
      },
      {
        title: 'External + stream proof',
        desc: 'OBS-safe modlu harici loader — overlay’ler yayında görünmez.',
      },
      {
        title: 'Bulut config',
        desc: 'Battle Royale, Ranked ve silah başına ayarları kaydedip başka PC’de açın.',
      },
      {
        title: 'HWID sıfırlama',
        desc: 'Donanım sıfırlama ve lisans taşıma Discord üzerinden. Çoğu mağaza sizi tek PC’ye kilitler.',
      },
    ],
    metrics: [
      {
        value: '<24s',
        title: 'Yama süresi',
        desc: 'Büyük Apex veya EA Javelin güncellemesinden sonra tipik loader süresi.',
      },
      {
        value: '24/7',
        title: 'Destek',
        desc: 'Kurulum, config ve hesap için Discord yardımı.',
      },
      {
        value: '300+',
        title: 'Kullanıcı',
        desc: 'cheatsapex.com’da aimbot, ESP ve araç kullanan PC oyuncuları.',
      },
    ],
  },
  setup: {
    eyebrow: 'Kurulum',
    titleLead: 'Hile al. Oyna',
    titleHighlight: 'üç adımda',
    intro:
      'Apex hilenizi alın, loader’ı indirin, preset yükleyin, Apex’i açın. Takılırsanız Discord yardımcı olur.',
    ctaPrimary: 'Hileleri al',
    ctaSecondary: 'SSS’ye bak',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Adım 1',
        title: 'Satın al ve loader indir',
        desc: 'Ödemeyi bitirin, portali açın ve güncel Windows loader’ı indirin.',
      },
      {
        step: 'Adım 2',
        title: 'Presetleri yükle',
        desc: 'Loader’ı çalıştırın, Pubs veya Ranked preset seçin, aimbot ve ESP ayarlayın.',
      },
      {
        step: 'Adım 3',
        title: 'Durumu kontrol et ve oyna',
        desc: 'Durum banner’ının online olduğunu doğrulayın, EA App’te Apex’i açın ve kayıtlı config’inizi kullanın.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform',
    title: 'Windows PC',
    subtitle: 'Apex güncellemelerinden sonra başlamadan önce durum banner’ını kontrol edin.',
    items: [
      'Windows 10 ve 11',
      'EA Launcher',
      'Apex istemcisi',
      'Otomatik güncelleyici',
      'Config bulut senkronu',
      'Discord desteği',
      'HWID sıfırlama',
      'Harici loader',
    ],
  },
  cheats: {
    eyebrow: 'Elite cheat',
    title: 'Apex Elite cheatleri',
    subtitle:
      'PC için Apex Legends cheatleri — player ESP, advanced aimbot, loot ESP, no recoil, stream proof, EAC bypass, Cloud-DMA ve AWS. Planlar: 1 hafta $15 · 1 ay $35 · ömür boyu $150.',
    viewAll: 'Elite detaylarını gör',
    explore: 'Keşfet',
    items: [
      {
        badge: 'Aktif',
        tier: 'Private',
        name: 'Elite',
        title: 'Apex Elite Cheats',
        desc: 'Player ESP, advanced aimbot, weapon ESP, loot ESP, no recoil, stream proof, EAC bypass ve 24/7 Discord desteği ile Apex Legends cheatleri. 1 hafta $15 · 1 ay $35 · ömür boyu $150.',
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
    eyebrow: 'Mağaza',
    title: 'Apex cheat satın al',
    subtitle: 'Elite Apex cheatleri, HWID Spoofer, UGC recovery ve Skin Changer — ihtiyacınıza göre seçin.',
    viewAll: 'Tüm cheatler',
    get: 'Satın al',
    explore: 'Keşfet',
    items: [
      {
        badge: 'Mevcut',
        category: 'Sistem aracı',
        title: 'Apex HWID Spoofer',
        subtitle: 'PC için temiz başlangıç',
        desc: 'Disk serial, MAC adresi ve GPU ID için Apex HWID spoofer — cheat’leri yeniden açmadan önce portal rehberini izleyin.',
        features: [
          'HWID Spoofer',
          'Apex Cleaner',
          'Disk serial araçları',
          'MAC adresi rotasyonu',
          'GPU ID spoof',
          'Uyumluluk taraması',
          'Sürücü çakışma kontrolü',
          'Spoof sonrası doğrulama',
          'Cold reboot rehberi',
        ],
        more: 4,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Mevcut',
        category: 'Hesap kurtarma',
        title: 'Apex UGC Unban Tools',
        subtitle: 'Unban ve yönetişim',
        desc: 'EA hesap kısıtları, EAC banları ve security hold’lar için Apex UGC araçları — özel itiraz iş akışları ve dispute otomasyonu.',
        features: [
          'EA hesap itirazları',
          'EAC ban iş akışları',
          'Dispute otomasyonu',
          'Vaka dokümantasyonu',
          'Kanıt şablonları',
          'Durum takip paneli',
          'Restriction hold yardımı',
        ],
        more: 3,
        href: `${productBase}ban-appeal/`,
      },
      {
        badge: 'Mevcut',
        category: 'Kozmetik',
        title: 'Apex Skin Changer',
        subtitle: 'Tüm kozmetikleri yerelde aç',
        desc: 'Legend, silah ve heirloom skin’leri için Apex Skin Changer / Unlock All — EA mağaza satın almadan yerel önizleme.',
        features: [
          'Legend skin değişimi',
          'Weapon skin changer',
          'Heirloom özelleştirici',
          'Unlock All önizleme',
          'Exclusive set önizleme',
          'Loadout favori dışa aktarma',
          'Yalnızca yerel istemci',
        ],
        more: 7,
        href: `${productBase}unlock-all/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Cheat rehberleri',
    title: 'Apex Legends cheat rehberleri',
    subtitle: 'Aimbot kurulumu, ESP wallhack config, Arenas pratiği ve EAC yama kontrolleri.',
    latestTitle: 'Apex Legends Cheat Rehberleri',
    latestSubtitle:
      'Undetected aimbot, ESP wallhack, loot ESP, EA Javelin durumu ve HWID kurtarma rehberleri — aşağıdan konuya göre filtreleyin.',
    filterAll: 'Tüm yazılar',
    sortLabel: 'Sırala',
    sortNewest: 'En yeni',
    sortOldest: 'En eski',
    sortShortRead: 'En kısa okuma',
    sortLongRead: 'En uzun okuma',
    emptyFilter: 'Filtreye uyan yazı yok.',
    viewAll: 'Tüm yazılar',
    read: 'Oku',
    allArticles: 'Tüm yazılar',
    inThisArticle: 'Bu yazıda',
    relatedGuides: 'İlgili rehberler',
    ourProducts: 'Ürünlerimiz',
    buyApexCheats: 'Apex Cheats satın al',
    items: [
      {
        tag: 'Rehberler',
        title: 'En İyi Apex Legends Cheat ve Hack’leri 2026: Aimbot, ESP ve Wallhack',
        slug: 'best-cheats',
        image: '/images/blog/best-apex-legends-cheats-2026.png',
        desc: '2026’nın en iyi Apex Legends cheat’lerini karşılaştırın: undetected aimbot, ESP wallhack, loot ESP ve PC’de EA Javelin için geliştirilmiş HWID araçları.',
        date: '19 Eki 2026',
        readTime: '14 dk okuma',
      },
      {
        tag: 'Kurulum',
        title: 'PC’de Ranked için Undetected Apex Legends Aimbot Rehberi (2026)',
        slug: 'apex-aimbot',
        image: '/images/blog/undetected-apex-legends-aimbot.png',
        desc: 'Ranked için undetected Apex Legends aimbot kurulumu: EA Javelin sonrası yumuşatma, FOV, bone priority ve silah başına profiller.',
        date: '8 Eyl 2026',
        readTime: '12 dk okuma',
      },
      {
        tag: 'Kurulum',
        title: 'Apex Legends ESP Wallhack Rehberi 2026: Oyuncu, Glow ve Mesafe',
        slug: 'esp-wallhack',
        image: '/images/blog/apex-legends-esp-wallhack-2026.png',
        desc: '2026 için Apex Legends ESP wallhack rehberi: Ranked ve Battle Royale’e göre ayarlanmış oyuncu kutuları, glow, can, mesafe ve loot ESP.',
        date: '14 Ağu 2026',
        readTime: '13 dk okuma',
      },
      {
        tag: 'Güncellemeler',
        title: 'Apex Legends’ta EA Javelin Anticheat: Cheat Durumu ve Güncellemeler',
        slug: 'ea-javelin',
        image: '/images/blog/ea-javelin-anticheat-apex-cheats.png',
        desc: 'EA Javelin Anticheat, PC’deki Apex Legends’ta EAC’nin yerini aldı. 2026’da Apex cheat durumu, yama günleri ve HWID banları nasıl işliyor?',
        date: '22 Tem 2026',
        readTime: '11 dk okuma',
      },
      {
        tag: 'Ürünler',
        title: 'EA Javelin Banları için Apex Legends HWID Spoofer (2026)',
        slug: 'hwid-guide',
        image: '/images/blog/apex-legends-hwid-spoofer-javelin.png',
        desc: 'EA Javelin donanım banları için Apex Legends HWID spoofer rehberi: ne zaman spoof, ne zaman yeni hesap ve durum nasıl kontrol edilir.',
        date: '30 Haz 2026',
        readTime: '9 dk okuma',
      },
      {
        tag: 'Kurulum',
        title: '2026’da Undetected Apex Cheat’leri Nasıl Satın Alınır (Güvenli Ödeme)',
        slug: 'buy-cheats',
        image: '/images/blog/buy-undetected-apex-cheats.png',
        desc: '2026’da undetected Apex Legends cheat’leri nasıl satın alınır: tier seçin, EA Javelin durumunu doğrulayın ve güvenli ödemeyi tamamlayın.',
        date: '5 Haz 2026',
        readTime: '8 dk okuma',
      },
      {
        tag: 'Rehberler',
        title: '2026’da Apex Legends Cheat’leri Güvenli mi? Tespit, Banlar ve Risk',
        slug: 'cheat-safety',
        image: '/images/blog/are-apex-legends-cheats-safe-2026.png',
        desc: '2026’da Apex Legends cheat’leri güvenli mi? EA Javelin tespiti, ban dalgaları ve “undetected” iddiaları gerçekte nasıl işliyor?',
        date: '12 May 2026',
        readTime: '7 dk okuma',
      },
      {
        tag: 'Özellikler',
        title: 'Apex cheat özellikleri: aimbot, botlar, ESP wallhack ve daha fazlası',
        slug: 'cheat-features',
        image: '/images/blog/apex-cheats-features-guide.png',
        desc: 'Apex cheat’lerimizin eksiksiz rehberi: Aimbot, Loot Assist, Skin Changer, Radar Hack, ESP Wallhack ve Auto Shield Break.',
        date: '18 Nis 2026',
        readTime: '5 dk okuma',
      },
      {
        tag: 'Rehberler',
        title: 'Apex Lite vs Pro: hangi tier size uyar',
        slug: 'elite-guide',
        image: '/images/blog/apex-lite-vs-pro.png',
        desc: 'Harita farkındalığı vs aimbot otomasyonu — Battle Royale ve Ranked için Lite ve Pro Apex cheat’lerini karşılaştırın.',
        date: '27 Mar 2026',
        readTime: '10 dk okuma',
      },
      {
        tag: 'Rehberler',
        title: 'Apex Skin Changer / Unlock All Rehberi',
        slug: 'skin-guide',
        image: '/images/blog/apex-skin-changer-guide.png',
        desc: 'Unlock All Skin Changer modülümüzle legend, silah ve exclusive set’leri yerelde önizleyin.',
        date: '3 Mar 2026',
        readTime: '6 dk okuma',
      },
      {
        tag: 'Rehberler',
        title: 'Apex harici cheat rehberi',
        slug: 'external-cheat',
        image: '/images/blog/apex-external-cheat-guide.png',
        desc: 'Harici Apex cheat’lerinin neden önemli olduğu, harici loader’ın PC’de nasıl çalıştığı ve özel yazılımın ücretsiz araçlardan neden daha güvenli olduğu.',
        date: '11 Şub 2026',
        readTime: '16 dk okuma',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Cheat menüsü',
    title: 'Düzenli Apex cheat menüsü',
    subtitle:
      'Her cheat modülü gruplandı — maç ortasında aimbot ve ESP’yi kaos olmadan ayarlayın.',
    items: [
      {
        num: '01',
        label: 'Aimbot',
        title: 'Silaha göre uyum sağlayan takip',
        desc: 'Smoothness, FOV, Sticky Aim ve Bone Priority tek aimbot sekmesinde.',
      },
      {
        num: '02',
        label: 'ESP',
        title: 'Okunabilir kalan wallhack',
        desc: 'Kutular, iskeletler, mesafe, can ve takım rengi filtreleri.',
      },
      {
        num: '03',
        label: 'Radar',
        title: 'Loot ve rotasyonlar kilitte',
        desc: 'Düşman noktaları, loot zamanlayıcıları ve kompakt overlay’de mini-radar.',
      },
      {
        num: '04',
        label: 'Weapons',
        title: 'Silah başına aimbot profilleri',
        desc: 'AR, SMG, shotgun ve sniper preset’lerini kaydedin, hotkey ile değiştirin.',
      },
      {
        num: '05',
        label: 'Loot',
        title: 'Chest ESP ve loot assist',
        desc: 'Sandık vurguları, nadir drop’lar ve Elite loot-assist pathing.',
      },
      {
        num: '06',
        label: 'Profiles',
        title: 'Her mod için config',
        desc: 'Battle Royale, Ranked ve Arenas preset’leri bulut yedeklemeyle.',
      },
    ],
  },
  workflow: {
    eyebrow: 'Nasıl çalışır',
    badge: '4 adım',
    titleBefore: 'Satın almadan',
    titleHighlight: 'oyuna.',
    subtitle:
      'Apex hilesi alın, loader’ı indirin, modülleri açın, sonraki maç için config kaydedin.',
    ctaLabel: 'Hileleri al',
    ctaHref: productBase,
    ctaSecondary: 'Kurulum SSS',
    ctaSecondaryHref: '/faq/',
    items: [
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
  },
  fieldNotes: {
    eyebrow: 'Notlar',
    title: 'Hızlı ipuçları',
    items: [
      {
        num: '01',
        title: 'Yamadan sonra',
        desc: 'Apex güncellemesinden sonra Ranked’e girmeden Discord ve portal durumunu kontrol edin.',
      },
      {
        num: '02',
        title: 'Yavaş başla',
        desc: 'Önce varsayılan aimbot yumuşaklığı ve ESP menzilini kullanın, gerekirse yükseltin.',
      },
      {
        num: '03',
        title: 'Discord yardım',
        desc: 'Loader veya config’te takıldınız mı? Discord’da sorun — adım adım gösterirler.',
      },
    ],
  },
  support: {
    eyebrow: 'Destek',
    title: 'Apex Cheats destek',
    subtitle: 'Loader, HWID, ödeme ve hesap yardımı.',
    channels: [
      {
        icon: 'users',
        title: 'Satın almadan önce',
        desc: 'Tier’ler ve her ürünün içeriği hakkında sorun.',
        linkLabel: 'Ödemeye git',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'E-posta desteği',
        desc: 'Loader hataları, HWID ve hesap sorunları.',
        linkLabel: 'support@cheatsapex.com',
        href: 'mailto:support@cheatsapex.com',
      },
      {
        icon: 'navFaq',
        title: 'SSS',
        desc: 'Uyumluluk, ban ve kurulum yanıtları.',
        linkLabel: 'SSS’yi gör',
        href: '/faq/',
      },
      {
        icon: 'clock',
        title: 'Discord',
        desc: 'Destek 24/7 online.',
        linkLabel: 'Discord’a katıl',
        href: DISCORD_URL,
      },
    ],
    ticketTitle: 'Ticket’a ekleyin',
    ticketItems: [
      { title: 'Sipariş e-postası', desc: 'cheatsapex.com’da ödemede kullandığınız e-posta.' },
      { title: 'Platform', desc: 'Windows 10 veya 11, EA Launcher ve Apex sürümünüz.' },
      { title: 'Hata ayrıntısı', desc: 'Loader veya EA’dan ekran görüntüsü ya da birebir metin.' },
    ],
  },
  faq: {
    eyebrow: 'SSS',
    title: 'Apex Cheats SSS',
    subtitle:
      'Elite ESP ve aimbot, HWID Spoofer, UGC, Skin Changer ve EA Javelin durumu — ana sayfa ve bu sayfadaki aynı yanıtlar.',
    items: [
      {
        num: '01',
        q: 'Apex cheat’lerinin online olup olmadığını nereden kontrol ederim?',
        a: 'Canlı durum banner’ı cheatsapex.com’da ve Discord #status kanalında. Apex, EA Javelin veya sezon güncellemesinden sonra her zaman kontrol edin.',
      },
      {
        num: '02',
        q: 'Apex Legends cheat’leri EA Javelin Anticheat ile çalışır mı?',
        a: 'Apex Legends PC’de EA Javelin kullanır. Özel Apex Cheats build’leri yamalardan sonra yeniden test edilir — Ranked öncesi durum banner’ını doğrulayın.',
      },
      {
        num: '03',
        q: 'Satın aldıktan sonra ne olur?',
        a: 'Portal, güvenli ödemeniz üzerinden loader, kurulum rehberi ve config kitaplığını açar. Apex’i başlatmadan önce rehberi izleyin.',
      },
      {
        num: '04',
        q: 'Hangi platformlar destekleniyor?',
        a: 'Yalnızca Windows 10/11 64-bit üzerinde EA App ile Apex. macOS ve Linux desteklenmez.',
      },
      {
        num: '05',
        q: 'Lisansımı yeni bir PC’ye taşıyabilir miyim?',
        a: 'Evet — portalda HWID sıfırlama kullanın veya Discord ticket açın. Limitler ürününüze bağlıdır.',
      },
      {
        num: '06',
        q: 'Ürünler ve araçlar nerede listeleniyor?',
        a: 'Apex Elite, HWID Spoofer, UGC ve Skin Changer cheatsapex.com/products/apex-cheats’te özellik listeleri ve partner üzerinden ödeme ile yer alır.',
      },
    ],
  },
  footer: {
    tagline: 'PC için Apex cheatleri: aimbot, ESP, wallhack ve araçlar.',
    explore: 'Keşfet',
    exploreLinks: [
      { href: '/', label: 'Özellik özeti', ariaLabel: 'Özellikler', scrollTarget: 'features' },
      { href: '/products/apex-cheats/apex-elite/', label: 'Elite hileler', ariaLabel: 'Elite' },
      { href: '/products/apex-cheats/', label: 'Ürünler ve araçlar', ariaLabel: 'Ürünler' },
      { href: '/blog/', label: 'Yama rehberleri', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'Satın alma SSS', ariaLabel: 'SSS' },
    ],
    support: 'Destek',
    legal: 'Yasal',
    privacy: 'Gizlilik',
    terms: 'Şartlar',
    about: 'Hakkında',
  },
  legalPages: {
    about: {
      title: 'Apex Cheats Hakkında | PC Aimbot ve ESP Satın Al',
      description:
        'Apex Cheats hakkında — cheatsapex.com’da PC Apex cheat’leri (aimbot, ESP, wallhack), araçlar ve rehberler.',
      sections: [
        {
          heading: 'Biz kimiz',
          paragraphs: [
            'Apex Cheats, Apex aimbot, ESP, wallhack, radar ve Skin Changer ürünleri için bir PC sitesidir. Tier karşılaştırmaları, kurulum rehberleri ve canlı durum notları yayınlarız.',
            'Oyun ve ürün adları yalnızca tanımlama içindir.',
          ],
        },
        {
          heading: 'Ne satıyoruz',
          paragraphs: [
            'Lite, Pro ve Elite Apex cheat’leri ile HWID Spoofer, Skin Changer ve UGC recovery. Blog config’ler, yama kontrolleri ve Easy Anti-Cheat güncellemelerini kapsar.',
            'Sayfalar Apex veya loader değişince güncellenir. Oynamadan önce ana sayfa durum banner’ını ve Discord #status’u kontrol edin.',
          ],
        },
        {
          heading: 'Destek',
          paragraphs: [
            'Loader hataları, uyumluluk ve ödeme soruları için Discord veya e-posta kullanın. Sipariş e-postası, EA hesabı ve Windows sürümünü ekleyin.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Gizlilik Politikası | Apex Cheats Mağazası',
      description:
        'cheatsapex.com’daki Apex cheat mağazasının analitik, çerez ve iletişim verilerini nasıl işlediği.',
      sections: [
        {
          heading: 'Topladığımız bilgiler',
          paragraphs: [
            'Etkinse Google Analytics üzerinden sayfa görüntüleme, cihaz türü, tarayıcı ve yaklaşık bölge gibi temel analitiği toplayabiliriz. Ödeme harici sayfalarda yapılır. Kart verilerini cheatsapex.com’da saklamayız.',
          ],
        },
        {
          heading: 'Verileri nasıl kullanırız',
          paragraphs: [
            'Analitik, hangi rehber ve ürün sayfalarının kullanıldığını gösterir; böylece kırık bağlantıları düzeltir ve sayfaları iyileştiririz. Destek ticket’ları, sorun kapanana kadar gönderdiğiniz e-posta ve mesajı tutar.',
          ],
        },
        {
          heading: 'Çerezler',
          paragraphs: [
            'Temel analitik çerezleri kullanırız. Tarayıcıda çerezleri engelleyebilirsiniz. Site yine de çalışır.',
          ],
        },
        {
          heading: 'Destek',
          paragraphs: [
            'Gizlilik soruları için Destek sayfasını kullanın. Satın alma ve iade kuralları Şartlar’dadır.',
          ],
        },
      ],
    },
    terms: {
      title: 'Apex Cheats Şartları | Lisans ve İadeler',
      description:
        'cheatsapex.com’da Apex cheat satın alma şartları — lisans kullanımı, teslimat, iadeler ve hesap riski.',
      sections: [
        {
          heading: 'Anlaşma',
          paragraphs: [
            'Son güncelleme: Eylül 2026. cheatsapex.com’u kullanarak veya burada listelenen bir ürünü satın alarak bu Şartlar ve Gizlilik Politikamızı kabul etmiş olursunuz.',
          ],
        },
        {
          heading: 'Ne satın alıyorsunuz',
          paragraphs: [
            'EA için portal ve Windows loader üzerinden Apex cheat tier’leri (Lite, Pro, Elite) ve araçlar (HWID Spoofer, UGC, Skin Changer / Unlock All) satıyoruz.',
            'Ürün sayfaları satın alımda nelerin dahil olduğunu listeler. Apex veya Easy Anti-Cheat güncellenince özellikler değişebilir.',
          ],
        },
        {
          heading: 'Ödeme ve teslimat',
          paragraphs: [
            'Ödeme ve lisans teslimatı harici checkout sayfalarında yapılır. cheatsapex.com kart numarası işlemez veya saklamaz.',
            'Satın alma sonrası sipariş akışındaki operatör portalını kullanarak Apex’i açmadan önce güncel loader ve kurulum rehberini indirin.',
          ],
        },
        {
          heading: 'Lisans kullanımı',
          paragraphs: [
            'Lisanslar yalnızca kişisel kullanım içindir. Loader dosyalarını, portal girişlerini veya lisans anahtarlarını paylaşmayın. HWID ve cihaz limitleri tier’inize bağlıdır ve portalda uygulanır.',
          ],
        },
        {
          heading: 'İadeler ve satın almalar',
          paragraphs: [
            'Ödeme tamamlandıktan sonra tüm satışlar kesindir. Fikir değişikliği, hesap banları, EAC cezaları veya kurulum rehberlerini yok sayma / durum banner’ı offline iken modül çalıştırma kaynaklı sorunlarda iade yapmayız.',
            'Ürün desteklenen bir kurulumda açıklandığı gibi çalışmazsa — Windows 10/11’de EA App üzerinden Apex, portaldan güncel loader ve başlarken canlı durum banner’ı online — Destek sayfasından bize ulaşın. Sipariş e-postası, Windows sürümü, Apex build’i ve loader’dan ekran görüntüsü veya birebir hata metni ekleyin.',
            'Bizim tarafımızda bir arıza doğrulandığında takdirimize bağlı olarak düzeltme, yedek erişim veya kısmi/tam iade sunabiliriz. Her talebi onaylamak zorunda değiliz.',
          ],
        },
        {
          heading: 'Kullanılabilirlik ve risk',
          paragraphs: [
            'Apex için üçüncü taraf araçlar oyun güncellemeleri ve anti-cheat sistemleriyle çakışabilir. Bu yazılımı hesap işlemleri dahil kendi riskinizle kullanırsınız.',
            'Her oturumdan önce ana sayfa durum banner’ını kontrol edin. Modüller offline veya yama sonrası uyumsuzken ranked’e girmeyin.',
          ],
        },
        {
          heading: 'Değişiklikler',
          paragraphs: [
            'Bu şartları güncelleyebiliriz. Üstteki “Son güncelleme” tarihi değişir. Değişikliklerden sonra siteyi kullanmaya devam etmek, revize şartları kabul ettiğiniz anlamına gelir.',
          ],
        },
        {
          heading: 'Destek',
          paragraphs: [
            'Şartlar, faturalama veya loader soruları için Destek sayfasındaki düğmeleri kullanın. Site verilerini nasıl işlediğimiz için Gizlilik Politikamıza da bakın.',
          ],
        },
      ],
    },
    support: {
      title: 'Apex Cheats Destek | Loader, HWID ve Ödeme',
      description:
        'cheatsapex.com’da loader kurulumu, HWID spoofing ve ödeme yardımı için Apex cheat desteği.',
    },
  },
  ui: {
    skipLink: 'Ana içeriğe geç',
    browseCheats: 'Dene',
    browseCheatsMobile: 'Ödemeye git',
    buyNow: 'Satın al',
    viewDetails: 'Detaylar',
    homeAria: 'Apex Cheats ana sayfa',
    checkoutAria: 'Ödemeyi başlat',
    discordAria: 'Apex Cheats Discord',
    menuOpen: 'Menüyü aç',
    menuClose: 'Menüyü kapat',
    themeLight: 'Açık tema',
    themeDark: 'Koyu tema',
    home: 'Ana sayfa',
  },
  productHub: {
    pricingEyebrow: 'Fiyatlandırma',
    plansTitle: 'Apex Legends cheat planları',
    plansDesc:
      'Her planda aynı modüller—player ESP, advanced aimbot, loot ESP, EAC bypass, stream proof ve isteğe bağlı Cloud-DMA / AWS.',
    modulesEyebrow: 'Modüller',
    modulesTitle: 'Neler dahil',
    modulesDesc: 'Lite, Pro ve Elite genelinde temel Apex cheat modülleri.',
    catalogEyebrow: 'Katalog',
    catalogTitle: 'Daha fazla Apex aracı',
    catalogDesc: 'Elite cheatlerin yanında HWID Spoofer, UGC recovery ve Skin Changer.',
    stepsEyebrow: 'Nasıl çalışır',
    stepsTitle: 'Ödemeden oyuna',
    stepsDesc: 'Satın alın, loaderı indirin, modülleri açın, durum online iken sıraya girin.',
    faqEyebrow: 'SSS',
    faqTitle: 'Ürün hub SSS',
    faqDesc: 'Planlar, durum ve teslimat hakkında kısa yanıtlar.',
  },
} as Partial<Translations>;
