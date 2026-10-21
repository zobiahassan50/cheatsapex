import fs from 'node:fs';

const files = [
  'src/components/FeaturesSection.astro',
  'src/components/WhySetupSection.astro',
  'src/components/ContentSections.astro',
  'src/components/WorkflowSection.astro',
  'src/components/CheatsSection.astro',
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) continue;

  const front = match[1]
    .replace(
      /import \{ DEFAULT_LOCALE, getLocaleFromPathname, useTranslations \} from ['"]\.\.\/i18n['"];?\n*/g,
      '',
    )
    .replace(
      /const locale = Astro\.locals\.locale \?\? getLocaleFromPathname\(Astro\.url\.pathname\) \?\? DEFAULT_LOCALE;\nconst t = useTranslations\(locale\);\n*/g,
      '',
    );

  const lines = front.split('\n');
  const imports = lines.filter((line) => line.startsWith('import '));
  const rest = lines.filter((line) => !line.startsWith('import '));

  const rebuilt = [
    "import { DEFAULT_LOCALE, getLocaleFromPathname, useTranslations } from '../i18n';",
    ...imports.filter((line) => !line.includes("../i18n")),
    '',
    'const locale = Astro.locals.locale ?? getLocaleFromPathname(Astro.url.pathname) ?? DEFAULT_LOCALE;',
    'const t = useTranslations(locale);',
    ...rest,
  ]
    .join('\n')
    .replace(/\n{3,}/g, '\n\n');

  content = content.replace(match[0], `---\n${rebuilt}\n---`);
  fs.writeFileSync(file, content);
  console.log('fixed', file);
}
