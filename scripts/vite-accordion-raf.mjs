/**
 * Use pre-measured accordion panel height when present (see Accordion.astro)
 * so scrollHeight is not read after Starwind invalidates styles.
 */
export function accordionRafPlugin() {
  return {
    name: 'accordion-raf-scrollheight',
    transform(code, id) {
      if (!id.includes('@starwind-ui') && !id.includes('starwind-ui')) return null;
      if (code.includes('/* accordion-raf */')) return null;

      const pattern =
        /panel\.style\.setProperty\(heightProperty,\s*`\$\{panel\.scrollHeight\}px`\);/;
      if (!pattern.test(code)) return null;

      const next = code.replace(
        pattern,
        '/* accordion-raf */panel.style.setProperty(heightProperty, `${panel.__swPanelH ?? panel.scrollHeight}px`);',
      );

      return { code: next, map: null };
    },
  };
}
