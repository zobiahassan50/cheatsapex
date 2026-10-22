import type { Translations } from './types';
import { DISCORD_URL, PRODUCT_BASE } from '../config/site';

const productBase = PRODUCT_BASE;

/** Full conversion — Spain / LATAM Spanish. */
export const es: Partial<Translations> = {
  site: {
    name: 'Apex Cheats',
    domain: 'cheatsapex.com',
    title: 'Comprar cheats de Apex | Aimbot y ESP de Apex Legends',
    description:
      'Compra cheats de Apex Legends para PC: aimbot, player ESP, loot ESP, no recoil y stream proof. Planes desde $15 / semana. Actualizado tras parches de EA Javelin.',
    discord: DISCORD_URL,
  },
  nav: [
    { href: `${productBase}`, label: 'Productos' },
    { href: '/blog/', label: 'Blog' },
    { href: '/forum/', label: 'Foro' },
    { href: '/faq/', label: 'FAQ' },
    { href: '/support/', label: 'Soporte' },
  ],
  hero: {
    status: 'Apex online',
    eyebrow: 'Cheats de Apex',
    titleLine1: 'Apex Cheats',
    titleLine2: 'Aimbot, ESP y Wallhack',
    subtitle:
      'Compra cheats de Apex para PC — aimbot, ESP, wallhack, radar y loot ESP para Battle Royale y Ranked. Actualizado tras cada parche de EAC.',
    ctaPrimary: 'Comprar cheats',
    ctaDiscord: 'Unirse a Discord',
    modesLabel: 'Modos',
    modes: ['Battle Royale', 'Ranked', 'Mixtape', 'Arenas'],
    metrics: [
      { label: 'Stream-safe', strong: 'Sí' },
      { label: 'Velocidad de parche', strong: '<24h' },
      { label: 'Usuarios', strong: '300+' },
      { label: 'Soporte', strong: '24/7' },
    ],
  },
  features: {
    eyebrow: 'Funciones del cheat',
    title: 'Módulos de cheat de Apex',
    subtitle:
      'Player ESP, aimbot avanzado, loot ESP, no recoil, stream proof, EAC bypass y Cloud-DMA / AWS — el suite en vivo de cheats de Apex Legends para PC.',
    items: [
      {
        title: 'Advanced Aimbot',
        subtitle: 'Seguimiento en combate',
        desc: 'Aimbot avanzado para Battle Royale y Ranked con no recoil para que el tracking se mantenga estable en pelea.',
        bullets: ['Advanced Aimbot', 'No Recoil', 'Presets Pubs y Ranked'],
        tags: ['apex aimbot', 'no recoil', 'ranked'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Player ESP',
        subtitle: 'Ve enemigos a través de paredes',
        desc: 'Player ESP con box, skeleton, health bar y distance para detectar squads antes de que empujen.',
        bullets: ['Player ESP', 'Box ESP y Skeleton ESP', 'Health Bar y Distance ESP'],
        tags: ['apex ESP', 'wallhack', 'player boxes'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Weapon & Loot ESP',
        subtitle: 'Armas y loot del suelo',
        desc: 'Weapon ESP y loot ESP resaltan armas útiles y loot del piso para equiparte más rápido.',
        bullets: ['Weapon ESP', 'Loot ESP', 'Rotaciones más rápidas'],
        tags: ['weapon ESP', 'loot ESP', 'POI'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
      {
        title: 'Stream Proof',
        subtitle: 'Oculta overlays en stream',
        desc: 'Tú ves ESP y aimbot en pantalla. OBS y Game Bar capturan un feed limpio del juego.',
        bullets: ['Stream Proof', 'Captura OBS-safe', 'Toggle en vivo'],
        tags: ['stream proof', 'OBS safe', 'capture hide'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'EAC Bypass',
        subtitle: 'Entrega tras parches',
        desc: 'Los builds de EAC bypass se reprueban tras actualizaciones de Apex y EA Javelin. Revisa el estado antes de lanzar.',
        bullets: ['EAC Bypass', 'Estado tras parches', 'Discord #status'],
        tags: ['eac bypass', 'javelin', 'apex anti cheat'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Cloud-DMA & AWS',
        subtitle: 'Opciones de entrega',
        desc: 'CLOUD-DMA OPTION y AWS option para jugadores que necesitan rutas de entrega alternativas listadas en el catálogo de Apex.',
        bullets: ['CLOUD-DMA OPTION', 'AWS option', '24/7 Support'],
        tags: ['apex dma cheats', 'cloud dma', 'aws'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-4',
      },
      {
        title: '24/7 Support',
        subtitle: 'Ayuda en Discord',
        desc: 'Soporte directo en Discord para setup del loader, configs y dudas post-parche.',
        bullets: ['24/7 Support', 'Guías de setup', 'Ayuda con configs'],
        tags: ['discord support', 'setup', 'loader'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-4',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Por qué nuestros cheats',
    title: 'Cheats de Apex que se mantienen online',
    subtitle:
      'La mayoría de tiendas caen tras parches de EAC y te dejan con bots. Nosotros sacamos updates del loader rápido, mantenemos defaults seguros de aimbot para Ranked y respondemos en Discord 24/7.',
    usLabel: 'Apex Cheats',
    otherLabel: 'Tienda típica',
    rows: [
      {
        title: 'Updates del loader tras parches',
        desc: 'Los builds nuevos suelen salir en horas tras una actualización de Apex o EA Javelin. Revisa Discord #status antes de hacer cola.',
      },
      {
        title: 'Defaults suaves de aimbot',
        desc: 'Smoothness, FOV y bone priority por defecto están pensados para Ranked. Puedes apretarlos después si quieres.',
      },
      {
        title: 'Soporte Discord',
        desc: 'En Discord ayudan con setup del loader, configs de armas y resets HWID. Cobertura 24/7.',
      },
      {
        title: 'Loader external + stream proof',
        desc: 'Loader external con modo OBS-safe para que los overlays no aparezcan en tu stream.',
      },
      {
        title: 'Configs en la nube',
        desc: 'Guarda ajustes de Battle Royale, Ranked y por arma, y cárgalos en otro PC.',
      },
      {
        title: 'Resets HWID',
        desc: 'Resets de hardware y traslados de licencia van por Discord. La mayoría de tiendas te bloquean en un solo PC.',
      },
    ],
    metrics: [
      {
        value: '<24h',
        title: 'Tiempo tras parche',
        desc: 'Tiempo habitual para sacar un loader tras una gran actualización de Apex o EA Javelin.',
      },
      {
        value: '24/7',
        title: 'Soporte',
        desc: 'Ayuda en Discord para setup, configs y problemas de cuenta.',
      },
      {
        value: '300+',
        title: 'Usuarios',
        desc: 'Jugadores de PC usando aimbot, ESP y herramientas en cheatsapex.com.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup',
    titleLead: 'Compra cheats. Juega en',
    titleHighlight: 'tres pasos',
    intro:
      'Compra tu cheat de Apex, descarga el loader, carga un preset y abre Apex. Discord está ahí si te atascas.',
    ctaPrimary: 'Comprar cheats',
    ctaSecondary: 'Ver FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Paso 1',
        title: 'Compra y descarga el loader',
        desc: 'Termina el checkout, abre el portal y descarga el loader de Windows más reciente.',
      },
      {
        step: 'Paso 2',
        title: 'Carga presets',
        desc: 'Ejecuta el loader, elige un preset Pubs o Ranked y ajusta aimbot y ESP.',
      },
      {
        step: 'Paso 3',
        title: 'Revisa el estado y juega',
        desc: 'Confirma que el banner de estado está online, lanza Apex en EA App y usa tu config guardada.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Plataforma',
    title: 'Windows PC',
    subtitle: 'Revisa el banner de estado tras actualizaciones de Apex antes de lanzar.',
    items: [
      'Windows 10 y 11',
      'EA Launcher',
      'Cliente de Apex',
      'Auto updater',
      'Sync de configs en la nube',
      'Soporte Discord',
      'Reset HWID',
      'Loader external',
    ],
  },
  cheats: {
    eyebrow: 'Cheat Elite',
    title: 'Cheats Apex Elite',
    subtitle:
      'Cheats de Apex Legends para PC — player ESP, aimbot avanzado, loot ESP, no recoil, stream proof, EAC bypass, Cloud-DMA y AWS. Planes: 1 semana $15 · 1 mes $35 · Lifetime $150.',
    viewAll: 'Ver detalles Elite',
    explore: 'Explorar',
    items: [
      {
        badge: 'Active',
        tier: 'Private',
        name: 'Elite',
        title: 'Apex Elite Cheats',
        desc: 'Compra cheats de Apex Legends con player ESP, aimbot avanzado, weapon ESP, loot ESP, no recoil, stream proof, EAC bypass y soporte Discord 24/7. 1 semana $15 · 1 mes $35 · Lifetime $150.',
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
    eyebrow: 'Tienda',
    title: 'Comprar cheats de Apex',
    subtitle: 'Cheats Apex Elite, HWID spoofer, recuperación UGC y Skin Changer — elige lo que necesitas.',
    viewAll: 'Ver todos los cheats',
    get: 'Comprar',
    explore: 'Explorar',
    items: [
      {
        badge: 'Available',
        category: 'Utilidad del sistema',
        title: 'Apex HWID Spoofer',
        subtitle: 'Pizarra limpia para tu PC',
        desc: 'Compra un HWID spoofer de Apex para seriales de disco, direcciones MAC e IDs de GPU — sigue la guía del portal antes de volver a lanzar cheats.',
        features: [
          'HWID Spoofer',
          'Apex Cleaner',
          'Herramientas disk serial',
          'Rotación de MAC',
          'Spoof de GPU ID',
          'Escaneo de compatibilidad',
          'Check de conflictos de driver',
          'Verificación post-spoof',
          'Guía de cold reboot',
        ],
        more: 4,
        href: `${productBase}hwid-spoofer/`,
      },
      {
        badge: 'Available',
        category: 'Recuperación de cuenta',
        title: 'Herramientas Apex UGC Unban',
        subtitle: 'Unban y control de gobernanza',
        desc: 'Compra herramientas Apex UGC para restricciones de cuenta EA, bans EAC y security holds — flujos de apelación personalizados y automatización de disputas.',
        features: [
          'Apelaciones cuenta EA',
          'Flujos de ban EAC',
          'Automatización de disputas',
          'Documentación de casos',
          'Plantillas de evidencia',
          'Panel de seguimiento',
          'Ayuda con restriction holds',
        ],
        more: 3,
        href: `${productBase}ban-appeal/`,
      },
      {
        badge: 'Available',
        category: 'Cosmético',
        title: 'Apex Skin Changer',
        subtitle: 'Desbloquea todos los cosméticos en local',
        desc: 'Compra Apex Skin Changer / Unlock All para skins de leyenda, skins de armas y heirlooms — vista previa local sin compras en la tienda EA.',
        features: [
          'Cambio de skin de leyenda',
          'Weapon skin changer',
          'Personalizador heirloom',
          'Vista previa Unlock All',
          'Vista previa sets exclusivos',
          'Exportar favoritos de loadout',
          'Solo cliente local',
        ],
        more: 7,
        href: `${productBase}unlock-all/`,
      },
    ],
  },
  blog: {
    eyebrow: 'Guías de cheats',
    title: 'Guías de cheats de Apex Legends',
    subtitle: 'Setup de aimbot, config de ESP wallhack, tips de Arenas y checks el día de parche de EAC.',
    latestTitle: 'Guías de cheats de Apex Legends',
    latestSubtitle:
      'Guías de aimbot undetected, ESP wallhack, loot ESP, estado de EA Javelin y recuperación HWID — filtra por tema abajo.',
    filterAll: 'Todos los artículos',
    sortLabel: 'Ordenar por',
    sortNewest: 'Más recientes',
    sortOldest: 'Más antiguos',
    sortShortRead: 'Lectura más corta',
    sortLongRead: 'Lectura más larga',
    emptyFilter: 'Ningún artículo coincide con este filtro.',
    viewAll: 'Ver todos los artículos',
    read: 'Leer',
    allArticles: 'Todos los artículos',
    inThisArticle: 'En este artículo',
    relatedGuides: 'Guías relacionadas',
    ourProducts: 'Nuestros productos',
    buyApexCheats: 'Comprar Apex Cheats',
    items: [
      {
        tag: 'Guías',
        title: 'Mejores cheats y hacks de Apex Legends 2026: Aimbot, ESP y Wallhack',
        slug: 'best-cheats',
        image: '/images/blog/best-apex-legends-cheats-2026.png',
        desc: 'Compara los mejores cheats de Apex Legends en 2026 — aimbot undetected, ESP wallhack, loot ESP y herramientas HWID hechas para EA Javelin en PC.',
        date: '19 oct 2026',
        readTime: '14 min de lectura',
      },
      {
        tag: 'Setup',
        title: 'Guía del aimbot undetected de Apex Legends para Ranked en PC (2026)',
        slug: 'apex-aimbot',
        image: '/images/blog/undetected-apex-legends-aimbot.png',
        desc: 'Configura un aimbot undetected de Apex Legends para Ranked — smoothness, FOV, bone priority y perfiles por arma tras EA Javelin.',
        date: '8 sep 2026',
        readTime: '12 min de lectura',
      },
      {
        tag: 'Setup',
        title: 'Guía ESP Wallhack Apex Legends 2026: Player, Glow y Distance',
        slug: 'esp-wallhack',
        image: '/images/blog/apex-legends-esp-wallhack-2026.png',
        desc: 'Guía ESP wallhack de Apex Legends 2026 — cajas de jugadores, glow, salud, distancia y loot ESP ajustados para Ranked y Battle Royale.',
        date: '14 ago 2026',
        readTime: '13 min de lectura',
      },
      {
        tag: 'Actualizaciones',
        title: 'EA Javelin Anticheat en Apex Legends: estado de cheats y updates',
        slug: 'ea-javelin',
        image: '/images/blog/ea-javelin-anticheat-apex-cheats.png',
        desc: 'EA Javelin Anticheat reemplazó a EAC en Apex Legends PC. Cómo funcionan el estado de los cheats, los días de parche y los bans HWID en 2026.',
        date: '22 jul 2026',
        readTime: '11 min de lectura',
      },
      {
        tag: 'Productos',
        title: 'HWID Spoofer de Apex Legends para bans de EA Javelin (2026)',
        slug: 'hwid-guide',
        image: '/images/blog/apex-legends-hwid-spoofer-javelin.png',
        desc: 'Guía del HWID spoofer de Apex Legends para bans de hardware de EA Javelin — cuándo spoofear, cuándo cuenta nueva y cómo comprobar el estado.',
        date: '30 jun 2026',
        readTime: '9 min de lectura',
      },
      {
        tag: 'Setup',
        title: 'Cómo comprar cheats de Apex undetected en 2026 (checkout seguro)',
        slug: 'buy-cheats',
        image: '/images/blog/buy-undetected-apex-cheats.png',
        desc: 'Cómo comprar cheats undetected de Apex Legends en 2026 — elige un tier, verifica el estado de EA Javelin y completa el checkout seguro.',
        date: '5 jun 2026',
        readTime: '8 min de lectura',
      },
      {
        tag: 'Guías',
        title: '¿Son seguros los cheats de Apex Legends en 2026? Detección, bans y riesgo',
        slug: 'cheat-safety',
        image: '/images/blog/are-apex-legends-cheats-safe-2026.png',
        desc: '¿Son seguros los cheats de Apex Legends en 2026? Cómo funcionan de verdad la detección de EA Javelin, las oleadas de bans y las promesas de «undetected».',
        date: '12 may 2026',
        readTime: '7 min de lectura',
      },
      {
        tag: 'Funciones',
        title: 'Funciones de los cheats de Apex: aimbot, bots, ESP wallhack y más',
        slug: 'cheat-features',
        image: '/images/blog/apex-cheats-features-guide.png',
        desc: 'Guía completa de nuestros cheats de Apex — Aimbot, Loot Assist, Skin Changer, Radar Hack, ESP Wallhack y Auto Shield Break.',
        date: '18 abr 2026',
        readTime: '5 min de lectura',
      },
      {
        tag: 'Guías',
        title: 'Apex Lite vs Pro: qué tier te encaja',
        slug: 'elite-guide',
        image: '/images/blog/apex-lite-vs-pro.png',
        desc: 'Conciencia de mapa vs automatización de aimbot — compara cheats Apex Lite y Pro para Battle Royale y Ranked.',
        date: '27 mar 2026',
        readTime: '10 min de lectura',
      },
      {
        tag: 'Guías',
        title: 'Guía Apex Skin Changer / Unlock All',
        slug: 'skin-guide',
        image: '/images/blog/apex-skin-changer-guide.png',
        desc: 'Previsualiza en local skins de leyenda, skins de armas y sets exclusivos con nuestro módulo Unlock All Skin Changer.',
        date: '3 mar 2026',
        readTime: '6 min de lectura',
      },
      {
        tag: 'Guías',
        title: 'Guía del cheat external de Apex',
        slug: 'external-cheat',
        image: '/images/blog/apex-external-cheat-guide.png',
        desc: 'Por qué importan los cheats external de Apex, cómo funciona el loader external en PC y qué hace que el software privado sea más seguro que las herramientas gratuitas.',
        date: '11 feb 2026',
        readTime: '16 min de lectura',
      },
    ],
  },
  toolkit: {
    eyebrow: 'Menú del cheat',
    title: 'Menú de cheat de Apex, organizado',
    subtitle:
      'Cada módulo está agrupado para que puedas afinar aimbot y ESP a mitad de partida sin bucear en el caos.',
    items: [
      {
        num: '01',
        label: 'Aimbot',
        title: 'Tracking que se adapta por arma',
        desc: 'Smoothness, FOV, Sticky Aim y Bone Priority en una sola pestaña de aimbot.',
      },
      {
        num: '02',
        label: 'ESP',
        title: 'Wallhack que se mantiene legible',
        desc: 'Cajas, skeletons, distancia, salud y filtros de color de equipo.',
      },
      {
        num: '03',
        label: 'Radar',
        title: 'Loot y rotaciones bajo control',
        desc: 'Puntos enemigos, timers de loot y mini-radar en un overlay compacto.',
      },
      {
        num: '04',
        label: 'Weapons',
        title: 'Perfiles de aimbot por arma',
        desc: 'Guarda presets AR, SMG, shotgun y sniper y cámbialos con hotkeys.',
      },
      {
        num: '05',
        label: 'Loot',
        title: 'Chest ESP y loot assist',
        desc: 'Resaltados de cofres, drops raros y pathing loot-assist Elite.',
      },
      {
        num: '06',
        label: 'Profiles',
        title: 'Configs para cada modo',
        desc: 'Presets de Battle Royale, Ranked y Arenas con backup en la nube.',
      },
    ],
  },
  workflow: {
    eyebrow: 'Cómo funciona',
    badge: '4 pasos',
    titleBefore: 'De la compra a los',
    titleHighlight: 'cheats in-game.',
    subtitle: 'Compra cheats de Apex, descarga el loader, activa módulos y guarda tu config para la siguiente partida.',
    ctaLabel: 'Comprar cheats',
    ctaHref: productBase,
    ctaSecondary: 'FAQ de setup',
    ctaSecondaryHref: '/faq/',
    items: [
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
        desc: 'Elige Lite, Pro o Elite según los módulos que necesites.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Abre y configura',
        desc: 'Descarga desde el portal, activa módulos y prueba en Arenas o bot lobby.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Guarda tu config',
        desc: 'Cuando los ajustes encajen, guarda presets de Battle Royale y Ranked en la nube.',
      },
    ],
  },
  fieldNotes: {
    eyebrow: 'Notas',
    title: 'Consejos rápidos',
    items: [
      {
        num: '01',
        title: 'Tras parches',
        desc: 'Revisa Discord y el estado del portal antes de hacer cola Ranked tras una actualización de Apex.',
      },
      {
        num: '02',
        title: 'Empieza despacio',
        desc: 'Usa primero el smoothness de aimbot y el rango ESP por defecto; súbelos después si hace falta.',
      },
      {
        num: '03',
        title: 'Ayuda Discord',
        desc: '¿Atascado con el loader o las configs? Pregunta en Discord y alguien te guía.',
      },
    ],
  },
  support: {
    eyebrow: 'Soporte',
    title: 'Soporte Apex Cheats',
    subtitle:
      'Ayuda con loader, HWID Spoofer, checkout, licencia y cuenta para Elite ESP y aimbot en PC Windows.',
    channels: [
      {
        icon: 'users',
        title: 'Antes de comprar',
        desc: 'Diferencias de tiers (Lite / Pro / Elite), qué incluyen ESP y aimbot y qué utilidades combinar con el plan.',
      },
      {
        icon: 'headphones',
        title: 'Soporte por e-mail',
        desc: 'Escribe a support@cheatsapex.com por errores de loader, HWID Spoofer, traslado de licencia y recibos.',
      },
      {
        icon: 'navFaq',
        title: 'Respuestas FAQ',
        desc: 'Compatibilidad con EA Javelin, bans, Ranked, stream proof y setup están en la página FAQ.',
      },
      {
        icon: 'messageCircle',
        title: 'Ayuda en Discord',
        desc: 'Estado en vivo, notas de parche y ayuda 24/7 en Discord—ideal para loader urgente o post-update.',
      },
      {
        icon: 'settings',
        title: 'Loader y setup',
        desc: 'Primer arranque, exclusiones de Defender, conflictos con EA App y perfiles BR o Ranked.',
      },
      {
        icon: 'shield',
        title: 'HWID y seguridad',
        desc: 'Cuándo usar el HWID Spoofer, cómo se ve un ban de hardware y cómo retesteamos tras parches Javelin.',
      },
    ],
    helpTitle: 'En qué podemos ayudar',
    helpItems: [
      {
        title: 'Checkout y entrega',
        desc: 'Sin acceso al portal, pago pendiente o licencia que no se desbloquea tras la compra.',
      },
      {
        title: 'El loader no arranca',
        desc: 'Crash al abrir, cuarentena del antivirus, falta VC++ o error “ya en ejecución”.',
      },
      {
        title: 'Configs de ESP / aimbot',
        desc: 'Smoothness, FOV, huesos, filtros de loot ESP y overlays stream-proof.',
      },
      {
        title: 'Tras un update de Apex',
        desc: 'Confirma Undetected / Updating antes de Ranked; retesteamos Elite tras cada parche.',
      },
      {
        title: 'UGC y Skin Changer',
        desc: 'Desbloqueo de utilidades, orden con Elite y qué enviar si las skins no aplican.',
      },
      {
        title: 'Cuenta y licencia',
        desc: 'Mover la licencia a un PC nuevo, límites de HWID y recuperar acceso con el e-mail del pedido.',
      },
    ],
    ticketTitle: 'Incluye en tu ticket',
    ticketItems: [
      { title: 'E-mail del pedido', desc: 'El e-mail que usaste en el checkout de cheatsapex.com.' },
      { title: 'ID de pedido o recibo', desc: 'ID de pago, número de factura o captura del e-mail de confirmación.' },
      { title: 'Plataforma', desc: 'Windows 10 u 11 (64 bits), EA App o Steam y versión del cliente Apex.' },
      { title: 'Producto y plan', desc: 'Elite / Pro / Lite, HWID Spoofer, UGC o Skin Changer—y si es Ranked o pubs.' },
      { title: 'Detalle del error', desc: 'Captura o texto exacto del loader, portal o mensaje EA / Javelin.' },
      { title: 'Pasos ya probados', desc: 'Pausa del antivirus, ejecución como admin, reinicio limpio o #status en Discord tras el parche.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'FAQ de Apex Cheats',
    subtitle:
      'Elite ESP y aimbot, HWID Spoofer, UGC, Skin Changer y estado de EA Javelin — las mismas respuestas en la homepage y esta página.',
    items: [
      {
        num: '01',
        q: '¿Dónde compruebo si los cheats de Apex están online?',
        a: 'El banner de estado en vivo está en cheatsapex.com y en el canal Discord #status. Comprueba siempre tras una actualización de Apex, EA Javelin o temporada.',
      },
      {
        num: '02',
        q: '¿Los cheats de Apex Legends funcionan con EA Javelin Anticheat?',
        a: 'Apex Legends en PC usa EA Javelin. Los builds privados de Apex Cheats se reprueban tras parches — confirma el banner de estado antes de Ranked.',
      },
      {
        num: '03',
        q: '¿Qué pasa después de comprar?',
        a: 'Tu portal desbloquea el loader, la guía de setup y la biblioteca de configs mediante nuestro checkout seguro. Sigue la guía antes de lanzar Apex.',
      },
      {
        num: '04',
        q: '¿Qué plataformas están soportadas?',
        a: 'Apex vía EA App en Windows 10/11 de 64 bits únicamente. macOS y Linux no están soportados.',
      },
      {
        num: '05',
        q: '¿Puedo mover mi licencia a un PC nuevo?',
        a: 'Sí — usa el reset HWID en tu portal o abre un ticket en Discord. Los límites dependen de tu producto.',
      },
      {
        num: '06',
        q: '¿Dónde están listados productos y utilidades?',
        a: 'Apex Elite, HWID Spoofer, UGC y Skin Changer están en cheatsapex.com/products/apex-cheats con listas de funciones y checkout vía nuestro partner.',
      },
    ],
  },
  footer: {
    tagline: 'Cheats de Apex para PC: aimbot, ESP, wallhack y herramientas.',
    explore: 'Explorar',
    exploreLinks: [
      { href: '/', label: 'Resumen de funciones', ariaLabel: 'Funciones', scrollTarget: 'features' },
      { href: '/products/apex-cheats/apex-elite/', label: 'Cheats Apex Elite', ariaLabel: 'Cheats Elite' },
      { href: '/products/apex-cheats/', label: 'Todos los productos y utilidades', ariaLabel: 'Productos' },
      { href: '/blog/', label: 'Leer guías de parche', ariaLabel: 'Blog' },
      { href: '/faq/', label: 'FAQ precompra', ariaLabel: 'FAQ' },
    ],
    support: 'Soporte',
    legal: 'Legal',
    privacy: 'Política de privacidad',
    terms: 'Términos y condiciones',
    about: 'Acerca de',
  },
  legalPages: {
    about: {
      title: 'Acerca de Apex Cheats | Comprar Aimbot y ESP para PC',
      description:
        'Acerca de Apex Cheats — compra cheats de Apex para PC (aimbot, ESP, wallhack), utilidades y guías en cheatsapex.com.',
      sections: [
        {
          heading: 'Quiénes somos',
          paragraphs: [
            'Apex Cheats es un sitio para PC con productos de Apex: aimbot, ESP, wallhack, radar y Skin Changer. Publicamos comparativas de tiers, guías de setup y notas de estado en vivo.',
            'Los nombres de juegos y productos son solo para identificación.',
          ],
        },
        {
          heading: 'Qué vendemos',
          paragraphs: [
            'Cheats Apex Lite, Pro y Elite, más HWID Spoofer, Skin Changer y recuperación UGC. El blog cubre configs, checks de parche y actualizaciones de Easy Anti-Cheat.',
            'Las páginas se actualizan cuando cambian Apex o el loader. Revisa el banner de estado de la homepage y Discord #status antes de jugar.',
          ],
        },
        {
          heading: 'Soporte',
          paragraphs: [
            'Usa Discord o e-mail para errores de loader, compatibilidad y checkout. Incluye el e-mail del pedido, cuenta EA y versión de Windows.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Política de privacidad | Tienda Apex Cheats',
      description:
        'Cómo la tienda de cheats de Apex en cheatsapex.com trata analytics, cookies y datos de contacto.',
      sections: [
        {
          heading: 'Información que recopilamos',
          paragraphs: [
            'Podemos recopilar analytics básicos como vistas de página, tipo de dispositivo, navegador y región aproximada mediante Google Analytics cuando está activado. El checkout se realiza en páginas externas. No almacenamos datos de tarjetas de pago en cheatsapex.com.',
          ],
        },
        {
          heading: 'Cómo usamos los datos',
          paragraphs: [
            'Los analytics muestran qué guías y páginas de producto se usan para corregir enlaces rotos y mejorar páginas. Los tickets de soporte conservan el e-mail y el mensaje hasta cerrar el caso.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'Usamos cookies básicas de analytics. Puedes bloquearlas en el navegador. El sitio sigue funcionando sin ellas.',
          ],
        },
        {
          heading: 'Soporte',
          paragraphs: [
            'Para preguntas de privacidad, usa la página de Soporte. Las reglas de compra y reembolso están en Términos y condiciones.',
          ],
        },
      ],
    },
    terms: {
      title: 'Términos de Apex Cheats | Licencia y reembolsos',
      description:
        'Términos para comprar cheats de Apex en cheatsapex.com — uso de licencia, entrega, reembolsos y riesgo de cuenta.',
      sections: [
        {
          heading: 'Acuerdo',
          paragraphs: [
            'Última actualización: septiembre 2026. Al usar cheatsapex.com o comprar un producto listado aquí, aceptas estos Términos y condiciones y nuestra Política de privacidad.',
          ],
        },
        {
          heading: 'Qué compras',
          paragraphs: [
            'Vendemos tiers de cheats de Apex (Lite, Pro, Elite) y herramientas (HWID Spoofer, UGC, Skin Changer / Unlock All) mediante un portal y un loader de Windows para EA.',
            'Las páginas de producto listan qué se incluye al comprar. Las funciones pueden cambiar cuando se actualizan Apex o Easy Anti-Cheat.',
          ],
        },
        {
          heading: 'Checkout y entrega',
          paragraphs: [
            'El pago y la entrega de licencia se realizan en páginas de checkout externas. cheatsapex.com no procesa ni almacena números de tarjeta.',
            'Tras la compra, usa el portal del operador enlazado en el flujo del pedido para descargar el loader actual y la guía de setup antes de lanzar Apex.',
          ],
        },
        {
          heading: 'Uso de la licencia',
          paragraphs: [
            'Las licencias son solo para uso personal. No compartas archivos del loader, accesos al portal ni claves de licencia. Los límites de HWID y dispositivos dependen de tu tier y se aplican en el portal.',
          ],
        },
        {
          heading: 'Reembolsos y compras',
          paragraphs: [
            'Todas las ventas son finales una vez completado el checkout. No reembolsamos cambios de opinión, bans de cuenta, sanciones EAC ni problemas causados por ignorar guías de setup o ejecutar módulos mientras el banner de estado muestra offline.',
            'Si el producto no funciona como se describe en un setup soportado — Apex en EA App en Windows 10/11, loader actual del portal y banner en vivo online al iniciar — contáctanos por la página de Soporte. Incluye el e-mail del pedido, versión de Windows, build de Apex y capturas o texto exacto de error del loader.',
            'Podemos, a nuestra discreción, ofrecer una corrección, acceso de reemplazo o reembolso parcial/total cuando confirmemos una falla de nuestra parte. No estamos obligados a aprobar cada solicitud.',
          ],
        },
        {
          heading: 'Disponibilidad y riesgo',
          paragraphs: [
            'Las herramientas de terceros para Apex pueden entrar en conflicto con actualizaciones del juego y sistemas anticheat. Usas este software bajo tu propio riesgo, incluida posible acción sobre la cuenta.',
            'Revisa el banner de estado de la homepage antes de cada sesión. No hagas cola ranked mientras los módulos estén offline o desalineados tras un parche.',
          ],
        },
        {
          heading: 'Cambios',
          paragraphs: [
            'Podemos actualizar estos términos. La fecha «Última actualización» de arriba cambiará entonces. Seguir usando el sitio tras los cambios significa que aceptas los términos revisados.',
          ],
        },
        {
          heading: 'Soporte',
          paragraphs: [
            'Para preguntas de términos, facturación o loader, usa los botones de la página de Soporte. Consulta también nuestra Política de privacidad sobre el tratamiento de datos del sitio.',
          ],
        },
      ],
    },
    support: {
      title: 'Soporte Apex Cheats | Loader, HWID y Checkout',
      description:
        'Soporte de cheats de Apex para setup del loader, spoofing HWID y ayuda de checkout en cheatsapex.com.',
    },
  },
  ui: {
    skipLink: 'Saltar al contenido principal',
    browseCheats: 'Probar',
    browseCheatsMobile: 'Ir al pago',
    buyNow: 'Comprar ahora',
    viewDetails: 'Ver detalles',
    homeAria: 'Inicio Apex Cheats',
    checkoutAria: 'Iniciar checkout',
    discordAria: 'Unirse a Apex Cheats en Discord',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    themeLight: 'Cambiar a modo claro',
    themeDark: 'Cambiar a modo oscuro',
    home: 'Inicio',
  },
  productHub: {
    pricingEyebrow: 'Precios',
    plansTitle: 'Planes de cheats de Apex Legends',
    plansDesc:
      'Los mismos módulos en cada plan—player ESP, aimbot avanzado, loot ESP, EAC bypass, stream proof y Cloud-DMA / AWS opcional.',
    modulesEyebrow: 'Módulos',
    modulesTitle: 'Qué incluye',
    modulesDesc: 'Módulos principales de cheats de Apex en Lite, Pro y Elite.',
    catalogEyebrow: 'Catálogo',
    catalogTitle: 'Más herramientas de Apex',
    catalogDesc: 'HWID Spoofer, recuperación UGC y Skin Changer junto a cheats Elite.',
    stepsEyebrow: 'Cómo funciona',
    stepsTitle: 'Del checkout a la partida',
    stepsDesc: 'Compra, descarga el loader, activa los módulos y haz cola cuando el estado esté online.',
    faqEyebrow: 'FAQ',
    faqTitle: 'FAQ del hub de productos',
    faqDesc: 'Respuestas rápidas sobre planes, estado y entrega.',
  },
} as Partial<Translations>;
