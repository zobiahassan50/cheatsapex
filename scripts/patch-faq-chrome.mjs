import fs from 'fs';

const path = 'src/i18n/home-sections.ts';
let s = fs.readFileSync(path, 'utf8');

const blocks = {
  ru: `    faq: {
      eyebrow: 'FAQ',
      title: 'Вопросы о читах Apex',
      subtitle: 'Aimbot, ESP, баны и сетап — кратко. Полный FAQ на странице /faq/.',
    },
`,
  tr: `    faq: {
      eyebrow: 'SSS',
      title: 'Apex hile soruları',
      subtitle: 'Aimbot, ESP, ban ve kurulum — kısa yanıtlar. Tam SSS İngilizce /faq/ sayfasında.',
    },
`,
  de: `    faq: {
      eyebrow: 'FAQ',
      title: 'Fragen zu Apex-Cheats',
      subtitle: 'Aimbot, ESP, Bans und Setup — kurz. Vollständige FAQ unter /faq/.',
    },
`,
  pl: `    faq: {
      eyebrow: 'FAQ',
      title: 'Pytania o cheaty Apex',
      subtitle: 'Aimbot, ESP, bany i setup — krótko. Pełne FAQ na /faq/.',
    },
`,
  fr: `    faq: {
      eyebrow: 'FAQ',
      title: 'Questions sur les cheats Apex',
      subtitle: 'Aimbot, ESP, bans et setup — réponses courtes. FAQ complète sur /faq/.',
    },
`,
  es: `    faq: {
      eyebrow: 'FAQ',
      title: 'Preguntas sobre cheats de Apex',
      subtitle: 'Aimbot, ESP, bans y setup — respuestas cortas. FAQ completa en /faq/.',
    },
`,
};

const replacements = [
  {
    needle: `          title: 'Сохрани конфиг',
          desc: 'Когда настройки ок — сохрани пресеты BR и Ranked в облако.',
        },
      ],
    ),
  },
  tr:`,
    next: 'tr',
    loc: 'ru',
  },
  {
    needle: `          title: 'Config kaydet',
          desc: 'Ayarlar oturunca BR ve Ranked presetlerini buluta kaydedin.',
        },
      ],
    ),
  },
  de:`,
    next: 'de',
    loc: 'tr',
  },
  {
    needle: `          title: 'Config speichern',
          desc: 'Wenn es passt: BR- und Ranked-Presets in die Cloud speichern.',
        },
      ],
    ),
  },
  pl:`,
    next: 'pl',
    loc: 'de',
  },
  {
    needle: `          title: 'Zapisz config',
          desc: 'Gdy ustawienia pasują — zapisz presety BR i Ranked w chmurze.',
        },
      ],
    ),
  },
  fr:`,
    next: 'fr',
    loc: 'pl',
  },
  {
    needle: `          title: 'Sauvegarder la config',
          desc: 'Quand c’est bon, sauvegardez les presets BR et Ranked dans le cloud.',
        },
      ],
    ),
  },
  es:`,
    next: 'es',
    loc: 'fr',
  },
  {
    needle: `          title: 'Guarda tu config',
          desc: 'Cuando esté bien, guarda presets de BR y Ranked en la nube.',
        },
      ],
    ),
  },
};`,
    next: null,
    loc: 'es',
  },
];

for (const { needle, next, loc } of replacements) {
  if (!s.includes(needle)) {
    console.error('Missing needle for', loc);
    process.exit(1);
  }
  const insert = blocks[loc];
  const replacement =
    next === null
      ? needle.replace(
          `    ),
  },
};`,
          `    ),
${insert}  },
};`,
        )
      : needle.replace(
          `    ),
  },
  ${next}:`,
          `    ),
${insert}  },
  ${next}:`,
        );
  s = s.replace(needle, replacement);
}

fs.writeFileSync(path, s);
console.log('FAQ chrome patched');
